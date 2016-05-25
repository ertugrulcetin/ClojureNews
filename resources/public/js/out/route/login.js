// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.login');
goog.require('util.view');
var action__23804__auto___25725 = (function (params__23805__auto__){
if(cljs.core.map_QMARK_.call(null,params__23805__auto__)){
var map__25721 = params__23805__auto__;
var map__25721__$1 = ((((!((map__25721 == null)))?((((map__25721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25721):map__25721);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.login.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23805__auto__)){
var vec__25723 = params__23805__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.login.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__23804__auto___25725);

route.login.login = ((function (action__23804__auto___25725){
return (function route$login$login(var_args){
var args__23601__auto__ = [];
var len__23594__auto___25726 = arguments.length;
var i__23595__auto___25727 = (0);
while(true){
if((i__23595__auto___25727 < len__23594__auto___25726)){
args__23601__auto__.push((arguments[i__23595__auto___25727]));

var G__25728 = (i__23595__auto___25727 + (1));
i__23595__auto___25727 = G__25728;
continue;
} else {
}
break;
}

var argseq__23602__auto__ = ((((0) < args__23601__auto__.length))?(new cljs.core.IndexedSeq(args__23601__auto__.slice((0)),(0),null)):null);
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(argseq__23602__auto__);
});})(action__23804__auto___25725))
;

route.login.login.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23804__auto___25725){
return (function (args__23803__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/login",args__23803__auto__);
});})(action__23804__auto___25725))
;

route.login.login.cljs$lang$maxFixedArity = (0);

route.login.login.cljs$lang$applyTo = ((function (action__23804__auto___25725){
return (function (seq25724){
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25724));
});})(action__23804__auto___25725))
;
var action__23804__auto___25733 = (function (params__23805__auto__){
if(cljs.core.map_QMARK_.call(null,params__23805__auto__)){
var map__25729 = params__23805__auto__;
var map__25729__$1 = ((((!((map__25729 == null)))?((((map__25729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25729):map__25729);
return controller.login.log_out.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23805__auto__)){
var vec__25731 = params__23805__auto__;
return controller.login.log_out.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/logout",action__23804__auto___25733);

route.login.logout = ((function (action__23804__auto___25733){
return (function route$login$logout(var_args){
var args__23601__auto__ = [];
var len__23594__auto___25734 = arguments.length;
var i__23595__auto___25735 = (0);
while(true){
if((i__23595__auto___25735 < len__23594__auto___25734)){
args__23601__auto__.push((arguments[i__23595__auto___25735]));

var G__25736 = (i__23595__auto___25735 + (1));
i__23595__auto___25735 = G__25736;
continue;
} else {
}
break;
}

var argseq__23602__auto__ = ((((0) < args__23601__auto__.length))?(new cljs.core.IndexedSeq(args__23601__auto__.slice((0)),(0),null)):null);
return route.login.logout.cljs$core$IFn$_invoke$arity$variadic(argseq__23602__auto__);
});})(action__23804__auto___25733))
;

route.login.logout.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23804__auto___25733){
return (function (args__23803__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/logout",args__23803__auto__);
});})(action__23804__auto___25733))
;

route.login.logout.cljs$lang$maxFixedArity = (0);

route.login.logout.cljs$lang$applyTo = ((function (action__23804__auto___25733){
return (function (seq25732){
return route.login.logout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25732));
});})(action__23804__auto___25733))
;

//# sourceMappingURL=login.js.map