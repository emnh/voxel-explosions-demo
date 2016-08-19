// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.page_sente_test');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.pprint');
goog.require('game.client.sente_setup');
goog.require('promesa.core');
goog.require('game.client.routing');
goog.require('jayq.core');
goog.require('rum.core');
goog.require('sablono.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('clojure.string');
goog.require('game.client.common');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * 
 */
game.client.page_sente_test.sente_view = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
var h = game.client.common.header.call(null,"Sente Test");
return sablono.interpreter.interpret.call(null,React.createElement("div",{"className": "container"},sablono.interpreter.interpret.call(null,h)));
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),null),"sente-view");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__23790__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__23790 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__23791__i = 0, G__23791__a = new Array(arguments.length -  0);
while (G__23791__i < G__23791__a.length) {G__23791__a[G__23791__i] = arguments[G__23791__i + 0]; ++G__23791__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__23791__a,0);
} 
return G__23790__delegate.call(this,args__10724__auto__);};
G__23790.cljs$lang$maxFixedArity = 0;
G__23790.cljs$lang$applyTo = (function (arglist__23792){
var args__10724__auto__ = cljs.core.seq(arglist__23792);
return G__23790__delegate(args__10724__auto__);
});
G__23790.cljs$core$IFn$_invoke$arity$variadic = G__23790__delegate;
return G__23790;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
game.client.page_sente_test.send_loop = (function game$client$page_sente_test$send_loop(component){
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714).cljs$core$IFn$_invoke$arity$1(component)))){
cljs.core.println.call(null,"send-fn");

return promesa.core.finally$.call(null,promesa.core.catch$.call(null,promesa.core.then.call(null,game.client.sente_setup.send_cb.call(null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword("sente-test","ping","sente-test/ping",307277966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"had-a-callback?","had-a-callback?",-512946762),"yes"], null)),(function (cb_reply){
return cljs.core.println.call(null,"cb-reply",cb_reply);
})),(function (err){
return cljs.core.println.call(null,"err",err);
})),(function (){
return setTimeout(cljs.core.partial.call(null,game$client$page_sente_test$send_loop,component),(60000));
}));
} else {
return null;
}
});
game.client.page_sente_test.handle_init = (function game$client$page_sente_test$handle_init(component,ev_msg){
return cljs.core.println.call(null,"handle-init");
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
game.client.page_sente_test.new_sente_test_Record = (function (sente_setup,$page,send_loop_enabled,started,start_count,stop_count,__meta,__extmap,__hash){
this.sente_setup = sente_setup;
this.$page = $page;
this.send_loop_enabled = send_loop_enabled;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k23795,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__23797 = (((k23795 instanceof cljs.core.Keyword))?k23795.fqn:null);
switch (G__23797) {
case "sente-setup":
return self__.sente_setup;

break;
case "$page":
return self__.$page;

break;
case "send-loop-enabled":
return self__.send_loop_enabled;

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
return cljs.core.get.call(null,self__.__extmap,k23795,else__6835__auto__);

}
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.page-sente-test.new-sente-test-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),self__.sente_setup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$page","$page",384517215),self__.$page],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714),self__.send_loop_enabled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IIterable$ = true;

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23794){
var self__ = this;
var G__23794__$1 = this;
return (new cljs.core.RecordIter((0),G__23794__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),new cljs.core.Keyword(null,"$page","$page",384517215),new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,self__.$page,self__.send_loop_enabled,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),null,new cljs.core.Keyword(null,"$page","$page",384517215),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,self__.$page,self__.send_loop_enabled,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__23794){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__23798 = cljs.core.keyword_identical_QMARK_;
var expr__23799 = k__6840__auto__;
if(cljs.core.truth_(pred__23798.call(null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),expr__23799))){
return (new game.client.page_sente_test.new_sente_test_Record(G__23794,self__.$page,self__.send_loop_enabled,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23798.call(null,new cljs.core.Keyword(null,"$page","$page",384517215),expr__23799))){
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,G__23794,self__.send_loop_enabled,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23798.call(null,new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714),expr__23799))){
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,self__.$page,G__23794,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23798.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__23799))){
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,self__.$page,self__.send_loop_enabled,G__23794,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23798.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__23799))){
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,self__.$page,self__.send_loop_enabled,self__.started,G__23794,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23798.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__23799))){
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,self__.$page,self__.send_loop_enabled,self__.started,self__.start_count,G__23794,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,self__.$page,self__.send_loop_enabled,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__23794),null));
}
}
}
}
}
}
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),self__.sente_setup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$page","$page",384517215),self__.$page],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714),self__.send_loop_enabled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__23794){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.page_sente_test.new_sente_test_Record(self__.sente_setup,self__.$page,self__.send_loop_enabled,self__.started,self__.start_count,self__.stop_count,G__23794,self__.__extmap,self__.__hash));
});

