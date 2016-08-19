// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.engine');
goog.require('cljs.core');
goog.require('game.client.voxelize');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('game.client.scene');
goog.require('game.client.ground_local');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
goog.require('game.worker.state');
game.client.engine.get_screenbox_for_mesh = (function game$client$engine$get_screenbox_for_mesh(component,mesh){
var mesh_to_screenbox_map = cljs.core.deref.call(null,new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288).cljs$core$IFn$_invoke$arity$1(component));
return mesh_to_screenbox_map.call(null,mesh);
});
game.client.engine.get_unit_for_mesh = (function game$client$engine$get_unit_for_mesh(component,mesh){
var mesh_to_unit_map = cljs.core.deref.call(null,new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218).cljs$core$IFn$_invoke$arity$1(component));
return mesh_to_unit_map.call(null,mesh);
});
game.client.engine.get_unit_explosion = (function game$client$engine$get_unit_explosion(unit){
return new cljs.core.Keyword(null,"explosion-mesh","explosion-mesh",1324058242).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(unit));
});
game.client.engine.get_unit_mesh = (function game$client$engine$get_unit_mesh(unit){
return new cljs.core.Keyword(null,"display-mesh","display-mesh",-1670019984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(unit));
});
game.client.engine.get_unit_regular_mesh = (function game$client$engine$get_unit_regular_mesh(unit){
return new cljs.core.Keyword(null,"regular-mesh","regular-mesh",-1171024791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(unit));
});
game.client.engine.get_unit_build_mesh = (function game$client$engine$get_unit_build_mesh(unit){
return new cljs.core.Keyword(null,"build-mesh","build-mesh",-26004004).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(unit));
});
game.client.engine.get_unit_star = (function game$client$engine$get_unit_star(unit){
return new cljs.core.Keyword(null,"stars-mesh","stars-mesh",1174821711).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(unit));
});
game.client.engine.get_unit_group = (function game$client$engine$get_unit_group(unit){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(unit));
});
game.client.engine.get_unit_position = (function game$client$engine$get_unit_position(unit){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(unit)).position;
});
game.client.engine.get_units = (function game$client$engine$get_units(units){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(units));
});
game.client.engine.for_each_unit = (function game$client$engine$for_each_unit(units_component,f){
var units = game.client.engine.get_units.call(null,units_component);
var unit_count = cljs.core.count.call(null,units);
var i = (0);
while(true){
if((i < unit_count)){
f.call(null,i,cljs.core.nth.call(null,units,i));

var G__25312 = (i + (1));
i = G__25312;
continue;
} else {
return null;
}
break;
}
});
game.client.engine.map_units = (function game$client$engine$map_units(units_component,f){
var units = game.client.engine.get_units.call(null,units_component);
var unit_count = cljs.core.count.call(null,units);
var i = (0);
var v = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < unit_count)){
var G__25313 = (i + (1));
var G__25314 = cljs.core.conj.call(null,v,f.call(null,i,cljs.core.nth.call(null,units,i)));
i = G__25313;
v = G__25314;
continue;
} else {
return v;
}
break;
}
});
game.client.engine.get_current_state = (function game$client$engine$get_current_state(component){
var unit_count = cljs.core.count.call(null,game.client.engine.get_units.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component)));
var new_state = game.worker.state.init_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),unit_count,new cljs.core.Keyword(null,"buffer","buffer",617295198),null], null));
game.client.engine.for_each_unit.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),((function (unit_count,new_state){
return (function (index,unit){
var group = game.client.engine.get_unit_group.call(null,unit);
var mesh = game.client.engine.get_unit_mesh.call(null,unit);
var position = game.client.engine.get_unit_position.call(null,unit);
var bbox = mesh.geometry.boundingBox;
game.worker.state.set_position.call(null,new_state,index,position);

return game.worker.state.set_bbox.call(null,new_state,index,bbox);
});})(unit_count,new_state))
);

return new_state;
});
if(typeof game.client.engine._on_worker_message !== 'undefined'){
} else {
game.client.engine._on_worker_message = (function (){var method_table__7134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7138__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.client.engine","-on-worker-message"),((function (method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__){
return (function (component,data){
return cljs.core.keyword.call(null,cljs.core.first.call(null,data));
});})(method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7138__auto__,method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__));
})();
}
cljs.core._add_method.call(null,game.client.engine._on_worker_message,new cljs.core.Keyword(null,"default","default",-1987822328),(function (component,p__25315){
var vec__25316 = p__25315;
var event = cljs.core.nth.call(null,vec__25316,(0),null);
var data = cljs.core.nth.call(null,vec__25316,(1),null);
return cljs.core.println.call(null,"unhandled worker message",event,data);
}));
cljs.core._add_method.call(null,game.client.engine._on_worker_message,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),(function (component,p__25317){
var vec__25318 = p__25317;
var event = cljs.core.nth.call(null,vec__25318,(0),null);
var data = cljs.core.nth.call(null,vec__25318,(1),null);
cljs.core.println.call(null,"loaded");

var worker = new cljs.core.Keyword(null,"worker","worker",938239996).cljs$core$IFn$_invoke$arity$1(component);
var camera = game.client.common.data.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(component));
var unit_count = cljs.core.count.call(null,game.client.engine.get_units.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component)));
var scene_properties = new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364).cljs$core$IFn$_invoke$arity$1(component);
var state = game.client.engine.get_current_state.call(null,component);
var ground = new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(component);
var map_dict = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height-field","height-field",966744104),new cljs.core.Keyword(null,"height-field","height-field",966744104).cljs$core$IFn$_invoke$arity$1(ground),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(ground),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(ground),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983).cljs$core$IFn$_invoke$arity$1(ground),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175).cljs$core$IFn$_invoke$arity$1(ground)], null);
var camera_dict = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"matrix","matrix",803137200),camera.matrix.toArray(),new cljs.core.Keyword(null,"fov","fov",-12463282),camera.fov,new cljs.core.Keyword(null,"aspect","aspect",-839905246),camera.aspect,new cljs.core.Keyword(null,"near","near",-1077668328),camera.near,new cljs.core.Keyword(null,"far","far",85807546),camera.far], null);
var init_data = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state-buffer","state-buffer",866117773),new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"camera","camera",-1190348585),camera_dict,new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),unit_count,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(scene_properties)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.deref.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(scene_properties))], null),new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036),map_dict], null));
worker.postMessage(["initialize",init_data],[new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(state)]);

