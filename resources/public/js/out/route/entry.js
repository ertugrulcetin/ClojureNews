// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
var action__24936__auto___26372 = (function (params__24937__auto__){
if(cljs.core.map_QMARK_.call(null,params__24937__auto__)){
var map__26368 = params__24937__auto__;
var map__26368__$1 = ((((!((map__26368 == null)))?((((map__26368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26368):map__26368);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24937__auto__)){
var vec__26370 = params__24937__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24936__auto___26372);

route.entry.home_page = ((function (action__24936__auto___26372){
return (function route$entry$home_page(var_args){
var args__24590__auto__ = [];
var len__24583__auto___26373 = arguments.length;
var i__24584__auto___26374 = (0);
while(true){
if((i__24584__auto___26374 < len__24583__auto___26373)){
args__24590__auto__.push((arguments[i__24584__auto___26374]));

var G__26375 = (i__24584__auto___26374 + (1));
i__24584__auto___26374 = G__26375;
continue;
} else {
}
break;
}

var argseq__24591__auto__ = ((((0) < args__24590__auto__.length))?(new cljs.core.IndexedSeq(args__24590__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24591__auto__);
});})(action__24936__auto___26372))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24936__auto___26372){
return (function (args__24935__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__24935__auto__);
});})(action__24936__auto___26372))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__24936__auto___26372){
return (function (seq26371){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26371));
});})(action__24936__auto___26372))
;
var action__24936__auto___26380 = (function (params__24937__auto__){
if(cljs.core.map_QMARK_.call(null,params__24937__auto__)){
var map__26376 = params__24937__auto__;
var map__26376__$1 = ((((!((map__26376 == null)))?((((map__26376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26376):map__26376);
var id = cljs.core.get.call(null,map__26376__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.story.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24937__auto__)){
var vec__26378 = params__24937__auto__;
var id = cljs.core.nth.call(null,vec__26378,(0),null);
return controller.entry.story.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__24936__auto___26380);

route.entry.story = ((function (action__24936__auto___26380){
return (function route$entry$story(var_args){
var args__24590__auto__ = [];
var len__24583__auto___26381 = arguments.length;
var i__24584__auto___26382 = (0);
while(true){
if((i__24584__auto___26382 < len__24583__auto___26381)){
args__24590__auto__.push((arguments[i__24584__auto___26382]));

var G__26383 = (i__24584__auto___26382 + (1));
i__24584__auto___26382 = G__26383;
continue;
} else {
}
break;
}

var argseq__24591__auto__ = ((((0) < args__24590__auto__.length))?(new cljs.core.IndexedSeq(args__24590__auto__.slice((0)),(0),null)):null);
return route.entry.story.cljs$core$IFn$_invoke$arity$variadic(argseq__24591__auto__);
});})(action__24936__auto___26380))
;

route.entry.story.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24936__auto___26380){
return (function (args__24935__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__24935__auto__);
});})(action__24936__auto___26380))
;

route.entry.story.cljs$lang$maxFixedArity = (0);

route.entry.story.cljs$lang$applyTo = ((function (action__24936__auto___26380){
return (function (seq26379){
return route.entry.story.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26379));
});})(action__24936__auto___26380))
;

//# sourceMappingURL=entry.js.map