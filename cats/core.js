// Compiled by ClojureScript 1.8.40 {}
goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('clojure.set');
goog.require('cats.context');
cats.core.mempty = (function cats$core$mempty(var_args){
var args16128 = [];
var len__7279__auto___16131 = arguments.length;
var i__7280__auto___16132 = (0);
while(true){
if((i__7280__auto___16132 < len__7279__auto___16131)){
args16128.push((arguments[i__7280__auto___16132]));

var G__16133 = (i__7280__auto___16132 + (1));
i__7280__auto___16132 = G__16133;
continue;
} else {
}
break;
}

var G__16130 = args16128.length;
switch (G__16130) {
case 0:
return cats.core.mempty.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.mempty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16128.length)].join('')));

}
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mempty.call(null,cats.context.get_current.call(null));
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mempty.call(null,ctx);
});

cats.core.mempty.cljs$lang$maxFixedArity = 1;
cats.core.mappend = (function cats$core$mappend(var_args){
var args__7286__auto__ = [];
var len__7279__auto___16136 = arguments.length;
var i__7280__auto___16137 = (0);
while(true){
if((i__7280__auto___16137 < len__7279__auto___16136)){
args__7286__auto__.push((arguments[i__7280__auto___16137]));

var G__16138 = (i__7280__auto___16137 + (1));
i__7280__auto___16137 = G__16138;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic = (function (svs){
if(cljs.core.seq.call(null,svs)){
} else {
throw (new Error("Assert failed: (seq svs)"));
}

var ctx = cats.context.get_current.call(null,cljs.core.first.call(null,svs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._mappend,ctx),svs);
});

cats.core.mappend.cljs$lang$maxFixedArity = (0);

cats.core.mappend.cljs$lang$applyTo = (function (seq16135){
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16135));
});
/**
 * Given any value `v`, return it wrapped in
 *   the default/effect-free context.
 * 
 *   This is a multi-arity function that with arity `pure/1`
 *   uses the dynamic scope to resolve the current
 *   context. With `pure/2`, you can force a specific context
 *   value.
 * 
 *   Example:
 * 
 *    (with-context either/context
 *      (pure 1))
 *    ;; => #<Right [1]>
 * 
 *    (pure either/context 1)
 *    ;; => #<Right [1]>
 *   
 */
cats.core.pure = (function cats$core$pure(var_args){
var args16139 = [];
var len__7279__auto___16142 = arguments.length;
var i__7280__auto___16143 = (0);
while(true){
if((i__7280__auto___16143 < len__7279__auto___16142)){
args16139.push((arguments[i__7280__auto___16143]));

var G__16144 = (i__7280__auto___16143 + (1));
i__7280__auto___16143 = G__16144;
continue;
} else {
}
break;
}

var G__16141 = args16139.length;
switch (G__16141) {
case 1:
return cats.core.pure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.pure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16139.length)].join('')));

}
});

cats.core.pure.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.pure.call(null,cats.context.get_current.call(null),v);
});

cats.core.pure.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._pure.call(null,ctx,v);
});

cats.core.pure.cljs$lang$maxFixedArity = 2;
/**
 * This is a monad version of `pure` and works
 *   identically to it.
 */
cats.core.return$ = (function cats$core$return(var_args){
var args16146 = [];
var len__7279__auto___16149 = arguments.length;
var i__7280__auto___16150 = (0);
while(true){
if((i__7280__auto___16150 < len__7279__auto___16149)){
args16146.push((arguments[i__7280__auto___16150]));

var G__16151 = (i__7280__auto___16150 + (1));
i__7280__auto___16150 = G__16151;
continue;
} else {
}
break;
}

var G__16148 = args16146.length;
switch (G__16148) {
case 1:
return cats.core.return$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.return$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16146.length)].join('')));

}
});

cats.core.return$.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.return$.call(null,cats.context.get_current.call(null),v);
});

cats.core.return$.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._mreturn.call(null,ctx,v);
});

cats.core.return$.cljs$lang$maxFixedArity = 2;
/**
 * Given a monadic value `mv` and a function `f`,
 *   apply `f` to the unwrapped value of `mv`.
 * 
 *    (bind (either/right 1) (fn [v]
 *                             (return (inc v))))
 *    ;; => #<Right [2]>
 * 
 *   For convenience, you may prefer to use the `mlet` macro,
 *   which provides a beautiful, `let`-like syntax for
 *   composing operations with the `bind` function.
 */
cats.core.bind = (function cats$core$bind(mv,f){
var ctx = cats.context.get_current.call(null,mv);
return cats.protocols._mbind.call(null,ctx,mv,((function (ctx){
return (function (v){
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16157 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return f.call(null,v);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16157;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16158 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return f.call(null,v);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16158;
}} else {
return f.call(null,v);
}
}
});})(ctx))
);
});
cats.core.mzero = (function cats$core$mzero(var_args){
var args16159 = [];
var len__7279__auto___16162 = arguments.length;
var i__7280__auto___16163 = (0);
while(true){
if((i__7280__auto___16163 < len__7279__auto___16162)){
args16159.push((arguments[i__7280__auto___16163]));

var G__16164 = (i__7280__auto___16163 + (1));
i__7280__auto___16163 = G__16164;
continue;
} else {
}
break;
}

var G__16161 = args16159.length;
switch (G__16161) {
case 0:
return cats.core.mzero.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.mzero.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16159.length)].join('')));

}
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mzero.call(null,cats.context.get_current.call(null));
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mzero.call(null,ctx);
});

