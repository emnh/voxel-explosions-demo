// Compiled by ClojureScript 1.8.40 {}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('org.bluebird');
promesa.core.Promise = Promise.noConflict();
promesa.core.Promise.config({"cancellation": true, "warnings": false});

/**
 * A cancellation abstraction.
 * @interface
 */
promesa.core.ICancellable = function(){};

promesa.core._cancel = (function promesa$core$_cancel(_){
if((!((_ == null))) && (!((_.promesa$core$ICancellable$_cancel$arity$1 == null)))){
return _.promesa$core$ICancellable$_cancel$arity$1(_);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._cancel[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (promesa.core._cancel["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancel",_);
}
}
}
});

promesa.core._cancelled_QMARK_ = (function promesa$core$_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.promesa$core$ICancellable$_cancelled_QMARK_$arity$1 == null)))){
return _.promesa$core$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._cancelled_QMARK_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (promesa.core._cancelled_QMARK_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancelled?",_);
}
}
}
});


/**
 * @interface
 */
promesa.core.IScheduler = function(){};

promesa.core._schedule = (function promesa$core$_schedule(_,ms,func){
if((!((_ == null))) && (!((_.promesa$core$IScheduler$_schedule$arity$3 == null)))){
return _.promesa$core$IScheduler$_schedule$arity$3(_,ms,func);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._schedule[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_,ms,func);
} else {
var m__6874__auto____$1 = (promesa.core._schedule["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_,ms,func);
} else {
throw cljs.core.missing_protocol.call(null,"IScheduler.-schedule",_);
}
}
}
});

promesa.core.scheduled_task = (function promesa$core$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_.call(null,false);
if(typeof promesa.core.t_promesa$core7842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {promesa.core.ICancellable}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.core.t_promesa$core7842 = (function (scheduled_task,cur,done_QMARK_,cancelled,meta7843){
this.scheduled_task = scheduled_task;
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta7843 = meta7843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
promesa.core.t_promesa$core7842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_7844,meta7843__$1){
var self__ = this;
var _7844__$1 = this;
return (new promesa.core.t_promesa$core7842(self__.scheduled_task,self__.cur,self__.done_QMARK_,self__.cancelled,meta7843__$1));
});})(cancelled))
;

promesa.core.t_promesa$core7842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_7844){
var self__ = this;
var _7844__$1 = this;
return self__.meta7843;
});})(cancelled))
;

promesa.core.t_promesa$core7842.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.done_QMARK_);
});})(cancelled))
;

promesa.core.t_promesa$core7842.prototype.promesa$core$ICancellable$ = true;

promesa.core.t_promesa$core7842.prototype.promesa$core$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.cancelled);
});})(cancelled))
;

promesa.core.t_promesa$core7842.prototype.promesa$core$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_.call(null,self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.core.t_promesa$core7842.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled-task","scheduled-task",-1546752425,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null)], null)))], null)),new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta7843","meta7843",-103183353,null)], null);
});})(cancelled))
;

promesa.core.t_promesa$core7842.cljs$lang$type = true;

promesa.core.t_promesa$core7842.cljs$lang$ctorStr = "promesa.core/t_promesa$core7842";

promesa.core.t_promesa$core7842.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"promesa.core/t_promesa$core7842");
});})(cancelled))
;

promesa.core.__GT_t_promesa$core7842 = ((function (cancelled){
return (function promesa$core$scheduled_task_$___GT_t_promesa$core7842(scheduled_task__$1,cur__$1,done_QMARK___$1,cancelled__$1,meta7843){
return (new promesa.core.t_promesa$core7842(scheduled_task__$1,cur__$1,done_QMARK___$1,cancelled__$1,meta7843));
});})(cancelled))
;

}

