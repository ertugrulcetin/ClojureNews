// Compiled by ClojureScript 1.8.51 {}
goog.provide('util.validation');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Usernames can only contain letters, digits and underscores, and should be between 2 and 15 characters long. Please choose another.
 */
util.validation.username_QMARK_ = (function util$validation$username_QMARK_(username){
var and__22152__auto__ = !(clojure.string.blank_QMARK_.call(null,username));
if(and__22152__auto__){
return cljs.core.re_matches.call(null,/[a-zA-Z_0-9]{2,15}/,username);
} else {
return and__22152__auto__;
}
});
/**
 * Passwords should be between 8 and 20 characters long. Please choose another.
 */
util.validation.password_QMARK_ = (function util$validation$password_QMARK_(password){
var and__22152__auto__ = !(clojure.string.blank_QMARK_.call(null,password));
if(and__22152__auto__){
return cljs.core.re_matches.call(null,/.{8,20}/,password);
} else {
return and__22152__auto__;
}
});

//# sourceMappingURL=validation.js.map