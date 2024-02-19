// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.analyzer.api');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.env');
/**
 * Creates an empty compilation state Atom<Map>. The optional opts arg is a map
 * representing the compiler configuration. See the documentation
 * for details: https://clojurescript.org/reference/compiler-options
 */
cljs.analyzer.api.empty_state = (function cljs$analyzer$api$empty_state(var_args){
var G__8200 = arguments.length;
switch (G__8200) {
case 0:
return cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
if((!((cljs.env._STAR_compiler_STAR_ == null)))){
return cljs.env._STAR_compiler_STAR_;
} else {
return cljs.env.default_compiler_env.call(null);
}
}));

(cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cljs.env.default_compiler_env.call(null,opts);
}));

(cljs.analyzer.api.empty_state.cljs$lang$maxFixedArity = 1);

/**
 * Return the current compiler state atom.
 */
cljs.analyzer.api.current_state = (function cljs$analyzer$api$current_state(){
return cljs.env._STAR_compiler_STAR_;
});
/**
 * Return the current file under analysis or compilation.
 */
cljs.analyzer.api.current_file = (function cljs$analyzer$api$current_file(){
return cljs.analyzer._STAR_cljs_file_STAR_;
});
/**
 * Return the current ns under analysis or compilation.
 */
cljs.analyzer.api.current_ns = (function cljs$analyzer$api$current_ns(){
return cljs.analyzer._STAR_cljs_ns_STAR_;
});
var ret__5781__auto___8206 = (function (){
/**
 * Run the body with the given compilation state Atom<Map>.
 */
cljs.analyzer.api.with_state = (function cljs$analyzer$api$with_state(var_args){
var args__5732__auto__ = [];
var len__5726__auto___8207 = arguments.length;
var i__5727__auto___8208 = (0);
while(true){
if((i__5727__auto___8208 < len__5726__auto___8207)){
args__5732__auto__.push((arguments[i__5727__auto___8208]));

var G__8209 = (i__5727__auto___8208 + (1));
i__5727__auto___8208 = G__8209;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.analyzer.api.with_state.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,state,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.env","with-compiler-env","cljs.env/with-compiler-env",-1219561832,null),null,(1),null)),(new cljs.core.List(null,state,null,(1),null)),body)));
}));

(cljs.analyzer.api.with_state.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.api.with_state.cljs$lang$applyTo = (function (seq8202){
var G__8203 = cljs.core.first.call(null,seq8202);
var seq8202__$1 = cljs.core.next.call(null,seq8202);
var G__8204 = cljs.core.first.call(null,seq8202__$1);
var seq8202__$2 = cljs.core.next.call(null,seq8202__$1);
var G__8205 = cljs.core.first.call(null,seq8202__$2);
var seq8202__$3 = cljs.core.next.call(null,seq8202__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8203,G__8204,G__8205,seq8202__$3);
}));

return null;
})()
;
(cljs.analyzer.api.with_state.cljs$lang$macro = true);

/**
 * Creates an empty analysis environment.
 */
cljs.analyzer.api.empty_env = (function cljs$analyzer$api$empty_env(){
return cljs.analyzer.empty_env.call(null);
});
var ret__5781__auto___8213 = (function (){
/**
 * Disable analyzer warnings for any analysis executed in body.
 */
cljs.analyzer.api.no_warn = (function cljs$analyzer$api$no_warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___8214 = arguments.length;
var i__5727__auto___8215 = (0);
while(true){
if((i__5727__auto___8215 < len__5726__auto___8214)){
args__5732__auto__.push((arguments[i__5727__auto___8215]));

var G__8216 = (i__5727__auto___8215 + (1));
i__5727__auto___8215 = G__8216;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var no_warnings = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null)),(new cljs.core.List(null,no_warnings,null,(1),null)))))),null,(1),null)),body)));
}));

(cljs.analyzer.api.no_warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq8210){
var G__8211 = cljs.core.first.call(null,seq8210);
var seq8210__$1 = cljs.core.next.call(null,seq8210);
var G__8212 = cljs.core.first.call(null,seq8210__$1);
var seq8210__$2 = cljs.core.next.call(null,seq8210__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8211,G__8212,seq8210__$2);
}));

return null;
})()
;
(cljs.analyzer.api.no_warn.cljs$lang$macro = true);

/**
 * Test if the given warning-type is enabled.
 */
cljs.analyzer.api.warning_enabled_QMARK_ = (function cljs$analyzer$api$warning_enabled_QMARK_(warning_type){
return cljs.analyzer._STAR_cljs_warnings_STAR_.call(null,warning_type);
});
/**
 * The default warning handler.
 * 
 * Outputs the warning messages to *err*.
 */
