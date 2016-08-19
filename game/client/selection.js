// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.selection');
goog.require('cljs.core');
goog.require('game.client.engine');
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
goog.require('game.client.controls');
goog.require('clojure.string');
goog.require('game.client.common');
game.client.selection.LEFT_MOUSE_BUTTON = (1);
game.client.selection.MIDDLE_MOUSE_BUTTON = (2);
game.client.selection.RIGHT_MOUSE_BUTTON = (3);
game.client.selection.mark = (function game$client$selection$mark(component,mesh){
var temp__4655__auto__ = (mesh["mark"]);
if(cljs.core.truth_(temp__4655__auto__)){
var circle = temp__4655__auto__;
circle.visible = true;

return circle;
} else {
var radius = mesh.geometry.boundingSphere.radius;
var geometry = (new THREE.CircleGeometry(radius,(32)));
var mat = (new THREE.Matrix4()).makeRotationX((game.client.math.pi / (-2)));
var _ = geometry.applyMatrix(mat);
var material = (new THREE.MeshLambertMaterial({"color": (65280), "opacity": 0.5, "transparent": true}));
var circle = (new THREE.Mesh(geometry,material));
mesh.add(circle);

(mesh["mark"] = circle);

return circle;
}
});
game.client.selection.unmark_all = (function game$client$selection$unmark_all(component){
var seq__25538_25542 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(component)));
var chunk__25539_25543 = null;
var count__25540_25544 = (0);
var i__25541_25545 = (0);
while(true){
if((i__25541_25545 < count__25540_25544)){
var selected_25546 = cljs.core._nth.call(null,chunk__25539_25543,i__25541_25545);
var mesh_25547 = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(selected_25546);
var mark_25548 = new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(selected_25546);
mark_25548.visible = false;

var G__25549 = seq__25538_25542;
var G__25550 = chunk__25539_25543;
var G__25551 = count__25540_25544;
var G__25552 = (i__25541_25545 + (1));
seq__25538_25542 = G__25549;
chunk__25539_25543 = G__25550;
count__25540_25544 = G__25551;
i__25541_25545 = G__25552;
continue;
} else {
var temp__4657__auto___25553 = cljs.core.seq.call(null,seq__25538_25542);
if(temp__4657__auto___25553){
var seq__25538_25554__$1 = temp__4657__auto___25553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25538_25554__$1)){
var c__7021__auto___25555 = cljs.core.chunk_first.call(null,seq__25538_25554__$1);
var G__25556 = cljs.core.chunk_rest.call(null,seq__25538_25554__$1);
var G__25557 = c__7021__auto___25555;
var G__25558 = cljs.core.count.call(null,c__7021__auto___25555);
var G__25559 = (0);
seq__25538_25542 = G__25556;
chunk__25539_25543 = G__25557;
count__25540_25544 = G__25558;
i__25541_25545 = G__25559;
continue;
} else {
var selected_25560 = cljs.core.first.call(null,seq__25538_25554__$1);
var mesh_25561 = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(selected_25560);
var mark_25562 = new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(selected_25560);
mark_25562.visible = false;

var G__25563 = cljs.core.next.call(null,seq__25538_25554__$1);
var G__25564 = null;
var G__25565 = (0);
var G__25566 = (0);
seq__25538_25542 = G__25563;
chunk__25539_25543 = G__25564;
count__25540_25544 = G__25565;
i__25541_25545 = G__25566;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(component),cljs.core.PersistentVector.EMPTY);
});
game.client.selection.get_bounding_box_geometry = (function game$client$selection$get_bounding_box_geometry(var_args){
var args25568 = [];
var len__7279__auto___25571 = arguments.length;
var i__7280__auto___25572 = (0);
while(true){
if((i__7280__auto___25572 < len__7279__auto___25571)){
args25568.push((arguments[i__7280__auto___25572]));

var G__25573 = (i__7280__auto___25572 + (1));
i__7280__auto___25572 = G__25573;
continue;
} else {
}
break;
}

var G__25570 = args25568.length;
switch (G__25570) {
case 1:
return game.client.selection.get_bounding_box_geometry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.client.selection.get_bounding_box_geometry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25568.length)].join('')));

}
});

game.client.selection.get_bounding_box_geometry.cljs$core$IFn$_invoke$arity$1 = (function (mesh){
return game.client.selection.get_bounding_box_geometry.call(null,mesh,true);
});

