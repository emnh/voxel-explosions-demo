// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.client.voxelize');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('game.client.math');
goog.require('promesa.core');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
game.client.voxelize.int32_size_bytes = (4);
game.client.voxelize.int32_size_bits = (32);
game.client.voxelize.all_bits_set = (-1);
game.client.voxelize.box_faces = (12);
game.client.voxelize.v2_size = (2);
game.client.voxelize.v3_size = (3);
game.client.voxelize.triangle_size = (3);
game.client.voxelize.billboard_corners = (4);
cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"instanced-voxelize-output","instanced-voxelize-output",1288982611,null),"Returns geometry of cubes representing voxels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"new-geometry","new-geometry",-829777952,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.Geometry","js/THREE.Geometry",-1194491537,null)),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.InstancedBufferGeometry","js/THREE.InstancedBufferGeometry",-1517665087,null)),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null),cljs.core.list(new cljs.core.Keyword(null,"voxel-count","voxel-count",-1588050640),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"inc-voxel-count","inc-voxel-count",601804970,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null)),new cljs.core.Symbol(null,"voxel-width","voxel-width",-1221677016,null),cljs.core.list(new cljs.core.Keyword(null,"voxel-width","voxel-width",1432758753),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"voxel-height","voxel-height",787766446,null),cljs.core.list(new cljs.core.Keyword(null,"voxel-height","voxel-height",-852765081),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"voxel-depth","voxel-depth",-402439081,null),cljs.core.list(new cljs.core.Keyword(null,"voxel-depth","voxel-depth",-2042970608),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"box","box",-1123515375,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.BoxGeometry","js/THREE.BoxGeometry",-1687851253,null),new cljs.core.Symbol(null,"voxel-width","voxel-width",-1221677016,null),new cljs.core.Symbol(null,"voxel-height","voxel-height",787766446,null),new cljs.core.Symbol(null,"voxel-depth","voxel-depth",-402439081,null)),new cljs.core.Symbol(null,"one-box","one-box",-374417784,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.BoxGeometry","js/THREE.BoxGeometry",-1687851253,null),(1),(1),(1)),new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"one-box","one-box",-374417784,null),cljs.core.list(new cljs.core.Symbol(null,".translate",".translate",-1061165482,null),0.5,0.5,0.5)),new cljs.core.Symbol(null,"min-offset-x","min-offset-x",129968248,null),cljs.core.list(new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"min-offset-y","min-offset-y",631382555,null),cljs.core.list(new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"min-offset-z","min-offset-z",144777852,null),cljs.core.list(new cljs.core.Keyword(null,"offset-z","offset-z",-783211250),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"voxels","voxels",-1902483341,null),cljs.core.list(new cljs.core.Keyword(null,"voxels","voxels",751952428),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"total-voxels","total-voxels",-1076375741,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null)),new cljs.core.Symbol(null,"box-indices","box-indices",413453359,null),[],new cljs.core.Symbol(null,"box-translations","box-translations",-96802620,null),[],new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),[],new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),cljs.core.list(new cljs.core.Keyword(null,"uvs","uvs",1776835110),new cljs.core.Symbol(null,"voxel-dict","voxel-dict",-660925589,null)),new cljs.core.Symbol(null,"get-index","get-index",2080583133,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null),new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"z","z",851004344,null))))),new cljs.core.Symbol(null,"inc-get-index","inc-get-index",-290923420,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"inc-voxel-count","inc-voxel-count",601804970,null),new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"inc-voxel-count","inc-voxel-count",601804970,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"z","z",851004344,null)))))], true),cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"total-voxels","total-voxels",-1076375741,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-main","index-main",2086626928,null),cljs.core.list(new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"int32-size-bits","int32-size-bits",-1435094231,null)),new cljs.core.Symbol(null,"index-bit","index-bit",-1695976346,null),cljs.core.list(new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"int32-size-bits","int32-size-bits",-1435094231,null)),new cljs.core.Symbol(null,"int32","int32",-935630873,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"voxels","voxels",-1902483341,null),new cljs.core.Symbol(null,"index-main","index-main",2086626928,null)),new cljs.core.Symbol(null,"bit","bit",1708448927,null),cljs.core.list(new cljs.core.Symbol(null,"bit-and","bit-and",-479352589,null),new cljs.core.Symbol(null,"int32","int32",-935630873,null),cljs.core.list(new cljs.core.Symbol(null,"bit-shift-left","bit-shift-left",-1814765981,null),(1),new cljs.core.Symbol(null,"index-bit","index-bit",-1695976346,null))),new cljs.core.Symbol(null,"voxel-set?","voxel-set?",785656171,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(0),new cljs.core.Symbol(null,"bit","bit",1708448927,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"voxel-set?","voxel-set?",785656171,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x-index","x-index",2130726758,null),cljs.core.list(new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null)),new cljs.core.Symbol(null,"yz-index","yz-index",-1755395924,null),cljs.core.list(new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null)),new cljs.core.Symbol(null,"y-index","y-index",-231326411,null),cljs.core.list(new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"yz-index","yz-index",-1755395924,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null)),new cljs.core.Symbol(null,"z-index","z-index",-761608679,null),cljs.core.list(new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"yz-index","yz-index",-1755395924,null),new cljs.core.Symbol(null,"voxel-count","voxel-count",52480887,null)),new cljs.core.Symbol(null,"x-offset-centre","x-offset-centre",-152426923,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"min-offset-x","min-offset-x",129968248,null),new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"x-index","x-index",2130726758,null),new cljs.core.Symbol(null,"+","+",-740910886,null),0.5),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"voxel-width","voxel-width",-1221677016,null)),new cljs.core.Symbol(null,"y-offset-centre","y-offset-centre",2058388078,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"min-offset-y","min-offset-y",631382555,null),new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"y-index","y-index",-231326411,null),new cljs.core.Symbol(null,"+","+",-740910886,null),0.5),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"voxel-height","voxel-height",787766446,null)),new cljs.core.Symbol(null,"z-offset-centre","z-offset-centre",1846122071,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"min-offset-z","min-offset-z",144777852,null),new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"z-index","z-index",-761608679,null),new cljs.core.Symbol(null,"+","+",-740910886,null),0.5),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"voxel-depth","voxel-depth",-402439081,null)),new cljs.core.Symbol(null,"x-offset","x-offset",140799078,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"min-offset-x","min-offset-x",129968248,null),new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"x-index","x-index",2130726758,null),new cljs.core.Symbol(null,"+","+",-740910886,null),0.0),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"voxel-width","voxel-width",-1221677016,null)),new cljs.core.Symbol(null,"y-offset","y-offset",1638814985,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"min-offset-y","min-offset-y",631382555,null),new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"y-index","y-index",-231326411,null),new cljs.core.Symbol(null,"+","+",-740910886,null),0.0),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"voxel-height","voxel-height",787766446,null)),new cljs.core.Symbol(null,"z-offset","z-offset",-1242275805,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"min-offset-z","min-offset-z",144777852,null),new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"z-index","z-index",-761608679,null),new cljs.core.Symbol(null,"+","+",-740910886,null),0.0),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"voxel-depth","voxel-depth",-402439081,null)),new cljs.core.Symbol(null,"box-clone","box-clone",-1543817613,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.Symbol(null,".clone",".clone",-1837603633,null)),new cljs.core.Symbol(null,"face-vertex-uvs","face-vertex-uvs",-706431655,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"box-clone","box-clone",-1543817613,null),new cljs.core.Symbol(null,".-faceVertexUvs",".-faceVertexUvs",-1905867010,null)),(0)),new cljs.core.Symbol(null,"mat","mat",-461047648,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.Matrix4","js/THREE.Matrix4",1626464089,null))], null),cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"face","face",284050810,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"one-box","one-box",-374417784,null),new cljs.core.Symbol(null,".-faces",".-faces",1457329324,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"face","face",284050810,null),new cljs.core.Symbol(null,".-a",".-a",-1396748649,null)),new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"face","face",284050810,null),new cljs.core.Symbol(null,".-b",".-b",1022260090,null)),new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"face","face",284050810,null),new cljs.core.Symbol(null,".-c",".-c",-376134078,null)),new cljs.core.Symbol(null,"av","av",1883447185,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"one-box","one-box",-374417784,null),new cljs.core.Symbol(null,".-vertices",".-vertices",830647619,null)),new cljs.core.Symbol(null,"a","a",-482876059,null)),new cljs.core.Symbol(null,"bv","bv",-1805340807,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"one-box","one-box",-374417784,null),new cljs.core.Symbol(null,".-vertices",".-vertices",830647619,null)),new cljs.core.Symbol(null,"b","b",-1172211299,null)),new cljs.core.Symbol(null,"cv","cv",-146484402,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"one-box","one-box",-374417784,null),new cljs.core.Symbol(null,".-vertices",".-vertices",830647619,null)),new cljs.core.Symbol(null,"c","c",-122660552,null)),new cljs.core.Symbol(null,"a-uv-index","a-uv-index",683674187,null),cljs.core.list(new cljs.core.Symbol(null,"inc-get-index","inc-get-index",-290923420,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"x-index","x-index",2130726758,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"av","av",1883447185,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"y-index","y-index",-231326411,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"av","av",1883447185,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"z-index","z-index",-761608679,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"av","av",1883447185,null),new cljs.core.Symbol(null,".-z",".-z",-109026354,null)))),new cljs.core.Symbol(null,"b-uv-index","b-uv-index",-499388240,null),cljs.core.list(new cljs.core.Symbol(null,"inc-get-index","inc-get-index",-290923420,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"x-index","x-index",2130726758,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bv","bv",-1805340807,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"y-index","y-index",-231326411,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bv","bv",-1805340807,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"z-index","z-index",-761608679,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bv","bv",-1805340807,null),new cljs.core.Symbol(null,".-z",".-z",-109026354,null)))),new cljs.core.Symbol(null,"c-uv-index","c-uv-index",372216580,null),cljs.core.list(new cljs.core.Symbol(null,"inc-get-index","inc-get-index",-290923420,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"x-index","x-index",2130726758,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"cv","cv",-146484402,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"y-index","y-index",-231326411,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"cv","cv",-146484402,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null))),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"z-index","z-index",-761608679,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"cv","cv",-146484402,null),new cljs.core.Symbol(null,".-z",".-z",-109026354,null)))),new cljs.core.Symbol(null,"a-uv1","a-uv1",433911222,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"a-uv-index","a-uv-index",683674187,null),new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"+","+",-740910886,null),(0))),new cljs.core.Symbol(null,"a-uv2","a-uv2",479727120,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"a-uv-index","a-uv-index",683674187,null),new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"+","+",-740910886,null),(1))),new cljs.core.Symbol(null,"a-uv","a-uv",-2069951335,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.Vector2","js/THREE.Vector2",-1181542582,null),new cljs.core.Symbol(null,"a-uv1","a-uv1",433911222,null),new cljs.core.Symbol(null,"a-uv2","a-uv2",479727120,null)),new cljs.core.Symbol(null,"b-uv1","b-uv1",-1641197858,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"b-uv-index","b-uv-index",-499388240,null),new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"+","+",-740910886,null),(0))),new cljs.core.Symbol(null,"b-uv2","b-uv2",-625258759,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"b-uv-index","b-uv-index",-499388240,null),new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"+","+",-740910886,null),(1))),new cljs.core.Symbol(null,"b-uv","b-uv",-1695427515,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.Vector2","js/THREE.Vector2",-1181542582,null),new cljs.core.Symbol(null,"b-uv1","b-uv1",-1641197858,null),new cljs.core.Symbol(null,"b-uv2","b-uv2",-625258759,null)),new cljs.core.Symbol(null,"c-uv1","c-uv1",1015505853,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"c-uv-index","c-uv-index",372216580,null),new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"+","+",-740910886,null),(0))),new cljs.core.Symbol(null,"c-uv2","c-uv2",-63244114,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),cljs.core.list(new cljs.core.Symbol(null,"infix","infix",-663417656,null),new cljs.core.Symbol(null,"c-uv-index","c-uv-index",372216580,null),new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"+","+",-740910886,null),(1))),new cljs.core.Symbol(null,"c-uv","c-uv",1158912887,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.Vector2","js/THREE.Vector2",-1181542582,null),new cljs.core.Symbol(null,"c-uv1","c-uv1",1015505853,null),new cljs.core.Symbol(null,"c-uv2","c-uv2",-63244114,null))], true),cljs.core.list(new cljs.core.Symbol(null,"aset","aset",900773178,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"face-vertex-uvs","face-vertex-uvs",-706431655,null),new cljs.core.Symbol(null,"i","i",253690212,null)),(0),new cljs.core.Symbol(null,"a-uv","a-uv",-2069951335,null)),cljs.core.list(new cljs.core.Symbol(null,"aset","aset",900773178,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"face-vertex-uvs","face-vertex-uvs",-706431655,null),new cljs.core.Symbol(null,"i","i",253690212,null)),(1),new cljs.core.Symbol(null,"b-uv","b-uv",-1695427515,null)),cljs.core.list(new cljs.core.Symbol(null,"aset","aset",900773178,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"face-vertex-uvs","face-vertex-uvs",-706431655,null),new cljs.core.Symbol(null,"i","i",253690212,null)),(2),new cljs.core.Symbol(null,"c-uv","c-uv",1158912887,null)))),cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"box-faces","box-faces",1487012656,null),new cljs.core.Symbol(null,"triangle-size","triangle-size",-1575392847,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"box-translations","box-translations",-96802620,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),new cljs.core.Symbol(null,"x-offset-centre","x-offset-centre",-152426923,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"box-translations","box-translations",-96802620,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),new cljs.core.Symbol(null,"y-offset-centre","y-offset-centre",2058388078,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"box-translations","box-translations",-96802620,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),new cljs.core.Symbol(null,"z-offset-centre","z-offset-centre",1846122071,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"box-indices","box-indices",413453359,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),new cljs.core.Symbol(null,"index","index",108845612,null)))),cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"box-faces","box-faces",1487012656,null),new cljs.core.Symbol(null,"billboard-corners","billboard-corners",-1617177025,null)),new cljs.core.Symbol(null,"triangle-size","triangle-size",-1575392847,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),-0.5)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),-0.5)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),0.0)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),0.5)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),-0.5)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),0.0)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),-0.5)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),0.5)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),0.0)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),0.5)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),0.5)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,".push",".push",-1497267248,null),0.0))))))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"mat","mat",-461047648,null),cljs.core.list(new cljs.core.Symbol(null,".makeTranslation",".makeTranslation",2018458535,null),new cljs.core.Symbol(null,"x-offset","x-offset",140799078,null),new cljs.core.Symbol(null,"y-offset","y-offset",1638814985,null),new cljs.core.Symbol(null,"z-offset","z-offset",-1242275805,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"new-geometry","new-geometry",-829777952,null),cljs.core.list(new cljs.core.Symbol(null,".merge",".merge",-366898987,null),new cljs.core.Symbol(null,"box-clone","box-clone",-1543817613,null),new cljs.core.Symbol(null,"mat","mat",-461047648,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,".fromGeometry",".fromGeometry",424731050,null),new cljs.core.Symbol(null,"new-geometry","new-geometry",-829777952,null))),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"box-indices","box-indices",413453359,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null),new cljs.core.Symbol(null,"box-indices","box-indices",413453359,null)),new cljs.core.Symbol(null,"box-indices-attr","box-indices-attr",23971071,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.BufferAttribute","js/THREE.BufferAttribute",1029200562,null),new cljs.core.Symbol(null,"box-indices","box-indices",413453359,null),(1)),new cljs.core.Symbol(null,"box-translations","box-translations",-96802620,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null),new cljs.core.Symbol(null,"box-translations","box-translations",-96802620,null)),new cljs.core.Symbol(null,"box-translations-attr","box-translations-attr",1017696129,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.BufferAttribute","js/THREE.BufferAttribute",1029200562,null),new cljs.core.Symbol(null,"box-translations","box-translations",-96802620,null),(3)),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null)),new cljs.core.Symbol(null,"billboard-coords-attr","billboard-coords-attr",-1665841877,null),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","THREE.BufferAttribute","js/THREE.BufferAttribute",1029200562,null),new cljs.core.Symbol(null,"billboard-coords","billboard-coords",-444069009,null),(3))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,".addAttribute",".addAttribute",-445869231,null),"boxIndex",new cljs.core.Symbol(null,"box-indices-attr","box-indices-attr",23971071,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,".addAttribute",".addAttribute",-445869231,null),"boxTranslation",new cljs.core.Symbol(null,"box-translations-attr","box-translations-attr",1017696129,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,".addAttribute",".addAttribute",-445869231,null),"billboardCoord",new cljs.core.Symbol(null,"billboard-coords-attr","billboard-coords-attr",-1665841877,null)))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,".computeBoundingBox",".computeBoundingBox",-1828253921,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,".computeBoundingSphere",".computeBoundingSphere",248153318,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,".computeFaceNormals",".computeFaceNormals",165697865,null))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null),cljs.core.list(new cljs.core.Symbol(null,".computeVertexNormals",".computeVertexNormals",-54022069,null))),new cljs.core.Symbol(null,"bgeo","bgeo",1815606123,null)));
/**
 * Returns geometry of cubes representing voxels
 */
