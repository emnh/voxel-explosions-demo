// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.page_game_test');
goog.require('cljs.core');
goog.require('game.client.engine');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('jayq.core');
goog.require('game.client.scene');
goog.require('game.client.ground_local');
goog.require('game.shared.state');
goog.require('rum.core');
goog.require('game.client.page_load_test');
goog.require('game.client.game');
goog.require('game.client.overlay');
goog.require('sablono.core');
goog.require('cats.core');
goog.require('promesa.monad');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
game.client.page_game_test.on_click_three_js = (function game$client$page_game_test$on_click_three_js(component,event){
var camera = game.client.common.data.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"camera","camera",-1190348585)], null)));
var renderer = game.client.common.data.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"renderer","renderer",336841071)], null)));
var scene = game.client.common.data.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"scene","scene",1523800415)], null)));
return renderer.render(scene,camera);
});
game.client.page_game_test.on_click_pixi_js = (function game$client$page_game_test$on_click_pixi_js(component,event){
cljs.core.println.call(null,"pixi js");

var pixi_renderer = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409)], null));
var pixi_stage = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"stage","stage",1843544772)], null));
var pixi_overlay = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791)], null));
var init_renderer = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"init-renderer","init-renderer",-830076556)], null));
game.client.overlay.on_render.call(null,init_renderer,pixi_overlay);

return pixi_renderer.render(pixi_stage);
});
game.client.page_game_test.on_change_healthbars = (function game$client$page_game_test$on_change_healthbars(component,event){
var checked = event.target.checked;
var subsystem = new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(component);
var three_overlay = new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583).cljs$core$IFn$_invoke$arity$1(subsystem);
var healthbar_mesh_parent = new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369).cljs$core$IFn$_invoke$arity$1(three_overlay);
return healthbar_mesh_parent.visible = checked;
});
game.client.page_game_test.on_change_magicstars = (function game$client$page_game_test$on_change_magicstars(component,event){
var checked = event.target.checked;
var subsystem = new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(component);
var units = new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(subsystem);
return game.client.engine.for_each_unit.call(null,units,((function (checked,subsystem,units){
return (function (i,unit){
return game.client.engine.get_unit_star.call(null,unit).visible = checked;
});})(checked,subsystem,units))
);
});
game.client.page_game_test.on_change_geometry = (function game$client$page_game_test$on_change_geometry(component,event){
var checked = event.target.checked;
var subsystem = new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(component);
var units = new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(subsystem);
return game.client.engine.for_each_unit.call(null,units,((function (checked,subsystem,units){
return (function (i,unit){
return game.client.engine.get_unit_regular_mesh.call(null,unit).visible = checked;
});})(checked,subsystem,units))
);
});
game.client.page_game_test.on_change_explosions = (function game$client$page_game_test$on_change_explosions(component,event){
var checked = event.target.checked;
var subsystem = new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(component);
var units = new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(subsystem);
return game.client.engine.for_each_unit.call(null,units,((function (checked,subsystem,units){
return (function (i,unit){
return game.client.engine.get_unit_explosion.call(null,unit).visible = checked;
});})(checked,subsystem,units))
);
});
/**
 * 
 */
