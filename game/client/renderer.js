// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.renderer');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('game.client.magic');
goog.require('jayq.core');
goog.require('game.client.explosion');
goog.require('game.client.overlay');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
game.client.renderer.render_loop = (function game$client$renderer$render_loop(component){
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(component)))){
var start_time = cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(component));
var end_time = game.client.common.game_time.call(null);
var elapsed_time = (end_time - start_time);
var camera = game.client.common.data.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(component));
var scene = game.client.common.data.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(component));
var renderer = game.client.common.data.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(component));
var three_overlay = new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583).cljs$core$IFn$_invoke$arity$1(component);
var overlay_renderer = new cljs.core.Keyword(null,"overlay-renderer","overlay-renderer",-1232859709).cljs$core$IFn$_invoke$arity$1(three_overlay);
var render_stats = game.client.common.data.call(null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262).cljs$core$IFn$_invoke$arity$1(component));
var pixi_renderer = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409)], null));
var pixi_stage = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"stage","stage",1843544772)], null));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309).cljs$core$IFn$_invoke$arity$1(component),elapsed_time);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(component),end_time);

render_stats.update();

game.client.magic.on_render.call(null,component,new cljs.core.Keyword(null,"update-magic","update-magic",-70685105).cljs$core$IFn$_invoke$arity$1(component));

game.client.explosion.on_render.call(null,component,new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756).cljs$core$IFn$_invoke$arity$1(component));

renderer.render(scene,camera);

game.client.overlay.on_xp_render.call(null,component,three_overlay);

return requestAnimationFrame(cljs.core.partial.call(null,game$client$renderer$render_loop,component));
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
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
game.client.renderer.new_init_renderer_Record = (function (renderer,three_overlay,camera,scene,render_stats,pixi_overlay,update_magic,update_explosion,running,last_frame_time,last_frame_elapsed,started,start_count,stop_count,__meta,__extmap,__hash){
this.renderer = renderer;
this.three_overlay = three_overlay;
this.camera = camera;
this.scene = scene;
this.render_stats = render_stats;
this.pixi_overlay = pixi_overlay;
this.update_magic = update_magic;
this.update_explosion = update_explosion;
this.running = running;
this.last_frame_time = last_frame_time;
this.last_frame_elapsed = last_frame_elapsed;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.renderer.new_init_renderer_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25812,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25814 = (((k25812 instanceof cljs.core.Keyword))?k25812.fqn:null);
switch (G__25814) {
case "started":
return self__.started;

break;
case "update-explosion":
return self__.update_explosion;

break;
case "stop-count":
return self__.stop_count;

break;
case "render-stats":
return self__.render_stats;

break;
case "last-frame-elapsed":
return self__.last_frame_elapsed;

break;
case "renderer":
return self__.renderer;

break;
case "running":
return self__.running;

break;
case "pixi-overlay":
return self__.pixi_overlay;

break;
case "update-magic":
return self__.update_magic;

break;
case "start-count":
return self__.start_count;

break;
case "camera":
return self__.camera;

break;
case "three-overlay":
return self__.three_overlay;

break;
case "last-frame-time":
return self__.last_frame_time;

break;
case "scene":
return self__.scene;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25812,else__6835__auto__);

}
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.renderer.new-init-renderer-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),self__.three_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),self__.pixi_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"update-magic","update-magic",-70685105),self__.update_magic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756),self__.update_explosion],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running","running",1554969103),self__.running],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),self__.last_frame_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309),self__.last_frame_elapsed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IIterable$ = true;

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25811){
var self__ = this;
var G__25811__$1 = this;
return (new cljs.core.RecordIter((0),G__25811__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"update-magic","update-magic",-70685105),new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),null,new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"running","running",1554969103),null,new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),null,new cljs.core.Keyword(null,"update-magic","update-magic",-70685105),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),null,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25811){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25815 = cljs.core.keyword_identical_QMARK_;
var expr__25816 = k__6840__auto__;
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(G__25811,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,G__25811,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,G__25811,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,G__25811,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,G__25811,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,G__25811,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"update-magic","update-magic",-70685105),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,G__25811,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,G__25811,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"running","running",1554969103),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,G__25811,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,G__25811,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,G__25811,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,G__25811,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,G__25811,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25815.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25816))){
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,G__25811,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25811),null));
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

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),self__.three_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),self__.pixi_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"update-magic","update-magic",-70685105),self__.update_magic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756),self__.update_explosion],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running","running",1554969103),self__.running],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),self__.last_frame_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309),self__.last_frame_elapsed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25811){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.renderer.new_init_renderer_Record(self__.renderer,self__.three_overlay,self__.camera,self__.scene,self__.render_stats,self__.pixi_overlay,self__.update_magic,self__.update_explosion,self__.running,self__.last_frame_time,self__.last_frame_elapsed,self__.started,self__.start_count,self__.stop_count,G__25811,self__.__extmap,self__.__hash));
});

