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
var seq__28169 = cljs.core.seq.call(null,comments.call(null,response));
var chunk__28170 = null;
var count__28171 = (0);
var i__28172 = (0);
while(true){
if((i__28172 < count__28171)){
var commentt = cljs.core._nth.call(null,chunk__28170,i__28172);
var comment_id_28173 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_28174__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_28173,upvoted_comments_28174__$1))){
} else {
var temp__4657__auto___28175 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_28173)].join(''));
if(cljs.core.truth_(temp__4657__auto___28175)){
var node_28176 = temp__4657__auto___28175;
node_28176.addEventListener("click",((function (seq__28169,chunk__28170,count__28171,i__28172,node_28176,temp__4657__auto___28175,comment_id_28173,upvoted_comments_28174__$1,commentt,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_28173);
});})(seq__28169,chunk__28170,count__28171,i__28172,node_28176,temp__4657__auto___28175,comment_id_28173,upvoted_comments_28174__$1,commentt,comments,upvoted_comments))
);
} else {
}
}

var G__28177 = seq__28169;
var G__28178 = chunk__28170;
var G__28179 = count__28171;
var G__28180 = (i__28172 + (1));
seq__28169 = G__28177;
chunk__28170 = G__28178;
count__28171 = G__28179;
i__28172 = G__28180;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28169);
if(temp__4657__auto__){
var seq__28169__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28169__$1)){
var c__24807__auto__ = cljs.core.chunk_first.call(null,seq__28169__$1);
var G__28181 = cljs.core.chunk_rest.call(null,seq__28169__$1);
var G__28182 = c__24807__auto__;
var G__28183 = cljs.core.count.call(null,c__24807__auto__);
var G__28184 = (0);
seq__28169 = G__28181;
chunk__28170 = G__28182;
count__28171 = G__28183;
i__28172 = G__28184;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__28169__$1);
var comment_id_28185 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_28186__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_28185,upvoted_comments_28186__$1))){
} else {
var temp__4657__auto___28187__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_28185)].join(''));
if(cljs.core.truth_(temp__4657__auto___28187__$1)){
var node_28188 = temp__4657__auto___28187__$1;
node_28188.addEventListener("click",((function (seq__28169,chunk__28170,count__28171,i__28172,node_28188,temp__4657__auto___28187__$1,comment_id_28185,upvoted_comments_28186__$1,commentt,seq__28169__$1,temp__4657__auto__,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_28185);
});})(seq__28169,chunk__28170,count__28171,i__28172,node_28188,temp__4657__auto___28187__$1,comment_id_28185,upvoted_comments_28186__$1,commentt,seq__28169__$1,temp__4657__auto__,comments,upvoted_comments))
);
} else {
}
}

var G__28189 = cljs.core.next.call(null,seq__28169__$1);
var G__28190 = null;
var G__28191 = (0);
var G__28192 = (0);
seq__28169 = G__28189;
chunk__28170 = G__28190;
count__28171 = G__28191;
i__28172 = G__28192;
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
var seq__28197 = cljs.core.seq.call(null,entries.call(null,response));
var chunk__28198 = null;
var count__28199 = (0);
var i__28200 = (0);
while(true){
if((i__28200 < count__28199)){
var entry = cljs.core._nth.call(null,chunk__28198,i__28200);
var entry_id_28201 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_28202 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_28201,upvoted_entries_coll_28202))){
} else {
var temp__4657__auto___28203 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_28201)].join(''));
if(cljs.core.truth_(temp__4657__auto___28203)){
var node_28204 = temp__4657__auto___28203;
node_28204.addEventListener("click",((function (seq__28197,chunk__28198,count__28199,i__28200,node_28204,temp__4657__auto___28203,entry_id_28201,upvoted_entries_coll_28202,entry,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_28201);
});})(seq__28197,chunk__28198,count__28199,i__28200,node_28204,temp__4657__auto___28203,entry_id_28201,upvoted_entries_coll_28202,entry,entries,upvoted_entries))
);
} else {
}
}

