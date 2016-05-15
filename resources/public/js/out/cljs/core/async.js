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
var args23555 = [];
var len__22320__auto___23561 = arguments.length;
var i__22321__auto___23562 = (0);
while(true){
if((i__22321__auto___23562 < len__22320__auto___23561)){
args23555.push((arguments[i__22321__auto___23562]));

var G__23563 = (i__22321__auto___23562 + (1));
i__22321__auto___23562 = G__23563;
continue;
} else {
}
break;
}

var G__23557 = args23555.length;
switch (G__23557) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23555.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23558 = (function (f,blockable,meta23559){
this.f = f;
this.blockable = blockable;
this.meta23559 = meta23559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23560,meta23559__$1){
var self__ = this;
var _23560__$1 = this;
return (new cljs.core.async.t_cljs$core$async23558(self__.f,self__.blockable,meta23559__$1));
});

cljs.core.async.t_cljs$core$async23558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23560){
var self__ = this;
var _23560__$1 = this;
return self__.meta23559;
});

cljs.core.async.t_cljs$core$async23558.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23558.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23559","meta23559",984879125,null)], null);
});

cljs.core.async.t_cljs$core$async23558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23558";

cljs.core.async.t_cljs$core$async23558.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async23558");
});

cljs.core.async.__GT_t_cljs$core$async23558 = (function cljs$core$async$__GT_t_cljs$core$async23558(f__$1,blockable__$1,meta23559){
return (new cljs.core.async.t_cljs$core$async23558(f__$1,blockable__$1,meta23559));
});

}

return (new cljs.core.async.t_cljs$core$async23558(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args23567 = [];
var len__22320__auto___23570 = arguments.length;
var i__22321__auto___23571 = (0);
while(true){
if((i__22321__auto___23571 < len__22320__auto___23570)){
args23567.push((arguments[i__22321__auto___23571]));

var G__23572 = (i__22321__auto___23571 + (1));
i__22321__auto___23571 = G__23572;
continue;
} else {
}
break;
}

var G__23569 = args23567.length;
switch (G__23569) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23567.length)].join('')));

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
var args23574 = [];
var len__22320__auto___23577 = arguments.length;
var i__22321__auto___23578 = (0);
while(true){
if((i__22321__auto___23578 < len__22320__auto___23577)){
args23574.push((arguments[i__22321__auto___23578]));

var G__23579 = (i__22321__auto___23578 + (1));
i__22321__auto___23578 = G__23579;
continue;
} else {
}
break;
}

var G__23576 = args23574.length;
switch (G__23576) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23574.length)].join('')));

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
var args23581 = [];
var len__22320__auto___23584 = arguments.length;
var i__22321__auto___23585 = (0);
while(true){
if((i__22321__auto___23585 < len__22320__auto___23584)){
args23581.push((arguments[i__22321__auto___23585]));

var G__23586 = (i__22321__auto___23585 + (1));
i__22321__auto___23585 = G__23586;
continue;
} else {
}
break;
}

var G__23583 = args23581.length;
switch (G__23583) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23581.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23588 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23588);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23588,ret){
return (function (){
return fn1.call(null,val_23588);
});})(val_23588,ret))
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
var args23589 = [];
var len__22320__auto___23592 = arguments.length;
var i__22321__auto___23593 = (0);
while(true){
if((i__22321__auto___23593 < len__22320__auto___23592)){
args23589.push((arguments[i__22321__auto___23593]));

var G__23594 = (i__22321__auto___23593 + (1));
i__22321__auto___23593 = G__23594;
continue;
} else {
}
break;
}

var G__23591 = args23589.length;
switch (G__23591) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23589.length)].join('')));

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
var n__22165__auto___23596 = n;
var x_23597 = (0);
while(true){
if((x_23597 < n__22165__auto___23596)){
(a[x_23597] = (0));

var G__23598 = (x_23597 + (1));
x_23597 = G__23598;
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

var G__23599 = (i + (1));
i = G__23599;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23603 = (function (alt_flag,flag,meta23604){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23604 = meta23604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23605,meta23604__$1){
var self__ = this;
var _23605__$1 = this;
return (new cljs.core.async.t_cljs$core$async23603(self__.alt_flag,self__.flag,meta23604__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23605){
var self__ = this;
var _23605__$1 = this;
return self__.meta23604;
});})(flag))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23603.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23604","meta23604",-1791323138,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23603";

cljs.core.async.t_cljs$core$async23603.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async23603");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23603 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23603(alt_flag__$1,flag__$1,meta23604){
return (new cljs.core.async.t_cljs$core$async23603(alt_flag__$1,flag__$1,meta23604));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23603(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23609 = (function (alt_handler,flag,cb,meta23610){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23610 = meta23610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23611,meta23610__$1){
var self__ = this;
var _23611__$1 = this;
return (new cljs.core.async.t_cljs$core$async23609(self__.alt_handler,self__.flag,self__.cb,meta23610__$1));
});

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23611){
var self__ = this;
var _23611__$1 = this;
return self__.meta23610;
});

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23610","meta23610",-1848296789,null)], null);
});

cljs.core.async.t_cljs$core$async23609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23609";

cljs.core.async.t_cljs$core$async23609.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async23609");
});

cljs.core.async.__GT_t_cljs$core$async23609 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23609(alt_handler__$1,flag__$1,cb__$1,meta23610){
return (new cljs.core.async.t_cljs$core$async23609(alt_handler__$1,flag__$1,cb__$1,meta23610));
});

}

