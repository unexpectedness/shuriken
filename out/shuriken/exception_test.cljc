(ns shuriken.exception-test
  (:require [clojure.test  :refer [deftest testing is]]
            [shuriken.core :refer [silence thrown?]]))

(defn assert-exception-thrown [f]
  (is (= ::thrown
         (try (f)
           (catch #?(:clj  Throwable
                     :cljs js/Error) t
             ::thrown)))))

(deftest test-silence
  (testing "when an exception is thrown"
    (testing "and matches the provided target"
      #?(:clj  (do (is (= nil (silence ArithmeticException (/ 1 0))))
                   (is (= nil (silence #{RuntimeException} (/ 1 0)))))
         :cljs (do (is (= nil (silence js/Error            (assert false))))
                   (is (= nil (silence #{js/Error}         (assert false))))))
      (is (= nil (silence (fn [_] true)                    (assert false))))
      (is (= nil (silence "Assert failed: false"           (assert false))))
      (is (= nil (silence #"failed"                        (assert false))))
      (is (= nil (silence {:a :b}                          (throw (ex-info "Oops" {:a :b}))))))
    (testing "and does not match the provided target"
      #?(:clj (do (assert-exception-thrown #(silence IllegalArgumentException   (/ 1 0)))
                  (assert-exception-thrown #(silence [IllegalArgumentException] (/ 1 0)))))
      (assert-exception-thrown #(silence (fn [_] false)             (assert false)))
      (assert-exception-thrown #(silence "abzabej"                  (assert false)))
      (assert-exception-thrown #(silence #"abza"                    (assert false)))))
  (testing "when an exception is not thrown"
    (is (= :abc (silence :xyz #?(:clj Exception :cljs js/Error)     :abc)))))

(deftest test-thrown?
  (testing "when an exception is thrown"
    (testing "and matches the provided target"
      (is (= true (thrown? #?(:clj AssertionError :cljs js/Error)   (assert false))))
      (is (= true (thrown? "Assert failed: false"                   (assert false)))))
    (testing "and does not match the provided target"
      (assert-exception-thrown #(thrown? "abc"                      (assert false)))))
  (testing "when an exception is not thrown"
    (is (= false (thrown?  #?(:clj AssertionError :cljs js/Error)   (assert true))))))