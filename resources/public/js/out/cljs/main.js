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
var h_25613 = (new goog.History());
goog.events.listen(h_25613,goog.History.EventType.NAVIGATE,((function (h_25613){
return (function (p1__25611_SHARP_){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (h_25613){
return (function (){
return null;
});})(h_25613))
], null),util.view.error_container);

return secretary.core.dispatch_BANG_.call(null,p1__25611_SHARP_.token);
});})(h_25613))
);

var G__25612_25614 = h_25613;
G__25612_25614.setEnabled(true);


//# sourceMappingURL=main.js.map