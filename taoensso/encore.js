// Compiled by ClojureScript 1.8.40 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(50),(0)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__19328 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__19328,(0),null);
var yc = cljs.core.nth.call(null,vec__19328,(1),null);
var zc = cljs.core.nth.call(null,vec__19328,(2),null);
var vec__19329 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__19329,(0),null);
var ym = cljs.core.nth.call(null,vec__19329,(1),null);
var zm = cljs.core.nth.call(null,vec__19329,(2),null);
var vec__19330 = cljs.core.mapv.call(null,((function (vec__19328,xc,yc,zc,vec__19329,xm,ym,zm){
return (function (p1__19324_SHARP_){
var or__6210__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__19324_SHARP_);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
});})(vec__19328,xc,yc,zc,vec__19329,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__19330,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__19330,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__19330,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Insufficient `com.taoensso/encore` version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Given a name symbol and sigs, returns [<name-with-attrs-meta> <args>]
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args19331 = [];
var len__7279__auto___19336 = arguments.length;
var i__7280__auto___19337 = (0);
while(true){
if((i__7280__auto___19337 < len__7279__auto___19336)){
args19331.push((arguments[i__7280__auto___19337]));

var G__19338 = (i__7280__auto___19337 + (1));
i__7280__auto___19337 = G__19338;
continue;
} else {
}
break;
}

var G__19333 = args19331.length;
switch (G__19333) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19331.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,sigs){
return taoensso.encore.name_with_attrs.call(null,sym,null,sigs);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,attrs_merge,sigs){
var vec__19334 = ((typeof cljs.core.first.call(null,sigs) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__19334,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__19334,(1),null);
var vec__19335 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs__$1),cljs.core.next.call(null,sigs__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,sigs__$1], null));
var attrs = cljs.core.nth.call(null,vec__19335,(0),null);
var sigs__$2 = cljs.core.nth.call(null,vec__19335,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),sigs__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

/**
 * Experimental. Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a bit of a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args19340 = [];
var len__7279__auto___19343 = arguments.length;
var i__7280__auto___19344 = (0);
while(true){
if((i__7280__auto___19344 < len__7279__auto___19343)){
args19340.push((arguments[i__7280__auto___19344]));

var G__19345 = (i__7280__auto___19344 + (1));
i__7280__auto___19344 = G__19345;
continue;
} else {
}
break;
}

var G__19342 = args19340.length;
switch (G__19342) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19340.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(!(typeof s === 'string')){
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
} else {
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?readers:taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)));
var default$__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?default$:cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], null));
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args19347 = [];
var len__7279__auto___19352 = arguments.length;
var i__7280__auto___19353 = (0);
while(true){
if((i__7280__auto___19353 < len__7279__auto___19352)){
args19347.push((arguments[i__7280__auto___19353]));

var G__19354 = (i__7280__auto___19353 + (1));
i__7280__auto___19353 = G__19354;
continue;
} else {
}
break;
}

var G__19349 = args19347.length;
switch (G__19349) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19347.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_19350 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_19351 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_19351;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_19350;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(coll){
if(!((coll == null))){
if(((coll.cljs$lang$protocol_mask$partition1$ & (4))) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.pint_QMARK_ = (function taoensso$encore$pint_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.uint_QMARK_ = (function taoensso$encore$uint_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2)));
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3)));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__6198__auto__ = typeof x === 'number';
if(and__6198__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__6198__auto__;
}
});
taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
/**
 * Like `force` for refs
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(cljs.core.truth_(taoensso.encore.derefable_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
/**
 * May not be available with Node.js, etc.
 */
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__6210__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,cljs.core.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args19366 = [];
var len__7279__auto___19372 = arguments.length;
var i__7280__auto___19373 = (0);
while(true){
if((i__7280__auto___19373 < len__7279__auto___19372)){
args19366.push((arguments[i__7280__auto___19373]));

var G__19374 = (i__7280__auto___19373 + (1));
i__7280__auto___19373 = G__19374;
continue;
} else {
}
break;
}

