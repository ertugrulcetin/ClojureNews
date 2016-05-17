// Compiled by ClojureScript 1.8.51 {}
goog.provide('dene');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('reagent.core');
dene.main_container = document.getElementById("mainContainerId");
dene.simple_component = (function dene$simple_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
dene.table_ex = (function dene$table_ex(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"username:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"password:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"password"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"submitId",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return alert("Ertuss!!");
})], null),"Submit"], null)], null)], null)], null)], null);
});
dene.empty_ex = (function dene$empty_ex(){
return null;
});
dene.render_simple = (function dene$render_simple(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dene.table_ex], null),dene.main_container);
});
goog.exportSymbol('dene.render_simple', dene.render_simple);
dene.combine_routes = (function dene$combine_routes(var_args){
var args__22327__auto__ = [];
var len__22320__auto___23830 = arguments.length;
var i__22321__auto___23831 = (0);
while(true){
if((i__22321__auto___23831 < len__22320__auto___23830)){
args__22327__auto__.push((arguments[i__22321__auto___23831]));

var G__23832 = (i__22321__auto___23831 + (1));
i__22321__auto___23831 = G__23832;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((2) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((2)),(0),null)):null);
return dene.combine_routes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22328__auto__);
});

dene.combine_routes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,routes){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),routes)));
});

dene.combine_routes.cljs$lang$maxFixedArity = (2);

dene.combine_routes.cljs$lang$applyTo = (function (seq23827){
var G__23828 = cljs.core.first.call(null,seq23827);
var seq23827__$1 = cljs.core.next.call(null,seq23827);
var G__23829 = cljs.core.first.call(null,seq23827__$1);
var seq23827__$2 = cljs.core.next.call(null,seq23827__$1);
return dene.combine_routes.cljs$core$IFn$_invoke$arity$variadic(G__23828,G__23829,seq23827__$2);
});

dene.combine_routes.cljs$lang$macro = true;
var action__22530__auto___23837 = (function (params__22531__auto__){
if(cljs.core.map_QMARK_.call(null,params__22531__auto__)){
var map__23833 = params__22531__auto__;
var map__23833__$1 = ((((!((map__23833 == null)))?((((map__23833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23833):map__23833);
return dene.render_simple.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__22531__auto__)){
var vec__23835 = params__22531__auto__;
return dene.render_simple.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22530__auto___23837);

dene.home_path = ((function (action__22530__auto___23837){
return (function dene$home_path(var_args){
var args__22327__auto__ = [];
var len__22320__auto___23838 = arguments.length;
var i__22321__auto___23839 = (0);
while(true){
if((i__22321__auto___23839 < len__22320__auto___23838)){
args__22327__auto__.push((arguments[i__22321__auto___23839]));

var G__23840 = (i__22321__auto___23839 + (1));
i__22321__auto___23839 = G__23840;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return dene.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__22530__auto___23837))
;

dene.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22530__auto___23837){
return (function (args__22529__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__22529__auto__);
});})(action__22530__auto___23837))
;

dene.home_path.cljs$lang$maxFixedArity = (0);

dene.home_path.cljs$lang$applyTo = ((function (action__22530__auto___23837){
return (function (seq23836){
return dene.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23836));
});})(action__22530__auto___23837))
;
var action__22530__auto___23845 = (function (params__22531__auto__){
if(cljs.core.map_QMARK_.call(null,params__22531__auto__)){
var map__23841 = params__22531__auto__;
var map__23841__$1 = ((((!((map__23841 == null)))?((((map__23841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23841):map__23841);
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dene.empty_ex], null),dene.main_container);
} else {
if(cljs.core.vector_QMARK_.call(null,params__22531__auto__)){
var vec__23843 = params__22531__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dene.empty_ex], null),dene.main_container);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__22530__auto___23845);

dene.new$ = ((function (action__22530__auto___23845){
return (function dene$new(var_args){
var args__22327__auto__ = [];
var len__22320__auto___23846 = arguments.length;
var i__22321__auto___23847 = (0);
while(true){
if((i__22321__auto___23847 < len__22320__auto___23846)){
args__22327__auto__.push((arguments[i__22321__auto___23847]));

var G__23848 = (i__22321__auto___23847 + (1));
i__22321__auto___23847 = G__23848;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return dene.new$.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__22530__auto___23845))
;

dene.new$.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22530__auto___23845){
return (function (args__22529__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/new",args__22529__auto__);
});})(action__22530__auto___23845))
;

dene.new$.cljs$lang$maxFixedArity = (0);

dene.new$.cljs$lang$applyTo = ((function (action__22530__auto___23845){
return (function (seq23844){
return dene.new$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23844));
});})(action__22530__auto___23845))
;
dene.get_bla_bla_route = (function dene$get_bla_bla_route(){
return dene.combine_routes.call(null,(function (){var action__22530__auto__ = (function (params__22531__auto__){
if(cljs.core.map_QMARK_.call(null,params__22531__auto__)){
var map__23853 = params__22531__auto__;
var map__23853__$1 = ((((!((map__23853 == null)))?((((map__23853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23853):map__23853);
return setTimeout(((function (map__23853,map__23853__$1){
return (function (){
return secretary.core.dispatch_BANG_.call(null,"/");
});})(map__23853,map__23853__$1))
,(1000));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22531__auto__)){
var vec__23855 = params__22531__auto__;
return setTimeout(((function (vec__23855){
return (function (){
return secretary.core.dispatch_BANG_.call(null,"/");
});})(vec__23855))
,(1000));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/ertu",action__22530__auto__);

dene.ertu_path = ((function (action__22530__auto__){
return (function dene$get_bla_bla_route_$_ertu_path(var_args){
var args__22327__auto__ = [];
var len__22320__auto___23857 = arguments.length;
var i__22321__auto___23858 = (0);
while(true){
if((i__22321__auto___23858 < len__22320__auto___23857)){
args__22327__auto__.push((arguments[i__22321__auto___23858]));

var G__23859 = (i__22321__auto___23858 + (1));
i__22321__auto___23858 = G__23859;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return dene.ertu_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});})(action__22530__auto__))
;

dene.ertu_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22530__auto__){
return (function (args__22529__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/ertu",args__22529__auto__);
});})(action__22530__auto__))
;

dene.ertu_path.cljs$lang$maxFixedArity = (0);

return dene.ertu_path.cljs$lang$applyTo = ((function (action__22530__auto__){
return (function (seq23856){
return dene.ertu_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23856));
});})(action__22530__auto__))
;
})());
});

//# sourceMappingURL=dene.js.map