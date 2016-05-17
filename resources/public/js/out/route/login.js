// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.login');
goog.require('util.view');
var action__22534__auto___24783 = (function (params__22535__auto__){
if(cljs.core.map_QMARK_.call(null,params__22535__auto__)){
var map__24779 = params__22535__auto__;
var map__24779__$1 = ((((!((map__24779 == null)))?((((map__24779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24779):map__24779);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.login.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__22535__auto__)){
var vec__24781 = params__22535__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.login.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__22534__auto___24783);

route.login.login = ((function (action__22534__auto___24783){
return (function route$login$login(var_args){
var args__22327__auto__ = [];
var len__22320__auto___24784 = arguments.length;
var i__22321__auto___24785 = (0);
while(true){
if((i__22321__auto___24785 < len__22320__auto___24784)){
args__22327__auto__.push((arguments[i__22321__auto___24785]));

var G__24786 = (i__22321__auto___24785 + (1));
i__22321__auto___24785 = G__24786;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__22534__auto___24783))
;

route.login.login.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22534__auto___24783){
return (function (args__22533__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/login",args__22533__auto__);
});})(action__22534__auto___24783))
;

route.login.login.cljs$lang$maxFixedArity = (0);

route.login.login.cljs$lang$applyTo = ((function (action__22534__auto___24783){
return (function (seq24782){
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24782));
});})(action__22534__auto___24783))
;

//# sourceMappingURL=login.js.map