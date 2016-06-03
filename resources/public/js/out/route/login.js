// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.login');
goog.require('cljs.core');
goog.require('controller.login');
goog.require('secretary.core');
var action__23997__auto___25146 = (function (params__23998__auto__){
if(cljs.core.map_QMARK_.call(null,params__23998__auto__)){
var map__25142 = params__23998__auto__;
var map__25142__$1 = ((((!((map__25142 == null)))?((((map__25142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142):map__25142);
return controller.login.log_in_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23998__auto__)){
var vec__25144 = params__23998__auto__;
return controller.login.log_in_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__23997__auto___25146);

route.login.login = ((function (action__23997__auto___25146){
return (function route$login$login(var_args){
var args__23650__auto__ = [];
var len__23643__auto___25147 = arguments.length;
var i__23644__auto___25148 = (0);
while(true){
if((i__23644__auto___25148 < len__23643__auto___25147)){
args__23650__auto__.push((arguments[i__23644__auto___25148]));

var G__25149 = (i__23644__auto___25148 + (1));
i__23644__auto___25148 = G__25149;
continue;
} else {
}
break;
}

var argseq__23651__auto__ = ((((0) < args__23650__auto__.length))?(new cljs.core.IndexedSeq(args__23650__auto__.slice((0)),(0),null)):null);
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(argseq__23651__auto__);
});})(action__23997__auto___25146))
;

route.login.login.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23997__auto___25146){
return (function (args__23996__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/login",args__23996__auto__);
});})(action__23997__auto___25146))
;

route.login.login.cljs$lang$maxFixedArity = (0);

route.login.login.cljs$lang$applyTo = ((function (action__23997__auto___25146){
return (function (seq25145){
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25145));
});})(action__23997__auto___25146))
;
var action__23997__auto___25154 = (function (params__23998__auto__){
if(cljs.core.map_QMARK_.call(null,params__23998__auto__)){
var map__25150 = params__23998__auto__;
var map__25150__$1 = ((((!((map__25150 == null)))?((((map__25150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25150):map__25150);
return controller.login.log_out.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23998__auto__)){
var vec__25152 = params__23998__auto__;
return controller.login.log_out.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/logout",action__23997__auto___25154);

route.login.logout = ((function (action__23997__auto___25154){
return (function route$login$logout(var_args){
var args__23650__auto__ = [];
var len__23643__auto___25155 = arguments.length;
var i__23644__auto___25156 = (0);
while(true){
if((i__23644__auto___25156 < len__23643__auto___25155)){
args__23650__auto__.push((arguments[i__23644__auto___25156]));

var G__25157 = (i__23644__auto___25156 + (1));
i__23644__auto___25156 = G__25157;
continue;
} else {
}
break;
}

var argseq__23651__auto__ = ((((0) < args__23650__auto__.length))?(new cljs.core.IndexedSeq(args__23650__auto__.slice((0)),(0),null)):null);
return route.login.logout.cljs$core$IFn$_invoke$arity$variadic(argseq__23651__auto__);
});})(action__23997__auto___25154))
;

route.login.logout.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23997__auto___25154){
return (function (args__23996__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/logout",args__23996__auto__);
});})(action__23997__auto___25154))
;

route.login.logout.cljs$lang$maxFixedArity = (0);

route.login.logout.cljs$lang$applyTo = ((function (action__23997__auto___25154){
return (function (seq25153){
return route.login.logout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25153));
});})(action__23997__auto___25154))
;

//# sourceMappingURL=login.js.map