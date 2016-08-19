// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.magic');
goog.require('cljs.core');
goog.require('game.client.engine');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('game.client.scene');
goog.require('game.client.ground_local');
goog.require('rum.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
goog.require('game.worker.state');
game.client.magic.simple_vertex_shader = "\nvarying vec2 vUV;\nvarying vec3 vPosition;\nvarying vec3 vLightFront;\n\nvoid main() {\n  vUV = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  if (gl_Position.x > 100.0) {\n    gl_PointSize = 1.0;\n  }\n}\n";
game.client.magic.simple_fragment_shader = "\nvarying vec2 vUV;\nuniform sampler2D map;\n\nvoid main() {\n  gl_FragColor = texture2D(map, vUV);\n}\n";
game.client.magic.shared_vertex_shader = "\n#define PI 3.141592653589793238462643383\n#define saturate(a) clamp(a, 0.0, 1.0)\n\nvarying vec2 vUV;\nvarying vec3 vLightFront;\nvarying vec3 vPosition;\nvarying float vParticleLifeTime;\nvarying float vBoxIndex;\nvarying float vIsJustBox;\n\nuniform float time;\nuniform float buildTime;\nuniform float isCloud;\nuniform vec4 offsetRepeat;\nuniform vec3 lightDirection;\nuniform vec3 boundingBoxMin;\nuniform vec3 boundingBoxMax;\n\n// Simple random function\nfloat random(float co)\n{\n\t\treturn fract(sin(co*12.989) * 43758.545);\n}\n\nfloat getMaxY() {\n  float interval = buildTime;\n  float timePart = mod(time, interval) / interval;\n  float maxY = timePart * (boundingBoxMax.y - boundingBoxMin.y) + boundingBoxMin.y;\n  return maxY;\n}\n";
game.client.magic.magic_vertex_shader = [cljs.core.str(game.client.magic.shared_vertex_shader),cljs.core.str("\n\nattribute float boxIndex;\nattribute vec3 boxTranslation;\nattribute vec3 billboardCoord;\n\nvoid main() {\n  const float boxCount = 20.0 * 20.0 * 20.0;\n  const float eliminate = boxCount / 300.0;\n  float randomIndex = floor(boxIndex * random(boxIndex));\n  if (mod(randomIndex, eliminate) < (eliminate - 1.0)) {\n    /*\n    float duration = buildTime;\n    float buildTimePart = mod(time, duration) / duration;\n    if (boxIndex < boxCount * buildTimePart) {\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n      const vec3 directLightColor = vec3(1.0);\n      vec4 transformedNormal = vec4(normal, 1.0);\n      vec3 geometryNormal = normalize(transformedNormal.xyz);\n      float dotNL = dot(geometryNormal, normalize(lightDirection));\n      vec3 directLightColor_diffuse = PI * directLightColor;\n      vLightFront = saturate(dotNL) * directLightColor_diffuse;\n    \n      vIsJustBox = 1.0;\n    }\n    */\n    return;\n  }\n\n  vUV = billboardCoord.xy + 0.5;\n  vBoxIndex = boxIndex;\n  vPosition = position;\n\n  vec3 offset = billboardCoord;\n\n  const float interval = PARTICLE_LIFE_TIME;\n  float rnd = random(boxTranslation.x + boxTranslation.y + boxTranslation.z);\n  float timePart = mod(time + interval * rnd, interval) / interval;\n  vParticleLifeTime = timePart;\n  const float factor = 1.0;\n  vec4 startPos = vec4(vec3(0.0, factor * (boundingBoxMax.y - boundingBoxMin.y), 0.0), 1.0);\n  vec4 endPos = vec4(boxTranslation, 1.0);\n\n  vec4 mvPosition = mix(startPos, endPos, timePart);\n  mvPosition.xyz += 10.0 * offset;\n  mat4 noRotationMatrix = modelViewMatrix;\n\n  // Column 0:\n  noRotationMatrix[0][0] = 1.0;\n  noRotationMatrix[0][1] = 0.0;\n  noRotationMatrix[0][2] = 0.0;\n\n  // Column 1:\n  noRotationMatrix[1][0] = 0.0;\n  noRotationMatrix[1][1] = 1.0;\n  noRotationMatrix[1][2] = 0.0;\n\n  // Column 2:\n  noRotationMatrix[2][0] = 0.0;\n  noRotationMatrix[2][1] = 0.0;\n  noRotationMatrix[2][2] = 1.0;\n\n  mvPosition = projectionMatrix * noRotationMatrix * mvPosition;\n  mvPosition /= mvPosition.w;\n  mvPosition.z = (mvPosition.z / 10.0) - 0.9;\n  gl_Position = mvPosition;\n}\n")].join('');
game.client.magic.standard_vertex_shader = [cljs.core.str(game.client.magic.shared_vertex_shader),cljs.core.str("\nvoid main() {\n\n  vUV = uv * offsetRepeat.zw + offsetRepeat.xy;\n\tvPosition = position;\n\n  const vec3 directLightColor = vec3(1.0);\n\n  vec3 geometryNormal = normalize(normal);\n  float dotNL = dot(geometryNormal, normalize(lightDirection));\n  vec3 directLightColor_diffuse = PI * directLightColor;\n  vLightFront = saturate(dotNL) * directLightColor_diffuse;\n\n  float newY = position.y;\n  vec3 newPosition = vec3(position.x, newY, position.z);\n  vec4 mvPosition = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n  mvPosition /= mvPosition.w;\n  gl_Position = mvPosition;\n}\n")].join('');
game.client.magic.standard_fragment_shader = "\n#define RECIPROCAL_PI 0.31830988618\n#define TWOPI 6.28319\n\nvarying vec2 vUV;\nvarying vec3 vLightFront;\nvarying vec3 vPosition;\nvarying float vParticleLifeTime;\nvarying float vBoxIndex;\nvarying float vIsJustBox;\n\nuniform sampler2D map;\nuniform float time;\nuniform float isCloud;\nuniform float buildTime;\n\nconst float hue_time_factor = 0.035;                          // Time-based hue shift\nconst float mp_hue = 0.5;                                     // Hue (shift) of the main particle\nconst float mp_saturation = 0.18;                             // Saturation (delta) of the main particle\n\n// Particle time constants\nconst float time_factor = 1.0;                                // Time in s factor, <1. for slow motion, >1. for faster movement\nconst float start_time = 2.5;                                  // Time in s needed until all the nb_particles are launched\nconst float grow_time_factor = 0.15;                          // Time in s particles need to reach their max intensity after they are launched\n\n// Particle intensity constants\nconst float part_int_div = 40000.;                            // Divisor of the particle intensity. Tweak this value to make the particles more or less bright\nconst float part_int_factor_min = 0.1;                        // Minimum initial intensity of a particle\nconst float part_int_factor_max = 3.2;                        // Maximum initial intensity of a particle\nconst float part_spark_min_int = 0.25;                        // Minimum sparkling intensity (factor of initial intensity) of a particle\nconst float part_spark_max_int = 0.88;                        // Minimum sparkling intensity (factor of initial intensity) of a particle\nconst float part_spark_min_freq = 2.5;                        // Minimum sparkling frequence in Hz of a particle\nconst float part_spark_max_freq = 6.0;                        // Maximum sparkling frequence in Hz of a particle\nconst float part_spark_time_freq_fact = 0.35;                 // Sparkling frequency factor at the end of the life of the particle\nconst float mp_int = 12.;                                     // Initial intensity of the main particle\nconst float dist_factor = 3.;                                 // Distance factor applied before calculating the intensity\nconst float ppow = 2.3;                                      // Exponent of the intensity in function of the distance\n\n// Particle star constants\nconst vec2 part_starhv_dfac = vec2(9., 0.32);                 // x-y transformation vector of the distance to get the horizontal and vertical star branches\nconst float part_starhv_ifac = 0.25;                          // Intensity factor of the horizontal and vertical star branches\nconst vec2 part_stardiag_dfac = vec2(13., 0.61);              // x-y transformation vector of the distance to get the diagonal star branches\nconst float part_stardiag_ifac = 0.19;                        // Intensity factor of the diagonal star branches\n\n// Variables\nfloat time2 = 0.0;\n\n// Simple random function\nfloat random(float co)\n{\n    return fract(sin(co*12.989) * 43758.545);\n}\n\n// From https://www.shadertoy.com/view/ldtGDn\nvec3 hsv2rgb (vec3 hsv) { // from HSV to RGB color vector\n\thsv.yz = clamp (hsv.yz, 0.0, 1.0);\n\treturn hsv.z*(0.63*hsv.y*(cos(TWOPI*(hsv.x + vec3(0.0, 2.0/3.0, 1.0/3.0))) - 1.0) + 1.0);\n}\n\n// Gets the rgb color the main particle in function of its intensity\nvec3 getParticleColor_mp( float pint)\n{\n   float hue;\n   float saturation;\n\n   saturation = 0.75/pow(abs(pint), 2.5) + mp_saturation;\n   hue = hue_time_factor*time2 + mp_hue;\n\n   return hsv2rgb(vec3(hue, saturation, pint));\n}\n\n// https://www.shadertoy.com/view/Xs33R2\nfloat getStar(vec2 uv, float sizeFactor) {\n\t// Main particle\n\tvec2 ppos = vec2(0.5, 0.275);\n\tfloat factor = sizeFactor;\n\tfloat dist = distance(uv, ppos) / factor;\n\t// Draws the eight-branched star\n\t// Horizontal and vertical branches\n\tvec2 uvppos = (uv - ppos) / factor;\n\tfloat distv = distance(uvppos*part_starhv_dfac + ppos, ppos);\n\tfloat disth = distance(uvppos*part_starhv_dfac.yx + ppos, ppos);\n\t// Diagonal branches\n\tvec2 uvpposd = 0.7071*vec2(dot(uvppos, vec2(1., 1.)), dot(uvppos, vec2(1., -1.)));\n\tfloat distd1 = distance(uvpposd*part_stardiag_dfac + ppos, ppos);\n\tfloat distd2 = distance(uvpposd*part_stardiag_dfac.yx + ppos, ppos);\n\t// Middle point intensity star inensity\n\tfloat pint1 = 1./(dist*dist_factor + 0.015) + part_starhv_ifac/(disth*dist_factor + 0.01) + part_starhv_ifac/(distv*dist_factor + 0.01) + part_stardiag_ifac/(distd1*dist_factor + 0.01) + part_stardiag_ifac/(distd2*dist_factor + 0.01);\n\n\tfloat pint = 0.0;\n\tif (part_int_factor_max*pint1>6.)\n\t{\n\t\t\tpint = part_int_factor_max*(pow(abs(pint1), ppow)/part_int_div)*mp_int;\n\t}\n\n\treturn pint;\n}\n\nvoid main() {\n  float interval = buildTime;\n  float buildLifeTime = mod(time, interval) / interval;\n\n  if (isCloud == 1.0) {\n    // vec2 pos = (gl_PointCoord.xy - 0.5) * 2.0;\n    vec2 pos = (vUV - 0.5) * 2.0;\n    float a = 1.0;\n    float length = length(pos);\n    if (length >= 1.0) {\n      a = 0.0;\n    }\n    gl_FragColor = vec4(vec3(1.0 - length), a);\n\n    float starSize = STAR_SIZE * (1.0 - vParticleLifeTime + 0.5);\n    // starSize *= (1.0 - buildLifeTime);\n    float intensity = getStar(vUV, starSize);\n    if (intensity < STAR_OPACITY) {\n      a = 0.0;\n    } else {\n      a = (intensity - STAR_OPACITY) * (1.0 - vParticleLifeTime);\n    }\n    time2 = 20.0 * random(floor(vBoxIndex));\n    vec3 pcol = getParticleColor_mp(intensity);\n    gl_FragColor = vec4(pcol, a);\n\n    if (vIsJustBox == 1.0) {\n      vec4 diffuseColor = vec4(vec3(0.0, 1.0, 0.0), 1.0);\n      vec3 directDiffuse = vLightFront * RECIPROCAL_PI * diffuseColor.rgb;\n      vec3 emissive = diffuseColor.rgb / 3.0;\n      vec3 outgoingLight = directDiffuse + emissive;\n      gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n    }\n  } else {\n    vec4 diffuseColor = texture2D(map, vUV);\n    vec3 directDiffuse = vLightFront * RECIPROCAL_PI * diffuseColor.rgb;\n    vec3 emissive = diffuseColor.rgb / 3.0;\n    vec3 outgoingLight = directDiffuse + emissive;\n\n    diffuseColor.a = 0.25 + buildLifeTime;\n    vec3 color = mix(outgoingLight + vec3(0.0, 1.0, 0.0), outgoingLight, buildLifeTime);\n    //vec3 color = mix(vec3(0.0, 1.0, 0.0), outgoingLight, buildLifeTime);\n\n    gl_FragColor = vec4(color, diffuseColor.a);\n  }\n}\n";
game.client.magic.on_render = (function game$client$magic$on_render(init_renderer,component){
var divisor = 1000.0;
var t = (game.client.common.game_time.call(null) - new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"magic","magic",-1640473232).cljs$core$IFn$_invoke$arity$1(component)));
return game.client.engine.for_each_unit.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),((function (divisor,t){
return (function (_,unit){
var mesh = game.client.engine.get_unit_build_mesh.call(null,unit);
var cloud = game.client.engine.get_unit_star.call(null,unit);
var material_25509 = mesh.material;
var uniforms_25510 = material_25509.uniforms;
var build_time_25511 = uniforms_25510.buildTime.value;
uniforms_25510.time.value = (build_time_25511 - (1));

var material = cloud.material;
var uniforms = material.uniforms;
return uniforms.time.value = t;
});})(divisor,t))
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
game.client.magic.new_update_magic_Record = (function (units,scene,magic,started,start_count,stop_count,__meta,__extmap,__hash){
this.units = units;
this.scene = scene;
this.magic = magic;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.magic.new_update_magic_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25514,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25516 = (((k25514 instanceof cljs.core.Keyword))?k25514.fqn:null);
switch (G__25516) {
case "units":
return self__.units;

break;
case "scene":
return self__.scene;

break;
case "magic":
return self__.magic;

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
return cljs.core.get.call(null,self__.__extmap,k25514,else__6835__auto__);

}
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.magic.new-update-magic-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magic","magic",-1640473232),self__.magic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$IIterable$ = true;

game.client.magic.new_update_magic_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25513){
var self__ = this;
var G__25513__$1 = this;
return (new cljs.core.RecordIter((0),G__25513__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"magic","magic",-1640473232),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.magic.new_update_magic_Record(self__.units,self__.scene,self__.magic,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.magic.new_update_magic_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.magic.new_update_magic_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"magic","magic",-1640473232),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.magic.new_update_magic_Record(self__.units,self__.scene,self__.magic,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25513){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25517 = cljs.core.keyword_identical_QMARK_;
var expr__25518 = k__6840__auto__;
if(cljs.core.truth_(pred__25517.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__25518))){
return (new game.client.magic.new_update_magic_Record(G__25513,self__.scene,self__.magic,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25517.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__25518))){
return (new game.client.magic.new_update_magic_Record(self__.units,G__25513,self__.magic,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25517.call(null,new cljs.core.Keyword(null,"magic","magic",-1640473232),expr__25518))){
return (new game.client.magic.new_update_magic_Record(self__.units,self__.scene,G__25513,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25517.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25518))){
return (new game.client.magic.new_update_magic_Record(self__.units,self__.scene,self__.magic,G__25513,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25517.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25518))){
return (new game.client.magic.new_update_magic_Record(self__.units,self__.scene,self__.magic,self__.started,G__25513,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25517.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25518))){
return (new game.client.magic.new_update_magic_Record(self__.units,self__.scene,self__.magic,self__.started,self__.start_count,G__25513,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.magic.new_update_magic_Record(self__.units,self__.scene,self__.magic,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25513),null));
}
}
}
}
}
}
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magic","magic",-1640473232),self__.magic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25513){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.magic.new_update_magic_Record(self__.units,self__.scene,self__.magic,self__.started,self__.start_count,self__.stop_count,G__25513,self__.__extmap,self__.__hash));
});