return (new promesa.core.t_promesa$core7842(promesa$core$scheduled_task,cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.core.scheduler = (function promesa$core$scheduler(){
if(typeof promesa.core.t_promesa$core7848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {promesa.core.IScheduler}
 * @implements {cljs.core.IWithMeta}
*/
promesa.core.t_promesa$core7848 = (function (scheduler,meta7849){
this.scheduler = scheduler;
this.meta7849 = meta7849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
promesa.core.t_promesa$core7848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7850,meta7849__$1){
var self__ = this;
var _7850__$1 = this;
return (new promesa.core.t_promesa$core7848(self__.scheduler,meta7849__$1));
});

promesa.core.t_promesa$core7848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7850){
var self__ = this;
var _7850__$1 = this;
return self__.meta7849;
});

promesa.core.t_promesa$core7848.prototype.promesa$core$IScheduler$ = true;

promesa.core.t_promesa$core7848.prototype.promesa$core$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_.call(null,false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return func.call(null);
}finally {cljs.core.vreset_BANG_.call(null,done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.core.scheduled_task.call(null,cur,done_QMARK_);
});

promesa.core.t_promesa$core7848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta7849","meta7849",1929789599,null)], null);
});

promesa.core.t_promesa$core7848.cljs$lang$type = true;

promesa.core.t_promesa$core7848.cljs$lang$ctorStr = "promesa.core/t_promesa$core7848";

promesa.core.t_promesa$core7848.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"promesa.core/t_promesa$core7848");
});

promesa.core.__GT_t_promesa$core7848 = (function promesa$core$scheduler_$___GT_t_promesa$core7848(scheduler__$1,meta7849){
return (new promesa.core.t_promesa$core7848(scheduler__$1,meta7849));
});

}

return (new promesa.core.t_promesa$core7848(promesa$core$scheduler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default scheduler instance.
 */
promesa.core._PLUS_scheduler_PLUS_ = promesa.core.scheduler.call(null);
/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.core.schedule = (function promesa$core$schedule(ms,func){
return promesa.core._schedule.call(null,promesa.core._PLUS_scheduler_PLUS_,ms,func);
});

/**
 * A basic future abstraction.
 * @interface
 */
promesa.core.IPromise = function(){};

/**
 * Chain a promise.
 */
promesa.core._map = (function promesa$core$_map(_,callback){
if((!((_ == null))) && (!((_.promesa$core$IPromise$_map$arity$2 == null)))){
return _.promesa$core$IPromise$_map$arity$2(_,callback);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._map[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_,callback);
} else {
var m__6874__auto____$1 = (promesa.core._map["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-map",_);
}
}
}
});

/**
 * Chain a promise.
 */
promesa.core._bind = (function promesa$core$_bind(_,callback){
if((!((_ == null))) && (!((_.promesa$core$IPromise$_bind$arity$2 == null)))){
return _.promesa$core$IPromise$_bind$arity$2(_,callback);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._bind[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_,callback);
} else {
var m__6874__auto____$1 = (promesa.core._bind["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-bind",_);
}
}
}
});

/**
 * Catch a error in a promise.
 */
promesa.core._catch = (function promesa$core$_catch(_,callback){
if((!((_ == null))) && (!((_.promesa$core$IPromise$_catch$arity$2 == null)))){
return _.promesa$core$IPromise$_catch$arity$2(_,callback);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._catch[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_,callback);
} else {
var m__6874__auto____$1 = (promesa.core._catch["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-catch",_);
}
}
}
});


/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.core.IState = function(){};

/**
 * Extract the current value.
 */
promesa.core._extract = (function promesa$core$_extract(_){
if((!((_ == null))) && (!((_.promesa$core$IState$_extract$arity$1 == null)))){
return _.promesa$core$IState$_extract$arity$1(_);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._extract[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (promesa.core._extract["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-extract",_);
}
}
}
});

/**
 * Returns true if a promise is resolved.
 */
promesa.core._resolved_QMARK_ = (function promesa$core$_resolved_QMARK_(_){
if((!((_ == null))) && (!((_.promesa$core$IState$_resolved_QMARK_$arity$1 == null)))){
return _.promesa$core$IState$_resolved_QMARK_$arity$1(_);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._resolved_QMARK_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (promesa.core._resolved_QMARK_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-resolved?",_);
}
}
}
});

/**
 * Returns true if a promise is rejected.
 */
promesa.core._rejected_QMARK_ = (function promesa$core$_rejected_QMARK_(_){
if((!((_ == null))) && (!((_.promesa$core$IState$_rejected_QMARK_$arity$1 == null)))){
return _.promesa$core$IState$_rejected_QMARK_$arity$1(_);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._rejected_QMARK_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (promesa.core._rejected_QMARK_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-rejected?",_);
}
}
}
});

/**
 * Retutns true if a promise is pending.
 */
