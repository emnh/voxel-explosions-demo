// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.worker.state');
goog.require('cljs.core');
game.worker.state.float32_size = (4);
game.worker.state.int32_size = (4);
game.worker.state.xyz_size = (3);

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
game.worker.state.Ground = (function (height_field,width,height,x_faces,y_faces,__meta,__extmap,__hash){
this.height_field = height_field;
this.width = width;
this.height = height;
this.x_faces = x_faces;
this.y_faces = y_faces;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.worker.state.Ground.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.worker.state.Ground.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k13175,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__13177 = (((k13175 instanceof cljs.core.Keyword))?k13175.fqn:null);
switch (G__13177) {
case "height-field":
return self__.height_field;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "x-faces":
return self__.x_faces;

break;
case "y-faces":
return self__.y_faces;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13175,else__6835__auto__);

}
});

game.worker.state.Ground.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.worker.state.Ground{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height-field","height-field",966744104),self__.height_field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),self__.x_faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),self__.y_faces],null))], null),self__.__extmap));
});

game.worker.state.Ground.prototype.cljs$core$IIterable$ = true;

game.worker.state.Ground.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13174){
var self__ = this;
var G__13174__$1 = this;
return (new cljs.core.RecordIter((0),G__13174__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height-field","height-field",966744104),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.worker.state.Ground.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.worker.state.Ground.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.worker.state.Ground(self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.__meta,self__.__extmap,self__.__hash));
});

game.worker.state.Ground.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

game.worker.state.Ground.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.worker.state.Ground.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.worker.state.Ground.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),null,new cljs.core.Keyword(null,"height-field","height-field",966744104),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.worker.state.Ground(self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.worker.state.Ground.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__13174){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__13178 = cljs.core.keyword_identical_QMARK_;
var expr__13179 = k__6840__auto__;
if(cljs.core.truth_(pred__13178.call(null,new cljs.core.Keyword(null,"height-field","height-field",966744104),expr__13179))){
return (new game.worker.state.Ground(G__13174,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13178.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__13179))){
return (new game.worker.state.Ground(self__.height_field,G__13174,self__.height,self__.x_faces,self__.y_faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13178.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__13179))){
return (new game.worker.state.Ground(self__.height_field,self__.width,G__13174,self__.x_faces,self__.y_faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13178.call(null,new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),expr__13179))){
return (new game.worker.state.Ground(self__.height_field,self__.width,self__.height,G__13174,self__.y_faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13178.call(null,new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),expr__13179))){
return (new game.worker.state.Ground(self__.height_field,self__.width,self__.height,self__.x_faces,G__13174,self__.__meta,self__.__extmap,null));
} else {
return (new game.worker.state.Ground(self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__13174),null));
}
}
}
}
}
});

game.worker.state.Ground.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height-field","height-field",966744104),self__.height_field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),self__.x_faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),self__.y_faces],null))], null),self__.__extmap));
});

game.worker.state.Ground.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__13174){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.worker.state.Ground(self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,G__13174,self__.__extmap,self__.__hash));
});

game.worker.state.Ground.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.worker.state.Ground.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"height-field","height-field",-1687691665,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"x-faces","x-faces",-689786786,null),new cljs.core.Symbol(null,"y-faces","y-faces",1586861352,null)], null);
});

game.worker.state.Ground.cljs$lang$type = true;

game.worker.state.Ground.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.worker.state/Ground");
});

game.worker.state.Ground.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.worker.state/Ground");
});

game.worker.state.__GT_Ground = (function game$worker$state$__GT_Ground(height_field,width,height,x_faces,y_faces){
return (new game.worker.state.Ground(height_field,width,height,x_faces,y_faces,null,null,null));
});

