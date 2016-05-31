// Compiled by ClojureScript 1.8.51 {}
goog.provide('deneme');
goog.require('cljs.core');
goog.require('clojure.string');
deneme.trim_map_values = (function deneme$trim_map_values(m){
return cljs.core.reduce.call(null,(function (p1__25102_SHARP_,p2__25103_SHARP_){
return cljs.core.assoc.call(null,p1__25102_SHARP_,cljs.core.first.call(null,p2__25103_SHARP_),clojure.string.trim.call(null,cljs.core.second.call(null,p2__25103_SHARP_)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=deneme.js.map