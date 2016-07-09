// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljc.validation');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.
 */
cljc.validation.username_QMARK_ = (function cljc$validation$username_QMARK_(username){
var and__24035__auto__ = !(clojure.string.blank_QMARK_.call(null,username));
if(and__24035__auto__){
return cljs.core.re_matches.call(null,/[a-zA-Z_0-9]{2,15}/,username);
} else {
return and__24035__auto__;
}
});
/**
 * Passwords should be between 8 and 20 characters long. Please choose another.
 */
cljc.validation.password_QMARK_ = (function cljc$validation$password_QMARK_(password){
var and__24035__auto__ = !(clojure.string.blank_QMARK_.call(null,password));
if(and__24035__auto__){
return cljs.core.re_matches.call(null,/.{8,20}/,password);
} else {
return and__24035__auto__;
}
});
cljc.validation.url_QMARK_ = (function cljc$validation$url_QMARK_(url){
var or__24047__auto__ = clojure.string.blank_QMARK_.call(null,url);
if(or__24047__auto__){
return or__24047__auto__;
} else {
var and__24035__auto__ = cljs.core.re_matches.call(null,/^(https?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/,url);
if(cljs.core.truth_(and__24035__auto__)){
return ((cljs.core.count.call(null,clojure.string.split.call(null,cljc.validation.get_pure_url.call(null,url),/[.]/)) >= (2))) && ((cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,cljc.validation.get_pure_url.call(null,url),/[.]/))) >= (2)));
} else {
return and__24035__auto__;
}
}
});
cljc.validation.email_QMARK_ = (function cljc$validation$email_QMARK_(email){
var or__24047__auto__ = clojure.string.blank_QMARK_.call(null,email);
if(or__24047__auto__){
return or__24047__auto__;
} else {
return cljs.core.re_matches.call(null,/(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,email);
}
});
cljc.validation.github_or_twitter_QMARK_ = (function cljc$validation$github_or_twitter_QMARK_(username){
var or__24047__auto__ = clojure.string.blank_QMARK_.call(null,username);
if(or__24047__auto__){
return or__24047__auto__;
} else {
var and__24035__auto__ = cljs.core.not.call(null,cljc.validation.url_QMARK_.call(null,username));
if(and__24035__auto__){
var and__24035__auto____$1 = !(clojure.string.includes_QMARK_.call(null,username," "));
if(and__24035__auto____$1){
return cljs.core.re_matches.call(null,/.{1,40}/,username);
} else {
return and__24035__auto____$1;
}
} else {
return and__24035__auto__;
}
}
});
cljc.validation.about_QMARK_ = (function cljc$validation$about_QMARK_(about){
return (clojure.string.blank_QMARK_.call(null,about)) || (((cljs.core.count.call(null,about) >= (0))) && ((cljs.core.count.call(null,about) <= (500))));
});
cljc.validation.show_email_QMARK__QMARK_ = (function cljc$validation$show_email_QMARK__QMARK_(show_email_option){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["yes",null,"no",null], null), null),show_email_option);
});
cljc.validation.submit_type_QMARK_ = (function cljc$validation$submit_type_QMARK_(type){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["story",null,"job",null,"event",null,"ask",null], null), null),type);
});
cljc.validation.submit_title_QMARK_ = (function cljc$validation$submit_title_QMARK_(title){
return (!(clojure.string.blank_QMARK_.call(null,title))) && ((cljs.core.count.call(null,title) <= (80)));
});
cljc.validation.submit_url_QMARK_ = (function cljc$validation$submit_url_QMARK_(url){
var and__24035__auto__ = !(clojure.string.blank_QMARK_.call(null,url));
if(and__24035__auto__){
var and__24035__auto____$1 = (cljs.core.count.call(null,url) <= (500));
if(and__24035__auto____$1){
var and__24035__auto____$2 = cljs.core.re_matches.call(null,/^(https?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/,url);
if(cljs.core.truth_(and__24035__auto____$2)){
return ((cljs.core.count.call(null,clojure.string.split.call(null,cljc.validation.get_pure_url.call(null,url),/[.]/)) >= (2))) && ((cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,cljc.validation.get_pure_url.call(null,url),/[.]/))) >= (2)));
} else {
return and__24035__auto____$2;
}
} else {
return and__24035__auto____$1;
}
} else {
return and__24035__auto__;
}
});
cljc.validation.submit_text_QMARK_ = (function cljc$validation$submit_text_QMARK_(text){
return (!(clojure.string.blank_QMARK_.call(null,text))) && ((cljs.core.count.call(null,text) <= (2500)));
});
cljc.validation.submit_day_QMARK_ = (function cljc$validation$submit_day_QMARK_(day){
return ((parseInt(day) >= (1))) && ((parseInt(day) <= (31)));
});
cljc.validation.submit_month_QMARK_ = (function cljc$validation$submit_month_QMARK_(month){
return ((parseInt(month) >= (1))) && ((parseInt(month) <= (12)));
});
cljc.validation.submit_year_QMARK_ = (function cljc$validation$submit_year_QMARK_(year){
return ((parseInt(year) >= (2016))) && ((parseInt(year) <= (2056)));
});
cljc.validation.submit_city_QMARK_ = (function cljc$validation$submit_city_QMARK_(city){
return (!(clojure.string.blank_QMARK_.call(null,city))) && ((cljs.core.count.call(null,city) <= (40)));
});
cljc.validation.submit_country_QMARK_ = (function cljc$validation$submit_country_QMARK_(city){
return (!(clojure.string.blank_QMARK_.call(null,city))) && ((cljs.core.count.call(null,city) <= (40)));
});
cljc.validation.get_pure_url = (function cljc$validation$get_pure_url(url){
var s = clojure.string.replace.call(null,url,/^(https?):\/\/(www.)?/,"");
var temp__4655__auto__ = clojure.string.index_of.call(null,s,"/");
if(cljs.core.truth_(temp__4655__auto__)){
var index = temp__4655__auto__;
return s.substring((0),index);
} else {
return s;
}
});

//# sourceMappingURL=validation.js.map