var G__28205 = seq__28197;
var G__28206 = chunk__28198;
var G__28207 = count__28199;
var G__28208 = (i__28200 + (1));
seq__28197 = G__28205;
chunk__28198 = G__28206;
count__28199 = G__28207;
i__28200 = G__28208;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28197);
if(temp__4657__auto__){
var seq__28197__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28197__$1)){
var c__24807__auto__ = cljs.core.chunk_first.call(null,seq__28197__$1);
var G__28209 = cljs.core.chunk_rest.call(null,seq__28197__$1);
var G__28210 = c__24807__auto__;
var G__28211 = cljs.core.count.call(null,c__24807__auto__);
var G__28212 = (0);
seq__28197 = G__28209;
chunk__28198 = G__28210;
count__28199 = G__28211;
i__28200 = G__28212;
continue;
} else {
var entry = cljs.core.first.call(null,seq__28197__$1);
var entry_id_28213 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_28214 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_28213,upvoted_entries_coll_28214))){
} else {
var temp__4657__auto___28215__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_28213)].join(''));
if(cljs.core.truth_(temp__4657__auto___28215__$1)){
var node_28216 = temp__4657__auto___28215__$1;
node_28216.addEventListener("click",((function (seq__28197,chunk__28198,count__28199,i__28200,node_28216,temp__4657__auto___28215__$1,entry_id_28213,upvoted_entries_coll_28214,entry,seq__28197__$1,temp__4657__auto__,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_28213);
});})(seq__28197,chunk__28198,count__28199,i__28200,node_28216,temp__4657__auto___28215__$1,entry_id_28213,upvoted_entries_coll_28214,entry,seq__28197__$1,temp__4657__auto__,entries,upvoted_entries))
);
} else {
}
}

var G__28217 = cljs.core.next.call(null,seq__28197__$1);
var G__28218 = null;
var G__28219 = (0);
var G__28220 = (0);
seq__28197 = G__28217;
chunk__28198 = G__28218;
count__28199 = G__28219;
i__28200 = G__28220;
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
var seq__28225 = cljs.core.seq.call(null,entries.call(null,response));
var chunk__28226 = null;
var count__28227 = (0);
var i__28228 = (0);
while(true){
if((i__28228 < count__28227)){
var entry = cljs.core._nth.call(null,chunk__28226,i__28228);
var entry_id_28229 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_28230 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_28229,upvoted_entries_coll_28230))){
} else {
var temp__4657__auto___28231 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_28229)].join(''));
if(cljs.core.truth_(temp__4657__auto___28231)){
var node_28232 = temp__4657__auto___28231;
node_28232.addEventListener("click",((function (seq__28225,chunk__28226,count__28227,i__28228,node_28232,temp__4657__auto___28231,entry_id_28229,upvoted_entries_coll_28230,entry,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_28229);
});})(seq__28225,chunk__28226,count__28227,i__28228,node_28232,temp__4657__auto___28231,entry_id_28229,upvoted_entries_coll_28230,entry,entries,upvoted_entries))
);
} else {
}
}

var G__28233 = seq__28225;
var G__28234 = chunk__28226;
var G__28235 = count__28227;
var G__28236 = (i__28228 + (1));
seq__28225 = G__28233;
chunk__28226 = G__28234;
count__28227 = G__28235;
i__28228 = G__28236;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28225);
if(temp__4657__auto__){
var seq__28225__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28225__$1)){
var c__24807__auto__ = cljs.core.chunk_first.call(null,seq__28225__$1);
var G__28237 = cljs.core.chunk_rest.call(null,seq__28225__$1);
var G__28238 = c__24807__auto__;
var G__28239 = cljs.core.count.call(null,c__24807__auto__);
var G__28240 = (0);
seq__28225 = G__28237;
chunk__28226 = G__28238;
count__28227 = G__28239;
i__28228 = G__28240;
continue;
} else {
var entry = cljs.core.first.call(null,seq__28225__$1);
var entry_id_28241 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_28242 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_28241,upvoted_entries_coll_28242))){
} else {
var temp__4657__auto___28243__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_28241)].join(''));
if(cljs.core.truth_(temp__4657__auto___28243__$1)){
var node_28244 = temp__4657__auto___28243__$1;
node_28244.addEventListener("click",((function (seq__28225,chunk__28226,count__28227,i__28228,node_28244,temp__4657__auto___28243__$1,entry_id_28241,upvoted_entries_coll_28242,entry,seq__28225__$1,temp__4657__auto__,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_28241);
});})(seq__28225,chunk__28226,count__28227,i__28228,node_28244,temp__4657__auto___28243__$1,entry_id_28241,upvoted_entries_coll_28242,entry,seq__28225__$1,temp__4657__auto__,entries,upvoted_entries))
);
} else {
}
}

var G__28245 = cljs.core.next.call(null,seq__28225__$1);
var G__28246 = null;
var G__28247 = (0);
var G__28248 = (0);
seq__28225 = G__28245;
chunk__28226 = G__28246;
count__28227 = G__28247;
i__28228 = G__28248;
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