game.client.voxelize.voxelize_output = (function game$client$voxelize$voxelize_output(voxel_dict){
var new_geometry = (new THREE.Geometry());
var bgeo = (new THREE.BufferGeometry());
var voxel_count = new cljs.core.Keyword(null,"voxel-count","voxel-count",-1588050640).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var inc_voxel_count = (voxel_count + (1));
var voxel_width = new cljs.core.Keyword(null,"voxel-width","voxel-width",1432758753).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var voxel_height = new cljs.core.Keyword(null,"voxel-height","voxel-height",-852765081).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var voxel_depth = new cljs.core.Keyword(null,"voxel-depth","voxel-depth",-2042970608).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var box = (new THREE.BoxGeometry(voxel_width,voxel_height,voxel_depth));
var one_box = (new THREE.BoxGeometry((1),(1),(1)));
var _ = one_box.translate(0.5,0.5,0.5);
var min_offset_x = new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var min_offset_y = new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var min_offset_z = new cljs.core.Keyword(null,"offset-z","offset-z",-783211250).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var voxels = new cljs.core.Keyword(null,"voxels","voxels",751952428).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var total_voxels = ((voxel_count * voxel_count) * voxel_count);
var box_indices = [];
var box_translations = [];
var billboard_coords = [];
var uvs = new cljs.core.Keyword(null,"uvs","uvs",1776835110).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var get_index = ((function (new_geometry,bgeo,voxel_count,inc_voxel_count,voxel_width,voxel_height,voxel_depth,box,one_box,_,min_offset_x,min_offset_y,min_offset_z,voxels,total_voxels,box_indices,box_translations,billboard_coords,uvs){
return (function (x,y,z){
return (x + (voxel_count * (y + (voxel_count * z))));
});})(new_geometry,bgeo,voxel_count,inc_voxel_count,voxel_width,voxel_height,voxel_depth,box,one_box,_,min_offset_x,min_offset_y,min_offset_z,voxels,total_voxels,box_indices,box_translations,billboard_coords,uvs))
;
var inc_get_index = ((function (new_geometry,bgeo,voxel_count,inc_voxel_count,voxel_width,voxel_height,voxel_depth,box,one_box,_,min_offset_x,min_offset_y,min_offset_z,voxels,total_voxels,box_indices,box_translations,billboard_coords,uvs,get_index){
return (function (x,y,z){
return (x + (inc_voxel_count * (y + (inc_voxel_count * z))));
});})(new_geometry,bgeo,voxel_count,inc_voxel_count,voxel_width,voxel_height,voxel_depth,box,one_box,_,min_offset_x,min_offset_y,min_offset_z,voxels,total_voxels,box_indices,box_translations,billboard_coords,uvs,get_index))
;
var seq__12235_12267 = cljs.core.seq.call(null,cljs.core.range.call(null,total_voxels));
var chunk__12236_12268 = null;
var count__12237_12269 = (0);
var i__12238_12270 = (0);
while(true){
if((i__12238_12270 < count__12237_12269)){
var index_12271 = cljs.core._nth.call(null,chunk__12236_12268,i__12238_12270);
var index_main_12272 = cljs.core.quot.call(null,index_12271,game.client.voxelize.int32_size_bits);
var index_bit_12273 = cljs.core.mod.call(null,index_12271,game.client.voxelize.int32_size_bits);
var int32_12274 = (voxels[index_main_12272]);
var bit_12275 = (int32_12274 & ((1) << index_bit_12273));
var voxel_set_QMARK__12276 = cljs.core.not_EQ_.call(null,(0),bit_12275);
if(voxel_set_QMARK__12276){
var x_index_12277 = cljs.core.mod.call(null,index_12271,voxel_count);
var yz_index_12278 = cljs.core.quot.call(null,index_12271,voxel_count);
var y_index_12279 = cljs.core.mod.call(null,yz_index_12278,voxel_count);
var z_index_12280 = cljs.core.quot.call(null,yz_index_12278,voxel_count);
var x_offset_centre_12281 = (min_offset_x + ((x_index_12277 + 0.5) * voxel_width));
var y_offset_centre_12282 = (min_offset_y + ((y_index_12279 + 0.5) * voxel_height));
var z_offset_centre_12283 = (min_offset_z + ((z_index_12280 + 0.5) * voxel_depth));
var x_offset_12284 = (min_offset_x + ((x_index_12277 + 0.0) * voxel_width));
var y_offset_12285 = (min_offset_y + ((y_index_12279 + 0.0) * voxel_height));
var z_offset_12286 = (min_offset_z + ((z_index_12280 + 0.0) * voxel_depth));
var box_clone_12287 = box.clone();
var face_vertex_uvs_12288 = (box_clone_12287.faceVertexUvs[(0)]);
var mat_12289 = (new THREE.Matrix4());
var seq__12239_12290 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,one_box.faces));
var chunk__12240_12291 = null;
var count__12241_12292 = (0);
var i__12242_12293 = (0);
while(true){
if((i__12242_12293 < count__12241_12292)){
var vec__12243_12294 = cljs.core._nth.call(null,chunk__12240_12291,i__12242_12293);
var i_12295 = cljs.core.nth.call(null,vec__12243_12294,(0),null);
var face_12296 = cljs.core.nth.call(null,vec__12243_12294,(1),null);
var a_12297 = face_12296.a;
var b_12298 = face_12296.b;
var c_12299 = face_12296.c;
var av_12300 = (one_box.vertices[a_12297]);
var bv_12301 = (one_box.vertices[b_12298]);
var cv_12302 = (one_box.vertices[c_12299]);
var a_uv_index_12303 = inc_get_index.call(null,(x_index_12277 + av_12300.x),(y_index_12279 + av_12300.y),(z_index_12280 + av_12300.z));
var b_uv_index_12304 = inc_get_index.call(null,(x_index_12277 + bv_12301.x),(y_index_12279 + bv_12301.y),(z_index_12280 + bv_12301.z));
var c_uv_index_12305 = inc_get_index.call(null,(x_index_12277 + cv_12302.x),(y_index_12279 + cv_12302.y),(z_index_12280 + cv_12302.z));
var a_uv1_12306 = (uvs[((a_uv_index_12303 * (2)) + (0))]);
var a_uv2_12307 = (uvs[((a_uv_index_12303 * (2)) + (1))]);
var a_uv_12308 = (new THREE.Vector2(a_uv1_12306,a_uv2_12307));
var b_uv1_12309 = (uvs[((b_uv_index_12304 * (2)) + (0))]);
var b_uv2_12310 = (uvs[((b_uv_index_12304 * (2)) + (1))]);
var b_uv_12311 = (new THREE.Vector2(b_uv1_12309,b_uv2_12310));
var c_uv1_12312 = (uvs[((c_uv_index_12305 * (2)) + (0))]);
var c_uv2_12313 = (uvs[((c_uv_index_12305 * (2)) + (1))]);
var c_uv_12314 = (new THREE.Vector2(c_uv1_12312,c_uv2_12313));
((face_vertex_uvs_12288[i_12295])[(0)] = a_uv_12308);

((face_vertex_uvs_12288[i_12295])[(1)] = b_uv_12311);

((face_vertex_uvs_12288[i_12295])[(2)] = c_uv_12314);

var G__12315 = seq__12239_12290;
var G__12316 = chunk__12240_12291;
var G__12317 = count__12241_12292;
var G__12318 = (i__12242_12293 + (1));
seq__12239_12290 = G__12315;
chunk__12240_12291 = G__12316;
count__12241_12292 = G__12317;
i__12242_12293 = G__12318;
continue;
} else {
var temp__4657__auto___12319 = cljs.core.seq.call(null,seq__12239_12290);
if(temp__4657__auto___12319){
var seq__12239_12320__$1 = temp__4657__auto___12319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12239_12320__$1)){
var c__7021__auto___12321 = cljs.core.chunk_first.call(null,seq__12239_12320__$1);
var G__12322 = cljs.core.chunk_rest.call(null,seq__12239_12320__$1);
var G__12323 = c__7021__auto___12321;
var G__12324 = cljs.core.count.call(null,c__7021__auto___12321);
var G__12325 = (0);
seq__12239_12290 = G__12322;
chunk__12240_12291 = G__12323;
count__12241_12292 = G__12324;
i__12242_12293 = G__12325;
continue;
} else {
var vec__12244_12326 = cljs.core.first.call(null,seq__12239_12320__$1);
var i_12327 = cljs.core.nth.call(null,vec__12244_12326,(0),null);
var face_12328 = cljs.core.nth.call(null,vec__12244_12326,(1),null);
var a_12329 = face_12328.a;
var b_12330 = face_12328.b;
var c_12331 = face_12328.c;
var av_12332 = (one_box.vertices[a_12329]);
var bv_12333 = (one_box.vertices[b_12330]);
var cv_12334 = (one_box.vertices[c_12331]);
var a_uv_index_12335 = inc_get_index.call(null,(x_index_12277 + av_12332.x),(y_index_12279 + av_12332.y),(z_index_12280 + av_12332.z));
var b_uv_index_12336 = inc_get_index.call(null,(x_index_12277 + bv_12333.x),(y_index_12279 + bv_12333.y),(z_index_12280 + bv_12333.z));
var c_uv_index_12337 = inc_get_index.call(null,(x_index_12277 + cv_12334.x),(y_index_12279 + cv_12334.y),(z_index_12280 + cv_12334.z));
var a_uv1_12338 = (uvs[((a_uv_index_12335 * (2)) + (0))]);
var a_uv2_12339 = (uvs[((a_uv_index_12335 * (2)) + (1))]);
var a_uv_12340 = (new THREE.Vector2(a_uv1_12338,a_uv2_12339));
var b_uv1_12341 = (uvs[((b_uv_index_12336 * (2)) + (0))]);
var b_uv2_12342 = (uvs[((b_uv_index_12336 * (2)) + (1))]);
var b_uv_12343 = (new THREE.Vector2(b_uv1_12341,b_uv2_12342));
var c_uv1_12344 = (uvs[((c_uv_index_12337 * (2)) + (0))]);
var c_uv2_12345 = (uvs[((c_uv_index_12337 * (2)) + (1))]);
var c_uv_12346 = (new THREE.Vector2(c_uv1_12344,c_uv2_12345));
((face_vertex_uvs_12288[i_12327])[(0)] = a_uv_12340);

((face_vertex_uvs_12288[i_12327])[(1)] = b_uv_12343);

((face_vertex_uvs_12288[i_12327])[(2)] = c_uv_12346);

var G__12347 = cljs.core.next.call(null,seq__12239_12320__$1);
var G__12348 = null;
var G__12349 = (0);
var G__12350 = (0);
seq__12239_12290 = G__12347;
chunk__12240_12291 = G__12348;
count__12241_12292 = G__12349;
i__12242_12293 = G__12350;
continue;
}
} else {
}
}
break;
}

var seq__12245_12351 = cljs.core.seq.call(null,cljs.core.range.call(null,(game.client.voxelize.box_faces * game.client.voxelize.triangle_size)));
var chunk__12246_12352 = null;
var count__12247_12353 = (0);
var i__12248_12354 = (0);
while(true){
if((i__12248_12354 < count__12247_12353)){
var i_12355 = cljs.core._nth.call(null,chunk__12246_12352,i__12248_12354);
box_translations.push(x_offset_centre_12281);

box_translations.push(y_offset_centre_12282);

box_translations.push(z_offset_centre_12283);

box_indices.push(index_12271);

var G__12356 = seq__12245_12351;
var G__12357 = chunk__12246_12352;
var G__12358 = count__12247_12353;
var G__12359 = (i__12248_12354 + (1));
seq__12245_12351 = G__12356;
chunk__12246_12352 = G__12357;
count__12247_12353 = G__12358;
i__12248_12354 = G__12359;
continue;
} else {
var temp__4657__auto___12360 = cljs.core.seq.call(null,seq__12245_12351);
if(temp__4657__auto___12360){
var seq__12245_12361__$1 = temp__4657__auto___12360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12245_12361__$1)){
var c__7021__auto___12362 = cljs.core.chunk_first.call(null,seq__12245_12361__$1);
var G__12363 = cljs.core.chunk_rest.call(null,seq__12245_12361__$1);
var G__12364 = c__7021__auto___12362;
var G__12365 = cljs.core.count.call(null,c__7021__auto___12362);
var G__12366 = (0);
seq__12245_12351 = G__12363;
chunk__12246_12352 = G__12364;
count__12247_12353 = G__12365;
i__12248_12354 = G__12366;
continue;
} else {
var i_12367 = cljs.core.first.call(null,seq__12245_12361__$1);
box_translations.push(x_offset_centre_12281);

box_translations.push(y_offset_centre_12282);

box_translations.push(z_offset_centre_12283);

box_indices.push(index_12271);

var G__12368 = cljs.core.next.call(null,seq__12245_12361__$1);
var G__12369 = null;
var G__12370 = (0);
var G__12371 = (0);
seq__12245_12351 = G__12368;
chunk__12246_12352 = G__12369;
count__12247_12353 = G__12370;
i__12248_12354 = G__12371;
continue;
}
} else {
}
}
break;
}

