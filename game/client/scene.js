// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.scene');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('jayq.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
cljs.core.enable_console_print_BANG_.call(null);
game.client.scene.page_class = "game-content";

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
game.client.scene.new_scene_properties_Record = (function (width,height,started,start_count,stop_count,__meta,__extmap,__hash){
this.width = width;
this.height = height;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.scene.new_scene_properties_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12141,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12143 = (((k12141 instanceof cljs.core.Keyword))?k12141.fqn:null);
switch (G__12143) {
case "width":
return self__.width;

break;
case "height":
return self__.height;

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
return cljs.core.get.call(null,self__.__extmap,k12141,else__6835__auto__);

}
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.scene.new-scene-properties-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IIterable$ = true;

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12140){
var self__ = this;
var G__12140__$1 = this;
return (new cljs.core.RecordIter((0),G__12140__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.scene.new_scene_properties_Record(self__.width,self__.height,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.scene.new_scene_properties_Record(self__.width,self__.height,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12140){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12144 = cljs.core.keyword_identical_QMARK_;
var expr__12145 = k__6840__auto__;
if(cljs.core.truth_(pred__12144.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__12145))){
return (new game.client.scene.new_scene_properties_Record(G__12140,self__.height,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12144.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__12145))){
return (new game.client.scene.new_scene_properties_Record(self__.width,G__12140,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12144.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__12145))){
return (new game.client.scene.new_scene_properties_Record(self__.width,self__.height,G__12140,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12144.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__12145))){
return (new game.client.scene.new_scene_properties_Record(self__.width,self__.height,self__.started,G__12140,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12144.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__12145))){
return (new game.client.scene.new_scene_properties_Record(self__.width,self__.height,self__.started,self__.start_count,G__12140,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.scene.new_scene_properties_Record(self__.width,self__.height,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12140),null));
}
}
}
}
}
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12140){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.scene.new_scene_properties_Record(self__.width,self__.height,self__.started,self__.start_count,self__.stop_count,G__12140,self__.__extmap,self__.__hash));
});

game.client.scene.new_scene_properties_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.scene.new_scene_properties_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.scene.new_scene_properties_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__12139){
var self__ = this;
var G__12139__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12139__$1){
return (function (component){
var width__$1 = cljs.core.atom.call(null,(0));
var height__$1 = cljs.core.atom.call(null,(0));
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"width","width",-384071477),width__$1),new cljs.core.Keyword(null,"height","height",1025178622),height__$1);
return component__$1;
});})(G__12139__$1))
.call(null,G__12139__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.scene.new_scene_properties_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__12139){
var self__ = this;
var G__12139__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12139__$1){
return (function (x){
return x;
});})(G__12139__$1))
.call(null,G__12139__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.scene.new_scene_properties_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.scene.new_scene_properties_Record.cljs$lang$type = true;

game.client.scene.new_scene_properties_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.scene/new-scene-properties-Record");
});

game.client.scene.new_scene_properties_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.scene/new-scene-properties-Record");
});

game.client.scene.__GT_new_scene_properties_Record = (function game$client$scene$__GT_new_scene_properties_Record(width,height,started,start_count,stop_count){
return (new game.client.scene.new_scene_properties_Record(width,height,started,start_count,stop_count,null,null,null));
});

game.client.scene.map__GT_new_scene_properties_Record = (function game$client$scene$map__GT_new_scene_properties_Record(G__12142){
return (new game.client.scene.new_scene_properties_Record(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__12142),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__12142),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__12142),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__12142),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__12142),null,cljs.core.dissoc.call(null,G__12142,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.scene.new_scene_properties = (function game$client$scene$new_scene_properties(){
return com.stuartsierra.component.using.call(null,game.client.scene.map__GT_new_scene_properties_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),cljs.core.PersistentVector.EMPTY);
});
game.client.scene.on_resize = (function game$client$scene$on_resize(component,event){
var fullscreen_QMARK_ = ((function (){var or__6210__auto__ = screen.availHeight;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (screen.height - (30));
}
})() <= window.innerHeight);
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(component);
var $container = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"$page","$page",384517215)], null));
var width = ((fullscreen_QMARK_)?window.innerWidth:$container.width());
var height = ((fullscreen_QMARK_)?window.innerHeight:$container.height());
var scene = game.client.common.data.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(component));
var scene__$1 = game.client.common.data.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(component));
var camera = game.client.common.data.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(component));
var renderer = game.client.common.data.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(component));
var pixi_renderer = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409)], null));
var $game_content = jayq.core.$.call(null,[cljs.core.str("."),cljs.core.str(game.client.scene.page_class)].join(''));
var $game_canvases = jayq.core.$.call(null,[cljs.core.str(".autoresize."),cljs.core.str(game.client.scene.page_class)].join(''));
renderer.setSize(width,height);

