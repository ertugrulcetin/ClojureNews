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
goog.require('util.view');
goog.require('route.forgot_password');
goog.require('route.comment_entry');
goog.require('route.submit');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var h_31270 = (new goog.History());
goog.events.listen(h_31270,goog.History.EventType.NAVIGATE,((function (h_31270){
return (function (p1__31268_SHARP_){
var token = p1__31268_SHARP_.token;
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (token,h_31270){
return (function (){
return null;
});})(token,h_31270))
], null),util.view.message_container);

secretary.core.dispatch_BANG_.call(null,token);

return util.view.select_header_button.call(null,token);
});})(h_31270))
);

var G__31269_31271 = h_31270;
G__31269_31271.setEnabled(true);


//# sourceMappingURL=main.js.map