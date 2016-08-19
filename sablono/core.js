// Compiled by ClojureScript 1.8.40 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__14273__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__14272 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__14272,(0),null);
var body = cljs.core.nthnext.call(null,vec__14272,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__14273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14274__i = 0, G__14274__a = new Array(arguments.length -  0);
while (G__14274__i < G__14274__a.length) {G__14274__a[G__14274__i] = arguments[G__14274__i + 0]; ++G__14274__i;}
  args = new cljs.core.IndexedSeq(G__14274__a,0);
} 
return G__14273__delegate.call(this,args);};
G__14273.cljs$lang$maxFixedArity = 0;
G__14273.cljs$lang$applyTo = (function (arglist__14275){
var args = cljs.core.seq(arglist__14275);
return G__14273__delegate(args);
});
G__14273.cljs$core$IFn$_invoke$arity$variadic = G__14273__delegate;
return G__14273;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__6990__auto__ = (function sablono$core$update_arglists_$_iter__14280(s__14281){
return (new cljs.core.LazySeq(null,(function (){
var s__14281__$1 = s__14281;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14281__$1);
if(temp__4657__auto__){
var s__14281__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14281__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__14281__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__14283 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__14282 = (0);
while(true){
if((i__14282 < size__6989__auto__)){
var args = cljs.core._nth.call(null,c__6988__auto__,i__14282);
cljs.core.chunk_append.call(null,b__14283,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__14284 = (i__14282 + (1));
i__14282 = G__14284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14283),sablono$core$update_arglists_$_iter__14280.call(null,cljs.core.chunk_rest.call(null,s__14281__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14283),null);
}
} else {
var args = cljs.core.first.call(null,s__14281__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__14280.call(null,cljs.core.rest.call(null,s__14281__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7286__auto__ = [];
var len__7279__auto___14290 = arguments.length;
var i__7280__auto___14291 = (0);
while(true){
if((i__7280__auto___14291 < len__7279__auto___14290)){
args__7286__auto__.push((arguments[i__7280__auto___14291]));

var G__14292 = (i__7280__auto___14291 + (1));
i__7280__auto___14291 = G__14292;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__6990__auto__ = (function sablono$core$iter__14286(s__14287){
return (new cljs.core.LazySeq(null,(function (){
var s__14287__$1 = s__14287;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14287__$1);
if(temp__4657__auto__){
var s__14287__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14287__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__14287__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__14289 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__14288 = (0);
while(true){
if((i__14288 < size__6989__auto__)){
var style = cljs.core._nth.call(null,c__6988__auto__,i__14288);
cljs.core.chunk_append.call(null,b__14289,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__14293 = (i__14288 + (1));
i__14288 = G__14293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14289),sablono$core$iter__14286.call(null,cljs.core.chunk_rest.call(null,s__14287__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14289),null);
}
} else {
var style = cljs.core.first.call(null,s__14287__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__14286.call(null,cljs.core.rest.call(null,s__14287__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14285){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14285));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14294 = (function sablono$core$link_to14294(var_args){
var args__7286__auto__ = [];
var len__7279__auto___14297 = arguments.length;
var i__7280__auto___14298 = (0);
while(true){
if((i__7280__auto___14298 < len__7279__auto___14297)){
args__7286__auto__.push((arguments[i__7280__auto___14298]));

var G__14299 = (i__7280__auto___14298 + (1));
i__7280__auto___14298 = G__14299;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14294.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

sablono.core.link_to14294.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to14294.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14294.cljs$lang$applyTo = (function (seq14295){
var G__14296 = cljs.core.first.call(null,seq14295);
var seq14295__$1 = cljs.core.next.call(null,seq14295);
return sablono.core.link_to14294.cljs$core$IFn$_invoke$arity$variadic(G__14296,seq14295__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14294);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14300 = (function sablono$core$mail_to14300(var_args){
var args__7286__auto__ = [];
var len__7279__auto___14305 = arguments.length;
var i__7280__auto___14306 = (0);
while(true){
if((i__7280__auto___14306 < len__7279__auto___14305)){
args__7286__auto__.push((arguments[i__7280__auto___14306]));

var G__14307 = (i__7280__auto___14306 + (1));
i__7280__auto___14306 = G__14307;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14300.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

sablono.core.mail_to14300.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14303){
var vec__14304 = p__14303;
var content = cljs.core.nth.call(null,vec__14304,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6210__auto__ = content;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14300.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14300.cljs$lang$applyTo = (function (seq14301){
var G__14302 = cljs.core.first.call(null,seq14301);
var seq14301__$1 = cljs.core.next.call(null,seq14301);
return sablono.core.mail_to14300.cljs$core$IFn$_invoke$arity$variadic(G__14302,seq14301__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14300);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14308 = (function sablono$core$unordered_list14308(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__6990__auto__ = (function sablono$core$unordered_list14308_$_iter__14313(s__14314){
return (new cljs.core.LazySeq(null,(function (){
var s__14314__$1 = s__14314;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14314__$1);
if(temp__4657__auto__){
var s__14314__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14314__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__14314__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__14316 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__14315 = (0);
while(true){
if((i__14315 < size__6989__auto__)){
var x = cljs.core._nth.call(null,c__6988__auto__,i__14315);
cljs.core.chunk_append.call(null,b__14316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14317 = (i__14315 + (1));
i__14315 = G__14317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14316),sablono$core$unordered_list14308_$_iter__14313.call(null,cljs.core.chunk_rest.call(null,s__14314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14316),null);
}
} else {
var x = cljs.core.first.call(null,s__14314__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list14308_$_iter__14313.call(null,cljs.core.rest.call(null,s__14314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14308);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14318 = (function sablono$core$ordered_list14318(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__6990__auto__ = (function sablono$core$ordered_list14318_$_iter__14323(s__14324){
return (new cljs.core.LazySeq(null,(function (){
var s__14324__$1 = s__14324;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14324__$1);
if(temp__4657__auto__){
var s__14324__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14324__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__14324__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__14326 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__14325 = (0);
while(true){
if((i__14325 < size__6989__auto__)){
var x = cljs.core._nth.call(null,c__6988__auto__,i__14325);
cljs.core.chunk_append.call(null,b__14326,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14327 = (i__14325 + (1));
i__14325 = G__14327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14326),sablono$core$ordered_list14318_$_iter__14323.call(null,cljs.core.chunk_rest.call(null,s__14324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14326),null);
}
} else {
var x = cljs.core.first.call(null,s__14324__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list14318_$_iter__14323.call(null,cljs.core.rest.call(null,s__14324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14318);
/**
 * Create an image element.
 */
sablono.core.image14328 = (function sablono$core$image14328(var_args){
var args14329 = [];
var len__7279__auto___14332 = arguments.length;
var i__7280__auto___14333 = (0);
while(true){
if((i__7280__auto___14333 < len__7279__auto___14332)){
args14329.push((arguments[i__7280__auto___14333]));

var G__14334 = (i__7280__auto___14333 + (1));
i__7280__auto___14333 = G__14334;
continue;
} else {
}
break;
}

var G__14331 = args14329.length;
switch (G__14331) {
case 1:
return sablono.core.image14328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14329.length)].join('')));

}
});

sablono.core.image14328.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image14328.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image14328.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14328);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__14336_SHARP_,p2__14337_SHARP_){
return [cljs.core.str(p1__14336_SHARP_),cljs.core.str("["),cljs.core.str(p2__14337_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__14338_SHARP_,p2__14339_SHARP_){
return [cljs.core.str(p1__14338_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14339_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6210__auto__ = value;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field14340 = (function sablono$core$color_field14340(var_args){
var args14341 = [];
var len__7279__auto___14408 = arguments.length;
var i__7280__auto___14409 = (0);
while(true){
if((i__7280__auto___14409 < len__7279__auto___14408)){
args14341.push((arguments[i__7280__auto___14409]));

var G__14410 = (i__7280__auto___14409 + (1));
i__7280__auto___14409 = G__14410;
continue;
} else {
}
break;
}

var G__14343 = args14341.length;
switch (G__14343) {
case 1:
return sablono.core.color_field14340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14341.length)].join('')));

}
});

sablono.core.color_field14340.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.color_field14340.call(null,name__14261__auto__,null);
});

sablono.core.color_field14340.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.color_field14340.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14340);

/**
 * Creates a date input field.
 */
sablono.core.date_field14344 = (function sablono$core$date_field14344(var_args){
var args14345 = [];
var len__7279__auto___14412 = arguments.length;
var i__7280__auto___14413 = (0);
while(true){
if((i__7280__auto___14413 < len__7279__auto___14412)){
args14345.push((arguments[i__7280__auto___14413]));

var G__14414 = (i__7280__auto___14413 + (1));
i__7280__auto___14413 = G__14414;
continue;
} else {
}
break;
}

var G__14347 = args14345.length;
switch (G__14347) {
case 1:
return sablono.core.date_field14344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14345.length)].join('')));

}
});

sablono.core.date_field14344.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.date_field14344.call(null,name__14261__auto__,null);
});

sablono.core.date_field14344.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.date_field14344.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14344);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14348 = (function sablono$core$datetime_field14348(var_args){
var args14349 = [];
var len__7279__auto___14416 = arguments.length;
var i__7280__auto___14417 = (0);
while(true){
if((i__7280__auto___14417 < len__7279__auto___14416)){
args14349.push((arguments[i__7280__auto___14417]));

var G__14418 = (i__7280__auto___14417 + (1));
i__7280__auto___14417 = G__14418;
continue;
} else {
}
break;
}

var G__14351 = args14349.length;
switch (G__14351) {
case 1:
return sablono.core.datetime_field14348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14349.length)].join('')));

}
});

sablono.core.datetime_field14348.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.datetime_field14348.call(null,name__14261__auto__,null);
});

sablono.core.datetime_field14348.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.datetime_field14348.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14348);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14352 = (function sablono$core$datetime_local_field14352(var_args){
var args14353 = [];
var len__7279__auto___14420 = arguments.length;
var i__7280__auto___14421 = (0);
while(true){
if((i__7280__auto___14421 < len__7279__auto___14420)){
args14353.push((arguments[i__7280__auto___14421]));

var G__14422 = (i__7280__auto___14421 + (1));
i__7280__auto___14421 = G__14422;
continue;
} else {
}
break;
}

var G__14355 = args14353.length;
switch (G__14355) {
case 1:
return sablono.core.datetime_local_field14352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14353.length)].join('')));

}
});

sablono.core.datetime_local_field14352.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.datetime_local_field14352.call(null,name__14261__auto__,null);
});

sablono.core.datetime_local_field14352.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.datetime_local_field14352.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14352);

/**
 * Creates a email input field.
 */
sablono.core.email_field14356 = (function sablono$core$email_field14356(var_args){
var args14357 = [];
var len__7279__auto___14424 = arguments.length;
var i__7280__auto___14425 = (0);
while(true){
if((i__7280__auto___14425 < len__7279__auto___14424)){
args14357.push((arguments[i__7280__auto___14425]));

var G__14426 = (i__7280__auto___14425 + (1));
i__7280__auto___14425 = G__14426;
continue;
} else {
}
break;
}

var G__14359 = args14357.length;
switch (G__14359) {
case 1:
return sablono.core.email_field14356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14357.length)].join('')));

}
});

sablono.core.email_field14356.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.email_field14356.call(null,name__14261__auto__,null);
});

sablono.core.email_field14356.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.email_field14356.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14356);

/**
 * Creates a file input field.
 */
sablono.core.file_field14360 = (function sablono$core$file_field14360(var_args){
var args14361 = [];
var len__7279__auto___14428 = arguments.length;
var i__7280__auto___14429 = (0);
while(true){
if((i__7280__auto___14429 < len__7279__auto___14428)){
args14361.push((arguments[i__7280__auto___14429]));

var G__14430 = (i__7280__auto___14429 + (1));
i__7280__auto___14429 = G__14430;
continue;
} else {
}
break;
}

var G__14363 = args14361.length;
switch (G__14363) {
case 1:
return sablono.core.file_field14360.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14361.length)].join('')));

}
});

sablono.core.file_field14360.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.file_field14360.call(null,name__14261__auto__,null);
});

sablono.core.file_field14360.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.file_field14360.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14360);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14364 = (function sablono$core$hidden_field14364(var_args){
var args14365 = [];
var len__7279__auto___14432 = arguments.length;
var i__7280__auto___14433 = (0);
while(true){
if((i__7280__auto___14433 < len__7279__auto___14432)){
args14365.push((arguments[i__7280__auto___14433]));

var G__14434 = (i__7280__auto___14433 + (1));
i__7280__auto___14433 = G__14434;
continue;
} else {
}
break;
}

var G__14367 = args14365.length;
switch (G__14367) {
case 1:
return sablono.core.hidden_field14364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14365.length)].join('')));

}
});

sablono.core.hidden_field14364.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.hidden_field14364.call(null,name__14261__auto__,null);
});

sablono.core.hidden_field14364.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.hidden_field14364.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14364);

/**
 * Creates a month input field.
 */
sablono.core.month_field14368 = (function sablono$core$month_field14368(var_args){
var args14369 = [];
var len__7279__auto___14436 = arguments.length;
var i__7280__auto___14437 = (0);
while(true){
if((i__7280__auto___14437 < len__7279__auto___14436)){
args14369.push((arguments[i__7280__auto___14437]));

var G__14438 = (i__7280__auto___14437 + (1));
i__7280__auto___14437 = G__14438;
continue;
} else {
}
break;
}

var G__14371 = args14369.length;
switch (G__14371) {
case 1:
return sablono.core.month_field14368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14369.length)].join('')));

}
});

sablono.core.month_field14368.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.month_field14368.call(null,name__14261__auto__,null);
});

