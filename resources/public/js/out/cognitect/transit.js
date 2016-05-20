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
var seq__22427_22431 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__22428_22432 = null;
var count__22429_22433 = (0);
var i__22430_22434 = (0);
while(true){
if((i__22430_22434 < count__22429_22433)){
var k_22435 = cljs.core._nth.call(null,chunk__22428_22432,i__22430_22434);
var v_22436 = (b[k_22435]);
(a[k_22435] = v_22436);

var G__22437 = seq__22427_22431;
var G__22438 = chunk__22428_22432;
var G__22439 = count__22429_22433;
var G__22440 = (i__22430_22434 + (1));
seq__22427_22431 = G__22437;
chunk__22428_22432 = G__22438;
count__22429_22433 = G__22439;
i__22430_22434 = G__22440;
continue;
} else {
var temp__4657__auto___22441 = cljs.core.seq.call(null,seq__22427_22431);
if(temp__4657__auto___22441){
var seq__22427_22442__$1 = temp__4657__auto___22441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22427_22442__$1)){
var c__22061__auto___22443 = cljs.core.chunk_first.call(null,seq__22427_22442__$1);
var G__22444 = cljs.core.chunk_rest.call(null,seq__22427_22442__$1);
var G__22445 = c__22061__auto___22443;
var G__22446 = cljs.core.count.call(null,c__22061__auto___22443);
var G__22447 = (0);
seq__22427_22431 = G__22444;
chunk__22428_22432 = G__22445;
count__22429_22433 = G__22446;
i__22430_22434 = G__22447;
continue;
} else {
var k_22448 = cljs.core.first.call(null,seq__22427_22442__$1);
var v_22449 = (b[k_22448]);
(a[k_22448] = v_22449);

var G__22450 = cljs.core.next.call(null,seq__22427_22442__$1);
var G__22451 = null;
var G__22452 = (0);
var G__22453 = (0);
seq__22427_22431 = G__22450;
chunk__22428_22432 = G__22451;
count__22429_22433 = G__22452;
i__22430_22434 = G__22453;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/VectorBuilder");
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
var args22454 = [];
var len__22320__auto___22457 = arguments.length;
var i__22321__auto___22458 = (0);
while(true){
if((i__22321__auto___22458 < len__22320__auto___22457)){
args22454.push((arguments[i__22321__auto___22458]));

var G__22459 = (i__22321__auto___22458 + (1));
i__22321__auto___22458 = G__22459;
continue;
} else {
}
break;
}

var G__22456 = args22454.length;
switch (G__22456) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22454.length)].join('')));

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
var G__22461 = (i + (2));
var G__22462 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__22461;
ret = G__22462;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/SymbolHandler");
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
var seq__22463_22467 = cljs.core.seq.call(null,v);
var chunk__22464_22468 = null;
var count__22465_22469 = (0);
var i__22466_22470 = (0);
while(true){
if((i__22466_22470 < count__22465_22469)){
var x_22471 = cljs.core._nth.call(null,chunk__22464_22468,i__22466_22470);
ret.push(x_22471);

var G__22472 = seq__22463_22467;
var G__22473 = chunk__22464_22468;
var G__22474 = count__22465_22469;
var G__22475 = (i__22466_22470 + (1));
seq__22463_22467 = G__22472;
chunk__22464_22468 = G__22473;
count__22465_22469 = G__22474;
i__22466_22470 = G__22475;
continue;
} else {
var temp__4657__auto___22476 = cljs.core.seq.call(null,seq__22463_22467);
if(temp__4657__auto___22476){
var seq__22463_22477__$1 = temp__4657__auto___22476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22463_22477__$1)){
var c__22061__auto___22478 = cljs.core.chunk_first.call(null,seq__22463_22477__$1);
var G__22479 = cljs.core.chunk_rest.call(null,seq__22463_22477__$1);
var G__22480 = c__22061__auto___22478;
var G__22481 = cljs.core.count.call(null,c__22061__auto___22478);
var G__22482 = (0);
seq__22463_22467 = G__22479;
chunk__22464_22468 = G__22480;
count__22465_22469 = G__22481;
i__22466_22470 = G__22482;
continue;
} else {
var x_22483 = cljs.core.first.call(null,seq__22463_22477__$1);
ret.push(x_22483);

var G__22484 = cljs.core.next.call(null,seq__22463_22477__$1);
var G__22485 = null;
var G__22486 = (0);
var G__22487 = (0);
seq__22463_22467 = G__22484;
chunk__22464_22468 = G__22485;
count__22465_22469 = G__22486;
i__22466_22470 = G__22487;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/MapHandler");
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
var seq__22488_22492 = cljs.core.seq.call(null,v);
var chunk__22489_22493 = null;
var count__22490_22494 = (0);
var i__22491_22495 = (0);
while(true){
if((i__22491_22495 < count__22490_22494)){
var x_22496 = cljs.core._nth.call(null,chunk__22489_22493,i__22491_22495);
ret.push(x_22496);

var G__22497 = seq__22488_22492;
var G__22498 = chunk__22489_22493;
var G__22499 = count__22490_22494;
var G__22500 = (i__22491_22495 + (1));
seq__22488_22492 = G__22497;
chunk__22489_22493 = G__22498;
count__22490_22494 = G__22499;
i__22491_22495 = G__22500;
continue;
} else {
var temp__4657__auto___22501 = cljs.core.seq.call(null,seq__22488_22492);
if(temp__4657__auto___22501){
var seq__22488_22502__$1 = temp__4657__auto___22501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22488_22502__$1)){
var c__22061__auto___22503 = cljs.core.chunk_first.call(null,seq__22488_22502__$1);
var G__22504 = cljs.core.chunk_rest.call(null,seq__22488_22502__$1);
var G__22505 = c__22061__auto___22503;
var G__22506 = cljs.core.count.call(null,c__22061__auto___22503);
var G__22507 = (0);
seq__22488_22492 = G__22504;
chunk__22489_22493 = G__22505;
count__22490_22494 = G__22506;
i__22491_22495 = G__22507;
continue;
} else {
var x_22508 = cljs.core.first.call(null,seq__22488_22502__$1);
ret.push(x_22508);

var G__22509 = cljs.core.next.call(null,seq__22488_22502__$1);
var G__22510 = null;
var G__22511 = (0);
var G__22512 = (0);
seq__22488_22492 = G__22509;
chunk__22489_22493 = G__22510;
count__22490_22494 = G__22511;
i__22491_22495 = G__22512;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/SetHandler");
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
var seq__22513_22517 = cljs.core.seq.call(null,v);
var chunk__22514_22518 = null;
var count__22515_22519 = (0);
var i__22516_22520 = (0);
while(true){
if((i__22516_22520 < count__22515_22519)){
var x_22521 = cljs.core._nth.call(null,chunk__22514_22518,i__22516_22520);
ret.push(x_22521);

var G__22522 = seq__22513_22517;
var G__22523 = chunk__22514_22518;
var G__22524 = count__22515_22519;
var G__22525 = (i__22516_22520 + (1));
seq__22513_22517 = G__22522;
chunk__22514_22518 = G__22523;
count__22515_22519 = G__22524;
i__22516_22520 = G__22525;
continue;
} else {
var temp__4657__auto___22526 = cljs.core.seq.call(null,seq__22513_22517);
if(temp__4657__auto___22526){
var seq__22513_22527__$1 = temp__4657__auto___22526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22513_22527__$1)){
var c__22061__auto___22528 = cljs.core.chunk_first.call(null,seq__22513_22527__$1);
var G__22529 = cljs.core.chunk_rest.call(null,seq__22513_22527__$1);
var G__22530 = c__22061__auto___22528;
var G__22531 = cljs.core.count.call(null,c__22061__auto___22528);
var G__22532 = (0);
seq__22513_22517 = G__22529;
chunk__22514_22518 = G__22530;
count__22515_22519 = G__22531;
i__22516_22520 = G__22532;
continue;
} else {
var x_22533 = cljs.core.first.call(null,seq__22513_22527__$1);
ret.push(x_22533);

var G__22534 = cljs.core.next.call(null,seq__22513_22527__$1);
var G__22535 = null;
var G__22536 = (0);
var G__22537 = (0);
seq__22513_22517 = G__22534;
chunk__22514_22518 = G__22535;
count__22515_22519 = G__22536;
i__22516_22520 = G__22537;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/UUIDHandler");
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
var args22538 = [];
var len__22320__auto___22549 = arguments.length;
var i__22321__auto___22550 = (0);
while(true){
if((i__22321__auto___22550 < len__22320__auto___22549)){
args22538.push((arguments[i__22321__auto___22550]));

var G__22551 = (i__22321__auto___22550 + (1));
i__22321__auto___22550 = G__22551;
continue;
} else {
}
break;
}

var G__22540 = args22538.length;
switch (G__22540) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22538.length)].join('')));

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
var G__22541 = obj;
G__22541.push(kfn.call(null,k),vfn.call(null,v));

return G__22541;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x22542 = cljs.core.clone.call(null,handlers);
x22542.forEach = ((function (x22542,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__22543 = cljs.core.seq.call(null,coll);
var chunk__22544 = null;
var count__22545 = (0);
var i__22546 = (0);
while(true){
if((i__22546 < count__22545)){
var vec__22547 = cljs.core._nth.call(null,chunk__22544,i__22546);
var k = cljs.core.nth.call(null,vec__22547,(0),null);
var v = cljs.core.nth.call(null,vec__22547,(1),null);
f.call(null,v,k);

var G__22553 = seq__22543;
var G__22554 = chunk__22544;
var G__22555 = count__22545;
var G__22556 = (i__22546 + (1));
seq__22543 = G__22553;
chunk__22544 = G__22554;
count__22545 = G__22555;
i__22546 = G__22556;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22543);
if(temp__4657__auto__){
var seq__22543__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22543__$1)){
var c__22061__auto__ = cljs.core.chunk_first.call(null,seq__22543__$1);
var G__22557 = cljs.core.chunk_rest.call(null,seq__22543__$1);
var G__22558 = c__22061__auto__;
var G__22559 = cljs.core.count.call(null,c__22061__auto__);
var G__22560 = (0);
seq__22543 = G__22557;
chunk__22544 = G__22558;
count__22545 = G__22559;
i__22546 = G__22560;
continue;
} else {
var vec__22548 = cljs.core.first.call(null,seq__22543__$1);
var k = cljs.core.nth.call(null,vec__22548,(0),null);
var v = cljs.core.nth.call(null,vec__22548,(1),null);
f.call(null,v,k);

var G__22561 = cljs.core.next.call(null,seq__22543__$1);
var G__22562 = null;
var G__22563 = (0);
var G__22564 = (0);
seq__22543 = G__22561;
chunk__22544 = G__22562;
count__22545 = G__22563;
i__22546 = G__22564;
continue;
}
} else {
return null;
}
}
break;
}
});})(x22542,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x22542;
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
var args22565 = [];
var len__22320__auto___22571 = arguments.length;
var i__22321__auto___22572 = (0);
while(true){
if((i__22321__auto___22572 < len__22320__auto___22571)){
args22565.push((arguments[i__22321__auto___22572]));

var G__22573 = (i__22321__auto___22572 + (1));
i__22321__auto___22572 = G__22573;
continue;
} else {
}
break;
}

var G__22567 = args22565.length;
switch (G__22567) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22565.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit22568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit22568 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta22569){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta22569 = meta22569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit22568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22570,meta22569__$1){
var self__ = this;
var _22570__$1 = this;
return (new cognitect.transit.t_cognitect$transit22568(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta22569__$1));
});

cognitect.transit.t_cognitect$transit22568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22570){
var self__ = this;
var _22570__$1 = this;
return self__.meta22569;
});

cognitect.transit.t_cognitect$transit22568.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit22568.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit22568.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit22568.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit22568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta22569","meta22569",-1411941382,null)], null);
});

cognitect.transit.t_cognitect$transit22568.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit22568.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit22568";

cognitect.transit.t_cognitect$transit22568.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cognitect.transit/t_cognitect$transit22568");
});

cognitect.transit.__GT_t_cognitect$transit22568 = (function cognitect$transit$__GT_t_cognitect$transit22568(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta22569){
return (new cognitect.transit.t_cognitect$transit22568(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta22569));
});

}

return (new cognitect.transit.t_cognitect$transit22568(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__21250__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
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