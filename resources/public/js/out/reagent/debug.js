// Compiled by ClojureScript 1.8.40 {}
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
var G__19538__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19539__i = 0, G__19539__a = new Array(arguments.length -  0);
while (G__19539__i < G__19539__a.length) {G__19539__a[G__19539__i] = arguments[G__19539__i + 0]; ++G__19539__i;}
  args = new cljs.core.IndexedSeq(G__19539__a,0);
} 
return G__19538__delegate.call(this,args);};
G__19538.cljs$lang$maxFixedArity = 0;
G__19538.cljs$lang$applyTo = (function (arglist__19540){
var args = cljs.core.seq(arglist__19540);
return G__19538__delegate(args);
});
G__19538.cljs$core$IFn$_invoke$arity$variadic = G__19538__delegate;
return G__19538;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19541__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19542__i = 0, G__19542__a = new Array(arguments.length -  0);
while (G__19542__i < G__19542__a.length) {G__19542__a[G__19542__i] = arguments[G__19542__i + 0]; ++G__19542__i;}
  args = new cljs.core.IndexedSeq(G__19542__a,0);
} 
return G__19541__delegate.call(this,args);};
G__19541.cljs$lang$maxFixedArity = 0;
G__19541.cljs$lang$applyTo = (function (arglist__19543){
var args = cljs.core.seq(arglist__19543);
return G__19541__delegate(args);
});
G__19541.cljs$core$IFn$_invoke$arity$variadic = G__19541__delegate;
return G__19541;
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