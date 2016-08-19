// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9319 = [];
var len__7279__auto___9325 = arguments.length;
var i__7280__auto___9326 = (0);
while(true){
if((i__7280__auto___9326 < len__7279__auto___9325)){
args9319.push((arguments[i__7280__auto___9326]));

var G__9327 = (i__7280__auto___9326 + (1));
i__7280__auto___9326 = G__9327;
continue;
} else {
}
break;
}

var G__9321 = args9319.length;
switch (G__9321) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9319.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9322 = (function (f,blockable,meta9323){
this.f = f;
this.blockable = blockable;
this.meta9323 = meta9323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9324,meta9323__$1){
var self__ = this;
var _9324__$1 = this;
return (new cljs.core.async.t_cljs$core$async9322(self__.f,self__.blockable,meta9323__$1));
});

cljs.core.async.t_cljs$core$async9322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9324){
var self__ = this;
var _9324__$1 = this;
return self__.meta9323;
});

cljs.core.async.t_cljs$core$async9322.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9323","meta9323",261832119,null)], null);
});

cljs.core.async.t_cljs$core$async9322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9322";

cljs.core.async.t_cljs$core$async9322.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async9322");
});

cljs.core.async.__GT_t_cljs$core$async9322 = (function cljs$core$async$__GT_t_cljs$core$async9322(f__$1,blockable__$1,meta9323){
return (new cljs.core.async.t_cljs$core$async9322(f__$1,blockable__$1,meta9323));
});

}

return (new cljs.core.async.t_cljs$core$async9322(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args9331 = [];
var len__7279__auto___9334 = arguments.length;
var i__7280__auto___9335 = (0);
while(true){
if((i__7280__auto___9335 < len__7279__auto___9334)){
args9331.push((arguments[i__7280__auto___9335]));

var G__9336 = (i__7280__auto___9335 + (1));
i__7280__auto___9335 = G__9336;
continue;
} else {
}
break;
}

var G__9333 = args9331.length;
switch (G__9333) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9331.length)].join('')));

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
var args9338 = [];
var len__7279__auto___9341 = arguments.length;
var i__7280__auto___9342 = (0);
while(true){
if((i__7280__auto___9342 < len__7279__auto___9341)){
args9338.push((arguments[i__7280__auto___9342]));

var G__9343 = (i__7280__auto___9342 + (1));
i__7280__auto___9342 = G__9343;
continue;
} else {
}
break;
}

var G__9340 = args9338.length;
switch (G__9340) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9338.length)].join('')));

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
var args9345 = [];
var len__7279__auto___9348 = arguments.length;
var i__7280__auto___9349 = (0);
while(true){
if((i__7280__auto___9349 < len__7279__auto___9348)){
args9345.push((arguments[i__7280__auto___9349]));

var G__9350 = (i__7280__auto___9349 + (1));
i__7280__auto___9349 = G__9350;
continue;
} else {
}
break;
}

var G__9347 = args9345.length;
switch (G__9347) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9345.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9352 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9352);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9352,ret){
return (function (){
return fn1.call(null,val_9352);
});})(val_9352,ret))
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
var args9353 = [];
var len__7279__auto___9356 = arguments.length;
var i__7280__auto___9357 = (0);
while(true){
if((i__7280__auto___9357 < len__7279__auto___9356)){
args9353.push((arguments[i__7280__auto___9357]));

var G__9358 = (i__7280__auto___9357 + (1));
i__7280__auto___9357 = G__9358;
continue;
} else {
}
break;
}

var G__9355 = args9353.length;
switch (G__9355) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9353.length)].join('')));

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
var n__7124__auto___9360 = n;
var x_9361 = (0);
while(true){
if((x_9361 < n__7124__auto___9360)){
(a[x_9361] = (0));

var G__9362 = (x_9361 + (1));
x_9361 = G__9362;
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

var G__9363 = (i + (1));
i = G__9363;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9367 = (function (alt_flag,flag,meta9368){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9368 = meta9368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9369,meta9368__$1){
var self__ = this;
var _9369__$1 = this;
return (new cljs.core.async.t_cljs$core$async9367(self__.alt_flag,self__.flag,meta9368__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9369){
var self__ = this;
var _9369__$1 = this;
return self__.meta9368;
});})(flag))
;

cljs.core.async.t_cljs$core$async9367.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9367.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9368","meta9368",400093884,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9367";

cljs.core.async.t_cljs$core$async9367.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async9367");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9367 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9367(alt_flag__$1,flag__$1,meta9368){
return (new cljs.core.async.t_cljs$core$async9367(alt_flag__$1,flag__$1,meta9368));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9367(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9373 = (function (alt_handler,flag,cb,meta9374){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9374 = meta9374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9375,meta9374__$1){
var self__ = this;
var _9375__$1 = this;
return (new cljs.core.async.t_cljs$core$async9373(self__.alt_handler,self__.flag,self__.cb,meta9374__$1));
});

cljs.core.async.t_cljs$core$async9373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9375){
var self__ = this;
var _9375__$1 = this;
return self__.meta9374;
});

cljs.core.async.t_cljs$core$async9373.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9374","meta9374",1758063005,null)], null);
});

cljs.core.async.t_cljs$core$async9373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9373";

cljs.core.async.t_cljs$core$async9373.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async9373");
});

cljs.core.async.__GT_t_cljs$core$async9373 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9373(alt_handler__$1,flag__$1,cb__$1,meta9374){
return (new cljs.core.async.t_cljs$core$async9373(alt_handler__$1,flag__$1,cb__$1,meta9374));
});

}

