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
var or__24047__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24047__auto__){
return or__24047__auto__;
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
var or__24047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31287_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31287_SHARP_));
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
var seq__31292 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31293 = null;
var count__31294 = (0);
var i__31295 = (0);
while(true){
if((i__31295 < count__31294)){
var n = cljs.core._nth.call(null,chunk__31293,i__31295);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31296 = seq__31292;
var G__31297 = chunk__31293;
var G__31298 = count__31294;
var G__31299 = (i__31295 + (1));
seq__31292 = G__31296;
chunk__31293 = G__31297;
count__31294 = G__31298;
i__31295 = G__31299;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31292);
if(temp__4657__auto__){
var seq__31292__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31292__$1)){
var c__24858__auto__ = cljs.core.chunk_first.call(null,seq__31292__$1);
var G__31300 = cljs.core.chunk_rest.call(null,seq__31292__$1);
var G__31301 = c__24858__auto__;
var G__31302 = cljs.core.count.call(null,c__24858__auto__);
var G__31303 = (0);
seq__31292 = G__31300;
chunk__31293 = G__31301;
count__31294 = G__31302;
i__31295 = G__31303;
continue;
} else {
var n = cljs.core.first.call(null,seq__31292__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31304 = cljs.core.next.call(null,seq__31292__$1);
var G__31305 = null;
var G__31306 = (0);
var G__31307 = (0);
seq__31292 = G__31304;
chunk__31293 = G__31305;
count__31294 = G__31306;
i__31295 = G__31307;
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

var seq__31346_31353 = cljs.core.seq.call(null,deps);
var chunk__31347_31354 = null;
var count__31348_31355 = (0);
var i__31349_31356 = (0);
while(true){
if((i__31349_31356 < count__31348_31355)){
var dep_31357 = cljs.core._nth.call(null,chunk__31347_31354,i__31349_31356);
topo_sort_helper_STAR_.call(null,dep_31357,(depth + (1)),state);

var G__31358 = seq__31346_31353;
var G__31359 = chunk__31347_31354;
var G__31360 = count__31348_31355;
var G__31361 = (i__31349_31356 + (1));
seq__31346_31353 = G__31358;
chunk__31347_31354 = G__31359;
count__31348_31355 = G__31360;
i__31349_31356 = G__31361;
continue;
} else {
var temp__4657__auto___31362 = cljs.core.seq.call(null,seq__31346_31353);
if(temp__4657__auto___31362){
var seq__31346_31363__$1 = temp__4657__auto___31362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31346_31363__$1)){
var c__24858__auto___31364 = cljs.core.chunk_first.call(null,seq__31346_31363__$1);
var G__31365 = cljs.core.chunk_rest.call(null,seq__31346_31363__$1);
var G__31366 = c__24858__auto___31364;
var G__31367 = cljs.core.count.call(null,c__24858__auto___31364);
var G__31368 = (0);
seq__31346_31353 = G__31365;
chunk__31347_31354 = G__31366;
count__31348_31355 = G__31367;
i__31349_31356 = G__31368;
continue;
} else {
var dep_31369 = cljs.core.first.call(null,seq__31346_31363__$1);
topo_sort_helper_STAR_.call(null,dep_31369,(depth + (1)),state);

var G__31370 = cljs.core.next.call(null,seq__31346_31363__$1);
var G__31371 = null;
var G__31372 = (0);
var G__31373 = (0);
seq__31346_31353 = G__31370;
chunk__31347_31354 = G__31371;
count__31348_31355 = G__31372;
i__31349_31356 = G__31373;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31350){
var vec__31352 = p__31350;
var x = cljs.core.nth.call(null,vec__31352,(0),null);
var xs = cljs.core.nthnext.call(null,vec__31352,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31352,x,xs,get_deps__$1){
return (function (p1__31308_SHARP_){
return clojure.set.difference.call(null,p1__31308_SHARP_,x);
});})(vec__31352,x,xs,get_deps__$1))
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
var seq__31386 = cljs.core.seq.call(null,provides);
var chunk__31387 = null;
var count__31388 = (0);
var i__31389 = (0);
while(true){
if((i__31389 < count__31388)){
var prov = cljs.core._nth.call(null,chunk__31387,i__31389);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31390_31398 = cljs.core.seq.call(null,requires);
var chunk__31391_31399 = null;
var count__31392_31400 = (0);
var i__31393_31401 = (0);
while(true){
if((i__31393_31401 < count__31392_31400)){
var req_31402 = cljs.core._nth.call(null,chunk__31391_31399,i__31393_31401);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31402,prov);

var G__31403 = seq__31390_31398;
var G__31404 = chunk__31391_31399;
var G__31405 = count__31392_31400;
var G__31406 = (i__31393_31401 + (1));
seq__31390_31398 = G__31403;
chunk__31391_31399 = G__31404;
count__31392_31400 = G__31405;
i__31393_31401 = G__31406;
continue;
} else {
var temp__4657__auto___31407 = cljs.core.seq.call(null,seq__31390_31398);
if(temp__4657__auto___31407){
var seq__31390_31408__$1 = temp__4657__auto___31407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31390_31408__$1)){
var c__24858__auto___31409 = cljs.core.chunk_first.call(null,seq__31390_31408__$1);
var G__31410 = cljs.core.chunk_rest.call(null,seq__31390_31408__$1);
var G__31411 = c__24858__auto___31409;
var G__31412 = cljs.core.count.call(null,c__24858__auto___31409);
var G__31413 = (0);
seq__31390_31398 = G__31410;
chunk__31391_31399 = G__31411;
count__31392_31400 = G__31412;
i__31393_31401 = G__31413;
continue;
} else {
var req_31414 = cljs.core.first.call(null,seq__31390_31408__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31414,prov);

var G__31415 = cljs.core.next.call(null,seq__31390_31408__$1);
var G__31416 = null;
var G__31417 = (0);
var G__31418 = (0);
seq__31390_31398 = G__31415;
chunk__31391_31399 = G__31416;
count__31392_31400 = G__31417;
i__31393_31401 = G__31418;
continue;
}
} else {
}
}
break;
}

var G__31419 = seq__31386;
var G__31420 = chunk__31387;
var G__31421 = count__31388;
var G__31422 = (i__31389 + (1));
seq__31386 = G__31419;
chunk__31387 = G__31420;
count__31388 = G__31421;
i__31389 = G__31422;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31386);
if(temp__4657__auto__){
var seq__31386__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31386__$1)){
var c__24858__auto__ = cljs.core.chunk_first.call(null,seq__31386__$1);
var G__31423 = cljs.core.chunk_rest.call(null,seq__31386__$1);
var G__31424 = c__24858__auto__;
var G__31425 = cljs.core.count.call(null,c__24858__auto__);
var G__31426 = (0);
seq__31386 = G__31423;
chunk__31387 = G__31424;
count__31388 = G__31425;
i__31389 = G__31426;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31386__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31394_31427 = cljs.core.seq.call(null,requires);
var chunk__31395_31428 = null;
var count__31396_31429 = (0);
var i__31397_31430 = (0);
while(true){
if((i__31397_31430 < count__31396_31429)){
var req_31431 = cljs.core._nth.call(null,chunk__31395_31428,i__31397_31430);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31431,prov);

var G__31432 = seq__31394_31427;
var G__31433 = chunk__31395_31428;
var G__31434 = count__31396_31429;
var G__31435 = (i__31397_31430 + (1));
seq__31394_31427 = G__31432;
chunk__31395_31428 = G__31433;
count__31396_31429 = G__31434;
i__31397_31430 = G__31435;
continue;
} else {
var temp__4657__auto___31436__$1 = cljs.core.seq.call(null,seq__31394_31427);
if(temp__4657__auto___31436__$1){
var seq__31394_31437__$1 = temp__4657__auto___31436__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31394_31437__$1)){
var c__24858__auto___31438 = cljs.core.chunk_first.call(null,seq__31394_31437__$1);
var G__31439 = cljs.core.chunk_rest.call(null,seq__31394_31437__$1);
var G__31440 = c__24858__auto___31438;
var G__31441 = cljs.core.count.call(null,c__24858__auto___31438);
var G__31442 = (0);
seq__31394_31427 = G__31439;
chunk__31395_31428 = G__31440;
count__31396_31429 = G__31441;
i__31397_31430 = G__31442;
continue;
} else {
var req_31443 = cljs.core.first.call(null,seq__31394_31437__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31443,prov);

var G__31444 = cljs.core.next.call(null,seq__31394_31437__$1);
var G__31445 = null;
var G__31446 = (0);
var G__31447 = (0);
seq__31394_31427 = G__31444;
chunk__31395_31428 = G__31445;
count__31396_31429 = G__31446;
i__31397_31430 = G__31447;
continue;
}
} else {
}
}
break;
}

