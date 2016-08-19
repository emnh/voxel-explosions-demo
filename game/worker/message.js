// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.worker.message');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.math');
goog.require('game.worker.engine');
goog.require('game.worker.state');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof game.worker.message._on_message !== 'undefined'){
} else {
game.worker.message._on_message = (function (){var method_table__7134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7138__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.worker.message","-on-message"),((function (method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__){
return (function (component,data){
return cljs.core.keyword.call(null,cljs.core.first.call(null,data));
});})(method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__,hierarchy__7138__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7138__auto__,method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__));
})();
}
cljs.core._add_method.call(null,game.worker.message._on_message,new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404),(function (component,p__13834){
var vec__13835 = p__13834;
var event = cljs.core.nth.call(null,vec__13835,(0),null);
var data = cljs.core.nth.call(null,vec__13835,(1),null);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404).cljs$core$IFn$_invoke$arity$1(component),true);
}));
cljs.core._add_method.call(null,game.worker.message._on_message,new cljs.core.Keyword(null,"update-move-targets","update-move-targets",-41409206),(function (component,p__13836){
var vec__13837 = p__13836;
var event = cljs.core.nth.call(null,vec__13837,(0),null);
var data = cljs.core.nth.call(null,vec__13837,(1),null);
return null;
}));
cljs.core._add_method.call(null,game.worker.message._on_message,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (component,p__13838){
var vec__13839 = p__13838;
var event = cljs.core.nth.call(null,vec__13839,(0),null);
var data = cljs.core.nth.call(null,vec__13839,(1),null);
var map__13840 = data;
var map__13840__$1 = ((((!((map__13840 == null)))?((((map__13840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13840):map__13840);
var state_buffer = cljs.core.get.call(null,map__13840__$1,new cljs.core.Keyword(null,"state-buffer","state-buffer",866117773));
var camera = cljs.core.get.call(null,map__13840__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var unit_count = cljs.core.get.call(null,map__13840__$1,new cljs.core.Keyword(null,"unit-count","unit-count",-961602118));
var scene_properties = cljs.core.get.call(null,map__13840__$1,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364));
var map_dict = cljs.core.get.call(null,map__13840__$1,new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036));
var map__13841 = camera;
var map__13841__$1 = ((((!((map__13841 == null)))?((((map__13841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13841):map__13841);
var matrix = cljs.core.get.call(null,map__13841__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var fov = cljs.core.get.call(null,map__13841__$1,new cljs.core.Keyword(null,"fov","fov",-12463282));
var near = cljs.core.get.call(null,map__13841__$1,new cljs.core.Keyword(null,"near","near",-1077668328));
var far = cljs.core.get.call(null,map__13841__$1,new cljs.core.Keyword(null,"far","far",85807546));
var aspect = cljs.core.get.call(null,map__13841__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
var map__13842 = scene_properties;
var map__13842__$1 = ((((!((map__13842 == null)))?((((map__13842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13842):map__13842);
var width = cljs.core.get.call(null,map__13842__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__13842__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var camera__$1 = (new THREE.PerspectiveCamera(fov,aspect,near,far));
var state = game.worker.state.init_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),unit_count,new cljs.core.Keyword(null,"buffer","buffer",617295198),state_buffer], null));
camera__$1.matrix.fromArray(matrix);

camera__$1.matrix.decompose(camera__$1.position,camera__$1.quaternion,camera__$1.scale);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036).cljs$core$IFn$_invoke$arity$1(component),game.worker.state.map__GT_Ground.call(null,map_dict));

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(component),state);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(component),camera__$1);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"unit-count","unit-count",-961602118).cljs$core$IFn$_invoke$arity$1(component),unit_count);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(component),width);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(component),height);
}));
cljs.core._add_method.call(null,game.worker.message._on_message,new cljs.core.Keyword(null,"start-engine","start-engine",-1731836093),(function (component,p__13846){
var vec__13847 = p__13846;
var event = cljs.core.nth.call(null,vec__13847,(0),null);
var data = cljs.core.nth.call(null,vec__13847,(1),null);
return game.worker.engine.process.call(null,component);
}));
cljs.core._add_method.call(null,game.worker.message._on_message,new cljs.core.Keyword(null,"default","default",-1987822328),(function (component,data){
return cljs.core.println.call(null,"unhandled message");
}));
game.worker.message.on_message = (function game$worker$message$on_message(component,message){
var data = message.data;
var data__$1 = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return game.worker.message._on_message.call(null,component,data__$1);
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
game.worker.message.new_core_Record = (function (state,camera,unit_count,width,height,poll_state,map_dict,started,start_count,stop_count,__meta,__extmap,__hash){
this.state = state;
this.camera = camera;
this.unit_count = unit_count;
this.width = width;
this.height = height;
this.poll_state = poll_state;
this.map_dict = map_dict;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.worker.message.new_core_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.worker.message.new_core_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k13850,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__13852 = (((k13850 instanceof cljs.core.Keyword))?k13850.fqn:null);
switch (G__13852) {
case "started":
return self__.started;

break;
case "map-dict":
return self__.map_dict;

break;
case "stop-count":
return self__.stop_count;

break;
case "width":
return self__.width;

break;
case "state":
return self__.state;

break;
case "poll-state":
return self__.poll_state;

break;
case "start-count":
return self__.start_count;

break;
case "camera":
return self__.camera;

break;
case "unit-count":
return self__.unit_count;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13850,else__6835__auto__);

}
});

game.worker.message.new_core_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.worker.message.new-core-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),self__.unit_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404),self__.poll_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036),self__.map_dict],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.worker.message.new_core_Record.prototype.cljs$core$IIterable$ = true;

game.worker.message.new_core_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13849){
var self__ = this;
var G__13849__$1 = this;
return (new cljs.core.RecordIter((0),G__13849__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404),new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.worker.message.new_core_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.worker.message.new_core_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.worker.message.new_core_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

game.worker.message.new_core_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.worker.message.new_core_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.worker.message.new_core_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.worker.message.new_core_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__13849){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__13853 = cljs.core.keyword_identical_QMARK_;
var expr__13854 = k__6840__auto__;
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__13854))){
return (new game.worker.message.new_core_Record(G__13849,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,G__13849,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,self__.camera,G__13849,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,G__13849,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,G__13849,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,G__13849,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,G__13849,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,G__13849,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,G__13849,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13853.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__13854))){
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,G__13849,self__.__meta,self__.__extmap,null));
} else {
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__13849),null));
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