cats.core.mzero.cljs$lang$maxFixedArity = 1;
cats.core.mplus = (function cats$core$mplus(var_args){
var args__7286__auto__ = [];
var len__7279__auto___16167 = arguments.length;
var i__7280__auto___16168 = (0);
while(true){
if((i__7280__auto___16168 < len__7279__auto___16167)){
args__7286__auto__.push((arguments[i__7280__auto___16168]));

var G__16169 = (i__7280__auto___16168 + (1));
i__7280__auto___16168 = G__16169;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic = (function (mvs){
if(cljs.core.seq.call(null,mvs)){
} else {
throw (new Error("Assert failed: (seq mvs)"));
}

var ctx = cats.context.get_current.call(null,cljs.core.first.call(null,mvs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._mplus,ctx),mvs);
});

cats.core.mplus.cljs$lang$maxFixedArity = (0);

cats.core.mplus.cljs$lang$applyTo = (function (seq16166){
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16166));
});
cats.core.guard = (function cats$core$guard(b){
if(cljs.core.truth_(b)){
return cats.core.return$.call(null,null);
} else {
return cats.core.mzero.call(null);
}
});
/**
 * Remove one level of monadic structure.
 *   This is the same as `(bind mv identity)`.
 */
cats.core.join = (function cats$core$join(mv){
return cats.core.bind.call(null,mv,cljs.core.identity);
});
/**
 * Apply a function `f` to the value wrapped in functor `fv`,
 *   preserving the context type.
 */
cats.core.fmap = (function cats$core$fmap(var_args){
var args16170 = [];
var len__7279__auto___16176 = arguments.length;
var i__7280__auto___16177 = (0);
while(true){
if((i__7280__auto___16177 < len__7279__auto___16176)){
args16170.push((arguments[i__7280__auto___16177]));

var G__16178 = (i__7280__auto___16177 + (1));
i__7280__auto___16177 = G__16178;
continue;
} else {
}
break;
}

var G__16172 = args16170.length;
switch (G__16172) {
case 1:
return cats.core.fmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16170.length)].join('')));

}
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (fv){
return cats.core.fmap.call(null,f,fv);
});
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,fv){
var ctx = cats.context.get_current.call(null,fv);
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16174 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._fmap.call(null,ctx,f,fv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16174;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16175 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._fmap.call(null,ctx,f,fv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16175;
}} else {
return cats.protocols._fmap.call(null,ctx,f,fv);
}
}
});

cats.core.fmap.cljs$lang$maxFixedArity = 2;
/**
 * Map over both arguments at the same time.
 * 
 *   Given functions `f` and `g` and a value wrapped in a bifunctor `bv`,
 *   apply `f` to a first argument or `g` to a second argument.
 * 
 *    (bimap dec inc (either/right 1)
 *    ;; => #<Right 2>
 * 
 *    (bimap dec inc (either/left 1)
 *    ;; => #<Left 0>
 */
cats.core.bimap = (function cats$core$bimap(var_args){
var args16180 = [];
var len__7279__auto___16186 = arguments.length;
var i__7280__auto___16187 = (0);
while(true){
if((i__7280__auto___16187 < len__7279__auto___16186)){
args16180.push((arguments[i__7280__auto___16187]));

var G__16188 = (i__7280__auto___16187 + (1));
i__7280__auto___16187 = G__16188;
continue;
} else {
}
break;
}

var G__16182 = args16180.length;
switch (G__16182) {
case 2:
return cats.core.bimap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16180.length)].join('')));

}
});

cats.core.bimap.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function (bv){
return cats.core.bimap.call(null,f,g,bv);
});
});

cats.core.bimap.cljs$core$IFn$_invoke$arity$3 = (function (f,g,bv){
var ctx = cats.context.get_current.call(null,bv);
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16184 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._bimap.call(null,ctx,f,g,bv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16184;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16185 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._bimap.call(null,ctx,f,g,bv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16185;
}} else {
return cats.protocols._bimap.call(null,ctx,f,g,bv);
}
}
});

cats.core.bimap.cljs$lang$maxFixedArity = 3;
/**
 * Map covariantly over the first argument.
 * 
 *   Given a function `f` and a value wrapped in a bifunctor `bv`,
 *   apply `f` to the first argument, if present, otherwise leave `bv` unchanged.
 * 
 *    (left-map dec (either/right 1)
 *    ;; => #<Right 1>
 * 
 *    (left-map dec (either/left 1)
 *    ;; => #<Left 0>
 */
cats.core.left_map = (function cats$core$left_map(var_args){
var args16190 = [];
var len__7279__auto___16193 = arguments.length;
var i__7280__auto___16194 = (0);
while(true){
if((i__7280__auto___16194 < len__7279__auto___16193)){
args16190.push((arguments[i__7280__auto___16194]));

var G__16195 = (i__7280__auto___16194 + (1));
i__7280__auto___16194 = G__16195;
continue;
} else {
}
break;
}

var G__16192 = args16190.length;
switch (G__16192) {
case 1:
return cats.core.left_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.left_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16190.length)].join('')));

}
});

cats.core.left_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (bv){
return cats.core.left_map.call(null,f,bv);
});
});