game.client.magic.new_update_magic_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.magic.new_update_magic_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.magic.new_update_magic_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25512){
var self__ = this;
var G__25512__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25512__$1){
return (function (component){
return component;
});})(G__25512__$1))
.call(null,G__25512__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.magic.new_update_magic_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25512){
var self__ = this;
var G__25512__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25512__$1){
return (function (component){
return component;
});})(G__25512__$1))
.call(null,G__25512__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.magic.new_update_magic_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"magic","magic",58295,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.magic.new_update_magic_Record.cljs$lang$type = true;

game.client.magic.new_update_magic_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.magic/new-update-magic-Record");
});

game.client.magic.new_update_magic_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.magic/new-update-magic-Record");
});

game.client.magic.__GT_new_update_magic_Record = (function game$client$magic$__GT_new_update_magic_Record(units,scene,magic,started,start_count,stop_count){
return (new game.client.magic.new_update_magic_Record(units,scene,magic,started,start_count,stop_count,null,null,null));
});

game.client.magic.map__GT_new_update_magic_Record = (function game$client$magic$map__GT_new_update_magic_Record(G__25515){
return (new game.client.magic.new_update_magic_Record(new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__25515),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__25515),new cljs.core.Keyword(null,"magic","magic",-1640473232).cljs$core$IFn$_invoke$arity$1(G__25515),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25515),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25515),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25515),null,cljs.core.dissoc.call(null,G__25515,new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"magic","magic",-1640473232),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.magic.new_update_magic = (function game$client$magic$new_update_magic(){
return com.stuartsierra.component.using.call(null,game.client.magic.map__GT_new_update_magic_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"magic","magic",-1640473232)], null));
});
game.client.magic.get_materials = (function game$client$magic$get_materials(component){
var light1 = game.client.common.data.call(null,new cljs.core.Keyword(null,"light1","light1",906046172).cljs$core$IFn$_invoke$arity$1(component));
var light_direction = light1.position.clone();
var _ = light_direction.sub(light1.target.position);
var defines = {"STAR_OPACITY": 0.5, "STAR_SIZE": 10.1, "PARTICLE_LIFE_TIME": 1500.1};
var uniforms = {"buildTime": {"value": 10000.0}, "map": {"value": null}, "isCloud": {"value": 0.0}, "time": {"value": 0.0}, "offsetRepeat": {"value": (new THREE.Vector4((0),(0),(1),(1)))}, "lightDirection": {"value": light_direction}, "boundingBoxMin": {"value": (new THREE.Vector3())}, "boundingBoxMax": {"value": (new THREE.Vector3())}};
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"standard-material","standard-material",1297880632),(new THREE.ShaderMaterial({"defines": defines, "uniforms": uniforms, "vertexShader": game.client.magic.standard_vertex_shader, "fragmentShader": game.client.magic.standard_fragment_shader, "transparent": true})),new cljs.core.Keyword(null,"magic-material","magic-material",1607410364),(new THREE.ShaderMaterial({"defines": defines, "uniforms": uniforms, "vertexShader": game.client.magic.magic_vertex_shader, "fragmentShader": game.client.magic.standard_fragment_shader, "transparent": true}))], null);
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
game.client.magic.new_magic_Record = (function (light1,init_light,start_time,standard_material,magic_material,started,start_count,stop_count,__meta,__extmap,__hash){
this.light1 = light1;
this.init_light = init_light;
this.start_time = start_time;
this.standard_material = standard_material;
this.magic_material = magic_material;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.magic.new_magic_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.magic.new_magic_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25523,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25525 = (((k25523 instanceof cljs.core.Keyword))?k25523.fqn:null);
switch (G__25525) {
case "light1":
return self__.light1;

break;
case "init-light":
return self__.init_light;

break;
case "start-time":
return self__.start_time;

break;
case "standard-material":
return self__.standard_material;

break;
case "magic-material":
return self__.magic_material;

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
return cljs.core.get.call(null,self__.__extmap,k25523,else__6835__auto__);

}
});

