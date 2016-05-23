// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.entry');
goog.require('cljs.core');
goog.require('util.view');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('view.page_top');
cljs.core.enable_console_print_BANG_.call(null);
controller.entry.handler = (function controller$entry$handler(response){
var temp__4655__auto__ = new cljs.core.Keyword(null,"user-obj","user-obj",-1257396190).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__4655__auto__)){
var user = temp__4655__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (user,temp__4655__auto__){
return (function (){
return view.page_top.comp_username_log_out.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"karma","karma",1375588493).cljs$core$IFn$_invoke$arity$1(user));
});})(user,temp__4655__auto__))
], null),goog.dom.getElement("pageTopId"));
} else {
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.page_top.comp_log_in], null),goog.dom.getElement("pageTopId"));
}
});
controller.entry.error_handler = (function controller$entry$error_handler(p__25015){
var map__25018 = p__25015;
var map__25018__$1 = ((((!((map__25018 == null)))?((((map__25018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25018):map__25018);
var m = map__25018__$1;
var response = cljs.core.get.call(null,map__25018__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return util.view.render_error_message.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response));
});
controller.entry.home_page = (function controller$entry$home_page(){
return ajax.core.GET.call(null,"/entry",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),controller.entry.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.entry.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});

//# sourceMappingURL=entry.js.map