pixi_renderer.resize(width,height);

if(fullscreen_QMARK_){
$game_content.addClass("fullscreen");

jayq.core.$.call(null,"body").addClass("fullscreen");
} else {
$game_content.removeClass("fullscreen");

jayq.core.$.call(null,"body").removeClass("fullscreen");
}

camera.aspect = (width / height);

camera.updateProjectionMatrix();

$game_canvases.width(width);

$game_canvases.height(height);

cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"width","width",-384071477)], null)),width);

return cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"height","height",1025178622)], null)),height);
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
game.client.scene.new_on_resize_Record = (function (config,scene,camera,renderer,params,$overlay,init_scene,pixi_overlay,scene_properties,three_overlay,started,start_count,stop_count,__meta,__extmap,__hash){
this.config = config;
this.scene = scene;
this.camera = camera;
this.renderer = renderer;
this.params = params;
this.$overlay = $overlay;
this.init_scene = init_scene;
this.pixi_overlay = pixi_overlay;
this.scene_properties = scene_properties;
this.three_overlay = three_overlay;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.scene.new_on_resize_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12150,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12152 = (((k12150 instanceof cljs.core.Keyword))?k12150.fqn:null);
switch (G__12152) {
case "started":
return self__.started;

break;
case "scene-properties":
return self__.scene_properties;

break;
case "stop-count":
return self__.stop_count;

break;
case "config":
return self__.config;

break;
case "params":
return self__.params;

break;
case "renderer":
return self__.renderer;

break;
case "pixi-overlay":
return self__.pixi_overlay;

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
case "init-scene":
return self__.init_scene;

break;
case "$overlay":
return self__.$overlay;

break;
case "scene":
return self__.scene;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12150,else__6835__auto__);

}
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.scene.new-on-resize-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),self__.pixi_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),self__.three_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$IIterable$ = true;

game.client.scene.new_on_resize_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12149){
var self__ = this;
var G__12149__$1 = this;
return (new cljs.core.RecordIter((0),G__12149__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.scene.new_on_resize_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.scene.new_on_resize_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12149){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12153 = cljs.core.keyword_identical_QMARK_;
var expr__12154 = k__6840__auto__;
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__12154))){
return (new game.client.scene.new_on_resize_Record(G__12149,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,G__12149,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,G__12149,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,G__12149,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,G__12149,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,G__12149,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,G__12149,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,G__12149,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,G__12149,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,G__12149,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,G__12149,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,G__12149,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12153.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__12154))){
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,G__12149,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12149),null));
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

game.client.scene.new_on_resize_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),self__.pixi_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),self__.three_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12149){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.scene.new_on_resize_Record(self__.config,self__.scene,self__.camera,self__.renderer,self__.params,self__.$overlay,self__.init_scene,self__.pixi_overlay,self__.scene_properties,self__.three_overlay,self__.started,self__.start_count,self__.stop_count,G__12149,self__.__extmap,self__.__hash));
});