cats.core.left_map.cljs$core$IFn$_invoke$arity$2 = (function (f,bv){
return cats.core.bimap.call(null,f,cljs.core.identity,bv);
});

cats.core.left_map.cljs$lang$maxFixedArity = 2;
/**
 * Map covariantly over the second argument.
 * 
 *   Given a function `g` and a value wrapped in a bifunctor `bv`,
 *   apply `g` to the second argument, if present, otherwise leave `bv` unchanged.
 * 
 *    (right-map inc (either/right 1)
 *    ;; => #<Right 2>
 * 
 *    (right-map inc (either/left 1)
 *    ;; => #<Left 1>
 */
cats.core.right_map = (function cats$core$right_map(var_args){
var args16197 = [];
var len__7279__auto___16200 = arguments.length;
var i__7280__auto___16201 = (0);
while(true){
if((i__7280__auto___16201 < len__7279__auto___16200)){
args16197.push((arguments[i__7280__auto___16201]));

var G__16202 = (i__7280__auto___16201 + (1));
i__7280__auto___16201 = G__16202;
continue;
} else {
}
break;
}

var G__16199 = args16197.length;
switch (G__16199) {
case 1:
return cats.core.right_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.right_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16197.length)].join('')));

}
});

cats.core.right_map.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (bv){
return cats.core.right_map.call(null,g,bv);
});
});

cats.core.right_map.cljs$core$IFn$_invoke$arity$2 = (function (g,bv){
return cats.core.bimap.call(null,cljs.core.identity,g,bv);
});

cats.core.right_map.cljs$lang$maxFixedArity = 2;
/**
 * Given a function wrapped in a monadic context `af`,
 *   and a value wrapped in a monadic context `av`,
 *   apply the unwrapped function to the unwrapped value
 *   and return the result, wrapped in the same context as `av`.
 * 
 *   This function is variadic, so it can be used like
 *   a Haskell-style left-associative fapply.
 */
cats.core.fapply = (function cats$core$fapply(var_args){
var args__7286__auto__ = [];
var len__7279__auto___16206 = arguments.length;
var i__7280__auto___16207 = (0);
while(true){
if((i__7280__auto___16207 < len__7279__auto___16206)){
args__7286__auto__.push((arguments[i__7280__auto___16207]));

var G__16208 = (i__7280__auto___16207 + (1));
i__7280__auto___16207 = G__16208;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic = (function (af,avs){
if(cljs.core.seq.call(null,avs)){
} else {
throw (new Error("Assert failed: (seq avs)"));
}

var ctx = cats.context.get_current.call(null,af);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._fapply,ctx),af,avs);
});

cats.core.fapply.cljs$lang$maxFixedArity = (1);

cats.core.fapply.cljs$lang$applyTo = (function (seq16204){
var G__16205 = cljs.core.first.call(null,seq16204);
var seq16204__$1 = cljs.core.next.call(null,seq16204);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic(G__16205,seq16204__$1);
});
/**
 * Given an expression and a monadic value,
 *   if the expression is logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.when = (function cats$core$when(var_args){
var args16209 = [];
var len__7279__auto___16212 = arguments.length;
var i__7280__auto___16213 = (0);
while(true){
if((i__7280__auto___16213 < len__7279__auto___16212)){
args16209.push((arguments[i__7280__auto___16213]));

var G__16214 = (i__7280__auto___16213 + (1));
i__7280__auto___16213 = G__16214;
continue;
} else {
}
break;
}

var G__16211 = args16209.length;
switch (G__16211) {
case 2:
return cats.core.when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16209.length)].join('')));

}
});

cats.core.when.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.call(null,cats.context.get_current.call(null,mv),b,mv);
});

cats.core.when.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
if(cljs.core.truth_(b)){
return mv;
} else {
return cats.core.pure.call(null,ctx,null);
}
});

cats.core.when.cljs$lang$maxFixedArity = 3;
/**
 * Given an expression and a monadic value,
 *   if the expression is not logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.unless = (function cats$core$unless(var_args){
var args16216 = [];
var len__7279__auto___16219 = arguments.length;
var i__7280__auto___16220 = (0);
while(true){
if((i__7280__auto___16220 < len__7279__auto___16219)){
args16216.push((arguments[i__7280__auto___16220]));

var G__16221 = (i__7280__auto___16220 + (1));
i__7280__auto___16220 = G__16221;
continue;
} else {
}
break;
}

var G__16218 = args16216.length;
switch (G__16218) {
case 2:
return cats.core.unless.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.unless.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16216.length)].join('')));

}
});

cats.core.unless.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.call(null,cljs.core.not.call(null,b),mv);
});

cats.core.unless.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
return cats.core.when.call(null,ctx,cljs.core.not.call(null,b),mv);
});

cats.core.unless.cljs$lang$maxFixedArity = 3;
/**
 * Lift a value from the inner monad of a monad transformer
 *   into a value of the monad transformer.
 */
cats.core.lift = (function cats$core$lift(var_args){
var args16223 = [];
var len__7279__auto___16226 = arguments.length;
var i__7280__auto___16227 = (0);
while(true){
if((i__7280__auto___16227 < len__7279__auto___16226)){
args16223.push((arguments[i__7280__auto___16227]));

var G__16228 = (i__7280__auto___16227 + (1));
i__7280__auto___16227 = G__16228;
continue;
} else {
}
break;
}

var G__16225 = args16223.length;
switch (G__16225) {
case 1:
return cats.core.lift.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.lift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16223.length)].join('')));

}
});

