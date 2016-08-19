// Compiled by ClojureScript 1.8.40 {}
goog.provide('game.shared.schema');
goog.require('cljs.core');
goog.require('schema.core');
game.shared.schema.Id = schema.core.Str;
game.shared.schema.GameList = cljs.core.PersistentArrayMap.fromArray([game.shared.schema.Id,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"started","started",585705024),schema.core.Bool,new cljs.core.Keyword(null,"max-player-count","max-player-count",516742756),schema.core.Int,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,new cljs.core.Keyword(null,"host","host",-1558485167),game.shared.schema.Id,new cljs.core.Keyword(null,"active","active",1895962068),schema.core.Bool,new cljs.core.Keyword(null,"id","id",-1388402092),game.shared.schema.Id,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentArrayMap.fromArray([game.shared.schema.Id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),schema.core.Str], null)], true, false)], null)], true, false);
game.shared.schema.ChatMessage = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),Date,new cljs.core.Keyword(null,"uid","uid",-1447769400),game.shared.schema.Id,new cljs.core.Keyword(null,"user","user",1532431356),schema.core.Str,new cljs.core.Keyword(null,"message","message",-406056002),schema.core.Str], null);
game.shared.schema.UserList = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),game.shared.schema.Id,new cljs.core.Keyword(null,"display-name","display-name",694513143),schema.core.Str], null)], null);
game.shared.schema.validate_game_list = (function game$shared$schema$validate_game_list(game_list){
return schema.core.validate.call(null,game.shared.schema.GameList,game_list);
});
game.shared.schema.validate_chat_message = (function game$shared$schema$validate_chat_message(chat_message){
return schema.core.validate.call(null,game.shared.schema.ChatMessage,chat_message);
});
game.shared.schema.validate_user_list = (function game$shared$schema$validate_user_list(user_list){
return schema.core.validate.call(null,game.shared.schema.UserList,user_list);
});

//# sourceMappingURL=schema.js.map