game.client.page_sente_test.new_sente_test_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.page_sente_test.new_sente_test_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.page_sente_test.new_sente_test_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__23793){
var self__ = this;
var G__23793__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__23793__$1){
return (function (component){
var component__$1 = cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714),cljs.core.atom.call(null,true));
game.client.sente_setup.register_handler.call(null,self__.sente_setup,new cljs.core.Keyword("sente-test","init","sente-test/init",164729100),cljs.core.partial.call(null,game.client.page_sente_test.handle_init,component__$1));

promesa.core.then.call(null,new cljs.core.Keyword(null,"connected-promise","connected-promise",2014466720).cljs$core$IFn$_invoke$arity$1(self__.sente_setup),((function (component__$1,G__23793__$1){
return (function (){
return game.client.page_sente_test.send_loop.call(null,component__$1);
});})(component__$1,G__23793__$1))
);

rum.core.mount.call(null,game.client.page_sente_test.sente_view.call(null,component__$1),(self__.$page[(0)]));

return component__$1;
});})(G__23793__$1))
.call(null,G__23793__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.page_sente_test.new_sente_test_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__23793){
var self__ = this;
var G__23793__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__23793__$1){
return (function (component){
if(cljs.core.not_EQ_.call(null,self__.send_loop_enabled,null)){
cljs.core.reset_BANG_.call(null,self__.send_loop_enabled,false);
} else {
}

if(cljs.core.not_EQ_.call(null,(self__.$page[(0)]),null)){
rum.core.unmount.call(null,(self__.$page[(0)]));
} else {
}

return component;
});})(G__23793__$1))
.call(null,G__23793__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.page_sente_test.new_sente_test_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sente-setup","sente-setup",-2011360701,null),new cljs.core.Symbol(null,"$page","$page",2025048742,null),new cljs.core.Symbol(null,"send-loop-enabled","send-loop-enabled",-1196314055,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.page_sente_test.new_sente_test_Record.cljs$lang$type = true;

game.client.page_sente_test.new_sente_test_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.page-sente-test/new-sente-test-Record");
});

game.client.page_sente_test.new_sente_test_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.page-sente-test/new-sente-test-Record");
});

game.client.page_sente_test.__GT_new_sente_test_Record = (function game$client$page_sente_test$__GT_new_sente_test_Record(sente_setup,$page,send_loop_enabled,started,start_count,stop_count){
return (new game.client.page_sente_test.new_sente_test_Record(sente_setup,$page,send_loop_enabled,started,start_count,stop_count,null,null,null));
});

game.client.page_sente_test.map__GT_new_sente_test_Record = (function game$client$page_sente_test$map__GT_new_sente_test_Record(G__23796){
return (new game.client.page_sente_test.new_sente_test_Record(new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(G__23796),new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(G__23796),new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714).cljs$core$IFn$_invoke$arity$1(G__23796),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__23796),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__23796),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__23796),null,cljs.core.dissoc.call(null,G__23796,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),new cljs.core.Keyword(null,"$page","$page",384517215),new cljs.core.Keyword(null,"send-loop-enabled","send-loop-enabled",1458121714),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.page_sente_test.new_sente_test = (function game$client$page_sente_test$new_sente_test(){
return com.stuartsierra.component.using.call(null,game.client.page_sente_test.map__GT_new_sente_test_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068)], null));
});

//# sourceMappingURL=page_sente_test.js.map