cats.core.lift.cljs$core$IFn$_invoke$arity$1 = (function (mv){
return cats.protocols._lift.call(null,cats.context._STAR_context_STAR_,mv);
});

cats.core.lift.cljs$core$IFn$_invoke$arity$2 = (function (m,mv){
return cats.protocols._lift.call(null,m,mv);
});

cats.core.lift.cljs$lang$maxFixedArity = 2;
cats.core.deps = (function cats$core$deps(expr,syms){
if(((expr instanceof cljs.core.Symbol)) && (cljs.core.contains_QMARK_.call(null,syms,expr))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.mapcat.call(null,(function (p1__16230_SHARP_){
return cats$core$deps.call(null,p1__16230_SHARP_,syms);
}),expr);
} else {
return cljs.core.List.EMPTY;

}
}
});
cats.core.rename_sym = (function cats$core$rename_sym(expr,renames){
return cljs.core.get.call(null,renames,expr,expr);
});
cats.core.rename = (function cats$core$rename(expr,renames){
if((expr instanceof cljs.core.Symbol)){
return cats.core.rename_sym.call(null,expr,renames);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.map.call(null,(function (p1__16231_SHARP_){
return cats$core$rename.call(null,p1__16231_SHARP_,renames);
}),expr);
} else {
return expr;

}
}
});
cats.core.dedupe_symbols_STAR_ = (function cats$core$dedupe_symbols_STAR_(sym__GT_ap,body){
var renamer = (function cats$core$dedupe_symbols_STAR__$_renamer(p__16256,p__16257){
var map__16261 = p__16256;
var map__16261__$1 = ((((!((map__16261 == null)))?((((map__16261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16261):map__16261);
var summ = map__16261__$1;
var body__$1 = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var syms = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var aps = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"aps","aps",265109554));
var seen = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var renames = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var vec__16262 = p__16257;
var s = cljs.core.nth.call(null,vec__16262,(0),null);
var ap = cljs.core.nth.call(null,vec__16262,(1),null);
var ap_SINGLEQUOTE_ = cats.core.rename.call(null,ap,renames);
var new_aps = cljs.core.conj.call(null,aps,ap_SINGLEQUOTE_);
if(cljs.core.truth_(seen.call(null,s))){
var s_SINGLEQUOTE_ = cljs.core.gensym.call(null);
var new_syms = cljs.core.conj.call(null,syms,s_SINGLEQUOTE_);
var new_seen = cljs.core.conj.call(null,seen,s_SINGLEQUOTE_);
var new_renames = cljs.core.assoc.call(null,renames,s,s_SINGLEQUOTE_);
var new_body = cats.core.rename.call(null,body__$1,new_renames);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),new_renames,new cljs.core.Keyword(null,"body","body",-2049205669),new_body], null);
} else {
var new_syms = cljs.core.conj.call(null,syms,s);
var new_seen = cljs.core.conj.call(null,seen,s);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),renames,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null);
}
});
var summ = cljs.core.reduce.call(null,renamer,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"aps","aps",265109554),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null),sym__GT_ap);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,cljs.core.vector,new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(summ),new cljs.core.Keyword(null,"aps","aps",265109554).cljs$core$IFn$_invoke$arity$1(summ)),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(summ)], null);
});
cats.core.dedupe_symbols = (function cats$core$dedupe_symbols(bindings,body){
var syms = cljs.core.map.call(null,cljs.core.first,bindings);
var aps = cljs.core.map.call(null,cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.call(null,cljs.core.vector,syms,aps);
return cats.core.dedupe_symbols_STAR_.call(null,sym__GT_ap,body);
});
cats.core.dependency_map = (function cats$core$dependency_map(sym__GT_ap){
var syms = cljs.core.map.call(null,cljs.core.first,sym__GT_ap);
var symset = cljs.core.set.call(null,syms);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__6990__auto__ = ((function (syms,symset){
return (function cats$core$dependency_map_$_iter__16272(s__16273){
return (new cljs.core.LazySeq(null,((function (syms,symset){
return (function (){
var s__16273__$1 = s__16273;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16273__$1);
if(temp__4657__auto__){
var s__16273__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16273__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__16273__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__16275 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__16274 = (0);
while(true){
if((i__16274 < size__6989__auto__)){
var vec__16278 = cljs.core._nth.call(null,c__6988__auto__,i__16274);
var s = cljs.core.nth.call(null,vec__16278,(0),null);
var ap = cljs.core.nth.call(null,vec__16278,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
cljs.core.chunk_append.call(null,b__16275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null));

var G__16280 = (i__16274 + (1));
i__16274 = G__16280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16275),cats$core$dependency_map_$_iter__16272.call(null,cljs.core.chunk_rest.call(null,s__16273__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16275),null);
}
} else {
var vec__16279 = cljs.core.first.call(null,s__16273__$2);
var s = cljs.core.nth.call(null,vec__16279,(0),null);
var ap = cljs.core.nth.call(null,vec__16279,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null),cats$core$dependency_map_$_iter__16272.call(null,cljs.core.rest.call(null,s__16273__$2)));
}
} else {
return null;
}
break;
}
});})(syms,symset))
,null,null));
});})(syms,symset))
;
return iter__6990__auto__.call(null,sym__GT_ap);
})());
});
cats.core.remove_deps = (function cats$core$remove_deps(deps,symset){
var removed = (function (){var iter__6990__auto__ = (function cats$core$remove_deps_$_iter__16289(s__16290){
return (new cljs.core.LazySeq(null,(function (){
var s__16290__$1 = s__16290;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16290__$1);
if(temp__4657__auto__){
var s__16290__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16290__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__16290__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__16292 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__16291 = (0);
while(true){
if((i__16291 < size__6989__auto__)){
var vec__16295 = cljs.core._nth.call(null,c__6988__auto__,i__16291);
var s = cljs.core.nth.call(null,vec__16295,(0),null);
var depset = cljs.core.nth.call(null,vec__16295,(1),null);
cljs.core.chunk_append.call(null,b__16292,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null));

var G__16297 = (i__16291 + (1));
i__16291 = G__16297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16292),cats$core$remove_deps_$_iter__16289.call(null,cljs.core.chunk_rest.call(null,s__16290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16292),null);
}
} else {
var vec__16296 = cljs.core.first.call(null,s__16290__$2);
var s = cljs.core.nth.call(null,vec__16296,(0),null);
var depset = cljs.core.nth.call(null,vec__16296,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null),cats$core$remove_deps_$_iter__16289.call(null,cljs.core.rest.call(null,s__16290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,deps);
})();
return cljs.core.into.call(null,cljs.core.empty.call(null,deps),removed);
});
cats.core.topo_sort_STAR_ = (function cats$core$topo_sort_STAR_(deps,seen,batches,current){
while(true){
if(cljs.core.empty_QMARK_.call(null,deps)){
return cljs.core.conj.call(null,batches,current);
} else {
var dep = cljs.core.first.call(null,deps);
var vec__16299 = dep;
var s = cljs.core.nth.call(null,vec__16299,(0),null);
var dependencies = cljs.core.nth.call(null,vec__16299,(1),null);
var dependant_QMARK_ = cljs.core.some.call(null,dependencies,seen);
if((dependant_QMARK_ == null)){
var G__16300 = cljs.core.subvec.call(null,deps,(1));
var G__16301 = cljs.core.conj.call(null,seen,s);
var G__16302 = batches;
var G__16303 = cljs.core.conj.call(null,current,s);
deps = G__16300;
seen = G__16301;
batches = G__16302;
current = G__16303;
continue;
} else {
var G__16304 = cats.core.remove_deps.call(null,cljs.core.subvec.call(null,deps,(1)),cljs.core.set.call(null,current));
var G__16305 = cljs.core.conj.call(null,seen,s);
var G__16306 = cljs.core.conj.call(null,batches,current);
var G__16307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
deps = G__16304;
seen = G__16305;
batches = G__16306;
current = G__16307;
continue;
}
}
break;
}
});
cats.core.topo_sort = (function cats$core$topo_sort(deps){
var syms = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,deps));
return cats.core.topo_sort_STAR_.call(null,deps,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
cats.core.bindings__GT_batches = (function cats$core$bindings__GT_batches(bindings){
var syms = cljs.core.map.call(null,cljs.core.first,bindings);
var aps = cljs.core.map.call(null,cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.call(null,cljs.core.vector,syms,aps);
var sorted_deps = cats.core.topo_sort.call(null,cats.core.dependency_map.call(null,sym__GT_ap));
return sorted_deps;
});
cats.core.alet_STAR_ = (function cats$core$alet_STAR_(batches,env,body){
var fb = cljs.core.first.call(null,batches);
var rb = cljs.core.rest.call(null,batches);
var fs = cljs.core.first.call(null,fb);
var fa = cljs.core.get.call(null,env,fs);
var code = cljs.core.reduce.call(null,((function (fb,rb,fs,fa){
return (function (acc,syms){
var fs__$1 = cljs.core.first.call(null,syms);
var fa__$1 = cljs.core.get.call(null,env,fs__$1);
var rs = cljs.core.rest.call(null,syms);
var faps = cljs.core.map.call(null,((function (fs__$1,fa__$1,rs,fb,rb,fs,fa){
return (function (p1__16308_SHARP_){
return cljs.core.get.call(null,env,p1__16308_SHARP_);
});})(fs__$1,fa__$1,rs,fb,rb,fs,fa))
,rs);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,syms),(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,fs__$1)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,acc))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,fa__$1))));
} else {
var cf = cljs.core.reduce.call(null,((function (fs__$1,fa__$1,rs,faps,fb,rb,fs,fa){
return (function (f,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,sym)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,f))));
});})(fs__$1,fa__$1,rs,faps,fb,rb,fs,fa))
,acc,cljs.core.reverse.call(null,syms));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fapply","cats.core/fapply",1894900497,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cf),cljs.core._conj.call(null,cljs.core.List.EMPTY,fa__$1))))),faps)));
}
});})(fb,rb,fs,fa))
,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body))),cljs.core.reverse.call(null,batches));
var join_count = (cljs.core.count.call(null,batches) - (1));
return cljs.core.reduce.call(null,((function (fb,rb,fs,fa,code,join_count){
return (function (acc,_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","join","cats.core/join",1184708213,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,acc))));
});})(fb,rb,fs,fa,code,join_count))
,code,cljs.core.range.call(null,join_count));
});
cats.core.arglists = (function cats$core$arglists(var$){
return cljs.core.get.call(null,cljs.core.meta.call(null,var$),new cljs.core.Keyword(null,"arglists","arglists",1661989754));
});
cats.core.single_arity_QMARK_ = (function cats$core$single_arity_QMARK_(var$){
var args = cats.core.arglists.call(null,var$);
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))) && (cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.first.call(null,args))));
});
cats.core.arity = (function cats$core$arity(var$){
if(cljs.core.truth_(cats.core.single_arity_QMARK_.call(null,var$))){
} else {
throw (new Error("Assert failed: (single-arity? var)"));
}

return cljs.core.count.call(null,cljs.core.first.call(null,cats.core.arglists.call(null,var$)));
});
/**
 * Given a collection of monadic values, collect
 *   their values in a seq returned in the monadic context.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.monad.maybe :as maybe]
 *             '[cats.core :as m])
 * 
 *    (m/sequence [(maybe/just 2) (maybe/just 3)])
 *    ;; => #<Just [[2, 3]]>
 * 
 *    (m/sequence [(maybe/nothing) (maybe/just 3)])
 *    ;; => #<Nothing>
 * 
 *    (ctx/with-context maybe/context
 *      (m/sequence []))
 *    ;; => #<Just [()]>
 *   
 */
