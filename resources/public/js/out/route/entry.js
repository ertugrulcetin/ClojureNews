// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25406__auto___27772 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27768 = params__25407__auto__;
var map__27768__$1 = ((((!((map__27768 == null)))?((((map__27768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27768):map__27768);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27770 = params__25407__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25406__auto___27772);

route.entry.home_page = ((function (action__25406__auto___27772){
return (function route$entry$home_page(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27773 = arguments.length;
var i__25005__auto___27774 = (0);
while(true){
if((i__25005__auto___27774 < len__25004__auto___27773)){
args__25011__auto__.push((arguments[i__25005__auto___27774]));

var G__27775 = (i__25005__auto___27774 + (1));
i__25005__auto___27774 = G__27775;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27772))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27772){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25405__auto__);
});})(action__25406__auto___27772))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25406__auto___27772){
return (function (seq27771){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27771));
});})(action__25406__auto___27772))
;
var action__25406__auto___27780 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27776 = params__25407__auto__;
var map__27776__$1 = ((((!((map__27776 == null)))?((((map__27776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27776):map__27776);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27778 = params__25407__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story",action__25406__auto___27780);

route.entry.get_stories = ((function (action__25406__auto___27780){
return (function route$entry$get_stories(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27781 = arguments.length;
var i__25005__auto___27782 = (0);
while(true){
if((i__25005__auto___27782 < len__25004__auto___27781)){
args__25011__auto__.push((arguments[i__25005__auto___27782]));

var G__27783 = (i__25005__auto___27782 + (1));
i__25005__auto___27782 = G__27783;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27780))
;

route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27780){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story",args__25405__auto__);
});})(action__25406__auto___27780))
;

route.entry.get_stories.cljs$lang$maxFixedArity = (0);

route.entry.get_stories.cljs$lang$applyTo = ((function (action__25406__auto___27780){
return (function (seq27779){
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27779));
});})(action__25406__auto___27780))
;
var action__25406__auto___27788 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27784 = params__25407__auto__;
var map__27784__$1 = ((((!((map__27784 == null)))?((((map__27784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27784):map__27784);
var id = cljs.core.get.call(null,map__27784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27786 = params__25407__auto__;
var id = cljs.core.nth.call(null,vec__27786,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25406__auto___27788);

route.entry.get_story_by_id = ((function (action__25406__auto___27788){
return (function route$entry$get_story_by_id(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27789 = arguments.length;
var i__25005__auto___27790 = (0);
while(true){
if((i__25005__auto___27790 < len__25004__auto___27789)){
args__25011__auto__.push((arguments[i__25005__auto___27790]));

var G__27791 = (i__25005__auto___27790 + (1));
i__25005__auto___27790 = G__27791;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27788))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27788){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25405__auto__);
});})(action__25406__auto___27788))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25406__auto___27788){
return (function (seq27787){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27787));
});})(action__25406__auto___27788))
;
var action__25406__auto___27796 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27792 = params__25407__auto__;
var map__27792__$1 = ((((!((map__27792 == null)))?((((map__27792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27792):map__27792);
var page = cljs.core.get.call(null,map__27792__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27794 = params__25407__auto__;
var page = cljs.core.nth.call(null,vec__27794,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__25406__auto___27796);

route.entry.get_stories_by_page = ((function (action__25406__auto___27796){
return (function route$entry$get_stories_by_page(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27797 = arguments.length;
var i__25005__auto___27798 = (0);
while(true){
if((i__25005__auto___27798 < len__25004__auto___27797)){
args__25011__auto__.push((arguments[i__25005__auto___27798]));

var G__27799 = (i__25005__auto___27798 + (1));
i__25005__auto___27798 = G__27799;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27796))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27796){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__25405__auto__);
});})(action__25406__auto___27796))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__25406__auto___27796){
return (function (seq27795){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27795));
});})(action__25406__auto___27796))
;
var action__25406__auto___27804 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27800 = params__25407__auto__;
var map__27800__$1 = ((((!((map__27800 == null)))?((((map__27800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27800):map__27800);
var id = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27802 = params__25407__auto__;
var id = cljs.core.nth.call(null,vec__27802,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25406__auto___27804);

route.entry.edit_story_by_id = ((function (action__25406__auto___27804){
return (function route$entry$edit_story_by_id(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27805 = arguments.length;
var i__25005__auto___27806 = (0);
while(true){
if((i__25005__auto___27806 < len__25004__auto___27805)){
args__25011__auto__.push((arguments[i__25005__auto___27806]));

var G__27807 = (i__25005__auto___27806 + (1));
i__25005__auto___27806 = G__27807;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27804))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27804){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25405__auto__);
});})(action__25406__auto___27804))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25406__auto___27804){
return (function (seq27803){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27803));
});})(action__25406__auto___27804))
;
var action__25406__auto___27812 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27808 = params__25407__auto__;
var map__27808__$1 = ((((!((map__27808 == null)))?((((map__27808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27808):map__27808);
var id = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27810 = params__25407__auto__;
var id = cljs.core.nth.call(null,vec__27810,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25406__auto___27812);

route.entry.delete_story_by_id = ((function (action__25406__auto___27812){
return (function route$entry$delete_story_by_id(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27813 = arguments.length;
var i__25005__auto___27814 = (0);
while(true){
if((i__25005__auto___27814 < len__25004__auto___27813)){
args__25011__auto__.push((arguments[i__25005__auto___27814]));

var G__27815 = (i__25005__auto___27814 + (1));
i__25005__auto___27814 = G__27815;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27812))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27812){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25405__auto__);
});})(action__25406__auto___27812))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25406__auto___27812){
return (function (seq27811){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27811));
});})(action__25406__auto___27812))
;
var action__25406__auto___27820 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27816 = params__25407__auto__;
var map__27816__$1 = ((((!((map__27816 == null)))?((((map__27816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27816):map__27816);
return controller.entry.get_ask_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27818 = params__25407__auto__;
return controller.entry.get_ask_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask",action__25406__auto___27820);

route.entry.get_asks = ((function (action__25406__auto___27820){
return (function route$entry$get_asks(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27821 = arguments.length;
var i__25005__auto___27822 = (0);
while(true){
if((i__25005__auto___27822 < len__25004__auto___27821)){
args__25011__auto__.push((arguments[i__25005__auto___27822]));

var G__27823 = (i__25005__auto___27822 + (1));
i__25005__auto___27822 = G__27823;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27820))
;

route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27820){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask",args__25405__auto__);
});})(action__25406__auto___27820))
;

route.entry.get_asks.cljs$lang$maxFixedArity = (0);

route.entry.get_asks.cljs$lang$applyTo = ((function (action__25406__auto___27820){
return (function (seq27819){
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27819));
});})(action__25406__auto___27820))
;
var action__25406__auto___27828 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27824 = params__25407__auto__;
var map__27824__$1 = ((((!((map__27824 == null)))?((((map__27824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27824):map__27824);
var id = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27826 = params__25407__auto__;
var id = cljs.core.nth.call(null,vec__27826,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25406__auto___27828);

route.entry.get_ask_by_id = ((function (action__25406__auto___27828){
return (function route$entry$get_ask_by_id(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27829 = arguments.length;
var i__25005__auto___27830 = (0);
while(true){
if((i__25005__auto___27830 < len__25004__auto___27829)){
args__25011__auto__.push((arguments[i__25005__auto___27830]));

var G__27831 = (i__25005__auto___27830 + (1));
i__25005__auto___27830 = G__27831;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27828))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27828){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25405__auto__);
});})(action__25406__auto___27828))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25406__auto___27828){
return (function (seq27827){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27827));
});})(action__25406__auto___27828))
;
var action__25406__auto___27836 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27832 = params__25407__auto__;
var map__27832__$1 = ((((!((map__27832 == null)))?((((map__27832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27832):map__27832);
var page = cljs.core.get.call(null,map__27832__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_ask_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27834 = params__25407__auto__;
var page = cljs.core.nth.call(null,vec__27834,(0),null);
return controller.entry.get_ask_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/p/:page",action__25406__auto___27836);

route.entry.get_ask_by_page = ((function (action__25406__auto___27836){
return (function route$entry$get_ask_by_page(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27837 = arguments.length;
var i__25005__auto___27838 = (0);
while(true){
if((i__25005__auto___27838 < len__25004__auto___27837)){
args__25011__auto__.push((arguments[i__25005__auto___27838]));

var G__27839 = (i__25005__auto___27838 + (1));
i__25005__auto___27838 = G__27839;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27836))
;

route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27836){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/p/:page",args__25405__auto__);
});})(action__25406__auto___27836))
;

route.entry.get_ask_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_page.cljs$lang$applyTo = ((function (action__25406__auto___27836){
return (function (seq27835){
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27835));
});})(action__25406__auto___27836))
;
var action__25406__auto___27844 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27840 = params__25407__auto__;
var map__27840__$1 = ((((!((map__27840 == null)))?((((map__27840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27840):map__27840);
var id = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27842 = params__25407__auto__;
var id = cljs.core.nth.call(null,vec__27842,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25406__auto___27844);

route.entry.edit_ask_by_id = ((function (action__25406__auto___27844){
return (function route$entry$edit_ask_by_id(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27845 = arguments.length;
var i__25005__auto___27846 = (0);
while(true){
if((i__25005__auto___27846 < len__25004__auto___27845)){
args__25011__auto__.push((arguments[i__25005__auto___27846]));

var G__27847 = (i__25005__auto___27846 + (1));
i__25005__auto___27846 = G__27847;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27844))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27844){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25405__auto__);
});})(action__25406__auto___27844))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25406__auto___27844){
return (function (seq27843){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27843));
});})(action__25406__auto___27844))
;
var action__25406__auto___27852 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27848 = params__25407__auto__;
var map__27848__$1 = ((((!((map__27848 == null)))?((((map__27848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27848):map__27848);
var id = cljs.core.get.call(null,map__27848__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27850 = params__25407__auto__;
var id = cljs.core.nth.call(null,vec__27850,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25406__auto___27852);

route.entry.delete_ask_by_id = ((function (action__25406__auto___27852){
return (function route$entry$delete_ask_by_id(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27853 = arguments.length;
var i__25005__auto___27854 = (0);
while(true){
if((i__25005__auto___27854 < len__25004__auto___27853)){
args__25011__auto__.push((arguments[i__25005__auto___27854]));

var G__27855 = (i__25005__auto___27854 + (1));
i__25005__auto___27854 = G__27855;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27852))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27852){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25405__auto__);
});})(action__25406__auto___27852))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25406__auto___27852){
return (function (seq27851){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27851));
});})(action__25406__auto___27852))
;
var action__25406__auto___27860 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27856 = params__25407__auto__;
var map__27856__$1 = ((((!((map__27856 == null)))?((((map__27856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27856):map__27856);
return controller.entry.get_newest_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27858 = params__25407__auto__;
return controller.entry.get_newest_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__25406__auto___27860);

route.entry.get_newest = ((function (action__25406__auto___27860){
return (function route$entry$get_newest(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27861 = arguments.length;
var i__25005__auto___27862 = (0);
while(true){
if((i__25005__auto___27862 < len__25004__auto___27861)){
args__25011__auto__.push((arguments[i__25005__auto___27862]));

var G__27863 = (i__25005__auto___27862 + (1));
i__25005__auto___27862 = G__27863;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27860))
;

route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27860){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new",args__25405__auto__);
});})(action__25406__auto___27860))
;

route.entry.get_newest.cljs$lang$maxFixedArity = (0);

route.entry.get_newest.cljs$lang$applyTo = ((function (action__25406__auto___27860){
return (function (seq27859){
return route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27859));
});})(action__25406__auto___27860))
;
var action__25406__auto___27868 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27864 = params__25407__auto__;
var map__27864__$1 = ((((!((map__27864 == null)))?((((map__27864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27864):map__27864);
var page = cljs.core.get.call(null,map__27864__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_newest_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27866 = params__25407__auto__;
var page = cljs.core.nth.call(null,vec__27866,(0),null);
return controller.entry.get_newest_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new/p/:page",action__25406__auto___27868);

route.entry.get_newest_by_page = ((function (action__25406__auto___27868){
return (function route$entry$get_newest_by_page(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27869 = arguments.length;
var i__25005__auto___27870 = (0);
while(true){
if((i__25005__auto___27870 < len__25004__auto___27869)){
args__25011__auto__.push((arguments[i__25005__auto___27870]));

var G__27871 = (i__25005__auto___27870 + (1));
i__25005__auto___27870 = G__27871;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27868))
;

route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27868){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new/p/:page",args__25405__auto__);
});})(action__25406__auto___27868))
;

route.entry.get_newest_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_newest_by_page.cljs$lang$applyTo = ((function (action__25406__auto___27868){
return (function (seq27867){
return route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27867));
});})(action__25406__auto___27868))
;
var action__25406__auto___27876 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27872 = params__25407__auto__;
var map__27872__$1 = ((((!((map__27872 == null)))?((((map__27872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27872):map__27872);
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27874 = params__25407__auto__;
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs",action__25406__auto___27876);

route.entry.get_jobs = ((function (action__25406__auto___27876){
return (function route$entry$get_jobs(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27877 = arguments.length;
var i__25005__auto___27878 = (0);
while(true){
if((i__25005__auto___27878 < len__25004__auto___27877)){
args__25011__auto__.push((arguments[i__25005__auto___27878]));

var G__27879 = (i__25005__auto___27878 + (1));
i__25005__auto___27878 = G__27879;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27876))
;

route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27876){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs",args__25405__auto__);
});})(action__25406__auto___27876))
;

route.entry.get_jobs.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs.cljs$lang$applyTo = ((function (action__25406__auto___27876){
return (function (seq27875){
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27875));
});})(action__25406__auto___27876))
;
var action__25406__auto___27884 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27880 = params__25407__auto__;
var map__27880__$1 = ((((!((map__27880 == null)))?((((map__27880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27880):map__27880);
var page = cljs.core.get.call(null,map__27880__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_jobs_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27882 = params__25407__auto__;
var page = cljs.core.nth.call(null,vec__27882,(0),null);
return controller.entry.get_jobs_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/p/:page",action__25406__auto___27884);

route.entry.get_jobs_by_page = ((function (action__25406__auto___27884){
return (function route$entry$get_jobs_by_page(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27885 = arguments.length;
var i__25005__auto___27886 = (0);
while(true){
if((i__25005__auto___27886 < len__25004__auto___27885)){
args__25011__auto__.push((arguments[i__25005__auto___27886]));

var G__27887 = (i__25005__auto___27886 + (1));
i__25005__auto___27886 = G__27887;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27884))
;

route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27884){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/p/:page",args__25405__auto__);
});})(action__25406__auto___27884))
;

route.entry.get_jobs_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs_by_page.cljs$lang$applyTo = ((function (action__25406__auto___27884){
return (function (seq27883){
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27883));
});})(action__25406__auto___27884))
;
var action__25406__auto___27892 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27888 = params__25407__auto__;
var map__27888__$1 = ((((!((map__27888 == null)))?((((map__27888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27888):map__27888);
var id = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27890 = params__25407__auto__;
var id = cljs.core.nth.call(null,vec__27890,(0),null);
return controller.entry.edit_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/edit/:id",action__25406__auto___27892);

route.entry.edit_job_by_id = ((function (action__25406__auto___27892){
return (function route$entry$edit_job_by_id(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27893 = arguments.length;
var i__25005__auto___27894 = (0);
while(true){
if((i__25005__auto___27894 < len__25004__auto___27893)){
args__25011__auto__.push((arguments[i__25005__auto___27894]));

var G__27895 = (i__25005__auto___27894 + (1));
i__25005__auto___27894 = G__27895;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27892))
;

route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27892){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/edit/:id",args__25405__auto__);
});})(action__25406__auto___27892))
;

route.entry.edit_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_job_by_id.cljs$lang$applyTo = ((function (action__25406__auto___27892){
return (function (seq27891){
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27891));
});})(action__25406__auto___27892))
;
var action__25406__auto___27900 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27896 = params__25407__auto__;
var map__27896__$1 = ((((!((map__27896 == null)))?((((map__27896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27896):map__27896);
var id = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27898 = params__25407__auto__;
var id = cljs.core.nth.call(null,vec__27898,(0),null);
return controller.entry.delete_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/jobs/delete/:id",action__25406__auto___27900);

route.entry.delete_job_by_id = ((function (action__25406__auto___27900){
return (function route$entry$delete_job_by_id(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27901 = arguments.length;
var i__25005__auto___27902 = (0);
while(true){
if((i__25005__auto___27902 < len__25004__auto___27901)){
args__25011__auto__.push((arguments[i__25005__auto___27902]));

var G__27903 = (i__25005__auto___27902 + (1));
i__25005__auto___27902 = G__27903;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27900))
;

route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27900){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/jobs/delete/:id",args__25405__auto__);
});})(action__25406__auto___27900))
;

route.entry.delete_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_job_by_id.cljs$lang$applyTo = ((function (action__25406__auto___27900){
return (function (seq27899){
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27899));
});})(action__25406__auto___27900))
;
var action__25406__auto___27908 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27904 = params__25407__auto__;
var map__27904__$1 = ((((!((map__27904 == null)))?((((map__27904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27904):map__27904);
return controller.entry.get_events_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27906 = params__25407__auto__;
return controller.entry.get_events_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event",action__25406__auto___27908);

route.entry.get_events = ((function (action__25406__auto___27908){
return (function route$entry$get_events(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27909 = arguments.length;
var i__25005__auto___27910 = (0);
while(true){
if((i__25005__auto___27910 < len__25004__auto___27909)){
args__25011__auto__.push((arguments[i__25005__auto___27910]));

var G__27911 = (i__25005__auto___27910 + (1));
i__25005__auto___27910 = G__27911;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27908))
;

route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27908){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event",args__25405__auto__);
});})(action__25406__auto___27908))
;

route.entry.get_events.cljs$lang$maxFixedArity = (0);

route.entry.get_events.cljs$lang$applyTo = ((function (action__25406__auto___27908){
return (function (seq27907){
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27907));
});})(action__25406__auto___27908))
;
var action__25406__auto___27916 = (function (params__25407__auto__){
if(cljs.core.map_QMARK_.call(null,params__25407__auto__)){
var map__27912 = params__25407__auto__;
var map__27912__$1 = ((((!((map__27912 == null)))?((((map__27912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27912):map__27912);
var page = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_events_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25407__auto__)){
var vec__27914 = params__25407__auto__;
var page = cljs.core.nth.call(null,vec__27914,(0),null);
return controller.entry.get_events_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/p/:page",action__25406__auto___27916);

route.entry.get_event_by_page = ((function (action__25406__auto___27916){
return (function route$entry$get_event_by_page(var_args){
var args__25011__auto__ = [];
var len__25004__auto___27917 = arguments.length;
var i__25005__auto___27918 = (0);
while(true){
if((i__25005__auto___27918 < len__25004__auto___27917)){
args__25011__auto__.push((arguments[i__25005__auto___27918]));

var G__27919 = (i__25005__auto___27918 + (1));
i__25005__auto___27918 = G__27919;
continue;
} else {
}
break;
}

var argseq__25012__auto__ = ((((0) < args__25011__auto__.length))?(new cljs.core.IndexedSeq(args__25011__auto__.slice((0)),(0),null)):null);
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25012__auto__);
});})(action__25406__auto___27916))
;

route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25406__auto___27916){
return (function (args__25405__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/p/:page",args__25405__auto__);
});})(action__25406__auto___27916))
;

route.entry.get_event_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_event_by_page.cljs$lang$applyTo = ((function (action__25406__auto___27916){
return (function (seq27915){
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27915));
});})(action__25406__auto___27916))
;

//# sourceMappingURL=entry.js.map