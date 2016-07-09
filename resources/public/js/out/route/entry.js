// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__26957__auto___27294 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27290 = params__26958__auto__;
var map__27290__$1 = ((((!((map__27290 == null)))?((((map__27290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27290):map__27290);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27292 = params__26958__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26957__auto___27294);

route.entry.home_page = ((function (action__26957__auto___27294){
return (function route$entry$home_page(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27295 = arguments.length;
var i__25118__auto___27296 = (0);
while(true){
if((i__25118__auto___27296 < len__25117__auto___27295)){
args__25124__auto__.push((arguments[i__25118__auto___27296]));

var G__27297 = (i__25118__auto___27296 + (1));
i__25118__auto___27296 = G__27297;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27294))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27294){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__26956__auto__);
});})(action__26957__auto___27294))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__26957__auto___27294){
return (function (seq27293){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27293));
});})(action__26957__auto___27294))
;
var action__26957__auto___27302 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27298 = params__26958__auto__;
var map__27298__$1 = ((((!((map__27298 == null)))?((((map__27298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27298):map__27298);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27300 = params__26958__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story",action__26957__auto___27302);

route.entry.get_stories = ((function (action__26957__auto___27302){
return (function route$entry$get_stories(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27303 = arguments.length;
var i__25118__auto___27304 = (0);
while(true){
if((i__25118__auto___27304 < len__25117__auto___27303)){
args__25124__auto__.push((arguments[i__25118__auto___27304]));

var G__27305 = (i__25118__auto___27304 + (1));
i__25118__auto___27304 = G__27305;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27302))
;

route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27302){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story",args__26956__auto__);
});})(action__26957__auto___27302))
;

route.entry.get_stories.cljs$lang$maxFixedArity = (0);

route.entry.get_stories.cljs$lang$applyTo = ((function (action__26957__auto___27302){
return (function (seq27301){
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27301));
});})(action__26957__auto___27302))
;
var action__26957__auto___27310 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27306 = params__26958__auto__;
var map__27306__$1 = ((((!((map__27306 == null)))?((((map__27306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27306):map__27306);
var id = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27308 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27308,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__26957__auto___27310);

route.entry.get_story_by_id = ((function (action__26957__auto___27310){
return (function route$entry$get_story_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27311 = arguments.length;
var i__25118__auto___27312 = (0);
while(true){
if((i__25118__auto___27312 < len__25117__auto___27311)){
args__25124__auto__.push((arguments[i__25118__auto___27312]));

var G__27313 = (i__25118__auto___27312 + (1));
i__25118__auto___27312 = G__27313;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27310))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27310){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__26956__auto__);
});})(action__26957__auto___27310))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27310){
return (function (seq27309){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27309));
});})(action__26957__auto___27310))
;
var action__26957__auto___27318 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27314 = params__26958__auto__;
var map__27314__$1 = ((((!((map__27314 == null)))?((((map__27314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27314):map__27314);
var page = cljs.core.get.call(null,map__27314__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27316 = params__26958__auto__;
var page = cljs.core.nth.call(null,vec__27316,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__26957__auto___27318);

route.entry.get_stories_by_page = ((function (action__26957__auto___27318){
return (function route$entry$get_stories_by_page(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27319 = arguments.length;
var i__25118__auto___27320 = (0);
while(true){
if((i__25118__auto___27320 < len__25117__auto___27319)){
args__25124__auto__.push((arguments[i__25118__auto___27320]));

var G__27321 = (i__25118__auto___27320 + (1));
i__25118__auto___27320 = G__27321;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27318))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27318){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__26956__auto__);
});})(action__26957__auto___27318))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__26957__auto___27318){
return (function (seq27317){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27317));
});})(action__26957__auto___27318))
;
var action__26957__auto___27326 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27322 = params__26958__auto__;
var map__27322__$1 = ((((!((map__27322 == null)))?((((map__27322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27322):map__27322);
var id = cljs.core.get.call(null,map__27322__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27324 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27324,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__26957__auto___27326);

route.entry.edit_story_by_id = ((function (action__26957__auto___27326){
return (function route$entry$edit_story_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27327 = arguments.length;
var i__25118__auto___27328 = (0);
while(true){
if((i__25118__auto___27328 < len__25117__auto___27327)){
args__25124__auto__.push((arguments[i__25118__auto___27328]));

var G__27329 = (i__25118__auto___27328 + (1));
i__25118__auto___27328 = G__27329;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27326))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27326){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__26956__auto__);
});})(action__26957__auto___27326))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27326){
return (function (seq27325){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27325));
});})(action__26957__auto___27326))
;
var action__26957__auto___27334 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27330 = params__26958__auto__;
var map__27330__$1 = ((((!((map__27330 == null)))?((((map__27330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27330):map__27330);
var id = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27332 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27332,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__26957__auto___27334);

route.entry.delete_story_by_id = ((function (action__26957__auto___27334){
return (function route$entry$delete_story_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27335 = arguments.length;
var i__25118__auto___27336 = (0);
while(true){
if((i__25118__auto___27336 < len__25117__auto___27335)){
args__25124__auto__.push((arguments[i__25118__auto___27336]));

var G__27337 = (i__25118__auto___27336 + (1));
i__25118__auto___27336 = G__27337;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27334))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27334){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__26956__auto__);
});})(action__26957__auto___27334))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27334){
return (function (seq27333){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27333));
});})(action__26957__auto___27334))
;
var action__26957__auto___27342 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27338 = params__26958__auto__;
var map__27338__$1 = ((((!((map__27338 == null)))?((((map__27338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27338):map__27338);
return controller.entry.get_ask_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27340 = params__26958__auto__;
return controller.entry.get_ask_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask",action__26957__auto___27342);

route.entry.get_asks = ((function (action__26957__auto___27342){
return (function route$entry$get_asks(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27343 = arguments.length;
var i__25118__auto___27344 = (0);
while(true){
if((i__25118__auto___27344 < len__25117__auto___27343)){
args__25124__auto__.push((arguments[i__25118__auto___27344]));

var G__27345 = (i__25118__auto___27344 + (1));
i__25118__auto___27344 = G__27345;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27342))
;

route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27342){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask",args__26956__auto__);
});})(action__26957__auto___27342))
;

route.entry.get_asks.cljs$lang$maxFixedArity = (0);

route.entry.get_asks.cljs$lang$applyTo = ((function (action__26957__auto___27342){
return (function (seq27341){
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27341));
});})(action__26957__auto___27342))
;
var action__26957__auto___27350 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27346 = params__26958__auto__;
var map__27346__$1 = ((((!((map__27346 == null)))?((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346):map__27346);
var id = cljs.core.get.call(null,map__27346__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27348 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27348,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__26957__auto___27350);

route.entry.get_ask_by_id = ((function (action__26957__auto___27350){
return (function route$entry$get_ask_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27351 = arguments.length;
var i__25118__auto___27352 = (0);
while(true){
if((i__25118__auto___27352 < len__25117__auto___27351)){
args__25124__auto__.push((arguments[i__25118__auto___27352]));

var G__27353 = (i__25118__auto___27352 + (1));
i__25118__auto___27352 = G__27353;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27350))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27350){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__26956__auto__);
});})(action__26957__auto___27350))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27350){
return (function (seq27349){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27349));
});})(action__26957__auto___27350))
;
var action__26957__auto___27358 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27354 = params__26958__auto__;
var map__27354__$1 = ((((!((map__27354 == null)))?((((map__27354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27354):map__27354);
var page = cljs.core.get.call(null,map__27354__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_ask_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27356 = params__26958__auto__;
var page = cljs.core.nth.call(null,vec__27356,(0),null);
return controller.entry.get_ask_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/p/:page",action__26957__auto___27358);

route.entry.get_ask_by_page = ((function (action__26957__auto___27358){
return (function route$entry$get_ask_by_page(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27359 = arguments.length;
var i__25118__auto___27360 = (0);
while(true){
if((i__25118__auto___27360 < len__25117__auto___27359)){
args__25124__auto__.push((arguments[i__25118__auto___27360]));

var G__27361 = (i__25118__auto___27360 + (1));
i__25118__auto___27360 = G__27361;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27358))
;

route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27358){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/p/:page",args__26956__auto__);
});})(action__26957__auto___27358))
;

route.entry.get_ask_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_page.cljs$lang$applyTo = ((function (action__26957__auto___27358){
return (function (seq27357){
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27357));
});})(action__26957__auto___27358))
;
var action__26957__auto___27366 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27362 = params__26958__auto__;
var map__27362__$1 = ((((!((map__27362 == null)))?((((map__27362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27362):map__27362);
var id = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27364 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27364,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__26957__auto___27366);

route.entry.edit_ask_by_id = ((function (action__26957__auto___27366){
return (function route$entry$edit_ask_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27367 = arguments.length;
var i__25118__auto___27368 = (0);
while(true){
if((i__25118__auto___27368 < len__25117__auto___27367)){
args__25124__auto__.push((arguments[i__25118__auto___27368]));

var G__27369 = (i__25118__auto___27368 + (1));
i__25118__auto___27368 = G__27369;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27366))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27366){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__26956__auto__);
});})(action__26957__auto___27366))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27366){
return (function (seq27365){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27365));
});})(action__26957__auto___27366))
;
var action__26957__auto___27374 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27370 = params__26958__auto__;
var map__27370__$1 = ((((!((map__27370 == null)))?((((map__27370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27370):map__27370);
var id = cljs.core.get.call(null,map__27370__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27372 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27372,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__26957__auto___27374);

route.entry.delete_ask_by_id = ((function (action__26957__auto___27374){
return (function route$entry$delete_ask_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27375 = arguments.length;
var i__25118__auto___27376 = (0);
while(true){
if((i__25118__auto___27376 < len__25117__auto___27375)){
args__25124__auto__.push((arguments[i__25118__auto___27376]));

var G__27377 = (i__25118__auto___27376 + (1));
i__25118__auto___27376 = G__27377;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27374))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27374){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__26956__auto__);
});})(action__26957__auto___27374))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27374){
return (function (seq27373){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27373));
});})(action__26957__auto___27374))
;
var action__26957__auto___27382 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27378 = params__26958__auto__;
var map__27378__$1 = ((((!((map__27378 == null)))?((((map__27378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27378):map__27378);
return controller.entry.get_newest_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27380 = params__26958__auto__;
return controller.entry.get_newest_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__26957__auto___27382);

route.entry.get_newest = ((function (action__26957__auto___27382){
return (function route$entry$get_newest(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27383 = arguments.length;
var i__25118__auto___27384 = (0);
while(true){
if((i__25118__auto___27384 < len__25117__auto___27383)){
args__25124__auto__.push((arguments[i__25118__auto___27384]));

var G__27385 = (i__25118__auto___27384 + (1));
i__25118__auto___27384 = G__27385;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27382))
;

route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27382){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new",args__26956__auto__);
});})(action__26957__auto___27382))
;

route.entry.get_newest.cljs$lang$maxFixedArity = (0);

route.entry.get_newest.cljs$lang$applyTo = ((function (action__26957__auto___27382){
return (function (seq27381){
return route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27381));
});})(action__26957__auto___27382))
;
var action__26957__auto___27390 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27386 = params__26958__auto__;
var map__27386__$1 = ((((!((map__27386 == null)))?((((map__27386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27386):map__27386);
var page = cljs.core.get.call(null,map__27386__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_newest_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27388 = params__26958__auto__;
var page = cljs.core.nth.call(null,vec__27388,(0),null);
return controller.entry.get_newest_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new/p/:page",action__26957__auto___27390);

route.entry.get_newest_by_page = ((function (action__26957__auto___27390){
return (function route$entry$get_newest_by_page(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27391 = arguments.length;
var i__25118__auto___27392 = (0);
while(true){
if((i__25118__auto___27392 < len__25117__auto___27391)){
args__25124__auto__.push((arguments[i__25118__auto___27392]));

var G__27393 = (i__25118__auto___27392 + (1));
i__25118__auto___27392 = G__27393;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27390))
;

route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27390){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new/p/:page",args__26956__auto__);
});})(action__26957__auto___27390))
;

route.entry.get_newest_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_newest_by_page.cljs$lang$applyTo = ((function (action__26957__auto___27390){
return (function (seq27389){
return route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27389));
});})(action__26957__auto___27390))
;
var action__26957__auto___27398 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27394 = params__26958__auto__;
var map__27394__$1 = ((((!((map__27394 == null)))?((((map__27394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27394):map__27394);
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27396 = params__26958__auto__;
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job",action__26957__auto___27398);

route.entry.get_jobs = ((function (action__26957__auto___27398){
return (function route$entry$get_jobs(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27399 = arguments.length;
var i__25118__auto___27400 = (0);
while(true){
if((i__25118__auto___27400 < len__25117__auto___27399)){
args__25124__auto__.push((arguments[i__25118__auto___27400]));

var G__27401 = (i__25118__auto___27400 + (1));
i__25118__auto___27400 = G__27401;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27398))
;

route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27398){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job",args__26956__auto__);
});})(action__26957__auto___27398))
;

route.entry.get_jobs.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs.cljs$lang$applyTo = ((function (action__26957__auto___27398){
return (function (seq27397){
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27397));
});})(action__26957__auto___27398))
;
var action__26957__auto___27406 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27402 = params__26958__auto__;
var map__27402__$1 = ((((!((map__27402 == null)))?((((map__27402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27402):map__27402);
var page = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_jobs_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27404 = params__26958__auto__;
var page = cljs.core.nth.call(null,vec__27404,(0),null);
return controller.entry.get_jobs_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/p/:page",action__26957__auto___27406);

route.entry.get_jobs_by_page = ((function (action__26957__auto___27406){
return (function route$entry$get_jobs_by_page(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27407 = arguments.length;
var i__25118__auto___27408 = (0);
while(true){
if((i__25118__auto___27408 < len__25117__auto___27407)){
args__25124__auto__.push((arguments[i__25118__auto___27408]));

var G__27409 = (i__25118__auto___27408 + (1));
i__25118__auto___27408 = G__27409;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27406))
;

route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27406){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/p/:page",args__26956__auto__);
});})(action__26957__auto___27406))
;

route.entry.get_jobs_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs_by_page.cljs$lang$applyTo = ((function (action__26957__auto___27406){
return (function (seq27405){
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27405));
});})(action__26957__auto___27406))
;
var action__26957__auto___27414 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27410 = params__26958__auto__;
var map__27410__$1 = ((((!((map__27410 == null)))?((((map__27410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27410):map__27410);
var id = cljs.core.get.call(null,map__27410__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27412 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27412,(0),null);
return controller.entry.edit_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/edit/:id",action__26957__auto___27414);

route.entry.edit_job_by_id = ((function (action__26957__auto___27414){
return (function route$entry$edit_job_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27415 = arguments.length;
var i__25118__auto___27416 = (0);
while(true){
if((i__25118__auto___27416 < len__25117__auto___27415)){
args__25124__auto__.push((arguments[i__25118__auto___27416]));

var G__27417 = (i__25118__auto___27416 + (1));
i__25118__auto___27416 = G__27417;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27414))
;

route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27414){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/edit/:id",args__26956__auto__);
});})(action__26957__auto___27414))
;

route.entry.edit_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_job_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27414){
return (function (seq27413){
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27413));
});})(action__26957__auto___27414))
;
var action__26957__auto___27422 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27418 = params__26958__auto__;
var map__27418__$1 = ((((!((map__27418 == null)))?((((map__27418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27418):map__27418);
var id = cljs.core.get.call(null,map__27418__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27420 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27420,(0),null);
return controller.entry.delete_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/delete/:id",action__26957__auto___27422);

route.entry.delete_job_by_id = ((function (action__26957__auto___27422){
return (function route$entry$delete_job_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27423 = arguments.length;
var i__25118__auto___27424 = (0);
while(true){
if((i__25118__auto___27424 < len__25117__auto___27423)){
args__25124__auto__.push((arguments[i__25118__auto___27424]));

var G__27425 = (i__25118__auto___27424 + (1));
i__25118__auto___27424 = G__27425;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27422))
;

route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27422){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/delete/:id",args__26956__auto__);
});})(action__26957__auto___27422))
;

route.entry.delete_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_job_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27422){
return (function (seq27421){
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27421));
});})(action__26957__auto___27422))
;
var action__26957__auto___27430 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27426 = params__26958__auto__;
var map__27426__$1 = ((((!((map__27426 == null)))?((((map__27426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27426):map__27426);
return controller.entry.get_events_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27428 = params__26958__auto__;
return controller.entry.get_events_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event",action__26957__auto___27430);

route.entry.get_events = ((function (action__26957__auto___27430){
return (function route$entry$get_events(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27431 = arguments.length;
var i__25118__auto___27432 = (0);
while(true){
if((i__25118__auto___27432 < len__25117__auto___27431)){
args__25124__auto__.push((arguments[i__25118__auto___27432]));

var G__27433 = (i__25118__auto___27432 + (1));
i__25118__auto___27432 = G__27433;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27430))
;

route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27430){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event",args__26956__auto__);
});})(action__26957__auto___27430))
;

route.entry.get_events.cljs$lang$maxFixedArity = (0);

route.entry.get_events.cljs$lang$applyTo = ((function (action__26957__auto___27430){
return (function (seq27429){
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27429));
});})(action__26957__auto___27430))
;
var action__26957__auto___27438 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27434 = params__26958__auto__;
var map__27434__$1 = ((((!((map__27434 == null)))?((((map__27434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27434):map__27434);
var page = cljs.core.get.call(null,map__27434__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_events_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27436 = params__26958__auto__;
var page = cljs.core.nth.call(null,vec__27436,(0),null);
return controller.entry.get_events_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/p/:page",action__26957__auto___27438);

route.entry.get_event_by_page = ((function (action__26957__auto___27438){
return (function route$entry$get_event_by_page(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27439 = arguments.length;
var i__25118__auto___27440 = (0);
while(true){
if((i__25118__auto___27440 < len__25117__auto___27439)){
args__25124__auto__.push((arguments[i__25118__auto___27440]));

var G__27441 = (i__25118__auto___27440 + (1));
i__25118__auto___27440 = G__27441;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27438))
;

route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27438){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/p/:page",args__26956__auto__);
});})(action__26957__auto___27438))
;

route.entry.get_event_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_event_by_page.cljs$lang$applyTo = ((function (action__26957__auto___27438){
return (function (seq27437){
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27437));
});})(action__26957__auto___27438))
;
var action__26957__auto___27446 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27442 = params__26958__auto__;
var map__27442__$1 = ((((!((map__27442 == null)))?((((map__27442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27442):map__27442);
var id = cljs.core.get.call(null,map__27442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_event_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27444 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27444,(0),null);
return controller.entry.edit_event_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/edit/:id",action__26957__auto___27446);

route.entry.edit_event_by_id = ((function (action__26957__auto___27446){
return (function route$entry$edit_event_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27447 = arguments.length;
var i__25118__auto___27448 = (0);
while(true){
if((i__25118__auto___27448 < len__25117__auto___27447)){
args__25124__auto__.push((arguments[i__25118__auto___27448]));

var G__27449 = (i__25118__auto___27448 + (1));
i__25118__auto___27448 = G__27449;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.edit_event_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27446))
;

route.entry.edit_event_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27446){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/edit/:id",args__26956__auto__);
});})(action__26957__auto___27446))
;

route.entry.edit_event_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_event_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27446){
return (function (seq27445){
return route.entry.edit_event_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27445));
});})(action__26957__auto___27446))
;
var action__26957__auto___27454 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__27450 = params__26958__auto__;
var map__27450__$1 = ((((!((map__27450 == null)))?((((map__27450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27450):map__27450);
var id = cljs.core.get.call(null,map__27450__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_event_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__27452 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__27452,(0),null);
return controller.entry.delete_event_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/delete/:id",action__26957__auto___27454);

route.entry.delete_event_by_id = ((function (action__26957__auto___27454){
return (function route$entry$delete_event_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___27455 = arguments.length;
var i__25118__auto___27456 = (0);
while(true){
if((i__25118__auto___27456 < len__25117__auto___27455)){
args__25124__auto__.push((arguments[i__25118__auto___27456]));

var G__27457 = (i__25118__auto___27456 + (1));
i__25118__auto___27456 = G__27457;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.entry.delete_event_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___27454))
;

route.entry.delete_event_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___27454){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/delete/:id",args__26956__auto__);
});})(action__26957__auto___27454))
;

route.entry.delete_event_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_event_by_id.cljs$lang$applyTo = ((function (action__26957__auto___27454){
return (function (seq27453){
return route.entry.delete_event_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27453));
});})(action__26957__auto___27454))
;

//# sourceMappingURL=entry.js.map