game.worker.state.map__GT_Ground = (function game$worker$state$map__GT_Ground(G__13176){
return (new game.worker.state.Ground(new cljs.core.Keyword(null,"height-field","height-field",966744104).cljs$core$IFn$_invoke$arity$1(G__13176),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__13176),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__13176),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983).cljs$core$IFn$_invoke$arity$1(G__13176),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175).cljs$core$IFn$_invoke$arity$1(G__13176),null,cljs.core.dissoc.call(null,G__13176,new cljs.core.Keyword(null,"height-field","height-field",966744104),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175)),null));
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
game.worker.state.State = (function (buffer,int32_buffer,float32_buffer,positions_offset,bboxes_offset,move_targets_offset,__meta,__extmap,__hash){
this.buffer = buffer;
this.int32_buffer = int32_buffer;
this.float32_buffer = float32_buffer;
this.positions_offset = positions_offset;
this.bboxes_offset = bboxes_offset;
this.move_targets_offset = move_targets_offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.worker.state.State.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.worker.state.State.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k13183,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__13185 = (((k13183 instanceof cljs.core.Keyword))?k13183.fqn:null);
switch (G__13185) {
case "buffer":
return self__.buffer;

break;
case "int32-buffer":
return self__.int32_buffer;

break;
case "float32-buffer":
return self__.float32_buffer;

break;
case "positions-offset":
return self__.positions_offset;

break;
case "bboxes-offset":
return self__.bboxes_offset;

break;
case "move-targets-offset":
return self__.move_targets_offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13183,else__6835__auto__);

}
});

game.worker.state.State.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.worker.state.State{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"int32-buffer","int32-buffer",1153703043),self__.int32_buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"float32-buffer","float32-buffer",781968574),self__.float32_buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"positions-offset","positions-offset",-682032705),self__.positions_offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bboxes-offset","bboxes-offset",-642088031),self__.bboxes_offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"move-targets-offset","move-targets-offset",-201565534),self__.move_targets_offset],null))], null),self__.__extmap));
});

game.worker.state.State.prototype.cljs$core$IIterable$ = true;

game.worker.state.State.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13182){
var self__ = this;
var G__13182__$1 = this;
return (new cljs.core.RecordIter((0),G__13182__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"int32-buffer","int32-buffer",1153703043),new cljs.core.Keyword(null,"float32-buffer","float32-buffer",781968574),new cljs.core.Keyword(null,"positions-offset","positions-offset",-682032705),new cljs.core.Keyword(null,"bboxes-offset","bboxes-offset",-642088031),new cljs.core.Keyword(null,"move-targets-offset","move-targets-offset",-201565534)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.worker.state.State.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.worker.state.State.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.worker.state.State(self__.buffer,self__.int32_buffer,self__.float32_buffer,self__.positions_offset,self__.bboxes_offset,self__.move_targets_offset,self__.__meta,self__.__extmap,self__.__hash));
});

