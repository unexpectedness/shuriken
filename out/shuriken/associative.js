// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.associative');
goog.require('cljs.core');
goog.require('clojure.set');
shuriken.associative.into_empty = (function shuriken$associative$into_empty(m,vs){
var result = cljs.core.into.call(null,cljs.core.empty.call(null,m),vs);
if(cljs.core.seq_QMARK_.call(null,m)){
return cljs.core.reverse.call(null,result);
} else {
return result;
}
});
/**
 * Applies `f` to each key of `m`.
 */
shuriken.associative.map_keys = (function shuriken$associative$map_keys(f,m){
return shuriken.associative.into_empty.call(null,m,cljs.core.map.call(null,(function (p__10895){
var vec__10896 = p__10895;
var k = cljs.core.nth.call(null,vec__10896,(0),null);
var v = cljs.core.nth.call(null,vec__10896,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
}),m));
});
/**
 * Applies `f` to each value of `m`.
 */
shuriken.associative.map_vals = (function shuriken$associative$map_vals(f,m){
return shuriken.associative.into_empty.call(null,m,cljs.core.map.call(null,(function (p__10899){
var vec__10900 = p__10899;
var k = cljs.core.nth.call(null,vec__10900,(0),null);
var v = cljs.core.nth.call(null,vec__10900,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),m));
});
/**
 * Filters `m` by applyng `f` to each key.
 */
shuriken.associative.filter_keys = (function shuriken$associative$filter_keys(f,m){
return shuriken.associative.into_empty.call(null,m,cljs.core.filter.call(null,(function (p1__10903_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__10903_SHARP_));
}),m));
});
/**
 * Filters `m` by applyng `f` to each value.
 */
shuriken.associative.filter_vals = (function shuriken$associative$filter_vals(f,m){
return shuriken.associative.into_empty.call(null,m,cljs.core.filter.call(null,(function (p1__10904_SHARP_){
return f.call(null,cljs.core.second.call(null,p1__10904_SHARP_));
}),m));
});
/**
 * Removes `m` by applyng `f` to each key.
 */
shuriken.associative.remove_keys = (function shuriken$associative$remove_keys(f,m){
return shuriken.associative.into_empty.call(null,m,cljs.core.remove.call(null,(function (p1__10905_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__10905_SHARP_));
}),m));
});
/**
 * Removes `m` by applyng `f` to each value.
 */
shuriken.associative.remove_vals = (function shuriken$associative$remove_vals(f,m){
return shuriken.associative.into_empty.call(null,m,cljs.core.remove.call(null,(function (p1__10906_SHARP_){
return f.call(null,cljs.core.second.call(null,p1__10906_SHARP_));
}),m));
});
shuriken.associative.flatten_keys_STAR_ = (function shuriken$associative$flatten_keys_STAR_(acc,ks,m){
if(((cljs.core.map_QMARK_.call(null,m)) && ((!(cljs.core.empty_QMARK_.call(null,m)))))){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,(function (p__10907){
var vec__10908 = p__10907;
var k = cljs.core.nth.call(null,vec__10908,(0),null);
var v = cljs.core.nth.call(null,vec__10908,(1),null);
return shuriken.associative.flatten_keys_STAR_.call(null,acc,cljs.core.conj.call(null,ks,k),v);
}),m));
} else {
return cljs.core.assoc.call(null,acc,ks,m);
}
});
/**
 * Transforms a nested map into a map where keys are paths through
 *   the original map and values are leafs these paths lead to.
 * 
 *   ```clojure
 *   (flatten-keys {:a {:b {:c :x
 *                       :d :y}}})
 *   => {[:a :b :c] :x
 *    [:a :b :d] :y}
 *   ```
 */
shuriken.associative.flatten_keys = (function shuriken$associative$flatten_keys(m){
if(cljs.core.empty_QMARK_.call(null,m)){
return m;
} else {
return shuriken.associative.flatten_keys_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,m);
}
});
/**
 * Builds a nested map out of a map obtained from [[flatten-keys]].
 * 
 *   ```clojure
 *   (deflatten-keys {[:a :b :c] :x
 *                 [:a :b :d] :y})
 *   => {:a {:b {:c :x
 *            :d :y}}}
 *   ```
 */
