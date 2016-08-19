// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.progress_manager');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('com.stuartsierra.component');
goog.require('promesa.core');
goog.require('game.client.config');
game.client.progress_manager.update_progress_item = (function game$client$progress_manager$update_progress_item(component,resource,completed,size){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"progress-map","progress-map",1632684498).cljs$core$IFn$_invoke$arity$1(component),(function (p1__13861_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__13861_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resource,new cljs.core.Keyword(null,"completed","completed",-486056503)], null),completed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resource,new cljs.core.Keyword(null,"total","total",1916810418)], null),size);
}));
});
game.client.progress_manager.get_progress_map = (function game$client$progress_manager$get_progress_map(component){
return new cljs.core.Keyword(null,"progress-map","progress-map",1632684498).cljs$core$IFn$_invoke$arity$1(component);
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
game.client.progress_manager.new_progress_manager_Record = (function (progress_map,started,start_count,stop_count,__meta,__extmap,__hash){
this.progress_map = progress_map;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k13864,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__13866 = (((k13864 instanceof cljs.core.Keyword))?k13864.fqn:null);
switch (G__13866) {
case "progress-map":
return self__.progress_map;

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
return cljs.core.get.call(null,self__.__extmap,k13864,else__6835__auto__);

}
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.progress-manager.new-progress-manager-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress-map","progress-map",1632684498),self__.progress_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IIterable$ = true;

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13863){
var self__ = this;
var G__13863__$1 = this;
return (new cljs.core.RecordIter((0),G__13863__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress-map","progress-map",1632684498),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.progress_manager.new_progress_manager_Record(self__.progress_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"progress-map","progress-map",1632684498),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.progress_manager.new_progress_manager_Record(self__.progress_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__13863){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__13867 = cljs.core.keyword_identical_QMARK_;
var expr__13868 = k__6840__auto__;
if(cljs.core.truth_(pred__13867.call(null,new cljs.core.Keyword(null,"progress-map","progress-map",1632684498),expr__13868))){
return (new game.client.progress_manager.new_progress_manager_Record(G__13863,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13867.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__13868))){
return (new game.client.progress_manager.new_progress_manager_Record(self__.progress_map,G__13863,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13867.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__13868))){
return (new game.client.progress_manager.new_progress_manager_Record(self__.progress_map,self__.started,G__13863,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13867.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__13868))){
return (new game.client.progress_manager.new_progress_manager_Record(self__.progress_map,self__.started,self__.start_count,G__13863,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.progress_manager.new_progress_manager_Record(self__.progress_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__13863),null));
}
}
}
}
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress-map","progress-map",1632684498),self__.progress_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__13863){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.progress_manager.new_progress_manager_Record(self__.progress_map,self__.started,self__.start_count,self__.stop_count,G__13863,self__.__extmap,self__.__hash));
});

game.client.progress_manager.new_progress_manager_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.progress_manager.new_progress_manager_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.progress_manager.new_progress_manager_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__13862){
var self__ = this;
var G__13862__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__13862__$1){
return (function (component){
var progress_map__$1 = (function (){var or__6210__auto__ = self__.progress_map;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"progress-map","progress-map",1632684498),progress_map__$1);
});})(G__13862__$1))
.call(null,G__13862__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.progress_manager.new_progress_manager_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__13862){
var self__ = this;
var G__13862__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__13862__$1){
return (function (component){
return component;
});})(G__13862__$1))
.call(null,G__13862__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.progress_manager.new_progress_manager_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"progress-map","progress-map",-1021751271,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.progress_manager.new_progress_manager_Record.cljs$lang$type = true;

game.client.progress_manager.new_progress_manager_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.progress-manager/new-progress-manager-Record");
});

game.client.progress_manager.new_progress_manager_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.progress-manager/new-progress-manager-Record");
});

game.client.progress_manager.__GT_new_progress_manager_Record = (function game$client$progress_manager$__GT_new_progress_manager_Record(progress_map,started,start_count,stop_count){
return (new game.client.progress_manager.new_progress_manager_Record(progress_map,started,start_count,stop_count,null,null,null));
});

game.client.progress_manager.map__GT_new_progress_manager_Record = (function game$client$progress_manager$map__GT_new_progress_manager_Record(G__13865){
return (new game.client.progress_manager.new_progress_manager_Record(new cljs.core.Keyword(null,"progress-map","progress-map",1632684498).cljs$core$IFn$_invoke$arity$1(G__13865),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__13865),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__13865),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__13865),null,cljs.core.dissoc.call(null,G__13865,new cljs.core.Keyword(null,"progress-map","progress-map",1632684498),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.progress_manager.new_progress_manager = (function game$client$progress_manager$new_progress_manager(){
return com.stuartsierra.component.using.call(null,game.client.progress_manager.map__GT_new_progress_manager_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=progress_manager.js.map