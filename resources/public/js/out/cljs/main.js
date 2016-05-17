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
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var h_24791 = (new goog.History());
goog.events.listen(h_24791,goog.History.EventType.NAVIGATE,((function (h_24791){
return (function (p1__24789_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__24789_SHARP_.token);
});})(h_24791))
);

var G__24790_24792 = h_24791;
G__24790_24792.setEnabled(true);

G__24790_24792.setToken([cljs.core.str(window.location.pathname),cljs.core.str(window.location.search)].join(''));


//# sourceMappingURL=main.js.map