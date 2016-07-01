// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.comment_entry');
goog.require('cljs.core');
goog.require('controller.comment_entry');
goog.require('secretary.core');
var action__24954__auto___26098 = (function (params__24955__auto__){
if(cljs.core.map_QMARK_.call(null,params__24955__auto__)){
var map__26094 = params__24955__auto__;
var map__26094__$1 = ((((!((map__26094 == null)))?((((map__26094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26094):map__26094);
var id = cljs.core.get.call(null,map__26094__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.reply_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24955__auto__)){
var vec__26096 = params__24955__auto__;
var id = cljs.core.nth.call(null,vec__26096,(0),null);
return controller.comment_entry.reply_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/:id",action__24954__auto___26098);

route.comment_entry.get_comment_by_id = ((function (action__24954__auto___26098){
return (function route$comment_entry$get_comment_by_id(var_args){
var args__24608__auto__ = [];
var len__24601__auto___26099 = arguments.length;
var i__24602__auto___26100 = (0);
while(true){
if((i__24602__auto___26100 < len__24601__auto___26099)){
args__24608__auto__.push((arguments[i__24602__auto___26100]));

var G__26101 = (i__24602__auto___26100 + (1));
i__24602__auto___26100 = G__26101;
continue;
} else {
}
break;
}

var argseq__24609__auto__ = ((((0) < args__24608__auto__.length))?(new cljs.core.IndexedSeq(args__24608__auto__.slice((0)),(0),null)):null);
return route.comment_entry.get_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24609__auto__);
});})(action__24954__auto___26098))
;

route.comment_entry.get_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24954__auto___26098){
return (function (args__24953__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/:id",args__24953__auto__);
});})(action__24954__auto___26098))
;

route.comment_entry.get_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.get_comment_by_id.cljs$lang$applyTo = ((function (action__24954__auto___26098){
return (function (seq26097){
return route.comment_entry.get_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26097));
});})(action__24954__auto___26098))
;
var action__24954__auto___26106 = (function (params__24955__auto__){
if(cljs.core.map_QMARK_.call(null,params__24955__auto__)){
var map__26102 = params__24955__auto__;
var map__26102__$1 = ((((!((map__26102 == null)))?((((map__26102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26102):map__26102);
var id = cljs.core.get.call(null,map__26102__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.edit_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24955__auto__)){
var vec__26104 = params__24955__auto__;
var id = cljs.core.nth.call(null,vec__26104,(0),null);
return controller.comment_entry.edit_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/edit/:id",action__24954__auto___26106);

route.comment_entry.edit_comment_by_id = ((function (action__24954__auto___26106){
return (function route$comment_entry$edit_comment_by_id(var_args){
var args__24608__auto__ = [];
var len__24601__auto___26107 = arguments.length;
var i__24602__auto___26108 = (0);
while(true){
if((i__24602__auto___26108 < len__24601__auto___26107)){
args__24608__auto__.push((arguments[i__24602__auto___26108]));

var G__26109 = (i__24602__auto___26108 + (1));
i__24602__auto___26108 = G__26109;
continue;
} else {
}
break;
}

var argseq__24609__auto__ = ((((0) < args__24608__auto__.length))?(new cljs.core.IndexedSeq(args__24608__auto__.slice((0)),(0),null)):null);
return route.comment_entry.edit_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24609__auto__);
});})(action__24954__auto___26106))
;

route.comment_entry.edit_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24954__auto___26106){
return (function (args__24953__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/edit/:id",args__24953__auto__);
});})(action__24954__auto___26106))
;

route.comment_entry.edit_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.edit_comment_by_id.cljs$lang$applyTo = ((function (action__24954__auto___26106){
return (function (seq26105){
return route.comment_entry.edit_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26105));
});})(action__24954__auto___26106))
;
var action__24954__auto___26114 = (function (params__24955__auto__){
if(cljs.core.map_QMARK_.call(null,params__24955__auto__)){
var map__26110 = params__24955__auto__;
var map__26110__$1 = ((((!((map__26110 == null)))?((((map__26110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26110):map__26110);
var id = cljs.core.get.call(null,map__26110__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.delete_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24955__auto__)){
var vec__26112 = params__24955__auto__;
var id = cljs.core.nth.call(null,vec__26112,(0),null);
return controller.comment_entry.delete_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/delete/:id",action__24954__auto___26114);

route.comment_entry.delete_comment_by_id = ((function (action__24954__auto___26114){
return (function route$comment_entry$delete_comment_by_id(var_args){
var args__24608__auto__ = [];
var len__24601__auto___26115 = arguments.length;
var i__24602__auto___26116 = (0);
while(true){
if((i__24602__auto___26116 < len__24601__auto___26115)){
args__24608__auto__.push((arguments[i__24602__auto___26116]));

var G__26117 = (i__24602__auto___26116 + (1));
i__24602__auto___26116 = G__26117;
continue;
} else {
}
break;
}

var argseq__24609__auto__ = ((((0) < args__24608__auto__.length))?(new cljs.core.IndexedSeq(args__24608__auto__.slice((0)),(0),null)):null);
return route.comment_entry.delete_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24609__auto__);
});})(action__24954__auto___26114))
;

route.comment_entry.delete_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24954__auto___26114){
return (function (args__24953__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/delete/:id",args__24953__auto__);
});})(action__24954__auto___26114))
;

route.comment_entry.delete_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.delete_comment_by_id.cljs$lang$applyTo = ((function (action__24954__auto___26114){
return (function (seq26113){
return route.comment_entry.delete_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26113));
});})(action__24954__auto___26114))
;

//# sourceMappingURL=comment_entry.js.map