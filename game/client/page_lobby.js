// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.page_lobby');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('game.client.sente_setup');
goog.require('promesa.core');
goog.require('game.client.routing');
goog.require('jayq.core');
goog.require('game.shared.schema');
goog.require('rum.core');
goog.require('sablono.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('clojure.string');
goog.require('game.client.common');
game.client.page_lobby.select_list_item = (function game$client$page_lobby$select_list_item(event){
var target = jayq.core.$.call(null,event.target);
target.siblings().removeClass("selected");

return target.toggleClass("selected");
});
game.client.page_lobby.format_game_list = (function game$client$page_lobby$format_game_list(game_list){
return cljs.core.doall.call(null,(function (){var iter__6990__auto__ = (function game$client$page_lobby$format_game_list_$_iter__24014(s__24015){
return (new cljs.core.LazySeq(null,(function (){
var s__24015__$1 = s__24015;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24015__$1);
if(temp__4657__auto__){
var s__24015__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24015__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__24015__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__24017 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__24016 = (0);
while(true){
if((i__24016 < size__6989__auto__)){
var gameid = cljs.core._nth.call(null,c__6988__auto__,i__24016);
cljs.core.chunk_append.call(null,b__24017,(function (){var g = cljs.core.get.call(null,game_list,gameid);
var players = [cljs.core.str("("),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(g))),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"max-player-count","max-player-count",516742756).cljs$core$IFn$_invoke$arity$1(g)),cljs.core.str(")")].join('');
return rum.core.with_key.call(null,game.client.common.list_item.call(null,[cljs.core.str(players),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(g)),cljs.core.str(": "),cljs.core.str(clojure.string.join.call(null,",",cljs.core.map.call(null,((function (i__24016,g,players,gameid,c__6988__auto__,size__6989__auto__,b__24017,s__24015__$2,temp__4657__auto__){
return (function (p1__24009_SHARP_){
return new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(p1__24009_SHARP_);
});})(i__24016,g,players,gameid,c__6988__auto__,size__6989__auto__,b__24017,s__24015__$2,temp__4657__auto__))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(g)))))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"on-click","on-click",1632826543),game.client.page_lobby.select_list_item], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(g));
})());

var G__24018 = (i__24016 + (1));
i__24016 = G__24018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24017),game$client$page_lobby$format_game_list_$_iter__24014.call(null,cljs.core.chunk_rest.call(null,s__24015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24017),null);
}
} else {
var gameid = cljs.core.first.call(null,s__24015__$2);
return cljs.core.cons.call(null,(function (){var g = cljs.core.get.call(null,game_list,gameid);
var players = [cljs.core.str("("),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(g))),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"max-player-count","max-player-count",516742756).cljs$core$IFn$_invoke$arity$1(g)),cljs.core.str(")")].join('');
return rum.core.with_key.call(null,game.client.common.list_item.call(null,[cljs.core.str(players),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(g)),cljs.core.str(": "),cljs.core.str(clojure.string.join.call(null,",",cljs.core.map.call(null,((function (g,players,gameid,s__24015__$2,temp__4657__auto__){
return (function (p1__24009_SHARP_){
return new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(p1__24009_SHARP_);
});})(g,players,gameid,s__24015__$2,temp__4657__auto__))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(g)))))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"on-click","on-click",1632826543),game.client.page_lobby.select_list_item], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(g));
})(),game$client$page_lobby$format_game_list_$_iter__24014.call(null,cljs.core.rest.call(null,s__24015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,cljs.core.keys.call(null,game_list));
})());
});
/**
 * 
 */
