// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.resources');
goog.require('cljs.core');
goog.require('game.client.voxelize');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('game.client.models');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('game.client.progress_manager');
goog.require('com.stuartsierra.component');
goog.require('clojure.string');
game.client.resources.load_resource = (function game$client$resources$load_resource(path,on_success,on_progress,on_error){
var xhr = (new XMLHttpRequest());
var G__27860 = xhr;
G__27860.open("GET",path,true);

(G__27860["responseType"] = "arraybuffer");

(G__27860["onerror"] = on_error);

(G__27860["onload"] = on_success);

(G__27860["onprogress"] = on_progress);

G__27860.send();

return G__27860;
});
game.client.resources.load_texture = (function game$client$resources$load_texture(model,path,on_progress){
return promesa.core.promise.call(null,(function (resolve,reject){
var repeat_x = cljs.core.first.call(null,new cljs.core.Keyword(null,"texture-repeat","texture-repeat",-1972062445).cljs$core$IFn$_invoke$arity$1(model));
var repeat_y = cljs.core.second.call(null,new cljs.core.Keyword(null,"texture-repeat","texture-repeat",-1972062445).cljs$core$IFn$_invoke$arity$1(model));
var on_success = ((function (repeat_x,repeat_y){
return (function (){
var this$ = this;
var img = (new Image());
var blob = (new Blob([this$.response]));
(img["onload"] = ((function (img,blob,this$,repeat_x,repeat_y){
return (function (){
var texture = (new THREE.Texture(img));
texture.wrapS = THREE.RepeatWrapping;

texture.wrapT = THREE.RepeatWrapping;

texture.repeat.set(repeat_x,repeat_y);

texture.needsUpdate = true;

return resolve.call(null,texture);
});})(img,blob,this$,repeat_x,repeat_y))
);

(img["onerror"] = ((function (img,blob,this$,repeat_x,repeat_y){
return (function (){
return reject.call(null,[cljs.core.str("image load error: "),cljs.core.str(path)].join(''));
});})(img,blob,this$,repeat_x,repeat_y))
);

return (img["src"] = window.URL.createObjectURL(blob));
});})(repeat_x,repeat_y))
;
return game.client.resources.load_resource.call(null,path,on_success,on_progress,reject);
}));
});
game.client.resources.load_voxels = (function game$client$resources$load_voxels(model,path,on_progress){
return promesa.core.promise.call(null,(function (resolve,reject){
var on_success = (function (){
var this$ = this;
var buffer = this$.response;
var uint8array = (new Uint8Array(buffer));
var uint8array__$1 = pako.inflate(uint8array);
var decoded = msgpack.decode(uint8array__$1);
var voxel_dict = cljs.core.js__GT_clj.call(null,decoded,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var voxel_geometry = game.client.voxelize.voxelize_output.call(null,voxel_dict);
var voxel_geometry__$1 = game.client.models.post_transform_geometry.call(null,model,voxel_geometry);
var voxel_dict__$1 = cljs.core.assoc.call(null,voxel_dict,new cljs.core.Keyword(null,"geometry","geometry",-405034994),voxel_geometry__$1);
return resolve.call(null,voxel_dict__$1);
});
return game.client.resources.load_resource.call(null,path,on_success,on_progress,reject);
}));
});
game.client.resources.load_geometry = (function game$client$resources$load_geometry(model,path,on_progress){
return promesa.core.promise.call(null,(function (resolve,reject){
var on_success = (function (){
var this$ = this;
var buffer = this$.response;
var uint8array = (new Uint8Array(buffer));
var uint8array__$1 = pako.inflate(uint8array);
var decoded = msgpack.decode(uint8array__$1);
var geo_loader = (new THREE.BufferGeometryLoader());
var geo = geo_loader.parse(decoded);
geo.computeBoundingBox();

geo.computeBoundingSphere();

geo.computeFaceNormals();

geo.computeVertexNormals();

return resolve.call(null,geo);
});
return game.client.resources.load_resource.call(null,path,on_success,on_progress,reject);
}));
});
game.client.resources.on_progress = (function game$client$resources$on_progress(progress_manager,resource,xhr){
return game.client.progress_manager.update_progress_item.call(null,progress_manager,resource,xhr.loaded,xhr.total);
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
game.client.resources.new_resources_Record = (function (progress_manager,resource_list,all_promise,started,start_count,stop_count,__meta,__extmap,__hash){
this.progress_manager = progress_manager;
this.resource_list = resource_list;
this.all_promise = all_promise;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.resources.new_resources_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.resources.new_resources_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k27864,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__27866 = (((k27864 instanceof cljs.core.Keyword))?k27864.fqn:null);
switch (G__27866) {
case "progress-manager":
return self__.progress_manager;

break;
case "resource-list":
return self__.resource_list;

break;
case "all-promise":
return self__.all_promise;

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
return cljs.core.get.call(null,self__.__extmap,k27864,else__6835__auto__);

}
});

game.client.resources.new_resources_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.resources.new-resources-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),self__.progress_manager],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resource-list","resource-list",1498099584),self__.resource_list],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"all-promise","all-promise",561554522),self__.all_promise],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.resources.new_resources_Record.prototype.cljs$core$IIterable$ = true;

game.client.resources.new_resources_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27863){
var self__ = this;
var G__27863__$1 = this;
return (new cljs.core.RecordIter((0),G__27863__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),new cljs.core.Keyword(null,"resource-list","resource-list",1498099584),new cljs.core.Keyword(null,"all-promise","all-promise",561554522),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.resources.new_resources_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.resources.new_resources_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.resources.new_resources_Record(self__.progress_manager,self__.resource_list,self__.all_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.resources.new_resources_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.client.resources.new_resources_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.resources.new_resources_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.resources.new_resources_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"resource-list","resource-list",1498099584),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"all-promise","all-promise",561554522),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.resources.new_resources_Record(self__.progress_manager,self__.resource_list,self__.all_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.resources.new_resources_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__27863){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__27867 = cljs.core.keyword_identical_QMARK_;
var expr__27868 = k__6840__auto__;
if(cljs.core.truth_(pred__27867.call(null,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),expr__27868))){
return (new game.client.resources.new_resources_Record(G__27863,self__.resource_list,self__.all_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27867.call(null,new cljs.core.Keyword(null,"resource-list","resource-list",1498099584),expr__27868))){
return (new game.client.resources.new_resources_Record(self__.progress_manager,G__27863,self__.all_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27867.call(null,new cljs.core.Keyword(null,"all-promise","all-promise",561554522),expr__27868))){
return (new game.client.resources.new_resources_Record(self__.progress_manager,self__.resource_list,G__27863,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27867.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__27868))){
return (new game.client.resources.new_resources_Record(self__.progress_manager,self__.resource_list,self__.all_promise,G__27863,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27867.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__27868))){
return (new game.client.resources.new_resources_Record(self__.progress_manager,self__.resource_list,self__.all_promise,self__.started,G__27863,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27867.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__27868))){
return (new game.client.resources.new_resources_Record(self__.progress_manager,self__.resource_list,self__.all_promise,self__.started,self__.start_count,G__27863,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.resources.new_resources_Record(self__.progress_manager,self__.resource_list,self__.all_promise,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__27863),null));
}
}
}
}
}
}
});

