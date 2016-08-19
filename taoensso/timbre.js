// Compiled by ClojureScript 1.8.40 {}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(33),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.33);
}
/**
 * Default (fn [data]) -> string output fn.
 *   You can modify default options with `(partial default-output-fn <opts-map>)`.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var args20916 = [];
var len__7279__auto___20924 = arguments.length;
var i__7280__auto___20925 = (0);
while(true){
if((i__7280__auto___20925 < len__7279__auto___20924)){
args20916.push((arguments[i__7280__auto___20925]));

var G__20926 = (i__7280__auto___20925 + (1));
i__7280__auto___20925 = G__20926;
continue;
} else {
}
break;
}

var G__20918 = args20916.length;
switch (G__20918) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20916.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.call(null,null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (p__20919,data){
var map__20920 = p__20919;
var map__20920__$1 = ((((!((map__20920 == null)))?((((map__20920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20920):map__20920);
var opts = map__20920__$1;
var no_stacktrace_QMARK_ = cljs.core.get.call(null,map__20920__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.call(null,map__20920__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__20922 = data;
var map__20922__$1 = ((((!((map__20922 == null)))?((((map__20922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20922):map__20922);
var level = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err_ = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"?err_","?err_",789480858));
var vargs_ = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var msg_ = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var hostname_ = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,level))),cljs.core.str(" "),cljs.core.str("["),cljs.core.str((function (){var or__6210__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "?";
}
})()),cljs.core.str(":"),cljs.core.str((function (){var or__6210__auto__ = _QMARK_line;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "?";
}
})()),cljs.core.str("] - "),cljs.core.str(cljs.core.force.call(null,msg_)),cljs.core.str((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__4657__auto__ = cljs.core.force.call(null,_QMARK_err_);
if(cljs.core.truth_(temp__4657__auto__)){
var err = temp__4657__auto__;
return [cljs.core.str("\n"),cljs.core.str(taoensso.timbre.stacktrace.call(null,err,opts))].join('');
} else {
return null;
}
})()))].join('');
});

taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2;

taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Example (+default) Timbre v4 config map.
 * 
 *   APPENDERS
 *  An appender is a map with keys:
 *    :min-level       ; Level keyword, or nil (=> no minimum level)
 *    :enabled?        ;
 *    :async?          ; Dispatch using agent? Useful for slow appenders
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 * 
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String, or nil
 *    :?file           ; String, or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 * 
 *    :?err_           ; Delay - first-arg platform error, or nil
 *    :vargs_          ; Delay - raw args vector
 *    :hostname_       ; Delay - string (clj only)
 *    :msg_            ; Delay - args string
 *    :timestamp_      ; Delay - string
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 * 
 *    :context         ; *context* value at log time (see `with-context`)
 *    :profile-stats   ; From `profile` macro
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware returns
 *  nil, NO dispatching will occur (i.e. the event will be filtered).
 * 
 *   The `example-config` source code contains further settings and details.
 *   See also `set-config!`, `merge-config!`, `set-level!`.
 */
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
 * See `example-config` for info.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20930 = arguments.length;
var i__7280__auto___20931 = (0);
while(true){
if((i__7280__auto___20931 < len__7279__auto___20930)){
args__7286__auto__.push((arguments[i__7280__auto___20931]));

var G__20932 = (i__7280__auto___20931 + (1));
i__7280__auto___20931 = G__20932;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.call(null,f,taoensso.timbre._STAR_config_STAR_,args);
});

taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq20928){
var G__20929 = cljs.core.first.call(null,seq20928);
var seq20928__$1 = cljs.core.next.call(null,seq20928);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20929,seq20928__$1);
});
taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.encore.nested_merge.call(null,old,m);
}));
});
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (m){
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));
}));
});
taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
taoensso.timbre.scored_levels = cljs.core.zipmap.call(null,taoensso.timbre.ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
taoensso.timbre.valid_levels = cljs.core.set.call(null,taoensso.timbre.ordered_levels);
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(level){
var or__6210__auto__ = taoensso.timbre.valid_levels.call(null,level);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid logging level: "),cljs.core.str(level)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (cljs.core.long$.call(null,taoensso.timbre.scored_levels.call(null,taoensso.timbre.valid_level.call(null,x))) >= cljs.core.long$.call(null,taoensso.timbre.scored_levels.call(null,taoensso.timbre.valid_level.call(null,y))));
});
/**
 * (fn [whitelist blacklist]) -> (fn [ns]) -> ?unfiltered-ns
 */
