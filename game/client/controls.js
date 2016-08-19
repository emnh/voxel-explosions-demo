// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.controls');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('game.client.routing');
goog.require('jayq.core');
goog.require('game.client.scene');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
game.client.controls.prevent_default = (function game$client$controls$prevent_default(event){
event.preventDefault();

return false;
});
game.client.controls.get_elapsed = (function game$client$controls$get_elapsed(state){
return ((function (){var x__6548__auto__ = (game.client.common.game_time.call(null) - cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(state)));
var y__6549__auto__ = 250.0;
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})() / 16.67);
});
game.client.controls.scroll = (function game$client$controls$scroll(delta,state){
var camera = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state);
var speed = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"scroll-speed","scroll-speed",1398530011)], null));
var speed__$1 = (speed * camera.position.y);
var speed__$2 = (speed__$1 / cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"origin","origin",1037372088)], null)).y);
var speed__$3 = (speed__$2 * game.client.controls.get_elapsed.call(null,state));
var _ = delta.applyQuaternion(camera.quaternion);
var ___$1 = delta.y = (0);
var ___$2 = delta.normalize();
var ___$3 = delta.multiplyScalar(speed__$3);
return camera.position.add(delta);
});
game.client.controls.arc_ball_rotation_left_right = (function game$client$controls$arc_ball_rotation_left_right(state,sign){
var camera = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var focus = game.client.scene.get_camera_focus.call(null,camera,(0),(0));
var axis = camera.position.clone();
var _ = axis.sub(focus);
var ___$1 = axis.y = (0);
var ___$2 = axis.normalize();
var old = camera.position.clone();
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state);
var rotate_speed = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"rotate-speed","rotate-speed",-564390296)], null));
var rotate_speed__$1 = (sign * rotate_speed);
var rotate_speed__$2 = (rotate_speed__$1 * game.client.controls.get_elapsed.call(null,state));
camera.position.applyAxisAngle(axis,rotate_speed__$2);

camera.position.y = old.y;

return camera.lookAt(focus);
});
game.client.controls.arc_ball_rotation_up_down = (function game$client$controls$arc_ball_rotation_up_down(state,sign){
var camera = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var focus = game.client.scene.get_camera_focus.call(null,camera,(0),(0));
var axis = camera.position.clone();
var _ = axis.sub(focus);
var offset = axis;
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state);
var rotate_speed = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"rotate-speed","rotate-speed",-564390296)], null));
var rotate_speed__$1 = (sign * rotate_speed);
var rotate_speed__$2 = (rotate_speed__$1 * game.client.controls.get_elapsed.call(null,state));
var theta = game.client.math.atan2.call(null,offset.x,offset.z);
var xzlen = game.client.math.sqrt.call(null,(game.client.math.square.call(null,offset.x) + game.client.math.square.call(null,offset.z)));
var min_polar_angle = 0.1;
var max_polar_angle = ((game.client.math.pi / (2)) - (game.client.math.pi / (16)));
var phi = game.client.math.atan2.call(null,xzlen,offset.y);
var phi__$1 = (phi + rotate_speed__$2);
var phi__$2 = (function (){var x__6548__auto__ = max_polar_angle;
var y__6549__auto__ = phi__$1;
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})();
var phi__$3 = (function (){var x__6541__auto__ = min_polar_angle;
var y__6542__auto__ = phi__$2;
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})();
var radius = offset.length();
var x = ((radius * game.client.math.sin.call(null,phi__$3)) * game.client.math.sin.call(null,theta));
var y = (radius * game.client.math.cos.call(null,phi__$3));
var z = ((radius * game.client.math.sin.call(null,phi__$3)) * game.client.math.cos.call(null,theta));
var ___$1 = offset.set(x,y,z);
camera.position.copy(focus);

camera.position.add(offset);

