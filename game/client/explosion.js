// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.explosion');
goog.require('cljs.core');
goog.require('game.client.engine');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
game.client.explosion.on_render = (function game$client$explosion$on_render(init_renderer,component){
var divisor = 1000.0;
var current_time = game.client.common.game_time.call(null);
return game.client.engine.for_each_unit.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),((function (divisor,current_time){
return (function (_,unit){
var mesh = game.client.engine.get_unit_mesh.call(null,unit);
var voxels = game.client.engine.get_unit_explosion.call(null,unit);
var material = voxels.material;
var uniforms = material.uniforms;
var old_time = new cljs.core.Keyword(null,"add-time","add-time",1472639668).cljs$core$IFn$_invoke$arity$1(unit);
var new_time = (current_time - old_time);
var duration = uniforms.duration.value;
var alive_duration = (1.0 * divisor);
var total_duration = (duration + alive_duration);
var mod_new_time = cljs.core.mod.call(null,new_time,total_duration);
var sub_new_time = (mod_new_time - alive_duration);
var mesh_visible = (sub_new_time < (0));
if(!(mesh_visible)){
return uniforms.time.value = sub_new_time;
} else {
return uniforms.time.value = (0);
}
});})(divisor,current_time))
);
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
game.client.explosion.new_update_explosion_Record = (function (units,explosion,started,start_count,stop_count,__meta,__extmap,__hash){
this.units = units;
this.explosion = explosion;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.explosion.new_update_explosion_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25792,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25794 = (((k25792 instanceof cljs.core.Keyword))?k25792.fqn:null);
switch (G__25794) {
case "units":
return self__.units;

break;
case "explosion":
return self__.explosion;

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
return cljs.core.get.call(null,self__.__extmap,k25792,else__6835__auto__);

}
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.explosion.new-update-explosion-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"explosion","explosion",-1564989537),self__.explosion],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IIterable$ = true;

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25791){
var self__ = this;
var G__25791__$1 = this;
return (new cljs.core.RecordIter((0),G__25791__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"explosion","explosion",-1564989537),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.explosion.new_update_explosion_Record(self__.units,self__.explosion,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"explosion","explosion",-1564989537),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.explosion.new_update_explosion_Record(self__.units,self__.explosion,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25791){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25795 = cljs.core.keyword_identical_QMARK_;
var expr__25796 = k__6840__auto__;
if(cljs.core.truth_(pred__25795.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__25796))){
return (new game.client.explosion.new_update_explosion_Record(G__25791,self__.explosion,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25795.call(null,new cljs.core.Keyword(null,"explosion","explosion",-1564989537),expr__25796))){
return (new game.client.explosion.new_update_explosion_Record(self__.units,G__25791,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25795.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25796))){
return (new game.client.explosion.new_update_explosion_Record(self__.units,self__.explosion,G__25791,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25795.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25796))){
return (new game.client.explosion.new_update_explosion_Record(self__.units,self__.explosion,self__.started,G__25791,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25795.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25796))){
return (new game.client.explosion.new_update_explosion_Record(self__.units,self__.explosion,self__.started,self__.start_count,G__25791,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.explosion.new_update_explosion_Record(self__.units,self__.explosion,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25791),null));
}
}
}
}
}
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"explosion","explosion",-1564989537),self__.explosion],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25791){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.explosion.new_update_explosion_Record(self__.units,self__.explosion,self__.started,self__.start_count,self__.stop_count,G__25791,self__.__extmap,self__.__hash));
});

game.client.explosion.new_update_explosion_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.explosion.new_update_explosion_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.explosion.new_update_explosion_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25790){
var self__ = this;
var G__25790__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25790__$1){
return (function (component){
return component;
});})(G__25790__$1))
.call(null,G__25790__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.explosion.new_update_explosion_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25790){
var self__ = this;
var G__25790__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25790__$1){
return (function (component){
return component;
});})(G__25790__$1))
.call(null,G__25790__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.explosion.new_update_explosion_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"explosion","explosion",75541990,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.explosion.new_update_explosion_Record.cljs$lang$type = true;

game.client.explosion.new_update_explosion_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.explosion/new-update-explosion-Record");
});

game.client.explosion.new_update_explosion_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.explosion/new-update-explosion-Record");
});

