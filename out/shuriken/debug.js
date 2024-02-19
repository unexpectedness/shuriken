// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.debug');
goog.require('cljs.core');
goog.require('shuriken.string');
goog.require('clojure.string');
shuriken.debug.debug_print = (function shuriken$debug$debug_print(label,result){
var label_length = ((1) + cljs.core.count.call(null,label));
var result_str = (function (){var _STAR_print_length_STAR__orig_val__38205 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__38206 = (10);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__38206);

try{return shuriken.string.format_code.call(null,result);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__38205);
}})();
var vec__38202 = shuriken.string.lines.call(null,result_str);
var seq__38203 = cljs.core.seq.call(null,vec__38202);
var first__38204 = cljs.core.first.call(null,seq__38203);
var seq__38203__$1 = cljs.core.next.call(null,seq__38203);
var f = first__38204;
var more = seq__38203__$1;
var tabs = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,label_length," "));
if(cljs.core.empty_QMARK_.call(null,more)){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
} else {
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.print.call(null,"\n");

cljs.core.println.call(null,shuriken.string.tabulate.call(null,shuriken.string.join_lines.call(null,more),tabs));
}

return result;
});
var ret__5781__auto___38212 = (function (){
/**
 * Evaluates and prints a debug statement for each form.
 *   Returns the value of the last.
 * 
 *   ```clojure
 *   (debug (+ 1 2)
 *       (- 3 4))
 *   ; (+ 1 2): 3
 *   ; (- 3 4): -1
 *   => -1
 *   ```
 */
shuriken.debug.debug = (function shuriken$debug$debug(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38213 = arguments.length;
var i__5727__auto___38214 = (0);
while(true){
if((i__5727__auto___38214 < len__5726__auto___38213)){
args__5732__auto__.push((arguments[i__5727__auto___38214]));

var G__38215 = (i__5727__auto___38214 + (1));
i__5727__auto___38214 = G__38215;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.debug.debug.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.debug.debug.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.seq.call(null,forms)){
var v_sym = cljs.core.gensym.call(null,"v-");
var bindings = cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (expr){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,v_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__38207__auto__","result__38207__auto__",-1969775140,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"label__38208__auto__","label__38208__auto__",-1180662380,null),null,(1),null)),(new cljs.core.List(null,shuriken.string.truncate.call(null,clojure.string.replace.call(null,shuriken.string.format_code.call(null,expr),"\n"," "),(32)),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.debug","debug-print","shuriken.debug/debug-print",965102384,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"label__38208__auto__","label__38208__auto__",-1180662380,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__38207__auto__","result__38207__auto__",-1969775140,null),null,(1),null))))),null,(1),null))))),null,(1),null))))));
}),forms));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,v_sym,null,(1),null)))));
} else {
return null;
}
}));

(shuriken.debug.debug.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.debug.debug.cljs$lang$applyTo = (function (seq38209){
var G__38210 = cljs.core.first.call(null,seq38209);
var seq38209__$1 = cljs.core.next.call(null,seq38209);
var G__38211 = cljs.core.first.call(null,seq38209__$1);
var seq38209__$2 = cljs.core.next.call(null,seq38209__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38210,G__38211,seq38209__$2);
}));

return null;
})()
;
(shuriken.debug.debug.cljs$lang$macro = true);

shuriken.debug._STAR_tab_depth_STAR_ = (-1);
shuriken.debug.original_println = cljs.core.println;
shuriken.debug.println_tabs = (function shuriken$debug$println_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38217 = arguments.length;
var i__5727__auto___38218 = (0);
while(true){
if((i__5727__auto___38218 < len__5726__auto___38217)){
args__5732__auto__.push((arguments[i__5727__auto___38218]));

var G__38219 = (i__5727__auto___38218 + (1));
i__5727__auto___38218 = G__38219;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shuriken.debug.println_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shuriken.debug.println_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return shuriken.debug.original_println.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,shuriken.debug._STAR_tab_depth_STAR_,"  "),cljs.core.interpose.call(null," ",args))));
}));

(shuriken.debug.println_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shuriken.debug.println_tabs.cljs$lang$applyTo = (function (seq38216){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38216));
}));

var ret__5781__auto___38223 = (function (){
shuriken.debug.with_tabs = (function shuriken$debug$with_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38224 = arguments.length;
var i__5727__auto___38225 = (0);
while(true){
if((i__5727__auto___38225 < len__5726__auto___38224)){
args__5732__auto__.push((arguments[i__5727__auto___38225]));

var G__38226 = (i__5727__auto___38225 + (1));
i__5727__auto___38225 = G__38226;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.debug.with_tabs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.debug.with_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.debug","*tab-depth*","shuriken.debug/*tab-depth*",-1351589371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("shuriken.debug","*tab-depth*","shuriken.debug/*tab-depth*",-1351589371,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("shuriken.debug","println-tabs","shuriken.debug/println-tabs",-1165816911,null),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(shuriken.debug.with_tabs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.debug.with_tabs.cljs$lang$applyTo = (function (seq38220){
var G__38221 = cljs.core.first.call(null,seq38220);
var seq38220__$1 = cljs.core.next.call(null,seq38220);
var G__38222 = cljs.core.first.call(null,seq38220__$1);
var seq38220__$2 = cljs.core.next.call(null,seq38220__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38221,G__38222,seq38220__$2);
}));

return null;
})()
;
(shuriken.debug.with_tabs.cljs$lang$macro = true);


//# sourceMappingURL=debug.js.map
