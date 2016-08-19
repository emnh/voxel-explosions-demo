// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.sente_setup');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.pprint');
goog.require('promesa.core');
goog.require('game.client.routing');
goog.require('jayq.core');
goog.require('rum.core');
goog.require('sablono.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('game.client.common');
cljs.core.enable_console_print_BANG_.call(null);
game.client.sente_setup.__GT_output_BANG_ = (function game$client$sente_setup$__GT_output_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___23696 = arguments.length;
var i__7280__auto___23697 = (0);
while(true){
if((i__7280__auto___23697 < len__7279__auto___23696)){
args__7286__auto__.push((arguments[i__7280__auto___23697]));

var G__23698 = (i__7280__auto___23697 + (1));
i__7280__auto___23697 = G__23698;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return game.client.sente_setup.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

game.client.sente_setup.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
return cljs.core.println.call(null,msg);
});

game.client.sente_setup.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

game.client.sente_setup.__GT_output_BANG_.cljs$lang$applyTo = (function (seq23694){
var G__23695 = cljs.core.first.call(null,seq23694);
var seq23694__$1 = cljs.core.next.call(null,seq23694);
return game.client.sente_setup.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23695,seq23694__$1);
});
if(typeof game.client.sente_setup._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
game.client.sente_setup._event_msg_handler = (function (){var method_table__7134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7138__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.client.sente-setup","-event-msg-handler"),((function (method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__){
return (function (component,ev_msg){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ev_msg);
});})(method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7138__auto__,method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
game.client.sente_setup.event_msg_handler = (function game$client$sente_setup$event_msg_handler(component,p__23699){
var map__23702 = p__23699;
var map__23702__$1 = ((((!((map__23702 == null)))?((((map__23702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23702):map__23702);
var ev_msg = map__23702__$1;
var id = cljs.core.get.call(null,map__23702__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__23702__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__23702__$1,new cljs.core.Keyword(null,"event","event",301435442));
return game.client.sente_setup._event_msg_handler.call(null,component,ev_msg);
});
cljs.core._add_method.call(null,game.client.sente_setup._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (component,p__23704){
var map__23705 = p__23704;
var map__23705__$1 = ((((!((map__23705 == null)))?((((map__23705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23705):map__23705);
var ev_msg = map__23705__$1;
var event = cljs.core.get.call(null,map__23705__$1,new cljs.core.Keyword(null,"event","event",301435442));
var temp__4655__auto__ = event.call(null,new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(temp__4655__auto__)){
var handler = temp__4655__auto__;
return handler.call(null,ev_msg);
} else {
return game.client.sente_setup.__GT_output_BANG_.call(null,"Unhandled event: %s",event);
}
}));
cljs.core._add_method.call(null,game.client.sente_setup._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (component,p__23707){
var map__23708 = p__23707;
var map__23708__$1 = ((((!((map__23708 == null)))?((((map__23708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23708):map__23708);
var ev_msg = map__23708__$1;
var _QMARK_data = cljs.core.get.call(null,map__23708__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(_QMARK_data))){
game.client.sente_setup.__GT_output_BANG_.call(null,"Channel socket successfully established!: %s",_QMARK_data);

return new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720).cljs$core$IFn$_invoke$arity$1(component).resolve(component);
} else {
return game.client.sente_setup.__GT_output_BANG_.call(null,"Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,game.client.sente_setup._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (component,p__23710){
var map__23711 = p__23710;
var map__23711__$1 = ((((!((map__23711 == null)))?((((map__23711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23711):map__23711);
var ev_msg = map__23711__$1;
var _QMARK_data = cljs.core.get.call(null,map__23711__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.first.call(null,_QMARK_data);
var data = cljs.core.second.call(null,_QMARK_data);
var temp__4655__auto__ = event.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480).cljs$core$IFn$_invoke$arity$1(component)));
if(cljs.core.truth_(temp__4655__auto__)){
var handler = temp__4655__auto__;
return handler.call(null,data);
} else {
return null;
}
}));
cljs.core._add_method.call(null,game.client.sente_setup._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (component,p__23713){
var map__23714 = p__23713;
var map__23714__$1 = ((((!((map__23714 == null)))?((((map__23714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23714):map__23714);
var ev_msg = map__23714__$1;
var _QMARK_data = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__23716 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__23716,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__23716,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__23716,(2),null);
return game.client.sente_setup.__GT_output_BANG_.call(null,"Handshake: %s",_QMARK_data);
}));
game.client.sente_setup.register_handler = (function game$client$sente_setup$register_handler(component,event,handler){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480).cljs$core$IFn$_invoke$arity$1(component),(function (p1__23717_SHARP_){
return cljs.core.assoc.call(null,p1__23717_SHARP_,event,handler);
}));

return promesa.core.then.call(null,new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720).cljs$core$IFn$_invoke$arity$1(component),(function (){
return new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(component).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rts","subscribe","rts/subscribe",415089197),event], null));
}));
});
game.client.sente_setup.send = (function game$client$sente_setup$send(component,event,_QMARK_data){
return promesa.core.then.call(null,new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720).cljs$core$IFn$_invoke$arity$1(component),(function (){
return new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(component).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,_QMARK_data], null));
}));
});
game.client.sente_setup.send_cb = (function game$client$sente_setup$send_cb(var_args){
var args23718 = [];
var len__7279__auto___23721 = arguments.length;
var i__7280__auto___23722 = (0);
while(true){
if((i__7280__auto___23722 < len__7279__auto___23721)){
args23718.push((arguments[i__7280__auto___23722]));

var G__23723 = (i__7280__auto___23722 + (1));
i__7280__auto___23722 = G__23723;
continue;
} else {
}
break;
}

var G__23720 = args23718.length;
switch (G__23720) {
case 3:
return game.client.sente_setup.send_cb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return game.client.sente_setup.send_cb.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23718.length)].join('')));

}
});

game.client.sente_setup.send_cb.cljs$core$IFn$_invoke$arity$3 = (function (component,event,data){
var timeout = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sente","sente",-453568614),new cljs.core.Keyword(null,"request-timeout","request-timeout",-2047539823)], null));
return game.client.sente_setup.send_cb.call(null,component,event,data,timeout);
});

game.client.sente_setup.send_cb.cljs$core$IFn$_invoke$arity$4 = (function (component,event,data,timeout){
return promesa.core.then.call(null,new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720).cljs$core$IFn$_invoke$arity$1(component),(function (){
return promesa.core.promise.call(null,(function (resolve,reject){
var callback = (function (event__$1){
if(cljs.core._EQ_.call(null,event__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489))){
return reject.call(null,(new Error(event__$1)));
} else {
return resolve.call(null,event__$1);
}
});
return new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(component).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,data], null),timeout,callback);
}));
}));
});

game.client.sente_setup.send_cb.cljs$lang$maxFixedArity = 4;

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
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
game.client.sente_setup.new_sente_setup_Record = (function (config,chsk,ch_recv,send_fn,state,router,event_handlers,connected_promise,started,start_count,stop_count,__meta,__extmap,__hash){
this.config = config;
this.chsk = chsk;
this.ch_recv = ch_recv;
this.send_fn = send_fn;
this.state = state;
this.router = router;
this.event_handlers = event_handlers;
this.connected_promise = connected_promise;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k23727,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__23729 = (((k23727 instanceof cljs.core.Keyword))?k23727.fqn:null);
switch (G__23729) {
case "event-handlers":
return self__.event_handlers;

break;
case "started":
return self__.started;

break;
case "connected-promise":
return self__.connected_promise;

break;
case "ch-recv":
return self__.ch_recv;

break;
case "router":
return self__.router;

break;
case "stop-count":
return self__.stop_count;

break;
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
case "start-count":
return self__.start_count;

break;
case "chsk":
return self__.chsk;

break;
case "send-fn":
return self__.send_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23727,else__6835__auto__);

}
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.sente-setup.new-sente-setup-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chsk","chsk",-863703081),self__.chsk],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),self__.ch_recv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480),self__.event_handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720),self__.connected_promise],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IIterable$ = true;

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23726){
var self__ = this;
var G__23726__$1 = this;
return (new cljs.core.RecordIter((0),G__23726__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480),new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480),null,new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"chsk","chsk",-863703081),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__23726){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__23730 = cljs.core.keyword_identical_QMARK_;
var expr__23731 = k__6840__auto__;
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(G__23726,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"chsk","chsk",-863703081),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,G__23726,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,G__23726,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,G__23726,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,G__23726,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"router","router",1091916230),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,G__23726,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,G__23726,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,G__23726,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,G__23726,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,G__23726,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23730.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__23731))){
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,G__23726,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__23726),null));
}
}
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

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chsk","chsk",-863703081),self__.chsk],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),self__.ch_recv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480),self__.event_handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720),self__.connected_promise],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__23726){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.sente_setup.new_sente_setup_Record(self__.config,self__.chsk,self__.ch_recv,self__.send_fn,self__.state,self__.router,self__.event_handlers,self__.connected_promise,self__.started,self__.start_count,self__.stop_count,G__23726,self__.__extmap,self__.__hash));
});

