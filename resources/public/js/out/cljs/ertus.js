// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.ertus');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('goog.History.EventType');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
cljs.ertus.main_container = document.getElementById("mainContainerId");
cljs.ertus.set_html_BANG_ = (function cljs$ertus$set_html_BANG_(el,content){
return el.innerHTML = content;
});
cljs.ertus.simple_component = (function cljs$ertus$simple_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
cljs.ertus.table_ex = (function cljs$ertus$table_ex(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"username:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"password:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"password"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"submitId",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return alert("Ertuss!!");
})], null),"Submit"], null)], null)], null)], null)], null);
});
cljs.ertus.render_simple = (function cljs$ertus$render_simple(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.ertus.table_ex], null),cljs.ertus.main_container);
});
goog.exportSymbol('cljs.ertus.render_simple', cljs.ertus.render_simple);
var action__23508__auto___24561 = (function (params__23509__auto__){
if(cljs.core.map_QMARK_.call(null,params__23509__auto__)){
var map__24557 = params__23509__auto__;
var map__24557__$1 = ((((!((map__24557 == null)))?((((map__24557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24557):map__24557);
return cljs.ertus.render_simple.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23509__auto__)){
var vec__24559 = params__23509__auto__;
return cljs.ertus.render_simple.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23508__auto___24561);

cljs.ertus.home_path = ((function (action__23508__auto___24561){
return (function cljs$ertus$home_path(var_args){
var args__22327__auto__ = [];
var len__22320__auto___24562 = arguments.length;
var i__22321__auto___24563 = (0);
while(true){
if((i__22321__auto___24563 < len__22320__auto___24562)){
args__22327__auto__.push((arguments[i__22321__auto___24563]));

var G__24564 = (i__22321__auto___24563 + (1));
i__22321__auto___24563 = G__24564;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return cljs.ertus.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__23508__auto___24561))
;

cljs.ertus.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23508__auto___24561){
return (function (args__23507__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__23507__auto__);
});})(action__23508__auto___24561))
;

cljs.ertus.home_path.cljs$lang$maxFixedArity = (0);

cljs.ertus.home_path.cljs$lang$applyTo = ((function (action__23508__auto___24561){
return (function (seq24560){
return cljs.ertus.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24560));
});})(action__23508__auto___24561))
;
var action__23508__auto___24569 = (function (params__23509__auto__){
if(cljs.core.map_QMARK_.call(null,params__23509__auto__)){
var map__24565 = params__23509__auto__;
var map__24565__$1 = ((((!((map__24565 == null)))?((((map__24565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24565):map__24565);
return setTimeout(((function (map__24565,map__24565__$1){
return (function (){
return secretary.core.dispatch_BANG_.call(null,"/");
});})(map__24565,map__24565__$1))
,(1000));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23509__auto__)){
var vec__24567 = params__23509__auto__;
return setTimeout(((function (vec__24567){
return (function (){
return secretary.core.dispatch_BANG_.call(null,"/");
});})(vec__24567))
,(1000));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ertu",action__23508__auto___24569);

cljs.ertus.ertu_path = ((function (action__23508__auto___24569){
return (function cljs$ertus$ertu_path(var_args){
var args__22327__auto__ = [];
var len__22320__auto___24570 = arguments.length;
var i__22321__auto___24571 = (0);
while(true){
if((i__22321__auto___24571 < len__22320__auto___24570)){
args__22327__auto__.push((arguments[i__22321__auto___24571]));

var G__24572 = (i__22321__auto___24571 + (1));
i__22321__auto___24571 = G__24572;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return cljs.ertus.ertu_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__23508__auto___24569))
;

cljs.ertus.ertu_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23508__auto___24569){
return (function (args__23507__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ertu",args__23507__auto__);
});})(action__23508__auto___24569))
;

cljs.ertus.ertu_path.cljs$lang$maxFixedArity = (0);

cljs.ertus.ertu_path.cljs$lang$applyTo = ((function (action__23508__auto___24569){
return (function (seq24568){
return cljs.ertus.ertu_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24568));
});})(action__23508__auto___24569))
;
var h_24575 = (new goog.History());
goog.events.listen(h_24575,goog.History.EventType.NAVIGATE,((function (h_24575){
return (function (p1__24573_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__24573_SHARP_.token);
});})(h_24575))
);

var G__24574_24576 = h_24575;
G__24574_24576.setEnabled(true);

G__24574_24576.setToken("/");


//# sourceMappingURL=ertus.js.map