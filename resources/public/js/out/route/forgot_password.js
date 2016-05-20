// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.forgot_password');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.forgot_password');
goog.require('util.view');
var action__23459__auto___25285 = (function (params__23460__auto__){
if(cljs.core.map_QMARK_.call(null,params__23460__auto__)){
var map__25281 = params__23460__auto__;
var map__25281__$1 = ((((!((map__25281 == null)))?((((map__25281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25281):map__25281);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.forgot_password.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23460__auto__)){
var vec__25283 = params__23460__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.forgot_password.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/forgotpassword",action__23459__auto___25285);

route.forgot_password.forgot_password = ((function (action__23459__auto___25285){
return (function route$forgot_password$forgot_password(var_args){
var args__23255__auto__ = [];
var len__23248__auto___25286 = arguments.length;
var i__23249__auto___25287 = (0);
while(true){
if((i__23249__auto___25287 < len__23248__auto___25286)){
args__23255__auto__.push((arguments[i__23249__auto___25287]));

var G__25288 = (i__23249__auto___25287 + (1));
i__23249__auto___25287 = G__25288;
continue;
} else {
}
break;
}

var argseq__23256__auto__ = ((((0) < args__23255__auto__.length))?(new cljs.core.IndexedSeq(args__23255__auto__.slice((0)),(0),null)):null);
return route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic(argseq__23256__auto__);
});})(action__23459__auto___25285))
;

route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23459__auto___25285){
return (function (args__23458__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/forgotpassword",args__23458__auto__);
});})(action__23459__auto___25285))
;

route.forgot_password.forgot_password.cljs$lang$maxFixedArity = (0);

route.forgot_password.forgot_password.cljs$lang$applyTo = ((function (action__23459__auto___25285){
return (function (seq25284){
return route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25284));
});})(action__23459__auto___25285))
;

//# sourceMappingURL=forgot_password.js.map