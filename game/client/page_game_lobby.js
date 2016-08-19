// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.page_game_lobby');
goog.require('cljs.core');
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
game.client.page_game_lobby.page_id = game.client.routing.get_page_selector.call(null,new cljs.core.Keyword(null,"game-lobby","game-lobby",-994003516));
game.client.page_game_lobby.input_handler = (function game$client$page_game_lobby$input_handler(component,event){
var keyCode = event.nativeEvent.keyCode;
if(cljs.core._EQ_.call(null,keyCode,KeyEvent.DOM_VK_RETURN)){
return promesa.core.then.call(null,game.client.sente_setup.send_cb.call(null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword("rts","chat-message","rts/chat-message",1026652357),jayq.core.$.call(null,"#chat-input").val()),((function (keyCode){
return (function (event__$1){
cljs.core.println.call(null,"chat-reply",event__$1);

return jayq.core.$.call(null,"#chat-input").val("");
});})(keyCode))
);
} else {
return null;
}
});
/**
 * 
 */
game.client.page_game_lobby.chat_input = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "id": "chat-input", "name": "chat-input", "onKeyDown": cljs.core.partial.call(null,game.client.page_game_lobby.input_handler,component), "className": "col-md-12"});
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"chat-input");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__23747__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__23747 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__23748__i = 0, G__23748__a = new Array(arguments.length -  0);
while (G__23748__i < G__23748__a.length) {G__23748__a[G__23748__i] = arguments[G__23748__i + 0]; ++G__23748__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__23748__a,0);
} 
return G__23747__delegate.call(this,args__10724__auto__);};
G__23747.cljs$lang$maxFixedArity = 0;
G__23747.cljs$lang$applyTo = (function (arglist__23749){
var args__10724__auto__ = cljs.core.seq(arglist__23749);
return G__23747__delegate(args__10724__auto__);
});
G__23747.cljs$core$IFn$_invoke$arity$variadic = G__23747__delegate;
return G__23747;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
/**
 * 
 */
game.client.page_game_lobby.user_list = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (state){
return React.createElement("ul",{"className": "user-list"},cljs.core.into_array.call(null,(function (){var iter__6990__auto__ = (function game$client$page_game_lobby$iter__23750(s__23751){
return (new cljs.core.LazySeq(null,(function (){
var s__23751__$1 = s__23751;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23751__$1);
if(temp__4657__auto__){
var s__23751__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23751__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__23751__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__23753 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__23752 = (0);
while(true){
if((i__23752 < size__6989__auto__)){
var vec__23756 = cljs.core._nth.call(null,c__6988__auto__,i__23752);
var i = cljs.core.nth.call(null,vec__23756,(0),null);
var u = cljs.core.nth.call(null,vec__23756,(1),null);
cljs.core.chunk_append.call(null,b__23753,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.common.list_item.call(null,u),i)));

var G__23758 = (i__23752 + (1));
i__23752 = G__23758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23753),game$client$page_game_lobby$iter__23750.call(null,cljs.core.chunk_rest.call(null,s__23751__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23753),null);
}
} else {
var vec__23757 = cljs.core.first.call(null,s__23751__$2);
var i = cljs.core.nth.call(null,vec__23757,(0),null);
var u = cljs.core.nth.call(null,vec__23757,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.common.list_item.call(null,u),i)),game$client$page_game_lobby$iter__23750.call(null,cljs.core.rest.call(null,s__23751__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"user-list","user-list",346594331).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state))));
})()));
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"user-list");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__23759__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__23759 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__23760__i = 0, G__23760__a = new Array(arguments.length -  0);
while (G__23760__i < G__23760__a.length) {G__23760__a[G__23760__i] = arguments[G__23760__i + 0]; ++G__23760__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__23760__a,0);
} 
return G__23759__delegate.call(this,args__10724__auto__);};
G__23759.cljs$lang$maxFixedArity = 0;
G__23759.cljs$lang$applyTo = (function (arglist__23761){
var args__10724__auto__ = cljs.core.seq(arglist__23761);
return G__23759__delegate(args__10724__auto__);
});
G__23759.cljs$core$IFn$_invoke$arity$variadic = G__23759__delegate;
return G__23759;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
/**
 * 
 */