game.client.scene.new_on_resize_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.scene.new_on_resize_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.scene.new_on_resize_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__12148){
var self__ = this;
var G__12148__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12148__$1){
return (function (component){
game.client.scene.on_resize.call(null,component,null);

jayq.core.$.call(null,window).unbind("resize.gameResize").bind("resize.gameResize",cljs.core.partial.call(null,game.client.scene.on_resize,component));

return component;
});})(G__12148__$1))
.call(null,G__12148__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.scene.new_on_resize_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__12148){
var self__ = this;
var G__12148__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12148__$1){
return (function (component){
jayq.core.$.call(null,window).unbind("resize.gameResize");

return component;
});})(G__12148__$1))
.call(null,G__12148__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.scene.new_on_resize_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"$overlay","$overlay",139904710,null),new cljs.core.Symbol(null,"init-scene","init-scene",624606753,null),new cljs.core.Symbol(null,"pixi-overlay","pixi-overlay",-1216303978,null),new cljs.core.Symbol(null,"scene-properties","scene-properties",-262402837,null),new cljs.core.Symbol(null,"three-overlay","three-overlay",673970944,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.scene.new_on_resize_Record.cljs$lang$type = true;

game.client.scene.new_on_resize_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.scene/new-on-resize-Record");
});

game.client.scene.new_on_resize_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.scene/new-on-resize-Record");
});

game.client.scene.__GT_new_on_resize_Record = (function game$client$scene$__GT_new_on_resize_Record(config,scene,camera,renderer,params,$overlay,init_scene,pixi_overlay,scene_properties,three_overlay,started,start_count,stop_count){
return (new game.client.scene.new_on_resize_Record(config,scene,camera,renderer,params,$overlay,init_scene,pixi_overlay,scene_properties,three_overlay,started,start_count,stop_count,null,null,null));
});

game.client.scene.map__GT_new_on_resize_Record = (function game$client$scene$map__GT_new_on_resize_Record(G__12151){
return (new game.client.scene.new_on_resize_Record(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__12151),null,cljs.core.dissoc.call(null,G__12151,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.scene.new_on_resize = (function game$client$scene$new_on_resize(){
return com.stuartsierra.component.using.call(null,game.client.scene.map__GT_new_on_resize_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583)], null));
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
game.client.scene.new_init_stats_Record = (function (params,render_stats,engine_stats,started,start_count,stop_count,__meta,__extmap,__hash){
this.params = params;
this.render_stats = render_stats;
this.engine_stats = engine_stats;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.scene.new_init_stats_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12159,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12161 = (((k12159 instanceof cljs.core.Keyword))?k12159.fqn:null);
switch (G__12161) {
case "params":
return self__.params;

break;
case "render-stats":
return self__.render_stats;

break;
case "engine-stats":
return self__.engine_stats;

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
return cljs.core.get.call(null,self__.__extmap,k12159,else__6835__auto__);

}
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.scene.new-init-stats-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),self__.engine_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$IIterable$ = true;

game.client.scene.new_init_stats_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12158){
var self__ = this;
var G__12158__$1 = this;
return (new cljs.core.RecordIter((0),G__12158__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.scene.new_init_stats_Record(self__.params,self__.render_stats,self__.engine_stats,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.scene.new_init_stats_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.scene.new_init_stats_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.scene.new_init_stats_Record(self__.params,self__.render_stats,self__.engine_stats,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12158){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12162 = cljs.core.keyword_identical_QMARK_;
var expr__12163 = k__6840__auto__;
if(cljs.core.truth_(pred__12162.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__12163))){
return (new game.client.scene.new_init_stats_Record(G__12158,self__.render_stats,self__.engine_stats,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12162.call(null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),expr__12163))){
return (new game.client.scene.new_init_stats_Record(self__.params,G__12158,self__.engine_stats,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12162.call(null,new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),expr__12163))){
return (new game.client.scene.new_init_stats_Record(self__.params,self__.render_stats,G__12158,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12162.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__12163))){
return (new game.client.scene.new_init_stats_Record(self__.params,self__.render_stats,self__.engine_stats,G__12158,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12162.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__12163))){
return (new game.client.scene.new_init_stats_Record(self__.params,self__.render_stats,self__.engine_stats,self__.started,G__12158,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12162.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__12163))){
return (new game.client.scene.new_init_stats_Record(self__.params,self__.render_stats,self__.engine_stats,self__.started,self__.start_count,G__12158,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.scene.new_init_stats_Record(self__.params,self__.render_stats,self__.engine_stats,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12158),null));
}
}
}
}
}
}
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),self__.engine_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12158){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.scene.new_init_stats_Record(self__.params,self__.render_stats,self__.engine_stats,self__.started,self__.start_count,self__.stop_count,G__12158,self__.__extmap,self__.__hash));
});

