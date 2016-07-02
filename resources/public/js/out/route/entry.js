// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
var action__24993__auto___26407 = (function (params__24994__auto__){
if(cljs.core.map_QMARK_.call(null,params__24994__auto__)){
var map__26403 = params__24994__auto__;
var map__26403__$1 = ((((!((map__26403 == null)))?((((map__26403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403):map__26403);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24994__auto__)){
var vec__26405 = params__24994__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24993__auto___26407);

route.entry.home_page = ((function (action__24993__auto___26407){
return (function route$entry$home_page(var_args){
var args__24647__auto__ = [];
var len__24640__auto___26408 = arguments.length;
var i__24641__auto___26409 = (0);
while(true){
if((i__24641__auto___26409 < len__24640__auto___26408)){
args__24647__auto__.push((arguments[i__24641__auto___26409]));

var G__26410 = (i__24641__auto___26409 + (1));
i__24641__auto___26409 = G__26410;
continue;
} else {
}
break;
}

var argseq__24648__auto__ = ((((0) < args__24647__auto__.length))?(new cljs.core.IndexedSeq(args__24647__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24648__auto__);
});})(action__24993__auto___26407))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24993__auto___26407){
return (function (args__24992__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__24992__auto__);
});})(action__24993__auto___26407))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__24993__auto___26407){
return (function (seq26406){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26406));
});})(action__24993__auto___26407))
;
var action__24993__auto___26415 = (function (params__24994__auto__){
if(cljs.core.map_QMARK_.call(null,params__24994__auto__)){
var map__26411 = params__24994__auto__;
var map__26411__$1 = ((((!((map__26411 == null)))?((((map__26411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26411):map__26411);
var id = cljs.core.get.call(null,map__26411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24994__auto__)){
var vec__26413 = params__24994__auto__;
var id = cljs.core.nth.call(null,vec__26413,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__24993__auto___26415);

route.entry.get_story_by_id = ((function (action__24993__auto___26415){
return (function route$entry$get_story_by_id(var_args){
var args__24647__auto__ = [];
var len__24640__auto___26416 = arguments.length;
var i__24641__auto___26417 = (0);
while(true){
if((i__24641__auto___26417 < len__24640__auto___26416)){
args__24647__auto__.push((arguments[i__24641__auto___26417]));

var G__26418 = (i__24641__auto___26417 + (1));
i__24641__auto___26417 = G__26418;
continue;
} else {
}
break;
}

var argseq__24648__auto__ = ((((0) < args__24647__auto__.length))?(new cljs.core.IndexedSeq(args__24647__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24648__auto__);
});})(action__24993__auto___26415))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24993__auto___26415){
return (function (args__24992__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__24992__auto__);
});})(action__24993__auto___26415))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__24993__auto___26415){
return (function (seq26414){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26414));
});})(action__24993__auto___26415))
;
var action__24993__auto___26423 = (function (params__24994__auto__){
if(cljs.core.map_QMARK_.call(null,params__24994__auto__)){
var map__26419 = params__24994__auto__;
var map__26419__$1 = ((((!((map__26419 == null)))?((((map__26419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26419):map__26419);
var id = cljs.core.get.call(null,map__26419__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24994__auto__)){
var vec__26421 = params__24994__auto__;
var id = cljs.core.nth.call(null,vec__26421,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__24993__auto___26423);

route.entry.edit_story_by_id = ((function (action__24993__auto___26423){
return (function route$entry$edit_story_by_id(var_args){
var args__24647__auto__ = [];
var len__24640__auto___26424 = arguments.length;
var i__24641__auto___26425 = (0);
while(true){
if((i__24641__auto___26425 < len__24640__auto___26424)){
args__24647__auto__.push((arguments[i__24641__auto___26425]));

var G__26426 = (i__24641__auto___26425 + (1));
i__24641__auto___26425 = G__26426;
continue;
} else {
}
break;
}

var argseq__24648__auto__ = ((((0) < args__24647__auto__.length))?(new cljs.core.IndexedSeq(args__24647__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24648__auto__);
});})(action__24993__auto___26423))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24993__auto___26423){
return (function (args__24992__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__24992__auto__);
});})(action__24993__auto___26423))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__24993__auto___26423){
return (function (seq26422){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26422));
});})(action__24993__auto___26423))
;

//# sourceMappingURL=entry.js.map