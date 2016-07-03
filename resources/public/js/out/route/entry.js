// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25127__auto___26728 = (function (params__25128__auto__){
if(cljs.core.map_QMARK_.call(null,params__25128__auto__)){
var map__26724 = params__25128__auto__;
var map__26724__$1 = ((((!((map__26724 == null)))?((((map__26724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26724):map__26724);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25128__auto__)){
var vec__26726 = params__25128__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25127__auto___26728);

route.entry.home_page = ((function (action__25127__auto___26728){
return (function route$entry$home_page(var_args){
var args__24780__auto__ = [];
var len__24773__auto___26729 = arguments.length;
var i__24774__auto___26730 = (0);
while(true){
if((i__24774__auto___26730 < len__24773__auto___26729)){
args__24780__auto__.push((arguments[i__24774__auto___26730]));

var G__26731 = (i__24774__auto___26730 + (1));
i__24774__auto___26730 = G__26731;
continue;
} else {
}
break;
}

var argseq__24781__auto__ = ((((0) < args__24780__auto__.length))?(new cljs.core.IndexedSeq(args__24780__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24781__auto__);
});})(action__25127__auto___26728))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25127__auto___26728){
return (function (args__25126__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25126__auto__);
});})(action__25127__auto___26728))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25127__auto___26728){
return (function (seq26727){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26727));
});})(action__25127__auto___26728))
;
var action__25127__auto___26736 = (function (params__25128__auto__){
if(cljs.core.map_QMARK_.call(null,params__25128__auto__)){
var map__26732 = params__25128__auto__;
var map__26732__$1 = ((((!((map__26732 == null)))?((((map__26732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26732):map__26732);
var page = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25128__auto__)){
var vec__26734 = params__25128__auto__;
var page = cljs.core.nth.call(null,vec__26734,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__25127__auto___26736);

route.entry.get_stories_by_page = ((function (action__25127__auto___26736){
return (function route$entry$get_stories_by_page(var_args){
var args__24780__auto__ = [];
var len__24773__auto___26737 = arguments.length;
var i__24774__auto___26738 = (0);
while(true){
if((i__24774__auto___26738 < len__24773__auto___26737)){
args__24780__auto__.push((arguments[i__24774__auto___26738]));

var G__26739 = (i__24774__auto___26738 + (1));
i__24774__auto___26738 = G__26739;
continue;
} else {
}
break;
}

var argseq__24781__auto__ = ((((0) < args__24780__auto__.length))?(new cljs.core.IndexedSeq(args__24780__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24781__auto__);
});})(action__25127__auto___26736))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25127__auto___26736){
return (function (args__25126__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__25126__auto__);
});})(action__25127__auto___26736))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__25127__auto___26736){
return (function (seq26735){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26735));
});})(action__25127__auto___26736))
;
var action__25127__auto___26744 = (function (params__25128__auto__){
if(cljs.core.map_QMARK_.call(null,params__25128__auto__)){
var map__26740 = params__25128__auto__;
var map__26740__$1 = ((((!((map__26740 == null)))?((((map__26740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26740):map__26740);
var id = cljs.core.get.call(null,map__26740__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25128__auto__)){
var vec__26742 = params__25128__auto__;
var id = cljs.core.nth.call(null,vec__26742,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25127__auto___26744);

route.entry.get_story_by_id = ((function (action__25127__auto___26744){
return (function route$entry$get_story_by_id(var_args){
var args__24780__auto__ = [];
var len__24773__auto___26745 = arguments.length;
var i__24774__auto___26746 = (0);
while(true){
if((i__24774__auto___26746 < len__24773__auto___26745)){
args__24780__auto__.push((arguments[i__24774__auto___26746]));

var G__26747 = (i__24774__auto___26746 + (1));
i__24774__auto___26746 = G__26747;
continue;
} else {
}
break;
}

var argseq__24781__auto__ = ((((0) < args__24780__auto__.length))?(new cljs.core.IndexedSeq(args__24780__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24781__auto__);
});})(action__25127__auto___26744))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25127__auto___26744){
return (function (args__25126__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25126__auto__);
});})(action__25127__auto___26744))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25127__auto___26744){
return (function (seq26743){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26743));
});})(action__25127__auto___26744))
;
var action__25127__auto___26752 = (function (params__25128__auto__){
if(cljs.core.map_QMARK_.call(null,params__25128__auto__)){
var map__26748 = params__25128__auto__;
var map__26748__$1 = ((((!((map__26748 == null)))?((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var id = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25128__auto__)){
var vec__26750 = params__25128__auto__;
var id = cljs.core.nth.call(null,vec__26750,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25127__auto___26752);

route.entry.edit_story_by_id = ((function (action__25127__auto___26752){
return (function route$entry$edit_story_by_id(var_args){
var args__24780__auto__ = [];
var len__24773__auto___26753 = arguments.length;
var i__24774__auto___26754 = (0);
while(true){
if((i__24774__auto___26754 < len__24773__auto___26753)){
args__24780__auto__.push((arguments[i__24774__auto___26754]));

var G__26755 = (i__24774__auto___26754 + (1));
i__24774__auto___26754 = G__26755;
continue;
} else {
}
break;
}

var argseq__24781__auto__ = ((((0) < args__24780__auto__.length))?(new cljs.core.IndexedSeq(args__24780__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24781__auto__);
});})(action__25127__auto___26752))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25127__auto___26752){
return (function (args__25126__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25126__auto__);
});})(action__25127__auto___26752))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25127__auto___26752){
return (function (seq26751){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26751));
});})(action__25127__auto___26752))
;
var action__25127__auto___26760 = (function (params__25128__auto__){
if(cljs.core.map_QMARK_.call(null,params__25128__auto__)){
var map__26756 = params__25128__auto__;
var map__26756__$1 = ((((!((map__26756 == null)))?((((map__26756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26756):map__26756);
var id = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25128__auto__)){
var vec__26758 = params__25128__auto__;
var id = cljs.core.nth.call(null,vec__26758,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25127__auto___26760);

route.entry.delete_story_by_id = ((function (action__25127__auto___26760){
return (function route$entry$delete_story_by_id(var_args){
var args__24780__auto__ = [];
var len__24773__auto___26761 = arguments.length;
var i__24774__auto___26762 = (0);
while(true){
if((i__24774__auto___26762 < len__24773__auto___26761)){
args__24780__auto__.push((arguments[i__24774__auto___26762]));

var G__26763 = (i__24774__auto___26762 + (1));
i__24774__auto___26762 = G__26763;
continue;
} else {
}
break;
}

var argseq__24781__auto__ = ((((0) < args__24780__auto__.length))?(new cljs.core.IndexedSeq(args__24780__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24781__auto__);
});})(action__25127__auto___26760))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25127__auto___26760){
return (function (args__25126__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25126__auto__);
});})(action__25127__auto___26760))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25127__auto___26760){
return (function (seq26759){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26759));
});})(action__25127__auto___26760))
;
var action__25127__auto___26768 = (function (params__25128__auto__){
if(cljs.core.map_QMARK_.call(null,params__25128__auto__)){
var map__26764 = params__25128__auto__;
var map__26764__$1 = ((((!((map__26764 == null)))?((((map__26764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26764):map__26764);
var id = cljs.core.get.call(null,map__26764__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25128__auto__)){
var vec__26766 = params__25128__auto__;
var id = cljs.core.nth.call(null,vec__26766,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25127__auto___26768);

route.entry.get_ask_by_id = ((function (action__25127__auto___26768){
return (function route$entry$get_ask_by_id(var_args){
var args__24780__auto__ = [];
var len__24773__auto___26769 = arguments.length;
var i__24774__auto___26770 = (0);
while(true){
if((i__24774__auto___26770 < len__24773__auto___26769)){
args__24780__auto__.push((arguments[i__24774__auto___26770]));

var G__26771 = (i__24774__auto___26770 + (1));
i__24774__auto___26770 = G__26771;
continue;
} else {
}
break;
}

var argseq__24781__auto__ = ((((0) < args__24780__auto__.length))?(new cljs.core.IndexedSeq(args__24780__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24781__auto__);
});})(action__25127__auto___26768))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25127__auto___26768){
return (function (args__25126__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25126__auto__);
});})(action__25127__auto___26768))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25127__auto___26768){
return (function (seq26767){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26767));
});})(action__25127__auto___26768))
;
var action__25127__auto___26776 = (function (params__25128__auto__){
if(cljs.core.map_QMARK_.call(null,params__25128__auto__)){
var map__26772 = params__25128__auto__;
var map__26772__$1 = ((((!((map__26772 == null)))?((((map__26772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26772):map__26772);
var id = cljs.core.get.call(null,map__26772__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25128__auto__)){
var vec__26774 = params__25128__auto__;
var id = cljs.core.nth.call(null,vec__26774,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25127__auto___26776);

route.entry.edit_ask_by_id = ((function (action__25127__auto___26776){
return (function route$entry$edit_ask_by_id(var_args){
var args__24780__auto__ = [];
var len__24773__auto___26777 = arguments.length;
var i__24774__auto___26778 = (0);
while(true){
if((i__24774__auto___26778 < len__24773__auto___26777)){
args__24780__auto__.push((arguments[i__24774__auto___26778]));

var G__26779 = (i__24774__auto___26778 + (1));
i__24774__auto___26778 = G__26779;
continue;
} else {
}
break;
}

var argseq__24781__auto__ = ((((0) < args__24780__auto__.length))?(new cljs.core.IndexedSeq(args__24780__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24781__auto__);
});})(action__25127__auto___26776))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25127__auto___26776){
return (function (args__25126__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25126__auto__);
});})(action__25127__auto___26776))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25127__auto___26776){
return (function (seq26775){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26775));
});})(action__25127__auto___26776))
;
var action__25127__auto___26784 = (function (params__25128__auto__){
if(cljs.core.map_QMARK_.call(null,params__25128__auto__)){
var map__26780 = params__25128__auto__;
var map__26780__$1 = ((((!((map__26780 == null)))?((((map__26780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26780):map__26780);
var id = cljs.core.get.call(null,map__26780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25128__auto__)){
var vec__26782 = params__25128__auto__;
var id = cljs.core.nth.call(null,vec__26782,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25127__auto___26784);

route.entry.delete_ask_by_id = ((function (action__25127__auto___26784){
return (function route$entry$delete_ask_by_id(var_args){
var args__24780__auto__ = [];
var len__24773__auto___26785 = arguments.length;
var i__24774__auto___26786 = (0);
while(true){
if((i__24774__auto___26786 < len__24773__auto___26785)){
args__24780__auto__.push((arguments[i__24774__auto___26786]));

var G__26787 = (i__24774__auto___26786 + (1));
i__24774__auto___26786 = G__26787;
continue;
} else {
}
break;
}

var argseq__24781__auto__ = ((((0) < args__24780__auto__.length))?(new cljs.core.IndexedSeq(args__24780__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24781__auto__);
});})(action__25127__auto___26784))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25127__auto___26784){
return (function (args__25126__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25126__auto__);
});})(action__25127__auto___26784))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25127__auto___26784){
return (function (seq26783){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26783));
});})(action__25127__auto___26784))
;

//# sourceMappingURL=entry.js.map