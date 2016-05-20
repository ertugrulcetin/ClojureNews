// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.main');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('route.login');
goog.require('goog.History.EventType');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('route.forgot_password');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var h_23782 = (new goog.History());
goog.events.listen(h_23782,goog.History.EventType.NAVIGATE,((function (h_23782){
return (function (p1__23780_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__23780_SHARP_.token);
});})(h_23782))
);

var G__23781_23783 = h_23782;
G__23781_23783.setEnabled(true);


//# sourceMappingURL=main.js.map