// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.forgot_password');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.forgot_password');
goog.require('util.view');
var action__25283__auto___27450 = (function (params__25284__auto__){
if(cljs.core.map_QMARK_.call(null,params__25284__auto__)){
var map__27446 = params__25284__auto__;
var map__27446__$1 = ((((!((map__27446 == null)))?((((map__27446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27446):map__27446);
util.view.change_page_title.call(null,"Forgot Password");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.forgot_password.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25284__auto__)){
var vec__27448 = params__25284__auto__;
util.view.change_page_title.call(null,"Forgot Password");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.forgot_password.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/forgotpassword",action__25283__auto___27450);

route.forgot_password.forgot_password = ((function (action__25283__auto___27450){
return (function route$forgot_password$forgot_password(var_args){
var args__25078__auto__ = [];
var len__25071__auto___27451 = arguments.length;
var i__25072__auto___27452 = (0);
while(true){
if((i__25072__auto___27452 < len__25071__auto___27451)){
args__25078__auto__.push((arguments[i__25072__auto___27452]));

var G__27453 = (i__25072__auto___27452 + (1));
i__25072__auto___27452 = G__27453;
continue;
} else {
}
break;
}

var argseq__25079__auto__ = ((((0) < args__25078__auto__.length))?(new cljs.core.IndexedSeq(args__25078__auto__.slice((0)),(0),null)):null);
return route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic(argseq__25079__auto__);
});})(action__25283__auto___27450))
;

route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25283__auto___27450){
return (function (args__25282__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/forgotpassword",args__25282__auto__);
});})(action__25283__auto___27450))
;

route.forgot_password.forgot_password.cljs$lang$maxFixedArity = (0);

route.forgot_password.forgot_password.cljs$lang$applyTo = ((function (action__25283__auto___27450){
return (function (seq27449){
return route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27449));
});})(action__25283__auto___27450))
;

//# sourceMappingURL=forgot_password.js.map