game.client.magic.new_magic_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.magic.new-magic-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light1","light1",906046172),self__.light1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-light","init-light",750264548),self__.init_light],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-time","start-time",814801386),self__.start_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"standard-material","standard-material",1297880632),self__.standard_material],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magic-material","magic-material",1607410364),self__.magic_material],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.magic.new_magic_Record.prototype.cljs$core$IIterable$ = true;

game.client.magic.new_magic_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25522){
var self__ = this;
var G__25522__$1 = this;
return (new cljs.core.RecordIter((0),G__25522__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"init-light","init-light",750264548),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"standard-material","standard-material",1297880632),new cljs.core.Keyword(null,"magic-material","magic-material",1607410364),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.magic.new_magic_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.magic.new_magic_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,self__.standard_material,self__.magic_material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.magic.new_magic_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

game.client.magic.new_magic_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.magic.new_magic_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.magic.new_magic_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"init-light","init-light",750264548),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"start-time","start-time",814801386),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"standard-material","standard-material",1297880632),null,new cljs.core.Keyword(null,"magic-material","magic-material",1607410364),null,new cljs.core.Keyword(null,"light1","light1",906046172),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,self__.standard_material,self__.magic_material,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.magic.new_magic_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25522){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25526 = cljs.core.keyword_identical_QMARK_;
var expr__25527 = k__6840__auto__;
if(cljs.core.truth_(pred__25526.call(null,new cljs.core.Keyword(null,"light1","light1",906046172),expr__25527))){
return (new game.client.magic.new_magic_Record(G__25522,self__.init_light,self__.start_time,self__.standard_material,self__.magic_material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25526.call(null,new cljs.core.Keyword(null,"init-light","init-light",750264548),expr__25527))){
return (new game.client.magic.new_magic_Record(self__.light1,G__25522,self__.start_time,self__.standard_material,self__.magic_material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25526.call(null,new cljs.core.Keyword(null,"start-time","start-time",814801386),expr__25527))){
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,G__25522,self__.standard_material,self__.magic_material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25526.call(null,new cljs.core.Keyword(null,"standard-material","standard-material",1297880632),expr__25527))){
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,G__25522,self__.magic_material,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25526.call(null,new cljs.core.Keyword(null,"magic-material","magic-material",1607410364),expr__25527))){
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,self__.standard_material,G__25522,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25526.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25527))){
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,self__.standard_material,self__.magic_material,G__25522,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25526.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25527))){
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,self__.standard_material,self__.magic_material,self__.started,G__25522,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25526.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25527))){
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,self__.standard_material,self__.magic_material,self__.started,self__.start_count,G__25522,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,self__.standard_material,self__.magic_material,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25522),null));
}
}
}
}
}
}
}
}
});

