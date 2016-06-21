// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.comment_entry');
goog.require('cljs.core');
goog.require('controller.comment_entry');
goog.require('secretary.core');
var action__24833__auto___26020 = (function (params__24834__auto__){
if(cljs.core.map_QMARK_.call(null,params__24834__auto__)){
var map__26016 = params__24834__auto__;
var map__26016__$1 = ((((!((map__26016 == null)))?((((map__26016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26016):map__26016);
var id = cljs.core.get.call(null,map__26016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.comment_entry.get_story_comment_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__24834__auto__)){
var vec__26018 = params__24834__auto__;
var id = cljs.core.nth.call(null,vec__26018,(0),null);
return controller.comment_entry.get_story_comment_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/comment/:id",action__24833__auto___26020);

route.comment_entry.get_story_comment_by_id = ((function (action__24833__auto___26020){
return (function route$comment_entry$get_story_comment_by_id(var_args){
var args__24487__auto__ = [];
var len__24480__auto___26021 = arguments.length;
var i__24481__auto___26022 = (0);
while(true){
if((i__24481__auto___26022 < len__24480__auto___26021)){
args__24487__auto__.push((arguments[i__24481__auto___26022]));

var G__26023 = (i__24481__auto___26022 + (1));
i__24481__auto___26022 = G__26023;
continue;
} else {
}
break;
}

var argseq__24488__auto__ = ((((0) < args__24487__auto__.length))?(new cljs.core.IndexedSeq(args__24487__auto__.slice((0)),(0),null)):null);
return route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__24488__auto__);
});})(action__24833__auto___26020))
;

route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__24833__auto___26020){
return (function (args__24832__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/comment/:id",args__24832__auto__);
});})(action__24833__auto___26020))
;

route.comment_entry.get_story_comment_by_id.cljs$lang$maxFixedArity = (0);

route.comment_entry.get_story_comment_by_id.cljs$lang$applyTo = ((function (action__24833__auto___26020){
return (function (seq26019){
return route.comment_entry.get_story_comment_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26019));
});})(action__24833__auto___26020))
;

//# sourceMappingURL=comment_entry.js.map