// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.routing');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('bidi.bidi');
goog.require('jayq.core');
goog.require('goog.history.EventType');
goog.require('rum.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('com.stuartsierra.component');
goog.require('clojure.string');
goog.require('game.client.common');
game.client.routing.get_page_element_id = (function game$client$routing$get_page_element_id(page){
return [cljs.core.str("page-"),cljs.core.str(cljs.core.name.call(null,page))].join('');
});
game.client.routing.get_page_selector = (function game$client$routing$get_page_selector(page){
return [cljs.core.str("#"),cljs.core.str(game.client.routing.get_page_element_id.call(null,page))].join('');
});
game.client.routing.get_page_$element = (function game$client$routing$get_page_$element(page){
return jayq.core.$.call(null,game.client.routing.get_page_selector.call(null,page));
});
game.client.routing.get_page_element = (function game$client$routing$get_page_element(page){
return (jayq.core.$.call(null,game.client.routing.get_page_selector.call(null,page))[(0)]);
});
game.client.routing.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 7, ["lobby",new cljs.core.Keyword(null,"lobby","lobby",1193995861),"game",new cljs.core.Keyword(null,"game","game",-441523833),"game-test",new cljs.core.Keyword(null,"game-test","game-test",639683876),"load-test",new cljs.core.Keyword(null,"load-test","load-test",-36468821),"sente-test",new cljs.core.Keyword(null,"sente-test","sente-test",1223079739),"game-lobby/",cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),"/"], null),new cljs.core.Keyword(null,"game-lobby","game-lobby",-994003516)], true, false),"404",new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null)], null);
game.client.routing.page_list = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),bidi.bidi.route_seq.call(null,game.client.routing.routes)));
game.client.routing.get_pages = (function game$client$routing$get_pages(){
return game.client.routing.page_list;
});
/**
 * 
 */
game.client.routing.page = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (pagekey){
return React.createElement("div",{"id": game.client.routing.get_page_element_id.call(null,pagekey), "className": "top-page"});
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"page");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__10817__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__10817 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__10818__i = 0, G__10818__a = new Array(arguments.length -  0);
while (G__10818__i < G__10818__a.length) {G__10818__a[G__10818__i] = arguments[G__10818__i + 0]; ++G__10818__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__10818__a,0);
} 
return G__10817__delegate.call(this,args__10724__auto__);};
G__10817.cljs$lang$maxFixedArity = 0;
G__10817.cljs$lang$applyTo = (function (arglist__10819){
var args__10724__auto__ = cljs.core.seq(arglist__10819);
return G__10817__delegate(args__10724__auto__);
});
G__10817.cljs$core$IFn$_invoke$arity$variadic = G__10817__delegate;
return G__10817;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
/**
 * 
 */
