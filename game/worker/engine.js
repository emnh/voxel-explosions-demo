// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.worker.engine');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.ground_local');
goog.require('game.client.math');
goog.require('game.worker.state');
game.worker.engine.process = (function game$worker$engine$process(component){
var start_time = (new Date()).getTime();
var unit_count = cljs.core.deref.call(null,new cljs.core.Keyword(null,"unit-count","unit-count",-961602118).cljs$core$IFn$_invoke$arity$1(component));
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(component);
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var new_state = game.worker.state.init_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit-count","unit-count",-961602118),unit_count,new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer.slice((0))], null));
var v3 = (new THREE.Vector3());
var ground_map = cljs.core.deref.call(null,new cljs.core.Keyword(null,"map-dict","map-dict",-1110111036).cljs$core$IFn$_invoke$arity$1(component));
var seq__13792_13796 = cljs.core.seq.call(null,cljs.core.range.call(null,unit_count));
var chunk__13793_13797 = null;
var count__13794_13798 = (0);
var i__13795_13799 = (0);
while(true){
if((i__13795_13799 < count__13794_13798)){
var unit_index_13800 = cljs.core._nth.call(null,chunk__13793_13797,i__13795_13799);
var position_13801 = game.worker.state.get_position.call(null,new_state,unit_index_13800);
var bbox_13802 = game.worker.state.get_bbox.call(null,new_state,unit_index_13800);
var spread_13803 = 0.0;
var move_target_13804 = game.worker.state.get_move_target.call(null,new_state,unit_index_13800);
var x_13805 = (position_13801.x + (spread_13803 * (game.client.math.random.call(null) + -0.5)));
var z_13806 = (position_13801.z + (spread_13803 * (game.client.math.random.call(null) + -0.5)));
var y_13807 = game.client.ground_local.align_to_ground.call(null,ground_map,bbox_13802,x_13805,z_13806);
v3.set(x_13805,y_13807,z_13806);

game.worker.state.set_position.call(null,new_state,unit_index_13800,v3);

var G__13808 = seq__13792_13796;
var G__13809 = chunk__13793_13797;
var G__13810 = count__13794_13798;
var G__13811 = (i__13795_13799 + (1));
seq__13792_13796 = G__13808;
chunk__13793_13797 = G__13809;
count__13794_13798 = G__13810;
i__13795_13799 = G__13811;
continue;
} else {
var temp__4657__auto___13812 = cljs.core.seq.call(null,seq__13792_13796);
if(temp__4657__auto___13812){
var seq__13792_13813__$1 = temp__4657__auto___13812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13792_13813__$1)){
var c__7021__auto___13814 = cljs.core.chunk_first.call(null,seq__13792_13813__$1);
var G__13815 = cljs.core.chunk_rest.call(null,seq__13792_13813__$1);
var G__13816 = c__7021__auto___13814;
var G__13817 = cljs.core.count.call(null,c__7021__auto___13814);
var G__13818 = (0);
seq__13792_13796 = G__13815;
chunk__13793_13797 = G__13816;
count__13794_13798 = G__13817;
i__13795_13799 = G__13818;
continue;
} else {
var unit_index_13819 = cljs.core.first.call(null,seq__13792_13813__$1);
var position_13820 = game.worker.state.get_position.call(null,new_state,unit_index_13819);
var bbox_13821 = game.worker.state.get_bbox.call(null,new_state,unit_index_13819);
var spread_13822 = 0.0;
var move_target_13823 = game.worker.state.get_move_target.call(null,new_state,unit_index_13819);
var x_13824 = (position_13820.x + (spread_13822 * (game.client.math.random.call(null) + -0.5)));
var z_13825 = (position_13820.z + (spread_13822 * (game.client.math.random.call(null) + -0.5)));
var y_13826 = game.client.ground_local.align_to_ground.call(null,ground_map,bbox_13821,x_13824,z_13825);
v3.set(x_13824,y_13826,z_13825);

game.worker.state.set_position.call(null,new_state,unit_index_13819,v3);

var G__13827 = cljs.core.next.call(null,seq__13792_13813__$1);
var G__13828 = null;
var G__13829 = (0);
var G__13830 = (0);
seq__13792_13796 = G__13827;
chunk__13793_13797 = G__13828;
count__13794_13798 = G__13829;
i__13795_13799 = G__13830;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,state,new_state);

if(cljs.core.truth_(buffer)){
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404).cljs$core$IFn$_invoke$arity$1(component)))){
var data_13831 = {"unit-count": unit_count, "buffer": buffer};
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"poll-state","poll-state",-1238967404).cljs$core$IFn$_invoke$arity$1(component),false);

self.postMessage(["update",data_13831],[buffer]);
} else {
self.postMessage(["update",null]);
}
} else {
}

var end_time = (new Date()).getTime();
var elapsed = (end_time - start_time);
var timeout = (function (){var x__6541__auto__ = (0);
var y__6542__auto__ = ((10) - elapsed);
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})();
return setTimeout(((function (end_time,elapsed,timeout,start_time,unit_count,state,buffer,new_state,v3,ground_map){
return (function (){
return game$worker$engine$process.call(null,component);
});})(end_time,elapsed,timeout,start_time,unit_count,state,buffer,new_state,v3,ground_map))
,timeout);
});

//# sourceMappingURL=engine.js.map