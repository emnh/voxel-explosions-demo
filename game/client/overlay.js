// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.overlay');
goog.require('cljs.core');
goog.require('game.client.engine');
goog.require('game.client.selection');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('jayq.core');
goog.require('game.client.scene');
goog.require('game.shared.state');
goog.require('rum.core');
goog.require('sablono.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
goog.require('clojure.string');
goog.require('game.client.common');
game.client.overlay.xyz_size = (3);
game.client.overlay.xyzw_size = (4);
game.client.overlay.new_cache = (function game$client$overlay$new_cache(){
return [[[],[],[],[],[]]];
});
if(typeof game.client.overlay.sprite_cache !== 'undefined'){
} else {
game.client.overlay.sprite_cache = game.client.overlay.new_cache.call(null);
}
if(typeof game.client.overlay.new_sprite_cache !== 'undefined'){
} else {
game.client.overlay.new_sprite_cache = game.client.overlay.new_cache.call(null);
}
game.client.overlay.get_cached_sprite = (function game$client$overlay$get_cached_sprite(texture,new_fn){
var texture_id = texture.rts_id;
if((cljs.core.count.call(null,((game.client.overlay.sprite_cache[(0)])[texture_id])) > (0))){
var cached = ((game.client.overlay.sprite_cache[(0)])[texture_id]).pop();
((game.client.overlay.new_sprite_cache[(0)])[texture_id]).push(cached);

return cached;
} else {
var not_cached = new_fn.call(null);
((game.client.overlay.new_sprite_cache[(0)])[texture_id]).push(not_cached);

return not_cached;
}
});
game.client.overlay.get_pixi_filter = (function game$client$overlay$get_pixi_filter(){
var shader = null;
var TestFilter = ((function (shader){
return (function (){
var this$ = this;
return PIXI.Filter.call(this$,null,shader,{"gray": {"type": "1f", "value": (1)}});
});})(shader))
;
TestFilter.prototype = Object.create(PIXI.Filter.prototype);

TestFilter.prototype.constructor = TestFilter;

return (new TestFilter());
});
game.client.overlay.bar_block_width = (12);
game.client.overlay.bar_height = (8);
game.client.overlay.light_opacity = 0.2;
game.client.overlay.shadow_opacity = 0.4;
game.client.overlay.shadow_width = (1);
game.client.overlay.shadow_height = (2);
game.client.overlay.max_blocks = (20);
game.client.overlay.min_blocks = (4);
game.client.overlay.line_width = (1);
game.client.overlay.get_texture = (function game$client$overlay$get_texture(pixi_renderer,width,height,color,transparent){
var line_width = (1);
var render_texture = PIXI.RenderTexture.create((width + ((2) * line_width)),(height + ((2) * line_width)));
var graphics = (new PIXI.Graphics());
var x1 = line_width;
var y1 = line_width;
graphics.lineStyle((1),(0),(1));

graphics.beginFill(color,(cljs.core.truth_(transparent)?(0):(1)));

graphics.drawRect(x1,y1,(width - line_width),height);

graphics.endFill();

graphics.lineStyle((0));

graphics.beginFill((16777215),game.client.overlay.light_opacity);

graphics.drawRect(x1,y1,width,game.client.overlay.shadow_height);

graphics.endFill();

graphics.lineStyle((0));

graphics.beginFill((0),game.client.overlay.shadow_opacity);

graphics.drawRect(x1,((height + (- game.client.overlay.shadow_height)) + (1)),width,(1));

graphics.endFill();

graphics.lineStyle((0));

graphics.beginFill((0),(game.client.overlay.shadow_opacity / (2)));

graphics.drawRect(x1,(height + (- game.client.overlay.shadow_height)),width,(1));

graphics.endFill();

graphics.lineStyle((0));

graphics.beginFill((0),game.client.overlay.shadow_opacity);

graphics.drawRect(x1,y1,game.client.overlay.shadow_width,height);

graphics.drawRect(((width + (- game.client.overlay.shadow_width)) + (- x1)),y1,game.client.overlay.shadow_width,height);

graphics.endFill();

pixi_renderer.render(graphics,render_texture);

return render_texture;
});
game.client.overlay.select_texture = (function game$client$overlay$select_texture(red_texture,orange_texture,yellow_texture,green_texture,health){
if((health < 0.25)){
return red_texture;
} else {
if((health < 0.5)){
return orange_texture;
} else {
if((health < 0.75)){
return yellow_texture;
} else {
return green_texture;

}
}
}
});
game.client.overlay.draw_health_bar = (function game$client$overlay$draw_health_bar(component,stage,partial_select_texture,transparent_texture,index,box){
var mesh = (box["mesh"]);
var unit = game.client.engine.get_unit_for_mesh.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),mesh);
var vec__25683 = box;
var x1 = cljs.core.nth.call(null,vec__25683,(0),null);
var y1 = cljs.core.nth.call(null,vec__25683,(1),null);
var x2 = cljs.core.nth.call(null,vec__25683,(2),null);
var y2 = cljs.core.nth.call(null,vec__25683,(3),null);
var box_width = (x2 - x1);
var bar_width = (game.client.overlay.bar_block_width * (function (){var x__6548__auto__ = (function (){var x__6541__auto__ = game.client.math.round.call(null,(box_width / game.client.overlay.bar_block_width));
var y__6542__auto__ = game.client.overlay.min_blocks;
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})();
var y__6549__auto__ = game.client.overlay.max_blocks;
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})());
var x1__$1 = (((box_width - bar_width) / (2)) + x1);
var height = (y2 - y1);
var health = (new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(unit) / new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(unit)));
var health_width = (health * bar_width);
var remainder = cljs.core.rem.call(null,health_width,game.client.overlay.bar_block_width);
var last_block_opacity = (remainder / game.client.overlay.bar_block_width);
var health_width__$1 = (health_width - remainder);
var y1__$1 = (y1 - game.client.overlay.bar_height);
var texture = partial_select_texture.call(null,health);
var seq__25684_25692 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),health_width__$1,game.client.overlay.bar_block_width));
var chunk__25685_25693 = null;
var count__25686_25694 = (0);
var i__25687_25695 = (0);
while(true){
if((i__25687_25695 < count__25686_25694)){
var i_25696 = cljs.core._nth.call(null,chunk__25685_25693,i__25687_25695);
var sprite_25697 = game.client.overlay.get_cached_sprite.call(null,texture,((function (seq__25684_25692,chunk__25685_25693,count__25686_25694,i__25687_25695,i_25696,mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture){
return (function (){
return (new PIXI.Sprite(texture));
});})(seq__25684_25692,chunk__25685_25693,count__25686_25694,i__25687_25695,i_25696,mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture))
);
stage.addChild(sprite_25697);

sprite_25697.position.x = (x1__$1 + i_25696);

sprite_25697.position.y = y1__$1;

sprite_25697.alpha = (1);

var G__25698 = seq__25684_25692;
var G__25699 = chunk__25685_25693;
var G__25700 = count__25686_25694;
var G__25701 = (i__25687_25695 + (1));
seq__25684_25692 = G__25698;
chunk__25685_25693 = G__25699;
count__25686_25694 = G__25700;
i__25687_25695 = G__25701;
continue;
} else {
var temp__4657__auto___25702 = cljs.core.seq.call(null,seq__25684_25692);
if(temp__4657__auto___25702){
var seq__25684_25703__$1 = temp__4657__auto___25702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25684_25703__$1)){
var c__7021__auto___25704 = cljs.core.chunk_first.call(null,seq__25684_25703__$1);
var G__25705 = cljs.core.chunk_rest.call(null,seq__25684_25703__$1);
var G__25706 = c__7021__auto___25704;
var G__25707 = cljs.core.count.call(null,c__7021__auto___25704);
var G__25708 = (0);
seq__25684_25692 = G__25705;
chunk__25685_25693 = G__25706;
count__25686_25694 = G__25707;
i__25687_25695 = G__25708;
continue;
} else {
var i_25709 = cljs.core.first.call(null,seq__25684_25703__$1);
var sprite_25710 = game.client.overlay.get_cached_sprite.call(null,texture,((function (seq__25684_25692,chunk__25685_25693,count__25686_25694,i__25687_25695,i_25709,seq__25684_25703__$1,temp__4657__auto___25702,mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture){
return (function (){
return (new PIXI.Sprite(texture));
});})(seq__25684_25692,chunk__25685_25693,count__25686_25694,i__25687_25695,i_25709,seq__25684_25703__$1,temp__4657__auto___25702,mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture))
);
stage.addChild(sprite_25710);

sprite_25710.position.x = (x1__$1 + i_25709);

sprite_25710.position.y = y1__$1;

sprite_25710.alpha = (1);

var G__25711 = cljs.core.next.call(null,seq__25684_25703__$1);
var G__25712 = null;
var G__25713 = (0);
var G__25714 = (0);
seq__25684_25692 = G__25711;
chunk__25685_25693 = G__25712;
count__25686_25694 = G__25713;
i__25687_25695 = G__25714;
continue;
}
} else {
}
}
break;
}

