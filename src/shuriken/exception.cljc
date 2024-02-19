(ns shuriken.exception
  "### Macros to deal with exceptions"
  (:require [shuriken.associative :refer [submap?]]
            [net.cgrand.macrovich :as    macrov])
  #?(:cljs (:require-macros shuriken.exception))
  #?(:clj (:import [clojure.lang ExceptionInfo])))

(defn ^:no-doc regex? [x]
  (instance? #?(:clj  java.util.regex.Pattern
                :cljs js/RegExp)
             x))

(defn ^:no-doc catch-it-matches? [^Throwable e pattern]
  (cond
    #?(:clj (class?  pattern) :cljs (isa? js/Error pattern))
    (instance? pattern e)

    (map?    pattern)  (and (instance? ExceptionInfo e)
                            (submap? pattern (ex-data e)))
    (string? pattern) (= pattern #?(:clj  (.getMessage e)
                                    :cljs (.-message   e)))
    (coll?   pattern) (some (partial catch-it-matches? e) pattern)
    (ifn?    pattern) (pattern e)
    (regex?  pattern) (re-find pattern #?(:clj  (.getMessage e)
                                          :cljs (.-message   e)))
    :else             (throw (new #?(:clj  IllegalArgumentException
                                     :cljs js/Error)
                                  "Invalid pattern clause"))))

(defmacro catch-it
  ([substitute-f pattern expr]
   (let [z `(let [pattern# ~pattern]
              (try
                ~expr
                (catch ~(macrov/case :clj `Throwable :cljs 'js/Error) t#
                  (if (catch-it-matches? t# pattern#)
                    (~substitute-f t#)
                    (throw t#)))))]
     z)))

(defmacro silence
  "Returns `substitute` if `expr` raises an exception that matches
  `pattern`.
  If not provided, `substitute` is `nil`.
  `pattern` can be:
    - a function
    - a class
    - a string
    - a regex pattern (used via `re-find`)
    - a map (matches if it's a submap of an ExceptionInfo's data)
    - or a sequence of such elements.

  ```clojure
  (silence ArithmeticException (/ 1 0))
  => nil

  (silence \"Divide by zero\" (/ 1 0))
  => nil

  (silence #\"zero\" (/ 1 0))
  => nil

  (silence [ArithmeticException]
    (do (println \"watch out !\")
        (/ 1 0)))
  ;; watch out !
  => nil

  (silence :substitute
           (fn [x]
             (isa? (class x) ArithmeticException))
           (/ 1 0))
  => :substitute
  ```"
  ([pattern expr]
   `(silence nil ~pattern ~expr))
  ([substitute pattern expr]
   `(catch-it (constantly ~substitute) ~pattern ~expr)))

(defmacro thrown?
  "Returns true if `expr` raises an exception matching `pattern`.
  See [[silence]] for the semantics of `pattern`.

  ```clojure
  (thrown? ArithmeticException (/ 1 0))
  => true

  (thrown? #{ArithmeticException} (/ 1 1))
  => false

  (thrown? (fn [x]
             (isa? (class x) ArithmeticException))
           (throw (IllegalArgumentException. \"my-error\")))
  ;; raises:
  ;;   IllegalArgumentException my-error
  ```"
  [pattern expr]
  `(= ::thrown!
      (silence ::thrown! ~pattern ~expr)))

(defmacro capturex
  "Gently returns exceptions matching `pattern` when they are raised instead
  of propagating them upwards."
  [pattern expr]
  `(catch-it identity ~pattern ~expr))
