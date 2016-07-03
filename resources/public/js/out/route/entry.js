// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25142__auto___26567 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26563 = params__25143__auto__;
var map__26563__$1 = ((((!((map__26563 == null)))?((((map__26563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26563):map__26563);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26565 = params__25143__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25142__auto___26567);

route.entry.home_page = ((function (action__25142__auto___26567){
return (function route$entry$home_page(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26568 = arguments.length;
var i__24790__auto___26569 = (0);
while(true){
if((i__24790__auto___26569 < len__24789__auto___26568)){
args__24796__auto__.push((arguments[i__24790__auto___26569]));

var G__26570 = (i__24790__auto___26569 + (1));
i__24790__auto___26569 = G__26570;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26567))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26567){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25141__auto__);
});})(action__25142__auto___26567))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25142__auto___26567){
return (function (seq26566){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26566));
});})(action__25142__auto___26567))
;
var action__25142__auto___26575 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26571 = params__25143__auto__;
var map__26571__$1 = ((((!((map__26571 == null)))?((((map__26571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26571):map__26571);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26573 = params__25143__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story",action__25142__auto___26575);

route.entry.get_stories = ((function (action__25142__auto___26575){
return (function route$entry$get_stories(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26576 = arguments.length;
var i__24790__auto___26577 = (0);
while(true){
if((i__24790__auto___26577 < len__24789__auto___26576)){
args__24796__auto__.push((arguments[i__24790__auto___26577]));

var G__26578 = (i__24790__auto___26577 + (1));
i__24790__auto___26577 = G__26578;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26575))
;

route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26575){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story",args__25141__auto__);
});})(action__25142__auto___26575))
;

route.entry.get_stories.cljs$lang$maxFixedArity = (0);

route.entry.get_stories.cljs$lang$applyTo = ((function (action__25142__auto___26575){
return (function (seq26574){
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26574));
});})(action__25142__auto___26575))
;
var action__25142__auto___26583 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26579 = params__25143__auto__;
var map__26579__$1 = ((((!((map__26579 == null)))?((((map__26579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26579):map__26579);
var id = cljs.core.get.call(null,map__26579__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26581 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26581,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25142__auto___26583);

route.entry.get_story_by_id = ((function (action__25142__auto___26583){
return (function route$entry$get_story_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26584 = arguments.length;
var i__24790__auto___26585 = (0);
while(true){
if((i__24790__auto___26585 < len__24789__auto___26584)){
args__24796__auto__.push((arguments[i__24790__auto___26585]));

var G__26586 = (i__24790__auto___26585 + (1));
i__24790__auto___26585 = G__26586;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26583))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26583){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25141__auto__);
});})(action__25142__auto___26583))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26583){
return (function (seq26582){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26582));
});})(action__25142__auto___26583))
;
var action__25142__auto___26591 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26587 = params__25143__auto__;
var map__26587__$1 = ((((!((map__26587 == null)))?((((map__26587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26587):map__26587);
var page = cljs.core.get.call(null,map__26587__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26589 = params__25143__auto__;
var page = cljs.core.nth.call(null,vec__26589,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__25142__auto___26591);

route.entry.get_stories_by_page = ((function (action__25142__auto___26591){
return (function route$entry$get_stories_by_page(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26592 = arguments.length;
var i__24790__auto___26593 = (0);
while(true){
if((i__24790__auto___26593 < len__24789__auto___26592)){
args__24796__auto__.push((arguments[i__24790__auto___26593]));

var G__26594 = (i__24790__auto___26593 + (1));
i__24790__auto___26593 = G__26594;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26591))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26591){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__25141__auto__);
});})(action__25142__auto___26591))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__25142__auto___26591){
return (function (seq26590){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26590));
});})(action__25142__auto___26591))
;
var action__25142__auto___26599 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26595 = params__25143__auto__;
var map__26595__$1 = ((((!((map__26595 == null)))?((((map__26595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26595):map__26595);
var id = cljs.core.get.call(null,map__26595__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26597 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26597,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25142__auto___26599);

route.entry.edit_story_by_id = ((function (action__25142__auto___26599){
return (function route$entry$edit_story_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26600 = arguments.length;
var i__24790__auto___26601 = (0);
while(true){
if((i__24790__auto___26601 < len__24789__auto___26600)){
args__24796__auto__.push((arguments[i__24790__auto___26601]));

var G__26602 = (i__24790__auto___26601 + (1));
i__24790__auto___26601 = G__26602;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26599))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26599){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25141__auto__);
});})(action__25142__auto___26599))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26599){
return (function (seq26598){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26598));
});})(action__25142__auto___26599))
;
var action__25142__auto___26607 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26603 = params__25143__auto__;
var map__26603__$1 = ((((!((map__26603 == null)))?((((map__26603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26603):map__26603);
var id = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26605 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26605,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25142__auto___26607);

route.entry.delete_story_by_id = ((function (action__25142__auto___26607){
return (function route$entry$delete_story_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26608 = arguments.length;
var i__24790__auto___26609 = (0);
while(true){
if((i__24790__auto___26609 < len__24789__auto___26608)){
args__24796__auto__.push((arguments[i__24790__auto___26609]));

var G__26610 = (i__24790__auto___26609 + (1));
i__24790__auto___26609 = G__26610;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26607))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26607){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25141__auto__);
});})(action__25142__auto___26607))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26607){
return (function (seq26606){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26606));
});})(action__25142__auto___26607))
;
var action__25142__auto___26615 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26611 = params__25143__auto__;
var map__26611__$1 = ((((!((map__26611 == null)))?((((map__26611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26611):map__26611);
return controller.entry.get_ask_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26613 = params__25143__auto__;
return controller.entry.get_ask_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask",action__25142__auto___26615);

route.entry.get_asks = ((function (action__25142__auto___26615){
return (function route$entry$get_asks(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26616 = arguments.length;
var i__24790__auto___26617 = (0);
while(true){
if((i__24790__auto___26617 < len__24789__auto___26616)){
args__24796__auto__.push((arguments[i__24790__auto___26617]));

var G__26618 = (i__24790__auto___26617 + (1));
i__24790__auto___26617 = G__26618;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26615))
;

route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26615){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask",args__25141__auto__);
});})(action__25142__auto___26615))
;

route.entry.get_asks.cljs$lang$maxFixedArity = (0);

route.entry.get_asks.cljs$lang$applyTo = ((function (action__25142__auto___26615){
return (function (seq26614){
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26614));
});})(action__25142__auto___26615))
;
var action__25142__auto___26623 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26619 = params__25143__auto__;
var map__26619__$1 = ((((!((map__26619 == null)))?((((map__26619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26619):map__26619);
var id = cljs.core.get.call(null,map__26619__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26621 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26621,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25142__auto___26623);

route.entry.get_ask_by_id = ((function (action__25142__auto___26623){
return (function route$entry$get_ask_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26624 = arguments.length;
var i__24790__auto___26625 = (0);
while(true){
if((i__24790__auto___26625 < len__24789__auto___26624)){
args__24796__auto__.push((arguments[i__24790__auto___26625]));

var G__26626 = (i__24790__auto___26625 + (1));
i__24790__auto___26625 = G__26626;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26623))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26623){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25141__auto__);
});})(action__25142__auto___26623))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26623){
return (function (seq26622){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26622));
});})(action__25142__auto___26623))
;
var action__25142__auto___26631 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26627 = params__25143__auto__;
var map__26627__$1 = ((((!((map__26627 == null)))?((((map__26627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26627):map__26627);
var page = cljs.core.get.call(null,map__26627__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_ask_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26629 = params__25143__auto__;
var page = cljs.core.nth.call(null,vec__26629,(0),null);
return controller.entry.get_ask_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/p/:page",action__25142__auto___26631);

route.entry.get_ask_by_page = ((function (action__25142__auto___26631){
return (function route$entry$get_ask_by_page(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26632 = arguments.length;
var i__24790__auto___26633 = (0);
while(true){
if((i__24790__auto___26633 < len__24789__auto___26632)){
args__24796__auto__.push((arguments[i__24790__auto___26633]));

var G__26634 = (i__24790__auto___26633 + (1));
i__24790__auto___26633 = G__26634;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26631))
;

route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26631){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/p/:page",args__25141__auto__);
});})(action__25142__auto___26631))
;

route.entry.get_ask_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_page.cljs$lang$applyTo = ((function (action__25142__auto___26631){
return (function (seq26630){
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26630));
});})(action__25142__auto___26631))
;
var action__25142__auto___26639 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26635 = params__25143__auto__;
var map__26635__$1 = ((((!((map__26635 == null)))?((((map__26635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26635):map__26635);
var id = cljs.core.get.call(null,map__26635__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26637 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26637,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25142__auto___26639);

route.entry.edit_ask_by_id = ((function (action__25142__auto___26639){
return (function route$entry$edit_ask_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26640 = arguments.length;
var i__24790__auto___26641 = (0);
while(true){
if((i__24790__auto___26641 < len__24789__auto___26640)){
args__24796__auto__.push((arguments[i__24790__auto___26641]));

var G__26642 = (i__24790__auto___26641 + (1));
i__24790__auto___26641 = G__26642;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26639))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26639){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25141__auto__);
});})(action__25142__auto___26639))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26639){
return (function (seq26638){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26638));
});})(action__25142__auto___26639))
;
var action__25142__auto___26647 = (function (params__25143__auto__){
if(cljs.core.map_QMARK_.call(null,params__25143__auto__)){
var map__26643 = params__25143__auto__;
var map__26643__$1 = ((((!((map__26643 == null)))?((((map__26643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26643):map__26643);
var id = cljs.core.get.call(null,map__26643__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25143__auto__)){
var vec__26645 = params__25143__auto__;
var id = cljs.core.nth.call(null,vec__26645,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25142__auto___26647);

route.entry.delete_ask_by_id = ((function (action__25142__auto___26647){
return (function route$entry$delete_ask_by_id(var_args){
var args__24796__auto__ = [];
var len__24789__auto___26648 = arguments.length;
var i__24790__auto___26649 = (0);
while(true){
if((i__24790__auto___26649 < len__24789__auto___26648)){
args__24796__auto__.push((arguments[i__24790__auto___26649]));

var G__26650 = (i__24790__auto___26649 + (1));
i__24790__auto___26649 = G__26650;
continue;
} else {
}
break;
}

var argseq__24797__auto__ = ((((0) < args__24796__auto__.length))?(new cljs.core.IndexedSeq(args__24796__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24797__auto__);
});})(action__25142__auto___26647))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25142__auto___26647){
return (function (args__25141__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25141__auto__);
});})(action__25142__auto___26647))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25142__auto___26647){
return (function (seq26646){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26646));
});})(action__25142__auto___26647))
;

//# sourceMappingURL=entry.js.map