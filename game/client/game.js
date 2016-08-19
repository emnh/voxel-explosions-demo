// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.game');
goog.require('cljs.core');
goog.require('game.client.engine');
goog.require('game.client.config');
goog.require('game.client.selection');
goog.require('cljs.pprint');
goog.require('promesa.core');
goog.require('game.client.routing');
goog.require('game.client.magic');
goog.require('jayq.core');
goog.require('game.client.explosion');
goog.require('game.client.scene');
goog.require('game.client.ground_local');
goog.require('game.shared.state');
goog.require('rum.core');
goog.require('game.client.renderer');
goog.require('game.client.overlay');
goog.require('sablono.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.controls');
goog.require('clojure.string');
goog.require('game.client.common');
game.client.game.new_system = (function game$client$game$new_system(params){
var system = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"light3","light3",-680537406),new cljs.core.Keyword(null,"init-light","init-light",750264548),new cljs.core.Keyword(null,"update-explosion","update-explosion",-945201756),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"update-magic","update-magic",-70685105),new cljs.core.Keyword(null,"raycaster","raycaster",1968795888),new cljs.core.Keyword(null,"magic","magic",-1640473232),new cljs.core.Keyword(null,"init-renderer","init-renderer",-830076556),new cljs.core.Keyword(null,"light4","light4",405209109),new cljs.core.Keyword(null,"light2","light2",396248085),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"three-overlay","three-overlay",-966560583),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"explosion","explosion",-1564989537)],[game.client.selection.new_selector.call(null),game.client.common.new_jsobj.call(null,(function (){
return (new THREE.DirectionalLight());
})),game.client.scene.new_init_light.call(null),game.client.explosion.new_update_explosion.call(null),game.client.scene.new_scene_properties.call(null),game.client.scene.new_init_stats.call(null),game.client.ground_local.new_init_ground.call(null),game.client.config.config,game.client.common.new_jsobj.call(null,(function (){
return (new Stats());
})),game.client.common.new_jsobj.call(null,(function (){
return (new Stats());
})),params,game.client.controls.new_controls.call(null),game.client.scene.new_on_resize.call(null),game.client.common.new_jsobj.call(null,(function (){
return (new THREE.WebGLRenderer({"antialias": true}));
})),game.client.overlay.new_overlay.call(null),game.client.magic.new_update_magic.call(null),game.client.common.new_jsobj.call(null,(function (){
return (new THREE.Raycaster());
})),game.client.magic.new_magic.call(null),game.client.renderer.new_init_renderer.call(null),game.client.common.new_jsobj.call(null,(function (){
return (new THREE.DirectionalLight());
})),game.client.common.new_jsobj.call(null,(function (){
return (new THREE.DirectionalLight());
})),game.client.common.new_jsobj.call(null,game.client.scene.get_camera),game.client.engine.new_test_units.call(null),game.client.overlay.new_xp_overlay.call(null),game.client.engine.new_engine.call(null),game.client.scene.new_init_scene.call(null),game.client.common.new_jsobj.call(null,(function (){
return (new THREE.DirectionalLight());
})),game.client.common.new_jsobj.call(null,(function (){
return jayq.core.$.call(null,"<canvas/>");
})),game.client.common.new_jsobj.call(null,(function (){
return (new THREE.Scene());
})),game.client.explosion.new_explosion.call(null)]);
return system;
});

//# sourceMappingURL=game.js.map