var sprite_25715 = game.client.overlay.get_cached_sprite.call(null,texture,((function (mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture){
return (function (){
return (new PIXI.Sprite(texture));
});})(mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture))
);
stage.addChild(sprite_25715);

sprite_25715.position.x = (x1__$1 + health_width__$1);

sprite_25715.position.y = y1__$1;

sprite_25715.alpha = last_block_opacity;

var seq__25688 = cljs.core.seq.call(null,cljs.core.range.call(null,health_width__$1,bar_width,game.client.overlay.bar_block_width));
var chunk__25689 = null;
var count__25690 = (0);
var i__25691 = (0);
while(true){
if((i__25691 < count__25690)){
var i = cljs.core._nth.call(null,chunk__25689,i__25691);
var sprite_25716 = game.client.overlay.get_cached_sprite.call(null,transparent_texture,((function (seq__25688,chunk__25689,count__25690,i__25691,i,mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture){
return (function (){
return (new PIXI.Sprite(transparent_texture));
});})(seq__25688,chunk__25689,count__25690,i__25691,i,mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture))
);
stage.addChild(sprite_25716);

sprite_25716.position.x = (x1__$1 + i);

sprite_25716.position.y = y1__$1;

var G__25717 = seq__25688;
var G__25718 = chunk__25689;
var G__25719 = count__25690;
var G__25720 = (i__25691 + (1));
seq__25688 = G__25717;
chunk__25689 = G__25718;
count__25690 = G__25719;
i__25691 = G__25720;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25688);
if(temp__4657__auto__){
var seq__25688__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25688__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__25688__$1);
var G__25721 = cljs.core.chunk_rest.call(null,seq__25688__$1);
var G__25722 = c__7021__auto__;
var G__25723 = cljs.core.count.call(null,c__7021__auto__);
var G__25724 = (0);
seq__25688 = G__25721;
chunk__25689 = G__25722;
count__25690 = G__25723;
i__25691 = G__25724;
continue;
} else {
var i = cljs.core.first.call(null,seq__25688__$1);
var sprite_25725 = game.client.overlay.get_cached_sprite.call(null,transparent_texture,((function (seq__25688,chunk__25689,count__25690,i__25691,i,seq__25688__$1,temp__4657__auto__,mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture){
return (function (){
return (new PIXI.Sprite(transparent_texture));
});})(seq__25688,chunk__25689,count__25690,i__25691,i,seq__25688__$1,temp__4657__auto__,mesh,unit,vec__25683,x1,y1,x2,y2,box_width,bar_width,x1__$1,height,health,health_width,remainder,last_block_opacity,health_width__$1,y1__$1,texture))
);
stage.addChild(sprite_25725);

sprite_25725.position.x = (x1__$1 + i);

sprite_25725.position.y = y1__$1;

var G__25726 = cljs.core.next.call(null,seq__25688__$1);
var G__25727 = null;
var G__25728 = (0);
var G__25729 = (0);
seq__25688 = G__25726;
chunk__25689 = G__25727;
count__25690 = G__25728;
i__25691 = G__25729;
continue;
}
} else {
return null;
}
}
break;
}
});
game.client.overlay.on_render = (function game$client$overlay$on_render(init_renderer,component){
var health_bars = new cljs.core.Keyword(null,"health-bars","health-bars",1170818575).cljs$core$IFn$_invoke$arity$1(component);
var t = game.client.common.game_time.call(null);
var screen_boxes = game.client.selection.get_screen_boxes.call(null,component);
var mesh_to_screenbox_map = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288)], null));
var new_mts_map = cljs.core.reduce.call(null,((function (health_bars,t,screen_boxes,mesh_to_screenbox_map){
return (function (dict,box){
return cljs.core.assoc.call(null,dict,(box["mesh"]),box);
});})(health_bars,t,screen_boxes,mesh_to_screenbox_map))
,cljs.core.PersistentArrayMap.EMPTY,screen_boxes);
var pixi_filter = game.client.overlay.get_pixi_filter.call(null);
var stage = new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(component);
var health_bars__$1 = (new PIXI.Graphics());
var scene_width = cljs.core.deref.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"width","width",-384071477)], null)));
var scene_height = cljs.core.deref.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"height","height",1025178622)], null)));
var last_frame_time = cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-60-average","last-60-average",162915207).cljs$core$IFn$_invoke$arity$1(init_renderer));
var pixi_renderer = new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409).cljs$core$IFn$_invoke$arity$1(component);
var get_texture = ((function (health_bars,t,screen_boxes,mesh_to_screenbox_map,new_mts_map,pixi_filter,stage,health_bars__$1,scene_width,scene_height,last_frame_time,pixi_renderer){
return (function (p1__25730_SHARP_,p2__25731_SHARP_){
return game.client.overlay.get_texture.call(null,pixi_renderer,game.client.overlay.bar_block_width,game.client.overlay.bar_height,p1__25730_SHARP_,p2__25731_SHARP_);
});})(health_bars,t,screen_boxes,mesh_to_screenbox_map,new_mts_map,pixi_filter,stage,health_bars__$1,scene_width,scene_height,last_frame_time,pixi_renderer))
;
var green_texture = (function (){var or__6210__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"green-texture","green-texture",755870205).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return get_texture.call(null,(65280),false);
}
})();
var yellow_texture = (function (){var or__6210__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return get_texture.call(null,(16776960),false);
}
})();
var orange_texture = (function (){var or__6210__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return get_texture.call(null,(16753920),false);
}
})();
var red_texture = (function (){var or__6210__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"red-texture","red-texture",1917602801).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return get_texture.call(null,(16711680),false);
}
})();
var transparent_texture = (function (){var or__6210__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return get_texture.call(null,(0),true);
}
})();
var partial_select_texture = cljs.core.partial.call(null,game.client.overlay.select_texture,red_texture,orange_texture,yellow_texture,green_texture);
cljs.core.reset_BANG_.call(null,mesh_to_screenbox_map,new_mts_map);

