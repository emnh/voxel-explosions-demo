// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.ground_local');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
game.client.ground_local.rgba_size = (4);
game.client.ground_local.xy_index_to_index = (function game$client$ground_local$xy_index_to_index(x_faces,y_faces,x,y){
return ((y * y_faces) + x);
});

/**
* @constructor
*/
game.client.ground_local.xy_to_index_return = (function (xd,yd,xi,yi,idx){
this.xd = xd;
this.yd = yd;
this.xi = xi;
this.yi = yi;
this.idx = idx;
})

game.client.ground_local.xy_to_index_return.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xd","xd",-888290932,null),new cljs.core.Symbol(null,"yd","yd",-258323833,null),new cljs.core.Symbol(null,"xi","xi",1477048208,null),new cljs.core.Symbol(null,"yi","yi",288395894,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

game.client.ground_local.xy_to_index_return.cljs$lang$type = true;

game.client.ground_local.xy_to_index_return.cljs$lang$ctorStr = "game.client.ground-local/xy-to-index-return";

game.client.ground_local.xy_to_index_return.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"game.client.ground-local/xy-to-index-return");
});

game.client.ground_local.__GT_xy_to_index_return = (function game$client$ground_local$__GT_xy_to_index_return(xd,yd,xi,yi,idx){
return (new game.client.ground_local.xy_to_index_return(xd,yd,xi,yi,idx));
});

game.client.ground_local.xy_to_index = (function game$client$ground_local$xy_to_index(width,height,x_faces,y_faces,x,y){
var xd = (((x + (width / (2))) * x_faces) / width);
var yd = (((y + (height / (2))) * y_faces) / height);
var xi = game.client.math.floor.call(null,xd);
var yi = game.client.math.floor.call(null,yd);
var idx = game.client.ground_local.xy_index_to_index.call(null,x_faces,y_faces,xi,yi);
return (new game.client.ground_local.xy_to_index_return(xd,yd,xi,yi,idx));
});
game.client.ground_local.get_height = (function game$client$ground_local$get_height(component,x,y){
var height_field = component.height_field;
var width = component.width;
var height = component.height;
var x_faces = component.x_faces;
var y_faces = component.y_faces;
var ret = game.client.ground_local.xy_to_index.call(null,width,height,x_faces,y_faces,x,y);
var xd = ret.xd;
var yd = ret.yd;
var xi = ret.xi;
var yi = ret.yi;
var idx = ret.idx;
var x1 = (x - ((cljs.core.mod.call(null,xd,(1)) * width) / x_faces));
var x2 = (x1 + (((1) * width) / x_faces));
var y1 = (y - ((cljs.core.mod.call(null,yd,(1)) * height) / y_faces));
var y2 = (y1 + (((1) * height) / y_faces));
if(((xi < (0))) || ((yi < (0))) || (((xi + (1)) > x_faces)) || (((yi + (1)) > y_faces))){
return (0);
} else {
var fQ11 = (height_field[game.client.ground_local.xy_index_to_index.call(null,x_faces,y_faces,xi,yi)]);
var fQ21 = (height_field[game.client.ground_local.xy_index_to_index.call(null,x_faces,y_faces,(xi + (1)),yi)]);
var fQ12 = (height_field[game.client.ground_local.xy_index_to_index.call(null,x_faces,y_faces,xi,(yi + (1)))]);
var fQ22 = (height_field[game.client.ground_local.xy_index_to_index.call(null,x_faces,y_faces,(xi + (1)),(yi + (1)))]);
var fxy1 = ((((x2 - x) / (x2 - x1)) * fQ11) + (((x - x1) / (x2 - x1)) * fQ21));
var fxy2 = ((((x2 - x) / (x2 - x1)) * fQ12) + (((x - x1) / (x2 - x1)) * fQ22));
var fyy = ((((y2 - y) / (y2 - y1)) * fxy1) + (((y - y1) / (y2 - y1)) * fxy2));
return fyy;
}
});
game.client.ground_local.align_to_ground = (function game$client$ground_local$align_to_ground(ground,bbox,xpos,zpos){
var x1 = (xpos + bbox.min.x);
var x2 = (xpos + bbox.max.x);
var z1 = (zpos + bbox.min.z);
var z2 = (zpos + bbox.max.z);
var hc = game.client.ground_local.get_height.call(null,ground,xpos,zpos);
var h11 = game.client.ground_local.get_height.call(null,ground,x1,z1);
var h12 = game.client.ground_local.get_height.call(null,ground,x1,z2);
var h21 = game.client.ground_local.get_height.call(null,ground,x2,z1);
var h22 = game.client.ground_local.get_height.call(null,ground,x2,z2);
var y = (game.client.math.max.call(null,hc,game.client.math.max.call(null,h11,game.client.math.max.call(null,h12,game.client.math.max.call(null,h21,h22)))) - bbox.min.y);
return y;
});
game.client.ground_local.get_map = (function game$client$ground_local$get_map(component,config,mesh,simplex){
var texture_loader = (new THREE.TextureLoader());
var material = (new THREE.MeshLambertMaterial());
var wrapping = THREE.RepeatWrapping;
var width = game.client.config.get_terrain_width.call(null,config);
var height = game.client.config.get_terrain_height.call(null,config);
var map_repeat_width = (width / (100));
var map_repeat_height = (height / (100));
var on_load = ((function (texture_loader,material,wrapping,width,height,map_repeat_width,map_repeat_height){
return (function (texture){
texture.wrapS = wrapping;

texture.wrapT = wrapping;

texture.repeat.set(map_repeat_width,map_repeat_height);

material.map = texture;

return material.needsUpdate = true;
});})(texture_loader,material,wrapping,width,height,map_repeat_width,map_repeat_height))
;
var grass = texture_loader.load("models/images/grass.jpg",on_load);
var m_opts = {"map": grass};
var x_faces = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983)], null));
var y_faces = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175)], null));
var max_elevation = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"max-elevation","max-elevation",-1528355010)], null));
var min_elevation = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"min-elevation","min-elevation",-1219757658)], null));
var geometry = (new THREE.PlaneBufferGeometry(width,height,(x_faces - (1)),(y_faces - (1))));
var rotation = (new THREE.Matrix4()).makeRotationX((Math.PI / (-2)));
var position = geometry.attributes.position;
var length = position.count;
var height_field = (new Float32Array(length));
var data_texture_buffer = (new Float32Array((length * game.client.ground_local.rgba_size)));
var float_texture_divisor = 256.0;
geometry.applyMatrix(rotation);

