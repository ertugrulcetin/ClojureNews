// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25142__auto___26401 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26397 = params__25143__auto__;
var map__26397__$1 = ((((!((map__26397 == null)))?((((map__26397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26397):map__26397);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26399 = params__25143__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25142__auto___26401);

route.entry.home_page = ((function (action__25142__auto___26401){
return (function route$entry$home_page(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26402 = arguments.length;
var i__24790__auto___26403 = (0);
while(true){
if((i__24790__auto___26403 < len__24789__auto___26402)){
args__24796__auto__.push((arguments[i__24790__auto___26403]));

var G__26404 = (i__24790__auto___26403 + (1));
i__24790__auto___26403 = G__26404;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26401))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26401){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25141__auto__);
});})(action__25142__auto___26401))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25142__auto___26401){
return (function (seq26400){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26400));
});})(action__25142__auto___26401))
;
var action__25142__auto___26409 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26405 = params__25143__auto__;
var map__26405__$1 = ((((!((map__26405 == null)))?((((map__26405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26405):map__26405);
var id = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26407 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26407,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25142__auto___26409);

route.entry.get_story_by_id = ((function (action__25142__auto___26409){
return (function route$entry$get_story_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26410 = arguments.length;
var i__24790__auto___26411 = (0);
while(true){
if((i__24790__auto___26411 < len__24789__auto___26410)){
args__24796__auto__.push((arguments[i__24790__auto___26411]));

var G__26412 = (i__24790__auto___26411 + (1));
i__24790__auto___26411 = G__26412;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26409))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26409){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25141__auto__);
});})(action__25142__auto___26409))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26409){
return (function (seq26408){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26408));
});})(action__25142__auto___26409))
;
var action__25142__auto___26417 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26413 = params__25143__auto__;
var map__26413__$1 = ((((!((map__26413 == null)))?((((map__26413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26413):map__26413);
var page = cljs.core.get.call(null,map__26413__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26415 = params__25143__auto__;
var page = cljs.core.nth.call(null,vec__26415,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__25142__auto___26417);

route.entry.get_stories_by_page = ((function (action__25142__auto___26417){
return (function route$entry$get_stories_by_page(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26418 = arguments.length;
var i__24790__auto___26419 = (0);
while(true){
if((i__24790__auto___26419 < len__24789__auto___26418)){
args__24796__auto__.push((arguments[i__24790__auto___26419]));

var G__26420 = (i__24790__auto___26419 + (1));
i__24790__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26417))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26417){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__25141__auto__);
});})(action__25142__auto___26417))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__25142__auto___26417){
return (function (seq26416){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26416));
});})(action__25142__auto___26417))
;
var action__25142__auto___26425 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26421 = params__25143__auto__;
var map__26421__$1 = ((((!((map__26421 == null)))?((((map__26421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26421):map__26421);
var id = cljs.core.get.call(null,map__26421__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26423 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26423,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25142__auto___26425);

route.entry.edit_story_by_id = ((function (action__25142__auto___26425){
return (function route$entry$edit_story_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26426 = arguments.length;
var i__24790__auto___26427 = (0);
while(true){
if((i__24790__auto___26427 < len__24789__auto___26426)){
args__24796__auto__.push((arguments[i__24790__auto___26427]));

var G__26428 = (i__24790__auto___26427 + (1));
i__24790__auto___26427 = G__26428;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26425))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26425){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25141__auto__);
});})(action__25142__auto___26425))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26425){
return (function (seq26424){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26424));
});})(action__25142__auto___26425))
;
var action__25142__auto___26433 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26429 = params__25143__auto__;
var map__26429__$1 = ((((!((map__26429 == null)))?((((map__26429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);
var id = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26431 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26431,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25142__auto___26433);

route.entry.delete_story_by_id = ((function (action__25142__auto___26433){
return (function route$entry$delete_story_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26434 = arguments.length;
var i__24790__auto___26435 = (0);
while(true){
if((i__24790__auto___26435 < len__24789__auto___26434)){
args__24796__auto__.push((arguments[i__24790__auto___26435]));

var G__26436 = (i__24790__auto___26435 + (1));
i__24790__auto___26435 = G__26436;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26433))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26433){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25141__auto__);
});})(action__25142__auto___26433))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26433){
return (function (seq26432){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26432));
});})(action__25142__auto___26433))
;
var action__25142__auto___26441 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26437 = params__25143__auto__;
var map__26437__$1 = ((((!((map__26437 == null)))?((((map__26437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26437):map__26437);
var id = cljs.core.get.call(null,map__26437__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26439 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26439,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25142__auto___26441);

route.entry.get_ask_by_id = ((function (action__25142__auto___26441){
return (function route$entry$get_ask_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26442 = arguments.length;
var i__24790__auto___26443 = (0);
while(true){
if((i__24790__auto___26443 < len__24789__auto___26442)){
args__24796__auto__.push((arguments[i__24790__auto___26443]));

var G__26444 = (i__24790__auto___26443 + (1));
i__24790__auto___26443 = G__26444;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26441))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26441){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25141__auto__);
});})(action__25142__auto___26441))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26441){
return (function (seq26440){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26440));
});})(action__25142__auto___26441))
;
var action__25142__auto___26449 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26445 = params__25143__auto__;
var map__26445__$1 = ((((!((map__26445 == null)))?((((map__26445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26445):map__26445);
var page = cljs.core.get.call(null,map__26445__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_ask_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26447 = params__25143__auto__;
var page = cljs.core.nth.call(null,vec__26447,(0),null);
return controller.entry.get_ask_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/p/:page",action__25142__auto___26449);

route.entry.get_ask_by_page = ((function (action__25142__auto___26449){
return (function route$entry$get_ask_by_page(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26450 = arguments.length;
var i__24790__auto___26451 = (0);
while(true){
if((i__24790__auto___26451 < len__24789__auto___26450)){
args__24796__auto__.push((arguments[i__24790__auto___26451]));

var G__26452 = (i__24790__auto___26451 + (1));
i__24790__auto___26451 = G__26452;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26449))
;

route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26449){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/p/:page",args__25141__auto__);
});})(action__25142__auto___26449))
;

route.entry.get_ask_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_page.cljs$lang$applyTo = ((function (action__25142__auto___26449){
return (function (seq26448){
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26448));
});})(action__25142__auto___26449))
;
var action__25142__auto___26457 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26453 = params__25143__auto__;
var map__26453__$1 = ((((!((map__26453 == null)))?((((map__26453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26453):map__26453);
var id = cljs.core.get.call(null,map__26453__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26455 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26455,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25142__auto___26457);

route.entry.edit_ask_by_id = ((function (action__25142__auto___26457){
return (function route$entry$edit_ask_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26458 = arguments.length;
var i__24790__auto___26459 = (0);
while(true){
if((i__24790__auto___26459 < len__24789__auto___26458)){
args__24796__auto__.push((arguments[i__24790__auto___26459]));

var G__26460 = (i__24790__auto___26459 + (1));
i__24790__auto___26459 = G__26460;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26457))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26457){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25141__auto__);
});})(action__25142__auto___26457))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26457){
return (function (seq26456){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26456));
});})(action__25142__auto___26457))
;
var action__25142__auto___26465 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26461 = params__25143__auto__;
var map__26461__$1 = ((((!((map__26461 == null)))?((((map__26461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26461):map__26461);
var id = cljs.core.get.call(null,map__26461__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26463 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26463,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25142__auto___26465);

route.entry.delete_ask_by_id = ((function (action__25142__auto___26465){
return (function route$entry$delete_ask_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26466 = arguments.length;
var i__24790__auto___26467 = (0);
while(true){
if((i__24790__auto___26467 < len__24789__auto___26466)){
args__24796__auto__.push((arguments[i__24790__auto___26467]));

var G__26468 = (i__24790__auto___26467 + (1));
i__24790__auto___26467 = G__26468;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26465))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26465){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25141__auto__);
});})(action__25142__auto___26465))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26465){
return (function (seq26464){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26464));
});})(action__25142__auto___26465))
;

//# sourceMappingURL=entry.js.map