game.worker.state.State.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.worker.state.State.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.worker.state.State.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.worker.state.State.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"bboxes-offset","bboxes-offset",-642088031),null,new cljs.core.Keyword(null,"move-targets-offset","move-targets-offset",-201565534),null,new cljs.core.Keyword(null,"int32-buffer","int32-buffer",1153703043),null,new cljs.core.Keyword(null,"float32-buffer","float32-buffer",781968574),null,new cljs.core.Keyword(null,"buffer","buffer",617295198),null,new cljs.core.Keyword(null,"positions-offset","positions-offset",-682032705),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.worker.state.State(self__.buffer,self__.int32_buffer,self__.float32_buffer,self__.positions_offset,self__.bboxes_offset,self__.move_targets_offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.worker.state.State.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__13182){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__13186 = cljs.core.keyword_identical_QMARK_;
var expr__13187 = k__6840__auto__;
if(cljs.core.truth_(pred__13186.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198),expr__13187))){
return (new game.worker.state.State(G__13182,self__.int32_buffer,self__.float32_buffer,self__.positions_offset,self__.bboxes_offset,self__.move_targets_offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13186.call(null,new cljs.core.Keyword(null,"int32-buffer","int32-buffer",1153703043),expr__13187))){
return (new game.worker.state.State(self__.buffer,G__13182,self__.float32_buffer,self__.positions_offset,self__.bboxes_offset,self__.move_targets_offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13186.call(null,new cljs.core.Keyword(null,"float32-buffer","float32-buffer",781968574),expr__13187))){
return (new game.worker.state.State(self__.buffer,self__.int32_buffer,G__13182,self__.positions_offset,self__.bboxes_offset,self__.move_targets_offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13186.call(null,new cljs.core.Keyword(null,"positions-offset","positions-offset",-682032705),expr__13187))){
return (new game.worker.state.State(self__.buffer,self__.int32_buffer,self__.float32_buffer,G__13182,self__.bboxes_offset,self__.move_targets_offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13186.call(null,new cljs.core.Keyword(null,"bboxes-offset","bboxes-offset",-642088031),expr__13187))){
return (new game.worker.state.State(self__.buffer,self__.int32_buffer,self__.float32_buffer,self__.positions_offset,G__13182,self__.move_targets_offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13186.call(null,new cljs.core.Keyword(null,"move-targets-offset","move-targets-offset",-201565534),expr__13187))){
return (new game.worker.state.State(self__.buffer,self__.int32_buffer,self__.float32_buffer,self__.positions_offset,self__.bboxes_offset,G__13182,self__.__meta,self__.__extmap,null));
} else {
return (new game.worker.state.State(self__.buffer,self__.int32_buffer,self__.float32_buffer,self__.positions_offset,self__.bboxes_offset,self__.move_targets_offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__13182),null));
}
}
}
}
}
}
});

game.worker.state.State.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"int32-buffer","int32-buffer",1153703043),self__.int32_buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"float32-buffer","float32-buffer",781968574),self__.float32_buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"positions-offset","positions-offset",-682032705),self__.positions_offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bboxes-offset","bboxes-offset",-642088031),self__.bboxes_offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"move-targets-offset","move-targets-offset",-201565534),self__.move_targets_offset],null))], null),self__.__extmap));
});

game.worker.state.State.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__13182){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.worker.state.State(self__.buffer,self__.int32_buffer,self__.float32_buffer,self__.positions_offset,self__.bboxes_offset,self__.move_targets_offset,G__13182,self__.__extmap,self__.__hash));
});

game.worker.state.State.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.worker.state.State.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"int32-buffer","int32-buffer",-1500732726,null),new cljs.core.Symbol(null,"float32-buffer","float32-buffer",-1872467195,null),new cljs.core.Symbol(null,"positions-offset","positions-offset",958498822,null),new cljs.core.Symbol(null,"bboxes-offset","bboxes-offset",998443496,null),new cljs.core.Symbol(null,"move-targets-offset","move-targets-offset",1438965993,null)], null);
});

game.worker.state.State.cljs$lang$type = true;

game.worker.state.State.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.worker.state/State");
});

game.worker.state.State.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.worker.state/State");
});

game.worker.state.__GT_State = (function game$worker$state$__GT_State(buffer,int32_buffer,float32_buffer,positions_offset,bboxes_offset,move_targets_offset){
return (new game.worker.state.State(buffer,int32_buffer,float32_buffer,positions_offset,bboxes_offset,move_targets_offset,null,null,null));
});

