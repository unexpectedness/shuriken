// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.sequential');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('shuriken.namespace');
goog.require('shuriken.spec');
goog.require('cljs.analyzer.api');
shuriken.sequential.reduce1 = (function shuriken$sequential$reduce1(var_args){
var G__7509 = arguments.length;
switch (G__7509) {
case 2:
return shuriken.sequential.reduce1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shuriken.sequential.reduce1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shuriken.sequential.reduce1.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var s = cljs.core.seq.call(null,coll);
if(s){
return shuriken.sequential.reduce1.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s));
} else {
return f.call(null);
}
}));

(shuriken.sequential.reduce1.cljs$core$IFn$_invoke$arity$3 = (function (f,val,coll){
while(true){
var s = cljs.core.seq.call(null,coll);
if(s){
if(cljs.core.chunked_seq_QMARK_.call(null,s)){
var G__7511 = f;
var G__7512 = cljs.core.chunk_first.call(null,s).reduce(f,val);
var G__7513 = cljs.core.chunk_next.call(null,s);
f = G__7511;
val = G__7512;
coll = G__7513;
continue;
} else {
var G__7514 = f;
var G__7515 = f.call(null,val,cljs.core.first.call(null,s));
var G__7516 = cljs.core.next.call(null,s);
f = G__7514;
val = G__7515;
coll = G__7516;
continue;
}
} else {
return val;
}
break;
}
}));

(shuriken.sequential.reduce1.cljs$lang$maxFixedArity = 3);

/**
 * Like get but also works on lists.
 */
shuriken.sequential.get_nth = (function shuriken$sequential$get_nth(var_args){
var G__7518 = arguments.length;
switch (G__7518) {
case 2:
return shuriken.sequential.get_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shuriken.sequential.get_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shuriken.sequential.get_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,k){
return shuriken.sequential.get_nth.call(null,coll,k,null);
}));

(shuriken.sequential.get_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,k,not_found){
if(((cljs.core.associative_QMARK_.call(null,coll)) || ((coll == null)))){
return cljs.core.get.call(null,coll,k,not_found);
} else {
return cljs.core.nth.call(null,coll,k,not_found);
}
}));

(shuriken.sequential.get_nth.cljs$lang$maxFixedArity = 3);

/**
 * Like get-in but also works on lists.
 */
shuriken.sequential.get_nth_in = (function shuriken$sequential$get_nth_in(var_args){
var G__7523 = arguments.length;
switch (G__7523) {
case 2:
return shuriken.sequential.get_nth_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shuriken.sequential.get_nth_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shuriken.sequential.get_nth_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return shuriken.sequential.get_nth_in.call(null,m,ks,null);
}));

(shuriken.sequential.get_nth_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,not_found){
return cljs.core.reduce.call(null,(function (p1__7520_SHARP_,p2__7521_SHARP_){
return shuriken.sequential.get_nth.call(null,p1__7520_SHARP_,p2__7521_SHARP_,not_found);
}),m,ks);
}));

(shuriken.sequential.get_nth_in.cljs$lang$maxFixedArity = 3);

/**
 * Like assoc but also works on lists.
 *   Optionally accepts an initial `not-found` argument (defaults to `nil`).
 */
shuriken.sequential.assoc_nth = (function shuriken$sequential$assoc_nth(var_args){
var G__7526 = arguments.length;
switch (G__7526) {
case 3:
return shuriken.sequential.assoc_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shuriken.sequential.assoc_nth.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shuriken.sequential.assoc_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,n,v){
return shuriken.sequential.assoc_nth.call(null,cljs.core.PersistentArrayMap.EMPTY,coll,n,v);
}));

(shuriken.sequential.assoc_nth.cljs$core$IFn$_invoke$arity$4 = (function (not_found,coll,n,v){
var coll__$1 = (((coll == null))?not_found:coll);
if(cljs.core.associative_QMARK_.call(null,coll__$1)){
return cljs.core.assoc.call(null,coll__$1,n,v);
} else {
if((n <= cljs.core.count.call(null,coll__$1))){
} else {
throw (new Error("Index out of bounds"));
}

return cljs.core.concat.call(null,cljs.core.take.call(null,n,coll__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.drop.call(null,(n + (1)),coll__$1));
}
}));

(shuriken.sequential.assoc_nth.cljs$lang$maxFixedArity = 4);

/**
 * Like assoc-in but also works on lists.
 *   Optionally accepts an initial `not-found-f` argument, a fn of signature
 *  `(fn [path coll])`
 *   (defaults to `(constantly {})`).
 */
shuriken.sequential.assoc_nth_in = (function shuriken$sequential$assoc_nth_in(var_args){
var G__7529 = arguments.length;
switch (G__7529) {
case 3:
return shuriken.sequential.assoc_nth_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shuriken.sequential.assoc_nth_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shuriken.sequential.assoc_nth_in.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shuriken.sequential.assoc_nth_in.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,v){
return shuriken.sequential.assoc_nth_in.call(null,cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY),coll,ks,v);
}));

(shuriken.sequential.assoc_nth_in.cljs$core$IFn$_invoke$arity$4 = (function (not_found_f,coll,ks,v){
return shuriken.sequential.assoc_nth_in.call(null,cljs.core.PersistentVector.EMPTY,not_found_f,coll,ks,v);
}));

(shuriken.sequential.assoc_nth_in.cljs$core$IFn$_invoke$arity$5 = (function (pth,not_found_f,coll,p__7530,v){
var vec__7531 = p__7530;
var seq__7532 = cljs.core.seq.call(null,vec__7531);
var first__7533 = cljs.core.first.call(null,seq__7532);
var seq__7532__$1 = cljs.core.next.call(null,seq__7532);
var k = first__7533;
var ks = seq__7532__$1;
var pth__$1 = cljs.core.conj.call(null,pth,k);
if(ks){
return shuriken.sequential.assoc_nth.call(null,not_found_f.call(null,pth__$1,coll),coll,k,shuriken.sequential.assoc_nth_in.call(null,pth__$1,not_found_f,shuriken.sequential.get_nth.call(null,coll,k),ks,v));
} else {
return shuriken.sequential.assoc_nth.call(null,not_found_f.call(null,pth__$1,coll),coll,k,v);
}
}));

(shuriken.sequential.assoc_nth_in.cljs$lang$maxFixedArity = 5);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("shuriken.sequential","update-nth-args","shuriken.sequential/update-nth-args",316491071),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__7535#","p1__7535#",1980822789,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol(null,"p1__7535#","p1__7535#",1980822789,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol(null,"p1__7535#","p1__7535#",1980822789,null))))),new cljs.core.Keyword(null,"m","m",1632677161),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__7536#","p1__7536#",-882111013,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol(null,"p1__7536#","p1__7536#",-882111013,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol(null,"p1__7536#","p1__7536#",-882111013,null)))),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl.call(null,(function (p1__7535_SHARP_){
return ((cljs.core.coll_QMARK_.call(null,p1__7535_SHARP_)) || ((p1__7535_SHARP_ == null)));
}),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),(function (p1__7536_SHARP_){
return ((cljs.core.coll_QMARK_.call(null,p1__7536_SHARP_)) || ((p1__7536_SHARP_ == null)));
}),cljs.core.any_QMARK_,cljs.core.ifn_QMARK_,cljs.spec.alpha.rep_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__7535#","p1__7535#",1980822789,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol(null,"p1__7535#","p1__7535#",1980822789,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol(null,"p1__7535#","p1__7535#",1980822789,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)));
/**
 * Like update but also works on lists.
 *   Optionally accepts an initial `not-found` argument (defaults to `nil`).
 */
shuriken.sequential.update_nth = (function shuriken$sequential$update_nth(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7539 = arguments.length;
var i__5727__auto___7540 = (0);
while(true){
if((i__5727__auto___7540 < len__5726__auto___7539)){
args__5732__auto__.push((arguments[i__5727__auto___7540]));

var G__7541 = (i__5727__auto___7540 + (1));
i__5727__auto___7540 = G__7541;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.update_nth.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.update_nth.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var map__7538 = shuriken.spec.conform_BANG_.call(null,new cljs.core.Keyword("shuriken.sequential","update-nth-args","shuriken.sequential/update-nth-args",316491071),args);
var map__7538__$1 = cljs.core.__destructure_map.call(null,map__7538);
var not_found = cljs.core.get.call(null,map__7538__$1,new cljs.core.Keyword(null,"not-found","not-found",-629079980),cljs.core.PersistentArrayMap.EMPTY);
var m = cljs.core.get.call(null,map__7538__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var k = cljs.core.get.call(null,map__7538__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var f = cljs.core.get.call(null,map__7538__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args__$1 = cljs.core.get.call(null,map__7538__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return shuriken.sequential.assoc_nth.call(null,not_found,m,k,cljs.core.apply.call(null,f,shuriken.sequential.get_nth.call(null,m,k),args__$1));
}));

(shuriken.sequential.update_nth.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.update_nth.cljs$lang$applyTo = (function (seq7537){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7537));
}));

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("shuriken.sequential","update-nth-in-args","shuriken.sequential/update-nth-in-args",-646007330),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"not-found-f","not-found-f",1120414960),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null)),new cljs.core.Keyword(null,"m","m",1632677161),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__7542#","p1__7542#",861928130,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol(null,"p1__7542#","p1__7542#",861928130,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol(null,"p1__7542#","p1__7542#",861928130,null)))),new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-found-f","not-found-f",1120414960),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"ks","ks",1900203942),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl.call(null,cljs.core.ifn_QMARK_,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null)),(function (p1__7542_SHARP_){
return ((cljs.core.coll_QMARK_.call(null,p1__7542_SHARP_)) || ((p1__7542_SHARP_ == null)));
}),cljs.core.sequential_QMARK_,cljs.core.ifn_QMARK_,cljs.spec.alpha.rep_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)));
/**
 * Like update-in but also works on lists.
 *   Optionally accepts an initial `not-found-f` argument, a fn of signature
 *  `(fn [path coll])`
 *   (defaults to `(constantly {})`).
 */
