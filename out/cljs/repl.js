// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1558){
var map__1559 = p__1558;
var map__1559__$1 = cljs.core.__destructure_map.call(null,map__1559);
var m = map__1559__$1;
var n = cljs.core.get.call(null,map__1559__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1559__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1560_1588 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1561_1589 = null;
var count__1562_1590 = (0);
var i__1563_1591 = (0);
while(true){
if((i__1563_1591 < count__1562_1590)){
var f_1592 = cljs.core._nth.call(null,chunk__1561_1589,i__1563_1591);
cljs.core.println.call(null,"  ",f_1592);


var G__1593 = seq__1560_1588;
var G__1594 = chunk__1561_1589;
var G__1595 = count__1562_1590;
var G__1596 = (i__1563_1591 + (1));
seq__1560_1588 = G__1593;
chunk__1561_1589 = G__1594;
count__1562_1590 = G__1595;
i__1563_1591 = G__1596;
continue;
} else {
var temp__5804__auto___1597 = cljs.core.seq.call(null,seq__1560_1588);
if(temp__5804__auto___1597){
var seq__1560_1598__$1 = temp__5804__auto___1597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1560_1598__$1)){
var c__5525__auto___1599 = cljs.core.chunk_first.call(null,seq__1560_1598__$1);
var G__1600 = cljs.core.chunk_rest.call(null,seq__1560_1598__$1);
var G__1601 = c__5525__auto___1599;
var G__1602 = cljs.core.count.call(null,c__5525__auto___1599);
var G__1603 = (0);
seq__1560_1588 = G__1600;
chunk__1561_1589 = G__1601;
count__1562_1590 = G__1602;
i__1563_1591 = G__1603;
continue;
} else {
var f_1604 = cljs.core.first.call(null,seq__1560_1598__$1);
cljs.core.println.call(null,"  ",f_1604);


var G__1605 = cljs.core.next.call(null,seq__1560_1598__$1);
var G__1606 = null;
var G__1607 = (0);
var G__1608 = (0);
seq__1560_1588 = G__1605;
chunk__1561_1589 = G__1606;
count__1562_1590 = G__1607;
i__1563_1591 = G__1608;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1609 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1609);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1609)))?cljs.core.second.call(null,arglists_1609):arglists_1609));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1564_1610 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1565_1611 = null;
var count__1566_1612 = (0);
var i__1567_1613 = (0);
while(true){
if((i__1567_1613 < count__1566_1612)){
var vec__1576_1614 = cljs.core._nth.call(null,chunk__1565_1611,i__1567_1613);
var name_1615 = cljs.core.nth.call(null,vec__1576_1614,(0),null);
var map__1579_1616 = cljs.core.nth.call(null,vec__1576_1614,(1),null);
var map__1579_1617__$1 = cljs.core.__destructure_map.call(null,map__1579_1616);
var doc_1618 = cljs.core.get.call(null,map__1579_1617__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1619 = cljs.core.get.call(null,map__1579_1617__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1615);

cljs.core.println.call(null," ",arglists_1619);

if(cljs.core.truth_(doc_1618)){
cljs.core.println.call(null," ",doc_1618);
} else {
}


var G__1620 = seq__1564_1610;
var G__1621 = chunk__1565_1611;
var G__1622 = count__1566_1612;
var G__1623 = (i__1567_1613 + (1));
seq__1564_1610 = G__1620;
chunk__1565_1611 = G__1621;
count__1566_1612 = G__1622;
i__1567_1613 = G__1623;
continue;
} else {
var temp__5804__auto___1624 = cljs.core.seq.call(null,seq__1564_1610);
if(temp__5804__auto___1624){
var seq__1564_1625__$1 = temp__5804__auto___1624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1564_1625__$1)){
var c__5525__auto___1626 = cljs.core.chunk_first.call(null,seq__1564_1625__$1);
var G__1627 = cljs.core.chunk_rest.call(null,seq__1564_1625__$1);
var G__1628 = c__5525__auto___1626;
var G__1629 = cljs.core.count.call(null,c__5525__auto___1626);
var G__1630 = (0);
seq__1564_1610 = G__1627;
chunk__1565_1611 = G__1628;
count__1566_1612 = G__1629;
i__1567_1613 = G__1630;
continue;
} else {
var vec__1580_1631 = cljs.core.first.call(null,seq__1564_1625__$1);
var name_1632 = cljs.core.nth.call(null,vec__1580_1631,(0),null);
var map__1583_1633 = cljs.core.nth.call(null,vec__1580_1631,(1),null);
var map__1583_1634__$1 = cljs.core.__destructure_map.call(null,map__1583_1633);
var doc_1635 = cljs.core.get.call(null,map__1583_1634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1636 = cljs.core.get.call(null,map__1583_1634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1632);

cljs.core.println.call(null," ",arglists_1636);

if(cljs.core.truth_(doc_1635)){
cljs.core.println.call(null," ",doc_1635);
} else {
}


var G__1637 = cljs.core.next.call(null,seq__1564_1625__$1);
var G__1638 = null;
var G__1639 = (0);
var G__1640 = (0);
seq__1564_1610 = G__1637;
chunk__1565_1611 = G__1638;
count__1566_1612 = G__1639;
i__1567_1613 = G__1640;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__1584 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1585 = null;
var count__1586 = (0);
var i__1587 = (0);
while(true){
if((i__1587 < count__1586)){
var role = cljs.core._nth.call(null,chunk__1585,i__1587);
var temp__5804__auto___1641__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___1641__$1)){
var spec_1642 = temp__5804__auto___1641__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1642));
} else {
}


var G__1643 = seq__1584;
var G__1644 = chunk__1585;
var G__1645 = count__1586;
var G__1646 = (i__1587 + (1));
seq__1584 = G__1643;
chunk__1585 = G__1644;
count__1586 = G__1645;
i__1587 = G__1646;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__1584);
if(temp__5804__auto____$1){
var seq__1584__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1584__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__1584__$1);
var G__1647 = cljs.core.chunk_rest.call(null,seq__1584__$1);
var G__1648 = c__5525__auto__;
var G__1649 = cljs.core.count.call(null,c__5525__auto__);
var G__1650 = (0);
seq__1584 = G__1647;
chunk__1585 = G__1648;
count__1586 = G__1649;
i__1587 = G__1650;
continue;
} else {
var role = cljs.core.first.call(null,seq__1584__$1);
var temp__5804__auto___1651__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___1651__$2)){
var spec_1652 = temp__5804__auto___1651__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1652));
} else {
}