green_texture.rts_id = (0);

yellow_texture.rts_id = (1);

orange_texture.rts_id = (2);

red_texture.rts_id = (3);

transparent_texture.rts_id = (4);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"green-texture","green-texture",755870205).cljs$core$IFn$_invoke$arity$1(component),green_texture);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729).cljs$core$IFn$_invoke$arity$1(component),yellow_texture);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650).cljs$core$IFn$_invoke$arity$1(component),orange_texture);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"red-texture","red-texture",1917602801).cljs$core$IFn$_invoke$arity$1(component),red_texture);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341).cljs$core$IFn$_invoke$arity$1(component),transparent_texture);

stage.removeChildren();

stage.addChild(health_bars__$1);

var seq__25738_25744 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,screen_boxes));
var chunk__25739_25745 = null;
var count__25740_25746 = (0);
var i__25741_25747 = (0);
while(true){
if((i__25741_25747 < count__25740_25746)){
var vec__25742_25748 = cljs.core._nth.call(null,chunk__25739_25745,i__25741_25747);
var i_25749 = cljs.core.nth.call(null,vec__25742_25748,(0),null);
var box_25750 = cljs.core.nth.call(null,vec__25742_25748,(1),null);
game.client.overlay.draw_health_bar.call(null,component,stage,partial_select_texture,transparent_texture,i_25749,box_25750);

var G__25751 = seq__25738_25744;
var G__25752 = chunk__25739_25745;
var G__25753 = count__25740_25746;
var G__25754 = (i__25741_25747 + (1));
seq__25738_25744 = G__25751;
chunk__25739_25745 = G__25752;
count__25740_25746 = G__25753;
i__25741_25747 = G__25754;
continue;
} else {
var temp__4657__auto___25755 = cljs.core.seq.call(null,seq__25738_25744);
if(temp__4657__auto___25755){
var seq__25738_25756__$1 = temp__4657__auto___25755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25738_25756__$1)){
var c__7021__auto___25757 = cljs.core.chunk_first.call(null,seq__25738_25756__$1);
var G__25758 = cljs.core.chunk_rest.call(null,seq__25738_25756__$1);
var G__25759 = c__7021__auto___25757;
var G__25760 = cljs.core.count.call(null,c__7021__auto___25757);
var G__25761 = (0);
seq__25738_25744 = G__25758;
chunk__25739_25745 = G__25759;
count__25740_25746 = G__25760;
i__25741_25747 = G__25761;
continue;
} else {
var vec__25743_25762 = cljs.core.first.call(null,seq__25738_25756__$1);
var i_25763 = cljs.core.nth.call(null,vec__25743_25762,(0),null);
var box_25764 = cljs.core.nth.call(null,vec__25743_25762,(1),null);
game.client.overlay.draw_health_bar.call(null,component,stage,partial_select_texture,transparent_texture,i_25763,box_25764);

var G__25765 = cljs.core.next.call(null,seq__25738_25756__$1);
var G__25766 = null;
var G__25767 = (0);
var G__25768 = (0);
seq__25738_25744 = G__25765;
chunk__25739_25745 = G__25766;
count__25740_25746 = G__25767;
i__25741_25747 = G__25768;
continue;
}
} else {
}
}
break;
}

