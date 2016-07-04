// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25253__auto___28340 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28336 = params__25254__auto__;
var map__28336__$1 = ((((!((map__28336 == null)))?((((map__28336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28336):map__28336);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28338 = params__25254__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25253__auto___28340);

route.entry.home_page = ((function (action__25253__auto___28340){
return (function route$entry$home_page(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28341 = arguments.length;
var i__24901__auto___28342 = (0);
while(true){
if((i__24901__auto___28342 < len__24900__auto___28341)){
args__24907__auto__.push((arguments[i__24901__auto___28342]));

var G__28343 = (i__24901__auto___28342 + (1));
i__24901__auto___28342 = G__28343;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28340))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28340){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25252__auto__);
});})(action__25253__auto___28340))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25253__auto___28340){
return (function (seq28339){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28339));
});})(action__25253__auto___28340))
;
var action__25253__auto___28348 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28344 = params__25254__auto__;
var map__28344__$1 = ((((!((map__28344 == null)))?((((map__28344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28344):map__28344);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28346 = params__25254__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story",action__25253__auto___28348);

route.entry.get_stories = ((function (action__25253__auto___28348){
return (function route$entry$get_stories(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28349 = arguments.length;
var i__24901__auto___28350 = (0);
while(true){
if((i__24901__auto___28350 < len__24900__auto___28349)){
args__24907__auto__.push((arguments[i__24901__auto___28350]));

var G__28351 = (i__24901__auto___28350 + (1));
i__24901__auto___28350 = G__28351;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28348))
;

route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28348){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story",args__25252__auto__);
});})(action__25253__auto___28348))
;

route.entry.get_stories.cljs$lang$maxFixedArity = (0);

route.entry.get_stories.cljs$lang$applyTo = ((function (action__25253__auto___28348){
return (function (seq28347){
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28347));
});})(action__25253__auto___28348))
;
var action__25253__auto___28356 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28352 = params__25254__auto__;
var map__28352__$1 = ((((!((map__28352 == null)))?((((map__28352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28352):map__28352);
var id = cljs.core.get.call(null,map__28352__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28354 = params__25254__auto__;
var id = cljs.core.nth.call(null,vec__28354,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25253__auto___28356);

route.entry.get_story_by_id = ((function (action__25253__auto___28356){
return (function route$entry$get_story_by_id(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28357 = arguments.length;
var i__24901__auto___28358 = (0);
while(true){
if((i__24901__auto___28358 < len__24900__auto___28357)){
args__24907__auto__.push((arguments[i__24901__auto___28358]));

var G__28359 = (i__24901__auto___28358 + (1));
i__24901__auto___28358 = G__28359;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28356))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28356){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25252__auto__);
});})(action__25253__auto___28356))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25253__auto___28356){
return (function (seq28355){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28355));
});})(action__25253__auto___28356))
;
var action__25253__auto___28364 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28360 = params__25254__auto__;
var map__28360__$1 = ((((!((map__28360 == null)))?((((map__28360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28360):map__28360);
var page = cljs.core.get.call(null,map__28360__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28362 = params__25254__auto__;
var page = cljs.core.nth.call(null,vec__28362,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__25253__auto___28364);

route.entry.get_stories_by_page = ((function (action__25253__auto___28364){
return (function route$entry$get_stories_by_page(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28365 = arguments.length;
var i__24901__auto___28366 = (0);
while(true){
if((i__24901__auto___28366 < len__24900__auto___28365)){
args__24907__auto__.push((arguments[i__24901__auto___28366]));

var G__28367 = (i__24901__auto___28366 + (1));
i__24901__auto___28366 = G__28367;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28364))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28364){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__25252__auto__);
});})(action__25253__auto___28364))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__25253__auto___28364){
return (function (seq28363){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28363));
});})(action__25253__auto___28364))
;
var action__25253__auto___28372 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28368 = params__25254__auto__;
var map__28368__$1 = ((((!((map__28368 == null)))?((((map__28368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28368):map__28368);
var id = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28370 = params__25254__auto__;
var id = cljs.core.nth.call(null,vec__28370,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25253__auto___28372);

route.entry.edit_story_by_id = ((function (action__25253__auto___28372){
return (function route$entry$edit_story_by_id(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28373 = arguments.length;
var i__24901__auto___28374 = (0);
while(true){
if((i__24901__auto___28374 < len__24900__auto___28373)){
args__24907__auto__.push((arguments[i__24901__auto___28374]));

var G__28375 = (i__24901__auto___28374 + (1));
i__24901__auto___28374 = G__28375;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28372))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28372){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25252__auto__);
});})(action__25253__auto___28372))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25253__auto___28372){
return (function (seq28371){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28371));
});})(action__25253__auto___28372))
;
var action__25253__auto___28380 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28376 = params__25254__auto__;
var map__28376__$1 = ((((!((map__28376 == null)))?((((map__28376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28376):map__28376);
var id = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28378 = params__25254__auto__;
var id = cljs.core.nth.call(null,vec__28378,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25253__auto___28380);

route.entry.delete_story_by_id = ((function (action__25253__auto___28380){
return (function route$entry$delete_story_by_id(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28381 = arguments.length;
var i__24901__auto___28382 = (0);
while(true){
if((i__24901__auto___28382 < len__24900__auto___28381)){
args__24907__auto__.push((arguments[i__24901__auto___28382]));

var G__28383 = (i__24901__auto___28382 + (1));
i__24901__auto___28382 = G__28383;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28380))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28380){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25252__auto__);
});})(action__25253__auto___28380))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25253__auto___28380){
return (function (seq28379){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28379));
});})(action__25253__auto___28380))
;
var action__25253__auto___28388 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28384 = params__25254__auto__;
var map__28384__$1 = ((((!((map__28384 == null)))?((((map__28384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28384):map__28384);
return controller.entry.get_ask_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28386 = params__25254__auto__;
return controller.entry.get_ask_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask",action__25253__auto___28388);

route.entry.get_asks = ((function (action__25253__auto___28388){
return (function route$entry$get_asks(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28389 = arguments.length;
var i__24901__auto___28390 = (0);
while(true){
if((i__24901__auto___28390 < len__24900__auto___28389)){
args__24907__auto__.push((arguments[i__24901__auto___28390]));

var G__28391 = (i__24901__auto___28390 + (1));
i__24901__auto___28390 = G__28391;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28388))
;

route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28388){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask",args__25252__auto__);
});})(action__25253__auto___28388))
;

route.entry.get_asks.cljs$lang$maxFixedArity = (0);

route.entry.get_asks.cljs$lang$applyTo = ((function (action__25253__auto___28388){
return (function (seq28387){
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28387));
});})(action__25253__auto___28388))
;
var action__25253__auto___28396 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28392 = params__25254__auto__;
var map__28392__$1 = ((((!((map__28392 == null)))?((((map__28392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28392):map__28392);
var id = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28394 = params__25254__auto__;
var id = cljs.core.nth.call(null,vec__28394,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25253__auto___28396);

route.entry.get_ask_by_id = ((function (action__25253__auto___28396){
return (function route$entry$get_ask_by_id(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28397 = arguments.length;
var i__24901__auto___28398 = (0);
while(true){
if((i__24901__auto___28398 < len__24900__auto___28397)){
args__24907__auto__.push((arguments[i__24901__auto___28398]));

var G__28399 = (i__24901__auto___28398 + (1));
i__24901__auto___28398 = G__28399;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28396))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28396){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25252__auto__);
});})(action__25253__auto___28396))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25253__auto___28396){
return (function (seq28395){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28395));
});})(action__25253__auto___28396))
;
var action__25253__auto___28404 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28400 = params__25254__auto__;
var map__28400__$1 = ((((!((map__28400 == null)))?((((map__28400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28400):map__28400);
var page = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_ask_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28402 = params__25254__auto__;
var page = cljs.core.nth.call(null,vec__28402,(0),null);
return controller.entry.get_ask_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/p/:page",action__25253__auto___28404);

route.entry.get_ask_by_page = ((function (action__25253__auto___28404){
return (function route$entry$get_ask_by_page(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28405 = arguments.length;
var i__24901__auto___28406 = (0);
while(true){
if((i__24901__auto___28406 < len__24900__auto___28405)){
args__24907__auto__.push((arguments[i__24901__auto___28406]));

var G__28407 = (i__24901__auto___28406 + (1));
i__24901__auto___28406 = G__28407;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28404))
;

route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28404){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/p/:page",args__25252__auto__);
});})(action__25253__auto___28404))
;

route.entry.get_ask_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_page.cljs$lang$applyTo = ((function (action__25253__auto___28404){
return (function (seq28403){
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28403));
});})(action__25253__auto___28404))
;
var action__25253__auto___28412 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28408 = params__25254__auto__;
var map__28408__$1 = ((((!((map__28408 == null)))?((((map__28408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28408):map__28408);
var id = cljs.core.get.call(null,map__28408__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28410 = params__25254__auto__;
var id = cljs.core.nth.call(null,vec__28410,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25253__auto___28412);

route.entry.edit_ask_by_id = ((function (action__25253__auto___28412){
return (function route$entry$edit_ask_by_id(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28413 = arguments.length;
var i__24901__auto___28414 = (0);
while(true){
if((i__24901__auto___28414 < len__24900__auto___28413)){
args__24907__auto__.push((arguments[i__24901__auto___28414]));

var G__28415 = (i__24901__auto___28414 + (1));
i__24901__auto___28414 = G__28415;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28412))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28412){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25252__auto__);
});})(action__25253__auto___28412))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25253__auto___28412){
return (function (seq28411){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28411));
});})(action__25253__auto___28412))
;
var action__25253__auto___28420 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28416 = params__25254__auto__;
var map__28416__$1 = ((((!((map__28416 == null)))?((((map__28416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28416):map__28416);
var id = cljs.core.get.call(null,map__28416__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28418 = params__25254__auto__;
var id = cljs.core.nth.call(null,vec__28418,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25253__auto___28420);

route.entry.delete_ask_by_id = ((function (action__25253__auto___28420){
return (function route$entry$delete_ask_by_id(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28421 = arguments.length;
var i__24901__auto___28422 = (0);
while(true){
if((i__24901__auto___28422 < len__24900__auto___28421)){
args__24907__auto__.push((arguments[i__24901__auto___28422]));

var G__28423 = (i__24901__auto___28422 + (1));
i__24901__auto___28422 = G__28423;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28420))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28420){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25252__auto__);
});})(action__25253__auto___28420))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25253__auto___28420){
return (function (seq28419){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28419));
});})(action__25253__auto___28420))
;
var action__25253__auto___28428 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28424 = params__25254__auto__;
var map__28424__$1 = ((((!((map__28424 == null)))?((((map__28424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28424):map__28424);
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28426 = params__25254__auto__;
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs",action__25253__auto___28428);

route.entry.get_jobs = ((function (action__25253__auto___28428){
return (function route$entry$get_jobs(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28429 = arguments.length;
var i__24901__auto___28430 = (0);
while(true){
if((i__24901__auto___28430 < len__24900__auto___28429)){
args__24907__auto__.push((arguments[i__24901__auto___28430]));

var G__28431 = (i__24901__auto___28430 + (1));
i__24901__auto___28430 = G__28431;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28428))
;

route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28428){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs",args__25252__auto__);
});})(action__25253__auto___28428))
;

route.entry.get_jobs.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs.cljs$lang$applyTo = ((function (action__25253__auto___28428){
return (function (seq28427){
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28427));
});})(action__25253__auto___28428))
;
var action__25253__auto___28436 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28432 = params__25254__auto__;
var map__28432__$1 = ((((!((map__28432 == null)))?((((map__28432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28432):map__28432);
var page = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_jobs_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28434 = params__25254__auto__;
var page = cljs.core.nth.call(null,vec__28434,(0),null);
return controller.entry.get_jobs_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/p/:page",action__25253__auto___28436);

route.entry.get_jobs_by_page = ((function (action__25253__auto___28436){
return (function route$entry$get_jobs_by_page(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28437 = arguments.length;
var i__24901__auto___28438 = (0);
while(true){
if((i__24901__auto___28438 < len__24900__auto___28437)){
args__24907__auto__.push((arguments[i__24901__auto___28438]));

var G__28439 = (i__24901__auto___28438 + (1));
i__24901__auto___28438 = G__28439;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28436))
;

route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28436){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/p/:page",args__25252__auto__);
});})(action__25253__auto___28436))
;

route.entry.get_jobs_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs_by_page.cljs$lang$applyTo = ((function (action__25253__auto___28436){
return (function (seq28435){
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28435));
});})(action__25253__auto___28436))
;
var action__25253__auto___28444 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28440 = params__25254__auto__;
var map__28440__$1 = ((((!((map__28440 == null)))?((((map__28440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28440):map__28440);
var id = cljs.core.get.call(null,map__28440__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28442 = params__25254__auto__;
var id = cljs.core.nth.call(null,vec__28442,(0),null);
return controller.entry.edit_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/edit/:id",action__25253__auto___28444);

route.entry.edit_job_by_id = ((function (action__25253__auto___28444){
return (function route$entry$edit_job_by_id(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28445 = arguments.length;
var i__24901__auto___28446 = (0);
while(true){
if((i__24901__auto___28446 < len__24900__auto___28445)){
args__24907__auto__.push((arguments[i__24901__auto___28446]));

var G__28447 = (i__24901__auto___28446 + (1));
i__24901__auto___28446 = G__28447;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28444))
;

route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28444){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/edit/:id",args__25252__auto__);
});})(action__25253__auto___28444))
;

route.entry.edit_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_job_by_id.cljs$lang$applyTo = ((function (action__25253__auto___28444){
return (function (seq28443){
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28443));
});})(action__25253__auto___28444))
;
var action__25253__auto___28452 = (function (params__25254__auto__){
if(cljs.core.map_QMARK_.call(null,params__25254__auto__)){
var map__28448 = params__25254__auto__;
var map__28448__$1 = ((((!((map__28448 == null)))?((((map__28448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28448):map__28448);
var id = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25254__auto__)){
var vec__28450 = params__25254__auto__;
var id = cljs.core.nth.call(null,vec__28450,(0),null);
return controller.entry.delete_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/delete/:id",action__25253__auto___28452);

route.entry.delete_job_by_id = ((function (action__25253__auto___28452){
return (function route$entry$delete_job_by_id(var_args){
var args__24907__auto__ = [];
var len__24900__auto___28453 = arguments.length;
var i__24901__auto___28454 = (0);
while(true){
if((i__24901__auto___28454 < len__24900__auto___28453)){
args__24907__auto__.push((arguments[i__24901__auto___28454]));

var G__28455 = (i__24901__auto___28454 + (1));
i__24901__auto___28454 = G__28455;
continue;
} else {
}
break;
}

var argseq__24908__auto__ = ((((0) < args__24907__auto__.length))?(new cljs.core.IndexedSeq(args__24907__auto__.slice((0)),(0),null)):null);
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24908__auto__);
});})(action__25253__auto___28452))
;

route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25253__auto___28452){
return (function (args__25252__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/delete/:id",args__25252__auto__);
});})(action__25253__auto___28452))
;

route.entry.delete_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_job_by_id.cljs$lang$applyTo = ((function (action__25253__auto___28452){
return (function (seq28451){
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28451));
});})(action__25253__auto___28452))
;

//# sourceMappingURL=entry.js.map