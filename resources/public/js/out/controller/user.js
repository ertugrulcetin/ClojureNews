// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.user');
goog.require('cljs.core');
goog.require('cljc.validation');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.core');
goog.require('util.view');
goog.require('view.user');
cljs.core.enable_console_print_BANG_.call(null);
controller.user.handler = (function controller$user$handler(response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.user.component.call(null,response);
})], null),util.view.main_container);
});
controller.user.error_handler = (function controller$user$error_handler(p__25051){
var map__25054 = p__25051;
var map__25054__$1 = ((((!((map__25054 == null)))?((((map__25054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25054):map__25054);
var response = cljs.core.get.call(null,map__25054__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return util.view.render_error_message.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response));
});
controller.user.user = (function controller$user$user(username){
return ajax.core.GET.call(null,[cljs.core.str("/user/"),cljs.core.str(username)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),controller.user.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.user.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});

//# sourceMappingURL=user.js.map