var seq__12033_12045 = cljs.core.seq.call(null,cljs.core.range.call(null,length));
var chunk__12034_12046 = null;
var count__12035_12047 = (0);
var i__12036_12048 = (0);
while(true){
if((i__12036_12048 < count__12035_12047)){
var i_12049 = cljs.core._nth.call(null,chunk__12034_12046,i__12036_12048);
var x_12050 = position.getX(i_12049);
var y_12051 = position.getY(i_12049);
var z_12052 = position.getZ(i_12049);
var y_12053__$1 = simplex.noise((x_12050 / (100)),(z_12052 / (100)));
var y_12054__$2 = ((y_12053__$1 + (1)) / (2));
var y_12055__$3 = ((y_12054__$2 * max_elevation) + min_elevation);
var idx_12056 = game.client.ground_local.xy_to_index.call(null,width,height,x_faces,y_faces,x_12050,z_12052).idx;
position.setY(i_12049,y_12055__$3);

(height_field[idx_12056] = y_12055__$3);

var seq__12037_12057 = cljs.core.seq.call(null,cljs.core.range.call(null,game.client.ground_local.rgba_size));
var chunk__12038_12058 = null;
var count__12039_12059 = (0);
var i__12040_12060 = (0);
while(true){
if((i__12040_12060 < count__12039_12059)){
var j_12061 = cljs.core._nth.call(null,chunk__12038_12058,i__12040_12060);
(data_texture_buffer[(j_12061 + (idx_12056 * game.client.ground_local.rgba_size))] = (y_12055__$3 / float_texture_divisor));

var G__12062 = seq__12037_12057;
var G__12063 = chunk__12038_12058;
var G__12064 = count__12039_12059;
var G__12065 = (i__12040_12060 + (1));
seq__12037_12057 = G__12062;
chunk__12038_12058 = G__12063;
count__12039_12059 = G__12064;
i__12040_12060 = G__12065;
continue;
} else {
var temp__4657__auto___12066 = cljs.core.seq.call(null,seq__12037_12057);
if(temp__4657__auto___12066){
var seq__12037_12067__$1 = temp__4657__auto___12066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12037_12067__$1)){
var c__7021__auto___12068 = cljs.core.chunk_first.call(null,seq__12037_12067__$1);
var G__12069 = cljs.core.chunk_rest.call(null,seq__12037_12067__$1);
var G__12070 = c__7021__auto___12068;
var G__12071 = cljs.core.count.call(null,c__7021__auto___12068);
var G__12072 = (0);
seq__12037_12057 = G__12069;
chunk__12038_12058 = G__12070;
count__12039_12059 = G__12071;
i__12040_12060 = G__12072;
continue;
} else {
var j_12073 = cljs.core.first.call(null,seq__12037_12067__$1);
(data_texture_buffer[(j_12073 + (idx_12056 * game.client.ground_local.rgba_size))] = (y_12055__$3 / float_texture_divisor));

var G__12074 = cljs.core.next.call(null,seq__12037_12067__$1);
var G__12075 = null;
var G__12076 = (0);
var G__12077 = (0);
seq__12037_12057 = G__12074;
chunk__12038_12058 = G__12075;
count__12039_12059 = G__12076;
i__12040_12060 = G__12077;
continue;
}
} else {
}
}
break;
}