game.client.sente_setup.new_sente_setup_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.sente_setup.new_sente_setup_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.sente_setup.new_sente_setup_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__23725){
var self__ = this;
var G__23725__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__23725__$1){
return (function (component){
var map__23733 = ((cljs.core._EQ_.call(null,self__.start_count,(0)))?taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)):component);
var map__23733__$1 = ((((!((map__23733 == null)))?((((map__23733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23733):map__23733);
var chsk__$1 = cljs.core.get.call(null,map__23733__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv__$1 = cljs.core.get.call(null,map__23733__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn__$1 = cljs.core.get.call(null,map__23733__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state__$1 = cljs.core.get.call(null,map__23733__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event_handlers__$1 = (function (){var or__6210__auto__ = self__.event_handlers;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})();
var router__$1 = ((cljs.core._EQ_.call(null,self__.router,null))?cljs.core.atom.call(null,null):self__.router);
var connected_promise__$1 = (function (){var or__6210__auto__ = self__.connected_promise;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var p = game.client.common.promise_obj.call(null);
promesa.core.then.call(null,promesa.core.delay.call(null,cljs.core.get_in.call(null,self__.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sente","sente",-453568614),new cljs.core.Keyword(null,"connection-timeout","connection-timeout",-375967149)], null))),((function (p,or__6210__auto__,map__23733,map__23733__$1,chsk__$1,ch_recv__$1,send_fn__$1,state__$1,event_handlers__$1,router__$1,G__23725__$1){
return (function (){
if(cljs.core.not.call(null,promesa.core.resolved_QMARK_.call(null,p))){
return p.reject((new Error("Sente connection timeout")));
} else {
return null;
}
});})(p,or__6210__auto__,map__23733,map__23733__$1,chsk__$1,ch_recv__$1,send_fn__$1,state__$1,event_handlers__$1,router__$1,G__23725__$1))
);

return p;
}
})();
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720),connected_promise__$1),new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480),event_handlers__$1),new cljs.core.Keyword(null,"router","router",1091916230),router__$1),new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk__$1),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv__$1),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn__$1),new cljs.core.Keyword(null,"state","state",-1988618099),state__$1);
var stop_router_BANG_ = ((function (map__23733,map__23733__$1,chsk__$1,ch_recv__$1,send_fn__$1,state__$1,event_handlers__$1,router__$1,connected_promise__$1,component__$1,G__23725__$1){
return (function (){
var temp__4657__auto__ = cljs.core.deref.call(null,router__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});})(map__23733,map__23733__$1,chsk__$1,ch_recv__$1,send_fn__$1,state__$1,event_handlers__$1,router__$1,connected_promise__$1,component__$1,G__23725__$1))
;
var start_router_BANG_ = ((function (map__23733,map__23733__$1,chsk__$1,ch_recv__$1,send_fn__$1,state__$1,event_handlers__$1,router__$1,connected_promise__$1,component__$1,stop_router_BANG_,G__23725__$1){
return (function (){
stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,router__$1,taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv__$1,cljs.core.partial.call(null,game.client.sente_setup.event_msg_handler,component__$1)));
});})(map__23733,map__23733__$1,chsk__$1,ch_recv__$1,send_fn__$1,state__$1,event_handlers__$1,router__$1,connected_promise__$1,component__$1,stop_router_BANG_,G__23725__$1))
;
start_router_BANG_.call(null);