game.client.selection.get_bounding_box_geometry.cljs$core$IFn$_invoke$arity$2 = (function (mesh,clone_QMARK_){
var clone = (function (p1__25567_SHARP_){
if(cljs.core.truth_(clone_QMARK_)){
return p1__25567_SHARP_.clone();
} else {
return p1__25567_SHARP_;
}
});
var geometry = (cljs.core.truth_((function (){var and__6198__auto__ = mesh.hasOwnProperty("rts-bbox-geometry");
if(cljs.core.truth_(and__6198__auto__)){
return !((void 0 === (mesh["rts-bbox-geometry"])));
} else {
return and__6198__auto__;
}
})())?clone.call(null,(mesh["rts-bbox-geometry"])):(function (){var bbox = mesh.geometry.boundingBox;
var bbox_geometry = (new THREE.BoxGeometry((bbox.max.x - bbox.min.x),(bbox.max.y - bbox.min.y),(bbox.max.z - bbox.min.z)));
var geo_translation = (new THREE.Vector3()).add(bbox.min).add(bbox.max).divideScalar((2));
bbox_geometry.translate(geo_translation.x,geo_translation.y,geo_translation.z);

(mesh["rts-bbox-geometry"] = bbox_geometry);

return clone.call(null,bbox_geometry);
})());
if(cljs.core.truth_(clone_QMARK_)){
geometry.applyMatrix(mesh.matrixWorld);
} else {
}

return geometry;
});

game.client.selection.get_bounding_box_geometry.cljs$lang$maxFixedArity = 2;
game.client.selection.get_screen_boxes = (function game$client$selection$get_screen_boxes(component){
var frustum = (new THREE.Frustum());
var camera_view_projection_matrix = (new THREE.Matrix4());
var camera = game.client.common.data.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(component));
var width = cljs.core.deref.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"width","width",-384071477)], null)));
var height = cljs.core.deref.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"height","height",1025178622)], null)));
var screen_boxes = [];
camera.updateMatrixWorld();

camera.matrixWorldInverse.getInverse(camera.matrixWorld);

camera_view_projection_matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);

frustum.setFromMatrix(camera_view_projection_matrix);

game.client.engine.for_each_unit.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),((function (frustum,camera_view_projection_matrix,camera,width,height,screen_boxes){
return (function (_,unit){
var mesh = game.client.engine.get_unit_mesh.call(null,unit);
if(cljs.core.truth_(frustum.intersectsObject(mesh))){
var screen_box = (new THREE.Box2());
var seq__25579_25583 = cljs.core.seq.call(null,game.client.selection.get_bounding_box_geometry.call(null,mesh).vertices);
var chunk__25580_25584 = null;
var count__25581_25585 = (0);
var i__25582_25586 = (0);
while(true){
if((i__25582_25586 < count__25581_25585)){
var vertex_25587 = cljs.core._nth.call(null,chunk__25580_25584,i__25582_25586);
screen_box.expandByPoint(game.client.scene.world_to_screen_fast.call(null,width,height,camera_view_projection_matrix,vertex_25587));

var G__25588 = seq__25579_25583;
var G__25589 = chunk__25580_25584;
var G__25590 = count__25581_25585;
var G__25591 = (i__25582_25586 + (1));
seq__25579_25583 = G__25588;
chunk__25580_25584 = G__25589;
count__25581_25585 = G__25590;
i__25582_25586 = G__25591;
continue;
} else {
var temp__4657__auto___25592 = cljs.core.seq.call(null,seq__25579_25583);
if(temp__4657__auto___25592){
var seq__25579_25593__$1 = temp__4657__auto___25592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25579_25593__$1)){
var c__7021__auto___25594 = cljs.core.chunk_first.call(null,seq__25579_25593__$1);
var G__25595 = cljs.core.chunk_rest.call(null,seq__25579_25593__$1);
var G__25596 = c__7021__auto___25594;
var G__25597 = cljs.core.count.call(null,c__7021__auto___25594);
var G__25598 = (0);
seq__25579_25583 = G__25595;
chunk__25580_25584 = G__25596;
count__25581_25585 = G__25597;
i__25582_25586 = G__25598;
continue;
} else {
var vertex_25599 = cljs.core.first.call(null,seq__25579_25593__$1);
screen_box.expandByPoint(game.client.scene.world_to_screen_fast.call(null,width,height,camera_view_projection_matrix,vertex_25599));

var G__25600 = cljs.core.next.call(null,seq__25579_25593__$1);
var G__25601 = null;
var G__25602 = (0);
var G__25603 = (0);
seq__25579_25583 = G__25600;
chunk__25580_25584 = G__25601;
count__25581_25585 = G__25602;
i__25582_25586 = G__25603;
continue;
}
} else {
}
}
break;
}

var box = [screen_box.min.x,screen_box.min.y,screen_box.max.x,screen_box.max.y];
(box["mesh"] = mesh);

return screen_boxes.push(box);
} else {
return null;
}
});})(frustum,camera_view_projection_matrix,camera,width,height,screen_boxes))
);

return screen_boxes;
});
/**
 * get screen radius of 3d sphere
 */
