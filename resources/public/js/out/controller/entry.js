// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.entry');
goog.require('cljs.core');
goog.require('cljc.validation');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('util.controller');
goog.require('view.entry');
goog.require('util.view');
goog.require('clojure.string');
goog.require('controller.upvote');
goog.require('controller.comment_entry');

controller.entry.home_page = (function controller$entry$home_page(){
return ajax.core.GET.call(null,"/entry",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.component_story_and_ask.call(null,response);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.story = (function controller$entry$story(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.story.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$story,id);

return controller.entry.add_event_listener_to_upvote_buttons.call(null,response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.add_event_listener_to_add_comment_button = (function controller$entry$add_event_listener_to_add_comment_button(entry,id){
return goog.dom.getElement("buttonAddCommentId").addEventListener("click",(function (_){
return controller.comment_entry.add_comment.call(null,entry,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
}));
});
controller.entry.add_event_listener_to_upvote_buttons = (function controller$entry$add_event_listener_to_upvote_buttons(response){
var seq__28980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"story-comments","story-comments",-631068375).cljs$core$IFn$_invoke$arity$1(response));
var chunk__28981 = null;
var count__28982 = (0);
var i__28983 = (0);
while(true){
if((i__28983 < count__28982)){
var commentt = cljs.core._nth.call(null,chunk__28981,i__28983);
var comment_id_28984 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_28985 = new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_28984,upvoted_comments_28985))){
} else {
var temp__4657__auto___28986 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_28984)].join(''));
if(cljs.core.truth_(temp__4657__auto___28986)){
var node_28987 = temp__4657__auto___28986;
node_28987.addEventListener("click",((function (seq__28980,chunk__28981,count__28982,i__28983,node_28987,temp__4657__auto___28986,comment_id_28984,upvoted_comments_28985,commentt){
return (function (_){
return controller.upvote.upvote_story_comment.call(null,comment_id_28984);
});})(seq__28980,chunk__28981,count__28982,i__28983,node_28987,temp__4657__auto___28986,comment_id_28984,upvoted_comments_28985,commentt))
);
} else {
}
}

var G__28988 = seq__28980;
var G__28989 = chunk__28981;
var G__28990 = count__28982;
var G__28991 = (i__28983 + (1));
seq__28980 = G__28988;
chunk__28981 = G__28989;
count__28982 = G__28990;
i__28983 = G__28991;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28980);
if(temp__4657__auto__){
var seq__28980__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28980__$1)){
var c__24323__auto__ = cljs.core.chunk_first.call(null,seq__28980__$1);
var G__28992 = cljs.core.chunk_rest.call(null,seq__28980__$1);
var G__28993 = c__24323__auto__;
var G__28994 = cljs.core.count.call(null,c__24323__auto__);
var G__28995 = (0);
seq__28980 = G__28992;
chunk__28981 = G__28993;
count__28982 = G__28994;
i__28983 = G__28995;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__28980__$1);
var comment_id_28996 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_28997 = new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_28996,upvoted_comments_28997))){
} else {
var temp__4657__auto___28998__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_28996)].join(''));
if(cljs.core.truth_(temp__4657__auto___28998__$1)){
var node_28999 = temp__4657__auto___28998__$1;
node_28999.addEventListener("click",((function (seq__28980,chunk__28981,count__28982,i__28983,node_28999,temp__4657__auto___28998__$1,comment_id_28996,upvoted_comments_28997,commentt,seq__28980__$1,temp__4657__auto__){
return (function (_){
return controller.upvote.upvote_story_comment.call(null,comment_id_28996);
});})(seq__28980,chunk__28981,count__28982,i__28983,node_28999,temp__4657__auto___28998__$1,comment_id_28996,upvoted_comments_28997,commentt,seq__28980__$1,temp__4657__auto__))
);
} else {
}
}

var G__29000 = cljs.core.next.call(null,seq__28980__$1);
var G__29001 = null;
var G__29002 = (0);
var G__29003 = (0);
seq__28980 = G__29000;
chunk__28981 = G__29001;
count__28982 = G__29002;
i__28983 = G__29003;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=entry.js.map