game.client.scene.new_init_stats_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.scene.new_init_stats_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.scene.new_init_stats_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__12157){
var self__ = this;
var G__12157__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12157__$1){
return (function (component){
var render_stats__$1 = game.client.common.data.call(null,self__.render_stats);
var engine_stats__$1 = game.client.common.data.call(null,self__.engine_stats);
var $render_stats = jayq.core.$.call(null,render_stats__$1.domElement);
var $engine_stats = jayq.core.$.call(null,engine_stats__$1.domElement);
var $container = new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(self__.params);
$container.append($render_stats);

$render_stats.addClass(game.client.scene.page_class);

$render_stats.addClass("render-stats");

jayq.core.css.call(null,$render_stats,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100)], null));

$container.append($engine_stats);

$engine_stats.addClass(game.client.scene.page_class);

$engine_stats.addClass("engine-stats");

jayq.core.css.call(null,$engine_stats,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"50px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100)], null));

return component;
});})(G__12157__$1))
.call(null,G__12157__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.scene.new_init_stats_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__12157){
var self__ = this;
var G__12157__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12157__$1){
return (function (component){
jayq.core.$.call(null,[cljs.core.str("."),cljs.core.str(game.client.scene.page_class)].join('')).remove();

return component;
});})(G__12157__$1))
.call(null,G__12157__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.scene.new_init_stats_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"render-stats","render-stats",1214813265,null),new cljs.core.Symbol(null,"engine-stats","engine-stats",1134275952,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.scene.new_init_stats_Record.cljs$lang$type = true;

game.client.scene.new_init_stats_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.scene/new-init-stats-Record");
});

game.client.scene.new_init_stats_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.scene/new-init-stats-Record");
});

game.client.scene.__GT_new_init_stats_Record = (function game$client$scene$__GT_new_init_stats_Record(params,render_stats,engine_stats,started,start_count,stop_count){
return (new game.client.scene.new_init_stats_Record(params,render_stats,engine_stats,started,start_count,stop_count,null,null,null));
});

game.client.scene.map__GT_new_init_stats_Record = (function game$client$scene$map__GT_new_init_stats_Record(G__12160){
return (new game.client.scene.new_init_stats_Record(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__12160),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262).cljs$core$IFn$_invoke$arity$1(G__12160),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575).cljs$core$IFn$_invoke$arity$1(G__12160),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__12160),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__12160),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__12160),null,cljs.core.dissoc.call(null,G__12160,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.scene.new_init_stats = (function game$client$scene$new_init_stats(){
return com.stuartsierra.component.using.call(null,game.client.scene.map__GT_new_init_stats_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575)], null));
});
game.client.scene.add = (function game$client$scene$add(scene,item){
return game.client.common.data.call(null,scene).add(item);
});
game.client.scene.remove = (function game$client$scene$remove(scene,item){
return game.client.common.data.call(null,scene).remove(item);
});
game.client.scene.stop_scene = (function game$client$scene$stop_scene(component){
jayq.core.$.call(null,[cljs.core.str("."),cljs.core.str(game.client.scene.page_class)].join('')).remove();

return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"done","done",-889844188),false);
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
game.client.scene.new_init_scene_Record = (function (params,renderer,$overlay,camera,scene,config,ground,init_stats,done,started,start_count,stop_count,__meta,__extmap,__hash){
this.params = params;
this.renderer = renderer;
this.$overlay = $overlay;
this.camera = camera;
this.scene = scene;
this.config = config;
this.ground = ground;
this.init_stats = init_stats;
this.done = done;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.scene.new_init_scene_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12171,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12173 = (((k12171 instanceof cljs.core.Keyword))?k12171.fqn:null);
switch (G__12173) {
case "started":
return self__.started;

break;
case "done":
return self__.done;

break;
case "init-stats":
return self__.init_stats;

break;
case "ground":
return self__.ground;

break;
case "stop-count":
return self__.stop_count;

break;
case "config":
return self__.config;

break;
case "params":
return self__.params;

break;
case "renderer":
return self__.renderer;

break;
case "start-count":
return self__.start_count;

break;
case "camera":
return self__.camera;

break;
case "$overlay":
return self__.$overlay;

break;
case "scene":
return self__.scene;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12171,else__6835__auto__);

}
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.scene.new-init-scene-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051),self__.init_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done","done",-889844188),self__.done],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$IIterable$ = true;