return camera.lookAt(focus);
});
game.client.controls.rotate_left = (function game$client$controls$rotate_left(state){
return game.client.controls.arc_ball_rotation_left_right.call(null,state,(1));
});
game.client.controls.rotate_right = (function game$client$controls$rotate_right(state){
return game.client.controls.arc_ball_rotation_left_right.call(null,state,(-1));
});
game.client.controls.rotate_up = (function game$client$controls$rotate_up(state){
return game.client.controls.arc_ball_rotation_up_down.call(null,state,(-1));
});
game.client.controls.rotate_down = (function game$client$controls$rotate_down(state){
return game.client.controls.arc_ball_rotation_up_down.call(null,state,(1));
});
game.client.controls.scroll_left = (function game$client$controls$scroll_left(state){
return game.client.controls.scroll.call(null,(new THREE.Vector3((-1),(0),(0))),state);
});
game.client.controls.scroll_right = (function game$client$controls$scroll_right(state){
return game.client.controls.scroll.call(null,(new THREE.Vector3((1),(0),(0))),state);
});
game.client.controls.scroll_up = (function game$client$controls$scroll_up(state){
return game.client.controls.scroll.call(null,(new THREE.Vector3((0),(1),(0))),state);
});
game.client.controls.scroll_down = (function game$client$controls$scroll_down(state){
return game.client.controls.scroll.call(null,(new THREE.Vector3((0),(-1),(0))),state);
});
game.client.controls.zoom = (function game$client$controls$zoom(state,camera,delta){
var te = camera.matrix.elements;
var x = (te[(8)]);
var y = (te[(9)]);
var z = (te[(10)]);
var zoom_offset = (new THREE.Vector3(x,y,z));
var delta__$1 = (delta * game.client.controls.get_elapsed.call(null,state));
var _ = zoom_offset.multiplyScalar((delta__$1 * camera.position.y));
return camera.position.addVectors(camera.position,zoom_offset);
});
game.client.controls.zoom_in = (function game$client$controls$zoom_in(state){
return game.client.controls.zoom.call(null,state,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state),(- cljs.core.get_in.call(null,new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom-speed","zoom-speed",1787688902)], null))));
});
game.client.controls.zoom_out = (function game$client$controls$zoom_out(state){
return game.client.controls.zoom.call(null,state,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state),cljs.core.get_in.call(null,new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom-speed","zoom-speed",1787688902)], null)));
});
game.client.controls.reset_camera = (function game$client$controls$reset_camera(state){
var camera = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(state);
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state);
var scene = new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(state);
var origin = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"origin","origin",1037372088)], null));
camera.position.copy(origin);