cats.core.sequence = (function cats$core$sequence(mvs){
if(cljs.core.empty_QMARK_.call(null,mvs)){
return cats.core.return$.call(null,cljs.core.List.EMPTY);
} else {
var ctx = cats.context.get_current.call(null,cljs.core.first.call(null,mvs));
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16316 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR_16316,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_16316,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR_16316,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR_16316,ctx))
);
});})(_STAR_context_STAR_16316,ctx))
);
});})(_STAR_context_STAR_16316,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16316;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16317 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR_16317,clevel__15862__auto__,nlevel__15863__auto__,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_16317,clevel__15862__auto__,nlevel__15863__auto__,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR_16317,clevel__15862__auto__,nlevel__15863__auto__,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR_16317,clevel__15862__auto__,nlevel__15863__auto__,ctx))
);
});})(_STAR_context_STAR_16317,clevel__15862__auto__,nlevel__15863__auto__,ctx))
);
});})(_STAR_context_STAR_16317,clevel__15862__auto__,nlevel__15863__auto__,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16317;
}} else {
return cljs.core.reduce.call(null,((function (clevel__15862__auto__,nlevel__15863__auto__,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (clevel__15862__auto__,nlevel__15863__auto__,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (clevel__15862__auto__,nlevel__15863__auto__,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(clevel__15862__auto__,nlevel__15863__auto__,ctx))
);
});})(clevel__15862__auto__,nlevel__15863__auto__,ctx))
);
});})(clevel__15862__auto__,nlevel__15863__auto__,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}
}
}
});
/**
 * Given a function `mf` that takes a value and puts it into a
 *   monadic context, and a collection, map `mf` over the collection,
 *   calling `sequence` on the results.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.monad.maybe :as maybe]
 *             '[cats.core :as m])
 * 
 *    (m/mapseq maybe/just [2 3])
 *    ;=> <Just [[2 3]]>
 * 
 *    (m/mapseq (fn [v]
 *                (if (odd? v)
 *                  (maybe/just v)
 *                  (maybe/nothing)))
 *              [1 2])
 *    ;; => #<Nothing>
 * 
 *    (ctx/with-context maybe/context
 *      (mapseq #(maybe/just (* % 2)) []))
 *    ;; => #<Just [()]>
 *   
 */
