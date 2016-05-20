// Compiled by ClojureScript 1.8.51 {}
goog.provide('util.view');
goog.require('cljs.core');
goog.require('goog.dom');
if(typeof util.view.main_container !== 'undefined'){
} else {
util.view.main_container = goog.dom.getElement("mainContainerId");
}
if(typeof util.view.error_container !== 'undefined'){
} else {
util.view.error_container = goog.dom.getElement("errorContainerId");
}
util.view.create_field_val_map = (function util$view$create_field_val_map(field_ids){
return cljs.core.reduce.call(null,(function (p1__23640_SHARP_,p2__23641_SHARP_){
return cljs.core.assoc.call(null,p1__23640_SHARP_,goog.dom.getElement(p2__23641_SHARP_).name,goog.dom.getElement(p2__23641_SHARP_).value);
}),cljs.core.PersistentArrayMap.EMPTY,field_ids);
});

//# sourceMappingURL=view.js.map