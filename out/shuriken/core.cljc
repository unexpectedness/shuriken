(ns shuriken.core
  (:require shuriken.associative
            shuriken.exception
            #?(:clj [shuriken.namespace :refer [import-vars]])
            shuriken.sequential
            shuriken.spec
            shuriken.string
            #?@(:clj [shuriken.byte-buddy
                      shuriken.debug
                      shuriken.iterator
                      shuriken.lazy
                      shuriken.macro
                      shuriken.meta
                      shuriken.monkey-patch
                      shuriken.reflection
                      shuriken.source
                      shuriken.tree]))
  #?(:cljs (:require-macros [shuriken.core      :refer [import-namespace-vars]]
                            [shuriken.namespace :refer [import-vars import-namespace-vars]])))

(import-vars
 [shuriken.associative
  map-keys map-vals
  filter-keys filter-vals
  remove-keys remove-vals
  flatten-keys deflatten-keys deep-merge
  index-by unindex
  plan-merge
  merge-with-plan
  continue|
  split-map
  map-difference
  map-intersection
  submap?
  getsoc]
 
 [shuriken.exception
  silence
  thrown?]
 
 #?(:clj  [shuriken.namespace
           fully-qualify fully-qualified?
           unqualify
           with-ns
           ns-resource
          ;;  import-vars  --> imported in the ns decl
           import-namespace-vars]
    :cljs [shuriken.namespace
          ;;  import-vars  --> imported in the ns decl
           import-namespace-vars])
 
 [shuriken.spec
  conf either conform!]
 
 [shuriken.string
  adjust
  format-code
  join-lines
  join-words
  lines
  no-print
  tabulate
  truncate
  words]

 #?@(:clj [[shuriken.byte-buddy
            copy-class!]
           [shuriken.debug
            debug
            debug-print]
           [shuriken.lazy
            deep-doall]
            ;; TODO: some vars are missing
           [shuriken.macro
            is-form?
            wrap-form
            unwrap-form
            clean-code
            file-eval
            macroexpand-all-code
            macroexpand-some
            macroexpand-n
            macroexpand-do]
           [shuriken.meta
            without-meta
            merge-meta
            preserve-meta]
           [shuriken.tree
            prepostwalk
            prepostwalk-demo
            tree
            tree-seq-breadth]
           [shuriken.reflection
            read-field
            write-field
            method
            static-method
            class-tree]
           [shuriken.source
            inline]
           [shuriken.iterator
            compose-iterators
            butlast-iterator]])


  ; [shuriken.monkey-patch
  ;  once
  ;  refresh-once
  ;  monkey-patch
  ;  java-patch
  ;  ; copy-class
  ;  ; save-class
  ;  ]
)

(import-namespace-vars shuriken.sequential
                       #?@(:cljs [:exclude [order]]))