game.client.page_lobby.game_list = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (state){
return sablono.interpreter.interpret.call(null,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"game-list","game-list",1562205445).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state));
if(cljs.core.truth_(temp__4655__auto__)){
var game_list = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"game-list col-md-9"], null),game.client.page_lobby.format_game_list.call(null,game_list)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No active games"], null);
}
})());
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"game-list");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__24019__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__24019 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__24020__i = 0, G__24020__a = new Array(arguments.length -  0);
while (G__24020__i < G__24020__a.length) {G__24020__a[G__24020__i] = arguments[G__24020__i + 0]; ++G__24020__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__24020__a,0);
} 
return G__24019__delegate.call(this,args__10724__auto__);};
G__24019.cljs$lang$maxFixedArity = 0;
G__24019.cljs$lang$applyTo = (function (arglist__24021){
var args__10724__auto__ = cljs.core.seq(arglist__24021);
return G__24019__delegate(args__10724__auto__);
});
G__24019.cljs$core$IFn$_invoke$arity$variadic = G__24019__delegate;
return G__24019;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
/**
 * 
 */
game.client.page_lobby.user_list = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (state){
return React.createElement("ul",{"className": "user-list"},cljs.core.into_array.call(null,(function (){var iter__6990__auto__ = (function game$client$page_lobby$iter__24022(s__24023){
return (new cljs.core.LazySeq(null,(function (){
var s__24023__$1 = s__24023;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24023__$1);
if(temp__4657__auto__){
var s__24023__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24023__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__24023__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__24025 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__24024 = (0);
while(true){
if((i__24024 < size__6989__auto__)){
var vec__24028 = cljs.core._nth.call(null,c__6988__auto__,i__24024);
var i = cljs.core.nth.call(null,vec__24028,(0),null);
var u = cljs.core.nth.call(null,vec__24028,(1),null);
cljs.core.chunk_append.call(null,b__24025,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.common.list_item.call(null,new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(u)),i)));

var G__24030 = (i__24024 + (1));
i__24024 = G__24030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24025),game$client$page_lobby$iter__24022.call(null,cljs.core.chunk_rest.call(null,s__24023__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24025),null);
}
} else {
var vec__24029 = cljs.core.first.call(null,s__24023__$2);
var i = cljs.core.nth.call(null,vec__24029,(0),null);
var u = cljs.core.nth.call(null,vec__24029,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.common.list_item.call(null,new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(u)),i)),game$client$page_lobby$iter__24022.call(null,cljs.core.rest.call(null,s__24023__$2)));
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
var G__24031__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__24031 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__24032__i = 0, G__24032__a = new Array(arguments.length -  0);
while (G__24032__i < G__24032__a.length) {G__24032__a[G__24032__i] = arguments[G__24032__i + 0]; ++G__24032__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__24032__a,0);
} 
return G__24031__delegate.call(this,args__10724__auto__);};
G__24031.cljs$lang$maxFixedArity = 0;
G__24031.cljs$lang$applyTo = (function (arglist__24033){
var args__10724__auto__ = cljs.core.seq(arglist__24033);
return G__24031__delegate(args__10724__auto__);
});
G__24031.cljs$core$IFn$_invoke$arity$variadic = G__24031__delegate;
return G__24031;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
/**
 * 
 */
game.client.page_lobby.message_list = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (state){
return React.createElement("ul",{"className": "message-list"},cljs.core.into_array.call(null,(function (){var iter__6990__auto__ = (function game$client$page_lobby$iter__24034(s__24035){
return (new cljs.core.LazySeq(null,(function (){
var s__24035__$1 = s__24035;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24035__$1);
if(temp__4657__auto__){
var s__24035__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24035__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__24035__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__24037 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__24036 = (0);
while(true){
if((i__24036 < size__6989__auto__)){
var vec__24040 = cljs.core._nth.call(null,c__6988__auto__,i__24036);
var i = cljs.core.nth.call(null,vec__24040,(0),null);
var msg = cljs.core.nth.call(null,vec__24040,(1),null);
cljs.core.chunk_append.call(null,b__24037,(function (){var msg__$1 = [cljs.core.str(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg))].join('');
return sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.common.list_item.call(null,msg__$1),i));
})());

var G__24042 = (i__24036 + (1));
i__24036 = G__24042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24037),game$client$page_lobby$iter__24034.call(null,cljs.core.chunk_rest.call(null,s__24035__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24037),null);
}
} else {
var vec__24041 = cljs.core.first.call(null,s__24035__$2);
var i = cljs.core.nth.call(null,vec__24041,(0),null);
var msg = cljs.core.nth.call(null,vec__24041,(1),null);
return cljs.core.cons.call(null,(function (){var msg__$1 = [cljs.core.str(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg))].join('');
return sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,game.client.common.list_item.call(null,msg__$1),i));
})(),game$client$page_lobby$iter__24034.call(null,cljs.core.rest.call(null,s__24035__$2)));
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
var G__24043__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__24043 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__24044__i = 0, G__24044__a = new Array(arguments.length -  0);
while (G__24044__i < G__24044__a.length) {G__24044__a[G__24044__i] = arguments[G__24044__i + 0]; ++G__24044__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__24044__a,0);
} 
return G__24043__delegate.call(this,args__10724__auto__);};
G__24043.cljs$lang$maxFixedArity = 0;
G__24043.cljs$lang$applyTo = (function (arglist__24045){
var args__10724__auto__ = cljs.core.seq(arglist__24045);
return G__24043__delegate(args__10724__auto__);
});
G__24043.cljs$core$IFn$_invoke$arity$variadic = G__24043__delegate;
return G__24043;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
game.client.page_lobby.input_handler = (function game$client$page_lobby$input_handler(component,event){
var keyCode = event.nativeEvent.keyCode;
var timeout = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sente","sente",-453568614),new cljs.core.Keyword(null,"request-timeout","request-timeout",-2047539823)], null));
if(cljs.core._EQ_.call(null,keyCode,KeyEvent.DOM_VK_RETURN)){
return promesa.core.then.call(null,game.client.sente_setup.send_cb.call(null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword("rts","chat-message","rts/chat-message",1026652357),jayq.core.$.call(null,"#chat-input").val()),((function (keyCode,timeout){
return (function (event__$1){
cljs.core.println.call(null,"chat-reply",event__$1);

return jayq.core.$.call(null,"#chat-input").val("");
});})(keyCode,timeout))
);
} else {
return null;
}
});
/**
 * 
 */
game.client.page_lobby.chat_input = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "id": "chat-input", "name": "chat-input", "onKeyDown": cljs.core.partial.call(null,game.client.page_lobby.input_handler,component), "className": "col-md-12"});
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"chat-input");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__24046__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__24046 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__24047__i = 0, G__24047__a = new Array(arguments.length -  0);
while (G__24047__i < G__24047__a.length) {G__24047__a[G__24047__i] = arguments[G__24047__i + 0]; ++G__24047__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__24047__a,0);
} 
return G__24046__delegate.call(this,args__10724__auto__);};
G__24046.cljs$lang$maxFixedArity = 0;
G__24046.cljs$lang$applyTo = (function (arglist__24048){
var args__10724__auto__ = cljs.core.seq(arglist__24048);
return G__24046__delegate(args__10724__auto__);
});
G__24046.cljs$core$IFn$_invoke$arity$variadic = G__24046__delegate;
return G__24046;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
game.client.page_lobby.new_game_handler = (function game$client$page_lobby$new_game_handler(component,event){
cljs.core.println.call(null,"new-game");

return game.client.sente_setup.send_cb.call(null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword("rts","new-game","rts/new-game",167358399),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * 
 */
game.client.page_lobby.new_game = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
return React.createElement("button",{"type": "button", "onClick": cljs.core.partial.call(null,game.client.page_lobby.new_game_handler,component), "className": "btn btn-default btn-lg btn-outline"},"New Game");
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"new-game");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__24049__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__24049 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__24050__i = 0, G__24050__a = new Array(arguments.length -  0);
while (G__24050__i < G__24050__a.length) {G__24050__a[G__24050__i] = arguments[G__24050__i + 0]; ++G__24050__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__24050__a,0);
} 
return G__24049__delegate.call(this,args__10724__auto__);};
G__24049.cljs$lang$maxFixedArity = 0;
G__24049.cljs$lang$applyTo = (function (arglist__24051){
var args__10724__auto__ = cljs.core.seq(arglist__24051);
return G__24049__delegate(args__10724__auto__);
});
G__24049.cljs$core$IFn$_invoke$arity$variadic = G__24049__delegate;
return G__24049;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
game.client.page_lobby.join_game_handler = (function game$client$page_lobby$join_game_handler(component,event){
var temp__4655__auto__ = jayq.core.$.call(null,".game-list .selected").attr("id");
if(cljs.core.truth_(temp__4655__auto__)){
var game_id = temp__4655__auto__;
return promesa.core.then.call(null,game.client.sente_setup.send_cb.call(null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword("rts","join-game","rts/join-game",1384703885),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-id","game-id",385578016),game_id], null)),((function (game_id,temp__4655__auto__){
return (function (reply){
cljs.core.println.call(null,"join-game",reply);

return game.client.routing.change_page.call(null,[cljs.core.str("#game-lobby/"),cljs.core.str(game_id),cljs.core.str("/")].join(''));
});})(game_id,temp__4655__auto__))
);
} else {
return null;
}
});
/**
 * 
 */
game.client.page_lobby.join_game = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (component){
return React.createElement("button",{"type": "button", "onClick": cljs.core.partial.call(null,game.client.page_lobby.join_game_handler,component), "className": "btn btn-default btn-lg btn-outline"},"Join Game");
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"join-game");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__24052__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__24052 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__24053__i = 0, G__24053__a = new Array(arguments.length -  0);
while (G__24053__i < G__24053__a.length) {G__24053__a[G__24053__i] = arguments[G__24053__i + 0]; ++G__24053__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__24053__a,0);
} 
return G__24052__delegate.call(this,args__10724__auto__);};
G__24052.cljs$lang$maxFixedArity = 0;
G__24052.cljs$lang$applyTo = (function (arglist__24054){
var args__10724__auto__ = cljs.core.seq(arglist__24054);
return G__24052__delegate(args__10724__auto__);
});
G__24052.cljs$core$IFn$_invoke$arity$variadic = G__24052__delegate;
return G__24052;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
/**
 * 
 */