return component__$1;
});})(G__23725__$1))
.call(null,G__23725__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.sente_setup.new_sente_setup_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__23725){
var self__ = this;
var G__23725__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__23725__$1){
return (function (component){
return component;
});})(G__23725__$1))
.call(null,G__23725__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.sente_setup.new_sente_setup_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"chsk","chsk",776828446,null),new cljs.core.Symbol(null,"ch-recv","ch-recv",649614666,null),new cljs.core.Symbol(null,"send-fn","send-fn",1991533568,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"event-handlers","event-handlers",286691047,null),new cljs.core.Symbol(null,"connected-promise","connected-promise",-639969049,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.sente_setup.new_sente_setup_Record.cljs$lang$type = true;

game.client.sente_setup.new_sente_setup_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.sente-setup/new-sente-setup-Record");
});

game.client.sente_setup.new_sente_setup_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.sente-setup/new-sente-setup-Record");
});

game.client.sente_setup.__GT_new_sente_setup_Record = (function game$client$sente_setup$__GT_new_sente_setup_Record(config,chsk,ch_recv,send_fn,state,router,event_handlers,connected_promise,started,start_count,stop_count){
return (new game.client.sente_setup.new_sente_setup_Record(config,chsk,ch_recv,send_fn,state,router,event_handlers,connected_promise,started,start_count,stop_count,null,null,null));
});

game.client.sente_setup.map__GT_new_sente_setup_Record = (function game$client$sente_setup$map__GT_new_sente_setup_Record(G__23728){
return (new game.client.sente_setup.new_sente_setup_Record(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"chsk","chsk",-863703081).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__23728),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__23728),null,cljs.core.dissoc.call(null,G__23728,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480),new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.sente_setup.new_sente_setup = (function game$client$sente_setup$new_sente_setup(){
return com.stuartsierra.component.using.call(null,game.client.sente_setup.map__GT_new_sente_setup_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null));
});

//# sourceMappingURL=sente_setup.js.map