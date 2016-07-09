// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__25272__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25273__i = 0, G__25273__a = new Array(arguments.length -  0);
while (G__25273__i < G__25273__a.length) {G__25273__a[G__25273__i] = arguments[G__25273__i + 0]; ++G__25273__i;}
  args = new cljs.core.IndexedSeq(G__25273__a,0);
} 
return G__25272__delegate.call(this,args);};
G__25272.cljs$lang$maxFixedArity = 0;
G__25272.cljs$lang$applyTo = (function (arglist__25274){
var args = cljs.core.seq(arglist__25274);
return G__25272__delegate(args);
});
G__25272.cljs$core$IFn$_invoke$arity$variadic = G__25272__delegate;
return G__25272;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25275__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25276__i = 0, G__25276__a = new Array(arguments.length -  0);
while (G__25276__i < G__25276__a.length) {G__25276__a[G__25276__i] = arguments[G__25276__i + 0]; ++G__25276__i;}
  args = new cljs.core.IndexedSeq(G__25276__a,0);
} 
return G__25275__delegate.call(this,args);};
G__25275.cljs$lang$maxFixedArity = 0;
G__25275.cljs$lang$applyTo = (function (arglist__25277){
var args = cljs.core.seq(arglist__25277);
return G__25275__delegate(args);
});
G__25275.cljs$core$IFn$_invoke$arity$variadic = G__25275__delegate;
return G__25275;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map