// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.user');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.user');
goog.require('view.changepassword');
goog.require('util.view');
goog.require('controller.user');
var action__23996__auto___25978 = (function (params__23997__auto__){
if(cljs.core.map_QMARK_.call(null,params__23997__auto__)){
var map__25974 = params__23997__auto__;
var map__25974__$1 = ((((!((map__25974 == null)))?((((map__25974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25974):map__25974);
var username = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"username","username",1605666410));
return controller.user.user.call(null,username);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23997__auto__)){
var vec__25976 = params__23997__auto__;
var username = cljs.core.nth.call(null,vec__25976,(0),null);
return controller.user.user.call(null,username);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/user/:username",action__23996__auto___25978);

route.user.user = ((function (action__23996__auto___25978){
return (function route$user$user(var_args){
var args__23650__auto__ = [];
var len__23643__auto___25979 = arguments.length;
var i__23644__auto___25980 = (0);
while(true){
if((i__23644__auto___25980 < len__23643__auto___25979)){
args__23650__auto__.push((arguments[i__23644__auto___25980]));

var G__25981 = (i__23644__auto___25980 + (1));
i__23644__auto___25980 = G__25981;
continue;
} else {
}
break;
}

var argseq__23651__auto__ = ((((0) < args__23650__auto__.length))?(new cljs.core.IndexedSeq(args__23650__auto__.slice((0)),(0),null)):null);
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__23651__auto__);
});})(action__23996__auto___25978))
;

route.user.user.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23996__auto___25978){
return (function (args__23995__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/user/:username",args__23995__auto__);
});})(action__23996__auto___25978))
;

route.user.user.cljs$lang$maxFixedArity = (0);

route.user.user.cljs$lang$applyTo = ((function (action__23996__auto___25978){
return (function (seq25977){
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25977));
});})(action__23996__auto___25978))
;
var action__23996__auto___25986 = (function (params__23997__auto__){
if(cljs.core.map_QMARK_.call(null,params__23997__auto__)){
var map__25982 = params__23997__auto__;
var map__25982__$1 = ((((!((map__25982 == null)))?((((map__25982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25982):map__25982);
var username = cljs.core.get.call(null,map__25982__$1,new cljs.core.Keyword(null,"username","username",1605666410));
return controller.user.change_password_page.call(null,username);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23997__auto__)){
var vec__25984 = params__23997__auto__;
var username = cljs.core.nth.call(null,vec__25984,(0),null);
return controller.user.change_password_page.call(null,username);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/user/:username/changepassword",action__23996__auto___25986);

route.user.user = ((function (action__23996__auto___25986){
return (function route$user$user(var_args){
var args__23650__auto__ = [];
var len__23643__auto___25987 = arguments.length;
var i__23644__auto___25988 = (0);
while(true){
if((i__23644__auto___25988 < len__23643__auto___25987)){
args__23650__auto__.push((arguments[i__23644__auto___25988]));

var G__25989 = (i__23644__auto___25988 + (1));
i__23644__auto___25988 = G__25989;
continue;
} else {
}
break;
}

var argseq__23651__auto__ = ((((0) < args__23650__auto__.length))?(new cljs.core.IndexedSeq(args__23650__auto__.slice((0)),(0),null)):null);
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__23651__auto__);
});})(action__23996__auto___25986))
;

route.user.user.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23996__auto___25986){
return (function (args__23995__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/user/:username/changepassword",args__23995__auto__);
});})(action__23996__auto___25986))
;

route.user.user.cljs$lang$maxFixedArity = (0);

route.user.user.cljs$lang$applyTo = ((function (action__23996__auto___25986){
return (function (seq25985){
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25985));
});})(action__23996__auto___25986))
;

//# sourceMappingURL=user.js.map