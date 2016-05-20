// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljc.validation');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.
 */
cljc.validation.username_QMARK_ = (function cljc$validation$username_QMARK_(username){
var and__22166__auto__ = !(clojure.string.blank_QMARK_.call(null,username));
if(and__22166__auto__){
return cljs.core.re_matches.call(null,/[a-zA-Z_0-9]{2,15}/,username);
} else {
return and__22166__auto__;
}
});
/**
 * Passwords should be between 8 and 20 characters long. Please choose another.
 */
cljc.validation.password_QMARK_ = (function cljc$validation$password_QMARK_(password){
var and__22166__auto__ = !(clojure.string.blank_QMARK_.call(null,password));
if(and__22166__auto__){
return cljs.core.re_matches.call(null,/.{8,20}/,password);
} else {
return and__22166__auto__;
}
});

//# sourceMappingURL=validation.js.map