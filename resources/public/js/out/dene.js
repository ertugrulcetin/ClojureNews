// Compiled by ClojureScript 1.8.51 {}
goog.provide('dene');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('reagent.core');
dene.main_container = document.getElementById("mainContainerId");
dene.simple_component = (function dene$simple_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
dene.table_ex = (function dene$table_ex(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"username:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"password:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"password"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"submitId",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return alert("Ertuss!!");
})], null),"Submit"], null)], null)], null)], null)], null);
});
dene.empty_ex = (function dene$empty_ex(){
return null;
});
dene.render_simple = (function dene$render_simple(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dene.table_ex], null),dene.main_container);
});
goog.exportSymbol('dene.render_simple', dene.render_simple);
dene.combine_routes = (function dene$combine_routes(var_args){
var args__22327__auto__ = [];
var len__22320__auto___22543 = arguments.length;
var i__22321__auto___22544 = (0);
while(true){
if((i__22321__auto___22544 < len__22320__auto___22543)){
args__22327__auto__.push((arguments[i__22321__auto___22544]));

var G__22545 = (i__22321__auto___22544 + (1));
i__22321__auto___22544 = G__22545;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((2) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((2)),(0),null)):null);
return dene.combine_routes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22328__auto__);
});

dene.combine_routes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,routes){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),routes)));
});

dene.combine_routes.cljs$lang$maxFixedArity = (2);

dene.combine_routes.cljs$lang$applyTo = (function (seq22540){
var G__22541 = cljs.core.first.call(null,seq22540);
var seq22540__$1 = cljs.core.next.call(null,seq22540);
var G__22542 = cljs.core.first.call(null,seq22540__$1);
var seq22540__$2 = cljs.core.next.call(null,seq22540__$1);
return dene.combine_routes.cljs$core$IFn$_invoke$arity$variadic(G__22541,G__22542,seq22540__$2);
});

dene.combine_routes.cljs$lang$macro = true;
var action__22530__auto___22550 = (function (params__22531__auto__){
if(cljs.core.map_QMARK_.call(null,params__22531__auto__)){
var map__22546 = params__22531__auto__;
var map__22546__$1 = ((((!((map__22546 == null)))?((((map__22546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22546):map__22546);
return dene.render_simple.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__22531__auto__)){
var vec__22548 = params__22531__auto__;
return dene.render_simple.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22530__auto___22550);

dene.home_path = ((function (action__22530__auto___22550){
return (function dene$home_path(var_args){
var args__22327__auto__ = [];
var len__22320__auto___22551 = arguments.length;
var i__22321__auto___22552 = (0);
while(true){
if((i__22321__auto___22552 < len__22320__auto___22551)){
args__22327__auto__.push((arguments[i__22321__auto___22552]));

var G__22553 = (i__22321__auto___22552 + (1));
i__22321__auto___22552 = G__22553;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return dene.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__22530__auto___22550))
;

dene.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22530__auto___22550){
return (function (args__22529__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__22529__auto__);
});})(action__22530__auto___22550))
;

dene.home_path.cljs$lang$maxFixedArity = (0);

dene.home_path.cljs$lang$applyTo = ((function (action__22530__auto___22550){
return (function (seq22549){
return dene.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22549));
});})(action__22530__auto___22550))
;
var action__22530__auto___22558 = (function (params__22531__auto__){
if(cljs.core.map_QMARK_.call(null,params__22531__auto__)){
var map__22554 = params__22531__auto__;
var map__22554__$1 = ((((!((map__22554 == null)))?((((map__22554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22554):map__22554);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dene.empty_ex], null),dene.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__22531__auto__)){
var vec__22556 = params__22531__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dene.empty_ex], null),dene.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__22530__auto___22558);

dene.new$ = ((function (action__22530__auto___22558){
return (function dene$new(var_args){
var args__22327__auto__ = [];
var len__22320__auto___22559 = arguments.length;
var i__22321__auto___22560 = (0);
while(true){
if((i__22321__auto___22560 < len__22320__auto___22559)){
args__22327__auto__.push((arguments[i__22321__auto___22560]));

var G__22561 = (i__22321__auto___22560 + (1));
i__22321__auto___22560 = G__22561;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return dene.new$.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__22530__auto___22558))
;

dene.new$.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22530__auto___22558){
return (function (args__22529__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new",args__22529__auto__);
});})(action__22530__auto___22558))
;

dene.new$.cljs$lang$maxFixedArity = (0);

dene.new$.cljs$lang$applyTo = ((function (action__22530__auto___22558){
return (function (seq22557){
return dene.new$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22557));
});})(action__22530__auto___22558))
;
var action__22530__auto___22566 = (function (params__22531__auto__){
if(cljs.core.map_QMARK_.call(null,params__22531__auto__)){
var map__22562 = params__22531__auto__;
var map__22562__$1 = ((((!((map__22562 == null)))?((((map__22562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22562):map__22562);
return setTimeout(((function (map__22562,map__22562__$1){
return (function (){
return secretary.core.dispatch_BANG_.call(null,"/");
});})(map__22562,map__22562__$1))
,(1000));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22531__auto__)){
var vec__22564 = params__22531__auto__;
return setTimeout(((function (vec__22564){
return (function (){
return secretary.core.dispatch_BANG_.call(null,"/");
});})(vec__22564))
,(1000));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ertu",action__22530__auto___22566);

dene.ertu_path = ((function (action__22530__auto___22566){
return (function dene$ertu_path(var_args){
var args__22327__auto__ = [];
var len__22320__auto___22567 = arguments.length;
var i__22321__auto___22568 = (0);
while(true){
if((i__22321__auto___22568 < len__22320__auto___22567)){
args__22327__auto__.push((arguments[i__22321__auto___22568]));

var G__22569 = (i__22321__auto___22568 + (1));
i__22321__auto___22568 = G__22569;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return dene.ertu_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__22530__auto___22566))
;

dene.ertu_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22530__auto___22566){
return (function (args__22529__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ertu",args__22529__auto__);
});})(action__22530__auto___22566))
;

dene.ertu_path.cljs$lang$maxFixedArity = (0);

dene.ertu_path.cljs$lang$applyTo = ((function (action__22530__auto___22566){
return (function (seq22565){
return dene.ertu_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22565));
});})(action__22530__auto___22566))
;

//# sourceMappingURL=dene.js.map