cljs.core.println.call(null,"sent initialize");

worker.postMessage(["start-engine",null]);

return cljs.core.println.call(null,"sent start-engine");
}));
cljs.core._add_method.call(null,game.client.engine._on_worker_message,new cljs.core.Keyword(null,"update","update",1045576396),(function (component,p__25319){
var vec__25320 = p__25319;
var event = cljs.core.nth.call(null,vec__25320,(0),null);
var data = cljs.core.nth.call(null,vec__25320,(1),null);
var engine_stats = game.client.common.data.call(null,new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575).cljs$core$IFn$_invoke$arity$1(component));
engine_stats.update();

if(cljs.core.truth_(data)){
var unit_count = new cljs.core.Keyword(null,"unit-count","unit-count",-961602118).cljs$core$IFn$_invoke$arity$1(data);
var new_state = game.worker.state.init_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),unit_count,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(data)], null));
return game.client.engine.for_each_unit.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),((function (unit_count,new_state,engine_stats,vec__25320,event,data){
return (function (unit_index,unit){
var group = game.client.engine.get_unit_group.call(null,unit);
var position = game.worker.state.get_position.call(null,new_state,unit_index);
return group.position.copy(position);
});})(unit_count,new_state,engine_stats,vec__25320,event,data))
);
} else {
return null;
}
}));
game.client.engine.on_worker_message = (function game$client$engine$on_worker_message(component,message){
var data = message.data;
var data__$1 = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return game.client.engine._on_worker_message.call(null,component,data__$1);
});
game.client.engine.poll_state = (function game$client$engine$poll_state(component){
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"polling","polling",-1739817882).cljs$core$IFn$_invoke$arity$1(component)))){
var worker_25321 = new cljs.core.Keyword(null,"worker","worker",938239996).cljs$core$IFn$_invoke$arity$1(component);
worker_25321.postMessage(["poll-state",null]);

return requestAnimationFrame(cljs.core.partial.call(null,game$client$engine$poll_state,component));
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
game.client.engine.new_engine_Record = (function (scene_properties,camera,units,engine_stats,ground,state,worker,polling,started,start_count,stop_count,__meta,__extmap,__hash){
this.scene_properties = scene_properties;
this.camera = camera;
this.units = units;
this.engine_stats = engine_stats;
this.ground = ground;
this.state = state;
this.worker = worker;
this.polling = polling;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.engine.new_engine_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.engine.new_engine_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25324,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25326 = (((k25324 instanceof cljs.core.Keyword))?k25324.fqn:null);
switch (G__25326) {
case "started":
return self__.started;

break;
case "scene-properties":
return self__.scene_properties;

break;
case "polling":
return self__.polling;

break;
case "ground":
return self__.ground;

break;
case "stop-count":
return self__.stop_count;

break;
case "engine-stats":
return self__.engine_stats;

break;
case "state":
return self__.state;

break;
case "start-count":
return self__.start_count;

break;
case "camera":
return self__.camera;

break;
case "units":
return self__.units;

break;
case "worker":
return self__.worker;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25324,else__6835__auto__);

}
});

game.client.engine.new_engine_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.engine.new-engine-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),self__.engine_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"worker","worker",938239996),self__.worker],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"polling","polling",-1739817882),self__.polling],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.engine.new_engine_Record.prototype.cljs$core$IIterable$ = true;

game.client.engine.new_engine_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25323){
var self__ = this;
var G__25323__$1 = this;
return (new cljs.core.RecordIter((0),G__25323__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"worker","worker",938239996),new cljs.core.Keyword(null,"polling","polling",-1739817882),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.engine.new_engine_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.engine.new_engine_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.engine.new_engine_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

game.client.engine.new_engine_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.engine.new_engine_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.engine.new_engine_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),null,new cljs.core.Keyword(null,"polling","polling",-1739817882),null,new cljs.core.Keyword(null,"ground","ground",1193572934),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"worker","worker",938239996),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.engine.new_engine_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25323){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25327 = cljs.core.keyword_identical_QMARK_;
var expr__25328 = k__6840__auto__;
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),expr__25328))){
return (new game.client.engine.new_engine_Record(G__25323,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,G__25323,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,G__25323,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,G__25323,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"ground","ground",1193572934),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,G__25323,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,G__25323,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,G__25323,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"polling","polling",-1739817882),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,G__25323,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,G__25323,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,G__25323,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25327.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25328))){
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,G__25323,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25323),null));
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

game.client.engine.new_engine_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),self__.engine_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"worker","worker",938239996),self__.worker],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"polling","polling",-1739817882),self__.polling],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.engine.new_engine_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25323){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.engine.new_engine_Record(self__.scene_properties,self__.camera,self__.units,self__.engine_stats,self__.ground,self__.state,self__.worker,self__.polling,self__.started,self__.start_count,self__.stop_count,G__25323,self__.__extmap,self__.__hash));
});

game.client.engine.new_engine_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.engine.new_engine_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.engine.new_engine_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25322){
var self__ = this;
var G__25322__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25322__$1){
return (function (component){
var unit_count = cljs.core.count.call(null,game.client.engine.get_units.call(null,self__.units));
var worker__$1 = (new Worker("js/worker.js"));
var state__$1 = cljs.core.atom.call(null,game.worker.state.init_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),unit_count,new cljs.core.Keyword(null,"buffer","buffer",617295198),null], null)));
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"polling","polling",-1739817882),cljs.core.atom.call(null,true)),new cljs.core.Keyword(null,"state","state",-1988618099),state__$1),new cljs.core.Keyword(null,"worker","worker",938239996),worker__$1);
worker__$1.addEventListener("message",cljs.core.partial.call(null,game.client.engine.on_worker_message,component__$1),false);