var G__19371 = args19366.length;
switch (G__19371) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19366.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7298__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__6198__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__6198__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__6198__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__6198__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq19367){
var G__19368 = cljs.core.first.call(null,seq19367);
var seq19367__$1 = cljs.core.next.call(null,seq19367);
var G__19369 = cljs.core.first.call(null,seq19367__$1);
var seq19367__$2 = cljs.core.next.call(null,seq19367__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19368,G__19369,seq19367__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_uint = (function taoensso$encore$as__QMARK_uint(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pint = (function taoensso$encore$as__QMARK_pint(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_ufloat = (function taoensso$encore$as__QMARK_ufloat(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pfloat = (function taoensso$encore$as__QMARK_pfloat(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4657__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4657__auto__)){
var email = temp__4657__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e19377){if((e19377 instanceof Error)){
var _ = e19377;
return false;
} else {
throw e19377;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args19378 = [];
var len__7279__auto___19381 = arguments.length;
var i__7280__auto___19382 = (0);
while(true){
if((i__7280__auto___19382 < len__7279__auto___19381)){
args19378.push((arguments[i__7280__auto___19382]));

var G__19383 = (i__7280__auto___19382 + (1));
i__7280__auto___19382 = G__19383;
continue;
} else {
}
break;
}

var G__19380 = args19378.length;
switch (G__19380) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19378.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;
taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("`as-"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str("` failed against: `"),cljs.core.str(cljs.core.pr_str.call(null,x)),cljs.core.str("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if(!((_QMARK_b == null))){
return _QMARK_b;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_uint = (function taoensso$encore$as_uint(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_uint.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"uint","uint",521409576),x);
}
});
taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_uint.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});
taoensso.encore.as_pint = (function taoensso$encore$as_pint(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_pint.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pint","pint",-846758217),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_ufloat = (function taoensso$encore$as_ufloat(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_ufloat.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"ufloat","ufloat",-1822725041),x);
}
});
taoensso.encore.as_pfloat = (function taoensso$encore$as_pfloat(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_pfloat.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pfloat","pfloat",558619461),x);
}
});
taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__6210__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19389 = arguments.length;
var i__7280__auto___19390 = (0);
while(true){
if((i__7280__auto___19390 < len__7279__auto___19389)){
args__7286__auto__.push((arguments[i__7280__auto___19390]));

var G__19391 = (i__7280__auto___19390 + (1));
i__7280__auto___19390 = G__19391;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__19387){
var vec__19388 = p__19387;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__19388,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__19388,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__19388,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq19385){
var G__19386 = cljs.core.first.call(null,seq19385);
var seq19385__$1 = cljs.core.next.call(null,seq19385);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__19386,seq19385__$1);
});
taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args19392 = [];
var len__7279__auto___19395 = arguments.length;
var i__7280__auto___19396 = (0);
while(true){
if((i__7280__auto___19396 < len__7279__auto___19395)){
args19392.push((arguments[i__7280__auto___19396]));

var G__19397 = (i__7280__auto___19396 + (1));
i__7280__auto___19396 = G__19397;
continue;
} else {
}
break;
}

var G__19394 = args19392.length;
switch (G__19394) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19392.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ_.call(null,x,y,0.001);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args19399 = [];
var len__7279__auto___19403 = arguments.length;
var i__7280__auto___19404 = (0);
while(true){
if((i__7280__auto___19404 < len__7279__auto___19403)){
args19399.push((arguments[i__7280__auto___19404]));

var G__19405 = (i__7280__auto___19404 + (1));
i__7280__auto___19404 = G__19405;
continue;
} else {
}
break;
}

var G__19401 = args19399.length;
switch (G__19401) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19399.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__19402 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19402) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19414 = arguments.length;
var i__7280__auto___19415 = (0);
while(true){
if((i__7280__auto___19415 < len__7279__auto___19414)){
args__7286__auto__.push((arguments[i__7280__auto___19415]));

var G__19416 = (i__7280__auto___19415 + (1));
i__7280__auto___19415 = G__19416;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__19410){
var vec__19411 = p__19410;
var map__19412 = cljs.core.nth.call(null,vec__19411,(0),null);
var map__19412__$1 = ((((!((map__19412 == null)))?((((map__19412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19412):map__19412);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__19412__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__19412__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__19412__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__6541__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__6542__auto__ = cljs.core.long$.call(null,time);
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__6548__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__6549__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq19408){
var G__19409 = cljs.core.first.call(null,seq19408);
var seq19408__$1 = cljs.core.next.call(null,seq19408);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__19409,seq19408__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19434 = arguments.length;
var i__7280__auto___19435 = (0);
while(true){
if((i__7280__auto___19435 < len__7279__auto___19434)){
args__7286__auto__.push((arguments[i__7280__auto___19435]));

var G__19436 = (i__7280__auto___19435 + (1));
i__7280__auto___19435 = G__19436;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__19430){
var map__19431 = p__19430;
var map__19431__$1 = ((((!((map__19431 == null)))?((((map__19431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19431):map__19431);
var opts = map__19431__$1;
var years = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__19431,map__19431__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e19433){if((e19433 instanceof Error)){
var __t = e19433;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e19433;

}
}});})(map__19431,map__19431__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq19429){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19429));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args19441 = [];
var len__7279__auto___19448 = arguments.length;
var i__7280__auto___19449 = (0);
while(true){
if((i__7280__auto___19449 < len__7279__auto___19448)){
args19441.push((arguments[i__7280__auto___19449]));

var G__19450 = (i__7280__auto___19449 + (1));
i__7280__auto___19449 = G__19450;
continue;
} else {
}
break;
}

var G__19447 = args19441.length;
switch (G__19447) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19441.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7298__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq19442){
var G__19443 = cljs.core.first.call(null,seq19442);
var seq19442__$1 = cljs.core.next.call(null,seq19442);
var G__19444 = cljs.core.first.call(null,seq19442__$1);
var seq19442__$2 = cljs.core.next.call(null,seq19442__$1);
var G__19445 = cljs.core.first.call(null,seq19442__$2);
var seq19442__$3 = cljs.core.next.call(null,seq19442__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__19443,G__19444,G__19445,seq19442__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__19453 = coll;
var c1 = cljs.core.nth.call(null,vec__19453,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__19455 = v;
var v1 = cljs.core.nth.call(null,vec__19455,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args19456 = [];
var len__7279__auto___19462 = arguments.length;
var i__7280__auto___19463 = (0);
while(true){
if((i__7280__auto___19463 < len__7279__auto___19462)){
args19456.push((arguments[i__7280__auto___19463]));

var G__19464 = (i__7280__auto___19463 + (1));
i__7280__auto___19463 = G__19464;
continue;
} else {
}
break;
}

var G__19461 = args19456.length;
switch (G__19461) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19456.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7298__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq19457){
var G__19458 = cljs.core.first.call(null,seq19457);
var seq19457__$1 = cljs.core.next.call(null,seq19457);
var G__19459 = cljs.core.first.call(null,seq19457__$1);
var seq19457__$2 = cljs.core.next.call(null,seq19457__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__19458,G__19459,seq19457__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__19468_SHARP_,p2__19466_SHARP_,p3__19467_SHARP_){
return proc.call(null,p2__19466_SHARP_,p3__19467_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__19470_SHARP_,p2__19469_SHARP_){
return proc.call(null,p2__19469_SHARP_);
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4657__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
/**
 * Faster `every?` based on `reduce`
 */
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.every = (function taoensso$encore$every(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__19477){
var vec__19478 = p__19477;
var k = cljs.core.nth.call(null,vec__19478,(0),null);
var v = cljs.core.nth.call(null,vec__19478,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args19483 = [];
var len__7279__auto___19486 = arguments.length;
var i__7280__auto___19487 = (0);
while(true){
if((i__7280__auto___19487 < len__7279__auto___19486)){
args19483.push((arguments[i__7280__auto___19487]));

var G__19488 = (i__7280__auto___19487 + (1));
i__7280__auto___19487 = G__19488;
continue;
} else {
}
break;
}

var G__19485 = args19483.length;
switch (G__19485) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19483.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args19494 = [];
var len__7279__auto___19497 = arguments.length;
var i__7280__auto___19498 = (0);
while(true){
if((i__7280__auto___19498 < len__7279__auto___19497)){
args19494.push((arguments[i__7280__auto___19498]));

var G__19499 = (i__7280__auto___19498 + (1));
i__7280__auto___19498 = G__19499;
continue;
} else {
}
break;
}

var G__19496 = args19494.length;
switch (G__19496) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19494.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__19501 = null;
var G__19501__0 = (function (){
return rf.call(null);
});
var G__19501__1 = (function (acc){
return rf.call(null,acc);
});
var G__19501__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__19501 = function(acc,input){
switch(arguments.length){
case 0:
return G__19501__0.call(this);
case 1:
return G__19501__1.call(this,acc);
case 2:
return G__19501__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19501.cljs$core$IFn$_invoke$arity$0 = G__19501__0;
G__19501.cljs$core$IFn$_invoke$arity$1 = G__19501__1;
G__19501.cljs$core$IFn$_invoke$arity$2 = G__19501__2;
return G__19501;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args19506 = [];
var len__7279__auto___19512 = arguments.length;
var i__7280__auto___19513 = (0);
while(true){
if((i__7280__auto___19513 < len__7279__auto___19512)){
args19506.push((arguments[i__7280__auto___19513]));

var G__19514 = (i__7280__auto___19513 + (1));
i__7280__auto___19513 = G__19514;
continue;
} else {
}
break;
}

var G__19511 = args19506.length;
switch (G__19511) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19506.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7298__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq19507){
var G__19508 = cljs.core.first.call(null,seq19507);
var seq19507__$1 = cljs.core.next.call(null,seq19507);
var G__19509 = cljs.core.first.call(null,seq19507__$1);
var seq19507__$2 = cljs.core.next.call(null,seq19507__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__19508,G__19509,seq19507__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(cljs.core.truth_((function (){var and__6198__auto__ = (n > (10));
if(and__6198__auto__){
return taoensso.encore.editable_QMARK_.call(null,coll);
} else {
return and__6198__auto__;
}
})())){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
return taoensso.encore.filter_vals.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
return taoensso.encore.filter_keys.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__19516_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__19516_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__19518 = ks;
var k = cljs.core.nth.call(null,vec__19518,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__19518,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__6548__auto__ = signed_idx;
var y__6549__auto__ = max_idx;
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
} else {
var x__6541__auto__ = (0);
var y__6542__auto__ = (signed_idx + max_idx);
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19525 = arguments.length;
var i__7280__auto___19526 = (0);
while(true){
if((i__7280__auto___19526 < len__7279__auto___19525)){
args__7286__auto__.push((arguments[i__7280__auto___19526]));

var G__19527 = (i__7280__auto___19526 + (1));
i__7280__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__19522){
var map__19523 = p__19522;
var map__19523__$1 = ((((!((map__19523 == null)))?((((map__19523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19523):map__19523);
var max_len = cljs.core.get.call(null,map__19523__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__19523__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
if(cljs.core.truth_(((function (__x,map__19523,map__19523__$1,max_len,end_idx){
return (function (__x__$1){
var or__6210__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__19523,map__19523__$1,max_len,end_idx))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] max-len)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] max-len)"));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__18562__auto__ = (start_idx_STAR_ + max_len);
var n2__18563__auto__ = xlen;
if((n1__18562__auto__ > n2__18563__auto__)){
return n2__18563__auto__;
} else {
return n1__18562__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq19519){
var G__19520 = cljs.core.first.call(null,seq19519);
var seq19519__$1 = cljs.core.next.call(null,seq19519);
var G__19521 = cljs.core.first.call(null,seq19519__$1);
var seq19519__$2 = cljs.core.next.call(null,seq19519__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__19520,G__19521,seq19519__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19535 = arguments.length;
var i__7280__auto___19536 = (0);
while(true){
if((i__7280__auto___19536 < len__7279__auto___19535)){
args__7286__auto__.push((arguments[i__7280__auto___19536]));

var G__19537 = (i__7280__auto___19536 + (1));
i__7280__auto___19536 = G__19537;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__19531){
var vec__19532 = p__19531;
var _QMARK_max_len = cljs.core.nth.call(null,vec__19532,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e19533){if((e19533 instanceof Error)){
var __t = e19533;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e19533;

}
}})())){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__19534 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__19534,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__19534,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq19528){
var G__19529 = cljs.core.first.call(null,seq19528);
var seq19528__$1 = cljs.core.next.call(null,seq19528);
var G__19530 = cljs.core.first.call(null,seq19528__$1);
var seq19528__$2 = cljs.core.next.call(null,seq19528__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__19529,G__19530,seq19528__$2);
});
/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args19538 = [];
var len__7279__auto___19541 = arguments.length;
var i__7280__auto___19542 = (0);
while(true){
if((i__7280__auto___19542 < len__7279__auto___19541)){
args19538.push((arguments[i__7280__auto___19542]));

var G__19543 = (i__7280__auto___19542 + (1));
i__7280__auto___19542 = G__19543;
continue;
} else {
}
break;
}

var G__19540 = args19538.length;
switch (G__19540) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19538.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args19545 = [];
var len__7279__auto___19552 = arguments.length;
var i__7280__auto___19553 = (0);
while(true){
if((i__7280__auto___19553 < len__7279__auto___19552)){
args19545.push((arguments[i__7280__auto___19553]));

var G__19554 = (i__7280__auto___19553 + (1));
i__7280__auto___19553 = G__19554;
continue;
} else {
}
break;
}

var G__19551 = args19545.length;
switch (G__19551) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19545.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7298__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq19546){
var G__19547 = cljs.core.first.call(null,seq19546);
var seq19546__$1 = cljs.core.next.call(null,seq19546);
var G__19548 = cljs.core.first.call(null,seq19546__$1);
var seq19546__$2 = cljs.core.next.call(null,seq19546__$1);
var G__19549 = cljs.core.first.call(null,seq19546__$2);
var seq19546__$3 = cljs.core.next.call(null,seq19546__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__19547,G__19548,G__19549,seq19546__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args19556 = [];
var len__7279__auto___19563 = arguments.length;
var i__7280__auto___19564 = (0);
while(true){
if((i__7280__auto___19564 < len__7279__auto___19563)){
args19556.push((arguments[i__7280__auto___19564]));

var G__19565 = (i__7280__auto___19564 + (1));
i__7280__auto___19564 = G__19565;
continue;
} else {
}
break;
}

var G__19562 = args19556.length;
switch (G__19562) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19556.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7298__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_some.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq19557){
var G__19558 = cljs.core.first.call(null,seq19557);
var seq19557__$1 = cljs.core.next.call(null,seq19557);
var G__19559 = cljs.core.first.call(null,seq19557__$1);
var seq19557__$2 = cljs.core.next.call(null,seq19557__$1);
var G__19560 = cljs.core.first.call(null,seq19557__$2);
var seq19557__$3 = cljs.core.next.call(null,seq19557__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__19558,G__19559,G__19560,seq19557__$3);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args19567 = [];
var len__7279__auto___19574 = arguments.length;
var i__7280__auto___19575 = (0);
while(true){
if((i__7280__auto___19575 < len__7279__auto___19574)){
args19567.push((arguments[i__7280__auto___19575]));

var G__19576 = (i__7280__auto___19575 + (1));
i__7280__auto___19575 = G__19576;
continue;
} else {
}
break;
}

var G__19573 = args19567.length;
switch (G__19573) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19567.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7298__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.not.call(null,v)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_when.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq19568){
var G__19569 = cljs.core.first.call(null,seq19568);
var seq19568__$1 = cljs.core.next.call(null,seq19568);
var G__19570 = cljs.core.first.call(null,seq19568__$1);
var seq19568__$2 = cljs.core.next.call(null,seq19568__$1);
var G__19571 = cljs.core.first.call(null,seq19568__$2);
var seq19568__$3 = cljs.core.next.call(null,seq19568__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__19569,G__19570,G__19571,seq19568__$3);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args19578 = [];
var len__7279__auto___19581 = arguments.length;
var i__7280__auto___19582 = (0);
while(true){
if((i__7280__auto___19582 < len__7279__auto___19581)){
args19578.push((arguments[i__7280__auto___19582]));

var G__19583 = (i__7280__auto___19582 + (1));
i__7280__auto___19582 = G__19583;
continue;
} else {
}
break;
}

var G__19580 = args19578.length;
switch (G__19580) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19578.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19586 = arguments.length;
var i__7280__auto___19587 = (0);
while(true){
if((i__7280__auto___19587 < len__7279__auto___19586)){
args__7286__auto__.push((arguments[i__7280__auto___19587]));

var G__19588 = (i__7280__auto___19587 + (1));
i__7280__auto___19587 = G__19588;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq19585){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19585));
});
/**
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19591 = arguments.length;
var i__7280__auto___19592 = (0);
while(true){
if((i__7280__auto___19592 < len__7279__auto___19591)){
args__7286__auto__.push((arguments[i__7280__auto___19592]));

var G__19593 = (i__7280__auto___19592 + (1));
i__7280__auto___19592 = G__19593;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq19589){
var G__19590 = cljs.core.first.call(null,seq19589);
var seq19589__$1 = cljs.core.next.call(null,seq19589);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__19590,seq19589__$1);
});
/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__19594 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__19595 = cljs.core.next.call(null,ks__$1);
var G__19596 = cljs.core.next.call(null,vs__$1);
m = G__19594;
ks__$1 = G__19595;
vs__$1 = G__19596;
continue;
}
break;
}
});
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args19597 = [];
var len__7279__auto___19603 = arguments.length;
var i__7280__auto___19604 = (0);
while(true){
if((i__7280__auto___19604 < len__7279__auto___19603)){
args19597.push((arguments[i__7280__auto___19604]));

var G__19605 = (i__7280__auto___19604 + (1));
i__7280__auto___19604 = G__19605;
continue;
} else {
}
break;
}

var G__19602 = args19597.length;
switch (G__19602) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19597.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7298__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq19598){
var G__19599 = cljs.core.first.call(null,seq19598);
var seq19598__$1 = cljs.core.next.call(null,seq19598);
var G__19600 = cljs.core.first.call(null,seq19598__$1);
var seq19598__$2 = cljs.core.next.call(null,seq19598__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__19599,G__19600,seq19598__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore._nested_merge_with = (function taoensso$encore$_nested_merge_with(f,maps){
if(cljs.core.truth_(taoensso.encore.rsome.call(null,cljs.core.identity,maps))){
return cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce_kv.call(null,(function taoensso$encore$_nested_merge_with_$_rf2(acc__$1,k,rv){
if(cljs.core.contains_QMARK_.call(null,acc__$1,k)){
var lv = cljs.core.get.call(null,acc__$1,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_nested_merge_with_$_rf2,lv,rv));
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("merge","dissoc","merge/dissoc",-706655261)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
var new_rv = f.call(null,lv,rv);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("merge","dissoc","merge/dissoc",-706655261)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
} else {
return cljs.core.assoc.call(null,acc__$1,k,rv);
}
}),acc,in$);
}),cljs.core.PersistentArrayMap.EMPTY,maps);
} else {
return null;
}
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19609 = arguments.length;
var i__7280__auto___19610 = (0);
while(true){
if((i__7280__auto___19610 < len__7279__auto___19609)){
args__7286__auto__.push((arguments[i__7280__auto___19610]));

var G__19611 = (i__7280__auto___19610 + (1));
i__7280__auto___19610 = G__19611;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._nested_merge_with.call(null,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq19607){
var G__19608 = cljs.core.first.call(null,seq19607);
var seq19607__$1 = cljs.core.next.call(null,seq19607);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__19608,seq19607__$1);
});
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19613 = arguments.length;
var i__7280__auto___19614 = (0);
while(true){
if((i__7280__auto___19614 < len__7279__auto___19613)){
args__7286__auto__.push((arguments[i__7280__auto___19614]));

var G__19615 = (i__7280__auto___19614 + (1));
i__7280__auto___19614 = G__19615;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._nested_merge_with.call(null,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq19612){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19612));
});
/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore._platform_cas_BANG_ = (function taoensso$encore$_platform_cas_BANG_(atom_,old_val,new_val){
cljs.core.reset_BANG_.call(null,atom_,new_val);

return true;
});
/**
 * Returns [<old-val> <new-val>]
 */
taoensso.encore.dswap_BANG_ = (function taoensso$encore$dswap_BANG_(atom_,f){
var ov = cljs.core.deref.call(null,atom_);
var nv = f.call(null,ov);
cljs.core.reset_BANG_.call(null,atom_,nv);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ov,nv], null);
});
/**
 * Used by memoization utils
 */
taoensso.encore._swap_cache_BANG_ = (function taoensso$encore$_swap_cache_BANG_(atom_,k,f){
var om = cljs.core.deref.call(null,atom_);
var nv = f.call(null,cljs.core.get.call(null,om,k));
var nm = cljs.core.assoc.call(null,om,k,nv);
cljs.core.reset_BANG_.call(null,atom_,nm);

return nv;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k19617,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__19619 = (((k19617 instanceof cljs.core.Keyword))?k19617.fqn:null);
switch (G__19619) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19617,else__6835__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#taoensso.encore.Swapped{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19616){
var self__ = this;
var G__19616__$1 = this;
return (new cljs.core.RecordIter((0),G__19616__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__19616){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__19620 = cljs.core.keyword_identical_QMARK_;
var expr__19621 = k__6840__auto__;
if(cljs.core.truth_(pred__19620.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__19621))){
return (new taoensso.encore.Swapped(G__19616,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19620.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__19621))){
return (new taoensso.encore.Swapped(self__.new_val,G__19616,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__19616),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__19616){
var self__ = this;
var this__6831__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__19616,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__19618){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__19618),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__19618),null,cljs.core.dissoc.call(null,G__19618,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
/**
 * Returns [<new-val> <return-val>]
 */
taoensso.encore._swapped = (function taoensso$encore$_swapped(var_args){
var args19624 = [];
var len__7279__auto___19630 = arguments.length;
var i__7280__auto___19631 = (0);
while(true){
if((i__7280__auto___19631 < len__7279__auto___19630)){
args19624.push((arguments[i__7280__auto___19631]));

var G__19632 = (i__7280__auto___19631 + (1));
i__7280__auto___19631 = G__19632;
continue;
} else {
}
break;
}

var G__19626 = args19624.length;
switch (G__19626) {
case 1:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19624.length)].join('')));

}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2 = (function (old_val,f){
return taoensso.encore._swapped.call(null,f.call(null,old_val));
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3 = (function (old_val,ks,f){
var vec__19627 = ks;
var k1 = cljs.core.nth.call(null,vec__19627,(0),null);
var kn = cljs.core.nthnext.call(null,vec__19627,(1));
var m = old_val;
if(cljs.core.truth_(kn)){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore._swapped.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__19628 = taoensso.encore._swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__19628,(0),null);
var return_val = cljs.core.nth.call(null,vec__19628,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
} else {
if(((k1 == null)) && (cljs.core.empty_QMARK_.call(null,ks))){
return taoensso.encore._swapped.call(null,f.call(null,old_val));
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore._swapped.call(null,cljs.core.dissoc.call(null,m,k1));
} else {
var old_val_in = cljs.core.get.call(null,m,k1);
var vec__19629 = taoensso.encore._swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__19629,(0),null);
var return_val = cljs.core.nth.call(null,vec__19629,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m,k1):cljs.core.assoc.call(null,m,k1,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
}
}
});

taoensso.encore._swapped.cljs$lang$maxFixedArity = 3;
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore._replace_in = (function taoensso$encore$_replace_in(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (acc,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return acc;
} else {
var vec__19636 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__19636,(0),null);
var ks = cljs.core.nth.call(null,vec__19636,(1),null);
var valf = cljs.core.nth.call(null,vec__19636,(2),null);
var G__19637 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__19637) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,acc,ks,valf);
}

break;
case "swap":
if((valf == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,acc);
} else {
return cljs.core.nth.call(null,taoensso.encore._swapped.call(null,acc,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19641 = arguments.length;
var i__7280__auto___19642 = (0);
while(true){
if((i__7280__auto___19642 < len__7279__auto___19641)){
args__7286__auto__.push((arguments[i__7280__auto___19642]));

var G__19643 = (i__7280__auto___19642 + (1));
i__7280__auto___19642 = G__19643;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore._replace_in.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq19639){
var G__19640 = cljs.core.first.call(null,seq19639);
var seq19639__$1 = cljs.core.next.call(null,seq19639);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19640,seq19639__$1);
});
taoensso.encore.pairs_into = (function taoensso$encore$pairs_into(to,from){
return cljs.core.into.call(null,to,cljs.core.partition_all.call(null,(2)),from);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args19648 = [];
var len__7279__auto___19659 = arguments.length;
var i__7280__auto___19660 = (0);
while(true){
if((i__7280__auto___19660 < len__7279__auto___19659)){
args19648.push((arguments[i__7280__auto___19660]));

var G__19661 = (i__7280__auto___19660 + (1));
i__7280__auto___19660 = G__19661;
continue;
} else {
}
break;
}

var G__19654 = args19648.length;
switch (G__19654) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19648.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7298__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__19655 = taoensso.encore._swapped.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__19655,(0),null);
var return_val = cljs.core.nth.call(null,vec__19655,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__19656 = taoensso.encore._swapped.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__19656,(0),null);
var return_val = cljs.core.nth.call(null,vec__19656,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e19657){if((e19657 instanceof Error)){
var __t = e19657;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e19657;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e19658){if((e19658 instanceof Error)){
var __t = e19658;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e19658;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),more);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore._replace_in.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq19649){
var G__19650 = cljs.core.first.call(null,seq19649);
var seq19649__$1 = cljs.core.next.call(null,seq19649);
var G__19651 = cljs.core.first.call(null,seq19649__$1);
var seq19649__$2 = cljs.core.next.call(null,seq19649__$1);
var G__19652 = cljs.core.first.call(null,seq19649__$2);
var seq19649__$3 = cljs.core.next.call(null,seq19649__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19650,G__19651,G__19652,seq19649__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args19663 = [];
var len__7279__auto___19672 = arguments.length;
var i__7280__auto___19673 = (0);
while(true){
if((i__7280__auto___19673 < len__7279__auto___19672)){
args19663.push((arguments[i__7280__auto___19673]));

var G__19674 = (i__7280__auto___19673 + (1));
i__7280__auto___19673 = G__19674;
continue;
} else {
}
break;
}

var G__19669 = args19663.length;
switch (G__19669) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19663.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7298__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e19670){if((e19670 instanceof Error)){
var __t = e19670;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e19670;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e19671){if((e19671 instanceof Error)){
var __t = e19671;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e19671;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),more);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore._replace_in.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq19664){
var G__19665 = cljs.core.first.call(null,seq19664);
var seq19664__$1 = cljs.core.next.call(null,seq19664);
var G__19666 = cljs.core.first.call(null,seq19664__$1);
var seq19664__$2 = cljs.core.next.call(null,seq19664__$1);
var G__19667 = cljs.core.first.call(null,seq19664__$2);
var seq19664__$3 = cljs.core.next.call(null,seq19664__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19665,G__19666,G__19667,seq19664__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args19676 = [];
var len__7279__auto___19682 = arguments.length;
var i__7280__auto___19683 = (0);
while(true){
if((i__7280__auto___19683 < len__7279__auto___19682)){
args19676.push((arguments[i__7280__auto___19683]));

var G__19684 = (i__7280__auto___19683 + (1));
i__7280__auto___19683 = G__19684;
continue;
} else {
}
break;
}

var G__19681 = args19676.length;
switch (G__19681) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args19676.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7298__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq19677){
var G__19678 = cljs.core.first.call(null,seq19677);
var seq19677__$1 = cljs.core.next.call(null,seq19677);
var G__19679 = cljs.core.first.call(null,seq19677__$1);
var seq19677__$2 = cljs.core.next.call(null,seq19677__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__19678,G__19679,seq19677__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);
/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args19690 = [];
var len__7279__auto___19693 = arguments.length;
var i__7280__auto___19694 = (0);
while(true){
if((i__7280__auto___19694 < len__7279__auto___19693)){
args19690.push((arguments[i__7280__auto___19694]));

var G__19695 = (i__7280__auto___19694 + (1));
i__7280__auto___19694 = G__19695;
continue;
} else {
}
break;
}

var G__19692 = args19690.length;
switch (G__19692) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19690.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__6198__auto__ = separator;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__6198__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__6210__auto__ = fmt;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE
 *  * Formats nil as "nil" rather than "null"
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!)
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19699 = arguments.length;
var i__7280__auto___19700 = (0);
while(true){
if((i__7280__auto___19700 < len__7279__auto___19699)){
args__7286__auto__.push((arguments[i__7280__auto___19700]));

var G__19701 = (i__7280__auto___19700 + (1));
i__7280__auto___19700 = G__19701;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq19697){
var G__19698 = cljs.core.first.call(null,seq19697);
var seq19697__$1 = cljs.core.next.call(null,seq19697);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__19698,seq19697__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides behaviour consistent between Clojure/Script.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__19702__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__19702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19703__i = 0, G__19703__a = new Array(arguments.length -  0);
while (G__19703__i < G__19703__a.length) {G__19703__a[G__19703__i] = arguments[G__19703__i + 0]; ++G__19703__i;}
  args = new cljs.core.IndexedSeq(G__19703__a,0);
} 
return G__19702__delegate.call(this,args);};
G__19702.cljs$lang$maxFixedArity = 0;
G__19702.cljs$lang$applyTo = (function (arglist__19704){
var args = cljs.core.seq(arglist__19704);
return G__19702__delegate(args);
});
G__19702.cljs$core$IFn$_invoke$arity$variadic = G__19702__delegate;
return G__19702;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19712 = arguments.length;
var i__7280__auto___19713 = (0);
while(true){
if((i__7280__auto___19713 < len__7279__auto___19712)){
args__7286__auto__.push((arguments[i__7280__auto___19713]));

var G__19714 = (i__7280__auto___19713 + (1));
i__7280__auto___19713 = G__19714;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__19708){
var vec__19709 = p__19708;
var _QMARK_max_len = cljs.core.nth.call(null,vec__19709,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e19710){if((e19710 instanceof Error)){
var __t = e19710;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e19710;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__19711 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__19711,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__19711,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq19705){
var G__19706 = cljs.core.first.call(null,seq19705);
var seq19705__$1 = cljs.core.next.call(null,seq19705);
var G__19707 = cljs.core.first.call(null,seq19705__$1);
var seq19705__$2 = cljs.core.next.call(null,seq19705__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__19706,G__19707,seq19705__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19720 = arguments.length;
var i__7280__auto___19721 = (0);
while(true){
if((i__7280__auto___19721 < len__7279__auto___19720)){
args__7286__auto__.push((arguments[i__7280__auto___19721]));

var G__19722 = (i__7280__auto___19721 + (1));
i__7280__auto___19721 = G__19722;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__19718){
var vec__19719 = p__19718;
var start_idx = cljs.core.nth.call(null,vec__19719,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__19719,(1),null);
var start_idx__$1 = ((function (){var or__6210__auto__ = start_idx;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq19715){
var G__19716 = cljs.core.first.call(null,seq19715);
var seq19715__$1 = cljs.core.next.call(null,seq19715);
var G__19717 = cljs.core.first.call(null,seq19715__$1);
var seq19715__$2 = cljs.core.next.call(null,seq19715__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__19716,G__19717,seq19715__$2);
});
/**
 * Like `string/join` but skips duplicate separators
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__6210__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19726 = arguments.length;
var i__7280__auto___19727 = (0);
while(true){
if((i__7280__auto___19727 < len__7279__auto___19726)){
args__7286__auto__.push((arguments[i__7280__auto___19727]));

var G__19728 = (i__7280__auto___19727 + (1));
i__7280__auto___19727 = G__19728;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq19725){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19725));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args19729 = [];
var len__7279__auto___19732 = arguments.length;
var i__7280__auto___19733 = (0);
while(true){
if((i__7280__auto___19733 < len__7279__auto___19732)){
args19729.push((arguments[i__7280__auto___19733]));

var G__19734 = (i__7280__auto___19733 + (1));
i__7280__auto___19733 = G__19734;
continue;
} else {
}
break;
}

var G__19731 = args19729.length;
switch (G__19731) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19729.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Like `clojure.core/memoize` but faster + uses delays to avoid write races
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var a0_sentinel = {};
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (a0_sentinel,cache_){
return (function() {
var G__19740 = null;
var G__19740__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__6210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),a0_sentinel);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._swap_cache_BANG_.call(null,cache_,a0_sentinel,((function (or__6210__auto__,a0_sentinel,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__6210__auto__,a0_sentinel,cache_){
return (function (){
return f.call(null);
});})(or__6210__auto__,a0_sentinel,cache_))
,null));
}
});})(or__6210__auto__,a0_sentinel,cache_))
);
}
})());
});
var G__19740__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__6210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._swap_cache_BANG_.call(null,cache_,x,((function (or__6210__auto__,a0_sentinel,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__6210__auto__,a0_sentinel,cache_){
return (function (){
return f.call(null,x);
});})(or__6210__auto__,a0_sentinel,cache_))
,null));
}
});})(or__6210__auto__,a0_sentinel,cache_))
);
}
})());
});
var G__19740__2 = (function() { 
var G__19741__delegate = function (x,more){
var xs = cljs.core.cons.call(null,x,more);
return cljs.core.deref.call(null,(function (){var or__6210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._swap_cache_BANG_.call(null,cache_,xs,((function (or__6210__auto__,xs,a0_sentinel,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__6210__auto__,xs,a0_sentinel,cache_){
return (function (){
return cljs.core.apply.call(null,f,xs);
});})(or__6210__auto__,xs,a0_sentinel,cache_))
,null));
}
});})(or__6210__auto__,xs,a0_sentinel,cache_))
);
}
})());
};
var G__19741 = function (x,var_args){
var more = null;
if (arguments.length > 1) {
var G__19742__i = 0, G__19742__a = new Array(arguments.length -  1);
while (G__19742__i < G__19742__a.length) {G__19742__a[G__19742__i] = arguments[G__19742__i + 1]; ++G__19742__i;}
  more = new cljs.core.IndexedSeq(G__19742__a,0);
} 
return G__19741__delegate.call(this,x,more);};
G__19741.cljs$lang$maxFixedArity = 1;
G__19741.cljs$lang$applyTo = (function (arglist__19743){
var x = cljs.core.first(arglist__19743);
var more = cljs.core.rest(arglist__19743);
return G__19741__delegate(x,more);
});
G__19741.cljs$core$IFn$_invoke$arity$variadic = G__19741__delegate;
return G__19741;
})()
;
G__19740 = function(x,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return G__19740__0.call(this);
case 1:
return G__19740__1.call(this,x);
default:
var G__19744 = null;
if (arguments.length > 1) {
var G__19745__i = 0, G__19745__a = new Array(arguments.length -  1);
while (G__19745__i < G__19745__a.length) {G__19745__a[G__19745__i] = arguments[G__19745__i + 1]; ++G__19745__i;}
G__19744 = new cljs.core.IndexedSeq(G__19745__a,0);
}
return G__19740__2.cljs$core$IFn$_invoke$arity$variadic(x, G__19744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19740.cljs$lang$maxFixedArity = 1;
G__19740.cljs$lang$applyTo = G__19740__2.cljs$lang$applyTo;
G__19740.cljs$core$IFn$_invoke$arity$0 = G__19740__0;
G__19740.cljs$core$IFn$_invoke$arity$1 = G__19740__1;
G__19740.cljs$core$IFn$_invoke$arity$variadic = G__19740__2.cljs$core$IFn$_invoke$arity$variadic;
return G__19740;
})()
;})(a0_sentinel,cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__19746__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__6210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__6210__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__6210__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__6210__auto__,cache_))
,null))], true, false);
}
});})(or__6210__auto__,cache_))
),args);
}
})());
};
var G__19746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19747__i = 0, G__19747__a = new Array(arguments.length -  0);
while (G__19747__i < G__19747__a.length) {G__19747__a[G__19747__i] = arguments[G__19747__i + 0]; ++G__19747__i;}
  args = new cljs.core.IndexedSeq(G__19747__a,0);
} 
return G__19746__delegate.call(this,args);};
G__19746.cljs$lang$maxFixedArity = 0;
G__19746.cljs$lang$applyTo = (function (arglist__19748){
var args = cljs.core.seq(arglist__19748);
return G__19746__delegate(args);
});
G__19746.cljs$core$IFn$_invoke$arity$variadic = G__19746__delegate;
return G__19746;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19752 = arguments.length;
var i__7280__auto___19753 = (0);
while(true){
if((i__7280__auto___19753 < len__7279__auto___19752)){
args__7286__auto__.push((arguments[i__7280__auto___19753]));

var G__19754 = (i__7280__auto___19753 + (1));
i__7280__auto___19753 = G__19754;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore._swap_cache_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq19749){
var G__19750 = cljs.core.first.call(null,seq19749);
var seq19749__$1 = cljs.core.next.call(null,seq19749);
var G__19751 = cljs.core.first.call(null,seq19749__$1);
var seq19749__$2 = cljs.core.next.call(null,seq19749__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__19750,G__19751,seq19749__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Can be significantly faster (depends on opts)
 *  * Uses delays to prevent race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` option
 *  * Supports cache size limit & gc with `cache-size` option
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args19755 = [];
var len__7279__auto___19778 = arguments.length;
var i__7280__auto___19779 = (0);
while(true){
if((i__7280__auto___19779 < len__7279__auto___19778)){
args19755.push((arguments[i__7280__auto___19779]));

var G__19780 = (i__7280__auto___19779 + (1));
i__7280__auto___19779 = G__19780;
continue;
} else {
}
break;
}

var G__19757 = args19755.length;
switch (G__19757) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19755.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__19782__delegate = function (p__19758){
var vec__19759 = p__19758;
var arg1 = cljs.core.nth.call(null,vec__19759,(0),null);
var argn = cljs.core.nthnext.call(null,vec__19759,(1));
var args = vec__19759;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return cache_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__6210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore._swap_cache_BANG_.call(null,cache_,args__$1,((function (or__6210__auto__,fresh_QMARK_,args__$1,vec__19759,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__6198__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__6198__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__6210__auto__,fresh_QMARK_,args__$1,vec__19759,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__6210__auto__,fresh_QMARK_,args__$1,vec__19759,arg1,argn,args,cache_))
,null));
}
});})(or__6210__auto__,fresh_QMARK_,args__$1,vec__19759,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__19782 = function (var_args){
var p__19758 = null;
if (arguments.length > 0) {
var G__19783__i = 0, G__19783__a = new Array(arguments.length -  0);
while (G__19783__i < G__19783__a.length) {G__19783__a[G__19783__i] = arguments[G__19783__i + 0]; ++G__19783__i;}
  p__19758 = new cljs.core.IndexedSeq(G__19783__a,0);
} 
return G__19782__delegate.call(this,p__19758);};
G__19782.cljs$lang$maxFixedArity = 0;
G__19782.cljs$lang$applyTo = (function (arglist__19784){
var p__19758 = cljs.core.seq(arglist__19784);
return G__19782__delegate(p__19758);
});
G__19782.cljs$core$IFn$_invoke$arity$variadic = G__19782__delegate;
return G__19782;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_19785 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_19785))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e19760){if((e19760 instanceof Error)){
var __t_19786 = e19760;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_19785,__t_19786,null);
} else {
throw e19760;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__6198__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__6198__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__6198__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__6198__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__6198__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__19761){
var vec__19762 = p__19761;
var dv = cljs.core.nth.call(null,vec__19762,(0),null);
var udt = cljs.core.nth.call(null,vec__19762,(1),null);
var cv = vec__19762;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__19787__delegate = function (p__19763){
var vec__19764 = p__19763;
var arg1 = cljs.core.nth.call(null,vec__19764,(0),null);
var argn = cljs.core.nthnext.call(null,vec__19764,(1));
var args = vec__19764;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return cache_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__19765 = taoensso.encore._swap_cache_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__19764,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6198__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__6198__auto____$1){
var vec__19767 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__19767,(0),null);
var udt = cljs.core.nth.call(null,vec__19767,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__19764,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__19764,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__19764,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__19765,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__19787 = function (var_args){
var p__19763 = null;
if (arguments.length > 0) {
var G__19788__i = 0, G__19788__a = new Array(arguments.length -  0);
while (G__19788__i < G__19788__a.length) {G__19788__a[G__19788__i] = arguments[G__19788__i + 0]; ++G__19788__i;}
  p__19763 = new cljs.core.IndexedSeq(G__19788__a,0);
} 
return G__19787__delegate.call(this,p__19763);};
G__19787.cljs$lang$maxFixedArity = 0;
G__19787.cljs$lang$applyTo = (function (arglist__19789){
var p__19763 = cljs.core.seq(arglist__19789);
return G__19787__delegate(p__19763);
});
G__19787.cljs$core$IFn$_invoke$arity$variadic = G__19787__delegate;
return G__19787;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_19790 = ttl_ms;
if(cljs.core.truth_(((function (__x_19790){
return (function (__x__$1){
var or__6210__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_19790))
.call(null,__x_19790))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_19790,null,null);
}

var __x_19791 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_19791))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e19768){if((e19768 instanceof Error)){
var __t_19792 = e19768;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_19791,__t_19792,null);
} else {
throw e19768;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__6210__auto__ = ttl_ms;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__6198__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__6198__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__6198__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__6198__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__6198__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_19793 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_19794 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_19793,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__19769){
var vec__19770 = p__19769;
var dv = cljs.core.nth.call(null,vec__19770,(0),null);
var udt = cljs.core.nth.call(null,vec__19770,(1),null);
var _ = cljs.core.nth.call(null,vec__19770,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__19770,(3),null);
var cv = vec__19770;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_19793,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_19793));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_19793,ks_to_gc_19794,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_19793,ks_to_gc_19794,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_19793,ks_to_gc_19794,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_19794));
});})(snapshot_19793,ks_to_gc_19794,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_19795 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_19796 = (cljs.core.count.call(null,snapshot_19795) - cache_size__$1);
if((n_to_gc_19796 > (64))){
var ks_to_gc_19797 = taoensso.encore.top.call(null,n_to_gc_19796,((function (snapshot_19795,n_to_gc_19796,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__19771 = snapshot_19795.call(null,k);
var _ = cljs.core.nth.call(null,vec__19771,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19771,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__19771,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__19771,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_19795,n_to_gc_19796,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_19795));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_19797,snapshot_19795,n_to_gc_19796,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_19797,snapshot_19795,n_to_gc_19796,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_19797,snapshot_19795,n_to_gc_19796,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_19797));
});})(ks_to_gc_19797,snapshot_19795,n_to_gc_19796,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((!(ttl_ms_QMARK_))?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore._swap_cache_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6198__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__6198__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore._swap_cache_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__6198__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__6198__auto____$1){
var vec__19773 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__19773,(0),null);
var udt = cljs.core.nth.call(null,vec__19773,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__19798__delegate = function (p__19774){
var vec__19775 = p__19774;
var arg1 = cljs.core.nth.call(null,vec__19775,(0),null);
var argn = cljs.core.nthnext.call(null,vec__19775,(1));
var args = vec__19775;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return state_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__19776 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__19776,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__19776,dv,vec__19775,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4655__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__19777 = temp__4655__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__19777,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__19777,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__19777,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__19777,(3),null);
var cv = vec__19777;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null));
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)));
}
});})(fresh_QMARK_,args__$1,tick,vec__19776,dv,vec__19775,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__19798 = function (var_args){
var p__19774 = null;
if (arguments.length > 0) {
var G__19799__i = 0, G__19799__a = new Array(arguments.length -  0);
while (G__19799__i < G__19799__a.length) {G__19799__a[G__19799__i] = arguments[G__19799__i + 0]; ++G__19799__i;}
  p__19774 = new cljs.core.IndexedSeq(G__19799__a,0);
} 
return G__19798__delegate.call(this,p__19774);};
G__19798.cljs$lang$maxFixedArity = 0;
G__19798.cljs$lang$applyTo = (function (arglist__19800){
var p__19774 = cljs.core.seq(arglist__19800);
return G__19798__delegate(p__19774);
});
G__19798.cljs$core$IFn$_invoke$arity$variadic = G__19798__delegate;
return G__19798;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__19836){
var vec__19837 = p__19836;
var _ = cljs.core.nth.call(null,vec__19837,(0),null);
var win_ms = cljs.core.nth.call(null,vec__19837,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__19837,(2),null);
var spec = vec__19837;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__19838){
var vec__19839 = p__19838;
var _ = cljs.core.nth.call(null,vec__19839,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19839,(1),null);
var id = cljs.core.nth.call(null,vec__19839,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__19840){
var vec__19856 = p__19840;
var _QMARK_a1 = cljs.core.nth.call(null,vec__19856,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__19856,(1),null);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","debug","rl/debug",-1608167914)))){
return vstates_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a2,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,vstates_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","peek","rl/peek",-291391771));
var req_id = (cljs.core.truth_(peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__6198__auto__ = req_id;
if(cljs.core.truth_(and__6198__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__6198__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__19859){
var vec__19860 = p__19859;
var ___$1 = cljs.core.nth.call(null,vec__19860,(0),null);
var udt = cljs.core.nth.call(null,vec__19860,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__19860,(2),null);
var x__6541__auto__ = acc;
var y__6542__auto__ = udt;
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
});})(peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
if(cljs.core.truth_(peek_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
} else {
var vec__19861 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__19862 = in_vspecs;
var vec__19863 = cljs.core.nth.call(null,vec__19862,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__19863,(0),null);
var win_ms = cljs.core.nth.call(null,vec__19863,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__19863,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__19862,(1));
var vec__19864 = in_vstate;
var vec__19865 = cljs.core.nth.call(null,vec__19864,(0),null);
var ncalls = cljs.core.nth.call(null,vec__19865,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__19865,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__19864,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__6210__auto__ = (_QMARK_worst_limit_offence == null);
if(or__6210__auto__){
return or__6210__auto__;
} else {
var vec__19867 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__19867,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19867,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__19871 = next_in_vspecs;
var G__19872 = next_in_vstate;
var G__19873 = new_out_vstate;
var G__19874 = new__QMARK_worst_limit_offence;
in_vspecs = G__19871;
in_vstate = G__19872;
out_vstate = G__19873;
_QMARK_worst_limit_offence = G__19874;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__19861,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__19861,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = (cljs.core.truth_(peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__19861,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__19868){
var vec__19869 = p__19868;
var ncalls = cljs.core.nth.call(null,vec__19869,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__19869,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__19861,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)
));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__19870 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__19870,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19870,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(peek_QMARK_,req_id,instant,vec__19856,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);

}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__19840 = null;
if (arguments.length > 0) {
var G__19875__i = 0, G__19875__a = new Array(arguments.length -  0);
while (G__19875__i < G__19875__a.length) {G__19875__a[G__19875__i] = arguments[G__19875__i + 0]; ++G__19875__i;}
  p__19840 = new cljs.core.IndexedSeq(G__19875__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__19840);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__19876){
var p__19840 = cljs.core.seq(arglist__19876);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__19840);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__19877__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__19877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19878__i = 0, G__19878__a = new Array(arguments.length -  0);
while (G__19878__i < G__19878__a.length) {G__19878__a[G__19878__i] = arguments[G__19878__i + 0]; ++G__19878__i;}
  args = new cljs.core.IndexedSeq(G__19878__a,0);
} 
return G__19877__delegate.call(this,args);};
G__19877.cljs$lang$maxFixedArity = 0;
G__19877.cljs$lang$applyTo = (function (arglist__19879){
var args = cljs.core.seq(arglist__19879);
return G__19877__delegate(args);
});
G__19877.cljs$core$IFn$_invoke$arity$variadic = G__19877__delegate;
return G__19877;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__6210__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
var or__6210__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__6210__auto____$2)){
return or__6210__auto____$2;
} else {
var or__6210__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__6210__auto____$3)){
return or__6210__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto__))
}
})();
taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__6198__auto__ = typeof console !== 'undefined';
if(and__6198__auto__){
return console.log;
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19887 = arguments.length;
var i__7280__auto___19888 = (0);
while(true){
if((i__7280__auto___19888 < len__7279__auto___19887)){
args__7286__auto__.push((arguments[i__7280__auto___19888]));

var G__19889 = (i__7280__auto___19888 + (1));
i__7280__auto___19888 = G__19889;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq19880){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19880));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19890 = arguments.length;
var i__7280__auto___19891 = (0);
while(true){
if((i__7280__auto___19891 < len__7279__auto___19890)){
args__7286__auto__.push((arguments[i__7280__auto___19891]));

var G__19892 = (i__7280__auto___19891 + (1));
i__7280__auto___19891 = G__19892;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq19881){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19881));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19893 = arguments.length;
var i__7280__auto___19894 = (0);
while(true){
if((i__7280__auto___19894 < len__7279__auto___19893)){
args__7286__auto__.push((arguments[i__7280__auto___19894]));

var G__19895 = (i__7280__auto___19894 + (1));
i__7280__auto___19894 = G__19895;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq19882){
var G__19883 = cljs.core.first.call(null,seq19882);
var seq19882__$1 = cljs.core.next.call(null,seq19882);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__19883,seq19882__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19896 = arguments.length;
var i__7280__auto___19897 = (0);
while(true){
if((i__7280__auto___19897 < len__7279__auto___19896)){
args__7286__auto__.push((arguments[i__7280__auto___19897]));

var G__19898 = (i__7280__auto___19897 + (1));
i__7280__auto___19897 = G__19898;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq19884){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19884));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19899 = arguments.length;
var i__7280__auto___19900 = (0);
while(true){
if((i__7280__auto___19900 < len__7279__auto___19899)){
args__7286__auto__.push((arguments[i__7280__auto___19900]));

var G__19901 = (i__7280__auto___19900 + (1));
i__7280__auto___19900 = G__19901;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq19885){
var G__19886 = cljs.core.first.call(null,seq19885);
var seq19885__$1 = cljs.core.next.call(null,seq19885);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__19886,seq19885__$1);
});
/**
 * Returns `js/window`'s current location as a map
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var temp__4657__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__4657__auto__)){
var js_win = temp__4657__auto__;
var temp__4657__auto____$1 = js_win.location;
if(cljs.core.truth_(temp__4657__auto____$1)){
var loc = temp__4657__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var __x = params;
if(cljs.core.truth_(((function (__x){
return (function (__x__$1){
var or__6210__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});})(__x))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__19903 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__19903) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__19907,callback){
var map__19925 = p__19907;
var map__19925__$1 = ((((!((map__19925 == null)))?((((map__19925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19925):map__19925);
var opts = map__19925__$1;
var method = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__19925__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__6210__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] timeout-ms)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] timeout-ms)"));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__19929 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__19929) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__19928 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__19928,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__19928,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__19930_19943 = xhr;
goog.events.listenOnce(G__19930_19943,goog.net.EventType.READY,((function (G__19930_19943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__19928,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__19930_19943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__19928,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__19930_19943,goog.net.EventType.COMPLETE,((function (G__19930_19943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__19928,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__19936 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__19930_19943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__19928,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__19906_SHARP_,p2__19905_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__19905_SHARP_,p1__19906_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__19930_19943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__19928,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__19937 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__19936.call(null,"/edn",expr__19937))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__19936.call(null,"/json",expr__19937))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__19936.call(null,"/xml",expr__19937))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__19936.call(null,"/html",expr__19937))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__19940 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__19940) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e19939){if((e19939 instanceof Error)){
var e = e19939;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e19939;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__6210__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__19930_19943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__19928,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4657__auto___19945 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___19945)){
var pf_19946 = temp__4657__auto___19945;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_19946,temp__4657__auto___19945,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__19928,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__6198__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__6198__auto__;
}
})())?(loaded / total):null);
return pf_19946.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_19946,temp__4657__auto___19945,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__19928,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__19925,map__19925__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__19941_19947 = xhr;
var temp__4657__auto___19948 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___19948)){
var x_19949 = temp__4657__auto___19948;
G__19941_19947.setTimeoutInterval((function (){var or__6210__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4657__auto___19950 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4657__auto___19950)){
var x_19951 = temp__4657__auto___19950;
G__19941_19947.setWithCredentials(true);
} else {
}

var temp__4657__auto___19952 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___19952)){
var x_19953 = temp__4657__auto___19952;
G__19941_19947.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e19927){if((e19927 instanceof Error)){
var e = e19927;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e19927;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19958 = arguments.length;
var i__7280__auto___19959 = (0);
while(true){
if((i__7280__auto___19959 < len__7279__auto___19958)){
args__7286__auto__.push((arguments[i__7280__auto___19959]));

var G__19960 = (i__7280__auto___19959 + (1));
i__7280__auto___19959 = G__19960;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__19956){
var vec__19957 = p__19956;
var encoding = cljs.core.nth.call(null,vec__19957,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq19954){
var G__19955 = cljs.core.first.call(null,seq19954);
var seq19954__$1 = cljs.core.next.call(null,seq19954);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__19955,seq19954__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__6210__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__6990__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__19969(s__19970){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__19970__$1 = s__19970;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19970__$1);
if(temp__4657__auto__){
var s__19970__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19970__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__19970__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__19972 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__19971 = (0);
while(true){
if((i__19971 < size__6989__auto__)){
var vec__19975 = cljs.core._nth.call(null,c__6988__auto__,i__19971);
var k = cljs.core.nth.call(null,vec__19975,(0),null);
var v = cljs.core.nth.call(null,vec__19975,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__19972,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6210__auto__ = cljs.core.seq.call(null,v);
if(or__6210__auto__){
return or__6210__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__19977 = (i__19971 + (1));
i__19971 = G__19977;
continue;
} else {
var G__19978 = (i__19971 + (1));
i__19971 = G__19978;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19972),taoensso$encore$format_query_string_$_iter__19969.call(null,cljs.core.chunk_rest.call(null,s__19970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19972),null);
}
} else {
var vec__19976 = cljs.core.first.call(null,s__19970__$2);
var k = cljs.core.nth.call(null,vec__19976,(0),null);
var v = cljs.core.nth.call(null,vec__19976,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__6210__auto__ = cljs.core.seq.call(null,v);
if(or__6210__auto__){
return or__6210__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__19969.call(null,cljs.core.rest.call(null,s__19970__$2)));
} else {
var G__19979 = cljs.core.rest.call(null,s__19970__$2);
s__19970__$1 = G__19979;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__6990__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19986 = arguments.length;
var i__7280__auto___19987 = (0);
while(true){
if((i__7280__auto___19987 < len__7279__auto___19986)){
args__7286__auto__.push((arguments[i__7280__auto___19987]));

var G__19988 = (i__7280__auto___19987 + (1));
i__7280__auto___19987 = G__19988;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__19982){
var vec__19983 = p__19982;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__19983,(0),null);
var encoding = cljs.core.nth.call(null,vec__19983,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__19983,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__19984 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__19984,(0),null);
var v = cljs.core.nth.call(null,vec__19984,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__19983,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
}
}
})());
if(cljs.core.truth_((function (){var __x = _PERCENT_;
try{if(cljs.core.map_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e19985){if((e19985 instanceof Error)){
var __t = e19985;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e19985;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq19980){
var G__19981 = cljs.core.first.call(null,seq19980);
var seq19980__$1 = cljs.core.next.call(null,seq19980);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__19981,seq19980__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__19990 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__19990,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__19990,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4655__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4655__auto__)){
var qstr = temp__4655__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stub_ = (function taoensso$encore$_new_stub_(sfn_name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__19991__delegate = function (args){
throw cljs.core.ex_info.call(null,[cljs.core.str("No stubfn implementation for: "),cljs.core.str(sfn_name)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sfn-name","sfn-name",-968697222),sfn_name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__19991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19992__i = 0, G__19992__a = new Array(arguments.length -  0);
while (G__19992__i < G__19992__a.length) {G__19992__a[G__19992__i] = arguments[G__19992__i + 0]; ++G__19992__i;}
  args = new cljs.core.IndexedSeq(G__19992__a,0);
} 
return G__19991__delegate.call(this,args);};
G__19991.cljs$lang$maxFixedArity = 0;
G__19991.cljs$lang$applyTo = (function (arglist__19993){
var args = cljs.core.seq(arglist__19993);
return G__19991__delegate(args);
});
G__19991.cljs$core$IFn$_invoke$arity$variadic = G__19991__delegate;
return G__19991;
})()
);
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;
taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG__STAR_;
taoensso.encore.fq_name = taoensso.encore.as_qname;
taoensso.encore.qname = taoensso.encore.as_qname;
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.swapped_STAR_ = taoensso.encore._swapped;
taoensso.encore.swap_val_BANG_ = taoensso.encore._swap_cache_BANG_;
taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;
taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;
taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;
taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__7286__auto__ = [];
var len__7279__auto___19998 = arguments.length;
var i__7280__auto___19999 = (0);
while(true){
if((i__7280__auto___19999 < len__7279__auto___19998)){
args__7286__auto__.push((arguments[i__7280__auto___19999]));

var G__20000 = (i__7280__auto___19999 + (1));
i__7280__auto___19999 = G__20000;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__19996){
var vec__19997 = p__19996;
var type = cljs.core.nth.call(null,vec__19997,(0),null);
var nplaces = cljs.core.nth.call(null,vec__19997,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__6210__auto__ = type;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq19994){
var G__19995 = cljs.core.first.call(null,seq19994);
var seq19994__$1 = cljs.core.next.call(null,seq19994);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__19995,seq19994__$1);
});
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20003 = arguments.length;
var i__7280__auto___20004 = (0);
while(true){
if((i__7280__auto___20004 < len__7279__auto___20003)){
args__7286__auto__.push((arguments[i__7280__auto___20004]));

var G__20005 = (i__7280__auto___20004 + (1));
i__7280__auto___20004 = G__20005;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return cljs.core.apply.call(null,taoensso.encore.str_join_once,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq20001){
var G__20002 = cljs.core.first.call(null,seq20001);
var seq20001__$1 = cljs.core.next.call(null,seq20001);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__20002,seq20001__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__20006__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__20006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20007__i = 0, G__20007__a = new Array(arguments.length -  0);
while (G__20007__i < G__20007__a.length) {G__20007__a[G__20007__i] = arguments[G__20007__i + 0]; ++G__20007__i;}
  args = new cljs.core.IndexedSeq(G__20007__a,0);
} 
return G__20006__delegate.call(this,args);};
G__20006.cljs$lang$maxFixedArity = 0;
G__20006.cljs$lang$applyTo = (function (arglist__20008){
var args = cljs.core.seq(arglist__20008);
return G__20006__delegate(args);
});
G__20006.cljs$core$IFn$_invoke$arity$variadic = G__20006__delegate;
return G__20006;
})()
;
;})(rl))
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20013 = arguments.length;
var i__7280__auto___20014 = (0);
while(true){
if((i__7280__auto___20014 < len__7279__auto___20013)){
args__7286__auto__.push((arguments[i__7280__auto___20014]));

var G__20015 = (i__7280__auto___20014 + (1));
i__7280__auto___20014 = G__20015;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__20011){
var vec__20012 = p__20011;
var nattempt = cljs.core.nth.call(null,vec__20012,(0),null);
var temp__4657__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__4657__auto__)){
var js_win = temp__4657__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__6210__auto__ = nattempt;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq20009){
var G__20010 = cljs.core.first.call(null,seq20009);
var seq20009__$1 = cljs.core.next.call(null,seq20009);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20010,seq20009__$1);
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20030 = arguments.length;
var i__7280__auto___20031 = (0);
while(true){
if((i__7280__auto___20031 < len__7279__auto___20030)){
args__7286__auto__.push((arguments[i__7280__auto___20031]));

var G__20032 = (i__7280__auto___20031 + (1));
i__7280__auto___20031 = G__20032;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq20016){
var G__20017 = cljs.core.first.call(null,seq20016);
var seq20016__$1 = cljs.core.next.call(null,seq20016);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__20017,seq20016__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20033 = arguments.length;
var i__7280__auto___20034 = (0);
while(true){
if((i__7280__auto___20034 < len__7279__auto___20033)){
args__7286__auto__.push((arguments[i__7280__auto___20034]));

var G__20035 = (i__7280__auto___20034 + (1));
i__7280__auto___20034 = G__20035;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq20018){
var G__20019 = cljs.core.first.call(null,seq20018);
var seq20018__$1 = cljs.core.next.call(null,seq20018);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__20019,seq20018__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20036 = arguments.length;
var i__7280__auto___20037 = (0);
while(true){
if((i__7280__auto___20037 < len__7279__auto___20036)){
args__7286__auto__.push((arguments[i__7280__auto___20037]));

var G__20038 = (i__7280__auto___20037 + (1));
i__7280__auto___20037 = G__20038;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq20020){
var G__20021 = cljs.core.first.call(null,seq20020);
var seq20020__$1 = cljs.core.next.call(null,seq20020);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__20021,seq20020__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20039 = arguments.length;
var i__7280__auto___20040 = (0);
while(true){
if((i__7280__auto___20040 < len__7279__auto___20039)){
args__7286__auto__.push((arguments[i__7280__auto___20040]));

var G__20041 = (i__7280__auto___20040 + (1));
i__7280__auto___20040 = G__20041;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq20022){
var G__20023 = cljs.core.first.call(null,seq20022);
var seq20022__$1 = cljs.core.next.call(null,seq20022);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__20023,seq20022__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20042 = arguments.length;
var i__7280__auto___20043 = (0);
while(true){
if((i__7280__auto___20043 < len__7279__auto___20042)){
args__7286__auto__.push((arguments[i__7280__auto___20043]));

var G__20044 = (i__7280__auto___20043 + (1));
i__7280__auto___20043 = G__20044;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq20024){
var G__20025 = cljs.core.first.call(null,seq20024);
var seq20024__$1 = cljs.core.next.call(null,seq20024);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__20025,seq20024__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20045 = arguments.length;
var i__7280__auto___20046 = (0);
while(true){
if((i__7280__auto___20046 < len__7279__auto___20045)){
args__7286__auto__.push((arguments[i__7280__auto___20046]));

var G__20047 = (i__7280__auto___20046 + (1));
i__7280__auto___20046 = G__20047;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq20026){
var G__20027 = cljs.core.first.call(null,seq20026);
var seq20026__$1 = cljs.core.next.call(null,seq20026);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__20027,seq20026__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20048 = arguments.length;
var i__7280__auto___20049 = (0);
while(true){
if((i__7280__auto___20049 < len__7279__auto___20048)){
args__7286__auto__.push((arguments[i__7280__auto___20049]));

var G__20050 = (i__7280__auto___20049 + (1));
i__7280__auto___20049 = G__20050;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq20028){
var G__20029 = cljs.core.first.call(null,seq20028);
var seq20028__$1 = cljs.core.next.call(null,seq20028);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__20029,seq20028__$1);
});
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20057 = arguments.length;
var i__7280__auto___20058 = (0);
while(true){
if((i__7280__auto___20058 < len__7279__auto___20057)){
args__7286__auto__.push((arguments[i__7280__auto___20058]));

var G__20059 = (i__7280__auto___20058 + (1));
i__7280__auto___20058 = G__20059;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__20055){
var vec__20056 = p__20055;
var _QMARK_comparator = cljs.core.nth.call(null,vec__20056,(0),null);
var comparator = (function (){var or__6210__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__20056,_QMARK_comparator){
return (function (p1__20051_SHARP_,p2__20052_SHARP_){
if((comparator.call(null,p1__20051_SHARP_,p2__20052_SHARP_) > (0))){
return p2__20052_SHARP_;
} else {
return p1__20051_SHARP_;
}
});})(comparator,vec__20056,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq20053){
var G__20054 = cljs.core.first.call(null,seq20053);
var seq20053__$1 = cljs.core.next.call(null,seq20053);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__20054,seq20053__$1);
});
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20066 = arguments.length;
var i__7280__auto___20067 = (0);
while(true){
if((i__7280__auto___20067 < len__7279__auto___20066)){
args__7286__auto__.push((arguments[i__7280__auto___20067]));

var G__20068 = (i__7280__auto___20067 + (1));
i__7280__auto___20067 = G__20068;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__20064){
var vec__20065 = p__20064;
var _QMARK_comparator = cljs.core.nth.call(null,vec__20065,(0),null);
var comparator = (function (){var or__6210__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__20065,_QMARK_comparator){
return (function (p1__20060_SHARP_,p2__20061_SHARP_){
if((comparator.call(null,p1__20060_SHARP_,p2__20061_SHARP_) < (0))){
return p2__20061_SHARP_;
} else {
return p1__20060_SHARP_;
}
});})(comparator,vec__20065,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq20062){
var G__20063 = cljs.core.first.call(null,seq20062);
var seq20062__$1 = cljs.core.next.call(null,seq20062);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__20063,seq20062__$1);
});
/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__6210__auto__ = x;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__20075,seen__$1){
while(true){
var vec__20076 = p__20075;
var v = cljs.core.nth.call(null,vec__20076,(0),null);
var xs__$1 = vec__20076;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__20077 = cljs.core.rest.call(null,s);
var G__20078 = seen__$1;
p__20075 = G__20077;
seen__$1 = G__20078;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args20079 = [];
var len__7279__auto___20084 = arguments.length;
var i__7280__auto___20085 = (0);
while(true){
if((i__7280__auto___20085 < len__7279__auto___20084)){
args20079.push((arguments[i__7280__auto___20085]));

var G__20086 = (i__7280__auto___20085 + (1));
i__7280__auto___20085 = G__20086;
continue;
} else {
}
break;
}

var G__20081 = args20079.length;
switch (G__20081) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20079.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__20082,in$){
var vec__20083 = p__20082;
var v = cljs.core.nth.call(null,vec__20083,(0),null);
var seen = cljs.core.nth.call(null,vec__20083,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf
);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf
));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20092 = arguments.length;
var i__7280__auto___20093 = (0);
while(true){
if((i__7280__auto___20093 < len__7279__auto___20092)){
args__7286__auto__.push((arguments[i__7280__auto___20093]));

var G__20094 = (i__7280__auto___20093 + (1));
i__7280__auto___20093 = G__20094;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__20090){
var vec__20091 = p__20090;
var kf = cljs.core.nth.call(null,vec__20091,(0),null);
var vf = cljs.core.nth.call(null,vec__20091,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__20091,kf,vf){
return (function (_,v){
return v;
});})(vec__20091,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__20091,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__20091,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__20091,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__20091,kf,vf))
:kf
));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__20091,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__20091,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq20088){
var G__20089 = cljs.core.first.call(null,seq20088);
var seq20088__$1 = cljs.core.next.call(null,seq20088);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__20089,seq20088__$1);
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});

//# sourceMappingURL=encore.js.map