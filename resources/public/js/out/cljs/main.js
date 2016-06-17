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
var h_25879 = (new goog.History());
goog.events.listen(h_25879,goog.History.EventType.NAVIGATE,((function (h_25879){
return (function (p1__25877_SHARP_){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (h_25879){
return (function (){
return null;
});})(h_25879))
], null),util.view.message_container);

return secretary.core.dispatch_BANG_.call(null,p1__25877_SHARP_.token);
});})(h_25879))
);

var G__25878_25880 = h_25879;
G__25878_25880.setEnabled(true);


//# sourceMappingURL=main.js.map