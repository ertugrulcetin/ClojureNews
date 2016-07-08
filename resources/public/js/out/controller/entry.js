// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.entry');
goog.require('cljs.core');
goog.require('cljc.error_messages');
goog.require('cljc.validation');
goog.require('goog.dom');
goog.require('view.entry.story_entry');
goog.require('ajax.core');
goog.require('view.entry.ask_entry');
goog.require('view.entry.event');
goog.require('view.list.newest');
goog.require('reagent.core');
goog.require('view.list.job');
goog.require('view.entry.job');
goog.require('view.list.event');
goog.require('util.controller');
goog.require('util.view');
goog.require('view.list.story');
goog.require('controller.upvote');
goog.require('controller.comment_entry');
goog.require('view.list.ask');
















controller.entry.get_stories_by_page = (function controller$entry$get_stories_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,"Story");

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.story.component_list_story.call(null,response,page);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_upvote_buttons_for_entries.call(null,response,new cljs.core.Keyword(null,"story","story",-1000647533));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_story_by_id = (function controller$entry$get_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"story-entry","story-entry",-138370793).cljs$core$IFn$_invoke$arity$1(response)));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.story_entry.component_story.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$get_story_by_id,id);

controller.entry.add_event_listener_to_upvote_buttons_for_comments.call(null,response,new cljs.core.Keyword(null,"story","story",-1000647533));

return controller.entry.add_event_listener_to_upvote_button_for_entry.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_story_by_id = (function controller$entry$edit_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"story-entry","story-entry",-138370793).cljs$core$IFn$_invoke$arity$1(response)));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.story_entry.component_edit.call(null,response);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_edit_story_button.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_story = (function controller$entry$edit_story(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,title))){
return util.view.render_error_message.call(null,cljc.error_messages.title);
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
util.view.change_page_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"story-entry","story-entry",-138370793).cljs$core$IFn$_invoke$arity$1(response)));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.story_entry.component_delete.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_story_button_yes.call(null,id);

return controller.entry.add_event_listener_to_story_button_no.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.delete_story = (function controller$entry$delete_story(id){
return ajax.core.DELETE.call(null,[cljs.core.str("/entry/story/delete/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return util.view.change_url_to_story.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_ask_by_id = (function controller$entry$get_ask_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,[cljs.core.str("Ask CN: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ask-entry","ask-entry",-1154123184).cljs$core$IFn$_invoke$arity$1(response)))].join(''));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.ask_entry.component_ask.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$get_ask_by_id,id);

controller.entry.add_event_listener_to_upvote_buttons_for_comments.call(null,response,new cljs.core.Keyword(null,"ask","ask",707712414));

return controller.entry.add_event_listener_to_upvote_button_for_entry.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_ask_by_page = (function controller$entry$get_ask_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,"Ask");

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.ask.component_list_ask.call(null,response,page);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_upvote_buttons_for_entries.call(null,response,new cljs.core.Keyword(null,"ask","ask",707712414));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_ask_by_id = (function controller$entry$edit_ask_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,[cljs.core.str("Ask CN: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ask-entry","ask-entry",-1154123184).cljs$core$IFn$_invoke$arity$1(response)))].join(''));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.ask_entry.component_edit.call(null,response);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_edit_ask_button.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_ask = (function controller$entry$edit_ask(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,title))){
return util.view.render_error_message.call(null,cljc.error_messages.title);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,text))){
return util.view.render_error_message.call(null,cljc.error_messages.text);
} else {
return ajax.core.POST.call(null,[cljs.core.str("/entry/ask/edit/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,title,text){
return (function (_){
return util.view.change_url.call(null,[cljs.core.str("/#/ask/"),cljs.core.str(id)].join(''));
});})(data,title,text))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});
controller.entry.delete_ask_by_id = (function controller$entry$delete_ask_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,[cljs.core.str("Ask CN: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ask-entry","ask-entry",-1154123184).cljs$core$IFn$_invoke$arity$1(response)))].join(''));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.ask_entry.component_delete.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_ask_button_yes.call(null,id);