shuriken.sequential.update_nth_in = (function shuriken$sequential$update_nth_in(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7548 = arguments.length;
var i__5727__auto___7549 = (0);
while(true){
if((i__5727__auto___7549 < len__5726__auto___7548)){
args__5732__auto__.push((arguments[i__5727__auto___7549]));

var G__7550 = (i__5727__auto___7549 + (1));
i__5727__auto___7549 = G__7550;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.update_nth_in.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.update_nth_in.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var map__7544 = shuriken.spec.conform_BANG_.call(null,new cljs.core.Keyword("shuriken.sequential","update-nth-in-args","shuriken.sequential/update-nth-in-args",-646007330),args);
var map__7544__$1 = cljs.core.__destructure_map.call(null,map__7544);
var not_found_f = cljs.core.get.call(null,map__7544__$1,new cljs.core.Keyword(null,"not-found-f","not-found-f",1120414960),cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));
var m = cljs.core.get.call(null,map__7544__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var ks = cljs.core.get.call(null,map__7544__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var f = cljs.core.get.call(null,map__7544__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args__$1 = cljs.core.get.call(null,map__7544__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var up = (function shuriken$sequential$up(pth,m__$1,ks__$1,f__$1,args__$2){
var vec__7545 = ks__$1;
var seq__7546 = cljs.core.seq.call(null,vec__7545);
var first__7547 = cljs.core.first.call(null,seq__7546);
var seq__7546__$1 = cljs.core.next.call(null,seq__7546);
var k = first__7547;
var ks__$2 = seq__7546__$1;
var pth__$1 = cljs.core.conj.call(null,pth,k);
if(ks__$2){
return shuriken.sequential.assoc_nth.call(null,not_found_f.call(null,pth__$1,m__$1),m__$1,k,shuriken$sequential$up.call(null,pth__$1,shuriken.sequential.get_nth.call(null,m__$1,k),ks__$2,f__$1,args__$2));
} else {
return shuriken.sequential.assoc_nth.call(null,not_found_f.call(null,pth__$1,m__$1),m__$1,k,cljs.core.apply.call(null,f__$1,shuriken.sequential.get_nth.call(null,m__$1,k),args__$2));
}
});
return up.call(null,cljs.core.PersistentVector.EMPTY,m,ks,f,args__$1);
}));

(shuriken.sequential.update_nth_in.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.update_nth_in.cljs$lang$applyTo = (function (seq7543){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7543));
}));

shuriken.sequential.insert_at = (function shuriken$sequential$insert_at(s,n,x){
if((((n < (0))) || ((n > cljs.core.count.call(null,s))))){
throw (new Error("Index out of bounds"));
} else {
}

var vec__7551 = cljs.core.split_at.call(null,n,s);
var before = cljs.core.nth.call(null,vec__7551,(0),null);
var after = cljs.core.nth.call(null,vec__7551,(1),null);
var $ = cljs.core.into.call(null,cljs.core.empty.call(null,s),cljs.core.concat.call(null,before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),after));
if(cljs.core.seq_QMARK_.call(null,$)){
return cljs.core.reverse.call(null,$);
} else {
return $;
}
});
/**
 * Slice a seq using a delimiter predicate. There are two options:
 *   ```
 *   - :include-delimiter  false | :left | :right
 *                        whether to include the delimiter and where
 *   - :include-empty      true | false
 *                        whether to create empty seqs between
 *                        successive delimiters
 *   ```
 * 
 *   ```clojure
 *   (let [coll [1 1 0 1 0 0 1 1]]
 *  ;; the default
 *  (slice zero? coll) ;; by default, :include-delimiter false,
 *                                    :include-empty     false
 *  => ((1 1) (1) (1 1))
 * 
 *  (slice zero? coll :include-empty true)
 *  => ((1 1) (1) () (1 1))
 * 
 *  (slice zero? coll :include-delimiter :left)
 *  => ((1 1) (0 1) (0 1 1))
 * 
 *  (slice zero? coll :include-delimiter :right)
 *  => ((1 1 0) (1 0) (1 1))
 * 
 *  (slice zero? coll :include-delimiter :right :include-empty true)
 *  => ((1 1 0) (1 0) (0) (1 1))
 *  )
 *   ```
 */
shuriken.sequential.slice = (function shuriken$sequential$slice(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7570 = arguments.length;
var i__5727__auto___7571 = (0);
while(true){
if((i__5727__auto___7571 < len__5726__auto___7570)){
args__5732__auto__.push((arguments[i__5727__auto___7571]));

var G__7572 = (i__5727__auto___7571 + (1));
i__5727__auto___7571 = G__7572;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.slice.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.slice.cljs$core$IFn$_invoke$arity$variadic = (function (delimiter_QMARK_,coll,p__7557){
var map__7558 = p__7557;
var map__7558__$1 = cljs.core.__destructure_map.call(null,map__7558);
var include_delimiter = cljs.core.get.call(null,map__7558__$1,new cljs.core.Keyword(null,"include-delimiter","include-delimiter",-299579457),false);
var include_empty = cljs.core.get.call(null,map__7558__$1,new cljs.core.Keyword(null,"include-empty","include-empty",1992495609),false);
var not_delimiter_QMARK_ = cljs.core.complement.call(null,delimiter_QMARK_);
var vec__7559 = cljs.core.split_with.call(null,not_delimiter_QMARK_,coll);
var before_first_delim = cljs.core.nth.call(null,vec__7559,(0),null);
var from_first_delim = cljs.core.nth.call(null,vec__7559,(1),null);
var result = (function (){var xs = from_first_delim;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs)){
return acc;
} else {
var delim = cljs.core.first.call(null,xs);
var vec__7566 = cljs.core.split_with.call(null,not_delimiter_QMARK_,cljs.core.rest.call(null,xs));
var after_delim = cljs.core.nth.call(null,vec__7566,(0),null);
var next_slice = cljs.core.nth.call(null,vec__7566,(1),null);
var G__7573 = next_slice;
var G__7574 = ((((cljs.core.not.call(null,include_empty)) && (cljs.core.empty_QMARK_.call(null,after_delim))))?acc:(function (){var current_slice = (function (){var G__7569 = include_delimiter;
if(cljs.core._EQ_.call(null,null,G__7569)){
return after_delim;
} else {
if(cljs.core._EQ_.call(null,false,G__7569)){
return after_delim;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),G__7569)){
return cljs.core.cons.call(null,delim,after_delim);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),G__7569)){
return cljs.core.concat.call(null,after_delim,cljs.core.take.call(null,(1),next_slice));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7569)].join('')));

}
}
}
}
})();
return cljs.core.conj.call(null,acc,current_slice);
})());
xs = G__7573;
acc = G__7574;
continue;
}
break;
}
})();
return cljs.core.seq.call(null,((cljs.core.empty_QMARK_.call(null,before_first_delim))?result:cljs.core.cons.call(null,((cljs.core._EQ_.call(null,include_delimiter,new cljs.core.Keyword(null,"right","right",-452581833)))?cljs.core.concat.call(null,before_first_delim,cljs.core.take.call(null,(1),from_first_delim)):before_first_delim),result)));
}));

(shuriken.sequential.slice.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.slice.cljs$lang$applyTo = (function (seq7554){
var G__7555 = cljs.core.first.call(null,seq7554);
var seq7554__$1 = cljs.core.next.call(null,seq7554);
var G__7556 = cljs.core.first.call(null,seq7554__$1);
var seq7554__$2 = cljs.core.next.call(null,seq7554__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7555,G__7556,seq7554__$2);
}));

/**
 * Returns a vector equal to `[(filter pred coll) (remove pred coll)]`
 *   but faster.
 * 
 *   ```clojure
 *   (let [coll [1 1 0 1 0 0 1 1 0]]
 *  (separate zero? coll))
 *  => [(1 1 1 1 1) (0 0 0 0)]
 *   ```
 */
