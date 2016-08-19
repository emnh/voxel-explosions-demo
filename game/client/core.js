// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.core');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('game.client.page_not_found');
goog.require('game.client.page_game');
goog.require('game.client.resources');
goog.require('game.client.sente_setup');
goog.require('promesa.core');
goog.require('game.client.routing');
goog.require('jayq.core');
goog.require('game.client.scene');
goog.require('game.client.page_game_test');
goog.require('game.shared.state');
goog.require('game.client.page_load_test');
goog.require('cljs.core.async');
goog.require('game.client.progress_manager');
goog.require('game.client.renderer');
goog.require('game.client.page_game_lobby');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.controls');
goog.require('game.client.page_sente_test');
goog.require('game.client.common');
goog.require('game.client.page_lobby');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Reloaded client core");
if(typeof game.client.core.system !== 'undefined'){
} else {
game.client.core.system = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

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
game.client.core._new_page_Record = (function (routing,page_kw,page_component,started,start_count,stop_count,__meta,__extmap,__hash){
this.routing = routing;
this.page_kw = page_kw;
this.page_component = page_component;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.core._new_page_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.core._new_page_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k28840,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__28842 = (((k28840 instanceof cljs.core.Keyword))?k28840.fqn:null);
switch (G__28842) {
case "routing":
return self__.routing;

break;
case "page-kw":
return self__.page_kw;

break;
case "page-component":
return self__.page_component;

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
return cljs.core.get.call(null,self__.__extmap,k28840,else__6835__auto__);

}
});

game.client.core._new_page_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.core.-new-page-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing","routing",1440253662),self__.routing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"page-kw","page-kw",993314339),self__.page_kw],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"page-component","page-component",-1130542915),self__.page_component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.core._new_page_Record.prototype.cljs$core$IIterable$ = true;

game.client.core._new_page_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28839){
var self__ = this;
var G__28839__$1 = this;
return (new cljs.core.RecordIter((0),G__28839__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routing","routing",1440253662),new cljs.core.Keyword(null,"page-kw","page-kw",993314339),new cljs.core.Keyword(null,"page-component","page-component",-1130542915),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.core._new_page_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.core._new_page_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.core._new_page_Record(self__.routing,self__.page_kw,self__.page_component,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.core._new_page_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.client.core._new_page_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.core._new_page_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.core._new_page_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"page-kw","page-kw",993314339),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"page-component","page-component",-1130542915),null,new cljs.core.Keyword(null,"routing","routing",1440253662),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.core._new_page_Record(self__.routing,self__.page_kw,self__.page_component,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.core._new_page_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__28839){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__28843 = cljs.core.keyword_identical_QMARK_;
var expr__28844 = k__6840__auto__;
if(cljs.core.truth_(pred__28843.call(null,new cljs.core.Keyword(null,"routing","routing",1440253662),expr__28844))){
return (new game.client.core._new_page_Record(G__28839,self__.page_kw,self__.page_component,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28843.call(null,new cljs.core.Keyword(null,"page-kw","page-kw",993314339),expr__28844))){
return (new game.client.core._new_page_Record(self__.routing,G__28839,self__.page_component,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28843.call(null,new cljs.core.Keyword(null,"page-component","page-component",-1130542915),expr__28844))){
return (new game.client.core._new_page_Record(self__.routing,self__.page_kw,G__28839,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28843.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__28844))){
return (new game.client.core._new_page_Record(self__.routing,self__.page_kw,self__.page_component,G__28839,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28843.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__28844))){
return (new game.client.core._new_page_Record(self__.routing,self__.page_kw,self__.page_component,self__.started,G__28839,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28843.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__28844))){
return (new game.client.core._new_page_Record(self__.routing,self__.page_kw,self__.page_component,self__.started,self__.start_count,G__28839,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.core._new_page_Record(self__.routing,self__.page_kw,self__.page_component,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__28839),null));
}
}
}
}
}
}
});

