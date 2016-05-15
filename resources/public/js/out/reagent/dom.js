// Compiled by ClojureScript 1.8.40 {}
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
var or__18314__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__18314__auto__)){
return or__18314__auto__;
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
var _STAR_always_update_STAR_19850 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_19850){
return (function (){
var _STAR_always_update_STAR_19851 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19851;
}});})(_STAR_always_update_STAR_19850))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19850;
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
var args19852 = [];
var len__19383__auto___19855 = arguments.length;
var i__19384__auto___19856 = (0);
while(true){
if((i__19384__auto___19856 < len__19383__auto___19855)){
args19852.push((arguments[i__19384__auto___19856]));

var G__19857 = (i__19384__auto___19856 + (1));
i__19384__auto___19856 = G__19857;
continue;
} else {
}
break;
}

var G__19854 = args19852.length;
switch (G__19854) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19852.length)].join('')));

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

var seq__19863_19867 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__19864_19868 = null;
var count__19865_19869 = (0);
var i__19866_19870 = (0);
while(true){
if((i__19866_19870 < count__19865_19869)){
var v_19871 = cljs.core._nth.call(null,chunk__19864_19868,i__19866_19870);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19871);

var G__19872 = seq__19863_19867;
var G__19873 = chunk__19864_19868;
var G__19874 = count__19865_19869;
var G__19875 = (i__19866_19870 + (1));
seq__19863_19867 = G__19872;
chunk__19864_19868 = G__19873;
count__19865_19869 = G__19874;
i__19866_19870 = G__19875;
continue;
} else {
var temp__4657__auto___19876 = cljs.core.seq.call(null,seq__19863_19867);
if(temp__4657__auto___19876){
var seq__19863_19877__$1 = temp__4657__auto___19876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19863_19877__$1)){
var c__19125__auto___19878 = cljs.core.chunk_first.call(null,seq__19863_19877__$1);
var G__19879 = cljs.core.chunk_rest.call(null,seq__19863_19877__$1);
var G__19880 = c__19125__auto___19878;
var G__19881 = cljs.core.count.call(null,c__19125__auto___19878);
var G__19882 = (0);
seq__19863_19867 = G__19879;
chunk__19864_19868 = G__19880;
count__19865_19869 = G__19881;
i__19866_19870 = G__19882;
continue;
} else {
var v_19883 = cljs.core.first.call(null,seq__19863_19877__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19883);

var G__19884 = cljs.core.next.call(null,seq__19863_19877__$1);
var G__19885 = null;
var G__19886 = (0);
var G__19887 = (0);
seq__19863_19867 = G__19884;
chunk__19864_19868 = G__19885;
count__19865_19869 = G__19886;
i__19866_19870 = G__19887;
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