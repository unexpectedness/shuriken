(ns shuriken.iterator
  (:import [clojure.lang ICopyableSeqIterator CopyableSeqIterator]
           [java.util    NoSuchElementException]))

;; TODO: document

(defn compose-iterators [& iterators]
  (let [iterators-atom (atom iterators)]
    (reify
      ICopyableSeqIterator
      (hasNext [_]
        (loop []
          (if-let [current-iter (first @iterators-atom)]
            (if (.hasNext current-iter)
              true
              (let [more (rest @iterators-atom)]
                (if (seq more)
                  (do (reset! iterators-atom more)
                      (recur))
                  false)))
            false)))
      (next [this]
        (if (.hasNext this)
          (.next (first @iterators-atom))
          (throw (NoSuchElementException.))))
      (remove [_]
        (throw (UnsupportedOperationException. "remove")))
      (copy [_]
        (->> iterators
             (map (memfn ^ICopyableSeqIterator copy))
             (apply compose-iterators))))))

(defn butlast-iterator [orig-iterator & {:keys [ahead] :or {ahead ::none}}]
  (let [ahead-atom (atom (if (.hasNext orig-iterator)
                           (if (= ahead ::none)
                             (.next orig-iterator)
                             ahead)
                           nil))]
    (reify ICopyableSeqIterator
      (hasNext [_]
        (and (not (nil? @ahead-atom))
             (.hasNext orig-iterator)))

      (next [_]
        (if (nil? @ahead-atom)
          (throw (NoSuchElementException.))
          (let [current (deref ahead-atom)
                next (if (.hasNext orig-iterator)
                       (.next orig-iterator)
                       (throw (NoSuchElementException.)))]
            (reset! ahead-atom next)  ; Update ahead-atom with next element
            current))) ; Return stored element

      (remove [_]
        (throw (UnsupportedOperationException. "remove")))
      (copy [_]
        (butlast-iterator (.copy orig-iterator) :ahead @ahead-atom)))))