game.client.core._new_page_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing","routing",1440253662),self__.routing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"page-kw","page-kw",993314339),self__.page_kw],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"page-component","page-component",-1130542915),self__.page_component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.core._new_page_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__28839){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.core._new_page_Record(self__.routing,self__.page_kw,self__.page_component,self__.started,self__.start_count,self__.stop_count,G__28839,self__.__extmap,self__.__hash));
});

game.client.core._new_page_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.core._new_page_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.core._new_page_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__28838){
var self__ = this;
var G__28838__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__28838__$1){
return (function (component){
var page_component__$1 = cljs.core.assoc.call(null,self__.page_component,new cljs.core.Keyword(null,"$page","$page",384517215),game.client.routing.get_page_$element.call(null,self__.page_kw));
var page_component__$2 = ((cljs.core._EQ_.call(null,self__.page_kw,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(self__.routing)))))?com.stuartsierra.component.start.call(null,cljs.core.merge.call(null,page_component__$1,component)):page_component__$1);
return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"page-component","page-component",-1130542915),page_component__$2);
});})(G__28838__$1))
.call(null,G__28838__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.core._new_page_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__28838){
var self__ = this;
var G__28838__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__28838__$1){
return (function (component){
var page_component__$1 = cljs.core.assoc.call(null,self__.page_component,new cljs.core.Keyword(null,"$page","$page",384517215),game.client.routing.get_page_$element.call(null,self__.page_kw));
var page_component__$2 = com.stuartsierra.component.stop.call(null,cljs.core.merge.call(null,page_component__$1,component));
return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"page-component","page-component",-1130542915),page_component__$2);
});})(G__28838__$1))
.call(null,G__28838__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.core._new_page_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routing","routing",-1214182107,null),new cljs.core.Symbol(null,"page-kw","page-kw",-1661121430,null),new cljs.core.Symbol(null,"page-component","page-component",509988612,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.core._new_page_Record.cljs$lang$type = true;

game.client.core._new_page_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.core/-new-page-Record");
});

game.client.core._new_page_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.core/-new-page-Record");
});

game.client.core.__GT__new_page_Record = (function game$client$core$__GT__new_page_Record(routing,page_kw,page_component,started,start_count,stop_count){
return (new game.client.core._new_page_Record(routing,page_kw,page_component,started,start_count,stop_count,null,null,null));
});

