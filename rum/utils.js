// Compiled by ClojureScript 1.8.40 {}
goog.provide('rum.utils');
goog.require('cljs.core');
var last_id_7830 = cljs.core.volatile_BANG_.call(null,(0));
rum.utils.next_id = ((function (last_id_7830){
return (function rum$utils$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_7830,(cljs.core._deref.call(null,last_id_7830) + (1)));
});})(last_id_7830))
;
rum.utils.collect = (function rum$utils$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.utils.call_all = (function rum$utils$call_all(var_args){
var args__7286__auto__ = [];
var len__7279__auto___7834 = arguments.length;
var i__7280__auto___7835 = (0);
while(true){
if((i__7280__auto___7835 < len__7279__auto___7834)){
args__7286__auto__.push((arguments[i__7280__auto___7835]));

var G__7836 = (i__7280__auto___7835 + (1));
i__7280__auto___7835 = G__7836;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.utils.call_all.cljs$lang$maxFixedArity = (2);

rum.utils.call_all.cljs$lang$applyTo = (function (seq7831){
var G__7832 = cljs.core.first.call(null,seq7831);
var seq7831__$1 = cljs.core.next.call(null,seq7831);
var G__7833 = cljs.core.first.call(null,seq7831__$1);
var seq7831__$2 = cljs.core.next.call(null,seq7831__$1);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic(G__7832,G__7833,seq7831__$2);
});

//# sourceMappingURL=utils.js.map