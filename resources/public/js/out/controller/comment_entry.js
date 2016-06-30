// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.comment_entry');
goog.require('cljs.core');
goog.require('cljc.validation');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('util.controller');
goog.require('view.comment_entry');
goog.require('util.view');
goog.require('clojure.string');

controller.comment_entry.get_story_comment_by_id = (function controller$comment_entry$get_story_comment_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/comment/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.comment_entry.component_story_comment.call(null,response,controller.comment_entry.reply_story_comment);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.comment_entry.reply_story_comment = (function controller$comment_entry$reply_story_comment(parent_comment_id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,text))){
return util.view.render_error_message.call(null,"Please limit text to 2500 characters.");
} else {
return ajax.core.PUT.call(null,[cljs.core.str("/comment/reply")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent-comment-id","parent-comment-id",1063878971),parent_comment_id,new cljs.core.Keyword(null,"text","text",-1790561697),text], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,text){
return (function (response){
return util.view.change_url.call(null,[cljs.core.str("/#/story/"),cljs.core.str(new cljs.core.Keyword(null,"entry-id","entry-id",591934358).cljs$core$IFn$_invoke$arity$1(response))].join(''));
});})(data,text))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
});
controller.comment_entry.edit_story_comment_by_id = (function controller$comment_entry$edit_story_comment_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/comment/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.comment_entry.component_edit.call(null,response,controller.comment_entry.edit_story);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.comment_entry.edit_story = (function controller$comment_entry$edit_story(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,text))){
return util.view.render_error_message.call(null,"Please limit text to 2500 characters.");
} else {
return ajax.core.POST.call(null,[cljs.core.str("/comment/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,text){
return (function (response){
return controller.comment_entry.edit_story_comment_by_id.call(null,id);
});})(data,text))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
});
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

return window.scrollTo((0),document.body.scrollHeight);
});})(data,text))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});

//# sourceMappingURL=comment_entry.js.map