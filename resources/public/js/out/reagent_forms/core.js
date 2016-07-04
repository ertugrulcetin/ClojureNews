// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
if(cljs.core.sequential_QMARK_.call(null,id)){
return id;
} else {
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__26607_SHARP_,p2__26606_SHARP_){
var or__23721__auto__ = p2__26606_SHARP_.call(null,path,value,p1__26607_SHARP_);
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return p1__26607_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4655__auto__)){
var in_fn = temp__4655__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4655__auto__)){
var out_fn = temp__4655__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__24646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24648__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24649__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24650__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__,hierarchy__24650__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__,hierarchy__24650__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24650__auto__,method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__23709__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__23709__auto__){
return fmt;
} else {
return and__23709__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__24646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24648__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24649__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24650__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__,hierarchy__24650__auto__){
return (function (p__26608,_){
var map__26609 = p__26608;
var map__26609__$1 = ((((!((map__26609 == null)))?((((map__26609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26609):map__26609);
var field = cljs.core.get.call(null,map__26609__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__,hierarchy__24650__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24650__auto__,method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__26612,p__26613){
var map__26614 = p__26612;
var map__26614__$1 = ((((!((map__26614 == null)))?((((map__26614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26614):map__26614);
var field = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__26615 = p__26613;
var map__26615__$1 = ((((!((map__26615 == null)))?((((map__26615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26615):map__26615);
var get = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__23721__auto__ = get.call(null,id);
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26614,map__26614__$1,field,id,fmt,map__26615,map__26615__$1,get,save_BANG_,doc){
return (function (p1__26611_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__26611_SHARP_)));
});})(map__26614,map__26614__$1,field,id,fmt,map__26615,map__26615__$1,get,save_BANG_,doc))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__26618,p__26619){
var map__26620 = p__26618;
var map__26620__$1 = ((((!((map__26620 == null)))?((((map__26620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26620):map__26620);
var id = cljs.core.get.call(null,map__26620__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__26621 = p__26619;
var map__26621__$1 = ((((!((map__26621 == null)))?((((map__26621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26621):map__26621);
var get = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26620,map__26620__$1,id,map__26621,map__26621__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__26620,map__26620__$1,id,map__26621,map__26621__$1,get,save_BANG_))
], null),(cljs.core.truth_(get.call(null,id))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),"checked"], null):null));
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__24798__auto__ = [];
var len__24791__auto___26631 = arguments.length;
var i__24792__auto___26632 = (0);
while(true){
if((i__24792__auto___26632 < len__24791__auto___26631)){
args__24798__auto__.push((arguments[i__24792__auto___26632]));

var G__26633 = (i__24792__auto___26632 + (1));
i__24792__auto___26632 = G__26633;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((2) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24799__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__26627,opts,p__26628){
var vec__26629 = p__26627;
var type = cljs.core.nth.call(null,vec__26629,(0),null);
var attrs = cljs.core.nth.call(null,vec__26629,(1),null);
var body = cljs.core.nthnext.call(null,vec__26629,(2));
var vec__26630 = p__26628;
var default_attrs = cljs.core.nth.call(null,vec__26630,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq26624){
var G__26625 = cljs.core.first.call(null,seq26624);
var seq26624__$1 = cljs.core.next.call(null,seq26624);
var G__26626 = cljs.core.first.call(null,seq26624__$1);
var seq26624__$2 = cljs.core.next.call(null,seq26624__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__26625,G__26626,seq26624__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__24646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24648__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24649__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24650__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__,hierarchy__24650__auto__){
return (function (p__26634,_){
var vec__26635 = p__26634;
var ___$1 = cljs.core.nth.call(null,vec__26635,(0),null);
var map__26636 = cljs.core.nth.call(null,vec__26635,(1),null);
var map__26636__$1 = ((((!((map__26636 == null)))?((((map__26636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26636):map__26636);
var field = cljs.core.get.call(null,map__26636__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__,hierarchy__24650__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24650__auto__,method_table__24646__auto__,prefer_table__24647__auto__,method_cache__24648__auto__,cached_hierarchy__24649__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__26639,p__26640){
var vec__26641 = p__26639;
var type = cljs.core.nth.call(null,vec__26641,(0),null);
var map__26642 = cljs.core.nth.call(null,vec__26641,(1),null);
var map__26642__$1 = ((((!((map__26642 == null)))?((((map__26642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26642):map__26642);
var attrs = map__26642__$1;
var valid_QMARK_ = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var body = cljs.core.nthnext.call(null,vec__26641,(2));
var map__26643 = p__26640;
var map__26643__$1 = ((((!((map__26643 == null)))?((((map__26643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26643):map__26643);
var doc = cljs.core.get.call(null,map__26643__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__26641,type,map__26642,map__26642__$1,attrs,valid_QMARK_,body,map__26643,map__26643__$1,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4655__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var valid_class = temp__4655__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4655__auto____$1,visible__26598__auto__,temp__4655__auto__,vec__26641,type,map__26642,map__26642__$1,attrs,valid_QMARK_,body,map__26643,map__26643__$1,doc){
return (function (p1__26638_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__26638_SHARP_))){
return [cljs.core.str(p1__26638_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4655__auto____$1,visible__26598__auto__,temp__4655__auto__,vec__26641,type,map__26642,map__26642__$1,attrs,valid_QMARK_,body,map__26643,map__26643__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4655__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var valid_class = temp__4655__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4655__auto____$1,temp__4655__auto__,vec__26641,type,map__26642,map__26642__$1,attrs,valid_QMARK_,body,map__26643,map__26643__$1,doc){
return (function (p1__26638_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__26638_SHARP_))){
return [cljs.core.str(p1__26638_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4655__auto____$1,temp__4655__auto__,vec__26641,type,map__26642,map__26642__$1,attrs,valid_QMARK_,body,map__26643,map__26643__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__26641,type,map__26642,map__26642__$1,attrs,valid_QMARK_,body,map__26643,map__26643__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__26646,p__26647){
var vec__26648 = p__26646;
var _ = cljs.core.nth.call(null,vec__26648,(0),null);
var map__26649 = cljs.core.nth.call(null,vec__26648,(1),null);
var map__26649__$1 = ((((!((map__26649 == null)))?((((map__26649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26649):map__26649);
var attrs = map__26649__$1;
var field = cljs.core.get.call(null,map__26649__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__26648;
var map__26650 = p__26647;
var map__26650__$1 = ((((!((map__26650 == null)))?((((map__26650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650):map__26650);
var opts = map__26650__$1;
var doc = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__26648,_,map__26649,map__26649__$1,attrs,field,component,map__26650,map__26650__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__26648,_,map__26649,map__26649__$1,attrs,field,component,map__26650,map__26650__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__26655,p__26656){
var vec__26657 = p__26655;
var type = cljs.core.nth.call(null,vec__26657,(0),null);
var map__26658 = cljs.core.nth.call(null,vec__26657,(1),null);
var map__26658__$1 = ((((!((map__26658 == null)))?((((map__26658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26658):map__26658);
var attrs = map__26658__$1;
var id = cljs.core.get.call(null,map__26658__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__26658__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__26659 = p__26656;
var map__26659__$1 = ((((!((map__26659 == null)))?((((map__26659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26659):map__26659);
var doc = cljs.core.get.call(null,map__26659__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__26659__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26659__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__23721__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26598__auto__,temp__4655__auto__,input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_){
return (function (p1__26653_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__26653_SHARP_));
});})(visible__26598__auto__,temp__4655__auto__,input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__26598__auto__,temp__4655__auto__,input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_){
return (function (p1__26654_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__26654_SHARP_))));
});})(visible__26598__auto__,temp__4655__auto__,input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__23721__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_){
return (function (p1__26653_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__26653_SHARP_));
});})(temp__4655__auto__,input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4655__auto__,input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_){
return (function (p1__26654_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__26654_SHARP_))));
});})(temp__4655__auto__,input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_))
], null),attrs)], null);
}
});
;})(input_value,vec__26657,type,map__26658,map__26658__$1,attrs,id,fmt,map__26659,map__26659__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__26665,p__26666){
var vec__26667 = p__26665;
var _ = cljs.core.nth.call(null,vec__26667,(0),null);
var map__26668 = cljs.core.nth.call(null,vec__26667,(1),null);
var map__26668__$1 = ((((!((map__26668 == null)))?((((map__26668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26668):map__26668);
var attrs = map__26668__$1;
var id = cljs.core.get.call(null,map__26668__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.call(null,map__26668__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.call(null,map__26668__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.call(null,map__26668__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var lang = cljs.core.get.call(null,map__26668__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var map__26669 = p__26666;
var map__26669__$1 = ((((!((map__26669 == null)))?((((map__26669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26669):map__26669);
var doc = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var selected_date = get.call(null,id);
var selected_month = (((new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__23721__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__23721__auto__ = selected_month;
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__23721__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__26598__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (p1__26662_SHARP_){
p1__26662_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__26598__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4657__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var date = temp__4657__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__26598__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (p1__26663_SHARP_){
p1__26663_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__26598__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (visible__26598__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(visible__26598__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
,((function (visible__26598__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (p1__26664_SHARP_){
return save_BANG_.call(null,id,p1__26664_SHARP_);
});})(visible__26598__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (p1__26662_SHARP_){
p1__26662_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4657__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var date = temp__4657__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (p1__26663_SHARP_){
p1__26663_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
,((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_){
return (function (p1__26664_SHARP_){
return save_BANG_.call(null,id,p1__26664_SHARP_);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
}
});
;})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__26667,_,map__26668,map__26668__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__26669,map__26669__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__26672,p__26673){
var vec__26674 = p__26672;
var _ = cljs.core.nth.call(null,vec__26674,(0),null);
var map__26675 = cljs.core.nth.call(null,vec__26674,(1),null);
var map__26675__$1 = ((((!((map__26675 == null)))?((((map__26675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26675):map__26675);
var attrs = map__26675__$1;
var id = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__26674;
var map__26676 = p__26673;
var map__26676__$1 = ((((!((map__26676 == null)))?((((map__26676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26676):map__26676);
var opts = map__26676__$1;
var doc = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__23721__auto__ = checked;
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,id,true);
} else {
}

return ((function (vec__26674,_,map__26675,map__26675__$1,attrs,id,field,checked,default_checked,component,map__26676,map__26676__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__26674,_,map__26675,map__26675__$1,attrs,id,field,checked,default_checked,component,map__26676,map__26676__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__26679,p__26680){
var vec__26681 = p__26679;
var type = cljs.core.nth.call(null,vec__26681,(0),null);
var map__26682 = cljs.core.nth.call(null,vec__26681,(1),null);
var map__26682__$1 = ((((!((map__26682 == null)))?((((map__26682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26682):map__26682);
var attrs = map__26682__$1;
var id = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var map__26683 = p__26680;
var map__26683__$1 = ((((!((map__26683 == null)))?((((map__26683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26683):map__26683);
var doc = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__26681,type,map__26682,map__26682__$1,attrs,id,preamble,postamble,placeholder,map__26683,map__26683__$1,doc,get){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4655__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4655__auto____$1)){
var value = temp__4655__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4655__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4655__auto____$1)){
var value = temp__4655__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__26681,type,map__26682,map__26682__$1,attrs,id,preamble,postamble,placeholder,map__26683,map__26683__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__26686,p__26687){
var vec__26688 = p__26686;
var type = cljs.core.nth.call(null,vec__26688,(0),null);
var map__26689 = cljs.core.nth.call(null,vec__26688,(1),null);
var map__26689__$1 = ((((!((map__26689 == null)))?((((map__26689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26689):map__26689);
var attrs = map__26689__$1;
var id = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = cljs.core.nthnext.call(null,vec__26688,(2));
var map__26690 = p__26687;
var map__26690__$1 = ((((!((map__26690 == null)))?((((map__26690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26690):map__26690);
var opts = map__26690__$1;
var doc = cljs.core.get.call(null,map__26690__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__26690__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26690__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__26688,type,map__26689,map__26689__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__26690,map__26690__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4655__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4655__auto____$1)){
var message = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__23721__auto__ = touch_event;
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4655__auto____$1,visible__26598__auto__,temp__4655__auto__,vec__26688,type,map__26689,map__26689__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__26690,map__26690__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4655__auto____$1,visible__26598__auto__,temp__4655__auto__,vec__26688,type,map__26689,map__26689__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__26690,map__26690__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null):null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4655__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4655__auto____$1)){
var message = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__23721__auto__ = touch_event;
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4655__auto____$1,temp__4655__auto__,vec__26688,type,map__26689,map__26689__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__26690,map__26690__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4655__auto____$1,temp__4655__auto__,vec__26688,type,map__26689,map__26689__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__26690,map__26690__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null):null),message], null);
} else {
return null;
}
}
}
});
;})(vec__26688,type,map__26689,map__26689__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__26690,map__26690__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__26693,p__26694){
var vec__26695 = p__26693;
var type = cljs.core.nth.call(null,vec__26695,(0),null);
var map__26696 = cljs.core.nth.call(null,vec__26695,(1),null);
var map__26696__$1 = ((((!((map__26696 == null)))?((((map__26696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26696):map__26696);
var attrs = map__26696__$1;
var field = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var name = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = cljs.core.nthnext.call(null,vec__26695,(2));
var map__26697 = p__26694;
var map__26697__$1 = ((((!((map__26697 == null)))?((((map__26697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26697):map__26697);
var doc = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__23721__auto__ = checked;
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,name,value);
} else {
}

return ((function (vec__26695,type,map__26696,map__26696__$1,attrs,field,name,value,checked,default_checked,body,map__26697,map__26697__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26598__auto__,temp__4655__auto__,vec__26695,type,map__26696,map__26696__$1,attrs,field,name,value,checked,default_checked,body,map__26697,map__26697__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__26598__auto__,temp__4655__auto__,vec__26695,type,map__26696,map__26696__$1,attrs,field,name,value,checked,default_checked,body,map__26697,map__26697__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,vec__26695,type,map__26696,map__26696__$1,attrs,field,name,value,checked,default_checked,body,map__26697,map__26697__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4655__auto__,vec__26695,type,map__26696,map__26696__$1,attrs,field,name,value,checked,default_checked,body,map__26697,map__26697__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
}
});
;})(vec__26695,type,map__26696,map__26696__$1,attrs,field,name,value,checked,default_checked,body,map__26697,map__26697__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__26703,p__26704){
var vec__26705 = p__26703;
var type = cljs.core.nth.call(null,vec__26705,(0),null);
var map__26706 = cljs.core.nth.call(null,vec__26705,(1),null);
var map__26706__$1 = ((((!((map__26706 == null)))?((((map__26706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26706):map__26706);
var attrs = map__26706__$1;
var result_fn = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var highlight_class = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var map__26707 = p__26704;
var map__26707__$1 = ((((!((map__26707 == null)))?((((map__26707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26707):map__26707);
var doc = cljs.core.get.call(null,map__26707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__26707__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26707__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__23709__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections));
if(cljs.core.truth_(and__23709__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__23709__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (p1__26700_SHARP_){
var temp__4657__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__26700_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__26700_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (p1__26701_SHARP_){
var G__26710 = p1__26701_SHARP_.which;
switch (G__26710) {
case (38):
p1__26701_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__26701_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__26701_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__23721__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__23721__auto__){
return or__23721__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (p1__26702_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__26702_SHARP_.target.getAttribute("tabIndex")));
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__26598__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (p1__26700_SHARP_){
var temp__4657__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__26700_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__26700_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (p1__26701_SHARP_){
var G__26711 = p1__26701_SHARP_.which;
switch (G__26711) {
case (38):
p1__26701_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__26701_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__26701_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__23721__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__23721__auto__){
return or__23721__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (p1__26702_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__26702_SHARP_.target.getAttribute("tabIndex")));
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__26705,type,map__26706,map__26706__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__26707,map__26707__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__26715,p__26716){
var vec__26717 = p__26715;
var type = cljs.core.nth.call(null,vec__26717,(0),null);
var map__26718 = cljs.core.nth.call(null,vec__26717,(1),null);
var map__26718__$1 = ((((!((map__26718 == null)))?((((map__26718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26718):map__26718);
var attrs = map__26718__$1;
var id = cljs.core.get.call(null,map__26718__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__26719 = p__26716;
var map__26719__$1 = ((((!((map__26719 == null)))?((((map__26719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26719):map__26719);
var doc = cljs.core.get.call(null,map__26719__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__26719__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__26717,type,map__26718,map__26718__$1,attrs,id,map__26719,map__26719__$1,doc,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26598__auto__,temp__4655__auto__,vec__26717,type,map__26718,map__26718__$1,attrs,id,map__26719,map__26719__$1,doc,save_BANG_){
return (function (p1__26714_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__26714_SHARP_.target.files)));
});})(visible__26598__auto__,temp__4655__auto__,vec__26717,type,map__26718,map__26718__$1,attrs,id,map__26719,map__26719__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,vec__26717,type,map__26718,map__26718__$1,attrs,id,map__26719,map__26719__$1,doc,save_BANG_){
return (function (p1__26714_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__26714_SHARP_.target.files)));
});})(temp__4655__auto__,vec__26717,type,map__26718,map__26718__$1,attrs,id,map__26719,map__26719__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__26717,type,map__26718,map__26718__$1,attrs,id,map__26719,map__26719__$1,doc,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__26723,p__26724){
var vec__26725 = p__26723;
var type = cljs.core.nth.call(null,vec__26725,(0),null);
var map__26726 = cljs.core.nth.call(null,vec__26725,(1),null);
var map__26726__$1 = ((((!((map__26726 == null)))?((((map__26726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26726):map__26726);
var attrs = map__26726__$1;
var id = cljs.core.get.call(null,map__26726__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__26727 = p__26724;
var map__26727__$1 = ((((!((map__26727 == null)))?((((map__26727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26727):map__26727);
var doc = cljs.core.get.call(null,map__26727__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__26727__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__26725,type,map__26726,map__26726__$1,attrs,id,map__26727,map__26727__$1,doc,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26598__auto__,temp__4655__auto__,vec__26725,type,map__26726,map__26726__$1,attrs,id,map__26727,map__26727__$1,doc,save_BANG_){
return (function (p1__26722_SHARP_){
return save_BANG_.call(null,id,p1__26722_SHARP_.target.files);
});})(visible__26598__auto__,temp__4655__auto__,vec__26725,type,map__26726,map__26726__$1,attrs,id,map__26727,map__26727__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,vec__26725,type,map__26726,map__26726__$1,attrs,id,map__26727,map__26727__$1,doc,save_BANG_){
return (function (p1__26722_SHARP_){
return save_BANG_.call(null,id,p1__26722_SHARP_.target.files);
});})(temp__4655__auto__,vec__26725,type,map__26726,map__26726__$1,attrs,id,map__26727,map__26727__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__26725,type,map__26726,map__26726__$1,attrs,id,map__26727,map__26727__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__26730,p__26731,selections,field,id){
var vec__26737 = p__26730;
var type = cljs.core.nth.call(null,vec__26737,(0),null);
var map__26738 = cljs.core.nth.call(null,vec__26737,(1),null);
var map__26738__$1 = ((((!((map__26738 == null)))?((((map__26738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26738):map__26738);
var attrs = map__26738__$1;
var key = cljs.core.get.call(null,map__26738__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.call(null,map__26738__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = cljs.core.nthnext.call(null,vec__26737,(2));
var map__26739 = p__26731;
var map__26739__$1 = ((((!((map__26739 == null)))?((((map__26739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26739):map__26739);
var save_BANG_ = cljs.core.get.call(null,map__26739__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.call(null,map__26739__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = ((function (vec__26737,type,map__26738,map__26738__$1,attrs,key,touch_event,body,map__26739,map__26739__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__26737,type,map__26738,map__26738__$1,attrs,key,touch_event,body,map__26739,map__26739__$1,save_BANG_,multi_select))
;
return ((function (vec__26737,type,map__26738,map__26738__$1,attrs,key,touch_event,body,map__26739,map__26739__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__23721__auto__ = touch_event;
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__26737,type,map__26738,map__26738__$1,attrs,key,touch_event,body,map__26739,map__26739__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__26742){
var map__26749 = p__26742;
var map__26749__$1 = ((((!((map__26749 == null)))?((((map__26749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26749):map__26749);
var get = cljs.core.get.call(null,map__26749__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.call(null,map__26749__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__26749,map__26749__$1,get,multi_select){
return (function (m,p__26751){
var vec__26752 = p__26751;
var _ = cljs.core.nth.call(null,vec__26752,(0),null);
var map__26753 = cljs.core.nth.call(null,vec__26752,(1),null);
var map__26753__$1 = ((((!((map__26753 == null)))?((((map__26753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26753):map__26753);
var key = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__26749,map__26749__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__26757,p__26758){
var vec__26766 = p__26757;
var type = cljs.core.nth.call(null,vec__26766,(0),null);
var map__26767 = cljs.core.nth.call(null,vec__26766,(1),null);
var map__26767__$1 = ((((!((map__26767 == null)))?((((map__26767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26767):map__26767);
var attrs = map__26767__$1;
var field = cljs.core.get.call(null,map__26767__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__26767__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = cljs.core.nthnext.call(null,vec__26766,(2));
var map__26768 = p__26758;
var map__26768__$1 = ((((!((map__26768 == null)))?((((map__26768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26768):map__26768);
var opts = map__26768__$1;
var get = cljs.core.get.call(null,map__26768__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get){
return (function (p1__26755_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get){
return (function (p__26771){
var vec__26772 = p__26771;
var k = cljs.core.nth.call(null,vec__26772,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get))
,p1__26755_SHARP_));
});})(selection_items__$1,selections,selectors,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get){
return (function (p1__26756_SHARP_){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__26756_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var visible_QMARK_ = temp__4655__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__26766,type,map__26767,map__26767__$1,attrs,field,id,selection_items,map__26768,map__26768__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__26773,p__26774){
var vec__26775 = p__26773;
var _ = cljs.core.nth.call(null,vec__26775,(0),null);
var attrs = cljs.core.nth.call(null,vec__26775,(1),null);
var field = vec__26775;
var map__26776 = p__26774;
var map__26776__$1 = ((((!((map__26776 == null)))?((((map__26776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26776):map__26776);
var opts = map__26776__$1;
var doc = cljs.core.get.call(null,map__26776__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__26775,_,attrs,field,map__26776,map__26776__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__26775,_,attrs,field,map__26776,map__26776__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__26778,p__26779){
var vec__26780 = p__26778;
var _ = cljs.core.nth.call(null,vec__26780,(0),null);
var attrs = cljs.core.nth.call(null,vec__26780,(1),null);
var field = vec__26780;
var map__26781 = p__26779;
var map__26781__$1 = ((((!((map__26781 == null)))?((((map__26781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26781):map__26781);
var opts = map__26781__$1;
var doc = cljs.core.get.call(null,map__26781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__26780,_,attrs,field,map__26781,map__26781__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__26780,_,attrs,field,map__26781,map__26781__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24501__auto__ = (function reagent_forms$core$map_options_$_iter__26799(s__26800){
return (new cljs.core.LazySeq(null,(function (){
var s__26800__$1 = s__26800;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26800__$1);
if(temp__4657__auto__){
var s__26800__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26800__$2)){
var c__24499__auto__ = cljs.core.chunk_first.call(null,s__26800__$2);
var size__24500__auto__ = cljs.core.count.call(null,c__24499__auto__);
var b__26802 = cljs.core.chunk_buffer.call(null,size__24500__auto__);
if((function (){var i__26801 = (0);
while(true){
if((i__26801 < size__24500__auto__)){
var vec__26809 = cljs.core._nth.call(null,c__24499__auto__,i__26801);
var _ = cljs.core.nth.call(null,vec__26809,(0),null);
var map__26810 = cljs.core.nth.call(null,vec__26809,(1),null);
var map__26810__$1 = ((((!((map__26810 == null)))?((((map__26810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26810):map__26810);
var key = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__26809,(2),null);
cljs.core.chunk_append.call(null,b__26802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__26815 = (i__26801 + (1));
i__26801 = G__26815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26802),reagent_forms$core$map_options_$_iter__26799.call(null,cljs.core.chunk_rest.call(null,s__26800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26802),null);
}
} else {
var vec__26812 = cljs.core.first.call(null,s__26800__$2);
var _ = cljs.core.nth.call(null,vec__26812,(0),null);
var map__26813 = cljs.core.nth.call(null,vec__26812,(1),null);
var map__26813__$1 = ((((!((map__26813 == null)))?((((map__26813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26813):map__26813);
var key = cljs.core.get.call(null,map__26813__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__26812,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__26799.call(null,cljs.core.rest.call(null,s__26800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24501__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26816_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__26816_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__26819,p__26820){
var vec__26821 = p__26819;
var type = cljs.core.nth.call(null,vec__26821,(0),null);
var map__26822 = cljs.core.nth.call(null,vec__26821,(1),null);
var map__26822__$1 = ((((!((map__26822 == null)))?((((map__26822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26822):map__26822);
var attrs = map__26822__$1;
var field = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = cljs.core.nthnext.call(null,vec__26821,(2));
var map__26823 = p__26820;
var map__26823__$1 = ((((!((map__26823 == null)))?((((map__26823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26823):map__26823);
var doc = cljs.core.get.call(null,map__26823__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__26823__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__26823__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__23721__auto__ = get.call(null,id);
if(cljs.core.truth_(or__23721__auto__)){
return or__23721__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__26598__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__26598__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26598__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_){
return (function (p1__26817_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__26817_SHARP_)));
});})(visible__26598__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__26598__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_){
return (function (p1__26818_SHARP_){
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26818_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var visible_QMARK_ = temp__4655__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__26598__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_){
return (function (p1__26817_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__26817_SHARP_)));
});})(temp__4655__auto__,options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4655__auto__,options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_){
return (function (p1__26818_SHARP_){
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26818_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var visible_QMARK_ = temp__4655__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4655__auto__,options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__26821,type,map__26822,map__26822__$1,attrs,field,id,options,map__26823,map__26823__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__24798__auto__ = [];
var len__24791__auto___26830 = arguments.length;
var i__24792__auto___26831 = (0);
while(true){
if((i__24792__auto___26831 < len__24791__auto___26830)){
args__24798__auto__.push((arguments[i__24792__auto___26831]));

var G__26832 = (i__24792__auto___26831 + (1));
i__24792__auto___26831 = G__26832;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((2) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24799__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__26826_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__26826_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq26827){
var G__26828 = cljs.core.first.call(null,seq26827);
var seq26827__$1 = cljs.core.next.call(null,seq26827);
var G__26829 = cljs.core.first.call(null,seq26827__$1);
var seq26827__$2 = cljs.core.next.call(null,seq26827__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__26828,G__26829,seq26827__$2);
});

//# sourceMappingURL=core.js.map