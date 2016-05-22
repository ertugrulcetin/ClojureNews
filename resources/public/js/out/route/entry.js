// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('util.view');
var action__22930__auto___24194 = (function (params__22931__auto__){
if(cljs.core.map_QMARK_.call(null,params__22931__auto__)){
var map__24190 = params__22931__auto__;
var map__24190__$1 = ((((!((map__24190 == null)))?((((map__24190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24190):map__24190);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__22931__auto__)){
var vec__24192 = params__22931__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22930__auto___24194);

route.entry.home_page = ((function (action__22930__auto___24194){
return (function route$entry$home_page(var_args){
var args__22727__auto__ = [];
var len__22720__auto___24195 = arguments.length;
var i__22721__auto___24196 = (0);
while(true){
if((i__22721__auto___24196 < len__22720__auto___24195)){
args__22727__auto__.push((arguments[i__22721__auto___24196]));

var G__24197 = (i__22721__auto___24196 + (1));
i__22721__auto___24196 = G__24197;
continue;
} else {
}
break;
}

var argseq__22728__auto__ = ((((0) < args__22727__auto__.length))?(new cljs.core.IndexedSeq(args__22727__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__22728__auto__);
});})(action__22930__auto___24194))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22930__auto___24194){
return (function (args__22929__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__22929__auto__);
});})(action__22930__auto___24194))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__22930__auto___24194){
return (function (seq24193){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24193));
});})(action__22930__auto___24194))
;

//# sourceMappingURL=entry.js.map