cats.core.mapseq = (function cats$core$mapseq(mf,coll){
return cats.core.sequence.call(null,cljs.core.map.call(null,mf,coll));
});
/**
 * Same as `mapseq` but with the arguments flipped.
 * 
 *   Let's see a little example:
 * 
 *    (m/forseq [2 3] maybe/just)
 *    ;; => <Just [[2 3]]>
 * 
 *   Yet an other example that fails:
 * 
 *    (m/forseq [1 2]
 *              (fn [v]
 *                (if (odd? v)
 *                  (maybe/just v)
 *                  (maybe/nothing))))
 *    ;; => <Nothing>
 *   
 */
cats.core.forseq = (function cats$core$forseq(vs,mf){
return cats.core.mapseq.call(null,mf,vs);
});
/**
 * Apply a predicate to a value in a `MonadZero` instance,
 *   returning the identity element when the predicate does not hold.
 * 
 *   Otherwise, return the instance unchanged.
 * 
 *    (require '[cats.monad.maybe :as maybe])
 *    (require '[cats.core :as m])
 * 
 *    (m/filter (partial < 2) (maybe/just 3))
 *    ;=> <Just [3]>
 * 
 *    (m/filter (partial < 4) (maybe/just 3))
 *    ;=> <Nothing>
 *   
 */
cats.core.filter = (function cats$core$filter(p,mv){
return cats.core.bind.call(null,mv,(function (v){
return cats.core.bind.call(null,cats.core.guard.call(null,p.call(null,v)),(function (G__16319){
return cats.core.return$.call(null,v);
}));
}));
});
/**
 * A Haskell-style `fmap` alias.
 */
cats.core._LT_$_GT_ = cats.core.fmap;
/**
 * A Haskell-style `fapply` alias.
 */
cats.core._LT__STAR__GT_ = cats.core.fapply;
/**
 * Perform a Haskell-style left-associative bind.
 * 
 *   Let's see it in action:
 * 
 *    (>>= (just 1) (comp just inc) (comp just inc))
 *    ;; => #<Just [3]>
 *   
 */
