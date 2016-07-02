// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25091__auto___26336 = (function (params__25092__auto__){
if(cljs.core.map_QMARK_.call(null,params__25092__auto__)){
var map__26332 = params__25092__auto__;
var map__26332__$1 = ((((!((map__26332 == null)))?((((map__26332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25092__auto__)){
var vec__26334 = params__25092__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25091__auto___26336);

route.entry.home_page = ((function (action__25091__auto___26336){
return (function route$entry$home_page(var_args){
var args__24744__auto__ = [];
var len__24737__auto___26337 = arguments.length;
var i__24738__auto___26338 = (0);
while(true){
if((i__24738__auto___26338 < len__24737__auto___26337)){
args__24744__auto__.push((arguments[i__24738__auto___26338]));

var G__26339 = (i__24738__auto___26338 + (1));
i__24738__auto___26338 = G__26339;
continue;
} else {
}
break;
}

var argseq__24745__auto__ = ((((0) < args__24744__auto__.length))?(new cljs.core.IndexedSeq(args__24744__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24745__auto__);
});})(action__25091__auto___26336))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25091__auto___26336){
return (function (args__25090__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25090__auto__);
});})(action__25091__auto___26336))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25091__auto___26336){
return (function (seq26335){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26335));
});})(action__25091__auto___26336))
;
var action__25091__auto___26344 = (function (params__25092__auto__){
if(cljs.core.map_QMARK_.call(null,params__25092__auto__)){
var map__26340 = params__25092__auto__;
var map__26340__$1 = ((((!((map__26340 == null)))?((((map__26340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26340):map__26340);
var id = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25092__auto__)){
var vec__26342 = params__25092__auto__;
var id = cljs.core.nth.call(null,vec__26342,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25091__auto___26344);

route.entry.get_story_by_id = ((function (action__25091__auto___26344){
return (function route$entry$get_story_by_id(var_args){
var args__24744__auto__ = [];
var len__24737__auto___26345 = arguments.length;
var i__24738__auto___26346 = (0);
while(true){
if((i__24738__auto___26346 < len__24737__auto___26345)){
args__24744__auto__.push((arguments[i__24738__auto___26346]));

var G__26347 = (i__24738__auto___26346 + (1));
i__24738__auto___26346 = G__26347;
continue;
} else {
}
break;
}

var argseq__24745__auto__ = ((((0) < args__24744__auto__.length))?(new cljs.core.IndexedSeq(args__24744__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24745__auto__);
});})(action__25091__auto___26344))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25091__auto___26344){
return (function (args__25090__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25090__auto__);
});})(action__25091__auto___26344))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25091__auto___26344){
return (function (seq26343){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26343));
});})(action__25091__auto___26344))
;
var action__25091__auto___26352 = (function (params__25092__auto__){
if(cljs.core.map_QMARK_.call(null,params__25092__auto__)){
var map__26348 = params__25092__auto__;
var map__26348__$1 = ((((!((map__26348 == null)))?((((map__26348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26348):map__26348);
var id = cljs.core.get.call(null,map__26348__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25092__auto__)){
var vec__26350 = params__25092__auto__;
var id = cljs.core.nth.call(null,vec__26350,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25091__auto___26352);

route.entry.edit_story_by_id = ((function (action__25091__auto___26352){
return (function route$entry$edit_story_by_id(var_args){
var args__24744__auto__ = [];
var len__24737__auto___26353 = arguments.length;
var i__24738__auto___26354 = (0);
while(true){
if((i__24738__auto___26354 < len__24737__auto___26353)){
args__24744__auto__.push((arguments[i__24738__auto___26354]));

var G__26355 = (i__24738__auto___26354 + (1));
i__24738__auto___26354 = G__26355;
continue;
} else {
}
break;
}

var argseq__24745__auto__ = ((((0) < args__24744__auto__.length))?(new cljs.core.IndexedSeq(args__24744__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24745__auto__);
});})(action__25091__auto___26352))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25091__auto___26352){
return (function (args__25090__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25090__auto__);
});})(action__25091__auto___26352))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25091__auto___26352){
return (function (seq26351){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26351));
});})(action__25091__auto___26352))
;
var action__25091__auto___26360 = (function (params__25092__auto__){
if(cljs.core.map_QMARK_.call(null,params__25092__auto__)){
var map__26356 = params__25092__auto__;
var map__26356__$1 = ((((!((map__26356 == null)))?((((map__26356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26356):map__26356);
var id = cljs.core.get.call(null,map__26356__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25092__auto__)){
var vec__26358 = params__25092__auto__;
var id = cljs.core.nth.call(null,vec__26358,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25091__auto___26360);

route.entry.delete_story_by_id = ((function (action__25091__auto___26360){
return (function route$entry$delete_story_by_id(var_args){
var args__24744__auto__ = [];
var len__24737__auto___26361 = arguments.length;
var i__24738__auto___26362 = (0);
while(true){
if((i__24738__auto___26362 < len__24737__auto___26361)){
args__24744__auto__.push((arguments[i__24738__auto___26362]));

var G__26363 = (i__24738__auto___26362 + (1));
i__24738__auto___26362 = G__26363;
continue;
} else {
}
break;
}

var argseq__24745__auto__ = ((((0) < args__24744__auto__.length))?(new cljs.core.IndexedSeq(args__24744__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24745__auto__);
});})(action__25091__auto___26360))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25091__auto___26360){
return (function (args__25090__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25090__auto__);
});})(action__25091__auto___26360))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25091__auto___26360){
return (function (seq26359){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26359));
});})(action__25091__auto___26360))
;
var action__25091__auto___26368 = (function (params__25092__auto__){
if(cljs.core.map_QMARK_.call(null,params__25092__auto__)){
var map__26364 = params__25092__auto__;
var map__26364__$1 = ((((!((map__26364 == null)))?((((map__26364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26364):map__26364);
var id = cljs.core.get.call(null,map__26364__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25092__auto__)){
var vec__26366 = params__25092__auto__;
var id = cljs.core.nth.call(null,vec__26366,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25091__auto___26368);

route.entry.get_ask_by_id = ((function (action__25091__auto___26368){
return (function route$entry$get_ask_by_id(var_args){
var args__24744__auto__ = [];
var len__24737__auto___26369 = arguments.length;
var i__24738__auto___26370 = (0);
while(true){
if((i__24738__auto___26370 < len__24737__auto___26369)){
args__24744__auto__.push((arguments[i__24738__auto___26370]));

var G__26371 = (i__24738__auto___26370 + (1));
i__24738__auto___26370 = G__26371;
continue;
} else {
}
break;
}

var argseq__24745__auto__ = ((((0) < args__24744__auto__.length))?(new cljs.core.IndexedSeq(args__24744__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24745__auto__);
});})(action__25091__auto___26368))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25091__auto___26368){
return (function (args__25090__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25090__auto__);
});})(action__25091__auto___26368))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25091__auto___26368){
return (function (seq26367){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26367));
});})(action__25091__auto___26368))
;
var action__25091__auto___26376 = (function (params__25092__auto__){
if(cljs.core.map_QMARK_.call(null,params__25092__auto__)){
var map__26372 = params__25092__auto__;
var map__26372__$1 = ((((!((map__26372 == null)))?((((map__26372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26372):map__26372);
var id = cljs.core.get.call(null,map__26372__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25092__auto__)){
var vec__26374 = params__25092__auto__;
var id = cljs.core.nth.call(null,vec__26374,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25091__auto___26376);

route.entry.edit_ask_by_id = ((function (action__25091__auto___26376){
return (function route$entry$edit_ask_by_id(var_args){
var args__24744__auto__ = [];
var len__24737__auto___26377 = arguments.length;
var i__24738__auto___26378 = (0);
while(true){
if((i__24738__auto___26378 < len__24737__auto___26377)){
args__24744__auto__.push((arguments[i__24738__auto___26378]));

var G__26379 = (i__24738__auto___26378 + (1));
i__24738__auto___26378 = G__26379;
continue;
} else {
}
break;
}

var argseq__24745__auto__ = ((((0) < args__24744__auto__.length))?(new cljs.core.IndexedSeq(args__24744__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24745__auto__);
});})(action__25091__auto___26376))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25091__auto___26376){
return (function (args__25090__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25090__auto__);
});})(action__25091__auto___26376))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25091__auto___26376){
return (function (seq26375){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26375));
});})(action__25091__auto___26376))
;
var action__25091__auto___26384 = (function (params__25092__auto__){
if(cljs.core.map_QMARK_.call(null,params__25092__auto__)){
var map__26380 = params__25092__auto__;
var map__26380__$1 = ((((!((map__26380 == null)))?((((map__26380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26380):map__26380);
var id = cljs.core.get.call(null,map__26380__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25092__auto__)){
var vec__26382 = params__25092__auto__;
var id = cljs.core.nth.call(null,vec__26382,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25091__auto___26384);

route.entry.delete_ask_by_id = ((function (action__25091__auto___26384){
return (function route$entry$delete_ask_by_id(var_args){
var args__24744__auto__ = [];
var len__24737__auto___26385 = arguments.length;
var i__24738__auto___26386 = (0);
while(true){
if((i__24738__auto___26386 < len__24737__auto___26385)){
args__24744__auto__.push((arguments[i__24738__auto___26386]));

var G__26387 = (i__24738__auto___26386 + (1));
i__24738__auto___26386 = G__26387;
continue;
} else {
}
break;
}

var argseq__24745__auto__ = ((((0) < args__24744__auto__.length))?(new cljs.core.IndexedSeq(args__24744__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24745__auto__);
});})(action__25091__auto___26384))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25091__auto___26384){
return (function (args__25090__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25090__auto__);
});})(action__25091__auto___26384))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25091__auto___26384){
return (function (seq26383){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26383));
});})(action__25091__auto___26384))
;

//# sourceMappingURL=entry.js.map