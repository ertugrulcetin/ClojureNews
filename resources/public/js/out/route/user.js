// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.user');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('view.user');
goog.require('util.view');
var action__23900__auto___26544 = (function (params__23901__auto__){
if(cljs.core.map_QMARK_.call(null,params__23901__auto__)){
var map__26540 = params__23901__auto__;
var map__26540__$1 = ((((!((map__26540 == null)))?((((map__26540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26540):map__26540);
var username = cljs.core.get.call(null,map__26540__$1,new cljs.core.Keyword(null,"username","username",1605666410));
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__26540,map__26540__$1,username){
return (function (){
return view.user.component.call(null);
});})(map__26540,map__26540__$1,username))
], null),util.view.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23901__auto__)){
var vec__26542 = params__23901__auto__;
var username = cljs.core.nth.call(null,vec__26542,(0),null);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__26542,username){
return (function (){
return view.user.component.call(null);
});})(vec__26542,username))
], null),util.view.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/user/:username",action__23900__auto___26544);

route.user.user = ((function (action__23900__auto___26544){
return (function route$user$user(var_args){
var args__23554__auto__ = [];
var len__23547__auto___26545 = arguments.length;
var i__23548__auto___26546 = (0);
while(true){
if((i__23548__auto___26546 < len__23547__auto___26545)){
args__23554__auto__.push((arguments[i__23548__auto___26546]));

var G__26547 = (i__23548__auto___26546 + (1));
i__23548__auto___26546 = G__26547;
continue;
} else {
}
break;
}

var argseq__23555__auto__ = ((((0) < args__23554__auto__.length))?(new cljs.core.IndexedSeq(args__23554__auto__.slice((0)),(0),null)):null);
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(argseq__23555__auto__);
});})(action__23900__auto___26544))
;

route.user.user.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23900__auto___26544){
return (function (args__23899__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/user/:username",args__23899__auto__);
});})(action__23900__auto___26544))
;

route.user.user.cljs$lang$maxFixedArity = (0);

route.user.user.cljs$lang$applyTo = ((function (action__23900__auto___26544){
return (function (seq26543){
return route.user.user.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26543));
});})(action__23900__auto___26544))
;

//# sourceMappingURL=user.js.map