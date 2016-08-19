// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.page_game');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('promesa.core');
goog.require('game.client.routing');
goog.require('jayq.core');
goog.require('game.client.scene');
goog.require('game.client.ground_local');
goog.require('game.shared.state');
goog.require('rum.core');
goog.require('game.client.game');
goog.require('game.client.renderer');
goog.require('sablono.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.controls');
goog.require('clojure.string');
goog.require('game.client.common');
game.client.page_game.start = (function game$client$page_game$start(component){
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$page","$page",384517215),new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"simplex","simplex",-495056721),game.client.common.data.call(null,new cljs.core.Keyword(null,"simplex","simplex",-495056721).cljs$core$IFn$_invoke$arity$1(component))], null);
var subsystem = game.shared.state.with_simple_cause.call(null,((function (params){
return (function (){
return com.stuartsierra.component.start_system.call(null,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"params","params",710516235),params);
} else {
return game.client.game.new_system.call(null,params);
}
})());
});})(params))
);
var component__$1 = cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),subsystem);
return component__$1;
});
game.client.page_game.stop = (function game$client$page_game$stop(component){
var subsystem = (function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
return game.shared.state.with_simple_cause.call(null,((function (s,temp__4655__auto__){
return (function (){
return com.stuartsierra.component.stop_system.call(null,s);
});})(s,temp__4655__auto__))
);
} else {
return null;
}
})();
var component__$1 = cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),subsystem);
return component__$1;
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
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
game.client.page_game.new_game_Record = (function (simplex,routing,subsystem,started,start_count,stop_count,__meta,__extmap,__hash){
this.simplex = simplex;
this.routing = routing;
this.subsystem = subsystem;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.page_game.new_game_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.page_game.new_game_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25825,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25827 = (((k25825 instanceof cljs.core.Keyword))?k25825.fqn:null);
switch (G__25827) {
case "simplex":
return self__.simplex;

break;
case "routing":
return self__.routing;

break;
case "subsystem":
return self__.subsystem;

break;
case "started":
return self__.started;

break;
case "start-count":
return self__.start_count;

break;
case "stop-count":
return self__.stop_count;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25825,else__6835__auto__);

}
});

game.client.page_game.new_game_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.page-game.new-game-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"simplex","simplex",-495056721),self__.simplex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing","routing",1440253662),self__.routing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),self__.subsystem],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_game.new_game_Record.prototype.cljs$core$IIterable$ = true;

game.client.page_game.new_game_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25824){
var self__ = this;
var G__25824__$1 = this;
return (new cljs.core.RecordIter((0),G__25824__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simplex","simplex",-495056721),new cljs.core.Keyword(null,"routing","routing",1440253662),new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.page_game.new_game_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.page_game.new_game_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.page_game.new_game_Record(self__.simplex,self__.routing,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.page_game.new_game_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.client.page_game.new_game_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.page_game.new_game_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.page_game.new_game_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"simplex","simplex",-495056721),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),null,new cljs.core.Keyword(null,"routing","routing",1440253662),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.page_game.new_game_Record(self__.simplex,self__.routing,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.page_game.new_game_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25824){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25828 = cljs.core.keyword_identical_QMARK_;
var expr__25829 = k__6840__auto__;
if(cljs.core.truth_(pred__25828.call(null,new cljs.core.Keyword(null,"simplex","simplex",-495056721),expr__25829))){
return (new game.client.page_game.new_game_Record(G__25824,self__.routing,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25828.call(null,new cljs.core.Keyword(null,"routing","routing",1440253662),expr__25829))){
return (new game.client.page_game.new_game_Record(self__.simplex,G__25824,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25828.call(null,new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),expr__25829))){
return (new game.client.page_game.new_game_Record(self__.simplex,self__.routing,G__25824,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25828.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25829))){
return (new game.client.page_game.new_game_Record(self__.simplex,self__.routing,self__.subsystem,G__25824,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25828.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25829))){
return (new game.client.page_game.new_game_Record(self__.simplex,self__.routing,self__.subsystem,self__.started,G__25824,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25828.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25829))){
return (new game.client.page_game.new_game_Record(self__.simplex,self__.routing,self__.subsystem,self__.started,self__.start_count,G__25824,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.page_game.new_game_Record(self__.simplex,self__.routing,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25824),null));
}
}
}
}
}
}
});

game.client.page_game.new_game_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"simplex","simplex",-495056721),self__.simplex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing","routing",1440253662),self__.routing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),self__.subsystem],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_game.new_game_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25824){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.page_game.new_game_Record(self__.simplex,self__.routing,self__.subsystem,self__.started,self__.start_count,self__.stop_count,G__25824,self__.__extmap,self__.__hash));
});

game.client.page_game.new_game_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.page_game.new_game_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.page_game.new_game_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25823){
var self__ = this;
var G__25823__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_game.start.call(null,G__25823__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.page_game.new_game_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25823){
var self__ = this;
var G__25823__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_game.stop.call(null,G__25823__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.page_game.new_game_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"simplex","simplex",1145474806,null),new cljs.core.Symbol(null,"routing","routing",-1214182107,null),new cljs.core.Symbol(null,"subsystem","subsystem",-651308578,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.page_game.new_game_Record.cljs$lang$type = true;

game.client.page_game.new_game_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.page-game/new-game-Record");
});

game.client.page_game.new_game_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.page-game/new-game-Record");
});

game.client.page_game.__GT_new_game_Record = (function game$client$page_game$__GT_new_game_Record(simplex,routing,subsystem,started,start_count,stop_count){
return (new game.client.page_game.new_game_Record(simplex,routing,subsystem,started,start_count,stop_count,null,null,null));
});

game.client.page_game.map__GT_new_game_Record = (function game$client$page_game$map__GT_new_game_Record(G__25826){
return (new game.client.page_game.new_game_Record(new cljs.core.Keyword(null,"simplex","simplex",-495056721).cljs$core$IFn$_invoke$arity$1(G__25826),new cljs.core.Keyword(null,"routing","routing",1440253662).cljs$core$IFn$_invoke$arity$1(G__25826),new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(G__25826),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25826),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25826),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25826),null,cljs.core.dissoc.call(null,G__25826,new cljs.core.Keyword(null,"simplex","simplex",-495056721),new cljs.core.Keyword(null,"routing","routing",1440253662),new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.page_game.new_game = (function game$client$page_game$new_game(){
return com.stuartsierra.component.using.call(null,game.client.page_game.map__GT_new_game_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simplex","simplex",-495056721),new cljs.core.Keyword(null,"routing","routing",1440253662)], null));
});

//# sourceMappingURL=page_game.js.map