game.client.resources.new_resources_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),self__.progress_manager],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resource-list","resource-list",1498099584),self__.resource_list],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"all-promise","all-promise",561554522),self__.all_promise],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.resources.new_resources_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__27863){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.resources.new_resources_Record(self__.progress_manager,self__.resource_list,self__.all_promise,self__.started,self__.start_count,self__.stop_count,G__27863,self__.__extmap,self__.__hash));
});

game.client.resources.new_resources_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.resources.new_resources_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.resources.new_resources_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__27862){
var self__ = this;
var G__27862__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__27862__$1){
return (function (component){
var resource_list__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__6990__auto__ = ((function (G__27862__$1){
return (function game$client$resources$iter__27870(s__27871){
return (new cljs.core.LazySeq(null,((function (G__27862__$1){
return (function (){
var s__27871__$1 = s__27871;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27871__$1);
if(temp__4657__auto__){
var s__27871__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27871__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__27871__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__27873 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__27872 = (0);
while(true){
if((i__27872 < size__6989__auto__)){
var model = cljs.core._nth.call(null,c__6988__auto__,i__27872);
cljs.core.chunk_append.call(null,b__27873,(function (){var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(model);
var texture_path = new cljs.core.Keyword(null,"texture-path","texture-path",975399967).cljs$core$IFn$_invoke$arity$1(model);
var voxels_path = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"voxels-path","voxels-path",1983306799).cljs$core$IFn$_invoke$arity$1(model);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return clojure.string.replace.call(null,clojure.string.replace.call(null,path,/\/3d\//,"/voxels/"),/\.json$/,".msgpack.gz");
}
})();
var path__$1 = ((clojure.string.includes_QMARK_.call(null,path,"models-dinosaurs"))?"models/3d/missile.json":path);
var path__$2 = clojure.string.replace.call(null,path__$1,/\.json$/,".msgpack.gz");
var on_geo_progress = cljs.core.partial.call(null,game.client.resources.on_progress,self__.progress_manager,path__$2);
var on_texture_progress = cljs.core.partial.call(null,game.client.resources.on_progress,self__.progress_manager,texture_path);
var on_voxels_progress = cljs.core.partial.call(null,game.client.resources.on_progress,self__.progress_manager,voxels_path);
var load_promise = game.client.resources.load_geometry.call(null,model,path__$2,on_geo_progress);
var texture_load_promise = game.client.resources.load_texture.call(null,model,texture_path,on_texture_progress);
var voxels_load_promise = game.client.resources.load_voxels.call(null,model,voxels_path,on_voxels_progress);
return cljs.core.merge.call(null,model,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-promise","load-promise",197028011),load_promise,new cljs.core.Keyword(null,"texture-load-promise","texture-load-promise",101693884),texture_load_promise,new cljs.core.Keyword(null,"voxels-load-promise","voxels-load-promise",-1283878915),voxels_load_promise], null));
})());

var G__27875 = (i__27872 + (1));
i__27872 = G__27875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27873),game$client$resources$iter__27870.call(null,cljs.core.chunk_rest.call(null,s__27871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27873),null);
}
} else {
var model = cljs.core.first.call(null,s__27871__$2);
return cljs.core.cons.call(null,(function (){var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(model);
var texture_path = new cljs.core.Keyword(null,"texture-path","texture-path",975399967).cljs$core$IFn$_invoke$arity$1(model);
var voxels_path = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"voxels-path","voxels-path",1983306799).cljs$core$IFn$_invoke$arity$1(model);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return clojure.string.replace.call(null,clojure.string.replace.call(null,path,/\/3d\//,"/voxels/"),/\.json$/,".msgpack.gz");
}
})();
var path__$1 = ((clojure.string.includes_QMARK_.call(null,path,"models-dinosaurs"))?"models/3d/missile.json":path);
var path__$2 = clojure.string.replace.call(null,path__$1,/\.json$/,".msgpack.gz");
var on_geo_progress = cljs.core.partial.call(null,game.client.resources.on_progress,self__.progress_manager,path__$2);
var on_texture_progress = cljs.core.partial.call(null,game.client.resources.on_progress,self__.progress_manager,texture_path);
var on_voxels_progress = cljs.core.partial.call(null,game.client.resources.on_progress,self__.progress_manager,voxels_path);
var load_promise = game.client.resources.load_geometry.call(null,model,path__$2,on_geo_progress);
var texture_load_promise = game.client.resources.load_texture.call(null,model,texture_path,on_texture_progress);
var voxels_load_promise = game.client.resources.load_voxels.call(null,model,voxels_path,on_voxels_progress);
return cljs.core.merge.call(null,model,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-promise","load-promise",197028011),load_promise,new cljs.core.Keyword(null,"texture-load-promise","texture-load-promise",101693884),texture_load_promise,new cljs.core.Keyword(null,"voxels-load-promise","voxels-load-promise",-1283878915),voxels_load_promise], null));
})(),game$client$resources$iter__27870.call(null,cljs.core.rest.call(null,s__27871__$2)));
}
} else {
return null;
}
break;
}
});})(G__27862__$1))
,null,null));
});})(G__27862__$1))
;
return iter__6990__auto__.call(null,game.client.models.get_models.call(null));
})());
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"all-promise","all-promise",561554522),promesa.core.all.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.map.call(null,((function (resource_list__$1,G__27862__$1){
return (function (p1__27861_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"load-promise","load-promise",197028011).cljs$core$IFn$_invoke$arity$1(p1__27861_SHARP_),new cljs.core.Keyword(null,"texture-load-promise","texture-load-promise",101693884).cljs$core$IFn$_invoke$arity$1(p1__27861_SHARP_),new cljs.core.Keyword(null,"voxels-load-promise","voxels-load-promise",-1283878915).cljs$core$IFn$_invoke$arity$1(p1__27861_SHARP_)],null));
});})(resource_list__$1,G__27862__$1))
,resource_list__$1))))),new cljs.core.Keyword(null,"resource-list","resource-list",1498099584),resource_list__$1);
});})(G__27862__$1))
.call(null,G__27862__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.resources.new_resources_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__27862){
var self__ = this;
var G__27862__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__27862__$1){
return (function (component){
return component;
});})(G__27862__$1))
.call(null,G__27862__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.resources.new_resources_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"progress-manager","progress-manager",522080976,null),new cljs.core.Symbol(null,"resource-list","resource-list",-1156336185,null),new cljs.core.Symbol(null,"all-promise","all-promise",-2092881247,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.resources.new_resources_Record.cljs$lang$type = true;

game.client.resources.new_resources_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.resources/new-resources-Record");
});