(game.client.overlay.sprite_cache[(0)] = (game.client.overlay.new_sprite_cache[(0)]));

return (game.client.overlay.new_sprite_cache[(0)] = (game.client.overlay.new_cache.call(null)[(0)]));
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
game.client.overlay.new_overlay_Record = (function ($overlay,params,units,camera,renderer,scene_properties,pixi_renderer,stage,green_texture,orange_texture,yellow_texture,red_texture,transparent_texture,started,start_count,stop_count,__meta,__extmap,__hash){
this.$overlay = $overlay;
this.params = params;
this.units = units;
this.camera = camera;
this.renderer = renderer;
this.scene_properties = scene_properties;
this.pixi_renderer = pixi_renderer;
this.stage = stage;
this.green_texture = green_texture;
this.orange_texture = orange_texture;
this.yellow_texture = yellow_texture;
this.red_texture = red_texture;
this.transparent_texture = transparent_texture;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.overlay.new_overlay_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25771,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25773 = (((k25771 instanceof cljs.core.Keyword))?k25771.fqn:null);
switch (G__25773) {
case "started":
return self__.started;

break;
case "orange-texture":
return self__.orange_texture;

break;
case "transparent-texture":
return self__.transparent_texture;

break;
case "scene-properties":
return self__.scene_properties;

break;
case "stage":
return self__.stage;

break;
case "stop-count":
return self__.stop_count;

break;
case "params":
return self__.params;

break;
case "renderer":
return self__.renderer;

break;
case "red-texture":
return self__.red_texture;

break;
case "start-count":
return self__.start_count;

break;
case "camera":
return self__.camera;

break;
case "units":
return self__.units;

break;
case "yellow-texture":
return self__.yellow_texture;

break;
case "green-texture":
return self__.green_texture;

break;
case "$overlay":
return self__.$overlay;

break;
case "pixi-renderer":
return self__.pixi_renderer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25771,else__6835__auto__);

}
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.overlay.new-overlay-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409),self__.pixi_renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stage","stage",1843544772),self__.stage],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green-texture","green-texture",755870205),self__.green_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650),self__.orange_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729),self__.yellow_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red-texture","red-texture",1917602801),self__.red_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341),self__.transparent_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$IIterable$ = true;

