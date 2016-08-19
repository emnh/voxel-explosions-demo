// Compiled by ClojureScript 1.8.40 {}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
if(cljs.core.vector_QMARK_.call(null,e)){
var G__8141 = (((cljs.core.first.call(null,e) instanceof cljs.core.Keyword))?cljs.core.first.call(null,e).fqn:null);
switch (G__8141) {
case "schema.spec.collection/optional":
return schema.spec.collection.sequence_transformer.call(null,cljs.core.next.call(null,e),params,then);

break;
case "schema.spec.collection/remaining":
var _ = ((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,e)))?null:(function(){throw (new Error(schema.utils.format_STAR_.call(null,"remaining can have only one schema.")))})());
var c = schema.spec.core.sub_checker.call(null,cljs.core.second.call(null,e),params);
return ((function (_,c,G__8141){
return (function (res,x){
cljs.core.swap_BANG_.call(null,res,cljs.core.into,cljs.core.map.call(null,c,x));

return then.call(null,res,null);
});
;})(_,c,G__8141))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,e))].join('')));

}
} else {
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker.call(null,e,params);
return ((function (parser,c){
return (function (res,x){
return then.call(null,res,parser.call(null,((function (parser,c){
return (function (t){
return cljs.core.swap_BANG_.call(null,res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_.call(null,t))?t:c.call(null,t)));
});})(parser,c))
,x));
});
;})(parser,c))
}
});
schema.spec.collection.sequence_transformer = (function schema$spec$collection$sequence_transformer(elts,params,then){
if(cljs.core.not_any_QMARK_.call(null,(function (p1__8143_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__8143_SHARP_)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__8143_SHARP_),new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821)));
}),cljs.core.butlast.call(null,elts))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Remaining schemas must be in tail position.")));
}

return cljs.core.reduce.call(null,(function (f,e){
return schema.spec.collection.element_transformer.call(null,e,params,f);
}),then,cljs.core.reverse.call(null,elts));
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some.call(null,schema.utils.error_QMARK_,l);
});
schema.spec.collection.subschemas = (function schema$spec$collection$subschemas(elt){
if(cljs.core.map_QMARK_.call(null,elt)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(elt)], null);
} else {
if(cljs.core.vector_QMARK_.call(null,elt)){
} else {
throw (new Error("Assert failed: (vector? elt)"));
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821),null,new cljs.core.Keyword("schema.spec.collection","optional","schema.spec.collection/optional",-854614927),null], null), null).call(null,cljs.core.first.call(null,elt)))){
} else {
throw (new Error("Assert failed: (#{:schema.spec.collection/remaining :schema.spec.collection/optional} (first elt))"));
}

return cljs.core.mapcat.call(null,schema$spec$collection$subschemas,cljs.core.next.call(null,elt));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.collection.CollectionSpec = (function (pre,constructor$,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor$ = constructor$;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k8145,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__8147 = (((k8145 instanceof cljs.core.Keyword))?k8145.fqn:null);
switch (G__8147) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor$;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8145,else__6835__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.mapcat.call(null,schema.spec.collection.subschemas,self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor$__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?self__.constructor$:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = schema.spec.collection.sequence_transformer.call(null,self__.elements,params,((function (constructor$__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor$__$1,this$__$1))
);
return ((function (constructor$__$1,t,this$__$1){
return (function (x){
var or__6210__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var remaining = t.call(null,res,x);
var res__$1 = cljs.core.deref.call(null,res);
if(cljs.core.truth_((function (){var or__6210__auto____$1 = cljs.core.seq.call(null,remaining);
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_.call(null,res__$1);
}
})())){
return schema.utils.error.call(null,self__.on_error.call(null,x,res__$1,remaining));
} else {
return constructor$__$1.call(null,res__$1);
}
}
});
;})(constructor$__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8144){
var self__ = this;
var G__8144__$1 = this;
return (new cljs.core.RecordIter((0),G__8144__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__8144){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__8148 = cljs.core.keyword_identical_QMARK_;
var expr__8149 = k__6840__auto__;
if(cljs.core.truth_(pred__8148.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__8149))){
return (new schema.spec.collection.CollectionSpec(G__8144,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8148.call(null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),expr__8149))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__8144,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8148.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__8149))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,G__8144,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8148.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__8149))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,G__8144,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__8144),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__8144){
var self__ = this;
var this__6831__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,G__8144,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor$,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor$,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__8146){
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__8146),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(G__8146),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__8146),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__8146),null,cljs.core.dissoc.call(null,G__8146,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a nested list structure, in which the leaf elements each
 * provide an element schema, parser (allowing for efficient processing of structured
 * collections), and optional error wrapper.  Each item in the list can be a leaf
 * element or an `optional` nested element spec (see below).  In addition, the final
 * element can be a `remaining` schema (see below).
 * 
 * Note that the `optional` carries no semantics with respect to validation;
 * the user must ensure that the parser enforces the desired semantics, which
 * should match the structure of the spec for proper generation.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor$,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec.call(null,pre,constructor$,elements,on_error);
});
/**
 * All remaining elements must match schema s
 */
schema.spec.collection.remaining = (function schema$spec$collection$remaining(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821),s], null);
});
/**
 * If any more elements are present, they must match the elements in 'ss'
 */
schema.spec.collection.optional = (function schema$spec$collection$optional(var_args){
var args__7286__auto__ = [];
var len__7279__auto___8153 = arguments.length;
var i__7280__auto___8154 = (0);
while(true){
if((i__7280__auto___8154 < len__7279__auto___8153)){
args__7286__auto__.push((arguments[i__7280__auto___8154]));

var G__8155 = (i__7280__auto___8154 + (1));
i__7280__auto___8154 = G__8155;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
return cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword("schema.spec.collection","optional","schema.spec.collection/optional",-854614927),ss));
});

schema.spec.collection.optional.cljs$lang$maxFixedArity = (0);

schema.spec.collection.optional.cljs$lang$applyTo = (function (seq8152){
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8152));
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return schema.spec.collection.remaining.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (coll){
throw (new Error([cljs.core.str("should never be not called")].join('')));
})], null));
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
var base = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
if(cljs.core.truth_(required_QMARK_)){
return base;
} else {
return schema.spec.collection.optional.call(null,base);
}
});
schema.spec.collection.optional_tail = (function schema$spec$collection$optional_tail(schema__$1,parser,more){
return cljs.core.into.call(null,schema.spec.collection.optional.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null)),more);
});

//# sourceMappingURL=collection.js.map