var seq__12249_12372 = cljs.core.seq.call(null,cljs.core.range.call(null,((game.client.voxelize.box_faces / game.client.voxelize.billboard_corners) * game.client.voxelize.triangle_size)));
var chunk__12250_12373 = null;
var count__12251_12374 = (0);
var i__12252_12375 = (0);
while(true){
if((i__12252_12375 < count__12251_12374)){
var i_12376 = cljs.core._nth.call(null,chunk__12250_12373,i__12252_12375);
billboard_coords.push(-0.5);

billboard_coords.push(-0.5);

billboard_coords.push(0.0);

billboard_coords.push(0.5);

billboard_coords.push(-0.5);

billboard_coords.push(0.0);

billboard_coords.push(-0.5);

billboard_coords.push(0.5);

billboard_coords.push(0.0);

billboard_coords.push(0.5);

billboard_coords.push(0.5);

billboard_coords.push(0.0);

var G__12377 = seq__12249_12372;
var G__12378 = chunk__12250_12373;
var G__12379 = count__12251_12374;
var G__12380 = (i__12252_12375 + (1));
seq__12249_12372 = G__12377;
chunk__12250_12373 = G__12378;
count__12251_12374 = G__12379;
i__12252_12375 = G__12380;
continue;
} else {
var temp__4657__auto___12381 = cljs.core.seq.call(null,seq__12249_12372);
if(temp__4657__auto___12381){
var seq__12249_12382__$1 = temp__4657__auto___12381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12249_12382__$1)){
var c__7021__auto___12383 = cljs.core.chunk_first.call(null,seq__12249_12382__$1);
var G__12384 = cljs.core.chunk_rest.call(null,seq__12249_12382__$1);
var G__12385 = c__7021__auto___12383;
var G__12386 = cljs.core.count.call(null,c__7021__auto___12383);
var G__12387 = (0);
seq__12249_12372 = G__12384;
chunk__12250_12373 = G__12385;
count__12251_12374 = G__12386;
i__12252_12375 = G__12387;
continue;
} else {
var i_12388 = cljs.core.first.call(null,seq__12249_12382__$1);
billboard_coords.push(-0.5);

billboard_coords.push(-0.5);

billboard_coords.push(0.0);

billboard_coords.push(0.5);

billboard_coords.push(-0.5);

billboard_coords.push(0.0);

billboard_coords.push(-0.5);

billboard_coords.push(0.5);

billboard_coords.push(0.0);

billboard_coords.push(0.5);

billboard_coords.push(0.5);

billboard_coords.push(0.0);

var G__12389 = cljs.core.next.call(null,seq__12249_12382__$1);
var G__12390 = null;
var G__12391 = (0);
var G__12392 = (0);
seq__12249_12372 = G__12389;
chunk__12250_12373 = G__12390;
count__12251_12374 = G__12391;
i__12252_12375 = G__12392;
continue;
}
} else {
}
}
break;
}

mat_12289.makeTranslation(x_offset_12284,y_offset_12285,z_offset_12286);

new_geometry.merge(box_clone_12287,mat_12289);
} else {
}

var G__12393 = seq__12235_12267;
var G__12394 = chunk__12236_12268;
var G__12395 = count__12237_12269;
var G__12396 = (i__12238_12270 + (1));
seq__12235_12267 = G__12393;
chunk__12236_12268 = G__12394;
count__12237_12269 = G__12395;
i__12238_12270 = G__12396;
continue;
} else {
var temp__4657__auto___12397 = cljs.core.seq.call(null,seq__12235_12267);
if(temp__4657__auto___12397){
var seq__12235_12398__$1 = temp__4657__auto___12397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12235_12398__$1)){
var c__7021__auto___12399 = cljs.core.chunk_first.call(null,seq__12235_12398__$1);
var G__12400 = cljs.core.chunk_rest.call(null,seq__12235_12398__$1);
var G__12401 = c__7021__auto___12399;
var G__12402 = cljs.core.count.call(null,c__7021__auto___12399);
var G__12403 = (0);
seq__12235_12267 = G__12400;
chunk__12236_12268 = G__12401;
count__12237_12269 = G__12402;
i__12238_12270 = G__12403;
continue;
} else {
var index_12404 = cljs.core.first.call(null,seq__12235_12398__$1);
var index_main_12405 = cljs.core.quot.call(null,index_12404,game.client.voxelize.int32_size_bits);
var index_bit_12406 = cljs.core.mod.call(null,index_12404,game.client.voxelize.int32_size_bits);
var int32_12407 = (voxels[index_main_12405]);
var bit_12408 = (int32_12407 & ((1) << index_bit_12406));
var voxel_set_QMARK__12409 = cljs.core.not_EQ_.call(null,(0),bit_12408);
if(voxel_set_QMARK__12409){
var x_index_12410 = cljs.core.mod.call(null,index_12404,voxel_count);
var yz_index_12411 = cljs.core.quot.call(null,index_12404,voxel_count);
var y_index_12412 = cljs.core.mod.call(null,yz_index_12411,voxel_count);
var z_index_12413 = cljs.core.quot.call(null,yz_index_12411,voxel_count);
var x_offset_centre_12414 = (min_offset_x + ((x_index_12410 + 0.5) * voxel_width));
var y_offset_centre_12415 = (min_offset_y + ((y_index_12412 + 0.5) * voxel_height));
var z_offset_centre_12416 = (min_offset_z + ((z_index_12413 + 0.5) * voxel_depth));
var x_offset_12417 = (min_offset_x + ((x_index_12410 + 0.0) * voxel_width));
var y_offset_12418 = (min_offset_y + ((y_index_12412 + 0.0) * voxel_height));
var z_offset_12419 = (min_offset_z + ((z_index_12413 + 0.0) * voxel_depth));
var box_clone_12420 = box.clone();
var face_vertex_uvs_12421 = (box_clone_12420.faceVertexUvs[(0)]);
var mat_12422 = (new THREE.Matrix4());
var seq__12253_12423 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,one_box.faces));
var chunk__12254_12424 = null;
var count__12255_12425 = (0);
var i__12256_12426 = (0);
while(true){
if((i__12256_12426 < count__12255_12425)){
var vec__12257_12427 = cljs.core._nth.call(null,chunk__12254_12424,i__12256_12426);
var i_12428 = cljs.core.nth.call(null,vec__12257_12427,(0),null);
var face_12429 = cljs.core.nth.call(null,vec__12257_12427,(1),null);
var a_12430 = face_12429.a;
var b_12431 = face_12429.b;
var c_12432 = face_12429.c;
var av_12433 = (one_box.vertices[a_12430]);
var bv_12434 = (one_box.vertices[b_12431]);
var cv_12435 = (one_box.vertices[c_12432]);
var a_uv_index_12436 = inc_get_index.call(null,(x_index_12410 + av_12433.x),(y_index_12412 + av_12433.y),(z_index_12413 + av_12433.z));
var b_uv_index_12437 = inc_get_index.call(null,(x_index_12410 + bv_12434.x),(y_index_12412 + bv_12434.y),(z_index_12413 + bv_12434.z));
var c_uv_index_12438 = inc_get_index.call(null,(x_index_12410 + cv_12435.x),(y_index_12412 + cv_12435.y),(z_index_12413 + cv_12435.z));
var a_uv1_12439 = (uvs[((a_uv_index_12436 * (2)) + (0))]);
var a_uv2_12440 = (uvs[((a_uv_index_12436 * (2)) + (1))]);
var a_uv_12441 = (new THREE.Vector2(a_uv1_12439,a_uv2_12440));
var b_uv1_12442 = (uvs[((b_uv_index_12437 * (2)) + (0))]);
var b_uv2_12443 = (uvs[((b_uv_index_12437 * (2)) + (1))]);
var b_uv_12444 = (new THREE.Vector2(b_uv1_12442,b_uv2_12443));
var c_uv1_12445 = (uvs[((c_uv_index_12438 * (2)) + (0))]);
var c_uv2_12446 = (uvs[((c_uv_index_12438 * (2)) + (1))]);
var c_uv_12447 = (new THREE.Vector2(c_uv1_12445,c_uv2_12446));
((face_vertex_uvs_12421[i_12428])[(0)] = a_uv_12441);

((face_vertex_uvs_12421[i_12428])[(1)] = b_uv_12444);

((face_vertex_uvs_12421[i_12428])[(2)] = c_uv_12447);

var G__12448 = seq__12253_12423;
var G__12449 = chunk__12254_12424;
var G__12450 = count__12255_12425;
var G__12451 = (i__12256_12426 + (1));
seq__12253_12423 = G__12448;
chunk__12254_12424 = G__12449;
count__12255_12425 = G__12450;
i__12256_12426 = G__12451;
continue;
} else {
var temp__4657__auto___12452__$1 = cljs.core.seq.call(null,seq__12253_12423);
if(temp__4657__auto___12452__$1){
var seq__12253_12453__$1 = temp__4657__auto___12452__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12253_12453__$1)){
var c__7021__auto___12454 = cljs.core.chunk_first.call(null,seq__12253_12453__$1);
var G__12455 = cljs.core.chunk_rest.call(null,seq__12253_12453__$1);
var G__12456 = c__7021__auto___12454;
var G__12457 = cljs.core.count.call(null,c__7021__auto___12454);
var G__12458 = (0);
seq__12253_12423 = G__12455;
chunk__12254_12424 = G__12456;
count__12255_12425 = G__12457;
i__12256_12426 = G__12458;
continue;
} else {
var vec__12258_12459 = cljs.core.first.call(null,seq__12253_12453__$1);
var i_12460 = cljs.core.nth.call(null,vec__12258_12459,(0),null);
var face_12461 = cljs.core.nth.call(null,vec__12258_12459,(1),null);
var a_12462 = face_12461.a;
var b_12463 = face_12461.b;
var c_12464 = face_12461.c;
var av_12465 = (one_box.vertices[a_12462]);
var bv_12466 = (one_box.vertices[b_12463]);
var cv_12467 = (one_box.vertices[c_12464]);
var a_uv_index_12468 = inc_get_index.call(null,(x_index_12410 + av_12465.x),(y_index_12412 + av_12465.y),(z_index_12413 + av_12465.z));
var b_uv_index_12469 = inc_get_index.call(null,(x_index_12410 + bv_12466.x),(y_index_12412 + bv_12466.y),(z_index_12413 + bv_12466.z));
var c_uv_index_12470 = inc_get_index.call(null,(x_index_12410 + cv_12467.x),(y_index_12412 + cv_12467.y),(z_index_12413 + cv_12467.z));
var a_uv1_12471 = (uvs[((a_uv_index_12468 * (2)) + (0))]);
var a_uv2_12472 = (uvs[((a_uv_index_12468 * (2)) + (1))]);
var a_uv_12473 = (new THREE.Vector2(a_uv1_12471,a_uv2_12472));
var b_uv1_12474 = (uvs[((b_uv_index_12469 * (2)) + (0))]);
var b_uv2_12475 = (uvs[((b_uv_index_12469 * (2)) + (1))]);
var b_uv_12476 = (new THREE.Vector2(b_uv1_12474,b_uv2_12475));
var c_uv1_12477 = (uvs[((c_uv_index_12470 * (2)) + (0))]);
var c_uv2_12478 = (uvs[((c_uv_index_12470 * (2)) + (1))]);
var c_uv_12479 = (new THREE.Vector2(c_uv1_12477,c_uv2_12478));
((face_vertex_uvs_12421[i_12460])[(0)] = a_uv_12473);

((face_vertex_uvs_12421[i_12460])[(1)] = b_uv_12476);

((face_vertex_uvs_12421[i_12460])[(2)] = c_uv_12479);

var G__12480 = cljs.core.next.call(null,seq__12253_12453__$1);
var G__12481 = null;
var G__12482 = (0);
var G__12483 = (0);
seq__12253_12423 = G__12480;
chunk__12254_12424 = G__12481;
count__12255_12425 = G__12482;
i__12256_12426 = G__12483;
continue;
}
} else {
}
}
break;
}

