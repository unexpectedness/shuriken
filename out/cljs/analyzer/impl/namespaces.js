// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.analyzer.impl.namespaces');
goog.require('cljs.core');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__6586 = libspec;
var seq__6587 = cljs.core.seq.call(null,vec__6586);
var first__6588 = cljs.core.first.call(null,seq__6587);
var seq__6587__$1 = cljs.core.next.call(null,seq__6587);
var lib = first__6588;
var spec = seq__6587__$1;
var libspec__$1 = vec__6586;
var vec__6589 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__6589,(0),null);
var vec__6592 = cljs.core.nth.call(null,vec__6589,(1),null);
var seq__6593 = cljs.core.seq.call(null,vec__6592);
var first__6594 = cljs.core.first.call(null,seq__6593);
var seq__6593__$1 = cljs.core.next.call(null,seq__6593);
var _ = first__6594;
var first__6594__$1 = cljs.core.first.call(null,seq__6593__$1);
var seq__6593__$2 = cljs.core.next.call(null,seq__6593__$1);
var alias = first__6594__$1;
var post_spec = seq__6593__$2;
var post = vec__6592;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__6595 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__6595,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__6595;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__6596 = cljs.core.seq.call(null,new_as_aliases);
var chunk__6597 = null;
var count__6598 = (0);
var i__6599 = (0);
while(true){
if((i__6599 < count__6598)){
var vec__6606 = cljs.core._nth.call(null,chunk__6597,i__6599);
var alias = cljs.core.nth.call(null,vec__6606,(0),null);
var _ = cljs.core.nth.call(null,vec__6606,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__6612 = seq__6596;
var G__6613 = chunk__6597;
var G__6614 = count__6598;
var G__6615 = (i__6599 + (1));
seq__6596 = G__6612;
chunk__6597 = G__6613;
count__6598 = G__6614;
i__6599 = G__6615;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6596);
if(temp__5804__auto__){
var seq__6596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6596__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6596__$1);
var G__6616 = cljs.core.chunk_rest.call(null,seq__6596__$1);
var G__6617 = c__5525__auto__;
var G__6618 = cljs.core.count.call(null,c__5525__auto__);
var G__6619 = (0);
seq__6596 = G__6616;
chunk__6597 = G__6617;
count__6598 = G__6618;
i__6599 = G__6619;
continue;
} else {
var vec__6609 = cljs.core.first.call(null,seq__6596__$1);
var alias = cljs.core.nth.call(null,vec__6609,(0),null);
var _ = cljs.core.nth.call(null,vec__6609,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__6620 = cljs.core.next.call(null,seq__6596__$1);
var G__6621 = null;
var G__6622 = (0);
var G__6623 = (0);
seq__6596 = G__6620;
chunk__6597 = G__6621;
count__6598 = G__6622;
i__6599 = G__6623;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__6625 = arguments.length;
switch (G__6625) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (ret__$1,libspec){
var map__6626 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__6626__$1 = cljs.core.__destructure_map.call(null,map__6626);
var as_alias = cljs.core.get.call(null,map__6626__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__6626__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__6627 = ret__$1;
var G__6627__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__6627,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__6627);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__6627__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__6627__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__6629,p__6630){
var map__6631 = p__6629;
var map__6631__$1 = cljs.core.__destructure_map.call(null,map__6631);
var ret__$1 = map__6631__$1;
var as_aliases = cljs.core.get.call(null,map__6631__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__6632 = p__6630;
var seq__6633 = cljs.core.seq.call(null,vec__6632);
var first__6634 = cljs.core.first.call(null,seq__6633);
var seq__6633__$1 = cljs.core.next.call(null,seq__6633);
var spec_key = first__6634;
var libspecs = seq__6633__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__6635 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__6635__$1 = cljs.core.__destructure_map.call(null,map__6635);
var as_aliases__$1 = cljs.core.get.call(null,map__6635__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__6635__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__6636 = ret__$1;
var G__6636__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__6636,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__6636);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__6636__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__6636__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map