var G__31448 = cljs.core.next.call(null,seq__31386__$1);
var G__31449 = null;
var G__31450 = (0);
var G__31451 = (0);
seq__31386 = G__31448;
chunk__31387 = G__31449;
count__31388 = G__31450;
i__31389 = G__31451;
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
var seq__31456_31460 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31457_31461 = null;
var count__31458_31462 = (0);
var i__31459_31463 = (0);
while(true){
if((i__31459_31463 < count__31458_31462)){
var ns_31464 = cljs.core._nth.call(null,chunk__31457_31461,i__31459_31463);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31464);

var G__31465 = seq__31456_31460;
var G__31466 = chunk__31457_31461;
var G__31467 = count__31458_31462;
var G__31468 = (i__31459_31463 + (1));
seq__31456_31460 = G__31465;
chunk__31457_31461 = G__31466;
count__31458_31462 = G__31467;
i__31459_31463 = G__31468;
continue;
} else {
var temp__4657__auto___31469 = cljs.core.seq.call(null,seq__31456_31460);
if(temp__4657__auto___31469){
var seq__31456_31470__$1 = temp__4657__auto___31469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31456_31470__$1)){
var c__24858__auto___31471 = cljs.core.chunk_first.call(null,seq__31456_31470__$1);
var G__31472 = cljs.core.chunk_rest.call(null,seq__31456_31470__$1);
var G__31473 = c__24858__auto___31471;
var G__31474 = cljs.core.count.call(null,c__24858__auto___31471);
var G__31475 = (0);
seq__31456_31460 = G__31472;
chunk__31457_31461 = G__31473;
count__31458_31462 = G__31474;
i__31459_31463 = G__31475;
continue;
} else {
var ns_31476 = cljs.core.first.call(null,seq__31456_31470__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31476);

var G__31477 = cljs.core.next.call(null,seq__31456_31470__$1);
var G__31478 = null;
var G__31479 = (0);
var G__31480 = (0);
seq__31456_31460 = G__31477;
chunk__31457_31461 = G__31478;
count__31458_31462 = G__31479;
i__31459_31463 = G__31480;
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
goog.require_figwheel_backup_ = (function (){var or__24047__auto__ = goog.require__;
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
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
var G__31481__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31482__i = 0, G__31482__a = new Array(arguments.length -  0);
while (G__31482__i < G__31482__a.length) {G__31482__a[G__31482__i] = arguments[G__31482__i + 0]; ++G__31482__i;}
  args = new cljs.core.IndexedSeq(G__31482__a,0);
} 
return G__31481__delegate.call(this,args);};
G__31481.cljs$lang$maxFixedArity = 0;
G__31481.cljs$lang$applyTo = (function (arglist__31483){
var args = cljs.core.seq(arglist__31483);
return G__31481__delegate(args);
});
G__31481.cljs$core$IFn$_invoke$arity$variadic = G__31481__delegate;
return G__31481;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31485 = cljs.core._EQ_;
var expr__31486 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31485.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31486))){
var path_parts = ((function (pred__31485,expr__31486){
return (function (p1__31484_SHARP_){
return clojure.string.split.call(null,p1__31484_SHARP_,/[\/\\]/);
});})(pred__31485,expr__31486))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31485,expr__31486){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31488){if((e31488 instanceof Error)){
var e = e31488;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31488;

}
}})());
});
;})(path_parts,sep,root,pred__31485,expr__31486))
} else {
if(cljs.core.truth_(pred__31485.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31486))){
return ((function (pred__31485,expr__31486){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__31485,expr__31486){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31485,expr__31486))
);

return deferred.addErrback(((function (deferred,pred__31485,expr__31486){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31485,expr__31486))
);
});
;})(pred__31485,expr__31486))
} else {
return ((function (pred__31485,expr__31486){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31485,expr__31486))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31489,callback){
var map__31492 = p__31489;
var map__31492__$1 = ((((!((map__31492 == null)))?((((map__31492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31492):map__31492);
var file_msg = map__31492__$1;
var request_url = cljs.core.get.call(null,map__31492__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31492,map__31492__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31492,map__31492__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__){
return (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (7))){
var inst_31512 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31518_31538 = state_31516__$1;
(statearr_31518_31538[(2)] = inst_31512);

(statearr_31518_31538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (1))){
var state_31516__$1 = state_31516;
var statearr_31519_31539 = state_31516__$1;
(statearr_31519_31539[(2)] = null);

(statearr_31519_31539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (4))){
var inst_31496 = (state_31516[(7)]);
var inst_31496__$1 = (state_31516[(2)]);
var state_31516__$1 = (function (){var statearr_31520 = state_31516;
(statearr_31520[(7)] = inst_31496__$1);

return statearr_31520;
})();
if(cljs.core.truth_(inst_31496__$1)){
var statearr_31521_31540 = state_31516__$1;
(statearr_31521_31540[(1)] = (5));

} else {
var statearr_31522_31541 = state_31516__$1;
(statearr_31522_31541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (6))){
var state_31516__$1 = state_31516;
var statearr_31523_31542 = state_31516__$1;
(statearr_31523_31542[(2)] = null);

(statearr_31523_31542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (3))){
var inst_31514 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31516__$1,inst_31514);
} else {
if((state_val_31517 === (2))){
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31516__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31517 === (11))){
var inst_31508 = (state_31516[(2)]);
var state_31516__$1 = (function (){var statearr_31524 = state_31516;
(statearr_31524[(8)] = inst_31508);

return statearr_31524;
})();
var statearr_31525_31543 = state_31516__$1;
(statearr_31525_31543[(2)] = null);

(statearr_31525_31543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (9))){
var inst_31500 = (state_31516[(9)]);
var inst_31502 = (state_31516[(10)]);
var inst_31504 = inst_31502.call(null,inst_31500);
var state_31516__$1 = state_31516;
var statearr_31526_31544 = state_31516__$1;
(statearr_31526_31544[(2)] = inst_31504);

(statearr_31526_31544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (5))){
var inst_31496 = (state_31516[(7)]);
var inst_31498 = figwheel.client.file_reloading.blocking_load.call(null,inst_31496);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31516__$1,(8),inst_31498);
} else {
if((state_val_31517 === (10))){
var inst_31500 = (state_31516[(9)]);
var inst_31506 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31500);
var state_31516__$1 = state_31516;
var statearr_31527_31545 = state_31516__$1;
(statearr_31527_31545[(2)] = inst_31506);

(statearr_31527_31545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (8))){
var inst_31502 = (state_31516[(10)]);
var inst_31496 = (state_31516[(7)]);
var inst_31500 = (state_31516[(2)]);
var inst_31501 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31502__$1 = cljs.core.get.call(null,inst_31501,inst_31496);
var state_31516__$1 = (function (){var statearr_31528 = state_31516;
(statearr_31528[(9)] = inst_31500);

(statearr_31528[(10)] = inst_31502__$1);

return statearr_31528;
})();
if(cljs.core.truth_(inst_31502__$1)){
var statearr_31529_31546 = state_31516__$1;
(statearr_31529_31546[(1)] = (9));

} else {
var statearr_31530_31547 = state_31516__$1;
(statearr_31530_31547[(1)] = (10));

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
});})(c__28454__auto__))
;
return ((function (switch__28342__auto__,c__28454__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28343__auto__ = null;
var figwheel$client$file_reloading$state_machine__28343__auto____0 = (function (){
var statearr_31534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31534[(0)] = figwheel$client$file_reloading$state_machine__28343__auto__);

(statearr_31534[(1)] = (1));

return statearr_31534;
});
var figwheel$client$file_reloading$state_machine__28343__auto____1 = (function (state_31516){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_31516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e31535){if((e31535 instanceof Object)){
var ex__28346__auto__ = e31535;
var statearr_31536_31548 = state_31516;
(statearr_31536_31548[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31549 = state_31516;
state_31516 = G__31549;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28343__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28343__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28343__auto____0;
figwheel$client$file_reloading$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28343__auto____1;
return figwheel$client$file_reloading$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__))
})();
var state__28456__auto__ = (function (){var statearr_31537 = f__28455__auto__.call(null);
(statearr_31537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__))
);

return c__28454__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31550,callback){
var map__31553 = p__31550;
var map__31553__$1 = ((((!((map__31553 == null)))?((((map__31553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31553):map__31553);
var file_msg = map__31553__$1;
var namespace = cljs.core.get.call(null,map__31553__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31553,map__31553__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31553,map__31553__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31555){
var map__31558 = p__31555;
var map__31558__$1 = ((((!((map__31558 == null)))?((((map__31558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31558):map__31558);
var file_msg = map__31558__$1;
var namespace = cljs.core.get.call(null,map__31558__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24035__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24035__auto__){
var or__24047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
var or__24047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24047__auto____$1)){
return or__24047__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24035__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31560,callback){
var map__31563 = p__31560;
var map__31563__$1 = ((((!((map__31563 == null)))?((((map__31563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31563):map__31563);
var file_msg = map__31563__$1;
var request_url = cljs.core.get.call(null,map__31563__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28454__auto___31651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___31651,out){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___31651,out){
return (function (state_31633){
var state_val_31634 = (state_31633[(1)]);
if((state_val_31634 === (1))){
var inst_31611 = cljs.core.nth.call(null,files,(0),null);
var inst_31612 = cljs.core.nthnext.call(null,files,(1));
var inst_31613 = files;
var state_31633__$1 = (function (){var statearr_31635 = state_31633;
(statearr_31635[(7)] = inst_31611);

(statearr_31635[(8)] = inst_31612);

(statearr_31635[(9)] = inst_31613);

return statearr_31635;
})();
var statearr_31636_31652 = state_31633__$1;
(statearr_31636_31652[(2)] = null);

(statearr_31636_31652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (2))){
var inst_31616 = (state_31633[(10)]);
var inst_31613 = (state_31633[(9)]);
var inst_31616__$1 = cljs.core.nth.call(null,inst_31613,(0),null);
var inst_31617 = cljs.core.nthnext.call(null,inst_31613,(1));
var inst_31618 = (inst_31616__$1 == null);
var inst_31619 = cljs.core.not.call(null,inst_31618);
var state_31633__$1 = (function (){var statearr_31637 = state_31633;
(statearr_31637[(10)] = inst_31616__$1);

(statearr_31637[(11)] = inst_31617);

return statearr_31637;
})();
if(inst_31619){
var statearr_31638_31653 = state_31633__$1;
(statearr_31638_31653[(1)] = (4));

} else {
var statearr_31639_31654 = state_31633__$1;
(statearr_31639_31654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (3))){
var inst_31631 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31633__$1,inst_31631);
} else {
if((state_val_31634 === (4))){
var inst_31616 = (state_31633[(10)]);
var inst_31621 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31616);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31633__$1,(7),inst_31621);
} else {
if((state_val_31634 === (5))){
var inst_31627 = cljs.core.async.close_BANG_.call(null,out);
var state_31633__$1 = state_31633;
var statearr_31640_31655 = state_31633__$1;
(statearr_31640_31655[(2)] = inst_31627);

(statearr_31640_31655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (6))){
var inst_31629 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31641_31656 = state_31633__$1;
(statearr_31641_31656[(2)] = inst_31629);

(statearr_31641_31656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (7))){
var inst_31617 = (state_31633[(11)]);
var inst_31623 = (state_31633[(2)]);
var inst_31624 = cljs.core.async.put_BANG_.call(null,out,inst_31623);
var inst_31613 = inst_31617;
var state_31633__$1 = (function (){var statearr_31642 = state_31633;
(statearr_31642[(12)] = inst_31624);

(statearr_31642[(9)] = inst_31613);

return statearr_31642;
})();
var statearr_31643_31657 = state_31633__$1;
(statearr_31643_31657[(2)] = null);

(statearr_31643_31657[(1)] = (2));


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
});})(c__28454__auto___31651,out))
;
return ((function (switch__28342__auto__,c__28454__auto___31651,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto____0 = (function (){
var statearr_31647 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31647[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto__);

(statearr_31647[(1)] = (1));

return statearr_31647;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto____1 = (function (state_31633){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_31633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e31648){if((e31648 instanceof Object)){
var ex__28346__auto__ = e31648;
var statearr_31649_31658 = state_31633;
(statearr_31649_31658[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31659 = state_31633;
state_31633 = G__31659;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto__ = function(state_31633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto____1.call(this,state_31633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___31651,out))
})();
var state__28456__auto__ = (function (){var statearr_31650 = f__28455__auto__.call(null);
(statearr_31650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___31651);

return statearr_31650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___31651,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31660,opts){
var map__31664 = p__31660;
var map__31664__$1 = ((((!((map__31664 == null)))?((((map__31664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31664):map__31664);
var eval_body__$1 = cljs.core.get.call(null,map__31664__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31664__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24035__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24035__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24035__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31666){var e = e31666;
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
return (function (p1__31667_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31667_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31672){
var vec__31673 = p__31672;
var k = cljs.core.nth.call(null,vec__31673,(0),null);
var v = cljs.core.nth.call(null,vec__31673,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31674){
var vec__31675 = p__31674;
var k = cljs.core.nth.call(null,vec__31675,(0),null);
var v = cljs.core.nth.call(null,vec__31675,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31679,p__31680){
var map__31927 = p__31679;
var map__31927__$1 = ((((!((map__31927 == null)))?((((map__31927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31927):map__31927);
var opts = map__31927__$1;
var before_jsload = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31927__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31928 = p__31680;
var map__31928__$1 = ((((!((map__31928 == null)))?((((map__31928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31928):map__31928);
var msg = map__31928__$1;
var files = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32081){
var state_val_32082 = (state_32081[(1)]);
if((state_val_32082 === (7))){
var inst_31944 = (state_32081[(7)]);
var inst_31945 = (state_32081[(8)]);
var inst_31943 = (state_32081[(9)]);
var inst_31942 = (state_32081[(10)]);
var inst_31950 = cljs.core._nth.call(null,inst_31943,inst_31945);
var inst_31951 = figwheel.client.file_reloading.eval_body.call(null,inst_31950,opts);
var inst_31952 = (inst_31945 + (1));
var tmp32083 = inst_31944;
var tmp32084 = inst_31943;
var tmp32085 = inst_31942;
var inst_31942__$1 = tmp32085;
var inst_31943__$1 = tmp32084;
var inst_31944__$1 = tmp32083;
var inst_31945__$1 = inst_31952;
var state_32081__$1 = (function (){var statearr_32086 = state_32081;
(statearr_32086[(7)] = inst_31944__$1);

(statearr_32086[(8)] = inst_31945__$1);

(statearr_32086[(9)] = inst_31943__$1);

(statearr_32086[(10)] = inst_31942__$1);

(statearr_32086[(11)] = inst_31951);

return statearr_32086;
})();
var statearr_32087_32173 = state_32081__$1;
(statearr_32087_32173[(2)] = null);

(statearr_32087_32173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (20))){
var inst_31985 = (state_32081[(12)]);
var inst_31993 = figwheel.client.file_reloading.sort_files.call(null,inst_31985);
var state_32081__$1 = state_32081;
var statearr_32088_32174 = state_32081__$1;
(statearr_32088_32174[(2)] = inst_31993);

(statearr_32088_32174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (27))){
var state_32081__$1 = state_32081;
var statearr_32089_32175 = state_32081__$1;
(statearr_32089_32175[(2)] = null);

(statearr_32089_32175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (1))){
var inst_31934 = (state_32081[(13)]);
var inst_31931 = before_jsload.call(null,files);
var inst_31932 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31933 = (function (){return ((function (inst_31934,inst_31931,inst_31932,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31676_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31676_SHARP_);
});
;})(inst_31934,inst_31931,inst_31932,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31934__$1 = cljs.core.filter.call(null,inst_31933,files);
var inst_31935 = cljs.core.not_empty.call(null,inst_31934__$1);
var state_32081__$1 = (function (){var statearr_32090 = state_32081;
(statearr_32090[(14)] = inst_31931);

(statearr_32090[(13)] = inst_31934__$1);

(statearr_32090[(15)] = inst_31932);

return statearr_32090;
})();
if(cljs.core.truth_(inst_31935)){
var statearr_32091_32176 = state_32081__$1;
(statearr_32091_32176[(1)] = (2));

} else {
var statearr_32092_32177 = state_32081__$1;
(statearr_32092_32177[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (24))){
var state_32081__$1 = state_32081;
var statearr_32093_32178 = state_32081__$1;
(statearr_32093_32178[(2)] = null);

(statearr_32093_32178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (39))){
var inst_32035 = (state_32081[(16)]);
var state_32081__$1 = state_32081;
var statearr_32094_32179 = state_32081__$1;
(statearr_32094_32179[(2)] = inst_32035);

(statearr_32094_32179[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (46))){
var inst_32076 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32095_32180 = state_32081__$1;
(statearr_32095_32180[(2)] = inst_32076);

(statearr_32095_32180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (4))){
var inst_31979 = (state_32081[(2)]);
var inst_31980 = cljs.core.List.EMPTY;
var inst_31981 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31980);
var inst_31982 = (function (){return ((function (inst_31979,inst_31980,inst_31981,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31677_SHARP_){
var and__24035__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31677_SHARP_);
if(cljs.core.truth_(and__24035__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31677_SHARP_));
} else {
return and__24035__auto__;
}
});
;})(inst_31979,inst_31980,inst_31981,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31983 = cljs.core.filter.call(null,inst_31982,files);
var inst_31984 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31985 = cljs.core.concat.call(null,inst_31983,inst_31984);
var state_32081__$1 = (function (){var statearr_32096 = state_32081;
(statearr_32096[(17)] = inst_31979);

(statearr_32096[(12)] = inst_31985);

(statearr_32096[(18)] = inst_31981);

return statearr_32096;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32097_32181 = state_32081__$1;
(statearr_32097_32181[(1)] = (16));

} else {
var statearr_32098_32182 = state_32081__$1;
(statearr_32098_32182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (15))){
var inst_31969 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32099_32183 = state_32081__$1;
(statearr_32099_32183[(2)] = inst_31969);

(statearr_32099_32183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (21))){
var inst_31995 = (state_32081[(19)]);
var inst_31995__$1 = (state_32081[(2)]);
var inst_31996 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31995__$1);
var state_32081__$1 = (function (){var statearr_32100 = state_32081;
(statearr_32100[(19)] = inst_31995__$1);

return statearr_32100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32081__$1,(22),inst_31996);
} else {
if((state_val_32082 === (31))){
var inst_32079 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32081__$1,inst_32079);
} else {
if((state_val_32082 === (32))){
var inst_32035 = (state_32081[(16)]);
var inst_32040 = inst_32035.cljs$lang$protocol_mask$partition0$;
var inst_32041 = (inst_32040 & (64));
var inst_32042 = inst_32035.cljs$core$ISeq$;
var inst_32043 = (inst_32041) || (inst_32042);
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_32043)){
var statearr_32101_32184 = state_32081__$1;
(statearr_32101_32184[(1)] = (35));

} else {
var statearr_32102_32185 = state_32081__$1;
(statearr_32102_32185[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (40))){
var inst_32056 = (state_32081[(20)]);
var inst_32055 = (state_32081[(2)]);
var inst_32056__$1 = cljs.core.get.call(null,inst_32055,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32057 = cljs.core.get.call(null,inst_32055,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32058 = cljs.core.not_empty.call(null,inst_32056__$1);
var state_32081__$1 = (function (){var statearr_32103 = state_32081;
(statearr_32103[(20)] = inst_32056__$1);

(statearr_32103[(21)] = inst_32057);

return statearr_32103;
})();
if(cljs.core.truth_(inst_32058)){
var statearr_32104_32186 = state_32081__$1;
(statearr_32104_32186[(1)] = (41));

} else {
var statearr_32105_32187 = state_32081__$1;
(statearr_32105_32187[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (33))){
var state_32081__$1 = state_32081;
var statearr_32106_32188 = state_32081__$1;
(statearr_32106_32188[(2)] = false);

(statearr_32106_32188[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (13))){
var inst_31955 = (state_32081[(22)]);
var inst_31959 = cljs.core.chunk_first.call(null,inst_31955);
var inst_31960 = cljs.core.chunk_rest.call(null,inst_31955);
var inst_31961 = cljs.core.count.call(null,inst_31959);
var inst_31942 = inst_31960;
var inst_31943 = inst_31959;
var inst_31944 = inst_31961;
var inst_31945 = (0);
var state_32081__$1 = (function (){var statearr_32107 = state_32081;
(statearr_32107[(7)] = inst_31944);

(statearr_32107[(8)] = inst_31945);

(statearr_32107[(9)] = inst_31943);

(statearr_32107[(10)] = inst_31942);

return statearr_32107;
})();
var statearr_32108_32189 = state_32081__$1;
(statearr_32108_32189[(2)] = null);

(statearr_32108_32189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (22))){
var inst_31999 = (state_32081[(23)]);
var inst_32003 = (state_32081[(24)]);
var inst_31995 = (state_32081[(19)]);
var inst_31998 = (state_32081[(25)]);
var inst_31998__$1 = (state_32081[(2)]);
var inst_31999__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31998__$1);
var inst_32000 = (function (){var all_files = inst_31995;
var res_SINGLEQUOTE_ = inst_31998__$1;
var res = inst_31999__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31999,inst_32003,inst_31995,inst_31998,inst_31998__$1,inst_31999__$1,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31678_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31678_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31999,inst_32003,inst_31995,inst_31998,inst_31998__$1,inst_31999__$1,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32001 = cljs.core.filter.call(null,inst_32000,inst_31998__$1);
var inst_32002 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32003__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32002);
var inst_32004 = cljs.core.not_empty.call(null,inst_32003__$1);
var state_32081__$1 = (function (){var statearr_32109 = state_32081;
(statearr_32109[(23)] = inst_31999__$1);

(statearr_32109[(24)] = inst_32003__$1);

(statearr_32109[(26)] = inst_32001);

(statearr_32109[(25)] = inst_31998__$1);

return statearr_32109;
})();
if(cljs.core.truth_(inst_32004)){
var statearr_32110_32190 = state_32081__$1;
(statearr_32110_32190[(1)] = (23));

} else {
var statearr_32111_32191 = state_32081__$1;
(statearr_32111_32191[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (36))){
var state_32081__$1 = state_32081;
var statearr_32112_32192 = state_32081__$1;
(statearr_32112_32192[(2)] = false);

(statearr_32112_32192[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (41))){
var inst_32056 = (state_32081[(20)]);
var inst_32060 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32061 = cljs.core.map.call(null,inst_32060,inst_32056);
var inst_32062 = cljs.core.pr_str.call(null,inst_32061);
var inst_32063 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32062)].join('');
var inst_32064 = figwheel.client.utils.log.call(null,inst_32063);
var state_32081__$1 = state_32081;
var statearr_32113_32193 = state_32081__$1;
(statearr_32113_32193[(2)] = inst_32064);

(statearr_32113_32193[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (43))){
var inst_32057 = (state_32081[(21)]);
var inst_32067 = (state_32081[(2)]);
var inst_32068 = cljs.core.not_empty.call(null,inst_32057);
var state_32081__$1 = (function (){var statearr_32114 = state_32081;
(statearr_32114[(27)] = inst_32067);

return statearr_32114;
})();
if(cljs.core.truth_(inst_32068)){
var statearr_32115_32194 = state_32081__$1;
(statearr_32115_32194[(1)] = (44));

} else {
var statearr_32116_32195 = state_32081__$1;
(statearr_32116_32195[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (29))){
var inst_32035 = (state_32081[(16)]);
var inst_31999 = (state_32081[(23)]);
var inst_32003 = (state_32081[(24)]);
var inst_32001 = (state_32081[(26)]);
var inst_31995 = (state_32081[(19)]);
var inst_31998 = (state_32081[(25)]);
var inst_32031 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32034 = (function (){var all_files = inst_31995;
var res_SINGLEQUOTE_ = inst_31998;
var res = inst_31999;
var files_not_loaded = inst_32001;
var dependencies_that_loaded = inst_32003;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32035,inst_31999,inst_32003,inst_32001,inst_31995,inst_31998,inst_32031,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32033){
var map__32117 = p__32033;
var map__32117__$1 = ((((!((map__32117 == null)))?((((map__32117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32117):map__32117);
var namespace = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32035,inst_31999,inst_32003,inst_32001,inst_31995,inst_31998,inst_32031,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32035__$1 = cljs.core.group_by.call(null,inst_32034,inst_32001);
var inst_32037 = (inst_32035__$1 == null);
var inst_32038 = cljs.core.not.call(null,inst_32037);
var state_32081__$1 = (function (){var statearr_32119 = state_32081;
(statearr_32119[(16)] = inst_32035__$1);

(statearr_32119[(28)] = inst_32031);

return statearr_32119;
})();
if(inst_32038){
var statearr_32120_32196 = state_32081__$1;
(statearr_32120_32196[(1)] = (32));

} else {
var statearr_32121_32197 = state_32081__$1;
(statearr_32121_32197[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (44))){
var inst_32057 = (state_32081[(21)]);
var inst_32070 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32057);
var inst_32071 = cljs.core.pr_str.call(null,inst_32070);
var inst_32072 = [cljs.core.str("not required: "),cljs.core.str(inst_32071)].join('');
var inst_32073 = figwheel.client.utils.log.call(null,inst_32072);
var state_32081__$1 = state_32081;
var statearr_32122_32198 = state_32081__$1;
(statearr_32122_32198[(2)] = inst_32073);

(statearr_32122_32198[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (6))){
var inst_31976 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32123_32199 = state_32081__$1;
(statearr_32123_32199[(2)] = inst_31976);

(statearr_32123_32199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (28))){
var inst_32001 = (state_32081[(26)]);
var inst_32028 = (state_32081[(2)]);
var inst_32029 = cljs.core.not_empty.call(null,inst_32001);
var state_32081__$1 = (function (){var statearr_32124 = state_32081;
(statearr_32124[(29)] = inst_32028);

return statearr_32124;
})();
if(cljs.core.truth_(inst_32029)){
var statearr_32125_32200 = state_32081__$1;
(statearr_32125_32200[(1)] = (29));

} else {
var statearr_32126_32201 = state_32081__$1;
(statearr_32126_32201[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (25))){
var inst_31999 = (state_32081[(23)]);
var inst_32015 = (state_32081[(2)]);
var inst_32016 = cljs.core.not_empty.call(null,inst_31999);
var state_32081__$1 = (function (){var statearr_32127 = state_32081;
(statearr_32127[(30)] = inst_32015);

return statearr_32127;
})();
if(cljs.core.truth_(inst_32016)){
var statearr_32128_32202 = state_32081__$1;
(statearr_32128_32202[(1)] = (26));

} else {
var statearr_32129_32203 = state_32081__$1;
(statearr_32129_32203[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (34))){
var inst_32050 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_32050)){
var statearr_32130_32204 = state_32081__$1;
(statearr_32130_32204[(1)] = (38));

} else {
var statearr_32131_32205 = state_32081__$1;
(statearr_32131_32205[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (17))){
var state_32081__$1 = state_32081;
var statearr_32132_32206 = state_32081__$1;
(statearr_32132_32206[(2)] = recompile_dependents);

(statearr_32132_32206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (3))){
var state_32081__$1 = state_32081;
var statearr_32133_32207 = state_32081__$1;
(statearr_32133_32207[(2)] = null);

(statearr_32133_32207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (12))){
var inst_31972 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32134_32208 = state_32081__$1;
(statearr_32134_32208[(2)] = inst_31972);

(statearr_32134_32208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (2))){
var inst_31934 = (state_32081[(13)]);
var inst_31941 = cljs.core.seq.call(null,inst_31934);
var inst_31942 = inst_31941;
var inst_31943 = null;
var inst_31944 = (0);
var inst_31945 = (0);
var state_32081__$1 = (function (){var statearr_32135 = state_32081;
(statearr_32135[(7)] = inst_31944);

(statearr_32135[(8)] = inst_31945);

(statearr_32135[(9)] = inst_31943);

(statearr_32135[(10)] = inst_31942);

return statearr_32135;
})();
var statearr_32136_32209 = state_32081__$1;
(statearr_32136_32209[(2)] = null);

(statearr_32136_32209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (23))){
var inst_31999 = (state_32081[(23)]);
var inst_32003 = (state_32081[(24)]);
var inst_32001 = (state_32081[(26)]);
var inst_31995 = (state_32081[(19)]);
var inst_31998 = (state_32081[(25)]);
var inst_32006 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32008 = (function (){var all_files = inst_31995;
var res_SINGLEQUOTE_ = inst_31998;
var res = inst_31999;
var files_not_loaded = inst_32001;
var dependencies_that_loaded = inst_32003;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31999,inst_32003,inst_32001,inst_31995,inst_31998,inst_32006,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32007){
var map__32137 = p__32007;
var map__32137__$1 = ((((!((map__32137 == null)))?((((map__32137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32137):map__32137);
var request_url = cljs.core.get.call(null,map__32137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31999,inst_32003,inst_32001,inst_31995,inst_31998,inst_32006,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32009 = cljs.core.reverse.call(null,inst_32003);
var inst_32010 = cljs.core.map.call(null,inst_32008,inst_32009);
var inst_32011 = cljs.core.pr_str.call(null,inst_32010);
var inst_32012 = figwheel.client.utils.log.call(null,inst_32011);
var state_32081__$1 = (function (){var statearr_32139 = state_32081;
(statearr_32139[(31)] = inst_32006);

return statearr_32139;
})();
var statearr_32140_32210 = state_32081__$1;
(statearr_32140_32210[(2)] = inst_32012);

(statearr_32140_32210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (35))){
var state_32081__$1 = state_32081;
var statearr_32141_32211 = state_32081__$1;
(statearr_32141_32211[(2)] = true);

(statearr_32141_32211[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (19))){
var inst_31985 = (state_32081[(12)]);
var inst_31991 = figwheel.client.file_reloading.expand_files.call(null,inst_31985);
var state_32081__$1 = state_32081;
var statearr_32142_32212 = state_32081__$1;
(statearr_32142_32212[(2)] = inst_31991);

(statearr_32142_32212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (11))){
var state_32081__$1 = state_32081;
var statearr_32143_32213 = state_32081__$1;
(statearr_32143_32213[(2)] = null);

(statearr_32143_32213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (9))){
var inst_31974 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32144_32214 = state_32081__$1;
(statearr_32144_32214[(2)] = inst_31974);

(statearr_32144_32214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (5))){
var inst_31944 = (state_32081[(7)]);
var inst_31945 = (state_32081[(8)]);
var inst_31947 = (inst_31945 < inst_31944);
var inst_31948 = inst_31947;
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_31948)){
var statearr_32145_32215 = state_32081__$1;
(statearr_32145_32215[(1)] = (7));

} else {
var statearr_32146_32216 = state_32081__$1;
(statearr_32146_32216[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (14))){
var inst_31955 = (state_32081[(22)]);
var inst_31964 = cljs.core.first.call(null,inst_31955);
var inst_31965 = figwheel.client.file_reloading.eval_body.call(null,inst_31964,opts);
var inst_31966 = cljs.core.next.call(null,inst_31955);
var inst_31942 = inst_31966;
var inst_31943 = null;
var inst_31944 = (0);
var inst_31945 = (0);
var state_32081__$1 = (function (){var statearr_32147 = state_32081;
(statearr_32147[(7)] = inst_31944);

(statearr_32147[(8)] = inst_31945);

(statearr_32147[(9)] = inst_31943);

(statearr_32147[(32)] = inst_31965);

(statearr_32147[(10)] = inst_31942);

return statearr_32147;
})();
var statearr_32148_32217 = state_32081__$1;
(statearr_32148_32217[(2)] = null);

(statearr_32148_32217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (45))){
var state_32081__$1 = state_32081;
var statearr_32149_32218 = state_32081__$1;
(statearr_32149_32218[(2)] = null);

(statearr_32149_32218[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (26))){
var inst_31999 = (state_32081[(23)]);
var inst_32003 = (state_32081[(24)]);
var inst_32001 = (state_32081[(26)]);
var inst_31995 = (state_32081[(19)]);
var inst_31998 = (state_32081[(25)]);
var inst_32018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32020 = (function (){var all_files = inst_31995;
var res_SINGLEQUOTE_ = inst_31998;
var res = inst_31999;
var files_not_loaded = inst_32001;
var dependencies_that_loaded = inst_32003;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31999,inst_32003,inst_32001,inst_31995,inst_31998,inst_32018,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32019){
var map__32150 = p__32019;
var map__32150__$1 = ((((!((map__32150 == null)))?((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);
var namespace = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31999,inst_32003,inst_32001,inst_31995,inst_31998,inst_32018,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32021 = cljs.core.map.call(null,inst_32020,inst_31999);
var inst_32022 = cljs.core.pr_str.call(null,inst_32021);
var inst_32023 = figwheel.client.utils.log.call(null,inst_32022);
var inst_32024 = (function (){var all_files = inst_31995;
var res_SINGLEQUOTE_ = inst_31998;
var res = inst_31999;
var files_not_loaded = inst_32001;
var dependencies_that_loaded = inst_32003;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31999,inst_32003,inst_32001,inst_31995,inst_31998,inst_32018,inst_32020,inst_32021,inst_32022,inst_32023,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31999,inst_32003,inst_32001,inst_31995,inst_31998,inst_32018,inst_32020,inst_32021,inst_32022,inst_32023,state_val_32082,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32025 = setTimeout(inst_32024,(10));
var state_32081__$1 = (function (){var statearr_32152 = state_32081;
(statearr_32152[(33)] = inst_32018);

(statearr_32152[(34)] = inst_32023);

return statearr_32152;
})();
var statearr_32153_32219 = state_32081__$1;
(statearr_32153_32219[(2)] = inst_32025);

(statearr_32153_32219[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (16))){
var state_32081__$1 = state_32081;
var statearr_32154_32220 = state_32081__$1;
(statearr_32154_32220[(2)] = reload_dependents);

(statearr_32154_32220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (38))){
var inst_32035 = (state_32081[(16)]);
var inst_32052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32035);
var state_32081__$1 = state_32081;
var statearr_32155_32221 = state_32081__$1;
(statearr_32155_32221[(2)] = inst_32052);

(statearr_32155_32221[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (30))){
var state_32081__$1 = state_32081;
var statearr_32156_32222 = state_32081__$1;
(statearr_32156_32222[(2)] = null);

(statearr_32156_32222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (10))){
var inst_31955 = (state_32081[(22)]);
var inst_31957 = cljs.core.chunked_seq_QMARK_.call(null,inst_31955);
var state_32081__$1 = state_32081;
if(inst_31957){
var statearr_32157_32223 = state_32081__$1;
(statearr_32157_32223[(1)] = (13));

} else {
var statearr_32158_32224 = state_32081__$1;
(statearr_32158_32224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (18))){
var inst_31989 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_31989)){
var statearr_32159_32225 = state_32081__$1;
(statearr_32159_32225[(1)] = (19));

} else {
var statearr_32160_32226 = state_32081__$1;
(statearr_32160_32226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (42))){
var state_32081__$1 = state_32081;
var statearr_32161_32227 = state_32081__$1;
(statearr_32161_32227[(2)] = null);

(statearr_32161_32227[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (37))){
var inst_32047 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32162_32228 = state_32081__$1;
(statearr_32162_32228[(2)] = inst_32047);

(statearr_32162_32228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (8))){
var inst_31955 = (state_32081[(22)]);
var inst_31942 = (state_32081[(10)]);
var inst_31955__$1 = cljs.core.seq.call(null,inst_31942);
var state_32081__$1 = (function (){var statearr_32163 = state_32081;
(statearr_32163[(22)] = inst_31955__$1);

return statearr_32163;
})();
if(inst_31955__$1){
var statearr_32164_32229 = state_32081__$1;
(statearr_32164_32229[(1)] = (10));

} else {
var statearr_32165_32230 = state_32081__$1;
(statearr_32165_32230[(1)] = (11));

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
});})(c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28342__auto__,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto____0 = (function (){
var statearr_32169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32169[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto__);

(statearr_32169[(1)] = (1));

return statearr_32169;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto____1 = (function (state_32081){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_32081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e32170){if((e32170 instanceof Object)){
var ex__28346__auto__ = e32170;
var statearr_32171_32231 = state_32081;
(statearr_32171_32231[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32232 = state_32081;
state_32081 = G__32232;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto__ = function(state_32081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto____1.call(this,state_32081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28456__auto__ = (function (){var statearr_32172 = f__28455__auto__.call(null);
(statearr_32172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_32172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__,map__31927,map__31927__$1,opts,before_jsload,on_jsload,reload_dependents,map__31928,map__31928__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28454__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32235,link){
var map__32238 = p__32235;
var map__32238__$1 = ((((!((map__32238 == null)))?((((map__32238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32238):map__32238);
var file = cljs.core.get.call(null,map__32238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32238,map__32238__$1,file){
return (function (p1__32233_SHARP_,p2__32234_SHARP_){
if(cljs.core._EQ_.call(null,p1__32233_SHARP_,p2__32234_SHARP_)){
return p1__32233_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32238,map__32238__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32244){
var map__32245 = p__32244;
var map__32245__$1 = ((((!((map__32245 == null)))?((((map__32245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32245):map__32245);
var match_length = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32240_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32240_SHARP_);
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
var args32247 = [];
var len__25117__auto___32250 = arguments.length;
var i__25118__auto___32251 = (0);
while(true){
if((i__25118__auto___32251 < len__25117__auto___32250)){
args32247.push((arguments[i__25118__auto___32251]));

var G__32252 = (i__25118__auto___32251 + (1));
i__25118__auto___32251 = G__32252;
continue;
} else {
}
break;
}

var G__32249 = args32247.length;
switch (G__32249) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32247.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32254_SHARP_,p2__32255_SHARP_){
return cljs.core.assoc.call(null,p1__32254_SHARP_,cljs.core.get.call(null,p2__32255_SHARP_,key),p2__32255_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32256){
var map__32259 = p__32256;
var map__32259__$1 = ((((!((map__32259 == null)))?((((map__32259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32259):map__32259);
var f_data = map__32259__$1;
var file = cljs.core.get.call(null,map__32259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32261,files_msg){
var map__32268 = p__32261;
var map__32268__$1 = ((((!((map__32268 == null)))?((((map__32268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32268):map__32268);
var opts = map__32268__$1;
var on_cssload = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32270_32274 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32271_32275 = null;
var count__32272_32276 = (0);
var i__32273_32277 = (0);
while(true){
if((i__32273_32277 < count__32272_32276)){
var f_32278 = cljs.core._nth.call(null,chunk__32271_32275,i__32273_32277);
figwheel.client.file_reloading.reload_css_file.call(null,f_32278);

var G__32279 = seq__32270_32274;
var G__32280 = chunk__32271_32275;
var G__32281 = count__32272_32276;
var G__32282 = (i__32273_32277 + (1));
seq__32270_32274 = G__32279;
chunk__32271_32275 = G__32280;
count__32272_32276 = G__32281;
i__32273_32277 = G__32282;
continue;
} else {
var temp__4657__auto___32283 = cljs.core.seq.call(null,seq__32270_32274);
if(temp__4657__auto___32283){
var seq__32270_32284__$1 = temp__4657__auto___32283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32270_32284__$1)){
var c__24858__auto___32285 = cljs.core.chunk_first.call(null,seq__32270_32284__$1);
var G__32286 = cljs.core.chunk_rest.call(null,seq__32270_32284__$1);
var G__32287 = c__24858__auto___32285;
var G__32288 = cljs.core.count.call(null,c__24858__auto___32285);
var G__32289 = (0);
seq__32270_32274 = G__32286;
chunk__32271_32275 = G__32287;
count__32272_32276 = G__32288;
i__32273_32277 = G__32289;
continue;
} else {
var f_32290 = cljs.core.first.call(null,seq__32270_32284__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32290);

var G__32291 = cljs.core.next.call(null,seq__32270_32284__$1);
var G__32292 = null;
var G__32293 = (0);
var G__32294 = (0);
seq__32270_32274 = G__32291;
chunk__32271_32275 = G__32292;
count__32272_32276 = G__32293;
i__32273_32277 = G__32294;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32268,map__32268__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__32268,map__32268__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map