// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.common');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('rum.core');
goog.require('com.stuartsierra.component');

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
game.client.common.JSObj = (function (initializer,data,__meta,__extmap,__hash){
this.initializer = initializer;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.common.JSObj.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.common.JSObj.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k10778,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__10780 = (((k10778 instanceof cljs.core.Keyword))?k10778.fqn:null);
switch (G__10780) {
case "initializer":
return self__.initializer;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10778,else__6835__auto__);

}
});

game.client.common.JSObj.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.common.JSObj{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initializer","initializer",-2068366756),self__.initializer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

game.client.common.JSObj.prototype.cljs$core$IIterable$ = true;

game.client.common.JSObj.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10777){
var self__ = this;
var G__10777__$1 = this;
return (new cljs.core.RecordIter((0),G__10777__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initializer","initializer",-2068366756),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.common.JSObj.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.common.JSObj.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.common.JSObj(self__.initializer,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.common.JSObj.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

game.client.common.JSObj.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.common.JSObj.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.common.JSObj.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initializer","initializer",-2068366756),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.common.JSObj(self__.initializer,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.common.JSObj.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__10777){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__10781 = cljs.core.keyword_identical_QMARK_;
var expr__10782 = k__6840__auto__;
if(cljs.core.truth_(pred__10781.call(null,new cljs.core.Keyword(null,"initializer","initializer",-2068366756),expr__10782))){
return (new game.client.common.JSObj(G__10777,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10781.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__10782))){
return (new game.client.common.JSObj(self__.initializer,G__10777,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.common.JSObj(self__.initializer,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__10777),null));
}
}
});

game.client.common.JSObj.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initializer","initializer",-2068366756),self__.initializer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

game.client.common.JSObj.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__10777){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.common.JSObj(self__.initializer,self__.data,G__10777,self__.__extmap,self__.__hash));
});

game.client.common.JSObj.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.common.JSObj.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.common.JSObj.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
if(cljs.core._EQ_.call(null,self__.data,null)){
return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"data","data",-232669377),self__.initializer.call(null));
} else {
return component__$1;
}
});

game.client.common.JSObj.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

game.client.common.JSObj.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initializer","initializer",-427835229,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

game.client.common.JSObj.cljs$lang$type = true;

game.client.common.JSObj.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.common/JSObj");
});

game.client.common.JSObj.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.common/JSObj");
});

game.client.common.__GT_JSObj = (function game$client$common$__GT_JSObj(initializer,data){
return (new game.client.common.JSObj(initializer,data,null,null,null));
});

game.client.common.map__GT_JSObj = (function game$client$common$map__GT_JSObj(G__10779){
return (new game.client.common.JSObj(new cljs.core.Keyword(null,"initializer","initializer",-2068366756).cljs$core$IFn$_invoke$arity$1(G__10779),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__10779),null,cljs.core.dissoc.call(null,G__10779,new cljs.core.Keyword(null,"initializer","initializer",-2068366756),new cljs.core.Keyword(null,"data","data",-232669377)),null));
});

game.client.common.new_jsobj = (function game$client$common$new_jsobj(initializer){
return game.client.common.map__GT_JSObj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initializer","initializer",-2068366756),initializer], null));
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
game.client.common.LCObj = (function (data,__meta,__extmap,__hash){
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.common.LCObj.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.common.LCObj.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k10786,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__10788 = (((k10786 instanceof cljs.core.Keyword))?k10786.fqn:null);
switch (G__10788) {
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10786,else__6835__auto__);

}
});

game.client.common.LCObj.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.common.LCObj{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

game.client.common.LCObj.prototype.cljs$core$IIterable$ = true;

game.client.common.LCObj.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10785){
var self__ = this;
var G__10785__$1 = this;
return (new cljs.core.RecordIter((0),G__10785__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.common.LCObj.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.common.LCObj.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.common.LCObj(self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.common.LCObj.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

game.client.common.LCObj.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.common.LCObj.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.common.LCObj.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.common.LCObj(self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.common.LCObj.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__10785){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__10789 = cljs.core.keyword_identical_QMARK_;
var expr__10790 = k__6840__auto__;
if(cljs.core.truth_(pred__10789.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__10790))){
return (new game.client.common.LCObj(G__10785,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.common.LCObj(self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__10785),null));
}
});

game.client.common.LCObj.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

game.client.common.LCObj.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__10785){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.common.LCObj(self__.data,G__10785,self__.__extmap,self__.__hash));
});

game.client.common.LCObj.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.common.LCObj.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.common.LCObj.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

game.client.common.LCObj.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

game.client.common.LCObj.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

game.client.common.LCObj.cljs$lang$type = true;

game.client.common.LCObj.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.common/LCObj");
});

game.client.common.LCObj.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.common/LCObj");
});

game.client.common.__GT_LCObj = (function game$client$common$__GT_LCObj(data){
return (new game.client.common.LCObj(data,null,null,null));
});

game.client.common.map__GT_LCObj = (function game$client$common$map__GT_LCObj(G__10787){
return (new game.client.common.LCObj(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__10787),null,cljs.core.dissoc.call(null,G__10787,new cljs.core.Keyword(null,"data","data",-232669377)),null));
});

