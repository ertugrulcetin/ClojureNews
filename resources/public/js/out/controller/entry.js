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
return util.view.change_url.call(null,"/#/");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_ask_by_id = (function controller$entry$get_ask_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
util.view.change_page_title.call(null,[cljs.core.str("Ask CN: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ask-entry","ask-entry",-1154123184).cljs$core$IFn$_invoke$arity$1(response)))].join(''));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.ask_entry.component_ask.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$get_ask_by_id,id);

return controller.entry.add_event_listener_to_upvote_buttons_for_comments.call(null,response,new cljs.core.Keyword(null,"ask","ask",707712414));
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
return util.view.change_url.call(null,"/#/");
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
return util.view.change_url.call(null,"/");
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
return util.view.change_url.call(null,"/#/");
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
return util.view.change_url.call(null,"/");
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
return util.view.change_url.call(null,"/#/");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.dont_delete_story = (function controller$entry$dont_delete_story(){
return util.view.change_url.call(null,"/#/");
});
controller.entry.dont_delete_ask = (function controller$entry$dont_delete_ask(){
return util.view.change_url.call(null,"/#/");
});
controller.entry.dont_delete_job = (function controller$entry$dont_delete_job(){
return util.view.change_url.call(null,"/#/");
});
controller.entry.dont_delete_event = (function controller$entry$dont_delete_event(){
return util.view.change_url.call(null,"/#/");
});
controller.entry.add_event_listener_to_add_comment_button = (function controller$entry$add_event_listener_to_add_comment_button(entry,id){
return goog.dom.getElement("buttonAddCommentId").addEventListener("click",(function (_){
return controller.comment_entry.add_comment.call(null,entry,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
}));
});
controller.entry.add_event_listener_to_upvote_buttons_for_comments = (function controller$entry$add_event_listener_to_upvote_buttons_for_comments(response,type){
var comments = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"story","story",-1000647533)))?new cljs.core.Keyword(null,"story-comments","story-comments",-631068375):new cljs.core.Keyword(null,"ask-comments","ask-comments",-767991465));
var upvoted_comments = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"story","story",-1000647533)))?new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215):new cljs.core.Keyword(null,"ask-upvoted-comments","ask-upvoted-comments",241263239));
var seq__27888 = cljs.core.seq.call(null,comments.call(null,response));
var chunk__27889 = null;
var count__27890 = (0);
var i__27891 = (0);
while(true){
if((i__27891 < count__27890)){
var commentt = cljs.core._nth.call(null,chunk__27889,i__27891);
var comment_id_27892 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_27893__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_27892,upvoted_comments_27893__$1))){
} else {
var temp__4657__auto___27894 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_27892)].join(''));
if(cljs.core.truth_(temp__4657__auto___27894)){
var node_27895 = temp__4657__auto___27894;
node_27895.addEventListener("click",((function (seq__27888,chunk__27889,count__27890,i__27891,node_27895,temp__4657__auto___27894,comment_id_27892,upvoted_comments_27893__$1,commentt,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_27892);
});})(seq__27888,chunk__27889,count__27890,i__27891,node_27895,temp__4657__auto___27894,comment_id_27892,upvoted_comments_27893__$1,commentt,comments,upvoted_comments))
);
} else {
}
}