game.client.page_game_test.test_buttons = (function (){var render_mixin__8062__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
return React.createElement("ul",{"className": "vertical-list"},React.createElement("li",null,React.createElement("a",{"href": "https://github.com/emnh/rts"},"Project On GitHub")),React.createElement("li",null,sablono.interpreter.create_element.call(null,"input",{"type": "checkbox", "onChange": cljs.core.partial.call(null,game.client.page_game_test.on_change_healthbars,component), "value": "", "className": ""}),React.createElement("label",null,"Health bars")),React.createElement("li",null,sablono.interpreter.create_element.call(null,"input",{"type": "checkbox", "onChange": cljs.core.partial.call(null,game.client.page_game_test.on_change_magicstars,component), "value": "", "className": ""}),React.createElement("label",null,"Magic stars")),React.createElement("li",null,sablono.interpreter.create_element.call(null,"input",{"type": "checkbox", "onChange": cljs.core.partial.call(null,game.client.page_game_test.on_change_geometry,component), "value": "", "className": ""}),React.createElement("label",null,"Unvoxelized geometry (some models only)")),React.createElement("li",null,sablono.interpreter.create_element.call(null,"input",{"type": "checkbox", "onChange": cljs.core.partial.call(null,game.client.page_game_test.on_change_explosions,component), "defaultValue": "", "defaultChecked": true, "className": ""}),React.createElement("label",null,"Explosions")),React.createElement("li",null,"Control keys",React.createElement("ul",null,React.createElement("li",null,"Using browser full screen should maximize game canvas (F11 in Chrome)"),React.createElement("li",null,"Arrow keys to move camera"),React.createElement("li",null,"Ctrl+arrow keys to rotate camera"),React.createElement("li",null,"PgUp/PgDn to zoom"),React.createElement("li",null,"Home to reset view"),React.createElement("li",null,"Drag mouse to select units"))),React.createElement("li",null,React.createElement("div",null,"Page load progress"),sablono.interpreter.interpret.call(null,game.client.page_load_test.progress_list.call(null,component))));
}));
var class__8063__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8062__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"test-buttons");
var ctor__8064__auto__ = ((function (render_mixin__8062__auto__,class__8063__auto__){
return (function() { 
var G__28703__delegate = function (args__8065__auto__){
var state__8066__auto__ = rum.core.args__GT_state.call(null,args__8065__auto__);
return rum.core.element.call(null,class__8063__auto__,state__8066__auto__,null);
};
var G__28703 = function (var_args){
var args__8065__auto__ = null;
if (arguments.length > 0) {
var G__28704__i = 0, G__28704__a = new Array(arguments.length -  0);
while (G__28704__i < G__28704__a.length) {G__28704__a[G__28704__i] = arguments[G__28704__i + 0]; ++G__28704__i;}
  args__8065__auto__ = new cljs.core.IndexedSeq(G__28704__a,0);
} 
return G__28703__delegate.call(this,args__8065__auto__);};
G__28703.cljs$lang$maxFixedArity = 0;
G__28703.cljs$lang$applyTo = (function (arglist__28705){
var args__8065__auto__ = cljs.core.seq(arglist__28705);
return G__28703__delegate(args__8065__auto__);
});
G__28703.cljs$core$IFn$_invoke$arity$variadic = G__28703__delegate;
return G__28703;
})()
;})(render_mixin__8062__auto__,class__8063__auto__))
;
return cljs.core.with_meta.call(null,ctor__8064__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__8063__auto__], null));
})();
/**
 * 
 */
