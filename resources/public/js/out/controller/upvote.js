// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.upvote');
goog.require('cljs.core');
goog.require('ajax.core');
controller.upvote.upvote_story_comment = (function controller$upvote$upvote_story_comment(comment_id){
return ajax.core.PUT.call(null,[cljs.core.str("/upvote/story/comment/"),cljs.core.str(comment_id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){
var e = document.getElementById([cljs.core.str("id-upvote-"),cljs.core.str(comment_id)].join(''));
e.style.visibility = "hidden";

return e.className = "";
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});

//# sourceMappingURL=upvote.js.map