var G__27896 = seq__27888;
var G__27897 = chunk__27889;
var G__27898 = count__27890;
var G__27899 = (i__27891 + (1));
seq__27888 = G__27896;
chunk__27889 = G__27897;
count__27890 = G__27898;
i__27891 = G__27899;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27888);
if(temp__4657__auto__){
var seq__27888__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27888__$1)){
var c__24807__auto__ = cljs.core.chunk_first.call(null,seq__27888__$1);
var G__27900 = cljs.core.chunk_rest.call(null,seq__27888__$1);
var G__27901 = c__24807__auto__;
var G__27902 = cljs.core.count.call(null,c__24807__auto__);
var G__27903 = (0);
seq__27888 = G__27900;
chunk__27889 = G__27901;
count__27890 = G__27902;
i__27891 = G__27903;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__27888__$1);
var comment_id_27904 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_27905__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_27904,upvoted_comments_27905__$1))){
} else {
var temp__4657__auto___27906__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_27904)].join(''));
if(cljs.core.truth_(temp__4657__auto___27906__$1)){
var node_27907 = temp__4657__auto___27906__$1;
node_27907.addEventListener("click",((function (seq__27888,chunk__27889,count__27890,i__27891,node_27907,temp__4657__auto___27906__$1,comment_id_27904,upvoted_comments_27905__$1,commentt,seq__27888__$1,temp__4657__auto__,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_27904);
});})(seq__27888,chunk__27889,count__27890,i__27891,node_27907,temp__4657__auto___27906__$1,comment_id_27904,upvoted_comments_27905__$1,commentt,seq__27888__$1,temp__4657__auto__,comments,upvoted_comments))
);
} else {
}
}

var G__27908 = cljs.core.next.call(null,seq__27888__$1);
var G__27909 = null;
var G__27910 = (0);
var G__27911 = (0);
seq__27888 = G__27908;
chunk__27889 = G__27909;
count__27890 = G__27910;
i__27891 = G__27911;
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
var seq__27916 = cljs.core.seq.call(null,entries.call(null,response));
var chunk__27917 = null;
var count__27918 = (0);
var i__27919 = (0);
while(true){
if((i__27919 < count__27918)){
var entry = cljs.core._nth.call(null,chunk__27917,i__27919);
var entry_id_27920 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_27921 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_27920,upvoted_entries_coll_27921))){
} else {
var temp__4657__auto___27922 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_27920)].join(''));
if(cljs.core.truth_(temp__4657__auto___27922)){
var node_27923 = temp__4657__auto___27922;
node_27923.addEventListener("click",((function (seq__27916,chunk__27917,count__27918,i__27919,node_27923,temp__4657__auto___27922,entry_id_27920,upvoted_entries_coll_27921,entry,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_27920);
});})(seq__27916,chunk__27917,count__27918,i__27919,node_27923,temp__4657__auto___27922,entry_id_27920,upvoted_entries_coll_27921,entry,entries,upvoted_entries))
);
} else {
}
}

var G__27924 = seq__27916;
var G__27925 = chunk__27917;
var G__27926 = count__27918;
var G__27927 = (i__27919 + (1));
seq__27916 = G__27924;
chunk__27917 = G__27925;
count__27918 = G__27926;
i__27919 = G__27927;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27916);
if(temp__4657__auto__){
var seq__27916__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27916__$1)){
var c__24807__auto__ = cljs.core.chunk_first.call(null,seq__27916__$1);
var G__27928 = cljs.core.chunk_rest.call(null,seq__27916__$1);
var G__27929 = c__24807__auto__;
var G__27930 = cljs.core.count.call(null,c__24807__auto__);
var G__27931 = (0);
seq__27916 = G__27928;
chunk__27917 = G__27929;
count__27918 = G__27930;
i__27919 = G__27931;
continue;
} else {
var entry = cljs.core.first.call(null,seq__27916__$1);
var entry_id_27932 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_27933 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_27932,upvoted_entries_coll_27933))){
} else {
var temp__4657__auto___27934__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_27932)].join(''));
if(cljs.core.truth_(temp__4657__auto___27934__$1)){
var node_27935 = temp__4657__auto___27934__$1;
node_27935.addEventListener("click",((function (seq__27916,chunk__27917,count__27918,i__27919,node_27935,temp__4657__auto___27934__$1,entry_id_27932,upvoted_entries_coll_27933,entry,seq__27916__$1,temp__4657__auto__,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_27932);
});})(seq__27916,chunk__27917,count__27918,i__27919,node_27935,temp__4657__auto___27934__$1,entry_id_27932,upvoted_entries_coll_27933,entry,seq__27916__$1,temp__4657__auto__,entries,upvoted_entries))
);
} else {
}
}