shuriken.sequential.separate = (function shuriken$sequential$separate(pred,coll){
return cljs.core.reduce.call(null,(function (p__7575,v){
var vec__7576 = p__7575;
var l_acc = cljs.core.nth.call(null,vec__7576,(0),null);
var r_acc = cljs.core.nth.call(null,vec__7576,(1),null);
if(cljs.core.truth_(pred.call(null,v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,l_acc,v),r_acc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_acc,cljs.core.conj.call(null,r_acc,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),coll);
});
/**
 * Returns the greatest of the elements by pred.
 */
shuriken.sequential.max_by = (function shuriken$sequential$max_by(var_args){
var G__7584 = arguments.length;
switch (G__7584) {
case 2:
return shuriken.sequential.max_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shuriken.sequential.max_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___7586 = arguments.length;
var i__5727__auto___7587 = (0);
while(true){
if((i__5727__auto___7587 < len__5726__auto___7586)){
args_arr__5751__auto__.push((arguments[i__5727__auto___7587]));

var G__7588 = (i__5727__auto___7587 + (1));
i__5727__auto___7587 = G__7588;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return shuriken.sequential.max_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(shuriken.sequential.max_by.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return x;
}));

(shuriken.sequential.max_by.cljs$core$IFn$_invoke$arity$3 = (function (f,x,y){
if((cljs.core.compare.call(null,f.call(null,x),f.call(null,y)) > (0))){
return x;
} else {
return y;
}
}));

(shuriken.sequential.max_by.cljs$core$IFn$_invoke$arity$variadic = (function (f,x,y,more){
return shuriken.sequential.reduce1.call(null,cljs.core.partial.call(null,shuriken.sequential.max_by,f),shuriken.sequential.max_by.call(null,f,x,y),more);
}));

/** @this {Function} */
(shuriken.sequential.max_by.cljs$lang$applyTo = (function (seq7580){
var G__7581 = cljs.core.first.call(null,seq7580);
var seq7580__$1 = cljs.core.next.call(null,seq7580);
var G__7582 = cljs.core.first.call(null,seq7580__$1);
var seq7580__$2 = cljs.core.next.call(null,seq7580__$1);
var G__7583 = cljs.core.first.call(null,seq7580__$2);
var seq7580__$3 = cljs.core.next.call(null,seq7580__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7581,G__7582,G__7583,seq7580__$3);
}));

(shuriken.sequential.max_by.cljs$lang$maxFixedArity = (3));

/**
 * Returns the least of the elements by pred.
 */
shuriken.sequential.min_by = (function shuriken$sequential$min_by(var_args){
var G__7594 = arguments.length;
switch (G__7594) {
case 2:
return shuriken.sequential.min_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shuriken.sequential.min_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___7596 = arguments.length;
var i__5727__auto___7597 = (0);
while(true){
if((i__5727__auto___7597 < len__5726__auto___7596)){
args_arr__5751__auto__.push((arguments[i__5727__auto___7597]));

var G__7598 = (i__5727__auto___7597 + (1));
i__5727__auto___7597 = G__7598;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return shuriken.sequential.min_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(shuriken.sequential.min_by.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return x;
}));

(shuriken.sequential.min_by.cljs$core$IFn$_invoke$arity$3 = (function (f,x,y){
if((cljs.core.compare.call(null,f.call(null,x),f.call(null,y)) < (0))){
return x;
} else {
return y;
}
}));

(shuriken.sequential.min_by.cljs$core$IFn$_invoke$arity$variadic = (function (f,x,y,more){
return shuriken.sequential.reduce1.call(null,cljs.core.partial.call(null,shuriken.sequential.min_by,f),shuriken.sequential.min_by.call(null,f,x,y),more);
}));

/** @this {Function} */
(shuriken.sequential.min_by.cljs$lang$applyTo = (function (seq7590){
var G__7591 = cljs.core.first.call(null,seq7590);
var seq7590__$1 = cljs.core.next.call(null,seq7590);
var G__7592 = cljs.core.first.call(null,seq7590__$1);
var seq7590__$2 = cljs.core.next.call(null,seq7590__$1);
var G__7593 = cljs.core.first.call(null,seq7590__$2);
var seq7590__$3 = cljs.core.next.call(null,seq7590__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7591,G__7592,G__7593,seq7590__$3);
}));

(shuriken.sequential.min_by.cljs$lang$maxFixedArity = (3));

/**
 * Split `coll` in sub-sequences of length n1 for the first, n2 for the second,
 *   etc... Appends the remaining items of coll as the final sub-sequence if they
 *   have not been consumed by the successive takes. Returns the specified seqs
 *   in order, possibly empty if there were not enough elements for all.
 * 
 *   ```clojure
 *   (takes [1 2 3] [:a :b])                ;; => ((:a) (:b))
 *   (takes [1 2 3] [:a :b :c])             ;; => ((:a) (:b :c))
 *   (takes [1 2 3] [:a :b :c :d :e :f])    ;; => ((:a) (:b :c) (:d :e :f))
 *   (takes [1 2 3] [:a :b :c :d :e :f :g]) ;; => ((:a) (:b :c) (:d :e :f) (:g))
 *   (takes [0 0 1 0 2] [:a :b :c :d :e])   ;; => (() () (:a) () (:b :c) (:d :e))
 *   ```
 */
shuriken.sequential.takes = (function shuriken$sequential$takes(p__7604,coll){
var vec__7605 = p__7604;
var seq__7606 = cljs.core.seq.call(null,vec__7605);
var first__7607 = cljs.core.first.call(null,seq__7606);
var seq__7606__$1 = cljs.core.next.call(null,seq__7606);
var n = first__7607;
var more = seq__7606__$1;
if(more){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,n,coll)], null),(new cljs.core.LazySeq(null,(function (){
return shuriken.sequential.takes.call(null,more,cljs.core.drop.call(null,n,coll));
}),null,null)));
} else {
return cljs.core.keep.call(null,(function (p1__7603_SHARP_){
var and__5000__auto__ = cljs.core.seq.call(null,p1__7603_SHARP_);
if(and__5000__auto__){
return p1__7603_SHARP_;
} else {
return and__5000__auto__;
}
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,n,coll)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.drop.call(null,n,coll)], null)));
}
});
/**
 * Shorthand for `(remove nil? xs)`.
 */
shuriken.sequential.compact = (function shuriken$sequential$compact(xs){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,xs);
});
/**
 * Returns the first value present in `m` for keys `ks`, otherwise
 *   returns `nil`.
 *   Returns `nil` if `m` is empty or one of the keys is `nil`.
 */
shuriken.sequential.get_some = (function shuriken$sequential$get_some(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7614 = arguments.length;
var i__5727__auto___7615 = (0);
while(true){
if((i__5727__auto___7615 < len__5726__auto___7614)){
args__5732__auto__.push((arguments[i__5727__auto___7615]));

var G__7616 = (i__5727__auto___7615 + (1));
i__5727__auto___7615 = G__7616;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shuriken.sequential.get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shuriken.sequential.get_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__7610){
var vec__7611 = p__7610;
var seq__7612 = cljs.core.seq.call(null,vec__7611);
var first__7613 = cljs.core.first.call(null,seq__7612);
var seq__7612__$1 = cljs.core.next.call(null,seq__7612);
var k = first__7613;
var ks = seq__7612__$1;
if((!((k == null)))){
return cljs.core.get.call(null,m,k,cljs.core.apply.call(null,shuriken.sequential.get_some,m,ks));
} else {
return null;
}
}));

(shuriken.sequential.get_some.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shuriken.sequential.get_some.cljs$lang$applyTo = (function (seq7608){
var G__7609 = cljs.core.first.call(null,seq7608);
var seq7608__$1 = cljs.core.next.call(null,seq7608);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7609,seq7608__$1);
}));

shuriken.sequential.seq_fns = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"take","take",871646627,null),"null",new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"keep","keep",-492807003,null),"null",new cljs.core.Symbol(null,"remove","remove",1509103113,null),"null",new cljs.core.Symbol(null,"compact","compact",1291799377,null),"null",new cljs.core.Symbol(null,"drop","drop",2005013138,null),"null",new cljs.core.Symbol(null,"for","for",316745208,null),"null",new cljs.core.Symbol(null,"filter","filter",691993593,null),"null"], null), null);
shuriken.sequential.seq_suffixes_1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"cat","cat",182721320,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null))], null);
shuriken.sequential.seq_suffixes_2 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"str","str",-1564826950,null))], null);
shuriken.sequential.seq_blacklist = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"takes","takes",298247964,null),"null"], null), null);
var ret__5781__auto___7634 = shuriken.sequential.def_compound_seq_fns = (function shuriken$sequential$def_compound_seq_fns(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(function (){var iter__5480__auto__ = (function shuriken$sequential$def_compound_seq_fns_$_iter__7617(s__7618){
return (new cljs.core.LazySeq(null,(function (){
var s__7618__$1 = s__7618;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__7618__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var seq_fn = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__7618__$1,seq_fn,xs__6360__auto__,temp__5804__auto__){
return (function shuriken$sequential$def_compound_seq_fns_$_iter__7617_$_iter__7619(s__7620){
return (new cljs.core.LazySeq(null,((function (s__7618__$1,seq_fn,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__7620__$1 = s__7620;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__7620__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var vec__7625 = cljs.core.first.call(null,xs__6360__auto____$1);
var suf1 = cljs.core.nth.call(null,vec__7625,(0),null);
var expr1 = cljs.core.nth.call(null,vec__7625,(1),null);
var iterys__5476__auto__ = ((function (s__7620__$1,s__7618__$1,vec__7625,suf1,expr1,xs__6360__auto____$1,temp__5804__auto____$1,seq_fn,xs__6360__auto__,temp__5804__auto__){
return (function shuriken$sequential$def_compound_seq_fns_$_iter__7617_$_iter__7619_$_iter__7621(s__7622){
return (new cljs.core.LazySeq(null,((function (s__7620__$1,s__7618__$1,vec__7625,suf1,expr1,xs__6360__auto____$1,temp__5804__auto____$1,seq_fn,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__7622__$1 = s__7622;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__7622__$1);
if(temp__5804__auto____$2){
var s__7622__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7622__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__7622__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__7624 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__7623 = (0);
while(true){
if((i__7623 < size__5479__auto__)){
var vec__7628 = cljs.core._nth.call(null,c__5478__auto__,i__7623);
var suf2 = cljs.core.nth.call(null,vec__7628,(0),null);
var expr2 = cljs.core.nth.call(null,vec__7628,(1),null);
var resolve = cljs.analyzer.api.resolve;
var seq_macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,resolve.call(null,seq_fn)));
var nme = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(seq_fn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suf1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suf2)].join(''));
var definer = (cljs.core.truth_(seq_macro_QMARK_)?new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null):new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null));
var impl = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(seq_macro_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,seq_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,seq_fn,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,expr1,null,(1),null)),(new cljs.core.List(null,expr2,null,(1),null))))));
var ns_resolve = cljs.analyzer.api.ns_resolve;
if((((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suf1,suf2], null))))) && (((cljs.core.not.call(null,ns_resolve.call(null,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),nme))) && (cljs.core.not.call(null,ns_resolve.call(null,cljs.core._STAR_ns_STAR_,nme))))))){
cljs.core.chunk_append.call(null,b__7624,(cljs.core.truth_(shuriken.sequential.seq_blacklist.call(null,nme))?null:(cljs.core.truth_(seq_macro_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null),null,(1),null)),(new cljs.core.List(null,nme,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,seq_fn,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr1,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr2,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,nme,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,seq_fn,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr1,null,(1),null)),(new cljs.core.List(null,expr2,null,(1),null)))))),null,(1),null))))))));

var G__7635 = (i__7623 + (1));
i__7623 = G__7635;
continue;
} else {
var G__7636 = (i__7623 + (1));
i__7623 = G__7636;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7624),shuriken$sequential$def_compound_seq_fns_$_iter__7617_$_iter__7619_$_iter__7621.call(null,cljs.core.chunk_rest.call(null,s__7622__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7624),null);
}
} else {
var vec__7631 = cljs.core.first.call(null,s__7622__$2);
var suf2 = cljs.core.nth.call(null,vec__7631,(0),null);
var expr2 = cljs.core.nth.call(null,vec__7631,(1),null);
var resolve = cljs.analyzer.api.resolve;
var seq_macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,resolve.call(null,seq_fn)));
var nme = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(seq_fn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suf1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suf2)].join(''));
var definer = (cljs.core.truth_(seq_macro_QMARK_)?new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null):new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null));
var impl = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(seq_macro_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,seq_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,seq_fn,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,expr1,null,(1),null)),(new cljs.core.List(null,expr2,null,(1),null))))));
var ns_resolve = cljs.analyzer.api.ns_resolve;
if((((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suf1,suf2], null))))) && (((cljs.core.not.call(null,ns_resolve.call(null,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),nme))) && (cljs.core.not.call(null,ns_resolve.call(null,cljs.core._STAR_ns_STAR_,nme))))))){
return cljs.core.cons.call(null,(cljs.core.truth_(shuriken.sequential.seq_blacklist.call(null,nme))?null:(cljs.core.truth_(seq_macro_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null),null,(1),null)),(new cljs.core.List(null,nme,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,seq_fn,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr1,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr2,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,nme,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,seq_fn,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr1,null,(1),null)),(new cljs.core.List(null,expr2,null,(1),null)))))),null,(1),null))))))),shuriken$sequential$def_compound_seq_fns_$_iter__7617_$_iter__7619_$_iter__7621.call(null,cljs.core.rest.call(null,s__7622__$2)));
} else {
var G__7637 = cljs.core.rest.call(null,s__7622__$2);
s__7622__$1 = G__7637;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__7620__$1,s__7618__$1,vec__7625,suf1,expr1,xs__6360__auto____$1,temp__5804__auto____$1,seq_fn,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__7620__$1,s__7618__$1,vec__7625,suf1,expr1,xs__6360__auto____$1,temp__5804__auto____$1,seq_fn,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,cljs.core.conj.call(null,shuriken.sequential.seq_suffixes_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null))));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,shuriken$sequential$def_compound_seq_fns_$_iter__7617_$_iter__7619.call(null,cljs.core.rest.call(null,s__7620__$1)));
} else {
var G__7638 = cljs.core.rest.call(null,s__7620__$1);
s__7620__$1 = G__7638;
continue;
}
} else {
return null;
}
break;
}
});})(s__7618__$1,seq_fn,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__7618__$1,seq_fn,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,cljs.core.conj.call(null,shuriken.sequential.seq_suffixes_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null))));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,shuriken$sequential$def_compound_seq_fns_$_iter__7617.call(null,cljs.core.rest.call(null,s__7618__$1)));
} else {
var G__7639 = cljs.core.rest.call(null,s__7618__$1);
s__7618__$1 = G__7639;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,shuriken.sequential.seq_fns);
})())));
});
(shuriken.sequential.def_compound_seq_fns.cljs$lang$macro = true);

