
(ns shuriken.iterator-test
  (:require [shuriken.core :refer [butlast-iterator compose-iterators]]
            [clojure.test  :refer [deftest is]])
  (:import  [clojure.lang  CopyableSeqIterator]
            [java.util     NoSuchElementException]))

(defn test-bi [& [a]]
  (butlast-iterator (.iterator (or a [0 1 2]))))

(deftest test-butlast-iterator
  (is (= [0 1] (iterator-seq (test-bi))))
  (let [bi (test-bi)]
    (dotimes [n 2]
      (is (true? (.hasNext bi)))
      (is (= n (.next bi))))
    (is (false? (.hasNext bi)))
    (is (thrown? NoSuchElementException (.next bi))))
  (let [bi (test-bi [0])]
    (is (false? (.hasNext bi)))
    (is (thrown? NoSuchElementException (.next bi))))
  (let [bi (test-bi [])]
    (is (false? (.hasNext bi)))
    (is (thrown? NoSuchElementException (.next bi)))))

(deftest test-copyable-seq-iterator
  (let [it1 (CopyableSeqIterator. [0 1 2])
        it2 (.copy it1)]
    (dotimes [n 3]
      (is (= n (.next it1))))
    (dotimes [n 3]
      (is (= n (.next it2)))))
  (let [it1 (doto (CopyableSeqIterator. [0 1 2])
              .next .next)
        it2 (.copy it1)]
    (is (= 2 (.next it1)))
    (is (= 2 (.next it2)))))

(defn test-ci [& [a b c]]
  (let [a (.iterator (or a [0 1 2]))
        b (.iterator (or b [3 4 5]))
        c (.iterator (or c [6 7 8]))]
    (compose-iterators a b c)))

(deftest test-composed-iterators
  (let [ci (test-ci)]
    (dotimes [n 9]
      (is (true? (.hasNext ci)))
      (is (= n (.next ci))))
    (is (false? (.hasNext ci)))
    (is (thrown? NoSuchElementException (.next ci))))
  (let [ci (test-ci [] [] [0 1 2])]
    (dotimes [n 3]
      (is (true? (.hasNext ci)))
      (is (= n (.next ci))))
    (is (thrown? NoSuchElementException (.next ci)))
    (is (false? (.hasNext ci))))
  (let [ci (test-ci [0 1 2] [] [])]
    (dotimes [n 3]
      (is (true? (.hasNext ci)))
      (is (= n (.next ci))))
    (is (false? (.hasNext ci)))
    (is (thrown? NoSuchElementException (.next ci))))
  (let [ci (compose-iterators (.iterator [0 1 2]))]
    (dotimes [n 3]
      (is (true? (.hasNext ci)))
      (is (= n (.next ci))))
    (is (thrown? NoSuchElementException (.next ci)))
    (is (false? (.hasNext ci))))
  (let [ci (compose-iterators (.iterator []))]
    (is (thrown? NoSuchElementException (.next ci)))
    (is (false? (.hasNext ci))))
  (let [ci (compose-iterators)]
    (is (thrown? NoSuchElementException (.next ci)))
    (is (false? (.hasNext ci))))

  (is (= (range 9) (iterator-seq (test-ci)))))

