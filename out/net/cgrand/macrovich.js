// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('net.cgrand.macrovich');
goog.require('cljs.core');
var ret__5781__auto___11647 = (function (){
/**
 * This block will only be evaluated at the correct time for macro definition, at other times its content
 * are removed.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojure.
 * For self-hosted Clojurescript the block is only visible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich.deftime = (function net$cgrand$macrovich$deftime(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11648 = arguments.length;
var i__5727__auto___11649 = (0);
while(true){
if((i__5727__auto___11649 < len__5726__auto___11648)){
args__5732__auto__.push((arguments[i__5727__auto___11649]));

var G__11650 = (i__5727__auto___11649 + (1));
i__5727__auto___11649 = G__11650;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich.deftime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(net.cgrand.macrovich.deftime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\$macros/,cljs.core.name.call(null,cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_))))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return null;
}
}));

(net.cgrand.macrovich.deftime.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(net.cgrand.macrovich.deftime.cljs$lang$applyTo = (function (seq11644){
var G__11645 = cljs.core.first.call(null,seq11644);
var seq11644__$1 = cljs.core.next.call(null,seq11644);
var G__11646 = cljs.core.first.call(null,seq11644__$1);
var seq11644__$2 = cljs.core.next.call(null,seq11644__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11645,G__11646,seq11644__$2);
}));

return null;
})()
;
(net.cgrand.macrovich.deftime.cljs$lang$macro = true);

var ret__5781__auto___11654 = (function (){
/**
 * This block content is not included at macro definition time.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojurescript.
 * For self-hosted Clojurescript the block is invisible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich.usetime = (function net$cgrand$macrovich$usetime(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11655 = arguments.length;
var i__5727__auto___11656 = (0);
while(true){
if((i__5727__auto___11656 < len__5726__auto___11655)){
args__5732__auto__.push((arguments[i__5727__auto___11656]));

var G__11657 = (i__5727__auto___11656 + (1));
i__5727__auto___11656 = G__11657;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich.usetime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(net.cgrand.macrovich.usetime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*\$macros/,cljs.core.name.call(null,cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_))))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return null;
}
}));

(net.cgrand.macrovich.usetime.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(net.cgrand.macrovich.usetime.cljs$lang$applyTo = (function (seq11651){
var G__11652 = cljs.core.first.call(null,seq11651);
var seq11651__$1 = cljs.core.next.call(null,seq11651);
var G__11653 = cljs.core.first.call(null,seq11651__$1);
var seq11651__$2 = cljs.core.next.call(null,seq11651__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11652,G__11653,seq11651__$2);
}));

return null;
})()
;
(net.cgrand.macrovich.usetime.cljs$lang$macro = true);

var ret__5781__auto___11663 = (function (){
net.cgrand.macrovich.case$ = (function net$cgrand$macrovich$case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11664 = arguments.length;
var i__5727__auto___11665 = (0);
while(true){
if((i__5727__auto___11665 < len__5726__auto___11664)){
args__5732__auto__.push((arguments[i__5727__auto___11665]));

var G__11666 = (i__5727__auto___11665 + (1));
i__5727__auto___11665 = G__11666;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(net.cgrand.macrovich.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__11661){
var map__11662 = p__11661;
var map__11662__$1 = cljs.core.__destructure_map.call(null,map__11662);
var cljs__$1 = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
var clj = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"clj","clj",-660495428));
if(cljs.core.contains_QMARK_.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"&env","&env",-919163083,null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs__$1,null,(1),null)),(new cljs.core.List(null,clj,null,(1),null)))));
} else {
return cljs__$1;

}
}));

(net.cgrand.macrovich.case$.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(net.cgrand.macrovich.case$.cljs$lang$applyTo = (function (seq11658){
var G__11659 = cljs.core.first.call(null,seq11658);
var seq11658__$1 = cljs.core.next.call(null,seq11658);
var G__11660 = cljs.core.first.call(null,seq11658__$1);
var seq11658__$2 = cljs.core.next.call(null,seq11658__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11659,G__11660,seq11658__$2);
}));

return null;
})()
;
(net.cgrand.macrovich.case$.cljs$lang$macro = true);

var ret__5781__auto___11681 = (function (){
net.cgrand.macrovich.replace = (function net$cgrand$macrovich$replace(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11682 = arguments.length;
var i__5727__auto___11683 = (0);
while(true){
if((i__5727__auto___11683 < len__5726__auto___11682)){
args__5732__auto__.push((arguments[i__5727__auto___11683]));

var G__11684 = (i__5727__auto___11683 + (1));
i__5727__auto___11683 = G__11684;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return net.cgrand.macrovich.replace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(net.cgrand.macrovich.replace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,map_or_maps,body){
var smap = ((cljs.core.map_QMARK_.call(null,map_or_maps))?map_or_maps:cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,map_or_maps));
var walk = (function net$cgrand$macrovich$walk(form){
if(cljs.core.contains_QMARK_.call(null,smap,form)){
return smap.call(null,form);
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),(function (){var iter__5480__auto__ = (function net$cgrand$macrovich$walk_$_iter__11671(s__11672){
return (new cljs.core.LazySeq(null,(function (){
var s__11672__$1 = s__11672;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11672__$1);
if(temp__5804__auto__){
var s__11672__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11672__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11672__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11674 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11673 = (0);
while(true){
if((i__11673 < size__5479__auto__)){
var vec__11675 = cljs.core._nth.call(null,c__5478__auto__,i__11673);
var k = cljs.core.nth.call(null,vec__11675,(0),null);
var v = cljs.core.nth.call(null,vec__11675,(1),null);
cljs.core.chunk_append.call(null,b__11674,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$walk.call(null,k),net$cgrand$macrovich$walk.call(null,v)], null));

var G__11685 = (i__11673 + (1));
i__11673 = G__11685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11674),net$cgrand$macrovich$walk_$_iter__11671.call(null,cljs.core.chunk_rest.call(null,s__11672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11674),null);
}
} else {
var vec__11678 = cljs.core.first.call(null,s__11672__$2);
var k = cljs.core.nth.call(null,vec__11678,(0),null);
var v = cljs.core.nth.call(null,vec__11678,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$walk.call(null,k),net$cgrand$macrovich$walk.call(null,v)], null),net$cgrand$macrovich$walk_$_iter__11671.call(null,cljs.core.rest.call(null,s__11672__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,form);
})()),cljs.core.meta.call(null,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,cljs.core.map.call(null,net$cgrand$macrovich$walk,form),cljs.core.meta.call(null,form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,net$cgrand$macrovich$walk),form),cljs.core.meta.call(null,form));
} else {
return form;

}
}
}
}
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,walk,body))));
}));

(net.cgrand.macrovich.replace.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(net.cgrand.macrovich.replace.cljs$lang$applyTo = (function (seq11667){
var G__11668 = cljs.core.first.call(null,seq11667);
var seq11667__$1 = cljs.core.next.call(null,seq11667);
var G__11669 = cljs.core.first.call(null,seq11667__$1);
var seq11667__$2 = cljs.core.next.call(null,seq11667__$1);
var G__11670 = cljs.core.first.call(null,seq11667__$2);
var seq11667__$3 = cljs.core.next.call(null,seq11667__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11668,G__11669,G__11670,seq11667__$3);
}));

return null;
})()
;
(net.cgrand.macrovich.replace.cljs$lang$macro = true);


//# sourceMappingURL=macrovich.js.map
