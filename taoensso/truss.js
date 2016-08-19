// Compiled by ClojureScript 1.8.40 {}
goog.provide('taoensso.truss');
goog.require('cljs.core');
goog.require('taoensso.truss.impl');
/**
 * Returns current value of dynamic assertion data
 */
taoensso.truss.get_dynamic_assertion_data = (function taoensso$truss$get_dynamic_assertion_data(){
return taoensso.truss.impl._STAR___QMARK_data_STAR_;
});
taoensso.truss._error_fn = (function taoensso$truss$_error_fn(f){
if(cljs.core._EQ_.call(null,f,new cljs.core.Keyword(null,"default","default",-1987822328))){
return (function (msg,data_map){
throw cljs.core.ex_info.call(null,msg,data_map);
});
} else {
return f;
}
});
/**
 * Sets the root (fn [msg data-map]) called on invariant violations.
 *   Defaults to (fn [msg data-map] (throw (ex-info msg data-map))).
 */
taoensso.truss.set_error_fn_BANG_ = (function taoensso$truss$set_error_fn_BANG_(f){
return taoensso.truss.impl._STAR_error_fn_STAR_ = taoensso.truss._error_fn.call(null,f);
});

//# sourceMappingURL=truss.js.map