game.client.overlay.new_overlay_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25770){
var self__ = this;
var G__25770__$1 = this;
return (new cljs.core.RecordIter((0),G__25770__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"green-texture","green-texture",755870205),new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650),new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729),new cljs.core.Keyword(null,"red-texture","red-texture",1917602801),new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (16 + cljs.core.count.call(null,self__.__extmap));
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.overlay.new_overlay_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.overlay.new_overlay_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650),null,new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341),null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),null,new cljs.core.Keyword(null,"stage","stage",1843544772),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"red-texture","red-texture",1917602801),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729),null,new cljs.core.Keyword(null,"green-texture","green-texture",755870205),null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),null,new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25770){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25774 = cljs.core.keyword_identical_QMARK_;
var expr__25775 = k__6840__auto__;
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),expr__25775))){
return (new game.client.overlay.new_overlay_Record(G__25770,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,G__25770,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,G__25770,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,G__25770,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,G__25770,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,G__25770,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,G__25770,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"stage","stage",1843544772),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,G__25770,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"green-texture","green-texture",755870205),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,G__25770,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,G__25770,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,G__25770,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"red-texture","red-texture",1917602801),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,G__25770,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,G__25770,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,G__25770,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,G__25770,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25774.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25775))){
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,G__25770,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25770),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409),self__.pixi_renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stage","stage",1843544772),self__.stage],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green-texture","green-texture",755870205),self__.green_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650),self__.orange_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729),self__.yellow_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red-texture","red-texture",1917602801),self__.red_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341),self__.transparent_texture],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25770){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.overlay.new_overlay_Record(self__.$overlay,self__.params,self__.units,self__.camera,self__.renderer,self__.scene_properties,self__.pixi_renderer,self__.stage,self__.green_texture,self__.orange_texture,self__.yellow_texture,self__.red_texture,self__.transparent_texture,self__.started,self__.start_count,self__.stop_count,G__25770,self__.__extmap,self__.__hash));
});

game.client.overlay.new_overlay_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.overlay.new_overlay_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.overlay.new_overlay_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25769){
var self__ = this;
var G__25769__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25769__$1){
return (function (component){
var $container = new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(self__.params);
var $overlay__$1 = game.client.common.data.call(null,self__.$overlay);
var running = cljs.core.atom.call(null,true);
var view = ($overlay__$1[(0)]);
var width = $overlay__$1.width();
var height = $overlay__$1.height();
var pixi_renderer__$1 = (function (){var or__6210__auto__ = self__.pixi_renderer;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (new PIXI.WebGLRenderer(width,height,{"view": view, "antialias": true, "transparent": true, "autoResize": true}));
}
})();
var stage__$1 = (new PIXI.Container());
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"green-texture","green-texture",755870205),cljs.core.atom.call(null,null)),new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650),cljs.core.atom.call(null,null)),new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729),cljs.core.atom.call(null,null)),new cljs.core.Keyword(null,"red-texture","red-texture",1917602801),cljs.core.atom.call(null,null)),new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341),cljs.core.atom.call(null,null)),new cljs.core.Keyword(null,"stage","stage",1843544772),stage__$1),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409),pixi_renderer__$1);
return component__$1;
});})(G__25769__$1))
.call(null,G__25769__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.overlay.new_overlay_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25769){
var self__ = this;
var G__25769__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25769__$1){
return (function (component){
return component;
});})(G__25769__$1))
.call(null,G__25769__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.overlay.new_overlay_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$overlay","$overlay",139904710,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"scene-properties","scene-properties",-262402837,null),new cljs.core.Symbol(null,"pixi-renderer","pixi-renderer",-427897882,null),new cljs.core.Symbol(null,"stage","stage",-810890997,null),new cljs.core.Symbol(null,"green-texture","green-texture",-1898565564,null),new cljs.core.Symbol(null,"orange-texture","orange-texture",-1965616119,null),new cljs.core.Symbol(null,"yellow-texture","yellow-texture",-864551040,null),new cljs.core.Symbol(null,"red-texture","red-texture",-736832968,null),new cljs.core.Symbol(null,"transparent-texture","transparent-texture",993110186,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.overlay.new_overlay_Record.cljs$lang$type = true;

game.client.overlay.new_overlay_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.overlay/new-overlay-Record");
});

game.client.overlay.new_overlay_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.overlay/new-overlay-Record");
});

game.client.overlay.__GT_new_overlay_Record = (function game$client$overlay$__GT_new_overlay_Record($overlay,params,units,camera,renderer,scene_properties,pixi_renderer,stage,green_texture,orange_texture,yellow_texture,red_texture,transparent_texture,started,start_count,stop_count){
return (new game.client.overlay.new_overlay_Record($overlay,params,units,camera,renderer,scene_properties,pixi_renderer,stage,green_texture,orange_texture,yellow_texture,red_texture,transparent_texture,started,start_count,stop_count,null,null,null));
});

