// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.socket');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('promesa.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
goog.require('clojure.string');

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
game.client.socket.InitSocket = (function (socket,listeners,__meta,__extmap,__hash){
this.socket = socket;
this.listeners = listeners;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.socket.InitSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.socket.InitSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k10158,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__10160 = (((k10158 instanceof cljs.core.Keyword))?k10158.fqn:null);
switch (G__10160) {
case "socket":
return self__.socket;

break;
case "listeners":
return self__.listeners;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10158,else__6835__auto__);

}
});

game.client.socket.InitSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.socket.InitSocket{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket","socket",59137063),self__.socket],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null))], null),self__.__extmap));
});

game.client.socket.InitSocket.prototype.cljs$core$IIterable$ = true;

game.client.socket.InitSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10157){
var self__ = this;
var G__10157__$1 = this;
return (new cljs.core.RecordIter((0),G__10157__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"socket","socket",59137063),new cljs.core.Keyword(null,"listeners","listeners",394544445)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.socket.InitSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.socket.InitSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.socket.InitSocket(self__.socket,self__.listeners,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.socket.InitSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

game.client.socket.InitSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.socket.InitSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.socket.InitSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.socket.InitSocket(self__.socket,self__.listeners,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.socket.InitSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__10157){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__10161 = cljs.core.keyword_identical_QMARK_;
var expr__10162 = k__6840__auto__;
if(cljs.core.truth_(pred__10161.call(null,new cljs.core.Keyword(null,"socket","socket",59137063),expr__10162))){
return (new game.client.socket.InitSocket(G__10157,self__.listeners,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10161.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__10162))){
return (new game.client.socket.InitSocket(self__.socket,G__10157,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.socket.InitSocket(self__.socket,self__.listeners,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__10157),null));
}
}
});

game.client.socket.InitSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket","socket",59137063),self__.socket],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null))], null),self__.__extmap));
});

game.client.socket.InitSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__10157){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.socket.InitSocket(self__.socket,self__.listeners,G__10157,self__.__extmap,self__.__hash));
});

game.client.socket.InitSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.socket.InitSocket.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.socket.InitSocket.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
if(cljs.core._EQ_.call(null,self__.socket,null)){
var socket_io_URL = [cljs.core.str(window.location)].join('');
var re = /https?:\/\/[^\/]*(\/.*)#.*/;
var path = [cljs.core.str(cljs.core.nth.call(null,cljs.core.re_find.call(null,re,socket_io_URL),(1))),cljs.core.str("socket.io")].join('');
var socket__$1 = io(socket_io_URL,{"path": path});
cljs.core.println.call(null,[cljs.core.str("Created socket on "),cljs.core.str(socket_io_URL),cljs.core.str(" with path "),cljs.core.str(path)].join(''));

socket__$1.binaryType = "arraybuffer";

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"socket","socket",59137063),socket__$1),new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return component__$1;
}
});

game.client.socket.InitSocket.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

game.client.socket.InitSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"socket","socket",1699668590,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null)], null);
});

game.client.socket.InitSocket.cljs$lang$type = true;

game.client.socket.InitSocket.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.socket/InitSocket");
});

game.client.socket.InitSocket.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.socket/InitSocket");
});

game.client.socket.__GT_InitSocket = (function game$client$socket$__GT_InitSocket(socket,listeners){
return (new game.client.socket.InitSocket(socket,listeners,null,null,null));
});

game.client.socket.map__GT_InitSocket = (function game$client$socket$map__GT_InitSocket(G__10159){
return (new game.client.socket.InitSocket(new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(G__10159),new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__10159),null,cljs.core.dissoc.call(null,G__10159,new cljs.core.Keyword(null,"socket","socket",59137063),new cljs.core.Keyword(null,"listeners","listeners",394544445)),null));
});

game.client.socket.new_init_socket = (function game$client$socket$new_init_socket(){
return com.stuartsierra.component.using.call(null,game.client.socket.map__GT_InitSocket.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.PersistentVector.EMPTY);
});
game.client.socket.rpc = (function game$client$socket$rpc(var_args){
var args__7286__auto__ = [];
var len__7279__auto___10174 = arguments.length;
var i__7280__auto___10175 = (0);
while(true){
if((i__7280__auto___10175 < len__7279__auto___10174)){
args__7286__auto__.push((arguments[i__7280__auto___10175]));

var G__10176 = (i__7280__auto___10175 + (1));
i__7280__auto___10175 = G__10176;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return game.client.socket.rpc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

game.client.socket.rpc.cljs$core$IFn$_invoke$arity$variadic = (function (socket,call,p__10170){
var map__10171 = p__10170;
var map__10171__$1 = ((((!((map__10171 == null)))?((((map__10171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10171):map__10171);
var args = map__10171__$1;
var temp__4655__auto___10177 = cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(socket)),call,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,cljs.core.identity], null));
if(cljs.core.truth_(temp__4655__auto___10177)){
var vec__10173_10178 = temp__4655__auto___10177;
var resolve_10179 = cljs.core.nth.call(null,vec__10173_10178,(0),null);
var reject_10180 = cljs.core.nth.call(null,vec__10173_10178,(1),null);
reject_10180.call(null,[cljs.core.str("new call: "),cljs.core.str(call)].join(''));

new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(socket).removeListener(call,resolve_10179);
} else {
}

return promesa.core.promise.call(null,((function (map__10171,map__10171__$1,args){
return (function (resolve,reject){
var resolve__$1 = ((function (map__10171,map__10171__$1,args){
return (function (p1__10165_SHARP_){
return resolve.call(null,cljs.core.js__GT_clj.call(null,p1__10165_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(map__10171,map__10171__$1,args))
;
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(socket),((function (resolve__$1,map__10171,map__10171__$1,args){
return (function (p1__10166_SHARP_){
return cljs.core.assoc.call(null,p1__10166_SHARP_,call,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve__$1,reject], null));
});})(resolve__$1,map__10171,map__10171__$1,args))
);

new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(socket).on(call,resolve__$1);

return new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(socket).emit(call,cljs.core.clj__GT_js.call(null,args));
});})(map__10171,map__10171__$1,args))
);
});

game.client.socket.rpc.cljs$lang$maxFixedArity = (2);

game.client.socket.rpc.cljs$lang$applyTo = (function (seq10167){
var G__10168 = cljs.core.first.call(null,seq10167);
var seq10167__$1 = cljs.core.next.call(null,seq10167);
var G__10169 = cljs.core.first.call(null,seq10167__$1);
var seq10167__$2 = cljs.core.next.call(null,seq10167__$1);
return game.client.socket.rpc.cljs$core$IFn$_invoke$arity$variadic(G__10168,G__10169,seq10167__$2);
});
game.client.socket.on = (function game$client$socket$on(socket,event,f){
var resolve = (function (p1__10181_SHARP_){
return f.call(null,cljs.core.js__GT_clj.call(null,p1__10181_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
return new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(socket).on(event,resolve);
});

//# sourceMappingURL=socket.js.map