game.client.selection.get_screen_radius = (function game$client$selection$get_screen_radius(height,camera,position,r3){
var fovy = camera.fov;
var fov = ((fovy / (2)) * (Math.PI / 180.0));
var v = camera.position.clone();
var _ = v.sub(position);
var d = v.length();
var r2 = (((height / ((2) * Math.tan(fov))) * r3) / Math.sqrt(((d * d) - (r3 * r3))));
return r2;
});
game.client.selection.get_screen_circles = (function game$client$selection$get_screen_circles(component){
var frustum = (new THREE.Frustum());
var camera_view_projection_matrix = (new THREE.Matrix4());
var camera = game.client.common.data.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(component));
var width = cljs.core.deref.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"width","width",-384071477)], null)));
var height = cljs.core.deref.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"height","height",1025178622)], null)));
camera.updateMatrixWorld();

camera.matrixWorldInverse.getInverse(camera.matrixWorld);

camera_view_projection_matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);

frustum.setFromMatrix(camera_view_projection_matrix);

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,game.client.engine.map_units.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),((function (frustum,camera_view_projection_matrix,camera,width,height){
return (function (_,unit){
var group = game.client.engine.get_unit_group.call(null,unit);
var mesh = game.client.engine.get_unit_mesh.call(null,unit);
if(cljs.core.truth_(frustum.intersectsObject(mesh))){
var screen_position = game.client.scene.world_to_screen_fast.call(null,width,height,camera_view_projection_matrix,group.position);
var r3 = mesh.geometry.boundingSphere.radius;
var screen_radius = game.client.selection.get_screen_radius.call(null,height,camera,group.position,r3);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),screen_position.x,new cljs.core.Keyword(null,"y","y",-1757859776),screen_position.y,new cljs.core.Keyword(null,"r","r",-471384190),screen_radius,new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh], null);
} else {
return null;
}
});})(frustum,camera_view_projection_matrix,camera,width,height))
)));
});
game.client.selection.get_screen_boxes_from_last_overlay_render = (function game$client$selection$get_screen_boxes_from_last_overlay_render(component){
var units = new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component);
var boxes = [];
var seq__25608_25612 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"mesh-to-screenbox-map","mesh-to-screenbox-map",-986324288).cljs$core$IFn$_invoke$arity$1(units))));
var chunk__25609_25613 = null;
var count__25610_25614 = (0);
var i__25611_25615 = (0);
while(true){
if((i__25611_25615 < count__25610_25614)){
var box_25616 = cljs.core._nth.call(null,chunk__25609_25613,i__25611_25615);
boxes.push(box_25616);

var G__25617 = seq__25608_25612;
var G__25618 = chunk__25609_25613;
var G__25619 = count__25610_25614;
var G__25620 = (i__25611_25615 + (1));
seq__25608_25612 = G__25617;
chunk__25609_25613 = G__25618;
count__25610_25614 = G__25619;
i__25611_25615 = G__25620;
continue;
} else {
var temp__4657__auto___25621 = cljs.core.seq.call(null,seq__25608_25612);
if(temp__4657__auto___25621){
var seq__25608_25622__$1 = temp__4657__auto___25621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25608_25622__$1)){
var c__7021__auto___25623 = cljs.core.chunk_first.call(null,seq__25608_25622__$1);
var G__25624 = cljs.core.chunk_rest.call(null,seq__25608_25622__$1);
var G__25625 = c__7021__auto___25623;
var G__25626 = cljs.core.count.call(null,c__7021__auto___25623);
var G__25627 = (0);
seq__25608_25612 = G__25624;
chunk__25609_25613 = G__25625;
count__25610_25614 = G__25626;
i__25611_25615 = G__25627;
continue;
} else {
var box_25628 = cljs.core.first.call(null,seq__25608_25622__$1);
boxes.push(box_25628);

var G__25629 = cljs.core.next.call(null,seq__25608_25622__$1);
var G__25630 = null;
var G__25631 = (0);
var G__25632 = (0);
seq__25608_25612 = G__25629;
chunk__25609_25613 = G__25630;
count__25610_25614 = G__25631;
i__25611_25615 = G__25632;
continue;
}
} else {
}
}
break;
}

return boxes;
});
game.client.selection.frustum_check = (function game$client$selection$frustum_check(component,x1,y1,x2,y2){
var camera = game.client.common.data.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(component));
var z = camera.near;
var screen_width = cljs.core.deref.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364).cljs$core$IFn$_invoke$arity$1(component)));
var screen_height = cljs.core.deref.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364).cljs$core$IFn$_invoke$arity$1(component)));
var x1__$1 = (((x1 / screen_width) * (2)) - (1));
var x2__$1 = (((x2 / screen_width) * (2)) - (1));
var y1__$1 = (((y1 / screen_height) * (-2)) + (1));
var y2__$1 = (((y2 / screen_height) * (-2)) + (1));
var proj_mat = (new THREE.Matrix4());
var view_proj_mat = (new THREE.Matrix4());
var frustum = (new THREE.Frustum());
camera.updateMatrixWorld();

