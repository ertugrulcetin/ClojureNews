// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('view.entry');
goog.require('controller.entry');
var action__24950__auto___26011 = (function (params__24951__auto__){
if(cljs.core.map_QMARK_.call(null,params__24951__auto__)){
var map__26007 = params__24951__auto__;
var map__26007__$1 = ((((!((map__26007 == null)))?((((map__26007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26007):map__26007);
return controller.entry.home_page.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24951__auto__)){
var vec__26009 = params__24951__auto__;
return controller.entry.home_page.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24950__auto___26011);

route.entry.home_page = ((function (action__24950__auto___26011){
return (function route$entry$home_page(var_args){
var args__24480__auto__ = [];
var len__24473__auto___26012 = arguments.length;
var i__24474__auto___26013 = (0);
while(true){
if((i__24474__auto___26013 < len__24473__auto___26012)){
args__24480__auto__.push((arguments[i__24474__auto___26013]));

var G__26014 = (i__24474__auto___26013 + (1));
i__24474__auto___26013 = G__26014;
continue;
} else {
}
break;
}

var argseq__24481__auto__ = ((((0) < args__24480__auto__.length))?(new cljs.core.IndexedSeq(args__24480__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__24481__auto__);
});})(action__24950__auto___26011))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24950__auto___26011){
return (function (args__24949__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__24949__auto__);
});})(action__24950__auto___26011))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__24950__auto___26011){
return (function (seq26010){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26010));
});})(action__24950__auto___26011))
;
var action__24950__auto___26019 = (function (params__24951__auto__){
if(cljs.core.map_QMARK_.call(null,params__24951__auto__)){
var map__26015 = params__24951__auto__;
var map__26015__$1 = ((((!((map__26015 == null)))?((((map__26015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26015):map__26015);
var id = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.story.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24951__auto__)){
var vec__26017 = params__24951__auto__;
var id = cljs.core.nth.call(null,vec__26017,(0),null);
return controller.entry.story.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__24950__auto___26019);

route.entry.story = ((function (action__24950__auto___26019){
return (function route$entry$story(var_args){
var args__24480__auto__ = [];
var len__24473__auto___26020 = arguments.length;
var i__24474__auto___26021 = (0);
while(true){
if((i__24474__auto___26021 < len__24473__auto___26020)){
args__24480__auto__.push((arguments[i__24474__auto___26021]));

var G__26022 = (i__24474__auto___26021 + (1));
i__24474__auto___26021 = G__26022;
continue;
} else {
}
break;
}

var argseq__24481__auto__ = ((((0) < args__24480__auto__.length))?(new cljs.core.IndexedSeq(args__24480__auto__.slice((0)),(0),null)):null);
return route.entry.story.cljs$core$IFn$_invoke$arity$variadic(argseq__24481__auto__);
});})(action__24950__auto___26019))
;

route.entry.story.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24950__auto___26019){
return (function (args__24949__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__24949__auto__);
});})(action__24950__auto___26019))
;

route.entry.story.cljs$lang$maxFixedArity = (0);

route.entry.story.cljs$lang$applyTo = ((function (action__24950__auto___26019){
return (function (seq26018){
return route.entry.story.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26018));
});})(action__24950__auto___26019))
;
var action__24950__auto___26027 = (function (params__24951__auto__){
if(cljs.core.map_QMARK_.call(null,params__24951__auto__)){
var map__26023 = params__24951__auto__;
var map__26023__$1 = ((((!((map__26023 == null)))?((((map__26023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26023):map__26023);
var id = cljs.core.get.call(null,map__26023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.ask.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24951__auto__)){
var vec__26025 = params__24951__auto__;
var id = cljs.core.nth.call(null,vec__26025,(0),null);
return controller.entry.ask.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__24950__auto___26027);

route.entry.ask = ((function (action__24950__auto___26027){
return (function route$entry$ask(var_args){
var args__24480__auto__ = [];
var len__24473__auto___26028 = arguments.length;
var i__24474__auto___26029 = (0);
while(true){
if((i__24474__auto___26029 < len__24473__auto___26028)){
args__24480__auto__.push((arguments[i__24474__auto___26029]));

var G__26030 = (i__24474__auto___26029 + (1));
i__24474__auto___26029 = G__26030;
continue;
} else {
}
break;
}

var argseq__24481__auto__ = ((((0) < args__24480__auto__.length))?(new cljs.core.IndexedSeq(args__24480__auto__.slice((0)),(0),null)):null);
return route.entry.ask.cljs$core$IFn$_invoke$arity$variadic(argseq__24481__auto__);
});})(action__24950__auto___26027))
;

route.entry.ask.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24950__auto___26027){
return (function (args__24949__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__24949__auto__);
});})(action__24950__auto___26027))
;

route.entry.ask.cljs$lang$maxFixedArity = (0);

route.entry.ask.cljs$lang$applyTo = ((function (action__24950__auto___26027){
return (function (seq26026){
return route.entry.ask.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26026));
});})(action__24950__auto___26027))
;

//# sourceMappingURL=entry.js.map