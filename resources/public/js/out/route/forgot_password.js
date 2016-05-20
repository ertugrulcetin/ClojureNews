// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.forgot_password');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.forgot_password');
goog.require('util.view');
var action__22530__auto___23660 = (function (params__22531__auto__){
if(cljs.core.map_QMARK_.call(null,params__22531__auto__)){
var map__23656 = params__22531__auto__;
var map__23656__$1 = ((((!((map__23656 == null)))?((((map__23656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23656):map__23656);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.forgot_password.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__22531__auto__)){
var vec__23658 = params__22531__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.forgot_password.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/forgotpassword",action__22530__auto___23660);

route.forgot_password.forgot_password = ((function (action__22530__auto___23660){
return (function route$forgot_password$forgot_password(var_args){
var args__22327__auto__ = [];
var len__22320__auto___23661 = arguments.length;
var i__22321__auto___23662 = (0);
while(true){
if((i__22321__auto___23662 < len__22320__auto___23661)){
args__22327__auto__.push((arguments[i__22321__auto___23662]));

var G__23663 = (i__22321__auto___23662 + (1));
i__22321__auto___23662 = G__23663;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__22530__auto___23660))
;

route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22530__auto___23660){
return (function (args__22529__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/forgotpassword",args__22529__auto__);
});})(action__22530__auto___23660))
;

route.forgot_password.forgot_password.cljs$lang$maxFixedArity = (0);

route.forgot_password.forgot_password.cljs$lang$applyTo = ((function (action__22530__auto___23660){
return (function (seq23659){
return route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23659));
});})(action__22530__auto___23660))
;

//# sourceMappingURL=forgot_password.js.map