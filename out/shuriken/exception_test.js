// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('shuriken.exception_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('shuriken.core');
shuriken.exception_test.assert_exception_thrown = (function shuriken$exception_test$assert_exception_thrown(f){
try{var values__614__auto__ = (new cljs.core.List(null,new cljs.core.Keyword("shuriken.exception-test","thrown","shuriken.exception-test/thrown",999198540),(new cljs.core.List(null,(function (){try{return f.call(null);
}catch (e38654){if((e38654 instanceof Error)){
var t = e38654;
return new cljs.core.Keyword("shuriken.exception-test","thrown","shuriken.exception-test/thrown",999198540);
} else {
throw e38654;

}
}})(),null,(1),null)),(2),null));
var result__615__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto__);
if(cljs.core.truth_(result__615__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",25,new cljs.core.Keyword(null,"pass","pass",1574159993),7,6,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("shuriken.exception-test","thrown","shuriken.exception-test/thrown",999198540),cljs.core.list(new cljs.core.Symbol(null,"try","try",-1273693247,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("shuriken.exception-test","thrown","shuriken.exception-test/thrown",999198540)))),10,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",25,new cljs.core.Keyword(null,"fail","fail",1706214930),7,6,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("shuriken.exception-test","thrown","shuriken.exception-test/thrown",999198540),cljs.core.list(new cljs.core.Symbol(null,"try","try",-1273693247,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("shuriken.exception-test","thrown","shuriken.exception-test/thrown",999198540)))),10,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null,(1),null)),(2),null)),null]));
}

return result__615__auto__;
}catch (e38653){var t__665__auto__ = e38653;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",25,new cljs.core.Keyword(null,"error","error",-978969032),7,6,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword("shuriken.exception-test","thrown","shuriken.exception-test/thrown",999198540),cljs.core.list(new cljs.core.Symbol(null,"try","try",-1273693247,null),cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("shuriken.exception-test","thrown","shuriken.exception-test/thrown",999198540)))),10,t__665__auto__,null]));
}});
shuriken.exception_test.test_silence = (function shuriken$exception_test$test_silence(){
return cljs.test.test_var.call(null,shuriken.exception_test.test_silence.cljs$lang$var);
});
shuriken.exception_test.test_silence.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"when an exception is thrown");

try{cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"and matches the provided target");

