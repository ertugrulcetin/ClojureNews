// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__26323_26327 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__26324_26328 = null;
var count__26325_26329 = (0);
var i__26326_26330 = (0);
while(true){
if((i__26326_26330 < count__26325_26329)){
var k_26331 = cljs.core._nth.call(null,chunk__26324_26328,i__26326_26330);
var v_26332 = (b[k_26331]);
(a[k_26331] = v_26332);

var G__26333 = seq__26323_26327;
var G__26334 = chunk__26324_26328;
var G__26335 = count__26325_26329;
var G__26336 = (i__26326_26330 + (1));
seq__26323_26327 = G__26333;
chunk__26324_26328 = G__26334;
count__26325_26329 = G__26335;
i__26326_26330 = G__26336;
continue;
} else {
var temp__4657__auto___26337 = cljs.core.seq.call(null,seq__26323_26327);
if(temp__4657__auto___26337){
var seq__26323_26338__$1 = temp__4657__auto___26337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26323_26338__$1)){
var c__24858__auto___26339 = cljs.core.chunk_first.call(null,seq__26323_26338__$1);
var G__26340 = cljs.core.chunk_rest.call(null,seq__26323_26338__$1);
var G__26341 = c__24858__auto___26339;
var G__26342 = cljs.core.count.call(null,c__24858__auto___26339);
var G__26343 = (0);
seq__26323_26327 = G__26340;
chunk__26324_26328 = G__26341;
count__26325_26329 = G__26342;
i__26326_26330 = G__26343;
continue;
} else {
var k_26344 = cljs.core.first.call(null,seq__26323_26338__$1);
var v_26345 = (b[k_26344]);
(a[k_26344] = v_26345);

var G__26346 = cljs.core.next.call(null,seq__26323_26338__$1);
var G__26347 = null;
var G__26348 = (0);
var G__26349 = (0);
seq__26323_26327 = G__26346;
chunk__26324_26328 = G__26347;
count__26325_26329 = G__26348;
i__26326_26330 = G__26349;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args26350 = [];
var len__25117__auto___26353 = arguments.length;
var i__25118__auto___26354 = (0);
while(true){
if((i__25118__auto___26354 < len__25117__auto___26353)){
args26350.push((arguments[i__25118__auto___26354]));

var G__26355 = (i__25118__auto___26354 + (1));
i__25118__auto___26354 = G__26355;
continue;
} else {
}
break;
}

var G__26352 = args26350.length;
switch (G__26352) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26350.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__26357 = (i + (2));
var G__26358 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__26357;
ret = G__26358;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__26359_26363 = cljs.core.seq.call(null,v);
var chunk__26360_26364 = null;
var count__26361_26365 = (0);
var i__26362_26366 = (0);
while(true){
if((i__26362_26366 < count__26361_26365)){
var x_26367 = cljs.core._nth.call(null,chunk__26360_26364,i__26362_26366);
ret.push(x_26367);

var G__26368 = seq__26359_26363;
var G__26369 = chunk__26360_26364;
var G__26370 = count__26361_26365;
var G__26371 = (i__26362_26366 + (1));
seq__26359_26363 = G__26368;
chunk__26360_26364 = G__26369;
count__26361_26365 = G__26370;
i__26362_26366 = G__26371;
continue;
} else {
var temp__4657__auto___26372 = cljs.core.seq.call(null,seq__26359_26363);
if(temp__4657__auto___26372){
var seq__26359_26373__$1 = temp__4657__auto___26372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26359_26373__$1)){
var c__24858__auto___26374 = cljs.core.chunk_first.call(null,seq__26359_26373__$1);
var G__26375 = cljs.core.chunk_rest.call(null,seq__26359_26373__$1);
var G__26376 = c__24858__auto___26374;
var G__26377 = cljs.core.count.call(null,c__24858__auto___26374);
var G__26378 = (0);
seq__26359_26363 = G__26375;
chunk__26360_26364 = G__26376;
count__26361_26365 = G__26377;
i__26362_26366 = G__26378;
continue;
} else {
var x_26379 = cljs.core.first.call(null,seq__26359_26373__$1);
ret.push(x_26379);

var G__26380 = cljs.core.next.call(null,seq__26359_26373__$1);
var G__26381 = null;
var G__26382 = (0);
var G__26383 = (0);
seq__26359_26363 = G__26380;
chunk__26360_26364 = G__26381;
count__26361_26365 = G__26382;
i__26362_26366 = G__26383;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__26384_26388 = cljs.core.seq.call(null,v);
var chunk__26385_26389 = null;
var count__26386_26390 = (0);
var i__26387_26391 = (0);
while(true){
if((i__26387_26391 < count__26386_26390)){
var x_26392 = cljs.core._nth.call(null,chunk__26385_26389,i__26387_26391);
ret.push(x_26392);

var G__26393 = seq__26384_26388;
var G__26394 = chunk__26385_26389;
var G__26395 = count__26386_26390;
var G__26396 = (i__26387_26391 + (1));
seq__26384_26388 = G__26393;
chunk__26385_26389 = G__26394;
count__26386_26390 = G__26395;
i__26387_26391 = G__26396;
continue;
} else {
var temp__4657__auto___26397 = cljs.core.seq.call(null,seq__26384_26388);
if(temp__4657__auto___26397){
var seq__26384_26398__$1 = temp__4657__auto___26397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26384_26398__$1)){
var c__24858__auto___26399 = cljs.core.chunk_first.call(null,seq__26384_26398__$1);
var G__26400 = cljs.core.chunk_rest.call(null,seq__26384_26398__$1);
var G__26401 = c__24858__auto___26399;
var G__26402 = cljs.core.count.call(null,c__24858__auto___26399);
var G__26403 = (0);
seq__26384_26388 = G__26400;
chunk__26385_26389 = G__26401;
count__26386_26390 = G__26402;
i__26387_26391 = G__26403;
continue;
} else {
var x_26404 = cljs.core.first.call(null,seq__26384_26398__$1);
ret.push(x_26404);

var G__26405 = cljs.core.next.call(null,seq__26384_26398__$1);
var G__26406 = null;
var G__26407 = (0);
var G__26408 = (0);
seq__26384_26388 = G__26405;
chunk__26385_26389 = G__26406;
count__26386_26390 = G__26407;
i__26387_26391 = G__26408;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__26409_26413 = cljs.core.seq.call(null,v);
var chunk__26410_26414 = null;
var count__26411_26415 = (0);
var i__26412_26416 = (0);
while(true){
if((i__26412_26416 < count__26411_26415)){
var x_26417 = cljs.core._nth.call(null,chunk__26410_26414,i__26412_26416);
ret.push(x_26417);

var G__26418 = seq__26409_26413;
var G__26419 = chunk__26410_26414;
var G__26420 = count__26411_26415;
var G__26421 = (i__26412_26416 + (1));
seq__26409_26413 = G__26418;
chunk__26410_26414 = G__26419;
count__26411_26415 = G__26420;
i__26412_26416 = G__26421;
continue;
} else {
var temp__4657__auto___26422 = cljs.core.seq.call(null,seq__26409_26413);
if(temp__4657__auto___26422){
var seq__26409_26423__$1 = temp__4657__auto___26422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26409_26423__$1)){
var c__24858__auto___26424 = cljs.core.chunk_first.call(null,seq__26409_26423__$1);
var G__26425 = cljs.core.chunk_rest.call(null,seq__26409_26423__$1);
var G__26426 = c__24858__auto___26424;
var G__26427 = cljs.core.count.call(null,c__24858__auto___26424);
var G__26428 = (0);
seq__26409_26413 = G__26425;
chunk__26410_26414 = G__26426;
count__26411_26415 = G__26427;
i__26412_26416 = G__26428;
continue;
} else {
var x_26429 = cljs.core.first.call(null,seq__26409_26423__$1);
ret.push(x_26429);

var G__26430 = cljs.core.next.call(null,seq__26409_26423__$1);
var G__26431 = null;
var G__26432 = (0);
var G__26433 = (0);
seq__26409_26413 = G__26430;
chunk__26410_26414 = G__26431;
count__26411_26415 = G__26432;
i__26412_26416 = G__26433;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args26434 = [];
var len__25117__auto___26445 = arguments.length;
var i__25118__auto___26446 = (0);
while(true){
if((i__25118__auto___26446 < len__25117__auto___26445)){
args26434.push((arguments[i__25118__auto___26446]));

var G__26447 = (i__25118__auto___26446 + (1));
i__25118__auto___26446 = G__26447;
continue;
} else {
}
break;
}

var G__26436 = args26434.length;
switch (G__26436) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26434.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__26437 = obj;
G__26437.push(kfn.call(null,k),vfn.call(null,v));

return G__26437;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x26438 = cljs.core.clone.call(null,handlers);
x26438.forEach = ((function (x26438,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__26439 = cljs.core.seq.call(null,coll);
var chunk__26440 = null;
var count__26441 = (0);
var i__26442 = (0);
while(true){
if((i__26442 < count__26441)){
var vec__26443 = cljs.core._nth.call(null,chunk__26440,i__26442);
var k = cljs.core.nth.call(null,vec__26443,(0),null);
var v = cljs.core.nth.call(null,vec__26443,(1),null);
f.call(null,v,k);

var G__26449 = seq__26439;
var G__26450 = chunk__26440;
var G__26451 = count__26441;
var G__26452 = (i__26442 + (1));
seq__26439 = G__26449;
chunk__26440 = G__26450;
count__26441 = G__26451;
i__26442 = G__26452;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26439);
if(temp__4657__auto__){
var seq__26439__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26439__$1)){
var c__24858__auto__ = cljs.core.chunk_first.call(null,seq__26439__$1);
var G__26453 = cljs.core.chunk_rest.call(null,seq__26439__$1);
var G__26454 = c__24858__auto__;
var G__26455 = cljs.core.count.call(null,c__24858__auto__);
var G__26456 = (0);
seq__26439 = G__26453;
chunk__26440 = G__26454;
count__26441 = G__26455;
i__26442 = G__26456;
continue;
} else {
var vec__26444 = cljs.core.first.call(null,seq__26439__$1);
var k = cljs.core.nth.call(null,vec__26444,(0),null);
var v = cljs.core.nth.call(null,vec__26444,(1),null);
f.call(null,v,k);

var G__26457 = cljs.core.next.call(null,seq__26439__$1);
var G__26458 = null;
var G__26459 = (0);
var G__26460 = (0);
seq__26439 = G__26457;
chunk__26440 = G__26458;
count__26441 = G__26459;
i__26442 = G__26460;
continue;
}
} else {
return null;
}
}
break;
}
});})(x26438,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x26438;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args26461 = [];
var len__25117__auto___26467 = arguments.length;
var i__25118__auto___26468 = (0);
while(true){
if((i__25118__auto___26468 < len__25117__auto___26467)){
args26461.push((arguments[i__25118__auto___26468]));

var G__26469 = (i__25118__auto___26468 + (1));
i__25118__auto___26468 = G__26469;
continue;
} else {
}
break;
}

var G__26463 = args26461.length;
switch (G__26463) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26461.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit26464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit26464 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta26465){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta26465 = meta26465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit26464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26466,meta26465__$1){
var self__ = this;
var _26466__$1 = this;
return (new cognitect.transit.t_cognitect$transit26464(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta26465__$1));
});

cognitect.transit.t_cognitect$transit26464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26466){
var self__ = this;
var _26466__$1 = this;
return self__.meta26465;
});

cognitect.transit.t_cognitect$transit26464.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit26464.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit26464.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit26464.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit26464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta26465","meta26465",1716260083,null)], null);
});

cognitect.transit.t_cognitect$transit26464.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit26464.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit26464";

cognitect.transit.t_cognitect$transit26464.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cognitect.transit/t_cognitect$transit26464");
});

cognitect.transit.__GT_t_cognitect$transit26464 = (function cognitect$transit$__GT_t_cognitect$transit26464(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta26465){
return (new cognitect.transit.t_cognitect$transit26464(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta26465));
});

}

return (new cognitect.transit.t_cognitect$transit26464(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__24047__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map