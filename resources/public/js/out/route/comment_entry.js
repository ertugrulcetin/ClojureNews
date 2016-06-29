// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.comment_entry');
goog.require('cljs.core');
goog.require('controller.comment_entry');
goog.require('secretary.core');
var action__24917__auto___26217 = (function (params__24918__auto__){
if(cljs.core.map_QMARK_.call(null,params__24918__auto__)){
var map__26213 = params__24918__auto__;
var map__26213__$1 = ((((!((map__26213 == null)))?((((map__26213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26213):map__26213);
var id = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.get_story_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24918__auto__)){
var vec__26215 = params__24918__auto__;
var id = cljs.core.nth.call(null,vec__26215,(0),null);
return controller.comment_entry.get_story_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/:id",action__24917__auto___26217);

route.comment_entry.get_story_comment_by_id = ((function (action__24917__auto___26217){
return (function route$comment_entry$get_story_comment_by_id(var_args){
var args__24571__auto__ = [];
var len__24564__auto___26218 = arguments.length;
var i__24565__auto___26219 = (0);
while(true){
if((i__24565__auto___26219 < len__24564__auto___26218)){
args__24571__auto__.push((arguments[i__24565__auto___26219]));

var G__26220 = (i__24565__auto___26219 + (1));
i__24565__auto___26219 = G__26220;
continue;
} else {
}
break;
}

var argseq__24572__auto__ = ((((0) < args__24571__auto__.length))?(new cljs.core.IndexedSeq(args__24571__auto__.slice((0)),(0),null)):null);
return route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24572__auto__);
});})(action__24917__auto___26217))
;

route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24917__auto___26217){
return (function (args__24916__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/:id",args__24916__auto__);
});})(action__24917__auto___26217))
;

route.comment_entry.get_story_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.get_story_comment_by_id.cljs$lang$applyTo = ((function (action__24917__auto___26217){
return (function (seq26216){
return route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26216));
});})(action__24917__auto___26217))
;
var action__24917__auto___26225 = (function (params__24918__auto__){
if(cljs.core.map_QMARK_.call(null,params__24918__auto__)){
var map__26221 = params__24918__auto__;
var map__26221__$1 = ((((!((map__26221 == null)))?((((map__26221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26221):map__26221);
var id = cljs.core.get.call(null,map__26221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.edit_story_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24918__auto__)){
var vec__26223 = params__24918__auto__;
var id = cljs.core.nth.call(null,vec__26223,(0),null);
return controller.comment_entry.edit_story_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/edit/:id",action__24917__auto___26225);

route.comment_entry.edit_story_comment_by_id = ((function (action__24917__auto___26225){
return (function route$comment_entry$edit_story_comment_by_id(var_args){
var args__24571__auto__ = [];
var len__24564__auto___26226 = arguments.length;
var i__24565__auto___26227 = (0);
while(true){
if((i__24565__auto___26227 < len__24564__auto___26226)){
args__24571__auto__.push((arguments[i__24565__auto___26227]));

var G__26228 = (i__24565__auto___26227 + (1));
i__24565__auto___26227 = G__26228;
continue;
} else {
}
break;
}

var argseq__24572__auto__ = ((((0) < args__24571__auto__.length))?(new cljs.core.IndexedSeq(args__24571__auto__.slice((0)),(0),null)):null);
return route.comment_entry.edit_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24572__auto__);
});})(action__24917__auto___26225))
;

route.comment_entry.edit_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24917__auto___26225){
return (function (args__24916__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/edit/:id",args__24916__auto__);
});})(action__24917__auto___26225))
;

route.comment_entry.edit_story_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.edit_story_comment_by_id.cljs$lang$applyTo = ((function (action__24917__auto___26225){
return (function (seq26224){
return route.comment_entry.edit_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26224));
});})(action__24917__auto___26225))
;

//# sourceMappingURL=comment_entry.js.map