# Change Log
All notable changes to this project will be documented in this file. This change log follows the conventions of [keepachangelog.com](http://keepachangelog.com/).

# [Unreleased]
## Added
- `associative`: a plan to `merge-plan` can be a map as well as a function.

# [0.13.26] - 2018-04-30
## Fixed
- Exposed `spec` namespace.

# [0.13.25] - 2018-04-30
## Fixed
- `string`: exposed `adjust`, `format-code`, `join-lines`, `lines` &
  `no-print`.
  - `debug`: exposed `debug-print`.

# [0.13.24] - 2018-04-30
## Added
- Exposed test utils in `shuriken.test`. Not included in `shuriken.core`.

# [0.13.23] - 2018-04-28
## Added
- `threading`: `and->`, `and->>`, `or->` & `or->>`

# [0.13.22] - 2018-04-28
## Added
- `associative`: `map-keys` & `map-vals`.

# [0.13.21] - 2018-04-28
## Added
- `sequential`: `get-nth-in` & `assoc-nth-in`.

# [0.13.20] - 2018-04-28
## Fixed
- `multi`: in `super-method`, use the default dispatch val of the multi
  instead of `:default`.

# [0.13.19] - 2018-04-28
## Added
- `multi`: `super-method`.

## Fixed
- `multi`: `call-multi` renamed to `call-method`.

# [0.13.18] - 2018-04-27
## Added
- macro:
  - `is-form?`, `wrap-form` & `unwrap-form`.
  - `lexical-context`.
  - `stored-locals!`, `binding-stored-locals` & more.
  - `lexical-eval`.
- multi:
  - `call-multi`.
- namespace `predicates-composer` renamed to `weaving`:
  - `|` (`constantly`).
  - `*|`, `<-|` & `->|`.
  - `when|`, `if|` & `tap|`.
  - `and?`, `or?`, `not?` renamed to `and|`, `or|`, `not|`.
- debug: `debug`.
- sequential: `max-by` & `min-by`.
- string: `tabulate` & `truncate`.
- threading:
  - `defthreading`
  - `if->` & `if->>`.
  - `when->` & `when->>`.
  - `pp->`.
  - `<-`.

## Enhanced
- macro: `file-eval` uses the local lexical context.

## Fixed
- macro: fix `clean-code` and `macroexpand-some`.

# [0.13.8] - 2017-11-28
## Enhanced
- macro:
  - `macroexpand-do` accepts predicates.
  - `file-eval` has better file output.

# [0.13.7] - 2017-11-28
## Fixed
- `macro`: errors from `file-eval` display both the extended message with the
  temporary file path and the actual error stacktrace.

# [0.13.6] - 2017-11-28
## Fixed
- `macroexpand-do`: dumps the expanded form at the file-eval stage.

## Enhanced
- `tap` threads the initial expr to the forms in its body that are threading
  forms.

# [0.13.5] - 2017-11-28
## Added
- `macro`: `file-eval`, `macroexpand-n`.
- `threading`: `tap`, `tap->` & `tap->>`.

## Enhanced
- `macro`: `macroexpand-do` use `file-eval` to evaluate the expression's
  expansion. Useful to track exceptions raised by macro-generated code. 

## Fixed
- `macro`: `macroexpand-do` with a number calls `macroexpand-1` the right
  number of times.

# [0.13.4] - 2017-11-27
## Added
- `macro`: `macroexpand-some`.

## Enhanced
- `macro`: `macroexpand-do` supports n iterations of `macroexpand-1` as well
  as `macroexpand-some`.

## Fixed
- `namespace`: `fully-qualify`, `fully-qualified?` and `unqualify` support
  static method symbols like `some.Class/staticMethod`.

# [0.13.3] - 2017-11-27
## Added
- `navigation`: `prepostwalk` & `prepostwalk-demo`.
- `monkey-patch`: `monkey-patch`, `only` & `refresh-only`.
- `macro`: `clean-code`.

## Removed
- `namespace`: `once-ns`.

# [0.13.2] - 2017-10-29
## Added
- `shuriken.dev` namespace with `shuriken.monkey-patches.syntax-quote`.

## Fixed
- Remove `shuriken.monkey-patches.syntax-quote` from `shuriken.core`.
- `shuriken.monkey-patches.syntax-quote` changes `clojure.lang.LispReader`
  to use `clojure.tools.reader/read`.

# [0.13.1] - 2017-10-28
## Added
- Monkey-patch clojure:
  - New `pprint` translations for reader macro `~@`.

# [0.13.0] - 2017-10-22
## Added
- Execute code in another namespace with `with-ns`.
- Ensure a namespace is loaded only once with `once-ns` even using `use`
  or `require` with `:reload` `:reload-all`.
- Monkey-patch clojure to:
  - Use clojure.tools.reader `read` and `read-string`.
  - Introduce `syntax-quote`.
  - New `pprint` translations for reader macro ```.

## [0.12.2] - 2017-03-25
## Fixed
- `macro`: beautify output.
- CHANGELOG: some dates were not in ISO yyyy-mm-dd format.

## [0.12.1] - 2017-03-25
## Fixed:
  - `macro`: fixed a string in `macroexpand-do`.

## [0.12.0] - 2017-03-25
## Added
  - `macro`: `macroexpand-do`.

## [0.9.0] - 2017-01-28
## Added
  - `flow`: `silence`, `thrown?`.

## [0.8.0] - 2017-01-22
## Added
  - `sequential`: `separate`.

## [0.7.0] - 2017-01-16
## Added
  - `sequential`: `slice`.

## [0.6.0] - 2016-12-02
## Added
  - `associative`: `index-by`.

## [0.5.0] - 2016-11-27
## Added
  - `namespace`: `fully-qualified?`, `unqualify`.

## [0.4.0] - 2016-11-26
## Added
  - `navigation`: `tree-seq-breadth`.

## [0.3.0] - 2016-11-20
### Added
  - `associative`: `flatten-keys`, `deflatten-keys`, `deep-merge`.
  - `meta`: `without-meta`.

## [0.2.0] - 2016-11-20
### Added
  - `namespace`: `fully-qualify`.

## [0.1.0] - 2016-11-20
### Added
  - predicate composers: `and?`, `or?` & `not?`.