shuriken.sequential.takecats = (function shuriken$sequential$takecats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7726 = arguments.length;
var i__5727__auto___7727 = (0);
while(true){
if((i__5727__auto___7727 < len__5726__auto___7726)){
args__5732__auto__.push((arguments[i__5727__auto___7727]));

var G__7728 = (i__5727__auto___7727 + (1));
i__5727__auto___7727 = G__7728;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.takecats.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.takecats.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.take,args)));
}));

(shuriken.sequential.takecats.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.takecats.cljs$lang$applyTo = (function (seq7640){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7640));
}));


shuriken.sequential.takecatv = (function shuriken$sequential$takecatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7729 = arguments.length;
var i__5727__auto___7730 = (0);
while(true){
if((i__5727__auto___7730 < len__5726__auto___7729)){
args__5732__auto__.push((arguments[i__5727__auto___7730]));

var G__7731 = (i__5727__auto___7730 + (1));
i__5727__auto___7730 = G__7731;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.takecatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.takecatv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.take,args)));
}));

(shuriken.sequential.takecatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.takecatv.cljs$lang$applyTo = (function (seq7641){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7641));
}));


shuriken.sequential.takecatm = (function shuriken$sequential$takecatm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7732 = arguments.length;
var i__5727__auto___7733 = (0);
while(true){
if((i__5727__auto___7733 < len__5726__auto___7732)){
args__5732__auto__.push((arguments[i__5727__auto___7733]));

var G__7734 = (i__5727__auto___7733 + (1));
i__5727__auto___7733 = G__7734;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.takecatm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.takecatm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.take,args)));
}));

(shuriken.sequential.takecatm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.takecatm.cljs$lang$applyTo = (function (seq7642){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7642));
}));


shuriken.sequential.takecatstr = (function shuriken$sequential$takecatstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7735 = arguments.length;
var i__5727__auto___7736 = (0);
while(true){
if((i__5727__auto___7736 < len__5726__auto___7735)){
args__5732__auto__.push((arguments[i__5727__auto___7736]));

var G__7737 = (i__5727__auto___7736 + (1));
i__5727__auto___7736 = G__7737;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.takecatstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.takecatstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.take,args)));
}));

(shuriken.sequential.takecatstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.takecatstr.cljs$lang$applyTo = (function (seq7643){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7643));
}));


shuriken.sequential.takecat = (function shuriken$sequential$takecat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7738 = arguments.length;
var i__5727__auto___7739 = (0);
while(true){
if((i__5727__auto___7739 < len__5726__auto___7738)){
args__5732__auto__.push((arguments[i__5727__auto___7739]));

var G__7740 = (i__5727__auto___7739 + (1));
i__5727__auto___7739 = G__7740;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.takecat.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.takecat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.take,args));
}));

(shuriken.sequential.takecat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.takecat.cljs$lang$applyTo = (function (seq7644){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7644));
}));



shuriken.sequential.takev = (function shuriken$sequential$takev(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7741 = arguments.length;
var i__5727__auto___7742 = (0);
while(true){
if((i__5727__auto___7742 < len__5726__auto___7741)){
args__5732__auto__.push((arguments[i__5727__auto___7742]));

var G__7743 = (i__5727__auto___7742 + (1));
i__5727__auto___7742 = G__7743;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.takev.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.takev.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.take,args));
}));

(shuriken.sequential.takev.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.takev.cljs$lang$applyTo = (function (seq7645){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7645));
}));


shuriken.sequential.takem = (function shuriken$sequential$takem(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7744 = arguments.length;
var i__5727__auto___7745 = (0);
while(true){
if((i__5727__auto___7745 < len__5726__auto___7744)){
args__5732__auto__.push((arguments[i__5727__auto___7745]));

var G__7746 = (i__5727__auto___7745 + (1));
i__5727__auto___7745 = G__7746;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.takem.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.takem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.take,args));
}));

(shuriken.sequential.takem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.takem.cljs$lang$applyTo = (function (seq7646){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7646));
}));


shuriken.sequential.takestr = (function shuriken$sequential$takestr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7747 = arguments.length;
var i__5727__auto___7748 = (0);
while(true){
if((i__5727__auto___7748 < len__5726__auto___7747)){
args__5732__auto__.push((arguments[i__5727__auto___7748]));

var G__7749 = (i__5727__auto___7748 + (1));
i__5727__auto___7748 = G__7749;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.takestr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.takestr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.take,args));
}));

(shuriken.sequential.takestr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.takestr.cljs$lang$applyTo = (function (seq7647){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7647));
}));


shuriken.sequential.mapcats = (function shuriken$sequential$mapcats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7750 = arguments.length;
var i__5727__auto___7751 = (0);
while(true){
if((i__5727__auto___7751 < len__5726__auto___7750)){
args__5732__auto__.push((arguments[i__5727__auto___7751]));

var G__7752 = (i__5727__auto___7751 + (1));
i__5727__auto___7751 = G__7752;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.mapcats.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.mapcats.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.map,args)));
}));

