// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.worker.core');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('game.client.math');
goog.require('game.worker.message');
goog.require('game.shared.state');
cljs.core.enable_console_print_BANG_.call(null);
game.worker.core.hello = (function game$worker$core$hello(){
return cljs.core.println.call(null,"hello world");
});
if(typeof game.worker.core.system !== 'undefined'){
} else {
game.worker.core.system = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
game.shared.state.s_add_component.call(null,game.worker.core.system,new cljs.core.Keyword(null,"core","core",-86019209),game.worker.message.new_core.call(null));
game.worker.core.worker_main = (function game$worker$core$worker_main(){
game.worker.core.hello.call(null);

return game.shared.state.with_simple_cause.call(null,(function (){
return cljs.core.swap_BANG_.call(null,game.worker.core.system,com.stuartsierra.component.start_system);
}));
});
if((function (){var self = this;
return (void 0 === self.document);
})()){
game.worker.core.worker_main.call(null);
} else {
}

//# sourceMappingURL=core.js.map