promesa.core._pending_QMARK_ = (function promesa$core$_pending_QMARK_(_){
if((!((_ == null))) && (!((_.promesa$core$IState$_pending_QMARK_$arity$1 == null)))){
return _.promesa$core$IState$_pending_QMARK_$arity$1(_);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._pending_QMARK_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (promesa.core._pending_QMARK_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-pending?",_);
}
}
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.core.IPromiseFactory = function(){};

/**
 * Create a promise instance.
 */
promesa.core._promise = (function promesa$core$_promise(_){
if((!((_ == null))) && (!((_.promesa$core$IPromiseFactory$_promise$arity$1 == null)))){
return _.promesa$core$IPromiseFactory$_promise$arity$1(_);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (promesa.core._promise[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (promesa.core._promise["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IPromiseFactory.-promise",_);
}
}
}
});

promesa.core.Promise.prototype.promesa$core$ICancellable$ = true;

promesa.core.Promise.prototype.promesa$core$ICancellable$_cancel$arity$1 = (function (it){
var it__$1 = this;
return it__$1.cancel();
});

promesa.core.Promise.prototype.promesa$core$ICancellable$_cancelled_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isCancelled();
});

promesa.core.Promise.prototype.promesa$core$IPromise$ = true;

promesa.core.Promise.prototype.promesa$core$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__7851_SHARP_){
return cb.call(null,p1__7851_SHARP_);
});})(it__$1))
);
});

promesa.core.Promise.prototype.promesa$core$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__7852_SHARP_){
return cb.call(null,p1__7852_SHARP_);
});})(it__$1))
);
});

promesa.core.Promise.prototype.promesa$core$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(((function (it__$1){
return (function (p1__7853_SHARP_){
return cb.call(null,p1__7853_SHARP_);
});})(it__$1))
);
});

promesa.core.Promise.prototype.promesa$core$IState$ = true;

promesa.core.Promise.prototype.promesa$core$IState$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.reason();
} else {
return it__$1.value();
}
});

promesa.core.Promise.prototype.promesa$core$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

promesa.core.Promise.prototype.promesa$core$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

promesa.core.Promise.prototype.promesa$core$IState$_pending_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isPending();
});
(promesa.core.IPromiseFactory["function"] = true);

(promesa.core._promise["function"] = (function (func){
return (new promesa.core.Promise(func));
}));

promesa.core.Promise.prototype.promesa$core$IPromiseFactory$ = true;

promesa.core.Promise.prototype.promesa$core$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

Error.prototype.promesa$core$IPromiseFactory$ = true;

Error.prototype.promesa$core$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.core.Promise.reject(e__$1);
});

(promesa.core.IPromiseFactory["object"] = true);

(promesa.core._promise["object"] = (function (v){
return promesa.core.Promise.resolve(v);
}));

(promesa.core.IPromiseFactory["number"] = true);

(promesa.core._promise["number"] = (function (v){
return promesa.core.Promise.resolve(v);
}));

(promesa.core.IPromiseFactory["boolean"] = true);

(promesa.core._promise["boolean"] = (function (v){
return promesa.core.Promise.resolve(v);
}));

(promesa.core.IPromiseFactory["string"] = true);

(promesa.core._promise["string"] = (function (v){
return promesa.core.Promise.resolve(v);
}));

(promesa.core.IPromiseFactory["null"] = true);

(promesa.core._promise["null"] = (function (v){
return promesa.core.Promise.resolve(v);
}));
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.core.Promise.resolve(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.core.Promise.reject(v);
});
/**
 * The promise constructor.
 */
promesa.core.promise = (function promesa$core$promise(v){
return promesa.core._promise.call(null,v);
});
/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
return (v instanceof promesa.core.Promise);
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.core._resolved_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.core._rejected_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return promesa.core._pending_QMARK_.call(null,p);
});
/**
 * Returns the current promise value.
 */
