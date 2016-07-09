// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.forgot_password');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.forgot_password');
goog.require('util.view');
var action__26957__auto___32324 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__32320 = params__26958__auto__;
var map__32320__$1 = ((((!((map__32320 == null)))?((((map__32320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32320):map__32320);
util.view.change_page_title.call(null,"Forgot Password");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.forgot_password.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__32322 = params__26958__auto__;
util.view.change_page_title.call(null,"Forgot Password");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.forgot_password.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/forgotpassword",action__26957__auto___32324);

route.forgot_password.forgot_password = ((function (action__26957__auto___32324){
return (function route$forgot_password$forgot_password(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32325 = arguments.length;
var i__25118__auto___32326 = (0);
while(true){
if((i__25118__auto___32326 < len__25117__auto___32325)){
args__25124__auto__.push((arguments[i__25118__auto___32326]));

var G__32327 = (i__25118__auto___32326 + (1));
i__25118__auto___32326 = G__32327;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___32324))
;

route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___32324){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/forgotpassword",args__26956__auto__);
});})(action__26957__auto___32324))
;

route.forgot_password.forgot_password.cljs$lang$maxFixedArity = (0);

route.forgot_password.forgot_password.cljs$lang$applyTo = ((function (action__26957__auto___32324){
return (function (seq32323){
return route.forgot_password.forgot_password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32323));
});})(action__26957__auto___32324))
;

//# sourceMappingURL=forgot_password.js.map