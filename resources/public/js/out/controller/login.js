// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.login');
goog.require('cljs.core');
goog.require('util.view');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
controller.login.handler = (function controller$login$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
controller.login.error_handler = (function controller$login$error_handler(p__23761){
var map__23764 = p__23761;
var map__23764__$1 = ((((!((map__23764 == null)))?((((map__23764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23764):map__23764);
var status = cljs.core.get.call(null,map__23764__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23764__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
controller.login.sign_up = (function controller$login$sign_up(field_ids){
cljs.core.println.call(null,"Ertus: ",util.view.create_field_val_map.call(null,field_ids));

return ajax.core.PUT.call(null,"/user/signup",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),util.view.create_field_val_map.call(null,field_ids),new cljs.core.Keyword(null,"handler","handler",-195596612),controller.login.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.login.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null)], null));
});

//# sourceMappingURL=login.js.map