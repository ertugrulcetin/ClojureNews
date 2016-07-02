// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
var action__24993__auto___26703 = (function (params__24994__auto__){
if(cljs.core.map_QMARK_.call(null,params__24994__auto__)){
var map__26699 = params__24994__auto__;
var map__26699__$1 = ((((!((map__26699 == null)))?((((map__26699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26699):map__26699);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24994__auto__)){
var vec__26701 = params__24994__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24993__auto___26703);

route.entry.home_page = ((function (action__24993__auto___26703){
return (function route$entry$home_page(var_args){
var args__24647__auto__ = [];
var len__24640__auto___26704 = arguments.length;
var i__24641__auto___26705 = (0);
while(true){
if((i__24641__auto___26705 < len__24640__auto___26704)){
args__24647__auto__.push((arguments[i__24641__auto___26705]));

var G__26706 = (i__24641__auto___26705 + (1));
i__24641__auto___26705 = G__26706;
continue;
} else {
}
break;
}

var argseq__24648__auto__ = ((((0) < args__24647__auto__.length))?(new cljs.core.IndexedSeq(args__24647__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24648__auto__);
});})(action__24993__auto___26703))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24993__auto___26703){
return (function (args__24992__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__24992__auto__);
});})(action__24993__auto___26703))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__24993__auto___26703){
return (function (seq26702){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26702));
});})(action__24993__auto___26703))
;
var action__24993__auto___26711 = (function (params__24994__auto__){
if(cljs.core.map_QMARK_.call(null,params__24994__auto__)){
var map__26707 = params__24994__auto__;
var map__26707__$1 = ((((!((map__26707 == null)))?((((map__26707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26707):map__26707);
var id = cljs.core.get.call(null,map__26707__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24994__auto__)){
var vec__26709 = params__24994__auto__;
var id = cljs.core.nth.call(null,vec__26709,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__24993__auto___26711);

route.entry.get_story_by_id = ((function (action__24993__auto___26711){
return (function route$entry$get_story_by_id(var_args){
var args__24647__auto__ = [];
var len__24640__auto___26712 = arguments.length;
var i__24641__auto___26713 = (0);
while(true){
if((i__24641__auto___26713 < len__24640__auto___26712)){
args__24647__auto__.push((arguments[i__24641__auto___26713]));

var G__26714 = (i__24641__auto___26713 + (1));
i__24641__auto___26713 = G__26714;
continue;
} else {
}
break;
}

var argseq__24648__auto__ = ((((0) < args__24647__auto__.length))?(new cljs.core.IndexedSeq(args__24647__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24648__auto__);
});})(action__24993__auto___26711))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24993__auto___26711){
return (function (args__24992__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__24992__auto__);
});})(action__24993__auto___26711))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__24993__auto___26711){
return (function (seq26710){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26710));
});})(action__24993__auto___26711))
;
var action__24993__auto___26719 = (function (params__24994__auto__){
if(cljs.core.map_QMARK_.call(null,params__24994__auto__)){
var map__26715 = params__24994__auto__;
var map__26715__$1 = ((((!((map__26715 == null)))?((((map__26715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26715):map__26715);
var id = cljs.core.get.call(null,map__26715__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24994__auto__)){
var vec__26717 = params__24994__auto__;
var id = cljs.core.nth.call(null,vec__26717,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__24993__auto___26719);

route.entry.edit_story_by_id = ((function (action__24993__auto___26719){
return (function route$entry$edit_story_by_id(var_args){
var args__24647__auto__ = [];
var len__24640__auto___26720 = arguments.length;
var i__24641__auto___26721 = (0);
while(true){
if((i__24641__auto___26721 < len__24640__auto___26720)){
args__24647__auto__.push((arguments[i__24641__auto___26721]));

var G__26722 = (i__24641__auto___26721 + (1));
i__24641__auto___26721 = G__26722;
continue;
} else {
}
break;
}

var argseq__24648__auto__ = ((((0) < args__24647__auto__.length))?(new cljs.core.IndexedSeq(args__24647__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24648__auto__);
});})(action__24993__auto___26719))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24993__auto___26719){
return (function (args__24992__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__24992__auto__);
});})(action__24993__auto___26719))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__24993__auto___26719){
return (function (seq26718){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26718));
});})(action__24993__auto___26719))
;
var action__24993__auto___26727 = (function (params__24994__auto__){
if(cljs.core.map_QMARK_.call(null,params__24994__auto__)){
var map__26723 = params__24994__auto__;
var map__26723__$1 = ((((!((map__26723 == null)))?((((map__26723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26723):map__26723);
var id = cljs.core.get.call(null,map__26723__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24994__auto__)){
var vec__26725 = params__24994__auto__;
var id = cljs.core.nth.call(null,vec__26725,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__24993__auto___26727);

route.entry.delete_story_by_id = ((function (action__24993__auto___26727){
return (function route$entry$delete_story_by_id(var_args){
var args__24647__auto__ = [];
var len__24640__auto___26728 = arguments.length;
var i__24641__auto___26729 = (0);
while(true){
if((i__24641__auto___26729 < len__24640__auto___26728)){
args__24647__auto__.push((arguments[i__24641__auto___26729]));

var G__26730 = (i__24641__auto___26729 + (1));
i__24641__auto___26729 = G__26730;
continue;
} else {
}
break;
}

var argseq__24648__auto__ = ((((0) < args__24647__auto__.length))?(new cljs.core.IndexedSeq(args__24647__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24648__auto__);
});})(action__24993__auto___26727))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24993__auto___26727){
return (function (args__24992__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__24992__auto__);
});})(action__24993__auto___26727))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__24993__auto___26727){
return (function (seq26726){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26726));
});})(action__24993__auto___26727))
;

//# sourceMappingURL=entry.js.map