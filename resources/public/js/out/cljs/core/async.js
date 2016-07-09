// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28499 = [];
var len__25117__auto___28505 = arguments.length;
var i__25118__auto___28506 = (0);
while(true){
if((i__25118__auto___28506 < len__25117__auto___28505)){
args28499.push((arguments[i__25118__auto___28506]));

var G__28507 = (i__25118__auto___28506 + (1));
i__25118__auto___28506 = G__28507;
continue;
} else {
}
break;
}

var G__28501 = args28499.length;
switch (G__28501) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28499.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28502 = (function (f,blockable,meta28503){
this.f = f;
this.blockable = blockable;
this.meta28503 = meta28503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28504,meta28503__$1){
var self__ = this;
var _28504__$1 = this;
return (new cljs.core.async.t_cljs$core$async28502(self__.f,self__.blockable,meta28503__$1));
});

cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28504){
var self__ = this;
var _28504__$1 = this;
return self__.meta28503;
});

cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28503","meta28503",2050016565,null)], null);
});

cljs.core.async.t_cljs$core$async28502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28502";

cljs.core.async.t_cljs$core$async28502.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async28502");
});

cljs.core.async.__GT_t_cljs$core$async28502 = (function cljs$core$async$__GT_t_cljs$core$async28502(f__$1,blockable__$1,meta28503){
return (new cljs.core.async.t_cljs$core$async28502(f__$1,blockable__$1,meta28503));
});

}

return (new cljs.core.async.t_cljs$core$async28502(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28511 = [];
var len__25117__auto___28514 = arguments.length;
var i__25118__auto___28515 = (0);
while(true){
if((i__25118__auto___28515 < len__25117__auto___28514)){
args28511.push((arguments[i__25118__auto___28515]));

var G__28516 = (i__25118__auto___28515 + (1));
i__25118__auto___28515 = G__28516;
continue;
} else {
}
break;
}

var G__28513 = args28511.length;
switch (G__28513) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28511.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28518 = [];
var len__25117__auto___28521 = arguments.length;
var i__25118__auto___28522 = (0);
while(true){
if((i__25118__auto___28522 < len__25117__auto___28521)){
args28518.push((arguments[i__25118__auto___28522]));

var G__28523 = (i__25118__auto___28522 + (1));
i__25118__auto___28522 = G__28523;
continue;
} else {
}
break;
}

var G__28520 = args28518.length;
switch (G__28520) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28518.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28525 = [];
var len__25117__auto___28528 = arguments.length;
var i__25118__auto___28529 = (0);
while(true){
if((i__25118__auto___28529 < len__25117__auto___28528)){
args28525.push((arguments[i__25118__auto___28529]));

var G__28530 = (i__25118__auto___28529 + (1));
i__25118__auto___28529 = G__28530;
continue;
} else {
}
break;
}

var G__28527 = args28525.length;
switch (G__28527) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28525.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28532 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28532);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28532,ret){
return (function (){
return fn1.call(null,val_28532);
});})(val_28532,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28533 = [];
var len__25117__auto___28536 = arguments.length;
var i__25118__auto___28537 = (0);
while(true){
if((i__25118__auto___28537 < len__25117__auto___28536)){
args28533.push((arguments[i__25118__auto___28537]));

var G__28538 = (i__25118__auto___28537 + (1));
i__25118__auto___28537 = G__28538;
continue;
} else {
}
break;
}

var G__28535 = args28533.length;
switch (G__28535) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28533.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__24962__auto___28540 = n;
var x_28541 = (0);
while(true){
if((x_28541 < n__24962__auto___28540)){
(a[x_28541] = (0));

var G__28542 = (x_28541 + (1));
x_28541 = G__28542;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28543 = (i + (1));
i = G__28543;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28547 = (function (alt_flag,flag,meta28548){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28548 = meta28548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28549,meta28548__$1){
var self__ = this;
var _28549__$1 = this;
return (new cljs.core.async.t_cljs$core$async28547(self__.alt_flag,self__.flag,meta28548__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28549){
var self__ = this;
var _28549__$1 = this;
return self__.meta28548;
});})(flag))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28547.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28548","meta28548",-2000739861,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28547";

cljs.core.async.t_cljs$core$async28547.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async28547");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28547 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28547(alt_flag__$1,flag__$1,meta28548){
return (new cljs.core.async.t_cljs$core$async28547(alt_flag__$1,flag__$1,meta28548));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28547(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28553 = (function (alt_handler,flag,cb,meta28554){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28554 = meta28554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28555,meta28554__$1){
var self__ = this;
var _28555__$1 = this;
return (new cljs.core.async.t_cljs$core$async28553(self__.alt_handler,self__.flag,self__.cb,meta28554__$1));
});

cljs.core.async.t_cljs$core$async28553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28555){
var self__ = this;
var _28555__$1 = this;
return self__.meta28554;
});

cljs.core.async.t_cljs$core$async28553.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28553.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28554","meta28554",629664836,null)], null);
});

cljs.core.async.t_cljs$core$async28553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28553";

cljs.core.async.t_cljs$core$async28553.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async28553");
});

cljs.core.async.__GT_t_cljs$core$async28553 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28553(alt_handler__$1,flag__$1,cb__$1,meta28554){
return (new cljs.core.async.t_cljs$core$async28553(alt_handler__$1,flag__$1,cb__$1,meta28554));
});

}

