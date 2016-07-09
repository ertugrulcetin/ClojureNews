// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.submit');
goog.require('cljs.core');
goog.require('controller.submit');
goog.require('secretary.core');
var action__26957__auto___32390 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__32386 = params__26958__auto__;
var map__32386__$1 = ((((!((map__32386 == null)))?((((map__32386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32386):map__32386);
return controller.submit.submit_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__32388 = params__26958__auto__;
return controller.submit.submit_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/submit",action__26957__auto___32390);

route.submit.submit = ((function (action__26957__auto___32390){
return (function route$submit$submit(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32391 = arguments.length;
var i__25118__auto___32392 = (0);
while(true){
if((i__25118__auto___32392 < len__25117__auto___32391)){
args__25124__auto__.push((arguments[i__25118__auto___32392]));

var G__32393 = (i__25118__auto___32392 + (1));
i__25118__auto___32392 = G__32393;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.submit.submit.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___32390))
;

route.submit.submit.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___32390){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/submit",args__26956__auto__);
});})(action__26957__auto___32390))
;

route.submit.submit.cljs$lang$maxFixedArity = (0);

route.submit.submit.cljs$lang$applyTo = ((function (action__26957__auto___32390){
return (function (seq32389){
return route.submit.submit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32389));
});})(action__26957__auto___32390))
;

//# sourceMappingURL=submit.js.map