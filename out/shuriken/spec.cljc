(ns shuriken.spec
  (:require [clojure.spec.alpha   :as    s]
            [clojure.pprint       :refer [pprint]]
            [net.cgrand.macrovich :as    macrov])
  #?(:cljs (:require-macros [shuriken.spec :refer [either]])))

;; TODO: document

(defn conf
  ([form f]     (conf form f identity))
  ([form f unf] (s/& form (s/conformer f unf))))

(defmacro either [& args]
  (let [cases (apply array-map args)]
    `(conf
       (s/alt ~@(->> (dissoc cases :unform)
                     (apply concat)))
       (fn [x#]
         (if (instance? ~(macrov/case :clj 'clojure.lang.IObj :cljs 'IWithMeta) x#)
           (vary-meta (val x#) (fnil assoc {}) ::source-either-case (key x#))
           (val x#)))

       (fn [x#]
         (let [original-case# (-> x# meta ::source-either-case)
               unform# ~(:unform cases)
               ex# (fn [incipit#]
                     (new ~(macrov/case :clj `Exception :cljs 'js/Error)
                          (str incipit# " in 'either' statement:\n"
                               ~(with-out-str (pprint cases))
                               "unforming value\n"
                               (with-out-str (pprint x#)))))]
           (cond
             original-case#     [original-case# x#]
             (keyword? unform#) [unform# x#]
             (ifn? unform#)     [(unform# x#) x#]
             (nil? unform#)     (throw (ex# "Missing unform statement"))
             :else              (throw (ex# "Invalid unform statement"))))))))

(defn conform! [spec value]
  (let [result (s/conform spec value)]
    (when (= result ::s/invalid)
      (throw (let [^String msg (binding [*print-level* 7
                                         *print-namespace-maps* false]
                                 (str \newline
                                      (with-out-str (->> (s/explain-data spec value)
                                                         (mapv (fn [[k v]]
                                                                 [(-> k name keyword) v]))
                                                         (into {})
                                                         pprint))))]
               #?(:clj  (Exception. msg)
                  :cljs (js/Error   msg)))))
    result))

(s/def ::args+body
  (s/cat :args vector?
         :body (conf (s/* any?)
                     #(apply list %) vec)))

(s/def ::args+bodies
  (either
    :arity-1 (conf ::args+body
                   (comp vector #(assoc % :single-body true))
                   first)
    :arity-n (s/+ (s/and seq? ::args+body))
    :unform  (fn [x]
               (if (= (count x) 1)
                 :arity-1
                 :arity-n))))

;; TODO: rename doc-string to docstring (as it appears in (doc defn))
(s/def ::defn-form
  (s/cat
    :op         symbol?
    :name       symbol?
    :doc-string (s/? string?)
    :attr-map   (s/? map?)
    :bodies     ::args+bodies))

(s/def ::fn-form
  (s/cat
    :op symbol?
    :name (s/? symbol?)
    :bodies ::args+bodies))

(s/def ::letfn-spec
  (s/cat
    :name symbol?
    :bodies ::args+bodies))

(s/def ::letfn-specs
  (s/* (s/and seq? ::letfn-spec)))

(s/def ::reify-method
  (s/cat
    :name symbol?
    :args vector?
    :body (conf (s/* any?)
                #(apply list %) vec)))

(s/def ::reify-form
  (s/cat
    :op symbol?
    :protocol-or-interface-or-Object symbol?
    :methods (s/* (s/spec ::reify-method))))

(s/def ::deftype-method
  ::reify-method)

(s/def ::deftype-spec
  (s/cat
    :protocol-or-interface-or-Object symbol?
    :methods (s/* (s/spec ::deftype-method))))

(s/def ::deftype-form
  (s/cat
    :op symbol?
    :name symbol?
    :fields vector?
    :options (s/* keyword?)
    :specs (s/* ::deftype-spec)))
