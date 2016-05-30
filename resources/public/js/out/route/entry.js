// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
goog.require('reagent.core');
var action__23778__auto___25159 = (function (params__23779__auto__){
if(cljs.core.map_QMARK_.call(null,params__23779__auto__)){
var map__25155 = params__23779__auto__;
var map__25155__$1 = ((((!((map__25155 == null)))?((((map__25155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25155):map__25155);
controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23779__auto__)){
var vec__25157 = params__23779__auto__;
controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23778__auto___25159);

route.entry.home_page = ((function (action__23778__auto___25159){
return (function route$entry$home_page(var_args){
var args__23575__auto__ = [];
var len__23568__auto___25160 = arguments.length;
var i__23569__auto___25161 = (0);
while(true){
if((i__23569__auto___25161 < len__23568__auto___25160)){
args__23575__auto__.push((arguments[i__23569__auto___25161]));

var G__25162 = (i__23569__auto___25161 + (1));
i__23569__auto___25161 = G__25162;
continue;
} else {
}
break;
}

var argseq__23576__auto__ = ((((0) < args__23575__auto__.length))?(new cljs.core.IndexedSeq(args__23575__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__23576__auto__);
});})(action__23778__auto___25159))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23778__auto___25159){
return (function (args__23777__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__23777__auto__);
});})(action__23778__auto___25159))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__23778__auto___25159){
return (function (seq25158){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25158));
});})(action__23778__auto___25159))
;

//# sourceMappingURL=entry.js.map