cats.core._GT__GT__EQ_ = (function cats$core$_GT__GT__EQ_(var_args){
var args16320 = [];
var len__7279__auto___16326 = arguments.length;
var i__7280__auto___16327 = (0);
while(true){
if((i__7280__auto___16327 < len__7279__auto___16326)){
args16320.push((arguments[i__7280__auto___16327]));

var G__16328 = (i__7280__auto___16327 + (1));
i__7280__auto___16327 = G__16328;
continue;
} else {
}
break;
}

var G__16325 = args16320.length;
switch (G__16325) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args16320.slice((2)),(0),null));
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7298__auto__);

}
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (mv,f){
return cats.core.bind.call(null,mv,f);
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,f,fs){
return cljs.core.reduce.call(null,cats.core.bind,mv,cljs.core.cons.call(null,f,fs));
});

cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq16321){
var G__16322 = cljs.core.first.call(null,seq16321);
var seq16321__$1 = cljs.core.next.call(null,seq16321);
var G__16323 = cljs.core.first.call(null,seq16321__$1);
var seq16321__$2 = cljs.core.next.call(null,seq16321__$1);
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__16322,G__16323,seq16321__$2);
});

cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Perform a Haskell-style left-associative bind,
 *   ignoring the values produced by the monadic computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(var_args){
var args16330 = [];
var len__7279__auto___16336 = arguments.length;
var i__7280__auto___16337 = (0);
while(true){
if((i__7280__auto___16337 < len__7279__auto___16336)){
args16330.push((arguments[i__7280__auto___16337]));

var G__16338 = (i__7280__auto___16337 + (1));
i__7280__auto___16337 = G__16338;
continue;
} else {
}
break;
}

var G__16335 = args16330.length;
switch (G__16335) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7298__auto__ = (new cljs.core.IndexedSeq(args16330.slice((2)),(0),null));
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7298__auto__);

}
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2 = (function (mv,mv_SINGLEQUOTE_){
return cats.core.bind.call(null,mv,(function (_){
return mv_SINGLEQUOTE_;
}));
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,mv_SINGLEQUOTE_,mvs){
return cljs.core.reduce.call(null,cats.core._GT__GT_,mv,cljs.core.cons.call(null,mv_SINGLEQUOTE_,mvs));
});

cats.core._GT__GT_.cljs$lang$applyTo = (function (seq16331){
var G__16332 = cljs.core.first.call(null,seq16331);
var seq16331__$1 = cljs.core.next.call(null,seq16331);
var G__16333 = cljs.core.first.call(null,seq16331__$1);
var seq16331__$2 = cljs.core.next.call(null,seq16331__$1);
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__16332,G__16333,seq16331__$2);
});

cats.core._GT__GT_.cljs$lang$maxFixedArity = (2);
/**
 * Same as the two argument version of `>>=` but with the
 *   arguments flipped.
 */
cats.core._EQ__LT__LT_ = (function cats$core$_EQ__LT__LT_(f,mv){
return cats.core._GT__GT__EQ_.call(null,mv,f);
});
/**
 * Left-to-right composition of monads.
 */
cats.core._GT__EQ__GT_ = (function cats$core$_GT__EQ__GT_(mf,mg,x){
if(!((function (){var G__16343 = cats.context.get_current.call(null,mf);
if(!((G__16343 == null))){
if((false) || (G__16343.cats$protocols$Context$)){
return true;
} else {
if((!G__16343.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__16343);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__16343);
}
})())){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16344 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.get_current.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_16344){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_16344){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_16344))
);
});})(_STAR_context_STAR_16344))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16344;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,cats.context.get_current.call(null,mf));
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16345 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.get_current.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_16345,clevel__15862__auto__,nlevel__15863__auto__){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_16345,clevel__15862__auto__,nlevel__15863__auto__){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_16345,clevel__15862__auto__,nlevel__15863__auto__))
);
});})(_STAR_context_STAR_16345,clevel__15862__auto__,nlevel__15863__auto__))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16345;
}} else {
return cats.core.bind.call(null,mf.call(null,x),((function (clevel__15862__auto__,nlevel__15863__auto__){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (clevel__15862__auto__,nlevel__15863__auto__){
return (function (b){
return cats.core.return$.call(null,b);
});})(clevel__15862__auto__,nlevel__15863__auto__))
);
});})(clevel__15862__auto__,nlevel__15863__auto__))
);
}
}
});
/**
 * Right-to-left composition of monads.
 *   Same as `>=>` with its first two arguments flipped.
 */
cats.core._LT__EQ__LT_ = (function cats$core$_LT__EQ__LT_(mg,mf,x){
if(!((function (){var G__16349 = cats.context.get_current.call(null,mf);
if(!((G__16349 == null))){
if((false) || (G__16349.cats$protocols$Context$)){
return true;
} else {
if((!G__16349.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__16349);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__16349);
}
})())){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16350 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.get_current.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_16350){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_16350){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_16350))
);
});})(_STAR_context_STAR_16350))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16350;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,cats.context.get_current.call(null,mf));
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16351 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.get_current.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_16351,clevel__15862__auto__,nlevel__15863__auto__){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_16351,clevel__15862__auto__,nlevel__15863__auto__){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_16351,clevel__15862__auto__,nlevel__15863__auto__))
);
});})(_STAR_context_STAR_16351,clevel__15862__auto__,nlevel__15863__auto__))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16351;
}} else {
return cats.core.bind.call(null,mf.call(null,x),((function (clevel__15862__auto__,nlevel__15863__auto__){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (clevel__15862__auto__,nlevel__15863__auto__){
return (function (b){
return cats.core.return$.call(null,b);
});})(clevel__15862__auto__,nlevel__15863__auto__))
);
});})(clevel__15862__auto__,nlevel__15863__auto__))
);
}
}
});
/**
 * Generic function to unwrap/extract
 *   the inner value of a container.
 */
