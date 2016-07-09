// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32601 = arguments.length;
var i__25118__auto___32602 = (0);
while(true){
if((i__25118__auto___32602 < len__25117__auto___32601)){
args__25124__auto__.push((arguments[i__25118__auto___32602]));

var G__32603 = (i__25118__auto___32602 + (1));
i__25118__auto___32602 = G__32603;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((2) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25125__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32593_32604 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32594_32605 = null;
var count__32595_32606 = (0);
var i__32596_32607 = (0);
while(true){
if((i__32596_32607 < count__32595_32606)){
var k_32608 = cljs.core._nth.call(null,chunk__32594_32605,i__32596_32607);
e.setAttribute(cljs.core.name.call(null,k_32608),cljs.core.get.call(null,attrs,k_32608));

var G__32609 = seq__32593_32604;
var G__32610 = chunk__32594_32605;
var G__32611 = count__32595_32606;
var G__32612 = (i__32596_32607 + (1));
seq__32593_32604 = G__32609;
chunk__32594_32605 = G__32610;
count__32595_32606 = G__32611;
i__32596_32607 = G__32612;
continue;
} else {
var temp__4657__auto___32613 = cljs.core.seq.call(null,seq__32593_32604);
if(temp__4657__auto___32613){
var seq__32593_32614__$1 = temp__4657__auto___32613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32593_32614__$1)){
var c__24858__auto___32615 = cljs.core.chunk_first.call(null,seq__32593_32614__$1);
var G__32616 = cljs.core.chunk_rest.call(null,seq__32593_32614__$1);
var G__32617 = c__24858__auto___32615;
var G__32618 = cljs.core.count.call(null,c__24858__auto___32615);
var G__32619 = (0);
seq__32593_32604 = G__32616;
chunk__32594_32605 = G__32617;
count__32595_32606 = G__32618;
i__32596_32607 = G__32619;
continue;
} else {
var k_32620 = cljs.core.first.call(null,seq__32593_32614__$1);
e.setAttribute(cljs.core.name.call(null,k_32620),cljs.core.get.call(null,attrs,k_32620));

var G__32621 = cljs.core.next.call(null,seq__32593_32614__$1);
var G__32622 = null;
var G__32623 = (0);
var G__32624 = (0);
seq__32593_32604 = G__32621;
chunk__32594_32605 = G__32622;
count__32595_32606 = G__32623;
i__32596_32607 = G__32624;
continue;
}
} else {
}
}
break;
}

var seq__32597_32625 = cljs.core.seq.call(null,children);
var chunk__32598_32626 = null;
var count__32599_32627 = (0);
var i__32600_32628 = (0);
while(true){
if((i__32600_32628 < count__32599_32627)){
var ch_32629 = cljs.core._nth.call(null,chunk__32598_32626,i__32600_32628);
e.appendChild(ch_32629);

var G__32630 = seq__32597_32625;
var G__32631 = chunk__32598_32626;
var G__32632 = count__32599_32627;
var G__32633 = (i__32600_32628 + (1));
seq__32597_32625 = G__32630;
chunk__32598_32626 = G__32631;
count__32599_32627 = G__32632;
i__32600_32628 = G__32633;
continue;
} else {
var temp__4657__auto___32634 = cljs.core.seq.call(null,seq__32597_32625);
if(temp__4657__auto___32634){
var seq__32597_32635__$1 = temp__4657__auto___32634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32597_32635__$1)){
var c__24858__auto___32636 = cljs.core.chunk_first.call(null,seq__32597_32635__$1);
var G__32637 = cljs.core.chunk_rest.call(null,seq__32597_32635__$1);
var G__32638 = c__24858__auto___32636;
var G__32639 = cljs.core.count.call(null,c__24858__auto___32636);
var G__32640 = (0);
seq__32597_32625 = G__32637;
chunk__32598_32626 = G__32638;
count__32599_32627 = G__32639;
i__32600_32628 = G__32640;
continue;
} else {
var ch_32641 = cljs.core.first.call(null,seq__32597_32635__$1);
e.appendChild(ch_32641);

var G__32642 = cljs.core.next.call(null,seq__32597_32635__$1);
var G__32643 = null;
var G__32644 = (0);
var G__32645 = (0);
seq__32597_32625 = G__32642;
chunk__32598_32626 = G__32643;
count__32599_32627 = G__32644;
i__32600_32628 = G__32645;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32590){
var G__32591 = cljs.core.first.call(null,seq32590);
var seq32590__$1 = cljs.core.next.call(null,seq32590);
var G__32592 = cljs.core.first.call(null,seq32590__$1);
var seq32590__$2 = cljs.core.next.call(null,seq32590__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32591,G__32592,seq32590__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__24972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24975__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24976__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__24972__auto__,prefer_table__24973__auto__,method_cache__24974__auto__,cached_hierarchy__24975__auto__,hierarchy__24976__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__24972__auto__,prefer_table__24973__auto__,method_cache__24974__auto__,cached_hierarchy__24975__auto__,hierarchy__24976__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24976__auto__,method_table__24972__auto__,prefer_table__24973__auto__,method_cache__24974__auto__,cached_hierarchy__24975__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32646 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32646.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32646.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_32646.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32646);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32647,st_map){
var map__32652 = p__32647;
var map__32652__$1 = ((((!((map__32652 == null)))?((((map__32652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32652):map__32652);
var container_el = cljs.core.get.call(null,map__32652__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32652,map__32652__$1,container_el){
return (function (p__32654){
var vec__32655 = p__32654;
var k = cljs.core.nth.call(null,vec__32655,(0),null);
var v = cljs.core.nth.call(null,vec__32655,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32652,map__32652__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32656,dom_str){
var map__32659 = p__32656;
var map__32659__$1 = ((((!((map__32659 == null)))?((((map__32659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32659):map__32659);
var c = map__32659__$1;
var content_area_el = cljs.core.get.call(null,map__32659__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32661){
var map__32664 = p__32661;
var map__32664__$1 = ((((!((map__32664 == null)))?((((map__32664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32664):map__32664);
var content_area_el = cljs.core.get.call(null,map__32664__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__){
return (function (state_32707){
var state_val_32708 = (state_32707[(1)]);
if((state_val_32708 === (1))){
var inst_32692 = (state_32707[(7)]);
var inst_32692__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32693 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32694 = ["10px","10px","100%","68px","1.0"];
var inst_32695 = cljs.core.PersistentHashMap.fromArrays(inst_32693,inst_32694);
var inst_32696 = cljs.core.merge.call(null,inst_32695,style);
var inst_32697 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32692__$1,inst_32696);
var inst_32698 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32692__$1,msg);
var inst_32699 = cljs.core.async.timeout.call(null,(300));
var state_32707__$1 = (function (){var statearr_32709 = state_32707;
(statearr_32709[(7)] = inst_32692__$1);

(statearr_32709[(8)] = inst_32697);

(statearr_32709[(9)] = inst_32698);

return statearr_32709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32707__$1,(2),inst_32699);
} else {
if((state_val_32708 === (2))){
var inst_32692 = (state_32707[(7)]);
var inst_32701 = (state_32707[(2)]);
var inst_32702 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32703 = ["auto"];
var inst_32704 = cljs.core.PersistentHashMap.fromArrays(inst_32702,inst_32703);
var inst_32705 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32692,inst_32704);
var state_32707__$1 = (function (){var statearr_32710 = state_32707;
(statearr_32710[(10)] = inst_32701);

return statearr_32710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32707__$1,inst_32705);
} else {
return null;
}
}
});})(c__28454__auto__))
;
return ((function (switch__28342__auto__,c__28454__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto____0 = (function (){
var statearr_32714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32714[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto__);

(statearr_32714[(1)] = (1));

return statearr_32714;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto____1 = (function (state_32707){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_32707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e32715){if((e32715 instanceof Object)){
var ex__28346__auto__ = e32715;
var statearr_32716_32718 = state_32707;
(statearr_32716_32718[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32719 = state_32707;
state_32707 = G__32719;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto__ = function(state_32707){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto____1.call(this,state_32707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__))
})();
var state__28456__auto__ = (function (){var statearr_32717 = f__28455__auto__.call(null);
(statearr_32717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__))
);

return c__28454__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args32720 = [];
var len__25117__auto___32723 = arguments.length;
var i__25118__auto___32724 = (0);
while(true){
if((i__25118__auto___32724 < len__25117__auto___32723)){
args32720.push((arguments[i__25118__auto___32724]));

var G__32725 = (i__25118__auto___32724 + (1));
i__25118__auto___32724 = G__32725;
continue;
} else {
}
break;
}

var G__32722 = args32720.length;
switch (G__32722) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32720.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__32728 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__32728,(0),null);
var ln = cljs.core.nth.call(null,vec__32728,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32731 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32731,(0),null);
var file_line = cljs.core.nth.call(null,vec__32731,(1),null);
var file_column = cljs.core.nth.call(null,vec__32731,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32731,file_name,file_line,file_column){
return (function (p1__32729_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__32729_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__32731,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__24047__auto__ = file_line;
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
var and__24035__auto__ = cause;
if(cljs.core.truth_(and__24035__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__24035__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(ex){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),ex));
});
figwheel.client.heads_up.exception_info_QMARK_ = (function figwheel$client$heads_up$exception_info_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Symbol(null,"clojure.lang.ExceptionInfo","clojure.lang.ExceptionInfo",-550564927,null));
});
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__32732){
var map__32735 = p__32732;
var map__32735__$1 = ((((!((map__32735 == null)))?((((map__32735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32735):map__32735);
var ex = map__32735__$1;
var exception_data = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__24035__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__24035__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__24035__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__32737){
var map__32743 = p__32737;
var map__32743__$1 = ((((!((map__32743 == null)))?((((map__32743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32743):map__32743);
var ex = map__32743__$1;
var exception_data = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__32743,map__32743__$1,ex,exception_data){
return (function (p__32745){
var map__32746 = p__32745;
var map__32746__$1 = ((((!((map__32746 == null)))?((((map__32746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32746):map__32746);
var exc = map__32746__$1;
var data = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__24035__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__24035__auto__)){
return data;
} else {
return and__24035__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__32743,map__32743__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__24047__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__32748){
var map__32754 = p__32748;
var map__32754__$1 = ((((!((map__32754 == null)))?((((map__32754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32754):map__32754);
var ex = map__32754__$1;
var exception_data = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__32754,map__32754__$1,ex,exception_data){
return (function (p__32756){
var map__32757 = p__32756;
var map__32757__$1 = ((((!((map__32757 == null)))?((((map__32757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32757):map__32757);
var exc = map__32757__$1;
var data = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__24035__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__24035__auto__)){
return data;
} else {
return and__24035__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__32754,map__32754__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__32759){
var map__32763 = p__32759;
var map__32763__$1 = ((((!((map__32763 == null)))?((((map__32763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32763):map__32763);
var ex = map__32763__$1;
var reader_exception = cljs.core.get.call(null,map__32763__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__32763__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__24035__auto__ = reader_exception;
if(cljs.core.truth_(and__24035__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__24035__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32765 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__32765,(0),null);
var line = cljs.core.nth.call(null,vec__32765,(1),null);
var column = cljs.core.nth.call(null,vec__32765,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__32766){
var map__32772 = p__32766;
var map__32772__$1 = ((((!((map__32772 == null)))?((((map__32772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32772):map__32772);
var ex = map__32772__$1;
var exception_data = cljs.core.get.call(null,map__32772__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__32774 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__32774__$1 = ((((!((map__32774 == null)))?((((map__32774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32774):map__32774);
var file = cljs.core.get.call(null,map__32774__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32774__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__32776 = ex;
var G__32776__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__32776):G__32776);
var G__32776__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__32776__$1):G__32776__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__32776__$2);
} else {
return G__32776__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__32777){
var map__32780 = p__32777;
var map__32780__$1 = ((((!((map__32780 == null)))?((((map__32780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32780):map__32780);
var ex = map__32780__$1;
var message = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24035__auto__ = file;
if(cljs.core.truth_(and__24035__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__24035__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.first.call(null,clojure.string.split.call(null,message,"in file")));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_exception = (function figwheel$client$heads_up$parse_exception(exception_data){
return figwheel.client.heads_up.remove_file_from_message.call(null,figwheel.client.heads_up.patch_eof_reader_exception.call(null,figwheel.client.heads_up.parse_reader_error.call(null,figwheel.client.heads_up.parse_analysis_error.call(null,figwheel.client.heads_up.parse_failed_compile.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886),exception_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886)], null),figwheel.client.heads_up.flatten_exception))))));
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__32784){
var map__32787 = p__32784;
var map__32787__$1 = ((((!((map__32787 == null)))?((((map__32787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32787):map__32787);
var exception = map__32787__$1;
var failed_compiling = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__24035__auto__ = file;
if(cljs.core.truth_(and__24035__auto__)){
return line;
} else {
return and__24035__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__32787,map__32787__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__32782_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__32782_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__32787,map__32787__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__32787,map__32787__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__32783_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__32783_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__32783_SHARP_)))].join('');
});})(last_message,map__32787,map__32787__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__32792 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__32792__$1 = ((((!((map__32792 == null)))?((((map__32792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32792):map__32792);
var head = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32796 = figwheel.client.heads_up.ensure_container.call(null);
var map__32796__$1 = ((((!((map__32796 == null)))?((((map__32796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32796):map__32796);
var content_area_el = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__){
return (function (state_32844){
var state_val_32845 = (state_32844[(1)]);
if((state_val_32845 === (1))){
var inst_32827 = (state_32844[(7)]);
var inst_32827__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32828 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32829 = ["0.0"];
var inst_32830 = cljs.core.PersistentHashMap.fromArrays(inst_32828,inst_32829);
var inst_32831 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32827__$1,inst_32830);
var inst_32832 = cljs.core.async.timeout.call(null,(300));
var state_32844__$1 = (function (){var statearr_32846 = state_32844;
(statearr_32846[(8)] = inst_32831);

(statearr_32846[(7)] = inst_32827__$1);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32844__$1,(2),inst_32832);
} else {
if((state_val_32845 === (2))){
var inst_32827 = (state_32844[(7)]);
var inst_32834 = (state_32844[(2)]);
var inst_32835 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32836 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32837 = cljs.core.PersistentHashMap.fromArrays(inst_32835,inst_32836);
var inst_32838 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32827,inst_32837);
var inst_32839 = cljs.core.async.timeout.call(null,(200));
var state_32844__$1 = (function (){var statearr_32847 = state_32844;
(statearr_32847[(9)] = inst_32838);

(statearr_32847[(10)] = inst_32834);

return statearr_32847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32844__$1,(3),inst_32839);
} else {
if((state_val_32845 === (3))){
var inst_32827 = (state_32844[(7)]);
var inst_32841 = (state_32844[(2)]);
var inst_32842 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32827,"");
var state_32844__$1 = (function (){var statearr_32848 = state_32844;
(statearr_32848[(11)] = inst_32841);

return statearr_32848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32844__$1,inst_32842);
} else {
return null;
}
}
}
});})(c__28454__auto__))
;
return ((function (switch__28342__auto__,c__28454__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28343__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28343__auto____0 = (function (){
var statearr_32852 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32852[(0)] = figwheel$client$heads_up$clear_$_state_machine__28343__auto__);

(statearr_32852[(1)] = (1));

return statearr_32852;
});
var figwheel$client$heads_up$clear_$_state_machine__28343__auto____1 = (function (state_32844){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_32844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e32853){if((e32853 instanceof Object)){
var ex__28346__auto__ = e32853;
var statearr_32854_32856 = state_32844;
(statearr_32854_32856[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32857 = state_32844;
state_32844 = G__32857;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28343__auto__ = function(state_32844){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28343__auto____1.call(this,state_32844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28343__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28343__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__))
})();
var state__28456__auto__ = (function (){var statearr_32855 = f__28455__auto__.call(null);
(statearr_32855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_32855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__))
);

return c__28454__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__){
return (function (state_32889){
var state_val_32890 = (state_32889[(1)]);
if((state_val_32890 === (1))){
var inst_32879 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32889__$1 = state_32889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32889__$1,(2),inst_32879);
} else {
if((state_val_32890 === (2))){
var inst_32881 = (state_32889[(2)]);
var inst_32882 = cljs.core.async.timeout.call(null,(400));
var state_32889__$1 = (function (){var statearr_32891 = state_32889;
(statearr_32891[(7)] = inst_32881);

return statearr_32891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32889__$1,(3),inst_32882);
} else {
if((state_val_32890 === (3))){
var inst_32884 = (state_32889[(2)]);
var inst_32885 = figwheel.client.heads_up.clear.call(null);
var state_32889__$1 = (function (){var statearr_32892 = state_32889;
(statearr_32892[(8)] = inst_32884);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32889__$1,(4),inst_32885);
} else {
if((state_val_32890 === (4))){
var inst_32887 = (state_32889[(2)]);
var state_32889__$1 = state_32889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32889__$1,inst_32887);
} else {
return null;
}
}
}
}
});})(c__28454__auto__))
;
return ((function (switch__28342__auto__,c__28454__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto____0 = (function (){
var statearr_32896 = [null,null,null,null,null,null,null,null,null];
(statearr_32896[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto__);

(statearr_32896[(1)] = (1));

return statearr_32896;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto____1 = (function (state_32889){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_32889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e32897){if((e32897 instanceof Object)){
var ex__28346__auto__ = e32897;
var statearr_32898_32900 = state_32889;
(statearr_32898_32900[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32901 = state_32889;
state_32889 = G__32901;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto__ = function(state_32889){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto____1.call(this,state_32889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__))
})();
var state__28456__auto__ = (function (){var statearr_32899 = f__28455__auto__.call(null);
(statearr_32899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_32899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__))
);

return c__28454__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map