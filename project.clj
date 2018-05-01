(defproject net.clojars.unexpectedness/shuriken "0.13.27"
  :description "unexpectedness' Clojure toolbox"
  :url "https://github.com/unexpectedness/shuriken"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :tools/deps [:system :home :project "../src/deps.edn"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [potemkin "0.4.3"]
                 [com.palletops/ns-reload "0.1.0"]
                 [dance "0.1.1"]

                 ;; For monkey patches
                 [robert/hooke "1.3.0"]
                 [org.javassist/javassist "3.20.0-GA"]

                 ;; For solver
                 [org.clojure/data.priority-map "0.0.7"]

                 ;; Documentation
                 [codox-theme-rdash "0.1.2"]

                 ;; For lein-tools-deps
                 ; [org.clojure/tools.deps.alpha "0.5.398"]
                 ]
  ;; For syntax-quote monkey-patch
  :java-source-paths ["src/java"]
  :profiles {:dev {:aot [shuriken.monkey-patch-test]
                   :java-source-paths ["test/java"]}}
  :plugins [;; Documentation
            [lein-codox "0.10.3"]

            ;; Fox monkey patches
            [lein-jdk-tools "0.1.1"] ; TODO: move to clojure.deps

            ; [lein-tools-deps "0.1.0-SNAPSHOT"]
            ]
  :codox {:source-uri "https://github.com/unexpectedness/shuriken/" \
                      "blob/{version}/{filepath}#L{line}"
          :metadata {:doc/format :markdown}
          :themes [:rdash]})