game.client.resources.new_resources_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.resources/new-resources-Record");
});

game.client.resources.__GT_new_resources_Record = (function game$client$resources$__GT_new_resources_Record(progress_manager,resource_list,all_promise,started,start_count,stop_count){
return (new game.client.resources.new_resources_Record(progress_manager,resource_list,all_promise,started,start_count,stop_count,null,null,null));
});

game.client.resources.map__GT_new_resources_Record = (function game$client$resources$map__GT_new_resources_Record(G__27865){
return (new game.client.resources.new_resources_Record(new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551).cljs$core$IFn$_invoke$arity$1(G__27865),new cljs.core.Keyword(null,"resource-list","resource-list",1498099584).cljs$core$IFn$_invoke$arity$1(G__27865),new cljs.core.Keyword(null,"all-promise","all-promise",561554522).cljs$core$IFn$_invoke$arity$1(G__27865),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__27865),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__27865),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__27865),null,cljs.core.dissoc.call(null,G__27865,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),new cljs.core.Keyword(null,"resource-list","resource-list",1498099584),new cljs.core.Keyword(null,"all-promise","all-promise",561554522),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.resources.new_resources = (function game$client$resources$new_resources(){
return com.stuartsierra.component.using.call(null,game.client.resources.map__GT_new_resources_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551)], null));
});

//# sourceMappingURL=resources.js.map