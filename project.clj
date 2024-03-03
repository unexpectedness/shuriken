;; rlwrap lein trampoline cljsbuild repl-listen

(defproject net.clojars.unexpectedness/shuriken "0.14.53"
  :description "unexpectedness' Clojure toolbox"
  :url "https://github.com/unexpectedness/shuriken"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :injections [#_(require 'shuriken.cljs-be-damned)
               #_(require 'cljsbuild.compiler)]
;;                (alter-var-root #'cljsbuild.compiler/reload-clojure
;;                                (constantly
;;                                 (fn [cljs-files paths compiler-options notify-command]
;;                                                             ;; touch all cljs target files so that cljsc/build will rebuild them
;;                                   (doseq [cljs-file cljs-files]
;;                                     (println "CLJS FILE" cljs-file)
;;                                     (let [target-file (cljs.build.api/src-file->target-file (clojure.java.io/file cljs-file) compiler-options)]
;;                                       (if (.exists target-file)
;;                                         (.setLastModified target-file 5000)))))))]
;;   :injections [(require 'clojure.tools.namespace.file)
;;                (alter-var-root #'clojure.tools.namespace.file/read-file-ns-decl
;;                                (constantly (fn read-file-ns-decl
;;                                              ([file]
;;                                               (read-file-ns-decl file nil))
;;                                              ([file read-opts]
;;                                               (println "READING FILE" (.getAbsolutePath file))
;;                                               (try (with-open [rdr (java.io.PushbackReader. (clojure.java.io/reader file))]
;;                                                      (clojure.tools.namespace.parse/read-ns-decl rdr read-opts))
;;                                                    (catch Throwable t
;;                                                      (println "Error reading file" (.getAbsolutePath file))
;;                                                      (throw t)))))))]
  :dependencies [;; TODO: remove
                 [nrepl/nrepl "1.1.0"]
        
                 ; [org.clojure/clojure "1.9.0"
                 ;; NOTE: 1.10.0 breaks shuriken.spec
                 [org.clojure/clojure       "1.11.1"]
                 [org.clojure/clojurescript "1.11.132" :scope "provided"]

                 [potemkin                   "0.4.3"]
                 [com.palletops/ns-reload    "0.1.0"]
                 [net.cgrand/macrovich       "0.2.1"]

                 [net.clojars.unexpectedness/dance   "0.1.4.2" :exclusions [net.clojars.unexpectedness/shuriken]]
                 [net.clojars.unexpectedness/lexikon "0.2.2"   :exclusions [net.clojars.unexpectedness/shuriken]]
                 [net.clojars.unexpectedness/weaving "0.2.5"   :exclusions [net.clojars.unexpectedness/shuriken]]

                 ;; For monkey patches
                 [robert/hooke "1.3.0"]
                 [org.javassist/javassist "3.26.0-GA"]
                 [net.bytebuddy/byte-buddy "1.10.14"]
                 [net.bytebuddy/byte-buddy-agent "1.10.14"]
                 [camel-snake-kebab "0.4.0"]

                 ;; For solver
                 [org.clojure/data.priority-map "0.0.7"]
                 [com.dean/interval-tree "0.1.2"]
                 [io.helins/interval "1.0.0-beta0"]

                 ;; For lein-tools-deps
                 ; [org.clojure/tools.deps.alpha "0.5.398"]

                 ;; To topologically sort sequences
                 [ubergraph "0.5.0"]

                 ;; For nonograms
                 [net.cgrand/seqexp "0.6.2"]

                 ;; TODO: update this in dance then remove it.
                 [org.flatland/ordered "1.5.7"]
                 
                 [reader-macros "1.0.3"]
                 
                 ;; For doo: Syntax error compiling deftype* at (clojure/core/rrb_vector/rrbt.clj:282:1)
                 [org.clojure/core.rrb-vector "0.1.2"]]
  ;; To fix a goddamn bug on reload
  :aot [loom.graph ubergraph.core]
  ;; For syntax-quote monkey-patch
  :java-source-paths ["src/java"]
  :jvm-opts ["-Djdk.attach.allowAttachSelf=true"]
  :plugins [[lein-codox                        "0.10.8"]
            [lein-cljsbuild                    "1.1.8"]
            [lein-doo                          "0.1.11"]
            [io.github.borkdude/lein-lein2deps "0.1.0"]
            ;; Fox monkey patches
            [lein-jdk-tools                    "0.1.1"]] ;; TODO: move to clojure.deps
  :prep-tasks [["lein2deps" "--write-file" "deps.edn" "--print" "false"]
               "javac"
               "compile"]
;;   :prep-tasks ["compile" ["cljsbuild" "once"]]
  :cljsbuild {:builds {}}

  :profiles
  {:common {:cljsbuild
            {:builds
             {:main {:source-paths ["src"]
                     :compiler     {:target     :nodejs
                                    :main       shuriken.doo-test
                                    :output-to     "target/js/main/shuriken.js"
                                    :output-dir    "target/js/main/"
                                    :optimizations :none}}}}}
   
   :dev [:common
         {:aot [loom.graph ubergraph.core] ; shuriken.monkey-patch-test
          :java-source-paths ["test/java"]
          :dependencies [[codox-theme-rdash "0.1.2"]
                         ;; To find cljs/cljc test namespaces to run with doo
                         [org.clojure/tools.namespace "0.3.1"]]
           :global-vars {*warn-on-reflection* false #_true}}]
   :test [:dev
          {:cljsbuild
           {:builds
            {:main {:source-paths ["test"]
                    :compiler     {:output-to  "target/js/test/shuriken.js"
                                   :output-dir "target/js/test/"}}}}}]
   :release [:common
             {:cljsbuild
              {:builds
               {:main {:jar      true
                       :compiler {:optimizations :advanced}}}}}]}
  :doo {:build        "main"
        :alias        {:default [:node]}}
  :aliases {"test"    ["with-profile" "test" ["do" ["test"] ["doo" "once"]]]
            "deploy"  ["with-profile" "release" "deploy"]
            "release" ["with-profile" "release" "release"]
            "doo"     ["with-profile" "test"    "doo"]}

  :codox {:source-uri "https://github.com/unexpectedness/shuriken/" \
                      "blob/{version}/{filepath}#L{line}"
          :metadata {:doc/format :markdown}
          :themes [:rdash]})
