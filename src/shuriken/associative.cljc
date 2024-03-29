(ns shuriken.associative
  "### Operations on associative structures"
  (:require [clojure.set :as set])
  #?(:cljs (:require-macros shuriken.associative)))

(defn- into-empty [m vs]
  (let [result (into (empty m) vs)]
    (if (seq? m)
      (reverse result)
      result)))

(defn map-keys
  "Applies `f` to each key of `m`."
  [f m]
  (->> m
       (map (fn [[k v]]
              [(f k) v]))
       (into-empty m)))

(defn map-vals
  "Applies `f` to each value of `m`."
  [f m]
  (->> m
       (map (fn [[k v]]
              [k (f v)]))
       (into-empty m)))

(defn filter-keys
  "Filters `m` by applyng `f` to each key."
  [f m]
  (->> m
       (filter #(-> % first f))
       (into-empty m)))

(defn filter-vals
  "Filters `m` by applyng `f` to each value."
  [f m]
  (->> m
       (filter #(-> % second f))
       (into-empty m)))

(defn remove-keys
  "Removes `m` by applyng `f` to each key."
  [f m]
  (->> m
       (remove #(-> % first f))
       (into-empty m)))

(defn remove-vals
  "Removes `m` by applyng `f` to each value."
  [f m]
  (->> m
       (remove #(-> % second f))
       (into-empty m)))

(defn- flatten-keys* [acc ks m]
  (if (and (map? m)
           (not (empty? m)))
    (reduce into
            (map (fn [[k v]]
                   (flatten-keys* acc (conj ks k) v))
                 m))
    (assoc acc ks m)))

(defn flatten-keys
  "Transforms a nested map into a map where keys are paths through
  the original map and values are leafs these paths lead to.

  ```clojure
  (flatten-keys {:a {:b {:c :x
                         :d :y}}})
  => {[:a :b :c] :x
      [:a :b :d] :y}
  ```"
  [m]
  (if (empty? m)
    m
    (flatten-keys* {} [] m)))

(defn deflatten-keys
  "Builds a nested map out of a map obtained from [[flatten-keys]].

  ```clojure
  (deflatten-keys {[:a :b :c] :x
                   [:a :b :d] :y})
  => {:a {:b {:c :x
              :d :y}}}
  ```"
  [m & {:keys [with] :or {with #(do %2)}}]
  (reduce (fn [acc [ks v]]
            (update-in acc ks
                       (fn [x]
                         (if x
                           (if (every? map? [x v])
                             (merge-with with x v)
                             (with x v))
                           v))))
          {} m))

(defn- deep-merge* [m1f & [m2 & more]]
  (if (not m2)
    m1f
    (let [m2f (flatten-keys m2)
          m1m2f (merge m1f m2f)]
      (apply deep-merge* m1m2f (or more [])))))

(defn deep-merge
  "Deep merges two or more nested maps.

  ```clojure
  (deep-merge {:x {:a :a  :b :b  :c :c}}
              {:x {:a :aa :b :bb}}
              {:x {:a :aaa}})

  => {:x {:a :aaa  :b :bb  :c :c}}
  ```"
  [m & more]
  (deflatten-keys (apply deep-merge*
                         (flatten-keys m)
                         more)))

(defn- raise-error-index-strategy [key entries]
  (if (not= 1 (count entries))
    (throw
      (ex-info (pr-str "Can't index key " key " because of duplicate "
                       "entries " (map :name entries))
               {:type :index-by-duplicate-entries
                :entries (map :name entries)
                :key key}))
    (first entries)))

(defn index-by
  "Like `group-by` except it applies a strategy to each grouped
  collection.
  A strategy is a function with signature `(key, entries) -> entry`
  where `entry` is the one that will be indexed.
  The default strategy asserts there is only one entry for the given
  key and returns it.

  ```clojure
  (def ms [{:a 1 :b 2} {:a 3 :b 4} {:a 5 :b 4}])

  (index-by :a ms)
  => {1 {:a 1 :b 2}
      3 {:a 3 :b 4}
      5 {:a 5 :b 4}}

  (index-by :b ms)
  => ; clojure.lang.ExceptionInfo (Duplicate entries for key 4)

  (index-by :b (fn [key entries]
                 (last entries))
            ms)
  => {2 {:a 1 :b 2}
      4 {:a 5 :b 4}}
  ```"
  ([f coll]
   (index-by f raise-error-index-strategy coll))
  ([f strategy coll]
   (->> (group-by f coll)
        (map (fn [[k vs]]
               [k (strategy k vs)]))
        (into {}))))

(def unindex
  "Alias of `vals`."
  vals)

(defn plan-merge
  "Like `merge-with` except that the combination fn of a specific pair
  of entries is determined by looking up their key in `plan`. If not
  found, falls back to the function found under key `:else` or if not
  provided to a function that returns the value in the right-most map,
  thus providing the behavior of `merge`.
  In addition to a map, `plan` can also be a function accepting a key
  and returning a combination fn for the two values to merge.

  You can use [[continue|]] to combine values of a key known to hold functions
  in a cps-like style: namely, functions will be composed from right to left,
  each one being passed as first argument the next function to call in the
  chain."
  [plan & maps]
    (when (some identity maps)
      (let [merge-entry (fn [m e]
                          (let [k (key e) v (val e)]
                            (if (contains? m k)
                              (let [else-f (get plan :else #(identity %2))
                                    f (get plan k else-f)]
                                (assoc m k (f (get m k) v)))
                              (assoc m k v))))
            merge2 (fn [m1 m2]
                     (reduce merge-entry (or m1 {}) (seq m2)))]
        (reduce merge2 maps))))

;; TODO: rename in dance then remove
(def merge-with-plan plan-merge)

(defn continue|
  "Takes two functions `fa` & `fb` and returns the partial application of `fb`
  to `fa`.

  See [[plan-merge]]."
  [fa fb]
  (partial fb fa))

(defn split-map
  "Returns a series of maps built by splitting `m` along each sequence
  of keys in `kss`: the first map has `(first kss)` as keys, the second
  one `(second kss)`, etc ... while the last map has the remaining keys
  from `m`."
  [m & kss]
  (vec (concat (map (partial select-keys m) kss)
               (let [remaining (apply dissoc m (apply concat kss))]
                 (when (seq remaining) [remaining])))))

(defn map-difference
  "Returns a submap of m excluding any entry whose key appear in any of
  the remaining maps."
  [m & ms]
  (apply dissoc m (keys (apply merge ms))))

(defn map-intersection
  "Returns a submap of m including only entries whose key appear in all of
  the remaining maps."
  [m & ms]
  (select-keys m (apply set/intersection (map (comp set keys) ms))))

(defn submap?
  "Determines whether `map1` is a subset, keys and values wise, of
  `map2`."
  [map1 map2]
  (set/subset? (set map1) (set map2)))

(defmacro getsoc
  "Gets value at key `k` in hash `m` if present, otherwise eval
  `expr` and stores its result in `m` under key `k`.
  Returns a vector of the form [get-or-stored-value new-coll]."
  [coll k expr]
  `(let [coll# ~coll k# ~k]
     (if (contains? coll# k#)
       [(get coll# k#) coll#]
       (let [expr# ~expr]
         [expr# (assoc coll# k# expr#)]))))