game.client.scene.new_init_scene_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12170){
var self__ = this;
var G__12170__$1 = this;
return (new cljs.core.RecordIter((0),G__12170__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.scene.new_init_scene_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.scene.new_init_scene_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"done","done",-889844188),null,new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051),null,new cljs.core.Keyword(null,"ground","ground",1193572934),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12170){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12174 = cljs.core.keyword_identical_QMARK_;
var expr__12175 = k__6840__auto__;
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__12175))){
return (new game.client.scene.new_init_scene_Record(G__12170,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,G__12170,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,G__12170,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,G__12170,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,G__12170,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,G__12170,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"ground","ground",1193572934),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,G__12170,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,G__12170,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"done","done",-889844188),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,G__12170,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,G__12170,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,G__12170,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12174.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__12175))){
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,G__12170,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12170),null));
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

game.client.scene.new_init_scene_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051),self__.init_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done","done",-889844188),self__.done],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12170){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.scene.new_init_scene_Record(self__.params,self__.renderer,self__.$overlay,self__.camera,self__.scene,self__.config,self__.ground,self__.init_stats,self__.done,self__.started,self__.start_count,self__.stop_count,G__12170,self__.__extmap,self__.__hash));
});

game.client.scene.new_init_scene_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.scene.new_init_scene_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.scene.new_init_scene_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__12169){
var self__ = this;
var G__12169__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12169__$1){
return (function (component){
new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(self__.params).append(game.client.common.data.call(null,self__.renderer).domElement);

new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(self__.params).append(game.client.common.data.call(null,self__.$overlay));

if(cljs.core.not.call(null,self__.done)){
var G__12177_12180 = game.client.common.data.call(null,self__.renderer);
G__12177_12180.shadowMap.enabled = true;

G__12177_12180.shadowMap.soft = true;

((function (G__12177_12180,G__12169__$1){
return (function (p1__12166_SHARP_){
return jayq.core.$.call(null,p1__12166_SHARP_.domElement).addClass(game.client.scene.page_class);
});})(G__12177_12180,G__12169__$1))
.call(null,G__12177_12180);

((function (G__12177_12180,G__12169__$1){
return (function (p1__12167_SHARP_){
return jayq.core.$.call(null,p1__12167_SHARP_.domElement).addClass("game3d");
});})(G__12177_12180,G__12169__$1))
.call(null,G__12177_12180);

((function (G__12177_12180,G__12169__$1){
return (function (p1__12168_SHARP_){
return jayq.core.$.call(null,p1__12168_SHARP_.domElement).addClass("autoresize");
});})(G__12177_12180,G__12169__$1))
.call(null,G__12177_12180);


var G__12178_12181 = game.client.common.data.call(null,self__.$overlay);
G__12178_12181.addClass(game.client.scene.page_class);

G__12178_12181.addClass("overlay");

G__12178_12181.addClass("autoresize");


game.client.scene.add.call(null,self__.scene,game.client.common.data.call(null,self__.camera));

game.client.common.data.call(null,self__.camera).position.copy(cljs.core.get_in.call(null,self__.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"origin","origin",1037372088)], null)));

var x_12182 = game.client.common.data.call(null,self__.scene).position.x;
var y_12183 = game.client.common.data.call(null,self__.scene).position.y;
var z_12184 = game.client.common.data.call(null,self__.scene).position.z;
var pos_12185 = (new THREE.Vector3(x_12182,y_12183,z_12184));
game.client.common.data.call(null,self__.camera).lookAt(pos_12185);

var mesh_12186 = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(self__.ground);
var newmesh_12187 = (new THREE.Mesh(mesh_12186.geometry,mesh_12186.material));
game.client.scene.add.call(null,self__.scene,newmesh_12187);

return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"done","done",-889844188),true);
} else {
return component;
}
});})(G__12169__$1))
.call(null,G__12169__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.scene.new_init_scene_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__12169){
var self__ = this;
var G__12169__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12169__$1){
return (function (component){
jayq.core.$.call(null,[cljs.core.str("."),cljs.core.str(game.client.scene.page_class)].join('')).remove();

return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"done","done",-889844188),false);
});})(G__12169__$1))
.call(null,G__12169__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.scene.new_init_scene_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"$overlay","$overlay",139904710,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"init-stats","init-stats",-438261524,null),new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.scene.new_init_scene_Record.cljs$lang$type = true;