game.client.engine.poll_state.call(null,component__$1);

return component__$1;
});})(G__25322__$1))
.call(null,G__25322__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.engine.new_engine_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25322){
var self__ = this;
var G__25322__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25322__$1){
return (function (component){
if(cljs.core.truth_(self__.polling)){
cljs.core.reset_BANG_.call(null,self__.polling,false);
} else {
}

if(cljs.core.truth_(self__.worker)){
self__.worker.terminate();
} else {
}

return component;
});})(G__25322__$1))
.call(null,G__25322__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.engine.new_engine_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scene-properties","scene-properties",-262402837,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"engine-stats","engine-stats",1134275952,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"worker","worker",-1716195773,null),new cljs.core.Symbol(null,"polling","polling",-99286355,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.engine.new_engine_Record.cljs$lang$type = true;

game.client.engine.new_engine_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.engine/new-engine-Record");
});

game.client.engine.new_engine_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.engine/new-engine-Record");
});

game.client.engine.__GT_new_engine_Record = (function game$client$engine$__GT_new_engine_Record(scene_properties,camera,units,engine_stats,ground,state,worker,polling,started,start_count,stop_count){
return (new game.client.engine.new_engine_Record(scene_properties,camera,units,engine_stats,ground,state,worker,polling,started,start_count,stop_count,null,null,null));
});

game.client.engine.map__GT_new_engine_Record = (function game$client$engine$map__GT_new_engine_Record(G__25325){
return (new game.client.engine.new_engine_Record(new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"worker","worker",938239996).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"polling","polling",-1739817882).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25325),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25325),null,cljs.core.dissoc.call(null,G__25325,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"worker","worker",938239996),new cljs.core.Keyword(null,"polling","polling",-1739817882),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.engine.new_engine = (function game$client$engine$new_engine(){
return com.stuartsierra.component.using.call(null,game.client.engine.map__GT_new_engine_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"engine-stats","engine-stats",-506255575),new cljs.core.Keyword(null,"ground","ground",1193572934)], null));
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
game.client.engine.new_test_units_Record = (function (ground,scene,init_scene,resources,magic,explosion,starting,units,mesh_to_screenbox_map,mesh_to_unit_map,started,start_count,stop_count,__meta,__extmap,__hash){
this.ground = ground;
this.scene = scene;
this.init_scene = init_scene;
this.resources = resources;
this.magic = magic;
this.explosion = explosion;
this.starting = starting;
this.units = units;
this.mesh_to_screenbox_map = mesh_to_screenbox_map;
this.mesh_to_unit_map = mesh_to_unit_map;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.engine.new_test_units_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.engine.new_test_units_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25333,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25335 = (((k25333 instanceof cljs.core.Keyword))?k25333.fqn:null);
switch (G__25335) {
case "started":
return self__.started;

break;
case "mesh-to-screenbox-map":
return self__.mesh_to_screenbox_map;

break;
case "starting":
return self__.starting;

break;
case "ground":
return self__.ground;

break;
case "stop-count":
return self__.stop_count;

break;
case "magic":
return self__.magic;

break;
case "start-count":
return self__.start_count;

break;
case "units":
return self__.units;

break;
case "mesh-to-unit-map":
return self__.mesh_to_unit_map;

break;
case "init-scene":
return self__.init_scene;

break;
case "resources":
return self__.resources;

break;
case "scene":
return self__.scene;

break;
case "explosion":
return self__.explosion;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25333,else__6835__auto__);

}
});

game.client.engine.new_test_units_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.engine.new-test-units-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resources","resources",1632806811),self__.resources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magic","magic",-1640473232),self__.magic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"explosion","explosion",-1564989537),self__.explosion],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"starting","starting",-1852141466),self__.starting],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288),self__.mesh_to_screenbox_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218),self__.mesh_to_unit_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.engine.new_test_units_Record.prototype.cljs$core$IIterable$ = true;

game.client.engine.new_test_units_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25332){
var self__ = this;
var G__25332__$1 = this;
return (new cljs.core.RecordIter((0),G__25332__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"magic","magic",-1640473232),new cljs.core.Keyword(null,"explosion","explosion",-1564989537),new cljs.core.Keyword(null,"starting","starting",-1852141466),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288),new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.engine.new_test_units_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.engine.new_test_units_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.engine.new_test_units_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

game.client.engine.new_test_units_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.engine.new_test_units_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.engine.new_test_units_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288),null,new cljs.core.Keyword(null,"starting","starting",-1852141466),null,new cljs.core.Keyword(null,"ground","ground",1193572934),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"magic","magic",-1640473232),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218),null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),null,new cljs.core.Keyword(null,"resources","resources",1632806811),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null,new cljs.core.Keyword(null,"explosion","explosion",-1564989537),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.engine.new_test_units_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25332){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25336 = cljs.core.keyword_identical_QMARK_;
var expr__25337 = k__6840__auto__;
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"ground","ground",1193572934),expr__25337))){
return (new game.client.engine.new_test_units_Record(G__25332,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,G__25332,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,G__25332,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,G__25332,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"magic","magic",-1640473232),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,G__25332,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"explosion","explosion",-1564989537),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,G__25332,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"starting","starting",-1852141466),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,G__25332,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,G__25332,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,G__25332,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,G__25332,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,G__25332,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,G__25332,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25336.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25337))){
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,G__25332,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25332),null));
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

game.client.engine.new_test_units_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resources","resources",1632806811),self__.resources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magic","magic",-1640473232),self__.magic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"explosion","explosion",-1564989537),self__.explosion],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"starting","starting",-1852141466),self__.starting],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288),self__.mesh_to_screenbox_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218),self__.mesh_to_unit_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.engine.new_test_units_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25332){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.engine.new_test_units_Record(self__.ground,self__.scene,self__.init_scene,self__.resources,self__.magic,self__.explosion,self__.starting,self__.units,self__.mesh_to_screenbox_map,self__.mesh_to_unit_map,self__.started,self__.start_count,self__.stop_count,G__25332,self__.__extmap,self__.__hash));
});

