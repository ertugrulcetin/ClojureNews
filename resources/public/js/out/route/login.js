// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.login');
goog.require('cljs.core');
goog.require('controller.login');
goog.require('secretary.core');
var action__26957__auto___27067 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27063 = params__26958__auto__;
var map__27063__$1 = ((((!((map__27063 == null)))?((((map__27063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27063):map__27063);
return controller.login.log_in_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27065 = params__26958__auto__;
return controller.login.log_in_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__26957__auto___27067);

route.login.login = ((function (action__26957__auto___27067){
return (function route$login$login(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27068 = arguments.length;
var i__25118__auto___27069 = (0);
while(true){
if((i__25118__auto___27069 < len__25117__auto___27068)){
args__25124__auto__.push((arguments[i__25118__auto___27069]));

var G__27070 = (i__25118__auto___27069 + (1));
i__25118__auto___27069 = G__27070;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27067))
;

route.login.login.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27067){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/login",args__26956__auto__);
});})(action__26957__auto___27067))
;

route.login.login.cljs$lang$maxFixedArity = (0);

route.login.login.cljs$lang$applyTo = ((function (action__26957__auto___27067){
return (function (seq27066){
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27066));
});})(action__26957__auto___27067))
;
var action__26957__auto___27075 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27071 = params__26958__auto__;
var map__27071__$1 = ((((!((map__27071 == null)))?((((map__27071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27071):map__27071);
return controller.login.log_out.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27073 = params__26958__auto__;
return controller.login.log_out.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/logout",action__26957__auto___27075);

route.login.logout = ((function (action__26957__auto___27075){
return (function route$login$logout(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27076 = arguments.length;
var i__25118__auto___27077 = (0);
while(true){
if((i__25118__auto___27077 < len__25117__auto___27076)){
args__25124__auto__.push((arguments[i__25118__auto___27077]));

var G__27078 = (i__25118__auto___27077 + (1));
i__25118__auto___27077 = G__27078;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.login.logout.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27075))
;

route.login.logout.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27075){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/logout",args__26956__auto__);
});})(action__26957__auto___27075))
;

route.login.logout.cljs$lang$maxFixedArity = (0);

route.login.logout.cljs$lang$applyTo = ((function (action__26957__auto___27075){
return (function (seq27074){
return route.login.logout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27074));
});})(action__26957__auto___27075))
;

//# sourceMappingURL=login.js.map