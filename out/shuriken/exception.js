// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.exception');
goog.require('cljs.core');
goog.require('shuriken.associative');
goog.require('net.cgrand.macrovich');
shuriken.exception.regex_QMARK_ = (function shuriken$exception$regex_QMARK_(x){
return (x instanceof RegExp);
});
shuriken.exception.catch_it_matches_QMARK_ = (function shuriken$exception$catch_it_matches_QMARK_(e,pattern){
if(cljs.core.isa_QMARK_.call(null,Error,pattern)){
return (e instanceof pattern);
} else {
if(cljs.core.map_QMARK_.call(null,pattern)){
return (((e instanceof cljs.core.ExceptionInfo)) && (shuriken.associative.submap_QMARK_.call(null,pattern,cljs.core.ex_data.call(null,e))));
} else {
if(typeof pattern === 'string'){
return cljs.core._EQ_.call(null,pattern,e.message);
} else {
if(cljs.core.coll_QMARK_.call(null,pattern)){
return cljs.core.some.call(null,cljs.core.partial.call(null,shuriken.exception.catch_it_matches_QMARK_,e),pattern);
} else {
if(cljs.core.ifn_QMARK_.call(null,pattern)){
return pattern.call(null,e);
} else {
if(shuriken.exception.regex_QMARK_.call(null,pattern)){
return cljs.core.re_find.call(null,pattern,e.message);
} else {
throw (new Error("Invalid pattern clause"));

}
}
}
}
}
}
});
var ret__5781__auto___38559 = shuriken.exception.catch_it = (function shuriken$exception$catch_it(_AMPERSAND_form,_AMPERSAND_env,substitute_f,pattern,expr){
var z = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"pattern__38557__auto__","pattern__38557__auto__",529235704,null),null,(1),null)),(new cljs.core.List(null,pattern,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"t__38558__auto__","t__38558__auto__",554973391,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.exception","catch-it-matches?","shuriken.exception/catch-it-matches?",1604600086,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"t__38558__auto__","t__38558__auto__",554973391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"pattern__38557__auto__","pattern__38557__auto__",529235704,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,substitute_f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"t__38558__auto__","t__38558__auto__",554973391,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"t__38558__auto__","t__38558__auto__",554973391,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
return z;
});
(shuriken.exception.catch_it.cljs$lang$macro = true);

var ret__5781__auto___38562 = (function (){
/**
 * Returns `substitute` if `expr` raises an exception that matches
 *   `pattern`.
 *   If not provided, `substitute` is `nil`.
 *   `pattern` can be:
 *  - a function
 *  - a class
 *  - a string
 *  - a regex pattern (used via `re-find`)
 *  - a map (matches if it's a submap of an ExceptionInfo's data)
 *  - or a sequence of such elements.
 * 
 *   ```clojure
 *   (silence ArithmeticException (/ 1 0))
 *   => nil
 * 
 *   (silence "Divide by zero" (/ 1 0))
 *   => nil
 * 
 *   (silence #"zero" (/ 1 0))
 *   => nil
 * 
 *   (silence [ArithmeticException]
 *  (do (println "watch out !")
 *      (/ 1 0)))
 *   ;; watch out !
 *   => nil
 * 
 *   (silence :substitute
 *         (fn [x]
 *           (isa? (class x) ArithmeticException))
 *         (/ 1 0))
 *   => :substitute
 *   ```
 */
shuriken.exception.silence = (function shuriken$exception$silence(var_args){
var G__38561 = arguments.length;
switch (G__38561) {
case 4:
return shuriken.exception.silence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shuriken.exception.silence.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(shuriken.exception.silence.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,pattern,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.exception","silence","shuriken.exception/silence",-1173585783,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,pattern,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(shuriken.exception.silence.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,substitute,pattern,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.exception","catch-it","shuriken.exception/catch-it",-1895248080,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),null,(1),null)),(new cljs.core.List(null,substitute,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,pattern,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(shuriken.exception.silence.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(shuriken.exception.silence.cljs$lang$macro = true);

var ret__5781__auto___38564 = /**
 * Returns true if `expr` raises an exception matching `pattern`.
 *   See [[silence]] for the semantics of `pattern`.
 * 
 *   ```clojure
 *   (thrown? ArithmeticException (/ 1 0))
 *   => true
 * 
 *   (thrown? #{ArithmeticException} (/ 1 1))
 *   => false
 * 
 *   (thrown? (fn [x]
 *           (isa? (class x) ArithmeticException))
 *         (throw (IllegalArgumentException. "my-error")))
 *   ;; raises:
 *   ;;   IllegalArgumentException my-error
 *   ```
 */
shuriken.exception.thrown_QMARK_ = (function shuriken$exception$thrown_QMARK_(_AMPERSAND_form,_AMPERSAND_env,pattern,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.exception","silence","shuriken.exception/silence",-1173585783,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043),null,(1),null)),(new cljs.core.List(null,pattern,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)))));
});
(shuriken.exception.thrown_QMARK_.cljs$lang$macro = true);

var ret__5781__auto___38565 = /**
 * Gently returns exceptions matching `pattern` when they are raised instead
 *   of propagating them upwards.
 */
shuriken.exception.capturex = (function shuriken$exception$capturex(_AMPERSAND_form,_AMPERSAND_env,pattern,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.exception","catch-it","shuriken.exception/catch-it",-1895248080,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),null,(1),null)),(new cljs.core.List(null,pattern,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
});
(shuriken.exception.capturex.cljs$lang$macro = true);


//# sourceMappingURL=exception.js.map