game.worker.state.map__GT_State = (function game$worker$state$map__GT_State(G__13184){
return (new game.worker.state.State(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(G__13184),new cljs.core.Keyword(null,"int32-buffer","int32-buffer",1153703043).cljs$core$IFn$_invoke$arity$1(G__13184),new cljs.core.Keyword(null,"float32-buffer","float32-buffer",781968574).cljs$core$IFn$_invoke$arity$1(G__13184),new cljs.core.Keyword(null,"positions-offset","positions-offset",-682032705).cljs$core$IFn$_invoke$arity$1(G__13184),new cljs.core.Keyword(null,"bboxes-offset","bboxes-offset",-642088031).cljs$core$IFn$_invoke$arity$1(G__13184),new cljs.core.Keyword(null,"move-targets-offset","move-targets-offset",-201565534).cljs$core$IFn$_invoke$arity$1(G__13184),null,cljs.core.dissoc.call(null,G__13184,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"int32-buffer","int32-buffer",1153703043),new cljs.core.Keyword(null,"float32-buffer","float32-buffer",781968574),new cljs.core.Keyword(null,"positions-offset","positions-offset",-682032705),new cljs.core.Keyword(null,"bboxes-offset","bboxes-offset",-642088031),new cljs.core.Keyword(null,"move-targets-offset","move-targets-offset",-201565534)),null));
});

