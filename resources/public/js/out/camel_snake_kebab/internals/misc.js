// Compiled by ClojureScript 1.8.51 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__24798__auto__ = [];
var len__24791__auto___24873 = arguments.length;
var i__24792__auto___24874 = (0);
while(true){
if((i__24792__auto___24874 < len__24791__auto___24873)){
args__24798__auto__.push((arguments[i__24792__auto___24874]));

var G__24875 = (i__24792__auto___24874 + (1));
i__24792__auto___24874 = G__24875;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((4) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__24799__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__24869){
var map__24870 = p__24869;
var map__24870__$1 = ((((!((map__24870 == null)))?((((map__24870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24870):map__24870);
var separator = cljs.core.get.call(null,map__24870__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__24872 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var first = cljs.core.nth.call(null,vec__24872,(0),null);
var rest = cljs.core.nthnext.call(null,vec__24872,(1));
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq24864){
var G__24865 = cljs.core.first.call(null,seq24864);
var seq24864__$1 = cljs.core.next.call(null,seq24864);
var G__24866 = cljs.core.first.call(null,seq24864__$1);
var seq24864__$2 = cljs.core.next.call(null,seq24864__$1);
var G__24867 = cljs.core.first.call(null,seq24864__$2);
var seq24864__$3 = cljs.core.next.call(null,seq24864__$2);
var G__24868 = cljs.core.first.call(null,seq24864__$3);
var seq24864__$4 = cljs.core.next.call(null,seq24864__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24865,G__24866,G__24867,G__24868,seq24864__$4);
});
camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__23721__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map