(shuriken.sequential.mapcats.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.mapcats.cljs$lang$applyTo = (function (seq7648){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7648));
}));


shuriken.sequential.mapcatv = (function shuriken$sequential$mapcatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7753 = arguments.length;
var i__5727__auto___7754 = (0);
while(true){
if((i__5727__auto___7754 < len__5726__auto___7753)){
args__5732__auto__.push((arguments[i__5727__auto___7754]));

var G__7755 = (i__5727__auto___7754 + (1));
i__5727__auto___7754 = G__7755;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.mapcatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.mapcatv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.map,args)));
}));

(shuriken.sequential.mapcatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.mapcatv.cljs$lang$applyTo = (function (seq7649){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7649));
}));


shuriken.sequential.mapcatm = (function shuriken$sequential$mapcatm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7756 = arguments.length;
var i__5727__auto___7757 = (0);
while(true){
if((i__5727__auto___7757 < len__5726__auto___7756)){
args__5732__auto__.push((arguments[i__5727__auto___7757]));

var G__7758 = (i__5727__auto___7757 + (1));
i__5727__auto___7757 = G__7758;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.mapcatm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.mapcatm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.map,args)));
}));

(shuriken.sequential.mapcatm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.mapcatm.cljs$lang$applyTo = (function (seq7650){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7650));
}));


shuriken.sequential.mapcatstr = (function shuriken$sequential$mapcatstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7759 = arguments.length;
var i__5727__auto___7760 = (0);
while(true){
if((i__5727__auto___7760 < len__5726__auto___7759)){
args__5732__auto__.push((arguments[i__5727__auto___7760]));

var G__7761 = (i__5727__auto___7760 + (1));
i__5727__auto___7760 = G__7761;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.mapcatstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.mapcatstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.map,args)));
}));

(shuriken.sequential.mapcatstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.mapcatstr.cljs$lang$applyTo = (function (seq7651){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7651));
}));


shuriken.sequential.maps = (function shuriken$sequential$maps(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7762 = arguments.length;
var i__5727__auto___7763 = (0);
while(true){
if((i__5727__auto___7763 < len__5726__auto___7762)){
args__5732__auto__.push((arguments[i__5727__auto___7763]));

var G__7764 = (i__5727__auto___7763 + (1));
i__5727__auto___7763 = G__7764;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.maps.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.maps.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.map,args));
}));

(shuriken.sequential.maps.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.maps.cljs$lang$applyTo = (function (seq7652){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7652));
}));


shuriken.sequential.mapm = (function shuriken$sequential$mapm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7765 = arguments.length;
var i__5727__auto___7766 = (0);
while(true){
if((i__5727__auto___7766 < len__5726__auto___7765)){
args__5732__auto__.push((arguments[i__5727__auto___7766]));

var G__7767 = (i__5727__auto___7766 + (1));
i__5727__auto___7766 = G__7767;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.mapm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.mapm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.map,args));
}));

(shuriken.sequential.mapm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.mapm.cljs$lang$applyTo = (function (seq7653){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7653));
}));


shuriken.sequential.mapstr = (function shuriken$sequential$mapstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7768 = arguments.length;
var i__5727__auto___7769 = (0);
while(true){
if((i__5727__auto___7769 < len__5726__auto___7768)){
args__5732__auto__.push((arguments[i__5727__auto___7769]));

var G__7770 = (i__5727__auto___7769 + (1));
i__5727__auto___7769 = G__7770;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.mapstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.mapstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.map,args));
}));

(shuriken.sequential.mapstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.mapstr.cljs$lang$applyTo = (function (seq7654){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7654));
}));


shuriken.sequential.keepcats = (function shuriken$sequential$keepcats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7771 = arguments.length;
var i__5727__auto___7772 = (0);
while(true){
if((i__5727__auto___7772 < len__5726__auto___7771)){
args__5732__auto__.push((arguments[i__5727__auto___7772]));

var G__7773 = (i__5727__auto___7772 + (1));
i__5727__auto___7772 = G__7773;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keepcats.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keepcats.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.keep,args)));
}));

(shuriken.sequential.keepcats.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keepcats.cljs$lang$applyTo = (function (seq7655){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7655));
}));


shuriken.sequential.keepcatv = (function shuriken$sequential$keepcatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7774 = arguments.length;
var i__5727__auto___7775 = (0);
while(true){
if((i__5727__auto___7775 < len__5726__auto___7774)){
args__5732__auto__.push((arguments[i__5727__auto___7775]));

var G__7776 = (i__5727__auto___7775 + (1));
i__5727__auto___7775 = G__7776;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keepcatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keepcatv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.keep,args)));
}));

(shuriken.sequential.keepcatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keepcatv.cljs$lang$applyTo = (function (seq7656){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7656));
}));


shuriken.sequential.keepcatm = (function shuriken$sequential$keepcatm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7777 = arguments.length;
var i__5727__auto___7778 = (0);
while(true){
if((i__5727__auto___7778 < len__5726__auto___7777)){
args__5732__auto__.push((arguments[i__5727__auto___7778]));

var G__7779 = (i__5727__auto___7778 + (1));
i__5727__auto___7778 = G__7779;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keepcatm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keepcatm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.keep,args)));
}));

(shuriken.sequential.keepcatm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keepcatm.cljs$lang$applyTo = (function (seq7657){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7657));
}));


shuriken.sequential.keepcatstr = (function shuriken$sequential$keepcatstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7780 = arguments.length;
var i__5727__auto___7781 = (0);
while(true){
if((i__5727__auto___7781 < len__5726__auto___7780)){
args__5732__auto__.push((arguments[i__5727__auto___7781]));

var G__7782 = (i__5727__auto___7781 + (1));
i__5727__auto___7781 = G__7782;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keepcatstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keepcatstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.keep,args)));
}));

(shuriken.sequential.keepcatstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keepcatstr.cljs$lang$applyTo = (function (seq7658){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7658));
}));


shuriken.sequential.keepcat = (function shuriken$sequential$keepcat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7783 = arguments.length;
var i__5727__auto___7784 = (0);
while(true){
if((i__5727__auto___7784 < len__5726__auto___7783)){
args__5732__auto__.push((arguments[i__5727__auto___7784]));

var G__7785 = (i__5727__auto___7784 + (1));
i__5727__auto___7784 = G__7785;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keepcat.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keepcat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.keep,args));
}));

(shuriken.sequential.keepcat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keepcat.cljs$lang$applyTo = (function (seq7659){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7659));
}));


shuriken.sequential.keeps = (function shuriken$sequential$keeps(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7786 = arguments.length;
var i__5727__auto___7787 = (0);
while(true){
if((i__5727__auto___7787 < len__5726__auto___7786)){
args__5732__auto__.push((arguments[i__5727__auto___7787]));

var G__7788 = (i__5727__auto___7787 + (1));
i__5727__auto___7787 = G__7788;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keeps.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keeps.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.keep,args));
}));

(shuriken.sequential.keeps.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keeps.cljs$lang$applyTo = (function (seq7660){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7660));
}));


shuriken.sequential.keepv = (function shuriken$sequential$keepv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7789 = arguments.length;
var i__5727__auto___7790 = (0);
while(true){
if((i__5727__auto___7790 < len__5726__auto___7789)){
args__5732__auto__.push((arguments[i__5727__auto___7790]));

var G__7791 = (i__5727__auto___7790 + (1));
i__5727__auto___7790 = G__7791;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keepv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keepv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.keep,args));
}));

(shuriken.sequential.keepv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keepv.cljs$lang$applyTo = (function (seq7661){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7661));
}));


shuriken.sequential.keepm = (function shuriken$sequential$keepm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7792 = arguments.length;
var i__5727__auto___7793 = (0);
while(true){
if((i__5727__auto___7793 < len__5726__auto___7792)){
args__5732__auto__.push((arguments[i__5727__auto___7793]));

var G__7794 = (i__5727__auto___7793 + (1));
i__5727__auto___7793 = G__7794;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keepm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keepm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.keep,args));
}));

(shuriken.sequential.keepm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keepm.cljs$lang$applyTo = (function (seq7662){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7662));
}));


shuriken.sequential.keepstr = (function shuriken$sequential$keepstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7795 = arguments.length;
var i__5727__auto___7796 = (0);
while(true){
if((i__5727__auto___7796 < len__5726__auto___7795)){
args__5732__auto__.push((arguments[i__5727__auto___7796]));

var G__7797 = (i__5727__auto___7796 + (1));
i__5727__auto___7796 = G__7797;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.keepstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.keepstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.keep,args));
}));

(shuriken.sequential.keepstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.keepstr.cljs$lang$applyTo = (function (seq7663){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7663));
}));


shuriken.sequential.removecats = (function shuriken$sequential$removecats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7798 = arguments.length;
var i__5727__auto___7799 = (0);
while(true){
if((i__5727__auto___7799 < len__5726__auto___7798)){
args__5732__auto__.push((arguments[i__5727__auto___7799]));

var G__7800 = (i__5727__auto___7799 + (1));
i__5727__auto___7799 = G__7800;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removecats.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removecats.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.remove,args)));
}));

(shuriken.sequential.removecats.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removecats.cljs$lang$applyTo = (function (seq7664){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7664));
}));


shuriken.sequential.removecatv = (function shuriken$sequential$removecatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7801 = arguments.length;
var i__5727__auto___7802 = (0);
while(true){
if((i__5727__auto___7802 < len__5726__auto___7801)){
args__5732__auto__.push((arguments[i__5727__auto___7802]));

var G__7803 = (i__5727__auto___7802 + (1));
i__5727__auto___7802 = G__7803;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removecatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removecatv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.remove,args)));
}));