game.worker.state._get_vector3 = (function game$worker$state$_get_vector3(float32_buffer,float32_offset,index){
var x_offset = (float32_offset + (index * game.worker.state.xyz_size));
var y_offset = (x_offset + (1));
var z_offset = (y_offset + (1));
return (new THREE.Vector3((float32_buffer[x_offset]),(float32_buffer[y_offset]),(float32_buffer[z_offset])));
});
game.worker.state._set_vector3 = (function game$worker$state$_set_vector3(float32_buffer,float32_offset,index,vector3){
var x_offset = (float32_offset + (index * game.worker.state.xyz_size));
var y_offset = (x_offset + (1));
var z_offset = (y_offset + (1));
(float32_buffer[x_offset] = vector3.x);

(float32_buffer[y_offset] = vector3.y);

return (float32_buffer[z_offset] = vector3.z);
});
game.worker.state._set_bbox = (function game$worker$state$_set_bbox(float32_buffer,float32_offset,index,bbox){
game.worker.state._set_vector3.call(null,float32_buffer,float32_offset,(index * (2)),bbox.min);

return game.worker.state._set_vector3.call(null,float32_buffer,float32_offset,((index * (2)) + (1)),bbox.max);
});
game.worker.state._get_bbox = (function game$worker$state$_get_bbox(float32_buffer,float32_offset,index){
return (new THREE.Box3(game.worker.state._get_vector3.call(null,float32_buffer,float32_offset,(index * (2))),game.worker.state._get_vector3.call(null,float32_buffer,float32_offset,((index * (2)) + (1)))));
});
game.worker.state.get_state_format = (function game$worker$state$get_state_format(unit_count){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"length","length",588987862),((unit_count * game.worker.state.xyz_size) * game.worker.state.float32_size)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bboxes","bboxes",476519350),new cljs.core.Keyword(null,"length","length",588987862),(((unit_count * (2)) * game.worker.state.xyz_size) * game.worker.state.float32_size)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"move-targets","move-targets",-685130775),new cljs.core.Keyword(null,"length","length",588987862),((unit_count * game.worker.state.xyz_size) * game.worker.state.float32_size)], null)], null);
});
game.worker.state.get_position = (function game$worker$state$get_position(state,index){
var float32_buffer = state.float32_buffer;
var positions_offset = state.positions_offset;
return game.worker.state._get_vector3.call(null,float32_buffer,positions_offset,index);
});
game.worker.state.set_position = (function game$worker$state$set_position(state,index,vector3){
var float32_buffer = state.float32_buffer;
var positions_offset = state.positions_offset;
return game.worker.state._set_vector3.call(null,float32_buffer,positions_offset,index,vector3);
});
game.worker.state.get_bbox = (function game$worker$state$get_bbox(state,index){
var float32_buffer = state.float32_buffer;
var bbox_offset = state.bboxes_offset;
return game.worker.state._get_bbox.call(null,float32_buffer,bbox_offset,index);
});
game.worker.state.set_bbox = (function game$worker$state$set_bbox(state,index,bbox){
var float32_buffer = state.float32_buffer;
var bbox_offset = state.bboxes_offset;
return game.worker.state._set_bbox.call(null,float32_buffer,bbox_offset,index,bbox);
});
game.worker.state.get_move_target = (function game$worker$state$get_move_target(state,index){
var float32_buffer = state.float32_buffer;
var move_targets_offset = state.move_targets_offset;
return game.worker.state._get_vector3.call(null,float32_buffer,move_targets_offset,index);
});
game.worker.state.set_move_target = (function game$worker$state$set_move_target(state,index,vector3){
var float32_buffer = state.float32_buffer;
var move_targets_offset = state.move_targets_offset;
return game.worker.state._set_vector3.call(null,float32_buffer,move_targets_offset,index,vector3);
});
game.worker.state.init_state = (function game$worker$state$init_state(p__13190){
var map__13202 = p__13190;
var map__13202__$1 = ((((!((map__13202 == null)))?((((map__13202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13202):map__13202);
var unit_count = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"unit-count","unit-count",-961602118));
var buffer = cljs.core.get.call(null,map__13202__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var state_format = game.worker.state.get_state_format.call(null,unit_count);
var reduce_length = ((function (state_format,map__13202,map__13202__$1,unit_count,buffer){
return (function (offset,p__13205){
var map__13206 = p__13205;
var map__13206__$1 = ((((!((map__13206 == null)))?((((map__13206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13206):map__13206);
var length = cljs.core.get.call(null,map__13206__$1,new cljs.core.Keyword(null,"length","length",588987862));
return (offset + length);
});})(state_format,map__13202,map__13202__$1,unit_count,buffer))
;
var length = cljs.core.reduce.call(null,reduce_length,(0),state_format);
var buffer__$1 = (function (){var or__6210__auto__ = buffer;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (new ArrayBuffer(length));
}
})();
var int32_buffer = (new Int32Array(buffer__$1));
var float32_buffer = (new Float32Array(buffer__$1));
var name_fn = cljs.core.name;
var reduce_fn = ((function (state_format,reduce_length,length,buffer__$1,int32_buffer,float32_buffer,name_fn,map__13202,map__13202__$1,unit_count,buffer){
return (function (p__13208,p__13209){
var vec__13210 = p__13208;
var dict = cljs.core.nth.call(null,vec__13210,(0),null);
var offset = cljs.core.nth.call(null,vec__13210,(1),null);
var map__13211 = p__13209;
var map__13211__$1 = ((((!((map__13211 == null)))?((((map__13211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13211):map__13211);
var name = cljs.core.get.call(null,map__13211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var length__$1 = cljs.core.get.call(null,map__13211__$1,new cljs.core.Keyword(null,"length","length",588987862));
var get = cljs.core.get.call(null,map__13211__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var set = cljs.core.get.call(null,map__13211__$1,new cljs.core.Keyword(null,"set","set",304602554));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,dict,cljs.core.keyword.call(null,[cljs.core.str(name_fn.call(null,name)),cljs.core.str("-offset")].join('')),(offset / game.worker.state.float32_size)),(offset + length__$1)], null);
});})(state_format,reduce_length,length,buffer__$1,int32_buffer,float32_buffer,name_fn,map__13202,map__13202__$1,unit_count,buffer))
;
var vec__13204 = cljs.core.reduce.call(null,reduce_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,(0)], null),state_format);
var offsets = cljs.core.nth.call(null,vec__13204,(0),null);
var offset = cljs.core.nth.call(null,vec__13204,(1),null);
var state = game.worker.state.map__GT_State.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer__$1,new cljs.core.Keyword(null,"int32-buffer","int32-buffer",1153703043),int32_buffer,new cljs.core.Keyword(null,"float32-buffer","float32-buffer",781968574),float32_buffer], null),offsets));
return state;
});

//# sourceMappingURL=state.js.map