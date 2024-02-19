// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('shuriken.sequential');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Returns a string as formatted by `clojure.pprint/code-dispatch`.
 */
shuriken.string.format_code = (function shuriken$string$format_code(code){
return clojure.string.trim.call(null,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11712_11722 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11713_11723 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11714_11724 = true;
var _STAR_print_fn_STAR__temp_val__11715_11725 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11714_11724);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11715_11725);

try{var _STAR_print_right_margin_STAR__orig_val__11716_11726 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_miser_width_STAR__orig_val__11717_11727 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__11718_11728 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_right_margin_STAR__temp_val__11719_11729 = (130);
var _STAR_print_miser_width_STAR__temp_val__11720_11730 = (80);
var _STAR_print_pprint_dispatch_STAR__temp_val__11721_11731 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__11719_11729);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__11720_11730);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__11721_11731);

try{cljs.pprint.pprint.call(null,code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__11718_11728);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__11717_11727);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__11716_11726);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11713_11723);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11712_11722);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
});
/**
 * Left or right-adjust a string.
 */
shuriken.string.adjust = (function shuriken$string$adjust(direction,n,s){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null).call(null,direction))){
} else {
throw (new Error("Assert failed: (#{:right :left} direction)"));
}

var orientation = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"left","left",-399115937)))?"-":"");
return goog.string.format(["%",orientation,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"s"].join(''),s);
});
/**
 * Splits a string around newlines.
 */
shuriken.string.lines = (function shuriken$string$lines(s){
return clojure.string.split.call(null,s,/\r?\n/);
});
/**
 * Splits a string around whitespaces.
 */
shuriken.string.words = (function shuriken$string$words(s){
return cljs.core.map.call(null,(function (p1__11733_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__11733_SHARP_);
}),shuriken.sequential.slice.call(null,(function (p1__11732_SHARP_){
return cljs.core.re_matches.call(null,/\s/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11732_SHARP_));
}),s,new cljs.core.Keyword(null,"include-empty","include-empty",1992495609),false));
});
/**
 * Glues strings together with newlines.
 */
shuriken.string.join_lines = (function shuriken$string$join_lines(lines){
return clojure.string.join.call(null,"\n",lines);
});
/**
 * Glues strings together with spaces.
 */
shuriken.string.join_words = (function shuriken$string$join_words(words){
return clojure.string.join.call(null," ",words);
});
/**
 * Left-pad a string with `pad`, taking newlines into account.
 */
shuriken.string.tabulate = (function shuriken$string$tabulate(s,pad){
return shuriken.string.join_lines.call(null,cljs.core.map.call(null,(function (p1__11734_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11734_SHARP_)].join('');
}),shuriken.string.lines.call(null,s)));
});
/**
 * Truncate a string with `pad` beyond a certain length. By default,
 *   `pad` is `"..."`.
 */
shuriken.string.truncate = (function shuriken$string$truncate(var_args){
var G__11736 = arguments.length;
switch (G__11736) {
case 2:
return shuriken.string.truncate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shuriken.string.truncate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shuriken.string.truncate.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return shuriken.string.truncate.call(null,s,length,"...");
}));

(shuriken.string.truncate.cljs$core$IFn$_invoke$arity$3 = (function (s,length,pad){
if((cljs.core.count.call(null,s) > length)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,length,s))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad)].join('');
} else {
return s;
}
}));

(shuriken.string.truncate.cljs$lang$maxFixedArity = 3);

var ret__5781__auto___11741 = (function (){
/**
 * Binds *out* to an anonymous writer used as /dev/null and returns
 *   the value of the last expr in body.
 */
shuriken.string.no_print = (function shuriken$string$no_print(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11742 = arguments.length;
var i__5727__auto___11743 = (0);
while(true){
if((i__5727__auto___11743 < len__5726__auto___11742)){
args__5732__auto__.push((arguments[i__5727__auto___11743]));

var G__11744 = (i__5727__auto___11743 + (1));
i__5727__auto___11743 = G__11744;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.string.no_print.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.string.no_print.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"java.io.StringWriter","java.io.StringWriter",-1841858871,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(shuriken.string.no_print.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.string.no_print.cljs$lang$applyTo = (function (seq11738){
var G__11739 = cljs.core.first.call(null,seq11738);
var seq11738__$1 = cljs.core.next.call(null,seq11738);
var G__11740 = cljs.core.first.call(null,seq11738__$1);
var seq11738__$2 = cljs.core.next.call(null,seq11738__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11739,G__11740,seq11738__$2);
}));

return null;
})()
;
(shuriken.string.no_print.cljs$lang$macro = true);


//# sourceMappingURL=string.js.map