promesa.core.extract = (function promesa$core$extract(p){
return promesa.core._extract.call(null,p);
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = (function promesa$core$done_QMARK_(p){
return cljs.core.not.call(null,promesa.core._pending_QMARK_.call(null,p));
});
/**
 * Apply a function to the promise value and
 *   return a new promise with the result.
 */
promesa.core.map = (function promesa$core$map(f,p){
return promesa.core._map.call(null,p,f);
});
/**
 * Same as `map` but removes one level of
 *   promise neesting. Useful when the map function
 *   returns a promise instead of value.
 * 
 *   In JS environment this function is analogous
 *   to `map` because the promise abstraction overloads
 *   the `map` operator.
 */
promesa.core.mapcat = (function promesa$core$mapcat(f,p){
return promesa.core._bind.call(null,p,f);
});
/**
 * Same as `map` but with parameters inverted
 *   for convenience and for familiarity with
 *   javascript's promises `.then` operator.
 */
promesa.core.then = (function promesa$core$then(p,f){
return promesa.core._map.call(null,p,f);
});
/**
 * A chain helper for promises.
 */
promesa.core.bind = (function promesa$core$bind(p,callback){
return promesa.core._bind.call(null,p,callback);
});
/**
 * Like then but accepts multiple parameters.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var args__7286__auto__ = [];
var len__7279__auto___7860 = arguments.length;
var i__7280__auto___7861 = (0);
while(true){
if((i__7280__auto___7861 < len__7279__auto___7860)){
args__7286__auto__.push((arguments[i__7280__auto___7861]));

var G__7862 = (i__7280__auto___7861 + (1));
i__7280__auto___7861 = G__7862;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,funcs){
return cljs.core.reduce.call(null,(function (p1__7856_SHARP_,p2__7857_SHARP_){
return promesa.core.then.call(null,p1__7856_SHARP_,p2__7857_SHARP_);
}),p,funcs);
});

promesa.core.chain.cljs$lang$maxFixedArity = (1);

promesa.core.chain.cljs$lang$applyTo = (function (seq7858){
var G__7859 = cljs.core.first.call(null,seq7858);
var seq7858__$1 = cljs.core.next.call(null,seq7858);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(G__7859,seq7858__$1);
});
promesa.core.branch = (function promesa$core$branch(p,success,failure){
return promesa.core._catch.call(null,promesa.core._map.call(null,p,success),failure);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var args7863 = [];
var len__7279__auto___7866 = arguments.length;
var i__7280__auto___7867 = (0);
while(true){
if((i__7280__auto___7867 < len__7279__auto___7866)){
args7863.push((arguments[i__7280__auto___7867]));

var G__7868 = (i__7280__auto___7867 + (1));
i__7280__auto___7867 = G__7868;
continue;
} else {
}
break;
}

var G__7865 = args7863.length;
switch (G__7865) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7863.length)].join('')));

}
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core._catch.call(null,p,f);
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,type,f){
return promesa.core._catch.call(null,p,(function (e){
if((e instanceof type)){
return f.call(null,e);
} else {
throw e;
}
}));
});

promesa.core.catch$.cljs$lang$maxFixedArity = 3;
/**
 * Same as `catch` but with parameters inverted.
 */
promesa.core.error = (function promesa$core$error(var_args){
var args7870 = [];
var len__7279__auto___7873 = arguments.length;
var i__7280__auto___7874 = (0);
while(true){
if((i__7280__auto___7874 < len__7279__auto___7873)){
args7870.push((arguments[i__7280__auto___7874]));

var G__7875 = (i__7280__auto___7874 + (1));
i__7280__auto___7874 = G__7875;
continue;
} else {
}
break;
}

var G__7872 = args7870.length;
switch (G__7872) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7870.length)].join('')));

}
});

promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.call(null,p,f);
});

promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core.catch$.call(null,p,type,f);
});

promesa.core.error.cljs$lang$maxFixedArity = 3;
/**
 * A short alias for `error` function.
 */
promesa.core.err = promesa.core.error;
/**
 * Attach handler to promise that will be
 *   executed independently if promise is
 *   resolved or rejected.
 */