return camera.lookAt(scene.position);
});
game.client.controls.handled_keys = cljs.core.PersistentHashMap.fromArrays([KeyEvent.DOM_VK_PAGE_UP,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),KeyEvent.DOM_VK_DOWN], null),KeyEvent.DOM_VK_PAGE_DOWN,KeyEvent.DOM_VK_LEFT,KeyEvent.DOM_VK_UP,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),KeyEvent.DOM_VK_RIGHT], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),KeyEvent.DOM_VK_LEFT], null),KeyEvent.DOM_VK_RIGHT,KeyEvent.DOM_VK_DOWN,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),KeyEvent.DOM_VK_UP], null),KeyEvent.DOM_VK_HOME],[game.client.controls.zoom_in,game.client.controls.rotate_down,game.client.controls.zoom_out,game.client.controls.scroll_left,game.client.controls.scroll_up,game.client.controls.rotate_right,game.client.controls.rotate_left,game.client.controls.scroll_right,game.client.controls.scroll_down,game.client.controls.rotate_up,game.client.controls.reset_camera]);
game.client.controls.scroll_handler = (function game$client$controls$scroll_handler(enabled,keys_pressed,state){
var seq__13437_13441 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,keys_pressed)));
var chunk__13438_13442 = null;
var count__13439_13443 = (0);
var i__13440_13444 = (0);
while(true){
if((i__13440_13444 < count__13439_13443)){
var k_13445 = cljs.core._nth.call(null,chunk__13438_13442,i__13440_13444);
var temp__4655__auto___13446 = cljs.core.get.call(null,game.client.controls.handled_keys,k_13445);
if(cljs.core.truth_(temp__4655__auto___13446)){
var handler_13447 = temp__4655__auto___13446;
handler_13447.call(null,state);
} else {
}

var G__13448 = seq__13437_13441;
var G__13449 = chunk__13438_13442;
var G__13450 = count__13439_13443;
var G__13451 = (i__13440_13444 + (1));
seq__13437_13441 = G__13448;
chunk__13438_13442 = G__13449;
count__13439_13443 = G__13450;
i__13440_13444 = G__13451;
continue;
} else {
var temp__4657__auto___13452 = cljs.core.seq.call(null,seq__13437_13441);
if(temp__4657__auto___13452){
var seq__13437_13453__$1 = temp__4657__auto___13452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13437_13453__$1)){
var c__7021__auto___13454 = cljs.core.chunk_first.call(null,seq__13437_13453__$1);
var G__13455 = cljs.core.chunk_rest.call(null,seq__13437_13453__$1);
var G__13456 = c__7021__auto___13454;
var G__13457 = cljs.core.count.call(null,c__7021__auto___13454);
var G__13458 = (0);
seq__13437_13441 = G__13455;
chunk__13438_13442 = G__13456;
count__13439_13443 = G__13457;
i__13440_13444 = G__13458;
continue;
} else {
var k_13459 = cljs.core.first.call(null,seq__13437_13453__$1);
var temp__4655__auto___13460 = cljs.core.get.call(null,game.client.controls.handled_keys,k_13459);
if(cljs.core.truth_(temp__4655__auto___13460)){
var handler_13461 = temp__4655__auto___13460;
handler_13461.call(null,state);
} else {
}

var G__13462 = cljs.core.next.call(null,seq__13437_13453__$1);
var G__13463 = null;
var G__13464 = (0);
var G__13465 = (0);
seq__13437_13441 = G__13462;
chunk__13438_13442 = G__13463;
count__13439_13443 = G__13464;
i__13440_13444 = G__13465;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(state),game.client.common.game_time.call(null));

if(cljs.core.truth_(cljs.core.deref.call(null,enabled))){
return requestAnimationFrame((function (){
return game$client$controls$scroll_handler.call(null,enabled,keys_pressed,state);
}));
} else {
return null;
}
});
game.client.controls.handle_key = (function game$client$controls$handle_key(keys_pressed,event,active){
var action = (cljs.core.truth_(active)?(function (p1__13466_SHARP_,p2__13467_SHARP_){
return cljs.core.assoc.call(null,p1__13466_SHARP_,p2__13467_SHARP_,true);
}):cljs.core.dissoc);
var key_code = event.keyCode;
var combination = (cljs.core.truth_(event.ctrlKey)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),key_code], null):key_code);
if(cljs.core.contains_QMARK_.call(null,game.client.controls.handled_keys,combination)){
game.client.controls.prevent_default.call(null,event);

cljs.core.swap_BANG_.call(null,keys_pressed,((function (action,key_code,combination){
return (function (p1__13468_SHARP_){
return action.call(null,p1__13468_SHARP_,combination);
});})(action,key_code,combination))
);

if(cljs.core.not.call(null,active)){
cljs.core.swap_BANG_.call(null,keys_pressed,((function (action,key_code,combination){
return (function (p1__13469_SHARP_){
return action.call(null,p1__13469_SHARP_,key_code);
});})(action,key_code,combination))
);
} else {
}

if(cljs.core.not.call(null,active)){
cljs.core.swap_BANG_.call(null,keys_pressed,((function (action,key_code,combination){
return (function (p1__13470_SHARP_){
return action.call(null,p1__13470_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl","ctrl",361402094),key_code], null));
});})(action,key_code,combination))
);
} else {
}

return false;
} else {
return true;
}
});
game.client.controls.key_down = (function game$client$controls$key_down(keys_pressed,event){
return game.client.controls.handle_key.call(null,keys_pressed,event,true);
});
game.client.controls.key_up = (function game$client$controls$key_up(keys_pressed,event){
return game.client.controls.handle_key.call(null,keys_pressed,event,false);
});
game.client.controls.rebind = (function game$client$controls$rebind($element,eventname,handler){
return $element.off(eventname).on(eventname,handler);
});
game.client.controls.init_controls = (function game$client$controls$init_controls(component,element,config,camera,scene){
var $body = jayq.core.$.call(null,"body");
var $element = jayq.core.$.call(null,element);
var $overlay = game.client.common.data.call(null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817).cljs$core$IFn$_invoke$arity$1(component));
var render_stats = game.client.common.data.call(null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262).cljs$core$IFn$_invoke$arity$1(component));
var engine_stats = game.client.common.data.call(null,new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575).cljs$core$IFn$_invoke$arity$1(component));
var $render_stats = jayq.core.$.call(null,render_stats.domElement);
var $engine_stats = jayq.core.$.call(null,engine_stats.domElement);
var bindns = [cljs.core.str("controls"),cljs.core.str(game.client.common.unique_id.call(null,element))].join('');
var contextevt = [cljs.core.str("contextmenu."),cljs.core.str(bindns)].join('');
var keydownevt = [cljs.core.str("keydown."),cljs.core.str(bindns)].join('');
var keyupevt = [cljs.core.str("keyup."),cljs.core.str(bindns)].join('');
var keys_pressed = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var last_frame_time = cljs.core.atom.call(null,game.client.common.game_time.call(null));
var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"camera","camera",-1190348585),game.client.common.data.call(null,camera),new cljs.core.Keyword(null,"scene","scene",1523800415),game.client.common.data.call(null,scene),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),last_frame_time], null);
var interval_handler_enabled = cljs.core.atom.call(null,true);
var interval_handler = cljs.core.partial.call(null,game.client.controls.scroll_handler,interval_handler_enabled,keys_pressed,state);
game.client.controls.rebind.call(null,$element,contextevt,game.client.controls.prevent_default);

