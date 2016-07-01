// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.comment_entry');
goog.require('cljs.core');
goog.require('controller.comment_entry');
goog.require('secretary.core');
var action__24936__auto___26390 = (function (params__24937__auto__){
if(cljs.core.map_QMARK_.call(null,params__24937__auto__)){
var map__26386 = params__24937__auto__;
var map__26386__$1 = ((((!((map__26386 == null)))?((((map__26386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26386):map__26386);
var id = cljs.core.get.call(null,map__26386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.reply_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24937__auto__)){
var vec__26388 = params__24937__auto__;
var id = cljs.core.nth.call(null,vec__26388,(0),null);
return controller.comment_entry.reply_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/:id",action__24936__auto___26390);

route.comment_entry.get_story_comment_by_id = ((function (action__24936__auto___26390){
return (function route$comment_entry$get_story_comment_by_id(var_args){
var args__24590__auto__ = [];
var len__24583__auto___26391 = arguments.length;
var i__24584__auto___26392 = (0);
while(true){
if((i__24584__auto___26392 < len__24583__auto___26391)){
args__24590__auto__.push((arguments[i__24584__auto___26392]));

var G__26393 = (i__24584__auto___26392 + (1));
i__24584__auto___26392 = G__26393;
continue;
} else {
}
break;
}

var argseq__24591__auto__ = ((((0) < args__24590__auto__.length))?(new cljs.core.IndexedSeq(args__24590__auto__.slice((0)),(0),null)):null);
return route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24591__auto__);
});})(action__24936__auto___26390))
;

route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24936__auto___26390){
return (function (args__24935__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/:id",args__24935__auto__);
});})(action__24936__auto___26390))
;

route.comment_entry.get_story_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.get_story_comment_by_id.cljs$lang$applyTo = ((function (action__24936__auto___26390){
return (function (seq26389){
return route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26389));
});})(action__24936__auto___26390))
;
var action__24936__auto___26398 = (function (params__24937__auto__){
if(cljs.core.map_QMARK_.call(null,params__24937__auto__)){
var map__26394 = params__24937__auto__;
var map__26394__$1 = ((((!((map__26394 == null)))?((((map__26394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26394):map__26394);
var id = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.edit_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24937__auto__)){
var vec__26396 = params__24937__auto__;
var id = cljs.core.nth.call(null,vec__26396,(0),null);
return controller.comment_entry.edit_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/edit/:id",action__24936__auto___26398);

route.comment_entry.edit_story_comment_by_id = ((function (action__24936__auto___26398){
return (function route$comment_entry$edit_story_comment_by_id(var_args){
var args__24590__auto__ = [];
var len__24583__auto___26399 = arguments.length;
var i__24584__auto___26400 = (0);
while(true){
if((i__24584__auto___26400 < len__24583__auto___26399)){
args__24590__auto__.push((arguments[i__24584__auto___26400]));

var G__26401 = (i__24584__auto___26400 + (1));
i__24584__auto___26400 = G__26401;
continue;
} else {
}
break;
}

var argseq__24591__auto__ = ((((0) < args__24590__auto__.length))?(new cljs.core.IndexedSeq(args__24590__auto__.slice((0)),(0),null)):null);
return route.comment_entry.edit_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24591__auto__);
});})(action__24936__auto___26398))
;

route.comment_entry.edit_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24936__auto___26398){
return (function (args__24935__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/edit/:id",args__24935__auto__);
});})(action__24936__auto___26398))
;

route.comment_entry.edit_story_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.edit_story_comment_by_id.cljs$lang$applyTo = ((function (action__24936__auto___26398){
return (function (seq26397){
return route.comment_entry.edit_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26397));
});})(action__24936__auto___26398))
;

//# sourceMappingURL=comment_entry.js.map