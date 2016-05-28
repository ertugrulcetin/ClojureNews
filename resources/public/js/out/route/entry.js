// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
goog.require('reagent.core');
var action__23900__auto___25118 = (function (params__23901__auto__){
if(cljs.core.map_QMARK_.call(null,params__23901__auto__)){
var map__25114 = params__23901__auto__;
var map__25114__$1 = ((((!((map__25114 == null)))?((((map__25114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25114):map__25114);
cljs.core.println.call(null,"Denem");

controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23901__auto__)){
var vec__25116 = params__23901__auto__;
cljs.core.println.call(null,"Denem");

controller.entry.home_page.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.entry.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23900__auto___25118);

route.entry.home_page = ((function (action__23900__auto___25118){
return (function route$entry$home_page(var_args){
var args__23554__auto__ = [];
var len__23547__auto___25119 = arguments.length;
var i__23548__auto___25120 = (0);
while(true){
if((i__23548__auto___25120 < len__23547__auto___25119)){
args__23554__auto__.push((arguments[i__23548__auto___25120]));

var G__25121 = (i__23548__auto___25120 + (1));
i__23548__auto___25120 = G__25121;
continue;
} else {
}
break;
}

var argseq__23555__auto__ = ((((0) < args__23554__auto__.length))?(new cljs.core.IndexedSeq(args__23554__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__23555__auto__);
});})(action__23900__auto___25118))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23900__auto___25118){
return (function (args__23899__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__23899__auto__);
});})(action__23900__auto___25118))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__23900__auto___25118){
return (function (seq25117){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25117));
});})(action__23900__auto___25118))
;

//# sourceMappingURL=entry.js.map