game.client.engine.new_test_units_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.engine.new_test_units_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.engine.new_test_units_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25331){
var self__ = this;
var G__25331__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25331__$1){
return (function (component){
var starting__$1 = cljs.core.atom.call(null,true);
var units__$1 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var mesh_to_screenbox_map__$1 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var mesh_to_unit_map__$1 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__25339_25358 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"resource-list","resource-list",1498099584).cljs$core$IFn$_invoke$arity$1(self__.resources)));
var chunk__25340_25359 = null;
var count__25341_25360 = (0);
var i__25342_25361 = (0);
while(true){
if((i__25342_25361 < count__25341_25360)){
var vec__25343_25362 = cljs.core._nth.call(null,chunk__25340_25359,i__25342_25361);
var index_25363 = cljs.core.nth.call(null,vec__25343_25362,(0),null);
var model_25364 = cljs.core.nth.call(null,vec__25343_25362,(1),null);
cats.core.bind.call(null,new cljs.core.Keyword(null,"load-promise","load-promise",197028011).cljs$core$IFn$_invoke$arity$1(model_25364),((function (seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25343_25362,index_25363,model_25364,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1){
return (function (geometry){
return cats.core.bind.call(null,new cljs.core.Keyword(null,"texture-load-promise","texture-load-promise",101693884).cljs$core$IFn$_invoke$arity$1(model_25364),((function (seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25343_25362,index_25363,model_25364,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1){
return (function (texture){
return cats.core.bind.call(null,new cljs.core.Keyword(null,"voxels-load-promise","voxels-load-promise",-1283878915).cljs$core$IFn$_invoke$arity$1(model_25364),((function (seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25343_25362,index_25363,model_25364,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1){
return (function (voxel_dict){
if(cljs.core.truth_(cljs.core.deref.call(null,starting__$1))){
var seq__25344 = cljs.core.seq.call(null,cljs.core.range.call(null,(2)));
var chunk__25345 = null;
var count__25346 = (0);
var i__25347 = (0);
while(true){
if((i__25347 < count__25346)){
var i = cljs.core._nth.call(null,chunk__25345,i__25347);
var spread_25365 = 150.0;
var xpos_25366 = (((game.client.math.random.call(null) * 2.0) * spread_25365) - spread_25365);
var zpos_25367 = (((game.client.math.random.call(null) * 2.0) * spread_25365) - spread_25365);
var material_25368 = new cljs.core.Keyword(null,"standard-material","standard-material",1297880632).cljs$core$IFn$_invoke$arity$1(self__.magic).clone();
var __25369 = material_25368.uniforms.map.value = texture;
var rep_25370 = (new THREE.Vector4(texture.offset.x,texture.offset.y,texture.repeat.x,texture.repeat.y));
var __25371__$1 = material_25368.uniforms.offsetRepeat.value = rep_25370;
var voxel_geometry_25372 = new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var bounding_box_min_25373 = voxel_geometry_25372.boundingBox.min;
var bounding_box_max_25374 = voxel_geometry_25372.boundingBox.max;
var __25375__$2 = material_25368.uniforms.boundingBoxMin.value = bounding_box_min_25373;
var __25376__$3 = material_25368.uniforms.boundingBoxMax.value = bounding_box_max_25374;
var mesh_25377 = (new THREE.Mesh(geometry,material_25368));
var cloud_material_25378 = new cljs.core.Keyword(null,"magic-material","magic-material",1607410364).cljs$core$IFn$_invoke$arity$1(self__.magic).clone();
var __25379__$4 = cloud_material_25378.uniforms.isCloud.value = 1.0;
var __25380__$5 = cloud_material_25378.uniforms.boundingBoxMin.value = bounding_box_min_25373;
var __25381__$6 = cloud_material_25378.uniforms.boundingBoxMax.value = bounding_box_max_25374;
var cloud_25382 = (new THREE.Mesh(voxel_geometry_25372,cloud_material_25378));
var __25383__$7 = cloud_25382.renderOrder = (1);
var explosion_mesh_25384 = (function (){var voxel_material = new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(self__.explosion).clone();
var ___$8 = voxel_material.uniforms.map.value = texture;
var ___$9 = texture.needsUpdate = true;
var ___$10 = voxel_material.uniforms.groundTexture.value.needsUpdate = true;
var ___$11 = voxel_material.uniforms.time.value = (0);
var ___$12 = voxel_material.uniforms.duration.value = (500.0 + (game.client.math.random.call(null) * 30000.0));
var explosion_mesh = (new THREE.Mesh(voxel_geometry_25372,voxel_material));
return explosion_mesh;
})();
var bbox_25385 = mesh_25377.geometry.boundingBox;
var ypos_25386 = game.client.ground_local.align_to_ground.call(null,self__.ground,bbox_25385,xpos_25366,zpos_25367);
var group_25387 = (new THREE.Object3D());
var unit_25388 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),index_25363,new cljs.core.Keyword(null,"model","model",331153215),model_25364,new cljs.core.Keyword(null,"health","health",-295520649),(game.client.math.random.call(null) * new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(model_25364)),new cljs.core.Keyword(null,"add-time","add-time",1472639668),(game.client.common.game_time.call(null) + (1000.0 * game.client.math.random.call(null))),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"group","group",582596132),group_25387,new cljs.core.Keyword(null,"display-mesh","display-mesh",-1670019984),explosion_mesh_25384,new cljs.core.Keyword(null,"regular-mesh","regular-mesh",-1171024791),mesh_25377,new cljs.core.Keyword(null,"build-mesh","build-mesh",-26004004),mesh_25377,new cljs.core.Keyword(null,"stars-mesh","stars-mesh",1174821711),cloud_25382,new cljs.core.Keyword(null,"explosion-mesh","explosion-mesh",1324058242),explosion_mesh_25384], null)], null);
cljs.core.swap_BANG_.call(null,units__$1,cljs.core.conj,unit_25388);

cljs.core.swap_BANG_.call(null,mesh_to_unit_map__$1,cljs.core.assoc,mesh_25377,unit_25388);

cljs.core.swap_BANG_.call(null,mesh_to_unit_map__$1,cljs.core.assoc,explosion_mesh_25384,unit_25388);

group_25387.add(mesh_25377);

mesh_25377.visible = false;

cloud_25382.visible = false;

group_25387.add(cloud_25382);

group_25387.add(explosion_mesh_25384);

game.client.scene.add.call(null,self__.scene,group_25387);

var G__25348_25389 = group_25387.position;
(G__25348_25389["x"] = xpos_25366);

(G__25348_25389["y"] = ypos_25386);

(G__25348_25389["z"] = zpos_25367);


var G__25390 = seq__25344;
var G__25391 = chunk__25345;
var G__25392 = count__25346;
var G__25393 = (i__25347 + (1));
seq__25344 = G__25390;
chunk__25345 = G__25391;
count__25346 = G__25392;
i__25347 = G__25393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25344);
if(temp__4657__auto__){
var seq__25344__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25344__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__25344__$1);
var G__25394 = cljs.core.chunk_rest.call(null,seq__25344__$1);
var G__25395 = c__7021__auto__;
var G__25396 = cljs.core.count.call(null,c__7021__auto__);
var G__25397 = (0);
seq__25344 = G__25394;
chunk__25345 = G__25395;
count__25346 = G__25396;
i__25347 = G__25397;
continue;
} else {
var i = cljs.core.first.call(null,seq__25344__$1);
var spread_25398 = 150.0;
var xpos_25399 = (((game.client.math.random.call(null) * 2.0) * spread_25398) - spread_25398);
var zpos_25400 = (((game.client.math.random.call(null) * 2.0) * spread_25398) - spread_25398);
var material_25401 = new cljs.core.Keyword(null,"standard-material","standard-material",1297880632).cljs$core$IFn$_invoke$arity$1(self__.magic).clone();
var __25402 = material_25401.uniforms.map.value = texture;
var rep_25403 = (new THREE.Vector4(texture.offset.x,texture.offset.y,texture.repeat.x,texture.repeat.y));
var __25404__$1 = material_25401.uniforms.offsetRepeat.value = rep_25403;
var voxel_geometry_25405 = new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var bounding_box_min_25406 = voxel_geometry_25405.boundingBox.min;
var bounding_box_max_25407 = voxel_geometry_25405.boundingBox.max;
var __25408__$2 = material_25401.uniforms.boundingBoxMin.value = bounding_box_min_25406;
var __25409__$3 = material_25401.uniforms.boundingBoxMax.value = bounding_box_max_25407;
var mesh_25410 = (new THREE.Mesh(geometry,material_25401));
var cloud_material_25411 = new cljs.core.Keyword(null,"magic-material","magic-material",1607410364).cljs$core$IFn$_invoke$arity$1(self__.magic).clone();
var __25412__$4 = cloud_material_25411.uniforms.isCloud.value = 1.0;
var __25413__$5 = cloud_material_25411.uniforms.boundingBoxMin.value = bounding_box_min_25406;
var __25414__$6 = cloud_material_25411.uniforms.boundingBoxMax.value = bounding_box_max_25407;
var cloud_25415 = (new THREE.Mesh(voxel_geometry_25405,cloud_material_25411));
var __25416__$7 = cloud_25415.renderOrder = (1);
var explosion_mesh_25417 = (function (){var voxel_material = new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(self__.explosion).clone();
var ___$8 = voxel_material.uniforms.map.value = texture;
var ___$9 = texture.needsUpdate = true;
var ___$10 = voxel_material.uniforms.groundTexture.value.needsUpdate = true;
var ___$11 = voxel_material.uniforms.time.value = (0);
var ___$12 = voxel_material.uniforms.duration.value = (500.0 + (game.client.math.random.call(null) * 30000.0));
var explosion_mesh = (new THREE.Mesh(voxel_geometry_25405,voxel_material));
return explosion_mesh;
})();
var bbox_25418 = mesh_25410.geometry.boundingBox;
var ypos_25419 = game.client.ground_local.align_to_ground.call(null,self__.ground,bbox_25418,xpos_25399,zpos_25400);
var group_25420 = (new THREE.Object3D());
var unit_25421 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),index_25363,new cljs.core.Keyword(null,"model","model",331153215),model_25364,new cljs.core.Keyword(null,"health","health",-295520649),(game.client.math.random.call(null) * new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(model_25364)),new cljs.core.Keyword(null,"add-time","add-time",1472639668),(game.client.common.game_time.call(null) + (1000.0 * game.client.math.random.call(null))),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"group","group",582596132),group_25420,new cljs.core.Keyword(null,"display-mesh","display-mesh",-1670019984),explosion_mesh_25417,new cljs.core.Keyword(null,"regular-mesh","regular-mesh",-1171024791),mesh_25410,new cljs.core.Keyword(null,"build-mesh","build-mesh",-26004004),mesh_25410,new cljs.core.Keyword(null,"stars-mesh","stars-mesh",1174821711),cloud_25415,new cljs.core.Keyword(null,"explosion-mesh","explosion-mesh",1324058242),explosion_mesh_25417], null)], null);
cljs.core.swap_BANG_.call(null,units__$1,cljs.core.conj,unit_25421);

cljs.core.swap_BANG_.call(null,mesh_to_unit_map__$1,cljs.core.assoc,mesh_25410,unit_25421);

cljs.core.swap_BANG_.call(null,mesh_to_unit_map__$1,cljs.core.assoc,explosion_mesh_25417,unit_25421);

group_25420.add(mesh_25410);

mesh_25410.visible = false;

cloud_25415.visible = false;

group_25420.add(cloud_25415);

group_25420.add(explosion_mesh_25417);

game.client.scene.add.call(null,self__.scene,group_25420);

var G__25349_25422 = group_25420.position;
(G__25349_25422["x"] = xpos_25399);

(G__25349_25422["y"] = ypos_25419);

(G__25349_25422["z"] = zpos_25400);


var G__25423 = cljs.core.next.call(null,seq__25344__$1);
var G__25424 = null;
var G__25425 = (0);
var G__25426 = (0);
seq__25344 = G__25423;
chunk__25345 = G__25424;
count__25346 = G__25425;
i__25347 = G__25426;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25343_25362,index_25363,model_25364,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1))
);
});})(seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25343_25362,index_25363,model_25364,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1))
);
});})(seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25343_25362,index_25363,model_25364,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1))
);

