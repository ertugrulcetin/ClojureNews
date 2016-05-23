// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
goog.require('reagent.core');
var action__23902__auto___25026 = (function (params__23903__auto__){
if(cljs.core.map_QMARK_.call(null,params__23903__auto__)){
var map__25022 = params__23903__auto__;
var map__25022__$1 = ((((!((map__25022 == null)))?((((map__25022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25022):map__25022);
controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23903__auto__)){
var vec__25024 = params__23903__auto__;
controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23902__auto___25026);

route.entry.home_page = ((function (action__23902__auto___25026){
return (function route$entry$home_page(var_args){
var args__23556__auto__ = [];
var len__23549__auto___25027 = arguments.length;
var i__23550__auto___25028 = (0);
while(true){
if((i__23550__auto___25028 < len__23549__auto___25027)){
args__23556__auto__.push((arguments[i__23550__auto___25028]));

var G__25029 = (i__23550__auto___25028 + (1));
i__23550__auto___25028 = G__25029;
continue;
} else {
}
break;
}

var argseq__23557__auto__ = ((((0) < args__23556__auto__.length))?(new cljs.core.IndexedSeq(args__23556__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__23557__auto__);
});})(action__23902__auto___25026))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23902__auto___25026){
return (function (args__23901__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__23901__auto__);
});})(action__23902__auto___25026))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__23902__auto___25026){
return (function (seq25025){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25025));
});})(action__23902__auto___25026))
;

//# sourceMappingURL=entry.js.map