game.client.page_game_lobby.message_list = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (state){
return React.createElement("ul",{"className": "message-list"},cljs.core.into_array.call(null,(function (){var iter__6990__auto__ = (function game$client$page_game_lobby$iter__23762(s__23763){
return (new cljs.core.LazySeq(null,(function (){
var s__23763__$1 = s__23763;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23763__$1);
if(temp__4657__auto__){
var s__23763__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23763__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__23763__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__23765 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__23764 = (0);
while(true){
if((i__23764 < size__6989__auto__)){
var vec__23768 = cljs.core._nth.call(null,c__6988__auto__,i__23764);
var i = cljs.core.nth.call(null,vec__23768,(0),null);
var msg = cljs.core.nth.call(null,vec__23768,(1),null);
cljs.core.chunk_append.call(null,b__23765,(function (){var msg__$1 = [cljs.core.str(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg))].join('');
return sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.common.list_item.call(null,msg__$1),i));
})());

var G__23770 = (i__23764 + (1));
i__23764 = G__23770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23765),game$client$page_game_lobby$iter__23762.call(null,cljs.core.chunk_rest.call(null,s__23763__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23765),null);
}
} else {
var vec__23769 = cljs.core.first.call(null,s__23763__$2);
var i = cljs.core.nth.call(null,vec__23769,(0),null);
var msg = cljs.core.nth.call(null,vec__23769,(1),null);
return cljs.core.cons.call(null,(function (){var msg__$1 = [cljs.core.str(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg))].join('');
return sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.common.list_item.call(null,msg__$1),i));
})(),game$client$page_game_lobby$iter__23762.call(null,cljs.core.rest.call(null,s__23763__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"message-list","message-list",1177365669).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state))));
})()));
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"message-list");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__23771__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__23771 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__23772__i = 0, G__23772__a = new Array(arguments.length -  0);
while (G__23772__i < G__23772__a.length) {G__23772__a[G__23772__i] = arguments[G__23772__i + 0]; ++G__23772__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__23772__a,0);
} 
return G__23771__delegate.call(this,args__10724__auto__);};
G__23771.cljs$lang$maxFixedArity = 0;
G__23771.cljs$lang$applyTo = (function (arglist__23773){
var args__10724__auto__ = cljs.core.seq(arglist__23773);
return G__23771__delegate(args__10724__auto__);
});
G__23771.cljs$core$IFn$_invoke$arity$variadic = G__23771__delegate;
return G__23771;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
/**
 * 
 */
game.client.page_game_lobby.game_lobby = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (component,state){
var routing = new cljs.core.Keyword(null,"routing","routing",1440253662).cljs$core$IFn$_invoke$arity$1(component);
var route_match = rum.core.react.call(null,new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(routing));
var game_id = (cljs.core.truth_((function (){var and__6198__auto__ = route_match;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route_match),new cljs.core.Keyword(null,"game-lobby","game-lobby",-994003516));
} else {
return and__6198__auto__;
}
})())?(function (){
cljs.core.println.call(null,"route-match",route_match);

return cljs.core.get_in.call(null,route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
})()
:"");
var div_user_list = React.createElement("div",{"className": "col-md-3"},React.createElement("h3",null,"Players"),sablono.interpreter.interpret.call(null,game.client.page_game_lobby.user_list.call(null,state)));
var div_message_list = React.createElement("div",{"className": "col-md-9"},sablono.interpreter.interpret.call(null,game.client.page_game_lobby.message_list.call(null,state)),sablono.interpreter.interpret.call(null,game.client.page_game_lobby.chat_input.call(null,component)));
var div_game_lobby_chat = React.createElement("div",{"className": "col-md-12"},React.createElement("div",null,React.createElement("h1",{"className": "page-header"},sablono.interpreter.interpret.call(null,[cljs.core.str("Game Lobby Chat for "),cljs.core.str(game_id)].join('')))),sablono.interpreter.interpret.call(null,div_message_list),sablono.interpreter.interpret.call(null,div_user_list));
var row = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),div_game_lobby_chat], null);
var content = React.createElement("div",{"className": "container"},sablono.interpreter.interpret.call(null,row));
return sablono.interpreter.interpret.call(null,content);
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"game-lobby");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__23776__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__23776 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__23777__i = 0, G__23777__a = new Array(arguments.length -  0);
while (G__23777__i < G__23777__a.length) {G__23777__a[G__23777__i] = arguments[G__23777__i + 0]; ++G__23777__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__23777__a,0);
} 
return G__23776__delegate.call(this,args__10724__auto__);};
G__23776.cljs$lang$maxFixedArity = 0;
G__23776.cljs$lang$applyTo = (function (arglist__23778){
var args__10724__auto__ = cljs.core.seq(arglist__23778);
return G__23776__delegate(args__10724__auto__);
});
G__23776.cljs$core$IFn$_invoke$arity$variadic = G__23776__delegate;
return G__23776;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
game.client.page_game_lobby.start = (function game$client$page_game_lobby$start(component){
var state = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})();
rum.core.mount.call(null,game.client.page_game_lobby.game_lobby.call(null,component,state),(jayq.core.$.call(null,game.client.page_game_lobby.page_id)[(0)]));

