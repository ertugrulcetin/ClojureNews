// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljc.string_util');
goog.require('cljs.core');
goog.require('clojure.string');
cljc.string_util.trim_map_values = (function cljc$string_util$trim_map_values(m){
return cljs.core.reduce.call(null,(function (p1__26197_SHARP_,p2__26198_SHARP_){
return cljs.core.assoc.call(null,p1__26197_SHARP_,cljs.core.first.call(null,p2__26198_SHARP_),((clojure.string.blank_QMARK_.call(null,cljs.core.second.call(null,p2__26198_SHARP_)))?"":cljs.core.second.call(null,p2__26198_SHARP_)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
cljc.string_util.new_line_tokens = (function cljc$string_util$new_line_tokens(about){
return cljs.core.filter.call(null,(function (p1__26199_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__26199_SHARP_));
}),clojure.string.split.call(null,(function (){var or__24047__auto__ = about;
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return "";
}
})(),/\n/));
});

//# sourceMappingURL=string_util.js.map