(ns shuriken.debug-test
  (:require [clojure.test   :refer        [deftest testing is]]
            [shuriken.debug :refer        [debug debug-print]]
            [shuriken.test  :refer        [defn-call with-fresh-calls assert-calls]]))

(defn-call do-something [x] x)
(defn-call do-nothing   [x] x)

(deftest test-debug-print
  (testing "Asserting newlines are printed correctly"
    (is (= "lab: :a\nlab: :b\nlab: :c\n"
           (-> (with-out-str
                 (debug-print "lab" :a)
                 (debug-print "lab" :b)
                 (debug-print "lab" :c))
               (clojure.string/replace #" +\n" "\n"))))))

(deftest test-debug
  (with-fresh-calls
    (is (with-out-str
          (= 4 (debug (do-something 1)
                      (do-something 2)
                      (do-something 3)
                      (do-nothing 4)))))
    (assert-calls [:do-something :do-something :do-something :do-nothing])))