game.client.explosion.__GT_new_update_explosion_Record = (function game$client$explosion$__GT_new_update_explosion_Record(units,explosion,started,start_count,stop_count){
return (new game.client.explosion.new_update_explosion_Record(units,explosion,started,start_count,stop_count,null,null,null));
});

game.client.explosion.map__GT_new_update_explosion_Record = (function game$client$explosion$map__GT_new_update_explosion_Record(G__25793){
return (new game.client.explosion.new_update_explosion_Record(new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__25793),new cljs.core.Keyword(null,"explosion","explosion",-1564989537).cljs$core$IFn$_invoke$arity$1(G__25793),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25793),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25793),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25793),null,cljs.core.dissoc.call(null,G__25793,new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"explosion","explosion",-1564989537),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.explosion.new_update_explosion = (function game$client$explosion$new_update_explosion(){
return com.stuartsierra.component.using.call(null,game.client.explosion.map__GT_new_update_explosion_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"explosion","explosion",-1564989537)], null));
});
game.client.explosion.vertex_shader = "\n#define PI 3.141592653589793238462643383\n#define saturate(a) clamp(a, 0.0, 1.0)\n\nuniform float time;\nuniform float duration;\nuniform vec3 lightDirection;\nuniform sampler2D groundTexture;\nuniform float terrainWidth;\nuniform float terrainHeight;\nuniform float floatTextureDivisor;\n\nattribute float boxIndex;\nattribute vec3 boxTranslation;\n\nvarying vec3 vLightFront;\nvarying float vBoxIndex;\nvarying vec2 vUV;\nvarying float vTimePart;\n\n// http://www.neilmendoza.com/glsl-rotation-about-an-arbitrary-axis/\nmat4 rotationMatrix(vec3 axis, float angle)\n{\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n\n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\n// Simple random function\nfloat random(float co)\n{\n\t\treturn fract(sin(co*12.989) * 43758.545);\n}\n\nfloat getGroundHeight(vec2 xy) {\n  const float boxHeight = 2.0;\n  xy.x = (xy.x + terrainWidth / 2.0) / terrainWidth;\n  xy.y = (xy.y + terrainHeight / 2.0) / terrainHeight;\n  float groundLevel = texture2D(groundTexture, xy.xy).r * floatTextureDivisor + boxHeight;\n  return groundLevel;\n}\n\nvoid doLighting(vec3 geometryNormal) {\n  const vec3 directLightColor = vec3(1.0);\n  float dotNL = dot(geometryNormal, normalize(lightDirection));\n  vec3 directLightColor_diffuse = PI * directLightColor;\n  vLightFront = saturate(dotNL) * directLightColor_diffuse;\n}\n\nvoid main() {\n  vBoxIndex = boxIndex;\n  vUV = uv;\n\n  if (time == 0.0) {\n    doLighting(normalize(normal));\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    return;\n  }\n\n\tvec3 normalizedBoxTranslation = normalize(boxTranslation);\n  vec3 offset = (boxTranslation - position);\n  float interval = duration; // * (random(boxIndex) + 0.001);\n  float factor = 4.0; // give time to finish falling\n  float timePart = factor * mod(time, interval) / interval;\n  vTimePart = timePart / factor;\n\t//float rnd = random(boxTranslation.x + boxTranslation.y + boxTranslation.z) - 0.5;\n\tfloat rnd = random(boxIndex) - 0.5;\n\n\t// https://en.wikipedia.org/wiki/Equations_of_motion\n\tfloat v0abs = 30.0 * (1.0 + rnd);\n  vec3 v0base = normalizedBoxTranslation;\n  //v0base.y = 0.0;\n  //v0base = normalize(v0base);\n\tvec3 v0 = v0base * v0abs + vec3(0.0, 20.0, 0.0);\n\tvec3 a = vec3(0.0, -100.0, 0.0);\n\tvec3 r = boxTranslation + v0 * timePart + a * timePart * timePart / 2.0;\n\n  vec4 worldPosition = modelMatrix * vec4(vec3(0.0), 1.0);\n  worldPosition /= worldPosition.w;\n  float groundLevel = -worldPosition.y; //getGroundHeight(worldPosition.xz + r.xz) - worldPosition.y;\n\n  float Xa = a.y / 2.0;\n  float Xb = v0.y;\n  float Xc = boxTranslation.y - groundLevel;\n  // Quadratic equation\n  float impactTime1 = (-Xb - sqrt(abs(Xb*Xb - 4.0*Xa*Xc))) / (2.0 * Xa);\n  float impactTime2 = (-Xb + sqrt(abs(Xb*Xb - 4.0*Xa*Xc))) / (2.0 * Xa);\n  float impactTime = max(impactTime1, impactTime2);\n  float afterImpact = max(0.0, timePart - impactTime);\n  timePart = min(timePart, impactTime);\n\n  vec3 rImpact = boxTranslation + v0 * timePart + a * timePart * timePart / 2.0;\n  r.x = sign(r.x) * min(abs(r.x), abs(rImpact.x));\n  r.z = sign(r.z) * min(abs(r.z), abs(rImpact.z));\n  groundLevel = getGroundHeight(worldPosition.xz + r.xz) - worldPosition.y;\n  r.y = max(r.y, groundLevel);\n\n\tmat4 mat = rotationMatrix(normalizedBoxTranslation, -timePart * 4.0 * PI * rnd);\n\tvec4 rotatedOffset = mat * vec4(offset, 1.0);\n\trotatedOffset /= rotatedOffset.w;\n\n  vec4 transformedNormal = vec4(normal, 1.0);\n\ttransformedNormal = mat * transformedNormal;\n\ttransformedNormal /= transformedNormal.w;\n\tvec3 geometryNormal = normalize(transformedNormal.xyz);\n  doLighting(geometryNormal);\n\n  float maxValueOfAfterImpact = factor - impactTime;\n  vec3 newPosition = r + rotatedOffset.xyz * (1.0 - afterImpact / maxValueOfAfterImpact);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n}\n";
game.client.explosion.fragment_shader = "\n#define RECIPROCAL_PI 0.31830988618\n\nuniform sampler2D map;\n\n// Simple random function\nfloat random(float co)\n{\n\t\treturn fract(sin(co*12.989) * 43758.545);\n}\n\nvarying vec3 vLightFront;\nvarying float vBoxIndex;\nvarying vec2 vUV;\nvarying float vTimePart;\n\nvoid main() {\n  float rnd = random(vBoxIndex);\n  //vec4 diffuseColor = vec4(vUV, 0.0, 1.0);\n  vec4 diffuseColor1 = texture2D(map, vUV);\n  vec4 diffuseColor2 = vec4(rnd, 0.0, 0.0, 1.0);\n  vec4 diffuseColor = mix(diffuseColor1, diffuseColor2, vTimePart);\n  vec3 directDiffuse = vLightFront * RECIPROCAL_PI * diffuseColor.rgb;\n  vec3 emissive = diffuseColor.rgb / 3.0;\n  vec3 outgoingLight = directDiffuse + emissive;\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n}\n";

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
game.client.explosion.new_explosion_Record = (function (light1,ground,start_time,material,started,start_count,stop_count,__meta,__extmap,__hash){
this.light1 = light1;
this.ground = ground;
this.start_time = start_time;
this.material = material;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.explosion.new_explosion_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25801,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25803 = (((k25801 instanceof cljs.core.Keyword))?k25801.fqn:null);
switch (G__25803) {
case "light1":
return self__.light1;

break;
case "ground":
return self__.ground;

break;
case "start-time":
return self__.start_time;

break;
case "material":
return self__.material;

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
return cljs.core.get.call(null,self__.__extmap,k25801,else__6835__auto__);

}
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.explosion.new-explosion-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light1","light1",906046172),self__.light1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-time","start-time",814801386),self__.start_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"material","material",460118677),self__.material],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$IIterable$ = true;