sablono.core.month_field14368.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.month_field14368.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14368);

/**
 * Creates a number input field.
 */
sablono.core.number_field14372 = (function sablono$core$number_field14372(var_args){
var args14373 = [];
var len__7279__auto___14440 = arguments.length;
var i__7280__auto___14441 = (0);
while(true){
if((i__7280__auto___14441 < len__7279__auto___14440)){
args14373.push((arguments[i__7280__auto___14441]));

var G__14442 = (i__7280__auto___14441 + (1));
i__7280__auto___14441 = G__14442;
continue;
} else {
}
break;
}

var G__14375 = args14373.length;
switch (G__14375) {
case 1:
return sablono.core.number_field14372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14373.length)].join('')));

}
});

sablono.core.number_field14372.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.number_field14372.call(null,name__14261__auto__,null);
});

sablono.core.number_field14372.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.number_field14372.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14372);

/**
 * Creates a password input field.
 */
sablono.core.password_field14376 = (function sablono$core$password_field14376(var_args){
var args14377 = [];
var len__7279__auto___14444 = arguments.length;
var i__7280__auto___14445 = (0);
while(true){
if((i__7280__auto___14445 < len__7279__auto___14444)){
args14377.push((arguments[i__7280__auto___14445]));

var G__14446 = (i__7280__auto___14445 + (1));
i__7280__auto___14445 = G__14446;
continue;
} else {
}
break;
}

var G__14379 = args14377.length;
switch (G__14379) {
case 1:
return sablono.core.password_field14376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14377.length)].join('')));

}
});