var seq__12259_12484 = cljs.core.seq.call(null,cljs.core.range.call(null,(game.client.voxelize.box_faces * game.client.voxelize.triangle_size)));
var chunk__12260_12485 = null;
var count__12261_12486 = (0);
var i__12262_12487 = (0);
while(true){
if((i__12262_12487 < count__12261_12486)){
var i_12488 = cljs.core._nth.call(null,chunk__12260_12485,i__12262_12487);
box_translations.push(x_offset_centre_12414);

box_translations.push(y_offset_centre_12415);

box_translations.push(z_offset_centre_12416);

box_indices.push(index_12404);

var G__12489 = seq__12259_12484;
var G__12490 = chunk__12260_12485;
var G__12491 = count__12261_12486;
var G__12492 = (i__12262_12487 + (1));
seq__12259_12484 = G__12489;
chunk__12260_12485 = G__12490;
count__12261_12486 = G__12491;
i__12262_12487 = G__12492;
continue;
} else {
var temp__4657__auto___12493__$1 = cljs.core.seq.call(null,seq__12259_12484);
if(temp__4657__auto___12493__$1){
var seq__12259_12494__$1 = temp__4657__auto___12493__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12259_12494__$1)){
var c__7021__auto___12495 = cljs.core.chunk_first.call(null,seq__12259_12494__$1);
var G__12496 = cljs.core.chunk_rest.call(null,seq__12259_12494__$1);
var G__12497 = c__7021__auto___12495;
var G__12498 = cljs.core.count.call(null,c__7021__auto___12495);
var G__12499 = (0);
seq__12259_12484 = G__12496;
chunk__12260_12485 = G__12497;
count__12261_12486 = G__12498;
i__12262_12487 = G__12499;
continue;
} else {
var i_12500 = cljs.core.first.call(null,seq__12259_12494__$1);
box_translations.push(x_offset_centre_12414);

box_translations.push(y_offset_centre_12415);

box_translations.push(z_offset_centre_12416);

box_indices.push(index_12404);

var G__12501 = cljs.core.next.call(null,seq__12259_12494__$1);
var G__12502 = null;
var G__12503 = (0);
var G__12504 = (0);
seq__12259_12484 = G__12501;
chunk__12260_12485 = G__12502;
count__12261_12486 = G__12503;
i__12262_12487 = G__12504;
continue;
}
} else {
}
}
break;
}

var seq__12263_12505 = cljs.core.seq.call(null,cljs.core.range.call(null,((game.client.voxelize.box_faces / game.client.voxelize.billboard_corners) * game.client.voxelize.triangle_size)));
var chunk__12264_12506 = null;
var count__12265_12507 = (0);
var i__12266_12508 = (0);
while(true){
if((i__12266_12508 < count__12265_12507)){
var i_12509 = cljs.core._nth.call(null,chunk__12264_12506,i__12266_12508);
billboard_coords.push(-0.5);

billboard_coords.push(-0.5);

billboard_coords.push(0.0);

billboard_coords.push(0.5);

billboard_coords.push(-0.5);

billboard_coords.push(0.0);

billboard_coords.push(-0.5);

billboard_coords.push(0.5);

billboard_coords.push(0.0);

billboard_coords.push(0.5);

billboard_coords.push(0.5);

billboard_coords.push(0.0);

var G__12510 = seq__12263_12505;
var G__12511 = chunk__12264_12506;
var G__12512 = count__12265_12507;
var G__12513 = (i__12266_12508 + (1));
seq__12263_12505 = G__12510;
chunk__12264_12506 = G__12511;
count__12265_12507 = G__12512;
i__12266_12508 = G__12513;
continue;
} else {
var temp__4657__auto___12514__$1 = cljs.core.seq.call(null,seq__12263_12505);
if(temp__4657__auto___12514__$1){
var seq__12263_12515__$1 = temp__4657__auto___12514__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12263_12515__$1)){
var c__7021__auto___12516 = cljs.core.chunk_first.call(null,seq__12263_12515__$1);
var G__12517 = cljs.core.chunk_rest.call(null,seq__12263_12515__$1);
var G__12518 = c__7021__auto___12516;
var G__12519 = cljs.core.count.call(null,c__7021__auto___12516);
var G__12520 = (0);
seq__12263_12505 = G__12517;
chunk__12264_12506 = G__12518;
count__12265_12507 = G__12519;
i__12266_12508 = G__12520;
continue;
} else {
var i_12521 = cljs.core.first.call(null,seq__12263_12515__$1);
billboard_coords.push(-0.5);

billboard_coords.push(-0.5);

billboard_coords.push(0.0);

billboard_coords.push(0.5);

billboard_coords.push(-0.5);

billboard_coords.push(0.0);

billboard_coords.push(-0.5);

billboard_coords.push(0.5);

billboard_coords.push(0.0);

billboard_coords.push(0.5);

billboard_coords.push(0.5);

billboard_coords.push(0.0);

var G__12522 = cljs.core.next.call(null,seq__12263_12515__$1);
var G__12523 = null;
var G__12524 = (0);
var G__12525 = (0);
seq__12263_12505 = G__12522;
chunk__12264_12506 = G__12523;
count__12265_12507 = G__12524;
i__12266_12508 = G__12525;
continue;
}
} else {
}
}
break;
}

mat_12422.makeTranslation(x_offset_12417,y_offset_12418,z_offset_12419);

new_geometry.merge(box_clone_12420,mat_12422);
} else {
}

var G__12526 = cljs.core.next.call(null,seq__12235_12398__$1);
var G__12527 = null;
var G__12528 = (0);
var G__12529 = (0);
seq__12235_12267 = G__12526;
chunk__12236_12268 = G__12527;
count__12237_12269 = G__12528;
i__12238_12270 = G__12529;
continue;
}
} else {
}
}
break;
}

bgeo.fromGeometry(new_geometry);

var box_indices_12530__$1 = (new Float32Array(box_indices));
var box_indices_attr_12531 = (new THREE.BufferAttribute(box_indices_12530__$1,(1)));
var box_translations_12532__$1 = (new Float32Array(box_translations));
var box_translations_attr_12533 = (new THREE.BufferAttribute(box_translations_12532__$1,(3)));
var billboard_coords_12534__$1 = (new Float32Array(billboard_coords));
var billboard_coords_attr_12535 = (new THREE.BufferAttribute(billboard_coords_12534__$1,(3)));
bgeo.addAttribute("boxIndex",box_indices_attr_12531);

bgeo.addAttribute("boxTranslation",box_translations_attr_12533);

bgeo.addAttribute("billboardCoord",billboard_coords_attr_12535);

bgeo.computeBoundingBox();

bgeo.computeBoundingSphere();

bgeo.computeFaceNormals();

bgeo.computeVertexNormals();

return bgeo;
});
game.client.voxelize.is_set_QMARK_ = (function game$client$voxelize$is_set_QMARK_(voxels,voxel_count,x,y,z){
var index = (x + (voxel_count * (y + (voxel_count * z))));
var index_main = cljs.core.quot.call(null,index,game.client.voxelize.int32_size_bits);
var index_bit = cljs.core.mod.call(null,index,game.client.voxelize.int32_size_bits);
var int32 = (voxels[index_main]);
var bit = (int32 & ((1) << index_bit));
return cljs.core.not_EQ_.call(null,(0),bit);
});
game.client.voxelize.set_unset_voxel = (function game$client$voxelize$set_unset_voxel(voxels,voxel_count,x,y,z,f){
var index = (x + (voxel_count * (y + (voxel_count * z))));
var index_main = cljs.core.quot.call(null,index,game.client.voxelize.int32_size_bits);
var index_bit = cljs.core.mod.call(null,index,game.client.voxelize.int32_size_bits);
var int32 = (voxels[index_main]);
var new_value = f.call(null,int32,index_bit);
return (voxels[index_main] = new_value);
});
game.client.voxelize.set_voxel = (function game$client$voxelize$set_voxel(voxels,voxel_count,x,y,z){
return game.client.voxelize.set_unset_voxel.call(null,voxels,voxel_count,x,y,z,cljs.core.bit_set);
});
game.client.voxelize.unset_voxel = (function game$client$voxelize$unset_voxel(voxels,voxel_count,x,y,z){
return game.client.voxelize.set_unset_voxel.call(null,voxels,voxel_count,x,y,z,cljs.core.bit_clear);
});
game.client.voxelize.fill_inside = (function game$client$voxelize$fill_inside(voxel_dict){
var voxel_count = new cljs.core.Keyword(null,"voxel-count","voxel-count",-1588050640).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var voxel_width = new cljs.core.Keyword(null,"voxel-width","voxel-width",1432758753).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var voxel_height = new cljs.core.Keyword(null,"voxel-height","voxel-height",-852765081).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var voxel_depth = new cljs.core.Keyword(null,"voxel-depth","voxel-depth",-2042970608).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var min_offset_x = new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var min_offset_y = new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var min_offset_z = new cljs.core.Keyword(null,"offset-z","offset-z",-783211250).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var voxels = new cljs.core.Keyword(null,"voxels","voxels",751952428).cljs$core$IFn$_invoke$arity$1(voxel_dict);
var voxels_size = voxels.length;
var new_voxels = (new Int32Array(voxels_size));
var _ = new_voxels.fill(game.client.voxelize.all_bits_set);
var flood_fill = ((function (voxel_count,voxel_width,voxel_height,voxel_depth,min_offset_x,min_offset_y,min_offset_z,voxels,voxels_size,new_voxels,_){
return (function game$client$voxelize$fill_inside_$_flood_fill(x,y,z){
if(cljs.core.truth_((function (){var and__6198__auto__ = cljs.core.not.call(null,game.client.voxelize.is_set_QMARK_.call(null,voxels,voxel_count,x,y,z));
if(and__6198__auto__){
return game.client.voxelize.is_set_QMARK_.call(null,new_voxels,voxel_count,x,y,z);
} else {
return and__6198__auto__;
}
})())){
var neighbours = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((x + (1)) < voxel_count))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,z], null):null),((((x - (1)) >= (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,z], null):null),((((y + (1)) < voxel_count))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),z], null):null),((((y - (1)) >= (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),z], null):null),((((z + (1)) < voxel_count))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z + (1))], null):null),((((z - (1)) >= (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z - (1))], null):null)], null);
var neighbours__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,neighbours);
game.client.voxelize.unset_voxel.call(null,new_voxels,voxel_count,x,y,z);

var seq__12582 = cljs.core.seq.call(null,neighbours__$1);
var chunk__12583 = null;
var count__12584 = (0);
var i__12585 = (0);
while(true){
if((i__12585 < count__12584)){
var vec__12586 = cljs.core._nth.call(null,chunk__12583,i__12585);
var x__$1 = cljs.core.nth.call(null,vec__12586,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__12586,(1),null);
var z__$1 = cljs.core.nth.call(null,vec__12586,(2),null);
game$client$voxelize$fill_inside_$_flood_fill.call(null,x__$1,y__$1,z__$1);

var G__12616 = seq__12582;
var G__12617 = chunk__12583;
var G__12618 = count__12584;
var G__12619 = (i__12585 + (1));
seq__12582 = G__12616;
chunk__12583 = G__12617;
count__12584 = G__12618;
i__12585 = G__12619;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12582);
if(temp__4657__auto__){
var seq__12582__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12582__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12582__$1);
var G__12620 = cljs.core.chunk_rest.call(null,seq__12582__$1);
var G__12621 = c__7021__auto__;
var G__12622 = cljs.core.count.call(null,c__7021__auto__);
var G__12623 = (0);
seq__12582 = G__12620;
chunk__12583 = G__12621;
count__12584 = G__12622;
i__12585 = G__12623;
continue;
} else {
var vec__12587 = cljs.core.first.call(null,seq__12582__$1);
var x__$1 = cljs.core.nth.call(null,vec__12587,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__12587,(1),null);
var z__$1 = cljs.core.nth.call(null,vec__12587,(2),null);
game$client$voxelize$fill_inside_$_flood_fill.call(null,x__$1,y__$1,z__$1);

var G__12624 = cljs.core.next.call(null,seq__12582__$1);
var G__12625 = null;
var G__12626 = (0);
var G__12627 = (0);
seq__12582 = G__12624;
chunk__12583 = G__12625;
count__12584 = G__12626;
i__12585 = G__12627;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(voxel_count,voxel_width,voxel_height,voxel_depth,min_offset_x,min_offset_y,min_offset_z,voxels,voxels_size,new_voxels,_))
;
var seq__12588_12628 = cljs.core.seq.call(null,cljs.core.range.call(null,voxel_count));
var chunk__12601_12629 = null;
var count__12602_12630 = (0);
var i__12603_12631 = (0);
while(true){
if((i__12603_12631 < count__12602_12630)){
var x_12632 = cljs.core._nth.call(null,chunk__12601_12629,i__12603_12631);
var seq__12604_12633 = cljs.core.seq.call(null,cljs.core.range.call(null,voxel_count));
var chunk__12609_12634 = null;
var count__12610_12635 = (0);
var i__12611_12636 = (0);
while(true){
if((i__12611_12636 < count__12610_12635)){
var y_12637 = cljs.core._nth.call(null,chunk__12609_12634,i__12611_12636);
var seq__12612_12638 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(voxel_count - (1))], null));
var chunk__12613_12639 = null;
var count__12614_12640 = (0);
var i__12615_12641 = (0);
while(true){
if((i__12615_12641 < count__12614_12640)){
var border_12642 = cljs.core._nth.call(null,chunk__12613_12639,i__12615_12641);
flood_fill.call(null,x_12632,y_12637,border_12642);

flood_fill.call(null,x_12632,border_12642,y_12637);

flood_fill.call(null,border_12642,x_12632,y_12637);

var G__12643 = seq__12612_12638;
var G__12644 = chunk__12613_12639;
var G__12645 = count__12614_12640;
var G__12646 = (i__12615_12641 + (1));
seq__12612_12638 = G__12643;
chunk__12613_12639 = G__12644;
count__12614_12640 = G__12645;
i__12615_12641 = G__12646;
continue;
} else {
var temp__4657__auto___12647 = cljs.core.seq.call(null,seq__12612_12638);
if(temp__4657__auto___12647){
var seq__12612_12648__$1 = temp__4657__auto___12647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12612_12648__$1)){
var c__7021__auto___12649 = cljs.core.chunk_first.call(null,seq__12612_12648__$1);
var G__12650 = cljs.core.chunk_rest.call(null,seq__12612_12648__$1);
var G__12651 = c__7021__auto___12649;
var G__12652 = cljs.core.count.call(null,c__7021__auto___12649);
var G__12653 = (0);
seq__12612_12638 = G__12650;
chunk__12613_12639 = G__12651;
count__12614_12640 = G__12652;
i__12615_12641 = G__12653;
continue;
} else {
var border_12654 = cljs.core.first.call(null,seq__12612_12648__$1);
flood_fill.call(null,x_12632,y_12637,border_12654);

flood_fill.call(null,x_12632,border_12654,y_12637);

flood_fill.call(null,border_12654,x_12632,y_12637);

var G__12655 = cljs.core.next.call(null,seq__12612_12648__$1);
var G__12656 = null;
var G__12657 = (0);
var G__12658 = (0);
seq__12612_12638 = G__12655;
chunk__12613_12639 = G__12656;
count__12614_12640 = G__12657;
i__12615_12641 = G__12658;
continue;
}
} else {
}
}
break;
}

