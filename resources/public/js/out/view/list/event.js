// Compiled by ClojureScript 1.8.51 {}
goog.provide('view.list.event');
goog.require('cljs.core');
goog.require('util.view');

view.list.event.component_event = (function view$list$event$component_event(events,page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"itemlist",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"cellPadding","cellPadding",1918354169),"0",new cljs.core.Keyword(null,"cellSpacing","cellSpacing",-1305647157),"0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var page_as_int = window.parseInt(page);
var x__24881__auto__ = (function (){var iter__24827__auto__ = ((function (page_as_int){
return (function view$list$event$component_event_$_iter__27150(s__27151){
return (new cljs.core.LazySeq(null,((function (page_as_int){
return (function (){
var s__27151__$1 = s__27151;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27151__$1);
if(temp__4657__auto__){
var s__27151__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27151__$2)){
var c__24825__auto__ = cljs.core.chunk_first.call(null,s__27151__$2);
var size__24826__auto__ = cljs.core.count.call(null,c__24825__auto__);
var b__27153 = cljs.core.chunk_buffer.call(null,size__24826__auto__);
if((function (){var i__27152 = (0);
while(true){
if((i__27152 < size__24826__auto__)){
var event = cljs.core._nth.call(null,c__24825__auto__,i__27152);
cljs.core.chunk_append.call(null,b__27153,(function (){var x__24881__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"athing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"title",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rank"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votelinks",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),(cljs.core.truth_(view.list.event.event_owner_QMARK_.call(null,event,events))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5fba7d"], null),"*"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/s.gif",new cljs.core.Keyword(null,"height","height",1025178622),"1",new cljs.core.Keyword(null,"width","width",-384071477),"14"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/s.gif",new cljs.core.Keyword(null,"height","height",1025178622),"1",new cljs.core.Keyword(null,"width","width",-384071477),"14"], null)], null)], null)
)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"deadmark"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),"storylink",new cljs.core.Keyword(null,"rel","rel",1378823488),"nofollow"], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sitebit comhead"], null),[cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.str(", "),cljs.core.str(new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.str(" || "),cljs.core.str(view.list.event.get_month_name.call(null,util.view.get_month_of_date.call(null,new cljs.core.Keyword(null,"starting-date","starting-date",-1517747424).cljs$core$IFn$_invoke$arity$1(event)))),cljs.core.str(" "),cljs.core.str(util.view.get_day_of_date.call(null,new cljs.core.Keyword(null,"starting-date","starting-date",-1517747424).cljs$core$IFn$_invoke$arity$1(event))),cljs.core.str(", "),cljs.core.str(util.view.get_year_of_date.call(null,new cljs.core.Keyword(null,"starting-date","starting-date",-1517747424).cljs$core$IFn$_invoke$arity$1(event))),cljs.core.str(")")].join('')], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24881__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subtext"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"age"], null),util.view.generate_age_status.call(null,new cljs.core.Keyword(null,"created-date","created-date",929108256).cljs$core$IFn$_invoke$arity$1(event)),(cljs.core.truth_(view.list.event.event_owner_QMARK_.call(null,event,events))?cljs.core._conj.call(null,(function (){var x__24881__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/event/edit/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(event))].join('')], null),"edit"], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__24881__auto____$2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/event/delete/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(event))].join('')], null),"delete"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24881__auto____$2);
})()," | "),x__24881__auto____$1);
})()," | "):null)], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24881__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"spacer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"7"], null)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24881__auto____$2);
})(),x__24881__auto____$1);
})(),x__24881__auto__);
})());