game.client.page_lobby.lobby = (function (){var render_mixin__10721__auto__ = rum.core.render__GT_mixin.call(null,(function (component,state){
var div_user_list = React.createElement("div",{"className": "col-md-3"},React.createElement("h3",null,"Players"),sablono.interpreter.interpret.call(null,game.client.page_lobby.user_list.call(null,state)));
var div_message_list = React.createElement("div",{"className": "col-md-9"},sablono.interpreter.interpret.call(null,game.client.page_lobby.message_list.call(null,state)),sablono.interpreter.interpret.call(null,game.client.page_lobby.chat_input.call(null,component)));
var div_game_buttons = React.createElement("div",{"role": "group", "className": "btn-group game-buttons col-md-12"},sablono.interpreter.interpret.call(null,game.client.page_lobby.new_game.call(null,component)),sablono.interpreter.interpret.call(null,game.client.page_lobby.join_game.call(null,component)));
var div_game_list = React.createElement("div",{"className": "col-md-12"},React.createElement("div",{"className": "col-md-9"},sablono.interpreter.interpret.call(null,game.client.common.header.call(null,"Games")),sablono.interpreter.interpret.call(null,game.client.page_lobby.game_list.call(null,state)),sablono.interpreter.interpret.call(null,div_game_buttons)),React.createElement("div",{"className": "col-md-3"},sablono.interpreter.interpret.call(null,game.client.common.header.call(null,"Profile")),React.createElement("a",{"href": "logout"},"Logout")));
var div_lobby_chat = React.createElement("div",{"className": "col-md-12"},sablono.interpreter.interpret.call(null,game.client.common.header.call(null,"Lobby Chat")),sablono.interpreter.interpret.call(null,div_message_list),sablono.interpreter.interpret.call(null,div_user_list));
var row1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),div_game_list], null);
var row2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),div_lobby_chat], null);
var content = React.createElement("div",{"className": "container"},sablono.interpreter.interpret.call(null,row1),sablono.interpreter.interpret.call(null,row2));
return sablono.interpreter.interpret.call(null,content);
}));
var class__10722__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__10721__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"lobby");
var ctor__10723__auto__ = ((function (render_mixin__10721__auto__,class__10722__auto__){
return (function() { 
var G__24059__delegate = function (args__10724__auto__){
var state__10725__auto__ = rum.core.args__GT_state.call(null,args__10724__auto__);
return rum.core.element.call(null,class__10722__auto__,state__10725__auto__,null);
};
var G__24059 = function (var_args){
var args__10724__auto__ = null;
if (arguments.length > 0) {
var G__24060__i = 0, G__24060__a = new Array(arguments.length -  0);
while (G__24060__i < G__24060__a.length) {G__24060__a[G__24060__i] = arguments[G__24060__i + 0]; ++G__24060__i;}
  args__10724__auto__ = new cljs.core.IndexedSeq(G__24060__a,0);
} 
return G__24059__delegate.call(this,args__10724__auto__);};
G__24059.cljs$lang$maxFixedArity = 0;
G__24059.cljs$lang$applyTo = (function (arglist__24061){
var args__10724__auto__ = cljs.core.seq(arglist__24061);
return G__24059__delegate(args__10724__auto__);
});
G__24059.cljs$core$IFn$_invoke$arity$variadic = G__24059__delegate;
return G__24059;
})()
;})(render_mixin__10721__auto__,class__10722__auto__))
;
return cljs.core.with_meta.call(null,ctor__10723__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__10722__auto__], null));
})();
game.client.page_lobby.update_user_list = (function game$client$page_lobby$update_user_list(state,message){
return cljs.core.swap_BANG_.call(null,state,(function (p1__24062_SHARP_){
return cljs.core.assoc_in.call(null,p1__24062_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-list","user-list",346594331)], null),game.shared.schema.validate_user_list.call(null,message));
}));
});
game.client.page_lobby.update_game_list = (function game$client$page_lobby$update_game_list(state,message){
return cljs.core.swap_BANG_.call(null,state,(function (p1__24063_SHARP_){
return cljs.core.assoc_in.call(null,p1__24063_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-list","game-list",1562205445)], null),game.shared.schema.validate_game_list.call(null,message));
}));
});
game.client.page_lobby.update_message_list = (function game$client$page_lobby$update_message_list(state,message){
return cljs.core.swap_BANG_.call(null,state,(function (state__$1){
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-list","message-list",1177365669)], null),(function (mlist){
return cljs.core.conj.call(null,cljs.core.subvec.call(null,mlist,(function (){var x__6541__auto__ = (0);
var y__6542__auto__ = (cljs.core.count.call(null,mlist) - (20));
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})()),game.shared.schema.validate_chat_message.call(null,message));
}));
}));
});
game.client.page_lobby.start = (function game$client$page_lobby$start(component){
var state = (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-list","user-list",346594331),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"message-list","message-list",1177365669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"game-list","game-list",1562205445),cljs.core.PersistentVector.EMPTY], null));
}
})();
var sente_setup = new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(component);
game.client.sente_setup.register_handler.call(null,sente_setup,new cljs.core.Keyword("rts","user-list","rts/user-list",347564428),cljs.core.partial.call(null,game.client.page_lobby.update_user_list,state));

