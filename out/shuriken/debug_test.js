// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.debug_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('shuriken.debug');
goog.require('shuriken.test');
shuriken.debug_test.do_something = (function shuriken$debug_test$do_something(x){
var result__38160__auto__ = x;
shuriken.test.store_call_BANG_.call(null,new cljs.core.Keyword(null,"do-something","do-something",-1649705325));

return result__38160__auto__;
});
shuriken.debug_test.do_nothing = (function shuriken$debug_test$do_nothing(x){
var result__38160__auto__ = x;
shuriken.test.store_call_BANG_.call(null,new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282));

return result__38160__auto__;
});
shuriken.debug_test.test_debug_print = (function shuriken$debug_test$test_debug_print(){
return cljs.test.test_var.call(null,shuriken.debug_test.test_debug_print.cljs$lang$var);
});
shuriken.debug_test.test_debug_print.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Asserting newlines are printed correctly");

try{try{var values__614__auto__ = (new cljs.core.List(null,"lab: :a\nlab: :b\nlab: :c\n",(new cljs.core.List(null,clojure.string.replace.call(null,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38308_38312 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38309_38313 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38310_38314 = true;
var _STAR_print_fn_STAR__temp_val__38311_38315 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38310_38314);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38311_38315);

try{shuriken.debug.debug_print.call(null,"lab",new cljs.core.Keyword(null,"a","a",-2123407586));

shuriken.debug.debug_print.call(null,"lab",new cljs.core.Keyword(null,"b","b",1482224470));

shuriken.debug.debug_print.call(null,"lab",new cljs.core.Keyword(null,"c","c",-1763192079));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38309_38313);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38308_38312);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})(),/ +\n/,"\n"),null,(1),null)),(2),null));
var result__615__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto__);
if(cljs.core.truth_(result__615__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/debug_test.cljc",55,new cljs.core.Keyword(null,"pass","pass",1574159993),9,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"lab: :a\nlab: :b\nlab: :c\n",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"b","b",1482224470)),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"c","c",-1763192079))),cljs.core.list(new cljs.core.Symbol("clojure.string","replace","clojure.string/replace",465523638,null),/ +\n/,"\n"))),16,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/debug_test.cljc",55,new cljs.core.Keyword(null,"fail","fail",1706214930),9,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"lab: :a\nlab: :b\nlab: :c\n",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"b","b",1482224470)),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"c","c",-1763192079))),cljs.core.list(new cljs.core.Symbol("clojure.string","replace","clojure.string/replace",465523638,null),/ +\n/,"\n"))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null,(1),null)),(2),null)),null]));
}

return result__615__auto__;
}catch (e38307){var t__665__auto__ = e38307;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/debug_test.cljc",55,new cljs.core.Keyword(null,"error","error",-978969032),9,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"lab: :a\nlab: :b\nlab: :c\n",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"b","b",1482224470)),cljs.core.list(new cljs.core.Symbol(null,"debug-print","debug-print",-583553454,null),"lab",new cljs.core.Keyword(null,"c","c",-1763192079))),cljs.core.list(new cljs.core.Symbol("clojure.string","replace","clojure.string/replace",465523638,null),/ +\n/,"\n"))),16,t__665__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(shuriken.debug_test.test_debug_print.cljs$lang$var = new cljs.core.Var(function(){return shuriken.debug_test.test_debug_print;},new cljs.core.Symbol("shuriken.debug-test","test-debug-print","shuriken.debug-test/test-debug-print",861542971,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"shuriken.debug-test","shuriken.debug-test",-139448172,null),new cljs.core.Symbol(null,"test-debug-print","test-debug-print",-1206088612,null),"/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/debug_test.cljc",26,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(shuriken.debug_test.test_debug_print)?shuriken.debug_test.test_debug_print.cljs$lang$test:null)])));
shuriken.debug_test.test_debug = (function shuriken$debug_test$test_debug(){
return cljs.test.test_var.call(null,shuriken.debug_test.test_debug.cljs$lang$var);
});
shuriken.debug_test.test_debug.cljs$lang$test = (function (){
cljs.core.reset_BANG_.call(null,shuriken.test.calls,cljs.core.PersistentVector.EMPTY);

try{var value__618__auto___38322 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38317_38323 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38318_38324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38319_38325 = true;
var _STAR_print_fn_STAR__temp_val__38320_38326 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38319_38325);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38320_38326);

try{cljs.core._EQ_.call(null,(4),(function (){var v_38321 = (function (){var result__2876__auto__ = shuriken.debug_test.do_something.call(null,(1));
var label__2877__auto__ = "(do-something 1)";
return shuriken.debug.debug_print.call(null,label__2877__auto__,result__2876__auto__);
})();
var v_38321__$1 = (function (){var result__2876__auto__ = shuriken.debug_test.do_something.call(null,(2));
var label__2877__auto__ = "(do-something 2)";
return shuriken.debug.debug_print.call(null,label__2877__auto__,result__2876__auto__);
})();
var v_38321__$2 = (function (){var result__2876__auto__ = shuriken.debug_test.do_something.call(null,(3));
var label__2877__auto__ = "(do-something 3)";
return shuriken.debug.debug_print.call(null,label__2877__auto__,result__2876__auto__);
})();
var v_38321__$3 = (function (){var result__2876__auto__ = shuriken.debug_test.do_nothing.call(null,(4));
var label__2877__auto__ = "(do-nothing 4)";
return shuriken.debug.debug_print.call(null,label__2877__auto__,result__2876__auto__);
})();
return v_38321__$3;
})());
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38318_38324);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38317_38323);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core.truth_(value__618__auto___38322)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/debug_test.cljc",40,new cljs.core.Keyword(null,"pass","pass",1574159993),9,20,cljs.core.list(new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"debug","debug",32358931,null),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"do-nothing","do-nothing",-1623959487,null),(4))))),24,value__618__auto___38322,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/debug_test.cljc",40,new cljs.core.Keyword(null,"fail","fail",1706214930),9,20,cljs.core.list(new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"debug","debug",32358931,null),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"do-nothing","do-nothing",-1623959487,null),(4))))),24,value__618__auto___38322,null]));
}

}catch (e38316){var t__665__auto___38327 = e38316;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/debug_test.cljc",40,new cljs.core.Keyword(null,"error","error",-978969032),9,20,cljs.core.list(new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"debug","debug",32358931,null),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"do-something","do-something",-9173798,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"do-nothing","do-nothing",-1623959487,null),(4))))),24,t__665__auto___38327,null]));
}
return shuriken.test.assert_calls.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"do-something","do-something",-1649705325),new cljs.core.Keyword(null,"do-something","do-something",-1649705325),new cljs.core.Keyword(null,"do-something","do-something",-1649705325),new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282)], null));
});

(shuriken.debug_test.test_debug.cljs$lang$var = new cljs.core.Var(function(){return shuriken.debug_test.test_debug;},new cljs.core.Symbol("shuriken.debug-test","test-debug","shuriken.debug-test/test-debug",-573488265,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"shuriken.debug-test","shuriken.debug-test",-139448172,null),new cljs.core.Symbol(null,"test-debug","test-debug",1223340692,null),"/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/debug_test.cljc",20,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(shuriken.debug_test.test_debug)?shuriken.debug_test.test_debug.cljs$lang$test:null)])));

//# sourceMappingURL=debug_test.js.map