game.client.core.map__GT__new_page_Record = (function game$client$core$map__GT__new_page_Record(G__28841){
return (new game.client.core._new_page_Record(new cljs.core.Keyword(null,"routing","routing",1440253662).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"page-kw","page-kw",993314339).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"page-component","page-component",-1130542915).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__28841),null,cljs.core.dissoc.call(null,G__28841,new cljs.core.Keyword(null,"routing","routing",1440253662),new cljs.core.Keyword(null,"page-kw","page-kw",993314339),new cljs.core.Keyword(null,"page-component","page-component",-1130542915),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.core._new_page = (function game$client$core$_new_page(){
return com.stuartsierra.component.using.call(null,game.client.core.map__GT__new_page_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routing","routing",1440253662)], null));
});
game.client.core.new_page = (function game$client$core$new_page(page_kw,page_component){
return com.stuartsierra.component.using.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game.client.core._new_page.call(null),new cljs.core.Keyword(null,"page-kw","page-kw",993314339),page_kw),new cljs.core.Keyword(null,"page-component","page-component",-1130542915),page_component),com.stuartsierra.component.dependencies.call(null,page_component));
});
if(typeof game.client.core.run_count !== 'undefined'){
} else {
game.client.core.run_count = cljs.core.atom.call(null,(0));
}
game.client.core.main = (function game$client$core$main(){
var old_run_count = cljs.core.deref.call(null,game.client.core.run_count);
cljs.core.swap_BANG_.call(null,game.client.core.run_count,cljs.core.inc);

cljs.core.println.call(null,"main",old_run_count);

if(!(cljs.core._EQ_.call(null,old_run_count,(1)))){
if((old_run_count > (0))){
game.shared.state.with_simple_cause.call(null,((function (old_run_count){
return (function (){
return cljs.core.swap_BANG_.call(null,game.client.core.system,com.stuartsierra.component.stop_system);
});})(old_run_count))
);
} else {
}

return game.shared.state.with_simple_cause.call(null,((function (old_run_count){
return (function (){
return cljs.core.swap_BANG_.call(null,game.client.core.system,com.stuartsierra.component.start_system);
});})(old_run_count))
);
} else {
return null;
}
});
if(typeof game.client.core.reloading !== 'undefined'){
} else {
game.client.core.reloading = cljs.core.atom.call(null,false);
}
game.client.core.reload_page = (function game$client$core$reload_page(page_kw){
if(cljs.core.not.call(null,cljs.core.deref.call(null,game.client.core.reloading))){
cljs.core.println.call(null,"reload-page");

cljs.core.reset_BANG_.call(null,game.client.core.reloading,true);

game.client.core.main.call(null);

return cljs.core.reset_BANG_.call(null,game.client.core.reloading,false);
} else {
return null;
}
});
game.shared.state.s_readd_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"config","config",994861415),game.client.config.config);
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"simplex","simplex",-495056721),game.client.common.new_jsobj.call(null,(function (){
return (new SimplexNoise());
})));
game.client.core.standalone = true;
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478),game.client.common.new_lc.call(null,game.client.core.reload_page));
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"routing","routing",1440253662),game.client.routing.new_router.call(null));
if(cljs.core.not.call(null,game.client.core.standalone)){
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),game.client.sente_setup.new_sente_setup.call(null));
} else {
}
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),game.client.progress_manager.new_progress_manager.call(null));
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"resources","resources",1632806811),game.client.resources.new_resources.call(null));
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"page-game-test","page-game-test",-915489536),game.client.core.new_page.call(null,new cljs.core.Keyword(null,"game-test","game-test",639683876),game.client.page_game_test.new_game_test.call(null)));
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"page-load-test","page-load-test",-78286684),game.client.core.new_page.call(null,new cljs.core.Keyword(null,"load-test","load-test",-36468821),game.client.page_load_test.new_load_test.call(null)));
if(cljs.core.not.call(null,game.client.core.standalone)){
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"page-sente-test","page-sente-test",-2110303176),game.client.core.new_page.call(null,new cljs.core.Keyword(null,"sente-test","sente-test",1223079739),game.client.page_sente_test.new_sente_test.call(null)));
} else {
}
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"page-game","page-game",2059229368),game.client.core.new_page.call(null,new cljs.core.Keyword(null,"game","game",-441523833),game.client.page_game.new_game.call(null)));
if(cljs.core.not.call(null,game.client.core.standalone)){
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"page-lobby","page-lobby",-442829610),game.client.core.new_page.call(null,new cljs.core.Keyword(null,"lobby","lobby",1193995861),game.client.page_lobby.new_lobby.call(null)));
} else {
}
if(cljs.core.not.call(null,game.client.core.standalone)){
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"page-game-lobby","page-game-lobby",-1309715927),game.client.core.new_page.call(null,new cljs.core.Keyword(null,"game-lobby","game-lobby",-994003516),game.client.page_game_lobby.new_game_lobby.call(null)));
} else {
}
game.shared.state.s_add_component.call(null,game.client.core.system,new cljs.core.Keyword(null,"page-not-found","page-not-found",118922199),game.client.core.new_page.call(null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),game.client.page_not_found.new_page_not_found.call(null)));
if((cljs.core.deref.call(null,game.client.core.run_count) > (0))){
game.client.core.main.call(null);
} else {
$(game.client.core.main.call(null));
}

//# sourceMappingURL=core.js.map