var G__12659 = seq__12604_12633;
var G__12660 = chunk__12609_12634;
var G__12661 = count__12610_12635;
var G__12662 = (i__12611_12636 + (1));
seq__12604_12633 = G__12659;
chunk__12609_12634 = G__12660;
count__12610_12635 = G__12661;
i__12611_12636 = G__12662;
continue;
} else {
var temp__4657__auto___12663 = cljs.core.seq.call(null,seq__12604_12633);
if(temp__4657__auto___12663){
var seq__12604_12664__$1 = temp__4657__auto___12663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12604_12664__$1)){
var c__7021__auto___12665 = cljs.core.chunk_first.call(null,seq__12604_12664__$1);
var G__12666 = cljs.core.chunk_rest.call(null,seq__12604_12664__$1);
var G__12667 = c__7021__auto___12665;
var G__12668 = cljs.core.count.call(null,c__7021__auto___12665);
var G__12669 = (0);
seq__12604_12633 = G__12666;
chunk__12609_12634 = G__12667;
count__12610_12635 = G__12668;
i__12611_12636 = G__12669;
continue;
} else {
var y_12670 = cljs.core.first.call(null,seq__12604_12664__$1);
var seq__12605_12671 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(voxel_count - (1))], null));
var chunk__12606_12672 = null;
var count__12607_12673 = (0);
var i__12608_12674 = (0);
while(true){
if((i__12608_12674 < count__12607_12673)){
var border_12675 = cljs.core._nth.call(null,chunk__12606_12672,i__12608_12674);
flood_fill.call(null,x_12632,y_12670,border_12675);

flood_fill.call(null,x_12632,border_12675,y_12670);

flood_fill.call(null,border_12675,x_12632,y_12670);

var G__12676 = seq__12605_12671;
var G__12677 = chunk__12606_12672;
var G__12678 = count__12607_12673;
var G__12679 = (i__12608_12674 + (1));
seq__12605_12671 = G__12676;
chunk__12606_12672 = G__12677;
count__12607_12673 = G__12678;
i__12608_12674 = G__12679;
continue;
} else {
var temp__4657__auto___12680__$1 = cljs.core.seq.call(null,seq__12605_12671);
if(temp__4657__auto___12680__$1){
var seq__12605_12681__$1 = temp__4657__auto___12680__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12605_12681__$1)){
var c__7021__auto___12682 = cljs.core.chunk_first.call(null,seq__12605_12681__$1);
var G__12683 = cljs.core.chunk_rest.call(null,seq__12605_12681__$1);
var G__12684 = c__7021__auto___12682;
var G__12685 = cljs.core.count.call(null,c__7021__auto___12682);
var G__12686 = (0);
seq__12605_12671 = G__12683;
chunk__12606_12672 = G__12684;
count__12607_12673 = G__12685;
i__12608_12674 = G__12686;
continue;
} else {
var border_12687 = cljs.core.first.call(null,seq__12605_12681__$1);
flood_fill.call(null,x_12632,y_12670,border_12687);

flood_fill.call(null,x_12632,border_12687,y_12670);

flood_fill.call(null,border_12687,x_12632,y_12670);

var G__12688 = cljs.core.next.call(null,seq__12605_12681__$1);
var G__12689 = null;
var G__12690 = (0);
var G__12691 = (0);
seq__12605_12671 = G__12688;
chunk__12606_12672 = G__12689;
count__12607_12673 = G__12690;
i__12608_12674 = G__12691;
continue;
}
} else {
}
}
break;
}

var G__12692 = cljs.core.next.call(null,seq__12604_12664__$1);
var G__12693 = null;
var G__12694 = (0);
var G__12695 = (0);
seq__12604_12633 = G__12692;
chunk__12609_12634 = G__12693;
count__12610_12635 = G__12694;
i__12611_12636 = G__12695;
continue;
}
} else {
}
}
break;
}

var G__12696 = seq__12588_12628;
var G__12697 = chunk__12601_12629;
var G__12698 = count__12602_12630;
var G__12699 = (i__12603_12631 + (1));
seq__12588_12628 = G__12696;
chunk__12601_12629 = G__12697;
count__12602_12630 = G__12698;
i__12603_12631 = G__12699;
continue;
} else {
var temp__4657__auto___12700 = cljs.core.seq.call(null,seq__12588_12628);
if(temp__4657__auto___12700){
var seq__12588_12701__$1 = temp__4657__auto___12700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12588_12701__$1)){
var c__7021__auto___12702 = cljs.core.chunk_first.call(null,seq__12588_12701__$1);
var G__12703 = cljs.core.chunk_rest.call(null,seq__12588_12701__$1);
var G__12704 = c__7021__auto___12702;
var G__12705 = cljs.core.count.call(null,c__7021__auto___12702);
var G__12706 = (0);
seq__12588_12628 = G__12703;
chunk__12601_12629 = G__12704;
count__12602_12630 = G__12705;
i__12603_12631 = G__12706;
continue;
} else {
var x_12707 = cljs.core.first.call(null,seq__12588_12701__$1);
var seq__12589_12708 = cljs.core.seq.call(null,cljs.core.range.call(null,voxel_count));
var chunk__12594_12709 = null;
var count__12595_12710 = (0);
var i__12596_12711 = (0);
while(true){
if((i__12596_12711 < count__12595_12710)){
var y_12712 = cljs.core._nth.call(null,chunk__12594_12709,i__12596_12711);
var seq__12597_12713 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(voxel_count - (1))], null));
var chunk__12598_12714 = null;
var count__12599_12715 = (0);
var i__12600_12716 = (0);
while(true){
if((i__12600_12716 < count__12599_12715)){
var border_12717 = cljs.core._nth.call(null,chunk__12598_12714,i__12600_12716);
flood_fill.call(null,x_12707,y_12712,border_12717);

flood_fill.call(null,x_12707,border_12717,y_12712);

flood_fill.call(null,border_12717,x_12707,y_12712);

var G__12718 = seq__12597_12713;
var G__12719 = chunk__12598_12714;
var G__12720 = count__12599_12715;
var G__12721 = (i__12600_12716 + (1));
seq__12597_12713 = G__12718;
chunk__12598_12714 = G__12719;
count__12599_12715 = G__12720;
i__12600_12716 = G__12721;
continue;
} else {
var temp__4657__auto___12722__$1 = cljs.core.seq.call(null,seq__12597_12713);
if(temp__4657__auto___12722__$1){
var seq__12597_12723__$1 = temp__4657__auto___12722__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12597_12723__$1)){
var c__7021__auto___12724 = cljs.core.chunk_first.call(null,seq__12597_12723__$1);
var G__12725 = cljs.core.chunk_rest.call(null,seq__12597_12723__$1);
var G__12726 = c__7021__auto___12724;
var G__12727 = cljs.core.count.call(null,c__7021__auto___12724);
var G__12728 = (0);
seq__12597_12713 = G__12725;
chunk__12598_12714 = G__12726;
count__12599_12715 = G__12727;
i__12600_12716 = G__12728;
continue;
} else {
var border_12729 = cljs.core.first.call(null,seq__12597_12723__$1);
flood_fill.call(null,x_12707,y_12712,border_12729);

flood_fill.call(null,x_12707,border_12729,y_12712);

flood_fill.call(null,border_12729,x_12707,y_12712);

var G__12730 = cljs.core.next.call(null,seq__12597_12723__$1);
var G__12731 = null;
var G__12732 = (0);
var G__12733 = (0);
seq__12597_12713 = G__12730;
chunk__12598_12714 = G__12731;
count__12599_12715 = G__12732;
i__12600_12716 = G__12733;
continue;
}
} else {
}
}
break;
}

var G__12734 = seq__12589_12708;
var G__12735 = chunk__12594_12709;
var G__12736 = count__12595_12710;
var G__12737 = (i__12596_12711 + (1));
seq__12589_12708 = G__12734;
chunk__12594_12709 = G__12735;
count__12595_12710 = G__12736;
i__12596_12711 = G__12737;
continue;
} else {
var temp__4657__auto___12738__$1 = cljs.core.seq.call(null,seq__12589_12708);
if(temp__4657__auto___12738__$1){
var seq__12589_12739__$1 = temp__4657__auto___12738__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12589_12739__$1)){
var c__7021__auto___12740 = cljs.core.chunk_first.call(null,seq__12589_12739__$1);
var G__12741 = cljs.core.chunk_rest.call(null,seq__12589_12739__$1);
var G__12742 = c__7021__auto___12740;
var G__12743 = cljs.core.count.call(null,c__7021__auto___12740);
var G__12744 = (0);
seq__12589_12708 = G__12741;
chunk__12594_12709 = G__12742;
count__12595_12710 = G__12743;
i__12596_12711 = G__12744;
continue;
} else {
var y_12745 = cljs.core.first.call(null,seq__12589_12739__$1);
var seq__12590_12746 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(voxel_count - (1))], null));
var chunk__12591_12747 = null;
var count__12592_12748 = (0);
var i__12593_12749 = (0);
while(true){
if((i__12593_12749 < count__12592_12748)){
var border_12750 = cljs.core._nth.call(null,chunk__12591_12747,i__12593_12749);
flood_fill.call(null,x_12707,y_12745,border_12750);

flood_fill.call(null,x_12707,border_12750,y_12745);

flood_fill.call(null,border_12750,x_12707,y_12745);

var G__12751 = seq__12590_12746;
var G__12752 = chunk__12591_12747;
var G__12753 = count__12592_12748;
var G__12754 = (i__12593_12749 + (1));
seq__12590_12746 = G__12751;
chunk__12591_12747 = G__12752;
count__12592_12748 = G__12753;
i__12593_12749 = G__12754;
continue;
} else {
var temp__4657__auto___12755__$2 = cljs.core.seq.call(null,seq__12590_12746);
if(temp__4657__auto___12755__$2){
var seq__12590_12756__$1 = temp__4657__auto___12755__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12590_12756__$1)){
var c__7021__auto___12757 = cljs.core.chunk_first.call(null,seq__12590_12756__$1);
var G__12758 = cljs.core.chunk_rest.call(null,seq__12590_12756__$1);
var G__12759 = c__7021__auto___12757;
var G__12760 = cljs.core.count.call(null,c__7021__auto___12757);
var G__12761 = (0);
seq__12590_12746 = G__12758;
chunk__12591_12747 = G__12759;
count__12592_12748 = G__12760;
i__12593_12749 = G__12761;
continue;
} else {
var border_12762 = cljs.core.first.call(null,seq__12590_12756__$1);
flood_fill.call(null,x_12707,y_12745,border_12762);

flood_fill.call(null,x_12707,border_12762,y_12745);

flood_fill.call(null,border_12762,x_12707,y_12745);

var G__12763 = cljs.core.next.call(null,seq__12590_12756__$1);
var G__12764 = null;
var G__12765 = (0);
var G__12766 = (0);
seq__12590_12746 = G__12763;
chunk__12591_12747 = G__12764;
count__12592_12748 = G__12765;
i__12593_12749 = G__12766;
continue;
}
} else {
}
}
break;
}

var G__12767 = cljs.core.next.call(null,seq__12589_12739__$1);
var G__12768 = null;
var G__12769 = (0);
var G__12770 = (0);
seq__12589_12708 = G__12767;
chunk__12594_12709 = G__12768;
count__12595_12710 = G__12769;
i__12596_12711 = G__12770;
continue;
}
} else {
}
}
break;
}

var G__12771 = cljs.core.next.call(null,seq__12588_12701__$1);
var G__12772 = null;
var G__12773 = (0);
var G__12774 = (0);
seq__12588_12628 = G__12771;
chunk__12601_12629 = G__12772;
count__12602_12630 = G__12773;
i__12603_12631 = G__12774;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.call(null,voxel_dict,new cljs.core.Keyword(null,"voxels","voxels",751952428),new_voxels);
});
game.client.voxelize.get_time = (function game$client$voxelize$get_time(){
return (new Date()).getTime();
});
/**
 * Returns bit-array of voxels of size voxel-count^3 containing voxelized
 *   geometry
 */