cljs.analyzer.api.default_warning_handler = (function cljs$analyzer$api$default_warning_handler(warning_type,env,extra){
return cljs.analyzer.default_warning_handler.call(null,warning_type,env,extra);
});
var ret__5781__auto___8221 = (function (){
/**
 * Helper macro for custom handling of emitted warnings. Handlers should be
 * a vector of functions. The signature of these functions is
 * [warn-type env warn-info]. warn-type is a keyword describing the warning,
 * env is the analysis environment, and warn-info is a map of extra useful
 * information for a particular warning type.
 */
cljs.analyzer.api.with_warning_handlers = (function cljs$analyzer$api$with_warning_handlers(var_args){
var args__5732__auto__ = [];
var len__5726__auto___8222 = arguments.length;
var i__5727__auto___8223 = (0);
while(true){
if((i__5727__auto___8223 < len__5726__auto___8222)){
args__5732__auto__.push((arguments[i__5727__auto___8223]));

var G__8224 = (i__5727__auto___8223 + (1));
i__5727__auto___8223 = G__8224;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.analyzer.api.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,handlers,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","with-warning-handlers","cljs.analyzer/with-warning-handlers",-107222204,null),null,(1),null)),(new cljs.core.List(null,handlers,null,(1),null)),body)));
}));

(cljs.analyzer.api.with_warning_handlers.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.api.with_warning_handlers.cljs$lang$applyTo = (function (seq8217){
var G__8218 = cljs.core.first.call(null,seq8217);
var seq8217__$1 = cljs.core.next.call(null,seq8217);
var G__8219 = cljs.core.first.call(null,seq8217__$1);
var seq8217__$2 = cljs.core.next.call(null,seq8217__$1);
var G__8220 = cljs.core.first.call(null,seq8217__$2);
var seq8217__$3 = cljs.core.next.call(null,seq8217__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8218,G__8219,G__8220,seq8217__$3);
}));

return null;
})()
;
(cljs.analyzer.api.with_warning_handlers.cljs$lang$macro = true);

/**
 * Helper for generating the standard analyzer messages for warnings. Should be
 *   passed warn-type and warn-info. See with-warning-handlers.
 */
cljs.analyzer.api.warning_message = (function cljs$analyzer$api$warning_message(warn_type,warn_info){
return cljs.analyzer.error_message.call(null,warn_type,warn_info);
});
/**
 * Get the enabled warning types.
 */
cljs.analyzer.api.enabled_warnings = (function cljs$analyzer$api$enabled_warnings(){
return cljs.analyzer._STAR_cljs_warnings_STAR_;
});
/**
 * Return the compiler options from compiler state.
 */
cljs.analyzer.api.get_options = (function cljs$analyzer$api$get_options(var_args){
var G__8226 = arguments.length;
switch (G__8226) {
case 0:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.call(null,cljs.analyzer.api.current_state.call(null));
}));

(cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"options","options",99638489));
}));

(cljs.analyzer.api.get_options.cljs$lang$maxFixedArity = 1);

/**
 * Return the currently computed Google Closure js dependency index from the
 *   compiler state.
 */
cljs.analyzer.api.get_js_index = (function cljs$analyzer$api$get_js_index(var_args){
var G__8229 = arguments.length;
switch (G__8229) {
case 0:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_js_index.call(null,cljs.analyzer.api.current_state.call(null));
}));

(cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
}));

(cljs.analyzer.api.get_js_index.cljs$lang$maxFixedArity = 1);

/**
 * ClojureScript's default analysis passes.
 */
cljs.analyzer.api.default_passes = cljs.analyzer.default_passes;
var ret__5781__auto___8235 = (function (){
/**
 * Evaluate the body with the provided sequence of compiler passes.
 */
cljs.analyzer.api.with_passes = (function cljs$analyzer$api$with_passes(var_args){
var args__5732__auto__ = [];
var len__5726__auto___8236 = arguments.length;
var i__5727__auto___8237 = (0);
while(true){
if((i__5727__auto___8237 < len__5726__auto___8236)){
args__5732__auto__.push((arguments[i__5727__auto___8237]));

var G__8238 = (i__5727__auto___8237 + (1));
i__5727__auto___8237 = G__8238;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_passes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.analyzer.api.with_passes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,passes,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*passes*","cljs.analyzer/*passes*",1273642043,null),null,(1),null)),(new cljs.core.List(null,passes,null,(1),null)))))),null,(1),null)),body)));
}));

(cljs.analyzer.api.with_passes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.api.with_passes.cljs$lang$applyTo = (function (seq8231){
var G__8232 = cljs.core.first.call(null,seq8231);
var seq8231__$1 = cljs.core.next.call(null,seq8231);
var G__8233 = cljs.core.first.call(null,seq8231__$1);
var seq8231__$2 = cljs.core.next.call(null,seq8231__$1);
var G__8234 = cljs.core.first.call(null,seq8231__$2);
var seq8231__$3 = cljs.core.next.call(null,seq8231__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8232,G__8233,G__8234,seq8231__$3);
}));

return null;
})()
;
(cljs.analyzer.api.with_passes.cljs$lang$macro = true);

/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
cljs.analyzer.api.resolve = (function cljs$analyzer$api$resolve(env,sym){
if(cljs.core.map_QMARK_.call(null,env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{var _STAR_private_var_access_nowarn_STAR__orig_val__8240 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__8241 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__8241);

try{return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__8240);
}}catch (e8239){var e = e8239;
return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}});
/**
 * Return all namespaces. Analagous to clojure.core/all-ns but
 *   returns symbols identifying namespaces not Namespace instances.
 */
cljs.analyzer.api.all_ns = (function cljs$analyzer$api$all_ns(var_args){
var G__8243 = arguments.length;
switch (G__8243) {
case 0:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.all_ns.call(null,cljs.env._STAR_compiler_STAR_);
}));

(cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.keys.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)));
}));

(cljs.analyzer.api.all_ns.cljs$lang$maxFixedArity = 1);

/**
 * Given a namespace return the corresponding namespace analysis map. Analagous
 *   to clojure.core/find-ns.
 */
cljs.analyzer.api.find_ns = (function cljs$analyzer$api$find_ns(var_args){
var G__8246 = arguments.length;
switch (G__8246) {
case 1:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return cljs.analyzer.api.find_ns.call(null,cljs.env._STAR_compiler_STAR_,sym);
}));

(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),sym], null));
}));

