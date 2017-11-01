# shuriken

Small yet effective Clojure weapons.

# Usage

```clojure
[net.clojars.unexpectedness/shuriken "0.13.0"]
```


```clojure
(ns my-ns
  (:require [shuriken.core :refer :all]))
```

## Associative structures

### `flatten-keys`

```clojure
(flatten-keys {:a {:b {:c :x
                       :d :y}}})
;; {[:a :b :c] :x
;;  [:a :b :d] :y}
```

### `deflatten-keys`

```clojure
(deflatten-keys {[:a :b :c] :x
                 [:a :b :d] :y})
;; {:a {:b {:c :x
;;          :d :y}}}
```

### `deep-merge`

```clojure
(deep-merge {:x {:a :a  :b :b  :c :c}}
            {:x {:a :aa :b :bb}}
            {:x {:a :aaa}})

;; {:x {:a :aaa  :b :bb  :c :c}}
```

### `index-by`

```clojure
(def ms [{:a 1 :b 2} {:a 3 :b 4} {:a 5 :b 4}])

(index-by :a ms)
;; {1 {:a 1 :b 2}
;;  3 {:a 3 :b 4}
;;  5 {:a 5 :b 4}}

(index-by :b ms)
;; clojure.lang.ExceptionInfo (Duplicate entries for key 4)

(index-by :b (fn [key entries]
               (last entries))
          ms)
;; {2 {:a 1 :b 2}
;;  4 {:a 5 :b 4}}
```

## Sequential structures

### `slice`

```clojure
(let [coll [1 1 0 1 0 0 1 1]]
  ;; the default
  (slice zero? coll) ;; by default, :include-delimiter false, include-empty true
  ;; ((1 1) (1) (1 1))
  
  (slice zero? coll :include-empty true)
  ;; ((1 1) (1) () (1 1))
  
  (slice zero? coll :include-delimiter :left)
  ;; ((1 1) (0 1) (0 1 1))
  
  (slice zero? coll :include-delimiter :right)
  ;; ((1 1 0) (1 0) (1 1))
  
  (slice zero? coll :include-delimiter :right :include-empty true)
  ;; ((1 1 0) (1 0) (0) (1 1))
  )
```

### `separate`

Returns a vector of `[(filter pred coll) (remove pred coll)]`

```clojure
(let [coll [1 1 0 1 0 0 1 1 0]]
  (separate zero? coll)
  ;; [(1 1 1 1 1) (0 0 0 0)])
```

## Macro

### `macroexpand-do`

```clojure
(defmacro abc []
  `(println "xyz"))

(macroexpand-do (abc))

; -- Macro expansion --
; (clojure.core/println "xyz")

; -- Running macro --
; xyz
```

or alternatively:

```clojure
(macroexpand-do MODE
  expr)
```

Where `MODE` is one of:

```
|-------------------------------------|
| nil  | macroexpand (the default)    |
| 1    | macroexpand-1                |
| :all | clojure.walk/macroexpand-all |
|-------------------------------------|
```

## Meta

### `without-meta`

```clojure
(meta (without-meta (with-meta [1 2 3] {:metadata :abc}))) ;; nil
```

## Control Flow

### `silence`

```clojure
(silence ArithmeticException (/ 1 0))
;; => nil

(silence [ArithmeticException]
  (do (println "watch out !")
      (/ 1 0)))
;; watch out !
;; => nil

(silence :substitute
         (fn [x]
           (isa? (class x) ArithmeticException))
         (/ 1 0))
;; => :substitute
```

### `thrown?`

```clojure
(thrown? ArithmeticException (/ 1 0))
;; => true

(thrown? #{ArithmeticException} (/ 1 1))
;; => false

(thrown? (fn [x]
           (isa? (class x) ArithmeticException))
         (throw (IllegalArgumentException. "my-error")))
;; raises:
;;   IllegalArgumentException my-error
```

## Namespace

### `fully-qualify`

```clojure
(fully-qualify 'a-symbol)           ;; 'other-namespace/a-symbol
(fully-qualify *ns* 'o/a-symbol)    ;; 'other-namespace/a-symbol
```

### `unqualify`

```clojure
(unqualify 'my-namespace/my-symbol) ;; 'my-symbol
```

### with-ns

Like `in-ns` but with the scope of a `let` or a `binding`.

```clojure
(with-ns 'my-namespace ;; or (find-ns 'my-namespace)
  (def number 123))

(println my-namespace/number)
;; 123
```

### `once-ns`

Ensures a namespace is loaded only once, even after using `require` or `use`
with `:reload` or `:reload-all`. Especially useful for namespaces that
monkeypatch other namespaces. SHOULD immediately wrap `(ns ...)`.

```clojure
(require 'shuriken.core)

(shuriken.core/once-ns
  (ns my-namespace)

  (def original-func func)
  
  (defn func [& args]
    (swap! counter inc)
    (apply func args))))
```

## Navigation

### `tree-seq-breadth`

```clojure
(let [tree {:a {:d {:j :_}
                :e {:k :_}}
            :b {:f {:l :_}
                :g {:m :_}}
            :c {:h {:n :_}
                :i {:o :_}}}
      keys-only #(->> % (remove #{:_}) (mapcat keys))]
  (keys-only (tree-seq map? vals tree))
  ;; (:a :b :c :d :e :j :k :f :g :l :m :h :i :n :o)
  (keys-only (tree-seq-breadth map? vals tree))
  ;; '(:a :b :c :d :e :f :g :h :i :j :k :l :m :n :o)
  )
```

## Predicates composer

### `and?`, `or?` & `not?`

```clojure
(filter (and? (or? is-old-enough?
                   is-vip?)
              (not? faint-hearted?)))
```


## Dev

For all features listed below:
```clojure
(require 'shuriken.dev)
```

### `shuriken.monkey-patches.syntax-quote`

Before
```clojure
``abc
;; (quote my-ns/abc)
(pprint ``abc)
;; 'my-ns/abc
```

After
```clojure
(require 'shuriken.monkey-patches.syntax-quote)

``abc
;; (clojure.core/syntax-quote my-ns/abc)
(pprint ``abc)
;; `my-ns/abc
(def args [1 2 3])
(pprint (syntax-quote `(abc ~@args)))
;; `(user/abc 1 2 3)
```