game.client.scene.new_init_scene_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.scene/new-init-scene-Record");
});

game.client.scene.new_init_scene_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.scene/new-init-scene-Record");
});

game.client.scene.__GT_new_init_scene_Record = (function game$client$scene$__GT_new_init_scene_Record(params,renderer,$overlay,camera,scene,config,ground,init_stats,done,started,start_count,stop_count){
return (new game.client.scene.new_init_scene_Record(params,renderer,$overlay,camera,scene,config,ground,init_stats,done,started,start_count,stop_count,null,null,null));
});

game.client.scene.map__GT_new_init_scene_Record = (function game$client$scene$map__GT_new_init_scene_Record(G__12172){
return (new game.client.scene.new_init_scene_Record(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__12172),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__12172),null,cljs.core.dissoc.call(null,G__12172,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.scene.new_init_scene = (function game$client$scene$new_init_scene(){
return com.stuartsierra.component.using.call(null,game.client.scene.map__GT_new_init_scene_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051)], null));
});
game.client.scene.get_camera = (function game$client$scene$get_camera(){
var width = (100);
var height = (100);
var FOV = (35);
var frustumFar = (1000000);
var frustumNear = (1);
return (new THREE.PerspectiveCamera(FOV,(width / height),frustumNear,frustumFar));
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
game.client.scene.InitLight = (function (config,scene,light1,light2,light3,light4,__meta,__extmap,__hash){
this.config = config;
this.scene = scene;
this.light1 = light1;
this.light2 = light2;
this.light3 = light3;
this.light4 = light4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.scene.InitLight.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.scene.InitLight.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12189,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12191 = (((k12189 instanceof cljs.core.Keyword))?k12189.fqn:null);
switch (G__12191) {
case "config":
return self__.config;

break;
case "scene":
return self__.scene;

break;
case "light1":
return self__.light1;

break;
case "light2":
return self__.light2;

break;
case "light3":
return self__.light3;

break;
case "light4":
return self__.light4;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12189,else__6835__auto__);

}
});

game.client.scene.InitLight.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.scene.InitLight{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light1","light1",906046172),self__.light1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light2","light2",396248085),self__.light2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light3","light3",-680537406),self__.light3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light4","light4",405209109),self__.light4],null))], null),self__.__extmap));
});

game.client.scene.InitLight.prototype.cljs$core$IIterable$ = true;

