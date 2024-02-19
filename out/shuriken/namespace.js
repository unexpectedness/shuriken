// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.namespace');
goog.require('cljs.core');
goog.require('net.cgrand.macrovich');
goog.require('cljs.analyzer.api');
var ret__5781__auto___67149 = (function (){
shuriken.namespace.cljs_import_vars = (function shuriken$namespace$cljs_import_vars(var_args){
var args__5732__auto__ = [];
var len__5726__auto___67150 = arguments.length;
var i__5727__auto___67151 = (0);
while(true){
if((i__5727__auto___67151 < len__5726__auto___67150)){
args__5732__auto__.push((arguments[i__5727__auto___67151]));

var G__67152 = (i__5727__auto___67151 + (1));
i__5727__auto___67151 = G__67152;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.namespace.cljs_import_vars.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.namespace.cljs_import_vars.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
var unravel = (function shuriken$namespace$unravel(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.map.call(null,(function (p1__67145_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,x)),(function (){var temp__5804__auto__ = cljs.core.namespace.call(null,p1__67145_SHARP_);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
return [".",n].join('');
} else {
return null;
}
})()].join(''),cljs.core.name.call(null,p1__67145_SHARP_));
}),cljs.core.mapcat.call(null,shuriken$namespace$unravel,cljs.core.rest.call(null,x)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
var syms__$1 = cljs.core.mapcat.call(null,unravel,syms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)))));
}),syms__$1))));
}));

(shuriken.namespace.cljs_import_vars.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.namespace.cljs_import_vars.cljs$lang$applyTo = (function (seq67146){
var G__67147 = cljs.core.first.call(null,seq67146);
var seq67146__$1 = cljs.core.next.call(null,seq67146);
var G__67148 = cljs.core.first.call(null,seq67146__$1);
var seq67146__$2 = cljs.core.next.call(null,seq67146__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67147,G__67148,seq67146__$2);
}));

return null;
})()
;
(shuriken.namespace.cljs_import_vars.cljs$lang$macro = true);

var ret__5781__auto___67156 = (function (){
shuriken.namespace.import_vars = (function shuriken$namespace$import_vars(var_args){
var args__5732__auto__ = [];
var len__5726__auto___67157 = arguments.length;
var i__5727__auto___67158 = (0);
while(true){
if((i__5727__auto___67158 < len__5726__auto___67157)){
args__5732__auto__.push((arguments[i__5727__auto___67158]));

var G__67159 = (i__5727__auto___67158 + (1));
i__5727__auto___67158 = G__67159;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.namespace.import_vars.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.namespace.import_vars.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.namespace","cljs-import-vars","shuriken.namespace/cljs-import-vars",1713797248,null),null,(1),null)),syms)));
}));

(shuriken.namespace.import_vars.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.namespace.import_vars.cljs$lang$applyTo = (function (seq67153){
var G__67154 = cljs.core.first.call(null,seq67153);
var seq67153__$1 = cljs.core.next.call(null,seq67153);
var G__67155 = cljs.core.first.call(null,seq67153__$1);
var seq67153__$2 = cljs.core.next.call(null,seq67153__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67154,G__67155,seq67153__$2);
}));

return null;
})()
;
(shuriken.namespace.import_vars.cljs$lang$macro = true);

shuriken.namespace.publics = cljs.analyzer.api.ns_publics;
var ret__5781__auto___67166 = (function (){
shuriken.namespace.import_namespace_vars = (function shuriken$namespace$import_namespace_vars(var_args){
var args__5732__auto__ = [];
var len__5726__auto___67167 = arguments.length;
var i__5727__auto___67168 = (0);
while(true){
if((i__5727__auto___67168 < len__5726__auto___67167)){
args__5732__auto__.push((arguments[i__5727__auto___67168]));

var G__67169 = (i__5727__auto___67168 + (1));
i__5727__auto___67168 = G__67169;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return shuriken.namespace.import_namespace_vars.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(shuriken.namespace.import_namespace_vars.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ns,p__67164){
var map__67165 = p__67164;
var map__67165__$1 = cljs.core.__destructure_map.call(null,map__67165);
var exclude = cljs.core.get.call(null,map__67165__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var vars = cljs.core.remove.call(null,cljs.core.set.call(null,exclude),cljs.core.keys.call(null,shuriken.namespace.publics.call(null,ns)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.namespace","import-vars","shuriken.namespace/import-vars",1946198235,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ns,null,(1),null)),vars)))),null,(1),null)))));
}));

(shuriken.namespace.import_namespace_vars.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(shuriken.namespace.import_namespace_vars.cljs$lang$applyTo = (function (seq67160){
var G__67161 = cljs.core.first.call(null,seq67160);
var seq67160__$1 = cljs.core.next.call(null,seq67160);
var G__67162 = cljs.core.first.call(null,seq67160__$1);
var seq67160__$2 = cljs.core.next.call(null,seq67160__$1);
var G__67163 = cljs.core.first.call(null,seq67160__$2);
var seq67160__$3 = cljs.core.next.call(null,seq67160__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67161,G__67162,G__67163,seq67160__$3);
}));

return null;
})()
;
(shuriken.namespace.import_namespace_vars.cljs$lang$macro = true);

var ret__5781__auto___67173 = (function (){
shuriken.namespace.import_namespace = (function shuriken$namespace$import_namespace(var_args){
var args__5732__auto__ = [];
var len__5726__auto___67174 = arguments.length;
var i__5727__auto___67175 = (0);
while(true){
if((i__5727__auto___67175 < len__5726__auto___67174)){
args__5732__auto__.push((arguments[i__5727__auto___67175]));

var G__67176 = (i__5727__auto___67175 + (1));
i__5727__auto___67175 = G__67176;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.namespace.import_namespace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.namespace.import_namespace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.namespace","import-namespace-vars","shuriken.namespace/import-namespace-vars",-764184449,null),null,(1),null)),args)));
}));

(shuriken.namespace.import_namespace.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.namespace.import_namespace.cljs$lang$applyTo = (function (seq67170){
var G__67171 = cljs.core.first.call(null,seq67170);
var seq67170__$1 = cljs.core.next.call(null,seq67170);
var G__67172 = cljs.core.first.call(null,seq67170__$1);
var seq67170__$2 = cljs.core.next.call(null,seq67170__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67171,G__67172,seq67170__$2);
}));

return null;
})()
;
(shuriken.namespace.import_namespace.cljs$lang$macro = true);


//# sourceMappingURL=namespace.js.map