var G__27154 = (i__27152 + (1));
i__27152 = G__27154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27153),view$list$event$component_event_$_iter__27150.call(null,cljs.core.chunk_rest.call(null,s__27151__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27153),null);
}
} else {
var event = cljs.core.first.call(null,s__27151__$2);
return cljs.core.cons.call(null,(function (){var x__24881__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"athing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"title",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rank"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"votelinks",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),(cljs.core.truth_(view.list.event.event_owner_QMARK_.call(null,event,events))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5fba7d"], null),"*"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/s.gif",new cljs.core.Keyword(null,"height","height",1025178622),"1",new cljs.core.Keyword(null,"width","width",-384071477),"14"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/s.gif",new cljs.core.Keyword(null,"height","height",1025178622),"1",new cljs.core.Keyword(null,"width","width",-384071477),"14"], null)], null)], null)
)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"deadmark"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),"storylink",new cljs.core.Keyword(null,"rel","rel",1378823488),"nofollow"], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sitebit comhead"], null),[cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.str(", "),cljs.core.str(new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.str(" || "),cljs.core.str(view.list.event.get_month_name.call(null,util.view.get_month_of_date.call(null,new cljs.core.Keyword(null,"starting-date","starting-date",-1517747424).cljs$core$IFn$_invoke$arity$1(event)))),cljs.core.str(" "),cljs.core.str(util.view.get_day_of_date.call(null,new cljs.core.Keyword(null,"starting-date","starting-date",-1517747424).cljs$core$IFn$_invoke$arity$1(event))),cljs.core.str(", "),cljs.core.str(util.view.get_year_of_date.call(null,new cljs.core.Keyword(null,"starting-date","starting-date",-1517747424).cljs$core$IFn$_invoke$arity$1(event))),cljs.core.str(")")].join('')], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24881__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subtext"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"age"], null),util.view.generate_age_status.call(null,new cljs.core.Keyword(null,"created-date","created-date",929108256).cljs$core$IFn$_invoke$arity$1(event)),(cljs.core.truth_(view.list.event.event_owner_QMARK_.call(null,event,events))?cljs.core._conj.call(null,(function (){var x__24881__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/event/edit/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(event))].join('')], null),"edit"], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__24881__auto____$2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/event/delete/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(event))].join('')], null),"delete"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24881__auto____$2);
})()," | "),x__24881__auto____$1);
})()," | "):null)], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24881__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"spacer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"7"], null)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24881__auto____$2);
})(),x__24881__auto____$1);
})(),x__24881__auto__);
})(),view$list$event$component_event_$_iter__27150.call(null,cljs.core.rest.call(null,s__27151__$2)));
}
} else {
return null;
}
break;
}
});})(page_as_int))
,null,null));
});})(page_as_int))
;
return iter__24827__auto__.call(null,new cljs.core.Keyword(null,"event-entry","event-entry",-1035282568).cljs$core$IFn$_invoke$arity$1(events));
})();
return cljs.core._conj.call(null,(function (){var x__24881__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"spacer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10"], null)], null)], null);
return cljs.core._conj.call(null,(function (){var x__24881__auto____$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"more?","more?",519437444).cljs$core$IFn$_invoke$arity$1(events))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/event/p/"),cljs.core.str((page_as_int + (1)))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"morelink",new cljs.core.Keyword(null,"rel","rel",1378823488),"nofollow"], null),"More"], null)], null)], null):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24881__auto____$2);
})(),x__24881__auto____$1);
})(),x__24881__auto__);
})()], null)], null);
});
view.list.event.get_month_name = (function view$list$event$get_month_name(month){
var G__27156 = parseInt(month);
switch (G__27156) {
case (1):
return "January";

break;
case (2):
return "February";

break;
case (3):
return "March";

break;
case (4):
return "April";

break;
case (5):
return "May";

break;
case (6):
return "June";

break;
case (7):
return "July";

break;
case (8):
return "August";

break;
case (9):
return "September";

break;
case (10):
return "October";

break;
case (11):
return "November";

break;
default:
return "December";

}
});
view.list.event.event_owner_QMARK_ = (function view$list$event$event_owner_QMARK_(event,events){
return util.view.in_QMARK_.call(null,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"event-own-entries","event-own-entries",-883288878).cljs$core$IFn$_invoke$arity$1(events));
});

//# sourceMappingURL=event.js.map