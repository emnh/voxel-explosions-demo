// Compiled by ClojureScript 1.8.40 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args12212 = [];
var len__7279__auto___12215 = arguments.length;
var i__7280__auto___12216 = (0);
while(true){
if((i__7280__auto___12216 < len__7279__auto___12215)){
args12212.push((arguments[i__7280__auto___12216]));

var G__12217 = (i__7280__auto___12216 + (1));
i__7280__auto___12216 = G__12217;
continue;
} else {
}
break;
}

var G__12214 = args12212.length;
switch (G__12214) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12212.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__6210__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__12220 = null;
var G__12220__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__12220__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__12220 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__12220__2.call(this,self__,k);
case 3:
return G__12220__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12220.cljs$core$IFn$_invoke$arity$2 = G__12220__2;
G__12220.cljs$core$IFn$_invoke$arity$3 = G__12220__3;
return G__12220;
})()
;

jQuery.prototype.apply = (function (self__,args12219){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12219)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12226 = arguments.length;
var i__7280__auto___12227 = (0);
while(true){
if((i__7280__auto___12227 < len__7279__auto___12226)){
args__7286__auto__.push((arguments[i__7280__auto___12227]));

var G__12228 = (i__7280__auto___12227 + (1));
i__7280__auto___12227 = G__12228;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__12224){
var vec__12225 = p__12224;
var speed = cljs.core.nth.call(null,vec__12225,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12225,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq12221){
var G__12222 = cljs.core.first.call(null,seq12221);
var seq12221__$1 = cljs.core.next.call(null,seq12221);
var G__12223 = cljs.core.first.call(null,seq12221__$1);
var seq12221__$2 = cljs.core.next.call(null,seq12221__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__12222,G__12223,seq12221__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args12229 = [];
var len__7279__auto___12232 = arguments.length;
var i__7280__auto___12233 = (0);
while(true){
if((i__7280__auto___12233 < len__7279__auto___12232)){
args12229.push((arguments[i__7280__auto___12233]));

var G__12234 = (i__7280__auto___12233 + (1));
i__7280__auto___12233 = G__12234;
continue;
} else {
}
break;
}

var G__12231 = args12229.length;
switch (G__12231) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12229.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(var_args){
var args12236 = [];
var len__7279__auto___12239 = arguments.length;
var i__7280__auto___12240 = (0);
while(true){
if((i__7280__auto___12240 < len__7279__auto___12239)){
args12236.push((arguments[i__7280__auto___12240]));

var G__12241 = (i__7280__auto___12240 + (1));
i__7280__auto___12240 = G__12241;
continue;
} else {
}
break;
}

var G__12238 = args12236.length;
switch (G__12238) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12236.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(var_args){
var args12243 = [];
var len__7279__auto___12246 = arguments.length;
var i__7280__auto___12247 = (0);
while(true){
if((i__7280__auto___12247 < len__7279__auto___12246)){
args12243.push((arguments[i__7280__auto___12247]));

var G__12248 = (i__7280__auto___12247 + (1));
i__7280__auto___12247 = G__12248;
continue;
} else {
}
break;
}

var G__12245 = args12243.length;
switch (G__12245) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12243.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(var_args){
var args12250 = [];
var len__7279__auto___12253 = arguments.length;
var i__7280__auto___12254 = (0);
while(true){
if((i__7280__auto___12254 < len__7279__auto___12253)){
args12250.push((arguments[i__7280__auto___12254]));

var G__12255 = (i__7280__auto___12254 + (1));
i__7280__auto___12254 = G__12255;
continue;
} else {
}
break;
}

var G__12252 = args12250.length;
switch (G__12252) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12250.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args12257 = [];
var len__7279__auto___12260 = arguments.length;
var i__7280__auto___12261 = (0);
while(true){
if((i__7280__auto___12261 < len__7279__auto___12260)){
args12257.push((arguments[i__7280__auto___12261]));

var G__12262 = (i__7280__auto___12261 + (1));
i__7280__auto___12261 = G__12262;
continue;
} else {
}
break;
}

var G__12259 = args12257.length;
switch (G__12259) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12257.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args12264 = [];
var len__7279__auto___12267 = arguments.length;
var i__7280__auto___12268 = (0);
while(true){
if((i__7280__auto___12268 < len__7279__auto___12267)){
args12264.push((arguments[i__7280__auto___12268]));

var G__12269 = (i__7280__auto___12268 + (1));
i__7280__auto___12268 = G__12269;
continue;
} else {
}
break;
}

var G__12266 = args12264.length;
switch (G__12266) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12264.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args12271 = [];
var len__7279__auto___12274 = arguments.length;
var i__7280__auto___12275 = (0);
while(true){
if((i__7280__auto___12275 < len__7279__auto___12274)){
args12271.push((arguments[i__7280__auto___12275]));

var G__12276 = (i__7280__auto___12275 + (1));
i__7280__auto___12275 = G__12276;
continue;
} else {
}
break;
}

var G__12273 = args12271.length;
switch (G__12273) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12271.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12282 = arguments.length;
var i__7280__auto___12283 = (0);
while(true){
if((i__7280__auto___12283 < len__7279__auto___12282)){
args__7286__auto__.push((arguments[i__7280__auto___12283]));

var G__12284 = (i__7280__auto___12283 + (1));
i__7280__auto___12283 = G__12284;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12280){
var vec__12281 = p__12280;
var speed = cljs.core.nth.call(null,vec__12281,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12281,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq12278){
var G__12279 = cljs.core.first.call(null,seq12278);
var seq12278__$1 = cljs.core.next.call(null,seq12278);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__12279,seq12278__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12289 = arguments.length;
var i__7280__auto___12290 = (0);
while(true){
if((i__7280__auto___12290 < len__7279__auto___12289)){
args__7286__auto__.push((arguments[i__7280__auto___12290]));

var G__12291 = (i__7280__auto___12290 + (1));
i__7280__auto___12290 = G__12291;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12287){
var vec__12288 = p__12287;
var speed = cljs.core.nth.call(null,vec__12288,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12288,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq12285){
var G__12286 = cljs.core.first.call(null,seq12285);
var seq12285__$1 = cljs.core.next.call(null,seq12285);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__12286,seq12285__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12296 = arguments.length;
var i__7280__auto___12297 = (0);
while(true){
if((i__7280__auto___12297 < len__7279__auto___12296)){
args__7286__auto__.push((arguments[i__7280__auto___12297]));

var G__12298 = (i__7280__auto___12297 + (1));
i__7280__auto___12297 = G__12298;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12294){
var vec__12295 = p__12294;
var speed = cljs.core.nth.call(null,vec__12295,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12295,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq12292){
var G__12293 = cljs.core.first.call(null,seq12292);
var seq12292__$1 = cljs.core.next.call(null,seq12292);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__12293,seq12292__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12303 = arguments.length;
var i__7280__auto___12304 = (0);
while(true){
if((i__7280__auto___12304 < len__7279__auto___12303)){
args__7286__auto__.push((arguments[i__7280__auto___12304]));

var G__12305 = (i__7280__auto___12304 + (1));
i__7280__auto___12304 = G__12305;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12301){
var vec__12302 = p__12301;
var speed = cljs.core.nth.call(null,vec__12302,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12302,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq12299){
var G__12300 = cljs.core.first.call(null,seq12299);
var seq12299__$1 = cljs.core.next.call(null,seq12299);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__12300,seq12299__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12310 = arguments.length;
var i__7280__auto___12311 = (0);
while(true){
if((i__7280__auto___12311 < len__7279__auto___12310)){
args__7286__auto__.push((arguments[i__7280__auto___12311]));

var G__12312 = (i__7280__auto___12311 + (1));
i__7280__auto___12311 = G__12312;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12308){
var vec__12309 = p__12308;
var speed = cljs.core.nth.call(null,vec__12309,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12309,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq12306){
var G__12307 = cljs.core.first.call(null,seq12306);
var seq12306__$1 = cljs.core.next.call(null,seq12306);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__12307,seq12306__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12317 = arguments.length;
var i__7280__auto___12318 = (0);
while(true){
if((i__7280__auto___12318 < len__7279__auto___12317)){
args__7286__auto__.push((arguments[i__7280__auto___12318]));

var G__12319 = (i__7280__auto___12318 + (1));
i__7280__auto___12318 = G__12319;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12315){
var vec__12316 = p__12315;
var speed = cljs.core.nth.call(null,vec__12316,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12316,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq12313){
var G__12314 = cljs.core.first.call(null,seq12313);
var seq12313__$1 = cljs.core.next.call(null,seq12313);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__12314,seq12313__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12324 = arguments.length;
var i__7280__auto___12325 = (0);
while(true){
if((i__7280__auto___12325 < len__7279__auto___12324)){
args__7286__auto__.push((arguments[i__7280__auto___12325]));

var G__12326 = (i__7280__auto___12325 + (1));
i__7280__auto___12325 = G__12326;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12322){
var vec__12323 = p__12322;
var speed = cljs.core.nth.call(null,vec__12323,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12323,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq12320){
var G__12321 = cljs.core.first.call(null,seq12320);
var seq12320__$1 = cljs.core.next.call(null,seq12320);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__12321,seq12320__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args12327 = [];
var len__7279__auto___12330 = arguments.length;
var i__7280__auto___12331 = (0);
while(true){
if((i__7280__auto___12331 < len__7279__auto___12330)){
args12327.push((arguments[i__7280__auto___12331]));

var G__12332 = (i__7280__auto___12331 + (1));
i__7280__auto___12331 = G__12332;
continue;
} else {
}
break;
}

var G__12329 = args12327.length;
switch (G__12329) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12327.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args12334 = [];
var len__7279__auto___12337 = arguments.length;
var i__7280__auto___12338 = (0);
while(true){
if((i__7280__auto___12338 < len__7279__auto___12337)){
args12334.push((arguments[i__7280__auto___12338]));

var G__12339 = (i__7280__auto___12338 + (1));
i__7280__auto___12338 = G__12339;
continue;
} else {
}
break;
}

var G__12336 = args12334.length;
switch (G__12336) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12334.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args12341 = [];
var len__7279__auto___12344 = arguments.length;
var i__7280__auto___12345 = (0);
while(true){
if((i__7280__auto___12345 < len__7279__auto___12344)){
args12341.push((arguments[i__7280__auto___12345]));

var G__12346 = (i__7280__auto___12345 + (1));
i__7280__auto___12345 = G__12346;
continue;
} else {
}
break;
}

var G__12343 = args12341.length;
switch (G__12343) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12341.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(var_args){
var args12348 = [];
var len__7279__auto___12351 = arguments.length;
var i__7280__auto___12352 = (0);
while(true){
if((i__7280__auto___12352 < len__7279__auto___12351)){
args12348.push((arguments[i__7280__auto___12352]));

var G__12353 = (i__7280__auto___12352 + (1));
i__7280__auto___12352 = G__12353;
continue;
} else {
}
break;
}

var G__12350 = args12348.length;
switch (G__12350) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12348.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(var_args){
var args12355 = [];
var len__7279__auto___12358 = arguments.length;
var i__7280__auto___12359 = (0);
while(true){
if((i__7280__auto___12359 < len__7279__auto___12358)){
args12355.push((arguments[i__7280__auto___12359]));

var G__12360 = (i__7280__auto___12359 + (1));
i__7280__auto___12359 = G__12360;
continue;
} else {
}
break;
}

var G__12357 = args12355.length;
switch (G__12357) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12355.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(var_args){
var args12362 = [];
var len__7279__auto___12365 = arguments.length;
var i__7280__auto___12366 = (0);
while(true){
if((i__7280__auto___12366 < len__7279__auto___12365)){
args12362.push((arguments[i__7280__auto___12366]));

var G__12367 = (i__7280__auto___12366 + (1));
i__7280__auto___12366 = G__12367;
continue;
} else {
}
break;
}

var G__12364 = args12362.length;
switch (G__12364) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12362.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(var_args){
var args12369 = [];
var len__7279__auto___12372 = arguments.length;
var i__7280__auto___12373 = (0);
while(true){
if((i__7280__auto___12373 < len__7279__auto___12372)){
args12369.push((arguments[i__7280__auto___12373]));

var G__12374 = (i__7280__auto___12373 + (1));
i__7280__auto___12373 = G__12374;
continue;
} else {
}
break;
}

var G__12371 = args12369.length;
switch (G__12371) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12369.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args12376 = [];
var len__7279__auto___12379 = arguments.length;
var i__7280__auto___12380 = (0);
while(true){
if((i__7280__auto___12380 < len__7279__auto___12379)){
args12376.push((arguments[i__7280__auto___12380]));

var G__12381 = (i__7280__auto___12380 + (1));
i__7280__auto___12380 = G__12381;
continue;
} else {
}
break;
}

var G__12378 = args12376.length;
switch (G__12378) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12376.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(var_args){
var args12383 = [];
var len__7279__auto___12386 = arguments.length;
var i__7280__auto___12387 = (0);
while(true){
if((i__7280__auto___12387 < len__7279__auto___12386)){
args12383.push((arguments[i__7280__auto___12387]));

var G__12388 = (i__7280__auto___12387 + (1));
i__7280__auto___12387 = G__12388;
continue;
} else {
}
break;
}

var G__12385 = args12383.length;
switch (G__12385) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12383.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args12390 = [];
var len__7279__auto___12393 = arguments.length;
var i__7280__auto___12394 = (0);
while(true){
if((i__7280__auto___12394 < len__7279__auto___12393)){
args12390.push((arguments[i__7280__auto___12394]));

var G__12395 = (i__7280__auto___12394 + (1));
i__7280__auto___12394 = G__12395;
continue;
} else {
}
break;
}

var G__12392 = args12390.length;
switch (G__12392) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12390.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12402 = arguments.length;
var i__7280__auto___12403 = (0);
while(true){
if((i__7280__auto___12403 < len__7279__auto___12402)){
args__7286__auto__.push((arguments[i__7280__auto___12403]));

var G__12404 = (i__7280__auto___12403 + (1));
i__7280__auto___12403 = G__12404;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__12400){
var vec__12401 = p__12400;
var context = cljs.core.nth.call(null,vec__12401,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq12397){
var G__12398 = cljs.core.first.call(null,seq12397);
var seq12397__$1 = cljs.core.next.call(null,seq12397);
var G__12399 = cljs.core.first.call(null,seq12397__$1);
var seq12397__$2 = cljs.core.next.call(null,seq12397__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__12398,G__12399,seq12397__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args12405 = [];
var len__7279__auto___12408 = arguments.length;
var i__7280__auto___12409 = (0);
while(true){
if((i__7280__auto___12409 < len__7279__auto___12408)){
args12405.push((arguments[i__7280__auto___12409]));

var G__12410 = (i__7280__auto___12409 + (1));
i__7280__auto___12409 = G__12410;
continue;
} else {
}
break;
}

var G__12407 = args12405.length;
switch (G__12407) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12405.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args12412 = [];
var len__7279__auto___12415 = arguments.length;
var i__7280__auto___12416 = (0);
while(true){
if((i__7280__auto___12416 < len__7279__auto___12415)){
args12412.push((arguments[i__7280__auto___12416]));

var G__12417 = (i__7280__auto___12416 + (1));
i__7280__auto___12416 = G__12417;
continue;
} else {
}
break;
}

var G__12414 = args12412.length;
switch (G__12414) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12412.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args12419 = [];
var len__7279__auto___12422 = arguments.length;
var i__7280__auto___12423 = (0);
while(true){
if((i__7280__auto___12423 < len__7279__auto___12422)){
args12419.push((arguments[i__7280__auto___12423]));

var G__12424 = (i__7280__auto___12423 + (1));
i__7280__auto___12423 = G__12424;
continue;
} else {
}
break;
}

var G__12421 = args12419.length;
switch (G__12421) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12419.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args12426 = [];
var len__7279__auto___12429 = arguments.length;
var i__7280__auto___12430 = (0);
while(true){
if((i__7280__auto___12430 < len__7279__auto___12429)){
args12426.push((arguments[i__7280__auto___12430]));

var G__12431 = (i__7280__auto___12430 + (1));
i__7280__auto___12430 = G__12431;
continue;
} else {
}
break;
}

var G__12428 = args12426.length;
switch (G__12428) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12426.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__12435){
var map__12438 = p__12435;
var map__12438__$1 = ((((!((map__12438 == null)))?((((map__12438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12438):map__12438);
var request = map__12438__$1;
var data = cljs.core.get.call(null,map__12438__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__12438__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__12438,map__12438__$1,request,data,contentType){
return (function (p1__12434_SHARP_){
if(cljs.core.truth_((function (){var and__6198__auto__ = ct;
if(cljs.core.truth_(and__6198__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__6198__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__12434_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__12434_SHARP_;
}
});})(ct,map__12438,map__12438__$1,request,data,contentType))
.call(null,((function (ct,map__12438,map__12438__$1,request,data,contentType){
return (function (p1__12433_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__12433_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__12433_SHARP_;
}
});})(ct,map__12438,map__12438__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args12440 = [];
var len__7279__auto___12443 = arguments.length;
var i__7280__auto___12444 = (0);
while(true){
if((i__7280__auto___12444 < len__7279__auto___12443)){
args12440.push((arguments[i__7280__auto___12444]));

var G__12445 = (i__7280__auto___12444 + (1));
i__7280__auto___12444 = G__12445;
continue;
} else {
}
break;
}

var G__12442 = args12440.length;
switch (G__12442) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12440.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__12447,content,callback){
var vec__12449 = p__12447;
var method = cljs.core.nth.call(null,vec__12449,(0),null);
var uri = cljs.core.nth.call(null,vec__12449,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12455 = arguments.length;
var i__7280__auto___12456 = (0);
while(true){
if((i__7280__auto___12456 < len__7279__auto___12455)){
args__7286__auto__.push((arguments[i__7280__auto___12456]));

var G__12457 = (i__7280__auto___12456 + (1));
i__7280__auto___12456 = G__12457;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__12453){
var vec__12454 = p__12453;
var func = cljs.core.nth.call(null,vec__12454,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq12450){
var G__12451 = cljs.core.first.call(null,seq12450);
var seq12450__$1 = cljs.core.next.call(null,seq12450);
var G__12452 = cljs.core.first.call(null,seq12450__$1);
var seq12450__$2 = cljs.core.next.call(null,seq12450__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__12451,G__12452,seq12450__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12463 = arguments.length;
var i__7280__auto___12464 = (0);
while(true){
if((i__7280__auto___12464 < len__7279__auto___12463)){
args__7286__auto__.push((arguments[i__7280__auto___12464]));

var G__12465 = (i__7280__auto___12464 + (1));
i__7280__auto___12464 = G__12465;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__12461){
var vec__12462 = p__12461;
var sel = cljs.core.nth.call(null,vec__12462,(0),null);
var data = cljs.core.nth.call(null,vec__12462,(1),null);
var handler = cljs.core.nth.call(null,vec__12462,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq12458){
var G__12459 = cljs.core.first.call(null,seq12458);
var seq12458__$1 = cljs.core.next.call(null,seq12458);
var G__12460 = cljs.core.first.call(null,seq12458__$1);
var seq12458__$2 = cljs.core.next.call(null,seq12458__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__12459,G__12460,seq12458__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12471 = arguments.length;
var i__7280__auto___12472 = (0);
while(true){
if((i__7280__auto___12472 < len__7279__auto___12471)){
args__7286__auto__.push((arguments[i__7280__auto___12472]));

var G__12473 = (i__7280__auto___12472 + (1));
i__7280__auto___12472 = G__12473;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__12469){
var vec__12470 = p__12469;
var sel = cljs.core.nth.call(null,vec__12470,(0),null);
var data = cljs.core.nth.call(null,vec__12470,(1),null);
var handler = cljs.core.nth.call(null,vec__12470,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq12466){
var G__12467 = cljs.core.first.call(null,seq12466);
var seq12466__$1 = cljs.core.next.call(null,seq12466);
var G__12468 = cljs.core.first.call(null,seq12466__$1);
var seq12466__$2 = cljs.core.next.call(null,seq12466__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__12467,G__12468,seq12466__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12479 = arguments.length;
var i__7280__auto___12480 = (0);
while(true){
if((i__7280__auto___12480 < len__7279__auto___12479)){
args__7286__auto__.push((arguments[i__7280__auto___12480]));

var G__12481 = (i__7280__auto___12480 + (1));
i__7280__auto___12480 = G__12481;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__12477){
var vec__12478 = p__12477;
var sel = cljs.core.nth.call(null,vec__12478,(0),null);
var handler = cljs.core.nth.call(null,vec__12478,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq12474){
var G__12475 = cljs.core.first.call(null,seq12474);
var seq12474__$1 = cljs.core.next.call(null,seq12474);
var G__12476 = cljs.core.first.call(null,seq12474__$1);
var seq12474__$2 = cljs.core.next.call(null,seq12474__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__12475,G__12476,seq12474__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args12482 = [];
var len__7279__auto___12485 = arguments.length;
var i__7280__auto___12486 = (0);
while(true){
if((i__7280__auto___12486 < len__7279__auto___12485)){
args12482.push((arguments[i__7280__auto___12486]));

var G__12487 = (i__7280__auto___12486 + (1));
i__7280__auto___12486 = G__12487;
continue;
} else {
}
break;
}

var G__12484 = args12482.length;
switch (G__12484) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12482.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(var_args){
var args12489 = [];
var len__7279__auto___12492 = arguments.length;
var i__7280__auto___12493 = (0);
while(true){
if((i__7280__auto___12493 < len__7279__auto___12492)){
args12489.push((arguments[i__7280__auto___12493]));

var G__12494 = (i__7280__auto___12493 + (1));
i__7280__auto___12493 = G__12494;
continue;
} else {
}
break;
}

var G__12491 = args12489.length;
switch (G__12491) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12489.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args12496 = [];
var len__7279__auto___12499 = arguments.length;
var i__7280__auto___12500 = (0);
while(true){
if((i__7280__auto___12500 < len__7279__auto___12499)){
args12496.push((arguments[i__7280__auto___12500]));

var G__12501 = (i__7280__auto___12500 + (1));
i__7280__auto___12500 = G__12501;
continue;
} else {
}
break;
}

var G__12498 = args12496.length;
switch (G__12498) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12496.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args12503 = [];
var len__7279__auto___12506 = arguments.length;
var i__7280__auto___12507 = (0);
while(true){
if((i__7280__auto___12507 < len__7279__auto___12506)){
args12503.push((arguments[i__7280__auto___12507]));

var G__12508 = (i__7280__auto___12507 + (1));
i__7280__auto___12507 = G__12508;
continue;
} else {
}
break;
}

var G__12505 = args12503.length;
switch (G__12505) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12503.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args12510 = [];
var len__7279__auto___12513 = arguments.length;
var i__7280__auto___12514 = (0);
while(true){
if((i__7280__auto___12514 < len__7279__auto___12513)){
args12510.push((arguments[i__7280__auto___12514]));

var G__12515 = (i__7280__auto___12514 + (1));
i__7280__auto___12514 = G__12515;
continue;
} else {
}
break;
}

var G__12512 = args12510.length;
switch (G__12512) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12510.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args12517 = [];
var len__7279__auto___12520 = arguments.length;
var i__7280__auto___12521 = (0);
while(true){
if((i__7280__auto___12521 < len__7279__auto___12520)){
args12517.push((arguments[i__7280__auto___12521]));

var G__12522 = (i__7280__auto___12521 + (1));
i__7280__auto___12521 = G__12522;
continue;
} else {
}
break;
}

var G__12519 = args12517.length;
switch (G__12519) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12517.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12526 = arguments.length;
var i__7280__auto___12527 = (0);
while(true){
if((i__7280__auto___12527 < len__7279__auto___12526)){
args__7286__auto__.push((arguments[i__7280__auto___12527]));

var G__12528 = (i__7280__auto___12527 + (1));
i__7280__auto___12527 = G__12528;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq12524){
var G__12525 = cljs.core.first.call(null,seq12524);
var seq12524__$1 = cljs.core.next.call(null,seq12524);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__12525,seq12524__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12531 = arguments.length;
var i__7280__auto___12532 = (0);
while(true){
if((i__7280__auto___12532 < len__7279__auto___12531)){
args__7286__auto__.push((arguments[i__7280__auto___12532]));

var G__12533 = (i__7280__auto___12532 + (1));
i__7280__auto___12532 = G__12533;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq12529){
var G__12530 = cljs.core.first.call(null,seq12529);
var seq12529__$1 = cljs.core.next.call(null,seq12529);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__12530,seq12529__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args12534 = [];
var len__7279__auto___12537 = arguments.length;
var i__7280__auto___12538 = (0);
while(true){
if((i__7280__auto___12538 < len__7279__auto___12537)){
args12534.push((arguments[i__7280__auto___12538]));

var G__12539 = (i__7280__auto___12538 + (1));
i__7280__auto___12538 = G__12539;
continue;
} else {
}
break;
}

var G__12536 = args12534.length;
switch (G__12536) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12534.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(var_args){
var args__7286__auto__ = [];
var len__7279__auto___12543 = arguments.length;
var i__7280__auto___12544 = (0);
while(true){
if((i__7280__auto___12544 < len__7279__auto___12543)){
args__7286__auto__.push((arguments[i__7280__auto___12544]));

var G__12545 = (i__7280__auto___12544 + (1));
i__7280__auto___12544 = G__12545;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq12541){
var G__12542 = cljs.core.first.call(null,seq12541);
var seq12541__$1 = cljs.core.next.call(null,seq12541);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__12542,seq12541__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args12546 = [];
var len__7279__auto___12549 = arguments.length;
var i__7280__auto___12550 = (0);
while(true){
if((i__7280__auto___12550 < len__7279__auto___12549)){
args12546.push((arguments[i__7280__auto___12550]));

var G__12551 = (i__7280__auto___12550 + (1));
i__7280__auto___12550 = G__12551;
continue;
} else {
}
break;
}

var G__12548 = args12546.length;
switch (G__12548) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12546.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map