taoensso.timbre.compile_ns_filters = (function (){var __GT_re_pattern = (function (x){
if(cljs.core.truth_(taoensso.encore.re_pattern_QMARK_.call(null,x))){
return x;
} else {
if(typeof x === 'string'){
var s = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)");
return cljs.core.re_pattern.call(null,s);
} else {
throw cljs.core.ex_info.call(null,"No matching clause",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
return taoensso.encore.memoize_.call(null,((function (__GT_re_pattern){
return (function (whitelist,blacklist){
var whitelist_STAR_ = cljs.core.mapv.call(null,__GT_re_pattern,whitelist);
var blacklist_STAR_ = cljs.core.mapv.call(null,__GT_re_pattern,blacklist);
var white_filter = ((cljs.core.empty_QMARK_.call(null,whitelist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return cljs.core.some.call(null,((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (p1__20933_SHARP_){
return cljs.core.re_find.call(null,p1__20933_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
,whitelist_STAR_);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))

);
var black_filter = ((cljs.core.empty_QMARK_.call(null,blacklist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return cljs.core.not.call(null,cljs.core.some.call(null,((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (p1__20934_SHARP_){
return cljs.core.re_find.call(null,p1__20934_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
,blacklist_STAR_));
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))

);
return ((function (whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern){
return (function (ns){
if(cljs.core.truth_((function (){var and__6198__auto__ = white_filter.call(null,ns);
if(cljs.core.truth_(and__6198__auto__)){
return black_filter.call(null,ns);
} else {
return and__6198__auto__;
}
})())){
return ns;
} else {
return null;
}
});
;})(whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern))
});})(__GT_re_pattern))
);
})();
/**
 * (fn [whitelist blacklist ns]) -> ?unfiltered-ns
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_.call(null,(function (whitelist,blacklist,ns){
if(cljs.core.truth_((function (){var __x = ns;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e20935){if((e20935 instanceof Error)){
var __t = e20935;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",null,"(string? ns)",__x,__t,null);
} else {
throw e20935;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? ns)"));
}

return taoensso.timbre.compile_ns_filters.call(null,whitelist,blacklist).call(null,ns);
}));
taoensso.timbre.__GT_delay = (function taoensso$timbre$__GT_delay(x){
if(cljs.core.delay_QMARK_.call(null,x)){
return x;
} else {
return (new cljs.core.Delay((function (){
return x;
}),null));
}
});
taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,(function (x){
var x__$1 = taoensso.encore.nil__GT_str.call(null,x);
if(cljs.core.record_QMARK_.call(null,x__$1)){
return cljs.core.pr_str.call(null,x__$1);
} else {
return x__$1;

}
})),xs);
});
/**
 * Used for rate limiters, some appenders (e.g. Carmine), etc.
 *   Goal: (hash data-1) = (hash data-2) iff data-1 "the same" as data-2 for
 *   rate-limiting purposes, etc.
 */
taoensso.timbre.default_data_hash_fn = (function taoensso$timbre$default_data_hash_fn(data){
var map__20938 = data;
var map__20938__$1 = ((((!((map__20938 == null)))?((((map__20938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20938):map__20938);
var _QMARK_hash_arg = cljs.core.get.call(null,map__20938__$1,new cljs.core.Keyword(null,"?hash-arg","?hash-arg",1219916229));
var _QMARK_ns_str = cljs.core.get.call(null,map__20938__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_line = cljs.core.get.call(null,map__20938__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
var vargs_ = cljs.core.get.call(null,map__20938__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
return [cljs.core.str((function (){var or__6210__auto__ = _QMARK_hash_arg;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_ns_str,(function (){var or__6210__auto____$1 = _QMARK_line;
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
return cljs.core.deref.call(null,vargs_);
}
})()], null);
}
})())].join('');
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_.call(null,(function (appender_id,specs){
return taoensso.encore.rate_limiter_STAR_.call(null,specs);
}));
}
taoensso.timbre.inherit_over = (function taoensso$timbre$inherit_over(k,appender,config,default$){
var or__6210__auto__ = (function (){var a = cljs.core.get.call(null,appender,k);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))){
return null;
} else {
return a;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.get.call(null,config,k);
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
return default$;
}
}
});
taoensso.timbre.inherit_into = (function taoensso$timbre$inherit_into(k,appender,config,default$){
return cljs.core.merge.call(null,default$,cljs.core.get.call(null,config,k),(function (){var a = cljs.core.get.call(null,appender,k);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))){
return null;
} else {
return a;
}
})());
});
/**
 * General-purpose dynamic logging context. Context will be included in appender
 *   data map at logging time.
 */
taoensso.timbre._STAR_context_STAR_ = null;
/**
 * Runtime check: would Timbre currently log at the given logging level?
 *  * `?ns-str` arg required to support ns filtering
 *  * `config`  arg required to support non-global config
 */
taoensso.timbre.log_QMARK_ = (function taoensso$timbre$log_QMARK_(var_args){
var args20940 = [];
var len__7279__auto___20943 = arguments.length;
var i__7280__auto___20944 = (0);
while(true){
if((i__7280__auto___20944 < len__7279__auto___20943)){
args20940.push((arguments[i__7280__auto___20944]));

var G__20945 = (i__7280__auto___20944 + (1));
i__7280__auto___20944 = G__20945;
continue;
} else {
}
break;
}

var G__20942 = args20940.length;
switch (G__20942) {
case 1:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20940.length)].join('')));

}
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.log_QMARK_.call(null,level,null,null);
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.log_QMARK_.call(null,level,_QMARK_ns_str,null);
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,config){
var config__$1 = (function (){var or__6210__auto__ = config;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var active_level = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"report","report",1394055010);
}
})();
var and__6198__auto__ = taoensso.timbre.level_GT__EQ_.call(null,level,active_level);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = taoensso.timbre.ns_filter.call(null,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774).cljs$core$IFn$_invoke$arity$1(config__$1),new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142).cljs$core$IFn$_invoke$arity$1(config__$1),(function (){var or__6210__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "";
}
})());
if(cljs.core.truth_(and__6198__auto____$1)){
return true;
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
});

taoensso.timbre.log_QMARK_.cljs$lang$maxFixedArity = 3;
/**
 * Processes vargs to extract special a0s
 */
taoensso.timbre.vargs__GT_margs = (function taoensso$timbre$vargs__GT_margs(vargs,a0_err_QMARK_){
var vec__20951 = vargs;
var v0 = cljs.core.nth.call(null,vec__20951,(0),null);
var v = vec__20951;
var vec__20952 = (cljs.core.truth_((function (){var and__6198__auto__ = a0_err_QMARK_;
if(cljs.core.truth_(and__6198__auto__)){
return taoensso.encore.error_QMARK_.call(null,v0);
} else {
return and__6198__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,taoensso.encore.vnext.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
var _QMARK_err = cljs.core.nth.call(null,vec__20952,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__20952,(1),null);
var vec__20953 = v__$1;
var v0__$1 = cljs.core.nth.call(null,vec__20953,(0),null);
var v__$2 = vec__20953;
var vec__20954 = (((cljs.core.map_QMARK_.call(null,v0__$1)) && (cljs.core.contains_QMARK_.call(null,v0__$1,new cljs.core.Keyword("timbre","hash","timbre/hash",-221081827))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timbre","hash","timbre/hash",-221081827).cljs$core$IFn$_invoke$arity$1(v0__$1),taoensso.encore.vnext.call(null,v__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v__$2], null));
var _QMARK_hash_arg = cljs.core.nth.call(null,vec__20954,(0),null);
var v__$3 = cljs.core.nth.call(null,vec__20954,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err,new cljs.core.Keyword(null,"?hash-arg","?hash-arg",1219916229),_QMARK_hash_arg,new cljs.core.Keyword(null,"vargs","vargs",-966597273),v__$3], null);
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
if(cljs.core.truth_(taoensso.timbre.log_QMARK_.call(null,level,_QMARK_ns_str,config))){
var instant_20965 = taoensso.encore.now_dt.call(null);
var context_20966 = taoensso.timbre._STAR_context_STAR_;
var a0_err_QMARK__20967 = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492));
var margs__20968 = (new cljs.core.Delay(((function (instant_20965,context_20966,a0_err_QMARK__20967){
return (function (){
return taoensso.timbre.vargs__GT_margs.call(null,cljs.core.deref.call(null,vargs_),a0_err_QMARK__20967);
});})(instant_20965,context_20966,a0_err_QMARK__20967))
,null));
var _QMARK_err__20969 = (new cljs.core.Delay(((function (instant_20965,context_20966,a0_err_QMARK__20967,margs__20968){
return (function (){
if(cljs.core.truth_(a0_err_QMARK__20967)){
return new cljs.core.Keyword(null,"?err","?err",549653299).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,margs__20968));
} else {
return _QMARK_err;
}
});})(instant_20965,context_20966,a0_err_QMARK__20967,margs__20968))
,null));
var _QMARK_hash_arg__20970 = (new cljs.core.Delay(((function (instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969){
return (function (){
return new cljs.core.Keyword(null,"?hash-arg","?hash-arg",1219916229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,margs__20968));
});})(instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969))
,null));
var vargs__20971__$1 = (new cljs.core.Delay(((function (instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970){
return (function (){
return new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,margs__20968));
});})(instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970))
,null));
var data_20972 = cljs.core.merge.call(null,_QMARK_base_data,((cljs.core.map_QMARK_.call(null,context_20966))?context_20966:null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"vargs_","vargs_",552132148),new cljs.core.Keyword(null,"?hash-arg_","?hash-arg_",-1971558602),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858)],[instant_20965,config,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,level),_QMARK_ns_str,level,vargs__20971__$1,_QMARK_hash_arg__20970,context_20966,_QMARK_line,_QMARK_err__20969]));
var msg_fn_20973 = ((function (instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972){
return (function (vargs___$2){
if((msg_type == null)){
return null;
} else {
var temp__4657__auto__ = (function (){var __x = (function (){try{return cljs.core.deref.call(null,vargs___$2);
}catch (e20960){if((e20960 instanceof Error)){
var __t = e20960;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",null,"([:or nil? vector?] (clojure.core/deref vargs_))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e20960;

}
}})();
if(cljs.core.truth_(((function (__x,instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972){
return (function (__x__$1){
var or__6210__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.vector_QMARK_).call(null,__x__$1);
}
});})(__x,instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972))
.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",null,"([:or nil? vector?] (clojure.core/deref vargs_))",__x,null,null);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var vargs = temp__4657__auto__;
var G__20961 = (((msg_type instanceof cljs.core.Keyword))?msg_type.fqn:null);
switch (G__20961) {
case "p":
return taoensso.timbre.str_join.call(null,vargs);

break;
case "f":
var vec__20962 = taoensso.encore.vsplit_first.call(null,vargs);
var fmt = cljs.core.nth.call(null,vec__20962,(0),null);
var args = cljs.core.nth.call(null,vec__20962,(1),null);
return taoensso.encore.format_STAR_.call(null,fmt,args);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
} else {
return null;
}
}
});})(instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972))
;
var _QMARK_data_20974 = cljs.core.reduce.call(null,((function (instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972,msg_fn_20973){
return (function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
});})(instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972,msg_fn_20973))
,data_20972,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var _QMARK_data_20975__$1 = (function (){var temp__4657__auto__ = _QMARK_data_20974;
if(cljs.core.truth_(temp__4657__auto__)){
var data__$1 = temp__4657__auto__;
return cljs.core.merge.call(null,data__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?err_","?err_",789480858),taoensso.timbre.__GT_delay.call(null,new cljs.core.Keyword(null,"?err_","?err_",789480858).cljs$core$IFn$_invoke$arity$1(data__$1)),new cljs.core.Keyword(null,"?hash-arg_","?hash-arg_",-1971558602),taoensso.timbre.__GT_delay.call(null,new cljs.core.Keyword(null,"?hash-arg_","?hash-arg_",-1971558602).cljs$core$IFn$_invoke$arity$1(data__$1)),new cljs.core.Keyword(null,"vargs_","vargs_",552132148),taoensso.timbre.__GT_delay.call(null,new cljs.core.Keyword(null,"vargs_","vargs_",552132148).cljs$core$IFn$_invoke$arity$1(data__$1))], null));
} else {
return null;
}
})();
var temp__4657__auto___20977 = _QMARK_data_20975__$1;
if(cljs.core.truth_(temp__4657__auto___20977)){
var data_20978__$1 = temp__4657__auto___20977;
cljs.core.reduce_kv.call(null,((function (data_20978__$1,temp__4657__auto___20977,instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972,msg_fn_20973,_QMARK_data_20974,_QMARK_data_20975__$1){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__6198__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__6198__auto__)){
return taoensso.timbre.level_GT__EQ_.call(null,level,(function (){var or__6210__auto__ = new cljs.core.Keyword(null,"min-level","min-level",1634684919).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"trace","trace",-1082747415);
}
})());
} else {
return and__6198__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var data_hash_fn = taoensso.timbre.inherit_over.call(null,new cljs.core.Keyword(null,"data-hash-fn","data-hash-fn",1552406760),appender,config,taoensso.timbre.default_data_hash_fn);
var rate_limit_okay_QMARK_ = (function (){var or__6210__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__6210__auto__){
return or__6210__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
var data_hash = data_hash_fn.call(null,data_20978__$1);
return cljs.core.not.call(null,rl_fn.call(null,data_hash));
}
})();
if(rate_limit_okay_QMARK_){
var map__20963 = appender;
var map__20963__$1 = ((((!((map__20963 == null)))?((((map__20963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20963):map__20963);
var apfn = cljs.core.get.call(null,map__20963__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.call(null,map__20963__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var msg_ = (new cljs.core.Delay(((function (map__20963,map__20963__$1,apfn,async_QMARK_,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_20978__$1,temp__4657__auto___20977,instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972,msg_fn_20973,_QMARK_data_20974,_QMARK_data_20975__$1){
return (function (){
return msg_fn_20973.call(null,new cljs.core.Keyword(null,"vargs_","vargs_",552132148).cljs$core$IFn$_invoke$arity$1(data_20978__$1));
});})(map__20963,map__20963__$1,apfn,async_QMARK_,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_20978__$1,temp__4657__auto___20977,instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972,msg_fn_20973,_QMARK_data_20974,_QMARK_data_20975__$1))
,null));
var output_fn = taoensso.timbre.inherit_over.call(null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),appender,config,taoensso.timbre.default_output_fn);
var data__$2 = cljs.core.merge.call(null,data_20978__$1,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),msg_,new cljs.core.Keyword(null,"msg-fn","msg-fn",-1873033940),msg_fn_20973,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"data-hash-fn","data-hash-fn",1552406760),data_hash_fn], null));
if(cljs.core.not.call(null,async_QMARK_)){
return apfn.call(null,data__$2);
} else {
return apfn.call(null,data__$2);
}
} else {
return null;
}
} else {
return null;
}
});})(data_20978__$1,temp__4657__auto___20977,instant_20965,context_20966,a0_err_QMARK__20967,margs__20968,_QMARK_err__20969,_QMARK_hash_arg__20970,vargs__20971__$1,data_20972,msg_fn_20973,_QMARK_data_20974,_QMARK_data_20975__$1))
,null,taoensso.encore.clj1098.call(null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config)));
} else {
}
} else {
}

