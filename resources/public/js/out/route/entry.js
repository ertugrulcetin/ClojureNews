// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25387__auto___33638 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33634 = params__25388__auto__;
var map__33634__$1 = ((((!((map__33634 == null)))?((((map__33634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33634):map__33634);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33636 = params__25388__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25387__auto___33638);

route.entry.home_page = ((function (action__25387__auto___33638){
return (function route$entry$home_page(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33639 = arguments.length;
var i__25002__auto___33640 = (0);
while(true){
if((i__25002__auto___33640 < len__25001__auto___33639)){
args__25008__auto__.push((arguments[i__25002__auto___33640]));

var G__33641 = (i__25002__auto___33640 + (1));
i__25002__auto___33640 = G__33641;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33638))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33638){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25386__auto__);
});})(action__25387__auto___33638))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25387__auto___33638){
return (function (seq33637){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33637));
});})(action__25387__auto___33638))
;
var action__25387__auto___33646 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33642 = params__25388__auto__;
var map__33642__$1 = ((((!((map__33642 == null)))?((((map__33642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33642):map__33642);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33644 = params__25388__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story",action__25387__auto___33646);

route.entry.get_stories = ((function (action__25387__auto___33646){
return (function route$entry$get_stories(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33647 = arguments.length;
var i__25002__auto___33648 = (0);
while(true){
if((i__25002__auto___33648 < len__25001__auto___33647)){
args__25008__auto__.push((arguments[i__25002__auto___33648]));

var G__33649 = (i__25002__auto___33648 + (1));
i__25002__auto___33648 = G__33649;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33646))
;

route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33646){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story",args__25386__auto__);
});})(action__25387__auto___33646))
;

route.entry.get_stories.cljs$lang$maxFixedArity = (0);

route.entry.get_stories.cljs$lang$applyTo = ((function (action__25387__auto___33646){
return (function (seq33645){
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33645));
});})(action__25387__auto___33646))
;
var action__25387__auto___33654 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33650 = params__25388__auto__;
var map__33650__$1 = ((((!((map__33650 == null)))?((((map__33650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33650):map__33650);
var id = cljs.core.get.call(null,map__33650__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33652 = params__25388__auto__;
var id = cljs.core.nth.call(null,vec__33652,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25387__auto___33654);

route.entry.get_story_by_id = ((function (action__25387__auto___33654){
return (function route$entry$get_story_by_id(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33655 = arguments.length;
var i__25002__auto___33656 = (0);
while(true){
if((i__25002__auto___33656 < len__25001__auto___33655)){
args__25008__auto__.push((arguments[i__25002__auto___33656]));

var G__33657 = (i__25002__auto___33656 + (1));
i__25002__auto___33656 = G__33657;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33654))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33654){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25386__auto__);
});})(action__25387__auto___33654))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25387__auto___33654){
return (function (seq33653){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33653));
});})(action__25387__auto___33654))
;
var action__25387__auto___33662 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33658 = params__25388__auto__;
var map__33658__$1 = ((((!((map__33658 == null)))?((((map__33658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33658):map__33658);
var page = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33660 = params__25388__auto__;
var page = cljs.core.nth.call(null,vec__33660,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__25387__auto___33662);

route.entry.get_stories_by_page = ((function (action__25387__auto___33662){
return (function route$entry$get_stories_by_page(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33663 = arguments.length;
var i__25002__auto___33664 = (0);
while(true){
if((i__25002__auto___33664 < len__25001__auto___33663)){
args__25008__auto__.push((arguments[i__25002__auto___33664]));

var G__33665 = (i__25002__auto___33664 + (1));
i__25002__auto___33664 = G__33665;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33662))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33662){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__25386__auto__);
});})(action__25387__auto___33662))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__25387__auto___33662){
return (function (seq33661){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33661));
});})(action__25387__auto___33662))
;
var action__25387__auto___33670 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33666 = params__25388__auto__;
var map__33666__$1 = ((((!((map__33666 == null)))?((((map__33666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33666):map__33666);
var id = cljs.core.get.call(null,map__33666__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33668 = params__25388__auto__;
var id = cljs.core.nth.call(null,vec__33668,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25387__auto___33670);

route.entry.edit_story_by_id = ((function (action__25387__auto___33670){
return (function route$entry$edit_story_by_id(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33671 = arguments.length;
var i__25002__auto___33672 = (0);
while(true){
if((i__25002__auto___33672 < len__25001__auto___33671)){
args__25008__auto__.push((arguments[i__25002__auto___33672]));

var G__33673 = (i__25002__auto___33672 + (1));
i__25002__auto___33672 = G__33673;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33670))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33670){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25386__auto__);
});})(action__25387__auto___33670))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25387__auto___33670){
return (function (seq33669){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33669));
});})(action__25387__auto___33670))
;
var action__25387__auto___33678 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33674 = params__25388__auto__;
var map__33674__$1 = ((((!((map__33674 == null)))?((((map__33674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33674):map__33674);
var id = cljs.core.get.call(null,map__33674__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33676 = params__25388__auto__;
var id = cljs.core.nth.call(null,vec__33676,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25387__auto___33678);

route.entry.delete_story_by_id = ((function (action__25387__auto___33678){
return (function route$entry$delete_story_by_id(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33679 = arguments.length;
var i__25002__auto___33680 = (0);
while(true){
if((i__25002__auto___33680 < len__25001__auto___33679)){
args__25008__auto__.push((arguments[i__25002__auto___33680]));

var G__33681 = (i__25002__auto___33680 + (1));
i__25002__auto___33680 = G__33681;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33678))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33678){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25386__auto__);
});})(action__25387__auto___33678))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25387__auto___33678){
return (function (seq33677){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33677));
});})(action__25387__auto___33678))
;
var action__25387__auto___33686 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33682 = params__25388__auto__;
var map__33682__$1 = ((((!((map__33682 == null)))?((((map__33682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33682):map__33682);
return controller.entry.get_ask_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33684 = params__25388__auto__;
return controller.entry.get_ask_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask",action__25387__auto___33686);

route.entry.get_asks = ((function (action__25387__auto___33686){
return (function route$entry$get_asks(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33687 = arguments.length;
var i__25002__auto___33688 = (0);
while(true){
if((i__25002__auto___33688 < len__25001__auto___33687)){
args__25008__auto__.push((arguments[i__25002__auto___33688]));

var G__33689 = (i__25002__auto___33688 + (1));
i__25002__auto___33688 = G__33689;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33686))
;

route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33686){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask",args__25386__auto__);
});})(action__25387__auto___33686))
;

route.entry.get_asks.cljs$lang$maxFixedArity = (0);

route.entry.get_asks.cljs$lang$applyTo = ((function (action__25387__auto___33686){
return (function (seq33685){
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33685));
});})(action__25387__auto___33686))
;
var action__25387__auto___33694 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33690 = params__25388__auto__;
var map__33690__$1 = ((((!((map__33690 == null)))?((((map__33690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33690):map__33690);
var id = cljs.core.get.call(null,map__33690__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33692 = params__25388__auto__;
var id = cljs.core.nth.call(null,vec__33692,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25387__auto___33694);

route.entry.get_ask_by_id = ((function (action__25387__auto___33694){
return (function route$entry$get_ask_by_id(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33695 = arguments.length;
var i__25002__auto___33696 = (0);
while(true){
if((i__25002__auto___33696 < len__25001__auto___33695)){
args__25008__auto__.push((arguments[i__25002__auto___33696]));

var G__33697 = (i__25002__auto___33696 + (1));
i__25002__auto___33696 = G__33697;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33694))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33694){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25386__auto__);
});})(action__25387__auto___33694))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25387__auto___33694){
return (function (seq33693){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33693));
});})(action__25387__auto___33694))
;
var action__25387__auto___33702 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33698 = params__25388__auto__;
var map__33698__$1 = ((((!((map__33698 == null)))?((((map__33698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33698):map__33698);
var page = cljs.core.get.call(null,map__33698__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_ask_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33700 = params__25388__auto__;
var page = cljs.core.nth.call(null,vec__33700,(0),null);
return controller.entry.get_ask_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/p/:page",action__25387__auto___33702);

route.entry.get_ask_by_page = ((function (action__25387__auto___33702){
return (function route$entry$get_ask_by_page(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33703 = arguments.length;
var i__25002__auto___33704 = (0);
while(true){
if((i__25002__auto___33704 < len__25001__auto___33703)){
args__25008__auto__.push((arguments[i__25002__auto___33704]));

var G__33705 = (i__25002__auto___33704 + (1));
i__25002__auto___33704 = G__33705;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33702))
;

route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33702){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/p/:page",args__25386__auto__);
});})(action__25387__auto___33702))
;

route.entry.get_ask_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_page.cljs$lang$applyTo = ((function (action__25387__auto___33702){
return (function (seq33701){
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33701));
});})(action__25387__auto___33702))
;
var action__25387__auto___33710 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33706 = params__25388__auto__;
var map__33706__$1 = ((((!((map__33706 == null)))?((((map__33706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33706):map__33706);
var id = cljs.core.get.call(null,map__33706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33708 = params__25388__auto__;
var id = cljs.core.nth.call(null,vec__33708,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25387__auto___33710);

route.entry.edit_ask_by_id = ((function (action__25387__auto___33710){
return (function route$entry$edit_ask_by_id(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33711 = arguments.length;
var i__25002__auto___33712 = (0);
while(true){
if((i__25002__auto___33712 < len__25001__auto___33711)){
args__25008__auto__.push((arguments[i__25002__auto___33712]));

var G__33713 = (i__25002__auto___33712 + (1));
i__25002__auto___33712 = G__33713;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33710))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33710){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25386__auto__);
});})(action__25387__auto___33710))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25387__auto___33710){
return (function (seq33709){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33709));
});})(action__25387__auto___33710))
;
var action__25387__auto___33718 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33714 = params__25388__auto__;
var map__33714__$1 = ((((!((map__33714 == null)))?((((map__33714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33714):map__33714);
var id = cljs.core.get.call(null,map__33714__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33716 = params__25388__auto__;
var id = cljs.core.nth.call(null,vec__33716,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25387__auto___33718);

route.entry.delete_ask_by_id = ((function (action__25387__auto___33718){
return (function route$entry$delete_ask_by_id(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33719 = arguments.length;
var i__25002__auto___33720 = (0);
while(true){
if((i__25002__auto___33720 < len__25001__auto___33719)){
args__25008__auto__.push((arguments[i__25002__auto___33720]));

var G__33721 = (i__25002__auto___33720 + (1));
i__25002__auto___33720 = G__33721;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33718))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33718){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25386__auto__);
});})(action__25387__auto___33718))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25387__auto___33718){
return (function (seq33717){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33717));
});})(action__25387__auto___33718))
;
var action__25387__auto___33726 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33722 = params__25388__auto__;
var map__33722__$1 = ((((!((map__33722 == null)))?((((map__33722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33722):map__33722);
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33724 = params__25388__auto__;
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs",action__25387__auto___33726);

route.entry.get_jobs = ((function (action__25387__auto___33726){
return (function route$entry$get_jobs(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33727 = arguments.length;
var i__25002__auto___33728 = (0);
while(true){
if((i__25002__auto___33728 < len__25001__auto___33727)){
args__25008__auto__.push((arguments[i__25002__auto___33728]));

var G__33729 = (i__25002__auto___33728 + (1));
i__25002__auto___33728 = G__33729;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33726))
;

route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33726){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs",args__25386__auto__);
});})(action__25387__auto___33726))
;

route.entry.get_jobs.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs.cljs$lang$applyTo = ((function (action__25387__auto___33726){
return (function (seq33725){
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33725));
});})(action__25387__auto___33726))
;
var action__25387__auto___33734 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33730 = params__25388__auto__;
var map__33730__$1 = ((((!((map__33730 == null)))?((((map__33730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33730):map__33730);
var page = cljs.core.get.call(null,map__33730__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_jobs_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33732 = params__25388__auto__;
var page = cljs.core.nth.call(null,vec__33732,(0),null);
return controller.entry.get_jobs_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/p/:page",action__25387__auto___33734);

route.entry.get_jobs_by_page = ((function (action__25387__auto___33734){
return (function route$entry$get_jobs_by_page(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33735 = arguments.length;
var i__25002__auto___33736 = (0);
while(true){
if((i__25002__auto___33736 < len__25001__auto___33735)){
args__25008__auto__.push((arguments[i__25002__auto___33736]));

var G__33737 = (i__25002__auto___33736 + (1));
i__25002__auto___33736 = G__33737;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33734))
;

route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33734){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/p/:page",args__25386__auto__);
});})(action__25387__auto___33734))
;

route.entry.get_jobs_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs_by_page.cljs$lang$applyTo = ((function (action__25387__auto___33734){
return (function (seq33733){
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33733));
});})(action__25387__auto___33734))
;
var action__25387__auto___33742 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33738 = params__25388__auto__;
var map__33738__$1 = ((((!((map__33738 == null)))?((((map__33738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738):map__33738);
var id = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33740 = params__25388__auto__;
var id = cljs.core.nth.call(null,vec__33740,(0),null);
return controller.entry.edit_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/edit/:id",action__25387__auto___33742);

route.entry.edit_job_by_id = ((function (action__25387__auto___33742){
return (function route$entry$edit_job_by_id(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33743 = arguments.length;
var i__25002__auto___33744 = (0);
while(true){
if((i__25002__auto___33744 < len__25001__auto___33743)){
args__25008__auto__.push((arguments[i__25002__auto___33744]));

var G__33745 = (i__25002__auto___33744 + (1));
i__25002__auto___33744 = G__33745;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33742))
;

route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33742){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/edit/:id",args__25386__auto__);
});})(action__25387__auto___33742))
;

route.entry.edit_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_job_by_id.cljs$lang$applyTo = ((function (action__25387__auto___33742){
return (function (seq33741){
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33741));
});})(action__25387__auto___33742))
;
var action__25387__auto___33750 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33746 = params__25388__auto__;
var map__33746__$1 = ((((!((map__33746 == null)))?((((map__33746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33746):map__33746);
var id = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33748 = params__25388__auto__;
var id = cljs.core.nth.call(null,vec__33748,(0),null);
return controller.entry.delete_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/delete/:id",action__25387__auto___33750);

route.entry.delete_job_by_id = ((function (action__25387__auto___33750){
return (function route$entry$delete_job_by_id(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33751 = arguments.length;
var i__25002__auto___33752 = (0);
while(true){
if((i__25002__auto___33752 < len__25001__auto___33751)){
args__25008__auto__.push((arguments[i__25002__auto___33752]));

var G__33753 = (i__25002__auto___33752 + (1));
i__25002__auto___33752 = G__33753;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33750))
;

route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33750){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/delete/:id",args__25386__auto__);
});})(action__25387__auto___33750))
;

route.entry.delete_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_job_by_id.cljs$lang$applyTo = ((function (action__25387__auto___33750){
return (function (seq33749){
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33749));
});})(action__25387__auto___33750))
;
var action__25387__auto___33758 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33754 = params__25388__auto__;
var map__33754__$1 = ((((!((map__33754 == null)))?((((map__33754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33754):map__33754);
return controller.entry.get_events_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33756 = params__25388__auto__;
return controller.entry.get_events_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event",action__25387__auto___33758);

route.entry.get_events = ((function (action__25387__auto___33758){
return (function route$entry$get_events(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33759 = arguments.length;
var i__25002__auto___33760 = (0);
while(true){
if((i__25002__auto___33760 < len__25001__auto___33759)){
args__25008__auto__.push((arguments[i__25002__auto___33760]));

var G__33761 = (i__25002__auto___33760 + (1));
i__25002__auto___33760 = G__33761;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33758))
;

route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33758){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event",args__25386__auto__);
});})(action__25387__auto___33758))
;

route.entry.get_events.cljs$lang$maxFixedArity = (0);

route.entry.get_events.cljs$lang$applyTo = ((function (action__25387__auto___33758){
return (function (seq33757){
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33757));
});})(action__25387__auto___33758))
;
var action__25387__auto___33766 = (function (params__25388__auto__){
if(cljs.core.map_QMARK_.call(null,params__25388__auto__)){
var map__33762 = params__25388__auto__;
var map__33762__$1 = ((((!((map__33762 == null)))?((((map__33762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33762):map__33762);
var page = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_events_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25388__auto__)){
var vec__33764 = params__25388__auto__;
var page = cljs.core.nth.call(null,vec__33764,(0),null);
return controller.entry.get_events_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/p/:page",action__25387__auto___33766);

route.entry.get_event_by_page = ((function (action__25387__auto___33766){
return (function route$entry$get_event_by_page(var_args){
var args__25008__auto__ = [];
var len__25001__auto___33767 = arguments.length;
var i__25002__auto___33768 = (0);
while(true){
if((i__25002__auto___33768 < len__25001__auto___33767)){
args__25008__auto__.push((arguments[i__25002__auto___33768]));

var G__33769 = (i__25002__auto___33768 + (1));
i__25002__auto___33768 = G__33769;
continue;
} else {
}
break;
}

var argseq__25009__auto__ = ((((0) < args__25008__auto__.length))?(new cljs.core.IndexedSeq(args__25008__auto__.slice((0)),(0),null)):null);
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25009__auto__);
});})(action__25387__auto___33766))
;

route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25387__auto___33766){
return (function (args__25386__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/p/:page",args__25386__auto__);
});})(action__25387__auto___33766))
;

route.entry.get_event_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_event_by_page.cljs$lang$applyTo = ((function (action__25387__auto___33766){
return (function (seq33765){
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33765));
});})(action__25387__auto___33766))
;

//# sourceMappingURL=entry.js.map