// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
goog.require('reagent.core');
var action__24690__auto___25855 = (function (params__24691__auto__){
if(cljs.core.map_QMARK_.call(null,params__24691__auto__)){
var map__25851 = params__24691__auto__;
var map__25851__$1 = ((((!((map__25851 == null)))?((((map__25851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25851):map__25851);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24691__auto__)){
var vec__25853 = params__24691__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24690__auto___25855);

route.entry.home_page = ((function (action__24690__auto___25855){
return (function route$entry$home_page(var_args){
var args__24340__auto__ = [];
var len__24333__auto___25856 = arguments.length;
var i__24334__auto___25857 = (0);
while(true){
if((i__24334__auto___25857 < len__24333__auto___25856)){
args__24340__auto__.push((arguments[i__24334__auto___25857]));

var G__25858 = (i__24334__auto___25857 + (1));
i__24334__auto___25857 = G__25858;
continue;
} else {
}
break;
}

var argseq__24341__auto__ = ((((0) < args__24340__auto__.length))?(new cljs.core.IndexedSeq(args__24340__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24341__auto__);
});})(action__24690__auto___25855))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24690__auto___25855){
return (function (args__24689__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__24689__auto__);
});})(action__24690__auto___25855))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__24690__auto___25855){
return (function (seq25854){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25854));
});})(action__24690__auto___25855))
;
var action__24690__auto___25863 = (function (params__24691__auto__){
if(cljs.core.map_QMARK_.call(null,params__24691__auto__)){
var map__25859 = params__24691__auto__;
var map__25859__$1 = ((((!((map__25859 == null)))?((((map__25859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25859):map__25859);
var id = cljs.core.get.call(null,map__25859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.story.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24691__auto__)){
var vec__25861 = params__24691__auto__;
var id = cljs.core.nth.call(null,vec__25861,(0),null);
return controller.entry.story.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__24690__auto___25863);

route.entry.story = ((function (action__24690__auto___25863){
return (function route$entry$story(var_args){
var args__24340__auto__ = [];
var len__24333__auto___25864 = arguments.length;
var i__24334__auto___25865 = (0);
while(true){
if((i__24334__auto___25865 < len__24333__auto___25864)){
args__24340__auto__.push((arguments[i__24334__auto___25865]));

var G__25866 = (i__24334__auto___25865 + (1));
i__24334__auto___25865 = G__25866;
continue;
} else {
}
break;
}

var argseq__24341__auto__ = ((((0) < args__24340__auto__.length))?(new cljs.core.IndexedSeq(args__24340__auto__.slice((0)),(0),null)):null);
return route.entry.story.cljs$core$IFn$_invoke$arity$variadic(argseq__24341__auto__);
});})(action__24690__auto___25863))
;

route.entry.story.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24690__auto___25863){
return (function (args__24689__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__24689__auto__);
});})(action__24690__auto___25863))
;

route.entry.story.cljs$lang$maxFixedArity = (0);

route.entry.story.cljs$lang$applyTo = ((function (action__24690__auto___25863){
return (function (seq25862){
return route.entry.story.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25862));
});})(action__24690__auto___25863))
;
var action__24690__auto___25871 = (function (params__24691__auto__){
if(cljs.core.map_QMARK_.call(null,params__24691__auto__)){
var map__25867 = params__24691__auto__;
var map__25867__$1 = ((((!((map__25867 == null)))?((((map__25867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25867):map__25867);
var id = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.ask.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24691__auto__)){
var vec__25869 = params__24691__auto__;
var id = cljs.core.nth.call(null,vec__25869,(0),null);
return controller.entry.ask.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__24690__auto___25871);

route.entry.ask = ((function (action__24690__auto___25871){
return (function route$entry$ask(var_args){
var args__24340__auto__ = [];
var len__24333__auto___25872 = arguments.length;
var i__24334__auto___25873 = (0);
while(true){
if((i__24334__auto___25873 < len__24333__auto___25872)){
args__24340__auto__.push((arguments[i__24334__auto___25873]));

var G__25874 = (i__24334__auto___25873 + (1));
i__24334__auto___25873 = G__25874;
continue;
} else {
}
break;
}

var argseq__24341__auto__ = ((((0) < args__24340__auto__.length))?(new cljs.core.IndexedSeq(args__24340__auto__.slice((0)),(0),null)):null);
return route.entry.ask.cljs$core$IFn$_invoke$arity$variadic(argseq__24341__auto__);
});})(action__24690__auto___25871))
;

route.entry.ask.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24690__auto___25871){
return (function (args__24689__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__24689__auto__);
});})(action__24690__auto___25871))
;

route.entry.ask.cljs$lang$maxFixedArity = (0);

route.entry.ask.cljs$lang$applyTo = ((function (action__24690__auto___25871){
return (function (seq25870){
return route.entry.ask.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25870));
});})(action__24690__auto___25871))
;

//# sourceMappingURL=entry.js.map