game.worker.message.new_core_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),self__.unit_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404),self__.poll_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036),self__.map_dict],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.worker.message.new_core_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__13849){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.worker.message.new_core_Record(self__.state,self__.camera,self__.unit_count,self__.width,self__.height,self__.poll_state,self__.map_dict,self__.started,self__.start_count,self__.stop_count,G__13849,self__.__extmap,self__.__hash));
});

game.worker.message.new_core_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.worker.message.new_core_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.worker.message.new_core_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__13848){
var self__ = this;
var G__13848__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__13848__$1){
return (function (component){
var state__$1 = cljs.core.atom.call(null,null);
var camera__$1 = cljs.core.atom.call(null,null);
var unit_count__$1 = cljs.core.atom.call(null,(0));
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036),cljs.core.atom.call(null,null)),new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404),cljs.core.atom.call(null,false)),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.atom.call(null,null)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.atom.call(null,null)),new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),unit_count__$1),new cljs.core.Keyword(null,"camera","camera",-1190348585),camera__$1),new cljs.core.Keyword(null,"state","state",-1988618099),state__$1);
self.addEventListener("message",cljs.core.partial.call(null,game.worker.message.on_message,component__$1));

self.postMessage(["loaded",null]);

return component__$1;
});})(G__13848__$1))
.call(null,G__13848__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.worker.message.new_core_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__13848){
var self__ = this;
var G__13848__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__13848__$1){
return (function (component){
return component;
});})(G__13848__$1))
.call(null,G__13848__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.worker.message.new_core_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"unit-count","unit-count",678929409,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"poll-state","poll-state",401564123,null),new cljs.core.Symbol(null,"map-dict","map-dict",530420491,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.worker.message.new_core_Record.cljs$lang$type = true;

game.worker.message.new_core_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.worker.message/new-core-Record");
});

game.worker.message.new_core_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.worker.message/new-core-Record");
});

game.worker.message.__GT_new_core_Record = (function game$worker$message$__GT_new_core_Record(state,camera,unit_count,width,height,poll_state,map_dict,started,start_count,stop_count){
return (new game.worker.message.new_core_Record(state,camera,unit_count,width,height,poll_state,map_dict,started,start_count,stop_count,null,null,null));
});

game.worker.message.map__GT_new_core_Record = (function game$worker$message$map__GT_new_core_Record(G__13851){
return (new game.worker.message.new_core_Record(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"unit-count","unit-count",-961602118).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__13851),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__13851),null,cljs.core.dissoc.call(null,G__13851,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404),new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.worker.message.new_core = (function game$worker$message$new_core(){
return com.stuartsierra.component.using.call(null,game.worker.message.map__GT_new_core_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=message.js.map