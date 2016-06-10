// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.user');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.user');
goog.require('view.changepassword');
goog.require('util.view');
goog.require('controller.user');
var action__24027__auto___25715 = (function (params__24028__auto__){
if(cljs.core.map_QMARK_.call(null,params__24028__auto__)){
var map__25711 = params__24028__auto__;
var map__25711__$1 = ((((!((map__25711 == null)))?((((map__25711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25711):map__25711);
var username = cljs.core.get.call(null,map__25711__$1,new cljs.core.Keyword(null,"username","username",1605666410));
return controller.user.user.call(null,username);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24028__auto__)){
var vec__25713 = params__24028__auto__;
var username = cljs.core.nth.call(null,vec__25713,(0),null);
return controller.user.user.call(null,username);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/user/:username",action__24027__auto___25715);

route.user.user = ((function (action__24027__auto___25715){
return (function route$user$user(var_args){
var args__23681__auto__ = [];
var len__23674__auto___25716 = arguments.length;
var i__23675__auto___25717 = (0);
while(true){
if((i__23675__auto___25717 < len__23674__auto___25716)){
args__23681__auto__.push((arguments[i__23675__auto___25717]));

var G__25718 = (i__23675__auto___25717 + (1));
i__23675__auto___25717 = G__25718;
continue;
} else {
}
break;
}

var argseq__23682__auto__ = ((((0) < args__23681__auto__.length))?(new cljs.core.IndexedSeq(args__23681__auto__.slice((0)),(0),null)):null);
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__23682__auto__);
});})(action__24027__auto___25715))
;

route.user.user.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24027__auto___25715){
return (function (args__24026__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/user/:username",args__24026__auto__);
});})(action__24027__auto___25715))
;

route.user.user.cljs$lang$maxFixedArity = (0);

route.user.user.cljs$lang$applyTo = ((function (action__24027__auto___25715){
return (function (seq25714){
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25714));
});})(action__24027__auto___25715))
;
var action__24027__auto___25723 = (function (params__24028__auto__){
if(cljs.core.map_QMARK_.call(null,params__24028__auto__)){
var map__25719 = params__24028__auto__;
var map__25719__$1 = ((((!((map__25719 == null)))?((((map__25719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25719):map__25719);
var username = cljs.core.get.call(null,map__25719__$1,new cljs.core.Keyword(null,"username","username",1605666410));
return controller.user.change_password_page.call(null,username);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24028__auto__)){
var vec__25721 = params__24028__auto__;
var username = cljs.core.nth.call(null,vec__25721,(0),null);
return controller.user.change_password_page.call(null,username);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/user/:username/changepassword",action__24027__auto___25723);

route.user.user = ((function (action__24027__auto___25723){
return (function route$user$user(var_args){
var args__23681__auto__ = [];
var len__23674__auto___25724 = arguments.length;
var i__23675__auto___25725 = (0);
while(true){
if((i__23675__auto___25725 < len__23674__auto___25724)){
args__23681__auto__.push((arguments[i__23675__auto___25725]));

var G__25726 = (i__23675__auto___25725 + (1));
i__23675__auto___25725 = G__25726;
continue;
} else {
}
break;
}

var argseq__23682__auto__ = ((((0) < args__23681__auto__.length))?(new cljs.core.IndexedSeq(args__23681__auto__.slice((0)),(0),null)):null);
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__23682__auto__);
});})(action__24027__auto___25723))
;

route.user.user.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24027__auto___25723){
return (function (args__24026__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/user/:username/changepassword",args__24026__auto__);
});})(action__24027__auto___25723))
;

route.user.user.cljs$lang$maxFixedArity = (0);

route.user.user.cljs$lang$applyTo = ((function (action__24027__auto___25723){
return (function (seq25722){
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25722));
});})(action__24027__auto___25723))
;

//# sourceMappingURL=user.js.map