// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25395__auto___31118 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31114 = params__25396__auto__;
var map__31114__$1 = ((((!((map__31114 == null)))?((((map__31114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31114):map__31114);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31116 = params__25396__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25395__auto___31118);

route.entry.home_page = ((function (action__25395__auto___31118){
return (function route$entry$home_page(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31119 = arguments.length;
var i__25043__auto___31120 = (0);
while(true){
if((i__25043__auto___31120 < len__25042__auto___31119)){
args__25049__auto__.push((arguments[i__25043__auto___31120]));

var G__31121 = (i__25043__auto___31120 + (1));
i__25043__auto___31120 = G__31121;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31118))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31118){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25394__auto__);
});})(action__25395__auto___31118))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25395__auto___31118){
return (function (seq31117){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31117));
});})(action__25395__auto___31118))
;
var action__25395__auto___31126 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31122 = params__25396__auto__;
var map__31122__$1 = ((((!((map__31122 == null)))?((((map__31122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31122):map__31122);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31124 = params__25396__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story",action__25395__auto___31126);

route.entry.get_stories = ((function (action__25395__auto___31126){
return (function route$entry$get_stories(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31127 = arguments.length;
var i__25043__auto___31128 = (0);
while(true){
if((i__25043__auto___31128 < len__25042__auto___31127)){
args__25049__auto__.push((arguments[i__25043__auto___31128]));

var G__31129 = (i__25043__auto___31128 + (1));
i__25043__auto___31128 = G__31129;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31126))
;

route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31126){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story",args__25394__auto__);
});})(action__25395__auto___31126))
;

route.entry.get_stories.cljs$lang$maxFixedArity = (0);

route.entry.get_stories.cljs$lang$applyTo = ((function (action__25395__auto___31126){
return (function (seq31125){
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31125));
});})(action__25395__auto___31126))
;
var action__25395__auto___31134 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31130 = params__25396__auto__;
var map__31130__$1 = ((((!((map__31130 == null)))?((((map__31130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31130):map__31130);
var id = cljs.core.get.call(null,map__31130__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31132 = params__25396__auto__;
var id = cljs.core.nth.call(null,vec__31132,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25395__auto___31134);

route.entry.get_story_by_id = ((function (action__25395__auto___31134){
return (function route$entry$get_story_by_id(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31135 = arguments.length;
var i__25043__auto___31136 = (0);
while(true){
if((i__25043__auto___31136 < len__25042__auto___31135)){
args__25049__auto__.push((arguments[i__25043__auto___31136]));

var G__31137 = (i__25043__auto___31136 + (1));
i__25043__auto___31136 = G__31137;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31134))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31134){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25394__auto__);
});})(action__25395__auto___31134))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25395__auto___31134){
return (function (seq31133){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31133));
});})(action__25395__auto___31134))
;
var action__25395__auto___31142 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31138 = params__25396__auto__;
var map__31138__$1 = ((((!((map__31138 == null)))?((((map__31138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31138):map__31138);
var page = cljs.core.get.call(null,map__31138__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31140 = params__25396__auto__;
var page = cljs.core.nth.call(null,vec__31140,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__25395__auto___31142);

route.entry.get_stories_by_page = ((function (action__25395__auto___31142){
return (function route$entry$get_stories_by_page(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31143 = arguments.length;
var i__25043__auto___31144 = (0);
while(true){
if((i__25043__auto___31144 < len__25042__auto___31143)){
args__25049__auto__.push((arguments[i__25043__auto___31144]));

var G__31145 = (i__25043__auto___31144 + (1));
i__25043__auto___31144 = G__31145;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31142))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31142){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__25394__auto__);
});})(action__25395__auto___31142))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__25395__auto___31142){
return (function (seq31141){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31141));
});})(action__25395__auto___31142))
;
var action__25395__auto___31150 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31146 = params__25396__auto__;
var map__31146__$1 = ((((!((map__31146 == null)))?((((map__31146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31146):map__31146);
var id = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31148 = params__25396__auto__;
var id = cljs.core.nth.call(null,vec__31148,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25395__auto___31150);

route.entry.edit_story_by_id = ((function (action__25395__auto___31150){
return (function route$entry$edit_story_by_id(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31151 = arguments.length;
var i__25043__auto___31152 = (0);
while(true){
if((i__25043__auto___31152 < len__25042__auto___31151)){
args__25049__auto__.push((arguments[i__25043__auto___31152]));

var G__31153 = (i__25043__auto___31152 + (1));
i__25043__auto___31152 = G__31153;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31150))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31150){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25394__auto__);
});})(action__25395__auto___31150))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25395__auto___31150){
return (function (seq31149){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31149));
});})(action__25395__auto___31150))
;
var action__25395__auto___31158 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31154 = params__25396__auto__;
var map__31154__$1 = ((((!((map__31154 == null)))?((((map__31154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31154):map__31154);
var id = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31156 = params__25396__auto__;
var id = cljs.core.nth.call(null,vec__31156,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25395__auto___31158);

route.entry.delete_story_by_id = ((function (action__25395__auto___31158){
return (function route$entry$delete_story_by_id(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31159 = arguments.length;
var i__25043__auto___31160 = (0);
while(true){
if((i__25043__auto___31160 < len__25042__auto___31159)){
args__25049__auto__.push((arguments[i__25043__auto___31160]));

var G__31161 = (i__25043__auto___31160 + (1));
i__25043__auto___31160 = G__31161;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31158))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31158){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25394__auto__);
});})(action__25395__auto___31158))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25395__auto___31158){
return (function (seq31157){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31157));
});})(action__25395__auto___31158))
;
var action__25395__auto___31166 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31162 = params__25396__auto__;
var map__31162__$1 = ((((!((map__31162 == null)))?((((map__31162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31162):map__31162);
return controller.entry.get_ask_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31164 = params__25396__auto__;
return controller.entry.get_ask_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask",action__25395__auto___31166);

route.entry.get_asks = ((function (action__25395__auto___31166){
return (function route$entry$get_asks(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31167 = arguments.length;
var i__25043__auto___31168 = (0);
while(true){
if((i__25043__auto___31168 < len__25042__auto___31167)){
args__25049__auto__.push((arguments[i__25043__auto___31168]));

var G__31169 = (i__25043__auto___31168 + (1));
i__25043__auto___31168 = G__31169;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31166))
;

route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31166){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask",args__25394__auto__);
});})(action__25395__auto___31166))
;

route.entry.get_asks.cljs$lang$maxFixedArity = (0);

route.entry.get_asks.cljs$lang$applyTo = ((function (action__25395__auto___31166){
return (function (seq31165){
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31165));
});})(action__25395__auto___31166))
;
var action__25395__auto___31174 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31170 = params__25396__auto__;
var map__31170__$1 = ((((!((map__31170 == null)))?((((map__31170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31170):map__31170);
var id = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31172 = params__25396__auto__;
var id = cljs.core.nth.call(null,vec__31172,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25395__auto___31174);

route.entry.get_ask_by_id = ((function (action__25395__auto___31174){
return (function route$entry$get_ask_by_id(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31175 = arguments.length;
var i__25043__auto___31176 = (0);
while(true){
if((i__25043__auto___31176 < len__25042__auto___31175)){
args__25049__auto__.push((arguments[i__25043__auto___31176]));

var G__31177 = (i__25043__auto___31176 + (1));
i__25043__auto___31176 = G__31177;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31174))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31174){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25394__auto__);
});})(action__25395__auto___31174))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25395__auto___31174){
return (function (seq31173){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31173));
});})(action__25395__auto___31174))
;
var action__25395__auto___31182 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31178 = params__25396__auto__;
var map__31178__$1 = ((((!((map__31178 == null)))?((((map__31178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31178):map__31178);
var page = cljs.core.get.call(null,map__31178__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_ask_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31180 = params__25396__auto__;
var page = cljs.core.nth.call(null,vec__31180,(0),null);
return controller.entry.get_ask_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/p/:page",action__25395__auto___31182);

route.entry.get_ask_by_page = ((function (action__25395__auto___31182){
return (function route$entry$get_ask_by_page(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31183 = arguments.length;
var i__25043__auto___31184 = (0);
while(true){
if((i__25043__auto___31184 < len__25042__auto___31183)){
args__25049__auto__.push((arguments[i__25043__auto___31184]));

var G__31185 = (i__25043__auto___31184 + (1));
i__25043__auto___31184 = G__31185;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31182))
;

route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31182){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/p/:page",args__25394__auto__);
});})(action__25395__auto___31182))
;

route.entry.get_ask_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_page.cljs$lang$applyTo = ((function (action__25395__auto___31182){
return (function (seq31181){
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31181));
});})(action__25395__auto___31182))
;
var action__25395__auto___31190 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31186 = params__25396__auto__;
var map__31186__$1 = ((((!((map__31186 == null)))?((((map__31186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31186):map__31186);
var id = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31188 = params__25396__auto__;
var id = cljs.core.nth.call(null,vec__31188,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25395__auto___31190);

route.entry.edit_ask_by_id = ((function (action__25395__auto___31190){
return (function route$entry$edit_ask_by_id(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31191 = arguments.length;
var i__25043__auto___31192 = (0);
while(true){
if((i__25043__auto___31192 < len__25042__auto___31191)){
args__25049__auto__.push((arguments[i__25043__auto___31192]));

var G__31193 = (i__25043__auto___31192 + (1));
i__25043__auto___31192 = G__31193;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31190))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31190){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25394__auto__);
});})(action__25395__auto___31190))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25395__auto___31190){
return (function (seq31189){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31189));
});})(action__25395__auto___31190))
;
var action__25395__auto___31198 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31194 = params__25396__auto__;
var map__31194__$1 = ((((!((map__31194 == null)))?((((map__31194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31194):map__31194);
var id = cljs.core.get.call(null,map__31194__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31196 = params__25396__auto__;
var id = cljs.core.nth.call(null,vec__31196,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25395__auto___31198);

route.entry.delete_ask_by_id = ((function (action__25395__auto___31198){
return (function route$entry$delete_ask_by_id(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31199 = arguments.length;
var i__25043__auto___31200 = (0);
while(true){
if((i__25043__auto___31200 < len__25042__auto___31199)){
args__25049__auto__.push((arguments[i__25043__auto___31200]));

var G__31201 = (i__25043__auto___31200 + (1));
i__25043__auto___31200 = G__31201;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31198))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31198){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25394__auto__);
});})(action__25395__auto___31198))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25395__auto___31198){
return (function (seq31197){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31197));
});})(action__25395__auto___31198))
;
var action__25395__auto___31206 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31202 = params__25396__auto__;
var map__31202__$1 = ((((!((map__31202 == null)))?((((map__31202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31202):map__31202);
return controller.entry.get_newest_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31204 = params__25396__auto__;
return controller.entry.get_newest_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__25395__auto___31206);

route.entry.get_newest = ((function (action__25395__auto___31206){
return (function route$entry$get_newest(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31207 = arguments.length;
var i__25043__auto___31208 = (0);
while(true){
if((i__25043__auto___31208 < len__25042__auto___31207)){
args__25049__auto__.push((arguments[i__25043__auto___31208]));

var G__31209 = (i__25043__auto___31208 + (1));
i__25043__auto___31208 = G__31209;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31206))
;

route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31206){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new",args__25394__auto__);
});})(action__25395__auto___31206))
;

route.entry.get_newest.cljs$lang$maxFixedArity = (0);

route.entry.get_newest.cljs$lang$applyTo = ((function (action__25395__auto___31206){
return (function (seq31205){
return route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31205));
});})(action__25395__auto___31206))
;
var action__25395__auto___31214 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31210 = params__25396__auto__;
var map__31210__$1 = ((((!((map__31210 == null)))?((((map__31210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31210):map__31210);
var page = cljs.core.get.call(null,map__31210__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_newest_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31212 = params__25396__auto__;
var page = cljs.core.nth.call(null,vec__31212,(0),null);
return controller.entry.get_newest_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new/p/:page",action__25395__auto___31214);

route.entry.get_newest_by_page = ((function (action__25395__auto___31214){
return (function route$entry$get_newest_by_page(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31215 = arguments.length;
var i__25043__auto___31216 = (0);
while(true){
if((i__25043__auto___31216 < len__25042__auto___31215)){
args__25049__auto__.push((arguments[i__25043__auto___31216]));

var G__31217 = (i__25043__auto___31216 + (1));
i__25043__auto___31216 = G__31217;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31214))
;

route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31214){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new/p/:page",args__25394__auto__);
});})(action__25395__auto___31214))
;

route.entry.get_newest_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_newest_by_page.cljs$lang$applyTo = ((function (action__25395__auto___31214){
return (function (seq31213){
return route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31213));
});})(action__25395__auto___31214))
;
var action__25395__auto___31222 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31218 = params__25396__auto__;
var map__31218__$1 = ((((!((map__31218 == null)))?((((map__31218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31218):map__31218);
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31220 = params__25396__auto__;
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job",action__25395__auto___31222);

route.entry.get_jobs = ((function (action__25395__auto___31222){
return (function route$entry$get_jobs(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31223 = arguments.length;
var i__25043__auto___31224 = (0);
while(true){
if((i__25043__auto___31224 < len__25042__auto___31223)){
args__25049__auto__.push((arguments[i__25043__auto___31224]));

var G__31225 = (i__25043__auto___31224 + (1));
i__25043__auto___31224 = G__31225;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31222))
;

route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31222){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job",args__25394__auto__);
});})(action__25395__auto___31222))
;

route.entry.get_jobs.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs.cljs$lang$applyTo = ((function (action__25395__auto___31222){
return (function (seq31221){
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31221));
});})(action__25395__auto___31222))
;
var action__25395__auto___31230 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31226 = params__25396__auto__;
var map__31226__$1 = ((((!((map__31226 == null)))?((((map__31226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31226):map__31226);
var page = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_jobs_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31228 = params__25396__auto__;
var page = cljs.core.nth.call(null,vec__31228,(0),null);
return controller.entry.get_jobs_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/p/:page",action__25395__auto___31230);

route.entry.get_jobs_by_page = ((function (action__25395__auto___31230){
return (function route$entry$get_jobs_by_page(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31231 = arguments.length;
var i__25043__auto___31232 = (0);
while(true){
if((i__25043__auto___31232 < len__25042__auto___31231)){
args__25049__auto__.push((arguments[i__25043__auto___31232]));

var G__31233 = (i__25043__auto___31232 + (1));
i__25043__auto___31232 = G__31233;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31230))
;

route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31230){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/p/:page",args__25394__auto__);
});})(action__25395__auto___31230))
;

route.entry.get_jobs_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs_by_page.cljs$lang$applyTo = ((function (action__25395__auto___31230){
return (function (seq31229){
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31229));
});})(action__25395__auto___31230))
;
var action__25395__auto___31238 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31234 = params__25396__auto__;
var map__31234__$1 = ((((!((map__31234 == null)))?((((map__31234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31234):map__31234);
var id = cljs.core.get.call(null,map__31234__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31236 = params__25396__auto__;
var id = cljs.core.nth.call(null,vec__31236,(0),null);
return controller.entry.edit_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/edit/:id",action__25395__auto___31238);

route.entry.edit_job_by_id = ((function (action__25395__auto___31238){
return (function route$entry$edit_job_by_id(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31239 = arguments.length;
var i__25043__auto___31240 = (0);
while(true){
if((i__25043__auto___31240 < len__25042__auto___31239)){
args__25049__auto__.push((arguments[i__25043__auto___31240]));

var G__31241 = (i__25043__auto___31240 + (1));
i__25043__auto___31240 = G__31241;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31238))
;

route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31238){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/edit/:id",args__25394__auto__);
});})(action__25395__auto___31238))
;

route.entry.edit_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_job_by_id.cljs$lang$applyTo = ((function (action__25395__auto___31238){
return (function (seq31237){
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31237));
});})(action__25395__auto___31238))
;
var action__25395__auto___31246 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31242 = params__25396__auto__;
var map__31242__$1 = ((((!((map__31242 == null)))?((((map__31242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31242):map__31242);
var id = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31244 = params__25396__auto__;
var id = cljs.core.nth.call(null,vec__31244,(0),null);
return controller.entry.delete_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/delete/:id",action__25395__auto___31246);

route.entry.delete_job_by_id = ((function (action__25395__auto___31246){
return (function route$entry$delete_job_by_id(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31247 = arguments.length;
var i__25043__auto___31248 = (0);
while(true){
if((i__25043__auto___31248 < len__25042__auto___31247)){
args__25049__auto__.push((arguments[i__25043__auto___31248]));

var G__31249 = (i__25043__auto___31248 + (1));
i__25043__auto___31248 = G__31249;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31246))
;

route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31246){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/delete/:id",args__25394__auto__);
});})(action__25395__auto___31246))
;

route.entry.delete_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_job_by_id.cljs$lang$applyTo = ((function (action__25395__auto___31246){
return (function (seq31245){
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31245));
});})(action__25395__auto___31246))
;
var action__25395__auto___31254 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31250 = params__25396__auto__;
var map__31250__$1 = ((((!((map__31250 == null)))?((((map__31250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31250):map__31250);
return controller.entry.get_events_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31252 = params__25396__auto__;
return controller.entry.get_events_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event",action__25395__auto___31254);

route.entry.get_events = ((function (action__25395__auto___31254){
return (function route$entry$get_events(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31255 = arguments.length;
var i__25043__auto___31256 = (0);
while(true){
if((i__25043__auto___31256 < len__25042__auto___31255)){
args__25049__auto__.push((arguments[i__25043__auto___31256]));

var G__31257 = (i__25043__auto___31256 + (1));
i__25043__auto___31256 = G__31257;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31254))
;

route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31254){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event",args__25394__auto__);
});})(action__25395__auto___31254))
;

route.entry.get_events.cljs$lang$maxFixedArity = (0);

route.entry.get_events.cljs$lang$applyTo = ((function (action__25395__auto___31254){
return (function (seq31253){
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31253));
});})(action__25395__auto___31254))
;
var action__25395__auto___31262 = (function (params__25396__auto__){
if(cljs.core.map_QMARK_.call(null,params__25396__auto__)){
var map__31258 = params__25396__auto__;
var map__31258__$1 = ((((!((map__31258 == null)))?((((map__31258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);
var page = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_events_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25396__auto__)){
var vec__31260 = params__25396__auto__;
var page = cljs.core.nth.call(null,vec__31260,(0),null);
return controller.entry.get_events_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/p/:page",action__25395__auto___31262);

route.entry.get_event_by_page = ((function (action__25395__auto___31262){
return (function route$entry$get_event_by_page(var_args){
var args__25049__auto__ = [];
var len__25042__auto___31263 = arguments.length;
var i__25043__auto___31264 = (0);
while(true){
if((i__25043__auto___31264 < len__25042__auto___31263)){
args__25049__auto__.push((arguments[i__25043__auto___31264]));

var G__31265 = (i__25043__auto___31264 + (1));
i__25043__auto___31264 = G__31265;
continue;
} else {
}
break;
}

var argseq__25050__auto__ = ((((0) < args__25049__auto__.length))?(new cljs.core.IndexedSeq(args__25049__auto__.slice((0)),(0),null)):null);
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25050__auto__);
});})(action__25395__auto___31262))
;

route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25395__auto___31262){
return (function (args__25394__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/p/:page",args__25394__auto__);
});})(action__25395__auto___31262))
;

route.entry.get_event_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_event_by_page.cljs$lang$applyTo = ((function (action__25395__auto___31262){
return (function (seq31261){
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31261));
});})(action__25395__auto___31262))
;

//# sourceMappingURL=entry.js.map