var G__25427 = seq__25339_25358;
var G__25428 = chunk__25340_25359;
var G__25429 = count__25341_25360;
var G__25430 = (i__25342_25361 + (1));
seq__25339_25358 = G__25427;
chunk__25340_25359 = G__25428;
count__25341_25360 = G__25429;
i__25342_25361 = G__25430;
continue;
} else {
var temp__4657__auto___25431 = cljs.core.seq.call(null,seq__25339_25358);
if(temp__4657__auto___25431){
var seq__25339_25432__$1 = temp__4657__auto___25431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25339_25432__$1)){
var c__7021__auto___25433 = cljs.core.chunk_first.call(null,seq__25339_25432__$1);
var G__25434 = cljs.core.chunk_rest.call(null,seq__25339_25432__$1);
var G__25435 = c__7021__auto___25433;
var G__25436 = cljs.core.count.call(null,c__7021__auto___25433);
var G__25437 = (0);
seq__25339_25358 = G__25434;
chunk__25340_25359 = G__25435;
count__25341_25360 = G__25436;
i__25342_25361 = G__25437;
continue;
} else {
var vec__25350_25438 = cljs.core.first.call(null,seq__25339_25432__$1);
var index_25439 = cljs.core.nth.call(null,vec__25350_25438,(0),null);
var model_25440 = cljs.core.nth.call(null,vec__25350_25438,(1),null);
cats.core.bind.call(null,new cljs.core.Keyword(null,"load-promise","load-promise",197028011).cljs$core$IFn$_invoke$arity$1(model_25440),((function (seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25350_25438,index_25439,model_25440,seq__25339_25432__$1,temp__4657__auto___25431,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1){
return (function (geometry){
return cats.core.bind.call(null,new cljs.core.Keyword(null,"texture-load-promise","texture-load-promise",101693884).cljs$core$IFn$_invoke$arity$1(model_25440),((function (seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25350_25438,index_25439,model_25440,seq__25339_25432__$1,temp__4657__auto___25431,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1){
return (function (texture){
return cats.core.bind.call(null,new cljs.core.Keyword(null,"voxels-load-promise","voxels-load-promise",-1283878915).cljs$core$IFn$_invoke$arity$1(model_25440),((function (seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25350_25438,index_25439,model_25440,seq__25339_25432__$1,temp__4657__auto___25431,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1){
return (function (voxel_dict){
if(cljs.core.truth_(cljs.core.deref.call(null,starting__$1))){
var seq__25351 = cljs.core.seq.call(null,cljs.core.range.call(null,(2)));
var chunk__25352 = null;
var count__25353 = (0);
var i__25354 = (0);
while(true){
if((i__25354 < count__25353)){
var i = cljs.core._nth.call(null,chunk__25352,i__25354);
var spread_25441 = 150.0;
var xpos_25442 = (((game.client.math.random.call(null) * 2.0) * spread_25441) - spread_25441);
var zpos_25443 = (((game.client.math.random.call(null) * 2.0) * spread_25441) - spread_25441);
var material_25444 = new cljs.core.Keyword(null,"standard-material","standard-material",1297880632).cljs$core$IFn$_invoke$arity$1(self__.magic).clone();
var __25445 = material_25444.uniforms.map.value = texture;
var rep_25446 = (new THREE.Vector4(texture.offset.x,texture.offset.y,texture.repeat.x,texture.repeat.y));
var __25447__$1 = material_25444.uniforms.offsetRepeat.value = rep_25446;
var voxel_geometry_25448 = new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var bounding_box_min_25449 = voxel_geometry_25448.boundingBox.min;
var bounding_box_max_25450 = voxel_geometry_25448.boundingBox.max;
var __25451__$2 = material_25444.uniforms.boundingBoxMin.value = bounding_box_min_25449;
var __25452__$3 = material_25444.uniforms.boundingBoxMax.value = bounding_box_max_25450;
var mesh_25453 = (new THREE.Mesh(geometry,material_25444));
var cloud_material_25454 = new cljs.core.Keyword(null,"magic-material","magic-material",1607410364).cljs$core$IFn$_invoke$arity$1(self__.magic).clone();
var __25455__$4 = cloud_material_25454.uniforms.isCloud.value = 1.0;
var __25456__$5 = cloud_material_25454.uniforms.boundingBoxMin.value = bounding_box_min_25449;
var __25457__$6 = cloud_material_25454.uniforms.boundingBoxMax.value = bounding_box_max_25450;
var cloud_25458 = (new THREE.Mesh(voxel_geometry_25448,cloud_material_25454));
var __25459__$7 = cloud_25458.renderOrder = (1);
var explosion_mesh_25460 = (function (){var voxel_material = new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(self__.explosion).clone();
var ___$8 = voxel_material.uniforms.map.value = texture;
var ___$9 = texture.needsUpdate = true;
var ___$10 = voxel_material.uniforms.groundTexture.value.needsUpdate = true;
var ___$11 = voxel_material.uniforms.time.value = (0);
var ___$12 = voxel_material.uniforms.duration.value = (500.0 + (game.client.math.random.call(null) * 30000.0));
var explosion_mesh = (new THREE.Mesh(voxel_geometry_25448,voxel_material));
return explosion_mesh;
})();
var bbox_25461 = mesh_25453.geometry.boundingBox;
var ypos_25462 = game.client.ground_local.align_to_ground.call(null,self__.ground,bbox_25461,xpos_25442,zpos_25443);
var group_25463 = (new THREE.Object3D());
var unit_25464 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),index_25439,new cljs.core.Keyword(null,"model","model",331153215),model_25440,new cljs.core.Keyword(null,"health","health",-295520649),(game.client.math.random.call(null) * new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(model_25440)),new cljs.core.Keyword(null,"add-time","add-time",1472639668),(game.client.common.game_time.call(null) + (1000.0 * game.client.math.random.call(null))),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"group","group",582596132),group_25463,new cljs.core.Keyword(null,"display-mesh","display-mesh",-1670019984),explosion_mesh_25460,new cljs.core.Keyword(null,"regular-mesh","regular-mesh",-1171024791),mesh_25453,new cljs.core.Keyword(null,"build-mesh","build-mesh",-26004004),mesh_25453,new cljs.core.Keyword(null,"stars-mesh","stars-mesh",1174821711),cloud_25458,new cljs.core.Keyword(null,"explosion-mesh","explosion-mesh",1324058242),explosion_mesh_25460], null)], null);
cljs.core.swap_BANG_.call(null,units__$1,cljs.core.conj,unit_25464);

cljs.core.swap_BANG_.call(null,mesh_to_unit_map__$1,cljs.core.assoc,mesh_25453,unit_25464);

cljs.core.swap_BANG_.call(null,mesh_to_unit_map__$1,cljs.core.assoc,explosion_mesh_25460,unit_25464);

group_25463.add(mesh_25453);

mesh_25453.visible = false;

cloud_25458.visible = false;

group_25463.add(cloud_25458);

group_25463.add(explosion_mesh_25460);

game.client.scene.add.call(null,self__.scene,group_25463);

var G__25355_25465 = group_25463.position;
(G__25355_25465["x"] = xpos_25442);

(G__25355_25465["y"] = ypos_25462);

(G__25355_25465["z"] = zpos_25443);


var G__25466 = seq__25351;
var G__25467 = chunk__25352;
var G__25468 = count__25353;
var G__25469 = (i__25354 + (1));
seq__25351 = G__25466;
chunk__25352 = G__25467;
count__25353 = G__25468;
i__25354 = G__25469;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__25351);
if(temp__4657__auto____$1){
var seq__25351__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25351__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__25351__$1);
var G__25470 = cljs.core.chunk_rest.call(null,seq__25351__$1);
var G__25471 = c__7021__auto__;
var G__25472 = cljs.core.count.call(null,c__7021__auto__);
var G__25473 = (0);
seq__25351 = G__25470;
chunk__25352 = G__25471;
count__25353 = G__25472;
i__25354 = G__25473;
continue;
} else {
var i = cljs.core.first.call(null,seq__25351__$1);
var spread_25474 = 150.0;
var xpos_25475 = (((game.client.math.random.call(null) * 2.0) * spread_25474) - spread_25474);
var zpos_25476 = (((game.client.math.random.call(null) * 2.0) * spread_25474) - spread_25474);
var material_25477 = new cljs.core.Keyword(null,"standard-material","standard-material",1297880632).cljs$core$IFn$_invoke$arity$1(self__.magic).clone();
var __25478 = material_25477.uniforms.map.value = texture;
var rep_25479 = (new THREE.Vector4(texture.offset.x,texture.offset.y,texture.repeat.x,texture.repeat.y));
var __25480__$1 = material_25477.uniforms.offsetRepeat.value = rep_25479;
var voxel_geometry_25481 = new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var bounding_box_min_25482 = voxel_geometry_25481.boundingBox.min;
var bounding_box_max_25483 = voxel_geometry_25481.boundingBox.max;
var __25484__$2 = material_25477.uniforms.boundingBoxMin.value = bounding_box_min_25482;
var __25485__$3 = material_25477.uniforms.boundingBoxMax.value = bounding_box_max_25483;
var mesh_25486 = (new THREE.Mesh(geometry,material_25477));
var cloud_material_25487 = new cljs.core.Keyword(null,"magic-material","magic-material",1607410364).cljs$core$IFn$_invoke$arity$1(self__.magic).clone();
var __25488__$4 = cloud_material_25487.uniforms.isCloud.value = 1.0;
var __25489__$5 = cloud_material_25487.uniforms.boundingBoxMin.value = bounding_box_min_25482;
var __25490__$6 = cloud_material_25487.uniforms.boundingBoxMax.value = bounding_box_max_25483;
var cloud_25491 = (new THREE.Mesh(voxel_geometry_25481,cloud_material_25487));
var __25492__$7 = cloud_25491.renderOrder = (1);
var explosion_mesh_25493 = (function (){var voxel_material = new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(self__.explosion).clone();
var ___$8 = voxel_material.uniforms.map.value = texture;
var ___$9 = texture.needsUpdate = true;
var ___$10 = voxel_material.uniforms.groundTexture.value.needsUpdate = true;
var ___$11 = voxel_material.uniforms.time.value = (0);
var ___$12 = voxel_material.uniforms.duration.value = (500.0 + (game.client.math.random.call(null) * 30000.0));
var explosion_mesh = (new THREE.Mesh(voxel_geometry_25481,voxel_material));
return explosion_mesh;
})();
var bbox_25494 = mesh_25486.geometry.boundingBox;
var ypos_25495 = game.client.ground_local.align_to_ground.call(null,self__.ground,bbox_25494,xpos_25475,zpos_25476);
var group_25496 = (new THREE.Object3D());
var unit_25497 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),index_25439,new cljs.core.Keyword(null,"model","model",331153215),model_25440,new cljs.core.Keyword(null,"health","health",-295520649),(game.client.math.random.call(null) * new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(model_25440)),new cljs.core.Keyword(null,"add-time","add-time",1472639668),(game.client.common.game_time.call(null) + (1000.0 * game.client.math.random.call(null))),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"group","group",582596132),group_25496,new cljs.core.Keyword(null,"display-mesh","display-mesh",-1670019984),explosion_mesh_25493,new cljs.core.Keyword(null,"regular-mesh","regular-mesh",-1171024791),mesh_25486,new cljs.core.Keyword(null,"build-mesh","build-mesh",-26004004),mesh_25486,new cljs.core.Keyword(null,"stars-mesh","stars-mesh",1174821711),cloud_25491,new cljs.core.Keyword(null,"explosion-mesh","explosion-mesh",1324058242),explosion_mesh_25493], null)], null);
cljs.core.swap_BANG_.call(null,units__$1,cljs.core.conj,unit_25497);

cljs.core.swap_BANG_.call(null,mesh_to_unit_map__$1,cljs.core.assoc,mesh_25486,unit_25497);

cljs.core.swap_BANG_.call(null,mesh_to_unit_map__$1,cljs.core.assoc,explosion_mesh_25493,unit_25497);

group_25496.add(mesh_25486);

mesh_25486.visible = false;

cloud_25491.visible = false;

group_25496.add(cloud_25491);

group_25496.add(explosion_mesh_25493);

game.client.scene.add.call(null,self__.scene,group_25496);

var G__25356_25498 = group_25496.position;
(G__25356_25498["x"] = xpos_25475);

(G__25356_25498["y"] = ypos_25495);

(G__25356_25498["z"] = zpos_25476);


var G__25499 = cljs.core.next.call(null,seq__25351__$1);
var G__25500 = null;
var G__25501 = (0);
var G__25502 = (0);
seq__25351 = G__25499;
chunk__25352 = G__25500;
count__25353 = G__25501;
i__25354 = G__25502;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25350_25438,index_25439,model_25440,seq__25339_25432__$1,temp__4657__auto___25431,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1))
);
});})(seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25350_25438,index_25439,model_25440,seq__25339_25432__$1,temp__4657__auto___25431,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1))
);
});})(seq__25339_25358,chunk__25340_25359,count__25341_25360,i__25342_25361,vec__25350_25438,index_25439,model_25440,seq__25339_25432__$1,temp__4657__auto___25431,starting__$1,units__$1,mesh_to_screenbox_map__$1,mesh_to_unit_map__$1,G__25331__$1))
);