var G__12078 = seq__12033_12045;
var G__12079 = chunk__12034_12046;
var G__12080 = count__12035_12047;
var G__12081 = (i__12036_12048 + (1));
seq__12033_12045 = G__12078;
chunk__12034_12046 = G__12079;
count__12035_12047 = G__12080;
i__12036_12048 = G__12081;
continue;
} else {
var temp__4657__auto___12082 = cljs.core.seq.call(null,seq__12033_12045);
if(temp__4657__auto___12082){
var seq__12033_12083__$1 = temp__4657__auto___12082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12033_12083__$1)){
var c__7021__auto___12084 = cljs.core.chunk_first.call(null,seq__12033_12083__$1);
var G__12085 = cljs.core.chunk_rest.call(null,seq__12033_12083__$1);
var G__12086 = c__7021__auto___12084;
var G__12087 = cljs.core.count.call(null,c__7021__auto___12084);
var G__12088 = (0);
seq__12033_12045 = G__12085;
chunk__12034_12046 = G__12086;
count__12035_12047 = G__12087;
i__12036_12048 = G__12088;
continue;
} else {
var i_12089 = cljs.core.first.call(null,seq__12033_12083__$1);
var x_12090 = position.getX(i_12089);
var y_12091 = position.getY(i_12089);
var z_12092 = position.getZ(i_12089);
var y_12093__$1 = simplex.noise((x_12090 / (100)),(z_12092 / (100)));
var y_12094__$2 = ((y_12093__$1 + (1)) / (2));
var y_12095__$3 = ((y_12094__$2 * max_elevation) + min_elevation);
var idx_12096 = game.client.ground_local.xy_to_index.call(null,width,height,x_faces,y_faces,x_12090,z_12092).idx;
position.setY(i_12089,y_12095__$3);

(height_field[idx_12096] = y_12095__$3);

var seq__12041_12097 = cljs.core.seq.call(null,cljs.core.range.call(null,game.client.ground_local.rgba_size));
var chunk__12042_12098 = null;
var count__12043_12099 = (0);
var i__12044_12100 = (0);
while(true){
if((i__12044_12100 < count__12043_12099)){
var j_12101 = cljs.core._nth.call(null,chunk__12042_12098,i__12044_12100);
(data_texture_buffer[(j_12101 + (idx_12096 * game.client.ground_local.rgba_size))] = (y_12095__$3 / float_texture_divisor));

var G__12102 = seq__12041_12097;
var G__12103 = chunk__12042_12098;
var G__12104 = count__12043_12099;
var G__12105 = (i__12044_12100 + (1));
seq__12041_12097 = G__12102;
chunk__12042_12098 = G__12103;
count__12043_12099 = G__12104;
i__12044_12100 = G__12105;
continue;
} else {
var temp__4657__auto___12106__$1 = cljs.core.seq.call(null,seq__12041_12097);
if(temp__4657__auto___12106__$1){
var seq__12041_12107__$1 = temp__4657__auto___12106__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12041_12107__$1)){
var c__7021__auto___12108 = cljs.core.chunk_first.call(null,seq__12041_12107__$1);
var G__12109 = cljs.core.chunk_rest.call(null,seq__12041_12107__$1);
var G__12110 = c__7021__auto___12108;
var G__12111 = cljs.core.count.call(null,c__7021__auto___12108);
var G__12112 = (0);
seq__12041_12097 = G__12109;
chunk__12042_12098 = G__12110;
count__12043_12099 = G__12111;
i__12044_12100 = G__12112;
continue;
} else {
var j_12113 = cljs.core.first.call(null,seq__12041_12107__$1);
(data_texture_buffer[(j_12113 + (idx_12096 * game.client.ground_local.rgba_size))] = (y_12095__$3 / float_texture_divisor));

var G__12114 = cljs.core.next.call(null,seq__12041_12107__$1);
var G__12115 = null;
var G__12116 = (0);
var G__12117 = (0);
seq__12041_12097 = G__12114;
chunk__12042_12098 = G__12115;
count__12043_12099 = G__12116;
i__12044_12100 = G__12117;
continue;
}
} else {
}
}
break;
}