camera.matrixWorldInverse.getInverse(camera.matrixWorld);

proj_mat.makeFrustum(x1__$1,x2__$1,y1__$1,y2__$1,camera.near,camera.far);

view_proj_mat.multiplyMatrices(proj_mat,camera.matrixWorldInverse);

frustum.setFromMatrix(view_proj_mat);

game.client.selection.unmark_all.call(null,component);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(component),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,game.client.engine.map_units.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),((function (camera,z,screen_width,screen_height,x1__$1,x2__$1,y1__$1,y2__$1,proj_mat,view_proj_mat,frustum){
return (function (_,unit){
var mesh = game.client.engine.get_unit_mesh.call(null,unit);
if(cljs.core.truth_(frustum.intersectsObject(mesh))){
var circle = game.client.selection.mark.call(null,component,mesh);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unit","unit",375175175),game.client.engine.get_unit_for_mesh.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),mesh),new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh,new cljs.core.Keyword(null,"mark","mark",-373816345),circle], null);
} else {
return null;
}
});})(camera,z,screen_width,screen_height,x1__$1,x2__$1,y1__$1,y2__$1,proj_mat,view_proj_mat,frustum))
))));
});
game.client.selection.check_intersect_screen = (function game$client$selection$check_intersect_screen(component,x1,y1,x2,y2){
var screen_boxes = game.client.selection.get_screen_boxes.call(null,component);
var flat_selection_box = [[x1,y1,x2,y2]];
var selected_indices = boxIntersect(screen_boxes,flat_selection_box);
game.client.selection.unmark_all.call(null,component);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(component),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__6990__auto__ = ((function (screen_boxes,flat_selection_box,selected_indices){
return (function game$client$selection$check_intersect_screen_$_iter__25641(s__25642){
return (new cljs.core.LazySeq(null,((function (screen_boxes,flat_selection_box,selected_indices){
return (function (){
var s__25642__$1 = s__25642;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25642__$1);
if(temp__4657__auto__){
var s__25642__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25642__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__25642__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__25644 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__25643 = (0);
while(true){
if((i__25643 < size__6989__auto__)){
var vec__25647 = cljs.core._nth.call(null,c__6988__auto__,i__25643);
var i = cljs.core.nth.call(null,vec__25647,(0),null);
var j = cljs.core.nth.call(null,vec__25647,(1),null);
cljs.core.chunk_append.call(null,b__25644,(function (){var mesh = (cljs.core.nth.call(null,screen_boxes,i)["mesh"]);
var circle = game.client.selection.mark.call(null,component,mesh);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unit","unit",375175175),game.client.engine.get_unit_for_mesh.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),mesh),new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh,new cljs.core.Keyword(null,"mark","mark",-373816345),circle], null);
})());

var G__25649 = (i__25643 + (1));
i__25643 = G__25649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25644),game$client$selection$check_intersect_screen_$_iter__25641.call(null,cljs.core.chunk_rest.call(null,s__25642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25644),null);
}
} else {
var vec__25648 = cljs.core.first.call(null,s__25642__$2);
var i = cljs.core.nth.call(null,vec__25648,(0),null);
var j = cljs.core.nth.call(null,vec__25648,(1),null);
return cljs.core.cons.call(null,(function (){var mesh = (cljs.core.nth.call(null,screen_boxes,i)["mesh"]);
var circle = game.client.selection.mark.call(null,component,mesh);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unit","unit",375175175),game.client.engine.get_unit_for_mesh.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),mesh),new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh,new cljs.core.Keyword(null,"mark","mark",-373816345),circle], null);
})(),game$client$selection$check_intersect_screen_$_iter__25641.call(null,cljs.core.rest.call(null,s__25642__$2)));
}
} else {
return null;
}
break;
}
});})(screen_boxes,flat_selection_box,selected_indices))
,null,null));
});})(screen_boxes,flat_selection_box,selected_indices))
;
return iter__6990__auto__.call(null,selected_indices);
})()));
});
game.client.selection.circle_rectangle_intersects_QMARK_ = (function game$client$selection$circle_rectangle_intersects_QMARK_(circle,rect_x1,rect_y1,rect_x2,rect_y2){
var circle_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle);
var circle_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle);
var circle_r = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(circle);
var rect_width = (rect_x2 - rect_x1);
var rect_height = (rect_y2 - rect_y1);
var circle_distance_x = Math.abs((circle_x - (rect_x1 + (rect_width / (2)))));
var circle_distance_y = Math.abs((circle_y - (rect_y1 + (rect_height / (2)))));
var check1 = ((function (circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y){
return (function (){
return (circle_distance_x > ((rect_width / (2)) + circle_r));
});})(circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y))
;
var check2 = ((function (circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1){
return (function (){
return (circle_distance_y > ((rect_height / (2)) + circle_r));
});})(circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1))
;
var check3 = ((function (circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1,check2){
return (function (){
return (circle_distance_x <= (rect_width / (2)));
});})(circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1,check2))
;
var check4 = ((function (circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1,check2,check3){
return (function (){
return (circle_distance_y <= (rect_height / (2)));
});})(circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1,check2,check3))
;
var corner_distance_sq = ((function (circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1,check2,check3,check4){
return (function (){
return (Math.pow((circle_distance_x - (rect_width / (2))),(2)) + Math.pow((circle_distance_y - (rect_height / (2))),(2)));
});})(circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1,check2,check3,check4))
;
var check5 = ((function (circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1,check2,check3,check4,corner_distance_sq){
return (function (){
return (corner_distance_sq.call(null) <= Math.pow(circle_r,(2)));
});})(circle_x,circle_y,circle_r,rect_width,rect_height,circle_distance_x,circle_distance_y,check1,check2,check3,check4,corner_distance_sq))
;
if(cljs.core.truth_((function (){var or__6210__auto__ = check1.call(null);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return check2.call(null);
}
})())){
return false;
} else {
if(cljs.core.truth_((function (){var or__6210__auto__ = check3.call(null);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return check4.call(null);
}
})())){
return true;
} else {
return check5.call(null);
}
}
});
game.client.selection.check_intersect_screen_circles = (function game$client$selection$check_intersect_screen_circles(component,x1,y1,x2,y2){
var screen_circles = game.client.selection.get_screen_circles.call(null,component);
var map_fn = ((function (screen_circles){
return (function (i,circle){
if(cljs.core.truth_(game.client.selection.circle_rectangle_intersects_QMARK_.call(null,circle,x1,y1,x2,y2))){
return i;
} else {
return null;
}
});})(screen_circles))
;
var selected_indices = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,map_fn,screen_circles));
game.client.selection.unmark_all.call(null,component);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(component),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__6990__auto__ = ((function (screen_circles,map_fn,selected_indices){
return (function game$client$selection$check_intersect_screen_circles_$_iter__25654(s__25655){
return (new cljs.core.LazySeq(null,((function (screen_circles,map_fn,selected_indices){
return (function (){
var s__25655__$1 = s__25655;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25655__$1);
if(temp__4657__auto__){
var s__25655__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25655__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__25655__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__25657 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__25656 = (0);
while(true){
if((i__25656 < size__6989__auto__)){
var i = cljs.core._nth.call(null,c__6988__auto__,i__25656);
cljs.core.chunk_append.call(null,b__25657,(function (){var mesh = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,screen_circles,i));
var circle = game.client.selection.mark.call(null,component,mesh);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unit","unit",375175175),game.client.engine.get_unit_for_mesh.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),mesh),new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh,new cljs.core.Keyword(null,"mark","mark",-373816345),circle], null);
})());

var G__25658 = (i__25656 + (1));
i__25656 = G__25658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25657),game$client$selection$check_intersect_screen_circles_$_iter__25654.call(null,cljs.core.chunk_rest.call(null,s__25655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25657),null);
}
} else {
var i = cljs.core.first.call(null,s__25655__$2);
return cljs.core.cons.call(null,(function (){var mesh = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,screen_circles,i));
var circle = game.client.selection.mark.call(null,component,mesh);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unit","unit",375175175),game.client.engine.get_unit_for_mesh.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(component),mesh),new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh,new cljs.core.Keyword(null,"mark","mark",-373816345),circle], null);
})(),game$client$selection$check_intersect_screen_circles_$_iter__25654.call(null,cljs.core.rest.call(null,s__25655__$2)));
}
} else {
return null;
}
break;
}
});})(screen_circles,map_fn,selected_indices))
,null,null));
});})(screen_circles,map_fn,selected_indices))
;
return iter__6990__auto__.call(null,selected_indices);
})()));
});
game.client.selection.check_intersect = game.client.selection.check_intersect_screen_circles;
game.client.selection.rectangle_select = (function game$client$selection$rectangle_select(component,x2,y2,update){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241).cljs$core$IFn$_invoke$arity$1(component),false);