return controller.entry.add_event_listener_to_ask_button_no.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.delete_ask = (function controller$entry$delete_ask(id){
return ajax.core.DELETE.call(null,[cljs.core.str("/entry/ask/delete/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return util.view.change_url_to_ask.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_newest_by_page = (function controller$entry$get_newest_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/newest/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,"Newest");

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.newest.component_list_newest.call(null,response,page);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_upvote_buttons_for_newest_entries.call(null,response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_jobs_by_page = (function controller$entry$get_jobs_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/job/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,"Jobs");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.job.component_job.call(null,response,page);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_job_by_id = (function controller$entry$edit_job_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/job/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"job-entry","job-entry",-430611870).cljs$core$IFn$_invoke$arity$1(response)));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.job.component_edit.call(null,response);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_edit_job_button.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_job = (function controller$entry$edit_job(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data);
var country = new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(data);
var city = new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,title))){
return util.view.render_error_message.call(null,cljc.error_messages.title);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_url_QMARK_.call(null,url))){
return util.view.render_error_message.call(null,cljc.error_messages.url);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_country_QMARK_.call(null,country))){
return util.view.render_error_message.call(null,cljc.error_messages.country);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_city_QMARK_.call(null,city))){
return util.view.render_error_message.call(null,cljc.error_messages.city);
} else {
return ajax.core.POST.call(null,[cljs.core.str("/entry/job/edit/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"remote?","remote?",-517415110),goog.dom.getElement("remoteId").checked),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,title,url,country,city){
return (function (_){
return util.view.change_url_to_jobs.call(null);
});})(data,title,url,country,city))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
}
}
});
controller.entry.delete_job_by_id = (function controller$entry$delete_job_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/job/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"job-entry","job-entry",-430611870).cljs$core$IFn$_invoke$arity$1(response)));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.job.component_delete.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_delete_job_button_yes.call(null,id);