shuriken.associative.deflatten_keys = (function shuriken$associative$deflatten_keys(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10921 = arguments.length;
var i__5727__auto___10922 = (0);
while(true){
if((i__5727__auto___10922 < len__5726__auto___10921)){
args__5732__auto__.push((arguments[i__5727__auto___10922]));

var G__10923 = (i__5727__auto___10922 + (1));
i__5727__auto___10922 = G__10923;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shuriken.associative.deflatten_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shuriken.associative.deflatten_keys.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__10915){
var map__10916 = p__10915;
var map__10916__$1 = cljs.core.__destructure_map.call(null,map__10916);
var with$ = cljs.core.get.call(null,map__10916__$1,new cljs.core.Keyword(null,"with","with",-1536296876),(function (p1__10912_SHARP_,p2__10911_SHARP_){
return p2__10911_SHARP_;
}));
return cljs.core.reduce.call(null,(function (acc,p__10917){
var vec__10918 = p__10917;
var ks = cljs.core.nth.call(null,vec__10918,(0),null);
var v = cljs.core.nth.call(null,vec__10918,(1),null);
return cljs.core.update_in.call(null,acc,ks,(function (x){
if(cljs.core.truth_(x)){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,v], null))){
return cljs.core.merge_with.call(null,with$,x,v);
} else {
return with$.call(null,x,v);
}
} else {
return v;
}
}));
}),cljs.core.PersistentArrayMap.EMPTY,m);
}));

(shuriken.associative.deflatten_keys.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shuriken.associative.deflatten_keys.cljs$lang$applyTo = (function (seq10913){
var G__10914 = cljs.core.first.call(null,seq10913);
var seq10913__$1 = cljs.core.next.call(null,seq10913);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10914,seq10913__$1);
}));

shuriken.associative.deep_merge_STAR_ = (function shuriken$associative$deep_merge_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10930 = arguments.length;
var i__5727__auto___10931 = (0);
while(true){
if((i__5727__auto___10931 < len__5726__auto___10930)){
args__5732__auto__.push((arguments[i__5727__auto___10931]));

var G__10932 = (i__5727__auto___10931 + (1));
i__5727__auto___10931 = G__10932;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shuriken.associative.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shuriken.associative.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m1f,p__10926){
var vec__10927 = p__10926;
var seq__10928 = cljs.core.seq.call(null,vec__10927);
var first__10929 = cljs.core.first.call(null,seq__10928);
var seq__10928__$1 = cljs.core.next.call(null,seq__10928);
var m2 = first__10929;
var more = seq__10928__$1;
if(cljs.core.not.call(null,m2)){
return m1f;
} else {
var m2f = shuriken.associative.flatten_keys.call(null,m2);
var m1m2f = cljs.core.merge.call(null,m1f,m2f);
return cljs.core.apply.call(null,shuriken.associative.deep_merge_STAR_,m1m2f,(function (){var or__5002__auto__ = more;
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}
}));

(shuriken.associative.deep_merge_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shuriken.associative.deep_merge_STAR_.cljs$lang$applyTo = (function (seq10924){
var G__10925 = cljs.core.first.call(null,seq10924);
var seq10924__$1 = cljs.core.next.call(null,seq10924);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10925,seq10924__$1);
}));

/**
 * Deep merges two or more nested maps.
 * 
 *   ```clojure
 *   (deep-merge {:x {:a :a  :b :b  :c :c}}
 *            {:x {:a :aa :b :bb}}
 *            {:x {:a :aaa}})
 * 
 *   => {:x {:a :aaa  :b :bb  :c :c}}
 *   ```
 */
shuriken.associative.deep_merge = (function shuriken$associative$deep_merge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10935 = arguments.length;
var i__5727__auto___10936 = (0);
while(true){
if((i__5727__auto___10936 < len__5726__auto___10935)){
args__5732__auto__.push((arguments[i__5727__auto___10936]));

var G__10937 = (i__5727__auto___10936 + (1));
i__5727__auto___10936 = G__10937;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shuriken.associative.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shuriken.associative.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (m,more){
return shuriken.associative.deflatten_keys.call(null,cljs.core.apply.call(null,shuriken.associative.deep_merge_STAR_,shuriken.associative.flatten_keys.call(null,m),more));
}));

(shuriken.associative.deep_merge.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shuriken.associative.deep_merge.cljs$lang$applyTo = (function (seq10933){
var G__10934 = cljs.core.first.call(null,seq10933);
var seq10933__$1 = cljs.core.next.call(null,seq10933);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10934,seq10933__$1);
}));

shuriken.associative.raise_error_index_strategy = (function shuriken$associative$raise_error_index_strategy(key,entries){
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,entries))){
throw cljs.core.ex_info.call(null,cljs.core.pr_str.call(null,"Can't index key ",key," because of duplicate ","entries ",cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),entries)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"index-by-duplicate-entries","index-by-duplicate-entries",-1318994093),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),entries),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return cljs.core.first.call(null,entries);
}
});
/**
 * Like `group-by` except it applies a strategy to each grouped
 *   collection.
 *   A strategy is a function with signature `(key, entries) -> entry`
 *   where `entry` is the one that will be indexed.
 *   The default strategy asserts there is only one entry for the given
 *   key and returns it.
 * 
 *   ```clojure
 *   (def ms [{:a 1 :b 2} {:a 3 :b 4} {:a 5 :b 4}])
 * 
 *   (index-by :a ms)
 *   => {1 {:a 1 :b 2}
 *    3 {:a 3 :b 4}
 *    5 {:a 5 :b 4}}
 * 
 *   (index-by :b ms)
 *   => ; clojure.lang.ExceptionInfo (Duplicate entries for key 4)
 * 
 *   (index-by :b (fn [key entries]
 *               (last entries))
 *          ms)
 *   => {2 {:a 1 :b 2}
 *    4 {:a 5 :b 4}}
 *   ```
 */