if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"selecting?","selecting?",1157912914).cljs$core$IFn$_invoke$arity$1(component)))){
var start_pos = cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(component));
var x1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_pos);
var y1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_pos);
if(cljs.core.truth_(update)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x2,new cljs.core.Keyword(null,"y","y",-1757859776),y2], null));
} else {
}

var vec__25661 = (((x1 < x2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,x1], null));
var x1__$1 = cljs.core.nth.call(null,vec__25661,(0),null);
var x2__$1 = cljs.core.nth.call(null,vec__25661,(1),null);
var vec__25662 = (((y1 < y2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y2,y1], null));
var y1__$1 = cljs.core.nth.call(null,vec__25662,(0),null);
var y2__$1 = cljs.core.nth.call(null,vec__25662,(1),null);
if(cljs.core.truth_(update)){
jayq.core.css.call(null,new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),x1__$1,new cljs.core.Keyword(null,"top","top",-1856271961),y1__$1,new cljs.core.Keyword(null,"width","width",-384071477),(x2__$1 - x1__$1),new cljs.core.Keyword(null,"height","height",1025178622),(y2__$1 - y1__$1)], null));
} else {
}

return game.client.selection.check_intersect.call(null,component,x1__$1,y1__$1,x2__$1,y2__$1);
} else {
return null;
}
});
game.client.selection.on_mouse_down = (function game$client$selection$on_mouse_down(component,event_data){
if(cljs.core._EQ_.call(null,event_data.which,game.client.selection.LEFT_MOUSE_BUTTON)){
var eps = (1);
var x = event_data.offsetX;
var y = event_data.offsetY;
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - eps),new cljs.core.Keyword(null,"y","y",-1757859776),(y - eps)], null));

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + eps),new cljs.core.Keyword(null,"y","y",-1757859776),(y + eps)], null));

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"selecting?","selecting?",1157912914).cljs$core$IFn$_invoke$arity$1(component),true);