var G__25503 = cljs.core.next.call(null,seq__25339_25432__$1);
var G__25504 = null;
var G__25505 = (0);
var G__25506 = (0);
seq__25339_25358 = G__25503;
chunk__25340_25359 = G__25504;
count__25341_25360 = G__25505;
i__25342_25361 = G__25506;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218),mesh_to_unit_map__$1),new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288),mesh_to_screenbox_map__$1),new cljs.core.Keyword(null,"units","units",-533089095),units__$1),new cljs.core.Keyword(null,"starting","starting",-1852141466),starting__$1);
});})(G__25331__$1))
.call(null,G__25331__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.engine.new_test_units_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25331){
var self__ = this;
var G__25331__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25331__$1){
return (function (component){
cljs.core.println.call(null,"stopping units");

if(cljs.core.truth_(self__.starting)){
cljs.core.reset_BANG_.call(null,self__.starting,false);
} else {
}

if(cljs.core.truth_(self__.units)){
game.client.engine.for_each_unit.call(null,component,((function (G__25331__$1){
return (function (_,unit){
return game.client.scene.remove.call(null,self__.scene,game.client.engine.get_unit_group.call(null,unit));
});})(G__25331__$1))
);
} else {
}

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"starting","starting",-1852141466),null),new cljs.core.Keyword(null,"units","units",-533089095),null);
});})(G__25331__$1))
.call(null,G__25331__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.engine.new_test_units_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"init-scene","init-scene",624606753,null),new cljs.core.Symbol(null,"resources","resources",-1021628958,null),new cljs.core.Symbol(null,"magic","magic",58295,null),new cljs.core.Symbol(null,"explosion","explosion",75541990,null),new cljs.core.Symbol(null,"starting","starting",-211609939,null),new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",654207239,null),new cljs.core.Symbol(null,"mesh-to-unit-map","mesh-to-unit-map",-942251551,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.engine.new_test_units_Record.cljs$lang$type = true;