game.client.scene.InitLight.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12188){
var self__ = this;
var G__12188__$1 = this;
return (new cljs.core.RecordIter((0),G__12188__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"light2","light2",396248085),new cljs.core.Keyword(null,"light3","light3",-680537406),new cljs.core.Keyword(null,"light4","light4",405209109)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.scene.InitLight.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.scene.InitLight.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.scene.InitLight(self__.config,self__.scene,self__.light1,self__.light2,self__.light3,self__.light4,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.scene.InitLight.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.client.scene.InitLight.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.scene.InitLight.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.scene.InitLight.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"light3","light3",-680537406),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"light4","light4",405209109),null,new cljs.core.Keyword(null,"light2","light2",396248085),null,new cljs.core.Keyword(null,"light1","light1",906046172),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.scene.InitLight(self__.config,self__.scene,self__.light1,self__.light2,self__.light3,self__.light4,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.scene.InitLight.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12188){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12192 = cljs.core.keyword_identical_QMARK_;
var expr__12193 = k__6840__auto__;
if(cljs.core.truth_(pred__12192.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__12193))){
return (new game.client.scene.InitLight(G__12188,self__.scene,self__.light1,self__.light2,self__.light3,self__.light4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12192.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__12193))){
return (new game.client.scene.InitLight(self__.config,G__12188,self__.light1,self__.light2,self__.light3,self__.light4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12192.call(null,new cljs.core.Keyword(null,"light1","light1",906046172),expr__12193))){
return (new game.client.scene.InitLight(self__.config,self__.scene,G__12188,self__.light2,self__.light3,self__.light4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12192.call(null,new cljs.core.Keyword(null,"light2","light2",396248085),expr__12193))){
return (new game.client.scene.InitLight(self__.config,self__.scene,self__.light1,G__12188,self__.light3,self__.light4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12192.call(null,new cljs.core.Keyword(null,"light3","light3",-680537406),expr__12193))){
return (new game.client.scene.InitLight(self__.config,self__.scene,self__.light1,self__.light2,G__12188,self__.light4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12192.call(null,new cljs.core.Keyword(null,"light4","light4",405209109),expr__12193))){
return (new game.client.scene.InitLight(self__.config,self__.scene,self__.light1,self__.light2,self__.light3,G__12188,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.scene.InitLight(self__.config,self__.scene,self__.light1,self__.light2,self__.light3,self__.light4,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12188),null));
}
}
}
}
}
}
});

game.client.scene.InitLight.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light1","light1",906046172),self__.light1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light2","light2",396248085),self__.light2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light3","light3",-680537406),self__.light3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light4","light4",405209109),self__.light4],null))], null),self__.__extmap));
});

game.client.scene.InitLight.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12188){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.scene.InitLight(self__.config,self__.scene,self__.light1,self__.light2,self__.light3,self__.light4,G__12188,self__.__extmap,self__.__hash));
});

game.client.scene.InitLight.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.scene.InitLight.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.scene.InitLight.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
var light1_12196__$1 = game.client.common.data.call(null,self__.light1);
var light2_12197__$1 = game.client.common.data.call(null,self__.light2);
var light3_12198__$1 = game.client.common.data.call(null,self__.light3);
var light4_12199__$1 = game.client.common.data.call(null,self__.light4);
var origin_12200 = game.client.common.data.call(null,self__.scene).position;
light1_12196__$1.color = (new THREE.Color((16777215)));

light2_12197__$1.color = (new THREE.Color((65280)));

light3_12198__$1.color = (new THREE.Color((255)));

light4_12199__$1.color = (new THREE.Color((2228224)));

light1_12196__$1.position.set((5),(10),(-4));

light2_12197__$1.position.set((5),(0),(-4));

light3_12198__$1.position.set((-10),(10),(10));

light4_12199__$1.position.set((0),(10),(0));

light1_12196__$1.target.position.copy(origin_12200);

light2_12197__$1.target.position.copy(origin_12200);

light3_12198__$1.target.position.copy(origin_12200);

light4_12199__$1.target.position.copy(origin_12200);

light1_12196__$1.castShadow = true;

light2_12197__$1.castShadow = true;

light3_12198__$1.castShadow = true;

light4_12199__$1.castShadow = true;

light1_12196__$1.shadow.camera.left = (- game.client.config.get_terrain_width.call(null,self__.config));

light1_12196__$1.shadow.camera.top = (- game.client.config.get_terrain_height.call(null,self__.config));

light1_12196__$1.shadow.camera.right = game.client.config.get_terrain_width.call(null,self__.config);

light1_12196__$1.shadow.camera.bottom = game.client.config.get_terrain_height.call(null,self__.config);

light1_12196__$1.shadow.camera.near = game.client.scene.get_camera.call(null).near;

light1_12196__$1.shadow.camera.far = game.client.scene.get_camera.call(null).far;

light1_12196__$1.shadow.bias = -1.0E-4;

light1_12196__$1.shadow.mapSize.width = (2048);

light1_12196__$1.shadow.mapSize.height = (2048);

