// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.main');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('route.login');
goog.require('goog.History.EventType');
goog.require('route.entry');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('route.user');
goog.require('route.forgot_password');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var h_26552 = (new goog.History());
goog.events.listen(h_26552,goog.History.EventType.NAVIGATE,((function (h_26552){
return (function (p1__26550_SHARP_){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (h_26552){
return (function (){
return null;
});})(h_26552))
], null),util.view.error_container);

return secretary.core.dispatch_BANG_.call(null,p1__26550_SHARP_.token);
});})(h_26552))
);

var G__26551_26553 = h_26552;
G__26551_26553.setEnabled(true);


//# sourceMappingURL=main.js.map