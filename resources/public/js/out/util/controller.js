// Compiled by ClojureScript 1.8.51 {}
goog.provide('util.controller');
goog.require('cljs.core');
goog.require('util.view');
util.controller.error_handler = (function util$controller$error_handler(p__25090){
var map__25093 = p__25090;
var map__25093__$1 = ((((!((map__25093 == null)))?((((map__25093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25093):map__25093);
var m = map__25093__$1;
var response = cljs.core.get.call(null,map__25093__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(m),(401))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(m),(403)))){
return util.view.change_url.call(null,"/#/login");
} else {
return util.view.render_error_message.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response));
}
});

//# sourceMappingURL=controller.js.map