game.client.common.new_lc = (function game$client$common$new_lc(data){
return game.client.common.map__GT_LCObj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
game.client.common.data = (function game$client$common$data(component){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component);
});
/**
 * 
 */
game.client.common.list_item = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__10797__delegate = function (content,p__10793){
var vec__10794 = p__10793;
var attrs = cljs.core.nth.call(null,vec__10794,(0),null);
if(cljs.core.truth_(attrs)){
var attrs10795 = attrs;
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs10795))?sablono.interpreter.attributes.call(null,attrs10795):null),((cljs.core.map_QMARK_.call(null,attrs10795))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,content)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10795),sablono.interpreter.interpret.call(null,content)], null)));
} else {
var attrs10796 = content;
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs10796))?sablono.interpreter.attributes.call(null,attrs10796):null),((cljs.core.map_QMARK_.call(null,attrs10796))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10796)], null)));
}
};
var G__10797 = function (content,var_args){
var p__10793 = null;
if (arguments.length > 1) {
var G__10798__i = 0, G__10798__a = new Array(arguments.length -  1);
while (G__10798__i < G__10798__a.length) {G__10798__a[G__10798__i] = arguments[G__10798__i + 1]; ++G__10798__i;}
  p__10793 = new cljs.core.IndexedSeq(G__10798__a,0);
} 
return G__10797__delegate.call(this,content,p__10793);};
G__10797.cljs$lang$maxFixedArity = 1;
G__10797.cljs$lang$applyTo = (function (arglist__10799){
var content = cljs.core.first(arglist__10799);
var p__10793 = cljs.core.rest(arglist__10799);
return G__10797__delegate(content,p__10793);
});
G__10797.cljs$core$IFn$_invoke$arity$variadic = G__10797__delegate;
return G__10797;
})()
);
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),null),"list-item");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__10800__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__10800 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__10801__i = 0, G__10801__a = new Array(arguments.length -  0);
while (G__10801__i < G__10801__a.length) {G__10801__a[G__10801__i] = arguments[G__10801__i + 0]; ++G__10801__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__10801__a,0);
} 
return G__10800__delegate.call(this,args__10724__auto__);};
G__10800.cljs$lang$maxFixedArity = 0;
G__10800.cljs$lang$applyTo = (function (arglist__10802){
var args__10724__auto__ = cljs.core.seq(arglist__10802);
return G__10800__delegate(args__10724__auto__);
});
G__10800.cljs$core$IFn$_invoke$arity$variadic = G__10800__delegate;
return G__10800;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
/**
 * 
 */
game.client.common.header = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (h){
return React.createElement("div",null,React.createElement("h1",{"className": "page-header"},sablono.interpreter.interpret.call(null,h)));
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"header");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__10803__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__10803 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__10804__i = 0, G__10804__a = new Array(arguments.length -  0);
while (G__10804__i < G__10804__a.length) {G__10804__a[G__10804__i] = arguments[G__10804__i + 0]; ++G__10804__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__10804__a,0);
} 
return G__10803__delegate.call(this,args__10724__auto__);};
G__10803.cljs$lang$maxFixedArity = 0;
G__10803.cljs$lang$applyTo = (function (arglist__10805){
var args__10724__auto__ = cljs.core.seq(arglist__10805);
return G__10803__delegate(args__10724__auto__);
});
G__10803.cljs$core$IFn$_invoke$arity$variadic = G__10803__delegate;
return G__10803;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
game.client.common.promise_obj = (function game$client$common$promise_obj(){
var tmp = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var p1 = promesa.core.promise.call(null,((function (tmp){
return (function (res,rej){
cljs.core.swap_BANG_.call(null,tmp,((function (tmp){
return (function (p1__10806_SHARP_){
return cljs.core.assoc.call(null,p1__10806_SHARP_,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),res);
});})(tmp))
);

return cljs.core.swap_BANG_.call(null,tmp,((function (tmp){
return (function (p1__10807_SHARP_){
return cljs.core.assoc.call(null,p1__10807_SHARP_,new cljs.core.Keyword(null,"reject","reject",1415953113),rej);
});})(tmp))
);
});})(tmp))
);
(p1["resolve"] = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp)));

(p1["reject"] = new cljs.core.Keyword(null,"reject","reject",1415953113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp)));

return p1;
});
game.client.common.unique_id = (function game$client$common$unique_id(var_args){
var args10808 = [];
var len__7279__auto___10811 = arguments.length;
var i__7280__auto___10812 = (0);
while(true){
if((i__7280__auto___10812 < len__7279__auto___10811)){
args10808.push((arguments[i__7280__auto___10812]));

var G__10813 = (i__7280__auto___10812 + (1));
i__7280__auto___10812 = G__10813;
continue;
} else {
}
break;
}

var G__10810 = args10808.length;
switch (G__10810) {
case 0:
return game.client.common.unique_id.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return game.client.common.unique_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10808.length)].join('')));

}
});

game.client.common.unique_id.cljs$core$IFn$_invoke$arity$0 = (function (){
return game.client.math.round.call(null,((new Date()).getTime() + (game.client.math.random.call(null) * (100))));
});

game.client.common.unique_id.cljs$core$IFn$_invoke$arity$1 = (function (element){
var id = element.id;
if(!(cljs.core._EQ_.call(null,id,""))){
return id;
} else {
var id__$1 = game.client.common.unique_id.call(null);
element.id = id__$1;

return id__$1;
}
});

game.client.common.unique_id.cljs$lang$maxFixedArity = 1;
game.client.common.game_time = (function game$client$common$game_time(){
return performance.now();
});

//# sourceMappingURL=common.js.map