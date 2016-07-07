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
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.story.component_list_story.call(null,response,page);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_upvote_buttons_for_entries.call(null,response,new cljs.core.Keyword(null,"story","story",-1000647533));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_story_by_id = (function controller$entry$get_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.story_entry.component_story.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$get_story_by_id,id);

return controller.entry.add_event_listener_to_upvote_buttons_for_comments.call(null,response,new cljs.core.Keyword(null,"story","story",-1000647533));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_story_by_id = (function controller$entry$edit_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
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
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.ask_entry.component_ask.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$get_ask_by_id,id);

return controller.entry.add_event_listener_to_upvote_buttons_for_comments.call(null,response,new cljs.core.Keyword(null,"ask","ask",707712414));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_ask_by_page = (function controller$entry$get_ask_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.ask.component_list_ask.call(null,response,page);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_upvote_buttons_for_entries.call(null,response,new cljs.core.Keyword(null,"ask","ask",707712414));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_ask_by_id = (function controller$entry$edit_ask_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
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
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.newest.component_list_newest.call(null,response,page);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_upvote_buttons_for_newest_entries.call(null,response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_jobs_by_page = (function controller$entry$get_jobs_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/job/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.job.component_job.call(null,response,page);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_job_by_id = (function controller$entry$edit_job_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/job/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
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
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.event.component_event.call(null,response,page);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_event_by_id = (function controller$entry$edit_event_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/event/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
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
cljs.core.println.call(null,day," ",month," ",year);

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
var seq__26782 = cljs.core.seq.call(null,comments.call(null,response));
var chunk__26783 = null;
var count__26784 = (0);
var i__26785 = (0);
while(true){
if((i__26785 < count__26784)){
var commentt = cljs.core._nth.call(null,chunk__26783,i__26785);
var comment_id_26786 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26787__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26786,upvoted_comments_26787__$1))){
} else {
var temp__4657__auto___26788 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26786)].join(''));
if(cljs.core.truth_(temp__4657__auto___26788)){
var node_26789 = temp__4657__auto___26788;
node_26789.addEventListener("click",((function (seq__26782,chunk__26783,count__26784,i__26785,node_26789,temp__4657__auto___26788,comment_id_26786,upvoted_comments_26787__$1,commentt,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_26786);
});})(seq__26782,chunk__26783,count__26784,i__26785,node_26789,temp__4657__auto___26788,comment_id_26786,upvoted_comments_26787__$1,commentt,comments,upvoted_comments))
);
} else {
}
}

var G__26790 = seq__26782;
var G__26791 = chunk__26783;
var G__26792 = count__26784;
var G__26793 = (i__26785 + (1));
seq__26782 = G__26790;
chunk__26783 = G__26791;
count__26784 = G__26792;
i__26785 = G__26793;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26782);
if(temp__4657__auto__){
var seq__26782__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26782__$1)){
var c__24805__auto__ = cljs.core.chunk_first.call(null,seq__26782__$1);
var G__26794 = cljs.core.chunk_rest.call(null,seq__26782__$1);
var G__26795 = c__24805__auto__;
var G__26796 = cljs.core.count.call(null,c__24805__auto__);
var G__26797 = (0);
seq__26782 = G__26794;
chunk__26783 = G__26795;
count__26784 = G__26796;
i__26785 = G__26797;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__26782__$1);
var comment_id_26798 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26799__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26798,upvoted_comments_26799__$1))){
} else {
var temp__4657__auto___26800__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26798)].join(''));
if(cljs.core.truth_(temp__4657__auto___26800__$1)){
var node_26801 = temp__4657__auto___26800__$1;
node_26801.addEventListener("click",((function (seq__26782,chunk__26783,count__26784,i__26785,node_26801,temp__4657__auto___26800__$1,comment_id_26798,upvoted_comments_26799__$1,commentt,seq__26782__$1,temp__4657__auto__,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_26798);
});})(seq__26782,chunk__26783,count__26784,i__26785,node_26801,temp__4657__auto___26800__$1,comment_id_26798,upvoted_comments_26799__$1,commentt,seq__26782__$1,temp__4657__auto__,comments,upvoted_comments))
);
} else {
}
}

var G__26802 = cljs.core.next.call(null,seq__26782__$1);
var G__26803 = null;
var G__26804 = (0);
var G__26805 = (0);
seq__26782 = G__26802;
chunk__26783 = G__26803;
count__26784 = G__26804;
i__26785 = G__26805;
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
var seq__26810 = cljs.core.seq.call(null,entries.call(null,response));
var chunk__26811 = null;
var count__26812 = (0);
var i__26813 = (0);
while(true){
if((i__26813 < count__26812)){
var entry = cljs.core._nth.call(null,chunk__26811,i__26813);
var entry_id_26814 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_26815 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_26814,upvoted_entries_coll_26815))){
} else {
var temp__4657__auto___26816 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_26814)].join(''));
if(cljs.core.truth_(temp__4657__auto___26816)){
var node_26817 = temp__4657__auto___26816;
node_26817.addEventListener("click",((function (seq__26810,chunk__26811,count__26812,i__26813,node_26817,temp__4657__auto___26816,entry_id_26814,upvoted_entries_coll_26815,entry,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_26814);
});})(seq__26810,chunk__26811,count__26812,i__26813,node_26817,temp__4657__auto___26816,entry_id_26814,upvoted_entries_coll_26815,entry,entries,upvoted_entries))
);
} else {
}
}

