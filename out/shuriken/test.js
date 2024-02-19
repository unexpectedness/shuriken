// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.test');
goog.require('cljs.core');
goog.require('cljs.test');
shuriken.test.calls = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
shuriken.test.store_call_BANG_ = (function shuriken$test$store_call_BANG_(v){
return cljs.core.swap_BANG_.call(null,shuriken.test.calls,cljs.core.conj,v);
});
var ret__5781__auto___38288 = (function (){
shuriken.test.with_fresh_calls = (function shuriken$test$with_fresh_calls(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38289 = arguments.length;
var i__5727__auto___38290 = (0);
while(true){
if((i__5727__auto___38290 < len__5726__auto___38289)){
args__5732__auto__.push((arguments[i__5727__auto___38290]));

var G__38291 = (i__5727__auto___38290 + (1));
i__5727__auto___38290 = G__38291;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shuriken.test.with_fresh_calls.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shuriken.test.with_fresh_calls.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("shuriken.test","calls","shuriken.test/calls",1353421090,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),body)));
}));

(shuriken.test.with_fresh_calls.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shuriken.test.with_fresh_calls.cljs$lang$applyTo = (function (seq38285){
var G__38286 = cljs.core.first.call(null,seq38285);
var seq38285__$1 = cljs.core.next.call(null,seq38285);
var G__38287 = cljs.core.first.call(null,seq38285__$1);
var seq38285__$2 = cljs.core.next.call(null,seq38285__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38286,G__38287,seq38285__$2);
}));

return null;
})()
;
(shuriken.test.with_fresh_calls.cljs$lang$macro = true);

var ret__5781__auto___38298 = (function (){
shuriken.test.defn_call = (function shuriken$test$defn_call(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38299 = arguments.length;
var i__5727__auto___38300 = (0);
while(true){
if((i__5727__auto___38300 < len__5726__auto___38299)){
args__5732__auto__.push((arguments[i__5727__auto___38300]));

var G__38301 = (i__5727__auto___38300 + (1));
i__5727__auto___38300 = G__38301;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return shuriken.test.defn_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(shuriken.test.defn_call.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,params,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__38292__auto__","result__38292__auto__",-994412316,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("shuriken.test","store-call!","shuriken.test/store-call!",-1236408531,null),null,(1),null)),(new cljs.core.List(null,cljs.core.keyword.call(null,name),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__38292__auto__","result__38292__auto__",-994412316,null),null,(1),null))))),null,(1),null)))));
}));

(shuriken.test.defn_call.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(shuriken.test.defn_call.cljs$lang$applyTo = (function (seq38293){
var G__38294 = cljs.core.first.call(null,seq38293);
var seq38293__$1 = cljs.core.next.call(null,seq38293);
var G__38295 = cljs.core.first.call(null,seq38293__$1);
var seq38293__$2 = cljs.core.next.call(null,seq38293__$1);
var G__38296 = cljs.core.first.call(null,seq38293__$2);
var seq38293__$3 = cljs.core.next.call(null,seq38293__$2);
var G__38297 = cljs.core.first.call(null,seq38293__$3);
var seq38293__$4 = cljs.core.next.call(null,seq38293__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38294,G__38295,G__38296,G__38297,seq38293__$4);
}));

return null;
})()
;
(shuriken.test.defn_call.cljs$lang$macro = true);

shuriken.test.assert_calls = (function shuriken$test$assert_calls(vs){
try{var values__614__auto__ = (new cljs.core.List(null,vs,(new cljs.core.List(null,cljs.core.deref.call(null,shuriken.test.calls),null,(1),null)),(2),null));
var result__615__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto__);
if(cljs.core.truth_(result__615__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/src/shuriken/test.cljc",20,new cljs.core.Keyword(null,"pass","pass",1574159993),7,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"vs","vs",-381565563,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"calls","calls",1206729183,null))),22,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/src/shuriken/test.cljc",20,new cljs.core.Keyword(null,"fail","fail",1706214930),7,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"vs","vs",-381565563,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"calls","calls",1206729183,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null,(1),null)),(2),null)),null]));
}

return result__615__auto__;
}catch (e38302){var t__665__auto__ = e38302;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/src/shuriken/test.cljc",20,new cljs.core.Keyword(null,"error","error",-978969032),7,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"vs","vs",-381565563,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"calls","calls",1206729183,null))),22,t__665__auto__,null]));
}});

//# sourceMappingURL=test.js.map
