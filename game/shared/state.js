// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.shared.state');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
game.shared.state.s_add_component = (function game$shared$state$s_add_component(local_system,k,v){
if(cljs.core.not.call(null,k.call(null,cljs.core.deref.call(null,local_system)))){
return cljs.core.swap_BANG_.call(null,local_system,(function (p1__12133_SHARP_){
return cljs.core.assoc.call(null,p1__12133_SHARP_,k,v);
}));
} else {
return null;
}
});
game.shared.state.s_readd_component = (function game$shared$state$s_readd_component(local_system,k,v){
if(cljs.core.truth_(k.call(null,cljs.core.deref.call(null,local_system)))){
cljs.core.println.call(null,"stopping component",k);
} else {
com.stuartsierra.component.stop.call(null,k);
}

return cljs.core.swap_BANG_.call(null,local_system,(function (p1__12134_SHARP_){
return cljs.core.assoc.call(null,p1__12134_SHARP_,k,v);
}));
});
game.shared.state.with_simple_cause = (function game$shared$state$with_simple_cause(f){
try{return f.call(null);
}catch (e12136){if((e12136 instanceof Object)){
var e = e12136;
var simple_e = com.stuartsierra.component.ex_without_components.call(null,e);
if(cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/Missing dependency/,(simple_e["message"])))){
throw simple_e;
} else {
console.log(simple_e);

console.log((simple_e["cause"]));

throw (simple_e["cause"]);
}
} else {
throw e12136;

}
}});

//# sourceMappingURL=state.js.map