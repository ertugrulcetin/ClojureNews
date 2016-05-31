// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljc.validation');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.
 */
cljc.validation.username_QMARK_ = (function cljc$validation$username_QMARK_(username){
var and__22544__auto__ = !(clojure.string.blank_QMARK_.call(null,username));
if(and__22544__auto__){
return cljs.core.re_matches.call(null,/[a-zA-Z_0-9]{2,15}/,username);
} else {
return and__22544__auto__;
}
});
/**
 * Passwords should be between 8 and 20 characters long. Please choose another.
 */
cljc.validation.password_QMARK_ = (function cljc$validation$password_QMARK_(password){
var and__22544__auto__ = !(clojure.string.blank_QMARK_.call(null,password));
if(and__22544__auto__){
return cljs.core.re_matches.call(null,/.{8,20}/,password);
} else {
return and__22544__auto__;
}
});
cljc.validation.url_QMARK_ = (function cljc$validation$url_QMARK_(url){
var or__22556__auto__ = clojure.string.blank_QMARK_.call(null,url);
if(or__22556__auto__){
return or__22556__auto__;
} else {
return cljs.core.re_matches.call(null,/^(https?|ftp|file):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/,url);
}
});
cljc.validation.email_QMARK_ = (function cljc$validation$email_QMARK_(email){
var or__22556__auto__ = clojure.string.blank_QMARK_.call(null,email);
if(or__22556__auto__){
return or__22556__auto__;
} else {
return cljs.core.re_matches.call(null,/(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,email);
}
});
cljc.validation.github_or_twitter_QMARK_ = (function cljc$validation$github_or_twitter_QMARK_(username){
var or__22556__auto__ = clojure.string.blank_QMARK_.call(null,username);
if(or__22556__auto__){
return or__22556__auto__;
} else {
var and__22544__auto__ = cljs.core.not.call(null,cljc.validation.url_QMARK_.call(null,username));
if(and__22544__auto__){
return cljs.core.re_matches.call(null,/.{1,40}/,username);
} else {
return and__22544__auto__;
}
}
});
cljc.validation.about_QMARK_ = (function cljc$validation$about_QMARK_(about){
var or__22556__auto__ = clojure.string.blank_QMARK_.call(null,about);
if(or__22556__auto__){
return or__22556__auto__;
} else {
return cljs.core.re_matches.call(null,/.{0,500}/,about);
}
});
cljc.validation.show_email_QMARK__QMARK_ = (function cljc$validation$show_email_QMARK__QMARK_(show_email_option){
return (cljs.core._EQ_.call(null,"yes",show_email_option)) || (cljs.core._EQ_.call(null,"no",show_email_option));
});

//# sourceMappingURL=validation.js.map