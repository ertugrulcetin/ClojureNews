// Compiled by ClojureScript 1.8.51 {}
goog.provide('route.entry');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('controller.entry');
var action__25417__auto___26868 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26864 = params__25418__auto__;
var map__26864__$1 = ((((!((map__26864 == null)))?((((map__26864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26864):map__26864);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26866 = params__25418__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25417__auto___26868);

route.entry.home_page = ((function (action__25417__auto___26868){
return (function route$entry$home_page(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26869 = arguments.length;
var i__25065__auto___26870 = (0);
while(true){
if((i__25065__auto___26870 < len__25064__auto___26869)){
args__25071__auto__.push((arguments[i__25065__auto___26870]));

var G__26871 = (i__25065__auto___26870 + (1));
i__25065__auto___26870 = G__26871;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26868))
;

route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26868){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__25416__auto__);
});})(action__25417__auto___26868))
;

route.entry.home_page.cljs$lang$maxFixedArity = (0);

route.entry.home_page.cljs$lang$applyTo = ((function (action__25417__auto___26868){
return (function (seq26867){
return route.entry.home_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26867));
});})(action__25417__auto___26868))
;
var action__25417__auto___26876 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26872 = params__25418__auto__;
var map__26872__$1 = ((((!((map__26872 == null)))?((((map__26872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26872):map__26872);
return controller.entry.get_stories_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26874 = params__25418__auto__;
return controller.entry.get_stories_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story",action__25417__auto___26876);

route.entry.get_stories = ((function (action__25417__auto___26876){
return (function route$entry$get_stories(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26877 = arguments.length;
var i__25065__auto___26878 = (0);
while(true){
if((i__25065__auto___26878 < len__25064__auto___26877)){
args__25071__auto__.push((arguments[i__25065__auto___26878]));

var G__26879 = (i__25065__auto___26878 + (1));
i__25065__auto___26878 = G__26879;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26876))
;

route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26876){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story",args__25416__auto__);
});})(action__25417__auto___26876))
;

route.entry.get_stories.cljs$lang$maxFixedArity = (0);

route.entry.get_stories.cljs$lang$applyTo = ((function (action__25417__auto___26876){
return (function (seq26875){
return route.entry.get_stories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26875));
});})(action__25417__auto___26876))
;
var action__25417__auto___26884 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26880 = params__25418__auto__;
var map__26880__$1 = ((((!((map__26880 == null)))?((((map__26880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26880):map__26880);
var id = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26882 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__26882,(0),null);
return controller.entry.get_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/:id",action__25417__auto___26884);

route.entry.get_story_by_id = ((function (action__25417__auto___26884){
return (function route$entry$get_story_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26885 = arguments.length;
var i__25065__auto___26886 = (0);
while(true){
if((i__25065__auto___26886 < len__25064__auto___26885)){
args__25071__auto__.push((arguments[i__25065__auto___26886]));

var G__26887 = (i__25065__auto___26886 + (1));
i__25065__auto___26886 = G__26887;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26884))
;

route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26884){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/:id",args__25416__auto__);
});})(action__25417__auto___26884))
;

route.entry.get_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_story_by_id.cljs$lang$applyTo = ((function (action__25417__auto___26884){
return (function (seq26883){
return route.entry.get_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26883));
});})(action__25417__auto___26884))
;
var action__25417__auto___26892 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26888 = params__25418__auto__;
var map__26888__$1 = ((((!((map__26888 == null)))?((((map__26888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26888):map__26888);
var page = cljs.core.get.call(null,map__26888__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_stories_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26890 = params__25418__auto__;
var page = cljs.core.nth.call(null,vec__26890,(0),null);
return controller.entry.get_stories_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/p/:page",action__25417__auto___26892);

route.entry.get_stories_by_page = ((function (action__25417__auto___26892){
return (function route$entry$get_stories_by_page(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26893 = arguments.length;
var i__25065__auto___26894 = (0);
while(true){
if((i__25065__auto___26894 < len__25064__auto___26893)){
args__25071__auto__.push((arguments[i__25065__auto___26894]));

var G__26895 = (i__25065__auto___26894 + (1));
i__25065__auto___26894 = G__26895;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26892))
;

route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26892){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/p/:page",args__25416__auto__);
});})(action__25417__auto___26892))
;

route.entry.get_stories_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_stories_by_page.cljs$lang$applyTo = ((function (action__25417__auto___26892){
return (function (seq26891){
return route.entry.get_stories_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26891));
});})(action__25417__auto___26892))
;
var action__25417__auto___26900 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26896 = params__25418__auto__;
var map__26896__$1 = ((((!((map__26896 == null)))?((((map__26896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26896):map__26896);
var id = cljs.core.get.call(null,map__26896__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26898 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__26898,(0),null);
return controller.entry.edit_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/edit/:id",action__25417__auto___26900);

route.entry.edit_story_by_id = ((function (action__25417__auto___26900){
return (function route$entry$edit_story_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26901 = arguments.length;
var i__25065__auto___26902 = (0);
while(true){
if((i__25065__auto___26902 < len__25064__auto___26901)){
args__25071__auto__.push((arguments[i__25065__auto___26902]));

var G__26903 = (i__25065__auto___26902 + (1));
i__25065__auto___26902 = G__26903;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26900))
;

route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26900){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/edit/:id",args__25416__auto__);
});})(action__25417__auto___26900))
;

route.entry.edit_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_story_by_id.cljs$lang$applyTo = ((function (action__25417__auto___26900){
return (function (seq26899){
return route.entry.edit_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26899));
});})(action__25417__auto___26900))
;
var action__25417__auto___26908 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26904 = params__25418__auto__;
var map__26904__$1 = ((((!((map__26904 == null)))?((((map__26904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26904):map__26904);
var id = cljs.core.get.call(null,map__26904__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_story_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26906 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__26906,(0),null);
return controller.entry.delete_story_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/story/delete/:id",action__25417__auto___26908);

route.entry.delete_story_by_id = ((function (action__25417__auto___26908){
return (function route$entry$delete_story_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26909 = arguments.length;
var i__25065__auto___26910 = (0);
while(true){
if((i__25065__auto___26910 < len__25064__auto___26909)){
args__25071__auto__.push((arguments[i__25065__auto___26910]));

var G__26911 = (i__25065__auto___26910 + (1));
i__25065__auto___26910 = G__26911;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26908))
;

route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26908){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/story/delete/:id",args__25416__auto__);
});})(action__25417__auto___26908))
;

route.entry.delete_story_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_story_by_id.cljs$lang$applyTo = ((function (action__25417__auto___26908){
return (function (seq26907){
return route.entry.delete_story_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26907));
});})(action__25417__auto___26908))
;
var action__25417__auto___26916 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26912 = params__25418__auto__;
var map__26912__$1 = ((((!((map__26912 == null)))?((((map__26912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26912):map__26912);
return controller.entry.get_ask_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26914 = params__25418__auto__;
return controller.entry.get_ask_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask",action__25417__auto___26916);

route.entry.get_asks = ((function (action__25417__auto___26916){
return (function route$entry$get_asks(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26917 = arguments.length;
var i__25065__auto___26918 = (0);
while(true){
if((i__25065__auto___26918 < len__25064__auto___26917)){
args__25071__auto__.push((arguments[i__25065__auto___26918]));

var G__26919 = (i__25065__auto___26918 + (1));
i__25065__auto___26918 = G__26919;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26916))
;

route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26916){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask",args__25416__auto__);
});})(action__25417__auto___26916))
;

route.entry.get_asks.cljs$lang$maxFixedArity = (0);

route.entry.get_asks.cljs$lang$applyTo = ((function (action__25417__auto___26916){
return (function (seq26915){
return route.entry.get_asks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26915));
});})(action__25417__auto___26916))
;
var action__25417__auto___26924 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26920 = params__25418__auto__;
var map__26920__$1 = ((((!((map__26920 == null)))?((((map__26920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26920):map__26920);
var id = cljs.core.get.call(null,map__26920__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.get_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26922 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__26922,(0),null);
return controller.entry.get_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/:id",action__25417__auto___26924);

route.entry.get_ask_by_id = ((function (action__25417__auto___26924){
return (function route$entry$get_ask_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26925 = arguments.length;
var i__25065__auto___26926 = (0);
while(true){
if((i__25065__auto___26926 < len__25064__auto___26925)){
args__25071__auto__.push((arguments[i__25065__auto___26926]));

var G__26927 = (i__25065__auto___26926 + (1));
i__25065__auto___26926 = G__26927;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26924))
;

route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26924){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/:id",args__25416__auto__);
});})(action__25417__auto___26924))
;

route.entry.get_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_id.cljs$lang$applyTo = ((function (action__25417__auto___26924){
return (function (seq26923){
return route.entry.get_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26923));
});})(action__25417__auto___26924))
;
var action__25417__auto___26932 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26928 = params__25418__auto__;
var map__26928__$1 = ((((!((map__26928 == null)))?((((map__26928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26928):map__26928);
var page = cljs.core.get.call(null,map__26928__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_ask_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26930 = params__25418__auto__;
var page = cljs.core.nth.call(null,vec__26930,(0),null);
return controller.entry.get_ask_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/p/:page",action__25417__auto___26932);

route.entry.get_ask_by_page = ((function (action__25417__auto___26932){
return (function route$entry$get_ask_by_page(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26933 = arguments.length;
var i__25065__auto___26934 = (0);
while(true){
if((i__25065__auto___26934 < len__25064__auto___26933)){
args__25071__auto__.push((arguments[i__25065__auto___26934]));

var G__26935 = (i__25065__auto___26934 + (1));
i__25065__auto___26934 = G__26935;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26932))
;

route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26932){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/p/:page",args__25416__auto__);
});})(action__25417__auto___26932))
;

route.entry.get_ask_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_ask_by_page.cljs$lang$applyTo = ((function (action__25417__auto___26932){
return (function (seq26931){
return route.entry.get_ask_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26931));
});})(action__25417__auto___26932))
;
var action__25417__auto___26940 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26936 = params__25418__auto__;
var map__26936__$1 = ((((!((map__26936 == null)))?((((map__26936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26936):map__26936);
var id = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26938 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__26938,(0),null);
return controller.entry.edit_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/edit/:id",action__25417__auto___26940);

route.entry.edit_ask_by_id = ((function (action__25417__auto___26940){
return (function route$entry$edit_ask_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26941 = arguments.length;
var i__25065__auto___26942 = (0);
while(true){
if((i__25065__auto___26942 < len__25064__auto___26941)){
args__25071__auto__.push((arguments[i__25065__auto___26942]));

var G__26943 = (i__25065__auto___26942 + (1));
i__25065__auto___26942 = G__26943;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26940))
;

route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26940){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/edit/:id",args__25416__auto__);
});})(action__25417__auto___26940))
;

route.entry.edit_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_ask_by_id.cljs$lang$applyTo = ((function (action__25417__auto___26940){
return (function (seq26939){
return route.entry.edit_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26939));
});})(action__25417__auto___26940))
;
var action__25417__auto___26948 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26944 = params__25418__auto__;
var map__26944__$1 = ((((!((map__26944 == null)))?((((map__26944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26944):map__26944);
var id = cljs.core.get.call(null,map__26944__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_ask_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26946 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__26946,(0),null);
return controller.entry.delete_ask_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ask/delete/:id",action__25417__auto___26948);

route.entry.delete_ask_by_id = ((function (action__25417__auto___26948){
return (function route$entry$delete_ask_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26949 = arguments.length;
var i__25065__auto___26950 = (0);
while(true){
if((i__25065__auto___26950 < len__25064__auto___26949)){
args__25071__auto__.push((arguments[i__25065__auto___26950]));

var G__26951 = (i__25065__auto___26950 + (1));
i__25065__auto___26950 = G__26951;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26948))
;

route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26948){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ask/delete/:id",args__25416__auto__);
});})(action__25417__auto___26948))
;

route.entry.delete_ask_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_ask_by_id.cljs$lang$applyTo = ((function (action__25417__auto___26948){
return (function (seq26947){
return route.entry.delete_ask_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26947));
});})(action__25417__auto___26948))
;
var action__25417__auto___26956 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26952 = params__25418__auto__;
var map__26952__$1 = ((((!((map__26952 == null)))?((((map__26952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26952):map__26952);
return controller.entry.get_newest_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26954 = params__25418__auto__;
return controller.entry.get_newest_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__25417__auto___26956);

route.entry.get_newest = ((function (action__25417__auto___26956){
return (function route$entry$get_newest(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26957 = arguments.length;
var i__25065__auto___26958 = (0);
while(true){
if((i__25065__auto___26958 < len__25064__auto___26957)){
args__25071__auto__.push((arguments[i__25065__auto___26958]));

var G__26959 = (i__25065__auto___26958 + (1));
i__25065__auto___26958 = G__26959;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26956))
;

route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26956){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new",args__25416__auto__);
});})(action__25417__auto___26956))
;

route.entry.get_newest.cljs$lang$maxFixedArity = (0);

route.entry.get_newest.cljs$lang$applyTo = ((function (action__25417__auto___26956){
return (function (seq26955){
return route.entry.get_newest.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26955));
});})(action__25417__auto___26956))
;
var action__25417__auto___26964 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26960 = params__25418__auto__;
var map__26960__$1 = ((((!((map__26960 == null)))?((((map__26960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var page = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_newest_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26962 = params__25418__auto__;
var page = cljs.core.nth.call(null,vec__26962,(0),null);
return controller.entry.get_newest_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new/p/:page",action__25417__auto___26964);

route.entry.get_newest_by_page = ((function (action__25417__auto___26964){
return (function route$entry$get_newest_by_page(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26965 = arguments.length;
var i__25065__auto___26966 = (0);
while(true){
if((i__25065__auto___26966 < len__25064__auto___26965)){
args__25071__auto__.push((arguments[i__25065__auto___26966]));

var G__26967 = (i__25065__auto___26966 + (1));
i__25065__auto___26966 = G__26967;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26964))
;

route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26964){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new/p/:page",args__25416__auto__);
});})(action__25417__auto___26964))
;

route.entry.get_newest_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_newest_by_page.cljs$lang$applyTo = ((function (action__25417__auto___26964){
return (function (seq26963){
return route.entry.get_newest_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26963));
});})(action__25417__auto___26964))
;
var action__25417__auto___26972 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26968 = params__25418__auto__;
var map__26968__$1 = ((((!((map__26968 == null)))?((((map__26968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26968):map__26968);
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26970 = params__25418__auto__;
return controller.entry.get_jobs_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job",action__25417__auto___26972);

route.entry.get_jobs = ((function (action__25417__auto___26972){
return (function route$entry$get_jobs(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26973 = arguments.length;
var i__25065__auto___26974 = (0);
while(true){
if((i__25065__auto___26974 < len__25064__auto___26973)){
args__25071__auto__.push((arguments[i__25065__auto___26974]));

var G__26975 = (i__25065__auto___26974 + (1));
i__25065__auto___26974 = G__26975;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26972))
;

route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26972){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job",args__25416__auto__);
});})(action__25417__auto___26972))
;

route.entry.get_jobs.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs.cljs$lang$applyTo = ((function (action__25417__auto___26972){
return (function (seq26971){
return route.entry.get_jobs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26971));
});})(action__25417__auto___26972))
;
var action__25417__auto___26980 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26976 = params__25418__auto__;
var map__26976__$1 = ((((!((map__26976 == null)))?((((map__26976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26976):map__26976);
var page = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_jobs_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26978 = params__25418__auto__;
var page = cljs.core.nth.call(null,vec__26978,(0),null);
return controller.entry.get_jobs_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/p/:page",action__25417__auto___26980);

route.entry.get_jobs_by_page = ((function (action__25417__auto___26980){
return (function route$entry$get_jobs_by_page(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26981 = arguments.length;
var i__25065__auto___26982 = (0);
while(true){
if((i__25065__auto___26982 < len__25064__auto___26981)){
args__25071__auto__.push((arguments[i__25065__auto___26982]));

var G__26983 = (i__25065__auto___26982 + (1));
i__25065__auto___26982 = G__26983;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26980))
;

route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26980){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/p/:page",args__25416__auto__);
});})(action__25417__auto___26980))
;

route.entry.get_jobs_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_jobs_by_page.cljs$lang$applyTo = ((function (action__25417__auto___26980){
return (function (seq26979){
return route.entry.get_jobs_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26979));
});})(action__25417__auto___26980))
;
var action__25417__auto___26988 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26984 = params__25418__auto__;
var map__26984__$1 = ((((!((map__26984 == null)))?((((map__26984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26984):map__26984);
var id = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26986 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__26986,(0),null);
return controller.entry.edit_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/edit/:id",action__25417__auto___26988);

route.entry.edit_job_by_id = ((function (action__25417__auto___26988){
return (function route$entry$edit_job_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26989 = arguments.length;
var i__25065__auto___26990 = (0);
while(true){
if((i__25065__auto___26990 < len__25064__auto___26989)){
args__25071__auto__.push((arguments[i__25065__auto___26990]));

var G__26991 = (i__25065__auto___26990 + (1));
i__25065__auto___26990 = G__26991;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26988))
;

route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26988){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/edit/:id",args__25416__auto__);
});})(action__25417__auto___26988))
;

route.entry.edit_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_job_by_id.cljs$lang$applyTo = ((function (action__25417__auto___26988){
return (function (seq26987){
return route.entry.edit_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26987));
});})(action__25417__auto___26988))
;
var action__25417__auto___26996 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__26992 = params__25418__auto__;
var map__26992__$1 = ((((!((map__26992 == null)))?((((map__26992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26992):map__26992);
var id = cljs.core.get.call(null,map__26992__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_job_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__26994 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__26994,(0),null);
return controller.entry.delete_job_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/job/delete/:id",action__25417__auto___26996);

route.entry.delete_job_by_id = ((function (action__25417__auto___26996){
return (function route$entry$delete_job_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___26997 = arguments.length;
var i__25065__auto___26998 = (0);
while(true){
if((i__25065__auto___26998 < len__25064__auto___26997)){
args__25071__auto__.push((arguments[i__25065__auto___26998]));

var G__26999 = (i__25065__auto___26998 + (1));
i__25065__auto___26998 = G__26999;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___26996))
;

route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___26996){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/job/delete/:id",args__25416__auto__);
});})(action__25417__auto___26996))
;

route.entry.delete_job_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_job_by_id.cljs$lang$applyTo = ((function (action__25417__auto___26996){
return (function (seq26995){
return route.entry.delete_job_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26995));
});})(action__25417__auto___26996))
;
var action__25417__auto___27004 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__27000 = params__25418__auto__;
var map__27000__$1 = ((((!((map__27000 == null)))?((((map__27000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27000):map__27000);
return controller.entry.get_events_by_page.call(null,"1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__27002 = params__25418__auto__;
return controller.entry.get_events_by_page.call(null,"1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event",action__25417__auto___27004);

route.entry.get_events = ((function (action__25417__auto___27004){
return (function route$entry$get_events(var_args){
var args__25071__auto__ = [];
var len__25064__auto___27005 = arguments.length;
var i__25065__auto___27006 = (0);
while(true){
if((i__25065__auto___27006 < len__25064__auto___27005)){
args__25071__auto__.push((arguments[i__25065__auto___27006]));

var G__27007 = (i__25065__auto___27006 + (1));
i__25065__auto___27006 = G__27007;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___27004))
;

route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___27004){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event",args__25416__auto__);
});})(action__25417__auto___27004))
;

route.entry.get_events.cljs$lang$maxFixedArity = (0);

route.entry.get_events.cljs$lang$applyTo = ((function (action__25417__auto___27004){
return (function (seq27003){
return route.entry.get_events.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27003));
});})(action__25417__auto___27004))
;
var action__25417__auto___27012 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__27008 = params__25418__auto__;
var map__27008__$1 = ((((!((map__27008 == null)))?((((map__27008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27008):map__27008);
var page = cljs.core.get.call(null,map__27008__$1,new cljs.core.Keyword(null,"page","page",849072397));
return controller.entry.get_events_by_page.call(null,page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__27010 = params__25418__auto__;
var page = cljs.core.nth.call(null,vec__27010,(0),null);
return controller.entry.get_events_by_page.call(null,page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/p/:page",action__25417__auto___27012);

route.entry.get_event_by_page = ((function (action__25417__auto___27012){
return (function route$entry$get_event_by_page(var_args){
var args__25071__auto__ = [];
var len__25064__auto___27013 = arguments.length;
var i__25065__auto___27014 = (0);
while(true){
if((i__25065__auto___27014 < len__25064__auto___27013)){
args__25071__auto__.push((arguments[i__25065__auto___27014]));

var G__27015 = (i__25065__auto___27014 + (1));
i__25065__auto___27014 = G__27015;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___27012))
;

route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___27012){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/p/:page",args__25416__auto__);
});})(action__25417__auto___27012))
;

route.entry.get_event_by_page.cljs$lang$maxFixedArity = (0);

route.entry.get_event_by_page.cljs$lang$applyTo = ((function (action__25417__auto___27012){
return (function (seq27011){
return route.entry.get_event_by_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27011));
});})(action__25417__auto___27012))
;
var action__25417__auto___27020 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__27016 = params__25418__auto__;
var map__27016__$1 = ((((!((map__27016 == null)))?((((map__27016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27016):map__27016);
var id = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.edit_event_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__27018 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__27018,(0),null);
return controller.entry.edit_event_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/edit/:id",action__25417__auto___27020);

route.entry.edit_event_by_id = ((function (action__25417__auto___27020){
return (function route$entry$edit_event_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___27021 = arguments.length;
var i__25065__auto___27022 = (0);
while(true){
if((i__25065__auto___27022 < len__25064__auto___27021)){
args__25071__auto__.push((arguments[i__25065__auto___27022]));

var G__27023 = (i__25065__auto___27022 + (1));
i__25065__auto___27022 = G__27023;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.edit_event_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___27020))
;

route.entry.edit_event_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___27020){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/edit/:id",args__25416__auto__);
});})(action__25417__auto___27020))
;

route.entry.edit_event_by_id.cljs$lang$maxFixedArity = (0);

route.entry.edit_event_by_id.cljs$lang$applyTo = ((function (action__25417__auto___27020){
return (function (seq27019){
return route.entry.edit_event_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27019));
});})(action__25417__auto___27020))
;
var action__25417__auto___27028 = (function (params__25418__auto__){
if(cljs.core.map_QMARK_.call(null,params__25418__auto__)){
var map__27024 = params__25418__auto__;
var map__27024__$1 = ((((!((map__27024 == null)))?((((map__27024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27024):map__27024);
var id = cljs.core.get.call(null,map__27024__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return controller.entry.delete_event_by_id.call(null,id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__25418__auto__)){
var vec__27026 = params__25418__auto__;
var id = cljs.core.nth.call(null,vec__27026,(0),null);
return controller.entry.delete_event_by_id.call(null,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/event/delete/:id",action__25417__auto___27028);

route.entry.delete_event_by_id = ((function (action__25417__auto___27028){
return (function route$entry$delete_event_by_id(var_args){
var args__25071__auto__ = [];
var len__25064__auto___27029 = arguments.length;
var i__25065__auto___27030 = (0);
while(true){
if((i__25065__auto___27030 < len__25064__auto___27029)){
args__25071__auto__.push((arguments[i__25065__auto___27030]));

var G__27031 = (i__25065__auto___27030 + (1));
i__25065__auto___27030 = G__27031;
continue;
} else {
}
break;
}

var argseq__25072__auto__ = ((((0) < args__25071__auto__.length))?(new cljs.core.IndexedSeq(args__25071__auto__.slice((0)),(0),null)):null);
return route.entry.delete_event_by_id.cljs$core$IFn$_invoke$arity$variadic(argseq__25072__auto__);
});})(action__25417__auto___27028))
;

route.entry.delete_event_by_id.cljs$core$IFn$_invoke$arity$variadic = ((function (action__25417__auto___27028){
return (function (args__25416__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/event/delete/:id",args__25416__auto__);
});})(action__25417__auto___27028))
;

route.entry.delete_event_by_id.cljs$lang$maxFixedArity = (0);

route.entry.delete_event_by_id.cljs$lang$applyTo = ((function (action__25417__auto___27028){
return (function (seq27027){
return route.entry.delete_event_by_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27027));
});})(action__25417__auto___27028))
;

//# sourceMappingURL=entry.js.map