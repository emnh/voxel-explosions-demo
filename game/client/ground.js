// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.ground');
goog.require('cljs.core');
goog.require('game.client.socket');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('promesa.core');
goog.require('jayq.core');
goog.require('game.client.scene');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
game.client.ground.get_map = (function game$client$ground$get_map(component,config,socket,scene,mesh){
return cats.core.bind.call(null,game.client.socket.rpc.call(null,socket,"get-map",new cljs.core.Keyword(null,"name","name",1843675177),"default"),(function (mapdata){
var grass = THREE.ImageUtils.loadTexture("models/images/grass.jpg");
var m_opts = {"map": grass};
var material = (new THREE.MeshLambertMaterial(m_opts));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(mapdata);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(mapdata);
var x_faces = new cljs.core.Keyword(null,"x-faces","x-faces",1964648983).cljs$core$IFn$_invoke$arity$1(mapdata);
var y_faces = new cljs.core.Keyword(null,"y-faces","y-faces",-53670175).cljs$core$IFn$_invoke$arity$1(mapdata);
var data = (new Float32Array(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(mapdata)));
var wrapping = THREE.RepeatWrapping;
var map_repeat_width = (width / (100));
var map_repeat_height = (height / (100));
var geometry = (new THREE.PlaneBufferGeometry(width,height,x_faces,y_faces));
var rotation = (new THREE.Matrix4()).makeRotationX((Math.PI / (-2)));
material.map.wrapS = wrapping;

material.map.wrapT = wrapping;

material.map.repeat.set(map_repeat_width,map_repeat_height);

geometry.attributes.position.array.set(data);

geometry.computeFaceNormals();

geometry.computeVertexNormals();

var mesh__$1 = (new THREE.Mesh(geometry,material));
game.client.scene.add.call(null,scene,mesh__$1);

return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh__$1);
}));
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
game.client.ground.InitGround = (function (config,socket,scene,mesh,__meta,__extmap,__hash){
this.config = config;
this.socket = socket;
this.scene = scene;
this.mesh = mesh;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.ground.InitGround.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.ground.InitGround.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k11307,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__11309 = (((k11307 instanceof cljs.core.Keyword))?k11307.fqn:null);
switch (G__11309) {
case "config":
return self__.config;

break;
case "socket":
return self__.socket;

break;
case "scene":
return self__.scene;

break;
case "mesh":
return self__.mesh;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11307,else__6835__auto__);

}
});

game.client.ground.InitGround.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.ground.InitGround{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket","socket",59137063),self__.socket],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh","mesh",456320595),self__.mesh],null))], null),self__.__extmap));
});

game.client.ground.InitGround.prototype.cljs$core$IIterable$ = true;

game.client.ground.InitGround.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11306){
var self__ = this;
var G__11306__$1 = this;
return (new cljs.core.RecordIter((0),G__11306__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"socket","socket",59137063),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"mesh","mesh",456320595)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.ground.InitGround.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.ground.InitGround.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.ground.InitGround(self__.config,self__.socket,self__.scene,self__.mesh,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.ground.InitGround.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

game.client.ground.InitGround.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.ground.InitGround.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.ground.InitGround.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"socket","socket",59137063),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"mesh","mesh",456320595),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.ground.InitGround(self__.config,self__.socket,self__.scene,self__.mesh,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.ground.InitGround.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__11306){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__11310 = cljs.core.keyword_identical_QMARK_;
var expr__11311 = k__6840__auto__;
if(cljs.core.truth_(pred__11310.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__11311))){
return (new game.client.ground.InitGround(G__11306,self__.socket,self__.scene,self__.mesh,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11310.call(null,new cljs.core.Keyword(null,"socket","socket",59137063),expr__11311))){
return (new game.client.ground.InitGround(self__.config,G__11306,self__.scene,self__.mesh,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11310.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__11311))){
return (new game.client.ground.InitGround(self__.config,self__.socket,G__11306,self__.mesh,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11310.call(null,new cljs.core.Keyword(null,"mesh","mesh",456320595),expr__11311))){
return (new game.client.ground.InitGround(self__.config,self__.socket,self__.scene,G__11306,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.ground.InitGround(self__.config,self__.socket,self__.scene,self__.mesh,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__11306),null));
}
}
}
}
});

game.client.ground.InitGround.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket","socket",59137063),self__.socket],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh","mesh",456320595),self__.mesh],null))], null),self__.__extmap));
});

game.client.ground.InitGround.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__11306){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.ground.InitGround(self__.config,self__.socket,self__.scene,self__.mesh,G__11306,self__.__extmap,self__.__hash));
});

game.client.ground.InitGround.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.ground.InitGround.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.ground.InitGround.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
if(cljs.core.not.call(null,(function (){var and__6198__auto__ = game.client.common.data.call(null,self__.scene);
if(cljs.core.truth_(and__6198__auto__)){
return self__.mesh;
} else {
return and__6198__auto__;
}
})())){
return game.client.ground.get_map.call(null,component__$1,self__.config,self__.socket,self__.scene,self__.mesh);
} else {
return component__$1;
}
});

game.client.ground.InitGround.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = game.client.common.data.call(null,self__.scene);
if(cljs.core.truth_(and__6198__auto__)){
return self__.mesh;
} else {
return and__6198__auto__;
}
})())){
game.client.scene.remove.call(null,self__.scene,self__.mesh);
} else {
}

return component__$1;
});

game.client.ground.InitGround.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"socket","socket",1699668590,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"mesh","mesh",2096852122,null)], null);
});

game.client.ground.InitGround.cljs$lang$type = true;

game.client.ground.InitGround.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.ground/InitGround");
});

game.client.ground.InitGround.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.ground/InitGround");
});

game.client.ground.__GT_InitGround = (function game$client$ground$__GT_InitGround(config,socket,scene,mesh){
return (new game.client.ground.InitGround(config,socket,scene,mesh,null,null,null));
});

game.client.ground.map__GT_InitGround = (function game$client$ground$map__GT_InitGround(G__11308){
return (new game.client.ground.InitGround(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__11308),new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(G__11308),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__11308),new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(G__11308),null,cljs.core.dissoc.call(null,G__11308,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"socket","socket",59137063),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"mesh","mesh",456320595)),null));
});

game.client.ground.new_init_ground = (function game$client$ground$new_init_ground(){
return com.stuartsierra.component.using.call(null,game.client.ground.map__GT_InitGround.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"socket","socket",59137063),new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
});

//# sourceMappingURL=ground.js.map