game.client.engine.new_test_units_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.engine/new-test-units-Record");
});

game.client.engine.new_test_units_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.engine/new-test-units-Record");
});

game.client.engine.__GT_new_test_units_Record = (function game$client$engine$__GT_new_test_units_Record(ground,scene,init_scene,resources,magic,explosion,starting,units,mesh_to_screenbox_map,mesh_to_unit_map,started,start_count,stop_count){
return (new game.client.engine.new_test_units_Record(ground,scene,init_scene,resources,magic,explosion,starting,units,mesh_to_screenbox_map,mesh_to_unit_map,started,start_count,stop_count,null,null,null));
});

game.client.engine.map__GT_new_test_units_Record = (function game$client$engine$map__GT_new_test_units_Record(G__25334){
return (new game.client.engine.new_test_units_Record(new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"magic","magic",-1640473232).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"explosion","explosion",-1564989537).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"starting","starting",-1852141466).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25334),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25334),null,cljs.core.dissoc.call(null,G__25334,new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"magic","magic",-1640473232),new cljs.core.Keyword(null,"explosion","explosion",-1564989537),new cljs.core.Keyword(null,"starting","starting",-1852141466),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288),new cljs.core.Keyword(null,"mesh-to-unit-map","mesh-to-unit-map",1712184218),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.engine.new_test_units = (function game$client$engine$new_test_units(){
return com.stuartsierra.component.using.call(null,game.client.engine.map__GT_new_test_units_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"magic","magic",-1640473232),new cljs.core.Keyword(null,"explosion","explosion",-1564989537)], null));
});

//# sourceMappingURL=engine.js.map