// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22327__auto__ = [];
var len__22320__auto___27588 = arguments.length;
var i__22321__auto___27589 = (0);
while(true){
if((i__22321__auto___27589 < len__22320__auto___27588)){
args__22327__auto__.push((arguments[i__22321__auto___27589]));

var G__27590 = (i__22321__auto___27589 + (1));
i__22321__auto___27589 = G__27590;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((2) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22328__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27580_27591 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27581_27592 = null;
var count__27582_27593 = (0);
var i__27583_27594 = (0);
while(true){
if((i__27583_27594 < count__27582_27593)){
var k_27595 = cljs.core._nth.call(null,chunk__27581_27592,i__27583_27594);
e.setAttribute(cljs.core.name.call(null,k_27595),cljs.core.get.call(null,attrs,k_27595));

var G__27596 = seq__27580_27591;
var G__27597 = chunk__27581_27592;
var G__27598 = count__27582_27593;
var G__27599 = (i__27583_27594 + (1));
seq__27580_27591 = G__27596;
chunk__27581_27592 = G__27597;
count__27582_27593 = G__27598;
i__27583_27594 = G__27599;
continue;
} else {
var temp__4657__auto___27600 = cljs.core.seq.call(null,seq__27580_27591);
if(temp__4657__auto___27600){
var seq__27580_27601__$1 = temp__4657__auto___27600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27580_27601__$1)){
var c__22061__auto___27602 = cljs.core.chunk_first.call(null,seq__27580_27601__$1);
var G__27603 = cljs.core.chunk_rest.call(null,seq__27580_27601__$1);
var G__27604 = c__22061__auto___27602;
var G__27605 = cljs.core.count.call(null,c__22061__auto___27602);
var G__27606 = (0);
seq__27580_27591 = G__27603;
chunk__27581_27592 = G__27604;
count__27582_27593 = G__27605;
i__27583_27594 = G__27606;
continue;
} else {
var k_27607 = cljs.core.first.call(null,seq__27580_27601__$1);
e.setAttribute(cljs.core.name.call(null,k_27607),cljs.core.get.call(null,attrs,k_27607));

var G__27608 = cljs.core.next.call(null,seq__27580_27601__$1);
var G__27609 = null;
var G__27610 = (0);
var G__27611 = (0);
seq__27580_27591 = G__27608;
chunk__27581_27592 = G__27609;
count__27582_27593 = G__27610;
i__27583_27594 = G__27611;
continue;
}
} else {
}
}
break;
}

var seq__27584_27612 = cljs.core.seq.call(null,children);
var chunk__27585_27613 = null;
var count__27586_27614 = (0);
var i__27587_27615 = (0);
while(true){
if((i__27587_27615 < count__27586_27614)){
var ch_27616 = cljs.core._nth.call(null,chunk__27585_27613,i__27587_27615);
e.appendChild(ch_27616);

var G__27617 = seq__27584_27612;
var G__27618 = chunk__27585_27613;
var G__27619 = count__27586_27614;
var G__27620 = (i__27587_27615 + (1));
seq__27584_27612 = G__27617;
chunk__27585_27613 = G__27618;
count__27586_27614 = G__27619;
i__27587_27615 = G__27620;
continue;
} else {
var temp__4657__auto___27621 = cljs.core.seq.call(null,seq__27584_27612);
if(temp__4657__auto___27621){
var seq__27584_27622__$1 = temp__4657__auto___27621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27584_27622__$1)){
var c__22061__auto___27623 = cljs.core.chunk_first.call(null,seq__27584_27622__$1);
var G__27624 = cljs.core.chunk_rest.call(null,seq__27584_27622__$1);
var G__27625 = c__22061__auto___27623;
var G__27626 = cljs.core.count.call(null,c__22061__auto___27623);
var G__27627 = (0);
seq__27584_27612 = G__27624;
chunk__27585_27613 = G__27625;
count__27586_27614 = G__27626;
i__27587_27615 = G__27627;
continue;
} else {
var ch_27628 = cljs.core.first.call(null,seq__27584_27622__$1);
e.appendChild(ch_27628);

var G__27629 = cljs.core.next.call(null,seq__27584_27622__$1);
var G__27630 = null;
var G__27631 = (0);
var G__27632 = (0);
seq__27584_27612 = G__27629;
chunk__27585_27613 = G__27630;
count__27586_27614 = G__27631;
i__27587_27615 = G__27632;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27577){
var G__27578 = cljs.core.first.call(null,seq27577);
var seq27577__$1 = cljs.core.next.call(null,seq27577);
var G__27579 = cljs.core.first.call(null,seq27577__$1);
var seq27577__$2 = cljs.core.next.call(null,seq27577__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27578,G__27579,seq27577__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22176__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22177__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22178__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22179__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22175__auto__,prefer_table__22176__auto__,method_cache__22177__auto__,cached_hierarchy__22178__auto__,hierarchy__22179__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22175__auto__,prefer_table__22176__auto__,method_cache__22177__auto__,cached_hierarchy__22178__auto__,hierarchy__22179__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22179__auto__,method_table__22175__auto__,prefer_table__22176__auto__,method_cache__22177__auto__,cached_hierarchy__22178__auto__));
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
var el_27633 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27633.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27633.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27633.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27633);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27634,st_map){
var map__27639 = p__27634;
var map__27639__$1 = ((((!((map__27639 == null)))?((((map__27639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27639):map__27639);
var container_el = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27639,map__27639__$1,container_el){
return (function (p__27641){
var vec__27642 = p__27641;
var k = cljs.core.nth.call(null,vec__27642,(0),null);
var v = cljs.core.nth.call(null,vec__27642,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27639,map__27639__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27643,dom_str){
var map__27646 = p__27643;
var map__27646__$1 = ((((!((map__27646 == null)))?((((map__27646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27646):map__27646);
var c = map__27646__$1;
var content_area_el = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27648){
var map__27651 = p__27648;
var map__27651__$1 = ((((!((map__27651 == null)))?((((map__27651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27651):map__27651);
var content_area_el = cljs.core.get.call(null,map__27651__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__){
return (function (state_27694){
var state_val_27695 = (state_27694[(1)]);
if((state_val_27695 === (1))){
var inst_27679 = (state_27694[(7)]);
var inst_27679__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27680 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27681 = ["10px","10px","100%","68px","1.0"];
var inst_27682 = cljs.core.PersistentHashMap.fromArrays(inst_27680,inst_27681);
var inst_27683 = cljs.core.merge.call(null,inst_27682,style);
var inst_27684 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27679__$1,inst_27683);
var inst_27685 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27679__$1,msg);
var inst_27686 = cljs.core.async.timeout.call(null,(300));
var state_27694__$1 = (function (){var statearr_27696 = state_27694;
(statearr_27696[(8)] = inst_27684);

(statearr_27696[(7)] = inst_27679__$1);

(statearr_27696[(9)] = inst_27685);

return statearr_27696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27694__$1,(2),inst_27686);
} else {
if((state_val_27695 === (2))){
var inst_27679 = (state_27694[(7)]);
var inst_27688 = (state_27694[(2)]);
var inst_27689 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27690 = ["auto"];
var inst_27691 = cljs.core.PersistentHashMap.fromArrays(inst_27689,inst_27690);
var inst_27692 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27679,inst_27691);
var state_27694__$1 = (function (){var statearr_27697 = state_27694;
(statearr_27697[(10)] = inst_27688);

return statearr_27697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27694__$1,inst_27692);
} else {
return null;
}
}
});})(c__23510__auto__))
;
return ((function (switch__23398__auto__,c__23510__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto____0 = (function (){
var statearr_27701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27701[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto__);

(statearr_27701[(1)] = (1));

return statearr_27701;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto____1 = (function (state_27694){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_27694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e27702){if((e27702 instanceof Object)){
var ex__23402__auto__ = e27702;
var statearr_27703_27705 = state_27694;
(statearr_27703_27705[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27706 = state_27694;
state_27694 = G__27706;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto__ = function(state_27694){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto____1.call(this,state_27694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__))
})();
var state__23512__auto__ = (function (){var statearr_27704 = f__23511__auto__.call(null);
(statearr_27704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_27704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__))
);

return c__23510__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args27707 = [];
var len__22320__auto___27710 = arguments.length;
var i__22321__auto___27711 = (0);
while(true){
if((i__22321__auto___27711 < len__22320__auto___27710)){
args27707.push((arguments[i__22321__auto___27711]));

var G__27712 = (i__22321__auto___27711 + (1));
i__22321__auto___27711 = G__27712;
continue;
} else {
}
break;
}

var G__27709 = args27707.length;
switch (G__27709) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27707.length)].join('')));

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
var vec__27715 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__27715,(0),null);
var ln = cljs.core.nth.call(null,vec__27715,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27718 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27718,(0),null);
var file_line = cljs.core.nth.call(null,vec__27718,(1),null);
var file_column = cljs.core.nth.call(null,vec__27718,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27718,file_name,file_line,file_column){
return (function (p1__27716_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27716_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27718,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__21250__auto__ = file_line;
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
var and__21238__auto__ = cause;
if(cljs.core.truth_(and__21238__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__21238__auto__;
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
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__27719){
var map__27722 = p__27719;
var map__27722__$1 = ((((!((map__27722 == null)))?((((map__27722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27722):map__27722);
var ex = map__27722__$1;
var exception_data = cljs.core.get.call(null,map__27722__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__21238__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__21238__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__21238__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__27724){
var map__27730 = p__27724;
var map__27730__$1 = ((((!((map__27730 == null)))?((((map__27730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27730):map__27730);
var ex = map__27730__$1;
var exception_data = cljs.core.get.call(null,map__27730__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__27730,map__27730__$1,ex,exception_data){
return (function (p__27732){
var map__27733 = p__27732;
var map__27733__$1 = ((((!((map__27733 == null)))?((((map__27733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27733):map__27733);
var exc = map__27733__$1;
var data = cljs.core.get.call(null,map__27733__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__21238__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__21238__auto__)){
return data;
} else {
return and__21238__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__27730,map__27730__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__21250__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__27735){
var map__27741 = p__27735;
var map__27741__$1 = ((((!((map__27741 == null)))?((((map__27741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27741):map__27741);
var ex = map__27741__$1;
var exception_data = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__27741,map__27741__$1,ex,exception_data){
return (function (p__27743){
var map__27744 = p__27743;
var map__27744__$1 = ((((!((map__27744 == null)))?((((map__27744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27744):map__27744);
var exc = map__27744__$1;
var data = cljs.core.get.call(null,map__27744__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__21238__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__21238__auto__)){
return data;
} else {
return and__21238__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__27741,map__27741__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__27746){
var map__27750 = p__27746;
var map__27750__$1 = ((((!((map__27750 == null)))?((((map__27750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27750):map__27750);
var ex = map__27750__$1;
var reader_exception = cljs.core.get.call(null,map__27750__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__27750__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__21238__auto__ = reader_exception;
if(cljs.core.truth_(and__21238__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__21238__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__27752 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__27752,(0),null);
var line = cljs.core.nth.call(null,vec__27752,(1),null);
var column = cljs.core.nth.call(null,vec__27752,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__27753){
var map__27759 = p__27753;
var map__27759__$1 = ((((!((map__27759 == null)))?((((map__27759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27759):map__27759);
var ex = map__27759__$1;
var exception_data = cljs.core.get.call(null,map__27759__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__27761 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__27761__$1 = ((((!((map__27761 == null)))?((((map__27761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27761):map__27761);
var file = cljs.core.get.call(null,map__27761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27761__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__27763 = ex;
var G__27763__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__27763):G__27763);
var G__27763__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__27763__$1):G__27763__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__27763__$2);
} else {
return G__27763__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__27764){
var map__27767 = p__27764;
var map__27767__$1 = ((((!((map__27767 == null)))?((((map__27767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27767):map__27767);
var ex = map__27767__$1;
var message = cljs.core.get.call(null,map__27767__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__27767__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21238__auto__ = file;
if(cljs.core.truth_(and__21238__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__21238__auto__;
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
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__27771){
var map__27774 = p__27771;
var map__27774__$1 = ((((!((map__27774 == null)))?((((map__27774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27774):map__27774);
var exception = map__27774__$1;
var failed_compiling = cljs.core.get.call(null,map__27774__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__27774__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__27774__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__27774__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__27774__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27774__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27774__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__27774__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__21238__auto__ = file;
if(cljs.core.truth_(and__21238__auto__)){
return line;
} else {
return and__21238__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__27774,map__27774__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__27769_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__27769_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__27774,map__27774__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__27774,map__27774__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__27770_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__27770_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__27770_SHARP_)))].join('');
});})(last_message,map__27774,map__27774__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__27779 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__27779__$1 = ((((!((map__27779 == null)))?((((map__27779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27779):map__27779);
var head = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
var map__27783 = figwheel.client.heads_up.ensure_container.call(null);
var map__27783__$1 = ((((!((map__27783 == null)))?((((map__27783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27783):map__27783);
var content_area_el = cljs.core.get.call(null,map__27783__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__){
return (function (state_27831){
var state_val_27832 = (state_27831[(1)]);
if((state_val_27832 === (1))){
var inst_27814 = (state_27831[(7)]);
var inst_27814__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27815 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27816 = ["0.0"];
var inst_27817 = cljs.core.PersistentHashMap.fromArrays(inst_27815,inst_27816);
var inst_27818 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27814__$1,inst_27817);
var inst_27819 = cljs.core.async.timeout.call(null,(300));
var state_27831__$1 = (function (){var statearr_27833 = state_27831;
(statearr_27833[(8)] = inst_27818);

(statearr_27833[(7)] = inst_27814__$1);

return statearr_27833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,(2),inst_27819);
} else {
if((state_val_27832 === (2))){
var inst_27814 = (state_27831[(7)]);
var inst_27821 = (state_27831[(2)]);
var inst_27822 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27823 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27824 = cljs.core.PersistentHashMap.fromArrays(inst_27822,inst_27823);
var inst_27825 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27814,inst_27824);
var inst_27826 = cljs.core.async.timeout.call(null,(200));
var state_27831__$1 = (function (){var statearr_27834 = state_27831;
(statearr_27834[(9)] = inst_27825);

(statearr_27834[(10)] = inst_27821);

return statearr_27834;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,(3),inst_27826);
} else {
if((state_val_27832 === (3))){
var inst_27814 = (state_27831[(7)]);
var inst_27828 = (state_27831[(2)]);
var inst_27829 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27814,"");
var state_27831__$1 = (function (){var statearr_27835 = state_27831;
(statearr_27835[(11)] = inst_27828);

return statearr_27835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27831__$1,inst_27829);
} else {
return null;
}
}
}
});})(c__23510__auto__))
;
return ((function (switch__23398__auto__,c__23510__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23399__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23399__auto____0 = (function (){
var statearr_27839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27839[(0)] = figwheel$client$heads_up$clear_$_state_machine__23399__auto__);

(statearr_27839[(1)] = (1));

return statearr_27839;
});
var figwheel$client$heads_up$clear_$_state_machine__23399__auto____1 = (function (state_27831){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_27831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e27840){if((e27840 instanceof Object)){
var ex__23402__auto__ = e27840;
var statearr_27841_27843 = state_27831;
(statearr_27841_27843[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27844 = state_27831;
state_27831 = G__27844;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23399__auto__ = function(state_27831){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23399__auto____1.call(this,state_27831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23399__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23399__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__))
})();
var state__23512__auto__ = (function (){var statearr_27842 = f__23511__auto__.call(null);
(statearr_27842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_27842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__))
);

return c__23510__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__){
return (function (state_27876){
var state_val_27877 = (state_27876[(1)]);
if((state_val_27877 === (1))){
var inst_27866 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27876__$1 = state_27876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27876__$1,(2),inst_27866);
} else {
if((state_val_27877 === (2))){
var inst_27868 = (state_27876[(2)]);
var inst_27869 = cljs.core.async.timeout.call(null,(400));
var state_27876__$1 = (function (){var statearr_27878 = state_27876;
(statearr_27878[(7)] = inst_27868);

return statearr_27878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27876__$1,(3),inst_27869);
} else {
if((state_val_27877 === (3))){
var inst_27871 = (state_27876[(2)]);
var inst_27872 = figwheel.client.heads_up.clear.call(null);
var state_27876__$1 = (function (){var statearr_27879 = state_27876;
(statearr_27879[(8)] = inst_27871);

return statearr_27879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27876__$1,(4),inst_27872);
} else {
if((state_val_27877 === (4))){
var inst_27874 = (state_27876[(2)]);
var state_27876__$1 = state_27876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27876__$1,inst_27874);
} else {
return null;
}
}
}
}
});})(c__23510__auto__))
;
return ((function (switch__23398__auto__,c__23510__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto____0 = (function (){
var statearr_27883 = [null,null,null,null,null,null,null,null,null];
(statearr_27883[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto__);

(statearr_27883[(1)] = (1));

return statearr_27883;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto____1 = (function (state_27876){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_27876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e27884){if((e27884 instanceof Object)){
var ex__23402__auto__ = e27884;
var statearr_27885_27887 = state_27876;
(statearr_27885_27887[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27888 = state_27876;
state_27876 = G__27888;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto__ = function(state_27876){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto____1.call(this,state_27876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__))
})();
var state__23512__auto__ = (function (){var statearr_27886 = f__23511__auto__.call(null);
(statearr_27886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_27886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__))
);

return c__23510__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map