return (new cljs.core.async.t_cljs$core$async23609(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23612_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23612_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23613_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23613_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21250__auto__ = wport;
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23614 = (i + (1));
i = G__23614;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21250__auto__ = ret;
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21238__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21238__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21238__auto__;
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
var args__22327__auto__ = [];
var len__22320__auto___23620 = arguments.length;
var i__22321__auto___23621 = (0);
while(true){
if((i__22321__auto___23621 < len__22320__auto___23620)){
args__22327__auto__.push((arguments[i__22321__auto___23621]));

var G__23622 = (i__22321__auto___23621 + (1));
i__22321__auto___23621 = G__23622;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((1) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22328__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23617){
var map__23618 = p__23617;
var map__23618__$1 = ((((!((map__23618 == null)))?((((map__23618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23618):map__23618);
var opts = map__23618__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23615){
var G__23616 = cljs.core.first.call(null,seq23615);
var seq23615__$1 = cljs.core.next.call(null,seq23615);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23616,seq23615__$1);
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
var args23623 = [];
var len__22320__auto___23673 = arguments.length;
var i__22321__auto___23674 = (0);
while(true){
if((i__22321__auto___23674 < len__22320__auto___23673)){
args23623.push((arguments[i__22321__auto___23674]));

var G__23675 = (i__22321__auto___23674 + (1));
i__22321__auto___23674 = G__23675;
continue;
} else {
}
break;
}

var G__23625 = args23623.length;
switch (G__23625) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23623.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23510__auto___23677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___23677){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___23677){
return (function (state_23649){
var state_val_23650 = (state_23649[(1)]);
if((state_val_23650 === (7))){
var inst_23645 = (state_23649[(2)]);
var state_23649__$1 = state_23649;
var statearr_23651_23678 = state_23649__$1;
(statearr_23651_23678[(2)] = inst_23645);

(statearr_23651_23678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (1))){
var state_23649__$1 = state_23649;
var statearr_23652_23679 = state_23649__$1;
(statearr_23652_23679[(2)] = null);

(statearr_23652_23679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (4))){
var inst_23628 = (state_23649[(7)]);
var inst_23628__$1 = (state_23649[(2)]);
var inst_23629 = (inst_23628__$1 == null);
var state_23649__$1 = (function (){var statearr_23653 = state_23649;
(statearr_23653[(7)] = inst_23628__$1);

return statearr_23653;
})();
if(cljs.core.truth_(inst_23629)){
var statearr_23654_23680 = state_23649__$1;
(statearr_23654_23680[(1)] = (5));

} else {
var statearr_23655_23681 = state_23649__$1;
(statearr_23655_23681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (13))){
var state_23649__$1 = state_23649;
var statearr_23656_23682 = state_23649__$1;
(statearr_23656_23682[(2)] = null);

(statearr_23656_23682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (6))){
var inst_23628 = (state_23649[(7)]);
var state_23649__$1 = state_23649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23649__$1,(11),to,inst_23628);
} else {
if((state_val_23650 === (3))){
var inst_23647 = (state_23649[(2)]);
var state_23649__$1 = state_23649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23649__$1,inst_23647);
} else {
if((state_val_23650 === (12))){
var state_23649__$1 = state_23649;
var statearr_23657_23683 = state_23649__$1;
(statearr_23657_23683[(2)] = null);

(statearr_23657_23683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (2))){
var state_23649__$1 = state_23649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23649__$1,(4),from);
} else {
if((state_val_23650 === (11))){
var inst_23638 = (state_23649[(2)]);
var state_23649__$1 = state_23649;
if(cljs.core.truth_(inst_23638)){
var statearr_23658_23684 = state_23649__$1;
(statearr_23658_23684[(1)] = (12));

} else {
var statearr_23659_23685 = state_23649__$1;
(statearr_23659_23685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (9))){
var state_23649__$1 = state_23649;
var statearr_23660_23686 = state_23649__$1;
(statearr_23660_23686[(2)] = null);

(statearr_23660_23686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (5))){
var state_23649__$1 = state_23649;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23661_23687 = state_23649__$1;
(statearr_23661_23687[(1)] = (8));

} else {
var statearr_23662_23688 = state_23649__$1;
(statearr_23662_23688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (14))){
var inst_23643 = (state_23649[(2)]);
var state_23649__$1 = state_23649;
var statearr_23663_23689 = state_23649__$1;
(statearr_23663_23689[(2)] = inst_23643);

(statearr_23663_23689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (10))){
var inst_23635 = (state_23649[(2)]);
var state_23649__$1 = state_23649;
var statearr_23664_23690 = state_23649__$1;
(statearr_23664_23690[(2)] = inst_23635);

(statearr_23664_23690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23650 === (8))){
var inst_23632 = cljs.core.async.close_BANG_.call(null,to);
var state_23649__$1 = state_23649;
var statearr_23665_23691 = state_23649__$1;
(statearr_23665_23691[(2)] = inst_23632);

(statearr_23665_23691[(1)] = (10));


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
});})(c__23510__auto___23677))
;
return ((function (switch__23398__auto__,c__23510__auto___23677){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_23669 = [null,null,null,null,null,null,null,null];
(statearr_23669[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_23669[(1)] = (1));

return statearr_23669;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_23649){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_23649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e23670){if((e23670 instanceof Object)){
var ex__23402__auto__ = e23670;
var statearr_23671_23692 = state_23649;
(statearr_23671_23692[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23693 = state_23649;
state_23649 = G__23693;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_23649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_23649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___23677))
})();
var state__23512__auto__ = (function (){var statearr_23672 = f__23511__auto__.call(null);
(statearr_23672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___23677);

return statearr_23672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___23677))
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
return (function (p__23877){
var vec__23878 = p__23877;
var v = cljs.core.nth.call(null,vec__23878,(0),null);
var p = cljs.core.nth.call(null,vec__23878,(1),null);
var job = vec__23878;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23510__auto___24060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___24060,res,vec__23878,v,p,job,jobs,results){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___24060,res,vec__23878,v,p,job,jobs,results){
return (function (state_23883){
var state_val_23884 = (state_23883[(1)]);
if((state_val_23884 === (1))){
var state_23883__$1 = state_23883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23883__$1,(2),res,v);
} else {
if((state_val_23884 === (2))){
var inst_23880 = (state_23883[(2)]);
var inst_23881 = cljs.core.async.close_BANG_.call(null,res);
var state_23883__$1 = (function (){var statearr_23885 = state_23883;
(statearr_23885[(7)] = inst_23880);

return statearr_23885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23883__$1,inst_23881);
} else {
return null;
}
}
});})(c__23510__auto___24060,res,vec__23878,v,p,job,jobs,results))
;
return ((function (switch__23398__auto__,c__23510__auto___24060,res,vec__23878,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0 = (function (){
var statearr_23889 = [null,null,null,null,null,null,null,null];
(statearr_23889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__);

(statearr_23889[(1)] = (1));

return statearr_23889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1 = (function (state_23883){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_23883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e23890){if((e23890 instanceof Object)){
var ex__23402__auto__ = e23890;
var statearr_23891_24061 = state_23883;
(statearr_23891_24061[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24062 = state_23883;
state_23883 = G__24062;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = function(state_23883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1.call(this,state_23883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___24060,res,vec__23878,v,p,job,jobs,results))
})();
var state__23512__auto__ = (function (){var statearr_23892 = f__23511__auto__.call(null);
(statearr_23892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___24060);

return statearr_23892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___24060,res,vec__23878,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23893){
var vec__23894 = p__23893;
var v = cljs.core.nth.call(null,vec__23894,(0),null);
var p = cljs.core.nth.call(null,vec__23894,(1),null);
var job = vec__23894;
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
var n__22165__auto___24063 = n;
var __24064 = (0);
while(true){
if((__24064 < n__22165__auto___24063)){
var G__23895_24065 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23895_24065) {
case "compute":
var c__23510__auto___24067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24064,c__23510__auto___24067,G__23895_24065,n__22165__auto___24063,jobs,results,process,async){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (__24064,c__23510__auto___24067,G__23895_24065,n__22165__auto___24063,jobs,results,process,async){
return (function (state_23908){
var state_val_23909 = (state_23908[(1)]);
if((state_val_23909 === (1))){
var state_23908__$1 = state_23908;
var statearr_23910_24068 = state_23908__$1;
(statearr_23910_24068[(2)] = null);

(statearr_23910_24068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (2))){
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23908__$1,(4),jobs);
} else {
if((state_val_23909 === (3))){
var inst_23906 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23908__$1,inst_23906);
} else {
if((state_val_23909 === (4))){
var inst_23898 = (state_23908[(2)]);
var inst_23899 = process.call(null,inst_23898);
var state_23908__$1 = state_23908;
if(cljs.core.truth_(inst_23899)){
var statearr_23911_24069 = state_23908__$1;
(statearr_23911_24069[(1)] = (5));

} else {
var statearr_23912_24070 = state_23908__$1;
(statearr_23912_24070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (5))){
var state_23908__$1 = state_23908;
var statearr_23913_24071 = state_23908__$1;
(statearr_23913_24071[(2)] = null);

(statearr_23913_24071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (6))){
var state_23908__$1 = state_23908;
var statearr_23914_24072 = state_23908__$1;
(statearr_23914_24072[(2)] = null);

(statearr_23914_24072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (7))){
var inst_23904 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23915_24073 = state_23908__$1;
(statearr_23915_24073[(2)] = inst_23904);

(statearr_23915_24073[(1)] = (3));


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
});})(__24064,c__23510__auto___24067,G__23895_24065,n__22165__auto___24063,jobs,results,process,async))
;
return ((function (__24064,switch__23398__auto__,c__23510__auto___24067,G__23895_24065,n__22165__auto___24063,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0 = (function (){
var statearr_23919 = [null,null,null,null,null,null,null];
(statearr_23919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__);

(statearr_23919[(1)] = (1));

return statearr_23919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1 = (function (state_23908){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_23908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e23920){if((e23920 instanceof Object)){
var ex__23402__auto__ = e23920;
var statearr_23921_24074 = state_23908;
(statearr_23921_24074[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24075 = state_23908;
state_23908 = G__24075;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = function(state_23908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1.call(this,state_23908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__;
})()
;})(__24064,switch__23398__auto__,c__23510__auto___24067,G__23895_24065,n__22165__auto___24063,jobs,results,process,async))
})();
var state__23512__auto__ = (function (){var statearr_23922 = f__23511__auto__.call(null);
(statearr_23922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___24067);

return statearr_23922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(__24064,c__23510__auto___24067,G__23895_24065,n__22165__auto___24063,jobs,results,process,async))
);


break;
case "async":
var c__23510__auto___24076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24064,c__23510__auto___24076,G__23895_24065,n__22165__auto___24063,jobs,results,process,async){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (__24064,c__23510__auto___24076,G__23895_24065,n__22165__auto___24063,jobs,results,process,async){
return (function (state_23935){
var state_val_23936 = (state_23935[(1)]);
if((state_val_23936 === (1))){
var state_23935__$1 = state_23935;
var statearr_23937_24077 = state_23935__$1;
(statearr_23937_24077[(2)] = null);

(statearr_23937_24077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (2))){
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23935__$1,(4),jobs);
} else {
if((state_val_23936 === (3))){
var inst_23933 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23935__$1,inst_23933);
} else {
if((state_val_23936 === (4))){
var inst_23925 = (state_23935[(2)]);
var inst_23926 = async.call(null,inst_23925);
var state_23935__$1 = state_23935;
if(cljs.core.truth_(inst_23926)){
var statearr_23938_24078 = state_23935__$1;
(statearr_23938_24078[(1)] = (5));

} else {
var statearr_23939_24079 = state_23935__$1;
(statearr_23939_24079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (5))){
var state_23935__$1 = state_23935;
var statearr_23940_24080 = state_23935__$1;
(statearr_23940_24080[(2)] = null);

(statearr_23940_24080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (6))){
var state_23935__$1 = state_23935;
var statearr_23941_24081 = state_23935__$1;
(statearr_23941_24081[(2)] = null);

(statearr_23941_24081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (7))){
var inst_23931 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23942_24082 = state_23935__$1;
(statearr_23942_24082[(2)] = inst_23931);

(statearr_23942_24082[(1)] = (3));


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
});})(__24064,c__23510__auto___24076,G__23895_24065,n__22165__auto___24063,jobs,results,process,async))
;
return ((function (__24064,switch__23398__auto__,c__23510__auto___24076,G__23895_24065,n__22165__auto___24063,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0 = (function (){
var statearr_23946 = [null,null,null,null,null,null,null];
(statearr_23946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__);

(statearr_23946[(1)] = (1));

return statearr_23946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1 = (function (state_23935){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_23935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e23947){if((e23947 instanceof Object)){
var ex__23402__auto__ = e23947;
var statearr_23948_24083 = state_23935;
(statearr_23948_24083[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24084 = state_23935;
state_23935 = G__24084;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = function(state_23935){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1.call(this,state_23935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__;
})()
;})(__24064,switch__23398__auto__,c__23510__auto___24076,G__23895_24065,n__22165__auto___24063,jobs,results,process,async))
})();
var state__23512__auto__ = (function (){var statearr_23949 = f__23511__auto__.call(null);
(statearr_23949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___24076);

return statearr_23949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(__24064,c__23510__auto___24076,G__23895_24065,n__22165__auto___24063,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24085 = (__24064 + (1));
__24064 = G__24085;
continue;
} else {
}
break;
}

var c__23510__auto___24086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___24086,jobs,results,process,async){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___24086,jobs,results,process,async){
return (function (state_23971){
var state_val_23972 = (state_23971[(1)]);
if((state_val_23972 === (1))){
var state_23971__$1 = state_23971;
var statearr_23973_24087 = state_23971__$1;
(statearr_23973_24087[(2)] = null);

(statearr_23973_24087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23972 === (2))){
var state_23971__$1 = state_23971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23971__$1,(4),from);
} else {
if((state_val_23972 === (3))){
var inst_23969 = (state_23971[(2)]);
var state_23971__$1 = state_23971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23971__$1,inst_23969);
} else {
if((state_val_23972 === (4))){
var inst_23952 = (state_23971[(7)]);
var inst_23952__$1 = (state_23971[(2)]);
var inst_23953 = (inst_23952__$1 == null);
var state_23971__$1 = (function (){var statearr_23974 = state_23971;
(statearr_23974[(7)] = inst_23952__$1);

return statearr_23974;
})();
if(cljs.core.truth_(inst_23953)){
var statearr_23975_24088 = state_23971__$1;
(statearr_23975_24088[(1)] = (5));

} else {
var statearr_23976_24089 = state_23971__$1;
(statearr_23976_24089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23972 === (5))){
var inst_23955 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23971__$1 = state_23971;
var statearr_23977_24090 = state_23971__$1;
(statearr_23977_24090[(2)] = inst_23955);

(statearr_23977_24090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23972 === (6))){
var inst_23957 = (state_23971[(8)]);
var inst_23952 = (state_23971[(7)]);
var inst_23957__$1 = cljs.core.async.chan.call(null,(1));
var inst_23958 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23959 = [inst_23952,inst_23957__$1];
var inst_23960 = (new cljs.core.PersistentVector(null,2,(5),inst_23958,inst_23959,null));
var state_23971__$1 = (function (){var statearr_23978 = state_23971;
(statearr_23978[(8)] = inst_23957__$1);

return statearr_23978;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23971__$1,(8),jobs,inst_23960);
} else {
if((state_val_23972 === (7))){
var inst_23967 = (state_23971[(2)]);
var state_23971__$1 = state_23971;
var statearr_23979_24091 = state_23971__$1;
(statearr_23979_24091[(2)] = inst_23967);

(statearr_23979_24091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23972 === (8))){
var inst_23957 = (state_23971[(8)]);
var inst_23962 = (state_23971[(2)]);
var state_23971__$1 = (function (){var statearr_23980 = state_23971;
(statearr_23980[(9)] = inst_23962);

return statearr_23980;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23971__$1,(9),results,inst_23957);
} else {
if((state_val_23972 === (9))){
var inst_23964 = (state_23971[(2)]);
var state_23971__$1 = (function (){var statearr_23981 = state_23971;
(statearr_23981[(10)] = inst_23964);

return statearr_23981;
})();
var statearr_23982_24092 = state_23971__$1;
(statearr_23982_24092[(2)] = null);

(statearr_23982_24092[(1)] = (2));


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
});})(c__23510__auto___24086,jobs,results,process,async))
;
return ((function (switch__23398__auto__,c__23510__auto___24086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0 = (function (){
var statearr_23986 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__);

(statearr_23986[(1)] = (1));

return statearr_23986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1 = (function (state_23971){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_23971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e23987){if((e23987 instanceof Object)){
var ex__23402__auto__ = e23987;
var statearr_23988_24093 = state_23971;
(statearr_23988_24093[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24094 = state_23971;
state_23971 = G__24094;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = function(state_23971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1.call(this,state_23971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___24086,jobs,results,process,async))
})();
var state__23512__auto__ = (function (){var statearr_23989 = f__23511__auto__.call(null);
(statearr_23989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___24086);

return statearr_23989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___24086,jobs,results,process,async))
);


var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__,jobs,results,process,async){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__,jobs,results,process,async){
return (function (state_24027){
var state_val_24028 = (state_24027[(1)]);
if((state_val_24028 === (7))){
var inst_24023 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
var statearr_24029_24095 = state_24027__$1;
(statearr_24029_24095[(2)] = inst_24023);

(statearr_24029_24095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (20))){
var state_24027__$1 = state_24027;
var statearr_24030_24096 = state_24027__$1;
(statearr_24030_24096[(2)] = null);

(statearr_24030_24096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (1))){
var state_24027__$1 = state_24027;
var statearr_24031_24097 = state_24027__$1;
(statearr_24031_24097[(2)] = null);

(statearr_24031_24097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (4))){
var inst_23992 = (state_24027[(7)]);
var inst_23992__$1 = (state_24027[(2)]);
var inst_23993 = (inst_23992__$1 == null);
var state_24027__$1 = (function (){var statearr_24032 = state_24027;
(statearr_24032[(7)] = inst_23992__$1);

return statearr_24032;
})();
if(cljs.core.truth_(inst_23993)){
var statearr_24033_24098 = state_24027__$1;
(statearr_24033_24098[(1)] = (5));

} else {
var statearr_24034_24099 = state_24027__$1;
(statearr_24034_24099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (15))){
var inst_24005 = (state_24027[(8)]);
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24027__$1,(18),to,inst_24005);
} else {
if((state_val_24028 === (21))){
var inst_24018 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
var statearr_24035_24100 = state_24027__$1;
(statearr_24035_24100[(2)] = inst_24018);

(statearr_24035_24100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (13))){
var inst_24020 = (state_24027[(2)]);
var state_24027__$1 = (function (){var statearr_24036 = state_24027;
(statearr_24036[(9)] = inst_24020);

return statearr_24036;
})();
var statearr_24037_24101 = state_24027__$1;
(statearr_24037_24101[(2)] = null);

(statearr_24037_24101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (6))){
var inst_23992 = (state_24027[(7)]);
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24027__$1,(11),inst_23992);
} else {
if((state_val_24028 === (17))){
var inst_24013 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
if(cljs.core.truth_(inst_24013)){
var statearr_24038_24102 = state_24027__$1;
(statearr_24038_24102[(1)] = (19));

} else {
var statearr_24039_24103 = state_24027__$1;
(statearr_24039_24103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (3))){
var inst_24025 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24027__$1,inst_24025);
} else {
if((state_val_24028 === (12))){
var inst_24002 = (state_24027[(10)]);
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24027__$1,(14),inst_24002);
} else {
if((state_val_24028 === (2))){
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24027__$1,(4),results);
} else {
if((state_val_24028 === (19))){
var state_24027__$1 = state_24027;
var statearr_24040_24104 = state_24027__$1;
(statearr_24040_24104[(2)] = null);

(statearr_24040_24104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (11))){
var inst_24002 = (state_24027[(2)]);
var state_24027__$1 = (function (){var statearr_24041 = state_24027;
(statearr_24041[(10)] = inst_24002);

return statearr_24041;
})();
var statearr_24042_24105 = state_24027__$1;
(statearr_24042_24105[(2)] = null);

(statearr_24042_24105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (9))){
var state_24027__$1 = state_24027;
var statearr_24043_24106 = state_24027__$1;
(statearr_24043_24106[(2)] = null);

(statearr_24043_24106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (5))){
var state_24027__$1 = state_24027;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24044_24107 = state_24027__$1;
(statearr_24044_24107[(1)] = (8));

} else {
var statearr_24045_24108 = state_24027__$1;
(statearr_24045_24108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (14))){
var inst_24005 = (state_24027[(8)]);
var inst_24007 = (state_24027[(11)]);
var inst_24005__$1 = (state_24027[(2)]);
var inst_24006 = (inst_24005__$1 == null);
var inst_24007__$1 = cljs.core.not.call(null,inst_24006);
var state_24027__$1 = (function (){var statearr_24046 = state_24027;
(statearr_24046[(8)] = inst_24005__$1);

(statearr_24046[(11)] = inst_24007__$1);

return statearr_24046;
})();
if(inst_24007__$1){
var statearr_24047_24109 = state_24027__$1;
(statearr_24047_24109[(1)] = (15));

} else {
var statearr_24048_24110 = state_24027__$1;
(statearr_24048_24110[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (16))){
var inst_24007 = (state_24027[(11)]);
var state_24027__$1 = state_24027;
var statearr_24049_24111 = state_24027__$1;
(statearr_24049_24111[(2)] = inst_24007);

(statearr_24049_24111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (10))){
var inst_23999 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
var statearr_24050_24112 = state_24027__$1;
(statearr_24050_24112[(2)] = inst_23999);

(statearr_24050_24112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (18))){
var inst_24010 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
var statearr_24051_24113 = state_24027__$1;
(statearr_24051_24113[(2)] = inst_24010);

(statearr_24051_24113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24028 === (8))){
var inst_23996 = cljs.core.async.close_BANG_.call(null,to);
var state_24027__$1 = state_24027;
var statearr_24052_24114 = state_24027__$1;
(statearr_24052_24114[(2)] = inst_23996);

(statearr_24052_24114[(1)] = (10));


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
});})(c__23510__auto__,jobs,results,process,async))
;
return ((function (switch__23398__auto__,c__23510__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0 = (function (){
var statearr_24056 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__);

(statearr_24056[(1)] = (1));

return statearr_24056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1 = (function (state_24027){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_24027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e24057){if((e24057 instanceof Object)){
var ex__23402__auto__ = e24057;
var statearr_24058_24115 = state_24027;
(statearr_24058_24115[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24116 = state_24027;
state_24027 = G__24116;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__ = function(state_24027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1.call(this,state_24027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__,jobs,results,process,async))
})();
var state__23512__auto__ = (function (){var statearr_24059 = f__23511__auto__.call(null);
(statearr_24059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_24059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__,jobs,results,process,async))
);

return c__23510__auto__;
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
var args24117 = [];
var len__22320__auto___24120 = arguments.length;
var i__22321__auto___24121 = (0);
while(true){
if((i__22321__auto___24121 < len__22320__auto___24120)){
args24117.push((arguments[i__22321__auto___24121]));

var G__24122 = (i__22321__auto___24121 + (1));
i__22321__auto___24121 = G__24122;
continue;
} else {
}
break;
}

var G__24119 = args24117.length;
switch (G__24119) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24117.length)].join('')));

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
var args24124 = [];
var len__22320__auto___24127 = arguments.length;
var i__22321__auto___24128 = (0);
while(true){
if((i__22321__auto___24128 < len__22320__auto___24127)){
args24124.push((arguments[i__22321__auto___24128]));

var G__24129 = (i__22321__auto___24128 + (1));
i__22321__auto___24128 = G__24129;
continue;
} else {
}
break;
}

var G__24126 = args24124.length;
switch (G__24126) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24124.length)].join('')));

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
var args24131 = [];
var len__22320__auto___24184 = arguments.length;
var i__22321__auto___24185 = (0);
while(true){
if((i__22321__auto___24185 < len__22320__auto___24184)){
args24131.push((arguments[i__22321__auto___24185]));

var G__24186 = (i__22321__auto___24185 + (1));
i__22321__auto___24185 = G__24186;
continue;
} else {
}
break;
}

var G__24133 = args24131.length;
switch (G__24133) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24131.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23510__auto___24188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___24188,tc,fc){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___24188,tc,fc){
return (function (state_24159){
var state_val_24160 = (state_24159[(1)]);
if((state_val_24160 === (7))){
var inst_24155 = (state_24159[(2)]);
var state_24159__$1 = state_24159;
var statearr_24161_24189 = state_24159__$1;
(statearr_24161_24189[(2)] = inst_24155);

(statearr_24161_24189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (1))){
var state_24159__$1 = state_24159;
var statearr_24162_24190 = state_24159__$1;
(statearr_24162_24190[(2)] = null);

(statearr_24162_24190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (4))){
var inst_24136 = (state_24159[(7)]);
var inst_24136__$1 = (state_24159[(2)]);
var inst_24137 = (inst_24136__$1 == null);
var state_24159__$1 = (function (){var statearr_24163 = state_24159;
(statearr_24163[(7)] = inst_24136__$1);

return statearr_24163;
})();
if(cljs.core.truth_(inst_24137)){
var statearr_24164_24191 = state_24159__$1;
(statearr_24164_24191[(1)] = (5));

} else {
var statearr_24165_24192 = state_24159__$1;
(statearr_24165_24192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (13))){
var state_24159__$1 = state_24159;
var statearr_24166_24193 = state_24159__$1;
(statearr_24166_24193[(2)] = null);

(statearr_24166_24193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (6))){
var inst_24136 = (state_24159[(7)]);
var inst_24142 = p.call(null,inst_24136);
var state_24159__$1 = state_24159;
if(cljs.core.truth_(inst_24142)){
var statearr_24167_24194 = state_24159__$1;
(statearr_24167_24194[(1)] = (9));

} else {
var statearr_24168_24195 = state_24159__$1;
(statearr_24168_24195[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (3))){
var inst_24157 = (state_24159[(2)]);
var state_24159__$1 = state_24159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24159__$1,inst_24157);
} else {
if((state_val_24160 === (12))){
var state_24159__$1 = state_24159;
var statearr_24169_24196 = state_24159__$1;
(statearr_24169_24196[(2)] = null);

(statearr_24169_24196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (2))){
var state_24159__$1 = state_24159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24159__$1,(4),ch);
} else {
if((state_val_24160 === (11))){
var inst_24136 = (state_24159[(7)]);
var inst_24146 = (state_24159[(2)]);
var state_24159__$1 = state_24159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24159__$1,(8),inst_24146,inst_24136);
} else {
if((state_val_24160 === (9))){
var state_24159__$1 = state_24159;
var statearr_24170_24197 = state_24159__$1;
(statearr_24170_24197[(2)] = tc);

(statearr_24170_24197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (5))){
var inst_24139 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24140 = cljs.core.async.close_BANG_.call(null,fc);
var state_24159__$1 = (function (){var statearr_24171 = state_24159;
(statearr_24171[(8)] = inst_24139);

return statearr_24171;
})();
var statearr_24172_24198 = state_24159__$1;
(statearr_24172_24198[(2)] = inst_24140);

(statearr_24172_24198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (14))){
var inst_24153 = (state_24159[(2)]);
var state_24159__$1 = state_24159;
var statearr_24173_24199 = state_24159__$1;
(statearr_24173_24199[(2)] = inst_24153);

(statearr_24173_24199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (10))){
var state_24159__$1 = state_24159;
var statearr_24174_24200 = state_24159__$1;
(statearr_24174_24200[(2)] = fc);

(statearr_24174_24200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24160 === (8))){
var inst_24148 = (state_24159[(2)]);
var state_24159__$1 = state_24159;
if(cljs.core.truth_(inst_24148)){
var statearr_24175_24201 = state_24159__$1;
(statearr_24175_24201[(1)] = (12));

} else {
var statearr_24176_24202 = state_24159__$1;
(statearr_24176_24202[(1)] = (13));

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
});})(c__23510__auto___24188,tc,fc))
;
return ((function (switch__23398__auto__,c__23510__auto___24188,tc,fc){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_24180 = [null,null,null,null,null,null,null,null,null];
(statearr_24180[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_24180[(1)] = (1));

return statearr_24180;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_24159){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_24159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e24181){if((e24181 instanceof Object)){
var ex__23402__auto__ = e24181;
var statearr_24182_24203 = state_24159;
(statearr_24182_24203[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24204 = state_24159;
state_24159 = G__24204;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_24159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_24159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___24188,tc,fc))
})();
var state__23512__auto__ = (function (){var statearr_24183 = f__23511__auto__.call(null);
(statearr_24183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___24188);

return statearr_24183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___24188,tc,fc))
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
var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__){
return (function (state_24268){
var state_val_24269 = (state_24268[(1)]);
if((state_val_24269 === (7))){
var inst_24264 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24270_24291 = state_24268__$1;
(statearr_24270_24291[(2)] = inst_24264);

(statearr_24270_24291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (1))){
var inst_24248 = init;
var state_24268__$1 = (function (){var statearr_24271 = state_24268;
(statearr_24271[(7)] = inst_24248);

return statearr_24271;
})();
var statearr_24272_24292 = state_24268__$1;
(statearr_24272_24292[(2)] = null);

(statearr_24272_24292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (4))){
var inst_24251 = (state_24268[(8)]);
var inst_24251__$1 = (state_24268[(2)]);
var inst_24252 = (inst_24251__$1 == null);
var state_24268__$1 = (function (){var statearr_24273 = state_24268;
(statearr_24273[(8)] = inst_24251__$1);

return statearr_24273;
})();
if(cljs.core.truth_(inst_24252)){
var statearr_24274_24293 = state_24268__$1;
(statearr_24274_24293[(1)] = (5));

} else {
var statearr_24275_24294 = state_24268__$1;
(statearr_24275_24294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (6))){
var inst_24248 = (state_24268[(7)]);
var inst_24255 = (state_24268[(9)]);
var inst_24251 = (state_24268[(8)]);
var inst_24255__$1 = f.call(null,inst_24248,inst_24251);
var inst_24256 = cljs.core.reduced_QMARK_.call(null,inst_24255__$1);
var state_24268__$1 = (function (){var statearr_24276 = state_24268;
(statearr_24276[(9)] = inst_24255__$1);

return statearr_24276;
})();
if(inst_24256){
var statearr_24277_24295 = state_24268__$1;
(statearr_24277_24295[(1)] = (8));

} else {
var statearr_24278_24296 = state_24268__$1;
(statearr_24278_24296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (3))){
var inst_24266 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24268__$1,inst_24266);
} else {
if((state_val_24269 === (2))){
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24268__$1,(4),ch);
} else {
if((state_val_24269 === (9))){
var inst_24255 = (state_24268[(9)]);
var inst_24248 = inst_24255;
var state_24268__$1 = (function (){var statearr_24279 = state_24268;
(statearr_24279[(7)] = inst_24248);

return statearr_24279;
})();
var statearr_24280_24297 = state_24268__$1;
(statearr_24280_24297[(2)] = null);

(statearr_24280_24297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (5))){
var inst_24248 = (state_24268[(7)]);
var state_24268__$1 = state_24268;
var statearr_24281_24298 = state_24268__$1;
(statearr_24281_24298[(2)] = inst_24248);

(statearr_24281_24298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (10))){
var inst_24262 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24282_24299 = state_24268__$1;
(statearr_24282_24299[(2)] = inst_24262);

(statearr_24282_24299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (8))){
var inst_24255 = (state_24268[(9)]);
var inst_24258 = cljs.core.deref.call(null,inst_24255);
var state_24268__$1 = state_24268;
var statearr_24283_24300 = state_24268__$1;
(statearr_24283_24300[(2)] = inst_24258);

(statearr_24283_24300[(1)] = (10));


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
});})(c__23510__auto__))
;
return ((function (switch__23398__auto__,c__23510__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23399__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23399__auto____0 = (function (){
var statearr_24287 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24287[(0)] = cljs$core$async$reduce_$_state_machine__23399__auto__);

(statearr_24287[(1)] = (1));

return statearr_24287;
});
var cljs$core$async$reduce_$_state_machine__23399__auto____1 = (function (state_24268){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_24268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e24288){if((e24288 instanceof Object)){
var ex__23402__auto__ = e24288;
var statearr_24289_24301 = state_24268;
(statearr_24289_24301[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24302 = state_24268;
state_24268 = G__24302;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23399__auto__ = function(state_24268){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23399__auto____1.call(this,state_24268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23399__auto____0;
cljs$core$async$reduce_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23399__auto____1;
return cljs$core$async$reduce_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__))
})();
var state__23512__auto__ = (function (){var statearr_24290 = f__23511__auto__.call(null);
(statearr_24290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_24290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__))
);

return c__23510__auto__;
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
var args24303 = [];
var len__22320__auto___24355 = arguments.length;
var i__22321__auto___24356 = (0);
while(true){
if((i__22321__auto___24356 < len__22320__auto___24355)){
args24303.push((arguments[i__22321__auto___24356]));

var G__24357 = (i__22321__auto___24356 + (1));
i__22321__auto___24356 = G__24357;
continue;
} else {
}
break;
}

var G__24305 = args24303.length;
switch (G__24305) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24303.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__){
return (function (state_24330){
var state_val_24331 = (state_24330[(1)]);
if((state_val_24331 === (7))){
var inst_24312 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24332_24359 = state_24330__$1;
(statearr_24332_24359[(2)] = inst_24312);

(statearr_24332_24359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (1))){
var inst_24306 = cljs.core.seq.call(null,coll);
var inst_24307 = inst_24306;
var state_24330__$1 = (function (){var statearr_24333 = state_24330;
(statearr_24333[(7)] = inst_24307);

return statearr_24333;
})();
var statearr_24334_24360 = state_24330__$1;
(statearr_24334_24360[(2)] = null);

(statearr_24334_24360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (4))){
var inst_24307 = (state_24330[(7)]);
var inst_24310 = cljs.core.first.call(null,inst_24307);
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24330__$1,(7),ch,inst_24310);
} else {
if((state_val_24331 === (13))){
var inst_24324 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24335_24361 = state_24330__$1;
(statearr_24335_24361[(2)] = inst_24324);

(statearr_24335_24361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (6))){
var inst_24315 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
if(cljs.core.truth_(inst_24315)){
var statearr_24336_24362 = state_24330__$1;
(statearr_24336_24362[(1)] = (8));

} else {
var statearr_24337_24363 = state_24330__$1;
(statearr_24337_24363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (3))){
var inst_24328 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24330__$1,inst_24328);
} else {
if((state_val_24331 === (12))){
var state_24330__$1 = state_24330;
var statearr_24338_24364 = state_24330__$1;
(statearr_24338_24364[(2)] = null);

(statearr_24338_24364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (2))){
var inst_24307 = (state_24330[(7)]);
var state_24330__$1 = state_24330;
if(cljs.core.truth_(inst_24307)){
var statearr_24339_24365 = state_24330__$1;
(statearr_24339_24365[(1)] = (4));

} else {
var statearr_24340_24366 = state_24330__$1;
(statearr_24340_24366[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (11))){
var inst_24321 = cljs.core.async.close_BANG_.call(null,ch);
var state_24330__$1 = state_24330;
var statearr_24341_24367 = state_24330__$1;
(statearr_24341_24367[(2)] = inst_24321);

(statearr_24341_24367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (9))){
var state_24330__$1 = state_24330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24342_24368 = state_24330__$1;
(statearr_24342_24368[(1)] = (11));

} else {
var statearr_24343_24369 = state_24330__$1;
(statearr_24343_24369[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (5))){
var inst_24307 = (state_24330[(7)]);
var state_24330__$1 = state_24330;
var statearr_24344_24370 = state_24330__$1;
(statearr_24344_24370[(2)] = inst_24307);

(statearr_24344_24370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (10))){
var inst_24326 = (state_24330[(2)]);
var state_24330__$1 = state_24330;
var statearr_24345_24371 = state_24330__$1;
(statearr_24345_24371[(2)] = inst_24326);

(statearr_24345_24371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24331 === (8))){
var inst_24307 = (state_24330[(7)]);
var inst_24317 = cljs.core.next.call(null,inst_24307);
var inst_24307__$1 = inst_24317;
var state_24330__$1 = (function (){var statearr_24346 = state_24330;
(statearr_24346[(7)] = inst_24307__$1);

return statearr_24346;
})();
var statearr_24347_24372 = state_24330__$1;
(statearr_24347_24372[(2)] = null);

(statearr_24347_24372[(1)] = (2));


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
});})(c__23510__auto__))
;
return ((function (switch__23398__auto__,c__23510__auto__){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_24351 = [null,null,null,null,null,null,null,null];
(statearr_24351[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_24351[(1)] = (1));

return statearr_24351;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_24330){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_24330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e24352){if((e24352 instanceof Object)){
var ex__23402__auto__ = e24352;
var statearr_24353_24373 = state_24330;
(statearr_24353_24373[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24374 = state_24330;
state_24330 = G__24374;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_24330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_24330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__))
})();
var state__23512__auto__ = (function (){var statearr_24354 = f__23511__auto__.call(null);
(statearr_24354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_24354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__))
);

return c__23510__auto__;
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
var x__21913__auto__ = (((_ == null))?null:_);
var m__21914__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,_);
} else {
var m__21914__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,_);
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
var x__21913__auto__ = (((m == null))?null:m);
var m__21914__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21914__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__21913__auto__ = (((m == null))?null:m);
var m__21914__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,m,ch);
} else {
var m__21914__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,m,ch);
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
var x__21913__auto__ = (((m == null))?null:m);
var m__21914__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,m);
} else {
var m__21914__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async24596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24596 = (function (mult,ch,cs,meta24597){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24597 = meta24597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24598,meta24597__$1){
var self__ = this;
var _24598__$1 = this;
return (new cljs.core.async.t_cljs$core$async24596(self__.mult,self__.ch,self__.cs,meta24597__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24598){
var self__ = this;
var _24598__$1 = this;
return self__.meta24597;
});})(cs))
;

cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24596.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24597","meta24597",-1612663549,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24596";

cljs.core.async.t_cljs$core$async24596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async24596");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24596 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24596(mult__$1,ch__$1,cs__$1,meta24597){
return (new cljs.core.async.t_cljs$core$async24596(mult__$1,ch__$1,cs__$1,meta24597));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24596(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23510__auto___24817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___24817,cs,m,dchan,dctr,done){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___24817,cs,m,dchan,dctr,done){
return (function (state_24729){
var state_val_24730 = (state_24729[(1)]);
if((state_val_24730 === (7))){
var inst_24725 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24731_24818 = state_24729__$1;
(statearr_24731_24818[(2)] = inst_24725);

(statearr_24731_24818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (20))){
var inst_24630 = (state_24729[(7)]);
var inst_24640 = cljs.core.first.call(null,inst_24630);
var inst_24641 = cljs.core.nth.call(null,inst_24640,(0),null);
var inst_24642 = cljs.core.nth.call(null,inst_24640,(1),null);
var state_24729__$1 = (function (){var statearr_24732 = state_24729;
(statearr_24732[(8)] = inst_24641);

return statearr_24732;
})();
if(cljs.core.truth_(inst_24642)){
var statearr_24733_24819 = state_24729__$1;
(statearr_24733_24819[(1)] = (22));

} else {
var statearr_24734_24820 = state_24729__$1;
(statearr_24734_24820[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (27))){
var inst_24672 = (state_24729[(9)]);
var inst_24677 = (state_24729[(10)]);
var inst_24601 = (state_24729[(11)]);
var inst_24670 = (state_24729[(12)]);
var inst_24677__$1 = cljs.core._nth.call(null,inst_24670,inst_24672);
var inst_24678 = cljs.core.async.put_BANG_.call(null,inst_24677__$1,inst_24601,done);
var state_24729__$1 = (function (){var statearr_24735 = state_24729;
(statearr_24735[(10)] = inst_24677__$1);

return statearr_24735;
})();
if(cljs.core.truth_(inst_24678)){
var statearr_24736_24821 = state_24729__$1;
(statearr_24736_24821[(1)] = (30));

} else {
var statearr_24737_24822 = state_24729__$1;
(statearr_24737_24822[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (1))){
var state_24729__$1 = state_24729;
var statearr_24738_24823 = state_24729__$1;
(statearr_24738_24823[(2)] = null);

(statearr_24738_24823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (24))){
var inst_24630 = (state_24729[(7)]);
var inst_24647 = (state_24729[(2)]);
var inst_24648 = cljs.core.next.call(null,inst_24630);
var inst_24610 = inst_24648;
var inst_24611 = null;
var inst_24612 = (0);
var inst_24613 = (0);
var state_24729__$1 = (function (){var statearr_24739 = state_24729;
(statearr_24739[(13)] = inst_24613);

(statearr_24739[(14)] = inst_24647);

(statearr_24739[(15)] = inst_24612);

(statearr_24739[(16)] = inst_24611);

(statearr_24739[(17)] = inst_24610);

return statearr_24739;
})();
var statearr_24740_24824 = state_24729__$1;
(statearr_24740_24824[(2)] = null);

(statearr_24740_24824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (39))){
var state_24729__$1 = state_24729;
var statearr_24744_24825 = state_24729__$1;
(statearr_24744_24825[(2)] = null);

(statearr_24744_24825[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (4))){
var inst_24601 = (state_24729[(11)]);
var inst_24601__$1 = (state_24729[(2)]);
var inst_24602 = (inst_24601__$1 == null);
var state_24729__$1 = (function (){var statearr_24745 = state_24729;
(statearr_24745[(11)] = inst_24601__$1);

return statearr_24745;
})();
if(cljs.core.truth_(inst_24602)){
var statearr_24746_24826 = state_24729__$1;
(statearr_24746_24826[(1)] = (5));

} else {
var statearr_24747_24827 = state_24729__$1;
(statearr_24747_24827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (15))){
var inst_24613 = (state_24729[(13)]);
var inst_24612 = (state_24729[(15)]);
var inst_24611 = (state_24729[(16)]);
var inst_24610 = (state_24729[(17)]);
var inst_24626 = (state_24729[(2)]);
var inst_24627 = (inst_24613 + (1));
var tmp24741 = inst_24612;
var tmp24742 = inst_24611;
var tmp24743 = inst_24610;
var inst_24610__$1 = tmp24743;
var inst_24611__$1 = tmp24742;
var inst_24612__$1 = tmp24741;
var inst_24613__$1 = inst_24627;
var state_24729__$1 = (function (){var statearr_24748 = state_24729;
(statearr_24748[(13)] = inst_24613__$1);

(statearr_24748[(15)] = inst_24612__$1);

(statearr_24748[(16)] = inst_24611__$1);

(statearr_24748[(18)] = inst_24626);

(statearr_24748[(17)] = inst_24610__$1);

return statearr_24748;
})();
var statearr_24749_24828 = state_24729__$1;
(statearr_24749_24828[(2)] = null);

(statearr_24749_24828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (21))){
var inst_24651 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24753_24829 = state_24729__$1;
(statearr_24753_24829[(2)] = inst_24651);

(statearr_24753_24829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (31))){
var inst_24677 = (state_24729[(10)]);
var inst_24681 = done.call(null,null);
var inst_24682 = cljs.core.async.untap_STAR_.call(null,m,inst_24677);
var state_24729__$1 = (function (){var statearr_24754 = state_24729;
(statearr_24754[(19)] = inst_24681);

return statearr_24754;
})();
var statearr_24755_24830 = state_24729__$1;
(statearr_24755_24830[(2)] = inst_24682);

(statearr_24755_24830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (32))){
var inst_24672 = (state_24729[(9)]);
var inst_24671 = (state_24729[(20)]);
var inst_24670 = (state_24729[(12)]);
var inst_24669 = (state_24729[(21)]);
var inst_24684 = (state_24729[(2)]);
var inst_24685 = (inst_24672 + (1));
var tmp24750 = inst_24671;
var tmp24751 = inst_24670;
var tmp24752 = inst_24669;
var inst_24669__$1 = tmp24752;
var inst_24670__$1 = tmp24751;
var inst_24671__$1 = tmp24750;
var inst_24672__$1 = inst_24685;
var state_24729__$1 = (function (){var statearr_24756 = state_24729;
(statearr_24756[(9)] = inst_24672__$1);

(statearr_24756[(20)] = inst_24671__$1);

(statearr_24756[(12)] = inst_24670__$1);

(statearr_24756[(22)] = inst_24684);

(statearr_24756[(21)] = inst_24669__$1);

return statearr_24756;
})();
var statearr_24757_24831 = state_24729__$1;
(statearr_24757_24831[(2)] = null);

(statearr_24757_24831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (40))){
var inst_24697 = (state_24729[(23)]);
var inst_24701 = done.call(null,null);
var inst_24702 = cljs.core.async.untap_STAR_.call(null,m,inst_24697);
var state_24729__$1 = (function (){var statearr_24758 = state_24729;
(statearr_24758[(24)] = inst_24701);

return statearr_24758;
})();
var statearr_24759_24832 = state_24729__$1;
(statearr_24759_24832[(2)] = inst_24702);

(statearr_24759_24832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (33))){
var inst_24688 = (state_24729[(25)]);
var inst_24690 = cljs.core.chunked_seq_QMARK_.call(null,inst_24688);
var state_24729__$1 = state_24729;
if(inst_24690){
var statearr_24760_24833 = state_24729__$1;
(statearr_24760_24833[(1)] = (36));

} else {
var statearr_24761_24834 = state_24729__$1;
(statearr_24761_24834[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (13))){
var inst_24620 = (state_24729[(26)]);
var inst_24623 = cljs.core.async.close_BANG_.call(null,inst_24620);
var state_24729__$1 = state_24729;
var statearr_24762_24835 = state_24729__$1;
(statearr_24762_24835[(2)] = inst_24623);

(statearr_24762_24835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (22))){
var inst_24641 = (state_24729[(8)]);
var inst_24644 = cljs.core.async.close_BANG_.call(null,inst_24641);
var state_24729__$1 = state_24729;
var statearr_24763_24836 = state_24729__$1;
(statearr_24763_24836[(2)] = inst_24644);

(statearr_24763_24836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (36))){
var inst_24688 = (state_24729[(25)]);
var inst_24692 = cljs.core.chunk_first.call(null,inst_24688);
var inst_24693 = cljs.core.chunk_rest.call(null,inst_24688);
var inst_24694 = cljs.core.count.call(null,inst_24692);
var inst_24669 = inst_24693;
var inst_24670 = inst_24692;
var inst_24671 = inst_24694;
var inst_24672 = (0);
var state_24729__$1 = (function (){var statearr_24764 = state_24729;
(statearr_24764[(9)] = inst_24672);

(statearr_24764[(20)] = inst_24671);

(statearr_24764[(12)] = inst_24670);

(statearr_24764[(21)] = inst_24669);

return statearr_24764;
})();
var statearr_24765_24837 = state_24729__$1;
(statearr_24765_24837[(2)] = null);

(statearr_24765_24837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (41))){
var inst_24688 = (state_24729[(25)]);
var inst_24704 = (state_24729[(2)]);
var inst_24705 = cljs.core.next.call(null,inst_24688);
var inst_24669 = inst_24705;
var inst_24670 = null;
var inst_24671 = (0);
var inst_24672 = (0);
var state_24729__$1 = (function (){var statearr_24766 = state_24729;
(statearr_24766[(27)] = inst_24704);

(statearr_24766[(9)] = inst_24672);

(statearr_24766[(20)] = inst_24671);

(statearr_24766[(12)] = inst_24670);

(statearr_24766[(21)] = inst_24669);

return statearr_24766;
})();
var statearr_24767_24838 = state_24729__$1;
(statearr_24767_24838[(2)] = null);

(statearr_24767_24838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (43))){
var state_24729__$1 = state_24729;
var statearr_24768_24839 = state_24729__$1;
(statearr_24768_24839[(2)] = null);

(statearr_24768_24839[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (29))){
var inst_24713 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24769_24840 = state_24729__$1;
(statearr_24769_24840[(2)] = inst_24713);

(statearr_24769_24840[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (44))){
var inst_24722 = (state_24729[(2)]);
var state_24729__$1 = (function (){var statearr_24770 = state_24729;
(statearr_24770[(28)] = inst_24722);

return statearr_24770;
})();
var statearr_24771_24841 = state_24729__$1;
(statearr_24771_24841[(2)] = null);

(statearr_24771_24841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (6))){
var inst_24661 = (state_24729[(29)]);
var inst_24660 = cljs.core.deref.call(null,cs);
var inst_24661__$1 = cljs.core.keys.call(null,inst_24660);
var inst_24662 = cljs.core.count.call(null,inst_24661__$1);
var inst_24663 = cljs.core.reset_BANG_.call(null,dctr,inst_24662);
var inst_24668 = cljs.core.seq.call(null,inst_24661__$1);
var inst_24669 = inst_24668;
var inst_24670 = null;
var inst_24671 = (0);
var inst_24672 = (0);
var state_24729__$1 = (function (){var statearr_24772 = state_24729;
(statearr_24772[(30)] = inst_24663);

(statearr_24772[(9)] = inst_24672);

(statearr_24772[(20)] = inst_24671);

(statearr_24772[(12)] = inst_24670);

(statearr_24772[(21)] = inst_24669);

(statearr_24772[(29)] = inst_24661__$1);

return statearr_24772;
})();
var statearr_24773_24842 = state_24729__$1;
(statearr_24773_24842[(2)] = null);

(statearr_24773_24842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (28))){
var inst_24688 = (state_24729[(25)]);
var inst_24669 = (state_24729[(21)]);
var inst_24688__$1 = cljs.core.seq.call(null,inst_24669);
var state_24729__$1 = (function (){var statearr_24774 = state_24729;
(statearr_24774[(25)] = inst_24688__$1);

return statearr_24774;
})();
if(inst_24688__$1){
var statearr_24775_24843 = state_24729__$1;
(statearr_24775_24843[(1)] = (33));

} else {
var statearr_24776_24844 = state_24729__$1;
(statearr_24776_24844[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (25))){
var inst_24672 = (state_24729[(9)]);
var inst_24671 = (state_24729[(20)]);
var inst_24674 = (inst_24672 < inst_24671);
var inst_24675 = inst_24674;
var state_24729__$1 = state_24729;
if(cljs.core.truth_(inst_24675)){
var statearr_24777_24845 = state_24729__$1;
(statearr_24777_24845[(1)] = (27));

} else {
var statearr_24778_24846 = state_24729__$1;
(statearr_24778_24846[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (34))){
var state_24729__$1 = state_24729;
var statearr_24779_24847 = state_24729__$1;
(statearr_24779_24847[(2)] = null);

(statearr_24779_24847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (17))){
var state_24729__$1 = state_24729;
var statearr_24780_24848 = state_24729__$1;
(statearr_24780_24848[(2)] = null);

(statearr_24780_24848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (3))){
var inst_24727 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24729__$1,inst_24727);
} else {
if((state_val_24730 === (12))){
var inst_24656 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24781_24849 = state_24729__$1;
(statearr_24781_24849[(2)] = inst_24656);

(statearr_24781_24849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (2))){
var state_24729__$1 = state_24729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24729__$1,(4),ch);
} else {
if((state_val_24730 === (23))){
var state_24729__$1 = state_24729;
var statearr_24782_24850 = state_24729__$1;
(statearr_24782_24850[(2)] = null);

(statearr_24782_24850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (35))){
var inst_24711 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24783_24851 = state_24729__$1;
(statearr_24783_24851[(2)] = inst_24711);

(statearr_24783_24851[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (19))){
var inst_24630 = (state_24729[(7)]);
var inst_24634 = cljs.core.chunk_first.call(null,inst_24630);
var inst_24635 = cljs.core.chunk_rest.call(null,inst_24630);
var inst_24636 = cljs.core.count.call(null,inst_24634);
var inst_24610 = inst_24635;
var inst_24611 = inst_24634;
var inst_24612 = inst_24636;
var inst_24613 = (0);
var state_24729__$1 = (function (){var statearr_24784 = state_24729;
(statearr_24784[(13)] = inst_24613);

(statearr_24784[(15)] = inst_24612);

(statearr_24784[(16)] = inst_24611);

(statearr_24784[(17)] = inst_24610);

return statearr_24784;
})();
var statearr_24785_24852 = state_24729__$1;
(statearr_24785_24852[(2)] = null);

(statearr_24785_24852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (11))){
var inst_24630 = (state_24729[(7)]);
var inst_24610 = (state_24729[(17)]);
var inst_24630__$1 = cljs.core.seq.call(null,inst_24610);
var state_24729__$1 = (function (){var statearr_24786 = state_24729;
(statearr_24786[(7)] = inst_24630__$1);

return statearr_24786;
})();
if(inst_24630__$1){
var statearr_24787_24853 = state_24729__$1;
(statearr_24787_24853[(1)] = (16));

} else {
var statearr_24788_24854 = state_24729__$1;
(statearr_24788_24854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (9))){
var inst_24658 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24789_24855 = state_24729__$1;
(statearr_24789_24855[(2)] = inst_24658);

(statearr_24789_24855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (5))){
var inst_24608 = cljs.core.deref.call(null,cs);
var inst_24609 = cljs.core.seq.call(null,inst_24608);
var inst_24610 = inst_24609;
var inst_24611 = null;
var inst_24612 = (0);
var inst_24613 = (0);
var state_24729__$1 = (function (){var statearr_24790 = state_24729;
(statearr_24790[(13)] = inst_24613);

(statearr_24790[(15)] = inst_24612);

(statearr_24790[(16)] = inst_24611);

(statearr_24790[(17)] = inst_24610);

return statearr_24790;
})();
var statearr_24791_24856 = state_24729__$1;
(statearr_24791_24856[(2)] = null);

(statearr_24791_24856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (14))){
var state_24729__$1 = state_24729;
var statearr_24792_24857 = state_24729__$1;
(statearr_24792_24857[(2)] = null);

(statearr_24792_24857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (45))){
var inst_24719 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24793_24858 = state_24729__$1;
(statearr_24793_24858[(2)] = inst_24719);

(statearr_24793_24858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (26))){
var inst_24661 = (state_24729[(29)]);
var inst_24715 = (state_24729[(2)]);
var inst_24716 = cljs.core.seq.call(null,inst_24661);
var state_24729__$1 = (function (){var statearr_24794 = state_24729;
(statearr_24794[(31)] = inst_24715);

return statearr_24794;
})();
if(inst_24716){
var statearr_24795_24859 = state_24729__$1;
(statearr_24795_24859[(1)] = (42));

} else {
var statearr_24796_24860 = state_24729__$1;
(statearr_24796_24860[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (16))){
var inst_24630 = (state_24729[(7)]);
var inst_24632 = cljs.core.chunked_seq_QMARK_.call(null,inst_24630);
var state_24729__$1 = state_24729;
if(inst_24632){
var statearr_24797_24861 = state_24729__$1;
(statearr_24797_24861[(1)] = (19));

} else {
var statearr_24798_24862 = state_24729__$1;
(statearr_24798_24862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (38))){
var inst_24708 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24799_24863 = state_24729__$1;
(statearr_24799_24863[(2)] = inst_24708);

(statearr_24799_24863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (30))){
var state_24729__$1 = state_24729;
var statearr_24800_24864 = state_24729__$1;
(statearr_24800_24864[(2)] = null);

(statearr_24800_24864[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (10))){
var inst_24613 = (state_24729[(13)]);
var inst_24611 = (state_24729[(16)]);
var inst_24619 = cljs.core._nth.call(null,inst_24611,inst_24613);
var inst_24620 = cljs.core.nth.call(null,inst_24619,(0),null);
var inst_24621 = cljs.core.nth.call(null,inst_24619,(1),null);
var state_24729__$1 = (function (){var statearr_24801 = state_24729;
(statearr_24801[(26)] = inst_24620);

return statearr_24801;
})();
if(cljs.core.truth_(inst_24621)){
var statearr_24802_24865 = state_24729__$1;
(statearr_24802_24865[(1)] = (13));

} else {
var statearr_24803_24866 = state_24729__$1;
(statearr_24803_24866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (18))){
var inst_24654 = (state_24729[(2)]);
var state_24729__$1 = state_24729;
var statearr_24804_24867 = state_24729__$1;
(statearr_24804_24867[(2)] = inst_24654);

(statearr_24804_24867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (42))){
var state_24729__$1 = state_24729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24729__$1,(45),dchan);
} else {
if((state_val_24730 === (37))){
var inst_24601 = (state_24729[(11)]);
var inst_24688 = (state_24729[(25)]);
var inst_24697 = (state_24729[(23)]);
var inst_24697__$1 = cljs.core.first.call(null,inst_24688);
var inst_24698 = cljs.core.async.put_BANG_.call(null,inst_24697__$1,inst_24601,done);
var state_24729__$1 = (function (){var statearr_24805 = state_24729;
(statearr_24805[(23)] = inst_24697__$1);

return statearr_24805;
})();
if(cljs.core.truth_(inst_24698)){
var statearr_24806_24868 = state_24729__$1;
(statearr_24806_24868[(1)] = (39));

} else {
var statearr_24807_24869 = state_24729__$1;
(statearr_24807_24869[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24730 === (8))){
var inst_24613 = (state_24729[(13)]);
var inst_24612 = (state_24729[(15)]);
var inst_24615 = (inst_24613 < inst_24612);
var inst_24616 = inst_24615;
var state_24729__$1 = state_24729;
if(cljs.core.truth_(inst_24616)){
var statearr_24808_24870 = state_24729__$1;
(statearr_24808_24870[(1)] = (10));

} else {
var statearr_24809_24871 = state_24729__$1;
(statearr_24809_24871[(1)] = (11));

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
});})(c__23510__auto___24817,cs,m,dchan,dctr,done))
;
return ((function (switch__23398__auto__,c__23510__auto___24817,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23399__auto__ = null;
var cljs$core$async$mult_$_state_machine__23399__auto____0 = (function (){
var statearr_24813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24813[(0)] = cljs$core$async$mult_$_state_machine__23399__auto__);

(statearr_24813[(1)] = (1));

return statearr_24813;
});
var cljs$core$async$mult_$_state_machine__23399__auto____1 = (function (state_24729){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_24729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e24814){if((e24814 instanceof Object)){
var ex__23402__auto__ = e24814;
var statearr_24815_24872 = state_24729;
(statearr_24815_24872[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24873 = state_24729;
state_24729 = G__24873;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23399__auto__ = function(state_24729){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23399__auto____1.call(this,state_24729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23399__auto____0;
cljs$core$async$mult_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23399__auto____1;
return cljs$core$async$mult_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___24817,cs,m,dchan,dctr,done))
})();
var state__23512__auto__ = (function (){var statearr_24816 = f__23511__auto__.call(null);
(statearr_24816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___24817);

return statearr_24816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___24817,cs,m,dchan,dctr,done))
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
var args24874 = [];
var len__22320__auto___24877 = arguments.length;
var i__22321__auto___24878 = (0);
while(true){
if((i__22321__auto___24878 < len__22320__auto___24877)){
args24874.push((arguments[i__22321__auto___24878]));

var G__24879 = (i__22321__auto___24878 + (1));
i__22321__auto___24878 = G__24879;
continue;
} else {
}
break;
}

var G__24876 = args24874.length;
switch (G__24876) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24874.length)].join('')));

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
var x__21913__auto__ = (((m == null))?null:m);
var m__21914__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,m,ch);
} else {
var m__21914__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,m,ch);
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
var x__21913__auto__ = (((m == null))?null:m);
var m__21914__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,m,ch);
} else {
var m__21914__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,m,ch);
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
var x__21913__auto__ = (((m == null))?null:m);
var m__21914__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,m);
} else {
var m__21914__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,m);
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
var x__21913__auto__ = (((m == null))?null:m);
var m__21914__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,m,state_map);
} else {
var m__21914__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,m,state_map);
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
var x__21913__auto__ = (((m == null))?null:m);
var m__21914__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,m,mode);
} else {
var m__21914__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22327__auto__ = [];
var len__22320__auto___24891 = arguments.length;
var i__22321__auto___24892 = (0);
while(true){
if((i__22321__auto___24892 < len__22320__auto___24891)){
args__22327__auto__.push((arguments[i__22321__auto___24892]));

var G__24893 = (i__22321__auto___24892 + (1));
i__22321__auto___24892 = G__24893;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((3) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22328__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24885){
var map__24886 = p__24885;
var map__24886__$1 = ((((!((map__24886 == null)))?((((map__24886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24886):map__24886);
var opts = map__24886__$1;
var statearr_24888_24894 = state;
(statearr_24888_24894[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24886,map__24886__$1,opts){
return (function (val){
var statearr_24889_24895 = state;
(statearr_24889_24895[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24886,map__24886__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24890_24896 = state;
(statearr_24890_24896[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24881){
var G__24882 = cljs.core.first.call(null,seq24881);
var seq24881__$1 = cljs.core.next.call(null,seq24881);
var G__24883 = cljs.core.first.call(null,seq24881__$1);
var seq24881__$2 = cljs.core.next.call(null,seq24881__$1);
var G__24884 = cljs.core.first.call(null,seq24881__$2);
var seq24881__$3 = cljs.core.next.call(null,seq24881__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24882,G__24883,G__24884,seq24881__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25060 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25061){
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
this.meta25061 = meta25061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25062,meta25061__$1){
var self__ = this;
var _25062__$1 = this;
return (new cljs.core.async.t_cljs$core$async25060(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25061__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25062){
var self__ = this;
var _25062__$1 = this;
return self__.meta25061;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25060.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25061","meta25061",-1164225311,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25060";

cljs.core.async.t_cljs$core$async25060.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async25060");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25060 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25060(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25061){
return (new cljs.core.async.t_cljs$core$async25060(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25061));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25060(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23510__auto___25223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___25223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___25223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25160){
var state_val_25161 = (state_25160[(1)]);
if((state_val_25161 === (7))){
var inst_25078 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25162_25224 = state_25160__$1;
(statearr_25162_25224[(2)] = inst_25078);

(statearr_25162_25224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (20))){
var inst_25090 = (state_25160[(7)]);
var state_25160__$1 = state_25160;
var statearr_25163_25225 = state_25160__$1;
(statearr_25163_25225[(2)] = inst_25090);

(statearr_25163_25225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (27))){
var state_25160__$1 = state_25160;
var statearr_25164_25226 = state_25160__$1;
(statearr_25164_25226[(2)] = null);

(statearr_25164_25226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (1))){
var inst_25066 = (state_25160[(8)]);
var inst_25066__$1 = calc_state.call(null);
var inst_25068 = (inst_25066__$1 == null);
var inst_25069 = cljs.core.not.call(null,inst_25068);
var state_25160__$1 = (function (){var statearr_25165 = state_25160;
(statearr_25165[(8)] = inst_25066__$1);

return statearr_25165;
})();
if(inst_25069){
var statearr_25166_25227 = state_25160__$1;
(statearr_25166_25227[(1)] = (2));

} else {
var statearr_25167_25228 = state_25160__$1;
(statearr_25167_25228[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (24))){
var inst_25113 = (state_25160[(9)]);
var inst_25134 = (state_25160[(10)]);
var inst_25120 = (state_25160[(11)]);
var inst_25134__$1 = inst_25113.call(null,inst_25120);
var state_25160__$1 = (function (){var statearr_25168 = state_25160;
(statearr_25168[(10)] = inst_25134__$1);

return statearr_25168;
})();
if(cljs.core.truth_(inst_25134__$1)){
var statearr_25169_25229 = state_25160__$1;
(statearr_25169_25229[(1)] = (29));

} else {
var statearr_25170_25230 = state_25160__$1;
(statearr_25170_25230[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (4))){
var inst_25081 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25081)){
var statearr_25171_25231 = state_25160__$1;
(statearr_25171_25231[(1)] = (8));

} else {
var statearr_25172_25232 = state_25160__$1;
(statearr_25172_25232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (15))){
var inst_25107 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25107)){
var statearr_25173_25233 = state_25160__$1;
(statearr_25173_25233[(1)] = (19));

} else {
var statearr_25174_25234 = state_25160__$1;
(statearr_25174_25234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (21))){
var inst_25112 = (state_25160[(12)]);
var inst_25112__$1 = (state_25160[(2)]);
var inst_25113 = cljs.core.get.call(null,inst_25112__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25114 = cljs.core.get.call(null,inst_25112__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25115 = cljs.core.get.call(null,inst_25112__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25160__$1 = (function (){var statearr_25175 = state_25160;
(statearr_25175[(13)] = inst_25114);

(statearr_25175[(12)] = inst_25112__$1);

(statearr_25175[(9)] = inst_25113);

return statearr_25175;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25160__$1,(22),inst_25115);
} else {
if((state_val_25161 === (31))){
var inst_25142 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25142)){
var statearr_25176_25235 = state_25160__$1;
(statearr_25176_25235[(1)] = (32));

} else {
var statearr_25177_25236 = state_25160__$1;
(statearr_25177_25236[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (32))){
var inst_25119 = (state_25160[(14)]);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25160__$1,(35),out,inst_25119);
} else {
if((state_val_25161 === (33))){
var inst_25112 = (state_25160[(12)]);
var inst_25090 = inst_25112;
var state_25160__$1 = (function (){var statearr_25178 = state_25160;
(statearr_25178[(7)] = inst_25090);

return statearr_25178;
})();
var statearr_25179_25237 = state_25160__$1;
(statearr_25179_25237[(2)] = null);

(statearr_25179_25237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (13))){
var inst_25090 = (state_25160[(7)]);
var inst_25097 = inst_25090.cljs$lang$protocol_mask$partition0$;
var inst_25098 = (inst_25097 & (64));
var inst_25099 = inst_25090.cljs$core$ISeq$;
var inst_25100 = (inst_25098) || (inst_25099);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25100)){
var statearr_25180_25238 = state_25160__$1;
(statearr_25180_25238[(1)] = (16));

} else {
var statearr_25181_25239 = state_25160__$1;
(statearr_25181_25239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (22))){
var inst_25119 = (state_25160[(14)]);
var inst_25120 = (state_25160[(11)]);
var inst_25118 = (state_25160[(2)]);
var inst_25119__$1 = cljs.core.nth.call(null,inst_25118,(0),null);
var inst_25120__$1 = cljs.core.nth.call(null,inst_25118,(1),null);
var inst_25121 = (inst_25119__$1 == null);
var inst_25122 = cljs.core._EQ_.call(null,inst_25120__$1,change);
var inst_25123 = (inst_25121) || (inst_25122);
var state_25160__$1 = (function (){var statearr_25182 = state_25160;
(statearr_25182[(14)] = inst_25119__$1);

(statearr_25182[(11)] = inst_25120__$1);

return statearr_25182;
})();
if(cljs.core.truth_(inst_25123)){
var statearr_25183_25240 = state_25160__$1;
(statearr_25183_25240[(1)] = (23));

} else {
var statearr_25184_25241 = state_25160__$1;
(statearr_25184_25241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (36))){
var inst_25112 = (state_25160[(12)]);
var inst_25090 = inst_25112;
var state_25160__$1 = (function (){var statearr_25185 = state_25160;
(statearr_25185[(7)] = inst_25090);

return statearr_25185;
})();
var statearr_25186_25242 = state_25160__$1;
(statearr_25186_25242[(2)] = null);

(statearr_25186_25242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (29))){
var inst_25134 = (state_25160[(10)]);
var state_25160__$1 = state_25160;
var statearr_25187_25243 = state_25160__$1;
(statearr_25187_25243[(2)] = inst_25134);

(statearr_25187_25243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (6))){
var state_25160__$1 = state_25160;
var statearr_25188_25244 = state_25160__$1;
(statearr_25188_25244[(2)] = false);

(statearr_25188_25244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (28))){
var inst_25130 = (state_25160[(2)]);
var inst_25131 = calc_state.call(null);
var inst_25090 = inst_25131;
var state_25160__$1 = (function (){var statearr_25189 = state_25160;
(statearr_25189[(7)] = inst_25090);

(statearr_25189[(15)] = inst_25130);

return statearr_25189;
})();
var statearr_25190_25245 = state_25160__$1;
(statearr_25190_25245[(2)] = null);

(statearr_25190_25245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (25))){
var inst_25156 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25191_25246 = state_25160__$1;
(statearr_25191_25246[(2)] = inst_25156);

(statearr_25191_25246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (34))){
var inst_25154 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25192_25247 = state_25160__$1;
(statearr_25192_25247[(2)] = inst_25154);

(statearr_25192_25247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (17))){
var state_25160__$1 = state_25160;
var statearr_25193_25248 = state_25160__$1;
(statearr_25193_25248[(2)] = false);

(statearr_25193_25248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (3))){
var state_25160__$1 = state_25160;
var statearr_25194_25249 = state_25160__$1;
(statearr_25194_25249[(2)] = false);

(statearr_25194_25249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (12))){
var inst_25158 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25160__$1,inst_25158);
} else {
if((state_val_25161 === (2))){
var inst_25066 = (state_25160[(8)]);
var inst_25071 = inst_25066.cljs$lang$protocol_mask$partition0$;
var inst_25072 = (inst_25071 & (64));
var inst_25073 = inst_25066.cljs$core$ISeq$;
var inst_25074 = (inst_25072) || (inst_25073);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25074)){
var statearr_25195_25250 = state_25160__$1;
(statearr_25195_25250[(1)] = (5));

} else {
var statearr_25196_25251 = state_25160__$1;
(statearr_25196_25251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (23))){
var inst_25119 = (state_25160[(14)]);
var inst_25125 = (inst_25119 == null);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25125)){
var statearr_25197_25252 = state_25160__$1;
(statearr_25197_25252[(1)] = (26));

} else {
var statearr_25198_25253 = state_25160__$1;
(statearr_25198_25253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (35))){
var inst_25145 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25145)){
var statearr_25199_25254 = state_25160__$1;
(statearr_25199_25254[(1)] = (36));

} else {
var statearr_25200_25255 = state_25160__$1;
(statearr_25200_25255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (19))){
var inst_25090 = (state_25160[(7)]);
var inst_25109 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25090);
var state_25160__$1 = state_25160;
var statearr_25201_25256 = state_25160__$1;
(statearr_25201_25256[(2)] = inst_25109);

(statearr_25201_25256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (11))){
var inst_25090 = (state_25160[(7)]);
var inst_25094 = (inst_25090 == null);
var inst_25095 = cljs.core.not.call(null,inst_25094);
var state_25160__$1 = state_25160;
if(inst_25095){
var statearr_25202_25257 = state_25160__$1;
(statearr_25202_25257[(1)] = (13));

} else {
var statearr_25203_25258 = state_25160__$1;
(statearr_25203_25258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (9))){
var inst_25066 = (state_25160[(8)]);
var state_25160__$1 = state_25160;
var statearr_25204_25259 = state_25160__$1;
(statearr_25204_25259[(2)] = inst_25066);

(statearr_25204_25259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (5))){
var state_25160__$1 = state_25160;
var statearr_25205_25260 = state_25160__$1;
(statearr_25205_25260[(2)] = true);

(statearr_25205_25260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (14))){
var state_25160__$1 = state_25160;
var statearr_25206_25261 = state_25160__$1;
(statearr_25206_25261[(2)] = false);

(statearr_25206_25261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (26))){
var inst_25120 = (state_25160[(11)]);
var inst_25127 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25120);
var state_25160__$1 = state_25160;
var statearr_25207_25262 = state_25160__$1;
(statearr_25207_25262[(2)] = inst_25127);

(statearr_25207_25262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (16))){
var state_25160__$1 = state_25160;
var statearr_25208_25263 = state_25160__$1;
(statearr_25208_25263[(2)] = true);

(statearr_25208_25263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (38))){
var inst_25150 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25209_25264 = state_25160__$1;
(statearr_25209_25264[(2)] = inst_25150);

(statearr_25209_25264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (30))){
var inst_25114 = (state_25160[(13)]);
var inst_25113 = (state_25160[(9)]);
var inst_25120 = (state_25160[(11)]);
var inst_25137 = cljs.core.empty_QMARK_.call(null,inst_25113);
var inst_25138 = inst_25114.call(null,inst_25120);
var inst_25139 = cljs.core.not.call(null,inst_25138);
var inst_25140 = (inst_25137) && (inst_25139);
var state_25160__$1 = state_25160;
var statearr_25210_25265 = state_25160__$1;
(statearr_25210_25265[(2)] = inst_25140);

(statearr_25210_25265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (10))){
var inst_25066 = (state_25160[(8)]);
var inst_25086 = (state_25160[(2)]);
var inst_25087 = cljs.core.get.call(null,inst_25086,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25088 = cljs.core.get.call(null,inst_25086,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25089 = cljs.core.get.call(null,inst_25086,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25090 = inst_25066;
var state_25160__$1 = (function (){var statearr_25211 = state_25160;
(statearr_25211[(7)] = inst_25090);

(statearr_25211[(16)] = inst_25087);

(statearr_25211[(17)] = inst_25089);

(statearr_25211[(18)] = inst_25088);

return statearr_25211;
})();
var statearr_25212_25266 = state_25160__$1;
(statearr_25212_25266[(2)] = null);

(statearr_25212_25266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (18))){
var inst_25104 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25213_25267 = state_25160__$1;
(statearr_25213_25267[(2)] = inst_25104);

(statearr_25213_25267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (37))){
var state_25160__$1 = state_25160;
var statearr_25214_25268 = state_25160__$1;
(statearr_25214_25268[(2)] = null);

(statearr_25214_25268[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (8))){
var inst_25066 = (state_25160[(8)]);
var inst_25083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25066);
var state_25160__$1 = state_25160;
var statearr_25215_25269 = state_25160__$1;
(statearr_25215_25269[(2)] = inst_25083);

(statearr_25215_25269[(1)] = (10));


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
});})(c__23510__auto___25223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23398__auto__,c__23510__auto___25223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23399__auto__ = null;
var cljs$core$async$mix_$_state_machine__23399__auto____0 = (function (){
var statearr_25219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25219[(0)] = cljs$core$async$mix_$_state_machine__23399__auto__);

(statearr_25219[(1)] = (1));

return statearr_25219;
});
var cljs$core$async$mix_$_state_machine__23399__auto____1 = (function (state_25160){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_25160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e25220){if((e25220 instanceof Object)){
var ex__23402__auto__ = e25220;
var statearr_25221_25270 = state_25160;
(statearr_25221_25270[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25271 = state_25160;
state_25160 = G__25271;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23399__auto__ = function(state_25160){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23399__auto____1.call(this,state_25160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23399__auto____0;
cljs$core$async$mix_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23399__auto____1;
return cljs$core$async$mix_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___25223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23512__auto__ = (function (){var statearr_25222 = f__23511__auto__.call(null);
(statearr_25222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___25223);

return statearr_25222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___25223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__21913__auto__ = (((p == null))?null:p);
var m__21914__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21914__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__21913__auto__ = (((p == null))?null:p);
var m__21914__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,p,v,ch);
} else {
var m__21914__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25272 = [];
var len__22320__auto___25275 = arguments.length;
var i__22321__auto___25276 = (0);
while(true){
if((i__22321__auto___25276 < len__22320__auto___25275)){
args25272.push((arguments[i__22321__auto___25276]));

var G__25277 = (i__22321__auto___25276 + (1));
i__22321__auto___25276 = G__25277;
continue;
} else {
}
break;
}

var G__25274 = args25272.length;
switch (G__25274) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25272.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21913__auto__ = (((p == null))?null:p);
var m__21914__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,p);
} else {
var m__21914__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,p);
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
var x__21913__auto__ = (((p == null))?null:p);
var m__21914__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21913__auto__)]);
if(!((m__21914__auto__ == null))){
return m__21914__auto__.call(null,p,v);
} else {
var m__21914__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21914__auto____$1 == null))){
return m__21914__auto____$1.call(null,p,v);
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
var args25280 = [];
var len__22320__auto___25405 = arguments.length;
var i__22321__auto___25406 = (0);
while(true){
if((i__22321__auto___25406 < len__22320__auto___25405)){
args25280.push((arguments[i__22321__auto___25406]));

var G__25407 = (i__22321__auto___25406 + (1));
i__22321__auto___25406 = G__25407;
continue;
} else {
}
break;
}

var G__25282 = args25280.length;
switch (G__25282) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25280.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21250__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21250__auto__,mults){
return (function (p1__25279_SHARP_){
if(cljs.core.truth_(p1__25279_SHARP_.call(null,topic))){
return p1__25279_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25279_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21250__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25283 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25284){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25284 = meta25284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25285,meta25284__$1){
var self__ = this;
var _25285__$1 = this;
return (new cljs.core.async.t_cljs$core$async25283(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25284__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25285){
var self__ = this;
var _25285__$1 = this;
return self__.meta25284;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25283.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25283.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25284","meta25284",-1091068636,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25283";

cljs.core.async.t_cljs$core$async25283.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async25283");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25283 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25283(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25284){
return (new cljs.core.async.t_cljs$core$async25283(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25284));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25283(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23510__auto___25409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___25409,mults,ensure_mult,p){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___25409,mults,ensure_mult,p){
return (function (state_25357){
var state_val_25358 = (state_25357[(1)]);
if((state_val_25358 === (7))){
var inst_25353 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25359_25410 = state_25357__$1;
(statearr_25359_25410[(2)] = inst_25353);

(statearr_25359_25410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (20))){
var state_25357__$1 = state_25357;
var statearr_25360_25411 = state_25357__$1;
(statearr_25360_25411[(2)] = null);

(statearr_25360_25411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (1))){
var state_25357__$1 = state_25357;
var statearr_25361_25412 = state_25357__$1;
(statearr_25361_25412[(2)] = null);

(statearr_25361_25412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (24))){
var inst_25336 = (state_25357[(7)]);
var inst_25345 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25336);
var state_25357__$1 = state_25357;
var statearr_25362_25413 = state_25357__$1;
(statearr_25362_25413[(2)] = inst_25345);

(statearr_25362_25413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (4))){
var inst_25288 = (state_25357[(8)]);
var inst_25288__$1 = (state_25357[(2)]);
var inst_25289 = (inst_25288__$1 == null);
var state_25357__$1 = (function (){var statearr_25363 = state_25357;
(statearr_25363[(8)] = inst_25288__$1);

return statearr_25363;
})();
if(cljs.core.truth_(inst_25289)){
var statearr_25364_25414 = state_25357__$1;
(statearr_25364_25414[(1)] = (5));

} else {
var statearr_25365_25415 = state_25357__$1;
(statearr_25365_25415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (15))){
var inst_25330 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25366_25416 = state_25357__$1;
(statearr_25366_25416[(2)] = inst_25330);

(statearr_25366_25416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (21))){
var inst_25350 = (state_25357[(2)]);
var state_25357__$1 = (function (){var statearr_25367 = state_25357;
(statearr_25367[(9)] = inst_25350);

return statearr_25367;
})();
var statearr_25368_25417 = state_25357__$1;
(statearr_25368_25417[(2)] = null);

(statearr_25368_25417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (13))){
var inst_25312 = (state_25357[(10)]);
var inst_25314 = cljs.core.chunked_seq_QMARK_.call(null,inst_25312);
var state_25357__$1 = state_25357;
if(inst_25314){
var statearr_25369_25418 = state_25357__$1;
(statearr_25369_25418[(1)] = (16));

} else {
var statearr_25370_25419 = state_25357__$1;
(statearr_25370_25419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (22))){
var inst_25342 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
if(cljs.core.truth_(inst_25342)){
var statearr_25371_25420 = state_25357__$1;
(statearr_25371_25420[(1)] = (23));

} else {
var statearr_25372_25421 = state_25357__$1;
(statearr_25372_25421[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (6))){
var inst_25336 = (state_25357[(7)]);
var inst_25338 = (state_25357[(11)]);
var inst_25288 = (state_25357[(8)]);
var inst_25336__$1 = topic_fn.call(null,inst_25288);
var inst_25337 = cljs.core.deref.call(null,mults);
var inst_25338__$1 = cljs.core.get.call(null,inst_25337,inst_25336__$1);
var state_25357__$1 = (function (){var statearr_25373 = state_25357;
(statearr_25373[(7)] = inst_25336__$1);

(statearr_25373[(11)] = inst_25338__$1);

return statearr_25373;
})();
if(cljs.core.truth_(inst_25338__$1)){
var statearr_25374_25422 = state_25357__$1;
(statearr_25374_25422[(1)] = (19));

} else {
var statearr_25375_25423 = state_25357__$1;
(statearr_25375_25423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (25))){
var inst_25347 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25376_25424 = state_25357__$1;
(statearr_25376_25424[(2)] = inst_25347);

(statearr_25376_25424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (17))){
var inst_25312 = (state_25357[(10)]);
var inst_25321 = cljs.core.first.call(null,inst_25312);
var inst_25322 = cljs.core.async.muxch_STAR_.call(null,inst_25321);
var inst_25323 = cljs.core.async.close_BANG_.call(null,inst_25322);
var inst_25324 = cljs.core.next.call(null,inst_25312);
var inst_25298 = inst_25324;
var inst_25299 = null;
var inst_25300 = (0);
var inst_25301 = (0);
var state_25357__$1 = (function (){var statearr_25377 = state_25357;
(statearr_25377[(12)] = inst_25301);

(statearr_25377[(13)] = inst_25300);

(statearr_25377[(14)] = inst_25298);

(statearr_25377[(15)] = inst_25299);

(statearr_25377[(16)] = inst_25323);

return statearr_25377;
})();
var statearr_25378_25425 = state_25357__$1;
(statearr_25378_25425[(2)] = null);

(statearr_25378_25425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (3))){
var inst_25355 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25357__$1,inst_25355);
} else {
if((state_val_25358 === (12))){
var inst_25332 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25379_25426 = state_25357__$1;
(statearr_25379_25426[(2)] = inst_25332);

(statearr_25379_25426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (2))){
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25357__$1,(4),ch);
} else {
if((state_val_25358 === (23))){
var state_25357__$1 = state_25357;
var statearr_25380_25427 = state_25357__$1;
(statearr_25380_25427[(2)] = null);

(statearr_25380_25427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (19))){
var inst_25338 = (state_25357[(11)]);
var inst_25288 = (state_25357[(8)]);
var inst_25340 = cljs.core.async.muxch_STAR_.call(null,inst_25338);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25357__$1,(22),inst_25340,inst_25288);
} else {
if((state_val_25358 === (11))){
var inst_25298 = (state_25357[(14)]);
var inst_25312 = (state_25357[(10)]);
var inst_25312__$1 = cljs.core.seq.call(null,inst_25298);
var state_25357__$1 = (function (){var statearr_25381 = state_25357;
(statearr_25381[(10)] = inst_25312__$1);

return statearr_25381;
})();
if(inst_25312__$1){
var statearr_25382_25428 = state_25357__$1;
(statearr_25382_25428[(1)] = (13));

} else {
var statearr_25383_25429 = state_25357__$1;
(statearr_25383_25429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (9))){
var inst_25334 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25384_25430 = state_25357__$1;
(statearr_25384_25430[(2)] = inst_25334);

(statearr_25384_25430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (5))){
var inst_25295 = cljs.core.deref.call(null,mults);
var inst_25296 = cljs.core.vals.call(null,inst_25295);
var inst_25297 = cljs.core.seq.call(null,inst_25296);
var inst_25298 = inst_25297;
var inst_25299 = null;
var inst_25300 = (0);
var inst_25301 = (0);
var state_25357__$1 = (function (){var statearr_25385 = state_25357;
(statearr_25385[(12)] = inst_25301);

(statearr_25385[(13)] = inst_25300);

(statearr_25385[(14)] = inst_25298);

(statearr_25385[(15)] = inst_25299);

return statearr_25385;
})();
var statearr_25386_25431 = state_25357__$1;
(statearr_25386_25431[(2)] = null);

(statearr_25386_25431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (14))){
var state_25357__$1 = state_25357;
var statearr_25390_25432 = state_25357__$1;
(statearr_25390_25432[(2)] = null);

(statearr_25390_25432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (16))){
var inst_25312 = (state_25357[(10)]);
var inst_25316 = cljs.core.chunk_first.call(null,inst_25312);
var inst_25317 = cljs.core.chunk_rest.call(null,inst_25312);
var inst_25318 = cljs.core.count.call(null,inst_25316);
var inst_25298 = inst_25317;
var inst_25299 = inst_25316;
var inst_25300 = inst_25318;
var inst_25301 = (0);
var state_25357__$1 = (function (){var statearr_25391 = state_25357;
(statearr_25391[(12)] = inst_25301);

(statearr_25391[(13)] = inst_25300);

(statearr_25391[(14)] = inst_25298);

(statearr_25391[(15)] = inst_25299);

return statearr_25391;
})();
var statearr_25392_25433 = state_25357__$1;
(statearr_25392_25433[(2)] = null);

(statearr_25392_25433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (10))){
var inst_25301 = (state_25357[(12)]);
var inst_25300 = (state_25357[(13)]);
var inst_25298 = (state_25357[(14)]);
var inst_25299 = (state_25357[(15)]);
var inst_25306 = cljs.core._nth.call(null,inst_25299,inst_25301);
var inst_25307 = cljs.core.async.muxch_STAR_.call(null,inst_25306);
var inst_25308 = cljs.core.async.close_BANG_.call(null,inst_25307);
var inst_25309 = (inst_25301 + (1));
var tmp25387 = inst_25300;
var tmp25388 = inst_25298;
var tmp25389 = inst_25299;
var inst_25298__$1 = tmp25388;
var inst_25299__$1 = tmp25389;
var inst_25300__$1 = tmp25387;
var inst_25301__$1 = inst_25309;
var state_25357__$1 = (function (){var statearr_25393 = state_25357;
(statearr_25393[(12)] = inst_25301__$1);

(statearr_25393[(13)] = inst_25300__$1);

(statearr_25393[(17)] = inst_25308);

(statearr_25393[(14)] = inst_25298__$1);

(statearr_25393[(15)] = inst_25299__$1);

return statearr_25393;
})();
var statearr_25394_25434 = state_25357__$1;
(statearr_25394_25434[(2)] = null);

(statearr_25394_25434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (18))){
var inst_25327 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25395_25435 = state_25357__$1;
(statearr_25395_25435[(2)] = inst_25327);

(statearr_25395_25435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (8))){
var inst_25301 = (state_25357[(12)]);
var inst_25300 = (state_25357[(13)]);
var inst_25303 = (inst_25301 < inst_25300);
var inst_25304 = inst_25303;
var state_25357__$1 = state_25357;
if(cljs.core.truth_(inst_25304)){
var statearr_25396_25436 = state_25357__$1;
(statearr_25396_25436[(1)] = (10));

} else {
var statearr_25397_25437 = state_25357__$1;
(statearr_25397_25437[(1)] = (11));

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
});})(c__23510__auto___25409,mults,ensure_mult,p))
;
return ((function (switch__23398__auto__,c__23510__auto___25409,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_25401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25401[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_25401[(1)] = (1));

return statearr_25401;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_25357){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_25357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e25402){if((e25402 instanceof Object)){
var ex__23402__auto__ = e25402;
var statearr_25403_25438 = state_25357;
(statearr_25403_25438[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25439 = state_25357;
state_25357 = G__25439;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_25357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_25357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___25409,mults,ensure_mult,p))
})();
var state__23512__auto__ = (function (){var statearr_25404 = f__23511__auto__.call(null);
(statearr_25404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___25409);

return statearr_25404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___25409,mults,ensure_mult,p))
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
var args25440 = [];
var len__22320__auto___25443 = arguments.length;
var i__22321__auto___25444 = (0);
while(true){
if((i__22321__auto___25444 < len__22320__auto___25443)){
args25440.push((arguments[i__22321__auto___25444]));

var G__25445 = (i__22321__auto___25444 + (1));
i__22321__auto___25444 = G__25445;
continue;
} else {
}
break;
}

var G__25442 = args25440.length;
switch (G__25442) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25440.length)].join('')));

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
var args25447 = [];
var len__22320__auto___25450 = arguments.length;
var i__22321__auto___25451 = (0);
while(true){
if((i__22321__auto___25451 < len__22320__auto___25450)){
args25447.push((arguments[i__22321__auto___25451]));

var G__25452 = (i__22321__auto___25451 + (1));
i__22321__auto___25451 = G__25452;
continue;
} else {
}
break;
}

var G__25449 = args25447.length;
switch (G__25449) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25447.length)].join('')));

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
var args25454 = [];
var len__22320__auto___25525 = arguments.length;
var i__22321__auto___25526 = (0);
while(true){
if((i__22321__auto___25526 < len__22320__auto___25525)){
args25454.push((arguments[i__22321__auto___25526]));

var G__25527 = (i__22321__auto___25526 + (1));
i__22321__auto___25526 = G__25527;
continue;
} else {
}
break;
}

var G__25456 = args25454.length;
switch (G__25456) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25454.length)].join('')));

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
var c__23510__auto___25529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___25529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___25529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25495){
var state_val_25496 = (state_25495[(1)]);
if((state_val_25496 === (7))){
var state_25495__$1 = state_25495;
var statearr_25497_25530 = state_25495__$1;
(statearr_25497_25530[(2)] = null);

(statearr_25497_25530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (1))){
var state_25495__$1 = state_25495;
var statearr_25498_25531 = state_25495__$1;
(statearr_25498_25531[(2)] = null);

(statearr_25498_25531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (4))){
var inst_25459 = (state_25495[(7)]);
var inst_25461 = (inst_25459 < cnt);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25461)){
var statearr_25499_25532 = state_25495__$1;
(statearr_25499_25532[(1)] = (6));

} else {
var statearr_25500_25533 = state_25495__$1;
(statearr_25500_25533[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (15))){
var inst_25491 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25501_25534 = state_25495__$1;
(statearr_25501_25534[(2)] = inst_25491);

(statearr_25501_25534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (13))){
var inst_25484 = cljs.core.async.close_BANG_.call(null,out);
var state_25495__$1 = state_25495;
var statearr_25502_25535 = state_25495__$1;
(statearr_25502_25535[(2)] = inst_25484);

(statearr_25502_25535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (6))){
var state_25495__$1 = state_25495;
var statearr_25503_25536 = state_25495__$1;
(statearr_25503_25536[(2)] = null);

(statearr_25503_25536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (3))){
var inst_25493 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25495__$1,inst_25493);
} else {
if((state_val_25496 === (12))){
var inst_25481 = (state_25495[(8)]);
var inst_25481__$1 = (state_25495[(2)]);
var inst_25482 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25481__$1);
var state_25495__$1 = (function (){var statearr_25504 = state_25495;
(statearr_25504[(8)] = inst_25481__$1);

return statearr_25504;
})();
if(cljs.core.truth_(inst_25482)){
var statearr_25505_25537 = state_25495__$1;
(statearr_25505_25537[(1)] = (13));

} else {
var statearr_25506_25538 = state_25495__$1;
(statearr_25506_25538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (2))){
var inst_25458 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25459 = (0);
var state_25495__$1 = (function (){var statearr_25507 = state_25495;
(statearr_25507[(9)] = inst_25458);

(statearr_25507[(7)] = inst_25459);

return statearr_25507;
})();
var statearr_25508_25539 = state_25495__$1;
(statearr_25508_25539[(2)] = null);

(statearr_25508_25539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (11))){
var inst_25459 = (state_25495[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25495,(10),Object,null,(9));
var inst_25468 = chs__$1.call(null,inst_25459);
var inst_25469 = done.call(null,inst_25459);
var inst_25470 = cljs.core.async.take_BANG_.call(null,inst_25468,inst_25469);
var state_25495__$1 = state_25495;
var statearr_25509_25540 = state_25495__$1;
(statearr_25509_25540[(2)] = inst_25470);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25495__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (9))){
var inst_25459 = (state_25495[(7)]);
var inst_25472 = (state_25495[(2)]);
var inst_25473 = (inst_25459 + (1));
var inst_25459__$1 = inst_25473;
var state_25495__$1 = (function (){var statearr_25510 = state_25495;
(statearr_25510[(7)] = inst_25459__$1);

(statearr_25510[(10)] = inst_25472);

return statearr_25510;
})();
var statearr_25511_25541 = state_25495__$1;
(statearr_25511_25541[(2)] = null);

(statearr_25511_25541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (5))){
var inst_25479 = (state_25495[(2)]);
var state_25495__$1 = (function (){var statearr_25512 = state_25495;
(statearr_25512[(11)] = inst_25479);

return statearr_25512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(12),dchan);
} else {
if((state_val_25496 === (14))){
var inst_25481 = (state_25495[(8)]);
var inst_25486 = cljs.core.apply.call(null,f,inst_25481);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25495__$1,(16),out,inst_25486);
} else {
if((state_val_25496 === (16))){
var inst_25488 = (state_25495[(2)]);
var state_25495__$1 = (function (){var statearr_25513 = state_25495;
(statearr_25513[(12)] = inst_25488);

return statearr_25513;
})();
var statearr_25514_25542 = state_25495__$1;
(statearr_25514_25542[(2)] = null);

(statearr_25514_25542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (10))){
var inst_25463 = (state_25495[(2)]);
var inst_25464 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25495__$1 = (function (){var statearr_25515 = state_25495;
(statearr_25515[(13)] = inst_25463);

return statearr_25515;
})();
var statearr_25516_25543 = state_25495__$1;
(statearr_25516_25543[(2)] = inst_25464);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25495__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (8))){
var inst_25477 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25517_25544 = state_25495__$1;
(statearr_25517_25544[(2)] = inst_25477);

(statearr_25517_25544[(1)] = (5));


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
});})(c__23510__auto___25529,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23398__auto__,c__23510__auto___25529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_25521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25521[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_25521[(1)] = (1));

return statearr_25521;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_25495){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_25495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e25522){if((e25522 instanceof Object)){
var ex__23402__auto__ = e25522;
var statearr_25523_25545 = state_25495;
(statearr_25523_25545[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25546 = state_25495;
state_25495 = G__25546;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_25495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_25495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___25529,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23512__auto__ = (function (){var statearr_25524 = f__23511__auto__.call(null);
(statearr_25524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___25529);

return statearr_25524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___25529,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25548 = [];
var len__22320__auto___25604 = arguments.length;
var i__22321__auto___25605 = (0);
while(true){
if((i__22321__auto___25605 < len__22320__auto___25604)){
args25548.push((arguments[i__22321__auto___25605]));

var G__25606 = (i__22321__auto___25605 + (1));
i__22321__auto___25605 = G__25606;
continue;
} else {
}
break;
}

var G__25550 = args25548.length;
switch (G__25550) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25548.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23510__auto___25608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___25608,out){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___25608,out){
return (function (state_25580){
var state_val_25581 = (state_25580[(1)]);
if((state_val_25581 === (7))){
var inst_25559 = (state_25580[(7)]);
var inst_25560 = (state_25580[(8)]);
var inst_25559__$1 = (state_25580[(2)]);
var inst_25560__$1 = cljs.core.nth.call(null,inst_25559__$1,(0),null);
var inst_25561 = cljs.core.nth.call(null,inst_25559__$1,(1),null);
var inst_25562 = (inst_25560__$1 == null);
var state_25580__$1 = (function (){var statearr_25582 = state_25580;
(statearr_25582[(7)] = inst_25559__$1);

(statearr_25582[(9)] = inst_25561);

(statearr_25582[(8)] = inst_25560__$1);

return statearr_25582;
})();
if(cljs.core.truth_(inst_25562)){
var statearr_25583_25609 = state_25580__$1;
(statearr_25583_25609[(1)] = (8));

} else {
var statearr_25584_25610 = state_25580__$1;
(statearr_25584_25610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (1))){
var inst_25551 = cljs.core.vec.call(null,chs);
var inst_25552 = inst_25551;
var state_25580__$1 = (function (){var statearr_25585 = state_25580;
(statearr_25585[(10)] = inst_25552);

return statearr_25585;
})();
var statearr_25586_25611 = state_25580__$1;
(statearr_25586_25611[(2)] = null);

(statearr_25586_25611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (4))){
var inst_25552 = (state_25580[(10)]);
var state_25580__$1 = state_25580;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25580__$1,(7),inst_25552);
} else {
if((state_val_25581 === (6))){
var inst_25576 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
var statearr_25587_25612 = state_25580__$1;
(statearr_25587_25612[(2)] = inst_25576);

(statearr_25587_25612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (3))){
var inst_25578 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25580__$1,inst_25578);
} else {
if((state_val_25581 === (2))){
var inst_25552 = (state_25580[(10)]);
var inst_25554 = cljs.core.count.call(null,inst_25552);
var inst_25555 = (inst_25554 > (0));
var state_25580__$1 = state_25580;
if(cljs.core.truth_(inst_25555)){
var statearr_25589_25613 = state_25580__$1;
(statearr_25589_25613[(1)] = (4));

} else {
var statearr_25590_25614 = state_25580__$1;
(statearr_25590_25614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (11))){
var inst_25552 = (state_25580[(10)]);
var inst_25569 = (state_25580[(2)]);
var tmp25588 = inst_25552;
var inst_25552__$1 = tmp25588;
var state_25580__$1 = (function (){var statearr_25591 = state_25580;
(statearr_25591[(11)] = inst_25569);

(statearr_25591[(10)] = inst_25552__$1);

return statearr_25591;
})();
var statearr_25592_25615 = state_25580__$1;
(statearr_25592_25615[(2)] = null);

(statearr_25592_25615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (9))){
var inst_25560 = (state_25580[(8)]);
var state_25580__$1 = state_25580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25580__$1,(11),out,inst_25560);
} else {
if((state_val_25581 === (5))){
var inst_25574 = cljs.core.async.close_BANG_.call(null,out);
var state_25580__$1 = state_25580;
var statearr_25593_25616 = state_25580__$1;
(statearr_25593_25616[(2)] = inst_25574);

(statearr_25593_25616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (10))){
var inst_25572 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
var statearr_25594_25617 = state_25580__$1;
(statearr_25594_25617[(2)] = inst_25572);

(statearr_25594_25617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (8))){
var inst_25559 = (state_25580[(7)]);
var inst_25561 = (state_25580[(9)]);
var inst_25560 = (state_25580[(8)]);
var inst_25552 = (state_25580[(10)]);
var inst_25564 = (function (){var cs = inst_25552;
var vec__25557 = inst_25559;
var v = inst_25560;
var c = inst_25561;
return ((function (cs,vec__25557,v,c,inst_25559,inst_25561,inst_25560,inst_25552,state_val_25581,c__23510__auto___25608,out){
return (function (p1__25547_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25547_SHARP_);
});
;})(cs,vec__25557,v,c,inst_25559,inst_25561,inst_25560,inst_25552,state_val_25581,c__23510__auto___25608,out))
})();
var inst_25565 = cljs.core.filterv.call(null,inst_25564,inst_25552);
var inst_25552__$1 = inst_25565;
var state_25580__$1 = (function (){var statearr_25595 = state_25580;
(statearr_25595[(10)] = inst_25552__$1);

return statearr_25595;
})();
var statearr_25596_25618 = state_25580__$1;
(statearr_25596_25618[(2)] = null);

(statearr_25596_25618[(1)] = (2));


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
});})(c__23510__auto___25608,out))
;
return ((function (switch__23398__auto__,c__23510__auto___25608,out){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_25600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25600[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_25600[(1)] = (1));

return statearr_25600;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_25580){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_25580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e25601){if((e25601 instanceof Object)){
var ex__23402__auto__ = e25601;
var statearr_25602_25619 = state_25580;
(statearr_25602_25619[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25620 = state_25580;
state_25580 = G__25620;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_25580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_25580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___25608,out))
})();
var state__23512__auto__ = (function (){var statearr_25603 = f__23511__auto__.call(null);
(statearr_25603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___25608);

return statearr_25603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___25608,out))
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
var args25621 = [];
var len__22320__auto___25670 = arguments.length;
var i__22321__auto___25671 = (0);
while(true){
if((i__22321__auto___25671 < len__22320__auto___25670)){
args25621.push((arguments[i__22321__auto___25671]));

var G__25672 = (i__22321__auto___25671 + (1));
i__22321__auto___25671 = G__25672;
continue;
} else {
}
break;
}

var G__25623 = args25621.length;
switch (G__25623) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25621.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23510__auto___25674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___25674,out){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___25674,out){
return (function (state_25647){
var state_val_25648 = (state_25647[(1)]);
if((state_val_25648 === (7))){
var inst_25629 = (state_25647[(7)]);
var inst_25629__$1 = (state_25647[(2)]);
var inst_25630 = (inst_25629__$1 == null);
var inst_25631 = cljs.core.not.call(null,inst_25630);
var state_25647__$1 = (function (){var statearr_25649 = state_25647;
(statearr_25649[(7)] = inst_25629__$1);

return statearr_25649;
})();
if(inst_25631){
var statearr_25650_25675 = state_25647__$1;
(statearr_25650_25675[(1)] = (8));

} else {
var statearr_25651_25676 = state_25647__$1;
(statearr_25651_25676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (1))){
var inst_25624 = (0);
var state_25647__$1 = (function (){var statearr_25652 = state_25647;
(statearr_25652[(8)] = inst_25624);

return statearr_25652;
})();
var statearr_25653_25677 = state_25647__$1;
(statearr_25653_25677[(2)] = null);

(statearr_25653_25677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (4))){
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25647__$1,(7),ch);
} else {
if((state_val_25648 === (6))){
var inst_25642 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25654_25678 = state_25647__$1;
(statearr_25654_25678[(2)] = inst_25642);

(statearr_25654_25678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (3))){
var inst_25644 = (state_25647[(2)]);
var inst_25645 = cljs.core.async.close_BANG_.call(null,out);
var state_25647__$1 = (function (){var statearr_25655 = state_25647;
(statearr_25655[(9)] = inst_25644);

return statearr_25655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25647__$1,inst_25645);
} else {
if((state_val_25648 === (2))){
var inst_25624 = (state_25647[(8)]);
var inst_25626 = (inst_25624 < n);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25626)){
var statearr_25656_25679 = state_25647__$1;
(statearr_25656_25679[(1)] = (4));

} else {
var statearr_25657_25680 = state_25647__$1;
(statearr_25657_25680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (11))){
var inst_25624 = (state_25647[(8)]);
var inst_25634 = (state_25647[(2)]);
var inst_25635 = (inst_25624 + (1));
var inst_25624__$1 = inst_25635;
var state_25647__$1 = (function (){var statearr_25658 = state_25647;
(statearr_25658[(10)] = inst_25634);

(statearr_25658[(8)] = inst_25624__$1);

return statearr_25658;
})();
var statearr_25659_25681 = state_25647__$1;
(statearr_25659_25681[(2)] = null);

(statearr_25659_25681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (9))){
var state_25647__$1 = state_25647;
var statearr_25660_25682 = state_25647__$1;
(statearr_25660_25682[(2)] = null);

(statearr_25660_25682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (5))){
var state_25647__$1 = state_25647;
var statearr_25661_25683 = state_25647__$1;
(statearr_25661_25683[(2)] = null);

(statearr_25661_25683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (10))){
var inst_25639 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25662_25684 = state_25647__$1;
(statearr_25662_25684[(2)] = inst_25639);

(statearr_25662_25684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (8))){
var inst_25629 = (state_25647[(7)]);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25647__$1,(11),out,inst_25629);
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
});})(c__23510__auto___25674,out))
;
return ((function (switch__23398__auto__,c__23510__auto___25674,out){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_25666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25666[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_25666[(1)] = (1));

return statearr_25666;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_25647){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_25647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e25667){if((e25667 instanceof Object)){
var ex__23402__auto__ = e25667;
var statearr_25668_25685 = state_25647;
(statearr_25668_25685[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25686 = state_25647;
state_25647 = G__25686;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_25647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_25647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___25674,out))
})();
var state__23512__auto__ = (function (){var statearr_25669 = f__23511__auto__.call(null);
(statearr_25669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___25674);

return statearr_25669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___25674,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25694 = (function (map_LT_,f,ch,meta25695){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25695 = meta25695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25696,meta25695__$1){
var self__ = this;
var _25696__$1 = this;
return (new cljs.core.async.t_cljs$core$async25694(self__.map_LT_,self__.f,self__.ch,meta25695__$1));
});

cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25696){
var self__ = this;
var _25696__$1 = this;
return self__.meta25695;
});

cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25697 = (function (map_LT_,f,ch,meta25695,_,fn1,meta25698){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25695 = meta25695;
this._ = _;
this.fn1 = fn1;
this.meta25698 = meta25698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25699,meta25698__$1){
var self__ = this;
var _25699__$1 = this;
return (new cljs.core.async.t_cljs$core$async25697(self__.map_LT_,self__.f,self__.ch,self__.meta25695,self__._,self__.fn1,meta25698__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25699){
var self__ = this;
var _25699__$1 = this;
return self__.meta25698;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25687_SHARP_){
return f1.call(null,(((p1__25687_SHARP_ == null))?null:self__.f.call(null,p1__25687_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25697.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25695","meta25695",384233742,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25694","cljs.core.async/t_cljs$core$async25694",-777075713,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25698","meta25698",-1800483638,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25697";

cljs.core.async.t_cljs$core$async25697.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async25697");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25697 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25697(map_LT___$1,f__$1,ch__$1,meta25695__$1,___$2,fn1__$1,meta25698){
return (new cljs.core.async.t_cljs$core$async25697(map_LT___$1,f__$1,ch__$1,meta25695__$1,___$2,fn1__$1,meta25698));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25697(self__.map_LT_,self__.f,self__.ch,self__.meta25695,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21238__auto__ = ret;
if(cljs.core.truth_(and__21238__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21238__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25695","meta25695",384233742,null)], null);
});

cljs.core.async.t_cljs$core$async25694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25694";

cljs.core.async.t_cljs$core$async25694.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async25694");
});

cljs.core.async.__GT_t_cljs$core$async25694 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25694(map_LT___$1,f__$1,ch__$1,meta25695){
return (new cljs.core.async.t_cljs$core$async25694(map_LT___$1,f__$1,ch__$1,meta25695));
});

}

return (new cljs.core.async.t_cljs$core$async25694(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25703 = (function (map_GT_,f,ch,meta25704){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25704 = meta25704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25705,meta25704__$1){
var self__ = this;
var _25705__$1 = this;
return (new cljs.core.async.t_cljs$core$async25703(self__.map_GT_,self__.f,self__.ch,meta25704__$1));
});

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25705){
var self__ = this;
var _25705__$1 = this;
return self__.meta25704;
});

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25704","meta25704",-1402234529,null)], null);
});

cljs.core.async.t_cljs$core$async25703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25703";

cljs.core.async.t_cljs$core$async25703.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async25703");
});

cljs.core.async.__GT_t_cljs$core$async25703 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25703(map_GT___$1,f__$1,ch__$1,meta25704){
return (new cljs.core.async.t_cljs$core$async25703(map_GT___$1,f__$1,ch__$1,meta25704));
});

}

return (new cljs.core.async.t_cljs$core$async25703(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25709 = (function (filter_GT_,p,ch,meta25710){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25710 = meta25710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25711,meta25710__$1){
var self__ = this;
var _25711__$1 = this;
return (new cljs.core.async.t_cljs$core$async25709(self__.filter_GT_,self__.p,self__.ch,meta25710__$1));
});

cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25711){
var self__ = this;
var _25711__$1 = this;
return self__.meta25710;
});

cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25710","meta25710",618651030,null)], null);
});

cljs.core.async.t_cljs$core$async25709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25709";

cljs.core.async.t_cljs$core$async25709.cljs$lang$ctorPrWriter = (function (this__21856__auto__,writer__21857__auto__,opt__21858__auto__){
return cljs.core._write.call(null,writer__21857__auto__,"cljs.core.async/t_cljs$core$async25709");
});

cljs.core.async.__GT_t_cljs$core$async25709 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25709(filter_GT___$1,p__$1,ch__$1,meta25710){
return (new cljs.core.async.t_cljs$core$async25709(filter_GT___$1,p__$1,ch__$1,meta25710));
});

}

return (new cljs.core.async.t_cljs$core$async25709(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25712 = [];
var len__22320__auto___25756 = arguments.length;
var i__22321__auto___25757 = (0);
while(true){
if((i__22321__auto___25757 < len__22320__auto___25756)){
args25712.push((arguments[i__22321__auto___25757]));

var G__25758 = (i__22321__auto___25757 + (1));
i__22321__auto___25757 = G__25758;
continue;
} else {
}
break;
}

var G__25714 = args25712.length;
switch (G__25714) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25712.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23510__auto___25760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___25760,out){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___25760,out){
return (function (state_25735){
var state_val_25736 = (state_25735[(1)]);
if((state_val_25736 === (7))){
var inst_25731 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
var statearr_25737_25761 = state_25735__$1;
(statearr_25737_25761[(2)] = inst_25731);

(statearr_25737_25761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (1))){
var state_25735__$1 = state_25735;
var statearr_25738_25762 = state_25735__$1;
(statearr_25738_25762[(2)] = null);

(statearr_25738_25762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (4))){
var inst_25717 = (state_25735[(7)]);
var inst_25717__$1 = (state_25735[(2)]);
var inst_25718 = (inst_25717__$1 == null);
var state_25735__$1 = (function (){var statearr_25739 = state_25735;
(statearr_25739[(7)] = inst_25717__$1);

return statearr_25739;
})();
if(cljs.core.truth_(inst_25718)){
var statearr_25740_25763 = state_25735__$1;
(statearr_25740_25763[(1)] = (5));

} else {
var statearr_25741_25764 = state_25735__$1;
(statearr_25741_25764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (6))){
var inst_25717 = (state_25735[(7)]);
var inst_25722 = p.call(null,inst_25717);
var state_25735__$1 = state_25735;
if(cljs.core.truth_(inst_25722)){
var statearr_25742_25765 = state_25735__$1;
(statearr_25742_25765[(1)] = (8));

} else {
var statearr_25743_25766 = state_25735__$1;
(statearr_25743_25766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (3))){
var inst_25733 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25735__$1,inst_25733);
} else {
if((state_val_25736 === (2))){
var state_25735__$1 = state_25735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25735__$1,(4),ch);
} else {
if((state_val_25736 === (11))){
var inst_25725 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
var statearr_25744_25767 = state_25735__$1;
(statearr_25744_25767[(2)] = inst_25725);

(statearr_25744_25767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (9))){
var state_25735__$1 = state_25735;
var statearr_25745_25768 = state_25735__$1;
(statearr_25745_25768[(2)] = null);

(statearr_25745_25768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (5))){
var inst_25720 = cljs.core.async.close_BANG_.call(null,out);
var state_25735__$1 = state_25735;
var statearr_25746_25769 = state_25735__$1;
(statearr_25746_25769[(2)] = inst_25720);

(statearr_25746_25769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (10))){
var inst_25728 = (state_25735[(2)]);
var state_25735__$1 = (function (){var statearr_25747 = state_25735;
(statearr_25747[(8)] = inst_25728);

return statearr_25747;
})();
var statearr_25748_25770 = state_25735__$1;
(statearr_25748_25770[(2)] = null);

(statearr_25748_25770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (8))){
var inst_25717 = (state_25735[(7)]);
var state_25735__$1 = state_25735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25735__$1,(11),out,inst_25717);
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
});})(c__23510__auto___25760,out))
;
return ((function (switch__23398__auto__,c__23510__auto___25760,out){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_25752 = [null,null,null,null,null,null,null,null,null];
(statearr_25752[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_25752[(1)] = (1));

return statearr_25752;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_25735){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_25735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e25753){if((e25753 instanceof Object)){
var ex__23402__auto__ = e25753;
var statearr_25754_25771 = state_25735;
(statearr_25754_25771[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25772 = state_25735;
state_25735 = G__25772;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_25735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_25735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___25760,out))
})();
var state__23512__auto__ = (function (){var statearr_25755 = f__23511__auto__.call(null);
(statearr_25755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___25760);

return statearr_25755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___25760,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25773 = [];
var len__22320__auto___25776 = arguments.length;
var i__22321__auto___25777 = (0);
while(true){
if((i__22321__auto___25777 < len__22320__auto___25776)){
args25773.push((arguments[i__22321__auto___25777]));

var G__25778 = (i__22321__auto___25777 + (1));
i__22321__auto___25777 = G__25778;
continue;
} else {
}
break;
}

var G__25775 = args25773.length;
switch (G__25775) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25773.length)].join('')));

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
var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__){
return (function (state_25945){
var state_val_25946 = (state_25945[(1)]);
if((state_val_25946 === (7))){
var inst_25941 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25947_25988 = state_25945__$1;
(statearr_25947_25988[(2)] = inst_25941);

(statearr_25947_25988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (20))){
var inst_25911 = (state_25945[(7)]);
var inst_25922 = (state_25945[(2)]);
var inst_25923 = cljs.core.next.call(null,inst_25911);
var inst_25897 = inst_25923;
var inst_25898 = null;
var inst_25899 = (0);
var inst_25900 = (0);
var state_25945__$1 = (function (){var statearr_25948 = state_25945;
(statearr_25948[(8)] = inst_25898);

(statearr_25948[(9)] = inst_25922);

(statearr_25948[(10)] = inst_25899);

(statearr_25948[(11)] = inst_25897);

(statearr_25948[(12)] = inst_25900);

return statearr_25948;
})();
var statearr_25949_25989 = state_25945__$1;
(statearr_25949_25989[(2)] = null);

(statearr_25949_25989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (1))){
var state_25945__$1 = state_25945;
var statearr_25950_25990 = state_25945__$1;
(statearr_25950_25990[(2)] = null);

(statearr_25950_25990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (4))){
var inst_25886 = (state_25945[(13)]);
var inst_25886__$1 = (state_25945[(2)]);
var inst_25887 = (inst_25886__$1 == null);
var state_25945__$1 = (function (){var statearr_25951 = state_25945;
(statearr_25951[(13)] = inst_25886__$1);

return statearr_25951;
})();
if(cljs.core.truth_(inst_25887)){
var statearr_25952_25991 = state_25945__$1;
(statearr_25952_25991[(1)] = (5));

} else {
var statearr_25953_25992 = state_25945__$1;
(statearr_25953_25992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (15))){
var state_25945__$1 = state_25945;
var statearr_25957_25993 = state_25945__$1;
(statearr_25957_25993[(2)] = null);

(statearr_25957_25993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (21))){
var state_25945__$1 = state_25945;
var statearr_25958_25994 = state_25945__$1;
(statearr_25958_25994[(2)] = null);

(statearr_25958_25994[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (13))){
var inst_25898 = (state_25945[(8)]);
var inst_25899 = (state_25945[(10)]);
var inst_25897 = (state_25945[(11)]);
var inst_25900 = (state_25945[(12)]);
var inst_25907 = (state_25945[(2)]);
var inst_25908 = (inst_25900 + (1));
var tmp25954 = inst_25898;
var tmp25955 = inst_25899;
var tmp25956 = inst_25897;
var inst_25897__$1 = tmp25956;
var inst_25898__$1 = tmp25954;
var inst_25899__$1 = tmp25955;
var inst_25900__$1 = inst_25908;
var state_25945__$1 = (function (){var statearr_25959 = state_25945;
(statearr_25959[(8)] = inst_25898__$1);

(statearr_25959[(10)] = inst_25899__$1);

(statearr_25959[(11)] = inst_25897__$1);

(statearr_25959[(14)] = inst_25907);

(statearr_25959[(12)] = inst_25900__$1);

return statearr_25959;
})();
var statearr_25960_25995 = state_25945__$1;
(statearr_25960_25995[(2)] = null);

(statearr_25960_25995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (22))){
var state_25945__$1 = state_25945;
var statearr_25961_25996 = state_25945__$1;
(statearr_25961_25996[(2)] = null);

(statearr_25961_25996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (6))){
var inst_25886 = (state_25945[(13)]);
var inst_25895 = f.call(null,inst_25886);
var inst_25896 = cljs.core.seq.call(null,inst_25895);
var inst_25897 = inst_25896;
var inst_25898 = null;
var inst_25899 = (0);
var inst_25900 = (0);
var state_25945__$1 = (function (){var statearr_25962 = state_25945;
(statearr_25962[(8)] = inst_25898);

(statearr_25962[(10)] = inst_25899);

(statearr_25962[(11)] = inst_25897);

(statearr_25962[(12)] = inst_25900);

return statearr_25962;
})();
var statearr_25963_25997 = state_25945__$1;
(statearr_25963_25997[(2)] = null);

(statearr_25963_25997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (17))){
var inst_25911 = (state_25945[(7)]);
var inst_25915 = cljs.core.chunk_first.call(null,inst_25911);
var inst_25916 = cljs.core.chunk_rest.call(null,inst_25911);
var inst_25917 = cljs.core.count.call(null,inst_25915);
var inst_25897 = inst_25916;
var inst_25898 = inst_25915;
var inst_25899 = inst_25917;
var inst_25900 = (0);
var state_25945__$1 = (function (){var statearr_25964 = state_25945;
(statearr_25964[(8)] = inst_25898);

(statearr_25964[(10)] = inst_25899);

(statearr_25964[(11)] = inst_25897);

(statearr_25964[(12)] = inst_25900);

return statearr_25964;
})();
var statearr_25965_25998 = state_25945__$1;
(statearr_25965_25998[(2)] = null);

(statearr_25965_25998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (3))){
var inst_25943 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25945__$1,inst_25943);
} else {
if((state_val_25946 === (12))){
var inst_25931 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25966_25999 = state_25945__$1;
(statearr_25966_25999[(2)] = inst_25931);

(statearr_25966_25999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (2))){
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25945__$1,(4),in$);
} else {
if((state_val_25946 === (23))){
var inst_25939 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25967_26000 = state_25945__$1;
(statearr_25967_26000[(2)] = inst_25939);

(statearr_25967_26000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (19))){
var inst_25926 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25968_26001 = state_25945__$1;
(statearr_25968_26001[(2)] = inst_25926);

(statearr_25968_26001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (11))){
var inst_25897 = (state_25945[(11)]);
var inst_25911 = (state_25945[(7)]);
var inst_25911__$1 = cljs.core.seq.call(null,inst_25897);
var state_25945__$1 = (function (){var statearr_25969 = state_25945;
(statearr_25969[(7)] = inst_25911__$1);

return statearr_25969;
})();
if(inst_25911__$1){
var statearr_25970_26002 = state_25945__$1;
(statearr_25970_26002[(1)] = (14));

} else {
var statearr_25971_26003 = state_25945__$1;
(statearr_25971_26003[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (9))){
var inst_25933 = (state_25945[(2)]);
var inst_25934 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25945__$1 = (function (){var statearr_25972 = state_25945;
(statearr_25972[(15)] = inst_25933);

return statearr_25972;
})();
if(cljs.core.truth_(inst_25934)){
var statearr_25973_26004 = state_25945__$1;
(statearr_25973_26004[(1)] = (21));

} else {
var statearr_25974_26005 = state_25945__$1;
(statearr_25974_26005[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (5))){
var inst_25889 = cljs.core.async.close_BANG_.call(null,out);
var state_25945__$1 = state_25945;
var statearr_25975_26006 = state_25945__$1;
(statearr_25975_26006[(2)] = inst_25889);

(statearr_25975_26006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (14))){
var inst_25911 = (state_25945[(7)]);
var inst_25913 = cljs.core.chunked_seq_QMARK_.call(null,inst_25911);
var state_25945__$1 = state_25945;
if(inst_25913){
var statearr_25976_26007 = state_25945__$1;
(statearr_25976_26007[(1)] = (17));

} else {
var statearr_25977_26008 = state_25945__$1;
(statearr_25977_26008[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (16))){
var inst_25929 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25978_26009 = state_25945__$1;
(statearr_25978_26009[(2)] = inst_25929);

(statearr_25978_26009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (10))){
var inst_25898 = (state_25945[(8)]);
var inst_25900 = (state_25945[(12)]);
var inst_25905 = cljs.core._nth.call(null,inst_25898,inst_25900);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25945__$1,(13),out,inst_25905);
} else {
if((state_val_25946 === (18))){
var inst_25911 = (state_25945[(7)]);
var inst_25920 = cljs.core.first.call(null,inst_25911);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25945__$1,(20),out,inst_25920);
} else {
if((state_val_25946 === (8))){
var inst_25899 = (state_25945[(10)]);
var inst_25900 = (state_25945[(12)]);
var inst_25902 = (inst_25900 < inst_25899);
var inst_25903 = inst_25902;
var state_25945__$1 = state_25945;
if(cljs.core.truth_(inst_25903)){
var statearr_25979_26010 = state_25945__$1;
(statearr_25979_26010[(1)] = (10));

} else {
var statearr_25980_26011 = state_25945__$1;
(statearr_25980_26011[(1)] = (11));

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
});})(c__23510__auto__))
;
return ((function (switch__23398__auto__,c__23510__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23399__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23399__auto____0 = (function (){
var statearr_25984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25984[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23399__auto__);

(statearr_25984[(1)] = (1));

return statearr_25984;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23399__auto____1 = (function (state_25945){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_25945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e25985){if((e25985 instanceof Object)){
var ex__23402__auto__ = e25985;
var statearr_25986_26012 = state_25945;
(statearr_25986_26012[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26013 = state_25945;
state_25945 = G__26013;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23399__auto__ = function(state_25945){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23399__auto____1.call(this,state_25945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23399__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23399__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__))
})();
var state__23512__auto__ = (function (){var statearr_25987 = f__23511__auto__.call(null);
(statearr_25987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_25987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__))
);

return c__23510__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26014 = [];
var len__22320__auto___26017 = arguments.length;
var i__22321__auto___26018 = (0);
while(true){
if((i__22321__auto___26018 < len__22320__auto___26017)){
args26014.push((arguments[i__22321__auto___26018]));

var G__26019 = (i__22321__auto___26018 + (1));
i__22321__auto___26018 = G__26019;
continue;
} else {
}
break;
}

var G__26016 = args26014.length;
switch (G__26016) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26014.length)].join('')));

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
var args26021 = [];
var len__22320__auto___26024 = arguments.length;
var i__22321__auto___26025 = (0);
while(true){
if((i__22321__auto___26025 < len__22320__auto___26024)){
args26021.push((arguments[i__22321__auto___26025]));

var G__26026 = (i__22321__auto___26025 + (1));
i__22321__auto___26025 = G__26026;
continue;
} else {
}
break;
}

var G__26023 = args26021.length;
switch (G__26023) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26021.length)].join('')));

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
var args26028 = [];
var len__22320__auto___26079 = arguments.length;
var i__22321__auto___26080 = (0);
while(true){
if((i__22321__auto___26080 < len__22320__auto___26079)){
args26028.push((arguments[i__22321__auto___26080]));

var G__26081 = (i__22321__auto___26080 + (1));
i__22321__auto___26080 = G__26081;
continue;
} else {
}
break;
}

var G__26030 = args26028.length;
switch (G__26030) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26028.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23510__auto___26083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___26083,out){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___26083,out){
return (function (state_26054){
var state_val_26055 = (state_26054[(1)]);
if((state_val_26055 === (7))){
var inst_26049 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26056_26084 = state_26054__$1;
(statearr_26056_26084[(2)] = inst_26049);

(statearr_26056_26084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (1))){
var inst_26031 = null;
var state_26054__$1 = (function (){var statearr_26057 = state_26054;
(statearr_26057[(7)] = inst_26031);

return statearr_26057;
})();
var statearr_26058_26085 = state_26054__$1;
(statearr_26058_26085[(2)] = null);

(statearr_26058_26085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (4))){
var inst_26034 = (state_26054[(8)]);
var inst_26034__$1 = (state_26054[(2)]);
var inst_26035 = (inst_26034__$1 == null);
var inst_26036 = cljs.core.not.call(null,inst_26035);
var state_26054__$1 = (function (){var statearr_26059 = state_26054;
(statearr_26059[(8)] = inst_26034__$1);

return statearr_26059;
})();
if(inst_26036){
var statearr_26060_26086 = state_26054__$1;
(statearr_26060_26086[(1)] = (5));

} else {
var statearr_26061_26087 = state_26054__$1;
(statearr_26061_26087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (6))){
var state_26054__$1 = state_26054;
var statearr_26062_26088 = state_26054__$1;
(statearr_26062_26088[(2)] = null);

(statearr_26062_26088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (3))){
var inst_26051 = (state_26054[(2)]);
var inst_26052 = cljs.core.async.close_BANG_.call(null,out);
var state_26054__$1 = (function (){var statearr_26063 = state_26054;
(statearr_26063[(9)] = inst_26051);

return statearr_26063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26054__$1,inst_26052);
} else {
if((state_val_26055 === (2))){
var state_26054__$1 = state_26054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26054__$1,(4),ch);
} else {
if((state_val_26055 === (11))){
var inst_26034 = (state_26054[(8)]);
var inst_26043 = (state_26054[(2)]);
var inst_26031 = inst_26034;
var state_26054__$1 = (function (){var statearr_26064 = state_26054;
(statearr_26064[(7)] = inst_26031);

(statearr_26064[(10)] = inst_26043);

return statearr_26064;
})();
var statearr_26065_26089 = state_26054__$1;
(statearr_26065_26089[(2)] = null);

(statearr_26065_26089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (9))){
var inst_26034 = (state_26054[(8)]);
var state_26054__$1 = state_26054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26054__$1,(11),out,inst_26034);
} else {
if((state_val_26055 === (5))){
var inst_26031 = (state_26054[(7)]);
var inst_26034 = (state_26054[(8)]);
var inst_26038 = cljs.core._EQ_.call(null,inst_26034,inst_26031);
var state_26054__$1 = state_26054;
if(inst_26038){
var statearr_26067_26090 = state_26054__$1;
(statearr_26067_26090[(1)] = (8));

} else {
var statearr_26068_26091 = state_26054__$1;
(statearr_26068_26091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (10))){
var inst_26046 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26069_26092 = state_26054__$1;
(statearr_26069_26092[(2)] = inst_26046);

(statearr_26069_26092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (8))){
var inst_26031 = (state_26054[(7)]);
var tmp26066 = inst_26031;
var inst_26031__$1 = tmp26066;
var state_26054__$1 = (function (){var statearr_26070 = state_26054;
(statearr_26070[(7)] = inst_26031__$1);

return statearr_26070;
})();
var statearr_26071_26093 = state_26054__$1;
(statearr_26071_26093[(2)] = null);

(statearr_26071_26093[(1)] = (2));


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
});})(c__23510__auto___26083,out))
;
return ((function (switch__23398__auto__,c__23510__auto___26083,out){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_26075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26075[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_26075[(1)] = (1));

return statearr_26075;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_26054){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_26054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e26076){if((e26076 instanceof Object)){
var ex__23402__auto__ = e26076;
var statearr_26077_26094 = state_26054;
(statearr_26077_26094[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26095 = state_26054;
state_26054 = G__26095;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_26054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_26054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___26083,out))
})();
var state__23512__auto__ = (function (){var statearr_26078 = f__23511__auto__.call(null);
(statearr_26078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___26083);

return statearr_26078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___26083,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26096 = [];
var len__22320__auto___26166 = arguments.length;
var i__22321__auto___26167 = (0);
while(true){
if((i__22321__auto___26167 < len__22320__auto___26166)){
args26096.push((arguments[i__22321__auto___26167]));

var G__26168 = (i__22321__auto___26167 + (1));
i__22321__auto___26167 = G__26168;
continue;
} else {
}
break;
}

var G__26098 = args26096.length;
switch (G__26098) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26096.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23510__auto___26170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___26170,out){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___26170,out){
return (function (state_26136){
var state_val_26137 = (state_26136[(1)]);
if((state_val_26137 === (7))){
var inst_26132 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26138_26171 = state_26136__$1;
(statearr_26138_26171[(2)] = inst_26132);

(statearr_26138_26171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (1))){
var inst_26099 = (new Array(n));
var inst_26100 = inst_26099;
var inst_26101 = (0);
var state_26136__$1 = (function (){var statearr_26139 = state_26136;
(statearr_26139[(7)] = inst_26101);

(statearr_26139[(8)] = inst_26100);

return statearr_26139;
})();
var statearr_26140_26172 = state_26136__$1;
(statearr_26140_26172[(2)] = null);

(statearr_26140_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (4))){
var inst_26104 = (state_26136[(9)]);
var inst_26104__$1 = (state_26136[(2)]);
var inst_26105 = (inst_26104__$1 == null);
var inst_26106 = cljs.core.not.call(null,inst_26105);
var state_26136__$1 = (function (){var statearr_26141 = state_26136;
(statearr_26141[(9)] = inst_26104__$1);

return statearr_26141;
})();
if(inst_26106){
var statearr_26142_26173 = state_26136__$1;
(statearr_26142_26173[(1)] = (5));

} else {
var statearr_26143_26174 = state_26136__$1;
(statearr_26143_26174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (15))){
var inst_26126 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26144_26175 = state_26136__$1;
(statearr_26144_26175[(2)] = inst_26126);

(statearr_26144_26175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (13))){
var state_26136__$1 = state_26136;
var statearr_26145_26176 = state_26136__$1;
(statearr_26145_26176[(2)] = null);

(statearr_26145_26176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (6))){
var inst_26101 = (state_26136[(7)]);
var inst_26122 = (inst_26101 > (0));
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26122)){
var statearr_26146_26177 = state_26136__$1;
(statearr_26146_26177[(1)] = (12));

} else {
var statearr_26147_26178 = state_26136__$1;
(statearr_26147_26178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (3))){
var inst_26134 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26136__$1,inst_26134);
} else {
if((state_val_26137 === (12))){
var inst_26100 = (state_26136[(8)]);
var inst_26124 = cljs.core.vec.call(null,inst_26100);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26136__$1,(15),out,inst_26124);
} else {
if((state_val_26137 === (2))){
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(4),ch);
} else {
if((state_val_26137 === (11))){
var inst_26116 = (state_26136[(2)]);
var inst_26117 = (new Array(n));
var inst_26100 = inst_26117;
var inst_26101 = (0);
var state_26136__$1 = (function (){var statearr_26148 = state_26136;
(statearr_26148[(7)] = inst_26101);

(statearr_26148[(10)] = inst_26116);

(statearr_26148[(8)] = inst_26100);

return statearr_26148;
})();
var statearr_26149_26179 = state_26136__$1;
(statearr_26149_26179[(2)] = null);

(statearr_26149_26179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (9))){
var inst_26100 = (state_26136[(8)]);
var inst_26114 = cljs.core.vec.call(null,inst_26100);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26136__$1,(11),out,inst_26114);
} else {
if((state_val_26137 === (5))){
var inst_26101 = (state_26136[(7)]);
var inst_26104 = (state_26136[(9)]);
var inst_26100 = (state_26136[(8)]);
var inst_26109 = (state_26136[(11)]);
var inst_26108 = (inst_26100[inst_26101] = inst_26104);
var inst_26109__$1 = (inst_26101 + (1));
var inst_26110 = (inst_26109__$1 < n);
var state_26136__$1 = (function (){var statearr_26150 = state_26136;
(statearr_26150[(11)] = inst_26109__$1);

(statearr_26150[(12)] = inst_26108);

return statearr_26150;
})();
if(cljs.core.truth_(inst_26110)){
var statearr_26151_26180 = state_26136__$1;
(statearr_26151_26180[(1)] = (8));

} else {
var statearr_26152_26181 = state_26136__$1;
(statearr_26152_26181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (14))){
var inst_26129 = (state_26136[(2)]);
var inst_26130 = cljs.core.async.close_BANG_.call(null,out);
var state_26136__$1 = (function (){var statearr_26154 = state_26136;
(statearr_26154[(13)] = inst_26129);

return statearr_26154;
})();
var statearr_26155_26182 = state_26136__$1;
(statearr_26155_26182[(2)] = inst_26130);

(statearr_26155_26182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (10))){
var inst_26120 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26156_26183 = state_26136__$1;
(statearr_26156_26183[(2)] = inst_26120);

(statearr_26156_26183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (8))){
var inst_26100 = (state_26136[(8)]);
var inst_26109 = (state_26136[(11)]);
var tmp26153 = inst_26100;
var inst_26100__$1 = tmp26153;
var inst_26101 = inst_26109;
var state_26136__$1 = (function (){var statearr_26157 = state_26136;
(statearr_26157[(7)] = inst_26101);

(statearr_26157[(8)] = inst_26100__$1);

return statearr_26157;
})();
var statearr_26158_26184 = state_26136__$1;
(statearr_26158_26184[(2)] = null);

(statearr_26158_26184[(1)] = (2));


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
});})(c__23510__auto___26170,out))
;
return ((function (switch__23398__auto__,c__23510__auto___26170,out){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_26162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26162[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_26162[(1)] = (1));

return statearr_26162;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_26136){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_26136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e26163){if((e26163 instanceof Object)){
var ex__23402__auto__ = e26163;
var statearr_26164_26185 = state_26136;
(statearr_26164_26185[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26186 = state_26136;
state_26136 = G__26186;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_26136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_26136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___26170,out))
})();
var state__23512__auto__ = (function (){var statearr_26165 = f__23511__auto__.call(null);
(statearr_26165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___26170);

return statearr_26165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___26170,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26187 = [];
var len__22320__auto___26261 = arguments.length;
var i__22321__auto___26262 = (0);
while(true){
if((i__22321__auto___26262 < len__22320__auto___26261)){
args26187.push((arguments[i__22321__auto___26262]));

var G__26263 = (i__22321__auto___26262 + (1));
i__22321__auto___26262 = G__26263;
continue;
} else {
}
break;
}

var G__26189 = args26187.length;
switch (G__26189) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26187.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23510__auto___26265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___26265,out){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___26265,out){
return (function (state_26231){
var state_val_26232 = (state_26231[(1)]);
if((state_val_26232 === (7))){
var inst_26227 = (state_26231[(2)]);
var state_26231__$1 = state_26231;
var statearr_26233_26266 = state_26231__$1;
(statearr_26233_26266[(2)] = inst_26227);

(statearr_26233_26266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (1))){
var inst_26190 = [];
var inst_26191 = inst_26190;
var inst_26192 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26231__$1 = (function (){var statearr_26234 = state_26231;
(statearr_26234[(7)] = inst_26191);

(statearr_26234[(8)] = inst_26192);

return statearr_26234;
})();
var statearr_26235_26267 = state_26231__$1;
(statearr_26235_26267[(2)] = null);

(statearr_26235_26267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (4))){
var inst_26195 = (state_26231[(9)]);
var inst_26195__$1 = (state_26231[(2)]);
var inst_26196 = (inst_26195__$1 == null);
var inst_26197 = cljs.core.not.call(null,inst_26196);
var state_26231__$1 = (function (){var statearr_26236 = state_26231;
(statearr_26236[(9)] = inst_26195__$1);

return statearr_26236;
})();
if(inst_26197){
var statearr_26237_26268 = state_26231__$1;
(statearr_26237_26268[(1)] = (5));

} else {
var statearr_26238_26269 = state_26231__$1;
(statearr_26238_26269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (15))){
var inst_26221 = (state_26231[(2)]);
var state_26231__$1 = state_26231;
var statearr_26239_26270 = state_26231__$1;
(statearr_26239_26270[(2)] = inst_26221);

(statearr_26239_26270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (13))){
var state_26231__$1 = state_26231;
var statearr_26240_26271 = state_26231__$1;
(statearr_26240_26271[(2)] = null);

(statearr_26240_26271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (6))){
var inst_26191 = (state_26231[(7)]);
var inst_26216 = inst_26191.length;
var inst_26217 = (inst_26216 > (0));
var state_26231__$1 = state_26231;
if(cljs.core.truth_(inst_26217)){
var statearr_26241_26272 = state_26231__$1;
(statearr_26241_26272[(1)] = (12));

} else {
var statearr_26242_26273 = state_26231__$1;
(statearr_26242_26273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (3))){
var inst_26229 = (state_26231[(2)]);
var state_26231__$1 = state_26231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26231__$1,inst_26229);
} else {
if((state_val_26232 === (12))){
var inst_26191 = (state_26231[(7)]);
var inst_26219 = cljs.core.vec.call(null,inst_26191);
var state_26231__$1 = state_26231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26231__$1,(15),out,inst_26219);
} else {
if((state_val_26232 === (2))){
var state_26231__$1 = state_26231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26231__$1,(4),ch);
} else {
if((state_val_26232 === (11))){
var inst_26195 = (state_26231[(9)]);
var inst_26199 = (state_26231[(10)]);
var inst_26209 = (state_26231[(2)]);
var inst_26210 = [];
var inst_26211 = inst_26210.push(inst_26195);
var inst_26191 = inst_26210;
var inst_26192 = inst_26199;
var state_26231__$1 = (function (){var statearr_26243 = state_26231;
(statearr_26243[(11)] = inst_26211);

(statearr_26243[(7)] = inst_26191);

(statearr_26243[(12)] = inst_26209);

(statearr_26243[(8)] = inst_26192);

return statearr_26243;
})();
var statearr_26244_26274 = state_26231__$1;
(statearr_26244_26274[(2)] = null);

(statearr_26244_26274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (9))){
var inst_26191 = (state_26231[(7)]);
var inst_26207 = cljs.core.vec.call(null,inst_26191);
var state_26231__$1 = state_26231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26231__$1,(11),out,inst_26207);
} else {
if((state_val_26232 === (5))){
var inst_26195 = (state_26231[(9)]);
var inst_26199 = (state_26231[(10)]);
var inst_26192 = (state_26231[(8)]);
var inst_26199__$1 = f.call(null,inst_26195);
var inst_26200 = cljs.core._EQ_.call(null,inst_26199__$1,inst_26192);
var inst_26201 = cljs.core.keyword_identical_QMARK_.call(null,inst_26192,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26202 = (inst_26200) || (inst_26201);
var state_26231__$1 = (function (){var statearr_26245 = state_26231;
(statearr_26245[(10)] = inst_26199__$1);

return statearr_26245;
})();
if(cljs.core.truth_(inst_26202)){
var statearr_26246_26275 = state_26231__$1;
(statearr_26246_26275[(1)] = (8));

} else {
var statearr_26247_26276 = state_26231__$1;
(statearr_26247_26276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (14))){
var inst_26224 = (state_26231[(2)]);
var inst_26225 = cljs.core.async.close_BANG_.call(null,out);
var state_26231__$1 = (function (){var statearr_26249 = state_26231;
(statearr_26249[(13)] = inst_26224);

return statearr_26249;
})();
var statearr_26250_26277 = state_26231__$1;
(statearr_26250_26277[(2)] = inst_26225);

(statearr_26250_26277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (10))){
var inst_26214 = (state_26231[(2)]);
var state_26231__$1 = state_26231;
var statearr_26251_26278 = state_26231__$1;
(statearr_26251_26278[(2)] = inst_26214);

(statearr_26251_26278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26232 === (8))){
var inst_26191 = (state_26231[(7)]);
var inst_26195 = (state_26231[(9)]);
var inst_26199 = (state_26231[(10)]);
var inst_26204 = inst_26191.push(inst_26195);
var tmp26248 = inst_26191;
var inst_26191__$1 = tmp26248;
var inst_26192 = inst_26199;
var state_26231__$1 = (function (){var statearr_26252 = state_26231;
(statearr_26252[(7)] = inst_26191__$1);

(statearr_26252[(14)] = inst_26204);

(statearr_26252[(8)] = inst_26192);

return statearr_26252;
})();
var statearr_26253_26279 = state_26231__$1;
(statearr_26253_26279[(2)] = null);

(statearr_26253_26279[(1)] = (2));


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
});})(c__23510__auto___26265,out))
;
return ((function (switch__23398__auto__,c__23510__auto___26265,out){
return (function() {
var cljs$core$async$state_machine__23399__auto__ = null;
var cljs$core$async$state_machine__23399__auto____0 = (function (){
var statearr_26257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26257[(0)] = cljs$core$async$state_machine__23399__auto__);

(statearr_26257[(1)] = (1));

return statearr_26257;
});
var cljs$core$async$state_machine__23399__auto____1 = (function (state_26231){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_26231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e26258){if((e26258 instanceof Object)){
var ex__23402__auto__ = e26258;
var statearr_26259_26280 = state_26231;
(statearr_26259_26280[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26281 = state_26231;
state_26231 = G__26281;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
cljs$core$async$state_machine__23399__auto__ = function(state_26231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23399__auto____1.call(this,state_26231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23399__auto____0;
cljs$core$async$state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23399__auto____1;
return cljs$core$async$state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___26265,out))
})();
var state__23512__auto__ = (function (){var statearr_26260 = f__23511__auto__.call(null);
(statearr_26260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___26265);

return statearr_26260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___26265,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map