game.client.voxelize.voxelize_geometry = (function game$client$voxelize$voxelize_geometry(geometry,voxel_count){
var start_time = game.client.voxelize.get_time.call(null);
var position = geometry.getAttribute("position");
var array = position.array;
var uv = geometry.getAttribute("uv");
var uv_array = uv.array;
var attr_size = (game.client.voxelize.v3_size * game.client.voxelize.triangle_size);
var uv_attr_size = (game.client.voxelize.v2_size * game.client.voxelize.triangle_size);
var triangle_count = (position.count / game.client.voxelize.triangle_size);
var _ = cljs.core.println.call(null,"triangle-count",triangle_count);
var bbox = geometry.boundingBox;
var width = (bbox.max.x - bbox.min.x);
var height = (bbox.max.y - bbox.min.y);
var depth = (bbox.max.z - bbox.min.z);
var voxel_width = (width / voxel_count);
var voxel_height = (height / voxel_count);
var voxel_depth = (depth / voxel_count);
var voxel_min_dimension = (function (){var x__6548__auto__ = (function (){var x__6548__auto__ = voxel_width;
var y__6549__auto__ = voxel_height;
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})();
var y__6549__auto__ = voxel_depth;
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})();
var total_voxels = ((voxel_count * voxel_count) * voxel_count);
var inc_voxel_count = (voxel_count + (1));
var inc_total_voxels = ((inc_voxel_count * inc_voxel_count) * inc_voxel_count);
var voxels_size = game.client.math.ceil.call(null,(total_voxels / game.client.voxelize.int32_size_bits));
var voxels = (new Int32Array(voxels_size));
var min_offset_x = bbox.min.x;
var min_offset_y = bbox.min.y;
var min_offset_z = bbox.min.z;
var rasterized_point_uvs = [];
var seen_triangles = [];
var closest_triangles = [];
var ___$1 = (function (){var seq__12812 = cljs.core.seq.call(null,cljs.core.range.call(null,inc_total_voxels));
var chunk__12813 = null;
var count__12814 = (0);
var i__12815 = (0);
while(true){
if((i__12815 < count__12814)){
var i = cljs.core._nth.call(null,chunk__12813,i__12815);
closest_triangles.push(null);

seen_triangles.push({});

var G__12849 = seq__12812;
var G__12850 = chunk__12813;
var G__12851 = count__12814;
var G__12852 = (i__12815 + (1));
seq__12812 = G__12849;
chunk__12813 = G__12850;
count__12814 = G__12851;
i__12815 = G__12852;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12812);
if(temp__4657__auto__){
var seq__12812__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12812__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12812__$1);
var G__12853 = cljs.core.chunk_rest.call(null,seq__12812__$1);
var G__12854 = c__7021__auto__;
var G__12855 = cljs.core.count.call(null,c__7021__auto__);
var G__12856 = (0);
seq__12812 = G__12853;
chunk__12813 = G__12854;
count__12814 = G__12855;
i__12815 = G__12856;
continue;
} else {
var i = cljs.core.first.call(null,seq__12812__$1);
closest_triangles.push(null);

seen_triangles.push({});

var G__12857 = cljs.core.next.call(null,seq__12812__$1);
var G__12858 = null;
var G__12859 = (0);
var G__12860 = (0);
seq__12812 = G__12857;
chunk__12813 = G__12858;
count__12814 = G__12859;
i__12815 = G__12860;
continue;
}
} else {
return null;
}
}
break;
}
})();
var uvs = (new Float32Array(((2) * inc_total_voxels)));
var inc_get_index = ((function (start_time,position,array,uv,uv_array,attr_size,uv_attr_size,triangle_count,_,bbox,width,height,depth,voxel_width,voxel_height,voxel_depth,voxel_min_dimension,total_voxels,inc_voxel_count,inc_total_voxels,voxels_size,voxels,min_offset_x,min_offset_y,min_offset_z,rasterized_point_uvs,seen_triangles,closest_triangles,___$1,uvs){
return (function (x,y,z){
return (x + (inc_voxel_count * (y + (inc_voxel_count * z))));
});})(start_time,position,array,uv,uv_array,attr_size,uv_attr_size,triangle_count,_,bbox,width,height,depth,voxel_width,voxel_height,voxel_depth,voxel_min_dimension,total_voxels,inc_voxel_count,inc_total_voxels,voxels_size,voxels,min_offset_x,min_offset_y,min_offset_z,rasterized_point_uvs,seen_triangles,closest_triangles,___$1,uvs))
;
var touch_voxel = ((function (start_time,position,array,uv,uv_array,attr_size,uv_attr_size,triangle_count,_,bbox,width,height,depth,voxel_width,voxel_height,voxel_depth,voxel_min_dimension,total_voxels,inc_voxel_count,inc_total_voxels,voxels_size,voxels,min_offset_x,min_offset_y,min_offset_z,rasterized_point_uvs,seen_triangles,closest_triangles,___$1,uvs,inc_get_index){
return (function (v){
var x_offset = (v.x - bbox.min.x);
var y_offset = (v.y - bbox.min.y);
var z_offset = (v.z - bbox.min.z);
var x_index = game.client.math.floor.call(null,(x_offset / voxel_width));
var x_index__$1 = ((cljs.core._EQ_.call(null,x_index,voxel_count))?(x_index - (1)):x_index);
var y_index = game.client.math.floor.call(null,(y_offset / voxel_height));
var y_index__$1 = ((cljs.core._EQ_.call(null,y_index,voxel_count))?(y_index - (1)):y_index);
var z_index = game.client.math.floor.call(null,(z_offset / voxel_depth));
var z_index__$1 = ((cljs.core._EQ_.call(null,z_index,voxel_count))?(z_index - (1)):z_index);
return game.client.voxelize.set_voxel.call(null,voxels,voxel_count,x_index__$1,y_index__$1,z_index__$1);
});})(start_time,position,array,uv,uv_array,attr_size,uv_attr_size,triangle_count,_,bbox,width,height,depth,voxel_width,voxel_height,voxel_depth,voxel_min_dimension,total_voxels,inc_voxel_count,inc_total_voxels,voxels_size,voxels,min_offset_x,min_offset_y,min_offset_z,rasterized_point_uvs,seen_triangles,closest_triangles,___$1,uvs,inc_get_index))
;
var set_closest_uv = ((function (start_time,position,array,uv,uv_array,attr_size,uv_attr_size,triangle_count,_,bbox,width,height,depth,voxel_width,voxel_height,voxel_depth,voxel_min_dimension,total_voxels,inc_voxel_count,inc_total_voxels,voxels_size,voxels,min_offset_x,min_offset_y,min_offset_z,rasterized_point_uvs,seen_triangles,closest_triangles,___$1,uvs,inc_get_index,touch_voxel){
return (function (v,triangle,triangle_uvs){
var x_offset = (v.x - bbox.min.x);
var y_offset = (v.y - bbox.min.y);
var z_offset = (v.z - bbox.min.z);
var x1 = game.client.math.floor.call(null,(x_offset / voxel_width));
var x1__$1 = ((cljs.core._EQ_.call(null,x1,voxel_count))?(x1 - (1)):x1);
var y1 = game.client.math.floor.call(null,(y_offset / voxel_height));
var y1__$1 = ((cljs.core._EQ_.call(null,y1,voxel_count))?(y1 - (1)):y1);
var z1 = game.client.math.floor.call(null,(z_offset / voxel_depth));
var z1__$1 = ((cljs.core._EQ_.call(null,z1,voxel_count))?(z1 - (1)):z1);
var x2 = (x1__$1 + (1));
var y2 = (y1__$1 + (1));
var z2 = (z1__$1 + (1));
var vec__12816 = triangle_uvs;
var uv1 = cljs.core.nth.call(null,vec__12816,(0),null);
var uv2 = cljs.core.nth.call(null,vec__12816,(1),null);
var uv3 = cljs.core.nth.call(null,vec__12816,(2),null);
var seq__12817 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1__$1,x2], null));
var chunk__12830 = null;
var count__12831 = (0);
var i__12832 = (0);
while(true){
if((i__12832 < count__12831)){
var x = cljs.core._nth.call(null,chunk__12830,i__12832);
var seq__12833_12861 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1__$1,y2], null));
var chunk__12838_12862 = null;
var count__12839_12863 = (0);
var i__12840_12864 = (0);
while(true){
if((i__12840_12864 < count__12839_12863)){
var y_12865 = cljs.core._nth.call(null,chunk__12838_12862,i__12840_12864);
var seq__12841_12866 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1__$1,z2], null));
var chunk__12842_12867 = null;
var count__12843_12868 = (0);
var i__12844_12869 = (0);
while(true){
if((i__12844_12869 < count__12843_12868)){
var z_12870 = cljs.core._nth.call(null,chunk__12842_12867,i__12844_12869);
var index_12871 = inc_get_index.call(null,x,y_12865,z_12870);
var seen_triangle_12872 = (seen_triangles[index_12871]);
var seen_current_QMARK__12873 = (seen_triangle_12872[triangle.voxelize_index]);
if((seen_current_QMARK__12873 == null)){
var closest_triangle_12874 = (closest_triangles[index_12871]);
var x_offset_12875__$1 = ((x * voxel_width) + bbox.min.x);
var y_offset_12876__$1 = ((y_12865 * voxel_height) + bbox.min.y);
var z_offset_12877__$1 = ((z_12870 * voxel_depth) + bbox.min.z);
var point_12878 = (new THREE.Vector3(x_offset_12875__$1,y_offset_12876__$1,z_offset_12877__$1));
var closest_12879 = triangle.closestPointToPoint(point_12878);
var distance_12880 = closest_12879.clone().sub(point_12878).length();
if(((closest_triangle_12874 == null)) || ((closest_triangle_12874 > distance_12880))){
var barycoord_12881 = triangle.barycoordFromPoint(closest_12879);
var uv1x_12882 = uv1.clone().multiplyScalar(barycoord_12881.x);
var uv2y_12883 = uv2.clone().multiplyScalar(barycoord_12881.y);
var uv3z_12884 = uv3.clone().multiplyScalar(barycoord_12881.z);
var uv_12885__$1 = uv1x_12882.add(uv2y_12883).add(uv3z_12884);
cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"setting uv",new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),"distance",new cljs.core.Symbol(null,"distance","distance",-31362367,null),"uv1",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv2",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv3",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)));

(closest_triangles[index_12871] = distance_12880);

(seen_triangle_12872[triangle.voxelize_index] = true);

(uvs[(((2) * index_12871) + (0))] = uv_12885__$1.x);

(uvs[(((2) * index_12871) + (1))] = uv_12885__$1.y);
} else {
}
} else {
}

var G__12886 = seq__12841_12866;
var G__12887 = chunk__12842_12867;
var G__12888 = count__12843_12868;
var G__12889 = (i__12844_12869 + (1));
seq__12841_12866 = G__12886;
chunk__12842_12867 = G__12887;
count__12843_12868 = G__12888;
i__12844_12869 = G__12889;
continue;
} else {
var temp__4657__auto___12890 = cljs.core.seq.call(null,seq__12841_12866);
if(temp__4657__auto___12890){
var seq__12841_12891__$1 = temp__4657__auto___12890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12841_12891__$1)){
var c__7021__auto___12892 = cljs.core.chunk_first.call(null,seq__12841_12891__$1);
var G__12893 = cljs.core.chunk_rest.call(null,seq__12841_12891__$1);
var G__12894 = c__7021__auto___12892;
var G__12895 = cljs.core.count.call(null,c__7021__auto___12892);
var G__12896 = (0);
seq__12841_12866 = G__12893;
chunk__12842_12867 = G__12894;
count__12843_12868 = G__12895;
i__12844_12869 = G__12896;
continue;
} else {
var z_12897 = cljs.core.first.call(null,seq__12841_12891__$1);
var index_12898 = inc_get_index.call(null,x,y_12865,z_12897);
var seen_triangle_12899 = (seen_triangles[index_12898]);
var seen_current_QMARK__12900 = (seen_triangle_12899[triangle.voxelize_index]);
if((seen_current_QMARK__12900 == null)){
var closest_triangle_12901 = (closest_triangles[index_12898]);
var x_offset_12902__$1 = ((x * voxel_width) + bbox.min.x);
var y_offset_12903__$1 = ((y_12865 * voxel_height) + bbox.min.y);
var z_offset_12904__$1 = ((z_12897 * voxel_depth) + bbox.min.z);
var point_12905 = (new THREE.Vector3(x_offset_12902__$1,y_offset_12903__$1,z_offset_12904__$1));
var closest_12906 = triangle.closestPointToPoint(point_12905);
var distance_12907 = closest_12906.clone().sub(point_12905).length();
if(((closest_triangle_12901 == null)) || ((closest_triangle_12901 > distance_12907))){
var barycoord_12908 = triangle.barycoordFromPoint(closest_12906);
var uv1x_12909 = uv1.clone().multiplyScalar(barycoord_12908.x);
var uv2y_12910 = uv2.clone().multiplyScalar(barycoord_12908.y);
var uv3z_12911 = uv3.clone().multiplyScalar(barycoord_12908.z);
var uv_12912__$1 = uv1x_12909.add(uv2y_12910).add(uv3z_12911);
cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"setting uv",new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),"distance",new cljs.core.Symbol(null,"distance","distance",-31362367,null),"uv1",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv2",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv3",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)));

(closest_triangles[index_12898] = distance_12907);

(seen_triangle_12899[triangle.voxelize_index] = true);

(uvs[(((2) * index_12898) + (0))] = uv_12912__$1.x);

(uvs[(((2) * index_12898) + (1))] = uv_12912__$1.y);
} else {
}
} else {
}

var G__12913 = cljs.core.next.call(null,seq__12841_12891__$1);
var G__12914 = null;
var G__12915 = (0);
var G__12916 = (0);
seq__12841_12866 = G__12913;
chunk__12842_12867 = G__12914;
count__12843_12868 = G__12915;
i__12844_12869 = G__12916;
continue;
}
} else {
}
}
break;
}

var G__12917 = seq__12833_12861;
var G__12918 = chunk__12838_12862;
var G__12919 = count__12839_12863;
var G__12920 = (i__12840_12864 + (1));
seq__12833_12861 = G__12917;
chunk__12838_12862 = G__12918;
count__12839_12863 = G__12919;
i__12840_12864 = G__12920;
continue;
} else {
var temp__4657__auto___12921 = cljs.core.seq.call(null,seq__12833_12861);
if(temp__4657__auto___12921){
var seq__12833_12922__$1 = temp__4657__auto___12921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12833_12922__$1)){
var c__7021__auto___12923 = cljs.core.chunk_first.call(null,seq__12833_12922__$1);
var G__12924 = cljs.core.chunk_rest.call(null,seq__12833_12922__$1);
var G__12925 = c__7021__auto___12923;
var G__12926 = cljs.core.count.call(null,c__7021__auto___12923);
var G__12927 = (0);
seq__12833_12861 = G__12924;
chunk__12838_12862 = G__12925;
count__12839_12863 = G__12926;
i__12840_12864 = G__12927;
continue;
} else {
var y_12928 = cljs.core.first.call(null,seq__12833_12922__$1);
var seq__12834_12929 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1__$1,z2], null));
var chunk__12835_12930 = null;
var count__12836_12931 = (0);
var i__12837_12932 = (0);
while(true){
if((i__12837_12932 < count__12836_12931)){
var z_12933 = cljs.core._nth.call(null,chunk__12835_12930,i__12837_12932);
var index_12934 = inc_get_index.call(null,x,y_12928,z_12933);
var seen_triangle_12935 = (seen_triangles[index_12934]);
var seen_current_QMARK__12936 = (seen_triangle_12935[triangle.voxelize_index]);
if((seen_current_QMARK__12936 == null)){
var closest_triangle_12937 = (closest_triangles[index_12934]);
var x_offset_12938__$1 = ((x * voxel_width) + bbox.min.x);
var y_offset_12939__$1 = ((y_12928 * voxel_height) + bbox.min.y);
var z_offset_12940__$1 = ((z_12933 * voxel_depth) + bbox.min.z);
var point_12941 = (new THREE.Vector3(x_offset_12938__$1,y_offset_12939__$1,z_offset_12940__$1));
var closest_12942 = triangle.closestPointToPoint(point_12941);
var distance_12943 = closest_12942.clone().sub(point_12941).length();
if(((closest_triangle_12937 == null)) || ((closest_triangle_12937 > distance_12943))){
var barycoord_12944 = triangle.barycoordFromPoint(closest_12942);
var uv1x_12945 = uv1.clone().multiplyScalar(barycoord_12944.x);
var uv2y_12946 = uv2.clone().multiplyScalar(barycoord_12944.y);
var uv3z_12947 = uv3.clone().multiplyScalar(barycoord_12944.z);
var uv_12948__$1 = uv1x_12945.add(uv2y_12946).add(uv3z_12947);
cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"setting uv",new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),"distance",new cljs.core.Symbol(null,"distance","distance",-31362367,null),"uv1",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv2",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv3",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)));