var G__26818 = seq__26810;
var G__26819 = chunk__26811;
var G__26820 = count__26812;
var G__26821 = (i__26813 + (1));
seq__26810 = G__26818;
chunk__26811 = G__26819;
count__26812 = G__26820;
i__26813 = G__26821;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26810);
if(temp__4657__auto__){
var seq__26810__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26810__$1)){
var c__24805__auto__ = cljs.core.chunk_first.call(null,seq__26810__$1);
var G__26822 = cljs.core.chunk_rest.call(null,seq__26810__$1);
var G__26823 = c__24805__auto__;
var G__26824 = cljs.core.count.call(null,c__24805__auto__);
var G__26825 = (0);
seq__26810 = G__26822;
chunk__26811 = G__26823;
count__26812 = G__26824;
i__26813 = G__26825;
continue;
} else {
var entry = cljs.core.first.call(null,seq__26810__$1);
var entry_id_26826 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_26827 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_26826,upvoted_entries_coll_26827))){
} else {
var temp__4657__auto___26828__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_26826)].join(''));
if(cljs.core.truth_(temp__4657__auto___26828__$1)){
var node_26829 = temp__4657__auto___26828__$1;
node_26829.addEventListener("click",((function (seq__26810,chunk__26811,count__26812,i__26813,node_26829,temp__4657__auto___26828__$1,entry_id_26826,upvoted_entries_coll_26827,entry,seq__26810__$1,temp__4657__auto__,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_26826);
});})(seq__26810,chunk__26811,count__26812,i__26813,node_26829,temp__4657__auto___26828__$1,entry_id_26826,upvoted_entries_coll_26827,entry,seq__26810__$1,temp__4657__auto__,entries,upvoted_entries))
);
} else {
}
}

var G__26830 = cljs.core.next.call(null,seq__26810__$1);
var G__26831 = null;
var G__26832 = (0);
var G__26833 = (0);
seq__26810 = G__26830;
chunk__26811 = G__26831;
count__26812 = G__26832;
i__26813 = G__26833;
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
var seq__26838 = cljs.core.seq.call(null,entries.call(null,response));
var chunk__26839 = null;
var count__26840 = (0);
var i__26841 = (0);
while(true){
if((i__26841 < count__26840)){
var entry = cljs.core._nth.call(null,chunk__26839,i__26841);
var entry_id_26842 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_26843 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_26842,upvoted_entries_coll_26843))){
} else {
var temp__4657__auto___26844 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_26842)].join(''));
if(cljs.core.truth_(temp__4657__auto___26844)){
var node_26845 = temp__4657__auto___26844;
node_26845.addEventListener("click",((function (seq__26838,chunk__26839,count__26840,i__26841,node_26845,temp__4657__auto___26844,entry_id_26842,upvoted_entries_coll_26843,entry,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_26842);
});})(seq__26838,chunk__26839,count__26840,i__26841,node_26845,temp__4657__auto___26844,entry_id_26842,upvoted_entries_coll_26843,entry,entries,upvoted_entries))
);
} else {
}
}

var G__26846 = seq__26838;
var G__26847 = chunk__26839;
var G__26848 = count__26840;
var G__26849 = (i__26841 + (1));
seq__26838 = G__26846;
chunk__26839 = G__26847;
count__26840 = G__26848;
i__26841 = G__26849;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26838);
if(temp__4657__auto__){
var seq__26838__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26838__$1)){
var c__24805__auto__ = cljs.core.chunk_first.call(null,seq__26838__$1);
var G__26850 = cljs.core.chunk_rest.call(null,seq__26838__$1);
var G__26851 = c__24805__auto__;
var G__26852 = cljs.core.count.call(null,c__24805__auto__);
var G__26853 = (0);
seq__26838 = G__26850;
chunk__26839 = G__26851;
count__26840 = G__26852;
i__26841 = G__26853;
continue;
} else {
var entry = cljs.core.first.call(null,seq__26838__$1);
var entry_id_26854 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(entry);
var upvoted_entries_coll_26855 = upvoted_entries.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,entry_id_26854,upvoted_entries_coll_26855))){
} else {
var temp__4657__auto___26856__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(entry_id_26854)].join(''));
if(cljs.core.truth_(temp__4657__auto___26856__$1)){
var node_26857 = temp__4657__auto___26856__$1;
node_26857.addEventListener("click",((function (seq__26838,chunk__26839,count__26840,i__26841,node_26857,temp__4657__auto___26856__$1,entry_id_26854,upvoted_entries_coll_26855,entry,seq__26838__$1,temp__4657__auto__,entries,upvoted_entries){
return (function (_){
return controller.upvote.upvote_entry.call(null,entry_id_26854);
});})(seq__26838,chunk__26839,count__26840,i__26841,node_26857,temp__4657__auto___26856__$1,entry_id_26854,upvoted_entries_coll_26855,entry,seq__26838__$1,temp__4657__auto__,entries,upvoted_entries))
);
} else {
}
}

var G__26858 = cljs.core.next.call(null,seq__26838__$1);
var G__26859 = null;
var G__26860 = (0);
var G__26861 = (0);
seq__26838 = G__26858;
chunk__26839 = G__26859;
count__26840 = G__26860;
i__26841 = G__26861;
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

//# sourceMappingURL=entry.js.map