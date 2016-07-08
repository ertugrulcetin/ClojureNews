// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.comment_entry');
goog.require('cljs.core');
goog.require('cljc.validation');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('util.controller');
goog.require('view.comment_entry');
goog.require('util.view');
goog.require('clojure.string');
goog.require('controller.upvote');








controller.comment_entry.add_comment = (function controller$comment_entry$add_comment(entry,entry_id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data);
if(clojure.string.blank_QMARK_.call(null,entry_id)){
return util.view.render_error_message.call(null,"Could not find story");
} else {
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,text))){
return util.view.render_error_message.call(null,"Please limit text to 2500 characters.");
} else {
return ajax.core.PUT.call(null,"/comment",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry-id","entry-id",591934358),entry_id,new cljs.core.Keyword(null,"text","text",-1790561697),text], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,text){
return (function (_){
entry.call(null,entry_id);

return util.view.scroll_to_top.call(null);
});})(data,text))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});
controller.comment_entry.reply_comment_by_id = (function controller$comment_entry$reply_comment_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/comment/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,"Reply Comment");

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.comment_entry.component_reply.call(null,response);
})], null),util.view.main_container);

controller.comment_entry.add_event_listener_to_reply_button.call(null,id);

return controller.comment_entry.add_event_listener_to_upvote_button_for_comment.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.comment_entry.reply_comment = (function controller$comment_entry$reply_comment(parent_comment_id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,text))){
return util.view.render_error_message.call(null,"Please limit text to 2500 characters.");
} else {
return ajax.core.PUT.call(null,[cljs.core.str("/comment/reply")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent-comment-id","parent-comment-id",1063878971),parent_comment_id,new cljs.core.Keyword(null,"text","text",-1790561697),text], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,text){
return (function (response){
return util.view.change_url.call(null,[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"entry-id","entry-id",591934358).cljs$core$IFn$_invoke$arity$1(response))].join(''));
});})(data,text))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
});
controller.comment_entry.edit_comment_by_id = (function controller$comment_entry$edit_comment_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/comment/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,"Edit Comment");

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.comment_entry.component_edit.call(null,response);
})], null),util.view.main_container);

return controller.comment_entry.add_event_listener_to_edit_button.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.comment_entry.edit_comment = (function controller$comment_entry$edit_comment(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,text))){
return util.view.render_error_message.call(null,"Please limit text to 2500 characters.");
} else {
return ajax.core.POST.call(null,[cljs.core.str("/comment/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,text){
return (function (_){
return controller.comment_entry.edit_comment_by_id.call(null,id);
});})(data,text))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
});
controller.comment_entry.delete_comment_by_id = (function controller$comment_entry$delete_comment_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/comment/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,"Delete Comment");

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.comment_entry.component_delete.call(null,response);
})], null),util.view.main_container);

controller.comment_entry.add_event_listener_to_delete_yes_button.call(null,id);

return controller.comment_entry.add_event_listener_to_delete_no_button.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(response)),new cljs.core.Keyword(null,"entry-id","entry-id",591934358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment-entry","comment-entry",136408923).cljs$core$IFn$_invoke$arity$1(response)));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.comment_entry.delete_comment = (function controller$comment_entry$delete_comment(id){
return ajax.core.DELETE.call(null,[cljs.core.str("/comment/delete/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return util.view.change_url.call(null,[cljs.core.str("/#/"),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"entry-id","entry-id",591934358).cljs$core$IFn$_invoke$arity$1(response))].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.comment_entry.dont_delete_comment = (function controller$comment_entry$dont_delete_comment(type,entry_id){
return util.view.change_url.call(null,[cljs.core.str("/#/"),cljs.core.str(type),cljs.core.str("/"),cljs.core.str(entry_id)].join(''));
});
controller.comment_entry.add_event_listener_to_reply_button = (function controller$comment_entry$add_event_listener_to_reply_button(id){
return goog.dom.getElement("buttonReplyCommentId").addEventListener("click",(function (_){
return controller.comment_entry.reply_comment.call(null,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
}));
});
controller.comment_entry.add_event_listener_to_edit_button = (function controller$comment_entry$add_event_listener_to_edit_button(id){
return goog.dom.getElement("buttonEditCommentId").addEventListener("click",(function (_){
return controller.comment_entry.edit_comment.call(null,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
}));
});
controller.comment_entry.add_event_listener_to_delete_yes_button = (function controller$comment_entry$add_event_listener_to_delete_yes_button(id){
return goog.dom.getElement("buttonDeleteYesCommentId").addEventListener("click",(function (_){
return controller.comment_entry.delete_comment.call(null,id);
}));
});
controller.comment_entry.add_event_listener_to_delete_no_button = (function controller$comment_entry$add_event_listener_to_delete_no_button(type,entry_id){
return goog.dom.getElement("buttonDeleteNoCommentId").addEventListener("click",(function (_){
return controller.comment_entry.dont_delete_comment.call(null,type,entry_id);
}));
});
controller.comment_entry.add_event_listener_to_upvote_button_for_comment = (function controller$comment_entry$add_event_listener_to_upvote_button_for_comment(comment_id){
var temp__4657__auto__ = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id)].join(''));
if(cljs.core.truth_(temp__4657__auto__)){
var element = temp__4657__auto__;
return element.addEventListener("click",((function (element,temp__4657__auto__){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id);
});})(element,temp__4657__auto__))
);
} else {
return null;
}
});

//# sourceMappingURL=comment_entry.js.map