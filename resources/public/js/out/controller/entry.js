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
controller.entry.delete_story_by_id = (function controller$entry$delete_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.story_entry.component_delete.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_story_button_yes.call(null,id);

return controller.entry.add_event_listener_to_story_button_no.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.delete_story = (function controller$entry$delete_story(id){
return ajax.core.DELETE.call(null,[cljs.core.str("/entry/story/delete/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return util.view.change_url.call(null,"/");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.dont_delete_story = (function controller$entry$dont_delete_story(){
return util.view.change_url.call(null,"/");
});
controller.entry.add_event_listener_to_add_comment_button = (function controller$entry$add_event_listener_to_add_comment_button(entry,id){
return goog.dom.getElement("buttonAddCommentId").addEventListener("click",(function (_){
return controller.comment_entry.add_comment.call(null,entry,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
}));
});
controller.entry.add_event_listener_to_upvote_buttons = (function controller$entry$add_event_listener_to_upvote_buttons(response){
var seq__26673 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"story-comments","story-comments",-631068375).cljs$core$IFn$_invoke$arity$1(response));
var chunk__26674 = null;
var count__26675 = (0);
var i__26676 = (0);
while(true){
if((i__26676 < count__26675)){
var commentt = cljs.core._nth.call(null,chunk__26674,i__26676);
var comment_id_26677 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26678 = new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26677,upvoted_comments_26678))){
} else {
var temp__4657__auto___26679 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26677)].join(''));
if(cljs.core.truth_(temp__4657__auto___26679)){
var node_26680 = temp__4657__auto___26679;
node_26680.addEventListener("click",((function (seq__26673,chunk__26674,count__26675,i__26676,node_26680,temp__4657__auto___26679,comment_id_26677,upvoted_comments_26678,commentt){
return (function (_){
return controller.upvote.upvote_story_comment.call(null,comment_id_26677);
});})(seq__26673,chunk__26674,count__26675,i__26676,node_26680,temp__4657__auto___26679,comment_id_26677,upvoted_comments_26678,commentt))
);
} else {
}
}

var G__26681 = seq__26673;
var G__26682 = chunk__26674;
var G__26683 = count__26675;
var G__26684 = (i__26676 + (1));
seq__26673 = G__26681;
chunk__26674 = G__26682;
count__26675 = G__26683;
i__26676 = G__26684;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26673);
if(temp__4657__auto__){
var seq__26673__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26673__$1)){
var c__24381__auto__ = cljs.core.chunk_first.call(null,seq__26673__$1);
var G__26685 = cljs.core.chunk_rest.call(null,seq__26673__$1);
var G__26686 = c__24381__auto__;
var G__26687 = cljs.core.count.call(null,c__24381__auto__);
var G__26688 = (0);
seq__26673 = G__26685;
chunk__26674 = G__26686;
count__26675 = G__26687;
i__26676 = G__26688;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__26673__$1);
var comment_id_26689 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26690 = new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26689,upvoted_comments_26690))){
} else {
var temp__4657__auto___26691__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26689)].join(''));
if(cljs.core.truth_(temp__4657__auto___26691__$1)){
var node_26692 = temp__4657__auto___26691__$1;
node_26692.addEventListener("click",((function (seq__26673,chunk__26674,count__26675,i__26676,node_26692,temp__4657__auto___26691__$1,comment_id_26689,upvoted_comments_26690,commentt,seq__26673__$1,temp__4657__auto__){
return (function (_){
return controller.upvote.upvote_story_comment.call(null,comment_id_26689);
});})(seq__26673,chunk__26674,count__26675,i__26676,node_26692,temp__4657__auto___26691__$1,comment_id_26689,upvoted_comments_26690,commentt,seq__26673__$1,temp__4657__auto__))
);
} else {
}
}

var G__26693 = cljs.core.next.call(null,seq__26673__$1);
var G__26694 = null;
var G__26695 = (0);
var G__26696 = (0);
seq__26673 = G__26693;
chunk__26674 = G__26694;
count__26675 = G__26695;
i__26676 = G__26696;
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
controller.entry.add_event_listener_to_story_button_yes = (function controller$entry$add_event_listener_to_story_button_yes(id){
return goog.dom.getElement("buttonDeleteStoryYesId").addEventListener("click",(function (_){
return controller.entry.delete_story.call(null,id);
}));
});
controller.entry.add_event_listener_to_story_button_no = (function controller$entry$add_event_listener_to_story_button_no(){
return goog.dom.getElement("buttonDeleteStoryNoId").addEventListener("click",(function (_){
return controller.entry.dont_delete_story.call(null);
}));
});

//# sourceMappingURL=entry.js.map