return controller.entry.add_event_listener_to_delete_job_button_no.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.delete_job = (function controller$entry$delete_job(id){
return ajax.core.DELETE.call(null,[cljs.core.str("/entry/job/delete/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return util.view.change_url_to_jobs.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_events_by_page = (function controller$entry$get_events_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/event/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,"Events");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.event.component_event.call(null,response,page);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_event_by_id = (function controller$entry$edit_event_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/event/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-entry","event-entry",-1035282568).cljs$core$IFn$_invoke$arity$1(response)));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.event.component_edit.call(null,response);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_edit_event_button.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_event = (function controller$entry$edit_event(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data);
var country = new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(data);
var city = new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(data);
var day = new cljs.core.Keyword(null,"starting-date-day","starting-date-day",-305858969).cljs$core$IFn$_invoke$arity$1(data);
var month = new cljs.core.Keyword(null,"starting-date-month","starting-date-month",1958326926).cljs$core$IFn$_invoke$arity$1(data);
var year = new cljs.core.Keyword(null,"starting-date-year","starting-date-year",-1947111290).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,title))){
return util.view.render_error_message.call(null,cljc.error_messages.title);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_url_QMARK_.call(null,url))){
return util.view.render_error_message.call(null,cljc.error_messages.url);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_country_QMARK_.call(null,country))){
return util.view.render_error_message.call(null,cljc.error_messages.country);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_city_QMARK_.call(null,city))){
return util.view.render_error_message.call(null,cljc.error_messages.city);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_day_QMARK_.call(null,day))){
return util.view.render_error_message.call(null,cljc.error_messages.day);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_month_QMARK_.call(null,month))){
return util.view.render_error_message.call(null,cljc.error_messages.month);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_year_QMARK_.call(null,year))){
return util.view.render_error_message.call(null,cljc.error_messages.year);
} else {
return ajax.core.POST.call(null,[cljs.core.str("/entry/event/edit/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,title,url,country,city,day,month,year){
return (function (_){
return util.view.change_url_to_events.call(null);
});})(data,title,url,country,city,day,month,year))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
}
}
}
}
}
});
controller.entry.delete_event_by_id = (function controller$entry$delete_event_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/event/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-entry","event-entry",-1035282568).cljs$core$IFn$_invoke$arity$1(response)));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.event.component_delete.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_delete_event_button_yes.call(null,id);

return controller.entry.add_event_listener_to_delete_event_button_no.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.delete_event = (function controller$entry$delete_event(id){
return ajax.core.DELETE.call(null,[cljs.core.str("/entry/event/delete/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return util.view.change_url_to_events.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.add_event_listener_to_add_comment_button = (function controller$entry$add_event_listener_to_add_comment_button(entry,id){
return goog.dom.getElement("buttonAddCommentId").addEventListener("click",(function (_){
return controller.comment_entry.add_comment.call(null,entry,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
}));
});
controller.entry.add_event_listener_to_upvote_buttons_for_comments = (function controller$entry$add_event_listener_to_upvote_buttons_for_comments(response,type){
var comments = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"story","story",-1000647533)))?new cljs.core.Keyword(null,"story-comments","story-comments",-631068375):new cljs.core.Keyword(null,"ask-comments","ask-comments",-767991465));
var upvoted_comments = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"story","story",-1000647533)))?new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215):new cljs.core.Keyword(null,"ask-upvoted-comments","ask-upvoted-comments",241263239));
var seq__27635 = cljs.core.seq.call(null,comments.call(null,response));
var chunk__27636 = null;
var count__27637 = (0);
var i__27638 = (0);
while(true){
if((i__27638 < count__27637)){
var commentt = cljs.core._nth.call(null,chunk__27636,i__27638);
var comment_id_27639 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_27640__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_27639,upvoted_comments_27640__$1))){
} else {
var temp__4657__auto___27641 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_27639)].join(''));
if(cljs.core.truth_(temp__4657__auto___27641)){
var node_27642 = temp__4657__auto___27641;
node_27642.addEventListener("click",((function (seq__27635,chunk__27636,count__27637,i__27638,node_27642,temp__4657__auto___27641,comment_id_27639,upvoted_comments_27640__$1,commentt,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_27639);
});})(seq__27635,chunk__27636,count__27637,i__27638,node_27642,temp__4657__auto___27641,comment_id_27639,upvoted_comments_27640__$1,commentt,comments,upvoted_comments))
);
} else {
}
}

var G__27643 = seq__27635;
var G__27644 = chunk__27636;
var G__27645 = count__27637;
var G__27646 = (i__27638 + (1));
seq__27635 = G__27643;
chunk__27636 = G__27644;
count__27637 = G__27645;
i__27638 = G__27646;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27635);
if(temp__4657__auto__){
var seq__27635__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27635__$1)){
var c__24813__auto__ = cljs.core.chunk_first.call(null,seq__27635__$1);
var G__27647 = cljs.core.chunk_rest.call(null,seq__27635__$1);
var G__27648 = c__24813__auto__;
var G__27649 = cljs.core.count.call(null,c__24813__auto__);
var G__27650 = (0);
seq__27635 = G__27647;
chunk__27636 = G__27648;
count__27637 = G__27649;
i__27638 = G__27650;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__27635__$1);
var comment_id_27651 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_27652__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_27651,upvoted_comments_27652__$1))){
} else {
var temp__4657__auto___27653__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_27651)].join(''));
if(cljs.core.truth_(temp__4657__auto___27653__$1)){
var node_27654 = temp__4657__auto___27653__$1;
node_27654.addEventListener("click",((function (seq__27635,chunk__27636,count__27637,i__27638,node_27654,temp__4657__auto___27653__$1,comment_id_27651,upvoted_comments_27652__$1,commentt,seq__27635__$1,temp__4657__auto__,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_27651);
});})(seq__27635,chunk__27636,count__27637,i__27638,node_27654,temp__4657__auto___27653__$1,comment_id_27651,upvoted_comments_27652__$1,commentt,seq__27635__$1,temp__4657__auto__,comments,upvoted_comments))
);
} else {
}
}