return null;
});
taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,and_form));
});
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20985 = arguments.length;
var i__7280__auto___20986 = (0);
while(true){
if((i__7280__auto___20986 < len__7279__auto___20985)){
args__7286__auto__.push((arguments[i__7280__auto___20986]));

var G__20987 = (i__7280__auto___20986 + (1));
i__7280__auto___20986 = G__20987;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic = (function (err,p__20981){
var vec__20982 = p__20981;
var map__20983 = cljs.core.nth.call(null,vec__20982,(0),null);
var map__20983__$1 = ((((!((map__20983 == null)))?((((map__20983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20983):map__20983);
var opts = map__20983__$1;
var stacktrace_fonts = cljs.core.get.call(null,map__20983__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
return [cljs.core.str(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = (1);

taoensso.timbre.stacktrace.cljs$lang$applyTo = (function (seq20979){
var G__20980 = cljs.core.first.call(null,seq20979);
var seq20979__$1 = cljs.core.next.call(null,seq20979);
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic(G__20980,seq20979__$1);
});
taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.log_QMARK_.call(null,level,[cljs.core.str(compile_time_ns)].join(''));
});
taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__7286__auto__ = [];
var len__7279__auto___20989 = arguments.length;
var i__7280__auto___20990 = (0);
while(true){
if((i__7280__auto___20990 < len__7279__auto___20989)){
args__7286__auto__.push((arguments[i__7280__auto___20990]));

var G__20991 = (i__7280__auto___20990 + (1));
i__7280__auto___20990 = G__20991;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.call(null,xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq20988){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20988));
});

//# sourceMappingURL=timbre.js.map