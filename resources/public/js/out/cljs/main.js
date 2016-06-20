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
goog.require('route.submit');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var h_26091 = (new goog.History());
goog.events.listen(h_26091,goog.History.EventType.NAVIGATE,((function (h_26091){
return (function (p1__26089_SHARP_){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (h_26091){
return (function (){
return null;
});})(h_26091))
], null),util.view.message_container);

return secretary.core.dispatch_BANG_.call(null,p1__26089_SHARP_.token);
});})(h_26091))
);

var G__26090_26092 = h_26091;
G__26090_26092.setEnabled(true);


//# sourceMappingURL=main.js.map