var G__27655 = cljs.core.next.call(null,seq__27635__$1);
var G__27656 = null;
var G__27657 = (0);
var G__27658 = (0);
seq__27635 = G__27655;
chunk__27636 = G__27656;
count__27637 = G__27657;
i__27638 = G__27658;
continue;
}
} else {
return null;
}
}
break;
}
});
controller.entry.add_event_listener_to_upvote_buttons_for_entries = (function controller$entry$add_event_listener_to_upvote_buttons_for_entries(response,type){
var entries = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"story","story",-1000647533)))?new cljs.core.Keyword(null,"story-entry","story-entry",-138370793):new cljs.core.Keyword(null,"ask-entry","ask-entry",-1154123184));
var upvoted_entries = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"story","story",-1000647533)))?new cljs.core.Keyword(null,"story-upvoted-entries","story-upvoted-entries",-255549109):new cljs.core.Keyword(null,"ask-upvoted-entries","ask-upvoted-entries",-19252064));
var seq__27663 = cljs.core.seq.call(null,entries.call(null,response));
var chunk__27664 = null;
var count__27665 = (0);
var i__27666 = (0);
while(true){
if((i__27666 < count__27665)){
var entry = cljs.core._nth.call(null,chunk__27664,i__27666);
var entry_id_27667 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_27668 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_27667,upvoted_entries_coll_27668))){
} else {
var temp__4657__auto___27669 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_27667)].join(''));
if(cljs.core.truth_(temp__4657__auto___27669)){
var node_27670 = temp__4657__auto___27669;
node_27670.addEventListener("click",((function (seq__27663,chunk__27664,count__27665,i__27666,node_27670,temp__4657__auto___27669,entry_id_27667,upvoted_entries_coll_27668,entry,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_27667);
});})(seq__27663,chunk__27664,count__27665,i__27666,node_27670,temp__4657__auto___27669,entry_id_27667,upvoted_entries_coll_27668,entry,entries,upvoted_entries))
);
} else {
}
}

var G__27671 = seq__27663;
var G__27672 = chunk__27664;
var G__27673 = count__27665;
var G__27674 = (i__27666 + (1));
seq__27663 = G__27671;
chunk__27664 = G__27672;
count__27665 = G__27673;
i__27666 = G__27674;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27663);
if(temp__4657__auto__){
var seq__27663__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27663__$1)){
var c__24813__auto__ = cljs.core.chunk_first.call(null,seq__27663__$1);
var G__27675 = cljs.core.chunk_rest.call(null,seq__27663__$1);
var G__27676 = c__24813__auto__;
var G__27677 = cljs.core.count.call(null,c__24813__auto__);
var G__27678 = (0);
seq__27663 = G__27675;
chunk__27664 = G__27676;
count__27665 = G__27677;
i__27666 = G__27678;
continue;
} else {
var entry = cljs.core.first.call(null,seq__27663__$1);
var entry_id_27679 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_27680 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_27679,upvoted_entries_coll_27680))){
} else {
var temp__4657__auto___27681__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_27679)].join(''));
if(cljs.core.truth_(temp__4657__auto___27681__$1)){
var node_27682 = temp__4657__auto___27681__$1;
node_27682.addEventListener("click",((function (seq__27663,chunk__27664,count__27665,i__27666,node_27682,temp__4657__auto___27681__$1,entry_id_27679,upvoted_entries_coll_27680,entry,seq__27663__$1,temp__4657__auto__,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_27679);
});})(seq__27663,chunk__27664,count__27665,i__27666,node_27682,temp__4657__auto___27681__$1,entry_id_27679,upvoted_entries_coll_27680,entry,seq__27663__$1,temp__4657__auto__,entries,upvoted_entries))
);
} else {
}
}