promesa.core.finally$ = (function promesa$core$finally(p,callback){
return p.finally(callback);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.core.then.call(null,promesa.core.Promise.all(cljs.core.clj__GT_js.call(null,promises)),(function (p1__7877_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__7877_SHARP_);
}));
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled when first one item in the
 *   array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(promises){
return promesa.core.Promise.any(cljs.core.clj__GT_js.call(null,promises));
});
/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.core._cancel.call(null,p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.core._cancelled_QMARK_.call(null,v);
});
/**
 * Given a nodejs like function that accepts a callback
 *   as the last argument and return an other function
 *   that returns a promise.
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__7880__delegate = function (args){
return promesa.core.promise.call(null,(function (resolve,reject){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
try{return cljs.core.apply.call(null,callable,args__$1);
}catch (e7879){if((e7879 instanceof Error)){
var e = e7879;
return reject.call(null,e);
} else {
throw e7879;

}
}}));
};
var G__7880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7881__i = 0, G__7881__a = new Array(arguments.length -  0);
while (G__7881__i < G__7881__a.length) {G__7881__a[G__7881__i] = arguments[G__7881__i + 0]; ++G__7881__i;}
  args = new cljs.core.IndexedSeq(G__7881__a,0);
} 
return G__7880__delegate.call(this,args);};
G__7880.cljs$lang$maxFixedArity = 0;
G__7880.cljs$lang$applyTo = (function (arglist__7882){
var args = cljs.core.seq(arglist__7882);
return G__7880__delegate(args);
});
G__7880.cljs$core$IFn$_invoke$arity$variadic = G__7880__delegate;
return G__7880;
})()
;
});
/**
 * Returns a cancellable promise that will be fulfilled
 *   with this promise's fulfillment value or rejection reason.
 *   However, if this promise is not fulfilled or rejected
 *   within `ms` milliseconds, the returned promise is cancelled
 *   with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var args7883 = [];
var len__7279__auto___7886 = arguments.length;
var i__7280__auto___7887 = (0);
while(true){
if((i__7280__auto___7887 < len__7279__auto___7886)){
args7883.push((arguments[i__7280__auto___7887]));

var G__7888 = (i__7280__auto___7887 + (1));
i__7280__auto___7887 = G__7888;
continue;
} else {
}
break;
}

var G__7885 = args7883.length;
switch (G__7885) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7883.length)].join('')));

}
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return p.timeout(t);
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return p.timeout(t,v);
});

promesa.core.timeout.cljs$lang$maxFixedArity = 3;
/**
 * Given a timeout in miliseconds and optional
 *   value, returns a promise that will fulfilled
 *   with provided value (or nil) after the
 *   time is reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var args7890 = [];
var len__7279__auto___7893 = arguments.length;
var i__7280__auto___7894 = (0);
while(true){
if((i__7280__auto___7894 < len__7279__auto___7893)){
args7890.push((arguments[i__7280__auto___7894]));

var G__7895 = (i__7280__auto___7894 + (1));
i__7280__auto___7894 = G__7895;
continue;
} else {
}
break;
}

var G__7892 = args7890.length;
switch (G__7892) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7890.length)].join('')));

}
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.call(null,t,null);
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.Promise.delay(t).then(cljs.core.constantly.call(null,v));
});

promesa.core.delay.cljs$lang$maxFixedArity = 2;
promesa.core.await = (function promesa$core$await(var_args){
var args__7286__auto__ = [];
var len__7279__auto___7898 = arguments.length;
var i__7280__auto___7899 = (0);
while(true){
if((i__7280__auto___7899 < len__7279__auto___7898)){
args__7286__auto__.push((arguments[i__7280__auto___7899]));

var G__7900 = (i__7280__auto___7899 + (1));
i__7280__auto___7899 = G__7900;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return promesa.core.await.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

promesa.core.await.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.call(null,"Should be only used in alet macro.",cljs.core.PersistentArrayMap.EMPTY);
});

promesa.core.await.cljs$lang$maxFixedArity = (0);

promesa.core.await.cljs$lang$applyTo = (function (seq7897){
return promesa.core.await.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7897));
});
promesa.core.promise__GT_str = (function promesa$core$promise__GT_str(p){
return [cljs.core.str("#<Promise["),cljs.core.str((cljs.core.truth_(promesa.core.pending_QMARK_.call(null,p))?"~":(cljs.core.truth_(promesa.core.rejected_QMARK_.call(null,p))?[cljs.core.str("error="),cljs.core.str(promesa.core.extract.call(null,p))].join(''):[cljs.core.str("value="),cljs.core.str(promesa.core.extract.call(null,p))].join('')
))),cljs.core.str("]>")].join('');
});
promesa.core.Promise.prototype.cljs$core$IPrintWithWriter$ = true;

promesa.core.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write.call(null,writer,promesa.core.promise__GT_str.call(null,p__$1));
});

//# sourceMappingURL=core.js.map