shuriken.associative.index_by = (function shuriken$associative$index_by(var_args){
var G__10939 = arguments.length;
switch (G__10939) {
case 2:
return shuriken.associative.index_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shuriken.associative.index_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shuriken.associative.index_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return shuriken.associative.index_by.call(null,f,shuriken.associative.raise_error_index_strategy,coll);
}));

(shuriken.associative.index_by.cljs$core$IFn$_invoke$arity$3 = (function (f,strategy,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10940){
var vec__10941 = p__10940;
var k = cljs.core.nth.call(null,vec__10941,(0),null);
var vs = cljs.core.nth.call(null,vec__10941,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,strategy.call(null,k,vs)], null);
}),cljs.core.group_by.call(null,f,coll)));
}));

(shuriken.associative.index_by.cljs$lang$maxFixedArity = 3);

/**
 * Alias of `vals`.
 */
shuriken.associative.unindex = cljs.core.vals;
/**
 * Like `merge-with` except that the combination fn of a specific pair
 *   of entries is determined by looking up their key in `plan`. If not
 *   found, falls back to the function found under key `:else` or if not
 *   provided to a function that returns the value in the right-most map,
 *   thus providing the behavior of `merge`.
 *   In addition to a map, `plan` can also be a function accepting a key
 *   and returning a combination fn for the two values to merge.
 * 
 *   You can use [[continue|]] to combine values of a key known to hold functions
 *   in a cps-like style: namely, functions will be composed from right to left,
 *   each one being passed as first argument the next function to call in the
 *   chain.
 */
shuriken.associative.plan_merge = (function shuriken$associative$plan_merge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10949 = arguments.length;
var i__5727__auto___10950 = (0);
while(true){
if((i__5727__auto___10950 < len__5726__auto___10949)){
args__5732__auto__.push((arguments[i__5727__auto___10950]));

var G__10951 = (i__5727__auto___10950 + (1));
i__5727__auto___10950 = G__10951;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shuriken.associative.plan_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shuriken.associative.plan_merge.cljs$core$IFn$_invoke$arity$variadic = (function (plan,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k)){
var else_f = cljs.core.get.call(null,plan,new cljs.core.Keyword(null,"else","else",-1508377146),(function (p1__10946_SHARP_,p2__10945_SHARP_){
return cljs.core.identity.call(null,p2__10945_SHARP_);
}));
var f = cljs.core.get.call(null,plan,k,else_f);
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge2 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__5002__auto__ = m1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
}));

(shuriken.associative.plan_merge.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shuriken.associative.plan_merge.cljs$lang$applyTo = (function (seq10947){
var G__10948 = cljs.core.first.call(null,seq10947);
var seq10947__$1 = cljs.core.next.call(null,seq10947);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10948,seq10947__$1);
}));

shuriken.associative.merge_with_plan = shuriken.associative.plan_merge;
/**
 * Takes two functions `fa` & `fb` and returns the partial application of `fb`
 *   to `fa`.
 * 
 *   See [[plan-merge]].
 */
shuriken.associative.continue_BAR_ = (function shuriken$associative$continue_BAR_(fa,fb){
return cljs.core.partial.call(null,fb,fa);
});
/**
 * Returns a series of maps built by splitting `m` along each sequence
 *   of keys in `kss`: the first map has `(first kss)` as keys, the second
 *   one `(second kss)`, etc ... while the last map has the remaining keys
 *   from `m`.
 */
