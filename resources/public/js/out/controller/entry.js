// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.entry');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('util.controller');
goog.require('view.entry');
goog.require('util.view');
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
var seq__26342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"story-comments","story-comments",-631068375).cljs$core$IFn$_invoke$arity$1(response));
var chunk__26343 = null;
var count__26344 = (0);
var i__26345 = (0);
while(true){
if((i__26345 < count__26344)){
var commentt = cljs.core._nth.call(null,chunk__26343,i__26345);
var comment_id_26346 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26347 = new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26346,upvoted_comments_26347))){
} else {
var temp__4657__auto___26348 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26346)].join(''));
if(cljs.core.truth_(temp__4657__auto___26348)){
var node_26349 = temp__4657__auto___26348;
node_26349.addEventListener("click",((function (seq__26342,chunk__26343,count__26344,i__26345,node_26349,temp__4657__auto___26348,comment_id_26346,upvoted_comments_26347,commentt){
return (function (_){
return controller.upvote.upvote_story_comment.call(null,comment_id_26346);
});})(seq__26342,chunk__26343,count__26344,i__26345,node_26349,temp__4657__auto___26348,comment_id_26346,upvoted_comments_26347,commentt))
);
} else {
}
}

var G__26350 = seq__26342;
var G__26351 = chunk__26343;
var G__26352 = count__26344;
var G__26353 = (i__26345 + (1));
seq__26342 = G__26350;
chunk__26343 = G__26351;
count__26344 = G__26352;
i__26345 = G__26353;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26342);
if(temp__4657__auto__){
var seq__26342__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26342__$1)){
var c__24324__auto__ = cljs.core.chunk_first.call(null,seq__26342__$1);
var G__26354 = cljs.core.chunk_rest.call(null,seq__26342__$1);
var G__26355 = c__24324__auto__;
var G__26356 = cljs.core.count.call(null,c__24324__auto__);
var G__26357 = (0);
seq__26342 = G__26354;
chunk__26343 = G__26355;
count__26344 = G__26356;
i__26345 = G__26357;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__26342__$1);
var comment_id_26358 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26359 = new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26358,upvoted_comments_26359))){
} else {
var temp__4657__auto___26360__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26358)].join(''));
if(cljs.core.truth_(temp__4657__auto___26360__$1)){
var node_26361 = temp__4657__auto___26360__$1;
node_26361.addEventListener("click",((function (seq__26342,chunk__26343,count__26344,i__26345,node_26361,temp__4657__auto___26360__$1,comment_id_26358,upvoted_comments_26359,commentt,seq__26342__$1,temp__4657__auto__){
return (function (_){
return controller.upvote.upvote_story_comment.call(null,comment_id_26358);
});})(seq__26342,chunk__26343,count__26344,i__26345,node_26361,temp__4657__auto___26360__$1,comment_id_26358,upvoted_comments_26359,commentt,seq__26342__$1,temp__4657__auto__))
);
} else {
}
}

var G__26362 = cljs.core.next.call(null,seq__26342__$1);
var G__26363 = null;
var G__26364 = (0);
var G__26365 = (0);
seq__26342 = G__26362;
chunk__26343 = G__26363;
count__26344 = G__26364;
i__26345 = G__26365;
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