jayq.core.css.call(null,new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108).cljs$core$IFn$_invoke$arity$1(component).removeClass("invisible"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"width","width",-384071477),eps,new cljs.core.Keyword(null,"height","height",1025178622),eps], null));

return game.client.selection.check_intersect.call(null,component,(x - eps),(y - eps),(x + eps),(y + eps));
} else {
if(cljs.core._EQ_.call(null,event_data.which,game.client.selection.RIGHT_MOUSE_BUTTON)){
cljs.core.println.call(null,"TODO");

return event_data.preventDefault();
} else {
return null;
}
}
});
game.client.selection.on_mouse_move = (function game$client$selection$on_mouse_move(component,event_data){
var x2 = event_data.offsetX;
var y2 = event_data.offsetY;
if(cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241).cljs$core$IFn$_invoke$arity$1(component)))){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241).cljs$core$IFn$_invoke$arity$1(component),true);
} else {
return requestAnimationFrame(((function (x2,y2){
return (function (){
return game.client.selection.rectangle_select.call(null,component,x2,y2,true);
});})(x2,y2))
);
}
});
game.client.selection.on_mouse_up = (function game$client$selection$on_mouse_up(component,event_data){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"selecting?","selecting?",1157912914).cljs$core$IFn$_invoke$arity$1(component),false);

return new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108).cljs$core$IFn$_invoke$arity$1(component).addClass("invisible");
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
game.client.selection.new_selector_Record = (function (scene,init_scene,params,$overlay,renderer,camera,units,scene_properties,$selection_layer,$selection_div,start_pos,end_pos,selecting_QMARK_,selected,frame_queued_QMARK_,started,start_count,stop_count,__meta,__extmap,__hash){
this.scene = scene;
this.init_scene = init_scene;
this.params = params;
this.$overlay = $overlay;
this.renderer = renderer;
this.camera = camera;
this.units = units;
this.scene_properties = scene_properties;
this.$selection_layer = $selection_layer;
this.$selection_div = $selection_div;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.selecting_QMARK_ = selecting_QMARK_;
this.selected = selected;
this.frame_queued_QMARK_ = frame_queued_QMARK_;
this.started = started;
this.start_count = start_count;
this.stop_count = stop_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
game.client.selection.new_selector_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

game.client.selection.new_selector_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k25665,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__25667 = (((k25665 instanceof cljs.core.Keyword))?k25665.fqn:null);
switch (G__25667) {
case "started":
return self__.started;

break;
case "$selection-layer":
return self__.$selection_layer;

break;
case "selected":
return self__.selected;

break;
case "scene-properties":
return self__.scene_properties;

break;
case "stop-count":
return self__.stop_count;

break;
case "frame-queued?":
return self__.frame_queued_QMARK_;

break;
case "end-pos":
return self__.end_pos;

break;
case "params":
return self__.params;

break;
case "renderer":
return self__.renderer;

break;
case "selecting?":
return self__.selecting_QMARK_;

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
case "init-scene":
return self__.init_scene;

break;
case "$selection-div":
return self__.$selection_div;

break;
case "start-pos":
return self__.start_pos;

break;
case "$overlay":
return self__.$overlay;

break;
case "scene":
return self__.scene;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25665,else__6835__auto__);

}
});

game.client.selection.new_selector_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#game.client.selection.new-selector-Record{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$selection-layer","$selection-layer",510184898),self__.$selection_layer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108),self__.$selection_div],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selecting?","selecting?",1157912914),self__.selecting_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected","selected",574897764),self__.selected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241),self__.frame_queued_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.selection.new_selector_Record.prototype.cljs$core$IIterable$ = true;