var G__27936 = cljs.core.next.call(null,seq__27916__$1);
var G__27937 = null;
var G__27938 = (0);
var G__27939 = (0);
seq__27916 = G__27936;
chunk__27917 = G__27937;
count__27918 = G__27938;
i__27919 = G__27939;
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
var seq__27944 = cljs.core.seq.call(null,entries.call(null,response));
var chunk__27945 = null;
var count__27946 = (0);
var i__27947 = (0);
while(true){
if((i__27947 < count__27946)){
var entry = cljs.core._nth.call(null,chunk__27945,i__27947);
var entry_id_27948 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_27949 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_27948,upvoted_entries_coll_27949))){
} else {
var temp__4657__auto___27950 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_27948)].join(''));
if(cljs.core.truth_(temp__4657__auto___27950)){
var node_27951 = temp__4657__auto___27950;
node_27951.addEventListener("click",((function (seq__27944,chunk__27945,count__27946,i__27947,node_27951,temp__4657__auto___27950,entry_id_27948,upvoted_entries_coll_27949,entry,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_27948);
});})(seq__27944,chunk__27945,count__27946,i__27947,node_27951,temp__4657__auto___27950,entry_id_27948,upvoted_entries_coll_27949,entry,entries,upvoted_entries))
);
} else {
}
}

var G__27952 = seq__27944;
var G__27953 = chunk__27945;
var G__27954 = count__27946;
var G__27955 = (i__27947 + (1));
seq__27944 = G__27952;
chunk__27945 = G__27953;
count__27946 = G__27954;
i__27947 = G__27955;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27944);
if(temp__4657__auto__){
var seq__27944__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27944__$1)){
var c__24807__auto__ = cljs.core.chunk_first.call(null,seq__27944__$1);
var G__27956 = cljs.core.chunk_rest.call(null,seq__27944__$1);
var G__27957 = c__24807__auto__;
var G__27958 = cljs.core.count.call(null,c__24807__auto__);
var G__27959 = (0);
seq__27944 = G__27956;
chunk__27945 = G__27957;
count__27946 = G__27958;
i__27947 = G__27959;
continue;
} else {
var entry = cljs.core.first.call(null,seq__27944__$1);
var entry_id_27960 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_27961 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_27960,upvoted_entries_coll_27961))){
} else {
var temp__4657__auto___27962__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_27960)].join(''));
if(cljs.core.truth_(temp__4657__auto___27962__$1)){
var node_27963 = temp__4657__auto___27962__$1;
node_27963.addEventListener("click",((function (seq__27944,chunk__27945,count__27946,i__27947,node_27963,temp__4657__auto___27962__$1,entry_id_27960,upvoted_entries_coll_27961,entry,seq__27944__$1,temp__4657__auto__,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_27960);
});})(seq__27944,chunk__27945,count__27946,i__27947,node_27963,temp__4657__auto___27962__$1,entry_id_27960,upvoted_entries_coll_27961,entry,seq__27944__$1,temp__4657__auto__,entries,upvoted_entries))
);
} else {
}
}

var G__27964 = cljs.core.next.call(null,seq__27944__$1);
var G__27965 = null;
var G__27966 = (0);
var G__27967 = (0);
seq__27944 = G__27964;
chunk__27945 = G__27965;
count__27946 = G__27966;
i__27947 = G__27967;
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
return controller.entry.dont_delete_story.call(null);
}));
});
controller.entry.add_event_listener_to_ask_button_yes = (function controller$entry$add_event_listener_to_ask_button_yes(id){
return goog.dom.getElement("buttonDeleteAskYesId").addEventListener("click",(function (_){
return controller.entry.delete_ask.call(null,id);
}));
});
controller.entry.add_event_listener_to_ask_button_no = (function controller$entry$add_event_listener_to_ask_button_no(){
return goog.dom.getElement("buttonDeleteAskNoId").addEventListener("click",(function (_){
return controller.entry.dont_delete_ask.call(null);
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
return controller.entry.dont_delete_job.call(null);
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
return controller.entry.dont_delete_event.call(null);
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