game.client.controls.rebind.call(null,$overlay,contextevt,game.client.controls.prevent_default);

game.client.controls.rebind.call(null,$render_stats,contextevt,game.client.controls.prevent_default);

game.client.controls.rebind.call(null,$engine_stats,contextevt,game.client.controls.prevent_default);

game.client.controls.rebind.call(null,$body,keydownevt,cljs.core.partial.call(null,game.client.controls.key_down,keys_pressed));

game.client.controls.rebind.call(null,$body,keyupevt,cljs.core.partial.call(null,game.client.controls.key_up,keys_pressed));

interval_handler.call(null);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"keydownevt","keydownevt",1042230663),keydownevt),new cljs.core.Keyword(null,"keyupevt","keyupevt",1015753365),keyupevt),new cljs.core.Keyword(null,"old-interval-handler-enabled","old-interval-handler-enabled",1894850659),interval_handler_enabled);
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
game.client.controls.new_controls_Record = (function (renderer,config,camera,scene,init_scene,$overlay,render_stats,engine_stats,old_interval_handler_enabled,keydownevt,keyupevt,started,start_count,stop_count,__meta,__extmap,__hash){
this.renderer = renderer;
this.config = config;
this.camera = camera;
this.scene = scene;
this.init_scene = init_scene;
this.$overlay = $overlay;
this.render_stats = render_stats;
this.engine_stats = engine_stats;
this.old_interval_handler_enabled = old_interval_handler_enabled;
this.keydownevt = keydownevt;
this.keyupevt = keyupevt;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.controls.new_controls_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.controls.new_controls_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k13473,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__13475 = (((k13473 instanceof cljs.core.Keyword))?k13473.fqn:null);
switch (G__13475) {
case "started":
return self__.started;

break;
case "old-interval-handler-enabled":
return self__.old_interval_handler_enabled;

break;
case "stop-count":
return self__.stop_count;

break;
case "config":
return self__.config;

break;
case "keydownevt":
return self__.keydownevt;

break;
case "engine-stats":
return self__.engine_stats;

break;
case "render-stats":
return self__.render_stats;

break;
case "renderer":
return self__.renderer;

break;
case "start-count":
return self__.start_count;

break;
case "keyupevt":
return self__.keyupevt;

break;
case "camera":
return self__.camera;

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
return cljs.core.get.call(null,self__.__extmap,k13473,else__6835__auto__);

}
});

game.client.controls.new_controls_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.controls.new-controls-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),self__.engine_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"old-interval-handler-enabled","old-interval-handler-enabled",1894850659),self__.old_interval_handler_enabled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keydownevt","keydownevt",1042230663),self__.keydownevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keyupevt","keyupevt",1015753365),self__.keyupevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.controls.new_controls_Record.prototype.cljs$core$IIterable$ = true;

game.client.controls.new_controls_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13472){
var self__ = this;
var G__13472__$1 = this;
return (new cljs.core.RecordIter((0),G__13472__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),new cljs.core.Keyword(null,"old-interval-handler-enabled","old-interval-handler-enabled",1894850659),new cljs.core.Keyword(null,"keydownevt","keydownevt",1042230663),new cljs.core.Keyword(null,"keyupevt","keyupevt",1015753365),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.controls.new_controls_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.controls.new_controls_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.controls.new_controls_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

game.client.controls.new_controls_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.controls.new_controls_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.controls.new_controls_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"old-interval-handler-enabled","old-interval-handler-enabled",1894850659),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"keydownevt","keydownevt",1042230663),null,new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"keyupevt","keyupevt",1015753365),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.controls.new_controls_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__13472){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__13476 = cljs.core.keyword_identical_QMARK_;
var expr__13477 = k__6840__auto__;
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__13477))){
return (new game.client.controls.new_controls_Record(G__13472,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,G__13472,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,G__13472,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,G__13472,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,G__13472,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,G__13472,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,G__13472,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,G__13472,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"old-interval-handler-enabled","old-interval-handler-enabled",1894850659),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,G__13472,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"keydownevt","keydownevt",1042230663),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,G__13472,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"keyupevt","keyupevt",1015753365),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,G__13472,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,G__13472,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,G__13472,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13476.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__13477))){
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,G__13472,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__13472),null));
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

