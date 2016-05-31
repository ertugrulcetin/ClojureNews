// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljc.string_util');
goog.require('cljs.core');
goog.require('clojure.string');
cljc.string_util.trim_map_values = (function cljc$string_util$trim_map_values(m){
return cljs.core.reduce.call(null,(function (p1__25131_SHARP_,p2__25132_SHARP_){
return cljs.core.assoc.call(null,p1__25131_SHARP_,cljs.core.first.call(null,p2__25132_SHARP_),((clojure.string.blank_QMARK_.call(null,cljs.core.second.call(null,p2__25132_SHARP_)))?"":cljs.core.second.call(null,p2__25132_SHARP_)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=string_util.js.map