(cljs.analyzer.api.find_ns.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace return all the var analysis maps. Analagous to
 *   clojure.core/ns-interns but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_interns = (function cljs$analyzer$api$ns_interns(var_args){
var G__8249 = arguments.length;
switch (G__8249) {
case 1:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_interns.call(null,cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
}));

(cljs.analyzer.api.ns_interns.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace return all the public var analysis maps. Analagous to
 *   clojure.core/ns-publics but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_publics = (function cljs$analyzer$api$ns_publics(var_args){
var G__8252 = arguments.length;
switch (G__8252) {
case 1:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_publics.call(null,cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__8253){
var vec__8254 = p__8253;
var k = cljs.core.nth.call(null,vec__8254,(0),null);
var v = cljs.core.nth.call(null,vec__8254,(1),null);
return new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))));
}));

(cljs.analyzer.api.ns_publics.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace and a symbol return the corresponding var analysis map.
 *   Analagous to clojure.core/ns-resolve but returns var analysis map not Var.
 */
cljs.analyzer.api.ns_resolve = (function cljs$analyzer$api$ns_resolve(var_args){
var G__8259 = arguments.length;
switch (G__8259) {
case 2:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ns,sym){
return cljs.analyzer.api.ns_resolve.call(null,cljs.env._STAR_compiler_STAR_,ns,sym);
}));

(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3 = (function (state,ns,sym){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
}));

(cljs.analyzer.api.ns_resolve.cljs$lang$maxFixedArity = 3);

/**
 * Removes the namespace named by the symbol.
 */
cljs.analyzer.api.remove_ns = (function cljs$analyzer$api$remove_ns(var_args){
var G__8262 = arguments.length;
switch (G__8262) {
case 1:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.remove_ns.call(null,cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),cljs.core.dissoc,ns);
}));

(cljs.analyzer.api.remove_ns.cljs$lang$maxFixedArity = 2);

var ret__5781__auto___8268 = (function (){
/**
 * Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation
 *   environment atom and runs body.
 */
cljs.analyzer.api.in_cljs_user = (function cljs$analyzer$api$in_cljs_user(var_args){
var args__5732__auto__ = [];
var len__5726__auto___8269 = arguments.length;
var i__5727__auto___8270 = (0);
while(true){
if((i__5727__auto___8270 < len__5726__auto___8269)){
args__5732__auto__.push((arguments[i__5727__auto___8270]));

var G__8271 = (i__5727__auto___8270 + (1));
i__5727__auto___8270 = G__8271;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-ns*","cljs.analyzer/*cljs-ns*",1242529789,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.env","with-compiler-env","cljs.env/with-compiler-env",-1219561832,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),body))),null,(1),null)))));
}));

(cljs.analyzer.api.in_cljs_user.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq8264){
var G__8265 = cljs.core.first.call(null,seq8264);
var seq8264__$1 = cljs.core.next.call(null,seq8264);
var G__8266 = cljs.core.first.call(null,seq8264__$1);
var seq8264__$2 = cljs.core.next.call(null,seq8264__$1);
var G__8267 = cljs.core.first.call(null,seq8264__$2);
var seq8264__$3 = cljs.core.next.call(null,seq8264__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8265,G__8266,G__8267,seq8264__$3);
}));

return null;
})()
;
(cljs.analyzer.api.in_cljs_user.cljs$lang$macro = true);


//# sourceMappingURL=api.js.map
