(ns shuriken.byte-buddy-test
  (:require [clojure.test :refer :all]
            [shuriken.core :refer :all]
            [shuriken.reflection :refer [interfaces]])
  (:import Mother MonkeyPatched))

(copy-class! Mother 'XMother)
(import 'XMother
        'XMother$Infant
        'XMother$Child
        'XMother$Crying)

;; We need to test the case where there is no child classes.
(copy-class! MonkeyPatched 'MonkeyPatchedTestByteBuddyCopy)

(deftest test-copy-class!
  (let [mom (new XMother)
        c   (.giveBirth mom)]
    (is (= XMother$Child (class c)))
    (is (instance? XMother$Child c))
    (is (= [XMother$Crying]                        (interfaces XMother$Child)))
    (is (= #{Object XMother$Crying XMother$Infant} (ancestors XMother$Child))))

  (is (= 1 (MonkeyPatchedTestByteBuddyCopy/a 0))))