(shuriken.sequential.removecatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removecatv.cljs$lang$applyTo = (function (seq7665){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7665));
}));


shuriken.sequential.removecatm = (function shuriken$sequential$removecatm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7804 = arguments.length;
var i__5727__auto___7805 = (0);
while(true){
if((i__5727__auto___7805 < len__5726__auto___7804)){
args__5732__auto__.push((arguments[i__5727__auto___7805]));

var G__7806 = (i__5727__auto___7805 + (1));
i__5727__auto___7805 = G__7806;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removecatm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removecatm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.remove,args)));
}));

(shuriken.sequential.removecatm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removecatm.cljs$lang$applyTo = (function (seq7666){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7666));
}));


shuriken.sequential.removecatstr = (function shuriken$sequential$removecatstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7807 = arguments.length;
var i__5727__auto___7808 = (0);
while(true){
if((i__5727__auto___7808 < len__5726__auto___7807)){
args__5732__auto__.push((arguments[i__5727__auto___7808]));

var G__7809 = (i__5727__auto___7808 + (1));
i__5727__auto___7808 = G__7809;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removecatstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removecatstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.remove,args)));
}));

(shuriken.sequential.removecatstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removecatstr.cljs$lang$applyTo = (function (seq7667){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7667));
}));


shuriken.sequential.removecat = (function shuriken$sequential$removecat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7810 = arguments.length;
var i__5727__auto___7811 = (0);
while(true){
if((i__5727__auto___7811 < len__5726__auto___7810)){
args__5732__auto__.push((arguments[i__5727__auto___7811]));

var G__7812 = (i__5727__auto___7811 + (1));
i__5727__auto___7811 = G__7812;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removecat.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removecat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.remove,args));
}));

(shuriken.sequential.removecat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removecat.cljs$lang$applyTo = (function (seq7668){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7668));
}));


shuriken.sequential.removes = (function shuriken$sequential$removes(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7813 = arguments.length;
var i__5727__auto___7814 = (0);
while(true){
if((i__5727__auto___7814 < len__5726__auto___7813)){
args__5732__auto__.push((arguments[i__5727__auto___7814]));

var G__7815 = (i__5727__auto___7814 + (1));
i__5727__auto___7814 = G__7815;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removes.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removes.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.remove,args));
}));

(shuriken.sequential.removes.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removes.cljs$lang$applyTo = (function (seq7669){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7669));
}));


shuriken.sequential.removev = (function shuriken$sequential$removev(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7816 = arguments.length;
var i__5727__auto___7817 = (0);
while(true){
if((i__5727__auto___7817 < len__5726__auto___7816)){
args__5732__auto__.push((arguments[i__5727__auto___7817]));

var G__7818 = (i__5727__auto___7817 + (1));
i__5727__auto___7817 = G__7818;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removev.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removev.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.remove,args));
}));

(shuriken.sequential.removev.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removev.cljs$lang$applyTo = (function (seq7670){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7670));
}));


shuriken.sequential.removem = (function shuriken$sequential$removem(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7819 = arguments.length;
var i__5727__auto___7820 = (0);
while(true){
if((i__5727__auto___7820 < len__5726__auto___7819)){
args__5732__auto__.push((arguments[i__5727__auto___7820]));

var G__7821 = (i__5727__auto___7820 + (1));
i__5727__auto___7820 = G__7821;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removem.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.remove,args));
}));

(shuriken.sequential.removem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removem.cljs$lang$applyTo = (function (seq7671){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7671));
}));


shuriken.sequential.removestr = (function shuriken$sequential$removestr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7822 = arguments.length;
var i__5727__auto___7823 = (0);
while(true){
if((i__5727__auto___7823 < len__5726__auto___7822)){
args__5732__auto__.push((arguments[i__5727__auto___7823]));

var G__7824 = (i__5727__auto___7823 + (1));
i__5727__auto___7823 = G__7824;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.removestr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.removestr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.remove,args));
}));

(shuriken.sequential.removestr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.removestr.cljs$lang$applyTo = (function (seq7672){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7672));
}));


shuriken.sequential.compactcats = (function shuriken$sequential$compactcats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7825 = arguments.length;
var i__5727__auto___7826 = (0);
while(true){
if((i__5727__auto___7826 < len__5726__auto___7825)){
args__5732__auto__.push((arguments[i__5727__auto___7826]));

var G__7827 = (i__5727__auto___7826 + (1));
i__5727__auto___7826 = G__7827;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compactcats.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compactcats.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,shuriken.sequential.compact,args)));
}));

(shuriken.sequential.compactcats.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compactcats.cljs$lang$applyTo = (function (seq7673){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7673));
}));


shuriken.sequential.compactcatv = (function shuriken$sequential$compactcatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7828 = arguments.length;
var i__5727__auto___7829 = (0);
while(true){
if((i__5727__auto___7829 < len__5726__auto___7828)){
args__5732__auto__.push((arguments[i__5727__auto___7829]));

var G__7830 = (i__5727__auto___7829 + (1));
i__5727__auto___7829 = G__7830;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compactcatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compactcatv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,shuriken.sequential.compact,args)));
}));

(shuriken.sequential.compactcatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compactcatv.cljs$lang$applyTo = (function (seq7674){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7674));
}));


shuriken.sequential.compactcatm = (function shuriken$sequential$compactcatm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7831 = arguments.length;
var i__5727__auto___7832 = (0);
while(true){
if((i__5727__auto___7832 < len__5726__auto___7831)){
args__5732__auto__.push((arguments[i__5727__auto___7832]));

var G__7833 = (i__5727__auto___7832 + (1));
i__5727__auto___7832 = G__7833;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compactcatm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compactcatm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,shuriken.sequential.compact,args)));
}));

(shuriken.sequential.compactcatm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compactcatm.cljs$lang$applyTo = (function (seq7675){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7675));
}));


shuriken.sequential.compactcatstr = (function shuriken$sequential$compactcatstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7834 = arguments.length;
var i__5727__auto___7835 = (0);
while(true){
if((i__5727__auto___7835 < len__5726__auto___7834)){
args__5732__auto__.push((arguments[i__5727__auto___7835]));

var G__7836 = (i__5727__auto___7835 + (1));
i__5727__auto___7835 = G__7836;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compactcatstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compactcatstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,shuriken.sequential.compact,args)));
}));

(shuriken.sequential.compactcatstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compactcatstr.cljs$lang$applyTo = (function (seq7676){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7676));
}));


shuriken.sequential.compactcat = (function shuriken$sequential$compactcat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7837 = arguments.length;
var i__5727__auto___7838 = (0);
while(true){
if((i__5727__auto___7838 < len__5726__auto___7837)){
args__5732__auto__.push((arguments[i__5727__auto___7838]));

var G__7839 = (i__5727__auto___7838 + (1));
i__5727__auto___7838 = G__7839;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compactcat.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compactcat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,shuriken.sequential.compact,args));
}));

(shuriken.sequential.compactcat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compactcat.cljs$lang$applyTo = (function (seq7677){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7677));
}));


shuriken.sequential.compacts = (function shuriken$sequential$compacts(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7840 = arguments.length;
var i__5727__auto___7841 = (0);
while(true){
if((i__5727__auto___7841 < len__5726__auto___7840)){
args__5732__auto__.push((arguments[i__5727__auto___7841]));

var G__7842 = (i__5727__auto___7841 + (1));
i__5727__auto___7841 = G__7842;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compacts.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compacts.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,shuriken.sequential.compact,args));
}));

(shuriken.sequential.compacts.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compacts.cljs$lang$applyTo = (function (seq7678){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7678));
}));


shuriken.sequential.compactv = (function shuriken$sequential$compactv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7843 = arguments.length;
var i__5727__auto___7844 = (0);
while(true){
if((i__5727__auto___7844 < len__5726__auto___7843)){
args__5732__auto__.push((arguments[i__5727__auto___7844]));

var G__7845 = (i__5727__auto___7844 + (1));
i__5727__auto___7844 = G__7845;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compactv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compactv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,shuriken.sequential.compact,args));
}));

(shuriken.sequential.compactv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compactv.cljs$lang$applyTo = (function (seq7679){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7679));
}));


shuriken.sequential.compactm = (function shuriken$sequential$compactm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7846 = arguments.length;
var i__5727__auto___7847 = (0);
while(true){
if((i__5727__auto___7847 < len__5726__auto___7846)){
args__5732__auto__.push((arguments[i__5727__auto___7847]));

var G__7848 = (i__5727__auto___7847 + (1));
i__5727__auto___7847 = G__7848;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compactm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compactm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,shuriken.sequential.compact,args));
}));

(shuriken.sequential.compactm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compactm.cljs$lang$applyTo = (function (seq7680){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7680));
}));


shuriken.sequential.compactstr = (function shuriken$sequential$compactstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7849 = arguments.length;
var i__5727__auto___7850 = (0);
while(true){
if((i__5727__auto___7850 < len__5726__auto___7849)){
args__5732__auto__.push((arguments[i__5727__auto___7850]));

var G__7851 = (i__5727__auto___7850 + (1));
i__5727__auto___7850 = G__7851;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.compactstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.compactstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,shuriken.sequential.compact,args));
}));

(shuriken.sequential.compactstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.compactstr.cljs$lang$applyTo = (function (seq7681){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7681));
}));