game.client.selection.new_selector_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25664){
var self__ = this;
var G__25664__$1 = this;
return (new cljs.core.RecordIter((0),G__25664__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"$selection-layer","$selection-layer",510184898),new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),new cljs.core.Keyword(null,"selecting?","selecting?",1157912914),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

game.client.selection.new_selector_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

game.client.selection.new_selector_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,self__.__hash));
});

game.client.selection.new_selector_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (18 + cljs.core.count.call(null,self__.__extmap));
});

game.client.selection.new_selector_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
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

game.client.selection.new_selector_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
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

game.client.selection.new_selector_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"$selection-layer","$selection-layer",510184898),null,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),null,new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"selecting?","selecting?",1157912914),null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),null,new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

game.client.selection.new_selector_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__25664){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__25668 = cljs.core.keyword_identical_QMARK_;
var expr__25669 = k__6840__auto__;
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__25669))){
return (new game.client.selection.new_selector_Record(G__25664,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,G__25664,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,G__25664,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,G__25664,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,G__25664,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,G__25664,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,G__25664,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,G__25664,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"$selection-layer","$selection-layer",510184898),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,G__25664,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,G__25664,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,G__25664,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,G__25664,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"selecting?","selecting?",1157912914),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,G__25664,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,G__25664,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,G__25664,self__.started,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"started","started",585705024),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,G__25664,self__.start_count,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"start-count","start-count",1205029397),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,G__25664,self__.stop_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25668.call(null,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),expr__25669))){
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,G__25664,self__.__meta,self__.__extmap,null));
} else {
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__25664),null));
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
}
}
});

game.client.selection.new_selector_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),self__.$overlay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),self__.scene_properties],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$selection-layer","$selection-layer",510184898),self__.$selection_layer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108),self__.$selection_div],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selecting?","selecting?",1157912914),self__.selecting_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected","selected",574897764),self__.selected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241),self__.frame_queued_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started","started",585705024),self__.started],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-count","start-count",1205029397),self__.start_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),self__.stop_count],null))], null),self__.__extmap));
});

game.client.selection.new_selector_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__25664){
var self__ = this;
var this__6831__auto____$1 = this;
return (new game.client.selection.new_selector_Record(self__.scene,self__.init_scene,self__.params,self__.$overlay,self__.renderer,self__.camera,self__.units,self__.scene_properties,self__.$selection_layer,self__.$selection_div,self__.start_pos,self__.end_pos,self__.selecting_QMARK_,self__.selected,self__.frame_queued_QMARK_,self__.started,self__.start_count,self__.stop_count,G__25664,self__.__extmap,self__.__hash));
});

game.client.selection.new_selector_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

game.client.selection.new_selector_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

game.client.selection.new_selector_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__25663){
var self__ = this;
var G__25663__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25663__$1){
return (function (component){
var $selection_div__$1 = (function (){var or__6210__auto__ = self__.$selection_div;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return jayq.core.$.call(null,"<div/>");
}
})();
var $selection_layer__$1 = (function (){var or__6210__auto__ = self__.$selection_layer;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return jayq.core.$.call(null,"<canvas/>");
}
})();
var start_pos__$1 = (function (){var or__6210__auto__ = self__.start_pos;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,null);
}
})();
var selecting_QMARK___$1 = (function (){var or__6210__auto__ = self__.selecting_QMARK_;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,false);
}
})();
var selected__$1 = (function (){var or__6210__auto__ = self__.selected;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();
var end_pos__$1 = (function (){var or__6210__auto__ = self__.end_pos;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,null);
}
})();
var frame_queued_QMARK___$1 = (function (){var or__6210__auto__ = self__.frame_queued_QMARK_;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.atom.call(null,false);
}
})();
var bindns = [cljs.core.str("selector"),cljs.core.str(game.client.common.unique_id.call(null,(game.client.common.data.call(null,self__.$overlay)[(0)])))].join('');
var mousedownevt = [cljs.core.str("mousedown."),cljs.core.str(bindns)].join('');
var mousemoveevt = [cljs.core.str("mousemove."),cljs.core.str(bindns)].join('');
var mouseupevt = [cljs.core.str("mouseup."),cljs.core.str(bindns)].join('');
var mousedblclickevt = [cljs.core.str("dblclick."),cljs.core.str(bindns)].join('');
var contextevt = [cljs.core.str("contextmenu."),cljs.core.str(bindns)].join('');
var selection_element = game.client.scene.get_view_element.call(null,self__.renderer);
var $page = new cljs.core.Keyword(null,"$page","$page",384517215).cljs$core$IFn$_invoke$arity$1(self__.params);
var component__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241),frame_queued_QMARK___$1),new cljs.core.Keyword(null,"selected","selected",574897764),selected__$1),new cljs.core.Keyword(null,"selecting?","selecting?",1157912914),selecting_QMARK___$1),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),start_pos__$1),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),end_pos__$1),new cljs.core.Keyword(null,"$selection-layer","$selection-layer",510184898),$selection_layer__$1),new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108),$selection_div__$1);
game.client.common.data.call(null,self__.$overlay).after($selection_layer__$1);

