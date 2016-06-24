// Compiled by ClojureScript 1.8.51 {}
goog.provide('util.controller');
goog.require('cljs.core');
goog.require('util.view');
util.controller.error_handler = (function util$controller$error_handler(p__26988){
var map__26991 = p__26988;
var map__26991__$1 = ((((!((map__26991 == null)))?((((map__26991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26991):map__26991);
var status = cljs.core.get.call(null,map__26991__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var response = cljs.core.get.call(null,map__26991__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
if((cljs.core._EQ_.call(null,status,(401))) || (cljs.core._EQ_.call(null,status,(403)))){
return util.view.change_url.call(null,"/#/login");
} else {
return util.view.render_error_message.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response));
}
});

//# sourceMappingURL=controller.js.map