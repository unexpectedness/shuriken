(ns shuriken.doo-test
  (:require [cljs.test :as test]
            [doo.runner :refer-macros [doo-tests]]
            [shuriken.associative-test]
            [shuriken.exception-test]
            [shuriken.sequential-test]
            [shuriken.debug-test]))

(enable-console-print!)

(try (doo-tests 'shuriken.exception-test
                'shuriken.associative-test
                'shuriken.sequential-test
                'shuriken.debug-test)
     (catch js/Error e
       (println "-----------------------")
       (cljs.pprint/pprint e)
       (cljs.pprint/pprint (.-stack e))))