sablono.core.password_field14376.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.password_field14376.call(null,name__14261__auto__,null);
});

sablono.core.password_field14376.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.password_field14376.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14376);

/**
 * Creates a range input field.
 */
sablono.core.range_field14380 = (function sablono$core$range_field14380(var_args){
var args14381 = [];
var len__7279__auto___14448 = arguments.length;
var i__7280__auto___14449 = (0);
while(true){
if((i__7280__auto___14449 < len__7279__auto___14448)){
args14381.push((arguments[i__7280__auto___14449]));

var G__14450 = (i__7280__auto___14449 + (1));
i__7280__auto___14449 = G__14450;
continue;
} else {
}
break;
}

var G__14383 = args14381.length;
switch (G__14383) {
case 1:
return sablono.core.range_field14380.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14380.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14381.length)].join('')));

}
});

sablono.core.range_field14380.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.range_field14380.call(null,name__14261__auto__,null);
});

sablono.core.range_field14380.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.range_field14380.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14380);

/**
 * Creates a search input field.
 */
sablono.core.search_field14384 = (function sablono$core$search_field14384(var_args){
var args14385 = [];
var len__7279__auto___14452 = arguments.length;
var i__7280__auto___14453 = (0);
while(true){
if((i__7280__auto___14453 < len__7279__auto___14452)){
args14385.push((arguments[i__7280__auto___14453]));

var G__14454 = (i__7280__auto___14453 + (1));
i__7280__auto___14453 = G__14454;
continue;
} else {
}
break;
}

var G__14387 = args14385.length;
switch (G__14387) {
case 1:
return sablono.core.search_field14384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14385.length)].join('')));

}
});

