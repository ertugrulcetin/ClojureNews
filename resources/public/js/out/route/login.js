// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.login');
goog.require('util.view');
var action__23459__auto___25312 = (function (params__23460__auto__){
if(cljs.core.map_QMARK_.call(null,params__23460__auto__)){
var map__25308 = params__23460__auto__;
var map__25308__$1 = ((((!((map__25308 == null)))?((((map__25308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25308):map__25308);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.login.component], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23460__auto__)){
var vec__25310 = params__23460__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.login.component], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__23459__auto___25312);

route.login.login = ((function (action__23459__auto___25312){
return (function route$login$login(var_args){
var args__23255__auto__ = [];
var len__23248__auto___25313 = arguments.length;
var i__23249__auto___25314 = (0);
while(true){
if((i__23249__auto___25314 < len__23248__auto___25313)){
args__23255__auto__.push((arguments[i__23249__auto___25314]));

var G__25315 = (i__23249__auto___25314 + (1));
i__23249__auto___25314 = G__25315;
continue;
} else {
}
break;
}

var argseq__23256__auto__ = ((((0) < args__23255__auto__.length))?(new cljs.core.IndexedSeq(args__23255__auto__.slice((0)),(0),null)):null);
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(argseq__23256__auto__);
});})(action__23459__auto___25312))
;

route.login.login.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23459__auto___25312){
return (function (args__23458__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/login",args__23458__auto__);
});})(action__23459__auto___25312))
;

route.login.login.cljs$lang$maxFixedArity = (0);

route.login.login.cljs$lang$applyTo = ((function (action__23459__auto___25312){
return (function (seq25311){
return route.login.login.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25311));
});})(action__23459__auto___25312))
;

//# sourceMappingURL=login.js.map