game.client.scene.add.call(null,self__.scene,light1_12196__$1);

light1_12196__$1.lookAt(origin_12200);

light2_12197__$1.lookAt(origin_12200);

light3_12198__$1.lookAt(origin_12200);

light4_12199__$1.lookAt(origin_12200);

return component__$1;
});

game.client.scene.InitLight.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
if(cljs.core.not_EQ_.call(null,game.client.common.data.call(null,self__.scene),null)){
game.client.scene.remove.call(null,self__.scene,self__.light1);

game.client.scene.remove.call(null,self__.scene,self__.light2);

game.client.scene.remove.call(null,self__.scene,self__.light3);

game.client.scene.remove.call(null,self__.scene,self__.light4);
} else {
}

return component__$1;
});

game.client.scene.InitLight.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"light1","light1",-1748389597,null),new cljs.core.Symbol(null,"light2","light2",2036779612,null),new cljs.core.Symbol(null,"light3","light3",959994121,null),new cljs.core.Symbol(null,"light4","light4",2045740636,null)], null);
});

game.client.scene.InitLight.cljs$lang$type = true;

game.client.scene.InitLight.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.scene/InitLight");
});

game.client.scene.InitLight.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.scene/InitLight");
});

game.client.scene.__GT_InitLight = (function game$client$scene$__GT_InitLight(config,scene,light1,light2,light3,light4){
return (new game.client.scene.InitLight(config,scene,light1,light2,light3,light4,null,null,null));
});

game.client.scene.map__GT_InitLight = (function game$client$scene$map__GT_InitLight(G__12190){
return (new game.client.scene.InitLight(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__12190),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__12190),new cljs.core.Keyword(null,"light1","light1",906046172).cljs$core$IFn$_invoke$arity$1(G__12190),new cljs.core.Keyword(null,"light2","light2",396248085).cljs$core$IFn$_invoke$arity$1(G__12190),new cljs.core.Keyword(null,"light3","light3",-680537406).cljs$core$IFn$_invoke$arity$1(G__12190),new cljs.core.Keyword(null,"light4","light4",405209109).cljs$core$IFn$_invoke$arity$1(G__12190),null,cljs.core.dissoc.call(null,G__12190,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"light2","light2",396248085),new cljs.core.Keyword(null,"light3","light3",-680537406),new cljs.core.Keyword(null,"light4","light4",405209109)),null));
});

game.client.scene.new_init_light = (function game$client$scene$new_init_light(){
return com.stuartsierra.component.using.call(null,game.client.scene.map__GT_InitLight.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"light2","light2",396248085),new cljs.core.Keyword(null,"light3","light3",-680537406),new cljs.core.Keyword(null,"light4","light4",405209109)], null));
});
game.client.scene.get_view_element = (function game$client$scene$get_view_element(renderer){
return game.client.common.data.call(null,renderer).domElement;
});
game.client.scene.get_camera_focus = (function game$client$scene$get_camera_focus(camera,x,y){
var v = (new THREE.Vector3(x,y,camera.near));
var _ = v.unproject(camera);
var dir = v.sub(camera.position).normalize();
var distance = ((- camera.position.y) / dir.y);
var pos = camera.position.clone().add(dir.multiplyScalar(distance));
return pos;
});
game.client.scene.world_to_screen = (function game$client$scene$world_to_screen(width,height,camera,pos){
var v = pos.clone().project(game.client.common.data.call(null,camera));
var x = v.x;
var y = v.y;
var x__$1 = (((x + (1)) * width) / (2));
var y__$1 = (((- (y - (1))) * height) / (2));
var v2 = (new THREE.Vector2(x__$1,y__$1));
return v2;
});
game.client.scene.world_to_screen_fast = (function game$client$scene$world_to_screen_fast(width,height,matrix,pos){
var v = pos.clone().applyProjection(matrix);
var x = v.x;
var y = v.y;
var x__$1 = (((x + (1)) * width) / (2));
var y__$1 = (((- (y - (1))) * height) / (2));
var v2 = (new THREE.Vector2(x__$1,y__$1));
return v2;
});

//# sourceMappingURL=scene.js.map