game.client.sente_setup.register_handler.call(null,sente_setup,new cljs.core.Keyword("rts","game-list","rts/game-list",1562321036),cljs.core.partial.call(null,game.client.page_lobby.update_game_list,state));

game.client.sente_setup.register_handler.call(null,sente_setup,new cljs.core.Keyword("rts","chat-message","rts/chat-message",1026652357),cljs.core.partial.call(null,game.client.page_lobby.update_message_list,state));

rum.core.mount.call(null,game.client.page_lobby.lobby.call(null,component,state),(new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(component)[(0)]));

return cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"state","state",-1988618099),state);
});
game.client.page_lobby.stop = (function game$client$page_lobby$stop(component){
var temp__4655__auto___24064 = (new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(component)[(0)]);
if(cljs.core.truth_(temp__4655__auto___24064)){
var page_24065 = temp__4655__auto___24064;
rum.core.unmount.call(null,page_24065);
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
game.client.page_lobby.new_lobby_Record = (function (config,sente_setup,routing,state,started,start_count,stop_count,__meta,__extmap,__hash){
this.config = config;
this.sente_setup = sente_setup;
this.routing = routing;
this.state = state;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.page_lobby.new_lobby_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k24068,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__24070 = (((k24068 instanceof cljs.core.Keyword))?k24068.fqn:null);
switch (G__24070) {
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
return cljs.core.get.call(null,self__.__extmap,k24068,else__6835__auto__);

}
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.page-lobby.new-lobby-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),self__.sente_setup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing","routing",1440253662),self__.routing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IIterable$ = true;

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24067){
var self__ = this;
var G__24067__$1 = this;
return (new cljs.core.RecordIter((0),G__24067__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),new cljs.core.Keyword(null,"routing","routing",1440253662),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),null,new cljs.core.Keyword(null,"routing","routing",1440253662),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__24067){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__24071 = cljs.core.keyword_identical_QMARK_;
var expr__24072 = k__6840__auto__;
if(cljs.core.truth_(pred__24071.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__24072))){
return (new game.client.page_lobby.new_lobby_Record(G__24067,self__.sente_setup,self__.routing,self__.state,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24071.call(null,new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),expr__24072))){
return (new game.client.page_lobby.new_lobby_Record(self__.config,G__24067,self__.routing,self__.state,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24071.call(null,new cljs.core.Keyword(null,"routing","routing",1440253662),expr__24072))){
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,G__24067,self__.state,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24071.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__24072))){
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,self__.routing,G__24067,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24071.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__24072))){
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,G__24067,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24071.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__24072))){
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.started,G__24067,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24071.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__24072))){
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.started,self__.start_count,G__24067,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__24067),null));
}
}
}
}
}
}
}
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),self__.sente_setup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routing","routing",1440253662),self__.routing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__24067){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.page_lobby.new_lobby_Record(self__.config,self__.sente_setup,self__.routing,self__.state,self__.started,self__.start_count,self__.stop_count,G__24067,self__.__extmap,self__.__hash));
});