shuriken.sequential.dropcats = (function shuriken$sequential$dropcats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7852 = arguments.length;
var i__5727__auto___7853 = (0);
while(true){
if((i__5727__auto___7853 < len__5726__auto___7852)){
args__5732__auto__.push((arguments[i__5727__auto___7853]));

var G__7854 = (i__5727__auto___7853 + (1));
i__5727__auto___7853 = G__7854;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.dropcats.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.dropcats.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.drop,args)));
}));

(shuriken.sequential.dropcats.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.dropcats.cljs$lang$applyTo = (function (seq7682){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7682));
}));


shuriken.sequential.dropcatv = (function shuriken$sequential$dropcatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7855 = arguments.length;
var i__5727__auto___7856 = (0);
while(true){
if((i__5727__auto___7856 < len__5726__auto___7855)){
args__5732__auto__.push((arguments[i__5727__auto___7856]));

var G__7857 = (i__5727__auto___7856 + (1));
i__5727__auto___7856 = G__7857;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.dropcatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.dropcatv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.drop,args)));
}));

(shuriken.sequential.dropcatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.dropcatv.cljs$lang$applyTo = (function (seq7683){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7683));
}));


shuriken.sequential.dropcatm = (function shuriken$sequential$dropcatm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7858 = arguments.length;
var i__5727__auto___7859 = (0);
while(true){
if((i__5727__auto___7859 < len__5726__auto___7858)){
args__5732__auto__.push((arguments[i__5727__auto___7859]));

var G__7860 = (i__5727__auto___7859 + (1));
i__5727__auto___7859 = G__7860;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.dropcatm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.dropcatm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.drop,args)));
}));

(shuriken.sequential.dropcatm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.dropcatm.cljs$lang$applyTo = (function (seq7684){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7684));
}));


shuriken.sequential.dropcatstr = (function shuriken$sequential$dropcatstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7861 = arguments.length;
var i__5727__auto___7862 = (0);
while(true){
if((i__5727__auto___7862 < len__5726__auto___7861)){
args__5732__auto__.push((arguments[i__5727__auto___7862]));

var G__7863 = (i__5727__auto___7862 + (1));
i__5727__auto___7862 = G__7863;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.dropcatstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.dropcatstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.drop,args)));
}));

(shuriken.sequential.dropcatstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.dropcatstr.cljs$lang$applyTo = (function (seq7685){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7685));
}));


shuriken.sequential.dropcat = (function shuriken$sequential$dropcat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7864 = arguments.length;
var i__5727__auto___7865 = (0);
while(true){
if((i__5727__auto___7865 < len__5726__auto___7864)){
args__5732__auto__.push((arguments[i__5727__auto___7865]));

var G__7866 = (i__5727__auto___7865 + (1));
i__5727__auto___7865 = G__7866;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.dropcat.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.dropcat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.drop,args));
}));

(shuriken.sequential.dropcat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.dropcat.cljs$lang$applyTo = (function (seq7686){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7686));
}));


shuriken.sequential.drops = (function shuriken$sequential$drops(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7867 = arguments.length;
var i__5727__auto___7868 = (0);
while(true){
if((i__5727__auto___7868 < len__5726__auto___7867)){
args__5732__auto__.push((arguments[i__5727__auto___7868]));

var G__7869 = (i__5727__auto___7868 + (1));
i__5727__auto___7868 = G__7869;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.drops.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.drops.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.drop,args));
}));

(shuriken.sequential.drops.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.drops.cljs$lang$applyTo = (function (seq7687){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7687));
}));


shuriken.sequential.dropv = (function shuriken$sequential$dropv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7870 = arguments.length;
var i__5727__auto___7871 = (0);
while(true){
if((i__5727__auto___7871 < len__5726__auto___7870)){
args__5732__auto__.push((arguments[i__5727__auto___7871]));

var G__7872 = (i__5727__auto___7871 + (1));
i__5727__auto___7871 = G__7872;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.dropv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.dropv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.drop,args));
}));

(shuriken.sequential.dropv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.dropv.cljs$lang$applyTo = (function (seq7688){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7688));
}));


shuriken.sequential.dropm = (function shuriken$sequential$dropm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7873 = arguments.length;
var i__5727__auto___7874 = (0);
while(true){
if((i__5727__auto___7874 < len__5726__auto___7873)){
args__5732__auto__.push((arguments[i__5727__auto___7874]));

var G__7875 = (i__5727__auto___7874 + (1));
i__5727__auto___7874 = G__7875;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.dropm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.dropm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.drop,args));
}));

(shuriken.sequential.dropm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.dropm.cljs$lang$applyTo = (function (seq7689){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7689));
}));


shuriken.sequential.dropstr = (function shuriken$sequential$dropstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7876 = arguments.length;
var i__5727__auto___7877 = (0);
while(true){
if((i__5727__auto___7877 < len__5726__auto___7876)){
args__5732__auto__.push((arguments[i__5727__auto___7877]));

var G__7878 = (i__5727__auto___7877 + (1));
i__5727__auto___7877 = G__7878;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.dropstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.dropstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.drop,args));
}));

(shuriken.sequential.dropstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.dropstr.cljs$lang$applyTo = (function (seq7690){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7690));
}));


var ret__5781__auto___7879 = (function (){
shuriken.sequential.forcats = (function shuriken$sequential$forcats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7880 = arguments.length;
var i__5727__auto___7881 = (0);
while(true){
if((i__5727__auto___7881 < len__5726__auto___7880)){
args__5732__auto__.push((arguments[i__5727__auto___7881]));

var G__7882 = (i__5727__auto___7881 + (1));
i__5727__auto___7881 = G__7882;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.forcats.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.forcats.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"set","set",1945134081,null),null,(1),null)))));
}));

(shuriken.sequential.forcats.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.forcats.cljs$lang$applyTo = (function (seq7691){
var G__7692 = cljs.core.first.call(null,seq7691);
var seq7691__$1 = cljs.core.next.call(null,seq7691);
var G__7693 = cljs.core.first.call(null,seq7691__$1);
var seq7691__$2 = cljs.core.next.call(null,seq7691__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7692,G__7693,seq7691__$2);
}));

return null;
})()
;
(shuriken.sequential.forcats.cljs$lang$macro = true);


var ret__5781__auto___7883 = (function (){
shuriken.sequential.forcatv = (function shuriken$sequential$forcatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7884 = arguments.length;
var i__5727__auto___7885 = (0);
while(true){
if((i__5727__auto___7885 < len__5726__auto___7884)){
args__5732__auto__.push((arguments[i__5727__auto___7885]));

var G__7886 = (i__5727__auto___7885 + (1));
i__5727__auto___7885 = G__7886;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.forcatv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.forcatv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vec","vec",982683596,null),null,(1),null)))));
}));

(shuriken.sequential.forcatv.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.forcatv.cljs$lang$applyTo = (function (seq7694){
var G__7695 = cljs.core.first.call(null,seq7694);
var seq7694__$1 = cljs.core.next.call(null,seq7694);
var G__7696 = cljs.core.first.call(null,seq7694__$1);
var seq7694__$2 = cljs.core.next.call(null,seq7694__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7695,G__7696,seq7694__$2);
}));

return null;
})()
;
(shuriken.sequential.forcatv.cljs$lang$macro = true);


var ret__5781__auto___7887 = (function (){
shuriken.sequential.forcatm = (function shuriken$sequential$forcatm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7888 = arguments.length;
var i__5727__auto___7889 = (0);
while(true){
if((i__5727__auto___7889 < len__5726__auto___7888)){
args__5732__auto__.push((arguments[i__5727__auto___7889]));

var G__7890 = (i__5727__auto___7889 + (1));
i__5727__auto___7889 = G__7890;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.forcatm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.forcatm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY),null,(1),null)))));
}));

(shuriken.sequential.forcatm.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.forcatm.cljs$lang$applyTo = (function (seq7697){
var G__7698 = cljs.core.first.call(null,seq7697);
var seq7697__$1 = cljs.core.next.call(null,seq7697);
var G__7699 = cljs.core.first.call(null,seq7697__$1);
var seq7697__$2 = cljs.core.next.call(null,seq7697__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7698,G__7699,seq7697__$2);
}));

return null;
})()
;
(shuriken.sequential.forcatm.cljs$lang$macro = true);


var ret__5781__auto___7891 = (function (){
shuriken.sequential.forcatstr = (function shuriken$sequential$forcatstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7892 = arguments.length;
var i__5727__auto___7893 = (0);
while(true){
if((i__5727__auto___7893 < len__5726__auto___7892)){
args__5732__auto__.push((arguments[i__5727__auto___7893]));

var G__7894 = (i__5727__auto___7893 + (1));
i__5727__auto___7893 = G__7894;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.forcatstr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.forcatstr.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"str","str",-1564826950,null)),null,(1),null)))));
}));

(shuriken.sequential.forcatstr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.forcatstr.cljs$lang$applyTo = (function (seq7700){
var G__7701 = cljs.core.first.call(null,seq7700);
var seq7700__$1 = cljs.core.next.call(null,seq7700);
var G__7702 = cljs.core.first.call(null,seq7700__$1);
var seq7700__$2 = cljs.core.next.call(null,seq7700__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7701,G__7702,seq7700__$2);
}));

return null;
})()
;
(shuriken.sequential.forcatstr.cljs$lang$macro = true);


