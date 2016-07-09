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
goog.require('route.footer_links');
goog.require('route.submit');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var h_27439 = (new goog.History());
goog.events.listen(h_27439,goog.History.EventType.NAVIGATE,((function (h_27439){
return (function (p1__27437_SHARP_){
var token = p1__27437_SHARP_.token;
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (token,h_27439){
return (function (){
return null;
});})(token,h_27439))
], null),util.view.message_container);

secretary.core.dispatch_BANG_.call(null,token);

util.view.select_header_button.call(null,token);

return util.view.change_header_links_page_titles.call(null,token);
});})(h_27439))
);

var G__27438_27440 = h_27439;
G__27438_27440.setEnabled(true);


//# sourceMappingURL=main.js.map