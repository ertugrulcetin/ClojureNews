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
goog.require('view.story_entry');
goog.require('controller.upvote');
goog.require('controller.comment_entry');


controller.entry.home_page = (function controller$entry$home_page(){
return ajax.core.GET.call(null,"/entry",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.component_story_and_ask.call(null,response);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_story_by_id = (function controller$entry$get_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.story_entry.component_story.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$get_story_by_id,id);

return controller.entry.add_event_listener_to_upvote_buttons.call(null,response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_story_by_id = (function controller$entry$edit_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.story_entry.component_edit.call(null,response);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_edit_story_button.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_story = (function controller$entry$edit_story(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,title))){
return util.view.render_error_message.call(null,"Please limit title to 80 characters.");
} else {
return ajax.core.POST.call(null,[cljs.core.str("/entry/story/edit/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,title){
return (function (_){
return util.view.change_url.call(null,[cljs.core.str("/#/story/"),cljs.core.str(id)].join(''));
});})(data,title))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
});
controller.entry.add_event_listener_to_add_comment_button = (function controller$entry$add_event_listener_to_add_comment_button(entry,id){
return goog.dom.getElement("buttonAddCommentId").addEventListener("click",(function (_){
return controller.comment_entry.add_comment.call(null,entry,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
}));
});
controller.entry.add_event_listener_to_upvote_buttons = (function controller$entry$add_event_listener_to_upvote_buttons(response){
var seq__26377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"story-comments","story-comments",-631068375).cljs$core$IFn$_invoke$arity$1(response));
var chunk__26378 = null;
var count__26379 = (0);
var i__26380 = (0);
while(true){
if((i__26380 < count__26379)){
var commentt = cljs.core._nth.call(null,chunk__26378,i__26380);
var comment_id_26381 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26382 = new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26381,upvoted_comments_26382))){
} else {
var temp__4657__auto___26383 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26381)].join(''));
if(cljs.core.truth_(temp__4657__auto___26383)){
var node_26384 = temp__4657__auto___26383;
node_26384.addEventListener("click",((function (seq__26377,chunk__26378,count__26379,i__26380,node_26384,temp__4657__auto___26383,comment_id_26381,upvoted_comments_26382,commentt){
return (function (_){
return controller.upvote.upvote_story_comment.call(null,comment_id_26381);
});})(seq__26377,chunk__26378,count__26379,i__26380,node_26384,temp__4657__auto___26383,comment_id_26381,upvoted_comments_26382,commentt))
);
} else {
}
}

var G__26385 = seq__26377;
var G__26386 = chunk__26378;
var G__26387 = count__26379;
var G__26388 = (i__26380 + (1));
seq__26377 = G__26385;
chunk__26378 = G__26386;
count__26379 = G__26387;
i__26380 = G__26388;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26377);
if(temp__4657__auto__){
var seq__26377__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26377__$1)){
var c__24381__auto__ = cljs.core.chunk_first.call(null,seq__26377__$1);
var G__26389 = cljs.core.chunk_rest.call(null,seq__26377__$1);
var G__26390 = c__24381__auto__;
var G__26391 = cljs.core.count.call(null,c__24381__auto__);
var G__26392 = (0);
seq__26377 = G__26389;
chunk__26378 = G__26390;
count__26379 = G__26391;
i__26380 = G__26392;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__26377__$1);
var comment_id_26393 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26394 = new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26393,upvoted_comments_26394))){
} else {
var temp__4657__auto___26395__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26393)].join(''));
if(cljs.core.truth_(temp__4657__auto___26395__$1)){
var node_26396 = temp__4657__auto___26395__$1;
node_26396.addEventListener("click",((function (seq__26377,chunk__26378,count__26379,i__26380,node_26396,temp__4657__auto___26395__$1,comment_id_26393,upvoted_comments_26394,commentt,seq__26377__$1,temp__4657__auto__){
return (function (_){
return controller.upvote.upvote_story_comment.call(null,comment_id_26393);
});})(seq__26377,chunk__26378,count__26379,i__26380,node_26396,temp__4657__auto___26395__$1,comment_id_26393,upvoted_comments_26394,commentt,seq__26377__$1,temp__4657__auto__))
);
} else {
}
}

var G__26397 = cljs.core.next.call(null,seq__26377__$1);
var G__26398 = null;
var G__26399 = (0);
var G__26400 = (0);
seq__26377 = G__26397;
chunk__26378 = G__26398;
count__26379 = G__26399;
i__26380 = G__26400;
continue;
}
} else {
return null;
}
}
break;
}
});
controller.entry.add_event_listener_to_edit_story_button = (function controller$entry$add_event_listener_to_edit_story_button(id){
return goog.dom.getElement("buttonStoryEditId").addEventListener("click",(function (_){
return controller.entry.edit_story.call(null,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["titleId"], null));
}));
});

//# sourceMappingURL=entry.js.map