var G__27683 = cljs.core.next.call(null,seq__27663__$1);
var G__27684 = null;
var G__27685 = (0);
var G__27686 = (0);
seq__27663 = G__27683;
chunk__27664 = G__27684;
count__27665 = G__27685;
i__27666 = G__27686;
continue;
}
} else {
return null;
}
}
break;
}
});
controller.entry.add_event_listener_to_upvote_buttons_for_newest_entries = (function controller$entry$add_event_listener_to_upvote_buttons_for_newest_entries(response){
var entries = new cljs.core.Keyword(null,"newest-entry","newest-entry",200989318);
var upvoted_entries = new cljs.core.Keyword(null,"newest-upvoted-entries","newest-upvoted-entries",1127648269);
var seq__27691 = cljs.core.seq.call(null,entries.call(null,response));
var chunk__27692 = null;
var count__27693 = (0);
var i__27694 = (0);
while(true){
if((i__27694 < count__27693)){
var entry = cljs.core._nth.call(null,chunk__27692,i__27694);
var entry_id_27695 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_27696 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_27695,upvoted_entries_coll_27696))){
} else {
var temp__4657__auto___27697 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_27695)].join(''));
if(cljs.core.truth_(temp__4657__auto___27697)){
var node_27698 = temp__4657__auto___27697;
node_27698.addEventListener("click",((function (seq__27691,chunk__27692,count__27693,i__27694,node_27698,temp__4657__auto___27697,entry_id_27695,upvoted_entries_coll_27696,entry,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_27695);
});})(seq__27691,chunk__27692,count__27693,i__27694,node_27698,temp__4657__auto___27697,entry_id_27695,upvoted_entries_coll_27696,entry,entries,upvoted_entries))
);
} else {
}
}

var G__27699 = seq__27691;
var G__27700 = chunk__27692;
var G__27701 = count__27693;
var G__27702 = (i__27694 + (1));
seq__27691 = G__27699;
chunk__27692 = G__27700;
count__27693 = G__27701;
i__27694 = G__27702;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27691);
if(temp__4657__auto__){
var seq__27691__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27691__$1)){
var c__24813__auto__ = cljs.core.chunk_first.call(null,seq__27691__$1);
var G__27703 = cljs.core.chunk_rest.call(null,seq__27691__$1);
var G__27704 = c__24813__auto__;
var G__27705 = cljs.core.count.call(null,c__24813__auto__);
var G__27706 = (0);
seq__27691 = G__27703;
chunk__27692 = G__27704;
count__27693 = G__27705;
i__27694 = G__27706;
continue;
} else {
var entry = cljs.core.first.call(null,seq__27691__$1);
var entry_id_27707 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_27708 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_27707,upvoted_entries_coll_27708))){
} else {
var temp__4657__auto___27709__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_27707)].join(''));
if(cljs.core.truth_(temp__4657__auto___27709__$1)){
var node_27710 = temp__4657__auto___27709__$1;
node_27710.addEventListener("click",((function (seq__27691,chunk__27692,count__27693,i__27694,node_27710,temp__4657__auto___27709__$1,entry_id_27707,upvoted_entries_coll_27708,entry,seq__27691__$1,temp__4657__auto__,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_27707);
});})(seq__27691,chunk__27692,count__27693,i__27694,node_27710,temp__4657__auto___27709__$1,entry_id_27707,upvoted_entries_coll_27708,entry,seq__27691__$1,temp__4657__auto__,entries,upvoted_entries))
);
} else {
}
}