game.client.page_game_test.game_test = (function (){var render_mixin__8062__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
var h = game.client.common.header.call(null,"Game Test");
return sablono.interpreter.interpret.call(null,React.createElement("div",{"className": "container"},sablono.interpreter.interpret.call(null,h),React.createElement("div",{"id": "game"}),sablono.interpreter.interpret.call(null,game.client.page_game_test.test_buttons.call(null,component))));
}));
var class__8063__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8062__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"game-test");
var ctor__8064__auto__ = ((function (render_mixin__8062__auto__,class__8063__auto__){
return (function() { 
var G__28708__delegate = function (args__8065__auto__){
var state__8066__auto__ = rum.core.args__GT_state.call(null,args__8065__auto__);
return rum.core.element.call(null,class__8063__auto__,state__8066__auto__,null);
};
var G__28708 = function (var_args){
var args__8065__auto__ = null;
if (arguments.length > 0) {
var G__28709__i = 0, G__28709__a = new Array(arguments.length -  0);
while (G__28709__i < G__28709__a.length) {G__28709__a[G__28709__i] = arguments[G__28709__i + 0]; ++G__28709__i;}
  args__8065__auto__ = new cljs.core.IndexedSeq(G__28709__a,0);
} 
return G__28708__delegate.call(this,args__8065__auto__);};
G__28708.cljs$lang$maxFixedArity = 0;
G__28708.cljs$lang$applyTo = (function (arglist__28710){
var args__8065__auto__ = cljs.core.seq(arglist__28710);
return G__28708__delegate(args__8065__auto__);
});
G__28708.cljs$core$IFn$_invoke$arity$variadic = G__28708__delegate;
return G__28708;
})()
;})(render_mixin__8062__auto__,class__8063__auto__))
;
return cljs.core.with_meta.call(null,ctor__8064__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__8063__auto__], null));
})();

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
game.client.page_game_test.new_ground_balls_Record = (function (ground,scene,init_scene,started,start_count,stop_count,__meta,__extmap,__hash){
this.ground = ground;
this.scene = scene;
this.init_scene = init_scene;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k28713,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__28715 = (((k28713 instanceof cljs.core.Keyword))?k28713.fqn:null);
switch (G__28715) {
case "ground":
return self__.ground;

break;
case "scene":
return self__.scene;

break;
case "init-scene":
return self__.init_scene;

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
return cljs.core.get.call(null,self__.__extmap,k28713,else__6835__auto__);

}
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.page-game-test.new-ground-balls-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IIterable$ = true;

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28712){
var self__ = this;
var G__28712__$1 = this;
return (new cljs.core.RecordIter((0),G__28712__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,self__.scene,self__.init_scene,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"ground","ground",1193572934),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,self__.scene,self__.init_scene,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__28712){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__28716 = cljs.core.keyword_identical_QMARK_;
var expr__28717 = k__6840__auto__;
if(cljs.core.truth_(pred__28716.call(null,new cljs.core.Keyword(null,"ground","ground",1193572934),expr__28717))){
return (new game.client.page_game_test.new_ground_balls_Record(G__28712,self__.scene,self__.init_scene,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28716.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__28717))){
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,G__28712,self__.init_scene,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28716.call(null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),expr__28717))){
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,self__.scene,G__28712,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28716.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__28717))){
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,self__.scene,self__.init_scene,G__28712,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28716.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__28717))){
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,self__.scene,self__.init_scene,self__.started,G__28712,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28716.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__28717))){
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,self__.scene,self__.init_scene,self__.started,self__.start_count,G__28712,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,self__.scene,self__.init_scene,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__28712),null));
}
}
}
}
}
}
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__28712){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.page_game_test.new_ground_balls_Record(self__.ground,self__.scene,self__.init_scene,self__.started,self__.start_count,self__.stop_count,G__28712,self__.__extmap,self__.__hash));
});

