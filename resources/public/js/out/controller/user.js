// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.user');
goog.require('cljs.core');
goog.require('cljc.validation');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('cljc.string_util');
goog.require('util.controller');
goog.require('view.changepassword');
goog.require('util.view');
goog.require('view.user');
cljs.core.enable_console_print_BANG_.call(null);

controller.user.user = (function controller$user$user(username){
return ajax.core.GET.call(null,[cljs.core.str("/user/"),cljs.core.str(username)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.user.component.call(null,response,controller.user.update_user);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.user.update_user = (function controller$user$update_user(username,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
if(cljs.core.not.call(null,cljc.validation.about_QMARK_.call(null,new cljs.core.Keyword(null,"about","about",1423892543).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"About should be between 0 and 500 characters long.");
} else {
if(cljs.core.not.call(null,cljc.validation.email_QMARK_.call(null,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid email.");
} else {
if(cljs.core.not.call(null,cljc.validation.url_QMARK_.call(null,new cljs.core.Keyword(null,"website","website",649297111).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid url. Ex: https://www.google.com");
} else {
if(cljs.core.not.call(null,cljc.validation.github_or_twitter_QMARK_.call(null,new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(data)))){
cljs.core.println.call(null,"Ertu: ",new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(data));

return util.view.render_error_message.call(null,"Not valid GitHub Username. Ex: ertugrulcetin");
} else {
if(cljs.core.not.call(null,cljc.validation.github_or_twitter_QMARK_.call(null,new cljs.core.Keyword(null,"twitter","twitter",-589267671).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid Twitter Username. Ex: ertuctn");
} else {
if(cljs.core.not.call(null,cljc.validation.show_email_QMARK__QMARK_.call(null,new cljs.core.Keyword(null,"show-email?","show-email?",-2011983569).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid show email option.");
} else {
return ajax.core.POST.call(null,[cljs.core.str("/user/"),cljs.core.str(username)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),cljc.string_util.trim_map_values.call(null,cljs.core.update_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543)], null),((function (data){
return (function (p1__26056_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljc.string_util.new_line_tokens.call(null,p1__26056_SHARP_)));
});})(data))
)),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data){
return (function (_){
return util.view.render_update_successfully.call(null);
});})(data))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
}
}
}
}
});
controller.user.change_password_page = (function controller$user$change_password_page(username){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.changepassword.component.call(null,username,controller.user.change_password);
})], null),util.view.main_container);
});
controller.user.change_password = (function controller$user$change_password(username,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
if(cljs.core.not.call(null,cljc.validation.password_QMARK_.call(null,new cljs.core.Keyword(null,"current-password","current-password",-10574282).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Passwords should be between 8 and 20 characters long. Please choose another.");
} else {
if(cljs.core.not.call(null,cljc.validation.password_QMARK_.call(null,new cljs.core.Keyword(null,"new-password","new-password",-1530942754).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Passwords should be between 8 and 20 characters long. Please choose another.");
} else {
if(cljs.core.not.call(null,cljc.validation.password_QMARK_.call(null,new cljs.core.Keyword(null,"re-new-password","re-new-password",-995880408).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Passwords should be between 8 and 20 characters long. Please choose another.");
} else {
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"new-password","new-password",-1530942754).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"re-new-password","re-new-password",-995880408).cljs$core$IFn$_invoke$arity$1(data))){
return util.view.render_error_message.call(null,"New passwords don't match.");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-password","current-password",-10574282).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"new-password","new-password",-1530942754).cljs$core$IFn$_invoke$arity$1(data))){
return util.view.render_error_message.call(null,"New password can not be the old password.");
} else {
return ajax.core.POST.call(null,[cljs.core.str("/user/"),cljs.core.str(username),cljs.core.str("/changepassword")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data){
return (function (_){
return util.view.change_url.call(null,"/");
});})(data))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
}
}
}
});

//# sourceMappingURL=user.js.map