var G__27711 = cljs.core.next.call(null,seq__27691__$1);
var G__27712 = null;
var G__27713 = (0);
var G__27714 = (0);
seq__27691 = G__27711;
chunk__27692 = G__27712;
count__27693 = G__27713;
i__27694 = G__27714;
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
controller.entry.add_event_listener_to_edit_ask_button = (function controller$entry$add_event_listener_to_edit_ask_button(id){
return goog.dom.getElement("buttonAskEditId").addEventListener("click",(function (_){
return controller.entry.edit_ask.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["titleId","textId"], null));
}));
});
controller.entry.add_event_listener_to_story_button_yes = (function controller$entry$add_event_listener_to_story_button_yes(id){
return goog.dom.getElement("buttonDeleteStoryYesId").addEventListener("click",(function (_){
return controller.entry.delete_story.call(null,id);
}));
});
controller.entry.add_event_listener_to_story_button_no = (function controller$entry$add_event_listener_to_story_button_no(){
return goog.dom.getElement("buttonDeleteStoryNoId").addEventListener("click",(function (_){
return util.view.change_url_to_story.call(null);
}));
});
controller.entry.add_event_listener_to_ask_button_yes = (function controller$entry$add_event_listener_to_ask_button_yes(id){
return goog.dom.getElement("buttonDeleteAskYesId").addEventListener("click",(function (_){
return controller.entry.delete_ask.call(null,id);
}));
});
controller.entry.add_event_listener_to_ask_button_no = (function controller$entry$add_event_listener_to_ask_button_no(){
return goog.dom.getElement("buttonDeleteAskNoId").addEventListener("click",(function (_){
return util.view.change_url_to_ask.call(null);
}));
});
controller.entry.add_event_listener_to_edit_job_button = (function controller$entry$add_event_listener_to_edit_job_button(id){
return goog.dom.getElement("jobEditButtonId").addEventListener("click",(function (_){
return controller.entry.edit_job.call(null,id,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["titleId","urlId","countryId","cityId","remoteId"], null));
}));
});
controller.entry.add_event_listener_to_delete_job_button_yes = (function controller$entry$add_event_listener_to_delete_job_button_yes(id){
return goog.dom.getElement("buttonDeleteJobYesId").addEventListener("click",(function (_){
return controller.entry.delete_job.call(null,id);
}));
});
controller.entry.add_event_listener_to_delete_job_button_no = (function controller$entry$add_event_listener_to_delete_job_button_no(){
return goog.dom.getElement("buttonDeleteJobNoId").addEventListener("click",(function (_){
return util.view.change_url_to_jobs.call(null);
}));
});
controller.entry.add_event_listener_to_edit_event_button = (function controller$entry$add_event_listener_to_edit_event_button(id){
return goog.dom.getElement("eventEditButtonId").addEventListener("click",(function (_){
return controller.entry.edit_event.call(null,id,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["titleId","urlId","countryId","cityId","startingDateDayId","startingDateMonthId","startingDateYearId"], null));
}));
});
controller.entry.add_event_listener_to_delete_event_button_yes = (function controller$entry$add_event_listener_to_delete_event_button_yes(id){
return goog.dom.getElement("buttonDeleteEventYesId").addEventListener("click",(function (_){
return controller.entry.delete_event.call(null,id);
}));
});
controller.entry.add_event_listener_to_delete_event_button_no = (function controller$entry$add_event_listener_to_delete_event_button_no(){
return goog.dom.getElement("buttonDeleteEventNoId").addEventListener("click",(function (_){
return util.view.change_url_to_events.call(null);
}));
});
controller.entry.add_event_listener_to_upvote_button_for_entry = (function controller$entry$add_event_listener_to_upvote_button_for_entry(entry_id){
var temp__4657__auto__ = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id)].join(''));
if(cljs.core.truth_(temp__4657__auto__)){
var element = temp__4657__auto__;
return element.addEventListener("click",((function (element,temp__4657__auto__){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id);
});})(element,temp__4657__auto__))
);
} else {
return null;
}
});

//# sourceMappingURL=entry.js.map