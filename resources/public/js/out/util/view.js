// Compiled by ClojureScript 1.8.51 {}
goog.provide('util.view');
goog.require('cljs.core');
goog.require('cljc.validation');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('view.user');
goog.require('clojure.string');
if(typeof util.view.main_container !== 'undefined'){
} else {
util.view.main_container = goog.dom.getElement("mainContainerId");
}
if(typeof util.view.message_container !== 'undefined'){
} else {
util.view.message_container = goog.dom.getElement("messageContainerId");
}
util.view.create_field_val_map = (function util$view$create_field_val_map(field_ids){
return cljs.core.reduce.call(null,(function (p1__26213_SHARP_,p2__26214_SHARP_){
return cljs.core.assoc.call(null,p1__26213_SHARP_,cljs.core.keyword.call(null,goog.dom.getElement(p2__26214_SHARP_).name),goog.dom.getElement(p2__26214_SHARP_).value);
}),cljs.core.PersistentArrayMap.EMPTY,field_ids);
});
util.view.render_error_message = (function util$view$render_error_message(message){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),message], null);
})], null),util.view.message_container);
});
util.view.render_update_successfully = (function util$view$render_update_successfully(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.user.component_update], null),util.view.message_container);

return setTimeout((function (){
return goog.dom.getElement("messageContainerId").innerText = "";
}),(2500));
});
util.view.change_url = (function util$view$change_url(path){
return window.location = [cljs.core.str("http://"),cljs.core.str(window.location.host),cljs.core.str(path)].join('');
});
util.view.change_url_to_story = (function util$view$change_url_to_story(){
return util.view.change_url.call(null,"/#/story");
});
util.view.change_url_to_ask = (function util$view$change_url_to_ask(){
return util.view.change_url.call(null,"/#/ask");
});
util.view.change_url_to_jobs = (function util$view$change_url_to_jobs(){
return util.view.change_url.call(null,"/#/job");
});
util.view.change_url_to_events = (function util$view$change_url_to_events(){
return util.view.change_url.call(null,"/#/event");
});
util.view.in_QMARK_ = (function util$view$in_QMARK_(element,coll){
return cljs.core.some.call(null,(function (p1__26215_SHARP_){
return cljs.core._EQ_.call(null,element,p1__26215_SHARP_);
}),coll);
});
util.view.get_italic_token = (function util$view$get_italic_token(token){
return clojure.string.trim.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,cljs.core.drop.call(null,(1),token))));
});
util.view.create_code_token = (function util$view$create_code_token(line){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.apply.call(null,cljs.core.str,cljs.core.cons.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\s+/,line)),cljs.core.interpose.call(null," ",cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,clojure.string.split.call(null,line,/\s+/)))))], null);
});
util.view.create_tokens = (function util$view$create_tokens(line){
var tokens = cljs.core.reduce.call(null,(function (coll_t,token){
if(cljs.core.truth_(cljc.validation.submit_url_QMARK_.call(null,token))){
return cljs.core.conj.call(null,coll_t,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),token,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),token], null)], null));
} else {
if(cljs.core.some_QMARK_.call(null,cljs.core.re_seq.call(null,/[*].+[*]/,token))){
return cljs.core.conj.call(null,coll_t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),util.view.get_italic_token.call(null,token)], null));
} else {
return cljs.core.conj.call(null,coll_t,token);

}
}
}),cljs.core.PersistentVector.EMPTY,clojure.string.split.call(null,line,/\s+/));
var added_whitespace = cljs.core.interpose.call(null," ",tokens);
return added_whitespace;
});
util.view.split_into_lines = (function util$view$split_into_lines(paragraph){
return cljs.core.reduce.call(null,(function (coll_l,line){
if(clojure.string.starts_with_QMARK_.call(null,line,"  ")){
return cljs.core.conj.call(null,coll_l,util.view.create_code_token.call(null,line));
} else {
return cljs.core.conj.call(null,coll_l,util.view.create_tokens.call(null,line));
}
}),cljs.core.PersistentVector.EMPTY,clojure.string.split.call(null,paragraph,/\n/));
});
util.view.group_code_tokens = (function util$view$group_code_tokens(lines){
return cljs.core.reduce.call(null,(function (p1__26217_SHARP_,p2__26216_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.first.call(null,p2__26216_SHARP_))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.first.call(null,cljs.core.last.call(null,p1__26217_SHARP_)))){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.drop_last.call(null,p1__26217_SHARP_)),cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.last.call(null,p1__26217_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)),p2__26216_SHARP_));
} else {
return cljs.core.conj.call(null,p1__26217_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),p2__26216_SHARP_], null));
}
} else {
return cljs.core.conj.call(null,p1__26217_SHARP_,p2__26216_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,lines);
});
util.view.split_into_paragraphs = (function util$view$split_into_paragraphs(commentt){
return cljs.core.reduce.call(null,(function (coll_p,paragraph){
return cljs.core.conj.call(null,coll_p,cljs.core.reverse.call(null,cljs.core.into.call(null,cljs.core.List.EMPTY,util.view.group_code_tokens.call(null,util.view.split_into_lines.call(null,paragraph)))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__26218_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__26218_SHARP_));
}),clojure.string.split.call(null,commentt,/\n{2,}/))));
});
util.view.parse_comment = (function util$view$parse_comment(commentt){
return cljs.core.interpose.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)),util.view.split_into_paragraphs.call(null,commentt));
});
util.view.scroll_to_top = (function util$view$scroll_to_top(){
return window.scrollTo((0),document.body.scrollHeight);
});
util.view.generate_comment_status = (function util$view$generate_comment_status(number_of_comments){
var G__26220 = number_of_comments;
switch (G__26220) {
case (0):
return "discuss";

break;
case (1):
return "1 comment";

break;
default:
return [cljs.core.str(number_of_comments),cljs.core.str(" comments")].join('');

}
});
util.view.generate_upvote_status = (function util$view$generate_upvote_status(number_of_upvotes){
if((number_of_upvotes > (1))){
return [cljs.core.str(number_of_upvotes),cljs.core.str(" points by ")].join('');
} else {
return [cljs.core.str(number_of_upvotes),cljs.core.str(" point by ")].join('');
}
});
util.view.generate_age_status = (function util$view$generate_age_status(created_date){
var current_date = (new Date());
var created_date_as_js = (new Date(created_date));
var min = cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,created_date_as_js,current_date));
var hour = cljs_time.core.in_hours.call(null,cljs_time.core.interval.call(null,created_date_as_js,current_date));
var day = cljs_time.core.in_days.call(null,cljs_time.core.interval.call(null,created_date_as_js,current_date));
if((min < (60))){
if(cljs.core._EQ_.call(null,min,(1))){
return [cljs.core.str(min),cljs.core.str(" minute ago")].join('');
} else {
return [cljs.core.str(min),cljs.core.str(" minutes ago")].join('');
}
} else {
if((hour < (24))){
if(cljs.core._EQ_.call(null,hour,(1))){
return [cljs.core.str(hour),cljs.core.str(" hour ago")].join('');
} else {
return [cljs.core.str(hour),cljs.core.str(" hours ago")].join('');
}
} else {
if(cljs.core._EQ_.call(null,day,(1))){
return [cljs.core.str(day),cljs.core.str(" day ago")].join('');
} else {
return [cljs.core.str(day),cljs.core.str(" days ago")].join('');
}

}
}
});
util.view.parse_date = (function util$view$parse_date(date){
return clojure.string.split.call(null,date.substring((0),(10)),/-/);
});
util.view.get_day_of_date = (function util$view$get_day_of_date(day){
return cljs.core.last.call(null,util.view.parse_date.call(null,day));
});
util.view.get_month_of_date = (function util$view$get_month_of_date(month){
return cljs.core.second.call(null,util.view.parse_date.call(null,month));
});
util.view.get_year_of_date = (function util$view$get_year_of_date(year){
return cljs.core.first.call(null,util.view.parse_date.call(null,year));
});
util.view.change_color_to_default = (function util$view$change_color_to_default(){
var seq__26226 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["headerNewId","headerStoryId","headerAskId","headerJobId","headerEventId","headerSubmitId"], null));
var chunk__26227 = null;
var count__26228 = (0);
var i__26229 = (0);
while(true){
if((i__26229 < count__26228)){
var element_id = cljs.core._nth.call(null,chunk__26227,i__26229);
goog.dom.getElement(element_id).style.color = "#FFFFFF";

var G__26230 = seq__26226;
var G__26231 = chunk__26227;
var G__26232 = count__26228;
var G__26233 = (i__26229 + (1));
seq__26226 = G__26230;
chunk__26227 = G__26231;
count__26228 = G__26232;
i__26229 = G__26233;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26226);
if(temp__4657__auto__){
var seq__26226__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26226__$1)){
var c__24858__auto__ = cljs.core.chunk_first.call(null,seq__26226__$1);
var G__26234 = cljs.core.chunk_rest.call(null,seq__26226__$1);
var G__26235 = c__24858__auto__;
var G__26236 = cljs.core.count.call(null,c__24858__auto__);
var G__26237 = (0);
seq__26226 = G__26234;
chunk__26227 = G__26235;
count__26228 = G__26236;
i__26229 = G__26237;
continue;
} else {
var element_id = cljs.core.first.call(null,seq__26226__$1);
goog.dom.getElement(element_id).style.color = "#FFFFFF";

var G__26238 = cljs.core.next.call(null,seq__26226__$1);
var G__26239 = null;
var G__26240 = (0);
var G__26241 = (0);
seq__26226 = G__26238;
chunk__26227 = G__26239;
count__26228 = G__26240;
i__26229 = G__26241;
continue;
}
} else {
return null;
}
}
break;
}
});
util.view.change_color_to_blue = (function util$view$change_color_to_blue(element_id){
util.view.change_color_to_default.call(null);

return goog.dom.getElement(element_id).style.color = "#1850C7";
});
util.view.select_header_button = (function util$view$select_header_button(token){
if(cljs.core.truth_(token.startsWith("/new"))){
return util.view.change_color_to_blue.call(null,"headerNewId");
} else {
if(cljs.core.truth_(token.startsWith("/story"))){
return util.view.change_color_to_blue.call(null,"headerStoryId");
} else {
if(cljs.core.truth_(token.startsWith("/ask"))){
return util.view.change_color_to_blue.call(null,"headerAskId");
} else {
if(cljs.core.truth_(token.startsWith("/job"))){
return util.view.change_color_to_blue.call(null,"headerJobId");
} else {
if(cljs.core.truth_(token.startsWith("/event"))){
return util.view.change_color_to_blue.call(null,"headerEventId");
} else {
if(cljs.core._EQ_.call(null,token,"/submit")){
return util.view.change_color_to_blue.call(null,"headerSubmitId");
} else {
if((cljs.core._EQ_.call(null,token,"/")) || (cljs.core._EQ_.call(null,token,""))){
return util.view.change_color_to_blue.call(null,"headerStoryId");
} else {
return util.view.change_color_to_default.call(null);

}
}
}
}
}
}
}
});
util.view.change_page_title = (function util$view$change_page_title(title){
return document.title = [cljs.core.str(title),cljs.core.str(" | Clojure News")].join('');
});
util.view.change_header_links_page_titles = (function util$view$change_header_links_page_titles(token){
var G__26243 = token;
switch (G__26243) {
case "/new":
return util.view.change_page_title.call(null,"Newest");

break;
case "/story":
return util.view.change_page_title.call(null,"Story");

break;
case "/ask":
return util.view.change_page_title.call(null,"Ask");

break;
case "/job":
return util.view.change_page_title.call(null,"Jobs");

break;
case "/event":
return util.view.change_page_title.call(null,"Events");

break;
case "/submit":
return util.view.change_page_title.call(null,"Submit");

break;
default:
return null;

}
});

//# sourceMappingURL=view.js.map