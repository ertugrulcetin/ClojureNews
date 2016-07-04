// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs_pikaday.reagent');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
goog.require('cljsjs.pikaday');
cljs_pikaday.reagent.opts_transform = (function cljs_pikaday$reagent$opts_transform(opts){

return cljs.core.clj__GT_js.call(null,camel_snake_kebab.extras.transform_keys.call(null,camel_snake_kebab.core.__GT_camelCaseString,opts));
});
cljs_pikaday.reagent.watch = (function cljs_pikaday$reagent$watch(ratom,predicate,func){
return null;
});
/**
 * Return a date-selector reagent component. Takes a single map as its 
 *   argument, with the following keys:
 *   date-atom: an atom or reaction bound to the date value represented by the picker.
 *   max-date-atom: atom representing the maximum date for the selector.
 *   min-date-atom: atom representing the minimum date for the selector.
 *   pikaday-attrs: a map of options to be passed to the Pikaday constructor.
 *   input-attrs: a map of options to be used as <input> tag attributes.
 */
cljs_pikaday.reagent.date_selector = (function cljs_pikaday$reagent$date_selector(p__25363){
var map__25366 = p__25363;
var map__25366__$1 = ((((!((map__25366 == null)))?((((map__25366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25366):map__25366);
var date_atom = cljs.core.get.call(null,map__25366__$1,new cljs.core.Keyword(null,"date-atom","date-atom",-1343265988));
var max_date_atom = cljs.core.get.call(null,map__25366__$1,new cljs.core.Keyword(null,"max-date-atom","max-date-atom",-1728627354));
var min_date_atom = cljs.core.get.call(null,map__25366__$1,new cljs.core.Keyword(null,"min-date-atom","min-date-atom",-1006014148));
var pikaday_attrs = cljs.core.get.call(null,map__25366__$1,new cljs.core.Keyword(null,"pikaday-attrs","pikaday-attrs",-835796550));
var input_attrs = cljs.core.get.call(null,map__25366__$1,new cljs.core.Keyword(null,"input-attrs","input-attrs",-38113667));
var instance_atom = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs){
return (function (this$){
var default_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),this$.getDOMNode(),new cljs.core.Keyword(null,"default-date","default-date",-626221529),cljs.core.deref.call(null,date_atom),new cljs.core.Keyword(null,"set-default-date","set-default-date",-2109074414),true,new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs){
return (function (p1__25362_SHARP_){
if(cljs.core.truth_(date_atom)){
return cljs.core.reset_BANG_.call(null,date_atom,p1__25362_SHARP_);
} else {
return null;
}
});})(instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs))
], null);
var opts = cljs_pikaday.reagent.opts_transform.call(null,cljs.core.merge.call(null,default_opts,pikaday_attrs));
var instance = (new Pikaday(opts));
cljs.core.reset_BANG_.call(null,instance_atom,instance);

if(cljs.core.truth_(date_atom)){
cljs.core.add_watch.call(null,date_atom,new cljs.core.Keyword(null,"update-instance","update-instance",-1921201453),((function (default_opts,opts,instance,instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs){
return (function (key,ref,old,new$){
return instance.setDate(new$,true);
});})(default_opts,opts,instance,instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs))
);
} else {
}

if(cljs.core.truth_(min_date_atom)){
cljs.core.add_watch.call(null,min_date_atom,new cljs.core.Keyword(null,"update-min-date","update-min-date",-470302899),((function (default_opts,opts,instance,instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs){
return (function (key,ref,old,new$){
instance.setMinDate(new$);

if((cljs.core.deref.call(null,date_atom) < new$)){
return cljs.core.reset_BANG_.call(null,date_atom,new$);
} else {
return null;
}
});})(default_opts,opts,instance,instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs))
);
} else {
}

if(cljs.core.truth_(max_date_atom)){
return cljs.core.add_watch.call(null,max_date_atom,new cljs.core.Keyword(null,"update-max-date","update-max-date",-1884329652),((function (default_opts,opts,instance,instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs){
return (function (key,ref,old,new$){
instance.setMaxDate(new$);

if((cljs.core.deref.call(null,date_atom) > new$)){
return cljs.core.reset_BANG_.call(null,date_atom,new$);
} else {
return null;
}
});})(default_opts,opts,instance,instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs))
);
} else {
return null;
}
});})(instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs){
return (function (this$){
cljs.core.deref.call(null,instance_atom).destroy();

cljs.core.remove_watch.call(null,instance_atom,new cljs.core.Keyword(null,"update-instance","update-instance",-1921201453));

cljs.core.remove_watch.call(null,instance_atom,new cljs.core.Keyword(null,"update-min-date","update-min-date",-470302899));

cljs.core.remove_watch.call(null,instance_atom,new cljs.core.Keyword(null,"update-max-date","update-max-date",-1884329652));

return cljs.core.reset_BANG_.call(null,instance_atom,null);
});})(instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"pikaday-component",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs){
return (function (input_attrs__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),input_attrs__$1], null);
});})(instance_atom,map__25366,map__25366__$1,date_atom,max_date_atom,min_date_atom,pikaday_attrs,input_attrs))
], null));
});

//# sourceMappingURL=reagent.js.map