game.client.page_game_test.new_ground_balls_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.page_game_test.new_ground_balls_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.page_game_test.new_ground_balls_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__28711){
var self__ = this;
var G__28711__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__28711__$1){
return (function (component){
var x_faces_28736 = new cljs.core.Keyword(null,"x-faces","x-faces",1964648983).cljs$core$IFn$_invoke$arity$1(self__.ground);
var y_faces_28737 = new cljs.core.Keyword(null,"y-faces","y-faces",-53670175).cljs$core$IFn$_invoke$arity$1(self__.ground);
var width_28738 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.ground);
var height_28739 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.ground);
var geometry_28740 = (new THREE.SphereGeometry((1),(4),(4)));
var material_28741 = (new THREE.MeshBasicMaterial({"color": (16711680)}));
var seq__28719_28742 = cljs.core.seq.call(null,cljs.core.range.call(null,x_faces_28736));
var chunk__28724_28743 = null;
var count__28725_28744 = (0);
var i__28726_28745 = (0);
while(true){
if((i__28726_28745 < count__28725_28744)){
var x_28746 = cljs.core._nth.call(null,chunk__28724_28743,i__28726_28745);
var seq__28727_28747 = cljs.core.seq.call(null,cljs.core.range.call(null,y_faces_28737));
var chunk__28728_28748 = null;
var count__28729_28749 = (0);
var i__28730_28750 = (0);
while(true){
if((i__28730_28750 < count__28729_28749)){
var y_28751 = cljs.core._nth.call(null,chunk__28728_28748,i__28730_28750);
var xpos_28752 = (((x_28746 * width_28738) / x_faces_28736) - (width_28738 / (2)));
var zpos_28753 = (((y_28751 * height_28739) / y_faces_28737) - (height_28739 / (2)));
var ypos_28754 = game.client.ground_local.get_height.call(null,self__.ground,xpos_28752,zpos_28753);
var mesh_28755 = (new THREE.Mesh(geometry_28740,material_28741));
game.client.scene.add.call(null,self__.scene,mesh_28755);

var G__28731_28756 = mesh_28755.position;
(G__28731_28756["x"] = xpos_28752);

(G__28731_28756["y"] = ypos_28754);

(G__28731_28756["z"] = zpos_28753);


var G__28757 = seq__28727_28747;
var G__28758 = chunk__28728_28748;
var G__28759 = count__28729_28749;
var G__28760 = (i__28730_28750 + (1));
seq__28727_28747 = G__28757;
chunk__28728_28748 = G__28758;
count__28729_28749 = G__28759;
i__28730_28750 = G__28760;
continue;
} else {
var temp__4657__auto___28761 = cljs.core.seq.call(null,seq__28727_28747);
if(temp__4657__auto___28761){
var seq__28727_28762__$1 = temp__4657__auto___28761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28727_28762__$1)){
var c__7021__auto___28763 = cljs.core.chunk_first.call(null,seq__28727_28762__$1);
var G__28764 = cljs.core.chunk_rest.call(null,seq__28727_28762__$1);
var G__28765 = c__7021__auto___28763;
var G__28766 = cljs.core.count.call(null,c__7021__auto___28763);
var G__28767 = (0);
seq__28727_28747 = G__28764;
chunk__28728_28748 = G__28765;
count__28729_28749 = G__28766;
i__28730_28750 = G__28767;
continue;
} else {
var y_28768 = cljs.core.first.call(null,seq__28727_28762__$1);
var xpos_28769 = (((x_28746 * width_28738) / x_faces_28736) - (width_28738 / (2)));
var zpos_28770 = (((y_28768 * height_28739) / y_faces_28737) - (height_28739 / (2)));
var ypos_28771 = game.client.ground_local.get_height.call(null,self__.ground,xpos_28769,zpos_28770);
var mesh_28772 = (new THREE.Mesh(geometry_28740,material_28741));
game.client.scene.add.call(null,self__.scene,mesh_28772);

var G__28732_28773 = mesh_28772.position;
(G__28732_28773["x"] = xpos_28769);

(G__28732_28773["y"] = ypos_28771);

(G__28732_28773["z"] = zpos_28770);


var G__28774 = cljs.core.next.call(null,seq__28727_28762__$1);
var G__28775 = null;
var G__28776 = (0);
var G__28777 = (0);
seq__28727_28747 = G__28774;
chunk__28728_28748 = G__28775;
count__28729_28749 = G__28776;
i__28730_28750 = G__28777;
continue;
}
} else {
}
}
break;
}

var G__28778 = seq__28719_28742;
var G__28779 = chunk__28724_28743;
var G__28780 = count__28725_28744;
var G__28781 = (i__28726_28745 + (1));
seq__28719_28742 = G__28778;
chunk__28724_28743 = G__28779;
count__28725_28744 = G__28780;
i__28726_28745 = G__28781;
continue;
} else {
var temp__4657__auto___28782 = cljs.core.seq.call(null,seq__28719_28742);
if(temp__4657__auto___28782){
var seq__28719_28783__$1 = temp__4657__auto___28782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28719_28783__$1)){
var c__7021__auto___28784 = cljs.core.chunk_first.call(null,seq__28719_28783__$1);
var G__28785 = cljs.core.chunk_rest.call(null,seq__28719_28783__$1);
var G__28786 = c__7021__auto___28784;
var G__28787 = cljs.core.count.call(null,c__7021__auto___28784);
var G__28788 = (0);
seq__28719_28742 = G__28785;
chunk__28724_28743 = G__28786;
count__28725_28744 = G__28787;
i__28726_28745 = G__28788;
continue;
} else {
var x_28789 = cljs.core.first.call(null,seq__28719_28783__$1);
var seq__28720_28790 = cljs.core.seq.call(null,cljs.core.range.call(null,y_faces_28737));
var chunk__28721_28791 = null;
var count__28722_28792 = (0);
var i__28723_28793 = (0);
while(true){
if((i__28723_28793 < count__28722_28792)){
var y_28794 = cljs.core._nth.call(null,chunk__28721_28791,i__28723_28793);
var xpos_28795 = (((x_28789 * width_28738) / x_faces_28736) - (width_28738 / (2)));
var zpos_28796 = (((y_28794 * height_28739) / y_faces_28737) - (height_28739 / (2)));
var ypos_28797 = game.client.ground_local.get_height.call(null,self__.ground,xpos_28795,zpos_28796);
var mesh_28798 = (new THREE.Mesh(geometry_28740,material_28741));
game.client.scene.add.call(null,self__.scene,mesh_28798);

var G__28733_28799 = mesh_28798.position;
(G__28733_28799["x"] = xpos_28795);

(G__28733_28799["y"] = ypos_28797);

(G__28733_28799["z"] = zpos_28796);


var G__28800 = seq__28720_28790;
var G__28801 = chunk__28721_28791;
var G__28802 = count__28722_28792;
var G__28803 = (i__28723_28793 + (1));
seq__28720_28790 = G__28800;
chunk__28721_28791 = G__28801;
count__28722_28792 = G__28802;
i__28723_28793 = G__28803;
continue;
} else {
var temp__4657__auto___28804__$1 = cljs.core.seq.call(null,seq__28720_28790);
if(temp__4657__auto___28804__$1){
var seq__28720_28805__$1 = temp__4657__auto___28804__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28720_28805__$1)){
var c__7021__auto___28806 = cljs.core.chunk_first.call(null,seq__28720_28805__$1);
var G__28807 = cljs.core.chunk_rest.call(null,seq__28720_28805__$1);
var G__28808 = c__7021__auto___28806;
var G__28809 = cljs.core.count.call(null,c__7021__auto___28806);
var G__28810 = (0);
seq__28720_28790 = G__28807;
chunk__28721_28791 = G__28808;
count__28722_28792 = G__28809;
i__28723_28793 = G__28810;
continue;
} else {
var y_28811 = cljs.core.first.call(null,seq__28720_28805__$1);
var xpos_28812 = (((x_28789 * width_28738) / x_faces_28736) - (width_28738 / (2)));
var zpos_28813 = (((y_28811 * height_28739) / y_faces_28737) - (height_28739 / (2)));
var ypos_28814 = game.client.ground_local.get_height.call(null,self__.ground,xpos_28812,zpos_28813);
var mesh_28815 = (new THREE.Mesh(geometry_28740,material_28741));
game.client.scene.add.call(null,self__.scene,mesh_28815);

var G__28734_28816 = mesh_28815.position;
(G__28734_28816["x"] = xpos_28812);

(G__28734_28816["y"] = ypos_28814);

(G__28734_28816["z"] = zpos_28813);


var G__28817 = cljs.core.next.call(null,seq__28720_28805__$1);
var G__28818 = null;
var G__28819 = (0);
var G__28820 = (0);
seq__28720_28790 = G__28817;
chunk__28721_28791 = G__28818;
count__28722_28792 = G__28819;
i__28723_28793 = G__28820;
continue;
}
} else {
}
}
break;
}

