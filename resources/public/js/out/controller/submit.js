// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.submit');
goog.require('cljs.core');
goog.require('cljc.error_messages');
goog.require('cljc.validation');
goog.require('goog.dom');
goog.require('view.submit');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('util.controller');
goog.require('util.view');




controller.submit.submit_page = (function controller$submit$submit_page(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.submit.component_story.call(null,controller.submit.submit);
})], null),util.view.main_container);
});
controller.submit.submit = (function controller$submit$submit(field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core._EQ_.call(null,"story",type)){
return controller.submit.create_story.call(null,data);
} else {
if(cljs.core._EQ_.call(null,"ask",type)){
return controller.submit.create_ask.call(null,data);
} else {
if(cljs.core._EQ_.call(null,"job",type)){
return controller.submit.create_job.call(null,data);
} else {
if(cljs.core._EQ_.call(null,"event",type)){
return controller.submit.create_event.call(null,data);
} else {
return null;
}
}
}
}
});
controller.submit.create_story = (function controller$submit$create_story(data){
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.title);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_url_QMARK_.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.url);
} else {
return ajax.core.PUT.call(null,"/entry/story",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return util.view.change_url.call(null,[cljs.core.str("/#/story/"),cljs.core.str(new cljs.core.Keyword(null,"entry-id","entry-id",591934358).cljs$core$IFn$_invoke$arity$1(response))].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});
controller.submit.create_ask = (function controller$submit$create_ask(data){
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.title);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.text);
} else {
return ajax.core.PUT.call(null,"/entry/ask",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return util.view.change_url.call(null,[cljs.core.str("/#/ask/"),cljs.core.str(new cljs.core.Keyword(null,"entry-id","entry-id",591934358).cljs$core$IFn$_invoke$arity$1(response))].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});
controller.submit.create_job = (function controller$submit$create_job(data){
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.title);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_url_QMARK_.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.url);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_country_QMARK_.call(null,new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.country);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_city_QMARK_.call(null,new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.city);
} else {
return ajax.core.PUT.call(null,"/entry/job",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"remote?","remote?",-517415110),goog.dom.getElement("remoteId").checked),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){
return util.view.change_url_to_jobs.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
}
}
});
controller.submit.create_event = (function controller$submit$create_event(data){
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.title);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_url_QMARK_.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.url);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_country_QMARK_.call(null,new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.country);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_city_QMARK_.call(null,new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.city);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_day_QMARK_.call(null,new cljs.core.Keyword(null,"starting-date-day","starting-date-day",-305858969).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.day);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_month_QMARK_.call(null,new cljs.core.Keyword(null,"starting-date-month","starting-date-month",1958326926).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.month);
} else {
if(cljs.core.not.call(null,cljc.validation.submit_year_QMARK_.call(null,new cljs.core.Keyword(null,"starting-date-year","starting-date-year",-1947111290).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,cljc.error_messages.year);
} else {
return ajax.core.PUT.call(null,"/entry/event",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){
return util.view.change_url_to_events.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
}
}
}
}
}
});

//# sourceMappingURL=submit.js.map