(closest_triangles[index_12934] = distance_12943);

(seen_triangle_12935[triangle.voxelize_index] = true);

(uvs[(((2) * index_12934) + (0))] = uv_12948__$1.x);

(uvs[(((2) * index_12934) + (1))] = uv_12948__$1.y);
} else {
}
} else {
}

var G__12949 = seq__12834_12929;
var G__12950 = chunk__12835_12930;
var G__12951 = count__12836_12931;
var G__12952 = (i__12837_12932 + (1));
seq__12834_12929 = G__12949;
chunk__12835_12930 = G__12950;
count__12836_12931 = G__12951;
i__12837_12932 = G__12952;
continue;
} else {
var temp__4657__auto___12953__$1 = cljs.core.seq.call(null,seq__12834_12929);
if(temp__4657__auto___12953__$1){
var seq__12834_12954__$1 = temp__4657__auto___12953__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12834_12954__$1)){
var c__7021__auto___12955 = cljs.core.chunk_first.call(null,seq__12834_12954__$1);
var G__12956 = cljs.core.chunk_rest.call(null,seq__12834_12954__$1);
var G__12957 = c__7021__auto___12955;
var G__12958 = cljs.core.count.call(null,c__7021__auto___12955);
var G__12959 = (0);
seq__12834_12929 = G__12956;
chunk__12835_12930 = G__12957;
count__12836_12931 = G__12958;
i__12837_12932 = G__12959;
continue;
} else {
var z_12960 = cljs.core.first.call(null,seq__12834_12954__$1);
var index_12961 = inc_get_index.call(null,x,y_12928,z_12960);
var seen_triangle_12962 = (seen_triangles[index_12961]);
var seen_current_QMARK__12963 = (seen_triangle_12962[triangle.voxelize_index]);
if((seen_current_QMARK__12963 == null)){
var closest_triangle_12964 = (closest_triangles[index_12961]);
var x_offset_12965__$1 = ((x * voxel_width) + bbox.min.x);
var y_offset_12966__$1 = ((y_12928 * voxel_height) + bbox.min.y);
var z_offset_12967__$1 = ((z_12960 * voxel_depth) + bbox.min.z);
var point_12968 = (new THREE.Vector3(x_offset_12965__$1,y_offset_12966__$1,z_offset_12967__$1));
var closest_12969 = triangle.closestPointToPoint(point_12968);
var distance_12970 = closest_12969.clone().sub(point_12968).length();
if(((closest_triangle_12964 == null)) || ((closest_triangle_12964 > distance_12970))){
var barycoord_12971 = triangle.barycoordFromPoint(closest_12969);
var uv1x_12972 = uv1.clone().multiplyScalar(barycoord_12971.x);
var uv2y_12973 = uv2.clone().multiplyScalar(barycoord_12971.y);
var uv3z_12974 = uv3.clone().multiplyScalar(barycoord_12971.z);
var uv_12975__$1 = uv1x_12972.add(uv2y_12973).add(uv3z_12974);
cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"setting uv",new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),"distance",new cljs.core.Symbol(null,"distance","distance",-31362367,null),"uv1",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv2",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv3",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)));

(closest_triangles[index_12961] = distance_12970);

(seen_triangle_12962[triangle.voxelize_index] = true);

(uvs[(((2) * index_12961) + (0))] = uv_12975__$1.x);

(uvs[(((2) * index_12961) + (1))] = uv_12975__$1.y);
} else {
}
} else {
}

var G__12976 = cljs.core.next.call(null,seq__12834_12954__$1);
var G__12977 = null;
var G__12978 = (0);
var G__12979 = (0);
seq__12834_12929 = G__12976;
chunk__12835_12930 = G__12977;
count__12836_12931 = G__12978;
i__12837_12932 = G__12979;
continue;
}
} else {
}
}
break;
}

var G__12980 = cljs.core.next.call(null,seq__12833_12922__$1);
var G__12981 = null;
var G__12982 = (0);
var G__12983 = (0);
seq__12833_12861 = G__12980;
chunk__12838_12862 = G__12981;
count__12839_12863 = G__12982;
i__12840_12864 = G__12983;
continue;
}
} else {
}
}
break;
}

var G__12984 = seq__12817;
var G__12985 = chunk__12830;
var G__12986 = count__12831;
var G__12987 = (i__12832 + (1));
seq__12817 = G__12984;
chunk__12830 = G__12985;
count__12831 = G__12986;
i__12832 = G__12987;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12817);
if(temp__4657__auto__){
var seq__12817__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12817__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__12817__$1);
var G__12988 = cljs.core.chunk_rest.call(null,seq__12817__$1);
var G__12989 = c__7021__auto__;
var G__12990 = cljs.core.count.call(null,c__7021__auto__);
var G__12991 = (0);
seq__12817 = G__12988;
chunk__12830 = G__12989;
count__12831 = G__12990;
i__12832 = G__12991;
continue;
} else {
var x = cljs.core.first.call(null,seq__12817__$1);
var seq__12818_12992 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1__$1,y2], null));
var chunk__12823_12993 = null;
var count__12824_12994 = (0);
var i__12825_12995 = (0);
while(true){
if((i__12825_12995 < count__12824_12994)){
var y_12996 = cljs.core._nth.call(null,chunk__12823_12993,i__12825_12995);
var seq__12826_12997 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1__$1,z2], null));
var chunk__12827_12998 = null;
var count__12828_12999 = (0);
var i__12829_13000 = (0);
while(true){
if((i__12829_13000 < count__12828_12999)){
var z_13001 = cljs.core._nth.call(null,chunk__12827_12998,i__12829_13000);
var index_13002 = inc_get_index.call(null,x,y_12996,z_13001);
var seen_triangle_13003 = (seen_triangles[index_13002]);
var seen_current_QMARK__13004 = (seen_triangle_13003[triangle.voxelize_index]);
if((seen_current_QMARK__13004 == null)){
var closest_triangle_13005 = (closest_triangles[index_13002]);
var x_offset_13006__$1 = ((x * voxel_width) + bbox.min.x);
var y_offset_13007__$1 = ((y_12996 * voxel_height) + bbox.min.y);
var z_offset_13008__$1 = ((z_13001 * voxel_depth) + bbox.min.z);
var point_13009 = (new THREE.Vector3(x_offset_13006__$1,y_offset_13007__$1,z_offset_13008__$1));
var closest_13010 = triangle.closestPointToPoint(point_13009);
var distance_13011 = closest_13010.clone().sub(point_13009).length();
if(((closest_triangle_13005 == null)) || ((closest_triangle_13005 > distance_13011))){
var barycoord_13012 = triangle.barycoordFromPoint(closest_13010);
var uv1x_13013 = uv1.clone().multiplyScalar(barycoord_13012.x);
var uv2y_13014 = uv2.clone().multiplyScalar(barycoord_13012.y);
var uv3z_13015 = uv3.clone().multiplyScalar(barycoord_13012.z);
var uv_13016__$1 = uv1x_13013.add(uv2y_13014).add(uv3z_13015);
cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"setting uv",new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),"distance",new cljs.core.Symbol(null,"distance","distance",-31362367,null),"uv1",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv2",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv3",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)));

(closest_triangles[index_13002] = distance_13011);

(seen_triangle_13003[triangle.voxelize_index] = true);

(uvs[(((2) * index_13002) + (0))] = uv_13016__$1.x);

(uvs[(((2) * index_13002) + (1))] = uv_13016__$1.y);
} else {
}
} else {
}

var G__13017 = seq__12826_12997;
var G__13018 = chunk__12827_12998;
var G__13019 = count__12828_12999;
var G__13020 = (i__12829_13000 + (1));
seq__12826_12997 = G__13017;
chunk__12827_12998 = G__13018;
count__12828_12999 = G__13019;
i__12829_13000 = G__13020;
continue;
} else {
var temp__4657__auto___13021__$1 = cljs.core.seq.call(null,seq__12826_12997);
if(temp__4657__auto___13021__$1){
var seq__12826_13022__$1 = temp__4657__auto___13021__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12826_13022__$1)){
var c__7021__auto___13023 = cljs.core.chunk_first.call(null,seq__12826_13022__$1);
var G__13024 = cljs.core.chunk_rest.call(null,seq__12826_13022__$1);
var G__13025 = c__7021__auto___13023;
var G__13026 = cljs.core.count.call(null,c__7021__auto___13023);
var G__13027 = (0);
seq__12826_12997 = G__13024;
chunk__12827_12998 = G__13025;
count__12828_12999 = G__13026;
i__12829_13000 = G__13027;
continue;
} else {
var z_13028 = cljs.core.first.call(null,seq__12826_13022__$1);
var index_13029 = inc_get_index.call(null,x,y_12996,z_13028);
var seen_triangle_13030 = (seen_triangles[index_13029]);
var seen_current_QMARK__13031 = (seen_triangle_13030[triangle.voxelize_index]);
if((seen_current_QMARK__13031 == null)){
var closest_triangle_13032 = (closest_triangles[index_13029]);
var x_offset_13033__$1 = ((x * voxel_width) + bbox.min.x);
var y_offset_13034__$1 = ((y_12996 * voxel_height) + bbox.min.y);
var z_offset_13035__$1 = ((z_13028 * voxel_depth) + bbox.min.z);
var point_13036 = (new THREE.Vector3(x_offset_13033__$1,y_offset_13034__$1,z_offset_13035__$1));
var closest_13037 = triangle.closestPointToPoint(point_13036);
var distance_13038 = closest_13037.clone().sub(point_13036).length();
if(((closest_triangle_13032 == null)) || ((closest_triangle_13032 > distance_13038))){
var barycoord_13039 = triangle.barycoordFromPoint(closest_13037);
var uv1x_13040 = uv1.clone().multiplyScalar(barycoord_13039.x);
var uv2y_13041 = uv2.clone().multiplyScalar(barycoord_13039.y);
var uv3z_13042 = uv3.clone().multiplyScalar(barycoord_13039.z);
var uv_13043__$1 = uv1x_13040.add(uv2y_13041).add(uv3z_13042);
cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"setting uv",new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),"distance",new cljs.core.Symbol(null,"distance","distance",-31362367,null),"uv1",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv2",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv3",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)));

(closest_triangles[index_13029] = distance_13038);

(seen_triangle_13030[triangle.voxelize_index] = true);

(uvs[(((2) * index_13029) + (0))] = uv_13043__$1.x);

(uvs[(((2) * index_13029) + (1))] = uv_13043__$1.y);
} else {
}
} else {
}

var G__13044 = cljs.core.next.call(null,seq__12826_13022__$1);
var G__13045 = null;
var G__13046 = (0);
var G__13047 = (0);
seq__12826_12997 = G__13044;
chunk__12827_12998 = G__13045;
count__12828_12999 = G__13046;
i__12829_13000 = G__13047;
continue;
}
} else {
}
}
break;
}

var G__13048 = seq__12818_12992;
var G__13049 = chunk__12823_12993;
var G__13050 = count__12824_12994;
var G__13051 = (i__12825_12995 + (1));
seq__12818_12992 = G__13048;
chunk__12823_12993 = G__13049;
count__12824_12994 = G__13050;
i__12825_12995 = G__13051;
continue;
} else {
var temp__4657__auto___13052__$1 = cljs.core.seq.call(null,seq__12818_12992);
if(temp__4657__auto___13052__$1){
var seq__12818_13053__$1 = temp__4657__auto___13052__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12818_13053__$1)){
var c__7021__auto___13054 = cljs.core.chunk_first.call(null,seq__12818_13053__$1);
var G__13055 = cljs.core.chunk_rest.call(null,seq__12818_13053__$1);
var G__13056 = c__7021__auto___13054;
var G__13057 = cljs.core.count.call(null,c__7021__auto___13054);
var G__13058 = (0);
seq__12818_12992 = G__13055;
chunk__12823_12993 = G__13056;
count__12824_12994 = G__13057;
i__12825_12995 = G__13058;
continue;
} else {
var y_13059 = cljs.core.first.call(null,seq__12818_13053__$1);
var seq__12819_13060 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1__$1,z2], null));
var chunk__12820_13061 = null;
var count__12821_13062 = (0);
var i__12822_13063 = (0);
while(true){
if((i__12822_13063 < count__12821_13062)){
var z_13064 = cljs.core._nth.call(null,chunk__12820_13061,i__12822_13063);
var index_13065 = inc_get_index.call(null,x,y_13059,z_13064);
var seen_triangle_13066 = (seen_triangles[index_13065]);
var seen_current_QMARK__13067 = (seen_triangle_13066[triangle.voxelize_index]);
if((seen_current_QMARK__13067 == null)){
var closest_triangle_13068 = (closest_triangles[index_13065]);
var x_offset_13069__$1 = ((x * voxel_width) + bbox.min.x);
var y_offset_13070__$1 = ((y_13059 * voxel_height) + bbox.min.y);
var z_offset_13071__$1 = ((z_13064 * voxel_depth) + bbox.min.z);
var point_13072 = (new THREE.Vector3(x_offset_13069__$1,y_offset_13070__$1,z_offset_13071__$1));
var closest_13073 = triangle.closestPointToPoint(point_13072);
var distance_13074 = closest_13073.clone().sub(point_13072).length();
if(((closest_triangle_13068 == null)) || ((closest_triangle_13068 > distance_13074))){
var barycoord_13075 = triangle.barycoordFromPoint(closest_13073);
var uv1x_13076 = uv1.clone().multiplyScalar(barycoord_13075.x);
var uv2y_13077 = uv2.clone().multiplyScalar(barycoord_13075.y);
var uv3z_13078 = uv3.clone().multiplyScalar(barycoord_13075.z);
var uv_13079__$1 = uv1x_13076.add(uv2y_13077).add(uv3z_13078);
cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"setting uv",new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),"distance",new cljs.core.Symbol(null,"distance","distance",-31362367,null),"uv1",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv2",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv3",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)));

(closest_triangles[index_13065] = distance_13074);

(seen_triangle_13066[triangle.voxelize_index] = true);

(uvs[(((2) * index_13065) + (0))] = uv_13079__$1.x);

(uvs[(((2) * index_13065) + (1))] = uv_13079__$1.y);
} else {
}
} else {
}

