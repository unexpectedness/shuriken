(ns shuriken.debug
  "### Pretty debugging"
  (:require [shuriken.string :refer [format-code lines join-lines tabulate truncate]]
            [clojure.string  :as    str])
  #?(:cljs (:require-macros shuriken.debug)))

(defn ^:no-doc debug-print [label result]
  (let [label-length (+ 1 (count label)) ;; accomodating ":"
        result-str (binding [*print-length* 10]
                     (format-code result))
        [f & more] (lines result-str)
        tabs (apply str (repeat label-length " "))]
    (if (empty? more)
      (println (str label ": " f))
      (do (print (str label ": " f))
          (print \newline)
          (println (tabulate (join-lines more)
                             tabs))))
    result))

(defmacro debug
  "Evaluates and prints a debug statement for each form.
  Returns the value of the last.

  ```clojure
  (debug (+ 1 2)
         (- 3 4))
  ; (+ 1 2): 3
  ; (- 3 4): -1
  => -1
  ```"
  [& forms]
  (when (seq forms)
    (let [v-sym (gensym "v-")
          bindings (vec (mapcat (fn [expr]
                                  `[~v-sym
                                    (let [result# ~expr
                                          label# ~(-> expr format-code
                                                      (clojure.string/replace
                                                        \newline \space)
                                                      (truncate 32))]
                                      (debug-print label# result#))])
                                forms))]
      `(let ~bindings
         ~v-sym))))

(def ^:dynamic *tab-depth* -1)

(def original-println println)

(defn println-tabs [& args]
  (original-println (apply str (concat (repeat *tab-depth* "  ")
                                       (interpose " " args)))))

(defmacro with-tabs [& body]
  `(binding [*tab-depth* (inc *tab-depth*)]
     (with-redefs [println println-tabs]
       ~@body)))