try{try{var values__614__auto___38672 = (new cljs.core.List(null,null,(new cljs.core.List(null,(function (){var pattern__38533__auto__ = Error;
try{throw (new Error("Assert failed: false"));

}catch (e38656){if((e38656 instanceof Error)){
var t__38534__auto__ = e38656;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38656;

}
}})(),null,(1),null)),(2),null));
var result__615__auto___38673 = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto___38672);
if(cljs.core.truth_(result__615__auto___38673)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"pass","pass",1574159993),24,17,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),17,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38672),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"fail","fail",1706214930),24,17,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),17,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38672),null,(1),null)),(2),null)),null]));
}

}catch (e38655){var t__665__auto___38674 = e38655;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"error","error",-978969032),24,17,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),17,t__665__auto___38674,null]));
}
try{var values__614__auto___38675 = (new cljs.core.List(null,null,(new cljs.core.List(null,(function (){var pattern__38533__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([Error]);
try{throw (new Error("Assert failed: false"));

}catch (e38658){if((e38658 instanceof Error)){
var t__38534__auto__ = e38658;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38658;

}
}})(),null,(1),null)),(2),null));
var result__615__auto___38676 = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto___38675);
if(cljs.core.truth_(result__615__auto___38676)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"pass","pass",1574159993),24,18,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),18,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38675),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"fail","fail",1706214930),24,18,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),18,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38675),null,(1),null)),(2),null)),null]));
}

}catch (e38657){var t__665__auto___38677 = e38657;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"error","error",-978969032),24,18,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),18,t__665__auto___38677,null]));
}
try{var values__614__auto___38678 = (new cljs.core.List(null,null,(new cljs.core.List(null,(function (){var pattern__38533__auto__ = (function (_){
return true;
});
try{throw (new Error("Assert failed: false"));

}catch (e38660){if((e38660 instanceof Error)){
var t__38534__auto__ = e38660;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38660;

}
}})(),null,(1),null)),(2),null));
var result__615__auto___38679 = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto___38678);
if(cljs.core.truth_(result__615__auto___38679)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"pass","pass",1574159993),11,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),true),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),19,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38678),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"fail","fail",1706214930),11,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),true),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),19,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38678),null,(1),null)),(2),null)),null]));
}

}catch (e38659){var t__665__auto___38680 = e38659;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"error","error",-978969032),11,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),true),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),19,t__665__auto___38680,null]));
}
try{var values__614__auto___38681 = (new cljs.core.List(null,null,(new cljs.core.List(null,(function (){var pattern__38533__auto__ = "Assert failed: false";
try{throw (new Error("Assert failed: false"));

}catch (e38662){if((e38662 instanceof Error)){
var t__38534__auto__ = e38662;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38662;

}
}})(),null,(1),null)),(2),null));
var result__615__auto___38682 = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto___38681);
if(cljs.core.truth_(result__615__auto___38682)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"pass","pass",1574159993),11,20,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),"Assert failed: false",cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),20,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38681),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"fail","fail",1706214930),11,20,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),"Assert failed: false",cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),20,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38681),null,(1),null)),(2),null)),null]));
}

}catch (e38661){var t__665__auto___38683 = e38661;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"error","error",-978969032),11,20,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),"Assert failed: false",cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),20,t__665__auto___38683,null]));
}
try{var values__614__auto___38684 = (new cljs.core.List(null,null,(new cljs.core.List(null,(function (){var pattern__38533__auto__ = /failed/;
try{throw (new Error("Assert failed: false"));

}catch (e38664){if((e38664 instanceof Error)){
var t__38534__auto__ = e38664;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38664;

}
}})(),null,(1),null)),(2),null));
var result__615__auto___38685 = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto___38684);
if(cljs.core.truth_(result__615__auto___38685)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"pass","pass",1574159993),11,21,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),/failed/,cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),21,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38684),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"fail","fail",1706214930),11,21,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),/failed/,cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),21,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38684),null,(1),null)),(2),null)),null]));
}

}catch (e38663){var t__665__auto___38686 = e38663;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",76,new cljs.core.Keyword(null,"error","error",-978969032),11,21,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),/failed/,cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),21,t__665__auto___38686,null]));
}
try{var values__614__auto___38687 = (new cljs.core.List(null,null,(new cljs.core.List(null,(function (){var pattern__38533__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null);
try{throw cljs.core.ex_info.call(null,"Oops",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null));
}catch (e38666){if((e38666 instanceof Error)){
var t__38534__auto__ = e38666;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38666;

}
}})(),null,(1),null)),(2),null));
var result__615__auto___38688 = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto___38687);
if(cljs.core.truth_(result__615__auto___38688)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",94,new cljs.core.Keyword(null,"pass","pass",1574159993),11,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"Oops",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null))))),22,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38687),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",94,new cljs.core.Keyword(null,"fail","fail",1706214930),11,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"Oops",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null))))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38687),null,(1),null)),(2),null)),null]));
}

}catch (e38665){var t__665__auto___38689 = e38665;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",94,new cljs.core.Keyword(null,"error","error",-978969032),11,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"Oops",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null))))),22,t__665__auto___38689,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"and does not match the provided target");

try{shuriken.exception_test.assert_exception_thrown.call(null,(function (){
var pattern__38533__auto__ = (function (_){
return false;
});
try{throw (new Error("Assert failed: false"));

}catch (e38667){if((e38667 instanceof Error)){
var t__38534__auto__ = e38667;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38667;

}
}}));

shuriken.exception_test.assert_exception_thrown.call(null,(function (){
var pattern__38533__auto__ = "abzabej";
try{throw (new Error("Assert failed: false"));

}catch (e38668){if((e38668 instanceof Error)){
var t__38534__auto__ = e38668;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38668;

}
}}));

shuriken.exception_test.assert_exception_thrown.call(null,(function (){
var pattern__38533__auto__ = /abza/;
try{throw (new Error("Assert failed: false"));

}catch (e38669){if((e38669 instanceof Error)){
var t__38534__auto__ = e38669;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,null).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38669;

}
}}));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"when an exception is not thrown");

try{try{var values__614__auto__ = (new cljs.core.List(null,new cljs.core.Keyword(null,"abc","abc",-1232035677),(new cljs.core.List(null,(function (){var pattern__38533__auto__ = Error;
try{return new cljs.core.Keyword(null,"abc","abc",-1232035677);
}catch (e38671){if((e38671 instanceof Error)){
var t__38534__auto__ = e38671;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,new cljs.core.Keyword(null,"xyz","xyz",-1605570015)).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38671;

}
}})(),null,(1),null)),(2),null));
var result__615__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto__);
if(cljs.core.truth_(result__615__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",75,new cljs.core.Keyword(null,"pass","pass",1574159993),9,30,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"abc","abc",-1232035677),cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Keyword(null,"abc","abc",-1232035677))),30,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",75,new cljs.core.Keyword(null,"fail","fail",1706214930),9,30,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"abc","abc",-1232035677),cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Keyword(null,"abc","abc",-1232035677))),30,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null,(1),null)),(2),null)),null]));
}

return result__615__auto__;
}catch (e38670){var t__665__auto__ = e38670;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",75,new cljs.core.Keyword(null,"error","error",-978969032),9,30,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"abc","abc",-1232035677),cljs.core.list(new cljs.core.Symbol(null,"silence","silence",-946870033,null),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Keyword(null,"abc","abc",-1232035677))),30,t__665__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(shuriken.exception_test.test_silence.cljs$lang$var = new cljs.core.Var(function(){return shuriken.exception_test.test_silence;},new cljs.core.Symbol("shuriken.exception-test","test-silence","shuriken.exception-test/test-silence",1107084614,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"shuriken.exception-test","shuriken.exception-test",-2139062562,null),new cljs.core.Symbol(null,"test-silence","test-silence",194848481,null),"/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",22,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(shuriken.exception_test.test_silence)?shuriken.exception_test.test_silence.cljs$lang$test:null)])));
shuriken.exception_test.test_thrown_QMARK_ = (function shuriken$exception_test$test_thrown_QMARK_(){
return cljs.test.test_var.call(null,shuriken.exception_test.test_thrown_QMARK_.cljs$lang$var);
});
shuriken.exception_test.test_thrown_QMARK_.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"when an exception is thrown");