return (new cljs.core.async.t_cljs$core$async28553(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28556_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28556_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28557_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28557_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24047__auto__ = wport;
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28558 = (i + (1));
i = G__28558;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24047__auto__ = ret;
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24035__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24035__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24035__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25124__auto__ = [];
var len__25117__auto___28564 = arguments.length;
var i__25118__auto___28565 = (0);
while(true){
if((i__25118__auto___28565 < len__25117__auto___28564)){
args__25124__auto__.push((arguments[i__25118__auto___28565]));

var G__28566 = (i__25118__auto___28565 + (1));
i__25118__auto___28565 = G__28566;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((1) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25125__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28561){
var map__28562 = p__28561;
var map__28562__$1 = ((((!((map__28562 == null)))?((((map__28562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28562):map__28562);
var opts = map__28562__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28559){
var G__28560 = cljs.core.first.call(null,seq28559);
var seq28559__$1 = cljs.core.next.call(null,seq28559);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28560,seq28559__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28567 = [];
var len__25117__auto___28617 = arguments.length;
var i__25118__auto___28618 = (0);
while(true){
if((i__25118__auto___28618 < len__25117__auto___28617)){
args28567.push((arguments[i__25118__auto___28618]));

var G__28619 = (i__25118__auto___28618 + (1));
i__25118__auto___28618 = G__28619;
continue;
} else {
}
break;
}

var G__28569 = args28567.length;
switch (G__28569) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28567.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28454__auto___28621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___28621){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___28621){
return (function (state_28593){
var state_val_28594 = (state_28593[(1)]);
if((state_val_28594 === (7))){
var inst_28589 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28595_28622 = state_28593__$1;
(statearr_28595_28622[(2)] = inst_28589);

(statearr_28595_28622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (1))){
var state_28593__$1 = state_28593;
var statearr_28596_28623 = state_28593__$1;
(statearr_28596_28623[(2)] = null);

(statearr_28596_28623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (4))){
var inst_28572 = (state_28593[(7)]);
var inst_28572__$1 = (state_28593[(2)]);
var inst_28573 = (inst_28572__$1 == null);
var state_28593__$1 = (function (){var statearr_28597 = state_28593;
(statearr_28597[(7)] = inst_28572__$1);

return statearr_28597;
})();
if(cljs.core.truth_(inst_28573)){
var statearr_28598_28624 = state_28593__$1;
(statearr_28598_28624[(1)] = (5));

} else {
var statearr_28599_28625 = state_28593__$1;
(statearr_28599_28625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (13))){
var state_28593__$1 = state_28593;
var statearr_28600_28626 = state_28593__$1;
(statearr_28600_28626[(2)] = null);

(statearr_28600_28626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (6))){
var inst_28572 = (state_28593[(7)]);
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28593__$1,(11),to,inst_28572);
} else {
if((state_val_28594 === (3))){
var inst_28591 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28593__$1,inst_28591);
} else {
if((state_val_28594 === (12))){
var state_28593__$1 = state_28593;
var statearr_28601_28627 = state_28593__$1;
(statearr_28601_28627[(2)] = null);

(statearr_28601_28627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (2))){
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28593__$1,(4),from);
} else {
if((state_val_28594 === (11))){
var inst_28582 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28582)){
var statearr_28602_28628 = state_28593__$1;
(statearr_28602_28628[(1)] = (12));

} else {
var statearr_28603_28629 = state_28593__$1;
(statearr_28603_28629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (9))){
var state_28593__$1 = state_28593;
var statearr_28604_28630 = state_28593__$1;
(statearr_28604_28630[(2)] = null);

(statearr_28604_28630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (5))){
var state_28593__$1 = state_28593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28605_28631 = state_28593__$1;
(statearr_28605_28631[(1)] = (8));

} else {
var statearr_28606_28632 = state_28593__$1;
(statearr_28606_28632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (14))){
var inst_28587 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28607_28633 = state_28593__$1;
(statearr_28607_28633[(2)] = inst_28587);

(statearr_28607_28633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (10))){
var inst_28579 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28608_28634 = state_28593__$1;
(statearr_28608_28634[(2)] = inst_28579);

(statearr_28608_28634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (8))){
var inst_28576 = cljs.core.async.close_BANG_.call(null,to);
var state_28593__$1 = state_28593;
var statearr_28609_28635 = state_28593__$1;
(statearr_28609_28635[(2)] = inst_28576);

(statearr_28609_28635[(1)] = (10));


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
});})(c__28454__auto___28621))
;
return ((function (switch__28342__auto__,c__28454__auto___28621){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_28613 = [null,null,null,null,null,null,null,null];
(statearr_28613[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_28613[(1)] = (1));

return statearr_28613;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_28593){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_28593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e28614){if((e28614 instanceof Object)){
var ex__28346__auto__ = e28614;
var statearr_28615_28636 = state_28593;
(statearr_28615_28636[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28637 = state_28593;
state_28593 = G__28637;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_28593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_28593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___28621))
})();
var state__28456__auto__ = (function (){var statearr_28616 = f__28455__auto__.call(null);
(statearr_28616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___28621);

return statearr_28616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___28621))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28821){
var vec__28822 = p__28821;
var v = cljs.core.nth.call(null,vec__28822,(0),null);
var p = cljs.core.nth.call(null,vec__28822,(1),null);
var job = vec__28822;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28454__auto___29004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___29004,res,vec__28822,v,p,job,jobs,results){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___29004,res,vec__28822,v,p,job,jobs,results){
return (function (state_28827){
var state_val_28828 = (state_28827[(1)]);
if((state_val_28828 === (1))){
var state_28827__$1 = state_28827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28827__$1,(2),res,v);
} else {
if((state_val_28828 === (2))){
var inst_28824 = (state_28827[(2)]);
var inst_28825 = cljs.core.async.close_BANG_.call(null,res);
var state_28827__$1 = (function (){var statearr_28829 = state_28827;
(statearr_28829[(7)] = inst_28824);

return statearr_28829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28827__$1,inst_28825);
} else {
return null;
}
}
});})(c__28454__auto___29004,res,vec__28822,v,p,job,jobs,results))
;
return ((function (switch__28342__auto__,c__28454__auto___29004,res,vec__28822,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0 = (function (){
var statearr_28833 = [null,null,null,null,null,null,null,null];
(statearr_28833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__);

(statearr_28833[(1)] = (1));

return statearr_28833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1 = (function (state_28827){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_28827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e28834){if((e28834 instanceof Object)){
var ex__28346__auto__ = e28834;
var statearr_28835_29005 = state_28827;
(statearr_28835_29005[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29006 = state_28827;
state_28827 = G__29006;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = function(state_28827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1.call(this,state_28827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___29004,res,vec__28822,v,p,job,jobs,results))
})();
var state__28456__auto__ = (function (){var statearr_28836 = f__28455__auto__.call(null);
(statearr_28836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___29004);

return statearr_28836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___29004,res,vec__28822,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28837){
var vec__28838 = p__28837;
var v = cljs.core.nth.call(null,vec__28838,(0),null);
var p = cljs.core.nth.call(null,vec__28838,(1),null);
var job = vec__28838;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__24962__auto___29007 = n;
var __29008 = (0);
while(true){
if((__29008 < n__24962__auto___29007)){
var G__28839_29009 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28839_29009) {
case "compute":
var c__28454__auto___29011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29008,c__28454__auto___29011,G__28839_29009,n__24962__auto___29007,jobs,results,process,async){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (__29008,c__28454__auto___29011,G__28839_29009,n__24962__auto___29007,jobs,results,process,async){
return (function (state_28852){
var state_val_28853 = (state_28852[(1)]);
if((state_val_28853 === (1))){
var state_28852__$1 = state_28852;
var statearr_28854_29012 = state_28852__$1;
(statearr_28854_29012[(2)] = null);

(statearr_28854_29012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (2))){
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28852__$1,(4),jobs);
} else {
if((state_val_28853 === (3))){
var inst_28850 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28852__$1,inst_28850);
} else {
if((state_val_28853 === (4))){
var inst_28842 = (state_28852[(2)]);
var inst_28843 = process.call(null,inst_28842);
var state_28852__$1 = state_28852;
if(cljs.core.truth_(inst_28843)){
var statearr_28855_29013 = state_28852__$1;
(statearr_28855_29013[(1)] = (5));

} else {
var statearr_28856_29014 = state_28852__$1;
(statearr_28856_29014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (5))){
var state_28852__$1 = state_28852;
var statearr_28857_29015 = state_28852__$1;
(statearr_28857_29015[(2)] = null);

(statearr_28857_29015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (6))){
var state_28852__$1 = state_28852;
var statearr_28858_29016 = state_28852__$1;
(statearr_28858_29016[(2)] = null);

(statearr_28858_29016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (7))){
var inst_28848 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28859_29017 = state_28852__$1;
(statearr_28859_29017[(2)] = inst_28848);

(statearr_28859_29017[(1)] = (3));


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
});})(__29008,c__28454__auto___29011,G__28839_29009,n__24962__auto___29007,jobs,results,process,async))
;
return ((function (__29008,switch__28342__auto__,c__28454__auto___29011,G__28839_29009,n__24962__auto___29007,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0 = (function (){
var statearr_28863 = [null,null,null,null,null,null,null];
(statearr_28863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__);

(statearr_28863[(1)] = (1));

return statearr_28863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1 = (function (state_28852){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_28852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e28864){if((e28864 instanceof Object)){
var ex__28346__auto__ = e28864;
var statearr_28865_29018 = state_28852;
(statearr_28865_29018[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29019 = state_28852;
state_28852 = G__29019;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = function(state_28852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1.call(this,state_28852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__;
})()
;})(__29008,switch__28342__auto__,c__28454__auto___29011,G__28839_29009,n__24962__auto___29007,jobs,results,process,async))
})();
var state__28456__auto__ = (function (){var statearr_28866 = f__28455__auto__.call(null);
(statearr_28866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___29011);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(__29008,c__28454__auto___29011,G__28839_29009,n__24962__auto___29007,jobs,results,process,async))
);


break;
case "async":
var c__28454__auto___29020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29008,c__28454__auto___29020,G__28839_29009,n__24962__auto___29007,jobs,results,process,async){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (__29008,c__28454__auto___29020,G__28839_29009,n__24962__auto___29007,jobs,results,process,async){
return (function (state_28879){
var state_val_28880 = (state_28879[(1)]);
if((state_val_28880 === (1))){
var state_28879__$1 = state_28879;
var statearr_28881_29021 = state_28879__$1;
(statearr_28881_29021[(2)] = null);

(statearr_28881_29021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (2))){
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28879__$1,(4),jobs);
} else {
if((state_val_28880 === (3))){
var inst_28877 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28879__$1,inst_28877);
} else {
if((state_val_28880 === (4))){
var inst_28869 = (state_28879[(2)]);
var inst_28870 = async.call(null,inst_28869);
var state_28879__$1 = state_28879;
if(cljs.core.truth_(inst_28870)){
var statearr_28882_29022 = state_28879__$1;
(statearr_28882_29022[(1)] = (5));

} else {
var statearr_28883_29023 = state_28879__$1;
(statearr_28883_29023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (5))){
var state_28879__$1 = state_28879;
var statearr_28884_29024 = state_28879__$1;
(statearr_28884_29024[(2)] = null);

(statearr_28884_29024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (6))){
var state_28879__$1 = state_28879;
var statearr_28885_29025 = state_28879__$1;
(statearr_28885_29025[(2)] = null);

(statearr_28885_29025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (7))){
var inst_28875 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28886_29026 = state_28879__$1;
(statearr_28886_29026[(2)] = inst_28875);

(statearr_28886_29026[(1)] = (3));


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
});})(__29008,c__28454__auto___29020,G__28839_29009,n__24962__auto___29007,jobs,results,process,async))
;
return ((function (__29008,switch__28342__auto__,c__28454__auto___29020,G__28839_29009,n__24962__auto___29007,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0 = (function (){
var statearr_28890 = [null,null,null,null,null,null,null];
(statearr_28890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__);

(statearr_28890[(1)] = (1));

return statearr_28890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1 = (function (state_28879){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_28879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e28891){if((e28891 instanceof Object)){
var ex__28346__auto__ = e28891;
var statearr_28892_29027 = state_28879;
(statearr_28892_29027[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29028 = state_28879;
state_28879 = G__29028;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = function(state_28879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1.call(this,state_28879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__;
})()
;})(__29008,switch__28342__auto__,c__28454__auto___29020,G__28839_29009,n__24962__auto___29007,jobs,results,process,async))
})();
var state__28456__auto__ = (function (){var statearr_28893 = f__28455__auto__.call(null);
(statearr_28893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___29020);

return statearr_28893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(__29008,c__28454__auto___29020,G__28839_29009,n__24962__auto___29007,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29029 = (__29008 + (1));
__29008 = G__29029;
continue;
} else {
}
break;
}

var c__28454__auto___29030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___29030,jobs,results,process,async){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___29030,jobs,results,process,async){
return (function (state_28915){
var state_val_28916 = (state_28915[(1)]);
if((state_val_28916 === (1))){
var state_28915__$1 = state_28915;
var statearr_28917_29031 = state_28915__$1;
(statearr_28917_29031[(2)] = null);

(statearr_28917_29031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (2))){
var state_28915__$1 = state_28915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28915__$1,(4),from);
} else {
if((state_val_28916 === (3))){
var inst_28913 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28915__$1,inst_28913);
} else {
if((state_val_28916 === (4))){
var inst_28896 = (state_28915[(7)]);
var inst_28896__$1 = (state_28915[(2)]);
var inst_28897 = (inst_28896__$1 == null);
var state_28915__$1 = (function (){var statearr_28918 = state_28915;
(statearr_28918[(7)] = inst_28896__$1);

return statearr_28918;
})();
if(cljs.core.truth_(inst_28897)){
var statearr_28919_29032 = state_28915__$1;
(statearr_28919_29032[(1)] = (5));

} else {
var statearr_28920_29033 = state_28915__$1;
(statearr_28920_29033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (5))){
var inst_28899 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28915__$1 = state_28915;
var statearr_28921_29034 = state_28915__$1;
(statearr_28921_29034[(2)] = inst_28899);

(statearr_28921_29034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (6))){
var inst_28896 = (state_28915[(7)]);
var inst_28901 = (state_28915[(8)]);
var inst_28901__$1 = cljs.core.async.chan.call(null,(1));
var inst_28902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28903 = [inst_28896,inst_28901__$1];
var inst_28904 = (new cljs.core.PersistentVector(null,2,(5),inst_28902,inst_28903,null));
var state_28915__$1 = (function (){var statearr_28922 = state_28915;
(statearr_28922[(8)] = inst_28901__$1);

return statearr_28922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28915__$1,(8),jobs,inst_28904);
} else {
if((state_val_28916 === (7))){
var inst_28911 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
var statearr_28923_29035 = state_28915__$1;
(statearr_28923_29035[(2)] = inst_28911);

(statearr_28923_29035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (8))){
var inst_28901 = (state_28915[(8)]);
var inst_28906 = (state_28915[(2)]);
var state_28915__$1 = (function (){var statearr_28924 = state_28915;
(statearr_28924[(9)] = inst_28906);

return statearr_28924;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28915__$1,(9),results,inst_28901);
} else {
if((state_val_28916 === (9))){
var inst_28908 = (state_28915[(2)]);
var state_28915__$1 = (function (){var statearr_28925 = state_28915;
(statearr_28925[(10)] = inst_28908);

return statearr_28925;
})();
var statearr_28926_29036 = state_28915__$1;
(statearr_28926_29036[(2)] = null);

(statearr_28926_29036[(1)] = (2));


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
});})(c__28454__auto___29030,jobs,results,process,async))
;
return ((function (switch__28342__auto__,c__28454__auto___29030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0 = (function (){
var statearr_28930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__);

(statearr_28930[(1)] = (1));

return statearr_28930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1 = (function (state_28915){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_28915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e28931){if((e28931 instanceof Object)){
var ex__28346__auto__ = e28931;
var statearr_28932_29037 = state_28915;
(statearr_28932_29037[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29038 = state_28915;
state_28915 = G__29038;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = function(state_28915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1.call(this,state_28915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___29030,jobs,results,process,async))
})();
var state__28456__auto__ = (function (){var statearr_28933 = f__28455__auto__.call(null);
(statearr_28933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___29030);

return statearr_28933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___29030,jobs,results,process,async))
);


var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__,jobs,results,process,async){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__,jobs,results,process,async){
return (function (state_28971){
var state_val_28972 = (state_28971[(1)]);
if((state_val_28972 === (7))){
var inst_28967 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28973_29039 = state_28971__$1;
(statearr_28973_29039[(2)] = inst_28967);

(statearr_28973_29039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (20))){
var state_28971__$1 = state_28971;
var statearr_28974_29040 = state_28971__$1;
(statearr_28974_29040[(2)] = null);

(statearr_28974_29040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (1))){
var state_28971__$1 = state_28971;
var statearr_28975_29041 = state_28971__$1;
(statearr_28975_29041[(2)] = null);

(statearr_28975_29041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (4))){
var inst_28936 = (state_28971[(7)]);
var inst_28936__$1 = (state_28971[(2)]);
var inst_28937 = (inst_28936__$1 == null);
var state_28971__$1 = (function (){var statearr_28976 = state_28971;
(statearr_28976[(7)] = inst_28936__$1);

return statearr_28976;
})();
if(cljs.core.truth_(inst_28937)){
var statearr_28977_29042 = state_28971__$1;
(statearr_28977_29042[(1)] = (5));

} else {
var statearr_28978_29043 = state_28971__$1;
(statearr_28978_29043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (15))){
var inst_28949 = (state_28971[(8)]);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28971__$1,(18),to,inst_28949);
} else {
if((state_val_28972 === (21))){
var inst_28962 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28979_29044 = state_28971__$1;
(statearr_28979_29044[(2)] = inst_28962);

(statearr_28979_29044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (13))){
var inst_28964 = (state_28971[(2)]);
var state_28971__$1 = (function (){var statearr_28980 = state_28971;
(statearr_28980[(9)] = inst_28964);

return statearr_28980;
})();
var statearr_28981_29045 = state_28971__$1;
(statearr_28981_29045[(2)] = null);

(statearr_28981_29045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (6))){
var inst_28936 = (state_28971[(7)]);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(11),inst_28936);
} else {
if((state_val_28972 === (17))){
var inst_28957 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28957)){
var statearr_28982_29046 = state_28971__$1;
(statearr_28982_29046[(1)] = (19));

} else {
var statearr_28983_29047 = state_28971__$1;
(statearr_28983_29047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (3))){
var inst_28969 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28971__$1,inst_28969);
} else {
if((state_val_28972 === (12))){
var inst_28946 = (state_28971[(10)]);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(14),inst_28946);
} else {
if((state_val_28972 === (2))){
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(4),results);
} else {
if((state_val_28972 === (19))){
var state_28971__$1 = state_28971;
var statearr_28984_29048 = state_28971__$1;
(statearr_28984_29048[(2)] = null);

(statearr_28984_29048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (11))){
var inst_28946 = (state_28971[(2)]);
var state_28971__$1 = (function (){var statearr_28985 = state_28971;
(statearr_28985[(10)] = inst_28946);

return statearr_28985;
})();
var statearr_28986_29049 = state_28971__$1;
(statearr_28986_29049[(2)] = null);

(statearr_28986_29049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (9))){
var state_28971__$1 = state_28971;
var statearr_28987_29050 = state_28971__$1;
(statearr_28987_29050[(2)] = null);

(statearr_28987_29050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (5))){
var state_28971__$1 = state_28971;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28988_29051 = state_28971__$1;
(statearr_28988_29051[(1)] = (8));

} else {
var statearr_28989_29052 = state_28971__$1;
(statearr_28989_29052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (14))){
var inst_28951 = (state_28971[(11)]);
var inst_28949 = (state_28971[(8)]);
var inst_28949__$1 = (state_28971[(2)]);
var inst_28950 = (inst_28949__$1 == null);
var inst_28951__$1 = cljs.core.not.call(null,inst_28950);
var state_28971__$1 = (function (){var statearr_28990 = state_28971;
(statearr_28990[(11)] = inst_28951__$1);

(statearr_28990[(8)] = inst_28949__$1);

return statearr_28990;
})();
if(inst_28951__$1){
var statearr_28991_29053 = state_28971__$1;
(statearr_28991_29053[(1)] = (15));

} else {
var statearr_28992_29054 = state_28971__$1;
(statearr_28992_29054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (16))){
var inst_28951 = (state_28971[(11)]);
var state_28971__$1 = state_28971;
var statearr_28993_29055 = state_28971__$1;
(statearr_28993_29055[(2)] = inst_28951);

(statearr_28993_29055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (10))){
var inst_28943 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28994_29056 = state_28971__$1;
(statearr_28994_29056[(2)] = inst_28943);

(statearr_28994_29056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (18))){
var inst_28954 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28995_29057 = state_28971__$1;
(statearr_28995_29057[(2)] = inst_28954);

(statearr_28995_29057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (8))){
var inst_28940 = cljs.core.async.close_BANG_.call(null,to);
var state_28971__$1 = state_28971;
var statearr_28996_29058 = state_28971__$1;
(statearr_28996_29058[(2)] = inst_28940);

(statearr_28996_29058[(1)] = (10));


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
});})(c__28454__auto__,jobs,results,process,async))
;
return ((function (switch__28342__auto__,c__28454__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0 = (function (){
var statearr_29000 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__);

(statearr_29000[(1)] = (1));

return statearr_29000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1 = (function (state_28971){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_28971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e29001){if((e29001 instanceof Object)){
var ex__28346__auto__ = e29001;
var statearr_29002_29059 = state_28971;
(statearr_29002_29059[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29060 = state_28971;
state_28971 = G__29060;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__ = function(state_28971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1.call(this,state_28971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__,jobs,results,process,async))
})();
var state__28456__auto__ = (function (){var statearr_29003 = f__28455__auto__.call(null);
(statearr_29003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_29003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__,jobs,results,process,async))
);

return c__28454__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29061 = [];
var len__25117__auto___29064 = arguments.length;
var i__25118__auto___29065 = (0);
while(true){
if((i__25118__auto___29065 < len__25117__auto___29064)){
args29061.push((arguments[i__25118__auto___29065]));

var G__29066 = (i__25118__auto___29065 + (1));
i__25118__auto___29065 = G__29066;
continue;
} else {
}
break;
}

var G__29063 = args29061.length;
switch (G__29063) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29061.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29068 = [];
var len__25117__auto___29071 = arguments.length;
var i__25118__auto___29072 = (0);
while(true){
if((i__25118__auto___29072 < len__25117__auto___29071)){
args29068.push((arguments[i__25118__auto___29072]));

var G__29073 = (i__25118__auto___29072 + (1));
i__25118__auto___29072 = G__29073;
continue;
} else {
}
break;
}

var G__29070 = args29068.length;
switch (G__29070) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29068.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29075 = [];
var len__25117__auto___29128 = arguments.length;
var i__25118__auto___29129 = (0);
while(true){
if((i__25118__auto___29129 < len__25117__auto___29128)){
args29075.push((arguments[i__25118__auto___29129]));

var G__29130 = (i__25118__auto___29129 + (1));
i__25118__auto___29129 = G__29130;
continue;
} else {
}
break;
}

var G__29077 = args29075.length;
switch (G__29077) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29075.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28454__auto___29132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___29132,tc,fc){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___29132,tc,fc){
return (function (state_29103){
var state_val_29104 = (state_29103[(1)]);
if((state_val_29104 === (7))){
var inst_29099 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29105_29133 = state_29103__$1;
(statearr_29105_29133[(2)] = inst_29099);

(statearr_29105_29133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (1))){
var state_29103__$1 = state_29103;
var statearr_29106_29134 = state_29103__$1;
(statearr_29106_29134[(2)] = null);

(statearr_29106_29134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (4))){
var inst_29080 = (state_29103[(7)]);
var inst_29080__$1 = (state_29103[(2)]);
var inst_29081 = (inst_29080__$1 == null);
var state_29103__$1 = (function (){var statearr_29107 = state_29103;
(statearr_29107[(7)] = inst_29080__$1);

return statearr_29107;
})();
if(cljs.core.truth_(inst_29081)){
var statearr_29108_29135 = state_29103__$1;
(statearr_29108_29135[(1)] = (5));

} else {
var statearr_29109_29136 = state_29103__$1;
(statearr_29109_29136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (13))){
var state_29103__$1 = state_29103;
var statearr_29110_29137 = state_29103__$1;
(statearr_29110_29137[(2)] = null);

(statearr_29110_29137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (6))){
var inst_29080 = (state_29103[(7)]);
var inst_29086 = p.call(null,inst_29080);
var state_29103__$1 = state_29103;
if(cljs.core.truth_(inst_29086)){
var statearr_29111_29138 = state_29103__$1;
(statearr_29111_29138[(1)] = (9));

} else {
var statearr_29112_29139 = state_29103__$1;
(statearr_29112_29139[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (3))){
var inst_29101 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else {
if((state_val_29104 === (12))){
var state_29103__$1 = state_29103;
var statearr_29113_29140 = state_29103__$1;
(statearr_29113_29140[(2)] = null);

(statearr_29113_29140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (2))){
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(4),ch);
} else {
if((state_val_29104 === (11))){
var inst_29080 = (state_29103[(7)]);
var inst_29090 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(8),inst_29090,inst_29080);
} else {
if((state_val_29104 === (9))){
var state_29103__$1 = state_29103;
var statearr_29114_29141 = state_29103__$1;
(statearr_29114_29141[(2)] = tc);

(statearr_29114_29141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (5))){
var inst_29083 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29084 = cljs.core.async.close_BANG_.call(null,fc);
var state_29103__$1 = (function (){var statearr_29115 = state_29103;
(statearr_29115[(8)] = inst_29083);

return statearr_29115;
})();
var statearr_29116_29142 = state_29103__$1;
(statearr_29116_29142[(2)] = inst_29084);

(statearr_29116_29142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (14))){
var inst_29097 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29117_29143 = state_29103__$1;
(statearr_29117_29143[(2)] = inst_29097);

(statearr_29117_29143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (10))){
var state_29103__$1 = state_29103;
var statearr_29118_29144 = state_29103__$1;
(statearr_29118_29144[(2)] = fc);

(statearr_29118_29144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (8))){
var inst_29092 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
if(cljs.core.truth_(inst_29092)){
var statearr_29119_29145 = state_29103__$1;
(statearr_29119_29145[(1)] = (12));

} else {
var statearr_29120_29146 = state_29103__$1;
(statearr_29120_29146[(1)] = (13));

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
});})(c__28454__auto___29132,tc,fc))
;
return ((function (switch__28342__auto__,c__28454__auto___29132,tc,fc){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_29124 = [null,null,null,null,null,null,null,null,null];
(statearr_29124[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_29124[(1)] = (1));

return statearr_29124;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_29103){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_29103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e29125){if((e29125 instanceof Object)){
var ex__28346__auto__ = e29125;
var statearr_29126_29147 = state_29103;
(statearr_29126_29147[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29148 = state_29103;
state_29103 = G__29148;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___29132,tc,fc))
})();
var state__28456__auto__ = (function (){var statearr_29127 = f__28455__auto__.call(null);
(statearr_29127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___29132);

return statearr_29127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___29132,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__){
return (function (state_29212){
var state_val_29213 = (state_29212[(1)]);
if((state_val_29213 === (7))){
var inst_29208 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
var statearr_29214_29235 = state_29212__$1;
(statearr_29214_29235[(2)] = inst_29208);

(statearr_29214_29235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (1))){
var inst_29192 = init;
var state_29212__$1 = (function (){var statearr_29215 = state_29212;
(statearr_29215[(7)] = inst_29192);

return statearr_29215;
})();
var statearr_29216_29236 = state_29212__$1;
(statearr_29216_29236[(2)] = null);

(statearr_29216_29236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (4))){
var inst_29195 = (state_29212[(8)]);
var inst_29195__$1 = (state_29212[(2)]);
var inst_29196 = (inst_29195__$1 == null);
var state_29212__$1 = (function (){var statearr_29217 = state_29212;
(statearr_29217[(8)] = inst_29195__$1);

return statearr_29217;
})();
if(cljs.core.truth_(inst_29196)){
var statearr_29218_29237 = state_29212__$1;
(statearr_29218_29237[(1)] = (5));

} else {
var statearr_29219_29238 = state_29212__$1;
(statearr_29219_29238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (6))){
var inst_29195 = (state_29212[(8)]);
var inst_29192 = (state_29212[(7)]);
var inst_29199 = (state_29212[(9)]);
var inst_29199__$1 = f.call(null,inst_29192,inst_29195);
var inst_29200 = cljs.core.reduced_QMARK_.call(null,inst_29199__$1);
var state_29212__$1 = (function (){var statearr_29220 = state_29212;
(statearr_29220[(9)] = inst_29199__$1);

return statearr_29220;
})();
if(inst_29200){
var statearr_29221_29239 = state_29212__$1;
(statearr_29221_29239[(1)] = (8));

} else {
var statearr_29222_29240 = state_29212__$1;
(statearr_29222_29240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (3))){
var inst_29210 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29212__$1,inst_29210);
} else {
if((state_val_29213 === (2))){
var state_29212__$1 = state_29212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29212__$1,(4),ch);
} else {
if((state_val_29213 === (9))){
var inst_29199 = (state_29212[(9)]);
var inst_29192 = inst_29199;
var state_29212__$1 = (function (){var statearr_29223 = state_29212;
(statearr_29223[(7)] = inst_29192);

return statearr_29223;
})();
var statearr_29224_29241 = state_29212__$1;
(statearr_29224_29241[(2)] = null);

(statearr_29224_29241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (5))){
var inst_29192 = (state_29212[(7)]);
var state_29212__$1 = state_29212;
var statearr_29225_29242 = state_29212__$1;
(statearr_29225_29242[(2)] = inst_29192);

(statearr_29225_29242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (10))){
var inst_29206 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
var statearr_29226_29243 = state_29212__$1;
(statearr_29226_29243[(2)] = inst_29206);

(statearr_29226_29243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (8))){
var inst_29199 = (state_29212[(9)]);
var inst_29202 = cljs.core.deref.call(null,inst_29199);
var state_29212__$1 = state_29212;
var statearr_29227_29244 = state_29212__$1;
(statearr_29227_29244[(2)] = inst_29202);

(statearr_29227_29244[(1)] = (10));


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
});})(c__28454__auto__))
;
return ((function (switch__28342__auto__,c__28454__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28343__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28343__auto____0 = (function (){
var statearr_29231 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29231[(0)] = cljs$core$async$reduce_$_state_machine__28343__auto__);

(statearr_29231[(1)] = (1));

return statearr_29231;
});
var cljs$core$async$reduce_$_state_machine__28343__auto____1 = (function (state_29212){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_29212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e29232){if((e29232 instanceof Object)){
var ex__28346__auto__ = e29232;
var statearr_29233_29245 = state_29212;
(statearr_29233_29245[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29246 = state_29212;
state_29212 = G__29246;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28343__auto__ = function(state_29212){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28343__auto____1.call(this,state_29212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28343__auto____0;
cljs$core$async$reduce_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28343__auto____1;
return cljs$core$async$reduce_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__))
})();
var state__28456__auto__ = (function (){var statearr_29234 = f__28455__auto__.call(null);
(statearr_29234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_29234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__))
);

return c__28454__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29247 = [];
var len__25117__auto___29299 = arguments.length;
var i__25118__auto___29300 = (0);
while(true){
if((i__25118__auto___29300 < len__25117__auto___29299)){
args29247.push((arguments[i__25118__auto___29300]));

var G__29301 = (i__25118__auto___29300 + (1));
i__25118__auto___29300 = G__29301;
continue;
} else {
}
break;
}

var G__29249 = args29247.length;
switch (G__29249) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29247.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__){
return (function (state_29274){
var state_val_29275 = (state_29274[(1)]);
if((state_val_29275 === (7))){
var inst_29256 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29276_29303 = state_29274__$1;
(statearr_29276_29303[(2)] = inst_29256);

(statearr_29276_29303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (1))){
var inst_29250 = cljs.core.seq.call(null,coll);
var inst_29251 = inst_29250;
var state_29274__$1 = (function (){var statearr_29277 = state_29274;
(statearr_29277[(7)] = inst_29251);

return statearr_29277;
})();
var statearr_29278_29304 = state_29274__$1;
(statearr_29278_29304[(2)] = null);

(statearr_29278_29304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (4))){
var inst_29251 = (state_29274[(7)]);
var inst_29254 = cljs.core.first.call(null,inst_29251);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29274__$1,(7),ch,inst_29254);
} else {
if((state_val_29275 === (13))){
var inst_29268 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29279_29305 = state_29274__$1;
(statearr_29279_29305[(2)] = inst_29268);

(statearr_29279_29305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (6))){
var inst_29259 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
if(cljs.core.truth_(inst_29259)){
var statearr_29280_29306 = state_29274__$1;
(statearr_29280_29306[(1)] = (8));

} else {
var statearr_29281_29307 = state_29274__$1;
(statearr_29281_29307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (3))){
var inst_29272 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29274__$1,inst_29272);
} else {
if((state_val_29275 === (12))){
var state_29274__$1 = state_29274;
var statearr_29282_29308 = state_29274__$1;
(statearr_29282_29308[(2)] = null);

(statearr_29282_29308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (2))){
var inst_29251 = (state_29274[(7)]);
var state_29274__$1 = state_29274;
if(cljs.core.truth_(inst_29251)){
var statearr_29283_29309 = state_29274__$1;
(statearr_29283_29309[(1)] = (4));

} else {
var statearr_29284_29310 = state_29274__$1;
(statearr_29284_29310[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (11))){
var inst_29265 = cljs.core.async.close_BANG_.call(null,ch);
var state_29274__$1 = state_29274;
var statearr_29285_29311 = state_29274__$1;
(statearr_29285_29311[(2)] = inst_29265);

(statearr_29285_29311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (9))){
var state_29274__$1 = state_29274;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29286_29312 = state_29274__$1;
(statearr_29286_29312[(1)] = (11));

} else {
var statearr_29287_29313 = state_29274__$1;
(statearr_29287_29313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (5))){
var inst_29251 = (state_29274[(7)]);
var state_29274__$1 = state_29274;
var statearr_29288_29314 = state_29274__$1;
(statearr_29288_29314[(2)] = inst_29251);

(statearr_29288_29314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (10))){
var inst_29270 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29289_29315 = state_29274__$1;
(statearr_29289_29315[(2)] = inst_29270);

(statearr_29289_29315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (8))){
var inst_29251 = (state_29274[(7)]);
var inst_29261 = cljs.core.next.call(null,inst_29251);
var inst_29251__$1 = inst_29261;
var state_29274__$1 = (function (){var statearr_29290 = state_29274;
(statearr_29290[(7)] = inst_29251__$1);

return statearr_29290;
})();
var statearr_29291_29316 = state_29274__$1;
(statearr_29291_29316[(2)] = null);

(statearr_29291_29316[(1)] = (2));


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
});})(c__28454__auto__))
;
return ((function (switch__28342__auto__,c__28454__auto__){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_29295 = [null,null,null,null,null,null,null,null];
(statearr_29295[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_29295[(1)] = (1));

return statearr_29295;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_29274){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_29274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e29296){if((e29296 instanceof Object)){
var ex__28346__auto__ = e29296;
var statearr_29297_29317 = state_29274;
(statearr_29297_29317[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29318 = state_29274;
state_29274 = G__29318;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_29274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_29274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__))
})();
var state__28456__auto__ = (function (){var statearr_29298 = f__28455__auto__.call(null);
(statearr_29298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_29298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__))
);

return c__28454__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__24710__auto__ = (((_ == null))?null:_);
var m__24711__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,_);
} else {
var m__24711__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__24710__auto__ = (((m == null))?null:m);
var m__24711__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__24711__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__24710__auto__ = (((m == null))?null:m);
var m__24711__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,m,ch);
} else {
var m__24711__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__24710__auto__ = (((m == null))?null:m);
var m__24711__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,m);
} else {
var m__24711__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29540 = (function (mult,ch,cs,meta29541){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29541 = meta29541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29542,meta29541__$1){
var self__ = this;
var _29542__$1 = this;
return (new cljs.core.async.t_cljs$core$async29540(self__.mult,self__.ch,self__.cs,meta29541__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29542){
var self__ = this;
var _29542__$1 = this;
return self__.meta29541;
});})(cs))
;

cljs.core.async.t_cljs$core$async29540.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29540.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29540.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29540.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29540.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29540.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29541","meta29541",875816618,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29540";

cljs.core.async.t_cljs$core$async29540.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async29540");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29540 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29540(mult__$1,ch__$1,cs__$1,meta29541){
return (new cljs.core.async.t_cljs$core$async29540(mult__$1,ch__$1,cs__$1,meta29541));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29540(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28454__auto___29761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___29761,cs,m,dchan,dctr,done){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___29761,cs,m,dchan,dctr,done){
return (function (state_29673){
var state_val_29674 = (state_29673[(1)]);
if((state_val_29674 === (7))){
var inst_29669 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29675_29762 = state_29673__$1;
(statearr_29675_29762[(2)] = inst_29669);

(statearr_29675_29762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (20))){
var inst_29574 = (state_29673[(7)]);
var inst_29584 = cljs.core.first.call(null,inst_29574);
var inst_29585 = cljs.core.nth.call(null,inst_29584,(0),null);
var inst_29586 = cljs.core.nth.call(null,inst_29584,(1),null);
var state_29673__$1 = (function (){var statearr_29676 = state_29673;
(statearr_29676[(8)] = inst_29585);

return statearr_29676;
})();
if(cljs.core.truth_(inst_29586)){
var statearr_29677_29763 = state_29673__$1;
(statearr_29677_29763[(1)] = (22));

} else {
var statearr_29678_29764 = state_29673__$1;
(statearr_29678_29764[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (27))){
var inst_29614 = (state_29673[(9)]);
var inst_29616 = (state_29673[(10)]);
var inst_29545 = (state_29673[(11)]);
var inst_29621 = (state_29673[(12)]);
var inst_29621__$1 = cljs.core._nth.call(null,inst_29614,inst_29616);
var inst_29622 = cljs.core.async.put_BANG_.call(null,inst_29621__$1,inst_29545,done);
var state_29673__$1 = (function (){var statearr_29679 = state_29673;
(statearr_29679[(12)] = inst_29621__$1);

return statearr_29679;
})();
if(cljs.core.truth_(inst_29622)){
var statearr_29680_29765 = state_29673__$1;
(statearr_29680_29765[(1)] = (30));

} else {
var statearr_29681_29766 = state_29673__$1;
(statearr_29681_29766[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (1))){
var state_29673__$1 = state_29673;
var statearr_29682_29767 = state_29673__$1;
(statearr_29682_29767[(2)] = null);

(statearr_29682_29767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (24))){
var inst_29574 = (state_29673[(7)]);
var inst_29591 = (state_29673[(2)]);
var inst_29592 = cljs.core.next.call(null,inst_29574);
var inst_29554 = inst_29592;
var inst_29555 = null;
var inst_29556 = (0);
var inst_29557 = (0);
var state_29673__$1 = (function (){var statearr_29683 = state_29673;
(statearr_29683[(13)] = inst_29554);

(statearr_29683[(14)] = inst_29591);

(statearr_29683[(15)] = inst_29557);

(statearr_29683[(16)] = inst_29556);

(statearr_29683[(17)] = inst_29555);

return statearr_29683;
})();
var statearr_29684_29768 = state_29673__$1;
(statearr_29684_29768[(2)] = null);

(statearr_29684_29768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (39))){
var state_29673__$1 = state_29673;
var statearr_29688_29769 = state_29673__$1;
(statearr_29688_29769[(2)] = null);

(statearr_29688_29769[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (4))){
var inst_29545 = (state_29673[(11)]);
var inst_29545__$1 = (state_29673[(2)]);
var inst_29546 = (inst_29545__$1 == null);
var state_29673__$1 = (function (){var statearr_29689 = state_29673;
(statearr_29689[(11)] = inst_29545__$1);

return statearr_29689;
})();
if(cljs.core.truth_(inst_29546)){
var statearr_29690_29770 = state_29673__$1;
(statearr_29690_29770[(1)] = (5));

} else {
var statearr_29691_29771 = state_29673__$1;
(statearr_29691_29771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (15))){
var inst_29554 = (state_29673[(13)]);
var inst_29557 = (state_29673[(15)]);
var inst_29556 = (state_29673[(16)]);
var inst_29555 = (state_29673[(17)]);
var inst_29570 = (state_29673[(2)]);
var inst_29571 = (inst_29557 + (1));
var tmp29685 = inst_29554;
var tmp29686 = inst_29556;
var tmp29687 = inst_29555;
var inst_29554__$1 = tmp29685;
var inst_29555__$1 = tmp29687;
var inst_29556__$1 = tmp29686;
var inst_29557__$1 = inst_29571;
var state_29673__$1 = (function (){var statearr_29692 = state_29673;
(statearr_29692[(13)] = inst_29554__$1);

(statearr_29692[(18)] = inst_29570);

(statearr_29692[(15)] = inst_29557__$1);

(statearr_29692[(16)] = inst_29556__$1);

(statearr_29692[(17)] = inst_29555__$1);

return statearr_29692;
})();
var statearr_29693_29772 = state_29673__$1;
(statearr_29693_29772[(2)] = null);

(statearr_29693_29772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (21))){
var inst_29595 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29697_29773 = state_29673__$1;
(statearr_29697_29773[(2)] = inst_29595);

(statearr_29697_29773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (31))){
var inst_29621 = (state_29673[(12)]);
var inst_29625 = done.call(null,null);
var inst_29626 = cljs.core.async.untap_STAR_.call(null,m,inst_29621);
var state_29673__$1 = (function (){var statearr_29698 = state_29673;
(statearr_29698[(19)] = inst_29625);

return statearr_29698;
})();
var statearr_29699_29774 = state_29673__$1;
(statearr_29699_29774[(2)] = inst_29626);

(statearr_29699_29774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (32))){
var inst_29615 = (state_29673[(20)]);
var inst_29614 = (state_29673[(9)]);
var inst_29613 = (state_29673[(21)]);
var inst_29616 = (state_29673[(10)]);
var inst_29628 = (state_29673[(2)]);
var inst_29629 = (inst_29616 + (1));
var tmp29694 = inst_29615;
var tmp29695 = inst_29614;
var tmp29696 = inst_29613;
var inst_29613__$1 = tmp29696;
var inst_29614__$1 = tmp29695;
var inst_29615__$1 = tmp29694;
var inst_29616__$1 = inst_29629;
var state_29673__$1 = (function (){var statearr_29700 = state_29673;
(statearr_29700[(20)] = inst_29615__$1);

(statearr_29700[(9)] = inst_29614__$1);

(statearr_29700[(21)] = inst_29613__$1);

(statearr_29700[(10)] = inst_29616__$1);

(statearr_29700[(22)] = inst_29628);

return statearr_29700;
})();
var statearr_29701_29775 = state_29673__$1;
(statearr_29701_29775[(2)] = null);

(statearr_29701_29775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (40))){
var inst_29641 = (state_29673[(23)]);
var inst_29645 = done.call(null,null);
var inst_29646 = cljs.core.async.untap_STAR_.call(null,m,inst_29641);
var state_29673__$1 = (function (){var statearr_29702 = state_29673;
(statearr_29702[(24)] = inst_29645);

return statearr_29702;
})();
var statearr_29703_29776 = state_29673__$1;
(statearr_29703_29776[(2)] = inst_29646);

(statearr_29703_29776[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (33))){
var inst_29632 = (state_29673[(25)]);
var inst_29634 = cljs.core.chunked_seq_QMARK_.call(null,inst_29632);
var state_29673__$1 = state_29673;
if(inst_29634){
var statearr_29704_29777 = state_29673__$1;
(statearr_29704_29777[(1)] = (36));

} else {
var statearr_29705_29778 = state_29673__$1;
(statearr_29705_29778[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (13))){
var inst_29564 = (state_29673[(26)]);
var inst_29567 = cljs.core.async.close_BANG_.call(null,inst_29564);
var state_29673__$1 = state_29673;
var statearr_29706_29779 = state_29673__$1;
(statearr_29706_29779[(2)] = inst_29567);

(statearr_29706_29779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (22))){
var inst_29585 = (state_29673[(8)]);
var inst_29588 = cljs.core.async.close_BANG_.call(null,inst_29585);
var state_29673__$1 = state_29673;
var statearr_29707_29780 = state_29673__$1;
(statearr_29707_29780[(2)] = inst_29588);

(statearr_29707_29780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (36))){
var inst_29632 = (state_29673[(25)]);
var inst_29636 = cljs.core.chunk_first.call(null,inst_29632);
var inst_29637 = cljs.core.chunk_rest.call(null,inst_29632);
var inst_29638 = cljs.core.count.call(null,inst_29636);
var inst_29613 = inst_29637;
var inst_29614 = inst_29636;
var inst_29615 = inst_29638;
var inst_29616 = (0);
var state_29673__$1 = (function (){var statearr_29708 = state_29673;
(statearr_29708[(20)] = inst_29615);

(statearr_29708[(9)] = inst_29614);

(statearr_29708[(21)] = inst_29613);

(statearr_29708[(10)] = inst_29616);

return statearr_29708;
})();
var statearr_29709_29781 = state_29673__$1;
(statearr_29709_29781[(2)] = null);

(statearr_29709_29781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (41))){
var inst_29632 = (state_29673[(25)]);
var inst_29648 = (state_29673[(2)]);
var inst_29649 = cljs.core.next.call(null,inst_29632);
var inst_29613 = inst_29649;
var inst_29614 = null;
var inst_29615 = (0);
var inst_29616 = (0);
var state_29673__$1 = (function (){var statearr_29710 = state_29673;
(statearr_29710[(20)] = inst_29615);

(statearr_29710[(27)] = inst_29648);

(statearr_29710[(9)] = inst_29614);

(statearr_29710[(21)] = inst_29613);

(statearr_29710[(10)] = inst_29616);

return statearr_29710;
})();
var statearr_29711_29782 = state_29673__$1;
(statearr_29711_29782[(2)] = null);

(statearr_29711_29782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (43))){
var state_29673__$1 = state_29673;
var statearr_29712_29783 = state_29673__$1;
(statearr_29712_29783[(2)] = null);

(statearr_29712_29783[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (29))){
var inst_29657 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29713_29784 = state_29673__$1;
(statearr_29713_29784[(2)] = inst_29657);

(statearr_29713_29784[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (44))){
var inst_29666 = (state_29673[(2)]);
var state_29673__$1 = (function (){var statearr_29714 = state_29673;
(statearr_29714[(28)] = inst_29666);

return statearr_29714;
})();
var statearr_29715_29785 = state_29673__$1;
(statearr_29715_29785[(2)] = null);

(statearr_29715_29785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (6))){
var inst_29605 = (state_29673[(29)]);
var inst_29604 = cljs.core.deref.call(null,cs);
var inst_29605__$1 = cljs.core.keys.call(null,inst_29604);
var inst_29606 = cljs.core.count.call(null,inst_29605__$1);
var inst_29607 = cljs.core.reset_BANG_.call(null,dctr,inst_29606);
var inst_29612 = cljs.core.seq.call(null,inst_29605__$1);
var inst_29613 = inst_29612;
var inst_29614 = null;
var inst_29615 = (0);
var inst_29616 = (0);
var state_29673__$1 = (function (){var statearr_29716 = state_29673;
(statearr_29716[(20)] = inst_29615);

(statearr_29716[(9)] = inst_29614);

(statearr_29716[(21)] = inst_29613);

(statearr_29716[(29)] = inst_29605__$1);

(statearr_29716[(10)] = inst_29616);

(statearr_29716[(30)] = inst_29607);

return statearr_29716;
})();
var statearr_29717_29786 = state_29673__$1;
(statearr_29717_29786[(2)] = null);

(statearr_29717_29786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (28))){
var inst_29632 = (state_29673[(25)]);
var inst_29613 = (state_29673[(21)]);
var inst_29632__$1 = cljs.core.seq.call(null,inst_29613);
var state_29673__$1 = (function (){var statearr_29718 = state_29673;
(statearr_29718[(25)] = inst_29632__$1);

return statearr_29718;
})();
if(inst_29632__$1){
var statearr_29719_29787 = state_29673__$1;
(statearr_29719_29787[(1)] = (33));

} else {
var statearr_29720_29788 = state_29673__$1;
(statearr_29720_29788[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (25))){
var inst_29615 = (state_29673[(20)]);
var inst_29616 = (state_29673[(10)]);
var inst_29618 = (inst_29616 < inst_29615);
var inst_29619 = inst_29618;
var state_29673__$1 = state_29673;
if(cljs.core.truth_(inst_29619)){
var statearr_29721_29789 = state_29673__$1;
(statearr_29721_29789[(1)] = (27));

} else {
var statearr_29722_29790 = state_29673__$1;
(statearr_29722_29790[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (34))){
var state_29673__$1 = state_29673;
var statearr_29723_29791 = state_29673__$1;
(statearr_29723_29791[(2)] = null);

(statearr_29723_29791[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (17))){
var state_29673__$1 = state_29673;
var statearr_29724_29792 = state_29673__$1;
(statearr_29724_29792[(2)] = null);

(statearr_29724_29792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (3))){
var inst_29671 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29673__$1,inst_29671);
} else {
if((state_val_29674 === (12))){
var inst_29600 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29725_29793 = state_29673__$1;
(statearr_29725_29793[(2)] = inst_29600);

(statearr_29725_29793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (2))){
var state_29673__$1 = state_29673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29673__$1,(4),ch);
} else {
if((state_val_29674 === (23))){
var state_29673__$1 = state_29673;
var statearr_29726_29794 = state_29673__$1;
(statearr_29726_29794[(2)] = null);

(statearr_29726_29794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (35))){
var inst_29655 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29727_29795 = state_29673__$1;
(statearr_29727_29795[(2)] = inst_29655);

(statearr_29727_29795[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (19))){
var inst_29574 = (state_29673[(7)]);
var inst_29578 = cljs.core.chunk_first.call(null,inst_29574);
var inst_29579 = cljs.core.chunk_rest.call(null,inst_29574);
var inst_29580 = cljs.core.count.call(null,inst_29578);
var inst_29554 = inst_29579;
var inst_29555 = inst_29578;
var inst_29556 = inst_29580;
var inst_29557 = (0);
var state_29673__$1 = (function (){var statearr_29728 = state_29673;
(statearr_29728[(13)] = inst_29554);

(statearr_29728[(15)] = inst_29557);

(statearr_29728[(16)] = inst_29556);

(statearr_29728[(17)] = inst_29555);

return statearr_29728;
})();
var statearr_29729_29796 = state_29673__$1;
(statearr_29729_29796[(2)] = null);

(statearr_29729_29796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (11))){
var inst_29554 = (state_29673[(13)]);
var inst_29574 = (state_29673[(7)]);
var inst_29574__$1 = cljs.core.seq.call(null,inst_29554);
var state_29673__$1 = (function (){var statearr_29730 = state_29673;
(statearr_29730[(7)] = inst_29574__$1);

return statearr_29730;
})();
if(inst_29574__$1){
var statearr_29731_29797 = state_29673__$1;
(statearr_29731_29797[(1)] = (16));

} else {
var statearr_29732_29798 = state_29673__$1;
(statearr_29732_29798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (9))){
var inst_29602 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29733_29799 = state_29673__$1;
(statearr_29733_29799[(2)] = inst_29602);

(statearr_29733_29799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (5))){
var inst_29552 = cljs.core.deref.call(null,cs);
var inst_29553 = cljs.core.seq.call(null,inst_29552);
var inst_29554 = inst_29553;
var inst_29555 = null;
var inst_29556 = (0);
var inst_29557 = (0);
var state_29673__$1 = (function (){var statearr_29734 = state_29673;
(statearr_29734[(13)] = inst_29554);

(statearr_29734[(15)] = inst_29557);

(statearr_29734[(16)] = inst_29556);

(statearr_29734[(17)] = inst_29555);

return statearr_29734;
})();
var statearr_29735_29800 = state_29673__$1;
(statearr_29735_29800[(2)] = null);

(statearr_29735_29800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (14))){
var state_29673__$1 = state_29673;
var statearr_29736_29801 = state_29673__$1;
(statearr_29736_29801[(2)] = null);

(statearr_29736_29801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (45))){
var inst_29663 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29737_29802 = state_29673__$1;
(statearr_29737_29802[(2)] = inst_29663);

(statearr_29737_29802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (26))){
var inst_29605 = (state_29673[(29)]);
var inst_29659 = (state_29673[(2)]);
var inst_29660 = cljs.core.seq.call(null,inst_29605);
var state_29673__$1 = (function (){var statearr_29738 = state_29673;
(statearr_29738[(31)] = inst_29659);

return statearr_29738;
})();
if(inst_29660){
var statearr_29739_29803 = state_29673__$1;
(statearr_29739_29803[(1)] = (42));

} else {
var statearr_29740_29804 = state_29673__$1;
(statearr_29740_29804[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (16))){
var inst_29574 = (state_29673[(7)]);
var inst_29576 = cljs.core.chunked_seq_QMARK_.call(null,inst_29574);
var state_29673__$1 = state_29673;
if(inst_29576){
var statearr_29741_29805 = state_29673__$1;
(statearr_29741_29805[(1)] = (19));

} else {
var statearr_29742_29806 = state_29673__$1;
(statearr_29742_29806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (38))){
var inst_29652 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29743_29807 = state_29673__$1;
(statearr_29743_29807[(2)] = inst_29652);

(statearr_29743_29807[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (30))){
var state_29673__$1 = state_29673;
var statearr_29744_29808 = state_29673__$1;
(statearr_29744_29808[(2)] = null);

(statearr_29744_29808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (10))){
var inst_29557 = (state_29673[(15)]);
var inst_29555 = (state_29673[(17)]);
var inst_29563 = cljs.core._nth.call(null,inst_29555,inst_29557);
var inst_29564 = cljs.core.nth.call(null,inst_29563,(0),null);
var inst_29565 = cljs.core.nth.call(null,inst_29563,(1),null);
var state_29673__$1 = (function (){var statearr_29745 = state_29673;
(statearr_29745[(26)] = inst_29564);

return statearr_29745;
})();
if(cljs.core.truth_(inst_29565)){
var statearr_29746_29809 = state_29673__$1;
(statearr_29746_29809[(1)] = (13));

} else {
var statearr_29747_29810 = state_29673__$1;
(statearr_29747_29810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (18))){
var inst_29598 = (state_29673[(2)]);
var state_29673__$1 = state_29673;
var statearr_29748_29811 = state_29673__$1;
(statearr_29748_29811[(2)] = inst_29598);

(statearr_29748_29811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (42))){
var state_29673__$1 = state_29673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29673__$1,(45),dchan);
} else {
if((state_val_29674 === (37))){
var inst_29632 = (state_29673[(25)]);
var inst_29641 = (state_29673[(23)]);
var inst_29545 = (state_29673[(11)]);
var inst_29641__$1 = cljs.core.first.call(null,inst_29632);
var inst_29642 = cljs.core.async.put_BANG_.call(null,inst_29641__$1,inst_29545,done);
var state_29673__$1 = (function (){var statearr_29749 = state_29673;
(statearr_29749[(23)] = inst_29641__$1);

return statearr_29749;
})();
if(cljs.core.truth_(inst_29642)){
var statearr_29750_29812 = state_29673__$1;
(statearr_29750_29812[(1)] = (39));

} else {
var statearr_29751_29813 = state_29673__$1;
(statearr_29751_29813[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29674 === (8))){
var inst_29557 = (state_29673[(15)]);
var inst_29556 = (state_29673[(16)]);
var inst_29559 = (inst_29557 < inst_29556);
var inst_29560 = inst_29559;
var state_29673__$1 = state_29673;
if(cljs.core.truth_(inst_29560)){
var statearr_29752_29814 = state_29673__$1;
(statearr_29752_29814[(1)] = (10));

} else {
var statearr_29753_29815 = state_29673__$1;
(statearr_29753_29815[(1)] = (11));

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
});})(c__28454__auto___29761,cs,m,dchan,dctr,done))
;
return ((function (switch__28342__auto__,c__28454__auto___29761,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28343__auto__ = null;
var cljs$core$async$mult_$_state_machine__28343__auto____0 = (function (){
var statearr_29757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29757[(0)] = cljs$core$async$mult_$_state_machine__28343__auto__);

(statearr_29757[(1)] = (1));

return statearr_29757;
});
var cljs$core$async$mult_$_state_machine__28343__auto____1 = (function (state_29673){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_29673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e29758){if((e29758 instanceof Object)){
var ex__28346__auto__ = e29758;
var statearr_29759_29816 = state_29673;
(statearr_29759_29816[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29817 = state_29673;
state_29673 = G__29817;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28343__auto__ = function(state_29673){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28343__auto____1.call(this,state_29673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28343__auto____0;
cljs$core$async$mult_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28343__auto____1;
return cljs$core$async$mult_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___29761,cs,m,dchan,dctr,done))
})();
var state__28456__auto__ = (function (){var statearr_29760 = f__28455__auto__.call(null);
(statearr_29760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___29761);

return statearr_29760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___29761,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29818 = [];
var len__25117__auto___29821 = arguments.length;
var i__25118__auto___29822 = (0);
while(true){
if((i__25118__auto___29822 < len__25117__auto___29821)){
args29818.push((arguments[i__25118__auto___29822]));

var G__29823 = (i__25118__auto___29822 + (1));
i__25118__auto___29822 = G__29823;
continue;
} else {
}
break;
}

var G__29820 = args29818.length;
switch (G__29820) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29818.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__24710__auto__ = (((m == null))?null:m);
var m__24711__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,m,ch);
} else {
var m__24711__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__24710__auto__ = (((m == null))?null:m);
var m__24711__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,m,ch);
} else {
var m__24711__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__24710__auto__ = (((m == null))?null:m);
var m__24711__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,m);
} else {
var m__24711__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__24710__auto__ = (((m == null))?null:m);
var m__24711__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,m,state_map);
} else {
var m__24711__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__24710__auto__ = (((m == null))?null:m);
var m__24711__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,m,mode);
} else {
var m__24711__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25124__auto__ = [];
var len__25117__auto___29835 = arguments.length;
var i__25118__auto___29836 = (0);
while(true){
if((i__25118__auto___29836 < len__25117__auto___29835)){
args__25124__auto__.push((arguments[i__25118__auto___29836]));

var G__29837 = (i__25118__auto___29836 + (1));
i__25118__auto___29836 = G__29837;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((3) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25125__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29829){
var map__29830 = p__29829;
var map__29830__$1 = ((((!((map__29830 == null)))?((((map__29830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29830):map__29830);
var opts = map__29830__$1;
var statearr_29832_29838 = state;
(statearr_29832_29838[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29830,map__29830__$1,opts){
return (function (val){
var statearr_29833_29839 = state;
(statearr_29833_29839[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29830,map__29830__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29834_29840 = state;
(statearr_29834_29840[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29825){
var G__29826 = cljs.core.first.call(null,seq29825);
var seq29825__$1 = cljs.core.next.call(null,seq29825);
var G__29827 = cljs.core.first.call(null,seq29825__$1);
var seq29825__$2 = cljs.core.next.call(null,seq29825__$1);
var G__29828 = cljs.core.first.call(null,seq29825__$2);
var seq29825__$3 = cljs.core.next.call(null,seq29825__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29826,G__29827,G__29828,seq29825__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30004 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30005){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30005 = meta30005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30006,meta30005__$1){
var self__ = this;
var _30006__$1 = this;
return (new cljs.core.async.t_cljs$core$async30004(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30005__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30006){
var self__ = this;
var _30006__$1 = this;
return self__.meta30005;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30005","meta30005",-958728132,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30004";

cljs.core.async.t_cljs$core$async30004.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async30004");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30004 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30004(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30005){
return (new cljs.core.async.t_cljs$core$async30004(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30005));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30004(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28454__auto___30167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___30167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___30167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30104){
var state_val_30105 = (state_30104[(1)]);
if((state_val_30105 === (7))){
var inst_30022 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30106_30168 = state_30104__$1;
(statearr_30106_30168[(2)] = inst_30022);

(statearr_30106_30168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (20))){
var inst_30034 = (state_30104[(7)]);
var state_30104__$1 = state_30104;
var statearr_30107_30169 = state_30104__$1;
(statearr_30107_30169[(2)] = inst_30034);

(statearr_30107_30169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (27))){
var state_30104__$1 = state_30104;
var statearr_30108_30170 = state_30104__$1;
(statearr_30108_30170[(2)] = null);

(statearr_30108_30170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (1))){
var inst_30010 = (state_30104[(8)]);
var inst_30010__$1 = calc_state.call(null);
var inst_30012 = (inst_30010__$1 == null);
var inst_30013 = cljs.core.not.call(null,inst_30012);
var state_30104__$1 = (function (){var statearr_30109 = state_30104;
(statearr_30109[(8)] = inst_30010__$1);

return statearr_30109;
})();
if(inst_30013){
var statearr_30110_30171 = state_30104__$1;
(statearr_30110_30171[(1)] = (2));

} else {
var statearr_30111_30172 = state_30104__$1;
(statearr_30111_30172[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (24))){
var inst_30078 = (state_30104[(9)]);
var inst_30057 = (state_30104[(10)]);
var inst_30064 = (state_30104[(11)]);
var inst_30078__$1 = inst_30057.call(null,inst_30064);
var state_30104__$1 = (function (){var statearr_30112 = state_30104;
(statearr_30112[(9)] = inst_30078__$1);

return statearr_30112;
})();
if(cljs.core.truth_(inst_30078__$1)){
var statearr_30113_30173 = state_30104__$1;
(statearr_30113_30173[(1)] = (29));

} else {
var statearr_30114_30174 = state_30104__$1;
(statearr_30114_30174[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (4))){
var inst_30025 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30025)){
var statearr_30115_30175 = state_30104__$1;
(statearr_30115_30175[(1)] = (8));

} else {
var statearr_30116_30176 = state_30104__$1;
(statearr_30116_30176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (15))){
var inst_30051 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30051)){
var statearr_30117_30177 = state_30104__$1;
(statearr_30117_30177[(1)] = (19));

} else {
var statearr_30118_30178 = state_30104__$1;
(statearr_30118_30178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (21))){
var inst_30056 = (state_30104[(12)]);
var inst_30056__$1 = (state_30104[(2)]);
var inst_30057 = cljs.core.get.call(null,inst_30056__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30058 = cljs.core.get.call(null,inst_30056__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30059 = cljs.core.get.call(null,inst_30056__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30104__$1 = (function (){var statearr_30119 = state_30104;
(statearr_30119[(12)] = inst_30056__$1);

(statearr_30119[(10)] = inst_30057);

(statearr_30119[(13)] = inst_30058);

return statearr_30119;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30104__$1,(22),inst_30059);
} else {
if((state_val_30105 === (31))){
var inst_30086 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30086)){
var statearr_30120_30179 = state_30104__$1;
(statearr_30120_30179[(1)] = (32));

} else {
var statearr_30121_30180 = state_30104__$1;
(statearr_30121_30180[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (32))){
var inst_30063 = (state_30104[(14)]);
var state_30104__$1 = state_30104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30104__$1,(35),out,inst_30063);
} else {
if((state_val_30105 === (33))){
var inst_30056 = (state_30104[(12)]);
var inst_30034 = inst_30056;
var state_30104__$1 = (function (){var statearr_30122 = state_30104;
(statearr_30122[(7)] = inst_30034);

return statearr_30122;
})();
var statearr_30123_30181 = state_30104__$1;
(statearr_30123_30181[(2)] = null);

(statearr_30123_30181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (13))){
var inst_30034 = (state_30104[(7)]);
var inst_30041 = inst_30034.cljs$lang$protocol_mask$partition0$;
var inst_30042 = (inst_30041 & (64));
var inst_30043 = inst_30034.cljs$core$ISeq$;
var inst_30044 = (inst_30042) || (inst_30043);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30044)){
var statearr_30124_30182 = state_30104__$1;
(statearr_30124_30182[(1)] = (16));

} else {
var statearr_30125_30183 = state_30104__$1;
(statearr_30125_30183[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (22))){
var inst_30063 = (state_30104[(14)]);
var inst_30064 = (state_30104[(11)]);
var inst_30062 = (state_30104[(2)]);
var inst_30063__$1 = cljs.core.nth.call(null,inst_30062,(0),null);
var inst_30064__$1 = cljs.core.nth.call(null,inst_30062,(1),null);
var inst_30065 = (inst_30063__$1 == null);
var inst_30066 = cljs.core._EQ_.call(null,inst_30064__$1,change);
var inst_30067 = (inst_30065) || (inst_30066);
var state_30104__$1 = (function (){var statearr_30126 = state_30104;
(statearr_30126[(14)] = inst_30063__$1);

(statearr_30126[(11)] = inst_30064__$1);

return statearr_30126;
})();
if(cljs.core.truth_(inst_30067)){
var statearr_30127_30184 = state_30104__$1;
(statearr_30127_30184[(1)] = (23));

} else {
var statearr_30128_30185 = state_30104__$1;
(statearr_30128_30185[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (36))){
var inst_30056 = (state_30104[(12)]);
var inst_30034 = inst_30056;
var state_30104__$1 = (function (){var statearr_30129 = state_30104;
(statearr_30129[(7)] = inst_30034);

return statearr_30129;
})();
var statearr_30130_30186 = state_30104__$1;
(statearr_30130_30186[(2)] = null);

(statearr_30130_30186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (29))){
var inst_30078 = (state_30104[(9)]);
var state_30104__$1 = state_30104;
var statearr_30131_30187 = state_30104__$1;
(statearr_30131_30187[(2)] = inst_30078);

(statearr_30131_30187[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (6))){
var state_30104__$1 = state_30104;
var statearr_30132_30188 = state_30104__$1;
(statearr_30132_30188[(2)] = false);

(statearr_30132_30188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (28))){
var inst_30074 = (state_30104[(2)]);
var inst_30075 = calc_state.call(null);
var inst_30034 = inst_30075;
var state_30104__$1 = (function (){var statearr_30133 = state_30104;
(statearr_30133[(15)] = inst_30074);

(statearr_30133[(7)] = inst_30034);

return statearr_30133;
})();
var statearr_30134_30189 = state_30104__$1;
(statearr_30134_30189[(2)] = null);

(statearr_30134_30189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (25))){
var inst_30100 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30135_30190 = state_30104__$1;
(statearr_30135_30190[(2)] = inst_30100);

(statearr_30135_30190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (34))){
var inst_30098 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30136_30191 = state_30104__$1;
(statearr_30136_30191[(2)] = inst_30098);

(statearr_30136_30191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (17))){
var state_30104__$1 = state_30104;
var statearr_30137_30192 = state_30104__$1;
(statearr_30137_30192[(2)] = false);

(statearr_30137_30192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (3))){
var state_30104__$1 = state_30104;
var statearr_30138_30193 = state_30104__$1;
(statearr_30138_30193[(2)] = false);

(statearr_30138_30193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (12))){
var inst_30102 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30104__$1,inst_30102);
} else {
if((state_val_30105 === (2))){
var inst_30010 = (state_30104[(8)]);
var inst_30015 = inst_30010.cljs$lang$protocol_mask$partition0$;
var inst_30016 = (inst_30015 & (64));
var inst_30017 = inst_30010.cljs$core$ISeq$;
var inst_30018 = (inst_30016) || (inst_30017);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30018)){
var statearr_30139_30194 = state_30104__$1;
(statearr_30139_30194[(1)] = (5));

} else {
var statearr_30140_30195 = state_30104__$1;
(statearr_30140_30195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (23))){
var inst_30063 = (state_30104[(14)]);
var inst_30069 = (inst_30063 == null);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30069)){
var statearr_30141_30196 = state_30104__$1;
(statearr_30141_30196[(1)] = (26));

} else {
var statearr_30142_30197 = state_30104__$1;
(statearr_30142_30197[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (35))){
var inst_30089 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30089)){
var statearr_30143_30198 = state_30104__$1;
(statearr_30143_30198[(1)] = (36));

} else {
var statearr_30144_30199 = state_30104__$1;
(statearr_30144_30199[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (19))){
var inst_30034 = (state_30104[(7)]);
var inst_30053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30034);
var state_30104__$1 = state_30104;
var statearr_30145_30200 = state_30104__$1;
(statearr_30145_30200[(2)] = inst_30053);

(statearr_30145_30200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (11))){
var inst_30034 = (state_30104[(7)]);
var inst_30038 = (inst_30034 == null);
var inst_30039 = cljs.core.not.call(null,inst_30038);
var state_30104__$1 = state_30104;
if(inst_30039){
var statearr_30146_30201 = state_30104__$1;
(statearr_30146_30201[(1)] = (13));

} else {
var statearr_30147_30202 = state_30104__$1;
(statearr_30147_30202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (9))){
var inst_30010 = (state_30104[(8)]);
var state_30104__$1 = state_30104;
var statearr_30148_30203 = state_30104__$1;
(statearr_30148_30203[(2)] = inst_30010);

(statearr_30148_30203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (5))){
var state_30104__$1 = state_30104;
var statearr_30149_30204 = state_30104__$1;
(statearr_30149_30204[(2)] = true);

(statearr_30149_30204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (14))){
var state_30104__$1 = state_30104;
var statearr_30150_30205 = state_30104__$1;
(statearr_30150_30205[(2)] = false);

(statearr_30150_30205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (26))){
var inst_30064 = (state_30104[(11)]);
var inst_30071 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30064);
var state_30104__$1 = state_30104;
var statearr_30151_30206 = state_30104__$1;
(statearr_30151_30206[(2)] = inst_30071);

(statearr_30151_30206[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (16))){
var state_30104__$1 = state_30104;
var statearr_30152_30207 = state_30104__$1;
(statearr_30152_30207[(2)] = true);

(statearr_30152_30207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (38))){
var inst_30094 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30153_30208 = state_30104__$1;
(statearr_30153_30208[(2)] = inst_30094);

(statearr_30153_30208[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (30))){
var inst_30057 = (state_30104[(10)]);
var inst_30064 = (state_30104[(11)]);
var inst_30058 = (state_30104[(13)]);
var inst_30081 = cljs.core.empty_QMARK_.call(null,inst_30057);
var inst_30082 = inst_30058.call(null,inst_30064);
var inst_30083 = cljs.core.not.call(null,inst_30082);
var inst_30084 = (inst_30081) && (inst_30083);
var state_30104__$1 = state_30104;
var statearr_30154_30209 = state_30104__$1;
(statearr_30154_30209[(2)] = inst_30084);

(statearr_30154_30209[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (10))){
var inst_30010 = (state_30104[(8)]);
var inst_30030 = (state_30104[(2)]);
var inst_30031 = cljs.core.get.call(null,inst_30030,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30032 = cljs.core.get.call(null,inst_30030,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30033 = cljs.core.get.call(null,inst_30030,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30034 = inst_30010;
var state_30104__$1 = (function (){var statearr_30155 = state_30104;
(statearr_30155[(16)] = inst_30032);

(statearr_30155[(17)] = inst_30033);

(statearr_30155[(18)] = inst_30031);

(statearr_30155[(7)] = inst_30034);

return statearr_30155;
})();
var statearr_30156_30210 = state_30104__$1;
(statearr_30156_30210[(2)] = null);

(statearr_30156_30210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (18))){
var inst_30048 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30157_30211 = state_30104__$1;
(statearr_30157_30211[(2)] = inst_30048);

(statearr_30157_30211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (37))){
var state_30104__$1 = state_30104;
var statearr_30158_30212 = state_30104__$1;
(statearr_30158_30212[(2)] = null);

(statearr_30158_30212[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (8))){
var inst_30010 = (state_30104[(8)]);
var inst_30027 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30010);
var state_30104__$1 = state_30104;
var statearr_30159_30213 = state_30104__$1;
(statearr_30159_30213[(2)] = inst_30027);

(statearr_30159_30213[(1)] = (10));


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
});})(c__28454__auto___30167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28342__auto__,c__28454__auto___30167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28343__auto__ = null;
var cljs$core$async$mix_$_state_machine__28343__auto____0 = (function (){
var statearr_30163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30163[(0)] = cljs$core$async$mix_$_state_machine__28343__auto__);

(statearr_30163[(1)] = (1));

return statearr_30163;
});
var cljs$core$async$mix_$_state_machine__28343__auto____1 = (function (state_30104){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_30104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e30164){if((e30164 instanceof Object)){
var ex__28346__auto__ = e30164;
var statearr_30165_30214 = state_30104;
(statearr_30165_30214[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30215 = state_30104;
state_30104 = G__30215;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28343__auto__ = function(state_30104){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28343__auto____1.call(this,state_30104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28343__auto____0;
cljs$core$async$mix_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28343__auto____1;
return cljs$core$async$mix_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___30167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28456__auto__ = (function (){var statearr_30166 = f__28455__auto__.call(null);
(statearr_30166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___30167);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___30167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__24710__auto__ = (((p == null))?null:p);
var m__24711__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__24711__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__24710__auto__ = (((p == null))?null:p);
var m__24711__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,p,v,ch);
} else {
var m__24711__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30216 = [];
var len__25117__auto___30219 = arguments.length;
var i__25118__auto___30220 = (0);
while(true){
if((i__25118__auto___30220 < len__25117__auto___30219)){
args30216.push((arguments[i__25118__auto___30220]));

var G__30221 = (i__25118__auto___30220 + (1));
i__25118__auto___30220 = G__30221;
continue;
} else {
}
break;
}

var G__30218 = args30216.length;
switch (G__30218) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30216.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24710__auto__ = (((p == null))?null:p);
var m__24711__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,p);
} else {
var m__24711__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__24710__auto__ = (((p == null))?null:p);
var m__24711__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24710__auto__)]);
if(!((m__24711__auto__ == null))){
return m__24711__auto__.call(null,p,v);
} else {
var m__24711__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24711__auto____$1 == null))){
return m__24711__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30224 = [];
var len__25117__auto___30349 = arguments.length;
var i__25118__auto___30350 = (0);
while(true){
if((i__25118__auto___30350 < len__25117__auto___30349)){
args30224.push((arguments[i__25118__auto___30350]));

var G__30351 = (i__25118__auto___30350 + (1));
i__25118__auto___30350 = G__30351;
continue;
} else {
}
break;
}

var G__30226 = args30224.length;
switch (G__30226) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30224.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24047__auto__,mults){
return (function (p1__30223_SHARP_){
if(cljs.core.truth_(p1__30223_SHARP_.call(null,topic))){
return p1__30223_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30223_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30227 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30228){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30228 = meta30228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30229,meta30228__$1){
var self__ = this;
var _30229__$1 = this;
return (new cljs.core.async.t_cljs$core$async30227(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30228__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30229){
var self__ = this;
var _30229__$1 = this;
return self__.meta30228;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30227.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30228","meta30228",1225255545,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30227";

cljs.core.async.t_cljs$core$async30227.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async30227");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30227 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30227(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30228){
return (new cljs.core.async.t_cljs$core$async30227(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30228));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30227(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28454__auto___30353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___30353,mults,ensure_mult,p){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___30353,mults,ensure_mult,p){
return (function (state_30301){
var state_val_30302 = (state_30301[(1)]);
if((state_val_30302 === (7))){
var inst_30297 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30303_30354 = state_30301__$1;
(statearr_30303_30354[(2)] = inst_30297);

(statearr_30303_30354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (20))){
var state_30301__$1 = state_30301;
var statearr_30304_30355 = state_30301__$1;
(statearr_30304_30355[(2)] = null);

(statearr_30304_30355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (1))){
var state_30301__$1 = state_30301;
var statearr_30305_30356 = state_30301__$1;
(statearr_30305_30356[(2)] = null);

(statearr_30305_30356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (24))){
var inst_30280 = (state_30301[(7)]);
var inst_30289 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30280);
var state_30301__$1 = state_30301;
var statearr_30306_30357 = state_30301__$1;
(statearr_30306_30357[(2)] = inst_30289);

(statearr_30306_30357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (4))){
var inst_30232 = (state_30301[(8)]);
var inst_30232__$1 = (state_30301[(2)]);
var inst_30233 = (inst_30232__$1 == null);
var state_30301__$1 = (function (){var statearr_30307 = state_30301;
(statearr_30307[(8)] = inst_30232__$1);

return statearr_30307;
})();
if(cljs.core.truth_(inst_30233)){
var statearr_30308_30358 = state_30301__$1;
(statearr_30308_30358[(1)] = (5));

} else {
var statearr_30309_30359 = state_30301__$1;
(statearr_30309_30359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (15))){
var inst_30274 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30310_30360 = state_30301__$1;
(statearr_30310_30360[(2)] = inst_30274);

(statearr_30310_30360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (21))){
var inst_30294 = (state_30301[(2)]);
var state_30301__$1 = (function (){var statearr_30311 = state_30301;
(statearr_30311[(9)] = inst_30294);

return statearr_30311;
})();
var statearr_30312_30361 = state_30301__$1;
(statearr_30312_30361[(2)] = null);

(statearr_30312_30361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (13))){
var inst_30256 = (state_30301[(10)]);
var inst_30258 = cljs.core.chunked_seq_QMARK_.call(null,inst_30256);
var state_30301__$1 = state_30301;
if(inst_30258){
var statearr_30313_30362 = state_30301__$1;
(statearr_30313_30362[(1)] = (16));

} else {
var statearr_30314_30363 = state_30301__$1;
(statearr_30314_30363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (22))){
var inst_30286 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
if(cljs.core.truth_(inst_30286)){
var statearr_30315_30364 = state_30301__$1;
(statearr_30315_30364[(1)] = (23));

} else {
var statearr_30316_30365 = state_30301__$1;
(statearr_30316_30365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (6))){
var inst_30232 = (state_30301[(8)]);
var inst_30282 = (state_30301[(11)]);
var inst_30280 = (state_30301[(7)]);
var inst_30280__$1 = topic_fn.call(null,inst_30232);
var inst_30281 = cljs.core.deref.call(null,mults);
var inst_30282__$1 = cljs.core.get.call(null,inst_30281,inst_30280__$1);
var state_30301__$1 = (function (){var statearr_30317 = state_30301;
(statearr_30317[(11)] = inst_30282__$1);

(statearr_30317[(7)] = inst_30280__$1);

return statearr_30317;
})();
if(cljs.core.truth_(inst_30282__$1)){
var statearr_30318_30366 = state_30301__$1;
(statearr_30318_30366[(1)] = (19));

} else {
var statearr_30319_30367 = state_30301__$1;
(statearr_30319_30367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (25))){
var inst_30291 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30320_30368 = state_30301__$1;
(statearr_30320_30368[(2)] = inst_30291);

(statearr_30320_30368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (17))){
var inst_30256 = (state_30301[(10)]);
var inst_30265 = cljs.core.first.call(null,inst_30256);
var inst_30266 = cljs.core.async.muxch_STAR_.call(null,inst_30265);
var inst_30267 = cljs.core.async.close_BANG_.call(null,inst_30266);
var inst_30268 = cljs.core.next.call(null,inst_30256);
var inst_30242 = inst_30268;
var inst_30243 = null;
var inst_30244 = (0);
var inst_30245 = (0);
var state_30301__$1 = (function (){var statearr_30321 = state_30301;
(statearr_30321[(12)] = inst_30245);

(statearr_30321[(13)] = inst_30242);

(statearr_30321[(14)] = inst_30243);

(statearr_30321[(15)] = inst_30244);

(statearr_30321[(16)] = inst_30267);

return statearr_30321;
})();
var statearr_30322_30369 = state_30301__$1;
(statearr_30322_30369[(2)] = null);

(statearr_30322_30369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (3))){
var inst_30299 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30301__$1,inst_30299);
} else {
if((state_val_30302 === (12))){
var inst_30276 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30323_30370 = state_30301__$1;
(statearr_30323_30370[(2)] = inst_30276);

(statearr_30323_30370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (2))){
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30301__$1,(4),ch);
} else {
if((state_val_30302 === (23))){
var state_30301__$1 = state_30301;
var statearr_30324_30371 = state_30301__$1;
(statearr_30324_30371[(2)] = null);

(statearr_30324_30371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (19))){
var inst_30232 = (state_30301[(8)]);
var inst_30282 = (state_30301[(11)]);
var inst_30284 = cljs.core.async.muxch_STAR_.call(null,inst_30282);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30301__$1,(22),inst_30284,inst_30232);
} else {
if((state_val_30302 === (11))){
var inst_30242 = (state_30301[(13)]);
var inst_30256 = (state_30301[(10)]);
var inst_30256__$1 = cljs.core.seq.call(null,inst_30242);
var state_30301__$1 = (function (){var statearr_30325 = state_30301;
(statearr_30325[(10)] = inst_30256__$1);

return statearr_30325;
})();
if(inst_30256__$1){
var statearr_30326_30372 = state_30301__$1;
(statearr_30326_30372[(1)] = (13));

} else {
var statearr_30327_30373 = state_30301__$1;
(statearr_30327_30373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (9))){
var inst_30278 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30328_30374 = state_30301__$1;
(statearr_30328_30374[(2)] = inst_30278);

(statearr_30328_30374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (5))){
var inst_30239 = cljs.core.deref.call(null,mults);
var inst_30240 = cljs.core.vals.call(null,inst_30239);
var inst_30241 = cljs.core.seq.call(null,inst_30240);
var inst_30242 = inst_30241;
var inst_30243 = null;
var inst_30244 = (0);
var inst_30245 = (0);
var state_30301__$1 = (function (){var statearr_30329 = state_30301;
(statearr_30329[(12)] = inst_30245);

(statearr_30329[(13)] = inst_30242);

(statearr_30329[(14)] = inst_30243);

(statearr_30329[(15)] = inst_30244);

return statearr_30329;
})();
var statearr_30330_30375 = state_30301__$1;
(statearr_30330_30375[(2)] = null);

(statearr_30330_30375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (14))){
var state_30301__$1 = state_30301;
var statearr_30334_30376 = state_30301__$1;
(statearr_30334_30376[(2)] = null);

(statearr_30334_30376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (16))){
var inst_30256 = (state_30301[(10)]);
var inst_30260 = cljs.core.chunk_first.call(null,inst_30256);
var inst_30261 = cljs.core.chunk_rest.call(null,inst_30256);
var inst_30262 = cljs.core.count.call(null,inst_30260);
var inst_30242 = inst_30261;
var inst_30243 = inst_30260;
var inst_30244 = inst_30262;
var inst_30245 = (0);
var state_30301__$1 = (function (){var statearr_30335 = state_30301;
(statearr_30335[(12)] = inst_30245);

(statearr_30335[(13)] = inst_30242);

(statearr_30335[(14)] = inst_30243);

(statearr_30335[(15)] = inst_30244);

return statearr_30335;
})();
var statearr_30336_30377 = state_30301__$1;
(statearr_30336_30377[(2)] = null);

(statearr_30336_30377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (10))){
var inst_30245 = (state_30301[(12)]);
var inst_30242 = (state_30301[(13)]);
var inst_30243 = (state_30301[(14)]);
var inst_30244 = (state_30301[(15)]);
var inst_30250 = cljs.core._nth.call(null,inst_30243,inst_30245);
var inst_30251 = cljs.core.async.muxch_STAR_.call(null,inst_30250);
var inst_30252 = cljs.core.async.close_BANG_.call(null,inst_30251);
var inst_30253 = (inst_30245 + (1));
var tmp30331 = inst_30242;
var tmp30332 = inst_30243;
var tmp30333 = inst_30244;
var inst_30242__$1 = tmp30331;
var inst_30243__$1 = tmp30332;
var inst_30244__$1 = tmp30333;
var inst_30245__$1 = inst_30253;
var state_30301__$1 = (function (){var statearr_30337 = state_30301;
(statearr_30337[(12)] = inst_30245__$1);

(statearr_30337[(13)] = inst_30242__$1);

(statearr_30337[(14)] = inst_30243__$1);

(statearr_30337[(17)] = inst_30252);

(statearr_30337[(15)] = inst_30244__$1);

return statearr_30337;
})();
var statearr_30338_30378 = state_30301__$1;
(statearr_30338_30378[(2)] = null);

(statearr_30338_30378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (18))){
var inst_30271 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30339_30379 = state_30301__$1;
(statearr_30339_30379[(2)] = inst_30271);

(statearr_30339_30379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (8))){
var inst_30245 = (state_30301[(12)]);
var inst_30244 = (state_30301[(15)]);
var inst_30247 = (inst_30245 < inst_30244);
var inst_30248 = inst_30247;
var state_30301__$1 = state_30301;
if(cljs.core.truth_(inst_30248)){
var statearr_30340_30380 = state_30301__$1;
(statearr_30340_30380[(1)] = (10));

} else {
var statearr_30341_30381 = state_30301__$1;
(statearr_30341_30381[(1)] = (11));

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
});})(c__28454__auto___30353,mults,ensure_mult,p))
;
return ((function (switch__28342__auto__,c__28454__auto___30353,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_30345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30345[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_30345[(1)] = (1));

return statearr_30345;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_30301){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_30301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e30346){if((e30346 instanceof Object)){
var ex__28346__auto__ = e30346;
var statearr_30347_30382 = state_30301;
(statearr_30347_30382[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30383 = state_30301;
state_30301 = G__30383;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_30301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_30301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___30353,mults,ensure_mult,p))
})();
var state__28456__auto__ = (function (){var statearr_30348 = f__28455__auto__.call(null);
(statearr_30348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___30353);

return statearr_30348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___30353,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30384 = [];
var len__25117__auto___30387 = arguments.length;
var i__25118__auto___30388 = (0);
while(true){
if((i__25118__auto___30388 < len__25117__auto___30387)){
args30384.push((arguments[i__25118__auto___30388]));

var G__30389 = (i__25118__auto___30388 + (1));
i__25118__auto___30388 = G__30389;
continue;
} else {
}
break;
}

var G__30386 = args30384.length;
switch (G__30386) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30384.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30391 = [];
var len__25117__auto___30394 = arguments.length;
var i__25118__auto___30395 = (0);
while(true){
if((i__25118__auto___30395 < len__25117__auto___30394)){
args30391.push((arguments[i__25118__auto___30395]));

var G__30396 = (i__25118__auto___30395 + (1));
i__25118__auto___30395 = G__30396;
continue;
} else {
}
break;
}

var G__30393 = args30391.length;
switch (G__30393) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30391.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30398 = [];
var len__25117__auto___30469 = arguments.length;
var i__25118__auto___30470 = (0);
while(true){
if((i__25118__auto___30470 < len__25117__auto___30469)){
args30398.push((arguments[i__25118__auto___30470]));

var G__30471 = (i__25118__auto___30470 + (1));
i__25118__auto___30470 = G__30471;
continue;
} else {
}
break;
}

var G__30400 = args30398.length;
switch (G__30400) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30398.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28454__auto___30473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___30473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___30473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30439){
var state_val_30440 = (state_30439[(1)]);
if((state_val_30440 === (7))){
var state_30439__$1 = state_30439;
var statearr_30441_30474 = state_30439__$1;
(statearr_30441_30474[(2)] = null);

(statearr_30441_30474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (1))){
var state_30439__$1 = state_30439;
var statearr_30442_30475 = state_30439__$1;
(statearr_30442_30475[(2)] = null);

(statearr_30442_30475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (4))){
var inst_30403 = (state_30439[(7)]);
var inst_30405 = (inst_30403 < cnt);
var state_30439__$1 = state_30439;
if(cljs.core.truth_(inst_30405)){
var statearr_30443_30476 = state_30439__$1;
(statearr_30443_30476[(1)] = (6));

} else {
var statearr_30444_30477 = state_30439__$1;
(statearr_30444_30477[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (15))){
var inst_30435 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30445_30478 = state_30439__$1;
(statearr_30445_30478[(2)] = inst_30435);

(statearr_30445_30478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (13))){
var inst_30428 = cljs.core.async.close_BANG_.call(null,out);
var state_30439__$1 = state_30439;
var statearr_30446_30479 = state_30439__$1;
(statearr_30446_30479[(2)] = inst_30428);

(statearr_30446_30479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (6))){
var state_30439__$1 = state_30439;
var statearr_30447_30480 = state_30439__$1;
(statearr_30447_30480[(2)] = null);

(statearr_30447_30480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (3))){
var inst_30437 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30439__$1,inst_30437);
} else {
if((state_val_30440 === (12))){
var inst_30425 = (state_30439[(8)]);
var inst_30425__$1 = (state_30439[(2)]);
var inst_30426 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30425__$1);
var state_30439__$1 = (function (){var statearr_30448 = state_30439;
(statearr_30448[(8)] = inst_30425__$1);

return statearr_30448;
})();
if(cljs.core.truth_(inst_30426)){
var statearr_30449_30481 = state_30439__$1;
(statearr_30449_30481[(1)] = (13));

} else {
var statearr_30450_30482 = state_30439__$1;
(statearr_30450_30482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (2))){
var inst_30402 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30403 = (0);
var state_30439__$1 = (function (){var statearr_30451 = state_30439;
(statearr_30451[(7)] = inst_30403);

(statearr_30451[(9)] = inst_30402);

return statearr_30451;
})();
var statearr_30452_30483 = state_30439__$1;
(statearr_30452_30483[(2)] = null);

(statearr_30452_30483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (11))){
var inst_30403 = (state_30439[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30439,(10),Object,null,(9));
var inst_30412 = chs__$1.call(null,inst_30403);
var inst_30413 = done.call(null,inst_30403);
var inst_30414 = cljs.core.async.take_BANG_.call(null,inst_30412,inst_30413);
var state_30439__$1 = state_30439;
var statearr_30453_30484 = state_30439__$1;
(statearr_30453_30484[(2)] = inst_30414);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (9))){
var inst_30403 = (state_30439[(7)]);
var inst_30416 = (state_30439[(2)]);
var inst_30417 = (inst_30403 + (1));
var inst_30403__$1 = inst_30417;
var state_30439__$1 = (function (){var statearr_30454 = state_30439;
(statearr_30454[(10)] = inst_30416);

(statearr_30454[(7)] = inst_30403__$1);

return statearr_30454;
})();
var statearr_30455_30485 = state_30439__$1;
(statearr_30455_30485[(2)] = null);

(statearr_30455_30485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (5))){
var inst_30423 = (state_30439[(2)]);
var state_30439__$1 = (function (){var statearr_30456 = state_30439;
(statearr_30456[(11)] = inst_30423);

return statearr_30456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30439__$1,(12),dchan);
} else {
if((state_val_30440 === (14))){
var inst_30425 = (state_30439[(8)]);
var inst_30430 = cljs.core.apply.call(null,f,inst_30425);
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30439__$1,(16),out,inst_30430);
} else {
if((state_val_30440 === (16))){
var inst_30432 = (state_30439[(2)]);
var state_30439__$1 = (function (){var statearr_30457 = state_30439;
(statearr_30457[(12)] = inst_30432);

return statearr_30457;
})();
var statearr_30458_30486 = state_30439__$1;
(statearr_30458_30486[(2)] = null);

(statearr_30458_30486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (10))){
var inst_30407 = (state_30439[(2)]);
var inst_30408 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30439__$1 = (function (){var statearr_30459 = state_30439;
(statearr_30459[(13)] = inst_30407);

return statearr_30459;
})();
var statearr_30460_30487 = state_30439__$1;
(statearr_30460_30487[(2)] = inst_30408);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (8))){
var inst_30421 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30461_30488 = state_30439__$1;
(statearr_30461_30488[(2)] = inst_30421);

(statearr_30461_30488[(1)] = (5));


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
});})(c__28454__auto___30473,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28342__auto__,c__28454__auto___30473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_30465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30465[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_30465[(1)] = (1));

return statearr_30465;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_30439){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_30439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e30466){if((e30466 instanceof Object)){
var ex__28346__auto__ = e30466;
var statearr_30467_30489 = state_30439;
(statearr_30467_30489[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30490 = state_30439;
state_30439 = G__30490;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_30439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_30439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___30473,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28456__auto__ = (function (){var statearr_30468 = f__28455__auto__.call(null);
(statearr_30468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___30473);

return statearr_30468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___30473,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30492 = [];
var len__25117__auto___30548 = arguments.length;
var i__25118__auto___30549 = (0);
while(true){
if((i__25118__auto___30549 < len__25117__auto___30548)){
args30492.push((arguments[i__25118__auto___30549]));

var G__30550 = (i__25118__auto___30549 + (1));
i__25118__auto___30549 = G__30550;
continue;
} else {
}
break;
}

var G__30494 = args30492.length;
switch (G__30494) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30492.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28454__auto___30552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___30552,out){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___30552,out){
return (function (state_30524){
var state_val_30525 = (state_30524[(1)]);
if((state_val_30525 === (7))){
var inst_30503 = (state_30524[(7)]);
var inst_30504 = (state_30524[(8)]);
var inst_30503__$1 = (state_30524[(2)]);
var inst_30504__$1 = cljs.core.nth.call(null,inst_30503__$1,(0),null);
var inst_30505 = cljs.core.nth.call(null,inst_30503__$1,(1),null);
var inst_30506 = (inst_30504__$1 == null);
var state_30524__$1 = (function (){var statearr_30526 = state_30524;
(statearr_30526[(7)] = inst_30503__$1);

(statearr_30526[(8)] = inst_30504__$1);

(statearr_30526[(9)] = inst_30505);

return statearr_30526;
})();
if(cljs.core.truth_(inst_30506)){
var statearr_30527_30553 = state_30524__$1;
(statearr_30527_30553[(1)] = (8));

} else {
var statearr_30528_30554 = state_30524__$1;
(statearr_30528_30554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (1))){
var inst_30495 = cljs.core.vec.call(null,chs);
var inst_30496 = inst_30495;
var state_30524__$1 = (function (){var statearr_30529 = state_30524;
(statearr_30529[(10)] = inst_30496);

return statearr_30529;
})();
var statearr_30530_30555 = state_30524__$1;
(statearr_30530_30555[(2)] = null);

(statearr_30530_30555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (4))){
var inst_30496 = (state_30524[(10)]);
var state_30524__$1 = state_30524;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30524__$1,(7),inst_30496);
} else {
if((state_val_30525 === (6))){
var inst_30520 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
var statearr_30531_30556 = state_30524__$1;
(statearr_30531_30556[(2)] = inst_30520);

(statearr_30531_30556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (3))){
var inst_30522 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30524__$1,inst_30522);
} else {
if((state_val_30525 === (2))){
var inst_30496 = (state_30524[(10)]);
var inst_30498 = cljs.core.count.call(null,inst_30496);
var inst_30499 = (inst_30498 > (0));
var state_30524__$1 = state_30524;
if(cljs.core.truth_(inst_30499)){
var statearr_30533_30557 = state_30524__$1;
(statearr_30533_30557[(1)] = (4));

} else {
var statearr_30534_30558 = state_30524__$1;
(statearr_30534_30558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (11))){
var inst_30496 = (state_30524[(10)]);
var inst_30513 = (state_30524[(2)]);
var tmp30532 = inst_30496;
var inst_30496__$1 = tmp30532;
var state_30524__$1 = (function (){var statearr_30535 = state_30524;
(statearr_30535[(10)] = inst_30496__$1);

(statearr_30535[(11)] = inst_30513);

return statearr_30535;
})();
var statearr_30536_30559 = state_30524__$1;
(statearr_30536_30559[(2)] = null);

(statearr_30536_30559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (9))){
var inst_30504 = (state_30524[(8)]);
var state_30524__$1 = state_30524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30524__$1,(11),out,inst_30504);
} else {
if((state_val_30525 === (5))){
var inst_30518 = cljs.core.async.close_BANG_.call(null,out);
var state_30524__$1 = state_30524;
var statearr_30537_30560 = state_30524__$1;
(statearr_30537_30560[(2)] = inst_30518);

(statearr_30537_30560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (10))){
var inst_30516 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
var statearr_30538_30561 = state_30524__$1;
(statearr_30538_30561[(2)] = inst_30516);

(statearr_30538_30561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (8))){
var inst_30503 = (state_30524[(7)]);
var inst_30504 = (state_30524[(8)]);
var inst_30496 = (state_30524[(10)]);
var inst_30505 = (state_30524[(9)]);
var inst_30508 = (function (){var cs = inst_30496;
var vec__30501 = inst_30503;
var v = inst_30504;
var c = inst_30505;
return ((function (cs,vec__30501,v,c,inst_30503,inst_30504,inst_30496,inst_30505,state_val_30525,c__28454__auto___30552,out){
return (function (p1__30491_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30491_SHARP_);
});
;})(cs,vec__30501,v,c,inst_30503,inst_30504,inst_30496,inst_30505,state_val_30525,c__28454__auto___30552,out))
})();
var inst_30509 = cljs.core.filterv.call(null,inst_30508,inst_30496);
var inst_30496__$1 = inst_30509;
var state_30524__$1 = (function (){var statearr_30539 = state_30524;
(statearr_30539[(10)] = inst_30496__$1);

return statearr_30539;
})();
var statearr_30540_30562 = state_30524__$1;
(statearr_30540_30562[(2)] = null);

(statearr_30540_30562[(1)] = (2));


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
});})(c__28454__auto___30552,out))
;
return ((function (switch__28342__auto__,c__28454__auto___30552,out){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_30544 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30544[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_30544[(1)] = (1));

return statearr_30544;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_30524){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_30524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e30545){if((e30545 instanceof Object)){
var ex__28346__auto__ = e30545;
var statearr_30546_30563 = state_30524;
(statearr_30546_30563[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30564 = state_30524;
state_30524 = G__30564;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_30524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_30524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___30552,out))
})();
var state__28456__auto__ = (function (){var statearr_30547 = f__28455__auto__.call(null);
(statearr_30547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___30552);

return statearr_30547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___30552,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30565 = [];
var len__25117__auto___30614 = arguments.length;
var i__25118__auto___30615 = (0);
while(true){
if((i__25118__auto___30615 < len__25117__auto___30614)){
args30565.push((arguments[i__25118__auto___30615]));

var G__30616 = (i__25118__auto___30615 + (1));
i__25118__auto___30615 = G__30616;
continue;
} else {
}
break;
}

var G__30567 = args30565.length;
switch (G__30567) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30565.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28454__auto___30618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___30618,out){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___30618,out){
return (function (state_30591){
var state_val_30592 = (state_30591[(1)]);
if((state_val_30592 === (7))){
var inst_30573 = (state_30591[(7)]);
var inst_30573__$1 = (state_30591[(2)]);
var inst_30574 = (inst_30573__$1 == null);
var inst_30575 = cljs.core.not.call(null,inst_30574);
var state_30591__$1 = (function (){var statearr_30593 = state_30591;
(statearr_30593[(7)] = inst_30573__$1);

return statearr_30593;
})();
if(inst_30575){
var statearr_30594_30619 = state_30591__$1;
(statearr_30594_30619[(1)] = (8));

} else {
var statearr_30595_30620 = state_30591__$1;
(statearr_30595_30620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (1))){
var inst_30568 = (0);
var state_30591__$1 = (function (){var statearr_30596 = state_30591;
(statearr_30596[(8)] = inst_30568);

return statearr_30596;
})();
var statearr_30597_30621 = state_30591__$1;
(statearr_30597_30621[(2)] = null);

(statearr_30597_30621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (4))){
var state_30591__$1 = state_30591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30591__$1,(7),ch);
} else {
if((state_val_30592 === (6))){
var inst_30586 = (state_30591[(2)]);
var state_30591__$1 = state_30591;
var statearr_30598_30622 = state_30591__$1;
(statearr_30598_30622[(2)] = inst_30586);

(statearr_30598_30622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (3))){
var inst_30588 = (state_30591[(2)]);
var inst_30589 = cljs.core.async.close_BANG_.call(null,out);
var state_30591__$1 = (function (){var statearr_30599 = state_30591;
(statearr_30599[(9)] = inst_30588);

return statearr_30599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30591__$1,inst_30589);
} else {
if((state_val_30592 === (2))){
var inst_30568 = (state_30591[(8)]);
var inst_30570 = (inst_30568 < n);
var state_30591__$1 = state_30591;
if(cljs.core.truth_(inst_30570)){
var statearr_30600_30623 = state_30591__$1;
(statearr_30600_30623[(1)] = (4));

} else {
var statearr_30601_30624 = state_30591__$1;
(statearr_30601_30624[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (11))){
var inst_30568 = (state_30591[(8)]);
var inst_30578 = (state_30591[(2)]);
var inst_30579 = (inst_30568 + (1));
var inst_30568__$1 = inst_30579;
var state_30591__$1 = (function (){var statearr_30602 = state_30591;
(statearr_30602[(10)] = inst_30578);

(statearr_30602[(8)] = inst_30568__$1);

return statearr_30602;
})();
var statearr_30603_30625 = state_30591__$1;
(statearr_30603_30625[(2)] = null);

(statearr_30603_30625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (9))){
var state_30591__$1 = state_30591;
var statearr_30604_30626 = state_30591__$1;
(statearr_30604_30626[(2)] = null);

(statearr_30604_30626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (5))){
var state_30591__$1 = state_30591;
var statearr_30605_30627 = state_30591__$1;
(statearr_30605_30627[(2)] = null);

(statearr_30605_30627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (10))){
var inst_30583 = (state_30591[(2)]);
var state_30591__$1 = state_30591;
var statearr_30606_30628 = state_30591__$1;
(statearr_30606_30628[(2)] = inst_30583);

(statearr_30606_30628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (8))){
var inst_30573 = (state_30591[(7)]);
var state_30591__$1 = state_30591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30591__$1,(11),out,inst_30573);
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
});})(c__28454__auto___30618,out))
;
return ((function (switch__28342__auto__,c__28454__auto___30618,out){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_30610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30610[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_30610[(1)] = (1));

return statearr_30610;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_30591){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_30591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e30611){if((e30611 instanceof Object)){
var ex__28346__auto__ = e30611;
var statearr_30612_30629 = state_30591;
(statearr_30612_30629[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30630 = state_30591;
state_30591 = G__30630;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_30591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_30591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___30618,out))
})();
var state__28456__auto__ = (function (){var statearr_30613 = f__28455__auto__.call(null);
(statearr_30613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___30618);

return statearr_30613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___30618,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30638 = (function (map_LT_,f,ch,meta30639){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30639 = meta30639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30640,meta30639__$1){
var self__ = this;
var _30640__$1 = this;
return (new cljs.core.async.t_cljs$core$async30638(self__.map_LT_,self__.f,self__.ch,meta30639__$1));
});

cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30640){
var self__ = this;
var _30640__$1 = this;
return self__.meta30639;
});

cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30641 = (function (map_LT_,f,ch,meta30639,_,fn1,meta30642){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30639 = meta30639;
this._ = _;
this.fn1 = fn1;
this.meta30642 = meta30642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30643,meta30642__$1){
var self__ = this;
var _30643__$1 = this;
return (new cljs.core.async.t_cljs$core$async30641(self__.map_LT_,self__.f,self__.ch,self__.meta30639,self__._,self__.fn1,meta30642__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30643){
var self__ = this;
var _30643__$1 = this;
return self__.meta30642;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30631_SHARP_){
return f1.call(null,(((p1__30631_SHARP_ == null))?null:self__.f.call(null,p1__30631_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30641.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30639","meta30639",1496460068,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30638","cljs.core.async/t_cljs$core$async30638",-560888043,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30642","meta30642",-823973381,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30641";

cljs.core.async.t_cljs$core$async30641.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async30641");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30641 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30641(map_LT___$1,f__$1,ch__$1,meta30639__$1,___$2,fn1__$1,meta30642){
return (new cljs.core.async.t_cljs$core$async30641(map_LT___$1,f__$1,ch__$1,meta30639__$1,___$2,fn1__$1,meta30642));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30641(self__.map_LT_,self__.f,self__.ch,self__.meta30639,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24035__auto__ = ret;
if(cljs.core.truth_(and__24035__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24035__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30639","meta30639",1496460068,null)], null);
});

cljs.core.async.t_cljs$core$async30638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30638";

cljs.core.async.t_cljs$core$async30638.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async30638");
});

cljs.core.async.__GT_t_cljs$core$async30638 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30638(map_LT___$1,f__$1,ch__$1,meta30639){
return (new cljs.core.async.t_cljs$core$async30638(map_LT___$1,f__$1,ch__$1,meta30639));
});

}

return (new cljs.core.async.t_cljs$core$async30638(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30647 = (function (map_GT_,f,ch,meta30648){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30648 = meta30648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30649,meta30648__$1){
var self__ = this;
var _30649__$1 = this;
return (new cljs.core.async.t_cljs$core$async30647(self__.map_GT_,self__.f,self__.ch,meta30648__$1));
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30649){
var self__ = this;
var _30649__$1 = this;
return self__.meta30648;
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30648","meta30648",-1425907540,null)], null);
});

cljs.core.async.t_cljs$core$async30647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30647";

cljs.core.async.t_cljs$core$async30647.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async30647");
});

cljs.core.async.__GT_t_cljs$core$async30647 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30647(map_GT___$1,f__$1,ch__$1,meta30648){
return (new cljs.core.async.t_cljs$core$async30647(map_GT___$1,f__$1,ch__$1,meta30648));
});

}

return (new cljs.core.async.t_cljs$core$async30647(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30653 = (function (filter_GT_,p,ch,meta30654){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30654 = meta30654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30655,meta30654__$1){
var self__ = this;
var _30655__$1 = this;
return (new cljs.core.async.t_cljs$core$async30653(self__.filter_GT_,self__.p,self__.ch,meta30654__$1));
});

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30655){
var self__ = this;
var _30655__$1 = this;
return self__.meta30654;
});

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30654","meta30654",2086584519,null)], null);
});

cljs.core.async.t_cljs$core$async30653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30653";

cljs.core.async.t_cljs$core$async30653.cljs$lang$ctorPrWriter = (function (this__24653__auto__,writer__24654__auto__,opt__24655__auto__){
return cljs.core._write.call(null,writer__24654__auto__,"cljs.core.async/t_cljs$core$async30653");
});

cljs.core.async.__GT_t_cljs$core$async30653 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30653(filter_GT___$1,p__$1,ch__$1,meta30654){
return (new cljs.core.async.t_cljs$core$async30653(filter_GT___$1,p__$1,ch__$1,meta30654));
});

}

return (new cljs.core.async.t_cljs$core$async30653(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30656 = [];
var len__25117__auto___30700 = arguments.length;
var i__25118__auto___30701 = (0);
while(true){
if((i__25118__auto___30701 < len__25117__auto___30700)){
args30656.push((arguments[i__25118__auto___30701]));

var G__30702 = (i__25118__auto___30701 + (1));
i__25118__auto___30701 = G__30702;
continue;
} else {
}
break;
}

var G__30658 = args30656.length;
switch (G__30658) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30656.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28454__auto___30704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___30704,out){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___30704,out){
return (function (state_30679){
var state_val_30680 = (state_30679[(1)]);
if((state_val_30680 === (7))){
var inst_30675 = (state_30679[(2)]);
var state_30679__$1 = state_30679;
var statearr_30681_30705 = state_30679__$1;
(statearr_30681_30705[(2)] = inst_30675);

(statearr_30681_30705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30680 === (1))){
var state_30679__$1 = state_30679;
var statearr_30682_30706 = state_30679__$1;
(statearr_30682_30706[(2)] = null);

(statearr_30682_30706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30680 === (4))){
var inst_30661 = (state_30679[(7)]);
var inst_30661__$1 = (state_30679[(2)]);
var inst_30662 = (inst_30661__$1 == null);
var state_30679__$1 = (function (){var statearr_30683 = state_30679;
(statearr_30683[(7)] = inst_30661__$1);

return statearr_30683;
})();
if(cljs.core.truth_(inst_30662)){
var statearr_30684_30707 = state_30679__$1;
(statearr_30684_30707[(1)] = (5));

} else {
var statearr_30685_30708 = state_30679__$1;
(statearr_30685_30708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30680 === (6))){
var inst_30661 = (state_30679[(7)]);
var inst_30666 = p.call(null,inst_30661);
var state_30679__$1 = state_30679;
if(cljs.core.truth_(inst_30666)){
var statearr_30686_30709 = state_30679__$1;
(statearr_30686_30709[(1)] = (8));

} else {
var statearr_30687_30710 = state_30679__$1;
(statearr_30687_30710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30680 === (3))){
var inst_30677 = (state_30679[(2)]);
var state_30679__$1 = state_30679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30679__$1,inst_30677);
} else {
if((state_val_30680 === (2))){
var state_30679__$1 = state_30679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30679__$1,(4),ch);
} else {
if((state_val_30680 === (11))){
var inst_30669 = (state_30679[(2)]);
var state_30679__$1 = state_30679;
var statearr_30688_30711 = state_30679__$1;
(statearr_30688_30711[(2)] = inst_30669);

(statearr_30688_30711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30680 === (9))){
var state_30679__$1 = state_30679;
var statearr_30689_30712 = state_30679__$1;
(statearr_30689_30712[(2)] = null);

(statearr_30689_30712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30680 === (5))){
var inst_30664 = cljs.core.async.close_BANG_.call(null,out);
var state_30679__$1 = state_30679;
var statearr_30690_30713 = state_30679__$1;
(statearr_30690_30713[(2)] = inst_30664);

(statearr_30690_30713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30680 === (10))){
var inst_30672 = (state_30679[(2)]);
var state_30679__$1 = (function (){var statearr_30691 = state_30679;
(statearr_30691[(8)] = inst_30672);

return statearr_30691;
})();
var statearr_30692_30714 = state_30679__$1;
(statearr_30692_30714[(2)] = null);

(statearr_30692_30714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30680 === (8))){
var inst_30661 = (state_30679[(7)]);
var state_30679__$1 = state_30679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30679__$1,(11),out,inst_30661);
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
});})(c__28454__auto___30704,out))
;
return ((function (switch__28342__auto__,c__28454__auto___30704,out){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_30696 = [null,null,null,null,null,null,null,null,null];
(statearr_30696[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_30696[(1)] = (1));

return statearr_30696;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_30679){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_30679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e30697){if((e30697 instanceof Object)){
var ex__28346__auto__ = e30697;
var statearr_30698_30715 = state_30679;
(statearr_30698_30715[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30716 = state_30679;
state_30679 = G__30716;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_30679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_30679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___30704,out))
})();
var state__28456__auto__ = (function (){var statearr_30699 = f__28455__auto__.call(null);
(statearr_30699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___30704);

return statearr_30699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___30704,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30717 = [];
var len__25117__auto___30720 = arguments.length;
var i__25118__auto___30721 = (0);
while(true){
if((i__25118__auto___30721 < len__25117__auto___30720)){
args30717.push((arguments[i__25118__auto___30721]));

var G__30722 = (i__25118__auto___30721 + (1));
i__25118__auto___30721 = G__30722;
continue;
} else {
}
break;
}

var G__30719 = args30717.length;
switch (G__30719) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30717.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__){
return (function (state_30889){
var state_val_30890 = (state_30889[(1)]);
if((state_val_30890 === (7))){
var inst_30885 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30891_30932 = state_30889__$1;
(statearr_30891_30932[(2)] = inst_30885);

(statearr_30891_30932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (20))){
var inst_30855 = (state_30889[(7)]);
var inst_30866 = (state_30889[(2)]);
var inst_30867 = cljs.core.next.call(null,inst_30855);
var inst_30841 = inst_30867;
var inst_30842 = null;
var inst_30843 = (0);
var inst_30844 = (0);
var state_30889__$1 = (function (){var statearr_30892 = state_30889;
(statearr_30892[(8)] = inst_30841);

(statearr_30892[(9)] = inst_30842);

(statearr_30892[(10)] = inst_30866);

(statearr_30892[(11)] = inst_30844);

(statearr_30892[(12)] = inst_30843);

return statearr_30892;
})();
var statearr_30893_30933 = state_30889__$1;
(statearr_30893_30933[(2)] = null);

(statearr_30893_30933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (1))){
var state_30889__$1 = state_30889;
var statearr_30894_30934 = state_30889__$1;
(statearr_30894_30934[(2)] = null);

(statearr_30894_30934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (4))){
var inst_30830 = (state_30889[(13)]);
var inst_30830__$1 = (state_30889[(2)]);
var inst_30831 = (inst_30830__$1 == null);
var state_30889__$1 = (function (){var statearr_30895 = state_30889;
(statearr_30895[(13)] = inst_30830__$1);

return statearr_30895;
})();
if(cljs.core.truth_(inst_30831)){
var statearr_30896_30935 = state_30889__$1;
(statearr_30896_30935[(1)] = (5));

} else {
var statearr_30897_30936 = state_30889__$1;
(statearr_30897_30936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (15))){
var state_30889__$1 = state_30889;
var statearr_30901_30937 = state_30889__$1;
(statearr_30901_30937[(2)] = null);

(statearr_30901_30937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (21))){
var state_30889__$1 = state_30889;
var statearr_30902_30938 = state_30889__$1;
(statearr_30902_30938[(2)] = null);

(statearr_30902_30938[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (13))){
var inst_30841 = (state_30889[(8)]);
var inst_30842 = (state_30889[(9)]);
var inst_30844 = (state_30889[(11)]);
var inst_30843 = (state_30889[(12)]);
var inst_30851 = (state_30889[(2)]);
var inst_30852 = (inst_30844 + (1));
var tmp30898 = inst_30841;
var tmp30899 = inst_30842;
var tmp30900 = inst_30843;
var inst_30841__$1 = tmp30898;
var inst_30842__$1 = tmp30899;
var inst_30843__$1 = tmp30900;
var inst_30844__$1 = inst_30852;
var state_30889__$1 = (function (){var statearr_30903 = state_30889;
(statearr_30903[(8)] = inst_30841__$1);

(statearr_30903[(9)] = inst_30842__$1);

(statearr_30903[(14)] = inst_30851);

(statearr_30903[(11)] = inst_30844__$1);

(statearr_30903[(12)] = inst_30843__$1);

return statearr_30903;
})();
var statearr_30904_30939 = state_30889__$1;
(statearr_30904_30939[(2)] = null);

(statearr_30904_30939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (22))){
var state_30889__$1 = state_30889;
var statearr_30905_30940 = state_30889__$1;
(statearr_30905_30940[(2)] = null);

(statearr_30905_30940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (6))){
var inst_30830 = (state_30889[(13)]);
var inst_30839 = f.call(null,inst_30830);
var inst_30840 = cljs.core.seq.call(null,inst_30839);
var inst_30841 = inst_30840;
var inst_30842 = null;
var inst_30843 = (0);
var inst_30844 = (0);
var state_30889__$1 = (function (){var statearr_30906 = state_30889;
(statearr_30906[(8)] = inst_30841);

(statearr_30906[(9)] = inst_30842);

(statearr_30906[(11)] = inst_30844);

(statearr_30906[(12)] = inst_30843);

return statearr_30906;
})();
var statearr_30907_30941 = state_30889__$1;
(statearr_30907_30941[(2)] = null);

(statearr_30907_30941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (17))){
var inst_30855 = (state_30889[(7)]);
var inst_30859 = cljs.core.chunk_first.call(null,inst_30855);
var inst_30860 = cljs.core.chunk_rest.call(null,inst_30855);
var inst_30861 = cljs.core.count.call(null,inst_30859);
var inst_30841 = inst_30860;
var inst_30842 = inst_30859;
var inst_30843 = inst_30861;
var inst_30844 = (0);
var state_30889__$1 = (function (){var statearr_30908 = state_30889;
(statearr_30908[(8)] = inst_30841);

(statearr_30908[(9)] = inst_30842);

(statearr_30908[(11)] = inst_30844);

(statearr_30908[(12)] = inst_30843);

return statearr_30908;
})();
var statearr_30909_30942 = state_30889__$1;
(statearr_30909_30942[(2)] = null);

(statearr_30909_30942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (3))){
var inst_30887 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30889__$1,inst_30887);
} else {
if((state_val_30890 === (12))){
var inst_30875 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30910_30943 = state_30889__$1;
(statearr_30910_30943[(2)] = inst_30875);

(statearr_30910_30943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (2))){
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30889__$1,(4),in$);
} else {
if((state_val_30890 === (23))){
var inst_30883 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30911_30944 = state_30889__$1;
(statearr_30911_30944[(2)] = inst_30883);

(statearr_30911_30944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (19))){
var inst_30870 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30912_30945 = state_30889__$1;
(statearr_30912_30945[(2)] = inst_30870);

(statearr_30912_30945[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (11))){
var inst_30841 = (state_30889[(8)]);
var inst_30855 = (state_30889[(7)]);
var inst_30855__$1 = cljs.core.seq.call(null,inst_30841);
var state_30889__$1 = (function (){var statearr_30913 = state_30889;
(statearr_30913[(7)] = inst_30855__$1);

return statearr_30913;
})();
if(inst_30855__$1){
var statearr_30914_30946 = state_30889__$1;
(statearr_30914_30946[(1)] = (14));

} else {
var statearr_30915_30947 = state_30889__$1;
(statearr_30915_30947[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (9))){
var inst_30877 = (state_30889[(2)]);
var inst_30878 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30889__$1 = (function (){var statearr_30916 = state_30889;
(statearr_30916[(15)] = inst_30877);

return statearr_30916;
})();
if(cljs.core.truth_(inst_30878)){
var statearr_30917_30948 = state_30889__$1;
(statearr_30917_30948[(1)] = (21));

} else {
var statearr_30918_30949 = state_30889__$1;
(statearr_30918_30949[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (5))){
var inst_30833 = cljs.core.async.close_BANG_.call(null,out);
var state_30889__$1 = state_30889;
var statearr_30919_30950 = state_30889__$1;
(statearr_30919_30950[(2)] = inst_30833);

(statearr_30919_30950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (14))){
var inst_30855 = (state_30889[(7)]);
var inst_30857 = cljs.core.chunked_seq_QMARK_.call(null,inst_30855);
var state_30889__$1 = state_30889;
if(inst_30857){
var statearr_30920_30951 = state_30889__$1;
(statearr_30920_30951[(1)] = (17));

} else {
var statearr_30921_30952 = state_30889__$1;
(statearr_30921_30952[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (16))){
var inst_30873 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30922_30953 = state_30889__$1;
(statearr_30922_30953[(2)] = inst_30873);

(statearr_30922_30953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (10))){
var inst_30842 = (state_30889[(9)]);
var inst_30844 = (state_30889[(11)]);
var inst_30849 = cljs.core._nth.call(null,inst_30842,inst_30844);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30889__$1,(13),out,inst_30849);
} else {
if((state_val_30890 === (18))){
var inst_30855 = (state_30889[(7)]);
var inst_30864 = cljs.core.first.call(null,inst_30855);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30889__$1,(20),out,inst_30864);
} else {
if((state_val_30890 === (8))){
var inst_30844 = (state_30889[(11)]);
var inst_30843 = (state_30889[(12)]);
var inst_30846 = (inst_30844 < inst_30843);
var inst_30847 = inst_30846;
var state_30889__$1 = state_30889;
if(cljs.core.truth_(inst_30847)){
var statearr_30923_30954 = state_30889__$1;
(statearr_30923_30954[(1)] = (10));

} else {
var statearr_30924_30955 = state_30889__$1;
(statearr_30924_30955[(1)] = (11));

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
});})(c__28454__auto__))
;
return ((function (switch__28342__auto__,c__28454__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28343__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28343__auto____0 = (function (){
var statearr_30928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30928[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28343__auto__);

(statearr_30928[(1)] = (1));

return statearr_30928;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28343__auto____1 = (function (state_30889){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_30889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e30929){if((e30929 instanceof Object)){
var ex__28346__auto__ = e30929;
var statearr_30930_30956 = state_30889;
(statearr_30930_30956[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30957 = state_30889;
state_30889 = G__30957;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28343__auto__ = function(state_30889){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28343__auto____1.call(this,state_30889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28343__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28343__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__))
})();
var state__28456__auto__ = (function (){var statearr_30931 = f__28455__auto__.call(null);
(statearr_30931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_30931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__))
);

return c__28454__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30958 = [];
var len__25117__auto___30961 = arguments.length;
var i__25118__auto___30962 = (0);
while(true){
if((i__25118__auto___30962 < len__25117__auto___30961)){
args30958.push((arguments[i__25118__auto___30962]));

var G__30963 = (i__25118__auto___30962 + (1));
i__25118__auto___30962 = G__30963;
continue;
} else {
}
break;
}

var G__30960 = args30958.length;
switch (G__30960) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30958.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30965 = [];
var len__25117__auto___30968 = arguments.length;
var i__25118__auto___30969 = (0);
while(true){
if((i__25118__auto___30969 < len__25117__auto___30968)){
args30965.push((arguments[i__25118__auto___30969]));

var G__30970 = (i__25118__auto___30969 + (1));
i__25118__auto___30969 = G__30970;
continue;
} else {
}
break;
}

var G__30967 = args30965.length;
switch (G__30967) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30965.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30972 = [];
var len__25117__auto___31023 = arguments.length;
var i__25118__auto___31024 = (0);
while(true){
if((i__25118__auto___31024 < len__25117__auto___31023)){
args30972.push((arguments[i__25118__auto___31024]));

var G__31025 = (i__25118__auto___31024 + (1));
i__25118__auto___31024 = G__31025;
continue;
} else {
}
break;
}

var G__30974 = args30972.length;
switch (G__30974) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30972.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28454__auto___31027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___31027,out){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___31027,out){
return (function (state_30998){
var state_val_30999 = (state_30998[(1)]);
if((state_val_30999 === (7))){
var inst_30993 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31000_31028 = state_30998__$1;
(statearr_31000_31028[(2)] = inst_30993);

(statearr_31000_31028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (1))){
var inst_30975 = null;
var state_30998__$1 = (function (){var statearr_31001 = state_30998;
(statearr_31001[(7)] = inst_30975);

return statearr_31001;
})();
var statearr_31002_31029 = state_30998__$1;
(statearr_31002_31029[(2)] = null);

(statearr_31002_31029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (4))){
var inst_30978 = (state_30998[(8)]);
var inst_30978__$1 = (state_30998[(2)]);
var inst_30979 = (inst_30978__$1 == null);
var inst_30980 = cljs.core.not.call(null,inst_30979);
var state_30998__$1 = (function (){var statearr_31003 = state_30998;
(statearr_31003[(8)] = inst_30978__$1);

return statearr_31003;
})();
if(inst_30980){
var statearr_31004_31030 = state_30998__$1;
(statearr_31004_31030[(1)] = (5));

} else {
var statearr_31005_31031 = state_30998__$1;
(statearr_31005_31031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (6))){
var state_30998__$1 = state_30998;
var statearr_31006_31032 = state_30998__$1;
(statearr_31006_31032[(2)] = null);

(statearr_31006_31032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (3))){
var inst_30995 = (state_30998[(2)]);
var inst_30996 = cljs.core.async.close_BANG_.call(null,out);
var state_30998__$1 = (function (){var statearr_31007 = state_30998;
(statearr_31007[(9)] = inst_30995);

return statearr_31007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30998__$1,inst_30996);
} else {
if((state_val_30999 === (2))){
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30998__$1,(4),ch);
} else {
if((state_val_30999 === (11))){
var inst_30978 = (state_30998[(8)]);
var inst_30987 = (state_30998[(2)]);
var inst_30975 = inst_30978;
var state_30998__$1 = (function (){var statearr_31008 = state_30998;
(statearr_31008[(10)] = inst_30987);

(statearr_31008[(7)] = inst_30975);

return statearr_31008;
})();
var statearr_31009_31033 = state_30998__$1;
(statearr_31009_31033[(2)] = null);

(statearr_31009_31033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (9))){
var inst_30978 = (state_30998[(8)]);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30998__$1,(11),out,inst_30978);
} else {
if((state_val_30999 === (5))){
var inst_30978 = (state_30998[(8)]);
var inst_30975 = (state_30998[(7)]);
var inst_30982 = cljs.core._EQ_.call(null,inst_30978,inst_30975);
var state_30998__$1 = state_30998;
if(inst_30982){
var statearr_31011_31034 = state_30998__$1;
(statearr_31011_31034[(1)] = (8));

} else {
var statearr_31012_31035 = state_30998__$1;
(statearr_31012_31035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (10))){
var inst_30990 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31013_31036 = state_30998__$1;
(statearr_31013_31036[(2)] = inst_30990);

(statearr_31013_31036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (8))){
var inst_30975 = (state_30998[(7)]);
var tmp31010 = inst_30975;
var inst_30975__$1 = tmp31010;
var state_30998__$1 = (function (){var statearr_31014 = state_30998;
(statearr_31014[(7)] = inst_30975__$1);

return statearr_31014;
})();
var statearr_31015_31037 = state_30998__$1;
(statearr_31015_31037[(2)] = null);

(statearr_31015_31037[(1)] = (2));


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
});})(c__28454__auto___31027,out))
;
return ((function (switch__28342__auto__,c__28454__auto___31027,out){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_30998){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_30998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object)){
var ex__28346__auto__ = e31020;
var statearr_31021_31038 = state_30998;
(statearr_31021_31038[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31039 = state_30998;
state_30998 = G__31039;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_30998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_30998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___31027,out))
})();
var state__28456__auto__ = (function (){var statearr_31022 = f__28455__auto__.call(null);
(statearr_31022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___31027);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___31027,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31040 = [];
var len__25117__auto___31110 = arguments.length;
var i__25118__auto___31111 = (0);
while(true){
if((i__25118__auto___31111 < len__25117__auto___31110)){
args31040.push((arguments[i__25118__auto___31111]));

var G__31112 = (i__25118__auto___31111 + (1));
i__25118__auto___31111 = G__31112;
continue;
} else {
}
break;
}

var G__31042 = args31040.length;
switch (G__31042) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31040.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28454__auto___31114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___31114,out){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___31114,out){
return (function (state_31080){
var state_val_31081 = (state_31080[(1)]);
if((state_val_31081 === (7))){
var inst_31076 = (state_31080[(2)]);
var state_31080__$1 = state_31080;
var statearr_31082_31115 = state_31080__$1;
(statearr_31082_31115[(2)] = inst_31076);

(statearr_31082_31115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (1))){
var inst_31043 = (new Array(n));
var inst_31044 = inst_31043;
var inst_31045 = (0);
var state_31080__$1 = (function (){var statearr_31083 = state_31080;
(statearr_31083[(7)] = inst_31044);

(statearr_31083[(8)] = inst_31045);

return statearr_31083;
})();
var statearr_31084_31116 = state_31080__$1;
(statearr_31084_31116[(2)] = null);

(statearr_31084_31116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (4))){
var inst_31048 = (state_31080[(9)]);
var inst_31048__$1 = (state_31080[(2)]);
var inst_31049 = (inst_31048__$1 == null);
var inst_31050 = cljs.core.not.call(null,inst_31049);
var state_31080__$1 = (function (){var statearr_31085 = state_31080;
(statearr_31085[(9)] = inst_31048__$1);

return statearr_31085;
})();
if(inst_31050){
var statearr_31086_31117 = state_31080__$1;
(statearr_31086_31117[(1)] = (5));

} else {
var statearr_31087_31118 = state_31080__$1;
(statearr_31087_31118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (15))){
var inst_31070 = (state_31080[(2)]);
var state_31080__$1 = state_31080;
var statearr_31088_31119 = state_31080__$1;
(statearr_31088_31119[(2)] = inst_31070);

(statearr_31088_31119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (13))){
var state_31080__$1 = state_31080;
var statearr_31089_31120 = state_31080__$1;
(statearr_31089_31120[(2)] = null);

(statearr_31089_31120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (6))){
var inst_31045 = (state_31080[(8)]);
var inst_31066 = (inst_31045 > (0));
var state_31080__$1 = state_31080;
if(cljs.core.truth_(inst_31066)){
var statearr_31090_31121 = state_31080__$1;
(statearr_31090_31121[(1)] = (12));

} else {
var statearr_31091_31122 = state_31080__$1;
(statearr_31091_31122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (3))){
var inst_31078 = (state_31080[(2)]);
var state_31080__$1 = state_31080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31080__$1,inst_31078);
} else {
if((state_val_31081 === (12))){
var inst_31044 = (state_31080[(7)]);
var inst_31068 = cljs.core.vec.call(null,inst_31044);
var state_31080__$1 = state_31080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31080__$1,(15),out,inst_31068);
} else {
if((state_val_31081 === (2))){
var state_31080__$1 = state_31080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31080__$1,(4),ch);
} else {
if((state_val_31081 === (11))){
var inst_31060 = (state_31080[(2)]);
var inst_31061 = (new Array(n));
var inst_31044 = inst_31061;
var inst_31045 = (0);
var state_31080__$1 = (function (){var statearr_31092 = state_31080;
(statearr_31092[(7)] = inst_31044);

(statearr_31092[(8)] = inst_31045);

(statearr_31092[(10)] = inst_31060);

return statearr_31092;
})();
var statearr_31093_31123 = state_31080__$1;
(statearr_31093_31123[(2)] = null);

(statearr_31093_31123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (9))){
var inst_31044 = (state_31080[(7)]);
var inst_31058 = cljs.core.vec.call(null,inst_31044);
var state_31080__$1 = state_31080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31080__$1,(11),out,inst_31058);
} else {
if((state_val_31081 === (5))){
var inst_31048 = (state_31080[(9)]);
var inst_31044 = (state_31080[(7)]);
var inst_31045 = (state_31080[(8)]);
var inst_31053 = (state_31080[(11)]);
var inst_31052 = (inst_31044[inst_31045] = inst_31048);
var inst_31053__$1 = (inst_31045 + (1));
var inst_31054 = (inst_31053__$1 < n);
var state_31080__$1 = (function (){var statearr_31094 = state_31080;
(statearr_31094[(11)] = inst_31053__$1);

(statearr_31094[(12)] = inst_31052);

return statearr_31094;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31095_31124 = state_31080__$1;
(statearr_31095_31124[(1)] = (8));

} else {
var statearr_31096_31125 = state_31080__$1;
(statearr_31096_31125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (14))){
var inst_31073 = (state_31080[(2)]);
var inst_31074 = cljs.core.async.close_BANG_.call(null,out);
var state_31080__$1 = (function (){var statearr_31098 = state_31080;
(statearr_31098[(13)] = inst_31073);

return statearr_31098;
})();
var statearr_31099_31126 = state_31080__$1;
(statearr_31099_31126[(2)] = inst_31074);

(statearr_31099_31126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (10))){
var inst_31064 = (state_31080[(2)]);
var state_31080__$1 = state_31080;
var statearr_31100_31127 = state_31080__$1;
(statearr_31100_31127[(2)] = inst_31064);

(statearr_31100_31127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31081 === (8))){
var inst_31044 = (state_31080[(7)]);
var inst_31053 = (state_31080[(11)]);
var tmp31097 = inst_31044;
var inst_31044__$1 = tmp31097;
var inst_31045 = inst_31053;
var state_31080__$1 = (function (){var statearr_31101 = state_31080;
(statearr_31101[(7)] = inst_31044__$1);

(statearr_31101[(8)] = inst_31045);

return statearr_31101;
})();
var statearr_31102_31128 = state_31080__$1;
(statearr_31102_31128[(2)] = null);

(statearr_31102_31128[(1)] = (2));


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
});})(c__28454__auto___31114,out))
;
return ((function (switch__28342__auto__,c__28454__auto___31114,out){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_31106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31106[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_31106[(1)] = (1));

return statearr_31106;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_31080){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_31080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e31107){if((e31107 instanceof Object)){
var ex__28346__auto__ = e31107;
var statearr_31108_31129 = state_31080;
(statearr_31108_31129[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31130 = state_31080;
state_31080 = G__31130;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_31080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_31080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___31114,out))
})();
var state__28456__auto__ = (function (){var statearr_31109 = f__28455__auto__.call(null);
(statearr_31109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___31114);

return statearr_31109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___31114,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31131 = [];
var len__25117__auto___31205 = arguments.length;
var i__25118__auto___31206 = (0);
while(true){
if((i__25118__auto___31206 < len__25117__auto___31205)){
args31131.push((arguments[i__25118__auto___31206]));

var G__31207 = (i__25118__auto___31206 + (1));
i__25118__auto___31206 = G__31207;
continue;
} else {
}
break;
}

var G__31133 = args31131.length;
switch (G__31133) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31131.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28454__auto___31209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___31209,out){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___31209,out){
return (function (state_31175){
var state_val_31176 = (state_31175[(1)]);
if((state_val_31176 === (7))){
var inst_31171 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31177_31210 = state_31175__$1;
(statearr_31177_31210[(2)] = inst_31171);

(statearr_31177_31210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (1))){
var inst_31134 = [];
var inst_31135 = inst_31134;
var inst_31136 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31175__$1 = (function (){var statearr_31178 = state_31175;
(statearr_31178[(7)] = inst_31135);

(statearr_31178[(8)] = inst_31136);

return statearr_31178;
})();
var statearr_31179_31211 = state_31175__$1;
(statearr_31179_31211[(2)] = null);

(statearr_31179_31211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (4))){
var inst_31139 = (state_31175[(9)]);
var inst_31139__$1 = (state_31175[(2)]);
var inst_31140 = (inst_31139__$1 == null);
var inst_31141 = cljs.core.not.call(null,inst_31140);
var state_31175__$1 = (function (){var statearr_31180 = state_31175;
(statearr_31180[(9)] = inst_31139__$1);

return statearr_31180;
})();
if(inst_31141){
var statearr_31181_31212 = state_31175__$1;
(statearr_31181_31212[(1)] = (5));

} else {
var statearr_31182_31213 = state_31175__$1;
(statearr_31182_31213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (15))){
var inst_31165 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31183_31214 = state_31175__$1;
(statearr_31183_31214[(2)] = inst_31165);

(statearr_31183_31214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (13))){
var state_31175__$1 = state_31175;
var statearr_31184_31215 = state_31175__$1;
(statearr_31184_31215[(2)] = null);

(statearr_31184_31215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (6))){
var inst_31135 = (state_31175[(7)]);
var inst_31160 = inst_31135.length;
var inst_31161 = (inst_31160 > (0));
var state_31175__$1 = state_31175;
if(cljs.core.truth_(inst_31161)){
var statearr_31185_31216 = state_31175__$1;
(statearr_31185_31216[(1)] = (12));

} else {
var statearr_31186_31217 = state_31175__$1;
(statearr_31186_31217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (3))){
var inst_31173 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31175__$1,inst_31173);
} else {
if((state_val_31176 === (12))){
var inst_31135 = (state_31175[(7)]);
var inst_31163 = cljs.core.vec.call(null,inst_31135);
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31175__$1,(15),out,inst_31163);
} else {
if((state_val_31176 === (2))){
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31175__$1,(4),ch);
} else {
if((state_val_31176 === (11))){
var inst_31139 = (state_31175[(9)]);
var inst_31143 = (state_31175[(10)]);
var inst_31153 = (state_31175[(2)]);
var inst_31154 = [];
var inst_31155 = inst_31154.push(inst_31139);
var inst_31135 = inst_31154;
var inst_31136 = inst_31143;
var state_31175__$1 = (function (){var statearr_31187 = state_31175;
(statearr_31187[(7)] = inst_31135);

(statearr_31187[(8)] = inst_31136);

(statearr_31187[(11)] = inst_31153);

(statearr_31187[(12)] = inst_31155);

return statearr_31187;
})();
var statearr_31188_31218 = state_31175__$1;
(statearr_31188_31218[(2)] = null);

(statearr_31188_31218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (9))){
var inst_31135 = (state_31175[(7)]);
var inst_31151 = cljs.core.vec.call(null,inst_31135);
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31175__$1,(11),out,inst_31151);
} else {
if((state_val_31176 === (5))){
var inst_31139 = (state_31175[(9)]);
var inst_31143 = (state_31175[(10)]);
var inst_31136 = (state_31175[(8)]);
var inst_31143__$1 = f.call(null,inst_31139);
var inst_31144 = cljs.core._EQ_.call(null,inst_31143__$1,inst_31136);
var inst_31145 = cljs.core.keyword_identical_QMARK_.call(null,inst_31136,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31146 = (inst_31144) || (inst_31145);
var state_31175__$1 = (function (){var statearr_31189 = state_31175;
(statearr_31189[(10)] = inst_31143__$1);

return statearr_31189;
})();
if(cljs.core.truth_(inst_31146)){
var statearr_31190_31219 = state_31175__$1;
(statearr_31190_31219[(1)] = (8));

} else {
var statearr_31191_31220 = state_31175__$1;
(statearr_31191_31220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (14))){
var inst_31168 = (state_31175[(2)]);
var inst_31169 = cljs.core.async.close_BANG_.call(null,out);
var state_31175__$1 = (function (){var statearr_31193 = state_31175;
(statearr_31193[(13)] = inst_31168);

return statearr_31193;
})();
var statearr_31194_31221 = state_31175__$1;
(statearr_31194_31221[(2)] = inst_31169);

(statearr_31194_31221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (10))){
var inst_31158 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31195_31222 = state_31175__$1;
(statearr_31195_31222[(2)] = inst_31158);

(statearr_31195_31222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (8))){
var inst_31139 = (state_31175[(9)]);
var inst_31135 = (state_31175[(7)]);
var inst_31143 = (state_31175[(10)]);
var inst_31148 = inst_31135.push(inst_31139);
var tmp31192 = inst_31135;
var inst_31135__$1 = tmp31192;
var inst_31136 = inst_31143;
var state_31175__$1 = (function (){var statearr_31196 = state_31175;
(statearr_31196[(7)] = inst_31135__$1);

(statearr_31196[(8)] = inst_31136);

(statearr_31196[(14)] = inst_31148);

return statearr_31196;
})();
var statearr_31197_31223 = state_31175__$1;
(statearr_31197_31223[(2)] = null);

(statearr_31197_31223[(1)] = (2));


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
});})(c__28454__auto___31209,out))
;
return ((function (switch__28342__auto__,c__28454__auto___31209,out){
return (function() {
var cljs$core$async$state_machine__28343__auto__ = null;
var cljs$core$async$state_machine__28343__auto____0 = (function (){
var statearr_31201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31201[(0)] = cljs$core$async$state_machine__28343__auto__);

(statearr_31201[(1)] = (1));

return statearr_31201;
});
var cljs$core$async$state_machine__28343__auto____1 = (function (state_31175){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_31175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e31202){if((e31202 instanceof Object)){
var ex__28346__auto__ = e31202;
var statearr_31203_31224 = state_31175;
(statearr_31203_31224[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31225 = state_31175;
state_31175 = G__31225;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
cljs$core$async$state_machine__28343__auto__ = function(state_31175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28343__auto____1.call(this,state_31175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28343__auto____0;
cljs$core$async$state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28343__auto____1;
return cljs$core$async$state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___31209,out))
})();
var state__28456__auto__ = (function (){var statearr_31204 = f__28455__auto__.call(null);
(statearr_31204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___31209);

return statearr_31204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___31209,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map