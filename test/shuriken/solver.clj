(ns shuriken.solver
  (:use clojure.pprint
        clojure.data)
  (:require [clojure.set :as set]
            [clojure.data.priority-map :refer [priority-map-by]]
            [helins.interval.map :as imap]
            [com.dean.interval-tree.core :refer [interval-map]]))

;; TODO: integrate in shuriken.core

; (`    |     _
; _) () | \/ (/_ |`

(declare alignment-score) ;; TODO: remove

(defn solve
  "Solves `problem` using `strategy`.
  - problem is a map with keys
  ```
  :init           • the initial state
  :goal?          • a fn taking a state that decides
                    whether the goal has been reached
  :actions        • a coll of  (distinct) actions
  :transitions    • a fn taking the actions and a state
                    that returns a set of pairs [a s]
                    where : - a  is the action that caused s
                            - s  is the next state

  - strategy is a map with keys
  :create-fringe  • a fn taking the initial search node
                    that returns the strategy fringe
  :select-node    • fn taking the fringe and returning
                    a coll [n f]
                    where : - n  is a node
                            - f  is the fringe without n
  :add-nodes      • fn taking the fringe and a seq of
                    nodes that returns the new fringe
  ```"
  [problem strategy]
  (let [{:keys [init goal? actions transitions]} problem
        {:keys [create-fringe select-node add-nodes]} strategy]
    (loop [fringe (create-fringe {:path [] :cause nil :state init})]
      (let [[node new-fringe] (select-node fringe)
            {:keys [path cause state]} node
            trans (transitions actions state)
            next-nodes (map (fn build-node [[a s]]
                              {:path (conj path [cause state])
                               :cause a :state s})
                            trans)]
        ;; (pprint (map (juxt identity (comp alignment-score second)) (keys fringe)))
        ;; (pprint (map (juxt identity (comp alignment-score second)) (keys new-fringe)))
        ;; (pprint (map (comp (juxt identity (comp alignment-score second)) :state) next-nodes))
        ;; (pprint state)
        ;; (newline)
        (if (goal? (:state node))
          node
          (recur (add-nodes new-fringe next-nodes)))))))


; (` |-       |-  _     .  _   _
; _) |_ |` (| |_ (/_ (| | (/_ _\
;                    _|                                     `-'

(def dfs
  "Depth-first search strategy."
  {:create-fringe list
   :select-node   (juxt peek pop)
   :add-nodes     into})

(def bfs
  "Breadth-first search strategy"
  {:create-fringe #(conj clojure.lang.PersistentQueue/EMPTY %)
   :select-node (juxt peek pop)
   :add-nodes (partial reduce conj)})

(defn a*
  "A-star search strategy. `cost-fn` is passed a node's state."
  [cost-fn]
  {:create-fringe (fn [node] (priority-map-by
                              (fn [a b]
                                (let [ret (compare (-> a :state cost-fn) (-> b :state cost-fn))]
                                  (if (zero? ret)
                                    (compare (:state a) (:state b))
                                    ret)))
                              (:state node)
                              node))
   :select-node #(vector (-> % first val) (dissoc % (-> % first key)))
   :add-nodes (partial reduce #(assoc %1 (:state %2) %2))})

; |\ |    ,_  |   _       ,_     _   _
; | \| L| ||| |) (/_ |`   ||| (| /_ (/_

;; For an initial number n find the series of steps leading to a final
;; number m, where each step can be obtained by applying to the result
;; of the previous step x one of these operations:
;;   - x + 2
;;   - x * 2
;;   - x / 2 (if x is divisible by 2)

(defn number-maze [start target]
  {:init start
   :goal? #{target}
   :actions {:double #(* 2 %)
             :halve #(when (even? %) (/ % 2))
             :plus-two #(+ 2 %)}
   :transitions (fn transit [actions state]
                  (->> (for [[name func] actions]
                         (when-let [next-state (func state)]
                           [name next-state]))
                       (remove nil?)))})



; (let [initial 9
;       target  1592]
;   (-> (solve (number-maze initial target)
;              #_bfs                          ;; 6396.461 msecs optimal
;              (a* #(Math/abs (- target %)))) ;; 1514.043 msecs horrible
;       pprint))


; |\/| .  _  _ .    ,_       .  _   _   ()    _    ,_ ,_ . |     |  _
; |  | | _\ _\ | () || (| |` | (/_ _\   (X   (_ (| || || | |) (| | _\

;; Three missionaries and three cannibals must cross a river using a
;; boat which can carry at most two people, under the constraint
;; that, for both banks, if there are missionaries present on the
;; bank, they cannot be outnumbered by cannibals (if they were, the
;; cannibals would eat the missionaries). The boat cannot cross the
;;  river by itself with no people on board.
(defn between [x n m]
  (and (>= x n) (<= x m)))

(defn cannibalism? [[[lm lc] [rm rc] boat-position]]
  (let [x (or (and (not (= 0 lm))
                   (not (= 0 lc))
                   (< lm lc))
              (and (not (= 0 rm))
                   (not (= 0 rc))
                   (< rm rc)))]
    x))

(defn legal-state? [[left-bank right-bank boat-position]]
  (and (every? #(between % 0 3) (concat left-bank right-bank))
       (every? #{3} (map (comp (partial reduce +) vector)
                         left-bank right-bank))))

(def missionaries-and-cannibals
  {:init [[3 3] [0 0] :left]
   :goal? #{[[0 0] [3 3] :right]}
   :actions [[1 0] [2 0] [1 1] [0 2] [0 1]]
   :transitions
   (memoize
     (fn mc-transit [actions [l r p]]
       (->> actions
            (map (if (= p :left)
                   #(vector % [(map - l %) (map + r %) :right])
                   #(vector % [(map + l %) (map - r %) :left])))
            (filter (comp #(and (legal-state? %)
                                (not (cannibalism? %)))
                          second)))))})

; (-> (solve missionaries-and-cannibals bfs)
;     clojure.pprint/pprint
;     time)


#_(pprint)
  (diff '(def missionaries-and-cannibals
          {:init [[3 3] [0 0] :left]
           :goal? #{[[0 0] [3 3] :right]}
           :actions [[1 0] [2 0] [1 1] [0 2] [0 1]]
           :transitions
           (memoize
             (fn mc-transit [actions [l r p]]
               (->> actions
                    (map (if (= p :right)
                           (vector % [(map - l %) (map + r %) :dright])
                           (vector % [(map + l %) (map - r %) :left])))
                    (select (comp (and (legal-state? %
                                        (not (cannibalism? %))))
                                  second)))))})
        '(def missionaries-and-cannibals
          {:init [[3 3] [0 0] :left]
           :goal? #{[[0 0] [3 3] :right]}
           :actions [[1 0] [2 0] [1 1] [0 2] [0 1]]
           :transitions
           (memoize
             (fn mc-transit [actions [l r p]]
               (->> actions
                    (map (if (= p :left)
                           (vector % [(map - l %) (map + r %) :right])
                           (vector % [(map + l %) (map - r %) :left])))
                    (filter (comp (and (legal-state? %
                                        (not (cannibalism? %))))
                                  second)))))}))



(defmacro forcat [& args]
  `(apply concat (for ~@args)))

(defn str-insert [s i c]  (str (subs s 0 i) c (subs s i)))
(defn str-delete [s i]    (str (subs s 0 i)   (subs s (inc i))))

(def symbol-pat          #"[\p{L}.\-_+=><!?*][\w.\-_:+=><!?*\d]*")
(def opening-delim-pat   #"[\(\[\{\"]")
(def closing-delim-pat   #"[\)\]\}\"]")
(def initial-space-pat   #" (?> +)")
(def ins-pat             (re-pattern (str (.pattern opening-delim-pat) "*"
                                          (.pattern symbol-pat)
                                          (.pattern closing-delim-pat) "*")))
(def del-pat             initial-space-pat)

(defn re-indexes [re s]
  (let [m (re-matcher re s)]
    (->> (repeatedly #(when (.find m)
                        (doall (for [n (range (.groupCount m) (inc (.groupCount m)))]
                                 [(.start m n) (.end m n) (.group m n)]))))
         (take-while identity))))

(defn max-count [colls]
  (apply max (map count colls)))

(defn normalize-lines [lines]
  (if (apply = (map count lines))
    lines
    (for [l lines  :let [pad-len (- (max-count lines) (count l))]]
      (apply str l (repeat pad-len \space)))))

(def juxtv (comp vec juxt))

(defn token-indexes [line]
  (map first (re-indexes symbol-pat line)))

(defn token-alignment-score [lines]
  (let [lines (normalize-lines lines)
        re-idxs (zipmap (range) (map token-indexes lines))
        idxs (reduce (fn [acc i]
                       (reduce (fn [acc idxs]
                                 (let [[s e w] idxs]
                                   (imap/mark acc s e i #_[i w])))
                               acc
                               (re-idxs i)))
                     imap/empty
                     (range (count lines)))
        by-val (imap/by-value idxs)
        tokens-by-line (->> by-val
                            #_(map (juxt key (comp set seq val)))
                            #_(apply clojure.set/union))
        ;; score (->> idxs
        ;;            (map (comp count val))
        ;;            (filter #(> % 1))
        ;;            (reduce +))
        score (->> (forcat [[l intervals] (imap/by-value idxs)]
                     (forcat [[s e] intervals]
                       (forcat [[[ss ee] ls] (subseq idxs >= s < e)]
                          (forcat [ll (disj ls l)
                                   :let [distances
                                         (->> (re-idxs ll)
                                              (filter (fn [[s e]]
                                                        (or (and (>= ss s) (< ss e))
                                                            (and (<= ee e) (> ee s)))))
                                              (map (fn [[ss ee :as idx]]
                                                     [idx (Math/abs (- s ss))
                                                      #_(min (Math/abs (- s ss))
                                                               (Math/abs (- e ee)))])))]]
                            (for [[[ss ee] score] distances]
                              [(set [[s e] [ss ee]]) score])
                            ))))
                   distinct
                   (map second)
                   (apply +))
        free-idxs (apply set/difference (set (range (max-count lines)))
                         (map (comp set (partial apply range))
       
                              (keys idxs)))]
    #_(->> (forcat [[k vs] by-val]
                   (for [v vs]
                     [v k]))
           (reduce (fn [acc [v k]]
                     (update acc v (fnil conj #{}) k))
                   {})
           pprint)
    [free-idxs score]))

(defn char-alignment-score [lines & [free-idxs]]
  (let [lines       (normalize-lines lines)
        char-scores (apply map (fn [& chars]
                                 (+ (->> chars distinct count)
                                    #_(->> chars
                                         (map #(if (= % \space) :space :char))
                                         distinct count)))
                           lines)]
    (->> (if free-idxs
           (->> char-scores
                (zipmap (range (max-count lines)))
                (filter (comp free-idxs key))
                (map val))
           char-scores)
         (apply +))))

(defn length-score [lines]
  (max-count (normalize-lines lines)))

(defn alignment-score [lines]
  (let [lines (normalize-lines lines)
        [free-idxs token-score] (token-alignment-score lines)
        ]
    (+ token-score
       (char-alignment-score lines #_free-idxs)
       (length-score lines))))

(def ^:dynamic *max-iter* 10000)

(def action-indexes
  {:insert-blank #(map ffirst (re-indexes ins-pat %))
   :delete-blank #(map ffirst (re-indexes del-pat %))})

(defn align-lines [lines]
  (let [result (atom [0  (alignment-score lines)  lines])
        iter   (atom 0)]
    {:init        @result
     :goal?       (fn [[iter score lines :as state]]
                    (swap! result (fn [[_ s _ :as isl]] (if (>= score s) isl state)))
                    (>= iter  *max-iter*))
     :actions     {:insert-blank (fn [[_iter  score lines] i j]
                                   (let [nlines (update-in lines [i] str-insert j \space)]
                                     [(swap! iter inc) (alignment-score nlines) nlines]))
                   :delete-blank (fn [[_iter _score lines] i j]
                                   (let [nlines (update-in lines [i] str-delete j)]
                                     [(swap! iter inc) (alignment-score nlines) nlines]))
                   :move-token   (fn [[_iter _score lines] i j]
                                   )}
     :transitions (fn transit [actions [_iter _score lines :as state]]
                    (let [lines (vec lines)
                          ins   (:insert-blank actions)
                          del   (:delete-blank actions)]
                      (forcat [i (range (count lines))
                               :let [l (nth lines i)]]
                        (forcat [[a f] actions]
                          (for [j ((action-indexes a) l)]
                            [[a i j] (f state i j)])))))
     :result      result}))

;; (let [a  "ab  b    a"
;;       b  "a cfgh  a"
;;       c  "d   e    f"
;;       pb (align-lines [a b c])]
;;   (println "INPUT:" a)
;;   (println "      " b)
;;   (println "      " c)
;;   (time (solve pb (a* second)))
;;   (println "RESULT:" (-> pb :result deref (nth 2) first))
;;   (println "       " (-> pb :result deref (nth 2) second))
;;   (println "       " (-> pb :result deref (nth 2) (nth 2)))
;;   (println "FOUND AT ITERATION" (-> pb :result deref first)))

#_(let [lines ["(:require [clojure.set as set]"
             "          [clojure.data.priority-map refer [priority-map-by]]"
             "          [helins.interval.map as imap]"
             "          [com.dean.interval-tree.core refer [interval-map]])"]
      pb (align-lines lines)]
  (time (solve pb (a* second)))
  (pprint (-> pb :result deref)))

(let [lines ["(aaa-crock 123)"
             "( bb-crock abc)"]
      pb    (align-lines lines)]
  (println "SCORE:" (alignment-score lines))
  ;; (time (solve pb (a* second)))
  ;; (println "RESULT:" (-> pb :result deref (nth 2) first))
  ;; (println "       " (-> pb :result deref (nth 2) second))
  ;; (println "SCORE:" (-> pb :result deref second))
  )
