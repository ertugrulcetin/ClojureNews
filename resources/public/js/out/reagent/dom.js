// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__24047__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_25755 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_25755){
return (function (){
var _STAR_always_update_STAR_25756 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_25756;
}});})(_STAR_always_update_STAR_25755))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_25755;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args25757 = [];
var len__25117__auto___25760 = arguments.length;
var i__25118__auto___25761 = (0);
while(true){
if((i__25118__auto___25761 < len__25117__auto___25760)){
args25757.push((arguments[i__25118__auto___25761]));

var G__25762 = (i__25118__auto___25761 + (1));
i__25118__auto___25761 = G__25762;
continue;
} else {
}
break;
}

var G__25759 = args25757.length;
switch (G__25759) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25757.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__25768_25772 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__25769_25773 = null;
var count__25770_25774 = (0);
var i__25771_25775 = (0);
while(true){
if((i__25771_25775 < count__25770_25774)){
var v_25776 = cljs.core._nth.call(null,chunk__25769_25773,i__25771_25775);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_25776);

var G__25777 = seq__25768_25772;
var G__25778 = chunk__25769_25773;
var G__25779 = count__25770_25774;
var G__25780 = (i__25771_25775 + (1));
seq__25768_25772 = G__25777;
chunk__25769_25773 = G__25778;
count__25770_25774 = G__25779;
i__25771_25775 = G__25780;
continue;
} else {
var temp__4657__auto___25781 = cljs.core.seq.call(null,seq__25768_25772);
if(temp__4657__auto___25781){
var seq__25768_25782__$1 = temp__4657__auto___25781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25768_25782__$1)){
var c__24858__auto___25783 = cljs.core.chunk_first.call(null,seq__25768_25782__$1);
var G__25784 = cljs.core.chunk_rest.call(null,seq__25768_25782__$1);
var G__25785 = c__24858__auto___25783;
var G__25786 = cljs.core.count.call(null,c__24858__auto___25783);
var G__25787 = (0);
seq__25768_25772 = G__25784;
chunk__25769_25773 = G__25785;
count__25770_25774 = G__25786;
i__25771_25775 = G__25787;
continue;
} else {
var v_25788 = cljs.core.first.call(null,seq__25768_25782__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_25788);

var G__25789 = cljs.core.next.call(null,seq__25768_25782__$1);
var G__25790 = null;
var G__25791 = (0);
var G__25792 = (0);
seq__25768_25772 = G__25789;
chunk__25769_25773 = G__25790;
count__25770_25774 = G__25791;
i__25771_25775 = G__25792;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map