sablono.core.search_field14384.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.search_field14384.call(null,name__14261__auto__,null);
});

sablono.core.search_field14384.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.search_field14384.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14384);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14388 = (function sablono$core$tel_field14388(var_args){
var args14389 = [];
var len__7279__auto___14456 = arguments.length;
var i__7280__auto___14457 = (0);
while(true){
if((i__7280__auto___14457 < len__7279__auto___14456)){
args14389.push((arguments[i__7280__auto___14457]));

var G__14458 = (i__7280__auto___14457 + (1));
i__7280__auto___14457 = G__14458;
continue;
} else {
}
break;
}

var G__14391 = args14389.length;
switch (G__14391) {
case 1:
return sablono.core.tel_field14388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14389.length)].join('')));

}
});

sablono.core.tel_field14388.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.tel_field14388.call(null,name__14261__auto__,null);
});

sablono.core.tel_field14388.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.tel_field14388.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14388);

/**
 * Creates a text input field.
 */
sablono.core.text_field14392 = (function sablono$core$text_field14392(var_args){
var args14393 = [];
var len__7279__auto___14460 = arguments.length;
var i__7280__auto___14461 = (0);
while(true){
if((i__7280__auto___14461 < len__7279__auto___14460)){
args14393.push((arguments[i__7280__auto___14461]));

var G__14462 = (i__7280__auto___14461 + (1));
i__7280__auto___14461 = G__14462;
continue;
} else {
}
break;
}

var G__14395 = args14393.length;
switch (G__14395) {
case 1:
return sablono.core.text_field14392.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14392.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14393.length)].join('')));

}
});

