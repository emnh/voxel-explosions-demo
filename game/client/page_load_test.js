// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.page_load_test');
goog.require('cljs.core');
goog.require('game.client.config');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('game.client.routing');
goog.require('jayq.core');
goog.require('rum.core');
goog.require('game.client.progress_manager');
goog.require('sablono.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.common');
/**
 * complete is a number from 0 to 100
 */
game.client.page_load_test.progress_bar = (function (){var render_mixin__8062__auto__ = rum.core.render__GT_mixin.call(null,(function (text,complete){
return React.createElement("div",{"id": "units", "className": "progress"},React.createElement("div",{"role": "progressbar", "aria-valuenow": complete, "aria-valuemin": (0), "aria-valuemax": (100), "style": {"width": [cljs.core.str(game.client.math.round.call(null,complete)),cljs.core.str("%")].join('')}, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("progress-bar progress-bar-striped active"),cljs.core.str(((cljs.core._EQ_.call(null,game.client.math.round.call(null,complete),(100)))?" progress-bar-success":""))].join('')], null))},React.createElement("span",{"className": ""},sablono.interpreter.interpret.call(null,text))));
}));
var class__8063__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8062__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"progress-bar");
var ctor__8064__auto__ = ((function (render_mixin__8062__auto__,class__8063__auto__){
return (function() { 
var G__26981__delegate = function (args__8065__auto__){
var state__8066__auto__ = rum.core.args__GT_state.call(null,args__8065__auto__);
return rum.core.element.call(null,class__8063__auto__,state__8066__auto__,null);
};
var G__26981 = function (var_args){
var args__8065__auto__ = null;
if (arguments.length > 0) {
var G__26982__i = 0, G__26982__a = new Array(arguments.length -  0);
while (G__26982__i < G__26982__a.length) {G__26982__a[G__26982__i] = arguments[G__26982__i + 0]; ++G__26982__i;}
  args__8065__auto__ = new cljs.core.IndexedSeq(G__26982__a,0);
} 
return G__26981__delegate.call(this,args__8065__auto__);};
G__26981.cljs$lang$maxFixedArity = 0;
G__26981.cljs$lang$applyTo = (function (arglist__26983){
var args__8065__auto__ = cljs.core.seq(arglist__26983);
return G__26981__delegate(args__8065__auto__);
});
G__26981.cljs$core$IFn$_invoke$arity$variadic = G__26981__delegate;
return G__26981;
})()
;})(render_mixin__8062__auto__,class__8063__auto__))
;
return cljs.core.with_meta.call(null,ctor__8064__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__8063__auto__], null));
})();
game.client.page_load_test.format_progress = (function game$client$page_load_test$format_progress(progress_map){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__6990__auto__ = (function game$client$page_load_test$format_progress_$_iter__26996(s__26997){
return (new cljs.core.LazySeq(null,(function (){
var s__26997__$1 = s__26997;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26997__$1);
if(temp__4657__auto__){
var s__26997__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26997__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__26997__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__26999 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__26998 = (0);
while(true){
if((i__26998 < size__6989__auto__)){
var resource = cljs.core._nth.call(null,c__6988__auto__,i__26998);
cljs.core.chunk_append.call(null,b__26999,(function (){var map__27004 = progress_map.call(null,resource);
var map__27004__$1 = ((((!((map__27004 == null)))?((((map__27004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27004):map__27004);
var completed = cljs.core.get.call(null,map__27004__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var total = cljs.core.get.call(null,map__27004__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var progress = ((100) * (((total > (0)))?(completed / total):(1)));
var progress_text = [cljs.core.str(resource),cljs.core.str(": "),cljs.core.str(progress),cljs.core.str("%")].join('');
if(!(cljs.core._EQ_.call(null,(100),game.client.math.round.call(null,progress)))){
return rum.core.with_key.call(null,game.client.common.list_item.call(null,game.client.page_load_test.progress_bar.call(null,progress_text,progress)),resource);
} else {
return null;
}
})());

var G__27008 = (i__26998 + (1));
i__26998 = G__27008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26999),game$client$page_load_test$format_progress_$_iter__26996.call(null,cljs.core.chunk_rest.call(null,s__26997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26999),null);
}
} else {
var resource = cljs.core.first.call(null,s__26997__$2);
return cljs.core.cons.call(null,(function (){var map__27006 = progress_map.call(null,resource);
var map__27006__$1 = ((((!((map__27006 == null)))?((((map__27006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27006):map__27006);
var completed = cljs.core.get.call(null,map__27006__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var total = cljs.core.get.call(null,map__27006__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var progress = ((100) * (((total > (0)))?(completed / total):(1)));
var progress_text = [cljs.core.str(resource),cljs.core.str(": "),cljs.core.str(progress),cljs.core.str("%")].join('');
if(!(cljs.core._EQ_.call(null,(100),game.client.math.round.call(null,progress)))){
return rum.core.with_key.call(null,game.client.common.list_item.call(null,game.client.page_load_test.progress_bar.call(null,progress_text,progress)),resource);
} else {
return null;
}
})(),game$client$page_load_test$format_progress_$_iter__26996.call(null,cljs.core.rest.call(null,s__26997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,cljs.core.keys.call(null,progress_map));
})()));
});
/**
 * 
 */
game.client.page_load_test.progress_list = (function (){var render_mixin__8062__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
var progress_map = rum.core.react.call(null,game.client.progress_manager.get_progress_map.call(null,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551).cljs$core$IFn$_invoke$arity$1(component)));
return React.createElement("ul",{"className": "progress-list"},sablono.interpreter.interpret.call(null,game.client.page_load_test.format_progress.call(null,progress_map)));
}));
var class__8063__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8062__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"progress-list");
var ctor__8064__auto__ = ((function (render_mixin__8062__auto__,class__8063__auto__){
return (function() { 
var G__27009__delegate = function (args__8065__auto__){
var state__8066__auto__ = rum.core.args__GT_state.call(null,args__8065__auto__);
return rum.core.element.call(null,class__8063__auto__,state__8066__auto__,null);
};
var G__27009 = function (var_args){
var args__8065__auto__ = null;
if (arguments.length > 0) {
var G__27010__i = 0, G__27010__a = new Array(arguments.length -  0);
while (G__27010__i < G__27010__a.length) {G__27010__a[G__27010__i] = arguments[G__27010__i + 0]; ++G__27010__i;}
  args__8065__auto__ = new cljs.core.IndexedSeq(G__27010__a,0);
} 
return G__27009__delegate.call(this,args__8065__auto__);};
G__27009.cljs$lang$maxFixedArity = 0;
G__27009.cljs$lang$applyTo = (function (arglist__27011){
var args__8065__auto__ = cljs.core.seq(arglist__27011);
return G__27009__delegate(args__8065__auto__);
});
G__27009.cljs$core$IFn$_invoke$arity$variadic = G__27009__delegate;
return G__27009;
})()
;})(render_mixin__8062__auto__,class__8063__auto__))
;
return cljs.core.with_meta.call(null,ctor__8064__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__8063__auto__], null));
})();
/**
 * 
 */
game.client.page_load_test.load_test = (function (){var render_mixin__8062__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
var h = game.client.common.header.call(null,"Load Test");
return sablono.interpreter.interpret.call(null,React.createElement("div",{"className": "container"},sablono.interpreter.interpret.call(null,h),sablono.interpreter.interpret.call(null,game.client.page_load_test.progress_list.call(null,component))));
}));
var class__8063__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8062__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"load-test");
var ctor__8064__auto__ = ((function (render_mixin__8062__auto__,class__8063__auto__){
return (function() { 
var G__27012__delegate = function (args__8065__auto__){
var state__8066__auto__ = rum.core.args__GT_state.call(null,args__8065__auto__);
return rum.core.element.call(null,class__8063__auto__,state__8066__auto__,null);
};
var G__27012 = function (var_args){
var args__8065__auto__ = null;
if (arguments.length > 0) {
var G__27013__i = 0, G__27013__a = new Array(arguments.length -  0);
while (G__27013__i < G__27013__a.length) {G__27013__a[G__27013__i] = arguments[G__27013__i + 0]; ++G__27013__i;}
  args__8065__auto__ = new cljs.core.IndexedSeq(G__27013__a,0);
} 
return G__27012__delegate.call(this,args__8065__auto__);};
G__27012.cljs$lang$maxFixedArity = 0;
G__27012.cljs$lang$applyTo = (function (arglist__27014){
var args__8065__auto__ = cljs.core.seq(arglist__27014);
return G__27012__delegate(args__8065__auto__);
});
G__27012.cljs$core$IFn$_invoke$arity$variadic = G__27012__delegate;
return G__27012;
})()
;})(render_mixin__8062__auto__,class__8063__auto__))
;
return cljs.core.with_meta.call(null,ctor__8064__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__8063__auto__], null));
})();
game.client.page_load_test.start = (function game$client$page_load_test$start(component){
rum.core.mount.call(null,game.client.page_load_test.load_test.call(null,component),(new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(component)[(0)]));

return component;
});
game.client.page_load_test.stop = (function game$client$page_load_test$stop(component){
var temp__4655__auto___27015 = (new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(component)[(0)]);
if(cljs.core.truth_(temp__4655__auto___27015)){
var page_27016 = temp__4655__auto___27015;
rum.core.unmount.call(null,page_27016);
} else {
}

return component;
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
game.client.page_load_test.new_load_test_Record = (function (progress_manager,started,start_count,stop_count,__meta,__extmap,__hash){
this.progress_manager = progress_manager;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.page_load_test.new_load_test_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k27019,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__27021 = (((k27019 instanceof cljs.core.Keyword))?k27019.fqn:null);
switch (G__27021) {
case "progress-manager":
return self__.progress_manager;

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
return cljs.core.get.call(null,self__.__extmap,k27019,else__6835__auto__);

}
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.page-load-test.new-load-test-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),self__.progress_manager],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IIterable$ = true;

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27018){
var self__ = this;
var G__27018__$1 = this;
return (new cljs.core.RecordIter((0),G__27018__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.page_load_test.new_load_test_Record(self__.progress_manager,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.page_load_test.new_load_test_Record(self__.progress_manager,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__27018){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__27022 = cljs.core.keyword_identical_QMARK_;
var expr__27023 = k__6840__auto__;
if(cljs.core.truth_(pred__27022.call(null,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),expr__27023))){
return (new game.client.page_load_test.new_load_test_Record(G__27018,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27022.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__27023))){
return (new game.client.page_load_test.new_load_test_Record(self__.progress_manager,G__27018,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27022.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__27023))){
return (new game.client.page_load_test.new_load_test_Record(self__.progress_manager,self__.started,G__27018,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27022.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__27023))){
return (new game.client.page_load_test.new_load_test_Record(self__.progress_manager,self__.started,self__.start_count,G__27018,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.page_load_test.new_load_test_Record(self__.progress_manager,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__27018),null));
}
}
}
}
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),self__.progress_manager],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__27018){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.page_load_test.new_load_test_Record(self__.progress_manager,self__.started,self__.start_count,self__.stop_count,G__27018,self__.__extmap,self__.__hash));
});

game.client.page_load_test.new_load_test_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.page_load_test.new_load_test_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.page_load_test.new_load_test_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__27017){
var self__ = this;
var G__27017__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_load_test.start.call(null,G__27017__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.page_load_test.new_load_test_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__27017){
var self__ = this;
var G__27017__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_load_test.stop.call(null,G__27017__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.page_load_test.new_load_test_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"progress-manager","progress-manager",522080976,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.page_load_test.new_load_test_Record.cljs$lang$type = true;

game.client.page_load_test.new_load_test_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.page-load-test/new-load-test-Record");
});

game.client.page_load_test.new_load_test_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.page-load-test/new-load-test-Record");
});

game.client.page_load_test.__GT_new_load_test_Record = (function game$client$page_load_test$__GT_new_load_test_Record(progress_manager,started,start_count,stop_count){
return (new game.client.page_load_test.new_load_test_Record(progress_manager,started,start_count,stop_count,null,null,null));
});

game.client.page_load_test.map__GT_new_load_test_Record = (function game$client$page_load_test$map__GT_new_load_test_Record(G__27020){
return (new game.client.page_load_test.new_load_test_Record(new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551).cljs$core$IFn$_invoke$arity$1(G__27020),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__27020),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__27020),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__27020),null,cljs.core.dissoc.call(null,G__27020,new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.page_load_test.new_load_test = (function game$client$page_load_test$new_load_test(){
return com.stuartsierra.component.using.call(null,game.client.page_load_test.map__GT_new_load_test_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress-manager","progress-manager",-1118450551)], null));
});

//# sourceMappingURL=page_load_test.js.map