return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"state","state",-1988618099),state);
});
game.client.page_game_lobby.stop = (function game$client$page_game_lobby$stop(component){
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
game.client.page_game_lobby.new_game_lobby_Record = (function (config,sente_setup,routing,state,done,started,start_count,stop_count,__meta,__extmap,__hash){
this.config = config;
this.sente_setup = sente_setup;
this.routing = routing;
this.state = state;
this.done = done;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k23781,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__23783 = (((k23781 instanceof cljs.core.Keyword))?k23781.fqn:null);
switch (G__23783) {
case "config":
return self__.config;

break;
case "sente-setup":
return self__.sente_setup;

break;
case "routing":
return self__.routing;

break;
case "state":
return self__.state;

break;
case "done":
return self__.done;

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
return cljs.core.get.call(null,self__.__extmap,k23781,else__6835__auto__);

}
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.page-game-lobby.new-game-lobby-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),self__.sente_setup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing","routing",1440253662),self__.routing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done","done",-889844188),self__.done],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IIterable$ = true;

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23780){
var self__ = this;
var G__23780__$1 = this;
return (new cljs.core.RecordIter((0),G__23780__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),new cljs.core.Keyword(null,"routing","routing",1440253662),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"done","done",-889844188),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),null,new cljs.core.Keyword(null,"routing","routing",1440253662),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__23780){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__23784 = cljs.core.keyword_identical_QMARK_;
var expr__23785 = k__6840__auto__;
if(cljs.core.truth_(pred__23784.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__23785))){
return (new game.client.page_game_lobby.new_game_lobby_Record(G__23780,self__.sente_setup,self__.routing,self__.state,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23784.call(null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),expr__23785))){
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,G__23780,self__.routing,self__.state,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23784.call(null,new cljs.core.Keyword(null,"routing","routing",1440253662),expr__23785))){
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,G__23780,self__.state,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23784.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__23785))){
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,G__23780,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23784.call(null,new cljs.core.Keyword(null,"done","done",-889844188),expr__23785))){
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,G__23780,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23784.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__23785))){
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.done,G__23780,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23784.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__23785))){
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.done,self__.started,G__23780,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23784.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__23785))){
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.done,self__.started,self__.start_count,G__23780,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.done,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__23780),null));
}
}
}
}
}
}
}
}
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),self__.sente_setup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing","routing",1440253662),self__.routing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done","done",-889844188),self__.done],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__23780){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.page_game_lobby.new_game_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.done,self__.started,self__.start_count,self__.stop_count,G__23780,self__.__extmap,self__.__hash));
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.page_game_lobby.new_game_lobby_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__23779){
var self__ = this;
var G__23779__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_game_lobby.start.call(null,G__23779__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.page_game_lobby.new_game_lobby_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__23779){
var self__ = this;
var G__23779__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_game_lobby.stop.call(null,G__23779__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.page_game_lobby.new_game_lobby_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"sente-setup","sente-setup",-2011360701,null),new cljs.core.Symbol(null,"routing","routing",-1214182107,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.page_game_lobby.new_game_lobby_Record.cljs$lang$type = true;

game.client.page_game_lobby.new_game_lobby_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.page-game-lobby/new-game-lobby-Record");
});

game.client.page_game_lobby.new_game_lobby_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.page-game-lobby/new-game-lobby-Record");
});

game.client.page_game_lobby.__GT_new_game_lobby_Record = (function game$client$page_game_lobby$__GT_new_game_lobby_Record(config,sente_setup,routing,state,done,started,start_count,stop_count){
return (new game.client.page_game_lobby.new_game_lobby_Record(config,sente_setup,routing,state,done,started,start_count,stop_count,null,null,null));
});

game.client.page_game_lobby.map__GT_new_game_lobby_Record = (function game$client$page_game_lobby$map__GT_new_game_lobby_Record(G__23782){
return (new game.client.page_game_lobby.new_game_lobby_Record(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__23782),new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(G__23782),new cljs.core.Keyword(null,"routing","routing",1440253662).cljs$core$IFn$_invoke$arity$1(G__23782),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__23782),new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(G__23782),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__23782),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__23782),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__23782),null,cljs.core.dissoc.call(null,G__23782,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),new cljs.core.Keyword(null,"routing","routing",1440253662),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.page_game_lobby.new_game_lobby = (function game$client$page_game_lobby$new_game_lobby(){
return com.stuartsierra.component.using.call(null,game.client.page_game_lobby.map__GT_new_game_lobby_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),new cljs.core.Keyword(null,"routing","routing",1440253662)], null));
});

//# sourceMappingURL=page_game_lobby.js.map