game.client.controls.new_controls_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),self__.engine_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"old-interval-handler-enabled","old-interval-handler-enabled",1894850659),self__.old_interval_handler_enabled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keydownevt","keydownevt",1042230663),self__.keydownevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keyupevt","keyupevt",1015753365),self__.keyupevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.controls.new_controls_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__13472){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.controls.new_controls_Record(self__.renderer,self__.config,self__.camera,self__.scene,self__.init_scene,self__.$overlay,self__.render_stats,self__.engine_stats,self__.old_interval_handler_enabled,self__.keydownevt,self__.keyupevt,self__.started,self__.start_count,self__.stop_count,G__13472,self__.__extmap,self__.__hash));
});

game.client.controls.new_controls_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.controls.new_controls_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.controls.new_controls_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__13471){
var self__ = this;
var G__13471__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__13471__$1){
return (function (component){
var element = game.client.scene.get_view_element.call(null,self__.renderer);
return game.client.controls.init_controls.call(null,component,element,self__.config,self__.camera,self__.scene);
});})(G__13471__$1))
.call(null,G__13471__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.controls.new_controls_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__13471){
var self__ = this;
var G__13471__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__13471__$1){
return (function (component){
if(cljs.core.truth_(self__.old_interval_handler_enabled)){
cljs.core.reset_BANG_.call(null,self__.old_interval_handler_enabled,false);
} else {
}

var $body_13480 = jayq.core.$.call(null,"body");
if(cljs.core.truth_(self__.keydownevt)){
$body_13480.off(self__.keydownevt);
} else {
}

if(cljs.core.truth_(self__.keyupevt)){
$body_13480.off(self__.keyupevt);
} else {
}

return component;
});})(G__13471__$1))
.call(null,G__13471__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.controls.new_controls_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"init-scene","init-scene",624606753,null),new cljs.core.Symbol(null,"$overlay","$overlay",139904710,null),new cljs.core.Symbol(null,"render-stats","render-stats",1214813265,null),new cljs.core.Symbol(null,"engine-stats","engine-stats",1134275952,null),new cljs.core.Symbol(null,"old-interval-handler-enabled","old-interval-handler-enabled",-759585110,null),new cljs.core.Symbol(null,"keydownevt","keydownevt",-1612205106,null),new cljs.core.Symbol(null,"keyupevt","keyupevt",-1638682404,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.controls.new_controls_Record.cljs$lang$type = true;

game.client.controls.new_controls_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.controls/new-controls-Record");
});

game.client.controls.new_controls_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.controls/new-controls-Record");
});

game.client.controls.__GT_new_controls_Record = (function game$client$controls$__GT_new_controls_Record(renderer,config,camera,scene,init_scene,$overlay,render_stats,engine_stats,old_interval_handler_enabled,keydownevt,keyupevt,started,start_count,stop_count){
return (new game.client.controls.new_controls_Record(renderer,config,camera,scene,init_scene,$overlay,render_stats,engine_stats,old_interval_handler_enabled,keydownevt,keyupevt,started,start_count,stop_count,null,null,null));
});

game.client.controls.map__GT_new_controls_Record = (function game$client$controls$map__GT_new_controls_Record(G__13474){
return (new game.client.controls.new_controls_Record(new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"old-interval-handler-enabled","old-interval-handler-enabled",1894850659).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"keydownevt","keydownevt",1042230663).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"keyupevt","keyupevt",1015753365).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__13474),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__13474),null,cljs.core.dissoc.call(null,G__13474,new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),new cljs.core.Keyword(null,"old-interval-handler-enabled","old-interval-handler-enabled",1894850659),new cljs.core.Keyword(null,"keydownevt","keydownevt",1042230663),new cljs.core.Keyword(null,"keyupevt","keyupevt",1015753365),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.controls.new_controls = (function game$client$controls$new_controls(){
return com.stuartsierra.component.using.call(null,game.client.controls.map__GT_new_controls_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575)], null));
});

//# sourceMappingURL=controls.js.map