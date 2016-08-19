// Compiled by ClojureScript 1.8.40 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__20995 = x;
var ev_id = cljs.core.nth.call(null,vec__20995,(0),null);
var _ = cljs.core.nth.call(null,vec__20995,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_fmt = [cljs.core.str((function (){var G__20997 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__20997) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__6198__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6198__auto__){
var and__6198__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__6198__auto____$1)){
var map__21001 = x;
var map__21001__$1 = ((((!((map__21001 == null)))?((((map__21001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21001):map__21001);
var ch_recv = cljs.core.get.call(null,map__21001__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__21001__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__21001__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__21001__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__6198__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__6198__auto____$2)){
var and__6198__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__6198__auto____$3){
var and__6198__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__6198__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__6198__auto____$4;
}
} else {
return and__6198__auto____$3;
}
} else {
return and__6198__auto____$2;
}
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__6198__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6198__auto__){
var and__6198__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__6198__auto____$1)){
var map__21005 = x;
var map__21005__$1 = ((((!((map__21005 == null)))?((((map__21005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21005):map__21005);
var ch_recv = cljs.core.get.call(null,map__21005__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__21005__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__21005__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__21005__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__21005__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__21005__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__21005__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__6198__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__6198__auto____$2)){
var and__6198__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__6198__auto____$3){
var and__6198__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__6198__auto____$4)){
var and__6198__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__6198__auto____$5){
var and__6198__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__6198__auto____$6)){
var and__6198__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__6198__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__6198__auto____$7;
}
} else {
return and__6198__auto____$6;
}
} else {
return and__6198__auto____$5;
}
} else {
return and__6198__auto____$4;
}
} else {
return and__6198__auto____$3;
}
} else {
return and__6198__auto____$2;
}
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__21007){
var map__21011 = p__21007;
var map__21011__$1 = ((((!((map__21011 == null)))?((((map__21011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21011):map__21011);
var ev_msg = map__21011__$1;
var event = cljs.core.get.call(null,map__21011__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__21011__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__21013 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__21013,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__21013,(1),null);
var valid_event = vec__21013;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__21013,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__21011,map__21011__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__21013,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__21011,map__21011__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21017){if((e21017 instanceof Error)){
var __t = e21017;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e21017;

}
}})());
}catch (e21016){var t = e21016;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init6538590780941563597.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args21018 = [];
var len__7279__auto___21021 = arguments.length;
var i__7280__auto___21022 = (0);
while(true){
if((i__7280__auto___21022 < len__7279__auto___21021)){
args21018.push((arguments[i__7280__auto___21022]));

var G__21023 = (i__7280__auto___21022 + (1));
i__7280__auto___21022 = G__21023;
continue;
} else {
}
break;
}

var G__21020 = args21018.length;
switch (G__21020) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21018.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__7286__auto__ = [];
var len__7279__auto___21026 = arguments.length;
var i__7280__auto___21027 = (0);
while(true){
if((i__7280__auto___21027 < len__7279__auto___21026)){
args__7286__auto__.push((arguments[i__7280__auto___21027]));

var G__21028 = (i__7280__auto___21027 + (1));
i__7280__auto___21027 = G__21028;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq21025){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21025));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_21035 = prefixed_pstr;
try{if(typeof __x_21035 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21032){if((e21032 instanceof Error)){
var __t_21036 = e21032;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_21035,__t_21036,null);
} else {
throw e21032;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__21034 = prefix;
switch (G__21034) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__21033 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__21033,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__21033,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__21033,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__21033,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation (experimental).
 * 
 *   [1] e.g. `taoensso.sente.server-adapters.http-kit/http-kit-adapter` or
 *         `taoensso.sente.server-adapters.immutant/immutant-adapter`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___21207 = arguments.length;
var i__7280__auto___21208 = (0);
while(true){
if((i__7280__auto___21208 < len__7279__auto___21207)){
args__7286__auto__.push((arguments[i__7280__auto___21208]));

var G__21209 = (i__7280__auto___21208 + (1));
i__7280__auto___21208 = G__21209;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__21041){
var vec__21042 = p__21041;
var map__21043 = cljs.core.nth.call(null,vec__21042,(0),null);
var map__21043__$1 = ((((!((map__21043 == null)))?((((map__21043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21043):map__21043);
var recv_buf_or_n = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__6210__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21045){if((e21045 instanceof Error)){
var __t = e21045;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e21045;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21046){if((e21046 instanceof Error)){
var __t = e21046;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e21046;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__21038_SHARP_){
if(!((p1__21038_SHARP_ == null))){
if((false) || (p1__21038_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__21038_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__21038_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__21038_SHARP_);
}
});})(__x,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21047){if((e21047 instanceof Error)){
var __t = e21047;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__21038#] (satisfies? interfaces/IServerChanAdapter p1__21038#)) web-server-adapter)",__x,__t,null);
} else {
throw e21047;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__21038#] (satisfies? interfaces/IServerChanAdapter p1__21038#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__6210__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21049){if((e21049 instanceof Error)){
var __t = e21049;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e21049;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__21050){
var map__21051 = p__21050;
var map__21051__$1 = ((((!((map__21051 == null)))?((((map__21051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21051):map__21051);
var old_m = map__21051__$1;
var ws = cljs.core.get.call(null,map__21051__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__21051__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__21051__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__21053 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21053) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21054){if((e21054 instanceof Error)){
var __t = e21054;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e21054;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__21055){
var map__21056 = p__21055;
var map__21056__$1 = ((((!((map__21056 == null)))?((((map__21056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21056):map__21056);
var old_m = map__21056__$1;
var ws = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__21211__delegate = function (user_id,ev,p__21058){
var vec__21059 = p__21058;
var map__21060 = cljs.core.nth.call(null,vec__21059,(0),null);
var map__21060__$1 = ((((!((map__21060 == null)))?((((map__21060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21060):map__21060);
var opts = map__21060__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__21060__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_21212 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __21213 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_21212,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_21212,ev], null);
});})(uid_21212,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __21214__$1 = (cljs.core.truth_(uid_21212)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __21215__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_21216 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__21217 = ((function (uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__21062 = cljs.core.get.call(null,m,uid_21212);
var ___$3 = cljs.core.nth.call(null,vec__21062,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__21062,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_21216)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_21212),cljs.core.get.call(null,m,uid_21212));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__21063 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__21063,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__21063,(1),null);
var __x_21218 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_21218)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21064){if((e21064 instanceof Error)){
var __t_21219 = e21064;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_21218,__t_21219,null);
} else {
throw e21064;

}
}
var __x_21220 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_21220)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21065){if((e21065 instanceof Error)){
var __t_21221 = e21065;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_21220,__t_21221,null);
} else {
throw e21065;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__21063,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__21063,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__21066 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21066) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_21212,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_21212,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init6538590780941563597.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_21212], null);
});})(uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__21067_21223 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__21068_21224 = null;
var count__21069_21225 = (0);
var i__21070_21226 = (0);
while(true){
if((i__21070_21226 < count__21069_21225)){
var type_21227 = cljs.core._nth.call(null,chunk__21068_21224,i__21070_21226);
flush_buffer_BANG__21217.call(null,type_21227);

var G__21228 = seq__21067_21223;
var G__21229 = chunk__21068_21224;
var G__21230 = count__21069_21225;
var G__21231 = (i__21070_21226 + (1));
seq__21067_21223 = G__21228;
chunk__21068_21224 = G__21229;
count__21069_21225 = G__21230;
i__21070_21226 = G__21231;
continue;
} else {
var temp__4657__auto___21232 = cljs.core.seq.call(null,seq__21067_21223);
if(temp__4657__auto___21232){
var seq__21067_21233__$1 = temp__4657__auto___21232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21067_21233__$1)){
var c__7021__auto___21234 = cljs.core.chunk_first.call(null,seq__21067_21233__$1);
var G__21235 = cljs.core.chunk_rest.call(null,seq__21067_21233__$1);
var G__21236 = c__7021__auto___21234;
var G__21237 = cljs.core.count.call(null,c__7021__auto___21234);
var G__21238 = (0);
seq__21067_21223 = G__21235;
chunk__21068_21224 = G__21236;
count__21069_21225 = G__21237;
i__21070_21226 = G__21238;
continue;
} else {
var type_21239 = cljs.core.first.call(null,seq__21067_21233__$1);
flush_buffer_BANG__21217.call(null,type_21239);

var G__21240 = cljs.core.next.call(null,seq__21067_21233__$1);
var G__21241 = null;
var G__21242 = (0);
var G__21243 = (0);
seq__21067_21223 = G__21240;
chunk__21068_21224 = G__21241;
count__21069_21225 = G__21242;
i__21070_21226 = G__21243;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__21071_21244 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_21212], null))));
var chunk__21072_21245 = null;
var count__21073_21246 = (0);
var i__21074_21247 = (0);
while(true){
if((i__21074_21247 < count__21073_21246)){
var server_ch_21248 = cljs.core._nth.call(null,chunk__21072_21245,i__21074_21247);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_21248);

var G__21249 = seq__21071_21244;
var G__21250 = chunk__21072_21245;
var G__21251 = count__21073_21246;
var G__21252 = (i__21074_21247 + (1));
seq__21071_21244 = G__21249;
chunk__21072_21245 = G__21250;
count__21073_21246 = G__21251;
i__21074_21247 = G__21252;
continue;
} else {
var temp__4657__auto___21253 = cljs.core.seq.call(null,seq__21071_21244);
if(temp__4657__auto___21253){
var seq__21071_21254__$1 = temp__4657__auto___21253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21071_21254__$1)){
var c__7021__auto___21255 = cljs.core.chunk_first.call(null,seq__21071_21254__$1);
var G__21256 = cljs.core.chunk_rest.call(null,seq__21071_21254__$1);
var G__21257 = c__7021__auto___21255;
var G__21258 = cljs.core.count.call(null,c__7021__auto___21255);
var G__21259 = (0);
seq__21071_21244 = G__21256;
chunk__21072_21245 = G__21257;
count__21073_21246 = G__21258;
i__21074_21247 = G__21259;
continue;
} else {
var server_ch_21260 = cljs.core.first.call(null,seq__21071_21254__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_21260);

var G__21261 = cljs.core.next.call(null,seq__21071_21254__$1);
var G__21262 = null;
var G__21263 = (0);
var G__21264 = (0);
seq__21071_21244 = G__21261;
chunk__21072_21245 = G__21262;
count__21073_21246 = G__21263;
i__21074_21247 = G__21264;
continue;
}
} else {
}
}
break;
}

var seq__21075_21265 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_21212], null))));
var chunk__21076_21266 = null;
var count__21077_21267 = (0);
var i__21078_21268 = (0);
while(true){
if((i__21078_21268 < count__21077_21267)){
var vec__21079_21269 = cljs.core._nth.call(null,chunk__21076_21266,i__21078_21268);
var _QMARK_server_ch_21270 = cljs.core.nth.call(null,vec__21079_21269,(0),null);
var __21271__$3 = cljs.core.nth.call(null,vec__21079_21269,(1),null);
var temp__4657__auto___21272 = _QMARK_server_ch_21270;
if(cljs.core.truth_(temp__4657__auto___21272)){
var server_ch_21273 = temp__4657__auto___21272;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_21273);
} else {
}

var G__21274 = seq__21075_21265;
var G__21275 = chunk__21076_21266;
var G__21276 = count__21077_21267;
var G__21277 = (i__21078_21268 + (1));
seq__21075_21265 = G__21274;
chunk__21076_21266 = G__21275;
count__21077_21267 = G__21276;
i__21078_21268 = G__21277;
continue;
} else {
var temp__4657__auto___21278 = cljs.core.seq.call(null,seq__21075_21265);
if(temp__4657__auto___21278){
var seq__21075_21279__$1 = temp__4657__auto___21278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21075_21279__$1)){
var c__7021__auto___21280 = cljs.core.chunk_first.call(null,seq__21075_21279__$1);
var G__21281 = cljs.core.chunk_rest.call(null,seq__21075_21279__$1);
var G__21282 = c__7021__auto___21280;
var G__21283 = cljs.core.count.call(null,c__7021__auto___21280);
var G__21284 = (0);
seq__21075_21265 = G__21281;
chunk__21076_21266 = G__21282;
count__21077_21267 = G__21283;
i__21078_21268 = G__21284;
continue;
} else {
var vec__21080_21285 = cljs.core.first.call(null,seq__21075_21279__$1);
var _QMARK_server_ch_21286 = cljs.core.nth.call(null,vec__21080_21285,(0),null);
var __21287__$3 = cljs.core.nth.call(null,vec__21080_21285,(1),null);
var temp__4657__auto___21288__$1 = _QMARK_server_ch_21286;
if(cljs.core.truth_(temp__4657__auto___21288__$1)){
var server_ch_21289 = temp__4657__auto___21288__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_21289);
} else {
}

var G__21290 = cljs.core.next.call(null,seq__21075_21279__$1);
var G__21291 = null;
var G__21292 = (0);
var G__21293 = (0);
seq__21075_21265 = G__21290;
chunk__21076_21266 = G__21291;
count__21077_21267 = G__21292;
i__21078_21268 = G__21293;
continue;
}
} else {
}
}
break;
}
} else {
var seq__21081_21294 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__21082_21295 = null;
var count__21083_21296 = (0);
var i__21084_21297 = (0);
while(true){
if((i__21084_21297 < count__21083_21296)){
var type_21298 = cljs.core._nth.call(null,chunk__21082_21295,i__21084_21297);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_21298,uid_21212], null),((function (seq__21081_21294,chunk__21082_21295,count__21083_21296,i__21084_21297,type_21298,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_21216], true)], null);
} else {
var vec__21085 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__21085,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__21085,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_21216)], null);
}
});})(seq__21081_21294,chunk__21082_21295,count__21083_21296,i__21084_21297,type_21298,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__21299 = seq__21081_21294;
var G__21300 = chunk__21082_21295;
var G__21301 = count__21083_21296;
var G__21302 = (i__21084_21297 + (1));
seq__21081_21294 = G__21299;
chunk__21082_21295 = G__21300;
count__21083_21296 = G__21301;
i__21084_21297 = G__21302;
continue;
} else {
var temp__4657__auto___21303 = cljs.core.seq.call(null,seq__21081_21294);
if(temp__4657__auto___21303){
var seq__21081_21304__$1 = temp__4657__auto___21303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21081_21304__$1)){
var c__7021__auto___21305 = cljs.core.chunk_first.call(null,seq__21081_21304__$1);
var G__21306 = cljs.core.chunk_rest.call(null,seq__21081_21304__$1);
var G__21307 = c__7021__auto___21305;
var G__21308 = cljs.core.count.call(null,c__7021__auto___21305);
var G__21309 = (0);
seq__21081_21294 = G__21306;
chunk__21082_21295 = G__21307;
count__21083_21296 = G__21308;
i__21084_21297 = G__21309;
continue;
} else {
var type_21310 = cljs.core.first.call(null,seq__21081_21304__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_21310,uid_21212], null),((function (seq__21081_21294,chunk__21082_21295,count__21083_21296,i__21084_21297,type_21310,seq__21081_21304__$1,temp__4657__auto___21303,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_21216], true)], null);
} else {
var vec__21086 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__21086,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__21086,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_21216)], null);
}
});})(seq__21081_21294,chunk__21082_21295,count__21083_21296,i__21084_21297,type_21310,seq__21081_21304__$1,temp__4657__auto___21303,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__21311 = cljs.core.next.call(null,seq__21081_21304__$1);
var G__21312 = null;
var G__21313 = (0);
var G__21314 = (0);
seq__21081_21294 = G__21311;
chunk__21082_21295 = G__21312;
count__21083_21296 = G__21313;
i__21084_21297 = G__21314;
continue;
}
} else {
}
}
break;
}

