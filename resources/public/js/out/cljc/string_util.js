// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljc.string_util');
goog.require('cljs.core');
goog.require('clojure.string');
cljc.string_util.trim_map_values = (function cljc$string_util$trim_map_values(m){
return cljs.core.reduce.call(null,(function (p1__24937_SHARP_,p2__24938_SHARP_){
return cljs.core.assoc.call(null,p1__24937_SHARP_,cljs.core.first.call(null,p2__24938_SHARP_),clojure.string.trim.call(null,cljs.core.second.call(null,p2__24938_SHARP_)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=string_util.js.map