var G__12118 = cljs.core.next.call(null,seq__12033_12083__$1);
var G__12119 = null;
var G__12120 = (0);
var G__12121 = (0);
seq__12033_12045 = G__12118;
chunk__12034_12046 = G__12119;
count__12035_12047 = G__12120;
i__12036_12048 = G__12121;
continue;
}
} else {
}
}
break;
}

geometry.computeFaceNormals();

geometry.computeVertexNormals();

var mesh__$1 = (new THREE.Mesh(geometry,material));
var data_texture = (new THREE.DataTexture(data_texture_buffer,x_faces,y_faces,THREE.RGBAFormat,THREE.FloatType));
data_texture.minFilter = THREE.LinearFilter;

data_texture.magFilter = THREE.LinearFilter;

data_texture.needsUpdate = true;

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"width","width",-384071477),width),new cljs.core.Keyword(null,"height","height",1025178622),height),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),x_faces),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),y_faces),new cljs.core.Keyword(null,"height-field","height-field",966744104),height_field),new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh__$1),new cljs.core.Keyword(null,"data-texture","data-texture",1787820271),data_texture),new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730),float_texture_divisor);
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
game.client.ground_local.new_init_ground_Record = (function (config,params,mesh,height_field,width,height,x_faces,y_faces,data_texture,float_texture_divisor,started,start_count,stop_count,__meta,__extmap,__hash){
this.config = config;
this.params = params;
this.mesh = mesh;
this.height_field = height_field;
this.width = width;
this.height = height;
this.x_faces = x_faces;
this.y_faces = y_faces;
this.data_texture = data_texture;
this.float_texture_divisor = float_texture_divisor;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.ground_local.new_init_ground_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k12124,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__12126 = (((k12124 instanceof cljs.core.Keyword))?k12124.fqn:null);
switch (G__12126) {
case "started":
return self__.started;

break;
case "y-faces":
return self__.y_faces;

break;
case "stop-count":
return self__.stop_count;

break;
case "config":
return self__.config;

break;
case "height-field":
return self__.height_field;

break;
case "width":
return self__.width;

break;
case "params":
return self__.params;

break;
case "data-texture":
return self__.data_texture;

break;
case "mesh":
return self__.mesh;

break;
case "start-count":
return self__.start_count;

break;
case "x-faces":
return self__.x_faces;

break;
case "float-texture-divisor":
return self__.float_texture_divisor;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12124,else__6835__auto__);

}
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.ground-local.new-init-ground-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh","mesh",456320595),self__.mesh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height-field","height-field",966744104),self__.height_field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),self__.x_faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),self__.y_faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-texture","data-texture",1787820271),self__.data_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730),self__.float_texture_divisor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IIterable$ = true;

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12123){
var self__ = this;
var G__12123__$1 = this;
return (new cljs.core.RecordIter((0),G__12123__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.Keyword(null,"height-field","height-field",966744104),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),new cljs.core.Keyword(null,"data-texture","data-texture",1787820271),new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"height-field","height-field",966744104),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data-texture","data-texture",1787820271),null,new cljs.core.Keyword(null,"mesh","mesh",456320595),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),null,new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__12123){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__12127 = cljs.core.keyword_identical_QMARK_;
var expr__12128 = k__6840__auto__;
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(G__12123,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,G__12123,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"mesh","mesh",456320595),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,G__12123,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"height-field","height-field",966744104),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,G__12123,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,G__12123,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,G__12123,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,G__12123,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,G__12123,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"data-texture","data-texture",1787820271),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,G__12123,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,G__12123,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,G__12123,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,G__12123,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12127.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__12128))){
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,G__12123,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__12123),null));
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

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh","mesh",456320595),self__.mesh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height-field","height-field",966744104),self__.height_field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),self__.x_faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),self__.y_faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-texture","data-texture",1787820271),self__.data_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730),self__.float_texture_divisor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__12123){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.ground_local.new_init_ground_Record(self__.config,self__.params,self__.mesh,self__.height_field,self__.width,self__.height,self__.x_faces,self__.y_faces,self__.data_texture,self__.float_texture_divisor,self__.started,self__.start_count,self__.stop_count,G__12123,self__.__extmap,self__.__hash));
});

