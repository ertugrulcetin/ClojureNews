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
var seq__27403_27417 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27404_27418 = null;
var count__27405_27419 = (0);
var i__27406_27420 = (0);
while(true){
if((i__27406_27420 < count__27405_27419)){
var f_27421 = cljs.core._nth.call(null,chunk__27404_27418,i__27406_27420);
cljs.core.println.call(null,"  ",f_27421);

var G__27422 = seq__27403_27417;
var G__27423 = chunk__27404_27418;
var G__27424 = count__27405_27419;
var G__27425 = (i__27406_27420 + (1));
seq__27403_27417 = G__27422;
chunk__27404_27418 = G__27423;
count__27405_27419 = G__27424;
i__27406_27420 = G__27425;
continue;
} else {
var temp__4657__auto___27426 = cljs.core.seq.call(null,seq__27403_27417);
if(temp__4657__auto___27426){
var seq__27403_27427__$1 = temp__4657__auto___27426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27403_27427__$1)){
var c__22061__auto___27428 = cljs.core.chunk_first.call(null,seq__27403_27427__$1);
var G__27429 = cljs.core.chunk_rest.call(null,seq__27403_27427__$1);
var G__27430 = c__22061__auto___27428;
var G__27431 = cljs.core.count.call(null,c__22061__auto___27428);
var G__27432 = (0);
seq__27403_27417 = G__27429;
chunk__27404_27418 = G__27430;
count__27405_27419 = G__27431;
i__27406_27420 = G__27432;
continue;
} else {
var f_27433 = cljs.core.first.call(null,seq__27403_27427__$1);
cljs.core.println.call(null,"  ",f_27433);

var G__27434 = cljs.core.next.call(null,seq__27403_27427__$1);
var G__27435 = null;
var G__27436 = (0);
var G__27437 = (0);
seq__27403_27417 = G__27434;
chunk__27404_27418 = G__27435;
count__27405_27419 = G__27436;
i__27406_27420 = G__27437;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27438 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21250__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27438);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27438)))?cljs.core.second.call(null,arglists_27438):arglists_27438));
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
var seq__27407 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27408 = null;
var count__27409 = (0);
var i__27410 = (0);
while(true){
if((i__27410 < count__27409)){
var vec__27411 = cljs.core._nth.call(null,chunk__27408,i__27410);
var name = cljs.core.nth.call(null,vec__27411,(0),null);
var map__27412 = cljs.core.nth.call(null,vec__27411,(1),null);
var map__27412__$1 = ((((!((map__27412 == null)))?((((map__27412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27412):map__27412);
var doc = cljs.core.get.call(null,map__27412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27439 = seq__27407;
var G__27440 = chunk__27408;
var G__27441 = count__27409;
var G__27442 = (i__27410 + (1));
seq__27407 = G__27439;
chunk__27408 = G__27440;
count__27409 = G__27441;
i__27410 = G__27442;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27407);
if(temp__4657__auto__){
var seq__27407__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27407__$1)){
var c__22061__auto__ = cljs.core.chunk_first.call(null,seq__27407__$1);
var G__27443 = cljs.core.chunk_rest.call(null,seq__27407__$1);
var G__27444 = c__22061__auto__;
var G__27445 = cljs.core.count.call(null,c__22061__auto__);
var G__27446 = (0);
seq__27407 = G__27443;
chunk__27408 = G__27444;
count__27409 = G__27445;
i__27410 = G__27446;
continue;
} else {
var vec__27414 = cljs.core.first.call(null,seq__27407__$1);
var name = cljs.core.nth.call(null,vec__27414,(0),null);
var map__27415 = cljs.core.nth.call(null,vec__27414,(1),null);
var map__27415__$1 = ((((!((map__27415 == null)))?((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var doc = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27447 = cljs.core.next.call(null,seq__27407__$1);
var G__27448 = null;
var G__27449 = (0);
var G__27450 = (0);
seq__27407 = G__27447;
chunk__27408 = G__27448;
count__27409 = G__27449;
i__27410 = G__27450;
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