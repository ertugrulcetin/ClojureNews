// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.user');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.user');
goog.require('util.view');
goog.require('controller.user');
var action__23777__auto___26106 = (function (params__23778__auto__){
if(cljs.core.map_QMARK_.call(null,params__23778__auto__)){
var map__26102 = params__23778__auto__;
var map__26102__$1 = ((((!((map__26102 == null)))?((((map__26102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26102):map__26102);
var username = cljs.core.get.call(null,map__26102__$1,new cljs.core.Keyword(null,"username","username",1605666410));
return controller.user.user.call(null,username);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23778__auto__)){
var vec__26104 = params__23778__auto__;
var username = cljs.core.nth.call(null,vec__26104,(0),null);
return controller.user.user.call(null,username);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/user/:username",action__23777__auto___26106);

route.user.user = ((function (action__23777__auto___26106){
return (function route$user$user(var_args){
var args__23574__auto__ = [];
var len__23567__auto___26107 = arguments.length;
var i__23568__auto___26108 = (0);
while(true){
if((i__23568__auto___26108 < len__23567__auto___26107)){
args__23574__auto__.push((arguments[i__23568__auto___26108]));

var G__26109 = (i__23568__auto___26108 + (1));
i__23568__auto___26108 = G__26109;
continue;
} else {
}
break;
}

var argseq__23575__auto__ = ((((0) < args__23574__auto__.length))?(new cljs.core.IndexedSeq(args__23574__auto__.slice((0)),(0),null)):null);
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__23575__auto__);
});})(action__23777__auto___26106))
;

route.user.user.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23777__auto___26106){
return (function (args__23776__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/user/:username",args__23776__auto__);
});})(action__23777__auto___26106))
;

route.user.user.cljs$lang$maxFixedArity = (0);

route.user.user.cljs$lang$applyTo = ((function (action__23777__auto___26106){
return (function (seq26105){
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26105));
});})(action__23777__auto___26106))
;

//# sourceMappingURL=user.js.map