// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.submit');
goog.require('cljs.core');
goog.require('controller.submit');
goog.require('secretary.core');
var action__24027__auto___25170 = (function (params__24028__auto__){
if(cljs.core.map_QMARK_.call(null,params__24028__auto__)){
var map__25166 = params__24028__auto__;
var map__25166__$1 = ((((!((map__25166 == null)))?((((map__25166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25166):map__25166);
return controller.submit.submit_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24028__auto__)){
var vec__25168 = params__24028__auto__;
return controller.submit.submit_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/submit",action__24027__auto___25170);

route.submit.submit = ((function (action__24027__auto___25170){
return (function route$submit$submit(var_args){
var args__23681__auto__ = [];
var len__23674__auto___25171 = arguments.length;
var i__23675__auto___25172 = (0);
while(true){
if((i__23675__auto___25172 < len__23674__auto___25171)){
args__23681__auto__.push((arguments[i__23675__auto___25172]));

var G__25173 = (i__23675__auto___25172 + (1));
i__23675__auto___25172 = G__25173;
continue;
} else {
}
break;
}

var argseq__23682__auto__ = ((((0) < args__23681__auto__.length))?(new cljs.core.IndexedSeq(args__23681__auto__.slice((0)),(0),null)):null);
return route.submit.submit.cljs$core$IFn$_invoke$arity$variadic(argseq__23682__auto__);
});})(action__24027__auto___25170))
;

route.submit.submit.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24027__auto___25170){
return (function (args__24026__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/submit",args__24026__auto__);
});})(action__24027__auto___25170))
;

route.submit.submit.cljs$lang$maxFixedArity = (0);

route.submit.submit.cljs$lang$applyTo = ((function (action__24027__auto___25170){
return (function (seq25169){
return route.submit.submit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25169));
});})(action__24027__auto___25170))
;

//# sourceMappingURL=submit.js.map