return (new cljs.core.async.t_cljs$core$async9373(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9376_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9376_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9377_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9377_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6210__auto__ = wport;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9378 = (i + (1));
i = G__9378;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6210__auto__ = ret;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6198__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6198__auto__;
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
var args__7286__auto__ = [];
var len__7279__auto___9384 = arguments.length;
var i__7280__auto___9385 = (0);
while(true){
if((i__7280__auto___9385 < len__7279__auto___9384)){
args__7286__auto__.push((arguments[i__7280__auto___9385]));

var G__9386 = (i__7280__auto___9385 + (1));
i__7280__auto___9385 = G__9386;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9381){
var map__9382 = p__9381;
var map__9382__$1 = ((((!((map__9382 == null)))?((((map__9382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9382):map__9382);
var opts = map__9382__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9379){
var G__9380 = cljs.core.first.call(null,seq9379);
var seq9379__$1 = cljs.core.next.call(null,seq9379);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9380,seq9379__$1);
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
var args9387 = [];
var len__7279__auto___9437 = arguments.length;
var i__7280__auto___9438 = (0);
while(true){
if((i__7280__auto___9438 < len__7279__auto___9437)){
args9387.push((arguments[i__7280__auto___9438]));

var G__9439 = (i__7280__auto___9438 + (1));
i__7280__auto___9438 = G__9439;
continue;
} else {
}
break;
}

var G__9389 = args9387.length;
switch (G__9389) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9387.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9274__auto___9441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___9441){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___9441){
return (function (state_9413){
var state_val_9414 = (state_9413[(1)]);
if((state_val_9414 === (7))){
var inst_9409 = (state_9413[(2)]);
var state_9413__$1 = state_9413;
var statearr_9415_9442 = state_9413__$1;
(statearr_9415_9442[(2)] = inst_9409);

(statearr_9415_9442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (1))){
var state_9413__$1 = state_9413;
var statearr_9416_9443 = state_9413__$1;
(statearr_9416_9443[(2)] = null);

(statearr_9416_9443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (4))){
var inst_9392 = (state_9413[(7)]);
var inst_9392__$1 = (state_9413[(2)]);
var inst_9393 = (inst_9392__$1 == null);
var state_9413__$1 = (function (){var statearr_9417 = state_9413;
(statearr_9417[(7)] = inst_9392__$1);

return statearr_9417;
})();
if(cljs.core.truth_(inst_9393)){
var statearr_9418_9444 = state_9413__$1;
(statearr_9418_9444[(1)] = (5));

} else {
var statearr_9419_9445 = state_9413__$1;
(statearr_9419_9445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (13))){
var state_9413__$1 = state_9413;
var statearr_9420_9446 = state_9413__$1;
(statearr_9420_9446[(2)] = null);

(statearr_9420_9446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (6))){
var inst_9392 = (state_9413[(7)]);
var state_9413__$1 = state_9413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9413__$1,(11),to,inst_9392);
} else {
if((state_val_9414 === (3))){
var inst_9411 = (state_9413[(2)]);
var state_9413__$1 = state_9413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9413__$1,inst_9411);
} else {
if((state_val_9414 === (12))){
var state_9413__$1 = state_9413;
var statearr_9421_9447 = state_9413__$1;
(statearr_9421_9447[(2)] = null);

(statearr_9421_9447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (2))){
var state_9413__$1 = state_9413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9413__$1,(4),from);
} else {
if((state_val_9414 === (11))){
var inst_9402 = (state_9413[(2)]);
var state_9413__$1 = state_9413;
if(cljs.core.truth_(inst_9402)){
var statearr_9422_9448 = state_9413__$1;
(statearr_9422_9448[(1)] = (12));

} else {
var statearr_9423_9449 = state_9413__$1;
(statearr_9423_9449[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (9))){
var state_9413__$1 = state_9413;
var statearr_9424_9450 = state_9413__$1;
(statearr_9424_9450[(2)] = null);

(statearr_9424_9450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (5))){
var state_9413__$1 = state_9413;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9425_9451 = state_9413__$1;
(statearr_9425_9451[(1)] = (8));

} else {
var statearr_9426_9452 = state_9413__$1;
(statearr_9426_9452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (14))){
var inst_9407 = (state_9413[(2)]);
var state_9413__$1 = state_9413;
var statearr_9427_9453 = state_9413__$1;
(statearr_9427_9453[(2)] = inst_9407);

(statearr_9427_9453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (10))){
var inst_9399 = (state_9413[(2)]);
var state_9413__$1 = state_9413;
var statearr_9428_9454 = state_9413__$1;
(statearr_9428_9454[(2)] = inst_9399);

(statearr_9428_9454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9414 === (8))){
var inst_9396 = cljs.core.async.close_BANG_.call(null,to);
var state_9413__$1 = state_9413;
var statearr_9429_9455 = state_9413__$1;
(statearr_9429_9455[(2)] = inst_9396);

(statearr_9429_9455[(1)] = (10));


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
});})(c__9274__auto___9441))
;
return ((function (switch__9162__auto__,c__9274__auto___9441){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_9433 = [null,null,null,null,null,null,null,null];
(statearr_9433[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_9433[(1)] = (1));

return statearr_9433;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_9413){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_9413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e9434){if((e9434 instanceof Object)){
var ex__9166__auto__ = e9434;
var statearr_9435_9456 = state_9413;
(statearr_9435_9456[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9457 = state_9413;
state_9413 = G__9457;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_9413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_9413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___9441))
})();
var state__9276__auto__ = (function (){var statearr_9436 = f__9275__auto__.call(null);
(statearr_9436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___9441);

return statearr_9436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___9441))
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
return (function (p__9641){
var vec__9642 = p__9641;
var v = cljs.core.nth.call(null,vec__9642,(0),null);
var p = cljs.core.nth.call(null,vec__9642,(1),null);
var job = vec__9642;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9274__auto___9824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___9824,res,vec__9642,v,p,job,jobs,results){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___9824,res,vec__9642,v,p,job,jobs,results){
return (function (state_9647){
var state_val_9648 = (state_9647[(1)]);
if((state_val_9648 === (1))){
var state_9647__$1 = state_9647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9647__$1,(2),res,v);
} else {
if((state_val_9648 === (2))){
var inst_9644 = (state_9647[(2)]);
var inst_9645 = cljs.core.async.close_BANG_.call(null,res);
var state_9647__$1 = (function (){var statearr_9649 = state_9647;
(statearr_9649[(7)] = inst_9644);

return statearr_9649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9647__$1,inst_9645);
} else {
return null;
}
}
});})(c__9274__auto___9824,res,vec__9642,v,p,job,jobs,results))
;
return ((function (switch__9162__auto__,c__9274__auto___9824,res,vec__9642,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0 = (function (){
var statearr_9653 = [null,null,null,null,null,null,null,null];
(statearr_9653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__);

(statearr_9653[(1)] = (1));

return statearr_9653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1 = (function (state_9647){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_9647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e9654){if((e9654 instanceof Object)){
var ex__9166__auto__ = e9654;
var statearr_9655_9825 = state_9647;
(statearr_9655_9825[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9826 = state_9647;
state_9647 = G__9826;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = function(state_9647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1.call(this,state_9647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___9824,res,vec__9642,v,p,job,jobs,results))
})();
var state__9276__auto__ = (function (){var statearr_9656 = f__9275__auto__.call(null);
(statearr_9656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___9824);

return statearr_9656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___9824,res,vec__9642,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9657){
var vec__9658 = p__9657;
var v = cljs.core.nth.call(null,vec__9658,(0),null);
var p = cljs.core.nth.call(null,vec__9658,(1),null);
var job = vec__9658;
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
var n__7124__auto___9827 = n;
var __9828 = (0);
while(true){
if((__9828 < n__7124__auto___9827)){
var G__9659_9829 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9659_9829) {
case "compute":
var c__9274__auto___9831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9828,c__9274__auto___9831,G__9659_9829,n__7124__auto___9827,jobs,results,process,async){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (__9828,c__9274__auto___9831,G__9659_9829,n__7124__auto___9827,jobs,results,process,async){
return (function (state_9672){
var state_val_9673 = (state_9672[(1)]);
if((state_val_9673 === (1))){
var state_9672__$1 = state_9672;
var statearr_9674_9832 = state_9672__$1;
(statearr_9674_9832[(2)] = null);

(statearr_9674_9832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9673 === (2))){
var state_9672__$1 = state_9672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9672__$1,(4),jobs);
} else {
if((state_val_9673 === (3))){
var inst_9670 = (state_9672[(2)]);
var state_9672__$1 = state_9672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9672__$1,inst_9670);
} else {
if((state_val_9673 === (4))){
var inst_9662 = (state_9672[(2)]);
var inst_9663 = process.call(null,inst_9662);
var state_9672__$1 = state_9672;
if(cljs.core.truth_(inst_9663)){
var statearr_9675_9833 = state_9672__$1;
(statearr_9675_9833[(1)] = (5));

} else {
var statearr_9676_9834 = state_9672__$1;
(statearr_9676_9834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9673 === (5))){
var state_9672__$1 = state_9672;
var statearr_9677_9835 = state_9672__$1;
(statearr_9677_9835[(2)] = null);

(statearr_9677_9835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9673 === (6))){
var state_9672__$1 = state_9672;
var statearr_9678_9836 = state_9672__$1;
(statearr_9678_9836[(2)] = null);

(statearr_9678_9836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9673 === (7))){
var inst_9668 = (state_9672[(2)]);
var state_9672__$1 = state_9672;
var statearr_9679_9837 = state_9672__$1;
(statearr_9679_9837[(2)] = inst_9668);

(statearr_9679_9837[(1)] = (3));


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
});})(__9828,c__9274__auto___9831,G__9659_9829,n__7124__auto___9827,jobs,results,process,async))
;
return ((function (__9828,switch__9162__auto__,c__9274__auto___9831,G__9659_9829,n__7124__auto___9827,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0 = (function (){
var statearr_9683 = [null,null,null,null,null,null,null];
(statearr_9683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__);

(statearr_9683[(1)] = (1));

return statearr_9683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1 = (function (state_9672){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_9672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e9684){if((e9684 instanceof Object)){
var ex__9166__auto__ = e9684;
var statearr_9685_9838 = state_9672;
(statearr_9685_9838[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9839 = state_9672;
state_9672 = G__9839;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = function(state_9672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1.call(this,state_9672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__;
})()
;})(__9828,switch__9162__auto__,c__9274__auto___9831,G__9659_9829,n__7124__auto___9827,jobs,results,process,async))
})();
var state__9276__auto__ = (function (){var statearr_9686 = f__9275__auto__.call(null);
(statearr_9686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___9831);

return statearr_9686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(__9828,c__9274__auto___9831,G__9659_9829,n__7124__auto___9827,jobs,results,process,async))
);


break;
case "async":
var c__9274__auto___9840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9828,c__9274__auto___9840,G__9659_9829,n__7124__auto___9827,jobs,results,process,async){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (__9828,c__9274__auto___9840,G__9659_9829,n__7124__auto___9827,jobs,results,process,async){
return (function (state_9699){
var state_val_9700 = (state_9699[(1)]);
if((state_val_9700 === (1))){
var state_9699__$1 = state_9699;
var statearr_9701_9841 = state_9699__$1;
(statearr_9701_9841[(2)] = null);

(statearr_9701_9841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9700 === (2))){
var state_9699__$1 = state_9699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9699__$1,(4),jobs);
} else {
if((state_val_9700 === (3))){
var inst_9697 = (state_9699[(2)]);
var state_9699__$1 = state_9699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9699__$1,inst_9697);
} else {
if((state_val_9700 === (4))){
var inst_9689 = (state_9699[(2)]);
var inst_9690 = async.call(null,inst_9689);
var state_9699__$1 = state_9699;
if(cljs.core.truth_(inst_9690)){
var statearr_9702_9842 = state_9699__$1;
(statearr_9702_9842[(1)] = (5));

} else {
var statearr_9703_9843 = state_9699__$1;
(statearr_9703_9843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9700 === (5))){
var state_9699__$1 = state_9699;
var statearr_9704_9844 = state_9699__$1;
(statearr_9704_9844[(2)] = null);

(statearr_9704_9844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9700 === (6))){
var state_9699__$1 = state_9699;
var statearr_9705_9845 = state_9699__$1;
(statearr_9705_9845[(2)] = null);

(statearr_9705_9845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9700 === (7))){
var inst_9695 = (state_9699[(2)]);
var state_9699__$1 = state_9699;
var statearr_9706_9846 = state_9699__$1;
(statearr_9706_9846[(2)] = inst_9695);

(statearr_9706_9846[(1)] = (3));


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
});})(__9828,c__9274__auto___9840,G__9659_9829,n__7124__auto___9827,jobs,results,process,async))
;
return ((function (__9828,switch__9162__auto__,c__9274__auto___9840,G__9659_9829,n__7124__auto___9827,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0 = (function (){
var statearr_9710 = [null,null,null,null,null,null,null];
(statearr_9710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__);

(statearr_9710[(1)] = (1));

return statearr_9710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1 = (function (state_9699){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_9699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e9711){if((e9711 instanceof Object)){
var ex__9166__auto__ = e9711;
var statearr_9712_9847 = state_9699;
(statearr_9712_9847[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9848 = state_9699;
state_9699 = G__9848;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = function(state_9699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1.call(this,state_9699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__;
})()
;})(__9828,switch__9162__auto__,c__9274__auto___9840,G__9659_9829,n__7124__auto___9827,jobs,results,process,async))
})();
var state__9276__auto__ = (function (){var statearr_9713 = f__9275__auto__.call(null);
(statearr_9713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___9840);

return statearr_9713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(__9828,c__9274__auto___9840,G__9659_9829,n__7124__auto___9827,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9849 = (__9828 + (1));
__9828 = G__9849;
continue;
} else {
}
break;
}

var c__9274__auto___9850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___9850,jobs,results,process,async){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___9850,jobs,results,process,async){
return (function (state_9735){
var state_val_9736 = (state_9735[(1)]);
if((state_val_9736 === (1))){
var state_9735__$1 = state_9735;
var statearr_9737_9851 = state_9735__$1;
(statearr_9737_9851[(2)] = null);

(statearr_9737_9851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (2))){
var state_9735__$1 = state_9735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9735__$1,(4),from);
} else {
if((state_val_9736 === (3))){
var inst_9733 = (state_9735[(2)]);
var state_9735__$1 = state_9735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9735__$1,inst_9733);
} else {
if((state_val_9736 === (4))){
var inst_9716 = (state_9735[(7)]);
var inst_9716__$1 = (state_9735[(2)]);
var inst_9717 = (inst_9716__$1 == null);
var state_9735__$1 = (function (){var statearr_9738 = state_9735;
(statearr_9738[(7)] = inst_9716__$1);

return statearr_9738;
})();
if(cljs.core.truth_(inst_9717)){
var statearr_9739_9852 = state_9735__$1;
(statearr_9739_9852[(1)] = (5));

} else {
var statearr_9740_9853 = state_9735__$1;
(statearr_9740_9853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (5))){
var inst_9719 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9735__$1 = state_9735;
var statearr_9741_9854 = state_9735__$1;
(statearr_9741_9854[(2)] = inst_9719);

(statearr_9741_9854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (6))){
var inst_9716 = (state_9735[(7)]);
var inst_9721 = (state_9735[(8)]);
var inst_9721__$1 = cljs.core.async.chan.call(null,(1));
var inst_9722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9723 = [inst_9716,inst_9721__$1];
var inst_9724 = (new cljs.core.PersistentVector(null,2,(5),inst_9722,inst_9723,null));
var state_9735__$1 = (function (){var statearr_9742 = state_9735;
(statearr_9742[(8)] = inst_9721__$1);

return statearr_9742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9735__$1,(8),jobs,inst_9724);
} else {
if((state_val_9736 === (7))){
var inst_9731 = (state_9735[(2)]);
var state_9735__$1 = state_9735;
var statearr_9743_9855 = state_9735__$1;
(statearr_9743_9855[(2)] = inst_9731);

(statearr_9743_9855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9736 === (8))){
var inst_9721 = (state_9735[(8)]);
var inst_9726 = (state_9735[(2)]);
var state_9735__$1 = (function (){var statearr_9744 = state_9735;
(statearr_9744[(9)] = inst_9726);

return statearr_9744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9735__$1,(9),results,inst_9721);
} else {
if((state_val_9736 === (9))){
var inst_9728 = (state_9735[(2)]);
var state_9735__$1 = (function (){var statearr_9745 = state_9735;
(statearr_9745[(10)] = inst_9728);

return statearr_9745;
})();
var statearr_9746_9856 = state_9735__$1;
(statearr_9746_9856[(2)] = null);

(statearr_9746_9856[(1)] = (2));


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
});})(c__9274__auto___9850,jobs,results,process,async))
;
return ((function (switch__9162__auto__,c__9274__auto___9850,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0 = (function (){
var statearr_9750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__);

(statearr_9750[(1)] = (1));

return statearr_9750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1 = (function (state_9735){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_9735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e9751){if((e9751 instanceof Object)){
var ex__9166__auto__ = e9751;
var statearr_9752_9857 = state_9735;
(statearr_9752_9857[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9858 = state_9735;
state_9735 = G__9858;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = function(state_9735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1.call(this,state_9735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___9850,jobs,results,process,async))
})();
var state__9276__auto__ = (function (){var statearr_9753 = f__9275__auto__.call(null);
(statearr_9753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___9850);

return statearr_9753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___9850,jobs,results,process,async))
);


var c__9274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto__,jobs,results,process,async){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto__,jobs,results,process,async){
return (function (state_9791){
var state_val_9792 = (state_9791[(1)]);
if((state_val_9792 === (7))){
var inst_9787 = (state_9791[(2)]);
var state_9791__$1 = state_9791;
var statearr_9793_9859 = state_9791__$1;
(statearr_9793_9859[(2)] = inst_9787);

(statearr_9793_9859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (20))){
var state_9791__$1 = state_9791;
var statearr_9794_9860 = state_9791__$1;
(statearr_9794_9860[(2)] = null);

(statearr_9794_9860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (1))){
var state_9791__$1 = state_9791;
var statearr_9795_9861 = state_9791__$1;
(statearr_9795_9861[(2)] = null);

(statearr_9795_9861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (4))){
var inst_9756 = (state_9791[(7)]);
var inst_9756__$1 = (state_9791[(2)]);
var inst_9757 = (inst_9756__$1 == null);
var state_9791__$1 = (function (){var statearr_9796 = state_9791;
(statearr_9796[(7)] = inst_9756__$1);

return statearr_9796;
})();
if(cljs.core.truth_(inst_9757)){
var statearr_9797_9862 = state_9791__$1;
(statearr_9797_9862[(1)] = (5));

} else {
var statearr_9798_9863 = state_9791__$1;
(statearr_9798_9863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (15))){
var inst_9769 = (state_9791[(8)]);
var state_9791__$1 = state_9791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9791__$1,(18),to,inst_9769);
} else {
if((state_val_9792 === (21))){
var inst_9782 = (state_9791[(2)]);
var state_9791__$1 = state_9791;
var statearr_9799_9864 = state_9791__$1;
(statearr_9799_9864[(2)] = inst_9782);

(statearr_9799_9864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (13))){
var inst_9784 = (state_9791[(2)]);
var state_9791__$1 = (function (){var statearr_9800 = state_9791;
(statearr_9800[(9)] = inst_9784);

return statearr_9800;
})();
var statearr_9801_9865 = state_9791__$1;
(statearr_9801_9865[(2)] = null);

(statearr_9801_9865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (6))){
var inst_9756 = (state_9791[(7)]);
var state_9791__$1 = state_9791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9791__$1,(11),inst_9756);
} else {
if((state_val_9792 === (17))){
var inst_9777 = (state_9791[(2)]);
var state_9791__$1 = state_9791;
if(cljs.core.truth_(inst_9777)){
var statearr_9802_9866 = state_9791__$1;
(statearr_9802_9866[(1)] = (19));

} else {
var statearr_9803_9867 = state_9791__$1;
(statearr_9803_9867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (3))){
var inst_9789 = (state_9791[(2)]);
var state_9791__$1 = state_9791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9791__$1,inst_9789);
} else {
if((state_val_9792 === (12))){
var inst_9766 = (state_9791[(10)]);
var state_9791__$1 = state_9791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9791__$1,(14),inst_9766);
} else {
if((state_val_9792 === (2))){
var state_9791__$1 = state_9791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9791__$1,(4),results);
} else {
if((state_val_9792 === (19))){
var state_9791__$1 = state_9791;
var statearr_9804_9868 = state_9791__$1;
(statearr_9804_9868[(2)] = null);

(statearr_9804_9868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (11))){
var inst_9766 = (state_9791[(2)]);
var state_9791__$1 = (function (){var statearr_9805 = state_9791;
(statearr_9805[(10)] = inst_9766);

return statearr_9805;
})();
var statearr_9806_9869 = state_9791__$1;
(statearr_9806_9869[(2)] = null);

(statearr_9806_9869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (9))){
var state_9791__$1 = state_9791;
var statearr_9807_9870 = state_9791__$1;
(statearr_9807_9870[(2)] = null);

(statearr_9807_9870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (5))){
var state_9791__$1 = state_9791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9808_9871 = state_9791__$1;
(statearr_9808_9871[(1)] = (8));

} else {
var statearr_9809_9872 = state_9791__$1;
(statearr_9809_9872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (14))){
var inst_9771 = (state_9791[(11)]);
var inst_9769 = (state_9791[(8)]);
var inst_9769__$1 = (state_9791[(2)]);
var inst_9770 = (inst_9769__$1 == null);
var inst_9771__$1 = cljs.core.not.call(null,inst_9770);
var state_9791__$1 = (function (){var statearr_9810 = state_9791;
(statearr_9810[(11)] = inst_9771__$1);

(statearr_9810[(8)] = inst_9769__$1);

return statearr_9810;
})();
if(inst_9771__$1){
var statearr_9811_9873 = state_9791__$1;
(statearr_9811_9873[(1)] = (15));

} else {
var statearr_9812_9874 = state_9791__$1;
(statearr_9812_9874[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (16))){
var inst_9771 = (state_9791[(11)]);
var state_9791__$1 = state_9791;
var statearr_9813_9875 = state_9791__$1;
(statearr_9813_9875[(2)] = inst_9771);

(statearr_9813_9875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (10))){
var inst_9763 = (state_9791[(2)]);
var state_9791__$1 = state_9791;
var statearr_9814_9876 = state_9791__$1;
(statearr_9814_9876[(2)] = inst_9763);

(statearr_9814_9876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (18))){
var inst_9774 = (state_9791[(2)]);
var state_9791__$1 = state_9791;
var statearr_9815_9877 = state_9791__$1;
(statearr_9815_9877[(2)] = inst_9774);

(statearr_9815_9877[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9792 === (8))){
var inst_9760 = cljs.core.async.close_BANG_.call(null,to);
var state_9791__$1 = state_9791;
var statearr_9816_9878 = state_9791__$1;
(statearr_9816_9878[(2)] = inst_9760);

(statearr_9816_9878[(1)] = (10));


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
});})(c__9274__auto__,jobs,results,process,async))
;
return ((function (switch__9162__auto__,c__9274__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0 = (function (){
var statearr_9820 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__);

(statearr_9820[(1)] = (1));

return statearr_9820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1 = (function (state_9791){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_9791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e9821){if((e9821 instanceof Object)){
var ex__9166__auto__ = e9821;
var statearr_9822_9879 = state_9791;
(statearr_9822_9879[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9880 = state_9791;
state_9791 = G__9880;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__ = function(state_9791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1.call(this,state_9791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9163__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto__,jobs,results,process,async))
})();
var state__9276__auto__ = (function (){var statearr_9823 = f__9275__auto__.call(null);
(statearr_9823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto__);

return statearr_9823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto__,jobs,results,process,async))
);

return c__9274__auto__;
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
var args9881 = [];
var len__7279__auto___9884 = arguments.length;
var i__7280__auto___9885 = (0);
while(true){
if((i__7280__auto___9885 < len__7279__auto___9884)){
args9881.push((arguments[i__7280__auto___9885]));

var G__9886 = (i__7280__auto___9885 + (1));
i__7280__auto___9885 = G__9886;
continue;
} else {
}
break;
}

var G__9883 = args9881.length;
switch (G__9883) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9881.length)].join('')));

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
var args9888 = [];
var len__7279__auto___9891 = arguments.length;
var i__7280__auto___9892 = (0);
while(true){
if((i__7280__auto___9892 < len__7279__auto___9891)){
args9888.push((arguments[i__7280__auto___9892]));

var G__9893 = (i__7280__auto___9892 + (1));
i__7280__auto___9892 = G__9893;
continue;
} else {
}
break;
}

var G__9890 = args9888.length;
switch (G__9890) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9888.length)].join('')));

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
var args9895 = [];
var len__7279__auto___9948 = arguments.length;
var i__7280__auto___9949 = (0);
while(true){
if((i__7280__auto___9949 < len__7279__auto___9948)){
args9895.push((arguments[i__7280__auto___9949]));

var G__9950 = (i__7280__auto___9949 + (1));
i__7280__auto___9949 = G__9950;
continue;
} else {
}
break;
}

var G__9897 = args9895.length;
switch (G__9897) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9895.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9274__auto___9952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___9952,tc,fc){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___9952,tc,fc){
return (function (state_9923){
var state_val_9924 = (state_9923[(1)]);
if((state_val_9924 === (7))){
var inst_9919 = (state_9923[(2)]);
var state_9923__$1 = state_9923;
var statearr_9925_9953 = state_9923__$1;
(statearr_9925_9953[(2)] = inst_9919);

(statearr_9925_9953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (1))){
var state_9923__$1 = state_9923;
var statearr_9926_9954 = state_9923__$1;
(statearr_9926_9954[(2)] = null);

(statearr_9926_9954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (4))){
var inst_9900 = (state_9923[(7)]);
var inst_9900__$1 = (state_9923[(2)]);
var inst_9901 = (inst_9900__$1 == null);
var state_9923__$1 = (function (){var statearr_9927 = state_9923;
(statearr_9927[(7)] = inst_9900__$1);

return statearr_9927;
})();
if(cljs.core.truth_(inst_9901)){
var statearr_9928_9955 = state_9923__$1;
(statearr_9928_9955[(1)] = (5));

} else {
var statearr_9929_9956 = state_9923__$1;
(statearr_9929_9956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (13))){
var state_9923__$1 = state_9923;
var statearr_9930_9957 = state_9923__$1;
(statearr_9930_9957[(2)] = null);

(statearr_9930_9957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (6))){
var inst_9900 = (state_9923[(7)]);
var inst_9906 = p.call(null,inst_9900);
var state_9923__$1 = state_9923;
if(cljs.core.truth_(inst_9906)){
var statearr_9931_9958 = state_9923__$1;
(statearr_9931_9958[(1)] = (9));

} else {
var statearr_9932_9959 = state_9923__$1;
(statearr_9932_9959[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (3))){
var inst_9921 = (state_9923[(2)]);
var state_9923__$1 = state_9923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9923__$1,inst_9921);
} else {
if((state_val_9924 === (12))){
var state_9923__$1 = state_9923;
var statearr_9933_9960 = state_9923__$1;
(statearr_9933_9960[(2)] = null);

(statearr_9933_9960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (2))){
var state_9923__$1 = state_9923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9923__$1,(4),ch);
} else {
if((state_val_9924 === (11))){
var inst_9900 = (state_9923[(7)]);
var inst_9910 = (state_9923[(2)]);
var state_9923__$1 = state_9923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9923__$1,(8),inst_9910,inst_9900);
} else {
if((state_val_9924 === (9))){
var state_9923__$1 = state_9923;
var statearr_9934_9961 = state_9923__$1;
(statearr_9934_9961[(2)] = tc);

(statearr_9934_9961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (5))){
var inst_9903 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9904 = cljs.core.async.close_BANG_.call(null,fc);
var state_9923__$1 = (function (){var statearr_9935 = state_9923;
(statearr_9935[(8)] = inst_9903);

return statearr_9935;
})();
var statearr_9936_9962 = state_9923__$1;
(statearr_9936_9962[(2)] = inst_9904);

(statearr_9936_9962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (14))){
var inst_9917 = (state_9923[(2)]);
var state_9923__$1 = state_9923;
var statearr_9937_9963 = state_9923__$1;
(statearr_9937_9963[(2)] = inst_9917);

(statearr_9937_9963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (10))){
var state_9923__$1 = state_9923;
var statearr_9938_9964 = state_9923__$1;
(statearr_9938_9964[(2)] = fc);

(statearr_9938_9964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9924 === (8))){
var inst_9912 = (state_9923[(2)]);
var state_9923__$1 = state_9923;
if(cljs.core.truth_(inst_9912)){
var statearr_9939_9965 = state_9923__$1;
(statearr_9939_9965[(1)] = (12));

} else {
var statearr_9940_9966 = state_9923__$1;
(statearr_9940_9966[(1)] = (13));

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
});})(c__9274__auto___9952,tc,fc))
;
return ((function (switch__9162__auto__,c__9274__auto___9952,tc,fc){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_9944 = [null,null,null,null,null,null,null,null,null];
(statearr_9944[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_9944[(1)] = (1));

return statearr_9944;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_9923){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_9923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e9945){if((e9945 instanceof Object)){
var ex__9166__auto__ = e9945;
var statearr_9946_9967 = state_9923;
(statearr_9946_9967[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9968 = state_9923;
state_9923 = G__9968;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_9923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_9923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___9952,tc,fc))
})();
var state__9276__auto__ = (function (){var statearr_9947 = f__9275__auto__.call(null);
(statearr_9947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___9952);

return statearr_9947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___9952,tc,fc))
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
var c__9274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto__){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto__){
return (function (state_10032){
var state_val_10033 = (state_10032[(1)]);
if((state_val_10033 === (7))){
var inst_10028 = (state_10032[(2)]);
var state_10032__$1 = state_10032;
var statearr_10034_10055 = state_10032__$1;
(statearr_10034_10055[(2)] = inst_10028);

(statearr_10034_10055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10033 === (1))){
var inst_10012 = init;
var state_10032__$1 = (function (){var statearr_10035 = state_10032;
(statearr_10035[(7)] = inst_10012);

return statearr_10035;
})();
var statearr_10036_10056 = state_10032__$1;
(statearr_10036_10056[(2)] = null);

(statearr_10036_10056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10033 === (4))){
var inst_10015 = (state_10032[(8)]);
var inst_10015__$1 = (state_10032[(2)]);
var inst_10016 = (inst_10015__$1 == null);
var state_10032__$1 = (function (){var statearr_10037 = state_10032;
(statearr_10037[(8)] = inst_10015__$1);

return statearr_10037;
})();
if(cljs.core.truth_(inst_10016)){
var statearr_10038_10057 = state_10032__$1;
(statearr_10038_10057[(1)] = (5));

} else {
var statearr_10039_10058 = state_10032__$1;
(statearr_10039_10058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10033 === (6))){
var inst_10012 = (state_10032[(7)]);
var inst_10019 = (state_10032[(9)]);
var inst_10015 = (state_10032[(8)]);
var inst_10019__$1 = f.call(null,inst_10012,inst_10015);
var inst_10020 = cljs.core.reduced_QMARK_.call(null,inst_10019__$1);
var state_10032__$1 = (function (){var statearr_10040 = state_10032;
(statearr_10040[(9)] = inst_10019__$1);

return statearr_10040;
})();
if(inst_10020){
var statearr_10041_10059 = state_10032__$1;
(statearr_10041_10059[(1)] = (8));

} else {
var statearr_10042_10060 = state_10032__$1;
(statearr_10042_10060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10033 === (3))){
var inst_10030 = (state_10032[(2)]);
var state_10032__$1 = state_10032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10032__$1,inst_10030);
} else {
if((state_val_10033 === (2))){
var state_10032__$1 = state_10032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10032__$1,(4),ch);
} else {
if((state_val_10033 === (9))){
var inst_10019 = (state_10032[(9)]);
var inst_10012 = inst_10019;
var state_10032__$1 = (function (){var statearr_10043 = state_10032;
(statearr_10043[(7)] = inst_10012);

return statearr_10043;
})();
var statearr_10044_10061 = state_10032__$1;
(statearr_10044_10061[(2)] = null);

(statearr_10044_10061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10033 === (5))){
var inst_10012 = (state_10032[(7)]);
var state_10032__$1 = state_10032;
var statearr_10045_10062 = state_10032__$1;
(statearr_10045_10062[(2)] = inst_10012);

(statearr_10045_10062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10033 === (10))){
var inst_10026 = (state_10032[(2)]);
var state_10032__$1 = state_10032;
var statearr_10046_10063 = state_10032__$1;
(statearr_10046_10063[(2)] = inst_10026);

(statearr_10046_10063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10033 === (8))){
var inst_10019 = (state_10032[(9)]);
var inst_10022 = cljs.core.deref.call(null,inst_10019);
var state_10032__$1 = state_10032;
var statearr_10047_10064 = state_10032__$1;
(statearr_10047_10064[(2)] = inst_10022);

(statearr_10047_10064[(1)] = (10));


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
});})(c__9274__auto__))
;
return ((function (switch__9162__auto__,c__9274__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9163__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9163__auto____0 = (function (){
var statearr_10051 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10051[(0)] = cljs$core$async$reduce_$_state_machine__9163__auto__);

(statearr_10051[(1)] = (1));

return statearr_10051;
});
var cljs$core$async$reduce_$_state_machine__9163__auto____1 = (function (state_10032){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_10032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e10052){if((e10052 instanceof Object)){
var ex__9166__auto__ = e10052;
var statearr_10053_10065 = state_10032;
(statearr_10053_10065[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10066 = state_10032;
state_10032 = G__10066;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9163__auto__ = function(state_10032){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9163__auto____1.call(this,state_10032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9163__auto____0;
cljs$core$async$reduce_$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9163__auto____1;
return cljs$core$async$reduce_$_state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto__))
})();
var state__9276__auto__ = (function (){var statearr_10054 = f__9275__auto__.call(null);
(statearr_10054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto__);

return statearr_10054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto__))
);

return c__9274__auto__;
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
var args10067 = [];
var len__7279__auto___10119 = arguments.length;
var i__7280__auto___10120 = (0);
while(true){
if((i__7280__auto___10120 < len__7279__auto___10119)){
args10067.push((arguments[i__7280__auto___10120]));

var G__10121 = (i__7280__auto___10120 + (1));
i__7280__auto___10120 = G__10121;
continue;
} else {
}
break;
}

var G__10069 = args10067.length;
switch (G__10069) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10067.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto__){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto__){
return (function (state_10094){
var state_val_10095 = (state_10094[(1)]);
if((state_val_10095 === (7))){
var inst_10076 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
var statearr_10096_10123 = state_10094__$1;
(statearr_10096_10123[(2)] = inst_10076);

(statearr_10096_10123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (1))){
var inst_10070 = cljs.core.seq.call(null,coll);
var inst_10071 = inst_10070;
var state_10094__$1 = (function (){var statearr_10097 = state_10094;
(statearr_10097[(7)] = inst_10071);

return statearr_10097;
})();
var statearr_10098_10124 = state_10094__$1;
(statearr_10098_10124[(2)] = null);

(statearr_10098_10124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (4))){
var inst_10071 = (state_10094[(7)]);
var inst_10074 = cljs.core.first.call(null,inst_10071);
var state_10094__$1 = state_10094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10094__$1,(7),ch,inst_10074);
} else {
if((state_val_10095 === (13))){
var inst_10088 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
var statearr_10099_10125 = state_10094__$1;
(statearr_10099_10125[(2)] = inst_10088);

(statearr_10099_10125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (6))){
var inst_10079 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
if(cljs.core.truth_(inst_10079)){
var statearr_10100_10126 = state_10094__$1;
(statearr_10100_10126[(1)] = (8));

} else {
var statearr_10101_10127 = state_10094__$1;
(statearr_10101_10127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (3))){
var inst_10092 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10094__$1,inst_10092);
} else {
if((state_val_10095 === (12))){
var state_10094__$1 = state_10094;
var statearr_10102_10128 = state_10094__$1;
(statearr_10102_10128[(2)] = null);

(statearr_10102_10128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (2))){
var inst_10071 = (state_10094[(7)]);
var state_10094__$1 = state_10094;
if(cljs.core.truth_(inst_10071)){
var statearr_10103_10129 = state_10094__$1;
(statearr_10103_10129[(1)] = (4));

} else {
var statearr_10104_10130 = state_10094__$1;
(statearr_10104_10130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (11))){
var inst_10085 = cljs.core.async.close_BANG_.call(null,ch);
var state_10094__$1 = state_10094;
var statearr_10105_10131 = state_10094__$1;
(statearr_10105_10131[(2)] = inst_10085);

(statearr_10105_10131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (9))){
var state_10094__$1 = state_10094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10106_10132 = state_10094__$1;
(statearr_10106_10132[(1)] = (11));

} else {
var statearr_10107_10133 = state_10094__$1;
(statearr_10107_10133[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (5))){
var inst_10071 = (state_10094[(7)]);
var state_10094__$1 = state_10094;
var statearr_10108_10134 = state_10094__$1;
(statearr_10108_10134[(2)] = inst_10071);

(statearr_10108_10134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (10))){
var inst_10090 = (state_10094[(2)]);
var state_10094__$1 = state_10094;
var statearr_10109_10135 = state_10094__$1;
(statearr_10109_10135[(2)] = inst_10090);

(statearr_10109_10135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10095 === (8))){
var inst_10071 = (state_10094[(7)]);
var inst_10081 = cljs.core.next.call(null,inst_10071);
var inst_10071__$1 = inst_10081;
var state_10094__$1 = (function (){var statearr_10110 = state_10094;
(statearr_10110[(7)] = inst_10071__$1);

return statearr_10110;
})();
var statearr_10111_10136 = state_10094__$1;
(statearr_10111_10136[(2)] = null);

(statearr_10111_10136[(1)] = (2));


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
});})(c__9274__auto__))
;
return ((function (switch__9162__auto__,c__9274__auto__){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_10115 = [null,null,null,null,null,null,null,null];
(statearr_10115[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_10115[(1)] = (1));

return statearr_10115;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_10094){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_10094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e10116){if((e10116 instanceof Object)){
var ex__9166__auto__ = e10116;
var statearr_10117_10137 = state_10094;
(statearr_10117_10137[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10138 = state_10094;
state_10094 = G__10138;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_10094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_10094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto__))
})();
var state__9276__auto__ = (function (){var statearr_10118 = f__9275__auto__.call(null);
(statearr_10118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto__);

return statearr_10118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto__))
);

return c__9274__auto__;
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
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6874__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m);
} else {
var m__6874__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async10360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10360 = (function (mult,ch,cs,meta10361){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10361 = meta10361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10362,meta10361__$1){
var self__ = this;
var _10362__$1 = this;
return (new cljs.core.async.t_cljs$core$async10360(self__.mult,self__.ch,self__.cs,meta10361__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10362){
var self__ = this;
var _10362__$1 = this;
return self__.meta10361;
});})(cs))
;

cljs.core.async.t_cljs$core$async10360.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10360.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10360.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10360.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10360.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10360.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10361","meta10361",-724690050,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10360";

cljs.core.async.t_cljs$core$async10360.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async10360");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10360 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10360(mult__$1,ch__$1,cs__$1,meta10361){
return (new cljs.core.async.t_cljs$core$async10360(mult__$1,ch__$1,cs__$1,meta10361));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10360(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9274__auto___10581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___10581,cs,m,dchan,dctr,done){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___10581,cs,m,dchan,dctr,done){
return (function (state_10493){
var state_val_10494 = (state_10493[(1)]);
if((state_val_10494 === (7))){
var inst_10489 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10495_10582 = state_10493__$1;
(statearr_10495_10582[(2)] = inst_10489);

(statearr_10495_10582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (20))){
var inst_10394 = (state_10493[(7)]);
var inst_10404 = cljs.core.first.call(null,inst_10394);
var inst_10405 = cljs.core.nth.call(null,inst_10404,(0),null);
var inst_10406 = cljs.core.nth.call(null,inst_10404,(1),null);
var state_10493__$1 = (function (){var statearr_10496 = state_10493;
(statearr_10496[(8)] = inst_10405);

return statearr_10496;
})();
if(cljs.core.truth_(inst_10406)){
var statearr_10497_10583 = state_10493__$1;
(statearr_10497_10583[(1)] = (22));

} else {
var statearr_10498_10584 = state_10493__$1;
(statearr_10498_10584[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (27))){
var inst_10436 = (state_10493[(9)]);
var inst_10365 = (state_10493[(10)]);
var inst_10441 = (state_10493[(11)]);
var inst_10434 = (state_10493[(12)]);
var inst_10441__$1 = cljs.core._nth.call(null,inst_10434,inst_10436);
var inst_10442 = cljs.core.async.put_BANG_.call(null,inst_10441__$1,inst_10365,done);
var state_10493__$1 = (function (){var statearr_10499 = state_10493;
(statearr_10499[(11)] = inst_10441__$1);

return statearr_10499;
})();
if(cljs.core.truth_(inst_10442)){
var statearr_10500_10585 = state_10493__$1;
(statearr_10500_10585[(1)] = (30));

} else {
var statearr_10501_10586 = state_10493__$1;
(statearr_10501_10586[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (1))){
var state_10493__$1 = state_10493;
var statearr_10502_10587 = state_10493__$1;
(statearr_10502_10587[(2)] = null);

(statearr_10502_10587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (24))){
var inst_10394 = (state_10493[(7)]);
var inst_10411 = (state_10493[(2)]);
var inst_10412 = cljs.core.next.call(null,inst_10394);
var inst_10374 = inst_10412;
var inst_10375 = null;
var inst_10376 = (0);
var inst_10377 = (0);
var state_10493__$1 = (function (){var statearr_10503 = state_10493;
(statearr_10503[(13)] = inst_10375);

(statearr_10503[(14)] = inst_10376);

(statearr_10503[(15)] = inst_10374);

(statearr_10503[(16)] = inst_10377);

(statearr_10503[(17)] = inst_10411);

return statearr_10503;
})();
var statearr_10504_10588 = state_10493__$1;
(statearr_10504_10588[(2)] = null);

(statearr_10504_10588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (39))){
var state_10493__$1 = state_10493;
var statearr_10508_10589 = state_10493__$1;
(statearr_10508_10589[(2)] = null);

(statearr_10508_10589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (4))){
var inst_10365 = (state_10493[(10)]);
var inst_10365__$1 = (state_10493[(2)]);
var inst_10366 = (inst_10365__$1 == null);
var state_10493__$1 = (function (){var statearr_10509 = state_10493;
(statearr_10509[(10)] = inst_10365__$1);

return statearr_10509;
})();
if(cljs.core.truth_(inst_10366)){
var statearr_10510_10590 = state_10493__$1;
(statearr_10510_10590[(1)] = (5));

} else {
var statearr_10511_10591 = state_10493__$1;
(statearr_10511_10591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (15))){
var inst_10375 = (state_10493[(13)]);
var inst_10376 = (state_10493[(14)]);
var inst_10374 = (state_10493[(15)]);
var inst_10377 = (state_10493[(16)]);
var inst_10390 = (state_10493[(2)]);
var inst_10391 = (inst_10377 + (1));
var tmp10505 = inst_10375;
var tmp10506 = inst_10376;
var tmp10507 = inst_10374;
var inst_10374__$1 = tmp10507;
var inst_10375__$1 = tmp10505;
var inst_10376__$1 = tmp10506;
var inst_10377__$1 = inst_10391;
var state_10493__$1 = (function (){var statearr_10512 = state_10493;
(statearr_10512[(13)] = inst_10375__$1);

(statearr_10512[(14)] = inst_10376__$1);

(statearr_10512[(15)] = inst_10374__$1);

(statearr_10512[(16)] = inst_10377__$1);

(statearr_10512[(18)] = inst_10390);

return statearr_10512;
})();
var statearr_10513_10592 = state_10493__$1;
(statearr_10513_10592[(2)] = null);

(statearr_10513_10592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (21))){
var inst_10415 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10517_10593 = state_10493__$1;
(statearr_10517_10593[(2)] = inst_10415);

(statearr_10517_10593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (31))){
var inst_10441 = (state_10493[(11)]);
var inst_10445 = done.call(null,null);
var inst_10446 = cljs.core.async.untap_STAR_.call(null,m,inst_10441);
var state_10493__$1 = (function (){var statearr_10518 = state_10493;
(statearr_10518[(19)] = inst_10445);

return statearr_10518;
})();
var statearr_10519_10594 = state_10493__$1;
(statearr_10519_10594[(2)] = inst_10446);

(statearr_10519_10594[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (32))){
var inst_10433 = (state_10493[(20)]);
var inst_10436 = (state_10493[(9)]);
var inst_10435 = (state_10493[(21)]);
var inst_10434 = (state_10493[(12)]);
var inst_10448 = (state_10493[(2)]);
var inst_10449 = (inst_10436 + (1));
var tmp10514 = inst_10433;
var tmp10515 = inst_10435;
var tmp10516 = inst_10434;
var inst_10433__$1 = tmp10514;
var inst_10434__$1 = tmp10516;
var inst_10435__$1 = tmp10515;
var inst_10436__$1 = inst_10449;
var state_10493__$1 = (function (){var statearr_10520 = state_10493;
(statearr_10520[(20)] = inst_10433__$1);

(statearr_10520[(9)] = inst_10436__$1);

(statearr_10520[(21)] = inst_10435__$1);

(statearr_10520[(12)] = inst_10434__$1);

(statearr_10520[(22)] = inst_10448);

return statearr_10520;
})();
var statearr_10521_10595 = state_10493__$1;
(statearr_10521_10595[(2)] = null);

(statearr_10521_10595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (40))){
var inst_10461 = (state_10493[(23)]);
var inst_10465 = done.call(null,null);
var inst_10466 = cljs.core.async.untap_STAR_.call(null,m,inst_10461);
var state_10493__$1 = (function (){var statearr_10522 = state_10493;
(statearr_10522[(24)] = inst_10465);

return statearr_10522;
})();
var statearr_10523_10596 = state_10493__$1;
(statearr_10523_10596[(2)] = inst_10466);

(statearr_10523_10596[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (33))){
var inst_10452 = (state_10493[(25)]);
var inst_10454 = cljs.core.chunked_seq_QMARK_.call(null,inst_10452);
var state_10493__$1 = state_10493;
if(inst_10454){
var statearr_10524_10597 = state_10493__$1;
(statearr_10524_10597[(1)] = (36));

} else {
var statearr_10525_10598 = state_10493__$1;
(statearr_10525_10598[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (13))){
var inst_10384 = (state_10493[(26)]);
var inst_10387 = cljs.core.async.close_BANG_.call(null,inst_10384);
var state_10493__$1 = state_10493;
var statearr_10526_10599 = state_10493__$1;
(statearr_10526_10599[(2)] = inst_10387);

(statearr_10526_10599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (22))){
var inst_10405 = (state_10493[(8)]);
var inst_10408 = cljs.core.async.close_BANG_.call(null,inst_10405);
var state_10493__$1 = state_10493;
var statearr_10527_10600 = state_10493__$1;
(statearr_10527_10600[(2)] = inst_10408);

(statearr_10527_10600[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (36))){
var inst_10452 = (state_10493[(25)]);
var inst_10456 = cljs.core.chunk_first.call(null,inst_10452);
var inst_10457 = cljs.core.chunk_rest.call(null,inst_10452);
var inst_10458 = cljs.core.count.call(null,inst_10456);
var inst_10433 = inst_10457;
var inst_10434 = inst_10456;
var inst_10435 = inst_10458;
var inst_10436 = (0);
var state_10493__$1 = (function (){var statearr_10528 = state_10493;
(statearr_10528[(20)] = inst_10433);

(statearr_10528[(9)] = inst_10436);

(statearr_10528[(21)] = inst_10435);

(statearr_10528[(12)] = inst_10434);

return statearr_10528;
})();
var statearr_10529_10601 = state_10493__$1;
(statearr_10529_10601[(2)] = null);

(statearr_10529_10601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (41))){
var inst_10452 = (state_10493[(25)]);
var inst_10468 = (state_10493[(2)]);
var inst_10469 = cljs.core.next.call(null,inst_10452);
var inst_10433 = inst_10469;
var inst_10434 = null;
var inst_10435 = (0);
var inst_10436 = (0);
var state_10493__$1 = (function (){var statearr_10530 = state_10493;
(statearr_10530[(20)] = inst_10433);

(statearr_10530[(9)] = inst_10436);

(statearr_10530[(21)] = inst_10435);

(statearr_10530[(12)] = inst_10434);

(statearr_10530[(27)] = inst_10468);

return statearr_10530;
})();
var statearr_10531_10602 = state_10493__$1;
(statearr_10531_10602[(2)] = null);

(statearr_10531_10602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (43))){
var state_10493__$1 = state_10493;
var statearr_10532_10603 = state_10493__$1;
(statearr_10532_10603[(2)] = null);

(statearr_10532_10603[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (29))){
var inst_10477 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10533_10604 = state_10493__$1;
(statearr_10533_10604[(2)] = inst_10477);

(statearr_10533_10604[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (44))){
var inst_10486 = (state_10493[(2)]);
var state_10493__$1 = (function (){var statearr_10534 = state_10493;
(statearr_10534[(28)] = inst_10486);

return statearr_10534;
})();
var statearr_10535_10605 = state_10493__$1;
(statearr_10535_10605[(2)] = null);

(statearr_10535_10605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (6))){
var inst_10425 = (state_10493[(29)]);
var inst_10424 = cljs.core.deref.call(null,cs);
var inst_10425__$1 = cljs.core.keys.call(null,inst_10424);
var inst_10426 = cljs.core.count.call(null,inst_10425__$1);
var inst_10427 = cljs.core.reset_BANG_.call(null,dctr,inst_10426);
var inst_10432 = cljs.core.seq.call(null,inst_10425__$1);
var inst_10433 = inst_10432;
var inst_10434 = null;
var inst_10435 = (0);
var inst_10436 = (0);
var state_10493__$1 = (function (){var statearr_10536 = state_10493;
(statearr_10536[(20)] = inst_10433);

(statearr_10536[(9)] = inst_10436);

(statearr_10536[(29)] = inst_10425__$1);

(statearr_10536[(21)] = inst_10435);

(statearr_10536[(30)] = inst_10427);

(statearr_10536[(12)] = inst_10434);

return statearr_10536;
})();
var statearr_10537_10606 = state_10493__$1;
(statearr_10537_10606[(2)] = null);

(statearr_10537_10606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (28))){
var inst_10433 = (state_10493[(20)]);
var inst_10452 = (state_10493[(25)]);
var inst_10452__$1 = cljs.core.seq.call(null,inst_10433);
var state_10493__$1 = (function (){var statearr_10538 = state_10493;
(statearr_10538[(25)] = inst_10452__$1);

return statearr_10538;
})();
if(inst_10452__$1){
var statearr_10539_10607 = state_10493__$1;
(statearr_10539_10607[(1)] = (33));

} else {
var statearr_10540_10608 = state_10493__$1;
(statearr_10540_10608[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (25))){
var inst_10436 = (state_10493[(9)]);
var inst_10435 = (state_10493[(21)]);
var inst_10438 = (inst_10436 < inst_10435);
var inst_10439 = inst_10438;
var state_10493__$1 = state_10493;
if(cljs.core.truth_(inst_10439)){
var statearr_10541_10609 = state_10493__$1;
(statearr_10541_10609[(1)] = (27));

} else {
var statearr_10542_10610 = state_10493__$1;
(statearr_10542_10610[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (34))){
var state_10493__$1 = state_10493;
var statearr_10543_10611 = state_10493__$1;
(statearr_10543_10611[(2)] = null);

(statearr_10543_10611[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (17))){
var state_10493__$1 = state_10493;
var statearr_10544_10612 = state_10493__$1;
(statearr_10544_10612[(2)] = null);

(statearr_10544_10612[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (3))){
var inst_10491 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10493__$1,inst_10491);
} else {
if((state_val_10494 === (12))){
var inst_10420 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10545_10613 = state_10493__$1;
(statearr_10545_10613[(2)] = inst_10420);

(statearr_10545_10613[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (2))){
var state_10493__$1 = state_10493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10493__$1,(4),ch);
} else {
if((state_val_10494 === (23))){
var state_10493__$1 = state_10493;
var statearr_10546_10614 = state_10493__$1;
(statearr_10546_10614[(2)] = null);

(statearr_10546_10614[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (35))){
var inst_10475 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10547_10615 = state_10493__$1;
(statearr_10547_10615[(2)] = inst_10475);

(statearr_10547_10615[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (19))){
var inst_10394 = (state_10493[(7)]);
var inst_10398 = cljs.core.chunk_first.call(null,inst_10394);
var inst_10399 = cljs.core.chunk_rest.call(null,inst_10394);
var inst_10400 = cljs.core.count.call(null,inst_10398);
var inst_10374 = inst_10399;
var inst_10375 = inst_10398;
var inst_10376 = inst_10400;
var inst_10377 = (0);
var state_10493__$1 = (function (){var statearr_10548 = state_10493;
(statearr_10548[(13)] = inst_10375);

(statearr_10548[(14)] = inst_10376);

(statearr_10548[(15)] = inst_10374);

(statearr_10548[(16)] = inst_10377);

return statearr_10548;
})();
var statearr_10549_10616 = state_10493__$1;
(statearr_10549_10616[(2)] = null);

(statearr_10549_10616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (11))){
var inst_10374 = (state_10493[(15)]);
var inst_10394 = (state_10493[(7)]);
var inst_10394__$1 = cljs.core.seq.call(null,inst_10374);
var state_10493__$1 = (function (){var statearr_10550 = state_10493;
(statearr_10550[(7)] = inst_10394__$1);

return statearr_10550;
})();
if(inst_10394__$1){
var statearr_10551_10617 = state_10493__$1;
(statearr_10551_10617[(1)] = (16));

} else {
var statearr_10552_10618 = state_10493__$1;
(statearr_10552_10618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (9))){
var inst_10422 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10553_10619 = state_10493__$1;
(statearr_10553_10619[(2)] = inst_10422);

(statearr_10553_10619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (5))){
var inst_10372 = cljs.core.deref.call(null,cs);
var inst_10373 = cljs.core.seq.call(null,inst_10372);
var inst_10374 = inst_10373;
var inst_10375 = null;
var inst_10376 = (0);
var inst_10377 = (0);
var state_10493__$1 = (function (){var statearr_10554 = state_10493;
(statearr_10554[(13)] = inst_10375);

(statearr_10554[(14)] = inst_10376);

(statearr_10554[(15)] = inst_10374);

(statearr_10554[(16)] = inst_10377);

return statearr_10554;
})();
var statearr_10555_10620 = state_10493__$1;
(statearr_10555_10620[(2)] = null);

(statearr_10555_10620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (14))){
var state_10493__$1 = state_10493;
var statearr_10556_10621 = state_10493__$1;
(statearr_10556_10621[(2)] = null);

(statearr_10556_10621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (45))){
var inst_10483 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10557_10622 = state_10493__$1;
(statearr_10557_10622[(2)] = inst_10483);

(statearr_10557_10622[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (26))){
var inst_10425 = (state_10493[(29)]);
var inst_10479 = (state_10493[(2)]);
var inst_10480 = cljs.core.seq.call(null,inst_10425);
var state_10493__$1 = (function (){var statearr_10558 = state_10493;
(statearr_10558[(31)] = inst_10479);

return statearr_10558;
})();
if(inst_10480){
var statearr_10559_10623 = state_10493__$1;
(statearr_10559_10623[(1)] = (42));

} else {
var statearr_10560_10624 = state_10493__$1;
(statearr_10560_10624[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (16))){
var inst_10394 = (state_10493[(7)]);
var inst_10396 = cljs.core.chunked_seq_QMARK_.call(null,inst_10394);
var state_10493__$1 = state_10493;
if(inst_10396){
var statearr_10561_10625 = state_10493__$1;
(statearr_10561_10625[(1)] = (19));

} else {
var statearr_10562_10626 = state_10493__$1;
(statearr_10562_10626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (38))){
var inst_10472 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10563_10627 = state_10493__$1;
(statearr_10563_10627[(2)] = inst_10472);

(statearr_10563_10627[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (30))){
var state_10493__$1 = state_10493;
var statearr_10564_10628 = state_10493__$1;
(statearr_10564_10628[(2)] = null);

(statearr_10564_10628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (10))){
var inst_10375 = (state_10493[(13)]);
var inst_10377 = (state_10493[(16)]);
var inst_10383 = cljs.core._nth.call(null,inst_10375,inst_10377);
var inst_10384 = cljs.core.nth.call(null,inst_10383,(0),null);
var inst_10385 = cljs.core.nth.call(null,inst_10383,(1),null);
var state_10493__$1 = (function (){var statearr_10565 = state_10493;
(statearr_10565[(26)] = inst_10384);

return statearr_10565;
})();
if(cljs.core.truth_(inst_10385)){
var statearr_10566_10629 = state_10493__$1;
(statearr_10566_10629[(1)] = (13));

} else {
var statearr_10567_10630 = state_10493__$1;
(statearr_10567_10630[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (18))){
var inst_10418 = (state_10493[(2)]);
var state_10493__$1 = state_10493;
var statearr_10568_10631 = state_10493__$1;
(statearr_10568_10631[(2)] = inst_10418);

(statearr_10568_10631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (42))){
var state_10493__$1 = state_10493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10493__$1,(45),dchan);
} else {
if((state_val_10494 === (37))){
var inst_10365 = (state_10493[(10)]);
var inst_10461 = (state_10493[(23)]);
var inst_10452 = (state_10493[(25)]);
var inst_10461__$1 = cljs.core.first.call(null,inst_10452);
var inst_10462 = cljs.core.async.put_BANG_.call(null,inst_10461__$1,inst_10365,done);
var state_10493__$1 = (function (){var statearr_10569 = state_10493;
(statearr_10569[(23)] = inst_10461__$1);

return statearr_10569;
})();
if(cljs.core.truth_(inst_10462)){
var statearr_10570_10632 = state_10493__$1;
(statearr_10570_10632[(1)] = (39));

} else {
var statearr_10571_10633 = state_10493__$1;
(statearr_10571_10633[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10494 === (8))){
var inst_10376 = (state_10493[(14)]);
var inst_10377 = (state_10493[(16)]);
var inst_10379 = (inst_10377 < inst_10376);
var inst_10380 = inst_10379;
var state_10493__$1 = state_10493;
if(cljs.core.truth_(inst_10380)){
var statearr_10572_10634 = state_10493__$1;
(statearr_10572_10634[(1)] = (10));

} else {
var statearr_10573_10635 = state_10493__$1;
(statearr_10573_10635[(1)] = (11));

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
});})(c__9274__auto___10581,cs,m,dchan,dctr,done))
;
return ((function (switch__9162__auto__,c__9274__auto___10581,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9163__auto__ = null;
var cljs$core$async$mult_$_state_machine__9163__auto____0 = (function (){
var statearr_10577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10577[(0)] = cljs$core$async$mult_$_state_machine__9163__auto__);

(statearr_10577[(1)] = (1));

return statearr_10577;
});
var cljs$core$async$mult_$_state_machine__9163__auto____1 = (function (state_10493){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_10493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e10578){if((e10578 instanceof Object)){
var ex__9166__auto__ = e10578;
var statearr_10579_10636 = state_10493;
(statearr_10579_10636[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10637 = state_10493;
state_10493 = G__10637;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9163__auto__ = function(state_10493){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9163__auto____1.call(this,state_10493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9163__auto____0;
cljs$core$async$mult_$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9163__auto____1;
return cljs$core$async$mult_$_state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___10581,cs,m,dchan,dctr,done))
})();
var state__9276__auto__ = (function (){var statearr_10580 = f__9275__auto__.call(null);
(statearr_10580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___10581);

return statearr_10580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___10581,cs,m,dchan,dctr,done))
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
var args10638 = [];
var len__7279__auto___10641 = arguments.length;
var i__7280__auto___10642 = (0);
while(true){
if((i__7280__auto___10642 < len__7279__auto___10641)){
args10638.push((arguments[i__7280__auto___10642]));

var G__10643 = (i__7280__auto___10642 + (1));
i__7280__auto___10642 = G__10643;
continue;
} else {
}
break;
}

var G__10640 = args10638.length;
switch (G__10640) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10638.length)].join('')));

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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m);
} else {
var m__6874__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,state_map);
} else {
var m__6874__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,state_map);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,mode);
} else {
var m__6874__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___10655 = arguments.length;
var i__7280__auto___10656 = (0);
while(true){
if((i__7280__auto___10656 < len__7279__auto___10655)){
args__7286__auto__.push((arguments[i__7280__auto___10656]));

var G__10657 = (i__7280__auto___10656 + (1));
i__7280__auto___10656 = G__10657;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((3) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7287__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10649){
var map__10650 = p__10649;
var map__10650__$1 = ((((!((map__10650 == null)))?((((map__10650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10650):map__10650);
var opts = map__10650__$1;
var statearr_10652_10658 = state;
(statearr_10652_10658[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10650,map__10650__$1,opts){
return (function (val){
var statearr_10653_10659 = state;
(statearr_10653_10659[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10650,map__10650__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10654_10660 = state;
(statearr_10654_10660[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10645){
var G__10646 = cljs.core.first.call(null,seq10645);
var seq10645__$1 = cljs.core.next.call(null,seq10645);
var G__10647 = cljs.core.first.call(null,seq10645__$1);
var seq10645__$2 = cljs.core.next.call(null,seq10645__$1);
var G__10648 = cljs.core.first.call(null,seq10645__$2);
var seq10645__$3 = cljs.core.next.call(null,seq10645__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10646,G__10647,G__10648,seq10645__$3);
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
if(typeof cljs.core.async.t_cljs$core$async10824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10824 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10825){
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
this.meta10825 = meta10825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10826,meta10825__$1){
var self__ = this;
var _10826__$1 = this;
return (new cljs.core.async.t_cljs$core$async10824(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10825__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10826){
var self__ = this;
var _10826__$1 = this;
return self__.meta10825;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10824.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10824.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10825","meta10825",994335629,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10824";

cljs.core.async.t_cljs$core$async10824.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async10824");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10824 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10825){
return (new cljs.core.async.t_cljs$core$async10824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10825));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10824(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9274__auto___10987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___10987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___10987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10924){
var state_val_10925 = (state_10924[(1)]);
if((state_val_10925 === (7))){
var inst_10842 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10926_10988 = state_10924__$1;
(statearr_10926_10988[(2)] = inst_10842);

(statearr_10926_10988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (20))){
var inst_10854 = (state_10924[(7)]);
var state_10924__$1 = state_10924;
var statearr_10927_10989 = state_10924__$1;
(statearr_10927_10989[(2)] = inst_10854);

(statearr_10927_10989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (27))){
var state_10924__$1 = state_10924;
var statearr_10928_10990 = state_10924__$1;
(statearr_10928_10990[(2)] = null);

(statearr_10928_10990[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (1))){
var inst_10830 = (state_10924[(8)]);
var inst_10830__$1 = calc_state.call(null);
var inst_10832 = (inst_10830__$1 == null);
var inst_10833 = cljs.core.not.call(null,inst_10832);
var state_10924__$1 = (function (){var statearr_10929 = state_10924;
(statearr_10929[(8)] = inst_10830__$1);

return statearr_10929;
})();
if(inst_10833){
var statearr_10930_10991 = state_10924__$1;
(statearr_10930_10991[(1)] = (2));

} else {
var statearr_10931_10992 = state_10924__$1;
(statearr_10931_10992[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (24))){
var inst_10877 = (state_10924[(9)]);
var inst_10884 = (state_10924[(10)]);
var inst_10898 = (state_10924[(11)]);
var inst_10898__$1 = inst_10877.call(null,inst_10884);
var state_10924__$1 = (function (){var statearr_10932 = state_10924;
(statearr_10932[(11)] = inst_10898__$1);

return statearr_10932;
})();
if(cljs.core.truth_(inst_10898__$1)){
var statearr_10933_10993 = state_10924__$1;
(statearr_10933_10993[(1)] = (29));

} else {
var statearr_10934_10994 = state_10924__$1;
(statearr_10934_10994[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (4))){
var inst_10845 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
if(cljs.core.truth_(inst_10845)){
var statearr_10935_10995 = state_10924__$1;
(statearr_10935_10995[(1)] = (8));

} else {
var statearr_10936_10996 = state_10924__$1;
(statearr_10936_10996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (15))){
var inst_10871 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
if(cljs.core.truth_(inst_10871)){
var statearr_10937_10997 = state_10924__$1;
(statearr_10937_10997[(1)] = (19));

} else {
var statearr_10938_10998 = state_10924__$1;
(statearr_10938_10998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (21))){
var inst_10876 = (state_10924[(12)]);
var inst_10876__$1 = (state_10924[(2)]);
var inst_10877 = cljs.core.get.call(null,inst_10876__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10878 = cljs.core.get.call(null,inst_10876__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10879 = cljs.core.get.call(null,inst_10876__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10924__$1 = (function (){var statearr_10939 = state_10924;
(statearr_10939[(9)] = inst_10877);

(statearr_10939[(13)] = inst_10878);

(statearr_10939[(12)] = inst_10876__$1);

return statearr_10939;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10924__$1,(22),inst_10879);
} else {
if((state_val_10925 === (31))){
var inst_10906 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
if(cljs.core.truth_(inst_10906)){
var statearr_10940_10999 = state_10924__$1;
(statearr_10940_10999[(1)] = (32));

} else {
var statearr_10941_11000 = state_10924__$1;
(statearr_10941_11000[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (32))){
var inst_10883 = (state_10924[(14)]);
var state_10924__$1 = state_10924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10924__$1,(35),out,inst_10883);
} else {
if((state_val_10925 === (33))){
var inst_10876 = (state_10924[(12)]);
var inst_10854 = inst_10876;
var state_10924__$1 = (function (){var statearr_10942 = state_10924;
(statearr_10942[(7)] = inst_10854);

return statearr_10942;
})();
var statearr_10943_11001 = state_10924__$1;
(statearr_10943_11001[(2)] = null);

(statearr_10943_11001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (13))){
var inst_10854 = (state_10924[(7)]);
var inst_10861 = inst_10854.cljs$lang$protocol_mask$partition0$;
var inst_10862 = (inst_10861 & (64));
var inst_10863 = inst_10854.cljs$core$ISeq$;
var inst_10864 = (inst_10862) || (inst_10863);
var state_10924__$1 = state_10924;
if(cljs.core.truth_(inst_10864)){
var statearr_10944_11002 = state_10924__$1;
(statearr_10944_11002[(1)] = (16));

} else {
var statearr_10945_11003 = state_10924__$1;
(statearr_10945_11003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (22))){
var inst_10883 = (state_10924[(14)]);
var inst_10884 = (state_10924[(10)]);
var inst_10882 = (state_10924[(2)]);
var inst_10883__$1 = cljs.core.nth.call(null,inst_10882,(0),null);
var inst_10884__$1 = cljs.core.nth.call(null,inst_10882,(1),null);
var inst_10885 = (inst_10883__$1 == null);
var inst_10886 = cljs.core._EQ_.call(null,inst_10884__$1,change);
var inst_10887 = (inst_10885) || (inst_10886);
var state_10924__$1 = (function (){var statearr_10946 = state_10924;
(statearr_10946[(14)] = inst_10883__$1);

(statearr_10946[(10)] = inst_10884__$1);

return statearr_10946;
})();
if(cljs.core.truth_(inst_10887)){
var statearr_10947_11004 = state_10924__$1;
(statearr_10947_11004[(1)] = (23));

} else {
var statearr_10948_11005 = state_10924__$1;
(statearr_10948_11005[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (36))){
var inst_10876 = (state_10924[(12)]);
var inst_10854 = inst_10876;
var state_10924__$1 = (function (){var statearr_10949 = state_10924;
(statearr_10949[(7)] = inst_10854);

return statearr_10949;
})();
var statearr_10950_11006 = state_10924__$1;
(statearr_10950_11006[(2)] = null);

(statearr_10950_11006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (29))){
var inst_10898 = (state_10924[(11)]);
var state_10924__$1 = state_10924;
var statearr_10951_11007 = state_10924__$1;
(statearr_10951_11007[(2)] = inst_10898);

(statearr_10951_11007[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (6))){
var state_10924__$1 = state_10924;
var statearr_10952_11008 = state_10924__$1;
(statearr_10952_11008[(2)] = false);

(statearr_10952_11008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (28))){
var inst_10894 = (state_10924[(2)]);
var inst_10895 = calc_state.call(null);
var inst_10854 = inst_10895;
var state_10924__$1 = (function (){var statearr_10953 = state_10924;
(statearr_10953[(7)] = inst_10854);

(statearr_10953[(15)] = inst_10894);

return statearr_10953;
})();
var statearr_10954_11009 = state_10924__$1;
(statearr_10954_11009[(2)] = null);

(statearr_10954_11009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (25))){
var inst_10920 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10955_11010 = state_10924__$1;
(statearr_10955_11010[(2)] = inst_10920);

(statearr_10955_11010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (34))){
var inst_10918 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10956_11011 = state_10924__$1;
(statearr_10956_11011[(2)] = inst_10918);

(statearr_10956_11011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (17))){
var state_10924__$1 = state_10924;
var statearr_10957_11012 = state_10924__$1;
(statearr_10957_11012[(2)] = false);

(statearr_10957_11012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (3))){
var state_10924__$1 = state_10924;
var statearr_10958_11013 = state_10924__$1;
(statearr_10958_11013[(2)] = false);

(statearr_10958_11013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (12))){
var inst_10922 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10924__$1,inst_10922);
} else {
if((state_val_10925 === (2))){
var inst_10830 = (state_10924[(8)]);
var inst_10835 = inst_10830.cljs$lang$protocol_mask$partition0$;
var inst_10836 = (inst_10835 & (64));
var inst_10837 = inst_10830.cljs$core$ISeq$;
var inst_10838 = (inst_10836) || (inst_10837);
var state_10924__$1 = state_10924;
if(cljs.core.truth_(inst_10838)){
var statearr_10959_11014 = state_10924__$1;
(statearr_10959_11014[(1)] = (5));

} else {
var statearr_10960_11015 = state_10924__$1;
(statearr_10960_11015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (23))){
var inst_10883 = (state_10924[(14)]);
var inst_10889 = (inst_10883 == null);
var state_10924__$1 = state_10924;
if(cljs.core.truth_(inst_10889)){
var statearr_10961_11016 = state_10924__$1;
(statearr_10961_11016[(1)] = (26));

} else {
var statearr_10962_11017 = state_10924__$1;
(statearr_10962_11017[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (35))){
var inst_10909 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
if(cljs.core.truth_(inst_10909)){
var statearr_10963_11018 = state_10924__$1;
(statearr_10963_11018[(1)] = (36));

} else {
var statearr_10964_11019 = state_10924__$1;
(statearr_10964_11019[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (19))){
var inst_10854 = (state_10924[(7)]);
var inst_10873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10854);
var state_10924__$1 = state_10924;
var statearr_10965_11020 = state_10924__$1;
(statearr_10965_11020[(2)] = inst_10873);

(statearr_10965_11020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (11))){
var inst_10854 = (state_10924[(7)]);
var inst_10858 = (inst_10854 == null);
var inst_10859 = cljs.core.not.call(null,inst_10858);
var state_10924__$1 = state_10924;
if(inst_10859){
var statearr_10966_11021 = state_10924__$1;
(statearr_10966_11021[(1)] = (13));

} else {
var statearr_10967_11022 = state_10924__$1;
(statearr_10967_11022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (9))){
var inst_10830 = (state_10924[(8)]);
var state_10924__$1 = state_10924;
var statearr_10968_11023 = state_10924__$1;
(statearr_10968_11023[(2)] = inst_10830);

(statearr_10968_11023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (5))){
var state_10924__$1 = state_10924;
var statearr_10969_11024 = state_10924__$1;
(statearr_10969_11024[(2)] = true);

(statearr_10969_11024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (14))){
var state_10924__$1 = state_10924;
var statearr_10970_11025 = state_10924__$1;
(statearr_10970_11025[(2)] = false);

(statearr_10970_11025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (26))){
var inst_10884 = (state_10924[(10)]);
var inst_10891 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10884);
var state_10924__$1 = state_10924;
var statearr_10971_11026 = state_10924__$1;
(statearr_10971_11026[(2)] = inst_10891);

(statearr_10971_11026[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (16))){
var state_10924__$1 = state_10924;
var statearr_10972_11027 = state_10924__$1;
(statearr_10972_11027[(2)] = true);

(statearr_10972_11027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (38))){
var inst_10914 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10973_11028 = state_10924__$1;
(statearr_10973_11028[(2)] = inst_10914);

(statearr_10973_11028[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (30))){
var inst_10877 = (state_10924[(9)]);
var inst_10878 = (state_10924[(13)]);
var inst_10884 = (state_10924[(10)]);
var inst_10901 = cljs.core.empty_QMARK_.call(null,inst_10877);
var inst_10902 = inst_10878.call(null,inst_10884);
var inst_10903 = cljs.core.not.call(null,inst_10902);
var inst_10904 = (inst_10901) && (inst_10903);
var state_10924__$1 = state_10924;
var statearr_10974_11029 = state_10924__$1;
(statearr_10974_11029[(2)] = inst_10904);

(statearr_10974_11029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (10))){
var inst_10830 = (state_10924[(8)]);
var inst_10850 = (state_10924[(2)]);
var inst_10851 = cljs.core.get.call(null,inst_10850,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10852 = cljs.core.get.call(null,inst_10850,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10853 = cljs.core.get.call(null,inst_10850,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10854 = inst_10830;
var state_10924__$1 = (function (){var statearr_10975 = state_10924;
(statearr_10975[(16)] = inst_10853);

(statearr_10975[(7)] = inst_10854);

(statearr_10975[(17)] = inst_10852);

(statearr_10975[(18)] = inst_10851);

return statearr_10975;
})();
var statearr_10976_11030 = state_10924__$1;
(statearr_10976_11030[(2)] = null);

(statearr_10976_11030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (18))){
var inst_10868 = (state_10924[(2)]);
var state_10924__$1 = state_10924;
var statearr_10977_11031 = state_10924__$1;
(statearr_10977_11031[(2)] = inst_10868);

(statearr_10977_11031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (37))){
var state_10924__$1 = state_10924;
var statearr_10978_11032 = state_10924__$1;
(statearr_10978_11032[(2)] = null);

(statearr_10978_11032[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10925 === (8))){
var inst_10830 = (state_10924[(8)]);
var inst_10847 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10830);
var state_10924__$1 = state_10924;
var statearr_10979_11033 = state_10924__$1;
(statearr_10979_11033[(2)] = inst_10847);

(statearr_10979_11033[(1)] = (10));


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
});})(c__9274__auto___10987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9162__auto__,c__9274__auto___10987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9163__auto__ = null;
var cljs$core$async$mix_$_state_machine__9163__auto____0 = (function (){
var statearr_10983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10983[(0)] = cljs$core$async$mix_$_state_machine__9163__auto__);

(statearr_10983[(1)] = (1));

return statearr_10983;
});
var cljs$core$async$mix_$_state_machine__9163__auto____1 = (function (state_10924){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_10924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e10984){if((e10984 instanceof Object)){
var ex__9166__auto__ = e10984;
var statearr_10985_11034 = state_10924;
(statearr_10985_11034[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11035 = state_10924;
state_10924 = G__11035;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9163__auto__ = function(state_10924){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9163__auto____1.call(this,state_10924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9163__auto____0;
cljs$core$async$mix_$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9163__auto____1;
return cljs$core$async$mix_$_state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___10987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9276__auto__ = (function (){var statearr_10986 = f__9275__auto__.call(null);
(statearr_10986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___10987);

return statearr_10986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___10987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6874__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11036 = [];
var len__7279__auto___11039 = arguments.length;
var i__7280__auto___11040 = (0);
while(true){
if((i__7280__auto___11040 < len__7279__auto___11039)){
args11036.push((arguments[i__7280__auto___11040]));

var G__11041 = (i__7280__auto___11040 + (1));
i__7280__auto___11040 = G__11041;
continue;
} else {
}
break;
}

var G__11038 = args11036.length;
switch (G__11038) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11036.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p);
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
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v);
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
var args11044 = [];
var len__7279__auto___11169 = arguments.length;
var i__7280__auto___11170 = (0);
while(true){
if((i__7280__auto___11170 < len__7279__auto___11169)){
args11044.push((arguments[i__7280__auto___11170]));

var G__11171 = (i__7280__auto___11170 + (1));
i__7280__auto___11170 = G__11171;
continue;
} else {
}
break;
}

var G__11046 = args11044.length;
switch (G__11046) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11044.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6210__auto__,mults){
return (function (p1__11043_SHARP_){
if(cljs.core.truth_(p1__11043_SHARP_.call(null,topic))){
return p1__11043_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11043_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6210__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11047 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11048){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11048 = meta11048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11049,meta11048__$1){
var self__ = this;
var _11049__$1 = this;
return (new cljs.core.async.t_cljs$core$async11047(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11048__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11049){
var self__ = this;
var _11049__$1 = this;
return self__.meta11048;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11047.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11047.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11048","meta11048",-2138760179,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11047";

cljs.core.async.t_cljs$core$async11047.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async11047");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11047 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11047(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11048){
return (new cljs.core.async.t_cljs$core$async11047(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11048));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11047(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9274__auto___11173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___11173,mults,ensure_mult,p){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___11173,mults,ensure_mult,p){
return (function (state_11121){
var state_val_11122 = (state_11121[(1)]);
if((state_val_11122 === (7))){
var inst_11117 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11123_11174 = state_11121__$1;
(statearr_11123_11174[(2)] = inst_11117);

(statearr_11123_11174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (20))){
var state_11121__$1 = state_11121;
var statearr_11124_11175 = state_11121__$1;
(statearr_11124_11175[(2)] = null);

(statearr_11124_11175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (1))){
var state_11121__$1 = state_11121;
var statearr_11125_11176 = state_11121__$1;
(statearr_11125_11176[(2)] = null);

(statearr_11125_11176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (24))){
var inst_11100 = (state_11121[(7)]);
var inst_11109 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11100);
var state_11121__$1 = state_11121;
var statearr_11126_11177 = state_11121__$1;
(statearr_11126_11177[(2)] = inst_11109);

(statearr_11126_11177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (4))){
var inst_11052 = (state_11121[(8)]);
var inst_11052__$1 = (state_11121[(2)]);
var inst_11053 = (inst_11052__$1 == null);
var state_11121__$1 = (function (){var statearr_11127 = state_11121;
(statearr_11127[(8)] = inst_11052__$1);

return statearr_11127;
})();
if(cljs.core.truth_(inst_11053)){
var statearr_11128_11178 = state_11121__$1;
(statearr_11128_11178[(1)] = (5));

} else {
var statearr_11129_11179 = state_11121__$1;
(statearr_11129_11179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (15))){
var inst_11094 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11130_11180 = state_11121__$1;
(statearr_11130_11180[(2)] = inst_11094);

(statearr_11130_11180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (21))){
var inst_11114 = (state_11121[(2)]);
var state_11121__$1 = (function (){var statearr_11131 = state_11121;
(statearr_11131[(9)] = inst_11114);

return statearr_11131;
})();
var statearr_11132_11181 = state_11121__$1;
(statearr_11132_11181[(2)] = null);

(statearr_11132_11181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (13))){
var inst_11076 = (state_11121[(10)]);
var inst_11078 = cljs.core.chunked_seq_QMARK_.call(null,inst_11076);
var state_11121__$1 = state_11121;
if(inst_11078){
var statearr_11133_11182 = state_11121__$1;
(statearr_11133_11182[(1)] = (16));

} else {
var statearr_11134_11183 = state_11121__$1;
(statearr_11134_11183[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (22))){
var inst_11106 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
if(cljs.core.truth_(inst_11106)){
var statearr_11135_11184 = state_11121__$1;
(statearr_11135_11184[(1)] = (23));

} else {
var statearr_11136_11185 = state_11121__$1;
(statearr_11136_11185[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (6))){
var inst_11052 = (state_11121[(8)]);
var inst_11100 = (state_11121[(7)]);
var inst_11102 = (state_11121[(11)]);
var inst_11100__$1 = topic_fn.call(null,inst_11052);
var inst_11101 = cljs.core.deref.call(null,mults);
var inst_11102__$1 = cljs.core.get.call(null,inst_11101,inst_11100__$1);
var state_11121__$1 = (function (){var statearr_11137 = state_11121;
(statearr_11137[(7)] = inst_11100__$1);

(statearr_11137[(11)] = inst_11102__$1);

return statearr_11137;
})();
if(cljs.core.truth_(inst_11102__$1)){
var statearr_11138_11186 = state_11121__$1;
(statearr_11138_11186[(1)] = (19));

} else {
var statearr_11139_11187 = state_11121__$1;
(statearr_11139_11187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (25))){
var inst_11111 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11140_11188 = state_11121__$1;
(statearr_11140_11188[(2)] = inst_11111);

(statearr_11140_11188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (17))){
var inst_11076 = (state_11121[(10)]);
var inst_11085 = cljs.core.first.call(null,inst_11076);
var inst_11086 = cljs.core.async.muxch_STAR_.call(null,inst_11085);
var inst_11087 = cljs.core.async.close_BANG_.call(null,inst_11086);
var inst_11088 = cljs.core.next.call(null,inst_11076);
var inst_11062 = inst_11088;
var inst_11063 = null;
var inst_11064 = (0);
var inst_11065 = (0);
var state_11121__$1 = (function (){var statearr_11141 = state_11121;
(statearr_11141[(12)] = inst_11064);

(statearr_11141[(13)] = inst_11065);

(statearr_11141[(14)] = inst_11087);

(statearr_11141[(15)] = inst_11062);

(statearr_11141[(16)] = inst_11063);

return statearr_11141;
})();
var statearr_11142_11189 = state_11121__$1;
(statearr_11142_11189[(2)] = null);

(statearr_11142_11189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (3))){
var inst_11119 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11121__$1,inst_11119);
} else {
if((state_val_11122 === (12))){
var inst_11096 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11143_11190 = state_11121__$1;
(statearr_11143_11190[(2)] = inst_11096);

(statearr_11143_11190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (2))){
var state_11121__$1 = state_11121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11121__$1,(4),ch);
} else {
if((state_val_11122 === (23))){
var state_11121__$1 = state_11121;
var statearr_11144_11191 = state_11121__$1;
(statearr_11144_11191[(2)] = null);

(statearr_11144_11191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (19))){
var inst_11052 = (state_11121[(8)]);
var inst_11102 = (state_11121[(11)]);
var inst_11104 = cljs.core.async.muxch_STAR_.call(null,inst_11102);
var state_11121__$1 = state_11121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11121__$1,(22),inst_11104,inst_11052);
} else {
if((state_val_11122 === (11))){
var inst_11076 = (state_11121[(10)]);
var inst_11062 = (state_11121[(15)]);
var inst_11076__$1 = cljs.core.seq.call(null,inst_11062);
var state_11121__$1 = (function (){var statearr_11145 = state_11121;
(statearr_11145[(10)] = inst_11076__$1);

return statearr_11145;
})();
if(inst_11076__$1){
var statearr_11146_11192 = state_11121__$1;
(statearr_11146_11192[(1)] = (13));

} else {
var statearr_11147_11193 = state_11121__$1;
(statearr_11147_11193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (9))){
var inst_11098 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11148_11194 = state_11121__$1;
(statearr_11148_11194[(2)] = inst_11098);

(statearr_11148_11194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (5))){
var inst_11059 = cljs.core.deref.call(null,mults);
var inst_11060 = cljs.core.vals.call(null,inst_11059);
var inst_11061 = cljs.core.seq.call(null,inst_11060);
var inst_11062 = inst_11061;
var inst_11063 = null;
var inst_11064 = (0);
var inst_11065 = (0);
var state_11121__$1 = (function (){var statearr_11149 = state_11121;
(statearr_11149[(12)] = inst_11064);

(statearr_11149[(13)] = inst_11065);

(statearr_11149[(15)] = inst_11062);

(statearr_11149[(16)] = inst_11063);

return statearr_11149;
})();
var statearr_11150_11195 = state_11121__$1;
(statearr_11150_11195[(2)] = null);

(statearr_11150_11195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (14))){
var state_11121__$1 = state_11121;
var statearr_11154_11196 = state_11121__$1;
(statearr_11154_11196[(2)] = null);

(statearr_11154_11196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (16))){
var inst_11076 = (state_11121[(10)]);
var inst_11080 = cljs.core.chunk_first.call(null,inst_11076);
var inst_11081 = cljs.core.chunk_rest.call(null,inst_11076);
var inst_11082 = cljs.core.count.call(null,inst_11080);
var inst_11062 = inst_11081;
var inst_11063 = inst_11080;
var inst_11064 = inst_11082;
var inst_11065 = (0);
var state_11121__$1 = (function (){var statearr_11155 = state_11121;
(statearr_11155[(12)] = inst_11064);

(statearr_11155[(13)] = inst_11065);

(statearr_11155[(15)] = inst_11062);

(statearr_11155[(16)] = inst_11063);

return statearr_11155;
})();
var statearr_11156_11197 = state_11121__$1;
(statearr_11156_11197[(2)] = null);

(statearr_11156_11197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (10))){
var inst_11064 = (state_11121[(12)]);
var inst_11065 = (state_11121[(13)]);
var inst_11062 = (state_11121[(15)]);
var inst_11063 = (state_11121[(16)]);
var inst_11070 = cljs.core._nth.call(null,inst_11063,inst_11065);
var inst_11071 = cljs.core.async.muxch_STAR_.call(null,inst_11070);
var inst_11072 = cljs.core.async.close_BANG_.call(null,inst_11071);
var inst_11073 = (inst_11065 + (1));
var tmp11151 = inst_11064;
var tmp11152 = inst_11062;
var tmp11153 = inst_11063;
var inst_11062__$1 = tmp11152;
var inst_11063__$1 = tmp11153;
var inst_11064__$1 = tmp11151;
var inst_11065__$1 = inst_11073;
var state_11121__$1 = (function (){var statearr_11157 = state_11121;
(statearr_11157[(12)] = inst_11064__$1);

(statearr_11157[(13)] = inst_11065__$1);

(statearr_11157[(17)] = inst_11072);

(statearr_11157[(15)] = inst_11062__$1);

(statearr_11157[(16)] = inst_11063__$1);

return statearr_11157;
})();
var statearr_11158_11198 = state_11121__$1;
(statearr_11158_11198[(2)] = null);

(statearr_11158_11198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (18))){
var inst_11091 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11159_11199 = state_11121__$1;
(statearr_11159_11199[(2)] = inst_11091);

(statearr_11159_11199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (8))){
var inst_11064 = (state_11121[(12)]);
var inst_11065 = (state_11121[(13)]);
var inst_11067 = (inst_11065 < inst_11064);
var inst_11068 = inst_11067;
var state_11121__$1 = state_11121;
if(cljs.core.truth_(inst_11068)){
var statearr_11160_11200 = state_11121__$1;
(statearr_11160_11200[(1)] = (10));

} else {
var statearr_11161_11201 = state_11121__$1;
(statearr_11161_11201[(1)] = (11));

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
});})(c__9274__auto___11173,mults,ensure_mult,p))
;
return ((function (switch__9162__auto__,c__9274__auto___11173,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_11165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11165[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_11165[(1)] = (1));

return statearr_11165;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_11121){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e11166){if((e11166 instanceof Object)){
var ex__9166__auto__ = e11166;
var statearr_11167_11202 = state_11121;
(statearr_11167_11202[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11203 = state_11121;
state_11121 = G__11203;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_11121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_11121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___11173,mults,ensure_mult,p))
})();
var state__9276__auto__ = (function (){var statearr_11168 = f__9275__auto__.call(null);
(statearr_11168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___11173);

return statearr_11168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___11173,mults,ensure_mult,p))
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
var args11204 = [];
var len__7279__auto___11207 = arguments.length;
var i__7280__auto___11208 = (0);
while(true){
if((i__7280__auto___11208 < len__7279__auto___11207)){
args11204.push((arguments[i__7280__auto___11208]));

var G__11209 = (i__7280__auto___11208 + (1));
i__7280__auto___11208 = G__11209;
continue;
} else {
}
break;
}

var G__11206 = args11204.length;
switch (G__11206) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11204.length)].join('')));

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
var args11211 = [];
var len__7279__auto___11214 = arguments.length;
var i__7280__auto___11215 = (0);
while(true){
if((i__7280__auto___11215 < len__7279__auto___11214)){
args11211.push((arguments[i__7280__auto___11215]));

var G__11216 = (i__7280__auto___11215 + (1));
i__7280__auto___11215 = G__11216;
continue;
} else {
}
break;
}

var G__11213 = args11211.length;
switch (G__11213) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11211.length)].join('')));

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
var args11218 = [];
var len__7279__auto___11289 = arguments.length;
var i__7280__auto___11290 = (0);
while(true){
if((i__7280__auto___11290 < len__7279__auto___11289)){
args11218.push((arguments[i__7280__auto___11290]));

var G__11291 = (i__7280__auto___11290 + (1));
i__7280__auto___11290 = G__11291;
continue;
} else {
}
break;
}

var G__11220 = args11218.length;
switch (G__11220) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11218.length)].join('')));

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
var c__9274__auto___11293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___11293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___11293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11259){
var state_val_11260 = (state_11259[(1)]);
if((state_val_11260 === (7))){
var state_11259__$1 = state_11259;
var statearr_11261_11294 = state_11259__$1;
(statearr_11261_11294[(2)] = null);

(statearr_11261_11294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (1))){
var state_11259__$1 = state_11259;
var statearr_11262_11295 = state_11259__$1;
(statearr_11262_11295[(2)] = null);

(statearr_11262_11295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (4))){
var inst_11223 = (state_11259[(7)]);
var inst_11225 = (inst_11223 < cnt);
var state_11259__$1 = state_11259;
if(cljs.core.truth_(inst_11225)){
var statearr_11263_11296 = state_11259__$1;
(statearr_11263_11296[(1)] = (6));

} else {
var statearr_11264_11297 = state_11259__$1;
(statearr_11264_11297[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (15))){
var inst_11255 = (state_11259[(2)]);
var state_11259__$1 = state_11259;
var statearr_11265_11298 = state_11259__$1;
(statearr_11265_11298[(2)] = inst_11255);

(statearr_11265_11298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (13))){
var inst_11248 = cljs.core.async.close_BANG_.call(null,out);
var state_11259__$1 = state_11259;
var statearr_11266_11299 = state_11259__$1;
(statearr_11266_11299[(2)] = inst_11248);

(statearr_11266_11299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (6))){
var state_11259__$1 = state_11259;
var statearr_11267_11300 = state_11259__$1;
(statearr_11267_11300[(2)] = null);

(statearr_11267_11300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (3))){
var inst_11257 = (state_11259[(2)]);
var state_11259__$1 = state_11259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11259__$1,inst_11257);
} else {
if((state_val_11260 === (12))){
var inst_11245 = (state_11259[(8)]);
var inst_11245__$1 = (state_11259[(2)]);
var inst_11246 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11245__$1);
var state_11259__$1 = (function (){var statearr_11268 = state_11259;
(statearr_11268[(8)] = inst_11245__$1);

return statearr_11268;
})();
if(cljs.core.truth_(inst_11246)){
var statearr_11269_11301 = state_11259__$1;
(statearr_11269_11301[(1)] = (13));

} else {
var statearr_11270_11302 = state_11259__$1;
(statearr_11270_11302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (2))){
var inst_11222 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11223 = (0);
var state_11259__$1 = (function (){var statearr_11271 = state_11259;
(statearr_11271[(7)] = inst_11223);

(statearr_11271[(9)] = inst_11222);

return statearr_11271;
})();
var statearr_11272_11303 = state_11259__$1;
(statearr_11272_11303[(2)] = null);

(statearr_11272_11303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (11))){
var inst_11223 = (state_11259[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11259,(10),Object,null,(9));
var inst_11232 = chs__$1.call(null,inst_11223);
var inst_11233 = done.call(null,inst_11223);
var inst_11234 = cljs.core.async.take_BANG_.call(null,inst_11232,inst_11233);
var state_11259__$1 = state_11259;
var statearr_11273_11304 = state_11259__$1;
(statearr_11273_11304[(2)] = inst_11234);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (9))){
var inst_11223 = (state_11259[(7)]);
var inst_11236 = (state_11259[(2)]);
var inst_11237 = (inst_11223 + (1));
var inst_11223__$1 = inst_11237;
var state_11259__$1 = (function (){var statearr_11274 = state_11259;
(statearr_11274[(10)] = inst_11236);

(statearr_11274[(7)] = inst_11223__$1);

return statearr_11274;
})();
var statearr_11275_11305 = state_11259__$1;
(statearr_11275_11305[(2)] = null);

(statearr_11275_11305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (5))){
var inst_11243 = (state_11259[(2)]);
var state_11259__$1 = (function (){var statearr_11276 = state_11259;
(statearr_11276[(11)] = inst_11243);

return statearr_11276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11259__$1,(12),dchan);
} else {
if((state_val_11260 === (14))){
var inst_11245 = (state_11259[(8)]);
var inst_11250 = cljs.core.apply.call(null,f,inst_11245);
var state_11259__$1 = state_11259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11259__$1,(16),out,inst_11250);
} else {
if((state_val_11260 === (16))){
var inst_11252 = (state_11259[(2)]);
var state_11259__$1 = (function (){var statearr_11277 = state_11259;
(statearr_11277[(12)] = inst_11252);

return statearr_11277;
})();
var statearr_11278_11306 = state_11259__$1;
(statearr_11278_11306[(2)] = null);

(statearr_11278_11306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (10))){
var inst_11227 = (state_11259[(2)]);
var inst_11228 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11259__$1 = (function (){var statearr_11279 = state_11259;
(statearr_11279[(13)] = inst_11227);

return statearr_11279;
})();
var statearr_11280_11307 = state_11259__$1;
(statearr_11280_11307[(2)] = inst_11228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11260 === (8))){
var inst_11241 = (state_11259[(2)]);
var state_11259__$1 = state_11259;
var statearr_11281_11308 = state_11259__$1;
(statearr_11281_11308[(2)] = inst_11241);

(statearr_11281_11308[(1)] = (5));


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
});})(c__9274__auto___11293,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9162__auto__,c__9274__auto___11293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_11285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11285[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_11285[(1)] = (1));

return statearr_11285;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_11259){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e11286){if((e11286 instanceof Object)){
var ex__9166__auto__ = e11286;
var statearr_11287_11309 = state_11259;
(statearr_11287_11309[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11310 = state_11259;
state_11259 = G__11310;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_11259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_11259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___11293,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9276__auto__ = (function (){var statearr_11288 = f__9275__auto__.call(null);
(statearr_11288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___11293);

return statearr_11288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___11293,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args11312 = [];
var len__7279__auto___11368 = arguments.length;
var i__7280__auto___11369 = (0);
while(true){
if((i__7280__auto___11369 < len__7279__auto___11368)){
args11312.push((arguments[i__7280__auto___11369]));

var G__11370 = (i__7280__auto___11369 + (1));
i__7280__auto___11369 = G__11370;
continue;
} else {
}
break;
}

var G__11314 = args11312.length;
switch (G__11314) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11312.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9274__auto___11372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___11372,out){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___11372,out){
return (function (state_11344){
var state_val_11345 = (state_11344[(1)]);
if((state_val_11345 === (7))){
var inst_11323 = (state_11344[(7)]);
var inst_11324 = (state_11344[(8)]);
var inst_11323__$1 = (state_11344[(2)]);
var inst_11324__$1 = cljs.core.nth.call(null,inst_11323__$1,(0),null);
var inst_11325 = cljs.core.nth.call(null,inst_11323__$1,(1),null);
var inst_11326 = (inst_11324__$1 == null);
var state_11344__$1 = (function (){var statearr_11346 = state_11344;
(statearr_11346[(7)] = inst_11323__$1);

(statearr_11346[(9)] = inst_11325);

(statearr_11346[(8)] = inst_11324__$1);

return statearr_11346;
})();
if(cljs.core.truth_(inst_11326)){
var statearr_11347_11373 = state_11344__$1;
(statearr_11347_11373[(1)] = (8));

} else {
var statearr_11348_11374 = state_11344__$1;
(statearr_11348_11374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (1))){
var inst_11315 = cljs.core.vec.call(null,chs);
var inst_11316 = inst_11315;
var state_11344__$1 = (function (){var statearr_11349 = state_11344;
(statearr_11349[(10)] = inst_11316);

return statearr_11349;
})();
var statearr_11350_11375 = state_11344__$1;
(statearr_11350_11375[(2)] = null);

(statearr_11350_11375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (4))){
var inst_11316 = (state_11344[(10)]);
var state_11344__$1 = state_11344;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11344__$1,(7),inst_11316);
} else {
if((state_val_11345 === (6))){
var inst_11340 = (state_11344[(2)]);
var state_11344__$1 = state_11344;
var statearr_11351_11376 = state_11344__$1;
(statearr_11351_11376[(2)] = inst_11340);

(statearr_11351_11376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (3))){
var inst_11342 = (state_11344[(2)]);
var state_11344__$1 = state_11344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11344__$1,inst_11342);
} else {
if((state_val_11345 === (2))){
var inst_11316 = (state_11344[(10)]);
var inst_11318 = cljs.core.count.call(null,inst_11316);
var inst_11319 = (inst_11318 > (0));
var state_11344__$1 = state_11344;
if(cljs.core.truth_(inst_11319)){
var statearr_11353_11377 = state_11344__$1;
(statearr_11353_11377[(1)] = (4));

} else {
var statearr_11354_11378 = state_11344__$1;
(statearr_11354_11378[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (11))){
var inst_11316 = (state_11344[(10)]);
var inst_11333 = (state_11344[(2)]);
var tmp11352 = inst_11316;
var inst_11316__$1 = tmp11352;
var state_11344__$1 = (function (){var statearr_11355 = state_11344;
(statearr_11355[(11)] = inst_11333);

(statearr_11355[(10)] = inst_11316__$1);

return statearr_11355;
})();
var statearr_11356_11379 = state_11344__$1;
(statearr_11356_11379[(2)] = null);

(statearr_11356_11379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (9))){
var inst_11324 = (state_11344[(8)]);
var state_11344__$1 = state_11344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11344__$1,(11),out,inst_11324);
} else {
if((state_val_11345 === (5))){
var inst_11338 = cljs.core.async.close_BANG_.call(null,out);
var state_11344__$1 = state_11344;
var statearr_11357_11380 = state_11344__$1;
(statearr_11357_11380[(2)] = inst_11338);

(statearr_11357_11380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (10))){
var inst_11336 = (state_11344[(2)]);
var state_11344__$1 = state_11344;
var statearr_11358_11381 = state_11344__$1;
(statearr_11358_11381[(2)] = inst_11336);

(statearr_11358_11381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11345 === (8))){
var inst_11323 = (state_11344[(7)]);
var inst_11316 = (state_11344[(10)]);
var inst_11325 = (state_11344[(9)]);
var inst_11324 = (state_11344[(8)]);
var inst_11328 = (function (){var cs = inst_11316;
var vec__11321 = inst_11323;
var v = inst_11324;
var c = inst_11325;
return ((function (cs,vec__11321,v,c,inst_11323,inst_11316,inst_11325,inst_11324,state_val_11345,c__9274__auto___11372,out){
return (function (p1__11311_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11311_SHARP_);
});
;})(cs,vec__11321,v,c,inst_11323,inst_11316,inst_11325,inst_11324,state_val_11345,c__9274__auto___11372,out))
})();
var inst_11329 = cljs.core.filterv.call(null,inst_11328,inst_11316);
var inst_11316__$1 = inst_11329;
var state_11344__$1 = (function (){var statearr_11359 = state_11344;
(statearr_11359[(10)] = inst_11316__$1);

return statearr_11359;
})();
var statearr_11360_11382 = state_11344__$1;
(statearr_11360_11382[(2)] = null);

(statearr_11360_11382[(1)] = (2));


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
});})(c__9274__auto___11372,out))
;
return ((function (switch__9162__auto__,c__9274__auto___11372,out){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_11364 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11364[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_11364[(1)] = (1));

return statearr_11364;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_11344){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e11365){if((e11365 instanceof Object)){
var ex__9166__auto__ = e11365;
var statearr_11366_11383 = state_11344;
(statearr_11366_11383[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11384 = state_11344;
state_11344 = G__11384;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_11344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_11344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___11372,out))
})();
var state__9276__auto__ = (function (){var statearr_11367 = f__9275__auto__.call(null);
(statearr_11367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___11372);

return statearr_11367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___11372,out))
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
var args11385 = [];
var len__7279__auto___11434 = arguments.length;
var i__7280__auto___11435 = (0);
while(true){
if((i__7280__auto___11435 < len__7279__auto___11434)){
args11385.push((arguments[i__7280__auto___11435]));

var G__11436 = (i__7280__auto___11435 + (1));
i__7280__auto___11435 = G__11436;
continue;
} else {
}
break;
}

var G__11387 = args11385.length;
switch (G__11387) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11385.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9274__auto___11438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___11438,out){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___11438,out){
return (function (state_11411){
var state_val_11412 = (state_11411[(1)]);
if((state_val_11412 === (7))){
var inst_11393 = (state_11411[(7)]);
var inst_11393__$1 = (state_11411[(2)]);
var inst_11394 = (inst_11393__$1 == null);
var inst_11395 = cljs.core.not.call(null,inst_11394);
var state_11411__$1 = (function (){var statearr_11413 = state_11411;
(statearr_11413[(7)] = inst_11393__$1);

return statearr_11413;
})();
if(inst_11395){
var statearr_11414_11439 = state_11411__$1;
(statearr_11414_11439[(1)] = (8));

} else {
var statearr_11415_11440 = state_11411__$1;
(statearr_11415_11440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (1))){
var inst_11388 = (0);
var state_11411__$1 = (function (){var statearr_11416 = state_11411;
(statearr_11416[(8)] = inst_11388);

return statearr_11416;
})();
var statearr_11417_11441 = state_11411__$1;
(statearr_11417_11441[(2)] = null);

(statearr_11417_11441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (4))){
var state_11411__$1 = state_11411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11411__$1,(7),ch);
} else {
if((state_val_11412 === (6))){
var inst_11406 = (state_11411[(2)]);
var state_11411__$1 = state_11411;
var statearr_11418_11442 = state_11411__$1;
(statearr_11418_11442[(2)] = inst_11406);

(statearr_11418_11442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (3))){
var inst_11408 = (state_11411[(2)]);
var inst_11409 = cljs.core.async.close_BANG_.call(null,out);
var state_11411__$1 = (function (){var statearr_11419 = state_11411;
(statearr_11419[(9)] = inst_11408);

return statearr_11419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11411__$1,inst_11409);
} else {
if((state_val_11412 === (2))){
var inst_11388 = (state_11411[(8)]);
var inst_11390 = (inst_11388 < n);
var state_11411__$1 = state_11411;
if(cljs.core.truth_(inst_11390)){
var statearr_11420_11443 = state_11411__$1;
(statearr_11420_11443[(1)] = (4));

} else {
var statearr_11421_11444 = state_11411__$1;
(statearr_11421_11444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (11))){
var inst_11388 = (state_11411[(8)]);
var inst_11398 = (state_11411[(2)]);
var inst_11399 = (inst_11388 + (1));
var inst_11388__$1 = inst_11399;
var state_11411__$1 = (function (){var statearr_11422 = state_11411;
(statearr_11422[(10)] = inst_11398);

(statearr_11422[(8)] = inst_11388__$1);

return statearr_11422;
})();
var statearr_11423_11445 = state_11411__$1;
(statearr_11423_11445[(2)] = null);

(statearr_11423_11445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (9))){
var state_11411__$1 = state_11411;
var statearr_11424_11446 = state_11411__$1;
(statearr_11424_11446[(2)] = null);

(statearr_11424_11446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (5))){
var state_11411__$1 = state_11411;
var statearr_11425_11447 = state_11411__$1;
(statearr_11425_11447[(2)] = null);

(statearr_11425_11447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (10))){
var inst_11403 = (state_11411[(2)]);
var state_11411__$1 = state_11411;
var statearr_11426_11448 = state_11411__$1;
(statearr_11426_11448[(2)] = inst_11403);

(statearr_11426_11448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (8))){
var inst_11393 = (state_11411[(7)]);
var state_11411__$1 = state_11411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11411__$1,(11),out,inst_11393);
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
});})(c__9274__auto___11438,out))
;
return ((function (switch__9162__auto__,c__9274__auto___11438,out){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_11430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11430[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_11430[(1)] = (1));

return statearr_11430;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_11411){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e11431){if((e11431 instanceof Object)){
var ex__9166__auto__ = e11431;
var statearr_11432_11449 = state_11411;
(statearr_11432_11449[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11450 = state_11411;
state_11411 = G__11450;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_11411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_11411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___11438,out))
})();
var state__9276__auto__ = (function (){var statearr_11433 = f__9275__auto__.call(null);
(statearr_11433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___11438);

return statearr_11433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___11438,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11458 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11458 = (function (map_LT_,f,ch,meta11459){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11459 = meta11459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11460,meta11459__$1){
var self__ = this;
var _11460__$1 = this;
return (new cljs.core.async.t_cljs$core$async11458(self__.map_LT_,self__.f,self__.ch,meta11459__$1));
});

cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11460){
var self__ = this;
var _11460__$1 = this;
return self__.meta11459;
});

cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11461 = (function (map_LT_,f,ch,meta11459,_,fn1,meta11462){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11459 = meta11459;
this._ = _;
this.fn1 = fn1;
this.meta11462 = meta11462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11463,meta11462__$1){
var self__ = this;
var _11463__$1 = this;
return (new cljs.core.async.t_cljs$core$async11461(self__.map_LT_,self__.f,self__.ch,self__.meta11459,self__._,self__.fn1,meta11462__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11463){
var self__ = this;
var _11463__$1 = this;
return self__.meta11462;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11461.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11451_SHARP_){
return f1.call(null,(((p1__11451_SHARP_ == null))?null:self__.f.call(null,p1__11451_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11461.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11459","meta11459",1742712871,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11458","cljs.core.async/t_cljs$core$async11458",2132945310,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11462","meta11462",-1406986008,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11461";

cljs.core.async.t_cljs$core$async11461.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async11461");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11461 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11461(map_LT___$1,f__$1,ch__$1,meta11459__$1,___$2,fn1__$1,meta11462){
return (new cljs.core.async.t_cljs$core$async11461(map_LT___$1,f__$1,ch__$1,meta11459__$1,___$2,fn1__$1,meta11462));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11461(self__.map_LT_,self__.f,self__.ch,self__.meta11459,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6198__auto__ = ret;
if(cljs.core.truth_(and__6198__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6198__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11458.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11459","meta11459",1742712871,null)], null);
});

cljs.core.async.t_cljs$core$async11458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11458";

cljs.core.async.t_cljs$core$async11458.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async11458");
});

cljs.core.async.__GT_t_cljs$core$async11458 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11458(map_LT___$1,f__$1,ch__$1,meta11459){
return (new cljs.core.async.t_cljs$core$async11458(map_LT___$1,f__$1,ch__$1,meta11459));
});

}

return (new cljs.core.async.t_cljs$core$async11458(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11467 = (function (map_GT_,f,ch,meta11468){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11468 = meta11468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11469,meta11468__$1){
var self__ = this;
var _11469__$1 = this;
return (new cljs.core.async.t_cljs$core$async11467(self__.map_GT_,self__.f,self__.ch,meta11468__$1));
});

cljs.core.async.t_cljs$core$async11467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11469){
var self__ = this;
var _11469__$1 = this;
return self__.meta11468;
});

cljs.core.async.t_cljs$core$async11467.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11467.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11467.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11468","meta11468",-447741806,null)], null);
});

cljs.core.async.t_cljs$core$async11467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11467";

cljs.core.async.t_cljs$core$async11467.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async11467");
});

cljs.core.async.__GT_t_cljs$core$async11467 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11467(map_GT___$1,f__$1,ch__$1,meta11468){
return (new cljs.core.async.t_cljs$core$async11467(map_GT___$1,f__$1,ch__$1,meta11468));
});

}

return (new cljs.core.async.t_cljs$core$async11467(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11473 = (function (filter_GT_,p,ch,meta11474){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11474 = meta11474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11475,meta11474__$1){
var self__ = this;
var _11475__$1 = this;
return (new cljs.core.async.t_cljs$core$async11473(self__.filter_GT_,self__.p,self__.ch,meta11474__$1));
});

cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11475){
var self__ = this;
var _11475__$1 = this;
return self__.meta11474;
});

cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11474","meta11474",-298390045,null)], null);
});

cljs.core.async.t_cljs$core$async11473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11473";

cljs.core.async.t_cljs$core$async11473.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async11473");
});

cljs.core.async.__GT_t_cljs$core$async11473 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11473(filter_GT___$1,p__$1,ch__$1,meta11474){
return (new cljs.core.async.t_cljs$core$async11473(filter_GT___$1,p__$1,ch__$1,meta11474));
});

}

return (new cljs.core.async.t_cljs$core$async11473(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args11476 = [];
var len__7279__auto___11520 = arguments.length;
var i__7280__auto___11521 = (0);
while(true){
if((i__7280__auto___11521 < len__7279__auto___11520)){
args11476.push((arguments[i__7280__auto___11521]));

var G__11522 = (i__7280__auto___11521 + (1));
i__7280__auto___11521 = G__11522;
continue;
} else {
}
break;
}

var G__11478 = args11476.length;
switch (G__11478) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11476.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9274__auto___11524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___11524,out){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___11524,out){
return (function (state_11499){
var state_val_11500 = (state_11499[(1)]);
if((state_val_11500 === (7))){
var inst_11495 = (state_11499[(2)]);
var state_11499__$1 = state_11499;
var statearr_11501_11525 = state_11499__$1;
(statearr_11501_11525[(2)] = inst_11495);

(statearr_11501_11525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11500 === (1))){
var state_11499__$1 = state_11499;
var statearr_11502_11526 = state_11499__$1;
(statearr_11502_11526[(2)] = null);

(statearr_11502_11526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11500 === (4))){
var inst_11481 = (state_11499[(7)]);
var inst_11481__$1 = (state_11499[(2)]);
var inst_11482 = (inst_11481__$1 == null);
var state_11499__$1 = (function (){var statearr_11503 = state_11499;
(statearr_11503[(7)] = inst_11481__$1);

return statearr_11503;
})();
if(cljs.core.truth_(inst_11482)){
var statearr_11504_11527 = state_11499__$1;
(statearr_11504_11527[(1)] = (5));

} else {
var statearr_11505_11528 = state_11499__$1;
(statearr_11505_11528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11500 === (6))){
var inst_11481 = (state_11499[(7)]);
var inst_11486 = p.call(null,inst_11481);
var state_11499__$1 = state_11499;
if(cljs.core.truth_(inst_11486)){
var statearr_11506_11529 = state_11499__$1;
(statearr_11506_11529[(1)] = (8));

} else {
var statearr_11507_11530 = state_11499__$1;
(statearr_11507_11530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11500 === (3))){
var inst_11497 = (state_11499[(2)]);
var state_11499__$1 = state_11499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11499__$1,inst_11497);
} else {
if((state_val_11500 === (2))){
var state_11499__$1 = state_11499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11499__$1,(4),ch);
} else {
if((state_val_11500 === (11))){
var inst_11489 = (state_11499[(2)]);
var state_11499__$1 = state_11499;
var statearr_11508_11531 = state_11499__$1;
(statearr_11508_11531[(2)] = inst_11489);

(statearr_11508_11531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11500 === (9))){
var state_11499__$1 = state_11499;
var statearr_11509_11532 = state_11499__$1;
(statearr_11509_11532[(2)] = null);

(statearr_11509_11532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11500 === (5))){
var inst_11484 = cljs.core.async.close_BANG_.call(null,out);
var state_11499__$1 = state_11499;
var statearr_11510_11533 = state_11499__$1;
(statearr_11510_11533[(2)] = inst_11484);

(statearr_11510_11533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11500 === (10))){
var inst_11492 = (state_11499[(2)]);
var state_11499__$1 = (function (){var statearr_11511 = state_11499;
(statearr_11511[(8)] = inst_11492);

return statearr_11511;
})();
var statearr_11512_11534 = state_11499__$1;
(statearr_11512_11534[(2)] = null);

(statearr_11512_11534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11500 === (8))){
var inst_11481 = (state_11499[(7)]);
var state_11499__$1 = state_11499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11499__$1,(11),out,inst_11481);
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
});})(c__9274__auto___11524,out))
;
return ((function (switch__9162__auto__,c__9274__auto___11524,out){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_11516 = [null,null,null,null,null,null,null,null,null];
(statearr_11516[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_11516[(1)] = (1));

return statearr_11516;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_11499){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e11517){if((e11517 instanceof Object)){
var ex__9166__auto__ = e11517;
var statearr_11518_11535 = state_11499;
(statearr_11518_11535[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11536 = state_11499;
state_11499 = G__11536;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_11499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_11499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___11524,out))
})();
var state__9276__auto__ = (function (){var statearr_11519 = f__9275__auto__.call(null);
(statearr_11519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___11524);

return statearr_11519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___11524,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11537 = [];
var len__7279__auto___11540 = arguments.length;
var i__7280__auto___11541 = (0);
while(true){
if((i__7280__auto___11541 < len__7279__auto___11540)){
args11537.push((arguments[i__7280__auto___11541]));

var G__11542 = (i__7280__auto___11541 + (1));
i__7280__auto___11541 = G__11542;
continue;
} else {
}
break;
}

var G__11539 = args11537.length;
switch (G__11539) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11537.length)].join('')));

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
var c__9274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto__){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto__){
return (function (state_11709){
var state_val_11710 = (state_11709[(1)]);
if((state_val_11710 === (7))){
var inst_11705 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
var statearr_11711_11752 = state_11709__$1;
(statearr_11711_11752[(2)] = inst_11705);

(statearr_11711_11752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (20))){
var inst_11675 = (state_11709[(7)]);
var inst_11686 = (state_11709[(2)]);
var inst_11687 = cljs.core.next.call(null,inst_11675);
var inst_11661 = inst_11687;
var inst_11662 = null;
var inst_11663 = (0);
var inst_11664 = (0);
var state_11709__$1 = (function (){var statearr_11712 = state_11709;
(statearr_11712[(8)] = inst_11662);

(statearr_11712[(9)] = inst_11664);

(statearr_11712[(10)] = inst_11663);

(statearr_11712[(11)] = inst_11686);

(statearr_11712[(12)] = inst_11661);

return statearr_11712;
})();
var statearr_11713_11753 = state_11709__$1;
(statearr_11713_11753[(2)] = null);

(statearr_11713_11753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (1))){
var state_11709__$1 = state_11709;
var statearr_11714_11754 = state_11709__$1;
(statearr_11714_11754[(2)] = null);

(statearr_11714_11754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (4))){
var inst_11650 = (state_11709[(13)]);
var inst_11650__$1 = (state_11709[(2)]);
var inst_11651 = (inst_11650__$1 == null);
var state_11709__$1 = (function (){var statearr_11715 = state_11709;
(statearr_11715[(13)] = inst_11650__$1);

return statearr_11715;
})();
if(cljs.core.truth_(inst_11651)){
var statearr_11716_11755 = state_11709__$1;
(statearr_11716_11755[(1)] = (5));

} else {
var statearr_11717_11756 = state_11709__$1;
(statearr_11717_11756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (15))){
var state_11709__$1 = state_11709;
var statearr_11721_11757 = state_11709__$1;
(statearr_11721_11757[(2)] = null);

(statearr_11721_11757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (21))){
var state_11709__$1 = state_11709;
var statearr_11722_11758 = state_11709__$1;
(statearr_11722_11758[(2)] = null);

(statearr_11722_11758[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (13))){
var inst_11662 = (state_11709[(8)]);
var inst_11664 = (state_11709[(9)]);
var inst_11663 = (state_11709[(10)]);
var inst_11661 = (state_11709[(12)]);
var inst_11671 = (state_11709[(2)]);
var inst_11672 = (inst_11664 + (1));
var tmp11718 = inst_11662;
var tmp11719 = inst_11663;
var tmp11720 = inst_11661;
var inst_11661__$1 = tmp11720;
var inst_11662__$1 = tmp11718;
var inst_11663__$1 = tmp11719;
var inst_11664__$1 = inst_11672;
var state_11709__$1 = (function (){var statearr_11723 = state_11709;
(statearr_11723[(8)] = inst_11662__$1);

(statearr_11723[(14)] = inst_11671);

(statearr_11723[(9)] = inst_11664__$1);

(statearr_11723[(10)] = inst_11663__$1);

(statearr_11723[(12)] = inst_11661__$1);

return statearr_11723;
})();
var statearr_11724_11759 = state_11709__$1;
(statearr_11724_11759[(2)] = null);

(statearr_11724_11759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (22))){
var state_11709__$1 = state_11709;
var statearr_11725_11760 = state_11709__$1;
(statearr_11725_11760[(2)] = null);

(statearr_11725_11760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (6))){
var inst_11650 = (state_11709[(13)]);
var inst_11659 = f.call(null,inst_11650);
var inst_11660 = cljs.core.seq.call(null,inst_11659);
var inst_11661 = inst_11660;
var inst_11662 = null;
var inst_11663 = (0);
var inst_11664 = (0);
var state_11709__$1 = (function (){var statearr_11726 = state_11709;
(statearr_11726[(8)] = inst_11662);

(statearr_11726[(9)] = inst_11664);

(statearr_11726[(10)] = inst_11663);

(statearr_11726[(12)] = inst_11661);

return statearr_11726;
})();
var statearr_11727_11761 = state_11709__$1;
(statearr_11727_11761[(2)] = null);

(statearr_11727_11761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (17))){
var inst_11675 = (state_11709[(7)]);
var inst_11679 = cljs.core.chunk_first.call(null,inst_11675);
var inst_11680 = cljs.core.chunk_rest.call(null,inst_11675);
var inst_11681 = cljs.core.count.call(null,inst_11679);
var inst_11661 = inst_11680;
var inst_11662 = inst_11679;
var inst_11663 = inst_11681;
var inst_11664 = (0);
var state_11709__$1 = (function (){var statearr_11728 = state_11709;
(statearr_11728[(8)] = inst_11662);

(statearr_11728[(9)] = inst_11664);

(statearr_11728[(10)] = inst_11663);

(statearr_11728[(12)] = inst_11661);

return statearr_11728;
})();
var statearr_11729_11762 = state_11709__$1;
(statearr_11729_11762[(2)] = null);

(statearr_11729_11762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (3))){
var inst_11707 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11709__$1,inst_11707);
} else {
if((state_val_11710 === (12))){
var inst_11695 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
var statearr_11730_11763 = state_11709__$1;
(statearr_11730_11763[(2)] = inst_11695);

(statearr_11730_11763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (2))){
var state_11709__$1 = state_11709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11709__$1,(4),in$);
} else {
if((state_val_11710 === (23))){
var inst_11703 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
var statearr_11731_11764 = state_11709__$1;
(statearr_11731_11764[(2)] = inst_11703);

(statearr_11731_11764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (19))){
var inst_11690 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
var statearr_11732_11765 = state_11709__$1;
(statearr_11732_11765[(2)] = inst_11690);

(statearr_11732_11765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (11))){
var inst_11675 = (state_11709[(7)]);
var inst_11661 = (state_11709[(12)]);
var inst_11675__$1 = cljs.core.seq.call(null,inst_11661);
var state_11709__$1 = (function (){var statearr_11733 = state_11709;
(statearr_11733[(7)] = inst_11675__$1);

return statearr_11733;
})();
if(inst_11675__$1){
var statearr_11734_11766 = state_11709__$1;
(statearr_11734_11766[(1)] = (14));

} else {
var statearr_11735_11767 = state_11709__$1;
(statearr_11735_11767[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (9))){
var inst_11697 = (state_11709[(2)]);
var inst_11698 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11709__$1 = (function (){var statearr_11736 = state_11709;
(statearr_11736[(15)] = inst_11697);

return statearr_11736;
})();
if(cljs.core.truth_(inst_11698)){
var statearr_11737_11768 = state_11709__$1;
(statearr_11737_11768[(1)] = (21));

} else {
var statearr_11738_11769 = state_11709__$1;
(statearr_11738_11769[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (5))){
var inst_11653 = cljs.core.async.close_BANG_.call(null,out);
var state_11709__$1 = state_11709;
var statearr_11739_11770 = state_11709__$1;
(statearr_11739_11770[(2)] = inst_11653);

(statearr_11739_11770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (14))){
var inst_11675 = (state_11709[(7)]);
var inst_11677 = cljs.core.chunked_seq_QMARK_.call(null,inst_11675);
var state_11709__$1 = state_11709;
if(inst_11677){
var statearr_11740_11771 = state_11709__$1;
(statearr_11740_11771[(1)] = (17));

} else {
var statearr_11741_11772 = state_11709__$1;
(statearr_11741_11772[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (16))){
var inst_11693 = (state_11709[(2)]);
var state_11709__$1 = state_11709;
var statearr_11742_11773 = state_11709__$1;
(statearr_11742_11773[(2)] = inst_11693);

(statearr_11742_11773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11710 === (10))){
var inst_11662 = (state_11709[(8)]);
var inst_11664 = (state_11709[(9)]);
var inst_11669 = cljs.core._nth.call(null,inst_11662,inst_11664);
var state_11709__$1 = state_11709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11709__$1,(13),out,inst_11669);
} else {
if((state_val_11710 === (18))){
var inst_11675 = (state_11709[(7)]);
var inst_11684 = cljs.core.first.call(null,inst_11675);
var state_11709__$1 = state_11709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11709__$1,(20),out,inst_11684);
} else {
if((state_val_11710 === (8))){
var inst_11664 = (state_11709[(9)]);
var inst_11663 = (state_11709[(10)]);
var inst_11666 = (inst_11664 < inst_11663);
var inst_11667 = inst_11666;
var state_11709__$1 = state_11709;
if(cljs.core.truth_(inst_11667)){
var statearr_11743_11774 = state_11709__$1;
(statearr_11743_11774[(1)] = (10));

} else {
var statearr_11744_11775 = state_11709__$1;
(statearr_11744_11775[(1)] = (11));

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
});})(c__9274__auto__))
;
return ((function (switch__9162__auto__,c__9274__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9163__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9163__auto____0 = (function (){
var statearr_11748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11748[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9163__auto__);

(statearr_11748[(1)] = (1));

return statearr_11748;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9163__auto____1 = (function (state_11709){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e11749){if((e11749 instanceof Object)){
var ex__9166__auto__ = e11749;
var statearr_11750_11776 = state_11709;
(statearr_11750_11776[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11777 = state_11709;
state_11709 = G__11777;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9163__auto__ = function(state_11709){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9163__auto____1.call(this,state_11709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9163__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9163__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto__))
})();
var state__9276__auto__ = (function (){var statearr_11751 = f__9275__auto__.call(null);
(statearr_11751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto__);

return statearr_11751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto__))
);

return c__9274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11778 = [];
var len__7279__auto___11781 = arguments.length;
var i__7280__auto___11782 = (0);
while(true){
if((i__7280__auto___11782 < len__7279__auto___11781)){
args11778.push((arguments[i__7280__auto___11782]));

var G__11783 = (i__7280__auto___11782 + (1));
i__7280__auto___11782 = G__11783;
continue;
} else {
}
break;
}

var G__11780 = args11778.length;
switch (G__11780) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11778.length)].join('')));

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
var args11785 = [];
var len__7279__auto___11788 = arguments.length;
var i__7280__auto___11789 = (0);
while(true){
if((i__7280__auto___11789 < len__7279__auto___11788)){
args11785.push((arguments[i__7280__auto___11789]));

var G__11790 = (i__7280__auto___11789 + (1));
i__7280__auto___11789 = G__11790;
continue;
} else {
}
break;
}

var G__11787 = args11785.length;
switch (G__11787) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11785.length)].join('')));

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
var args11792 = [];
var len__7279__auto___11843 = arguments.length;
var i__7280__auto___11844 = (0);
while(true){
if((i__7280__auto___11844 < len__7279__auto___11843)){
args11792.push((arguments[i__7280__auto___11844]));

var G__11845 = (i__7280__auto___11844 + (1));
i__7280__auto___11844 = G__11845;
continue;
} else {
}
break;
}

var G__11794 = args11792.length;
switch (G__11794) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11792.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9274__auto___11847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___11847,out){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___11847,out){
return (function (state_11818){
var state_val_11819 = (state_11818[(1)]);
if((state_val_11819 === (7))){
var inst_11813 = (state_11818[(2)]);
var state_11818__$1 = state_11818;
var statearr_11820_11848 = state_11818__$1;
(statearr_11820_11848[(2)] = inst_11813);

(statearr_11820_11848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11819 === (1))){
var inst_11795 = null;
var state_11818__$1 = (function (){var statearr_11821 = state_11818;
(statearr_11821[(7)] = inst_11795);

return statearr_11821;
})();
var statearr_11822_11849 = state_11818__$1;
(statearr_11822_11849[(2)] = null);

(statearr_11822_11849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11819 === (4))){
var inst_11798 = (state_11818[(8)]);
var inst_11798__$1 = (state_11818[(2)]);
var inst_11799 = (inst_11798__$1 == null);
var inst_11800 = cljs.core.not.call(null,inst_11799);
var state_11818__$1 = (function (){var statearr_11823 = state_11818;
(statearr_11823[(8)] = inst_11798__$1);

return statearr_11823;
})();
if(inst_11800){
var statearr_11824_11850 = state_11818__$1;
(statearr_11824_11850[(1)] = (5));

} else {
var statearr_11825_11851 = state_11818__$1;
(statearr_11825_11851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11819 === (6))){
var state_11818__$1 = state_11818;
var statearr_11826_11852 = state_11818__$1;
(statearr_11826_11852[(2)] = null);

(statearr_11826_11852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11819 === (3))){
var inst_11815 = (state_11818[(2)]);
var inst_11816 = cljs.core.async.close_BANG_.call(null,out);
var state_11818__$1 = (function (){var statearr_11827 = state_11818;
(statearr_11827[(9)] = inst_11815);

return statearr_11827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11818__$1,inst_11816);
} else {
if((state_val_11819 === (2))){
var state_11818__$1 = state_11818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11818__$1,(4),ch);
} else {
if((state_val_11819 === (11))){
var inst_11798 = (state_11818[(8)]);
var inst_11807 = (state_11818[(2)]);
var inst_11795 = inst_11798;
var state_11818__$1 = (function (){var statearr_11828 = state_11818;
(statearr_11828[(7)] = inst_11795);

(statearr_11828[(10)] = inst_11807);

return statearr_11828;
})();
var statearr_11829_11853 = state_11818__$1;
(statearr_11829_11853[(2)] = null);

(statearr_11829_11853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11819 === (9))){
var inst_11798 = (state_11818[(8)]);
var state_11818__$1 = state_11818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11818__$1,(11),out,inst_11798);
} else {
if((state_val_11819 === (5))){
var inst_11795 = (state_11818[(7)]);
var inst_11798 = (state_11818[(8)]);
var inst_11802 = cljs.core._EQ_.call(null,inst_11798,inst_11795);
var state_11818__$1 = state_11818;
if(inst_11802){
var statearr_11831_11854 = state_11818__$1;
(statearr_11831_11854[(1)] = (8));

} else {
var statearr_11832_11855 = state_11818__$1;
(statearr_11832_11855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11819 === (10))){
var inst_11810 = (state_11818[(2)]);
var state_11818__$1 = state_11818;
var statearr_11833_11856 = state_11818__$1;
(statearr_11833_11856[(2)] = inst_11810);

(statearr_11833_11856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11819 === (8))){
var inst_11795 = (state_11818[(7)]);
var tmp11830 = inst_11795;
var inst_11795__$1 = tmp11830;
var state_11818__$1 = (function (){var statearr_11834 = state_11818;
(statearr_11834[(7)] = inst_11795__$1);

return statearr_11834;
})();
var statearr_11835_11857 = state_11818__$1;
(statearr_11835_11857[(2)] = null);

(statearr_11835_11857[(1)] = (2));


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
});})(c__9274__auto___11847,out))
;
return ((function (switch__9162__auto__,c__9274__auto___11847,out){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_11839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11839[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_11839[(1)] = (1));

return statearr_11839;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_11818){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e11840){if((e11840 instanceof Object)){
var ex__9166__auto__ = e11840;
var statearr_11841_11858 = state_11818;
(statearr_11841_11858[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11859 = state_11818;
state_11818 = G__11859;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_11818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_11818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___11847,out))
})();
var state__9276__auto__ = (function (){var statearr_11842 = f__9275__auto__.call(null);
(statearr_11842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___11847);

return statearr_11842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___11847,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11860 = [];
var len__7279__auto___11930 = arguments.length;
var i__7280__auto___11931 = (0);
while(true){
if((i__7280__auto___11931 < len__7279__auto___11930)){
args11860.push((arguments[i__7280__auto___11931]));

var G__11932 = (i__7280__auto___11931 + (1));
i__7280__auto___11931 = G__11932;
continue;
} else {
}
break;
}

var G__11862 = args11860.length;
switch (G__11862) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11860.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9274__auto___11934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___11934,out){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___11934,out){
return (function (state_11900){
var state_val_11901 = (state_11900[(1)]);
if((state_val_11901 === (7))){
var inst_11896 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11902_11935 = state_11900__$1;
(statearr_11902_11935[(2)] = inst_11896);

(statearr_11902_11935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (1))){
var inst_11863 = (new Array(n));
var inst_11864 = inst_11863;
var inst_11865 = (0);
var state_11900__$1 = (function (){var statearr_11903 = state_11900;
(statearr_11903[(7)] = inst_11865);

(statearr_11903[(8)] = inst_11864);

return statearr_11903;
})();
var statearr_11904_11936 = state_11900__$1;
(statearr_11904_11936[(2)] = null);

(statearr_11904_11936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (4))){
var inst_11868 = (state_11900[(9)]);
var inst_11868__$1 = (state_11900[(2)]);
var inst_11869 = (inst_11868__$1 == null);
var inst_11870 = cljs.core.not.call(null,inst_11869);
var state_11900__$1 = (function (){var statearr_11905 = state_11900;
(statearr_11905[(9)] = inst_11868__$1);

return statearr_11905;
})();
if(inst_11870){
var statearr_11906_11937 = state_11900__$1;
(statearr_11906_11937[(1)] = (5));

} else {
var statearr_11907_11938 = state_11900__$1;
(statearr_11907_11938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (15))){
var inst_11890 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11908_11939 = state_11900__$1;
(statearr_11908_11939[(2)] = inst_11890);

(statearr_11908_11939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (13))){
var state_11900__$1 = state_11900;
var statearr_11909_11940 = state_11900__$1;
(statearr_11909_11940[(2)] = null);

(statearr_11909_11940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (6))){
var inst_11865 = (state_11900[(7)]);
var inst_11886 = (inst_11865 > (0));
var state_11900__$1 = state_11900;
if(cljs.core.truth_(inst_11886)){
var statearr_11910_11941 = state_11900__$1;
(statearr_11910_11941[(1)] = (12));

} else {
var statearr_11911_11942 = state_11900__$1;
(statearr_11911_11942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (3))){
var inst_11898 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11900__$1,inst_11898);
} else {
if((state_val_11901 === (12))){
var inst_11864 = (state_11900[(8)]);
var inst_11888 = cljs.core.vec.call(null,inst_11864);
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11900__$1,(15),out,inst_11888);
} else {
if((state_val_11901 === (2))){
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11900__$1,(4),ch);
} else {
if((state_val_11901 === (11))){
var inst_11880 = (state_11900[(2)]);
var inst_11881 = (new Array(n));
var inst_11864 = inst_11881;
var inst_11865 = (0);
var state_11900__$1 = (function (){var statearr_11912 = state_11900;
(statearr_11912[(7)] = inst_11865);

(statearr_11912[(8)] = inst_11864);

(statearr_11912[(10)] = inst_11880);

return statearr_11912;
})();
var statearr_11913_11943 = state_11900__$1;
(statearr_11913_11943[(2)] = null);

(statearr_11913_11943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (9))){
var inst_11864 = (state_11900[(8)]);
var inst_11878 = cljs.core.vec.call(null,inst_11864);
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11900__$1,(11),out,inst_11878);
} else {
if((state_val_11901 === (5))){
var inst_11865 = (state_11900[(7)]);
var inst_11868 = (state_11900[(9)]);
var inst_11864 = (state_11900[(8)]);
var inst_11873 = (state_11900[(11)]);
var inst_11872 = (inst_11864[inst_11865] = inst_11868);
var inst_11873__$1 = (inst_11865 + (1));
var inst_11874 = (inst_11873__$1 < n);
var state_11900__$1 = (function (){var statearr_11914 = state_11900;
(statearr_11914[(12)] = inst_11872);

(statearr_11914[(11)] = inst_11873__$1);

return statearr_11914;
})();
if(cljs.core.truth_(inst_11874)){
var statearr_11915_11944 = state_11900__$1;
(statearr_11915_11944[(1)] = (8));

} else {
var statearr_11916_11945 = state_11900__$1;
(statearr_11916_11945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (14))){
var inst_11893 = (state_11900[(2)]);
var inst_11894 = cljs.core.async.close_BANG_.call(null,out);
var state_11900__$1 = (function (){var statearr_11918 = state_11900;
(statearr_11918[(13)] = inst_11893);

return statearr_11918;
})();
var statearr_11919_11946 = state_11900__$1;
(statearr_11919_11946[(2)] = inst_11894);

(statearr_11919_11946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (10))){
var inst_11884 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11920_11947 = state_11900__$1;
(statearr_11920_11947[(2)] = inst_11884);

(statearr_11920_11947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (8))){
var inst_11864 = (state_11900[(8)]);
var inst_11873 = (state_11900[(11)]);
var tmp11917 = inst_11864;
var inst_11864__$1 = tmp11917;
var inst_11865 = inst_11873;
var state_11900__$1 = (function (){var statearr_11921 = state_11900;
(statearr_11921[(7)] = inst_11865);

(statearr_11921[(8)] = inst_11864__$1);

return statearr_11921;
})();
var statearr_11922_11948 = state_11900__$1;
(statearr_11922_11948[(2)] = null);

(statearr_11922_11948[(1)] = (2));


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
});})(c__9274__auto___11934,out))
;
return ((function (switch__9162__auto__,c__9274__auto___11934,out){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_11926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11926[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_11926[(1)] = (1));

return statearr_11926;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_11900){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e11927){if((e11927 instanceof Object)){
var ex__9166__auto__ = e11927;
var statearr_11928_11949 = state_11900;
(statearr_11928_11949[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11950 = state_11900;
state_11900 = G__11950;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_11900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_11900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___11934,out))
})();
var state__9276__auto__ = (function (){var statearr_11929 = f__9275__auto__.call(null);
(statearr_11929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___11934);

return statearr_11929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___11934,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11951 = [];
var len__7279__auto___12025 = arguments.length;
var i__7280__auto___12026 = (0);
while(true){
if((i__7280__auto___12026 < len__7279__auto___12025)){
args11951.push((arguments[i__7280__auto___12026]));

var G__12027 = (i__7280__auto___12026 + (1));
i__7280__auto___12026 = G__12027;
continue;
} else {
}
break;
}

var G__11953 = args11951.length;
switch (G__11953) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11951.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9274__auto___12029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9274__auto___12029,out){
return (function (){
var f__9275__auto__ = (function (){var switch__9162__auto__ = ((function (c__9274__auto___12029,out){
return (function (state_11995){
var state_val_11996 = (state_11995[(1)]);
if((state_val_11996 === (7))){
var inst_11991 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_11997_12030 = state_11995__$1;
(statearr_11997_12030[(2)] = inst_11991);

(statearr_11997_12030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (1))){
var inst_11954 = [];
var inst_11955 = inst_11954;
var inst_11956 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11995__$1 = (function (){var statearr_11998 = state_11995;
(statearr_11998[(7)] = inst_11955);

(statearr_11998[(8)] = inst_11956);

return statearr_11998;
})();
var statearr_11999_12031 = state_11995__$1;
(statearr_11999_12031[(2)] = null);

(statearr_11999_12031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (4))){
var inst_11959 = (state_11995[(9)]);
var inst_11959__$1 = (state_11995[(2)]);
var inst_11960 = (inst_11959__$1 == null);
var inst_11961 = cljs.core.not.call(null,inst_11960);
var state_11995__$1 = (function (){var statearr_12000 = state_11995;
(statearr_12000[(9)] = inst_11959__$1);

return statearr_12000;
})();
if(inst_11961){
var statearr_12001_12032 = state_11995__$1;
(statearr_12001_12032[(1)] = (5));

} else {
var statearr_12002_12033 = state_11995__$1;
(statearr_12002_12033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (15))){
var inst_11985 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12003_12034 = state_11995__$1;
(statearr_12003_12034[(2)] = inst_11985);

(statearr_12003_12034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (13))){
var state_11995__$1 = state_11995;
var statearr_12004_12035 = state_11995__$1;
(statearr_12004_12035[(2)] = null);

(statearr_12004_12035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (6))){
var inst_11955 = (state_11995[(7)]);
var inst_11980 = inst_11955.length;
var inst_11981 = (inst_11980 > (0));
var state_11995__$1 = state_11995;
if(cljs.core.truth_(inst_11981)){
var statearr_12005_12036 = state_11995__$1;
(statearr_12005_12036[(1)] = (12));

} else {
var statearr_12006_12037 = state_11995__$1;
(statearr_12006_12037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (3))){
var inst_11993 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11995__$1,inst_11993);
} else {
if((state_val_11996 === (12))){
var inst_11955 = (state_11995[(7)]);
var inst_11983 = cljs.core.vec.call(null,inst_11955);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11995__$1,(15),out,inst_11983);
} else {
if((state_val_11996 === (2))){
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11995__$1,(4),ch);
} else {
if((state_val_11996 === (11))){
var inst_11963 = (state_11995[(10)]);
var inst_11959 = (state_11995[(9)]);
var inst_11973 = (state_11995[(2)]);
var inst_11974 = [];
var inst_11975 = inst_11974.push(inst_11959);
var inst_11955 = inst_11974;
var inst_11956 = inst_11963;
var state_11995__$1 = (function (){var statearr_12007 = state_11995;
(statearr_12007[(11)] = inst_11975);

(statearr_12007[(12)] = inst_11973);

(statearr_12007[(7)] = inst_11955);

(statearr_12007[(8)] = inst_11956);

return statearr_12007;
})();
var statearr_12008_12038 = state_11995__$1;
(statearr_12008_12038[(2)] = null);

(statearr_12008_12038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (9))){
var inst_11955 = (state_11995[(7)]);
var inst_11971 = cljs.core.vec.call(null,inst_11955);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11995__$1,(11),out,inst_11971);
} else {
if((state_val_11996 === (5))){
var inst_11963 = (state_11995[(10)]);
var inst_11959 = (state_11995[(9)]);
var inst_11956 = (state_11995[(8)]);
var inst_11963__$1 = f.call(null,inst_11959);
var inst_11964 = cljs.core._EQ_.call(null,inst_11963__$1,inst_11956);
var inst_11965 = cljs.core.keyword_identical_QMARK_.call(null,inst_11956,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11966 = (inst_11964) || (inst_11965);
var state_11995__$1 = (function (){var statearr_12009 = state_11995;
(statearr_12009[(10)] = inst_11963__$1);

return statearr_12009;
})();
if(cljs.core.truth_(inst_11966)){
var statearr_12010_12039 = state_11995__$1;
(statearr_12010_12039[(1)] = (8));

} else {
var statearr_12011_12040 = state_11995__$1;
(statearr_12011_12040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (14))){
var inst_11988 = (state_11995[(2)]);
var inst_11989 = cljs.core.async.close_BANG_.call(null,out);
var state_11995__$1 = (function (){var statearr_12013 = state_11995;
(statearr_12013[(13)] = inst_11988);

return statearr_12013;
})();
var statearr_12014_12041 = state_11995__$1;
(statearr_12014_12041[(2)] = inst_11989);

(statearr_12014_12041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (10))){
var inst_11978 = (state_11995[(2)]);
var state_11995__$1 = state_11995;
var statearr_12015_12042 = state_11995__$1;
(statearr_12015_12042[(2)] = inst_11978);

(statearr_12015_12042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11996 === (8))){
var inst_11963 = (state_11995[(10)]);
var inst_11959 = (state_11995[(9)]);
var inst_11955 = (state_11995[(7)]);
var inst_11968 = inst_11955.push(inst_11959);
var tmp12012 = inst_11955;
var inst_11955__$1 = tmp12012;
var inst_11956 = inst_11963;
var state_11995__$1 = (function (){var statearr_12016 = state_11995;
(statearr_12016[(14)] = inst_11968);

(statearr_12016[(7)] = inst_11955__$1);

(statearr_12016[(8)] = inst_11956);

return statearr_12016;
})();
var statearr_12017_12043 = state_11995__$1;
(statearr_12017_12043[(2)] = null);

(statearr_12017_12043[(1)] = (2));


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
});})(c__9274__auto___12029,out))
;
return ((function (switch__9162__auto__,c__9274__auto___12029,out){
return (function() {
var cljs$core$async$state_machine__9163__auto__ = null;
var cljs$core$async$state_machine__9163__auto____0 = (function (){
var statearr_12021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12021[(0)] = cljs$core$async$state_machine__9163__auto__);

(statearr_12021[(1)] = (1));

return statearr_12021;
});
var cljs$core$async$state_machine__9163__auto____1 = (function (state_11995){
while(true){
var ret_value__9164__auto__ = (function (){try{while(true){
var result__9165__auto__ = switch__9162__auto__.call(null,state_11995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9165__auto__;
}
break;
}
}catch (e12022){if((e12022 instanceof Object)){
var ex__9166__auto__ = e12022;
var statearr_12023_12044 = state_11995;
(statearr_12023_12044[(5)] = ex__9166__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12045 = state_11995;
state_11995 = G__12045;
continue;
} else {
return ret_value__9164__auto__;
}
break;
}
});
cljs$core$async$state_machine__9163__auto__ = function(state_11995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9163__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9163__auto____1.call(this,state_11995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9163__auto____0;
cljs$core$async$state_machine__9163__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9163__auto____1;
return cljs$core$async$state_machine__9163__auto__;
})()
;})(switch__9162__auto__,c__9274__auto___12029,out))
})();
var state__9276__auto__ = (function (){var statearr_12024 = f__9275__auto__.call(null);
(statearr_12024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9274__auto___12029);

return statearr_12024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9276__auto__);
});})(c__9274__auto___12029,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map