var ret__5781__auto___7895 = (function (){
shuriken.sequential.forcat = (function shuriken$sequential$forcat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7896 = arguments.length;
var i__5727__auto___7897 = (0);
while(true){
if((i__5727__auto___7897 < len__5726__auto___7896)){
args__5732__auto__.push((arguments[i__5727__auto___7897]));

var G__7898 = (i__5727__auto___7897 + (1));
i__5727__auto___7897 = G__7898;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.forcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.forcat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null)),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(shuriken.sequential.forcat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.forcat.cljs$lang$applyTo = (function (seq7703){
var G__7704 = cljs.core.first.call(null,seq7703);
var seq7703__$1 = cljs.core.next.call(null,seq7703);
var G__7705 = cljs.core.first.call(null,seq7703__$1);
var seq7703__$2 = cljs.core.next.call(null,seq7703__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7704,G__7705,seq7703__$2);
}));

return null;
})()
;
(shuriken.sequential.forcat.cljs$lang$macro = true);


var ret__5781__auto___7899 = (function (){
shuriken.sequential.fors = (function shuriken$sequential$fors(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7900 = arguments.length;
var i__5727__auto___7901 = (0);
while(true){
if((i__5727__auto___7901 < len__5726__auto___7900)){
args__5732__auto__.push((arguments[i__5727__auto___7901]));

var G__7902 = (i__5727__auto___7901 + (1));
i__5727__auto___7901 = G__7902;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.fors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.fors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"set","set",1945134081,null),null,(1),null)))));
}));

(shuriken.sequential.fors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.fors.cljs$lang$applyTo = (function (seq7706){
var G__7707 = cljs.core.first.call(null,seq7706);
var seq7706__$1 = cljs.core.next.call(null,seq7706);
var G__7708 = cljs.core.first.call(null,seq7706__$1);
var seq7706__$2 = cljs.core.next.call(null,seq7706__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7707,G__7708,seq7706__$2);
}));

return null;
})()
;
(shuriken.sequential.fors.cljs$lang$macro = true);


var ret__5781__auto___7903 = (function (){
shuriken.sequential.forv = (function shuriken$sequential$forv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7904 = arguments.length;
var i__5727__auto___7905 = (0);
while(true){
if((i__5727__auto___7905 < len__5726__auto___7904)){
args__5732__auto__.push((arguments[i__5727__auto___7905]));

var G__7906 = (i__5727__auto___7905 + (1));
i__5727__auto___7905 = G__7906;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.forv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.forv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vec","vec",982683596,null),null,(1),null)))));
}));

(shuriken.sequential.forv.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.forv.cljs$lang$applyTo = (function (seq7709){
var G__7710 = cljs.core.first.call(null,seq7709);
var seq7709__$1 = cljs.core.next.call(null,seq7709);
var G__7711 = cljs.core.first.call(null,seq7709__$1);
var seq7709__$2 = cljs.core.next.call(null,seq7709__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7710,G__7711,seq7709__$2);
}));

return null;
})()
;
(shuriken.sequential.forv.cljs$lang$macro = true);


var ret__5781__auto___7907 = (function (){
shuriken.sequential.form = (function shuriken$sequential$form(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7908 = arguments.length;
var i__5727__auto___7909 = (0);
while(true){
if((i__5727__auto___7909 < len__5726__auto___7908)){
args__5732__auto__.push((arguments[i__5727__auto___7909]));

var G__7910 = (i__5727__auto___7909 + (1));
i__5727__auto___7909 = G__7910;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.form.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY),null,(1),null)))));
}));

(shuriken.sequential.form.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.form.cljs$lang$applyTo = (function (seq7712){
var G__7713 = cljs.core.first.call(null,seq7712);
var seq7712__$1 = cljs.core.next.call(null,seq7712);
var G__7714 = cljs.core.first.call(null,seq7712__$1);
var seq7712__$2 = cljs.core.next.call(null,seq7712__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7713,G__7714,seq7712__$2);
}));

return null;
})()
;
(shuriken.sequential.form.cljs$lang$macro = true);


var ret__5781__auto___7911 = (function (){
shuriken.sequential.forstr = (function shuriken$sequential$forstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7912 = arguments.length;
var i__5727__auto___7913 = (0);
while(true){
if((i__5727__auto___7913 < len__5726__auto___7912)){
args__5732__auto__.push((arguments[i__5727__auto___7913]));

var G__7914 = (i__5727__auto___7913 + (1));
i__5727__auto___7913 = G__7914;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.sequential.forstr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.sequential.forstr.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),args)),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"str","str",-1564826950,null)),null,(1),null)))));
}));

(shuriken.sequential.forstr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.sequential.forstr.cljs$lang$applyTo = (function (seq7715){
var G__7716 = cljs.core.first.call(null,seq7715);
var seq7715__$1 = cljs.core.next.call(null,seq7715);
var G__7717 = cljs.core.first.call(null,seq7715__$1);
var seq7715__$2 = cljs.core.next.call(null,seq7715__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7716,G__7717,seq7715__$2);
}));

return null;
})()
;
(shuriken.sequential.forstr.cljs$lang$macro = true);


shuriken.sequential.filtercats = (function shuriken$sequential$filtercats(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7915 = arguments.length;
var i__5727__auto___7916 = (0);
while(true){
if((i__5727__auto___7916 < len__5726__auto___7915)){
args__5732__auto__.push((arguments[i__5727__auto___7916]));

var G__7917 = (i__5727__auto___7916 + (1));
i__5727__auto___7916 = G__7917;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.filtercats.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.filtercats.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.filter,args)));
}));

(shuriken.sequential.filtercats.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.filtercats.cljs$lang$applyTo = (function (seq7718){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7718));
}));


shuriken.sequential.filtercatv = (function shuriken$sequential$filtercatv(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7918 = arguments.length;
var i__5727__auto___7919 = (0);
while(true){
if((i__5727__auto___7919 < len__5726__auto___7918)){
args__5732__auto__.push((arguments[i__5727__auto___7919]));

var G__7920 = (i__5727__auto___7919 + (1));
i__5727__auto___7919 = G__7920;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.filtercatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.filtercatv.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.filter,args)));
}));

(shuriken.sequential.filtercatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.filtercatv.cljs$lang$applyTo = (function (seq7719){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7719));
}));


shuriken.sequential.filtercatm = (function shuriken$sequential$filtercatm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7921 = arguments.length;
var i__5727__auto___7922 = (0);
while(true){
if((i__5727__auto___7922 < len__5726__auto___7921)){
args__5732__auto__.push((arguments[i__5727__auto___7922]));

var G__7923 = (i__5727__auto___7922 + (1));
i__5727__auto___7922 = G__7923;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.filtercatm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.filtercatm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.filter,args)));
}));

(shuriken.sequential.filtercatm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.filtercatm.cljs$lang$applyTo = (function (seq7720){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7720));
}));


shuriken.sequential.filtercatstr = (function shuriken$sequential$filtercatstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7924 = arguments.length;
var i__5727__auto___7925 = (0);
while(true){
if((i__5727__auto___7925 < len__5726__auto___7924)){
args__5732__auto__.push((arguments[i__5727__auto___7925]));

var G__7926 = (i__5727__auto___7925 + (1));
i__5727__auto___7925 = G__7926;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.filtercatstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.filtercatstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.filter,args)));
}));

(shuriken.sequential.filtercatstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.filtercatstr.cljs$lang$applyTo = (function (seq7721){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7721));
}));


shuriken.sequential.filtercat = (function shuriken$sequential$filtercat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7927 = arguments.length;
var i__5727__auto___7928 = (0);
while(true){
if((i__5727__auto___7928 < len__5726__auto___7927)){
args__5732__auto__.push((arguments[i__5727__auto___7928]));

var G__7929 = (i__5727__auto___7928 + (1));
i__5727__auto___7928 = G__7929;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.filtercat.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.filtercat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.filter,args));
}));

(shuriken.sequential.filtercat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.filtercat.cljs$lang$applyTo = (function (seq7722){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7722));
}));


shuriken.sequential.filters = (function shuriken$sequential$filters(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7930 = arguments.length;
var i__5727__auto___7931 = (0);
while(true){
if((i__5727__auto___7931 < len__5726__auto___7930)){
args__5732__auto__.push((arguments[i__5727__auto___7931]));

var G__7932 = (i__5727__auto___7931 + (1));
i__5727__auto___7931 = G__7932;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.filters.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.filters.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.filter,args));
}));

(shuriken.sequential.filters.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.filters.cljs$lang$applyTo = (function (seq7723){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7723));
}));


shuriken.sequential.filterm = (function shuriken$sequential$filterm(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7933 = arguments.length;
var i__5727__auto___7934 = (0);
while(true){
if((i__5727__auto___7934 < len__5726__auto___7933)){
args__5732__auto__.push((arguments[i__5727__auto___7934]));

var G__7935 = (i__5727__auto___7934 + (1));
i__5727__auto___7934 = G__7935;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.filterm.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.filterm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.filter,args));
}));

(shuriken.sequential.filterm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.filterm.cljs$lang$applyTo = (function (seq7724){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7724));
}));


shuriken.sequential.filterstr = (function shuriken$sequential$filterstr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7936 = arguments.length;
var i__5727__auto___7937 = (0);
while(true){
if((i__5727__auto___7937 < len__5726__auto___7936)){
args__5732__auto__.push((arguments[i__5727__auto___7937]));

var G__7938 = (i__5727__auto___7937 + (1));
i__5727__auto___7937 = G__7938;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.sequential.filterstr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.sequential.filterstr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.filter,args));
}));

(shuriken.sequential.filterstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.sequential.filterstr.cljs$lang$applyTo = (function (seq7725){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7725));
}));


//# sourceMappingURL=sequential.js.map