game.client.routing.pages = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,cljs.core.into_array.call(null,(function (){var iter__6990__auto__ = (function game$client$routing$iter__10820(s__10821){
return (new cljs.core.LazySeq(null,(function (){
var s__10821__$1 = s__10821;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10821__$1);
if(temp__4657__auto__){
var s__10821__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10821__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__10821__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__10823 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__10822 = (0);
while(true){
if((i__10822 < size__6989__auto__)){
var pagekey = cljs.core._nth.call(null,c__6988__auto__,i__10822);
cljs.core.chunk_append.call(null,b__10823,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.routing.page.call(null,pagekey),cljs.core.name.call(null,pagekey))));

var G__10824 = (i__10822 + (1));
i__10822 = G__10824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10823),game$client$routing$iter__10820.call(null,cljs.core.chunk_rest.call(null,s__10821__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10823),null);
}
} else {
var pagekey = cljs.core.first.call(null,s__10821__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.routing.page.call(null,pagekey),cljs.core.name.call(null,pagekey))),game$client$routing$iter__10820.call(null,cljs.core.rest.call(null,s__10821__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,game.client.routing.get_pages.call(null));
})()));
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),null),"pages");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__10825__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__10825 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__10826__i = 0, G__10826__a = new Array(arguments.length -  0);
while (G__10826__i < G__10826__a.length) {G__10826__a[G__10826__i] = arguments[G__10826__i + 0]; ++G__10826__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__10826__a,0);
} 
return G__10825__delegate.call(this,args__10724__auto__);};
G__10825.cljs$lang$maxFixedArity = 0;
G__10825.cljs$lang$applyTo = (function (arglist__10827){
var args__10724__auto__ = cljs.core.seq(arglist__10827);
return G__10825__delegate(args__10724__auto__);
});
G__10825.cljs$core$IFn$_invoke$arity$variadic = G__10825__delegate;
return G__10825;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
game.client.routing.handle_url = (function game$client$routing$handle_url(component,url){
var seq__10832_10836 = cljs.core.seq.call(null,game.client.routing.get_pages.call(null));
var chunk__10833_10837 = null;
var count__10834_10838 = (0);
var i__10835_10839 = (0);
while(true){
if((i__10835_10839 < count__10834_10838)){
var pagekey_10840 = cljs.core._nth.call(null,chunk__10833_10837,i__10835_10839);
jayq.core.$.call(null,game.client.routing.get_page_selector.call(null,pagekey_10840)).addClass("invisible");

var G__10841 = seq__10832_10836;
var G__10842 = chunk__10833_10837;
var G__10843 = count__10834_10838;
var G__10844 = (i__10835_10839 + (1));
seq__10832_10836 = G__10841;
chunk__10833_10837 = G__10842;
count__10834_10838 = G__10843;
i__10835_10839 = G__10844;
continue;
} else {
var temp__4657__auto___10845 = cljs.core.seq.call(null,seq__10832_10836);
if(temp__4657__auto___10845){
var seq__10832_10846__$1 = temp__4657__auto___10845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10832_10846__$1)){
var c__7021__auto___10847 = cljs.core.chunk_first.call(null,seq__10832_10846__$1);
var G__10848 = cljs.core.chunk_rest.call(null,seq__10832_10846__$1);
var G__10849 = c__7021__auto___10847;
var G__10850 = cljs.core.count.call(null,c__7021__auto___10847);
var G__10851 = (0);
seq__10832_10836 = G__10848;
chunk__10833_10837 = G__10849;
count__10834_10838 = G__10850;
i__10835_10839 = G__10851;
continue;
} else {
var pagekey_10852 = cljs.core.first.call(null,seq__10832_10846__$1);
jayq.core.$.call(null,game.client.routing.get_page_selector.call(null,pagekey_10852)).addClass("invisible");

var G__10853 = cljs.core.next.call(null,seq__10832_10846__$1);
var G__10854 = null;
var G__10855 = (0);
var G__10856 = (0);
seq__10832_10836 = G__10853;
chunk__10833_10837 = G__10854;
count__10834_10838 = G__10855;
i__10835_10839 = G__10856;
continue;
}
} else {
}
}
break;
}

var route_match = new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(component);
var match = bidi.bidi.match_route.call(null,game.client.routing.routes,url);
var handler = (cljs.core.truth_(match)?new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match):new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var old_match = cljs.core.deref.call(null,route_match);
cljs.core.reset_BANG_.call(null,route_match,match);