game.client.overlay.map__GT_new_overlay_Record = (function game$client$overlay$map__GT_new_overlay_Record(G__25772){
return (new game.client.overlay.new_overlay_Record(new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"green-texture","green-texture",755870205).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"red-texture","red-texture",1917602801).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25772),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25772),null,cljs.core.dissoc.call(null,G__25772,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"green-texture","green-texture",755870205),new cljs.core.Keyword(null,"orange-texture","orange-texture",688819650),new cljs.core.Keyword(null,"yellow-texture","yellow-texture",1789884729),new cljs.core.Keyword(null,"red-texture","red-texture",1917602801),new cljs.core.Keyword(null,"transparent-texture","transparent-texture",-647421341),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.overlay.new_overlay = (function game$client$overlay$new_overlay(){
return com.stuartsierra.component.using.call(null,game.client.overlay.map__GT_new_overlay_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364)], null));
});
game.client.overlay.vertex_shader = "\nattribute float boundingSphereRadius;\nattribute float health;\nattribute vec3 unitPosition;\n\nuniform float screen_width;\nuniform float screen_height;\nuniform float fov;\n\nvarying vec2 vSize;\nvarying float vHealth;\nvarying vec2 vUV;\n\nconst float PI = 3.141592653589793238462643383;\n\nfloat getScreenRadius() {\n  float fov2 = fov / 2.0 * PI / 180.0;\n  float d = length(cameraPosition - unitPosition);\n  float r3 = boundingSphereRadius;\n  float r2 = 1.0 / tan(fov) * r3 / sqrt(d * d - r3 * r3);\n  return r2;\n}\n\nvoid main() {\n\n  vUV = uv;\n\n  float radius = getScreenRadius();\n  const float block_width = 14.0;\n  const float block_height = 10.0;\n  const float max_blocks = 20.0;\n  const float min_blocks = 4.0;\n  float width = min(max(block_width * min_blocks, radius * screen_width), block_width * max_blocks);\n  width = width - mod(width, block_width);\n  float orig_height = width;\n\n  vSize = vec2(width, orig_height);\n  vHealth = health;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(unitPosition, 1.0);\n  gl_Position /= gl_Position.w;\n  gl_Position.x += position.x * 2.0 * width / screen_width;\n  gl_Position.y += position.y * 2.0 * block_height / screen_height;\n  gl_Position.y += radius * 2.0;\n}\n";
game.client.overlay.fragment_shader = "\n\nvarying vec2 vSize;\nvarying float vHealth;\nvarying vec2 vUV;\n\nuniform sampler2D green_texture;\nuniform sampler2D yellow_texture;\nuniform sampler2D orange_texture;\nuniform sampler2D red_texture;\nuniform sampler2D transparent_texture;\n\nvoid main() {\n  vec4 color = vec4(0.0);\n  float maxY = 10.0 / vSize.x;\n  float step = 0.0 / vSize.x;\n  vec2 texCoord = vUV;\n  float modX = 14.0 / vSize.x;\n  float newX = (mod(texCoord.x, modX) + step) / (modX + 2.0 * step);\n  newX *= 0.85;\n  float block = floor(vUV.x / modX);\n  float last_block = floor(vHealth / modX);\n  float remainder = mod(vHealth, modX);\n  float last_block_opacity = remainder / modX;\n  texCoord = vec2(newX, texCoord.y);\n  if (vUV.x < vHealth + modX - remainder) {\n    if (vHealth < 0.25) {\n      color = vec4(1.0, 0.0, 0.0, 1.0);\n      color = texture2D(red_texture, texCoord);\n    } else if (vHealth < 0.5) {\n      color = vec4(1.0, 165.0 / 255.0, 0.0, 1.0);\n      color = texture2D(orange_texture, texCoord);\n    } else if (vHealth < 0.75) {\n      color = vec4(1.0, 1.0, 0.0, 1.0);\n      color = texture2D(yellow_texture, texCoord);\n    } else {\n      color = vec4(0.0, 1.0, 0.0, 1.0);\n      color = texture2D(green_texture, texCoord);\n    }\n    if (block == last_block) {\n      color = mix(texture2D(transparent_texture, texCoord), color, last_block_opacity);\n    }\n  } else {\n    color = texture2D(transparent_texture, texCoord);\n  }\n  gl_FragColor = color;\n}\n";
game.client.overlay.on_xp_render = (function game$client$overlay$on_xp_render(init_renderer,component){
var units = game.client.engine.get_units.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component));
var unit_count = cljs.core.count.call(null,units);
var proto_geo = (new THREE.PlaneBufferGeometry((1),(1)));
var geo = (new THREE.InstancedBufferGeometry());
var mat_col_count = (unit_count * game.client.overlay.xyzw_size);
var position_count = (unit_count * game.client.overlay.xyz_size);
var healths = (new Float32Array(unit_count));
var bounding_sphere_radiuses = (new Float32Array(unit_count));
var camera = game.client.common.data.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(component));
var positions_array = (new Float32Array(position_count));
game.client.engine.for_each_unit.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),((function (units,unit_count,proto_geo,geo,mat_col_count,position_count,healths,bounding_sphere_radiuses,camera,positions_array){
return (function (index,unit){
var mesh = game.client.engine.get_unit_mesh.call(null,unit);
var position = game.client.engine.get_unit_position.call(null,unit);
var health_25778 = (new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(unit) / new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(unit)));
(healths[index] = health_25778);

(bounding_sphere_radiuses[index] = mesh.geometry.boundingSphere.radius);

(positions_array[((index * game.client.overlay.xyz_size) + (0))] = position.x);

(positions_array[((index * game.client.overlay.xyz_size) + (1))] = position.y);

return (positions_array[((index * game.client.overlay.xyz_size) + (2))] = position.z);
});})(units,unit_count,proto_geo,geo,mat_col_count,position_count,healths,bounding_sphere_radiuses,camera,positions_array))
);

