// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
goog.require('reagent.core');
var action__24687__auto___27381 = (function (params__24688__auto__){
if(cljs.core.map_QMARK_.call(null,params__24688__auto__)){
var map__27377 = params__24688__auto__;
var map__27377__$1 = ((((!((map__27377 == null)))?((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27377):map__27377);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24688__auto__)){
var vec__27379 = params__24688__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24687__auto___27381);

route.entry.home_page = ((function (action__24687__auto___27381){
return (function route$entry$home_page(var_args){
var args__24341__auto__ = [];
var len__24334__auto___27382 = arguments.length;
var i__24335__auto___27383 = (0);
while(true){
if((i__24335__auto___27383 < len__24334__auto___27382)){
args__24341__auto__.push((arguments[i__24335__auto___27383]));

var G__27384 = (i__24335__auto___27383 + (1));
i__24335__auto___27383 = G__27384;
continue;
} else {
}
break;
}

var argseq__24342__auto__ = ((((0) < args__24341__auto__.length))?(new cljs.core.IndexedSeq(args__24341__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24342__auto__);
});})(action__24687__auto___27381))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24687__auto___27381){
return (function (args__24686__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__24686__auto__);
});})(action__24687__auto___27381))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__24687__auto___27381){
return (function (seq27380){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27380));
});})(action__24687__auto___27381))
;

//# sourceMappingURL=entry.js.map