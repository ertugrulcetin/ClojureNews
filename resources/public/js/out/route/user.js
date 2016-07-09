// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.user');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.user');
goog.require('view.changepassword');
goog.require('util.view');
goog.require('controller.user');
var action__26957__auto___32306 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__32302 = params__26958__auto__;
var map__32302__$1 = ((((!((map__32302 == null)))?((((map__32302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32302):map__32302);
var username = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"username","username",1605666410));
return controller.user.user.call(null,username);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__32304 = params__26958__auto__;
var username = cljs.core.nth.call(null,vec__32304,(0),null);
return controller.user.user.call(null,username);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/user/:username",action__26957__auto___32306);

route.user.user = ((function (action__26957__auto___32306){
return (function route$user$user(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32307 = arguments.length;
var i__25118__auto___32308 = (0);
while(true){
if((i__25118__auto___32308 < len__25117__auto___32307)){
args__25124__auto__.push((arguments[i__25118__auto___32308]));

var G__32309 = (i__25118__auto___32308 + (1));
i__25118__auto___32308 = G__32309;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___32306))
;

route.user.user.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___32306){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/user/:username",args__26956__auto__);
});})(action__26957__auto___32306))
;

route.user.user.cljs$lang$maxFixedArity = (0);

route.user.user.cljs$lang$applyTo = ((function (action__26957__auto___32306){
return (function (seq32305){
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32305));
});})(action__26957__auto___32306))
;
var action__26957__auto___32314 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__32310 = params__26958__auto__;
var map__32310__$1 = ((((!((map__32310 == null)))?((((map__32310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32310):map__32310);
var username = cljs.core.get.call(null,map__32310__$1,new cljs.core.Keyword(null,"username","username",1605666410));
return controller.user.change_password_page.call(null,username);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__32312 = params__26958__auto__;
var username = cljs.core.nth.call(null,vec__32312,(0),null);
return controller.user.change_password_page.call(null,username);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/user/:username/changepassword",action__26957__auto___32314);

route.user.user = ((function (action__26957__auto___32314){
return (function route$user$user(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32315 = arguments.length;
var i__25118__auto___32316 = (0);
while(true){
if((i__25118__auto___32316 < len__25117__auto___32315)){
args__25124__auto__.push((arguments[i__25118__auto___32316]));

var G__32317 = (i__25118__auto___32316 + (1));
i__25118__auto___32316 = G__32317;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___32314))
;

route.user.user.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___32314){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/user/:username/changepassword",args__26956__auto__);
});})(action__26957__auto___32314))
;

route.user.user.cljs$lang$maxFixedArity = (0);

route.user.user.cljs$lang$applyTo = ((function (action__26957__auto___32314){
return (function (seq32313){
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32313));
});})(action__26957__auto___32314))
;

//# sourceMappingURL=user.js.map