sablono.core.text_field14392.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.text_field14392.call(null,name__14261__auto__,null);
});

sablono.core.text_field14392.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.text_field14392.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14392);

/**
 * Creates a time input field.
 */
sablono.core.time_field14396 = (function sablono$core$time_field14396(var_args){
var args14397 = [];
var len__7279__auto___14464 = arguments.length;
var i__7280__auto___14465 = (0);
while(true){
if((i__7280__auto___14465 < len__7279__auto___14464)){
args14397.push((arguments[i__7280__auto___14465]));

var G__14466 = (i__7280__auto___14465 + (1));
i__7280__auto___14465 = G__14466;
continue;
} else {
}
break;
}

var G__14399 = args14397.length;
switch (G__14399) {
case 1:
return sablono.core.time_field14396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14397.length)].join('')));

}
});

sablono.core.time_field14396.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.time_field14396.call(null,name__14261__auto__,null);
});

sablono.core.time_field14396.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.time_field14396.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14396);

/**
 * Creates a url input field.
 */
sablono.core.url_field14400 = (function sablono$core$url_field14400(var_args){
var args14401 = [];
var len__7279__auto___14468 = arguments.length;
var i__7280__auto___14469 = (0);
while(true){
if((i__7280__auto___14469 < len__7279__auto___14468)){
args14401.push((arguments[i__7280__auto___14469]));

var G__14470 = (i__7280__auto___14469 + (1));
i__7280__auto___14469 = G__14470;
continue;
} else {
}
break;
}

var G__14403 = args14401.length;
switch (G__14403) {
case 1:
return sablono.core.url_field14400.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14400.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14401.length)].join('')));

}
});