game.client.explosion.new_explosion_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25800){
var self__ = this;
var G__25800__$1 = this;
return (new cljs.core.RecordIter((0),G__25800__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,self__.start_time,self__.material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.explosion.new_explosion_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.explosion.new_explosion_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"ground","ground",1193572934),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"start-time","start-time",814801386),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"material","material",460118677),null,new cljs.core.Keyword(null,"light1","light1",906046172),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,self__.start_time,self__.material,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25800){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25804 = cljs.core.keyword_identical_QMARK_;
var expr__25805 = k__6840__auto__;
if(cljs.core.truth_(pred__25804.call(null,new cljs.core.Keyword(null,"light1","light1",906046172),expr__25805))){
return (new game.client.explosion.new_explosion_Record(G__25800,self__.ground,self__.start_time,self__.material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25804.call(null,new cljs.core.Keyword(null,"ground","ground",1193572934),expr__25805))){
return (new game.client.explosion.new_explosion_Record(self__.light1,G__25800,self__.start_time,self__.material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25804.call(null,new cljs.core.Keyword(null,"start-time","start-time",814801386),expr__25805))){
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,G__25800,self__.material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25804.call(null,new cljs.core.Keyword(null,"material","material",460118677),expr__25805))){
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,self__.start_time,G__25800,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25804.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25805))){
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,self__.start_time,self__.material,G__25800,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25804.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25805))){
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,self__.start_time,self__.material,self__.started,G__25800,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25804.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25805))){
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,self__.start_time,self__.material,self__.started,self__.start_count,G__25800,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,self__.start_time,self__.material,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25800),null));
}
}
}
}
}
}
}
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light1","light1",906046172),self__.light1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ground","ground",1193572934),self__.ground],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-time","start-time",814801386),self__.start_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"material","material",460118677),self__.material],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25800){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.explosion.new_explosion_Record(self__.light1,self__.ground,self__.start_time,self__.material,self__.started,self__.start_count,self__.stop_count,G__25800,self__.__extmap,self__.__hash));
});

