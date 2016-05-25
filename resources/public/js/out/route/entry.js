// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
goog.require('reagent.core');
var action__23804__auto___25752 = (function (params__23805__auto__){
if(cljs.core.map_QMARK_.call(null,params__23805__auto__)){
var map__25748 = params__23805__auto__;
var map__25748__$1 = ((((!((map__25748 == null)))?((((map__25748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25748):map__25748);
controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23805__auto__)){
var vec__25750 = params__23805__auto__;
controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23804__auto___25752);

route.entry.home_page = ((function (action__23804__auto___25752){
return (function route$entry$home_page(var_args){
var args__23601__auto__ = [];
var len__23594__auto___25753 = arguments.length;
var i__23595__auto___25754 = (0);
while(true){
if((i__23595__auto___25754 < len__23594__auto___25753)){
args__23601__auto__.push((arguments[i__23595__auto___25754]));

var G__25755 = (i__23595__auto___25754 + (1));
i__23595__auto___25754 = G__25755;
continue;
} else {
}
break;
}

var argseq__23602__auto__ = ((((0) < args__23601__auto__.length))?(new cljs.core.IndexedSeq(args__23601__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__23602__auto__);
});})(action__23804__auto___25752))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23804__auto___25752){
return (function (args__23803__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__23803__auto__);
});})(action__23804__auto___25752))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__23804__auto___25752){
return (function (seq25751){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25751));
});})(action__23804__auto___25752))
;

//# sourceMappingURL=entry.js.map