game.client.magic.new_magic_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light1","light1",906046172),self__.light1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-light","init-light",750264548),self__.init_light],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-time","start-time",814801386),self__.start_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"standard-material","standard-material",1297880632),self__.standard_material],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magic-material","magic-material",1607410364),self__.magic_material],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.magic.new_magic_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25522){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.magic.new_magic_Record(self__.light1,self__.init_light,self__.start_time,self__.standard_material,self__.magic_material,self__.started,self__.start_count,self__.stop_count,G__25522,self__.__extmap,self__.__hash));
});

game.client.magic.new_magic_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.magic.new_magic_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.magic.new_magic_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25521){
var self__ = this;
var G__25521__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25521__$1){
return (function (component){
var map__25529 = game.client.magic.get_materials.call(null,component);
var map__25529__$1 = ((((!((map__25529 == null)))?((((map__25529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25529):map__25529);
var standard_material__$1 = cljs.core.get.call(null,map__25529__$1,new cljs.core.Keyword(null,"standard-material","standard-material",1297880632));
var magic_material__$1 = cljs.core.get.call(null,map__25529__$1,new cljs.core.Keyword(null,"magic-material","magic-material",1607410364));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"start-time","start-time",814801386),game.client.common.game_time.call(null)),new cljs.core.Keyword(null,"standard-material","standard-material",1297880632),standard_material__$1),new cljs.core.Keyword(null,"magic-material","magic-material",1607410364),magic_material__$1);
});})(G__25521__$1))
.call(null,G__25521__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.magic.new_magic_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25521){
var self__ = this;
var G__25521__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25521__$1){
return (function (component){
return component;
});})(G__25521__$1))
.call(null,G__25521__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.magic.new_magic_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"light1","light1",-1748389597,null),new cljs.core.Symbol(null,"init-light","init-light",-1904171221,null),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null),new cljs.core.Symbol(null,"standard-material","standard-material",-1356555137,null),new cljs.core.Symbol(null,"magic-material","magic-material",-1047025405,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.magic.new_magic_Record.cljs$lang$type = true;

game.client.magic.new_magic_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.magic/new-magic-Record");
});