var G__1653 = cljs.core.next.call(null,seq__1584__$1);
var G__1654 = null;
var G__1655 = (0);
var G__1656 = (0);
seq__1584 = G__1653;
chunk__1585 = G__1654;
count__1586 = G__1655;
i__1587 = G__1656;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1659 = datafied_throwable;
var map__1659__$1 = cljs.core.__destructure_map.call(null,map__1659);
var via = cljs.core.get.call(null,map__1659__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1659__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1659__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1660 = cljs.core.last.call(null,via);
var map__1660__$1 = cljs.core.__destructure_map.call(null,map__1660);
var type = cljs.core.get.call(null,map__1660__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1660__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1660__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1661 = data;
var map__1661__$1 = cljs.core.__destructure_map.call(null,map__1661);
var problems = cljs.core.get.call(null,map__1661__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1661__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1661__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1662 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1662__$1 = cljs.core.__destructure_map.call(null,map__1662);
var top_data = map__1662__$1;
var source = cljs.core.get.call(null,map__1662__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1663 = phase;
var G__1663__$1 = (((G__1663 instanceof cljs.core.Keyword))?G__1663.fqn:null);
switch (G__1663__$1) {
case "read-source":
var map__1664 = data;
var map__1664__$1 = cljs.core.__destructure_map.call(null,map__1664);
var line = cljs.core.get.call(null,map__1664__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1664__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1665 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1665__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1665,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1665);
var G__1665__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1665__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1665__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1665__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1665__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1666 = top_data;
var G__1666__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1666,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1666);
var G__1666__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1666__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1666__$1);
var G__1666__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1666__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1666__$2);
var G__1666__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1666__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1666__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1666__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1666__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1667 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1667,(0),null);
var method = cljs.core.nth.call(null,vec__1667,(1),null);
var file = cljs.core.nth.call(null,vec__1667,(2),null);
var line = cljs.core.nth.call(null,vec__1667,(3),null);
var G__1670 = top_data;
var G__1670__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1670,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1670);
var G__1670__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1670__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1670__$1);
var G__1670__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__1670__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1670__$2);
var G__1670__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1670__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1670__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1670__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1670__$4;
}

break;
case "execution":
var vec__1671 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1671,(0),null);
var method = cljs.core.nth.call(null,vec__1671,(1),null);
var file = cljs.core.nth.call(null,vec__1671,(2),null);
var line = cljs.core.nth.call(null,vec__1671,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1658_SHARP_){
var or__5002__auto__ = (p1__1658_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1658_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__1674 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1674__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1674,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1674);
var G__1674__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1674__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1674__$1);
var G__1674__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1674__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1674__$2);
var G__1674__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1674__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1674__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1674__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1674__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1663__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1678){
var map__1679 = p__1678;
var map__1679__$1 = cljs.core.__destructure_map.call(null,map__1679);
var triage_data = map__1679__$1;
var phase = cljs.core.get.call(null,map__1679__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1679__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1679__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1679__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1679__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1679__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1679__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1679__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1680 = phase;
var G__1680__$1 = (((G__1680 instanceof cljs.core.Keyword))?G__1680.fqn:null);
switch (G__1680__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1681_1690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1682_1691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1683_1692 = true;
var _STAR_print_fn_STAR__temp_val__1684_1693 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1683_1692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1684_1693);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1676_SHARP_){
return cljs.core.dissoc.call(null,p1__1676_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1682_1691);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1681_1690);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1685_1694 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1686_1695 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1687_1696 = true;
var _STAR_print_fn_STAR__temp_val__1688_1697 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1687_1696);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1688_1697);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1677_SHARP_){
return cljs.core.dissoc.call(null,p1__1677_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1686_1695);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1685_1694);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1680__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