var G__28821 = cljs.core.next.call(null,seq__28719_28783__$1);
var G__28822 = null;
var G__28823 = (0);
var G__28824 = (0);
seq__28719_28742 = G__28821;
chunk__28724_28743 = G__28822;
count__28725_28744 = G__28823;
i__28726_28745 = G__28824;
continue;
}
} else {
}
}
break;
}

return component;
});})(G__28711__$1))
.call(null,G__28711__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.page_game_test.new_ground_balls_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__28711){
var self__ = this;
var G__28711__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__28711__$1){
return (function (component){
return component;
});})(G__28711__$1))
.call(null,G__28711__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.page_game_test.new_ground_balls_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"init-scene","init-scene",624606753,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.page_game_test.new_ground_balls_Record.cljs$lang$type = true;

game.client.page_game_test.new_ground_balls_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.page-game-test/new-ground-balls-Record");
});

game.client.page_game_test.new_ground_balls_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.page-game-test/new-ground-balls-Record");
});

game.client.page_game_test.__GT_new_ground_balls_Record = (function game$client$page_game_test$__GT_new_ground_balls_Record(ground,scene,init_scene,started,start_count,stop_count){
return (new game.client.page_game_test.new_ground_balls_Record(ground,scene,init_scene,started,start_count,stop_count,null,null,null));
});

