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
return util.view.change_url.call(null,"");
});
controller.login.error_handler = (function controller$login$error_handler(p__24197){
var map__24200 = p__24197;
var map__24200__$1 = ((((!((map__24200 == null)))?((((map__24200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24200):map__24200);
var response = cljs.core.get.call(null,map__24200__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return util.view.render_error_message.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response));
});
controller.login.sign_up = (function controller$login$sign_up(field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(data);
var password = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.username_QMARK_.call(null,username))){
return util.view.render_error_message.call(null,"Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.");
} else {
if(cljs.core.not.call(null,cljc.validation.password_QMARK_.call(null,password))){
return util.view.render_error_message.call(null,"Passwords should be between 8 and 20 characters long. Please choose another.");
} else {
return ajax.core.PUT.call(null,"/signup",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),controller.login.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.login.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});
controller.login.log_in = (function controller$login$log_in(field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(data);
var password = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.username_QMARK_.call(null,username))){
return util.view.render_error_message.call(null,"Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.");
} else {
if(cljs.core.not.call(null,cljc.validation.password_QMARK_.call(null,password))){
return util.view.render_error_message.call(null,"Passwords should be between 8 and 20 characters long. Please choose another.");
} else {
return ajax.core.POST.call(null,"/login",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),controller.login.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.login.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});

//# sourceMappingURL=login.js.map