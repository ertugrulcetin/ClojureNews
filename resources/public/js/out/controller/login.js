// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.login');
goog.require('cljs.core');
goog.require('util.view');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('cljc.validation');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
controller.login.handler = (function controller$login$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
controller.login.error_handler = (function controller$login$error_handler(p__25299){
var map__25302 = p__25299;
var map__25302__$1 = ((((!((map__25302 == null)))?((((map__25302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25302):map__25302);
var status = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
controller.login.sign_up = (function controller$login$sign_up(field_ids){
var m = util.view.create_field_val_map.call(null,field_ids);
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(m);
var password = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,cljc.validation.username_QMARK_.call(null,username))){
return util.view.render_error_message.call(null,"Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.");
} else {
if(cljs.core.not.call(null,cljc.validation.password_QMARK_.call(null,password))){
return util.view.render_error_message.call(null,"Passwords should be between 8 and 20 characters long. Please choose another.");
} else {
return ajax.core.PUT.call(null,"/signup",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),m,new cljs.core.Keyword(null,"handler","handler",-195596612),controller.login.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.login.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});

//# sourceMappingURL=login.js.map