cats.core.extract = (function cats$core$extract(v){
return cats.protocols._extract.call(null,v);
});
cats.core._LT__GT_ = cats.core.mappend;
/**
 * Perform a right-associative fold on the data structure.
 */
cats.core.foldr = (function cats$core$foldr(f,z,xs){
var ctx = cats.protocols._get_context.call(null,xs);
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16356 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldr.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16356;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16357 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldr.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16357;
}} else {
return cats.protocols._foldr.call(null,ctx,f,z,xs);
}
}
});
/**
 * Perform a left-associative fold on the data structure.
 */
cats.core.foldl = (function cats$core$foldl(f,z,xs){
var ctx = cats.protocols._get_context.call(null,xs);
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16362 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldl.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16362;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16363 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldl.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16363;
}} else {
return cats.protocols._foldl.call(null,ctx,f,z,xs);
}
}
});
/**
 * Given an optional monadic context, a function that takes two non-monadic
 *   arguments and returns a value inside the given monadic context, an initial
 *   value, and a collection of values, perform a left-associative fold.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.core :as m]
 *             '[cats.monad.maybe :as maybe])
 * 
 *    (defn m-div [x y]
 *      (if (zero? y)
 *        (maybe/nothing)
 *        (maybe/just (/ x y))))
 * 
 *    (m/foldm m-div 1 [1 2 3])
 *    (m/foldm maybe/context m-div 1 [1 2 3])
 *    ;; => #<Just 1/6>
 * 
 *    (m/foldm maybe/context m-div 1 [1 0 3])
 *    ;; => #<Nothing>
 * 
 *    (foldm m-div 1 [])
 *    ;; => Exception
 * 
 *    (m/foldm maybe/context m-div 1 [])
 *    (ctx/with-context maybe/context
 *      (foldm m-div 1 []))
 *    ;; => #<Just 1>
 *   
 */
cats.core.foldm = (function cats$core$foldm(var_args){
var args16364 = [];
var len__7279__auto___16368 = arguments.length;
var i__7280__auto___16369 = (0);
while(true){
if((i__7280__auto___16369 < len__7279__auto___16368)){
args16364.push((arguments[i__7280__auto___16369]));

var G__16370 = (i__7280__auto___16369 + (1));
i__7280__auto___16369 = G__16370;
continue;
} else {
}
break;
}

var G__16366 = args16364.length;
switch (G__16366) {
case 3:
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cats.core.foldm.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16364.length)].join('')));

}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$3 = (function (f,z,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cats.core.return$.call(null,z);
} else {
var vec__16367 = xs;
var h = cljs.core.nth.call(null,vec__16367,(0),null);
var t = cljs.core.nthnext.call(null,vec__16367,(1));
return cats.core.bind.call(null,f.call(null,z,h),((function (vec__16367,h,t){
return (function (z_SINGLEQUOTE_){
if(cljs.core.empty_QMARK_.call(null,t)){
return cats.core.return$.call(null,z_SINGLEQUOTE_);
} else {
return cats.core.foldm.call(null,f,z_SINGLEQUOTE_,t);
}
});})(vec__16367,h,t))
);
}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$4 = (function (ctx,f,z,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cats.core.return$.call(null,ctx,z);
} else {
return cats.core.foldm.call(null,f,z,xs);
}
});

cats.core.foldm.cljs$lang$maxFixedArity = 4;
/**
 * Map each element of a structure to an action, evaluate these
 *   actions from left to right, and collect the results.
 * 
 *    (defn inc-if-even
 *      [n]
 *      (if (even? n)
 *        (maybe/just (inc n))
 *        (maybe/nothing)))
 * 
 *    (ctx/with-context maybe/context
 *      (m/traverse inc-if-even [2 4]))
 *    ;; => #<Just [3 4]>
 *   
 */
cats.core.traverse = (function cats$core$traverse(var_args){
var args16372 = [];
var len__7279__auto___16378 = arguments.length;
var i__7280__auto___16379 = (0);
while(true){
if((i__7280__auto___16379 < len__7279__auto___16378)){
args16372.push((arguments[i__7280__auto___16379]));

var G__16380 = (i__7280__auto___16379 + (1));
i__7280__auto___16379 = G__16380;
continue;
} else {
}
break;
}

var G__16374 = args16372.length;
switch (G__16374) {
case 2:
return cats.core.traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16372.length)].join('')));

}
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$2 = (function (f,tv){
return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$3 = (function (ctx,f,tv){
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_16376 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16376;
}} else {
var clevel__15862__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__15863__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__15863__auto__ >= clevel__15862__auto__)){
var _STAR_context_STAR_16377 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_16377;
}} else {
return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}
}
});

cats.core.traverse.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map