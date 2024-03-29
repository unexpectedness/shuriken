(ns shuriken.monkey-patches.syntax-quote-test
  (:require [clojure.test :refer :all]
            [shuriken.monkey-patches.syntax-quote]
            [clojure.pprint :refer [pprint]]))

(require '[clojure.core :refer [from-syntax-quote]])

(deftest test-syntax-quote
  (testing "` reader macro expansion"
    (is (= `abc
           'shuriken.monkey-patches.syntax-quote-test/abc)))
  (testing "`` reader macro expansion"
    (is (= ``abc
            '(clojure.core/from-syntax-quote
              'shuriken.monkey-patches.syntax-quote-test/abc))))
  (testing "pprint syntax-quote -> ` translation"
    (is (= (with-out-str (pprint ``is))
           "`clojure.test/is\n")))
  (testing "pprint unquote-splicing -> ~@ translation"
    (is (= (with-out-str (pprint '~@x))
           "~@x\n"))
    (is (= (with-out-str (pprint '(clojure.core/unquote-splicing x)))
           "~@x\n"))))