geo.addAttribute("position",proto_geo.getAttribute("position"));

geo.addAttribute("normal",proto_geo.getAttribute("normal"));

geo.addAttribute("uv",proto_geo.getAttribute("uv"));

geo.setIndex(proto_geo.index);

geo.addAttribute("health",(new THREE.InstancedBufferAttribute(healths,(1))));

geo.addAttribute("boundingSphereRadius",(new THREE.InstancedBufferAttribute(bounding_sphere_radiuses,(1))));

geo.addAttribute("unitPosition",(new THREE.InstancedBufferAttribute(positions_array,game.client.overlay.xyz_size)));

var scene = game.client.common.data.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(component));
var material = new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(component);
var mesh = (new THREE.Mesh(geo,material));
var width = cljs.core.deref.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"width","width",-384071477)], null)));
var height = cljs.core.deref.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"height","height",1025178622)], null)));
var old_mesh = cljs.core.deref.call(null,new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007).cljs$core$IFn$_invoke$arity$1(component));
var mesh_parent = new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369).cljs$core$IFn$_invoke$arity$1(component);
mesh.frustumCulled = false;

material.uniforms.screen_width.value = width;

material.uniforms.screen_height.value = height;

if(cljs.core.truth_(old_mesh)){
mesh_parent.remove(old_mesh);

old_mesh.geometry.dispose();
} else {
}

if((unit_count > (0))){
mesh_parent.add(mesh);
} else {
}

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007).cljs$core$IFn$_invoke$arity$1(component),mesh);
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
game.client.overlay.new_xp_overlay_Record = (function (scene,init_scene,scene_properties,units,pixi_overlay,camera,material,mesh_parent,old_mesh,started,start_count,stop_count,__meta,__extmap,__hash){
this.scene = scene;
this.init_scene = init_scene;
this.scene_properties = scene_properties;
this.units = units;
this.pixi_overlay = pixi_overlay;
this.camera = camera;
this.material = material;
this.mesh_parent = mesh_parent;
this.old_mesh = old_mesh;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25781,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25783 = (((k25781 instanceof cljs.core.Keyword))?k25781.fqn:null);
switch (G__25783) {
case "started":
return self__.started;

break;
case "mesh-parent":
return self__.mesh_parent;

break;
case "scene-properties":
return self__.scene_properties;

break;
case "stop-count":
return self__.stop_count;

break;
case "old-mesh":
return self__.old_mesh;

break;
case "pixi-overlay":
return self__.pixi_overlay;

break;
case "start-count":
return self__.start_count;

break;
case "material":
return self__.material;

break;
case "camera":
return self__.camera;

break;
case "units":
return self__.units;

break;
case "init-scene":
return self__.init_scene;

break;
case "scene":
return self__.scene;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25781,else__6835__auto__);

}
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.overlay.new-xp-overlay-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),self__.pixi_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"material","material",460118677),self__.material],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369),self__.mesh_parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007),self__.old_mesh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IIterable$ = true;

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25780){
var self__ = this;
var G__25780__$1 = this;
return (new cljs.core.RecordIter((0),G__25780__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369),new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369),null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007),null,new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"material","material",460118677),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25780){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25784 = cljs.core.keyword_identical_QMARK_;
var expr__25785 = k__6840__auto__;
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(G__25780,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,G__25780,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,G__25780,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,G__25780,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,G__25780,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,G__25780,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"material","material",460118677),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,G__25780,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,G__25780,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,G__25780,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,G__25780,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,G__25780,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25784.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25785))){
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,G__25780,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25780),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),self__.pixi_overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"material","material",460118677),self__.material],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369),self__.mesh_parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007),self__.old_mesh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25780){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.overlay.new_xp_overlay_Record(self__.scene,self__.init_scene,self__.scene_properties,self__.units,self__.pixi_overlay,self__.camera,self__.material,self__.mesh_parent,self__.old_mesh,self__.started,self__.start_count,self__.stop_count,G__25780,self__.__extmap,self__.__hash));
});