shuriken.associative.split_map = (function shuriken$associative$split_map(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10954 = arguments.length;
var i__5727__auto___10955 = (0);
while(true){
if((i__5727__auto___10955 < len__5726__auto___10954)){
args__5732__auto__.push((arguments[i__5727__auto___10955]));

var G__10956 = (i__5727__auto___10955 + (1));
i__5727__auto___10955 = G__10956;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shuriken.associative.split_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shuriken.associative.split_map.cljs$core$IFn$_invoke$arity$variadic = (function (m,kss){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.select_keys,m),kss),(function (){var remaining = cljs.core.apply.call(null,cljs.core.dissoc,m,cljs.core.apply.call(null,cljs.core.concat,kss));
if(cljs.core.seq.call(null,remaining)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [remaining], null);
} else {
return null;
}
})()));
}));

(shuriken.associative.split_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shuriken.associative.split_map.cljs$lang$applyTo = (function (seq10952){
var G__10953 = cljs.core.first.call(null,seq10952);
var seq10952__$1 = cljs.core.next.call(null,seq10952);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10953,seq10952__$1);
}));

/**
 * Returns a submap of m excluding any entry whose key appear in any of
 *   the remaining maps.
 */
shuriken.associative.map_difference = (function shuriken$associative$map_difference(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10959 = arguments.length;
var i__5727__auto___10960 = (0);
while(true){
if((i__5727__auto___10960 < len__5726__auto___10959)){
args__5732__auto__.push((arguments[i__5727__auto___10960]));

var G__10961 = (i__5727__auto___10960 + (1));
i__5727__auto___10960 = G__10961;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shuriken.associative.map_difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shuriken.associative.map_difference.cljs$core$IFn$_invoke$arity$variadic = (function (m,ms){
return cljs.core.apply.call(null,cljs.core.dissoc,m,cljs.core.keys.call(null,cljs.core.apply.call(null,cljs.core.merge,ms)));
}));

(shuriken.associative.map_difference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shuriken.associative.map_difference.cljs$lang$applyTo = (function (seq10957){
var G__10958 = cljs.core.first.call(null,seq10957);
var seq10957__$1 = cljs.core.next.call(null,seq10957);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10958,seq10957__$1);
}));

/**
 * Returns a submap of m including only entries whose key appear in all of
 *   the remaining maps.
 */
shuriken.associative.map_intersection = (function shuriken$associative$map_intersection(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10964 = arguments.length;
var i__5727__auto___10965 = (0);
while(true){
if((i__5727__auto___10965 < len__5726__auto___10964)){
args__5732__auto__.push((arguments[i__5727__auto___10965]));

var G__10966 = (i__5727__auto___10965 + (1));
i__5727__auto___10965 = G__10966;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shuriken.associative.map_intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shuriken.associative.map_intersection.cljs$core$IFn$_invoke$arity$variadic = (function (m,ms){
return cljs.core.select_keys.call(null,m,cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),ms)));
}));

(shuriken.associative.map_intersection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shuriken.associative.map_intersection.cljs$lang$applyTo = (function (seq10962){
var G__10963 = cljs.core.first.call(null,seq10962);
var seq10962__$1 = cljs.core.next.call(null,seq10962);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10963,seq10962__$1);
}));

/**
 * Determines whether `map1` is a subset, keys and values wise, of
 *   `map2`.
 */
shuriken.associative.submap_QMARK_ = (function shuriken$associative$submap_QMARK_(map1,map2){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,map1),cljs.core.set.call(null,map2));
});
var ret__5781__auto___10970 = /**
 * Gets value at key `k` in hash `m` if present, otherwise eval
 *   `expr` and stores its result in `m` under key `k`.
 *   Returns a vector of the form [get-or-stored-value new-coll].
 */
shuriken.associative.getsoc = (function shuriken$associative$getsoc(_AMPERSAND_form,_AMPERSAND_env,coll,k,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__10967__auto__","coll__10967__auto__",1621424913,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__10968__auto__","k__10968__auto__",-1670136599,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__10967__auto__","coll__10967__auto__",1621424913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__10968__auto__","k__10968__auto__",-1670136599,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__10967__auto__","coll__10967__auto__",1621424913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__10968__auto__","k__10968__auto__",-1670136599,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__10967__auto__","coll__10967__auto__",1621424913,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expr__10969__auto__","expr__10969__auto__",1240154387,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expr__10969__auto__","expr__10969__auto__",1240154387,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__10967__auto__","coll__10967__auto__",1621424913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__10968__auto__","k__10968__auto__",-1670136599,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expr__10969__auto__","expr__10969__auto__",1240154387,null),null,(1),null))))),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(shuriken.associative.getsoc.cljs$lang$macro = true);


//# sourceMappingURL=associative.js.map