game.client.explosion.new_explosion_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.explosion.new_explosion_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.explosion.new_explosion_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25799){
var self__ = this;
var G__25799__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25799__$1){
return (function (component){
var light1__$1 = game.client.common.data.call(null,new cljs.core.Keyword(null,"light1","light1",906046172).cljs$core$IFn$_invoke$arity$1(component));
var light_direction = light1__$1.position.clone();
var _ = light_direction.sub(light1__$1.target.position);
var ground_texture = new cljs.core.Keyword(null,"data-texture","data-texture",1787820271).cljs$core$IFn$_invoke$arity$1(self__.ground);
var uniforms = {"map": {"value": null}, "time": {"value": 0.0}, "duration": {"value": 2000.0}, "lightDirection": {"value": light_direction}, "groundTexture": {"value": ground_texture, "needsUpdate": true}, "terrainWidth": {"value": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.ground)}, "terrainHeight": {"value": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.ground)}, "floatTextureDivisor": {"value": new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730).cljs$core$IFn$_invoke$arity$1(self__.ground)}};
var material__$1 = (new THREE.ShaderMaterial({"uniforms": uniforms, "vertexShader": game.client.explosion.vertex_shader, "fragmentShader": game.client.explosion.fragment_shader}));
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"material","material",460118677),material__$1),new cljs.core.Keyword(null,"start-time","start-time",814801386),game.client.common.game_time.call(null));
return component__$1;
});})(G__25799__$1))
.call(null,G__25799__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.explosion.new_explosion_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25799){
var self__ = this;
var G__25799__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25799__$1){
return (function (component){
return component;
});})(G__25799__$1))
.call(null,G__25799__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.explosion.new_explosion_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"light1","light1",-1748389597,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),new cljs.core.Symbol(null,"material","material",2100650204,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.explosion.new_explosion_Record.cljs$lang$type = true;

game.client.explosion.new_explosion_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.explosion/new-explosion-Record");
});

game.client.explosion.new_explosion_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.explosion/new-explosion-Record");
});

game.client.explosion.__GT_new_explosion_Record = (function game$client$explosion$__GT_new_explosion_Record(light1,ground,start_time,material,started,start_count,stop_count){
return (new game.client.explosion.new_explosion_Record(light1,ground,start_time,material,started,start_count,stop_count,null,null,null));
});

game.client.explosion.map__GT_new_explosion_Record = (function game$client$explosion$map__GT_new_explosion_Record(G__25802){
return (new game.client.explosion.new_explosion_Record(new cljs.core.Keyword(null,"light1","light1",906046172).cljs$core$IFn$_invoke$arity$1(G__25802),new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(G__25802),new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(G__25802),new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(G__25802),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25802),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25802),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25802),null,cljs.core.dissoc.call(null,G__25802,new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.explosion.new_explosion = (function game$client$explosion$new_explosion(){
return com.stuartsierra.component.using.call(null,game.client.explosion.map__GT_new_explosion_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"ground","ground",1193572934)], null));
});

//# sourceMappingURL=explosion.js.map