game.client.overlay.new_xp_overlay_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.overlay.new_xp_overlay_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.overlay.new_xp_overlay_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25779){
var self__ = this;
var G__25779__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25779__$1){
return (function (component){
var old_mesh__$1 = cljs.core.atom.call(null,null);
var mesh_parent__$1 = (new THREE.Object3D());
var pixi_renderer = new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409).cljs$core$IFn$_invoke$arity$1(self__.pixi_overlay);
var three_texture = ((function (old_mesh__$1,mesh_parent__$1,pixi_renderer,G__25779__$1){
return (function (x){
var i = pixi_renderer.extract.image(x);
var t = (new THREE.Texture(i));
t.needsUpdate = true;

t.minFilter = THREE.LinearFilter;

return t;
});})(old_mesh__$1,mesh_parent__$1,pixi_renderer,G__25779__$1))
;
var get_texture = ((function (old_mesh__$1,mesh_parent__$1,pixi_renderer,three_texture,G__25779__$1){
return (function (color,transparent_QMARK_){
return three_texture.call(null,game.client.overlay.get_texture.call(null,pixi_renderer,game.client.overlay.bar_block_width,game.client.overlay.bar_height,color,transparent_QMARK_));
});})(old_mesh__$1,mesh_parent__$1,pixi_renderer,three_texture,G__25779__$1))
;
var green_texture = get_texture.call(null,(65280),false);
var yellow_texture = get_texture.call(null,(16776960),false);
var orange_texture = get_texture.call(null,(16753920),false);
var red_texture = get_texture.call(null,(16711680),false);
var transparent_texture = get_texture.call(null,(0),true);
var camera__$1 = game.client.common.data.call(null,self__.camera);
var uniforms = {"screen_width": {"type": "f", "value": cljs.core.deref.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.scene_properties))}, "screen_height": {"type": "f", "value": cljs.core.deref.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.scene_properties))}, "green_texture": {"type": "t", "value": green_texture}, "yellow_texture": {"type": "t", "value": yellow_texture}, "orange_texture": {"type": "t", "value": orange_texture}, "red_texture": {"type": "t", "value": red_texture}, "transparent_texture": {"type": "t", "value": transparent_texture}, "fov": {"type": "f", "value": camera__$1.fov}};
var material__$1 = (new THREE.ShaderMaterial({"uniforms": uniforms, "vertexShader": game.client.overlay.vertex_shader, "fragmentShader": game.client.overlay.fragment_shader, "depthTest": false, "transparent": true}));
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369),mesh_parent__$1),new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007),old_mesh__$1),new cljs.core.Keyword(null,"material","material",460118677),material__$1);
game.client.common.data.call(null,self__.scene).add(mesh_parent__$1);

mesh_parent__$1.visible = false;

return component__$1;
});})(G__25779__$1))
.call(null,G__25779__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.overlay.new_xp_overlay_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25779){
var self__ = this;
var G__25779__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25779__$1){
return (function (component){
if(cljs.core.truth_((function (){var and__6198__auto__ = self__.old_mesh;
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.deref.call(null,self__.old_mesh);
} else {
return and__6198__auto__;
}
})())){
self__.mesh_parent.remove(cljs.core.deref.call(null,self__.old_mesh));
} else {
}

return component;
});})(G__25779__$1))
.call(null,G__25779__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.overlay.new_xp_overlay_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"init-scene","init-scene",624606753,null),new cljs.core.Symbol(null,"scene-properties","scene-properties",-262402837,null),new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"pixi-overlay","pixi-overlay",-1216303978,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"material","material",2100650204,null),new cljs.core.Symbol(null,"mesh-parent","mesh-parent",-641389400,null),new cljs.core.Symbol(null,"old-mesh","old-mesh",-1719586762,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.overlay.new_xp_overlay_Record.cljs$lang$type = true;

game.client.overlay.new_xp_overlay_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.overlay/new-xp-overlay-Record");
});

game.client.overlay.new_xp_overlay_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.overlay/new-xp-overlay-Record");
});

game.client.overlay.__GT_new_xp_overlay_Record = (function game$client$overlay$__GT_new_xp_overlay_Record(scene,init_scene,scene_properties,units,pixi_overlay,camera,material,mesh_parent,old_mesh,started,start_count,stop_count){
return (new game.client.overlay.new_xp_overlay_Record(scene,init_scene,scene_properties,units,pixi_overlay,camera,material,mesh_parent,old_mesh,started,start_count,stop_count,null,null,null));
});

game.client.overlay.map__GT_new_xp_overlay_Record = (function game$client$overlay$map__GT_new_xp_overlay_Record(G__25782){
return (new game.client.overlay.new_xp_overlay_Record(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25782),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25782),null,cljs.core.dissoc.call(null,G__25782,new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"mesh-parent","mesh-parent",2013046369),new cljs.core.Keyword(null,"old-mesh","old-mesh",934849007),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.overlay.new_xp_overlay = (function game$client$overlay$new_xp_overlay(){
return com.stuartsierra.component.using.call(null,game.client.overlay.map__GT_new_xp_overlay_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"pixi-overlay","pixi-overlay",1438131791),new cljs.core.Keyword(null,"camera","camera",-1190348585)], null));
});

//# sourceMappingURL=overlay.js.map