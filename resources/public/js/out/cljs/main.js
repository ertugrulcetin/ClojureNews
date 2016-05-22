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
goog.require('route.forgot_password');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var h_24218 = (new goog.History());
goog.events.listen(h_24218,goog.History.EventType.NAVIGATE,((function (h_24218){
return (function (p1__24216_SHARP_){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (h_24218){
return (function (){
return null;
});})(h_24218))
], null),util.view.error_container);

return secretary.core.dispatch_BANG_.call(null,p1__24216_SHARP_.token);
});})(h_24218))
);

var G__24217_24219 = h_24218;
G__24217_24219.setEnabled(true);


//# sourceMappingURL=main.js.map