var G__13080 = seq__12819_13060;
var G__13081 = chunk__12820_13061;
var G__13082 = count__12821_13062;
var G__13083 = (i__12822_13063 + (1));
seq__12819_13060 = G__13080;
chunk__12820_13061 = G__13081;
count__12821_13062 = G__13082;
i__12822_13063 = G__13083;
continue;
} else {
var temp__4657__auto___13084__$2 = cljs.core.seq.call(null,seq__12819_13060);
if(temp__4657__auto___13084__$2){
var seq__12819_13085__$1 = temp__4657__auto___13084__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12819_13085__$1)){
var c__7021__auto___13086 = cljs.core.chunk_first.call(null,seq__12819_13085__$1);
var G__13087 = cljs.core.chunk_rest.call(null,seq__12819_13085__$1);
var G__13088 = c__7021__auto___13086;
var G__13089 = cljs.core.count.call(null,c__7021__auto___13086);
var G__13090 = (0);
seq__12819_13060 = G__13087;
chunk__12820_13061 = G__13088;
count__12821_13062 = G__13089;
i__12822_13063 = G__13090;
continue;
} else {
var z_13091 = cljs.core.first.call(null,seq__12819_13085__$1);
var index_13092 = inc_get_index.call(null,x,y_13059,z_13091);
var seen_triangle_13093 = (seen_triangles[index_13092]);
var seen_current_QMARK__13094 = (seen_triangle_13093[triangle.voxelize_index]);
if((seen_current_QMARK__13094 == null)){
var closest_triangle_13095 = (closest_triangles[index_13092]);
var x_offset_13096__$1 = ((x * voxel_width) + bbox.min.x);
var y_offset_13097__$1 = ((y_13059 * voxel_height) + bbox.min.y);
var z_offset_13098__$1 = ((z_13091 * voxel_depth) + bbox.min.z);
var point_13099 = (new THREE.Vector3(x_offset_13096__$1,y_offset_13097__$1,z_offset_13098__$1));
var closest_13100 = triangle.closestPointToPoint(point_13099);
var distance_13101 = closest_13100.clone().sub(point_13099).length();
if(((closest_triangle_13095 == null)) || ((closest_triangle_13095 > distance_13101))){
var barycoord_13102 = triangle.barycoordFromPoint(closest_13100);
var uv1x_13103 = uv1.clone().multiplyScalar(barycoord_13102.x);
var uv2y_13104 = uv2.clone().multiplyScalar(barycoord_13102.y);
var uv3z_13105 = uv3.clone().multiplyScalar(barycoord_13102.z);
var uv_13106__$1 = uv1x_13103.add(uv2y_13104).add(uv3z_13105);
cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"setting uv",new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),"distance",new cljs.core.Symbol(null,"distance","distance",-31362367,null),"uv1",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv1","uv1",-16708051,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv2",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv2","uv2",-1223917584,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv3",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv3","uv3",402394414,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)),"uv",cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-x",".-x",-2102759679,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"uv","uv",442782148,null),new cljs.core.Symbol(null,".-y",".-y",694186362,null)));

(closest_triangles[index_13092] = distance_13101);

(seen_triangle_13093[triangle.voxelize_index] = true);

(uvs[(((2) * index_13092) + (0))] = uv_13106__$1.x);

(uvs[(((2) * index_13092) + (1))] = uv_13106__$1.y);
} else {
}
} else {
}

var G__13107 = cljs.core.next.call(null,seq__12819_13085__$1);
var G__13108 = null;
var G__13109 = (0);
var G__13110 = (0);
seq__12819_13060 = G__13107;
chunk__12820_13061 = G__13108;
count__12821_13062 = G__13109;
i__12822_13063 = G__13110;
continue;
}
} else {
}
}
break;
}

var G__13111 = cljs.core.next.call(null,seq__12818_13053__$1);
var G__13112 = null;
var G__13113 = (0);
var G__13114 = (0);
seq__12818_12992 = G__13111;
chunk__12823_12993 = G__13112;
count__12824_12994 = G__13113;
i__12825_12995 = G__13114;
continue;
}
} else {
}
}
break;
}

var G__13115 = cljs.core.next.call(null,seq__12817__$1);
var G__13116 = null;
var G__13117 = (0);
var G__13118 = (0);
seq__12817 = G__13115;
chunk__12830 = G__13116;
count__12831 = G__13117;
i__12832 = G__13118;
continue;
}
} else {
return null;
}
}
break;
}
});})(start_time,position,array,uv,uv_array,attr_size,uv_attr_size,triangle_count,_,bbox,width,height,depth,voxel_width,voxel_height,voxel_depth,voxel_min_dimension,total_voxels,inc_voxel_count,inc_total_voxels,voxels_size,voxels,min_offset_x,min_offset_y,min_offset_z,rasterized_point_uvs,seen_triangles,closest_triangles,___$1,uvs,inc_get_index,touch_voxel))
;
var voxelize_triangle = ((function (start_time,position,array,uv,uv_array,attr_size,uv_attr_size,triangle_count,_,bbox,width,height,depth,voxel_width,voxel_height,voxel_depth,voxel_min_dimension,total_voxels,inc_voxel_count,inc_total_voxels,voxels_size,voxels,min_offset_x,min_offset_y,min_offset_z,rasterized_point_uvs,seen_triangles,closest_triangles,___$1,uvs,inc_get_index,touch_voxel,set_closest_uv){
return (function game$client$voxelize$voxelize_geometry_$_voxelize_triangle(triangle,triangle_uvs,v1,v2,v3){
var v12 = v2.clone().sub(v1);
var v23 = v3.clone().sub(v2);
var v13 = v3.clone().sub(v1);
var v12_length = v12.length();
var v23_length = v23.length();
var v13_length = v13.length();
var limit = (voxel_min_dimension / 10.0);
if((((v12_length >= limit)) || ((v23_length >= limit))) || ((v13_length >= limit))){
var v12_mid = v12.divideScalar(2.0).add(v1);
var v23_mid = v23.divideScalar(2.0).add(v2);
var v13_mid = v13.divideScalar(2.0).add(v1);
game$client$voxelize$voxelize_geometry_$_voxelize_triangle.call(null,triangle,triangle_uvs,v1,v12_mid,v13_mid);

game$client$voxelize$voxelize_geometry_$_voxelize_triangle.call(null,triangle,triangle_uvs,v2,v12_mid,v23_mid);

game$client$voxelize$voxelize_geometry_$_voxelize_triangle.call(null,triangle,triangle_uvs,v3,v13_mid,v23_mid);

return game$client$voxelize$voxelize_geometry_$_voxelize_triangle.call(null,triangle,triangle_uvs,v12_mid,v23_mid,v13_mid);
} else {
touch_voxel.call(null,v1);

touch_voxel.call(null,v2);

touch_voxel.call(null,v3);

set_closest_uv.call(null,v1,triangle,triangle_uvs);

set_closest_uv.call(null,v2,triangle,triangle_uvs);

return set_closest_uv.call(null,v3,triangle,triangle_uvs);
}
});})(start_time,position,array,uv,uv_array,attr_size,uv_attr_size,triangle_count,_,bbox,width,height,depth,voxel_width,voxel_height,voxel_depth,voxel_min_dimension,total_voxels,inc_voxel_count,inc_total_voxels,voxels_size,voxels,min_offset_x,min_offset_y,min_offset_z,rasterized_point_uvs,seen_triangles,closest_triangles,___$1,uvs,inc_get_index,touch_voxel,set_closest_uv))
;
var seq__12845_13119 = cljs.core.seq.call(null,cljs.core.range.call(null,triangle_count));
var chunk__12846_13120 = null;
var count__12847_13121 = (0);
var i__12848_13122 = (0);
while(true){
if((i__12848_13122 < count__12847_13121)){
var i_13123 = cljs.core._nth.call(null,chunk__12846_13120,i__12848_13122);
if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,i_13123,(function (){var x__6541__auto__ = (1);
var y__6542__auto__ = cljs.core.quot.call(null,triangle_count,(100));
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})()))){
var elapsed_13124 = ((game.client.voxelize.get_time.call(null) - start_time) / 1000.0);
var progress_frac_13125 = (i_13123 / triangle_count);
var total_13126 = ((cljs.core._EQ_.call(null,progress_frac_13125,(0)))?(0):(elapsed_13124 / progress_frac_13125));
var left_13127 = (total_13126 - elapsed_13124);
var left_13128__$1 = game.client.math.round.call(null,left_13127);
cljs.core.println.call(null,[cljs.core.str(((100) * progress_frac_13125)),cljs.core.str("%")].join(''),"left:",[cljs.core.str(left_13128__$1),cljs.core.str("s")].join(''));
} else {
}

var index_13129 = (i_13123 * attr_size);
var uv_index_13130 = (i_13123 * uv_attr_size);
var v1_13131 = (new THREE.Vector3((array[(index_13129 + (0))]),(array[(index_13129 + (1))]),(array[(index_13129 + (2))])));
var v2_13132 = (new THREE.Vector3((array[(index_13129 + (3))]),(array[(index_13129 + (4))]),(array[(index_13129 + (5))])));
var v3_13133 = (new THREE.Vector3((array[(index_13129 + (6))]),(array[(index_13129 + (7))]),(array[(index_13129 + (8))])));
var uv1_13134 = (new THREE.Vector2((uv_array[(uv_index_13130 + (0))]),(uv_array[(uv_index_13130 + (1))])));
var uv2_13135 = (new THREE.Vector2((uv_array[(uv_index_13130 + (2))]),(uv_array[(uv_index_13130 + (3))])));
var uv3_13136 = (new THREE.Vector2((uv_array[(uv_index_13130 + (4))]),(uv_array[(uv_index_13130 + (5))])));
var triangle_13137 = (new THREE.Triangle(v1_13131,v2_13132,v3_13133));
var __13138__$2 = triangle_13137.voxelize_index = i_13123;
var triangle_uvs_13139 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uv1_13134,uv2_13135,uv3_13136], null);
voxelize_triangle.call(null,triangle_13137,triangle_uvs_13139,v1_13131,v2_13132,v3_13133);

var G__13140 = seq__12845_13119;
var G__13141 = chunk__12846_13120;
var G__13142 = count__12847_13121;
var G__13143 = (i__12848_13122 + (1));
seq__12845_13119 = G__13140;
chunk__12846_13120 = G__13141;
count__12847_13121 = G__13142;
i__12848_13122 = G__13143;
continue;
} else {
var temp__4657__auto___13144 = cljs.core.seq.call(null,seq__12845_13119);
if(temp__4657__auto___13144){
var seq__12845_13145__$1 = temp__4657__auto___13144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12845_13145__$1)){
var c__7021__auto___13146 = cljs.core.chunk_first.call(null,seq__12845_13145__$1);
var G__13147 = cljs.core.chunk_rest.call(null,seq__12845_13145__$1);
var G__13148 = c__7021__auto___13146;
var G__13149 = cljs.core.count.call(null,c__7021__auto___13146);
var G__13150 = (0);
seq__12845_13119 = G__13147;
chunk__12846_13120 = G__13148;
count__12847_13121 = G__13149;
i__12848_13122 = G__13150;
continue;
} else {
var i_13151 = cljs.core.first.call(null,seq__12845_13145__$1);
if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,i_13151,(function (){var x__6541__auto__ = (1);
var y__6542__auto__ = cljs.core.quot.call(null,triangle_count,(100));
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})()))){
var elapsed_13152 = ((game.client.voxelize.get_time.call(null) - start_time) / 1000.0);
var progress_frac_13153 = (i_13151 / triangle_count);
var total_13154 = ((cljs.core._EQ_.call(null,progress_frac_13153,(0)))?(0):(elapsed_13152 / progress_frac_13153));
var left_13155 = (total_13154 - elapsed_13152);
var left_13156__$1 = game.client.math.round.call(null,left_13155);
cljs.core.println.call(null,[cljs.core.str(((100) * progress_frac_13153)),cljs.core.str("%")].join(''),"left:",[cljs.core.str(left_13156__$1),cljs.core.str("s")].join(''));
} else {
}

var index_13157 = (i_13151 * attr_size);
var uv_index_13158 = (i_13151 * uv_attr_size);
var v1_13159 = (new THREE.Vector3((array[(index_13157 + (0))]),(array[(index_13157 + (1))]),(array[(index_13157 + (2))])));
var v2_13160 = (new THREE.Vector3((array[(index_13157 + (3))]),(array[(index_13157 + (4))]),(array[(index_13157 + (5))])));
var v3_13161 = (new THREE.Vector3((array[(index_13157 + (6))]),(array[(index_13157 + (7))]),(array[(index_13157 + (8))])));
var uv1_13162 = (new THREE.Vector2((uv_array[(uv_index_13158 + (0))]),(uv_array[(uv_index_13158 + (1))])));
var uv2_13163 = (new THREE.Vector2((uv_array[(uv_index_13158 + (2))]),(uv_array[(uv_index_13158 + (3))])));
var uv3_13164 = (new THREE.Vector2((uv_array[(uv_index_13158 + (4))]),(uv_array[(uv_index_13158 + (5))])));
var triangle_13165 = (new THREE.Triangle(v1_13159,v2_13160,v3_13161));
var __13166__$2 = triangle_13165.voxelize_index = i_13151;
var triangle_uvs_13167 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uv1_13162,uv2_13163,uv3_13164], null);
voxelize_triangle.call(null,triangle_13165,triangle_uvs_13167,v1_13159,v2_13160,v3_13161);

var G__13168 = cljs.core.next.call(null,seq__12845_13145__$1);
var G__13169 = null;
var G__13170 = (0);
var G__13171 = (0);
seq__12845_13119 = G__13168;
chunk__12846_13120 = G__13169;
count__12847_13121 = G__13170;
i__12848_13122 = G__13171;
continue;
}
} else {
}
}
break;
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"voxel-width","voxel-width",1432758753),new cljs.core.Keyword(null,"uvs","uvs",1776835110),new cljs.core.Keyword(null,"voxel-height","voxel-height",-852765081),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Keyword(null,"voxels","voxels",751952428),new cljs.core.Keyword(null,"offset-z","offset-z",-783211250),new cljs.core.Keyword(null,"voxel-count","voxel-count",-1588050640),new cljs.core.Keyword(null,"voxel-depth","voxel-depth",-2042970608),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230)],[voxel_width,uvs,voxel_height,min_offset_y,voxels,min_offset_z,voxel_count,voxel_depth,min_offset_x]);
});

//# sourceMappingURL=voxelize.js.map