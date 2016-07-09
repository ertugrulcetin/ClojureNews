// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.comment_entry');
goog.require('cljs.core');
goog.require('controller.comment_entry');
goog.require('secretary.core');
var action__26957__auto___32334 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__32330 = params__26958__auto__;
var map__32330__$1 = ((((!((map__32330 == null)))?((((map__32330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32330):map__32330);
var id = cljs.core.get.call(null,map__32330__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.reply_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__32332 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__32332,(0),null);
return controller.comment_entry.reply_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/:id",action__26957__auto___32334);

route.comment_entry.get_comment_by_id = ((function (action__26957__auto___32334){
return (function route$comment_entry$get_comment_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32335 = arguments.length;
var i__25118__auto___32336 = (0);
while(true){
if((i__25118__auto___32336 < len__25117__auto___32335)){
args__25124__auto__.push((arguments[i__25118__auto___32336]));

var G__32337 = (i__25118__auto___32336 + (1));
i__25118__auto___32336 = G__32337;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.comment_entry.get_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___32334))
;

route.comment_entry.get_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___32334){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/:id",args__26956__auto__);
});})(action__26957__auto___32334))
;

route.comment_entry.get_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.get_comment_by_id.cljs$lang$applyTo = ((function (action__26957__auto___32334){
return (function (seq32333){
return route.comment_entry.get_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32333));
});})(action__26957__auto___32334))
;
var action__26957__auto___32342 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__32338 = params__26958__auto__;
var map__32338__$1 = ((((!((map__32338 == null)))?((((map__32338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32338):map__32338);
var id = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.edit_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__32340 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__32340,(0),null);
return controller.comment_entry.edit_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/edit/:id",action__26957__auto___32342);

route.comment_entry.edit_comment_by_id = ((function (action__26957__auto___32342){
return (function route$comment_entry$edit_comment_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32343 = arguments.length;
var i__25118__auto___32344 = (0);
while(true){
if((i__25118__auto___32344 < len__25117__auto___32343)){
args__25124__auto__.push((arguments[i__25118__auto___32344]));

var G__32345 = (i__25118__auto___32344 + (1));
i__25118__auto___32344 = G__32345;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.comment_entry.edit_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___32342))
;

route.comment_entry.edit_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___32342){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/edit/:id",args__26956__auto__);
});})(action__26957__auto___32342))
;

route.comment_entry.edit_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.edit_comment_by_id.cljs$lang$applyTo = ((function (action__26957__auto___32342){
return (function (seq32341){
return route.comment_entry.edit_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32341));
});})(action__26957__auto___32342))
;
var action__26957__auto___32350 = (function (params__26958__auto__){
if(cljs.core.map_QMARK_.call(null,params__26958__auto__)){
var map__32346 = params__26958__auto__;
var map__32346__$1 = ((((!((map__32346 == null)))?((((map__32346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32346):map__32346);
var id = cljs.core.get.call(null,map__32346__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.delete_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__26958__auto__)){
var vec__32348 = params__26958__auto__;
var id = cljs.core.nth.call(null,vec__32348,(0),null);
return controller.comment_entry.delete_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/delete/:id",action__26957__auto___32350);

route.comment_entry.delete_comment_by_id = ((function (action__26957__auto___32350){
return (function route$comment_entry$delete_comment_by_id(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32351 = arguments.length;
var i__25118__auto___32352 = (0);
while(true){
if((i__25118__auto___32352 < len__25117__auto___32351)){
args__25124__auto__.push((arguments[i__25118__auto___32352]));

var G__32353 = (i__25118__auto___32352 + (1));
i__25118__auto___32352 = G__32353;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return route.comment_entry.delete_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});})(action__26957__auto___32350))
;

route.comment_entry.delete_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__26957__auto___32350){
return (function (args__26956__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/delete/:id",args__26956__auto__);
});})(action__26957__auto___32350))
;

route.comment_entry.delete_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.delete_comment_by_id.cljs$lang$applyTo = ((function (action__26957__auto___32350){
return (function (seq32349){
return route.comment_entry.delete_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32349));
});})(action__26957__auto___32350))
;

//# sourceMappingURL=comment_entry.js.map