game.client.renderer.new_init_renderer_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.renderer.new_init_renderer_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.renderer.new_init_renderer_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25810){
var self__ = this;
var G__25810__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25810__$1){
return (function (component){
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),cljs.core.atom.call(null,game.client.common.game_time.call(null))),new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309),cljs.core.atom.call(null,(0))),new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.atom.call(null,true));
game.client.renderer.render_loop.call(null,component__$1);

return component__$1;
});})(G__25810__$1))
.call(null,G__25810__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.renderer.new_init_renderer_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25810){
var self__ = this;
var G__25810__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25810__$1){
return (function (component){
if(cljs.core.not_EQ_.call(null,self__.running,null)){
cljs.core.reset_BANG_.call(null,self__.running,false);
} else {
}

return component;
});})(G__25810__$1))
.call(null,G__25810__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.renderer.new_init_renderer_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"three-overlay","three-overlay",673970944,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"render-stats","render-stats",1214813265,null),new cljs.core.Symbol(null,"pixi-overlay","pixi-overlay",-1216303978,null),new cljs.core.Symbol(null,"update-magic","update-magic",1569846422,null),new cljs.core.Symbol(null,"update-explosion","update-explosion",695329771,null),new cljs.core.Symbol(null,"running","running",-1099466666,null),new cljs.core.Symbol(null,"last-frame-time","last-frame-time",-1680357152,null),new cljs.core.Symbol(null,"last-frame-elapsed","last-frame-elapsed",206887218,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.renderer.new_init_renderer_Record.cljs$lang$type = true;

game.client.renderer.new_init_renderer_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.renderer/new-init-renderer-Record");
});

game.client.renderer.new_init_renderer_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.renderer/new-init-renderer-Record");
});

game.client.renderer.__GT_new_init_renderer_Record = (function game$client$renderer$__GT_new_init_renderer_Record(renderer,three_overlay,camera,scene,render_stats,pixi_overlay,update_magic,update_explosion,running,last_frame_time,last_frame_elapsed,started,start_count,stop_count){
return (new game.client.renderer.new_init_renderer_Record(renderer,three_overlay,camera,scene,render_stats,pixi_overlay,update_magic,update_explosion,running,last_frame_time,last_frame_elapsed,started,start_count,stop_count,null,null,null));
});

game.client.renderer.map__GT_new_init_renderer_Record = (function game$client$renderer$map__GT_new_init_renderer_Record(G__25813){
return (new game.client.renderer.new_init_renderer_Record(new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"update-magic","update-magic",-70685105).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25813),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25813),null,cljs.core.dissoc.call(null,G__25813,new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"update-magic","update-magic",-70685105),new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),new cljs.core.Keyword(null,"last-frame-elapsed","last-frame-elapsed",-1433644309),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.renderer.new_init_renderer = (function game$client$renderer$new_init_renderer(){
return com.stuartsierra.component.using.call(null,game.client.renderer.map__GT_new_init_renderer_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"update-magic","update-magic",-70685105),new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756)], null));
});

//# sourceMappingURL=renderer.js.map