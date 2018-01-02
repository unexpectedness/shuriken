(defproject net.clojars.unexpectedness/shuriken "0.13.8"
  :description "unexpectedness' Clojure toolbox"
  :url "https://github.com/unexpectedness/shuriken"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [potemkin "0.4.3"]
                 [com.palletops/ns-reload "0.1.0"]
                 
                 ;; For monkey patches
                 [robert/hooke "1.3.0"]
                 [org.javassist/javassist "3.20.0-GA"]
                 
                 ;; Documentation
                 [codox-theme-rdash "0.1.2"]]
  ;; For syntax-quote monkey-patch
  :java-source-paths ["src/java" "test/java"]
  :plugins [;; Documentation
            [lein-codox "0.10.3"]
            
            ;; Fox monkey patches
            [lein-jdk-tools "0.1.1"]]
  :codox {:source-uri "https://github.com/unexpectedness/shuriken/blob/" \
                      "{version}/{filepath}#L{line}"
          :metadata {:doc/format :markdown}
          :themes [:rdash]})
