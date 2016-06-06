// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
goog.require('reagent.core');
var action__24028__auto___25179 = (function (params__24029__auto__){
if(cljs.core.map_QMARK_.call(null,params__24029__auto__)){
var map__25175 = params__24029__auto__;
var map__25175__$1 = ((((!((map__25175 == null)))?((((map__25175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25175):map__25175);
controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24029__auto__)){
var vec__25177 = params__24029__auto__;
controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24028__auto___25179);

route.entry.home_page = ((function (action__24028__auto___25179){
return (function route$entry$home_page(var_args){
var args__23682__auto__ = [];
var len__23675__auto___25180 = arguments.length;
var i__23676__auto___25181 = (0);
while(true){
if((i__23676__auto___25181 < len__23675__auto___25180)){
args__23682__auto__.push((arguments[i__23676__auto___25181]));

var G__25182 = (i__23676__auto___25181 + (1));
i__23676__auto___25181 = G__25182;
continue;
} else {
}
break;
}

var argseq__23683__auto__ = ((((0) < args__23682__auto__.length))?(new cljs.core.IndexedSeq(args__23682__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__23683__auto__);
});})(action__24028__auto___25179))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24028__auto___25179){
return (function (args__24027__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__24027__auto__);
});})(action__24028__auto___25179))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__24028__auto___25179){
return (function (seq25178){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25178));
});})(action__24028__auto___25179))
;

//# sourceMappingURL=entry.js.map