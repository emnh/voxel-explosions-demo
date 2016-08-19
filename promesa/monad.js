// Compiled by ClojureScript 1.8.40 {}
goog.provide('promesa.monad');
goog.require('cljs.core');
goog.require('cats.core');
goog.require('cats.context');
goog.require('cats.protocols');
goog.require('promesa.core');
promesa.core.Promise.prototype.cats$protocols$Contextual$ = true;

promesa.core.Promise.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return promesa.monad.promise_context;
});

promesa.core.Promise.prototype.cats$protocols$Extract$ = true;

promesa.core.Promise.prototype.cats$protocols$Extract$_extract$arity$1 = (function (it){
var it__$1 = this;
return promesa.core._extract.call(null,it__$1);
});
promesa.monad.promise_context = (function (){
if(typeof promesa.monad.t_promesa$monad23738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Bifunctor}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
*/
promesa.monad.t_promesa$monad23738 = (function (meta23739){
this.meta23739 = meta23739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
promesa.monad.t_promesa$monad23738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23740,meta23739__$1){
var self__ = this;
var _23740__$1 = this;
return (new promesa.monad.t_promesa$monad23738(meta23739__$1));
});

promesa.monad.t_promesa$monad23738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23740){
var self__ = this;
var _23740__$1 = this;
return self__.meta23739;
});

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Context$ = true;

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Context$_get_level$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.context._PLUS_level_default_PLUS_;
});

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Functor$ = true;

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (mn,f,mv){
var self__ = this;
var mn__$1 = this;
return promesa.core._map.call(null,mv,f);
});

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Bifunctor$ = true;

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Bifunctor$_bimap$arity$4 = (function (_,err,succ,mv){
var self__ = this;
var ___$1 = this;
return promesa.core._catch.call(null,promesa.core._map.call(null,mv,succ),err);
});

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Monad$ = true;

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core._promise.call(null,v);
});

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (mn,mv,f){
var self__ = this;
var mn__$1 = this;
return promesa.core._bind.call(null,mv,f);
});

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Applicative$ = true;

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core._promise.call(null,v);
});

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,pf,pv){
var self__ = this;
var ___$1 = this;
return promesa.core._map.call(null,promesa.core.all.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pf,pv], null)),((function (___$1){
return (function (p__23741){
var vec__23742 = p__23741;
var f = cljs.core.nth.call(null,vec__23742,(0),null);
var v = cljs.core.nth.call(null,vec__23742,(1),null);
return f.call(null,v);
});})(___$1))
);
});

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Semigroup$ = true;

promesa.monad.t_promesa$monad23738.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return promesa.core._map.call(null,cats.core.sequence.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mv,mv_SINGLEQUOTE_], null)),((function (___$1){
return (function (p__23743){
var vec__23744 = p__23743;
var mvv = cljs.core.nth.call(null,vec__23744,(0),null);
var mvv_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__23744,(1),null);
var ctx = cats.protocols._get_context.call(null,mvv);
return cats.protocols._mappend.call(null,ctx,mvv,mvv_SINGLEQUOTE_);
});})(___$1))
);
});

promesa.monad.t_promesa$monad23738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23739","meta23739",-1000488298,null)], null);
});

promesa.monad.t_promesa$monad23738.cljs$lang$type = true;

promesa.monad.t_promesa$monad23738.cljs$lang$ctorStr = "promesa.monad/t_promesa$monad23738";

promesa.monad.t_promesa$monad23738.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"promesa.monad/t_promesa$monad23738");
});

promesa.monad.__GT_t_promesa$monad23738 = (function promesa$monad$__GT_t_promesa$monad23738(meta23739){
return (new promesa.monad.t_promesa$monad23738(meta23739));
});

}

return (new promesa.monad.t_promesa$monad23738(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=monad.js.map