$selection_layer__$1.addClass(game.client.scene.page_class);

$selection_layer__$1.addClass("autoresize");

$selection_layer__$1.addClass("selection-layer");

game.client.controls.rebind.call(null,$selection_layer__$1,mousedownevt,cljs.core.partial.call(null,game.client.selection.on_mouse_down,component__$1));

game.client.controls.rebind.call(null,$selection_layer__$1,mousemoveevt,cljs.core.partial.call(null,game.client.selection.on_mouse_move,component__$1));

game.client.controls.rebind.call(null,$selection_layer__$1,mouseupevt,cljs.core.partial.call(null,game.client.selection.on_mouse_up,component__$1));

game.client.controls.rebind.call(null,$selection_layer__$1,contextevt,game.client.controls.prevent_default);

game.client.controls.rebind.call(null,$selection_layer__$1,mousedblclickevt,game.client.controls.prevent_default);

$page.append($selection_div__$1);

$selection_div__$1.addClass(game.client.scene.page_class);

$selection_div__$1.addClass("invisible");

$selection_div__$1.addClass("selection-rect");

return component__$1;
});})(G__25663__$1))
.call(null,G__25663__$1),new cljs.core.Keyword(null,"start-count","start-count",1205029397),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),true);
});

game.client.selection.new_selector_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__25663){
var self__ = this;
var G__25663__$1 = this;
return cljs.core.assoc.call(null,cljs.core.update.call(null,((function (G__25663__$1){
return (function (component){
return component;
});})(G__25663__$1))
.call(null,G__25663__$1),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),cljs.core.inc),new cljs.core.Keyword(null,"started","started",585705024),false);
});

game.client.selection.new_selector_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"init-scene","init-scene",624606753,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"$overlay","$overlay",139904710,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"scene-properties","scene-properties",-262402837,null),new cljs.core.Symbol(null,"$selection-layer","$selection-layer",-2144250871,null),new cljs.core.Symbol(null,"$selection-div","$selection-div",257060419,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null),new cljs.core.Symbol(null,"selecting?","selecting?",-1496522855,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"frame-queued?","frame-queued?",696434286,null),new cljs.core.Symbol(null,"started","started",-2068730745,null),new cljs.core.Symbol(null,"start-count","start-count",-1449406372,null),new cljs.core.Symbol(null,"stop-count","stop-count",1390443086,null)], null);
});

game.client.selection.new_selector_Record.cljs$lang$type = true;

game.client.selection.new_selector_Record.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"game.client.selection/new-selector-Record");
});

game.client.selection.new_selector_Record.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"game.client.selection/new-selector-Record");
});

game.client.selection.__GT_new_selector_Record = (function game$client$selection$__GT_new_selector_Record(scene,init_scene,params,$overlay,renderer,camera,units,scene_properties,$selection_layer,$selection_div,start_pos,end_pos,selecting_QMARK_,selected,frame_queued_QMARK_,started,start_count,stop_count){
return (new game.client.selection.new_selector_Record(scene,init_scene,params,$overlay,renderer,camera,units,scene_properties,$selection_layer,$selection_div,start_pos,end_pos,selecting_QMARK_,selected,frame_queued_QMARK_,started,start_count,stop_count,null,null,null));
});

game.client.selection.map__GT_new_selector_Record = (function game$client$selection$map__GT_new_selector_Record(G__25666){
return (new game.client.selection.new_selector_Record(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"$selection-layer","$selection-layer",510184898).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"selecting?","selecting?",1157912914).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"start-count","start-count",1205029397).cljs$core$IFn$_invoke$arity$1(G__25666),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441).cljs$core$IFn$_invoke$arity$1(G__25666),null,cljs.core.dissoc.call(null,G__25666,new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364),new cljs.core.Keyword(null,"$selection-layer","$selection-layer",510184898),new cljs.core.Keyword(null,"$selection-div","$selection-div",-1383471108),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),new cljs.core.Keyword(null,"selecting?","selecting?",1157912914),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"frame-queued?","frame-queued?",-944097241),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"start-count","start-count",1205029397),new cljs.core.Keyword(null,"stop-count","stop-count",-250088441)),null));
});


game.client.selection.new_selector = (function game$client$selection$new_selector(){
return com.stuartsierra.component.using.call(null,game.client.selection.map__GT_new_selector_Record.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"stop-count","stop-count",-250088441),(0),new cljs.core.Keyword(null,"start-count","start-count",1205029397),(0)], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"$overlay","$overlay",-1500626817),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"scene-properties","scene-properties",-1902934364)], null));
});

//# sourceMappingURL=selection.js.map