game.client.page_game_test.map__GT_new_ground_balls_Record = (function game$client$page_game_test$map__GT_new_ground_balls_Record(G__28714){
return (new game.client.page_game_test.new_ground_balls_Record(new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(G__28714),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__28714),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774).cljs$core$IFn$_invoke$arity$1(G__28714),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__28714),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__28714),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__28714),null,cljs.core.dissoc.call(null,G__28714,new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.page_game_test.new_ground_balls = (function game$client$page_game_test$new_ground_balls(){
return com.stuartsierra.component.using.call(null,game.client.page_game_test.map__GT_new_ground_balls_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774)], null));
});
game.client.page_game_test.new_test_system = (function game$client$page_game_test$new_test_system(subsystem){
return subsystem;
});
game.client.page_game_test.start = (function game$client$page_game_test$start(component){
rum.core.mount.call(null,game.client.page_game_test.game_test.call(null,component),(new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(component)[(0)]));

var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"$page","$page",384517215),jayq.core.$.call(null,"#game"),new cljs.core.Keyword(null,"simplex","simplex",-495056721),game.client.common.data.call(null,new cljs.core.Keyword(null,"simplex","simplex",-495056721).cljs$core$IFn$_invoke$arity$1(component))], null);
var subsystem = cljs.core.assoc.call(null,game.client.page_game_test.new_test_system.call(null,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"params","params",710516235),params);
} else {
return game.client.game.new_system.call(null,params);
}
})()),new cljs.core.Keyword(null,"resources","resources",1632806811),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(component)));
var subsystem__$1 = game.shared.state.with_simple_cause.call(null,((function (params,subsystem){
return (function (){
return com.stuartsierra.component.start_system.call(null,subsystem);
});})(params,subsystem))
);
var component__$1 = cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),subsystem__$1);
rum.core.mount.call(null,game.client.page_game_test.game_test.call(null,component__$1),(new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(component__$1)[(0)]));