sablono.core.url_field14400.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.url_field14400.call(null,name__14261__auto__,null);
});

sablono.core.url_field14400.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.url_field14400.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14400);

/**
 * Creates a week input field.
 */
sablono.core.week_field14404 = (function sablono$core$week_field14404(var_args){
var args14405 = [];
var len__7279__auto___14472 = arguments.length;
var i__7280__auto___14473 = (0);
while(true){
if((i__7280__auto___14473 < len__7279__auto___14472)){
args14405.push((arguments[i__7280__auto___14473]));

var G__14474 = (i__7280__auto___14473 + (1));
i__7280__auto___14473 = G__14474;
continue;
} else {
}
break;
}

var G__14407 = args14405.length;
switch (G__14407) {
case 1:
return sablono.core.week_field14404.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14405.length)].join('')));

}
});

sablono.core.week_field14404.cljs$core$IFn$_invoke$arity$1 = (function (name__14261__auto__){
return sablono.core.week_field14404.call(null,name__14261__auto__,null);
});

sablono.core.week_field14404.cljs$core$IFn$_invoke$arity$2 = (function (name__14261__auto__,value__14262__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__14261__auto__,value__14262__auto__);
});

sablono.core.week_field14404.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14404);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14476 = (function sablono$core$check_box14476(var_args){
var args14477 = [];
var len__7279__auto___14480 = arguments.length;
var i__7280__auto___14481 = (0);
while(true){
if((i__7280__auto___14481 < len__7279__auto___14480)){
args14477.push((arguments[i__7280__auto___14481]));

var G__14482 = (i__7280__auto___14481 + (1));
i__7280__auto___14481 = G__14482;
continue;
} else {
}
break;
}

var G__14479 = args14477.length;
switch (G__14479) {
case 1:
return sablono.core.check_box14476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14476.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14477.length)].join('')));

}
});

sablono.core.check_box14476.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14476.call(null,name,null);
});

sablono.core.check_box14476.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14476.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box14476.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6210__auto__ = value;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box14476.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14476);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14484 = (function sablono$core$radio_button14484(var_args){
var args14485 = [];
var len__7279__auto___14488 = arguments.length;
var i__7280__auto___14489 = (0);
while(true){
if((i__7280__auto___14489 < len__7279__auto___14488)){
args14485.push((arguments[i__7280__auto___14489]));

var G__14490 = (i__7280__auto___14489 + (1));
i__7280__auto___14489 = G__14490;
continue;
} else {
}
break;
}

var G__14487 = args14485.length;
switch (G__14487) {
case 1:
return sablono.core.radio_button14484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14484.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14485.length)].join('')));

}
});

sablono.core.radio_button14484.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14484.call(null,group,null);
});