game.client.ground_local.new_init_ground_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.ground_local.new_init_ground_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.ground_local.new_init_ground_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__12122){
var self__ = this;
var G__12122__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12122__$1){
return (function (component){
if(cljs.core.not.call(null,self__.mesh)){
return game.client.ground_local.get_map.call(null,component,self__.config,self__.mesh,new cljs.core.Keyword(null,"simplex","simplex",-495056721).cljs$core$IFn$_invoke$arity$1(self__.params));
} else {
return component;
}
});})(G__12122__$1))
.call(null,G__12122__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.ground_local.new_init_ground_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__12122){
var self__ = this;
var G__12122__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__12122__$1){
return (function (component){
return component;
});})(G__12122__$1))
.call(null,G__12122__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.ground_local.new_init_ground_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"mesh","mesh",2096852122,null),new cljs.core.Symbol(null,"height-field","height-field",-1687691665,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"x-faces","x-faces",-689786786,null),new cljs.core.Symbol(null,"y-faces","y-faces",1586861352,null),new cljs.core.Symbol(null,"data-texture","data-texture",-866615498,null),new cljs.core.Symbol(null,"float-texture-divisor","float-texture-divisor",1910004257,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.ground_local.new_init_ground_Record.cljs$lang$type = true;

game.client.ground_local.new_init_ground_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.ground-local/new-init-ground-Record");
});

game.client.ground_local.new_init_ground_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.ground-local/new-init-ground-Record");
});

game.client.ground_local.__GT_new_init_ground_Record = (function game$client$ground_local$__GT_new_init_ground_Record(config,params,mesh,height_field,width,height,x_faces,y_faces,data_texture,float_texture_divisor,started,start_count,stop_count){
return (new game.client.ground_local.new_init_ground_Record(config,params,mesh,height_field,width,height,x_faces,y_faces,data_texture,float_texture_divisor,started,start_count,stop_count,null,null,null));
});

game.client.ground_local.map__GT_new_init_ground_Record = (function game$client$ground_local$map__GT_new_init_ground_Record(G__12125){
return (new game.client.ground_local.new_init_ground_Record(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"height-field","height-field",966744104).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"data-texture","data-texture",1787820271).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__12125),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__12125),null,cljs.core.dissoc.call(null,G__12125,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.Keyword(null,"height-field","height-field",966744104),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x-faces","x-faces",1964648983),new cljs.core.Keyword(null,"y-faces","y-faces",-53670175),new cljs.core.Keyword(null,"data-texture","data-texture",1787820271),new cljs.core.Keyword(null,"float-texture-divisor","float-texture-divisor",269472730),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.ground_local.new_init_ground = (function game$client$ground_local$new_init_ground(){
return com.stuartsierra.component.using.call(null,game.client.ground_local.map__GT_new_init_ground_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"params","params",710516235)], null));
});

//# sourceMappingURL=ground_local.js.map