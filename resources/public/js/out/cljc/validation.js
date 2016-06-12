// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljc.validation');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.
 */
cljc.validation.username_QMARK_ = (function cljc$validation$username_QMARK_(username){
var and__23094__auto__ = !(clojure.string.blank_QMARK_.call(null,username));
if(and__23094__auto__){
return cljs.core.re_matches.call(null,/[a-zA-Z_0-9]{2,15}/,username);
} else {
return and__23094__auto__;
}
});
/**
 * Passwords should be between 8 and 20 characters long. Please choose another.
 */
cljc.validation.password_QMARK_ = (function cljc$validation$password_QMARK_(password){
var and__23094__auto__ = !(clojure.string.blank_QMARK_.call(null,password));
if(and__23094__auto__){
return cljs.core.re_matches.call(null,/.{8,20}/,password);
} else {
return and__23094__auto__;
}
});
cljc.validation.url_QMARK_ = (function cljc$validation$url_QMARK_(url){
var or__23106__auto__ = clojure.string.blank_QMARK_.call(null,url);
if(or__23106__auto__){
return or__23106__auto__;
} else {
return cljs.core.re_matches.call(null,/^(https?|ftp|file):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/,url);
}
});
cljc.validation.email_QMARK_ = (function cljc$validation$email_QMARK_(email){
var or__23106__auto__ = clojure.string.blank_QMARK_.call(null,email);
if(or__23106__auto__){
return or__23106__auto__;
} else {
return cljs.core.re_matches.call(null,/(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,email);
}
});
cljc.validation.github_or_twitter_QMARK_ = (function cljc$validation$github_or_twitter_QMARK_(username){
var or__23106__auto__ = clojure.string.blank_QMARK_.call(null,username);
if(or__23106__auto__){
return or__23106__auto__;
} else {
var and__23094__auto__ = cljs.core.not.call(null,cljc.validation.url_QMARK_.call(null,username));
if(and__23094__auto__){
var and__23094__auto____$1 = !(clojure.string.includes_QMARK_.call(null,username," "));
if(and__23094__auto____$1){
return cljs.core.re_matches.call(null,/.{1,40}/,username);
} else {
return and__23094__auto____$1;
}
} else {
return and__23094__auto__;
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
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["story",null,"events",null,"ask",null,"jobs",null], null), null),type);
});
cljc.validation.submit_title_QMARK_ = (function cljc$validation$submit_title_QMARK_(title){
return (!(clojure.string.blank_QMARK_.call(null,title))) && ((cljs.core.count.call(null,title) <= (80)));
});
cljc.validation.submit_url_QMARK_ = (function cljc$validation$submit_url_QMARK_(url){
var and__23094__auto__ = !(clojure.string.blank_QMARK_.call(null,url));
if(and__23094__auto__){
var and__23094__auto____$1 = (cljs.core.count.call(null,url) <= (500));
if(and__23094__auto____$1){
return cljs.core.re_matches.call(null,/^(https?|ftp|file):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/,url);
} else {
return and__23094__auto____$1;
}
} else {
return and__23094__auto__;
}
});
cljc.validation.submit_text_QMARK_ = (function cljc$validation$submit_text_QMARK_(text){
return (!(clojure.string.blank_QMARK_.call(null,text))) && ((cljs.core.count.call(null,text) <= (2500)));
});

//# sourceMappingURL=validation.js.map