sablono.core.radio_button14484.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14484.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button14484.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6210__auto__ = value;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button14484.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14484);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14492 = (function sablono$core$select_options14492(coll){
var iter__6990__auto__ = (function sablono$core$select_options14492_$_iter__14501(s__14502){
return (new cljs.core.LazySeq(null,(function (){
var s__14502__$1 = s__14502;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14502__$1);
if(temp__4657__auto__){
var s__14502__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14502__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__14502__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__14504 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__14503 = (0);
while(true){
if((i__14503 < size__6989__auto__)){
var x = cljs.core._nth.call(null,c__6988__auto__,i__14503);
cljs.core.chunk_append.call(null,b__14504,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14507 = x;
var text = cljs.core.nth.call(null,vec__14507,(0),null);
var val = cljs.core.nth.call(null,vec__14507,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14507,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options14492.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__14509 = (i__14503 + (1));
i__14503 = G__14509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14504),sablono$core$select_options14492_$_iter__14501.call(null,cljs.core.chunk_rest.call(null,s__14502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14504),null);
}
} else {
var x = cljs.core.first.call(null,s__14502__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14508 = x;
var text = cljs.core.nth.call(null,vec__14508,(0),null);
var val = cljs.core.nth.call(null,vec__14508,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14508,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options14492.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options14492_$_iter__14501.call(null,cljs.core.rest.call(null,s__14502__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14492);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14510 = (function sablono$core$drop_down14510(var_args){
var args14511 = [];
var len__7279__auto___14514 = arguments.length;
var i__7280__auto___14515 = (0);
while(true){
if((i__7280__auto___14515 < len__7279__auto___14514)){
args14511.push((arguments[i__7280__auto___14515]));

var G__14516 = (i__7280__auto___14515 + (1));
i__7280__auto___14515 = G__14516;
continue;
} else {
}
break;
}

var G__14513 = args14511.length;
switch (G__14513) {
case 2:
return sablono.core.drop_down14510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14510.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14511.length)].join('')));

}
});

sablono.core.drop_down14510.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14510.call(null,name,options,null);
});

sablono.core.drop_down14510.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down14510.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14510);
/**
 * Creates a text area element.
 */
sablono.core.text_area14518 = (function sablono$core$text_area14518(var_args){
var args14519 = [];
var len__7279__auto___14522 = arguments.length;
var i__7280__auto___14523 = (0);
while(true){
if((i__7280__auto___14523 < len__7279__auto___14522)){
args14519.push((arguments[i__7280__auto___14523]));

var G__14524 = (i__7280__auto___14523 + (1));
i__7280__auto___14523 = G__14524;
continue;
} else {
}
break;
}

var G__14521 = args14519.length;
switch (G__14521) {
case 1:
return sablono.core.text_area14518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14519.length)].join('')));

}
});

sablono.core.text_area14518.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14518.call(null,name,null);
});

sablono.core.text_area14518.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6210__auto__ = value;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area14518.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14518);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14526 = (function sablono$core$label14526(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14526);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14527 = (function sablono$core$submit_button14527(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14527);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14528 = (function sablono$core$reset_button14528(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14528);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14529 = (function sablono$core$form_to14529(var_args){
var args__7286__auto__ = [];
var len__7279__auto___14534 = arguments.length;
var i__7280__auto___14535 = (0);
while(true){
if((i__7280__auto___14535 < len__7279__auto___14534)){
args__7286__auto__.push((arguments[i__7280__auto___14535]));

var G__14536 = (i__7280__auto___14535 + (1));
i__7280__auto___14535 = G__14536;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14529.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

sablono.core.form_to14529.cljs$core$IFn$_invoke$arity$variadic = (function (p__14532,body){
var vec__14533 = p__14532;
var method = cljs.core.nth.call(null,vec__14533,(0),null);
var action = cljs.core.nth.call(null,vec__14533,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to14529.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14529.cljs$lang$applyTo = (function (seq14530){
var G__14531 = cljs.core.first.call(null,seq14530);
var seq14530__$1 = cljs.core.next.call(null,seq14530);
return sablono.core.form_to14529.cljs$core$IFn$_invoke$arity$variadic(G__14531,seq14530__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14529);

//# sourceMappingURL=core.js.map