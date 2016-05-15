// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21250__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21250__auto__){
return or__21250__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21250__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26379_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26379_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26384 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26385 = null;
var count__26386 = (0);
var i__26387 = (0);
while(true){
if((i__26387 < count__26386)){
var n = cljs.core._nth.call(null,chunk__26385,i__26387);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26388 = seq__26384;
var G__26389 = chunk__26385;
var G__26390 = count__26386;
var G__26391 = (i__26387 + (1));
seq__26384 = G__26388;
chunk__26385 = G__26389;
count__26386 = G__26390;
i__26387 = G__26391;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26384);
if(temp__4657__auto__){
var seq__26384__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26384__$1)){
var c__22061__auto__ = cljs.core.chunk_first.call(null,seq__26384__$1);
var G__26392 = cljs.core.chunk_rest.call(null,seq__26384__$1);
var G__26393 = c__22061__auto__;
var G__26394 = cljs.core.count.call(null,c__22061__auto__);
var G__26395 = (0);
seq__26384 = G__26392;
chunk__26385 = G__26393;
count__26386 = G__26394;
i__26387 = G__26395;
continue;
} else {
var n = cljs.core.first.call(null,seq__26384__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26396 = cljs.core.next.call(null,seq__26384__$1);
var G__26397 = null;
var G__26398 = (0);
var G__26399 = (0);
seq__26384 = G__26396;
chunk__26385 = G__26397;
count__26386 = G__26398;
i__26387 = G__26399;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26438_26445 = cljs.core.seq.call(null,deps);
var chunk__26439_26446 = null;
var count__26440_26447 = (0);
var i__26441_26448 = (0);
while(true){
if((i__26441_26448 < count__26440_26447)){
var dep_26449 = cljs.core._nth.call(null,chunk__26439_26446,i__26441_26448);
topo_sort_helper_STAR_.call(null,dep_26449,(depth + (1)),state);

var G__26450 = seq__26438_26445;
var G__26451 = chunk__26439_26446;
var G__26452 = count__26440_26447;
var G__26453 = (i__26441_26448 + (1));
seq__26438_26445 = G__26450;
chunk__26439_26446 = G__26451;
count__26440_26447 = G__26452;
i__26441_26448 = G__26453;
continue;
} else {
var temp__4657__auto___26454 = cljs.core.seq.call(null,seq__26438_26445);
if(temp__4657__auto___26454){
var seq__26438_26455__$1 = temp__4657__auto___26454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26438_26455__$1)){
var c__22061__auto___26456 = cljs.core.chunk_first.call(null,seq__26438_26455__$1);
var G__26457 = cljs.core.chunk_rest.call(null,seq__26438_26455__$1);
var G__26458 = c__22061__auto___26456;
var G__26459 = cljs.core.count.call(null,c__22061__auto___26456);
var G__26460 = (0);
seq__26438_26445 = G__26457;
chunk__26439_26446 = G__26458;
count__26440_26447 = G__26459;
i__26441_26448 = G__26460;
continue;
} else {
var dep_26461 = cljs.core.first.call(null,seq__26438_26455__$1);
topo_sort_helper_STAR_.call(null,dep_26461,(depth + (1)),state);

var G__26462 = cljs.core.next.call(null,seq__26438_26455__$1);
var G__26463 = null;
var G__26464 = (0);
var G__26465 = (0);
seq__26438_26445 = G__26462;
chunk__26439_26446 = G__26463;
count__26440_26447 = G__26464;
i__26441_26448 = G__26465;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26442){
var vec__26444 = p__26442;
var x = cljs.core.nth.call(null,vec__26444,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26444,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26444,x,xs,get_deps__$1){
return (function (p1__26400_SHARP_){
return clojure.set.difference.call(null,p1__26400_SHARP_,x);
});})(vec__26444,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26478 = cljs.core.seq.call(null,provides);
var chunk__26479 = null;
var count__26480 = (0);
var i__26481 = (0);
while(true){
if((i__26481 < count__26480)){
var prov = cljs.core._nth.call(null,chunk__26479,i__26481);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26482_26490 = cljs.core.seq.call(null,requires);
var chunk__26483_26491 = null;
var count__26484_26492 = (0);
var i__26485_26493 = (0);
while(true){
if((i__26485_26493 < count__26484_26492)){
var req_26494 = cljs.core._nth.call(null,chunk__26483_26491,i__26485_26493);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26494,prov);

var G__26495 = seq__26482_26490;
var G__26496 = chunk__26483_26491;
var G__26497 = count__26484_26492;
var G__26498 = (i__26485_26493 + (1));
seq__26482_26490 = G__26495;
chunk__26483_26491 = G__26496;
count__26484_26492 = G__26497;
i__26485_26493 = G__26498;
continue;
} else {
var temp__4657__auto___26499 = cljs.core.seq.call(null,seq__26482_26490);
if(temp__4657__auto___26499){
var seq__26482_26500__$1 = temp__4657__auto___26499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26482_26500__$1)){
var c__22061__auto___26501 = cljs.core.chunk_first.call(null,seq__26482_26500__$1);
var G__26502 = cljs.core.chunk_rest.call(null,seq__26482_26500__$1);
var G__26503 = c__22061__auto___26501;
var G__26504 = cljs.core.count.call(null,c__22061__auto___26501);
var G__26505 = (0);
seq__26482_26490 = G__26502;
chunk__26483_26491 = G__26503;
count__26484_26492 = G__26504;
i__26485_26493 = G__26505;
continue;
} else {
var req_26506 = cljs.core.first.call(null,seq__26482_26500__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26506,prov);

var G__26507 = cljs.core.next.call(null,seq__26482_26500__$1);
var G__26508 = null;
var G__26509 = (0);
var G__26510 = (0);
seq__26482_26490 = G__26507;
chunk__26483_26491 = G__26508;
count__26484_26492 = G__26509;
i__26485_26493 = G__26510;
continue;
}
} else {
}
}
break;
}

var G__26511 = seq__26478;
var G__26512 = chunk__26479;
var G__26513 = count__26480;
var G__26514 = (i__26481 + (1));
seq__26478 = G__26511;
chunk__26479 = G__26512;
count__26480 = G__26513;
i__26481 = G__26514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26478);
if(temp__4657__auto__){
var seq__26478__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26478__$1)){
var c__22061__auto__ = cljs.core.chunk_first.call(null,seq__26478__$1);
var G__26515 = cljs.core.chunk_rest.call(null,seq__26478__$1);
var G__26516 = c__22061__auto__;
var G__26517 = cljs.core.count.call(null,c__22061__auto__);
var G__26518 = (0);
seq__26478 = G__26515;
chunk__26479 = G__26516;
count__26480 = G__26517;
i__26481 = G__26518;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26478__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26486_26519 = cljs.core.seq.call(null,requires);
var chunk__26487_26520 = null;
var count__26488_26521 = (0);
var i__26489_26522 = (0);
while(true){
if((i__26489_26522 < count__26488_26521)){
var req_26523 = cljs.core._nth.call(null,chunk__26487_26520,i__26489_26522);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26523,prov);

var G__26524 = seq__26486_26519;
var G__26525 = chunk__26487_26520;
var G__26526 = count__26488_26521;
var G__26527 = (i__26489_26522 + (1));
seq__26486_26519 = G__26524;
chunk__26487_26520 = G__26525;
count__26488_26521 = G__26526;
i__26489_26522 = G__26527;
continue;
} else {
var temp__4657__auto___26528__$1 = cljs.core.seq.call(null,seq__26486_26519);
if(temp__4657__auto___26528__$1){
var seq__26486_26529__$1 = temp__4657__auto___26528__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26486_26529__$1)){
var c__22061__auto___26530 = cljs.core.chunk_first.call(null,seq__26486_26529__$1);
var G__26531 = cljs.core.chunk_rest.call(null,seq__26486_26529__$1);
var G__26532 = c__22061__auto___26530;
var G__26533 = cljs.core.count.call(null,c__22061__auto___26530);
var G__26534 = (0);
seq__26486_26519 = G__26531;
chunk__26487_26520 = G__26532;
count__26488_26521 = G__26533;
i__26489_26522 = G__26534;
continue;
} else {
var req_26535 = cljs.core.first.call(null,seq__26486_26529__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26535,prov);

var G__26536 = cljs.core.next.call(null,seq__26486_26529__$1);
var G__26537 = null;
var G__26538 = (0);
var G__26539 = (0);
seq__26486_26519 = G__26536;
chunk__26487_26520 = G__26537;
count__26488_26521 = G__26538;
i__26489_26522 = G__26539;
continue;
}
} else {
}
}
break;
}