var c__10112__auto___21315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10112__auto___21315,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__10113__auto__ = (function (){var switch__10091__auto__ = ((function (c__10112__auto___21315,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_21096){
var state_val_21097 = (state_21096[(1)]);
if((state_val_21097 === (1))){
var state_21096__$1 = state_21096;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_21098_21316 = state_21096__$1;
(statearr_21098_21316[(1)] = (2));

} else {
var statearr_21099_21317 = state_21096__$1;
(statearr_21099_21317[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (2))){
var state_21096__$1 = state_21096;
var statearr_21100_21318 = state_21096__$1;
(statearr_21100_21318[(2)] = null);

(statearr_21100_21318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (3))){
var inst_21089 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_21096__$1 = state_21096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21096__$1,(5),inst_21089);
} else {
if((state_val_21097 === (4))){
var inst_21093 = (state_21096[(2)]);
var inst_21094 = flush_buffer_BANG__21217.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_21096__$1 = (function (){var statearr_21101 = state_21096;
(statearr_21101[(7)] = inst_21093);

return statearr_21101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21096__$1,inst_21094);
} else {
if((state_val_21097 === (5))){
var inst_21091 = (state_21096[(2)]);
var state_21096__$1 = state_21096;
var statearr_21102_21319 = state_21096__$1;
(statearr_21102_21319[(2)] = inst_21091);

(statearr_21102_21319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__10112__auto___21315,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__10091__auto__,c__10112__auto___21315,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__10092__auto__ = null;
var taoensso$sente$state_machine__10092__auto____0 = (function (){
var statearr_21106 = [null,null,null,null,null,null,null,null];
(statearr_21106[(0)] = taoensso$sente$state_machine__10092__auto__);

(statearr_21106[(1)] = (1));

return statearr_21106;
});
var taoensso$sente$state_machine__10092__auto____1 = (function (state_21096){
while(true){
var ret_value__10093__auto__ = (function (){try{while(true){
var result__10094__auto__ = switch__10091__auto__.call(null,state_21096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10094__auto__;
}
break;
}
}catch (e21107){if((e21107 instanceof Object)){
var ex__10095__auto__ = e21107;
var statearr_21108_21320 = state_21096;
(statearr_21108_21320[(5)] = ex__10095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21321 = state_21096;
state_21096 = G__21321;
continue;
} else {
return ret_value__10093__auto__;
}
break;
}
});
taoensso$sente$state_machine__10092__auto__ = function(state_21096){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__10092__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__10092__auto____1.call(this,state_21096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__10092__auto____0;
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__10092__auto____1;
return taoensso$sente$state_machine__10092__auto__;
})()
;})(switch__10091__auto__,c__10112__auto___21315,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__10114__auto__ = (function (){var statearr_21109 = f__10113__auto__.call(null);
(statearr_21109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10112__auto___21315);

return statearr_21109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10114__auto__);
});})(c__10112__auto___21315,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__10112__auto___21322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10112__auto___21322,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__10113__auto__ = (function (){var switch__10091__auto__ = ((function (c__10112__auto___21322,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_21119){
var state_val_21120 = (state_21119[(1)]);
if((state_val_21120 === (1))){
var state_21119__$1 = state_21119;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_21121_21323 = state_21119__$1;
(statearr_21121_21323[(1)] = (2));

} else {
var statearr_21122_21324 = state_21119__$1;
(statearr_21122_21324[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21120 === (2))){
var state_21119__$1 = state_21119;
var statearr_21123_21325 = state_21119__$1;
(statearr_21123_21325[(2)] = null);

(statearr_21123_21325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21120 === (3))){
var inst_21112 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_21119__$1 = state_21119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21119__$1,(5),inst_21112);
} else {
if((state_val_21120 === (4))){
var inst_21116 = (state_21119[(2)]);
var inst_21117 = flush_buffer_BANG__21217.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_21119__$1 = (function (){var statearr_21124 = state_21119;
(statearr_21124[(7)] = inst_21116);

return statearr_21124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21119__$1,inst_21117);
} else {
if((state_val_21120 === (5))){
var inst_21114 = (state_21119[(2)]);
var state_21119__$1 = state_21119;
var statearr_21125_21326 = state_21119__$1;
(statearr_21125_21326[(2)] = inst_21114);

(statearr_21125_21326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__10112__auto___21322,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__10091__auto__,c__10112__auto___21322,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__10092__auto__ = null;
var taoensso$sente$state_machine__10092__auto____0 = (function (){
var statearr_21129 = [null,null,null,null,null,null,null,null];
(statearr_21129[(0)] = taoensso$sente$state_machine__10092__auto__);

(statearr_21129[(1)] = (1));

return statearr_21129;
});
var taoensso$sente$state_machine__10092__auto____1 = (function (state_21119){
while(true){
var ret_value__10093__auto__ = (function (){try{while(true){
var result__10094__auto__ = switch__10091__auto__.call(null,state_21119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10094__auto__;
}
break;
}
}catch (e21130){if((e21130 instanceof Object)){
var ex__10095__auto__ = e21130;
var statearr_21131_21327 = state_21119;
(statearr_21131_21327[(5)] = ex__10095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21328 = state_21119;
state_21119 = G__21328;
continue;
} else {
return ret_value__10093__auto__;
}
break;
}
});
taoensso$sente$state_machine__10092__auto__ = function(state_21119){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__10092__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__10092__auto____1.call(this,state_21119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__10092__auto____0;
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__10092__auto____1;
return taoensso$sente$state_machine__10092__auto__;
})()
;})(switch__10091__auto__,c__10112__auto___21322,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__10114__auto__ = (function (){var statearr_21132 = f__10113__auto__.call(null);
(statearr_21132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10112__auto___21322);

return statearr_21132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10114__auto__);
});})(c__10112__auto___21322,uid_21212,__21213,__21214__$1,__21215__$2,ev_uuid_21216,flush_buffer_BANG__21217,vec__21059,map__21060,map__21060__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__21211 = function (user_id,ev,var_args){
var p__21058 = null;
if (arguments.length > 2) {
var G__21329__i = 0, G__21329__a = new Array(arguments.length -  2);
while (G__21329__i < G__21329__a.length) {G__21329__a[G__21329__i] = arguments[G__21329__i + 2]; ++G__21329__i;}
  p__21058 = new cljs.core.IndexedSeq(G__21329__a,0);
} 
return G__21211__delegate.call(this,user_id,ev,p__21058);};
G__21211.cljs$lang$maxFixedArity = 2;
G__21211.cljs$lang$applyTo = (function (arglist__21330){
var user_id = cljs.core.first(arglist__21330);
arglist__21330 = cljs.core.next(arglist__21330);
var ev = cljs.core.first(arglist__21330);
var p__21058 = cljs.core.rest(arglist__21330);
return G__21211__delegate(user_id,ev,p__21058);
});
G__21211.cljs$core$IFn$_invoke$arity$variadic = G__21211__delegate;
return G__21211;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__21133 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__21133,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__21133,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__21133,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__21133,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__21133,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__21133,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__21133,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__21133,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__21331__delegate = function (event,p__21134){
var vec__21135 = p__21134;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__21135,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__21331 = function (event,var_args){
var p__21134 = null;
if (arguments.length > 1) {
var G__21332__i = 0, G__21332__a = new Array(arguments.length -  1);
while (G__21332__i < G__21332__a.length) {G__21332__a[G__21332__i] = arguments[G__21332__i + 1]; ++G__21332__i;}
  p__21134 = new cljs.core.IndexedSeq(G__21332__a,0);
} 
return G__21331__delegate.call(this,event,p__21134);};
G__21331.cljs$lang$maxFixedArity = 1;
G__21331.cljs$lang$applyTo = (function (arglist__21333){
var event = cljs.core.first(arglist__21333);
var p__21134 = cljs.core.rest(arglist__21333);
return G__21331__delegate(event,p__21134);
});
G__21331.cljs$core$IFn$_invoke$arity$variadic = G__21331__delegate;
return G__21331;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6538590780941563597.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__6210__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return handshake_BANG_.call(null,server_ch);
} else {
return null;
}
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__21136 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__21136,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__21136,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__21136,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__21136,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__21136,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__21136,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__10112__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10112__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__10113__auto__ = (function (){var switch__10091__auto__ = ((function (c__10112__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_21150){
var state_val_21151 = (state_21150[(1)]);
if((state_val_21151 === (1))){
var inst_21137 = cljs.core.async.timeout.call(null,(5000));
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21150__$1,(2),inst_21137);
} else {
if((state_val_21151 === (2))){
var inst_21139 = (state_21150[(2)]);
var inst_21140 = upd_connected_uid_BANG_.call(null,uid);
var state_21150__$1 = (function (){var statearr_21152 = state_21150;
(statearr_21152[(7)] = inst_21139);

return statearr_21152;
})();
if(cljs.core.truth_(inst_21140)){
var statearr_21153_21334 = state_21150__$1;
(statearr_21153_21334[(1)] = (3));

} else {
var statearr_21154_21335 = state_21150__$1;
(statearr_21154_21335[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (3))){
var inst_21142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21143 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_21144 = (new cljs.core.PersistentVector(null,1,(5),inst_21142,inst_21143,null));
var inst_21145 = receive_event_msg_BANG_.call(null,inst_21144);
var state_21150__$1 = state_21150;
var statearr_21155_21336 = state_21150__$1;
(statearr_21155_21336[(2)] = inst_21145);

(statearr_21155_21336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (4))){
var state_21150__$1 = state_21150;
var statearr_21156_21337 = state_21150__$1;
(statearr_21156_21337[(2)] = null);

(statearr_21156_21337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21151 === (5))){
var inst_21148 = (state_21150[(2)]);
var state_21150__$1 = state_21150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21150__$1,inst_21148);
} else {
return null;
}
}
}
}
}
});})(c__10112__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__10091__auto__,c__10112__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__10092__auto__ = null;
var taoensso$sente$state_machine__10092__auto____0 = (function (){
var statearr_21160 = [null,null,null,null,null,null,null,null];
(statearr_21160[(0)] = taoensso$sente$state_machine__10092__auto__);

(statearr_21160[(1)] = (1));

return statearr_21160;
});
var taoensso$sente$state_machine__10092__auto____1 = (function (state_21150){
while(true){
var ret_value__10093__auto__ = (function (){try{while(true){
var result__10094__auto__ = switch__10091__auto__.call(null,state_21150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10094__auto__;
}
break;
}
}catch (e21161){if((e21161 instanceof Object)){
var ex__10095__auto__ = e21161;
var statearr_21162_21338 = state_21150;
(statearr_21162_21338[(5)] = ex__10095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21339 = state_21150;
state_21150 = G__21339;
continue;
} else {
return ret_value__10093__auto__;
}
break;
}
});
taoensso$sente$state_machine__10092__auto__ = function(state_21150){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__10092__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__10092__auto____1.call(this,state_21150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__10092__auto____0;
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__10092__auto____1;
return taoensso$sente$state_machine__10092__auto__;
})()
;})(switch__10091__auto__,c__10112__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__10114__auto__ = (function (){var statearr_21163 = f__10113__auto__.call(null);
(statearr_21163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10112__auto__);

return statearr_21163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10114__auto__);
});})(c__10112__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__10112__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__21164){
var vec__21165 = p__21164;
var server_ch__$1 = cljs.core.nth.call(null,vec__21165,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__21165,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__10112__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10112__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__10113__auto__ = (function (){var switch__10091__auto__ = ((function (c__10112__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_21188){
var state_val_21189 = (state_21188[(1)]);
if((state_val_21189 === (1))){
var inst_21166 = cljs.core.async.timeout.call(null,(5000));
var state_21188__$1 = state_21188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21188__$1,(2),inst_21166);
} else {
if((state_val_21189 === (2))){
var inst_21168 = (state_21188[(2)]);
var inst_21169 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21170 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_21171 = (new cljs.core.PersistentVector(null,2,(5),inst_21169,inst_21170,null));
var inst_21172 = (function (){return ((function (inst_21168,inst_21169,inst_21170,inst_21171,state_val_21189,c__10112__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__21190 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__21190,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__21190,(1),null);
var disconnected_QMARK_ = (function (){var and__6198__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__6198__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__6198__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_21168,inst_21169,inst_21170,inst_21171,state_val_21189,c__10112__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_21173 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_21171,inst_21172);
var state_21188__$1 = (function (){var statearr_21191 = state_21188;
(statearr_21191[(7)] = inst_21168);

return statearr_21191;
})();
if(cljs.core.truth_(inst_21173)){
var statearr_21192_21340 = state_21188__$1;
(statearr_21192_21340[(1)] = (3));

} else {
var statearr_21193_21341 = state_21188__$1;
(statearr_21193_21341[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (3))){
var inst_21175 = upd_connected_uid_BANG_.call(null,uid);
var state_21188__$1 = state_21188;
if(cljs.core.truth_(inst_21175)){
var statearr_21194_21342 = state_21188__$1;
(statearr_21194_21342[(1)] = (6));

} else {
var statearr_21195_21343 = state_21188__$1;
(statearr_21195_21343[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (4))){
var state_21188__$1 = state_21188;
var statearr_21196_21344 = state_21188__$1;
(statearr_21196_21344[(2)] = null);

(statearr_21196_21344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (5))){
var inst_21186 = (state_21188[(2)]);
var state_21188__$1 = state_21188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21188__$1,inst_21186);
} else {
if((state_val_21189 === (6))){
var inst_21177 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21178 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_21179 = (new cljs.core.PersistentVector(null,1,(5),inst_21177,inst_21178,null));
var inst_21180 = receive_event_msg_BANG_.call(null,inst_21179);
var state_21188__$1 = state_21188;
var statearr_21197_21345 = state_21188__$1;
(statearr_21197_21345[(2)] = inst_21180);

(statearr_21197_21345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (7))){
var state_21188__$1 = state_21188;
var statearr_21198_21346 = state_21188__$1;
(statearr_21198_21346[(2)] = null);

(statearr_21198_21346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21189 === (8))){
var inst_21183 = (state_21188[(2)]);
var state_21188__$1 = state_21188;
var statearr_21199_21347 = state_21188__$1;
(statearr_21199_21347[(2)] = inst_21183);

(statearr_21199_21347[(1)] = (5));


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
});})(c__10112__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__10091__auto__,c__10112__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__10092__auto__ = null;
var taoensso$sente$state_machine__10092__auto____0 = (function (){
var statearr_21203 = [null,null,null,null,null,null,null,null];
(statearr_21203[(0)] = taoensso$sente$state_machine__10092__auto__);

(statearr_21203[(1)] = (1));

return statearr_21203;
});
var taoensso$sente$state_machine__10092__auto____1 = (function (state_21188){
while(true){
var ret_value__10093__auto__ = (function (){try{while(true){
var result__10094__auto__ = switch__10091__auto__.call(null,state_21188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10094__auto__;
}
break;
}
}catch (e21204){if((e21204 instanceof Object)){
var ex__10095__auto__ = e21204;
var statearr_21205_21348 = state_21188;
(statearr_21205_21348[(5)] = ex__10095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21349 = state_21188;
state_21188 = G__21349;
continue;
} else {
return ret_value__10093__auto__;
}
break;
}
});
taoensso$sente$state_machine__10092__auto__ = function(state_21188){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__10092__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__10092__auto____1.call(this,state_21188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__10092__auto____0;
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__10092__auto____1;
return taoensso$sente$state_machine__10092__auto__;
})()
;})(switch__10091__auto__,c__10112__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__10114__auto__ = (function (){var statearr_21206 = f__10113__auto__.call(null);
(statearr_21206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10112__auto__);

return statearr_21206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10114__auto__);
});})(c__10112__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__10112__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__21042,map__21043,map__21043__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq21039){
var G__21040 = cljs.core.first.call(null,seq21039);
var seq21039__$1 = cljs.core.next.call(null,seq21039);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21040,seq21039__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__21354 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__21355 = null;
var count__21356 = (0);
var i__21357 = (0);
while(true){
if((i__21357 < count__21356)){
var server_ch = cljs.core._nth.call(null,chunk__21355,i__21357);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__21358 = seq__21354;
var G__21359 = chunk__21355;
var G__21360 = count__21356;
var G__21361 = (i__21357 + (1));
seq__21354 = G__21358;
chunk__21355 = G__21359;
count__21356 = G__21360;
i__21357 = G__21361;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21354);
if(temp__4657__auto__){
var seq__21354__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21354__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__21354__$1);
var G__21362 = cljs.core.chunk_rest.call(null,seq__21354__$1);
var G__21363 = c__7021__auto__;
var G__21364 = cljs.core.count.call(null,c__7021__auto__);
var G__21365 = (0);
seq__21354 = G__21362;
chunk__21355 = G__21363;
count__21356 = G__21364;
i__21357 = G__21365;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__21354__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__21366 = cljs.core.next.call(null,seq__21354__$1);
var G__21367 = null;
var G__21368 = (0);
var G__21369 = (0);
seq__21354 = G__21366;
chunk__21355 = G__21367;
count__21356 = G__21368;
i__21357 = G__21369;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___21459 = arguments.length;
var i__7280__auto___21460 = (0);
while(true){
if((i__7280__auto___21460 < len__7279__auto___21459)){
args__7286__auto__.push((arguments[i__7280__auto___21460]));

var G__21461 = (i__7280__auto___21460 + (1));
i__7280__auto___21460 = G__21461;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((3) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7287__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__21374){
var vec__21375 = p__21374;
var map__21376 = cljs.core.nth.call(null,vec__21375,(0),null);
var map__21376__$1 = ((((!((map__21376 == null)))?((((map__21376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21376):map__21376);
var nmax_attempts = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__10112__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__10113__auto__ = (function (){var switch__10091__auto__ = ((function (c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_21425){
var state_val_21426 = (state_21425[(1)]);
if((state_val_21426 === (7))){
var inst_21379 = (state_21425[(7)]);
var inst_21380 = (state_21425[(8)]);
var inst_21386 = (state_21425[(9)]);
var inst_21397 = (function (){var n = inst_21379;
var client_ids_satisfied = inst_21380;
var _QMARK_pulled = inst_21386;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_21379,inst_21380,inst_21386,state_val_21426,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__21396){
var vec__21427 = p__21396;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__21427,(0),null);
var _ = cljs.core.nth.call(null,vec__21427,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_21379,inst_21380,inst_21386,state_val_21426,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_21398 = cljs.core.PersistentHashSet.EMPTY;
var inst_21399 = cljs.core.reduce_kv.call(null,inst_21397,inst_21398,inst_21386);
var state_21425__$1 = state_21425;
var statearr_21428_21462 = state_21425__$1;
(statearr_21428_21462[(2)] = inst_21399);

(statearr_21428_21462[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (1))){
var inst_21378 = cljs.core.PersistentHashSet.EMPTY;
var inst_21379 = (0);
var inst_21380 = inst_21378;
var state_21425__$1 = (function (){var statearr_21429 = state_21425;
(statearr_21429[(7)] = inst_21379);

(statearr_21429[(8)] = inst_21380);

return statearr_21429;
})();
var statearr_21430_21463 = state_21425__$1;
(statearr_21430_21463[(2)] = null);

(statearr_21430_21463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (4))){
var state_21425__$1 = state_21425;
var statearr_21431_21464 = state_21425__$1;
(statearr_21431_21464[(2)] = true);

(statearr_21431_21464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (15))){
var inst_21421 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
var statearr_21432_21465 = state_21425__$1;
(statearr_21432_21465[(2)] = inst_21421);

(statearr_21432_21465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (13))){
var inst_21412 = cljs.core.rand_int.call(null,ms_rand);
var inst_21413 = (ms_base + inst_21412);
var inst_21414 = cljs.core.async.timeout.call(null,inst_21413);
var state_21425__$1 = state_21425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21425__$1,(16),inst_21414);
} else {
if((state_val_21426 === (6))){
var inst_21386 = (state_21425[(9)]);
var inst_21394 = (state_21425[(2)]);
var state_21425__$1 = (function (){var statearr_21433 = state_21425;
(statearr_21433[(10)] = inst_21394);

return statearr_21433;
})();
if(cljs.core.truth_(inst_21386)){
var statearr_21434_21466 = state_21425__$1;
(statearr_21434_21466[(1)] = (7));

} else {
var statearr_21435_21467 = state_21425__$1;
(statearr_21435_21467[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (3))){
var inst_21423 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21425__$1,inst_21423);
} else {
if((state_val_21426 === (12))){
var inst_21410 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
if(cljs.core.truth_(inst_21410)){
var statearr_21436_21468 = state_21425__$1;
(statearr_21436_21468[(1)] = (13));

} else {
var statearr_21437_21469 = state_21425__$1;
(statearr_21437_21469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (2))){
var inst_21379 = (state_21425[(7)]);
var inst_21380 = (state_21425[(8)]);
var inst_21386 = (state_21425[(9)]);
var inst_21382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21383 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_21384 = (new cljs.core.PersistentVector(null,2,(5),inst_21382,inst_21383,null));
var inst_21385 = (function (){var n = inst_21379;
var client_ids_satisfied = inst_21380;
return ((function (n,client_ids_satisfied,inst_21379,inst_21380,inst_21386,inst_21382,inst_21383,inst_21384,state_val_21426,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_21379,inst_21380,inst_21386,inst_21382,inst_21383,inst_21384,state_val_21426,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__21438 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__21438,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__21438,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_21379,inst_21380,inst_21386,inst_21382,inst_21383,inst_21384,state_val_21426,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_21379,inst_21380,inst_21386,inst_21382,inst_21383,inst_21384,state_val_21426,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_21386__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_21384,inst_21385);
var inst_21387 = (function (){var n = inst_21379;
var client_ids_satisfied = inst_21380;
var _QMARK_pulled = inst_21386__$1;
var __x = inst_21386__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_21379,inst_21380,inst_21386,inst_21382,inst_21383,inst_21384,inst_21385,inst_21386__$1,state_val_21426,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__6210__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_21379,inst_21380,inst_21386,inst_21382,inst_21383,inst_21384,inst_21385,inst_21386__$1,state_val_21426,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_21388 = inst_21387.call(null,inst_21386__$1);
var state_21425__$1 = (function (){var statearr_21439 = state_21425;
(statearr_21439[(9)] = inst_21386__$1);

return statearr_21439;
})();
if(cljs.core.truth_(inst_21388)){
var statearr_21440_21470 = state_21425__$1;
(statearr_21440_21470[(1)] = (4));

} else {
var statearr_21441_21471 = state_21425__$1;
(statearr_21441_21471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (11))){
var inst_21404 = (state_21425[(11)]);
var state_21425__$1 = state_21425;
var statearr_21442_21472 = state_21425__$1;
(statearr_21442_21472[(2)] = inst_21404);

(statearr_21442_21472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (9))){
var inst_21379 = (state_21425[(7)]);
var inst_21380 = (state_21425[(8)]);
var inst_21404 = (state_21425[(11)]);
var inst_21402 = (state_21425[(2)]);
var inst_21403 = cljs.core.into.call(null,inst_21380,inst_21402);
var inst_21404__$1 = (inst_21379 < nmax_attempts);
var state_21425__$1 = (function (){var statearr_21443 = state_21425;
(statearr_21443[(11)] = inst_21404__$1);

(statearr_21443[(12)] = inst_21403);

return statearr_21443;
})();
if(cljs.core.truth_(inst_21404__$1)){
var statearr_21444_21473 = state_21425__$1;
(statearr_21444_21473[(1)] = (10));

} else {
var statearr_21445_21474 = state_21425__$1;
(statearr_21445_21474[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (5))){
var inst_21386 = (state_21425[(9)]);
var inst_21391 = "([:or nil? map?] ?pulled)";
var inst_21392 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_21391,inst_21386,null,null);
var state_21425__$1 = state_21425;
var statearr_21446_21475 = state_21425__$1;
(statearr_21446_21475[(2)] = inst_21392);

(statearr_21446_21475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (14))){
var state_21425__$1 = state_21425;
var statearr_21447_21476 = state_21425__$1;
(statearr_21447_21476[(2)] = null);

(statearr_21447_21476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (16))){
var inst_21379 = (state_21425[(7)]);
var inst_21403 = (state_21425[(12)]);
var inst_21416 = (state_21425[(2)]);
var inst_21417 = (inst_21379 + (1));
var inst_21379__$1 = inst_21417;
var inst_21380 = inst_21403;
var state_21425__$1 = (function (){var statearr_21448 = state_21425;
(statearr_21448[(7)] = inst_21379__$1);

(statearr_21448[(8)] = inst_21380);

(statearr_21448[(13)] = inst_21416);

return statearr_21448;
})();
var statearr_21449_21477 = state_21425__$1;
(statearr_21449_21477[(2)] = null);

(statearr_21449_21477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (10))){
var inst_21403 = (state_21425[(12)]);
var inst_21406 = cljs.core.complement.call(null,inst_21403);
var inst_21407 = cljs.core.some.call(null,inst_21406,client_ids_unsatisfied);
var state_21425__$1 = state_21425;
var statearr_21450_21478 = state_21425__$1;
(statearr_21450_21478[(2)] = inst_21407);

(statearr_21450_21478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (8))){
var state_21425__$1 = state_21425;
var statearr_21451_21479 = state_21425__$1;
(statearr_21451_21479[(2)] = null);

(statearr_21451_21479[(1)] = (9));


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
});})(c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__10091__auto__,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__10092__auto__ = null;
var taoensso$sente$state_machine__10092__auto____0 = (function (){
var statearr_21455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21455[(0)] = taoensso$sente$state_machine__10092__auto__);

(statearr_21455[(1)] = (1));

return statearr_21455;
});
var taoensso$sente$state_machine__10092__auto____1 = (function (state_21425){
while(true){
var ret_value__10093__auto__ = (function (){try{while(true){
var result__10094__auto__ = switch__10091__auto__.call(null,state_21425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10094__auto__;
}
break;
}
}catch (e21456){if((e21456 instanceof Object)){
var ex__10095__auto__ = e21456;
var statearr_21457_21480 = state_21425;
(statearr_21457_21480[(5)] = ex__10095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21481 = state_21425;
state_21425 = G__21481;
continue;
} else {
return ret_value__10093__auto__;
}
break;
}
});
taoensso$sente$state_machine__10092__auto__ = function(state_21425){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__10092__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__10092__auto____1.call(this,state_21425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__10092__auto____0;
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__10092__auto____1;
return taoensso$sente$state_machine__10092__auto__;
})()
;})(switch__10091__auto__,c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__10114__auto__ = (function (){var statearr_21458 = f__10113__auto__.call(null);
(statearr_21458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10112__auto__);

return statearr_21458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10114__auto__);
});})(c__10112__auto__,client_ids_unsatisfied,vec__21375,map__21376,map__21376__$1,nmax_attempts,ms_base,ms_rand))
);

return c__10112__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq21370){
var G__21371 = cljs.core.first.call(null,seq21370);
var seq21370__$1 = cljs.core.next.call(null,seq21370);
var G__21372 = cljs.core.first.call(null,seq21370__$1);
var seq21370__$2 = cljs.core.next.call(null,seq21370__$1);
var G__21373 = cljs.core.first.call(null,seq21370__$2);
var seq21370__$3 = cljs.core.next.call(null,seq21370__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21371,G__21372,G__21373,seq21370__$3);
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail
 */
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk);
} else {
var m__6874__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

/**
 * Implementation detail
 */
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk,ev,opts);
} else {
var m__6874__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

/**
 * DEPRECATED: Please use `chsk-disconnect!` instead
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk);
} else {
var m__6874__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Disconnects channel socket
 */
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(chsk);
} else {
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk);
} else {
var m__6874__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-disconnect!",chsk);
}
}
}
});

/**
 * Reconnects channel socket (useful for reauthenticating after login/logout, etc.)
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk);
} else {
var m__6874__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args21482 = [];
var len__7279__auto___21485 = arguments.length;
var i__7280__auto___21486 = (0);
while(true){
if((i__7280__auto___21486 < len__7279__auto___21485)){
args21482.push((arguments[i__7280__auto___21486]));

var G__21487 = (i__7280__auto___21486 + (1));
i__7280__auto___21486 = G__21487;
continue;
} else {
}
break;
}

var G__21484 = args21482.length;
switch (G__21484) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21482.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__6210__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__6210__auto__){
return or__6210__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__6210__auto__ = (_QMARK_cb == null);
if(or__6210__auto__){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__21489,merge_state){
var map__21493 = p__21489;
var map__21493__$1 = ((((!((map__21493 == null)))?((((map__21493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21493):map__21493);
var chsk = map__21493__$1;
var chs = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__21495 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__21493,map__21493__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__6198__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__6198__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__21493,map__21493__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__21495,(0),null);
var new_state = cljs.core.nth.call(null,vec__21495,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_21500 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_21500))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21498){if((e21498 instanceof Error)){
var __t_21501 = e21498;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_21500,__t_21501,null);
} else {
throw e21498;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__21499 = ev;
var ev_id = cljs.core.nth.call(null,vec__21499,(0),null);
var _ = cljs.core.nth.call(null,vec__21499,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__21499,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__21499,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21507){if((e21507 instanceof Error)){
var __t = e21507;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e21507;

}
}})();
var seq__21508 = cljs.core.seq.call(null,buffered_evs);
var chunk__21509 = null;
var count__21510 = (0);
var i__21511 = (0);
while(true){
if((i__21511 < count__21510)){
var ev = cljs.core._nth.call(null,chunk__21509,i__21511);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__21512 = seq__21508;
var G__21513 = chunk__21509;
var G__21514 = count__21510;
var G__21515 = (i__21511 + (1));
seq__21508 = G__21512;
chunk__21509 = G__21513;
count__21510 = G__21514;
i__21511 = G__21515;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21508);
if(temp__4657__auto__){
var seq__21508__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21508__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__21508__$1);
var G__21516 = cljs.core.chunk_rest.call(null,seq__21508__$1);
var G__21517 = c__7021__auto__;
var G__21518 = cljs.core.count.call(null,c__7021__auto__);
var G__21519 = (0);
seq__21508 = G__21516;
chunk__21509 = G__21517;
count__21510 = G__21518;
i__21511 = G__21519;
continue;
} else {
var ev = cljs.core.first.call(null,seq__21508__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__21520 = cljs.core.next.call(null,seq__21508__$1);
var G__21521 = null;
var G__21522 = (0);
var G__21523 = (0);
seq__21508 = G__21520;
chunk__21509 = G__21521;
count__21510 = G__21522;
i__21511 = G__21523;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__21526 = clj;
var _ = cljs.core.nth.call(null,vec__21526,(0),null);
var vec__21527 = cljs.core.nth.call(null,vec__21526,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__21527,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__21527,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__21527,(2),null);
var handshake_ev = vec__21526;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__21526,_,vec__21527,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__21526,_,vec__21527,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k21529,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__21531 = (((k21529 instanceof cljs.core.Keyword))?k21529.fqn:null);
switch (G__21531) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21529,else__6835__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21528){
var self__ = this;
var G__21528__$1 = this;
return (new cljs.core.RecordIter((0),G__21528__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__21528){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__21532 = cljs.core.keyword_identical_QMARK_;
var expr__21533 = k__6840__auto__;
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__21533))){
return (new taoensso.sente.ChWebSocket(G__21528,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__21528,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__21528,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__21528,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__21528,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__21528,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__21528,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__21528,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__21528,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__21528,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__21528,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__21528,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__21528,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21532.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__21533))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__21528,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__21528),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__21528){
var self__ = this;
var this__6831__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__21528,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__21535){
var self__ = this;
var map__21536 = p__21535;
var map__21536__$1 = ((((!((map__21536 == null)))?((((map__21536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21536):map__21536);
var opts = map__21536__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__21536__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__21536__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__21536__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___21572 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___21572)){
var cb_uuid_21573 = temp__4657__auto___21572;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_21573], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21538){if((e21538 instanceof Error)){
var __t = e21538;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e21538;

}
}})());

var temp__4657__auto___21574__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___21574__$1)){
var timeout_ms_21575 = temp__4657__auto___21574__$1;
var c__10112__auto___21576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10112__auto___21576,timeout_ms_21575,temp__4657__auto___21574__$1,cb_uuid_21573,temp__4657__auto___21572,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__10113__auto__ = (function (){var switch__10091__auto__ = ((function (c__10112__auto___21576,timeout_ms_21575,temp__4657__auto___21574__$1,cb_uuid_21573,temp__4657__auto___21572,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_21549){
var state_val_21550 = (state_21549[(1)]);
if((state_val_21550 === (1))){
var inst_21539 = cljs.core.async.timeout.call(null,timeout_ms_21575);
var state_21549__$1 = state_21549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21549__$1,(2),inst_21539);
} else {
if((state_val_21550 === (2))){
var inst_21542 = (state_21549[(7)]);
var inst_21541 = (state_21549[(2)]);
var inst_21542__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_21549__$1 = (function (){var statearr_21551 = state_21549;
(statearr_21551[(7)] = inst_21542__$1);

(statearr_21551[(8)] = inst_21541);

return statearr_21551;
})();
if(cljs.core.truth_(inst_21542__$1)){
var statearr_21552_21577 = state_21549__$1;
(statearr_21552_21577[(1)] = (3));

} else {
var statearr_21553_21578 = state_21549__$1;
(statearr_21553_21578[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21550 === (3))){
var inst_21542 = (state_21549[(7)]);
var inst_21544 = inst_21542.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_21549__$1 = state_21549;
var statearr_21554_21579 = state_21549__$1;
(statearr_21554_21579[(2)] = inst_21544);

(statearr_21554_21579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21550 === (4))){
var state_21549__$1 = state_21549;
var statearr_21555_21580 = state_21549__$1;
(statearr_21555_21580[(2)] = null);

(statearr_21555_21580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21550 === (5))){
var inst_21547 = (state_21549[(2)]);
var state_21549__$1 = state_21549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21549__$1,inst_21547);
} else {
return null;
}
}
}
}
}
});})(c__10112__auto___21576,timeout_ms_21575,temp__4657__auto___21574__$1,cb_uuid_21573,temp__4657__auto___21572,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__10091__auto__,c__10112__auto___21576,timeout_ms_21575,temp__4657__auto___21574__$1,cb_uuid_21573,temp__4657__auto___21572,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__10092__auto__ = null;
var taoensso$sente$state_machine__10092__auto____0 = (function (){
var statearr_21559 = [null,null,null,null,null,null,null,null,null];
(statearr_21559[(0)] = taoensso$sente$state_machine__10092__auto__);

(statearr_21559[(1)] = (1));

return statearr_21559;
});
var taoensso$sente$state_machine__10092__auto____1 = (function (state_21549){
while(true){
var ret_value__10093__auto__ = (function (){try{while(true){
var result__10094__auto__ = switch__10091__auto__.call(null,state_21549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10094__auto__;
}
break;
}
}catch (e21560){if((e21560 instanceof Object)){
var ex__10095__auto__ = e21560;
var statearr_21561_21581 = state_21549;
(statearr_21561_21581[(5)] = ex__10095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21582 = state_21549;
state_21549 = G__21582;
continue;
} else {
return ret_value__10093__auto__;
}
break;
}
});
taoensso$sente$state_machine__10092__auto__ = function(state_21549){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__10092__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__10092__auto____1.call(this,state_21549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__10092__auto____0;
taoensso$sente$state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__10092__auto____1;
return taoensso$sente$state_machine__10092__auto__;
})()
;})(switch__10091__auto__,c__10112__auto___21576,timeout_ms_21575,temp__4657__auto___21574__$1,cb_uuid_21573,temp__4657__auto___21572,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__10114__auto__ = (function (){var statearr_21562 = f__10113__auto__.call(null);
(statearr_21562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10112__auto___21576);

return statearr_21562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10114__auto__);
});})(c__10112__auto___21576,timeout_ms_21575,temp__4657__auto___21574__$1,cb_uuid_21573,temp__4657__auto___21572,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e21563){if((e21563 instanceof Error)){
var e = e21563;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6538590780941563597.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__21536,map__21536__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4657__auto___21583 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___21583)){
var cb_uuid_21584 = temp__4657__auto___21583;
var cb_fn_STAR__21585 = (function (){var or__6210__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_21584);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21564){if((e21564 instanceof Error)){
var __t = e21564;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e21564;

}
}}
})();
cb_fn_STAR__21585.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e21563;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___21586 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto___21586)){
var s_21587 = temp__4657__auto___21586;
s_21587.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__6210__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e21568){if((e21568 instanceof Error)){
var e = e21568;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6538590780941563597.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e21568;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__21569 = _QMARK_socket;
(G__21569["onerror"] = ((function (G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6538590780941563597.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
});})(G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__21569["onmessage"] = ((function (G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__21570 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__21570,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__21570,(1),null);
var or__6210__auto__ = (function (){var and__6198__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6210__auto__,ppstr,vec__21570,clj,_QMARK_cb_uuid,G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6210__auto__,ppstr,vec__21570,clj,_QMARK_cb_uuid,G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__21569["onopen"] = ((function (G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__21569["onclose"] = ((function (G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__21569,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__21569;
})());
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__21530){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__21530),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__21530),null,cljs.core.dissoc.call(null,G__21530,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.active_retry_id_ = active_retry_id_;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k21589,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__21591 = (((k21589 instanceof cljs.core.Keyword))?k21589.fqn:null);
switch (G__21591) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21589,else__6835__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21588){
var self__ = this;
var G__21588__$1 = this;
return (new cljs.core.RecordIter((0),G__21588__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__21588){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__21592 = cljs.core.keyword_identical_QMARK_;
var expr__21593 = k__6840__auto__;
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(G__21588,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__21588,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__21588,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__21588,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__21588,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__21588,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__21588,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__21588,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__21588,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__21588,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21592.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__21593))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__21588,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__21588),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__21588){
var self__ = this;
var this__6831__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__21588,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__21595){
var self__ = this;
var map__21596 = p__21595;
var map__21596__$1 = ((((!((map__21596 == null)))?((((map__21596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21596):map__21596);
var opts = map__21596__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__21596,map__21596__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__21596,map__21596__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__21596,map__21596__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__21598){
var map__21602 = p__21598;
var map__21602__$1 = ((((!((map__21602 == null)))?((((map__21602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21602):map__21602);
var _QMARK_error = cljs.core.get.call(null,map__21602__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__21602__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__21604 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__21604,(0),null);
var _ = cljs.core.nth.call(null,vec__21604,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__21604,resp_clj,_,map__21602,map__21602__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__21596,map__21596__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__21604,resp_clj,_,map__21602,map__21602__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__21596,map__21596__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__21596,map__21596__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___21620 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto___21620)){
var x_21621 = temp__4657__auto___21620;
x_21621.abort();
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__21612){
var map__21616 = p__21612;
var map__21616__$1 = ((((!((map__21616 == null)))?((((map__21616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21616):map__21616);
var _QMARK_error = cljs.core.get.call(null,map__21616__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__21616__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__21618 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__21618,(0),null);
var _ = cljs.core.nth.call(null,vec__21618,(1),null);
var or__6210__auto___21622 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__6210__auto___21622)){
} else {
var buffered_evs_21623 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_21623);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$poll_fn.call(null,(0));
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__21590){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__21590),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__21590),null,cljs.core.dissoc.call(null,G__21590,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__21625 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21625) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket-server!`.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___21641 = arguments.length;
var i__7280__auto___21642 = (0);
while(true){
if((i__7280__auto___21642 < len__7279__auto___21641)){
args__7286__auto__.push((arguments[i__7280__auto___21642]));

var G__21643 = (i__7280__auto___21642 + (1));
i__7280__auto___21642 = G__21643;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__21630){
var vec__21631 = p__21630;
var map__21632 = cljs.core.nth.call(null,vec__21631,(0),null);
var map__21632__$1 = ((((!((map__21632 == null)))?((((map__21632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21632):map__21632);
var opts = map__21632__$1;
var ajax_opts = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__6210__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__21631,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21634){if((e21634 instanceof Error)){
var __t = e21634;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e21634;

}
}})())){
} else {
throw (new Error("Assert failed: (have? [:in #{:ws :ajax :auto}] type)"));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21635){if((e21635 instanceof Error)){
var __t = e21635;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e21635;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init6538590780941563597.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__6210__auto__ = host;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__6210__auto__ = path;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__6210__auto__){
return or__6210__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__21636 = ev;
var id = cljs.core.nth.call(null,vec__21636,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__21636,(1),null);
var __x_21644 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e21637){if((e21637 instanceof Error)){
var __t = e21637;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__21627#] (not= p1__21627# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e21637;

}
}})();
try{if(((function (__x_21644,vec__21636,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__21627_SHARP_){
return cljs.core.not_EQ_.call(null,p1__21627_SHARP_,"chsk");
});})(__x_21644,vec__21636,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_21644)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21638){if((e21638 instanceof Error)){
var __t_21645 = e21638;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__21627#] (not= p1__21627# \"chsk\")) (namespace id))",__x_21644,__t_21645,null);
} else {
throw e21638;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__6210__auto__ = (function (){var and__6198__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__6198__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var and__6198__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__6198__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__6198__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__21640 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__21640,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__21640,(1),null);
var ev__$1 = vec__21640;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__21631,map__21632,map__21632__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq21628){
var G__21629 = cljs.core.first.call(null,seq21628);
var seq21628__$1 = cljs.core.next.call(null,seq21628);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21629,seq21628__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__21852 = opts;
var map__21852__$1 = ((((!((map__21852 == null)))?((((map__21852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21852):map__21852);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__21852__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__21852__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__10112__auto___22058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__10113__auto__ = (function (){var switch__10091__auto__ = ((function (c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_21983){
var state_val_21984 = (state_21983[(1)]);
if((state_val_21984 === (7))){
var inst_21979 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
var statearr_21985_22059 = state_21983__$1;
(statearr_21985_22059[(2)] = inst_21979);

(statearr_21985_22059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (20))){
var inst_21888 = (state_21983[(7)]);
var inst_21861 = (state_21983[(8)]);
var inst_21863 = (state_21983[(9)]);
var inst_21862 = (state_21983[(10)]);
var inst_21860 = (state_21983[(11)]);
var inst_21887 = (state_21983[(12)]);
var inst_21898 = (function (){var vec__21855 = inst_21860;
var v = inst_21861;
var p = inst_21862;
var stop_QMARK_ = inst_21863;
var map__21866 = inst_21887;
var event_msg = inst_21887;
var event = inst_21888;
return ((function (vec__21855,v,p,stop_QMARK_,map__21866,event_msg,event,inst_21888,inst_21861,inst_21863,inst_21862,inst_21860,inst_21887,state_val_21984,c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__21855,v,p,stop_QMARK_,map__21866,event_msg,event,inst_21888,inst_21861,inst_21863,inst_21862,inst_21860,inst_21887,state_val_21984,c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_21899 = (new cljs.core.Delay(inst_21898,null));
var inst_21900 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init6538590780941563597.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_21899,null);
var state_21983__$1 = state_21983;
var statearr_21986_22060 = state_21983__$1;
(statearr_21986_22060[(2)] = inst_21900);

(statearr_21986_22060[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (27))){
var inst_21887 = (state_21983[(12)]);
var inst_21905 = (state_21983[(2)]);
var inst_21906 = "(server-event-msg? event-msg)";
var inst_21907 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_21906,inst_21887,inst_21905,null);
var state_21983__$1 = state_21983;
var statearr_21987_22061 = state_21983__$1;
(statearr_21987_22061[(2)] = inst_21907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (1))){
var state_21983__$1 = state_21983;
var statearr_21988_22062 = state_21983__$1;
(statearr_21988_22062[(2)] = null);

(statearr_21988_22062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (24))){
var state_21983__$1 = state_21983;
var statearr_21989_22063 = state_21983__$1;
(statearr_21989_22063[(2)] = null);

(statearr_21989_22063[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (39))){
var state_21983__$1 = state_21983;
var statearr_21990_22064 = state_21983__$1;
(statearr_21990_22064[(2)] = null);

(statearr_21990_22064[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (46))){
var inst_21952 = (state_21983[(13)]);
var inst_21960 = (state_21983[(2)]);
var inst_21961 = [inst_21960,null];
var inst_21962 = (new cljs.core.PersistentVector(null,2,(5),inst_21952,inst_21961,null));
var state_21983__$1 = state_21983;
var statearr_21991_22065 = state_21983__$1;
(statearr_21991_22065[(2)] = inst_21962);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (4))){
var inst_21863 = (state_21983[(9)]);
var inst_21862 = (state_21983[(10)]);
var inst_21860 = (state_21983[(11)]);
var inst_21860__$1 = (state_21983[(2)]);
var inst_21861 = cljs.core.nth.call(null,inst_21860__$1,(0),null);
var inst_21862__$1 = cljs.core.nth.call(null,inst_21860__$1,(1),null);
var inst_21863__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_21862__$1,ch_ctrl);
var state_21983__$1 = (function (){var statearr_21992 = state_21983;
(statearr_21992[(8)] = inst_21861);

(statearr_21992[(9)] = inst_21863__$1);

(statearr_21992[(10)] = inst_21862__$1);

(statearr_21992[(11)] = inst_21860__$1);

return statearr_21992;
})();
if(cljs.core.truth_(inst_21863__$1)){
var statearr_21993_22066 = state_21983__$1;
(statearr_21993_22066[(1)] = (5));

} else {
var statearr_21994_22067 = state_21983__$1;
(statearr_21994_22067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (15))){
var inst_21861 = (state_21983[(8)]);
var state_21983__$1 = state_21983;
var statearr_21995_22068 = state_21983__$1;
(statearr_21995_22068[(2)] = inst_21861);

(statearr_21995_22068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (48))){
var state_21983__$1 = state_21983;
var statearr_21996_22069 = state_21983__$1;
(statearr_21996_22069[(2)] = null);

(statearr_21996_22069[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (21))){
var state_21983__$1 = state_21983;
var statearr_21997_22070 = state_21983__$1;
(statearr_21997_22070[(2)] = null);

(statearr_21997_22070[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (31))){
var inst_21916 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
var statearr_21998_22071 = state_21983__$1;
(statearr_21998_22071[(2)] = inst_21916);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (32))){
var inst_21933 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
var statearr_21999_22072 = state_21983__$1;
(statearr_21999_22072[(2)] = inst_21933);

(statearr_21999_22072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (40))){
var inst_21976 = (state_21983[(2)]);
var state_21983__$1 = (function (){var statearr_22000 = state_21983;
(statearr_22000[(14)] = inst_21976);

return statearr_22000;
})();
var statearr_22001_22073 = state_21983__$1;
(statearr_22001_22073[(2)] = null);

(statearr_22001_22073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (33))){
var inst_21887 = (state_21983[(12)]);
var inst_21920 = (state_21983[(2)]);
var inst_21921 = "(client-event-msg? event-msg)";
var inst_21922 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_21921,inst_21887,inst_21920,null);
var state_21983__$1 = state_21983;
var statearr_22002_22074 = state_21983__$1;
(statearr_22002_22074[(2)] = inst_21922);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (13))){
var inst_21879 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
var statearr_22003_22075 = state_21983__$1;
(statearr_22003_22075[(2)] = inst_21879);

(statearr_22003_22075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (22))){
var inst_21903 = (state_21983[(2)]);
var state_21983__$1 = (function (){var statearr_22004 = state_21983;
(statearr_22004[(15)] = inst_21903);

return statearr_22004;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_22005_22076 = state_21983__$1;
(statearr_22005_22076[(1)] = (23));

} else {
var statearr_22006_22077 = state_21983__$1;
(statearr_22006_22077[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (36))){
var inst_21929 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_21983__$1 = state_21983;
var statearr_22007_22078 = state_21983__$1;
(statearr_22007_22078[(2)] = inst_21929);

(statearr_22007_22078[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (41))){
var inst_21964 = (state_21983[(16)]);
var inst_21966 = (state_21983[(17)]);
var inst_21964__$1 = (state_21983[(2)]);
var inst_21965 = cljs.core.nth.call(null,inst_21964__$1,(0),null);
var inst_21966__$1 = cljs.core.nth.call(null,inst_21964__$1,(1),null);
var state_21983__$1 = (function (){var statearr_22008 = state_21983;
(statearr_22008[(16)] = inst_21964__$1);

(statearr_22008[(18)] = inst_21965);

(statearr_22008[(17)] = inst_21966__$1);

return statearr_22008;
})();
if(cljs.core.truth_(inst_21966__$1)){
var statearr_22009_22079 = state_21983__$1;
(statearr_22009_22079[(1)] = (47));

} else {
var statearr_22010_22080 = state_21983__$1;
(statearr_22010_22080[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21983,(42),Error,null,(41));
var inst_21952 = cljs.core.PersistentVector.EMPTY_NODE;
var state_21983__$1 = (function (){var statearr_22011 = state_21983;
(statearr_22011[(13)] = inst_21952);

return statearr_22011;
})();
if(cljs.core.truth_(error_handler)){
var statearr_22012_22081 = state_21983__$1;
(statearr_22012_22081[(1)] = (44));

} else {
var statearr_22013_22082 = state_21983__$1;
(statearr_22013_22082[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (29))){
var inst_21887 = (state_21983[(12)]);
var state_21983__$1 = state_21983;
var statearr_22014_22083 = state_21983__$1;
(statearr_22014_22083[(2)] = inst_21887);

(statearr_22014_22083[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (44))){
var inst_21942 = (state_21983[(19)]);
var inst_21887 = (state_21983[(12)]);
var inst_21954 = error_handler.call(null,inst_21942,inst_21887);
var state_21983__$1 = state_21983;
var statearr_22015_22084 = state_21983__$1;
(statearr_22015_22084[(2)] = inst_21954);

(statearr_22015_22084[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (6))){
var inst_21861 = (state_21983[(8)]);
var inst_21869 = (inst_21861 == null);
var inst_21870 = cljs.core.not.call(null,inst_21869);
var state_21983__$1 = state_21983;
if(inst_21870){
var statearr_22016_22085 = state_21983__$1;
(statearr_22016_22085[(1)] = (8));

} else {
var statearr_22017_22086 = state_21983__$1;
(statearr_22017_22086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (28))){
var inst_21887 = (state_21983[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21983,(27),Error,null,(26));
var inst_21911 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_21887);
var state_21983__$1 = state_21983;
if(cljs.core.truth_(inst_21911)){
var statearr_22018_22087 = state_21983__$1;
(statearr_22018_22087[(1)] = (29));

} else {
var statearr_22019_22088 = state_21983__$1;
(statearr_22019_22088[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (25))){
var inst_21896 = (state_21983[(20)]);
var inst_21935 = (state_21983[(2)]);
var inst_21936 = event_msg_handler.call(null,inst_21935);
var inst_21937 = [inst_21936,null];
var inst_21938 = (new cljs.core.PersistentVector(null,2,(5),inst_21896,inst_21937,null));
var state_21983__$1 = state_21983;
var statearr_22020_22089 = state_21983__$1;
(statearr_22020_22089[(2)] = inst_21938);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (34))){
var inst_21887 = (state_21983[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21983,(33),Error,null,(32));
var inst_21926 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_21887);
var state_21983__$1 = state_21983;
if(cljs.core.truth_(inst_21926)){
var statearr_22021_22090 = state_21983__$1;
(statearr_22021_22090[(1)] = (35));

} else {
var statearr_22022_22091 = state_21983__$1;
(statearr_22022_22091[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (17))){
var inst_21940 = (state_21983[(21)]);
var inst_21942 = (state_21983[(19)]);
var inst_21940__$1 = (state_21983[(2)]);
var inst_21941 = cljs.core.nth.call(null,inst_21940__$1,(0),null);
var inst_21942__$1 = cljs.core.nth.call(null,inst_21940__$1,(1),null);
var state_21983__$1 = (function (){var statearr_22023 = state_21983;
(statearr_22023[(22)] = inst_21941);

(statearr_22023[(21)] = inst_21940__$1);

(statearr_22023[(19)] = inst_21942__$1);

return statearr_22023;
})();
if(cljs.core.truth_(inst_21942__$1)){
var statearr_22024_22092 = state_21983__$1;
(statearr_22024_22092[(1)] = (38));

} else {
var statearr_22025_22093 = state_21983__$1;
(statearr_22025_22093[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (3))){
var inst_21981 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21983__$1,inst_21981);
} else {
if((state_val_21984 === (12))){
var state_21983__$1 = state_21983;
var statearr_22026_22094 = state_21983__$1;
(statearr_22026_22094[(2)] = false);

(statearr_22026_22094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (2))){
var inst_21856 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21857 = [ch_recv,ch_ctrl];
var inst_21858 = (new cljs.core.PersistentVector(null,2,(5),inst_21856,inst_21857,null));
var state_21983__$1 = state_21983;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21983__$1,(4),inst_21858);
} else {
if((state_val_21984 === (23))){
var state_21983__$1 = state_21983;
var statearr_22027_22095 = state_21983__$1;
(statearr_22027_22095[(2)] = null);

(statearr_22027_22095[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (47))){
var inst_21888 = (state_21983[(7)]);
var inst_21861 = (state_21983[(8)]);
var inst_21863 = (state_21983[(9)]);
var inst_21964 = (state_21983[(16)]);
var inst_21862 = (state_21983[(10)]);
var inst_21965 = (state_21983[(18)]);
var inst_21860 = (state_21983[(11)]);
var inst_21940 = (state_21983[(21)]);
var inst_21942 = (state_21983[(19)]);
var inst_21887 = (state_21983[(12)]);
var inst_21966 = (state_21983[(17)]);
var inst_21968 = (function (){var p = inst_21862;
var _QMARK_error = inst_21942;
var vec__21855 = inst_21860;
var v = inst_21861;
var _ = inst_21965;
var e2 = inst_21966;
var _QMARK_error2 = inst_21966;
var event_msg = inst_21887;
var e = inst_21942;
var temp__4657__auto__ = inst_21966;
var event = inst_21888;
var vec__21867 = inst_21940;
var map__21866 = inst_21887;
var vec__21944 = inst_21964;
var stop_QMARK_ = inst_21863;
return ((function (p,_QMARK_error,vec__21855,v,_,e2,_QMARK_error2,event_msg,e,temp__4657__auto__,event,vec__21867,map__21866,vec__21944,stop_QMARK_,inst_21888,inst_21861,inst_21863,inst_21964,inst_21862,inst_21965,inst_21860,inst_21940,inst_21942,inst_21887,inst_21966,state_val_21984,c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__21855,v,_,e2,_QMARK_error2,event_msg,e,temp__4657__auto__,event,vec__21867,map__21866,vec__21944,stop_QMARK_,inst_21888,inst_21861,inst_21863,inst_21964,inst_21862,inst_21965,inst_21860,inst_21940,inst_21942,inst_21887,inst_21966,state_val_21984,c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_21969 = (new cljs.core.Delay(inst_21968,null));
var inst_21970 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6538590780941563597.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_21969,null);
var state_21983__$1 = state_21983;
var statearr_22028_22096 = state_21983__$1;
(statearr_22028_22096[(2)] = inst_21970);

(statearr_22028_22096[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (35))){
var inst_21887 = (state_21983[(12)]);
var state_21983__$1 = state_21983;
var statearr_22029_22097 = state_21983__$1;
(statearr_22029_22097[(2)] = inst_21887);

(statearr_22029_22097[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21983,(18),Error,null,(17));
var inst_21896 = cljs.core.PersistentVector.EMPTY_NODE;
var state_21983__$1 = (function (){var statearr_22030 = state_21983;
(statearr_22030[(20)] = inst_21896);

return statearr_22030;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_22031_22098 = state_21983__$1;
(statearr_22031_22098[(1)] = (20));

} else {
var statearr_22032_22099 = state_21983__$1;
(statearr_22032_22099[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (11))){
var state_21983__$1 = state_21983;
var statearr_22033_22100 = state_21983__$1;
(statearr_22033_22100[(2)] = true);

(statearr_22033_22100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (9))){
var state_21983__$1 = state_21983;
var statearr_22034_22101 = state_21983__$1;
(statearr_22034_22101[(2)] = false);

(statearr_22034_22101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (5))){
var state_21983__$1 = state_21983;
var statearr_22035_22102 = state_21983__$1;
(statearr_22035_22102[(2)] = null);

(statearr_22035_22102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (14))){
var inst_21861 = (state_21983[(8)]);
var inst_21884 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21861);
var state_21983__$1 = state_21983;
var statearr_22036_22103 = state_21983__$1;
(statearr_22036_22103[(2)] = inst_21884);

(statearr_22036_22103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (45))){
var inst_21888 = (state_21983[(7)]);
var inst_21941 = (state_21983[(22)]);
var inst_21861 = (state_21983[(8)]);
var inst_21863 = (state_21983[(9)]);
var inst_21862 = (state_21983[(10)]);
var inst_21860 = (state_21983[(11)]);
var inst_21940 = (state_21983[(21)]);
var inst_21942 = (state_21983[(19)]);
var inst_21887 = (state_21983[(12)]);
var inst_21956 = (function (){var p = inst_21862;
var _QMARK_error = inst_21942;
var vec__21855 = inst_21860;
var v = inst_21861;
var temp__4655__auto__ = error_handler;
var _ = inst_21941;
var event_msg = inst_21887;
var e = inst_21942;
var temp__4657__auto__ = inst_21942;
var event = inst_21888;
var vec__21867 = inst_21940;
var map__21866 = inst_21887;
var stop_QMARK_ = inst_21863;
return ((function (p,_QMARK_error,vec__21855,v,temp__4655__auto__,_,event_msg,e,temp__4657__auto__,event,vec__21867,map__21866,stop_QMARK_,inst_21888,inst_21941,inst_21861,inst_21863,inst_21862,inst_21860,inst_21940,inst_21942,inst_21887,state_val_21984,c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__21855,v,temp__4655__auto__,_,event_msg,e,temp__4657__auto__,event,vec__21867,map__21866,stop_QMARK_,inst_21888,inst_21941,inst_21861,inst_21863,inst_21862,inst_21860,inst_21940,inst_21942,inst_21887,state_val_21984,c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_21957 = (new cljs.core.Delay(inst_21956,null));
var inst_21958 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init6538590780941563597.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_21957,null);
var state_21983__$1 = state_21983;
var statearr_22037_22104 = state_21983__$1;
(statearr_22037_22104[(2)] = inst_21958);

(statearr_22037_22104[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (26))){
var inst_21918 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
var statearr_22038_22105 = state_21983__$1;
(statearr_22038_22105[(2)] = inst_21918);

(statearr_22038_22105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (16))){
var inst_21887 = (state_21983[(12)]);
var inst_21887__$1 = (state_21983[(2)]);
var inst_21888 = cljs.core.get.call(null,inst_21887__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_21983__$1 = (function (){var statearr_22039 = state_21983;
(statearr_22039[(7)] = inst_21888);

(statearr_22039[(12)] = inst_21887__$1);

return statearr_22039;
})();
var statearr_22040_22106 = state_21983__$1;
(statearr_22040_22106[(2)] = null);

(statearr_22040_22106[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (38))){
var state_21983__$1 = state_21983;
var statearr_22041_22107 = state_21983__$1;
(statearr_22041_22107[(2)] = null);

(statearr_22041_22107[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (30))){
var inst_21914 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_21983__$1 = state_21983;
var statearr_22042_22108 = state_21983__$1;
(statearr_22042_22108[(2)] = inst_21914);

(statearr_22042_22108[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (10))){
var inst_21882 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
if(cljs.core.truth_(inst_21882)){
var statearr_22043_22109 = state_21983__$1;
(statearr_22043_22109[(1)] = (14));

} else {
var statearr_22044_22110 = state_21983__$1;
(statearr_22044_22110[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (18))){
var inst_21889 = (state_21983[(2)]);
var inst_21890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21891 = [null,inst_21889];
var inst_21892 = (new cljs.core.PersistentVector(null,2,(5),inst_21890,inst_21891,null));
var state_21983__$1 = state_21983;
var statearr_22045_22111 = state_21983__$1;
(statearr_22045_22111[(2)] = inst_21892);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (42))){
var inst_21945 = (state_21983[(2)]);
var inst_21946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21947 = [null,inst_21945];
var inst_21948 = (new cljs.core.PersistentVector(null,2,(5),inst_21946,inst_21947,null));
var state_21983__$1 = state_21983;
var statearr_22046_22112 = state_21983__$1;
(statearr_22046_22112[(2)] = inst_21948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (37))){
var inst_21931 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
var statearr_22047_22113 = state_21983__$1;
(statearr_22047_22113[(2)] = inst_21931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (8))){
var inst_21861 = (state_21983[(8)]);
var inst_21872 = inst_21861.cljs$lang$protocol_mask$partition0$;
var inst_21873 = (inst_21872 & (64));
var inst_21874 = inst_21861.cljs$core$ISeq$;
var inst_21875 = (inst_21873) || (inst_21874);
var state_21983__$1 = state_21983;
if(cljs.core.truth_(inst_21875)){
var statearr_22048_22114 = state_21983__$1;
(statearr_22048_22114[(1)] = (11));

} else {
var statearr_22049_22115 = state_21983__$1;
(statearr_22049_22115[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21984 === (49))){
var inst_21973 = (state_21983[(2)]);
var state_21983__$1 = state_21983;
var statearr_22050_22116 = state_21983__$1;
(statearr_22050_22116[(2)] = inst_21973);

(statearr_22050_22116[(1)] = (40));


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
}
}
}
}
});})(c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__10091__auto__,c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto____0 = (function (){
var statearr_22054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22054[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto__);

(statearr_22054[(1)] = (1));

return statearr_22054;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto____1 = (function (state_21983){
while(true){
var ret_value__10093__auto__ = (function (){try{while(true){
var result__10094__auto__ = switch__10091__auto__.call(null,state_21983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10094__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object)){
var ex__10095__auto__ = e22055;
var statearr_22056_22117 = state_21983;
(statearr_22056_22117[(5)] = ex__10095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22118 = state_21983;
state_21983 = G__22118;
continue;
} else {
return ret_value__10093__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto__ = function(state_21983){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto____1.call(this,state_21983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__10092__auto__;
})()
;})(switch__10091__auto__,c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__10114__auto__ = (function (){var statearr_22057 = f__10113__auto__.call(null);
(statearr_22057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10112__auto___22058);

return statearr_22057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10114__auto__);
});})(c__10112__auto___22058,map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__21852,map__21852__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___22126 = arguments.length;
var i__7280__auto___22127 = (0);
while(true){
if((i__7280__auto___22127 < len__7279__auto___22126)){
args__7286__auto__.push((arguments[i__7280__auto___22127]));

var G__22128 = (i__7280__auto___22127 + (1));
i__7280__auto___22127 = G__22128;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__22122){
var vec__22123 = p__22122;
var map__22124 = cljs.core.nth.call(null,vec__22123,(0),null);
var map__22124__$1 = ((((!((map__22124 == null)))?((((map__22124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22124):map__22124);
var opts = map__22124__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq22119){
var G__22120 = cljs.core.first.call(null,seq22119);
var seq22119__$1 = cljs.core.next.call(null,seq22119);
var G__22121 = cljs.core.first.call(null,seq22119__$1);
var seq22119__$2 = cljs.core.next.call(null,seq22119__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22120,G__22121,seq22119__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___22136 = arguments.length;
var i__7280__auto___22137 = (0);
while(true){
if((i__7280__auto___22137 < len__7279__auto___22136)){
args__7286__auto__.push((arguments[i__7280__auto___22137]));

var G__22138 = (i__7280__auto___22137 + (1));
i__7280__auto___22137 = G__22138;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__22132){
var vec__22133 = p__22132;
var map__22134 = cljs.core.nth.call(null,vec__22133,(0),null);
var map__22134__$1 = ((((!((map__22134 == null)))?((((map__22134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22134):map__22134);
var opts = map__22134__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__22134__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__22134__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq22129){
var G__22130 = cljs.core.first.call(null,seq22129);
var seq22129__$1 = cljs.core.next.call(null,seq22129);
var G__22131 = cljs.core.first.call(null,seq22129__$1);
var seq22129__$2 = cljs.core.next.call(null,seq22129__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22130,G__22131,seq22129__$2);
});
taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED: Please use `ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__22139,websocket_QMARK_){
var map__22142 = p__22139;
var map__22142__$1 = ((((!((map__22142 == null)))?((((map__22142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22142):map__22142);
var location = map__22142__$1;
var adjusted_protocol = cljs.core.get.call(null,map__22142__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__22142__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__22142__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__6210__auto__ = path;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map