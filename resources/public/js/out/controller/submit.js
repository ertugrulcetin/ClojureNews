// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.submit');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljc.validation');
goog.require('reagent.core');
goog.require('util.view');
goog.require('util.controller');
goog.require('view.submit');


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
return null;
}
}
});
controller.submit.create_story = (function controller$submit$create_story(data){
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,[cljs.core.str("Please limit title to 80 characters.This had "),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data))),cljs.core.str(".")].join(''));
} else {
if(cljs.core.not.call(null,cljc.validation.submit_url_QMARK_.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid url. Ex: https://www.google.com");
} else {
return ajax.core.PUT.call(null,"/entry/story",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});
controller.submit.create_ask = (function controller$submit$create_ask(data){
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,[cljs.core.str("Please limit title to 80 characters.This had "),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data))),cljs.core.str(".")].join(''));
} else {
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Please limit text to 2500 characters.");
} else {
return ajax.core.PUT.call(null,"/entry/ask",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});

//# sourceMappingURL=submit.js.map