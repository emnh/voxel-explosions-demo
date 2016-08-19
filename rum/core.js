// Compiled by ClojureScript 1.8.40 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.utils');
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error("Assert failed: (sequential? classes)"));
}

var init = rum.utils.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.utils.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.utils.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__8625_SHARP_,p2__8624_SHARP_){
return p2__8624_SHARP_.call(null,p1__8625_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.utils.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.utils.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.utils.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var class_properties = cljs.core.reduce.call(null,cljs.core.merge,rum.utils.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),classes));
return React.createClass(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__8627_SHARP_,p2__8626_SHARP_){
return p2__8626_SHARP_.call(null,old_state,p1__8627_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__6210__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__8628_SHARP_){
return p1__8628_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__8631 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__8631,(0),null);
var next_state = cljs.core.nth.call(null,vec__8631,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__8629_SHARP_){
return p1__8629_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.utils.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.utils.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties)));
});
rum.core.schedule = (function (){var or__6210__auto__ = (function (){var and__6198__auto__ = typeof window !== 'undefined';
if(and__6198__auto__){
var or__6210__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
var or__6210__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__6210__auto____$2)){
return or__6210__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return ((function (or__6210__auto__){
return (function (p1__8632_SHARP_){
return setTimeout(p1__8632_SHARP_,(16));
});
;})(or__6210__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__8639 = cljs.core.seq.call(null,queue);
var chunk__8641 = null;
var count__8642 = (0);
var i__8643 = (0);
while(true){
if((i__8643 < count__8642)){
var comp = cljs.core._nth.call(null,chunk__8641,i__8643);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__8645 = seq__8639;
var G__8646 = chunk__8641;
var G__8647 = count__8642;
var G__8648 = (i__8643 + (1));
seq__8639 = G__8645;
chunk__8641 = G__8646;
count__8642 = G__8647;
i__8643 = G__8648;
continue;
} else {
var G__8649 = seq__8639;
var G__8650 = chunk__8641;
var G__8651 = count__8642;
var G__8652 = (i__8643 + (1));
seq__8639 = G__8649;
chunk__8641 = G__8650;
count__8642 = G__8651;
i__8643 = G__8652;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8639);
if(temp__4657__auto__){
var seq__8639__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8639__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__8639__$1);
var G__8653 = cljs.core.chunk_rest.call(null,seq__8639__$1);
var G__8654 = c__7021__auto__;
var G__8655 = cljs.core.count.call(null,c__7021__auto__);
var G__8656 = (0);
seq__8639 = G__8653;
chunk__8641 = G__8654;
count__8642 = G__8655;
i__8643 = G__8656;
continue;
} else {
var comp = cljs.core.first.call(null,seq__8639__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__8657 = cljs.core.next.call(null,seq__8639__$1);
var G__8658 = null;
var G__8659 = (0);
var G__8660 = (0);
seq__8639 = G__8657;
chunk__8641 = G__8658;
count__8642 = G__8659;
i__8643 = G__8660;
continue;
} else {
var G__8661 = cljs.core.next.call(null,seq__8639__$1);
var G__8662 = null;
var G__8663 = (0);
var G__8664 = (0);
seq__8639 = G__8661;
chunk__8641 = G__8662;
count__8642 = G__8663;
i__8643 = G__8664;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return ReactDOM.render(component,node);
});
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__7286__auto__ = [];
var len__7279__auto___8670 = arguments.length;
var i__7280__auto___8671 = (0);
while(true){
if((i__7280__auto___8671 < len__7279__auto___8670)){
args__7286__auto__.push((arguments[i__7280__auto___8671]));

var G__8672 = (i__7280__auto___8671 + (1));
i__7280__auto___8671 = G__8672;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__8668){
var vec__8669 = p__8668;
var props = cljs.core.nth.call(null,vec__8669,(0),null);
var props__$1 = (function (){var or__6210__auto__ = props;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq8665){
var G__8666 = cljs.core.first.call(null,seq8665);
var seq8665__$1 = cljs.core.next.call(null,seq8665);
var G__8667 = cljs.core.first.call(null,seq8665__$1);
var seq8665__$2 = cljs.core.next.call(null,seq8665__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__8666,G__8667,seq8665__$2);
});
rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__7286__auto__ = [];
var len__7279__auto___8677 = arguments.length;
var i__7280__auto___8678 = (0);
while(true){
if((i__7280__auto___8678 < len__7279__auto___8677)){
args__7286__auto__.push((arguments[i__7280__auto___8678]));

var G__8679 = (i__7280__auto___8678 + (1));
i__7280__auto___8678 = G__8679;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__8675){
var vec__8676 = p__8675;
var key = cljs.core.nth.call(null,vec__8676,(0),null);
var key__$1 = (function (){var or__6210__auto__ = key;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__8676,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__8676,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__8676,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__8676,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__8676,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__8676,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq8673){
var G__8674 = cljs.core.first.call(null,seq8673);
var seq8673__$1 = cljs.core.next.call(null,seq8673);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__8674,seq8673__$1);
});
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_8680 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__8681 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__8681,(0),null);
var next_state = cljs.core.nth.call(null,vec__8681,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__8682_8694 = cljs.core.seq.call(null,old_reactions);
var chunk__8683_8695 = null;
var count__8684_8696 = (0);
var i__8685_8697 = (0);
while(true){
if((i__8685_8697 < count__8684_8696)){
var ref_8698 = cljs.core._nth.call(null,chunk__8683_8695,i__8685_8697);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_8698)){
} else {
cljs.core.remove_watch.call(null,ref_8698,key);
}

var G__8699 = seq__8682_8694;
var G__8700 = chunk__8683_8695;
var G__8701 = count__8684_8696;
var G__8702 = (i__8685_8697 + (1));
seq__8682_8694 = G__8699;
chunk__8683_8695 = G__8700;
count__8684_8696 = G__8701;
i__8685_8697 = G__8702;
continue;
} else {
var temp__4657__auto___8703 = cljs.core.seq.call(null,seq__8682_8694);
if(temp__4657__auto___8703){
var seq__8682_8704__$1 = temp__4657__auto___8703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8682_8704__$1)){
var c__7021__auto___8705 = cljs.core.chunk_first.call(null,seq__8682_8704__$1);
var G__8706 = cljs.core.chunk_rest.call(null,seq__8682_8704__$1);
var G__8707 = c__7021__auto___8705;
var G__8708 = cljs.core.count.call(null,c__7021__auto___8705);
var G__8709 = (0);
seq__8682_8694 = G__8706;
chunk__8683_8695 = G__8707;
count__8684_8696 = G__8708;
i__8685_8697 = G__8709;
continue;
} else {
var ref_8710 = cljs.core.first.call(null,seq__8682_8704__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_8710)){
} else {
cljs.core.remove_watch.call(null,ref_8710,key);
}

var G__8711 = cljs.core.next.call(null,seq__8682_8704__$1);
var G__8712 = null;
var G__8713 = (0);
var G__8714 = (0);
seq__8682_8694 = G__8711;
chunk__8683_8695 = G__8712;
count__8684_8696 = G__8713;
i__8685_8697 = G__8714;
continue;
}
} else {
}
}
break;
}

var seq__8686_8715 = cljs.core.seq.call(null,new_reactions);
var chunk__8687_8716 = null;
var count__8688_8717 = (0);
var i__8689_8718 = (0);
while(true){
if((i__8689_8718 < count__8688_8717)){
var ref_8719 = cljs.core._nth.call(null,chunk__8687_8716,i__8689_8718);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_8719)){
} else {
cljs.core.add_watch.call(null,ref_8719,key,((function (seq__8686_8715,chunk__8687_8716,count__8688_8717,i__8689_8718,ref_8719,comp,old_reactions,vec__8681,dom,next_state,new_reactions,key,_STAR_reactions_STAR_8680){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__8686_8715,chunk__8687_8716,count__8688_8717,i__8689_8718,ref_8719,comp,old_reactions,vec__8681,dom,next_state,new_reactions,key,_STAR_reactions_STAR_8680))
);
}

var G__8720 = seq__8686_8715;
var G__8721 = chunk__8687_8716;
var G__8722 = count__8688_8717;
var G__8723 = (i__8689_8718 + (1));
seq__8686_8715 = G__8720;
chunk__8687_8716 = G__8721;
count__8688_8717 = G__8722;
i__8689_8718 = G__8723;
continue;
} else {
var temp__4657__auto___8724 = cljs.core.seq.call(null,seq__8686_8715);
if(temp__4657__auto___8724){
var seq__8686_8725__$1 = temp__4657__auto___8724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8686_8725__$1)){
var c__7021__auto___8726 = cljs.core.chunk_first.call(null,seq__8686_8725__$1);
var G__8727 = cljs.core.chunk_rest.call(null,seq__8686_8725__$1);
var G__8728 = c__7021__auto___8726;
var G__8729 = cljs.core.count.call(null,c__7021__auto___8726);
var G__8730 = (0);
seq__8686_8715 = G__8727;
chunk__8687_8716 = G__8728;
count__8688_8717 = G__8729;
i__8689_8718 = G__8730;
continue;
} else {
var ref_8731 = cljs.core.first.call(null,seq__8686_8725__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_8731)){
} else {
cljs.core.add_watch.call(null,ref_8731,key,((function (seq__8686_8715,chunk__8687_8716,count__8688_8717,i__8689_8718,ref_8731,seq__8686_8725__$1,temp__4657__auto___8724,comp,old_reactions,vec__8681,dom,next_state,new_reactions,key,_STAR_reactions_STAR_8680){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__8686_8715,chunk__8687_8716,count__8688_8717,i__8689_8718,ref_8731,seq__8686_8725__$1,temp__4657__auto___8724,comp,old_reactions,vec__8681,dom,next_state,new_reactions,key,_STAR_reactions_STAR_8680))
);
}

var G__8732 = cljs.core.next.call(null,seq__8686_8725__$1);
var G__8733 = null;
var G__8734 = (0);
var G__8735 = (0);
seq__8686_8715 = G__8732;
chunk__8687_8716 = G__8733;
count__8688_8717 = G__8734;
i__8689_8718 = G__8735;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_8680;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_8736 = rum.core.reactive_key.call(null,state);
var seq__8690_8737 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__8691_8738 = null;
var count__8692_8739 = (0);
var i__8693_8740 = (0);
while(true){
if((i__8693_8740 < count__8692_8739)){
var ref_8741 = cljs.core._nth.call(null,chunk__8691_8738,i__8693_8740);
cljs.core.remove_watch.call(null,ref_8741,key_8736);

var G__8742 = seq__8690_8737;
var G__8743 = chunk__8691_8738;
var G__8744 = count__8692_8739;
var G__8745 = (i__8693_8740 + (1));
seq__8690_8737 = G__8742;
chunk__8691_8738 = G__8743;
count__8692_8739 = G__8744;
i__8693_8740 = G__8745;
continue;
} else {
var temp__4657__auto___8746 = cljs.core.seq.call(null,seq__8690_8737);
if(temp__4657__auto___8746){
var seq__8690_8747__$1 = temp__4657__auto___8746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8690_8747__$1)){
var c__7021__auto___8748 = cljs.core.chunk_first.call(null,seq__8690_8747__$1);
var G__8749 = cljs.core.chunk_rest.call(null,seq__8690_8747__$1);
var G__8750 = c__7021__auto___8748;
var G__8751 = cljs.core.count.call(null,c__7021__auto___8748);
var G__8752 = (0);
seq__8690_8737 = G__8749;
chunk__8691_8738 = G__8750;
count__8692_8739 = G__8751;
i__8693_8740 = G__8752;
continue;
} else {
var ref_8753 = cljs.core.first.call(null,seq__8690_8747__$1);
cljs.core.remove_watch.call(null,ref_8753,key_8736);

var G__8754 = cljs.core.next.call(null,seq__8690_8747__$1);
var G__8755 = null;
var G__8756 = (0);
var G__8757 = (0);
seq__8690_8737 = G__8754;
chunk__8691_8738 = G__8755;
count__8692_8739 = G__8756;
i__8693_8740 = G__8757;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
 * @implements {rum.core.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__8758_SHARP_){
return cljs.core.get_in.call(null,p1__8758_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__8759_SHARP_,p2__8760_SHARP_){
return cljs.core.assoc_in.call(null,p1__8759_SHARP_,path,p2__8760_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
return ref.setter.call(null,where,focus__$1);
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__8761_SHARP_){
if(((!((p1__8761_SHARP_ == null)))?((((p1__8761_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__8761_SHARP_.cljs$core$IDeref$))?true:(((!p1__8761_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__8761_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__8761_SHARP_))){
return cljs.core.deref.call(null,p1__8761_SHARP_);
} else {
return p1__8761_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__8764 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__8764,(0),null);
var next_state = cljs.core.nth.call(null,vec__8764,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__8765_8781 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__8767_8782 = null;
var count__8768_8783 = (0);
var i__8769_8784 = (0);
while(true){
if((i__8769_8784 < count__8768_8783)){
var arg_8785 = cljs.core._nth.call(null,chunk__8767_8782,i__8769_8784);
if(((!((arg_8785 == null)))?((((arg_8785.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_8785.cljs$core$IWatchable$))?true:(((!arg_8785.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8785):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8785))){
cljs.core.add_watch.call(null,arg_8785,rum.core.cursored_key.call(null,state),((function (seq__8765_8781,chunk__8767_8782,count__8768_8783,i__8769_8784,arg_8785){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__8765_8781,chunk__8767_8782,count__8768_8783,i__8769_8784,arg_8785))
);

var G__8786 = seq__8765_8781;
var G__8787 = chunk__8767_8782;
var G__8788 = count__8768_8783;
var G__8789 = (i__8769_8784 + (1));
seq__8765_8781 = G__8786;
chunk__8767_8782 = G__8787;
count__8768_8783 = G__8788;
i__8769_8784 = G__8789;
continue;
} else {
var G__8790 = seq__8765_8781;
var G__8791 = chunk__8767_8782;
var G__8792 = count__8768_8783;
var G__8793 = (i__8769_8784 + (1));
seq__8765_8781 = G__8790;
chunk__8767_8782 = G__8791;
count__8768_8783 = G__8792;
i__8769_8784 = G__8793;
continue;
}
} else {
var temp__4657__auto___8794 = cljs.core.seq.call(null,seq__8765_8781);
if(temp__4657__auto___8794){
var seq__8765_8795__$1 = temp__4657__auto___8794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8765_8795__$1)){
var c__7021__auto___8796 = cljs.core.chunk_first.call(null,seq__8765_8795__$1);
var G__8797 = cljs.core.chunk_rest.call(null,seq__8765_8795__$1);
var G__8798 = c__7021__auto___8796;
var G__8799 = cljs.core.count.call(null,c__7021__auto___8796);
var G__8800 = (0);
seq__8765_8781 = G__8797;
chunk__8767_8782 = G__8798;
count__8768_8783 = G__8799;
i__8769_8784 = G__8800;
continue;
} else {
var arg_8801 = cljs.core.first.call(null,seq__8765_8795__$1);
if(((!((arg_8801 == null)))?((((arg_8801.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_8801.cljs$core$IWatchable$))?true:(((!arg_8801.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8801):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8801))){
cljs.core.add_watch.call(null,arg_8801,rum.core.cursored_key.call(null,state),((function (seq__8765_8781,chunk__8767_8782,count__8768_8783,i__8769_8784,arg_8801,seq__8765_8795__$1,temp__4657__auto___8794){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__8765_8781,chunk__8767_8782,count__8768_8783,i__8769_8784,arg_8801,seq__8765_8795__$1,temp__4657__auto___8794))
);

var G__8802 = cljs.core.next.call(null,seq__8765_8795__$1);
var G__8803 = null;
var G__8804 = (0);
var G__8805 = (0);
seq__8765_8781 = G__8802;
chunk__8767_8782 = G__8803;
count__8768_8783 = G__8804;
i__8769_8784 = G__8805;
continue;
} else {
var G__8806 = cljs.core.next.call(null,seq__8765_8795__$1);
var G__8807 = null;
var G__8808 = (0);
var G__8809 = (0);
seq__8765_8781 = G__8806;
chunk__8767_8782 = G__8807;
count__8768_8783 = G__8808;
i__8769_8784 = G__8809;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__8773_8810 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__8775_8811 = null;
var count__8776_8812 = (0);
var i__8777_8813 = (0);
while(true){
if((i__8777_8813 < count__8776_8812)){
var arg_8814 = cljs.core._nth.call(null,chunk__8775_8811,i__8777_8813);
if(((!((arg_8814 == null)))?((((arg_8814.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_8814.cljs$core$IWatchable$))?true:(((!arg_8814.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8814):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8814))){
cljs.core.remove_watch.call(null,arg_8814,rum.core.cursored_key.call(null,state));

var G__8815 = seq__8773_8810;
var G__8816 = chunk__8775_8811;
var G__8817 = count__8776_8812;
var G__8818 = (i__8777_8813 + (1));
seq__8773_8810 = G__8815;
chunk__8775_8811 = G__8816;
count__8776_8812 = G__8817;
i__8777_8813 = G__8818;
continue;
} else {
var G__8819 = seq__8773_8810;
var G__8820 = chunk__8775_8811;
var G__8821 = count__8776_8812;
var G__8822 = (i__8777_8813 + (1));
seq__8773_8810 = G__8819;
chunk__8775_8811 = G__8820;
count__8776_8812 = G__8821;
i__8777_8813 = G__8822;
continue;
}
} else {
var temp__4657__auto___8823 = cljs.core.seq.call(null,seq__8773_8810);
if(temp__4657__auto___8823){
var seq__8773_8824__$1 = temp__4657__auto___8823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8773_8824__$1)){
var c__7021__auto___8825 = cljs.core.chunk_first.call(null,seq__8773_8824__$1);
var G__8826 = cljs.core.chunk_rest.call(null,seq__8773_8824__$1);
var G__8827 = c__7021__auto___8825;
var G__8828 = cljs.core.count.call(null,c__7021__auto___8825);
var G__8829 = (0);
seq__8773_8810 = G__8826;
chunk__8775_8811 = G__8827;
count__8776_8812 = G__8828;
i__8777_8813 = G__8829;
continue;
} else {
var arg_8830 = cljs.core.first.call(null,seq__8773_8824__$1);
if(((!((arg_8830 == null)))?((((arg_8830.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_8830.cljs$core$IWatchable$))?true:(((!arg_8830.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8830):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8830))){
cljs.core.remove_watch.call(null,arg_8830,rum.core.cursored_key.call(null,state));

var G__8831 = cljs.core.next.call(null,seq__8773_8824__$1);
var G__8832 = null;
var G__8833 = (0);
var G__8834 = (0);
seq__8773_8810 = G__8831;
chunk__8775_8811 = G__8832;
count__8776_8812 = G__8833;
i__8777_8813 = G__8834;
continue;
} else {
var G__8835 = cljs.core.next.call(null,seq__8773_8824__$1);
var G__8836 = null;
var G__8837 = (0);
var G__8838 = (0);
seq__8773_8810 = G__8835;
chunk__8775_8811 = G__8836;
count__8776_8812 = G__8837;
i__8777_8813 = G__8838;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=core.js.map