var G__26540 = cljs.core.next.call(null,seq__26478__$1);
var G__26541 = null;
var G__26542 = (0);
var G__26543 = (0);
seq__26478 = G__26540;
chunk__26479 = G__26541;
count__26480 = G__26542;
i__26481 = G__26543;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26548_26552 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26549_26553 = null;
var count__26550_26554 = (0);
var i__26551_26555 = (0);
while(true){
if((i__26551_26555 < count__26550_26554)){
var ns_26556 = cljs.core._nth.call(null,chunk__26549_26553,i__26551_26555);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26556);

var G__26557 = seq__26548_26552;
var G__26558 = chunk__26549_26553;
var G__26559 = count__26550_26554;
var G__26560 = (i__26551_26555 + (1));
seq__26548_26552 = G__26557;
chunk__26549_26553 = G__26558;
count__26550_26554 = G__26559;
i__26551_26555 = G__26560;
continue;
} else {
var temp__4657__auto___26561 = cljs.core.seq.call(null,seq__26548_26552);
if(temp__4657__auto___26561){
var seq__26548_26562__$1 = temp__4657__auto___26561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26548_26562__$1)){
var c__22061__auto___26563 = cljs.core.chunk_first.call(null,seq__26548_26562__$1);
var G__26564 = cljs.core.chunk_rest.call(null,seq__26548_26562__$1);
var G__26565 = c__22061__auto___26563;
var G__26566 = cljs.core.count.call(null,c__22061__auto___26563);
var G__26567 = (0);
seq__26548_26552 = G__26564;
chunk__26549_26553 = G__26565;
count__26550_26554 = G__26566;
i__26551_26555 = G__26567;
continue;
} else {
var ns_26568 = cljs.core.first.call(null,seq__26548_26562__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26568);

var G__26569 = cljs.core.next.call(null,seq__26548_26562__$1);
var G__26570 = null;
var G__26571 = (0);
var G__26572 = (0);
seq__26548_26552 = G__26569;
chunk__26549_26553 = G__26570;
count__26550_26554 = G__26571;
i__26551_26555 = G__26572;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21250__auto__ = goog.require__;
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26573__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26574__i = 0, G__26574__a = new Array(arguments.length -  0);
while (G__26574__i < G__26574__a.length) {G__26574__a[G__26574__i] = arguments[G__26574__i + 0]; ++G__26574__i;}
  args = new cljs.core.IndexedSeq(G__26574__a,0);
} 
return G__26573__delegate.call(this,args);};
G__26573.cljs$lang$maxFixedArity = 0;
G__26573.cljs$lang$applyTo = (function (arglist__26575){
var args = cljs.core.seq(arglist__26575);
return G__26573__delegate(args);
});
G__26573.cljs$core$IFn$_invoke$arity$variadic = G__26573__delegate;
return G__26573;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26577 = cljs.core._EQ_;
var expr__26578 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26577.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26578))){
var path_parts = ((function (pred__26577,expr__26578){
return (function (p1__26576_SHARP_){
return clojure.string.split.call(null,p1__26576_SHARP_,/[\/\\]/);
});})(pred__26577,expr__26578))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26577,expr__26578){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26580){if((e26580 instanceof Error)){
var e = e26580;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26580;

}
}})());
});
;})(path_parts,sep,root,pred__26577,expr__26578))
} else {
if(cljs.core.truth_(pred__26577.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26578))){
return ((function (pred__26577,expr__26578){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26577,expr__26578){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26577,expr__26578))
);

return deferred.addErrback(((function (deferred,pred__26577,expr__26578){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26577,expr__26578))
);
});
;})(pred__26577,expr__26578))
} else {
return ((function (pred__26577,expr__26578){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26577,expr__26578))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26581,callback){
var map__26584 = p__26581;
var map__26584__$1 = ((((!((map__26584 == null)))?((((map__26584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26584):map__26584);
var file_msg = map__26584__$1;
var request_url = cljs.core.get.call(null,map__26584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26584,map__26584__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26584,map__26584__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__){
return (function (state_26608){
var state_val_26609 = (state_26608[(1)]);
if((state_val_26609 === (7))){
var inst_26604 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
var statearr_26610_26630 = state_26608__$1;
(statearr_26610_26630[(2)] = inst_26604);

(statearr_26610_26630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (1))){
var state_26608__$1 = state_26608;
var statearr_26611_26631 = state_26608__$1;
(statearr_26611_26631[(2)] = null);

(statearr_26611_26631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (4))){
var inst_26588 = (state_26608[(7)]);
var inst_26588__$1 = (state_26608[(2)]);
var state_26608__$1 = (function (){var statearr_26612 = state_26608;
(statearr_26612[(7)] = inst_26588__$1);

return statearr_26612;
})();
if(cljs.core.truth_(inst_26588__$1)){
var statearr_26613_26632 = state_26608__$1;
(statearr_26613_26632[(1)] = (5));

} else {
var statearr_26614_26633 = state_26608__$1;
(statearr_26614_26633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (6))){
var state_26608__$1 = state_26608;
var statearr_26615_26634 = state_26608__$1;
(statearr_26615_26634[(2)] = null);

(statearr_26615_26634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (3))){
var inst_26606 = (state_26608[(2)]);
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26608__$1,inst_26606);
} else {
if((state_val_26609 === (2))){
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26608__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26609 === (11))){
var inst_26600 = (state_26608[(2)]);
var state_26608__$1 = (function (){var statearr_26616 = state_26608;
(statearr_26616[(8)] = inst_26600);

return statearr_26616;
})();
var statearr_26617_26635 = state_26608__$1;
(statearr_26617_26635[(2)] = null);

(statearr_26617_26635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (9))){
var inst_26592 = (state_26608[(9)]);
var inst_26594 = (state_26608[(10)]);
var inst_26596 = inst_26594.call(null,inst_26592);
var state_26608__$1 = state_26608;
var statearr_26618_26636 = state_26608__$1;
(statearr_26618_26636[(2)] = inst_26596);

(statearr_26618_26636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (5))){
var inst_26588 = (state_26608[(7)]);
var inst_26590 = figwheel.client.file_reloading.blocking_load.call(null,inst_26588);
var state_26608__$1 = state_26608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26608__$1,(8),inst_26590);
} else {
if((state_val_26609 === (10))){
var inst_26592 = (state_26608[(9)]);
var inst_26598 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26592);
var state_26608__$1 = state_26608;
var statearr_26619_26637 = state_26608__$1;
(statearr_26619_26637[(2)] = inst_26598);

(statearr_26619_26637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26609 === (8))){
var inst_26588 = (state_26608[(7)]);
var inst_26594 = (state_26608[(10)]);
var inst_26592 = (state_26608[(2)]);
var inst_26593 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26594__$1 = cljs.core.get.call(null,inst_26593,inst_26588);
var state_26608__$1 = (function (){var statearr_26620 = state_26608;
(statearr_26620[(9)] = inst_26592);

(statearr_26620[(10)] = inst_26594__$1);

return statearr_26620;
})();
if(cljs.core.truth_(inst_26594__$1)){
var statearr_26621_26638 = state_26608__$1;
(statearr_26621_26638[(1)] = (9));

} else {
var statearr_26622_26639 = state_26608__$1;
(statearr_26622_26639[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23510__auto__))
;
return ((function (switch__23398__auto__,c__23510__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23399__auto__ = null;
var figwheel$client$file_reloading$state_machine__23399__auto____0 = (function (){
var statearr_26626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26626[(0)] = figwheel$client$file_reloading$state_machine__23399__auto__);

(statearr_26626[(1)] = (1));

return statearr_26626;
});
var figwheel$client$file_reloading$state_machine__23399__auto____1 = (function (state_26608){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_26608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object)){
var ex__23402__auto__ = e26627;
var statearr_26628_26640 = state_26608;
(statearr_26628_26640[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26641 = state_26608;
state_26608 = G__26641;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23399__auto__ = function(state_26608){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23399__auto____1.call(this,state_26608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23399__auto____0;
figwheel$client$file_reloading$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23399__auto____1;
return figwheel$client$file_reloading$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__))
})();
var state__23512__auto__ = (function (){var statearr_26629 = f__23511__auto__.call(null);
(statearr_26629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__))
);

return c__23510__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26642,callback){
var map__26645 = p__26642;
var map__26645__$1 = ((((!((map__26645 == null)))?((((map__26645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26645):map__26645);
var file_msg = map__26645__$1;
var namespace = cljs.core.get.call(null,map__26645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26645,map__26645__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26645,map__26645__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26647){
var map__26650 = p__26647;
var map__26650__$1 = ((((!((map__26650 == null)))?((((map__26650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650):map__26650);
var file_msg = map__26650__$1;
var namespace = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21238__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21238__auto__){
var or__21250__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
var or__21250__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21250__auto____$1)){
return or__21250__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21238__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26652,callback){
var map__26655 = p__26652;
var map__26655__$1 = ((((!((map__26655 == null)))?((((map__26655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26655):map__26655);
var file_msg = map__26655__$1;
var request_url = cljs.core.get.call(null,map__26655__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26655__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23510__auto___26743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___26743,out){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___26743,out){
return (function (state_26725){
var state_val_26726 = (state_26725[(1)]);
if((state_val_26726 === (1))){
var inst_26703 = cljs.core.nth.call(null,files,(0),null);
var inst_26704 = cljs.core.nthnext.call(null,files,(1));
var inst_26705 = files;
var state_26725__$1 = (function (){var statearr_26727 = state_26725;
(statearr_26727[(7)] = inst_26703);

(statearr_26727[(8)] = inst_26705);

(statearr_26727[(9)] = inst_26704);

return statearr_26727;
})();
var statearr_26728_26744 = state_26725__$1;
(statearr_26728_26744[(2)] = null);

(statearr_26728_26744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (2))){
var inst_26708 = (state_26725[(10)]);
var inst_26705 = (state_26725[(8)]);
var inst_26708__$1 = cljs.core.nth.call(null,inst_26705,(0),null);
var inst_26709 = cljs.core.nthnext.call(null,inst_26705,(1));
var inst_26710 = (inst_26708__$1 == null);
var inst_26711 = cljs.core.not.call(null,inst_26710);
var state_26725__$1 = (function (){var statearr_26729 = state_26725;
(statearr_26729[(10)] = inst_26708__$1);

(statearr_26729[(11)] = inst_26709);

return statearr_26729;
})();
if(inst_26711){
var statearr_26730_26745 = state_26725__$1;
(statearr_26730_26745[(1)] = (4));

} else {
var statearr_26731_26746 = state_26725__$1;
(statearr_26731_26746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (3))){
var inst_26723 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26725__$1,inst_26723);
} else {
if((state_val_26726 === (4))){
var inst_26708 = (state_26725[(10)]);
var inst_26713 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26708);
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26725__$1,(7),inst_26713);
} else {
if((state_val_26726 === (5))){
var inst_26719 = cljs.core.async.close_BANG_.call(null,out);
var state_26725__$1 = state_26725;
var statearr_26732_26747 = state_26725__$1;
(statearr_26732_26747[(2)] = inst_26719);

(statearr_26732_26747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (6))){
var inst_26721 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
var statearr_26733_26748 = state_26725__$1;
(statearr_26733_26748[(2)] = inst_26721);

(statearr_26733_26748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (7))){
var inst_26709 = (state_26725[(11)]);
var inst_26715 = (state_26725[(2)]);
var inst_26716 = cljs.core.async.put_BANG_.call(null,out,inst_26715);
var inst_26705 = inst_26709;
var state_26725__$1 = (function (){var statearr_26734 = state_26725;
(statearr_26734[(12)] = inst_26716);

(statearr_26734[(8)] = inst_26705);

return statearr_26734;
})();
var statearr_26735_26749 = state_26725__$1;
(statearr_26735_26749[(2)] = null);

(statearr_26735_26749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23510__auto___26743,out))
;
return ((function (switch__23398__auto__,c__23510__auto___26743,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto____0 = (function (){
var statearr_26739 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26739[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto__);

(statearr_26739[(1)] = (1));

return statearr_26739;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto____1 = (function (state_26725){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_26725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e26740){if((e26740 instanceof Object)){
var ex__23402__auto__ = e26740;
var statearr_26741_26750 = state_26725;
(statearr_26741_26750[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26751 = state_26725;
state_26725 = G__26751;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto__ = function(state_26725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto____1.call(this,state_26725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___26743,out))
})();
var state__23512__auto__ = (function (){var statearr_26742 = f__23511__auto__.call(null);
(statearr_26742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___26743);

return statearr_26742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___26743,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26752,opts){
var map__26756 = p__26752;
var map__26756__$1 = ((((!((map__26756 == null)))?((((map__26756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26756):map__26756);
var eval_body__$1 = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21238__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21238__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21238__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26758){var e = e26758;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26759_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26759_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26764){
var vec__26765 = p__26764;
var k = cljs.core.nth.call(null,vec__26765,(0),null);
var v = cljs.core.nth.call(null,vec__26765,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26766){
var vec__26767 = p__26766;
var k = cljs.core.nth.call(null,vec__26767,(0),null);
var v = cljs.core.nth.call(null,vec__26767,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26771,p__26772){
var map__27019 = p__26771;
var map__27019__$1 = ((((!((map__27019 == null)))?((((map__27019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27019):map__27019);
var opts = map__27019__$1;
var before_jsload = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27020 = p__26772;
var map__27020__$1 = ((((!((map__27020 == null)))?((((map__27020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27020):map__27020);
var msg = map__27020__$1;
var files = cljs.core.get.call(null,map__27020__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27020__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27020__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27173){
var state_val_27174 = (state_27173[(1)]);
if((state_val_27174 === (7))){
var inst_27034 = (state_27173[(7)]);
var inst_27035 = (state_27173[(8)]);
var inst_27037 = (state_27173[(9)]);
var inst_27036 = (state_27173[(10)]);
var inst_27042 = cljs.core._nth.call(null,inst_27035,inst_27037);
var inst_27043 = figwheel.client.file_reloading.eval_body.call(null,inst_27042,opts);
var inst_27044 = (inst_27037 + (1));
var tmp27175 = inst_27034;
var tmp27176 = inst_27035;
var tmp27177 = inst_27036;
var inst_27034__$1 = tmp27175;
var inst_27035__$1 = tmp27176;
var inst_27036__$1 = tmp27177;
var inst_27037__$1 = inst_27044;
var state_27173__$1 = (function (){var statearr_27178 = state_27173;
(statearr_27178[(7)] = inst_27034__$1);

(statearr_27178[(8)] = inst_27035__$1);

(statearr_27178[(9)] = inst_27037__$1);

(statearr_27178[(11)] = inst_27043);

(statearr_27178[(10)] = inst_27036__$1);

return statearr_27178;
})();
var statearr_27179_27265 = state_27173__$1;
(statearr_27179_27265[(2)] = null);

(statearr_27179_27265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (20))){
var inst_27077 = (state_27173[(12)]);
var inst_27085 = figwheel.client.file_reloading.sort_files.call(null,inst_27077);
var state_27173__$1 = state_27173;
var statearr_27180_27266 = state_27173__$1;
(statearr_27180_27266[(2)] = inst_27085);

(statearr_27180_27266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (27))){
var state_27173__$1 = state_27173;
var statearr_27181_27267 = state_27173__$1;
(statearr_27181_27267[(2)] = null);

(statearr_27181_27267[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (1))){
var inst_27026 = (state_27173[(13)]);
var inst_27023 = before_jsload.call(null,files);
var inst_27024 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27025 = (function (){return ((function (inst_27026,inst_27023,inst_27024,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26768_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26768_SHARP_);
});
;})(inst_27026,inst_27023,inst_27024,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27026__$1 = cljs.core.filter.call(null,inst_27025,files);
var inst_27027 = cljs.core.not_empty.call(null,inst_27026__$1);
var state_27173__$1 = (function (){var statearr_27182 = state_27173;
(statearr_27182[(14)] = inst_27023);

(statearr_27182[(13)] = inst_27026__$1);

(statearr_27182[(15)] = inst_27024);

return statearr_27182;
})();
if(cljs.core.truth_(inst_27027)){
var statearr_27183_27268 = state_27173__$1;
(statearr_27183_27268[(1)] = (2));

} else {
var statearr_27184_27269 = state_27173__$1;
(statearr_27184_27269[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (24))){
var state_27173__$1 = state_27173;
var statearr_27185_27270 = state_27173__$1;
(statearr_27185_27270[(2)] = null);

(statearr_27185_27270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (39))){
var inst_27127 = (state_27173[(16)]);
var state_27173__$1 = state_27173;
var statearr_27186_27271 = state_27173__$1;
(statearr_27186_27271[(2)] = inst_27127);

(statearr_27186_27271[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (46))){
var inst_27168 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27187_27272 = state_27173__$1;
(statearr_27187_27272[(2)] = inst_27168);

(statearr_27187_27272[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (4))){
var inst_27071 = (state_27173[(2)]);
var inst_27072 = cljs.core.List.EMPTY;
var inst_27073 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27072);
var inst_27074 = (function (){return ((function (inst_27071,inst_27072,inst_27073,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26769_SHARP_){
var and__21238__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26769_SHARP_);
if(cljs.core.truth_(and__21238__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26769_SHARP_));
} else {
return and__21238__auto__;
}
});
;})(inst_27071,inst_27072,inst_27073,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27075 = cljs.core.filter.call(null,inst_27074,files);
var inst_27076 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27077 = cljs.core.concat.call(null,inst_27075,inst_27076);
var state_27173__$1 = (function (){var statearr_27188 = state_27173;
(statearr_27188[(17)] = inst_27073);

(statearr_27188[(18)] = inst_27071);

(statearr_27188[(12)] = inst_27077);

return statearr_27188;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27189_27273 = state_27173__$1;
(statearr_27189_27273[(1)] = (16));

} else {
var statearr_27190_27274 = state_27173__$1;
(statearr_27190_27274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (15))){
var inst_27061 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27191_27275 = state_27173__$1;
(statearr_27191_27275[(2)] = inst_27061);

(statearr_27191_27275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (21))){
var inst_27087 = (state_27173[(19)]);
var inst_27087__$1 = (state_27173[(2)]);
var inst_27088 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27087__$1);
var state_27173__$1 = (function (){var statearr_27192 = state_27173;
(statearr_27192[(19)] = inst_27087__$1);

return statearr_27192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27173__$1,(22),inst_27088);
} else {
if((state_val_27174 === (31))){
var inst_27171 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27173__$1,inst_27171);
} else {
if((state_val_27174 === (32))){
var inst_27127 = (state_27173[(16)]);
var inst_27132 = inst_27127.cljs$lang$protocol_mask$partition0$;
var inst_27133 = (inst_27132 & (64));
var inst_27134 = inst_27127.cljs$core$ISeq$;
var inst_27135 = (inst_27133) || (inst_27134);
var state_27173__$1 = state_27173;
if(cljs.core.truth_(inst_27135)){
var statearr_27193_27276 = state_27173__$1;
(statearr_27193_27276[(1)] = (35));

} else {
var statearr_27194_27277 = state_27173__$1;
(statearr_27194_27277[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (40))){
var inst_27148 = (state_27173[(20)]);
var inst_27147 = (state_27173[(2)]);
var inst_27148__$1 = cljs.core.get.call(null,inst_27147,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27149 = cljs.core.get.call(null,inst_27147,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27150 = cljs.core.not_empty.call(null,inst_27148__$1);
var state_27173__$1 = (function (){var statearr_27195 = state_27173;
(statearr_27195[(20)] = inst_27148__$1);

(statearr_27195[(21)] = inst_27149);

return statearr_27195;
})();
if(cljs.core.truth_(inst_27150)){
var statearr_27196_27278 = state_27173__$1;
(statearr_27196_27278[(1)] = (41));

} else {
var statearr_27197_27279 = state_27173__$1;
(statearr_27197_27279[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (33))){
var state_27173__$1 = state_27173;
var statearr_27198_27280 = state_27173__$1;
(statearr_27198_27280[(2)] = false);

(statearr_27198_27280[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (13))){
var inst_27047 = (state_27173[(22)]);
var inst_27051 = cljs.core.chunk_first.call(null,inst_27047);
var inst_27052 = cljs.core.chunk_rest.call(null,inst_27047);
var inst_27053 = cljs.core.count.call(null,inst_27051);
var inst_27034 = inst_27052;
var inst_27035 = inst_27051;
var inst_27036 = inst_27053;
var inst_27037 = (0);
var state_27173__$1 = (function (){var statearr_27199 = state_27173;
(statearr_27199[(7)] = inst_27034);

(statearr_27199[(8)] = inst_27035);

(statearr_27199[(9)] = inst_27037);

(statearr_27199[(10)] = inst_27036);

return statearr_27199;
})();
var statearr_27200_27281 = state_27173__$1;
(statearr_27200_27281[(2)] = null);

(statearr_27200_27281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (22))){
var inst_27095 = (state_27173[(23)]);
var inst_27087 = (state_27173[(19)]);
var inst_27090 = (state_27173[(24)]);
var inst_27091 = (state_27173[(25)]);
var inst_27090__$1 = (state_27173[(2)]);
var inst_27091__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27090__$1);
var inst_27092 = (function (){var all_files = inst_27087;
var res_SINGLEQUOTE_ = inst_27090__$1;
var res = inst_27091__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27095,inst_27087,inst_27090,inst_27091,inst_27090__$1,inst_27091__$1,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26770_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26770_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27095,inst_27087,inst_27090,inst_27091,inst_27090__$1,inst_27091__$1,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27093 = cljs.core.filter.call(null,inst_27092,inst_27090__$1);
var inst_27094 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27095__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27094);
var inst_27096 = cljs.core.not_empty.call(null,inst_27095__$1);
var state_27173__$1 = (function (){var statearr_27201 = state_27173;
(statearr_27201[(23)] = inst_27095__$1);

(statearr_27201[(24)] = inst_27090__$1);

(statearr_27201[(25)] = inst_27091__$1);

(statearr_27201[(26)] = inst_27093);

return statearr_27201;
})();
if(cljs.core.truth_(inst_27096)){
var statearr_27202_27282 = state_27173__$1;
(statearr_27202_27282[(1)] = (23));

} else {
var statearr_27203_27283 = state_27173__$1;
(statearr_27203_27283[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (36))){
var state_27173__$1 = state_27173;
var statearr_27204_27284 = state_27173__$1;
(statearr_27204_27284[(2)] = false);

(statearr_27204_27284[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (41))){
var inst_27148 = (state_27173[(20)]);
var inst_27152 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27153 = cljs.core.map.call(null,inst_27152,inst_27148);
var inst_27154 = cljs.core.pr_str.call(null,inst_27153);
var inst_27155 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27154)].join('');
var inst_27156 = figwheel.client.utils.log.call(null,inst_27155);
var state_27173__$1 = state_27173;
var statearr_27205_27285 = state_27173__$1;
(statearr_27205_27285[(2)] = inst_27156);

(statearr_27205_27285[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (43))){
var inst_27149 = (state_27173[(21)]);
var inst_27159 = (state_27173[(2)]);
var inst_27160 = cljs.core.not_empty.call(null,inst_27149);
var state_27173__$1 = (function (){var statearr_27206 = state_27173;
(statearr_27206[(27)] = inst_27159);

return statearr_27206;
})();
if(cljs.core.truth_(inst_27160)){
var statearr_27207_27286 = state_27173__$1;
(statearr_27207_27286[(1)] = (44));

} else {
var statearr_27208_27287 = state_27173__$1;
(statearr_27208_27287[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (29))){
var inst_27095 = (state_27173[(23)]);
var inst_27087 = (state_27173[(19)]);
var inst_27127 = (state_27173[(16)]);
var inst_27090 = (state_27173[(24)]);
var inst_27091 = (state_27173[(25)]);
var inst_27093 = (state_27173[(26)]);
var inst_27123 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27126 = (function (){var all_files = inst_27087;
var res_SINGLEQUOTE_ = inst_27090;
var res = inst_27091;
var files_not_loaded = inst_27093;
var dependencies_that_loaded = inst_27095;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27095,inst_27087,inst_27127,inst_27090,inst_27091,inst_27093,inst_27123,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27125){
var map__27209 = p__27125;
var map__27209__$1 = ((((!((map__27209 == null)))?((((map__27209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27209):map__27209);
var namespace = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27095,inst_27087,inst_27127,inst_27090,inst_27091,inst_27093,inst_27123,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27127__$1 = cljs.core.group_by.call(null,inst_27126,inst_27093);
var inst_27129 = (inst_27127__$1 == null);
var inst_27130 = cljs.core.not.call(null,inst_27129);
var state_27173__$1 = (function (){var statearr_27211 = state_27173;
(statearr_27211[(16)] = inst_27127__$1);

(statearr_27211[(28)] = inst_27123);

return statearr_27211;
})();
if(inst_27130){
var statearr_27212_27288 = state_27173__$1;
(statearr_27212_27288[(1)] = (32));

} else {
var statearr_27213_27289 = state_27173__$1;
(statearr_27213_27289[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (44))){
var inst_27149 = (state_27173[(21)]);
var inst_27162 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27149);
var inst_27163 = cljs.core.pr_str.call(null,inst_27162);
var inst_27164 = [cljs.core.str("not required: "),cljs.core.str(inst_27163)].join('');
var inst_27165 = figwheel.client.utils.log.call(null,inst_27164);
var state_27173__$1 = state_27173;
var statearr_27214_27290 = state_27173__$1;
(statearr_27214_27290[(2)] = inst_27165);

(statearr_27214_27290[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (6))){
var inst_27068 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27215_27291 = state_27173__$1;
(statearr_27215_27291[(2)] = inst_27068);

(statearr_27215_27291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (28))){
var inst_27093 = (state_27173[(26)]);
var inst_27120 = (state_27173[(2)]);
var inst_27121 = cljs.core.not_empty.call(null,inst_27093);
var state_27173__$1 = (function (){var statearr_27216 = state_27173;
(statearr_27216[(29)] = inst_27120);

return statearr_27216;
})();
if(cljs.core.truth_(inst_27121)){
var statearr_27217_27292 = state_27173__$1;
(statearr_27217_27292[(1)] = (29));

} else {
var statearr_27218_27293 = state_27173__$1;
(statearr_27218_27293[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (25))){
var inst_27091 = (state_27173[(25)]);
var inst_27107 = (state_27173[(2)]);
var inst_27108 = cljs.core.not_empty.call(null,inst_27091);
var state_27173__$1 = (function (){var statearr_27219 = state_27173;
(statearr_27219[(30)] = inst_27107);

return statearr_27219;
})();
if(cljs.core.truth_(inst_27108)){
var statearr_27220_27294 = state_27173__$1;
(statearr_27220_27294[(1)] = (26));

} else {
var statearr_27221_27295 = state_27173__$1;
(statearr_27221_27295[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (34))){
var inst_27142 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
if(cljs.core.truth_(inst_27142)){
var statearr_27222_27296 = state_27173__$1;
(statearr_27222_27296[(1)] = (38));

} else {
var statearr_27223_27297 = state_27173__$1;
(statearr_27223_27297[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (17))){
var state_27173__$1 = state_27173;
var statearr_27224_27298 = state_27173__$1;
(statearr_27224_27298[(2)] = recompile_dependents);

(statearr_27224_27298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (3))){
var state_27173__$1 = state_27173;
var statearr_27225_27299 = state_27173__$1;
(statearr_27225_27299[(2)] = null);

(statearr_27225_27299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (12))){
var inst_27064 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27226_27300 = state_27173__$1;
(statearr_27226_27300[(2)] = inst_27064);

(statearr_27226_27300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (2))){
var inst_27026 = (state_27173[(13)]);
var inst_27033 = cljs.core.seq.call(null,inst_27026);
var inst_27034 = inst_27033;
var inst_27035 = null;
var inst_27036 = (0);
var inst_27037 = (0);
var state_27173__$1 = (function (){var statearr_27227 = state_27173;
(statearr_27227[(7)] = inst_27034);

(statearr_27227[(8)] = inst_27035);

(statearr_27227[(9)] = inst_27037);

(statearr_27227[(10)] = inst_27036);

return statearr_27227;
})();
var statearr_27228_27301 = state_27173__$1;
(statearr_27228_27301[(2)] = null);

(statearr_27228_27301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (23))){
var inst_27095 = (state_27173[(23)]);
var inst_27087 = (state_27173[(19)]);
var inst_27090 = (state_27173[(24)]);
var inst_27091 = (state_27173[(25)]);
var inst_27093 = (state_27173[(26)]);
var inst_27098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27100 = (function (){var all_files = inst_27087;
var res_SINGLEQUOTE_ = inst_27090;
var res = inst_27091;
var files_not_loaded = inst_27093;
var dependencies_that_loaded = inst_27095;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27095,inst_27087,inst_27090,inst_27091,inst_27093,inst_27098,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27099){
var map__27229 = p__27099;
var map__27229__$1 = ((((!((map__27229 == null)))?((((map__27229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27229):map__27229);
var request_url = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27095,inst_27087,inst_27090,inst_27091,inst_27093,inst_27098,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27101 = cljs.core.reverse.call(null,inst_27095);
var inst_27102 = cljs.core.map.call(null,inst_27100,inst_27101);
var inst_27103 = cljs.core.pr_str.call(null,inst_27102);
var inst_27104 = figwheel.client.utils.log.call(null,inst_27103);
var state_27173__$1 = (function (){var statearr_27231 = state_27173;
(statearr_27231[(31)] = inst_27098);

return statearr_27231;
})();
var statearr_27232_27302 = state_27173__$1;
(statearr_27232_27302[(2)] = inst_27104);

(statearr_27232_27302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (35))){
var state_27173__$1 = state_27173;
var statearr_27233_27303 = state_27173__$1;
(statearr_27233_27303[(2)] = true);

(statearr_27233_27303[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (19))){
var inst_27077 = (state_27173[(12)]);
var inst_27083 = figwheel.client.file_reloading.expand_files.call(null,inst_27077);
var state_27173__$1 = state_27173;
var statearr_27234_27304 = state_27173__$1;
(statearr_27234_27304[(2)] = inst_27083);

(statearr_27234_27304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (11))){
var state_27173__$1 = state_27173;
var statearr_27235_27305 = state_27173__$1;
(statearr_27235_27305[(2)] = null);

(statearr_27235_27305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (9))){
var inst_27066 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27236_27306 = state_27173__$1;
(statearr_27236_27306[(2)] = inst_27066);

(statearr_27236_27306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (5))){
var inst_27037 = (state_27173[(9)]);
var inst_27036 = (state_27173[(10)]);
var inst_27039 = (inst_27037 < inst_27036);
var inst_27040 = inst_27039;
var state_27173__$1 = state_27173;
if(cljs.core.truth_(inst_27040)){
var statearr_27237_27307 = state_27173__$1;
(statearr_27237_27307[(1)] = (7));

} else {
var statearr_27238_27308 = state_27173__$1;
(statearr_27238_27308[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (14))){
var inst_27047 = (state_27173[(22)]);
var inst_27056 = cljs.core.first.call(null,inst_27047);
var inst_27057 = figwheel.client.file_reloading.eval_body.call(null,inst_27056,opts);
var inst_27058 = cljs.core.next.call(null,inst_27047);
var inst_27034 = inst_27058;
var inst_27035 = null;
var inst_27036 = (0);
var inst_27037 = (0);
var state_27173__$1 = (function (){var statearr_27239 = state_27173;
(statearr_27239[(7)] = inst_27034);

(statearr_27239[(8)] = inst_27035);

(statearr_27239[(9)] = inst_27037);

(statearr_27239[(32)] = inst_27057);

(statearr_27239[(10)] = inst_27036);

return statearr_27239;
})();
var statearr_27240_27309 = state_27173__$1;
(statearr_27240_27309[(2)] = null);

(statearr_27240_27309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (45))){
var state_27173__$1 = state_27173;
var statearr_27241_27310 = state_27173__$1;
(statearr_27241_27310[(2)] = null);

(statearr_27241_27310[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (26))){
var inst_27095 = (state_27173[(23)]);
var inst_27087 = (state_27173[(19)]);
var inst_27090 = (state_27173[(24)]);
var inst_27091 = (state_27173[(25)]);
var inst_27093 = (state_27173[(26)]);
var inst_27110 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27112 = (function (){var all_files = inst_27087;
var res_SINGLEQUOTE_ = inst_27090;
var res = inst_27091;
var files_not_loaded = inst_27093;
var dependencies_that_loaded = inst_27095;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27095,inst_27087,inst_27090,inst_27091,inst_27093,inst_27110,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27111){
var map__27242 = p__27111;
var map__27242__$1 = ((((!((map__27242 == null)))?((((map__27242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27242):map__27242);
var namespace = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27095,inst_27087,inst_27090,inst_27091,inst_27093,inst_27110,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27113 = cljs.core.map.call(null,inst_27112,inst_27091);
var inst_27114 = cljs.core.pr_str.call(null,inst_27113);
var inst_27115 = figwheel.client.utils.log.call(null,inst_27114);
var inst_27116 = (function (){var all_files = inst_27087;
var res_SINGLEQUOTE_ = inst_27090;
var res = inst_27091;
var files_not_loaded = inst_27093;
var dependencies_that_loaded = inst_27095;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27095,inst_27087,inst_27090,inst_27091,inst_27093,inst_27110,inst_27112,inst_27113,inst_27114,inst_27115,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27095,inst_27087,inst_27090,inst_27091,inst_27093,inst_27110,inst_27112,inst_27113,inst_27114,inst_27115,state_val_27174,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27117 = setTimeout(inst_27116,(10));
var state_27173__$1 = (function (){var statearr_27244 = state_27173;
(statearr_27244[(33)] = inst_27115);

(statearr_27244[(34)] = inst_27110);

return statearr_27244;
})();
var statearr_27245_27311 = state_27173__$1;
(statearr_27245_27311[(2)] = inst_27117);

(statearr_27245_27311[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (16))){
var state_27173__$1 = state_27173;
var statearr_27246_27312 = state_27173__$1;
(statearr_27246_27312[(2)] = reload_dependents);

(statearr_27246_27312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (38))){
var inst_27127 = (state_27173[(16)]);
var inst_27144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27127);
var state_27173__$1 = state_27173;
var statearr_27247_27313 = state_27173__$1;
(statearr_27247_27313[(2)] = inst_27144);

(statearr_27247_27313[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (30))){
var state_27173__$1 = state_27173;
var statearr_27248_27314 = state_27173__$1;
(statearr_27248_27314[(2)] = null);

(statearr_27248_27314[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (10))){
var inst_27047 = (state_27173[(22)]);
var inst_27049 = cljs.core.chunked_seq_QMARK_.call(null,inst_27047);
var state_27173__$1 = state_27173;
if(inst_27049){
var statearr_27249_27315 = state_27173__$1;
(statearr_27249_27315[(1)] = (13));

} else {
var statearr_27250_27316 = state_27173__$1;
(statearr_27250_27316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (18))){
var inst_27081 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
if(cljs.core.truth_(inst_27081)){
var statearr_27251_27317 = state_27173__$1;
(statearr_27251_27317[(1)] = (19));

} else {
var statearr_27252_27318 = state_27173__$1;
(statearr_27252_27318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (42))){
var state_27173__$1 = state_27173;
var statearr_27253_27319 = state_27173__$1;
(statearr_27253_27319[(2)] = null);

(statearr_27253_27319[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (37))){
var inst_27139 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27254_27320 = state_27173__$1;
(statearr_27254_27320[(2)] = inst_27139);

(statearr_27254_27320[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (8))){
var inst_27034 = (state_27173[(7)]);
var inst_27047 = (state_27173[(22)]);
var inst_27047__$1 = cljs.core.seq.call(null,inst_27034);
var state_27173__$1 = (function (){var statearr_27255 = state_27173;
(statearr_27255[(22)] = inst_27047__$1);

return statearr_27255;
})();
if(inst_27047__$1){
var statearr_27256_27321 = state_27173__$1;
(statearr_27256_27321[(1)] = (10));

} else {
var statearr_27257_27322 = state_27173__$1;
(statearr_27257_27322[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23398__auto__,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto____0 = (function (){
var statearr_27261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27261[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto__);

(statearr_27261[(1)] = (1));

return statearr_27261;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto____1 = (function (state_27173){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_27173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e27262){if((e27262 instanceof Object)){
var ex__23402__auto__ = e27262;
var statearr_27263_27323 = state_27173;
(statearr_27263_27323[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27324 = state_27173;
state_27173 = G__27324;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto__ = function(state_27173){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto____1.call(this,state_27173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23512__auto__ = (function (){var statearr_27264 = f__23511__auto__.call(null);
(statearr_27264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_27264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__,map__27019,map__27019__$1,opts,before_jsload,on_jsload,reload_dependents,map__27020,map__27020__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23510__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27327,link){
var map__27330 = p__27327;
var map__27330__$1 = ((((!((map__27330 == null)))?((((map__27330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27330):map__27330);
var file = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27330,map__27330__$1,file){
return (function (p1__27325_SHARP_,p2__27326_SHARP_){
if(cljs.core._EQ_.call(null,p1__27325_SHARP_,p2__27326_SHARP_)){
return p1__27325_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27330,map__27330__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27336){
var map__27337 = p__27336;
var map__27337__$1 = ((((!((map__27337 == null)))?((((map__27337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27337):map__27337);
var match_length = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27332_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27332_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27339 = [];
var len__22320__auto___27342 = arguments.length;
var i__22321__auto___27343 = (0);
while(true){
if((i__22321__auto___27343 < len__22320__auto___27342)){
args27339.push((arguments[i__22321__auto___27343]));

var G__27344 = (i__22321__auto___27343 + (1));
i__22321__auto___27343 = G__27344;
continue;
} else {
}
break;
}

var G__27341 = args27339.length;
switch (G__27341) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27339.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27346_SHARP_,p2__27347_SHARP_){
return cljs.core.assoc.call(null,p1__27346_SHARP_,cljs.core.get.call(null,p2__27347_SHARP_,key),p2__27347_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27348){
var map__27351 = p__27348;
var map__27351__$1 = ((((!((map__27351 == null)))?((((map__27351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27351):map__27351);
var f_data = map__27351__$1;
var file = cljs.core.get.call(null,map__27351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27353,files_msg){
var map__27360 = p__27353;
var map__27360__$1 = ((((!((map__27360 == null)))?((((map__27360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27360):map__27360);
var opts = map__27360__$1;
var on_cssload = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27362_27366 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27363_27367 = null;
var count__27364_27368 = (0);
var i__27365_27369 = (0);
while(true){
if((i__27365_27369 < count__27364_27368)){
var f_27370 = cljs.core._nth.call(null,chunk__27363_27367,i__27365_27369);
figwheel.client.file_reloading.reload_css_file.call(null,f_27370);

var G__27371 = seq__27362_27366;
var G__27372 = chunk__27363_27367;
var G__27373 = count__27364_27368;
var G__27374 = (i__27365_27369 + (1));
seq__27362_27366 = G__27371;
chunk__27363_27367 = G__27372;
count__27364_27368 = G__27373;
i__27365_27369 = G__27374;
continue;
} else {
var temp__4657__auto___27375 = cljs.core.seq.call(null,seq__27362_27366);
if(temp__4657__auto___27375){
var seq__27362_27376__$1 = temp__4657__auto___27375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27362_27376__$1)){
var c__22061__auto___27377 = cljs.core.chunk_first.call(null,seq__27362_27376__$1);
var G__27378 = cljs.core.chunk_rest.call(null,seq__27362_27376__$1);
var G__27379 = c__22061__auto___27377;
var G__27380 = cljs.core.count.call(null,c__22061__auto___27377);
var G__27381 = (0);
seq__27362_27366 = G__27378;
chunk__27363_27367 = G__27379;
count__27364_27368 = G__27380;
i__27365_27369 = G__27381;
continue;
} else {
var f_27382 = cljs.core.first.call(null,seq__27362_27376__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27382);

var G__27383 = cljs.core.next.call(null,seq__27362_27376__$1);
var G__27384 = null;
var G__27385 = (0);
var G__27386 = (0);
seq__27362_27366 = G__27383;
chunk__27363_27367 = G__27384;
count__27364_27368 = G__27385;
i__27365_27369 = G__27386;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27360,map__27360__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27360,map__27360__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map