try{cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"and matches the provided target");

try{try{var values__614__auto___38697 = (new cljs.core.List(null,true,(new cljs.core.List(null,cljs.core._EQ_.call(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043),(function (){var pattern__38533__auto__ = Error;
try{throw (new Error("Assert failed: false"));

}catch (e38691){if((e38691 instanceof Error)){
var t__38534__auto__ = e38691;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043)).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38691;

}
}})()),null,(1),null)),(2),null));
var result__615__auto___38698 = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto___38697);
if(cljs.core.truth_(result__615__auto___38698)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",85,new cljs.core.Keyword(null,"pass","pass",1574159993),11,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),35,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38697),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",85,new cljs.core.Keyword(null,"fail","fail",1706214930),11,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38697),null,(1),null)),(2),null)),null]));
}

}catch (e38690){var t__665__auto___38699 = e38690;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",85,new cljs.core.Keyword(null,"error","error",-978969032),11,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),35,t__665__auto___38699,null]));
}
try{var values__614__auto___38700 = (new cljs.core.List(null,true,(new cljs.core.List(null,cljs.core._EQ_.call(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043),(function (){var pattern__38533__auto__ = "Assert failed: false";
try{throw (new Error("Assert failed: false"));

}catch (e38693){if((e38693 instanceof Error)){
var t__38534__auto__ = e38693;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043)).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38693;

}
}})()),null,(1),null)),(2),null));
var result__615__auto___38701 = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto___38700);
if(cljs.core.truth_(result__615__auto___38701)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",85,new cljs.core.Keyword(null,"pass","pass",1574159993),11,36,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),"Assert failed: false",cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),36,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38700),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",85,new cljs.core.Keyword(null,"fail","fail",1706214930),11,36,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),"Assert failed: false",cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),36,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto___38700),null,(1),null)),(2),null)),null]));
}

}catch (e38692){var t__665__auto___38702 = e38692;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",85,new cljs.core.Keyword(null,"error","error",-978969032),11,36,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),"Assert failed: false",cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),false))),36,t__665__auto___38702,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"and does not match the provided target");

try{shuriken.exception_test.assert_exception_thrown.call(null,(function (){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043),(function (){var pattern__38533__auto__ = "abc";
try{throw (new Error("Assert failed: false"));

}catch (e38694){if((e38694 instanceof Error)){
var t__38534__auto__ = e38694;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043)).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38694;

}
}})());
}));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"when an exception is not thrown");

try{try{var values__614__auto__ = (new cljs.core.List(null,false,(new cljs.core.List(null,cljs.core._EQ_.call(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043),(function (){var pattern__38533__auto__ = Error;
try{return null;

}catch (e38696){if((e38696 instanceof Error)){
var t__38534__auto__ = e38696;
if(cljs.core.truth_(shuriken.exception.catch_it_matches_QMARK_.call(null,t__38534__auto__,pattern__38533__auto__))){
return cljs.core.constantly.call(null,new cljs.core.Keyword("shuriken.exception","thrown!","shuriken.exception/thrown!",-1807429043)).call(null,t__38534__auto__);
} else {
throw t__38534__auto__;
}
} else {
throw e38696;

}
}})()),null,(1),null)),(2),null));
var result__615__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__614__auto__);
if(cljs.core.truth_(result__615__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",84,new cljs.core.Keyword(null,"pass","pass",1574159993),9,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),true))),40,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",84,new cljs.core.Keyword(null,"fail","fail",1706214930),9,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),true))),40,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__614__auto__),null,(1),null)),(2),null)),null]));
}

return result__615__auto__;
}catch (e38695){var t__665__auto__ = e38695;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",84,new cljs.core.Keyword(null,"error","error",-978969032),9,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),true))),40,t__665__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(shuriken.exception_test.test_thrown_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return shuriken.exception_test.test_thrown_QMARK_;},new cljs.core.Symbol("shuriken.exception-test","test-thrown?","shuriken.exception-test/test-thrown?",-565974109,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"shuriken.exception-test","shuriken.exception-test",-2139062562,null),new cljs.core.Symbol(null,"test-thrown?","test-thrown?",-1751037758,null),"/Users/clement/Documents/Code/Clojure/shuriken/test/shuriken/exception_test.cljc",22,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(shuriken.exception_test.test_thrown_QMARK_)?shuriken.exception_test.test_thrown_QMARK_.cljs$lang$test:null)])));

//# sourceMappingURL=exception_test.js.map