return component__$1;
});
game.client.page_game_test.stop = (function game$client$page_game_test$stop(component){
var temp__4655__auto___28825 = (new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(component)[(0)]);
if(cljs.core.truth_(temp__4655__auto___28825)){
var page_28826 = temp__4655__auto___28825;
rum.core.unmount.call(null,page_28826);
} else {
}

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
game.client.page_game_test.new_game_test_Record = (function (resources,simplex,progress_manager,subsystem,started,start_count,stop_count,__meta,__extmap,__hash){
this.resources = resources;
this.simplex = simplex;
this.progress_manager = progress_manager;
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
game.client.page_game_test.new_game_test_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k28829,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__28831 = (((k28829 instanceof cljs.core.Keyword))?k28829.fqn:null);
switch (G__28831) {
case "resources":
return self__.resources;

break;
case "simplex":
return self__.simplex;

break;
case "progress-manager":
return self__.progress_manager;

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
return cljs.core.get.call(null,self__.__extmap,k28829,else__6835__auto__);

}
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.page-game-test.new-game-test-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resources","resources",1632806811),self__.resources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"simplex","simplex",-495056721),self__.simplex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),self__.progress_manager],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),self__.subsystem],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IIterable$ = true;

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28828){
var self__ = this;
var G__28828__$1 = this;
return (new cljs.core.RecordIter((0),G__28828__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"simplex","simplex",-495056721),new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,self__.progress_manager,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),null,new cljs.core.Keyword(null,"simplex","simplex",-495056721),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),null,new cljs.core.Keyword(null,"resources","resources",1632806811),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,self__.progress_manager,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__28828){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__28832 = cljs.core.keyword_identical_QMARK_;
var expr__28833 = k__6840__auto__;
if(cljs.core.truth_(pred__28832.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811),expr__28833))){
return (new game.client.page_game_test.new_game_test_Record(G__28828,self__.simplex,self__.progress_manager,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28832.call(null,new cljs.core.Keyword(null,"simplex","simplex",-495056721),expr__28833))){
return (new game.client.page_game_test.new_game_test_Record(self__.resources,G__28828,self__.progress_manager,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28832.call(null,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),expr__28833))){
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,G__28828,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28832.call(null,new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),expr__28833))){
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,self__.progress_manager,G__28828,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28832.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__28833))){
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,self__.progress_manager,self__.subsystem,G__28828,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28832.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__28833))){
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,self__.progress_manager,self__.subsystem,self__.started,G__28828,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28832.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__28833))){
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,self__.progress_manager,self__.subsystem,self__.started,self__.start_count,G__28828,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,self__.progress_manager,self__.subsystem,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__28828),null));
}
}
}
}
}
}
}
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resources","resources",1632806811),self__.resources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"simplex","simplex",-495056721),self__.simplex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),self__.progress_manager],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),self__.subsystem],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__28828){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.page_game_test.new_game_test_Record(self__.resources,self__.simplex,self__.progress_manager,self__.subsystem,self__.started,self__.start_count,self__.stop_count,G__28828,self__.__extmap,self__.__hash));
});

game.client.page_game_test.new_game_test_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.page_game_test.new_game_test_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.page_game_test.new_game_test_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__28827){
var self__ = this;
var G__28827__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_game_test.start.call(null,G__28827__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.page_game_test.new_game_test_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__28827){
var self__ = this;
var G__28827__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_game_test.stop.call(null,G__28827__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.page_game_test.new_game_test_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"resources","resources",-1021628958,null),new cljs.core.Symbol(null,"simplex","simplex",1145474806,null),new cljs.core.Symbol(null,"progress-manager","progress-manager",522080976,null),new cljs.core.Symbol(null,"subsystem","subsystem",-651308578,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.page_game_test.new_game_test_Record.cljs$lang$type = true;

game.client.page_game_test.new_game_test_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.page-game-test/new-game-test-Record");
});

game.client.page_game_test.new_game_test_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.page-game-test/new-game-test-Record");
});

game.client.page_game_test.__GT_new_game_test_Record = (function game$client$page_game_test$__GT_new_game_test_Record(resources,simplex,progress_manager,subsystem,started,start_count,stop_count){
return (new game.client.page_game_test.new_game_test_Record(resources,simplex,progress_manager,subsystem,started,start_count,stop_count,null,null,null));
});

game.client.page_game_test.map__GT_new_game_test_Record = (function game$client$page_game_test$map__GT_new_game_test_Record(G__28830){
return (new game.client.page_game_test.new_game_test_Record(new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(G__28830),new cljs.core.Keyword(null,"simplex","simplex",-495056721).cljs$core$IFn$_invoke$arity$1(G__28830),new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551).cljs$core$IFn$_invoke$arity$1(G__28830),new cljs.core.Keyword(null,"subsystem","subsystem",2003127191).cljs$core$IFn$_invoke$arity$1(G__28830),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__28830),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__28830),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__28830),null,cljs.core.dissoc.call(null,G__28830,new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"simplex","simplex",-495056721),new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),new cljs.core.Keyword(null,"subsystem","subsystem",2003127191),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.page_game_test.new_game_test = (function game$client$page_game_test$new_game_test(){
return com.stuartsierra.component.using.call(null,game.client.page_game_test.map__GT_new_game_test_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"simplex","simplex",-495056721),new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551)], null));
});

//# sourceMappingURL=page_game_test.js.map