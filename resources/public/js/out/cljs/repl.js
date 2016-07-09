// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32416_32430 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32417_32431 = null;
var count__32418_32432 = (0);
var i__32419_32433 = (0);
while(true){
if((i__32419_32433 < count__32418_32432)){
var f_32434 = cljs.core._nth.call(null,chunk__32417_32431,i__32419_32433);
cljs.core.println.call(null,"  ",f_32434);

var G__32435 = seq__32416_32430;
var G__32436 = chunk__32417_32431;
var G__32437 = count__32418_32432;
var G__32438 = (i__32419_32433 + (1));
seq__32416_32430 = G__32435;
chunk__32417_32431 = G__32436;
count__32418_32432 = G__32437;
i__32419_32433 = G__32438;
continue;
} else {
var temp__4657__auto___32439 = cljs.core.seq.call(null,seq__32416_32430);
if(temp__4657__auto___32439){
var seq__32416_32440__$1 = temp__4657__auto___32439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32416_32440__$1)){
var c__24858__auto___32441 = cljs.core.chunk_first.call(null,seq__32416_32440__$1);
var G__32442 = cljs.core.chunk_rest.call(null,seq__32416_32440__$1);
var G__32443 = c__24858__auto___32441;
var G__32444 = cljs.core.count.call(null,c__24858__auto___32441);
var G__32445 = (0);
seq__32416_32430 = G__32442;
chunk__32417_32431 = G__32443;
count__32418_32432 = G__32444;
i__32419_32433 = G__32445;
continue;
} else {
var f_32446 = cljs.core.first.call(null,seq__32416_32440__$1);
cljs.core.println.call(null,"  ",f_32446);

var G__32447 = cljs.core.next.call(null,seq__32416_32440__$1);
var G__32448 = null;
var G__32449 = (0);
var G__32450 = (0);
seq__32416_32430 = G__32447;
chunk__32417_32431 = G__32448;
count__32418_32432 = G__32449;
i__32419_32433 = G__32450;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32451 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32451);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32451)))?cljs.core.second.call(null,arglists_32451):arglists_32451));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32420 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32421 = null;
var count__32422 = (0);
var i__32423 = (0);
while(true){
if((i__32423 < count__32422)){
var vec__32424 = cljs.core._nth.call(null,chunk__32421,i__32423);
var name = cljs.core.nth.call(null,vec__32424,(0),null);
var map__32425 = cljs.core.nth.call(null,vec__32424,(1),null);
var map__32425__$1 = ((((!((map__32425 == null)))?((((map__32425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32425):map__32425);
var doc = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32452 = seq__32420;
var G__32453 = chunk__32421;
var G__32454 = count__32422;
var G__32455 = (i__32423 + (1));
seq__32420 = G__32452;
chunk__32421 = G__32453;
count__32422 = G__32454;
i__32423 = G__32455;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32420);
if(temp__4657__auto__){
var seq__32420__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32420__$1)){
var c__24858__auto__ = cljs.core.chunk_first.call(null,seq__32420__$1);
var G__32456 = cljs.core.chunk_rest.call(null,seq__32420__$1);
var G__32457 = c__24858__auto__;
var G__32458 = cljs.core.count.call(null,c__24858__auto__);
var G__32459 = (0);
seq__32420 = G__32456;
chunk__32421 = G__32457;
count__32422 = G__32458;
i__32423 = G__32459;
continue;
} else {
var vec__32427 = cljs.core.first.call(null,seq__32420__$1);
var name = cljs.core.nth.call(null,vec__32427,(0),null);
var map__32428 = cljs.core.nth.call(null,vec__32427,(1),null);
var map__32428__$1 = ((((!((map__32428 == null)))?((((map__32428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32428):map__32428);
var doc = cljs.core.get.call(null,map__32428__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32428__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32460 = cljs.core.next.call(null,seq__32420__$1);
var G__32461 = null;
var G__32462 = (0);
var G__32463 = (0);
seq__32420 = G__32460;
chunk__32421 = G__32461;
count__32422 = G__32462;
i__32423 = G__32463;
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
}
});

//# sourceMappingURL=repl.js.map