game.client.page_lobby.new_lobby_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.page_lobby.new_lobby_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.page_lobby.new_lobby_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__24066){
var self__ = this;
var G__24066__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_lobby.start.call(null,G__24066__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.page_lobby.new_lobby_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__24066){
var self__ = this;
var G__24066__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,game.client.page_lobby.stop.call(null,G__24066__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.page_lobby.new_lobby_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"sente-setup","sente-setup",-2011360701,null),new cljs.core.Symbol(null,"routing","routing",-1214182107,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.page_lobby.new_lobby_Record.cljs$lang$type = true;

game.client.page_lobby.new_lobby_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.page-lobby/new-lobby-Record");
});

game.client.page_lobby.new_lobby_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.page-lobby/new-lobby-Record");
});

game.client.page_lobby.__GT_new_lobby_Record = (function game$client$page_lobby$__GT_new_lobby_Record(config,sente_setup,routing,state,started,start_count,stop_count){
return (new game.client.page_lobby.new_lobby_Record(config,sente_setup,routing,state,started,start_count,stop_count,null,null,null));
});

game.client.page_lobby.map__GT_new_lobby_Record = (function game$client$page_lobby$map__GT_new_lobby_Record(G__24069){
return (new game.client.page_lobby.new_lobby_Record(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__24069),new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068).cljs$core$IFn$_invoke$arity$1(G__24069),new cljs.core.Keyword(null,"routing","routing",1440253662).cljs$core$IFn$_invoke$arity$1(G__24069),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__24069),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__24069),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__24069),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__24069),null,cljs.core.dissoc.call(null,G__24069,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),new cljs.core.Keyword(null,"routing","routing",1440253662),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.page_lobby.new_lobby = (function game$client$page_lobby$new_lobby(){
return com.stuartsierra.component.using.call(null,game.client.page_lobby.map__GT_new_lobby_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sente-setup","sente-setup",643075068),new cljs.core.Keyword(null,"routing","routing",1440253662)], null));
});

//# sourceMappingURL=page_lobby.js.map