game.client.magic.new_magic_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.magic/new-magic-Record");
});

game.client.magic.__GT_new_magic_Record = (function game$client$magic$__GT_new_magic_Record(light1,init_light,start_time,standard_material,magic_material,started,start_count,stop_count){
return (new game.client.magic.new_magic_Record(light1,init_light,start_time,standard_material,magic_material,started,start_count,stop_count,null,null,null));
});

game.client.magic.map__GT_new_magic_Record = (function game$client$magic$map__GT_new_magic_Record(G__25524){
return (new game.client.magic.new_magic_Record(new cljs.core.Keyword(null,"light1","light1",906046172).cljs$core$IFn$_invoke$arity$1(G__25524),new cljs.core.Keyword(null,"init-light","init-light",750264548).cljs$core$IFn$_invoke$arity$1(G__25524),new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(G__25524),new cljs.core.Keyword(null,"standard-material","standard-material",1297880632).cljs$core$IFn$_invoke$arity$1(G__25524),new cljs.core.Keyword(null,"magic-material","magic-material",1607410364).cljs$core$IFn$_invoke$arity$1(G__25524),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25524),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25524),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25524),null,cljs.core.dissoc.call(null,G__25524,new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"init-light","init-light",750264548),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"standard-material","standard-material",1297880632),new cljs.core.Keyword(null,"magic-material","magic-material",1607410364),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.magic.new_magic = (function game$client$magic$new_magic(){
return com.stuartsierra.component.using.call(null,game.client.magic.map__GT_new_magic_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"light1","light1",906046172),new cljs.core.Keyword(null,"init-light","init-light",750264548)], null));
});

//# sourceMappingURL=magic.js.map