// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.entry');
goog.require('cljs.core');
goog.require('util.view');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
controller.entry.handler = (function controller$entry$handler(response){
return (function (_){
return null;
});
});
controller.entry.error_handler = (function controller$entry$error_handler(p__25107){
var map__25110 = p__25107;
var map__25110__$1 = ((((!((map__25110 == null)))?((((map__25110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25110):map__25110);
var m = map__25110__$1;
var response = cljs.core.get.call(null,map__25110__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return util.view.render_error_message.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response));
});
controller.entry.home_page = (function controller$entry$home_page(){
return ajax.core.GET.call(null,"/entry",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),controller.entry.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.entry.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});

//# sourceMappingURL=entry.js.map