if(cljs.core.truth_(handler.call(null,game.client.routing.page_list))){
var $page_10857 = jayq.core.$.call(null,game.client.routing.get_page_selector.call(null,handler));
$page_10857.removeClass("invisible");

if(cljs.core.not_EQ_.call(null,handler,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(old_match))){
return setTimeout(((function (route_match,match,handler,old_match){
return (function (){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478).cljs$core$IFn$_invoke$arity$1(component)).call(null,handler);
});})(route_match,match,handler,old_match))
,(0));
} else {
return null;
}
} else {
return null;
}
});
game.client.routing.change_page = (function game$client$routing$change_page(new_page){
return window.location.hash = new_page;
});
game.client.routing.start_router = (function game$client$routing$start_router(component){
var route_match = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})();
var component__$1 = cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match);
var handlers = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(component__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})();
var history = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(component__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var history = (new goog.History());
goog.events.listen(history,goog.history.EventType.NAVIGATE,((function (history,or__6210__auto__,route_match,component__$1,handlers){
return (function (p1__10858_SHARP_){
return game.client.routing.handle_url.call(null,component__$1,p1__10858_SHARP_.token);
});})(history,or__6210__auto__,route_match,component__$1,handlers))
);

var G__10860 = history;
G__10860.setEnabled(true);

return G__10860;
}
})();
rum.core.mount.call(null,game.client.routing.pages.call(null),(jayq.core.$.call(null,"#pages")[(0)]));

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"history","history",-247395220),history),new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers);
});
game.client.routing.stop_router = (function game$client$routing$stop_router(component){
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
game.client.routing.new_router_Record = (function (routing_callback,history,route_match,handlers,started,start_count,stop_count,__meta,__extmap,__hash){
this.routing_callback = routing_callback;
this.history = history;
this.route_match = route_match;
this.handlers = handlers;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.routing.new_router_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.routing.new_router_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k10863,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__10865 = (((k10863 instanceof cljs.core.Keyword))?k10863.fqn:null);
switch (G__10865) {
case "routing-callback":
return self__.routing_callback;

break;
case "history":
return self__.history;

break;
case "route-match":
return self__.route_match;

break;
case "handlers":
return self__.handlers;

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
return cljs.core.get.call(null,self__.__extmap,k10863,else__6835__auto__);

}
});

game.client.routing.new_router_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.routing.new-router-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478),self__.routing_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history","history",-247395220),self__.history],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"route-match","route-match",-1450985937),self__.route_match],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.routing.new_router_Record.prototype.cljs$core$IIterable$ = true;

game.client.routing.new_router_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10862){
var self__ = this;
var G__10862__$1 = this;
return (new cljs.core.RecordIter((0),G__10862__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.routing.new_router_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.routing.new_router_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,self__.route_match,self__.handlers,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.routing.new_router_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

game.client.routing.new_router_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.routing.new_router_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.routing.new_router_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"history","history",-247395220),null,new cljs.core.Keyword(null,"handlers","handlers",79528781),null,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,self__.route_match,self__.handlers,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.routing.new_router_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__10862){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__10866 = cljs.core.keyword_identical_QMARK_;
var expr__10867 = k__6840__auto__;
if(cljs.core.truth_(pred__10866.call(null,new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478),expr__10867))){
return (new game.client.routing.new_router_Record(G__10862,self__.history,self__.route_match,self__.handlers,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10866.call(null,new cljs.core.Keyword(null,"history","history",-247395220),expr__10867))){
return (new game.client.routing.new_router_Record(self__.routing_callback,G__10862,self__.route_match,self__.handlers,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10866.call(null,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),expr__10867))){
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,G__10862,self__.handlers,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10866.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781),expr__10867))){
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,self__.route_match,G__10862,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10866.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__10867))){
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,self__.route_match,self__.handlers,G__10862,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10866.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__10867))){
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,self__.route_match,self__.handlers,self__.started,G__10862,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10866.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__10867))){
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,self__.route_match,self__.handlers,self__.started,self__.start_count,G__10862,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,self__.route_match,self__.handlers,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__10862),null));
}
}
}
}
}
}
}
});

game.client.routing.new_router_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478),self__.routing_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history","history",-247395220),self__.history],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"route-match","route-match",-1450985937),self__.route_match],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.routing.new_router_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__10862){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.routing.new_router_Record(self__.routing_callback,self__.history,self__.route_match,self__.handlers,self__.started,self__.start_count,self__.stop_count,G__10862,self__.__extmap,self__.__hash));
});

game.client.routing.new_router_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.routing.new_router_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.routing.new_router_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__10861){
var self__ = this;
var G__10861__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.routing.start_router.call(null,G__10861__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.routing.new_router_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__10861){
var self__ = this;
var G__10861__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.routing.stop_router.call(null,G__10861__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.routing.new_router_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routing-callback","routing-callback",-2075355291,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"route-match","route-match",189545590,null),new cljs.core.Symbol(null,"handlers","handlers",1720060308,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.routing.new_router_Record.cljs$lang$type = true;

game.client.routing.new_router_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.routing/new-router-Record");
});

game.client.routing.new_router_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.routing/new-router-Record");
});

game.client.routing.__GT_new_router_Record = (function game$client$routing$__GT_new_router_Record(routing_callback,history,route_match,handlers,started,start_count,stop_count){
return (new game.client.routing.new_router_Record(routing_callback,history,route_match,handlers,started,start_count,stop_count,null,null,null));
});

game.client.routing.map__GT_new_router_Record = (function game$client$routing$map__GT_new_router_Record(G__10864){
return (new game.client.routing.new_router_Record(new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478).cljs$core$IFn$_invoke$arity$1(G__10864),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(G__10864),new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(G__10864),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(G__10864),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__10864),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__10864),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__10864),null,cljs.core.dissoc.call(null,G__10864,new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.routing.new_router = (function game$client$routing$new_router(){
return com.stuartsierra.component.using.call(null,game.client.routing.map__GT_new_router_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routing-callback","routing-callback",579080478)], null));
});
game.client.routing.game_active = (function game$client$routing$game_active(){
return cljs.core._EQ_.call(null,window.location.hash,"#game");
});

//# sourceMappingURL=routing.js.map