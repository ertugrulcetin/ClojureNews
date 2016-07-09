// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32904 = cljs.core._EQ_;
var expr__32905 = (function (){var or__24047__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e32908){if((e32908 instanceof Error)){
var e = e32908;
return false;
} else {
throw e32908;

}
}})();
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32904.call(null,"true",expr__32905))){
return true;
} else {
if(cljs.core.truth_(pred__32904.call(null,"false",expr__32905))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32905)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32910){if((e32910 instanceof Error)){
var e = e32910;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32910;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__25124__auto__ = [];
var len__25117__auto___32912 = arguments.length;
var i__25118__auto___32913 = (0);
while(true){
if((i__25118__auto___32913 < len__25117__auto___32912)){
args__25124__auto__.push((arguments[i__25118__auto___32913]));

var G__32914 = (i__25118__auto___32913 + (1));
i__25118__auto___32913 = G__32914;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq32911){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32911));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32915){
var map__32918 = p__32915;
var map__32918__$1 = ((((!((map__32918 == null)))?((((map__32918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32918):map__32918);
var message = cljs.core.get.call(null,map__32918__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32918__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24035__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24035__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24035__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28454__auto___33080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___33080,ch){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___33080,ch){
return (function (state_33049){
var state_val_33050 = (state_33049[(1)]);
if((state_val_33050 === (7))){
var inst_33045 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
var statearr_33051_33081 = state_33049__$1;
(statearr_33051_33081[(2)] = inst_33045);

(statearr_33051_33081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (1))){
var state_33049__$1 = state_33049;
var statearr_33052_33082 = state_33049__$1;
(statearr_33052_33082[(2)] = null);

(statearr_33052_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (4))){
var inst_33002 = (state_33049[(7)]);
var inst_33002__$1 = (state_33049[(2)]);
var state_33049__$1 = (function (){var statearr_33053 = state_33049;
(statearr_33053[(7)] = inst_33002__$1);

return statearr_33053;
})();
if(cljs.core.truth_(inst_33002__$1)){
var statearr_33054_33083 = state_33049__$1;
(statearr_33054_33083[(1)] = (5));

} else {
var statearr_33055_33084 = state_33049__$1;
(statearr_33055_33084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (15))){
var inst_33009 = (state_33049[(8)]);
var inst_33024 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33009);
var inst_33025 = cljs.core.first.call(null,inst_33024);
var inst_33026 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33025);
var inst_33027 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_33026)].join('');
var inst_33028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33027);
var state_33049__$1 = state_33049;
var statearr_33056_33085 = state_33049__$1;
(statearr_33056_33085[(2)] = inst_33028);

(statearr_33056_33085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (13))){
var inst_33033 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
var statearr_33057_33086 = state_33049__$1;
(statearr_33057_33086[(2)] = inst_33033);

(statearr_33057_33086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (6))){
var state_33049__$1 = state_33049;
var statearr_33058_33087 = state_33049__$1;
(statearr_33058_33087[(2)] = null);

(statearr_33058_33087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (17))){
var inst_33031 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
var statearr_33059_33088 = state_33049__$1;
(statearr_33059_33088[(2)] = inst_33031);

(statearr_33059_33088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (3))){
var inst_33047 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33049__$1,inst_33047);
} else {
if((state_val_33050 === (12))){
var inst_33008 = (state_33049[(9)]);
var inst_33022 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33008,opts);
var state_33049__$1 = state_33049;
if(cljs.core.truth_(inst_33022)){
var statearr_33060_33089 = state_33049__$1;
(statearr_33060_33089[(1)] = (15));

} else {
var statearr_33061_33090 = state_33049__$1;
(statearr_33061_33090[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (2))){
var state_33049__$1 = state_33049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33049__$1,(4),ch);
} else {
if((state_val_33050 === (11))){
var inst_33009 = (state_33049[(8)]);
var inst_33014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33015 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33009);
var inst_33016 = cljs.core.async.timeout.call(null,(1000));
var inst_33017 = [inst_33015,inst_33016];
var inst_33018 = (new cljs.core.PersistentVector(null,2,(5),inst_33014,inst_33017,null));
var state_33049__$1 = state_33049;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33049__$1,(14),inst_33018);
} else {
if((state_val_33050 === (9))){
var inst_33009 = (state_33049[(8)]);
var inst_33035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33036 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33009);
var inst_33037 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33036);
var inst_33038 = [cljs.core.str("Not loading: "),cljs.core.str(inst_33037)].join('');
var inst_33039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33038);
var state_33049__$1 = (function (){var statearr_33062 = state_33049;
(statearr_33062[(10)] = inst_33035);

return statearr_33062;
})();
var statearr_33063_33091 = state_33049__$1;
(statearr_33063_33091[(2)] = inst_33039);

(statearr_33063_33091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (5))){
var inst_33002 = (state_33049[(7)]);
var inst_33004 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33005 = (new cljs.core.PersistentArrayMap(null,2,inst_33004,null));
var inst_33006 = (new cljs.core.PersistentHashSet(null,inst_33005,null));
var inst_33007 = figwheel.client.focus_msgs.call(null,inst_33006,inst_33002);
var inst_33008 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33007);
var inst_33009 = cljs.core.first.call(null,inst_33007);
var inst_33010 = figwheel.client.autoload_QMARK_.call(null);
var state_33049__$1 = (function (){var statearr_33064 = state_33049;
(statearr_33064[(9)] = inst_33008);

(statearr_33064[(8)] = inst_33009);

return statearr_33064;
})();
if(cljs.core.truth_(inst_33010)){
var statearr_33065_33092 = state_33049__$1;
(statearr_33065_33092[(1)] = (8));

} else {
var statearr_33066_33093 = state_33049__$1;
(statearr_33066_33093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (14))){
var inst_33020 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
var statearr_33067_33094 = state_33049__$1;
(statearr_33067_33094[(2)] = inst_33020);

(statearr_33067_33094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (16))){
var state_33049__$1 = state_33049;
var statearr_33068_33095 = state_33049__$1;
(statearr_33068_33095[(2)] = null);

(statearr_33068_33095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (10))){
var inst_33041 = (state_33049[(2)]);
var state_33049__$1 = (function (){var statearr_33069 = state_33049;
(statearr_33069[(11)] = inst_33041);

return statearr_33069;
})();
var statearr_33070_33096 = state_33049__$1;
(statearr_33070_33096[(2)] = null);

(statearr_33070_33096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (8))){
var inst_33008 = (state_33049[(9)]);
var inst_33012 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33008,opts);
var state_33049__$1 = state_33049;
if(cljs.core.truth_(inst_33012)){
var statearr_33071_33097 = state_33049__$1;
(statearr_33071_33097[(1)] = (11));

} else {
var statearr_33072_33098 = state_33049__$1;
(statearr_33072_33098[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__28454__auto___33080,ch))
;
return ((function (switch__28342__auto__,c__28454__auto___33080,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28343__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28343__auto____0 = (function (){
var statearr_33076 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33076[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28343__auto__);

(statearr_33076[(1)] = (1));

return statearr_33076;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28343__auto____1 = (function (state_33049){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_33049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e33077){if((e33077 instanceof Object)){
var ex__28346__auto__ = e33077;
var statearr_33078_33099 = state_33049;
(statearr_33078_33099[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33100 = state_33049;
state_33049 = G__33100;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28343__auto__ = function(state_33049){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28343__auto____1.call(this,state_33049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28343__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28343__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___33080,ch))
})();
var state__28456__auto__ = (function (){var statearr_33079 = f__28455__auto__.call(null);
(statearr_33079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___33080);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___33080,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33101_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33101_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33108 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33108){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_33106 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33107 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33107;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33106;
}}catch (e33105){if((e33105 instanceof Error)){
var e = e33105;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33108], null));
} else {
var e = e33105;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33108))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33109){
var map__33116 = p__33109;
var map__33116__$1 = ((((!((map__33116 == null)))?((((map__33116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33116):map__33116);
var opts = map__33116__$1;
var build_id = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33116,map__33116__$1,opts,build_id){
return (function (p__33118){
var vec__33119 = p__33118;
var map__33120 = cljs.core.nth.call(null,vec__33119,(0),null);
var map__33120__$1 = ((((!((map__33120 == null)))?((((map__33120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33120):map__33120);
var msg = map__33120__$1;
var msg_name = cljs.core.get.call(null,map__33120__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33119,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33119,map__33120,map__33120__$1,msg,msg_name,_,map__33116,map__33116__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33119,map__33120,map__33120__$1,msg,msg_name,_,map__33116,map__33116__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33116,map__33116__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33126){
var vec__33127 = p__33126;
var map__33128 = cljs.core.nth.call(null,vec__33127,(0),null);
var map__33128__$1 = ((((!((map__33128 == null)))?((((map__33128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33128):map__33128);
var msg = map__33128__$1;
var msg_name = cljs.core.get.call(null,map__33128__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33127,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33130){
var map__33140 = p__33130;
var map__33140__$1 = ((((!((map__33140 == null)))?((((map__33140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33140):map__33140);
var on_compile_warning = cljs.core.get.call(null,map__33140__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33140__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33140,map__33140__$1,on_compile_warning,on_compile_fail){
return (function (p__33142){
var vec__33143 = p__33142;
var map__33144 = cljs.core.nth.call(null,vec__33143,(0),null);
var map__33144__$1 = ((((!((map__33144 == null)))?((((map__33144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33144):map__33144);
var msg = map__33144__$1;
var msg_name = cljs.core.get.call(null,map__33144__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33143,(1));
var pred__33146 = cljs.core._EQ_;
var expr__33147 = msg_name;
if(cljs.core.truth_(pred__33146.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33147))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33146.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33147))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33140,map__33140__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__,msg_hist,msg_names,msg){
return (function (state_33355){
var state_val_33356 = (state_33355[(1)]);
if((state_val_33356 === (7))){
var inst_33283 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33283)){
var statearr_33357_33403 = state_33355__$1;
(statearr_33357_33403[(1)] = (8));

} else {
var statearr_33358_33404 = state_33355__$1;
(statearr_33358_33404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (20))){
var inst_33349 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33359_33405 = state_33355__$1;
(statearr_33359_33405[(2)] = inst_33349);

(statearr_33359_33405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (27))){
var inst_33345 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33360_33406 = state_33355__$1;
(statearr_33360_33406[(2)] = inst_33345);

(statearr_33360_33406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (1))){
var inst_33276 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33276)){
var statearr_33361_33407 = state_33355__$1;
(statearr_33361_33407[(1)] = (2));

} else {
var statearr_33362_33408 = state_33355__$1;
(statearr_33362_33408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (24))){
var inst_33347 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33363_33409 = state_33355__$1;
(statearr_33363_33409[(2)] = inst_33347);

(statearr_33363_33409[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (4))){
var inst_33353 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33355__$1,inst_33353);
} else {
if((state_val_33356 === (15))){
var inst_33351 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33364_33410 = state_33355__$1;
(statearr_33364_33410[(2)] = inst_33351);

(statearr_33364_33410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (21))){
var inst_33310 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33365_33411 = state_33355__$1;
(statearr_33365_33411[(2)] = inst_33310);

(statearr_33365_33411[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (31))){
var inst_33334 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33334)){
var statearr_33366_33412 = state_33355__$1;
(statearr_33366_33412[(1)] = (34));

} else {
var statearr_33367_33413 = state_33355__$1;
(statearr_33367_33413[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (32))){
var inst_33343 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33368_33414 = state_33355__$1;
(statearr_33368_33414[(2)] = inst_33343);

(statearr_33368_33414[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (33))){
var inst_33332 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33369_33415 = state_33355__$1;
(statearr_33369_33415[(2)] = inst_33332);

(statearr_33369_33415[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (13))){
var inst_33297 = figwheel.client.heads_up.clear.call(null);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(16),inst_33297);
} else {
if((state_val_33356 === (22))){
var inst_33314 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33315 = figwheel.client.heads_up.append_message.call(null,inst_33314);
var state_33355__$1 = state_33355;
var statearr_33370_33416 = state_33355__$1;
(statearr_33370_33416[(2)] = inst_33315);

(statearr_33370_33416[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (36))){
var inst_33341 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33371_33417 = state_33355__$1;
(statearr_33371_33417[(2)] = inst_33341);

(statearr_33371_33417[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (29))){
var inst_33325 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33372_33418 = state_33355__$1;
(statearr_33372_33418[(2)] = inst_33325);

(statearr_33372_33418[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (6))){
var inst_33278 = (state_33355[(7)]);
var state_33355__$1 = state_33355;
var statearr_33373_33419 = state_33355__$1;
(statearr_33373_33419[(2)] = inst_33278);

(statearr_33373_33419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (28))){
var inst_33321 = (state_33355[(2)]);
var inst_33322 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33323 = figwheel.client.heads_up.display_warning.call(null,inst_33322);
var state_33355__$1 = (function (){var statearr_33374 = state_33355;
(statearr_33374[(8)] = inst_33321);

return statearr_33374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(29),inst_33323);
} else {
if((state_val_33356 === (25))){
var inst_33319 = figwheel.client.heads_up.clear.call(null);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(28),inst_33319);
} else {
if((state_val_33356 === (34))){
var inst_33336 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(37),inst_33336);
} else {
if((state_val_33356 === (17))){
var inst_33303 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33375_33420 = state_33355__$1;
(statearr_33375_33420[(2)] = inst_33303);

(statearr_33375_33420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (3))){
var inst_33295 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33295)){
var statearr_33376_33421 = state_33355__$1;
(statearr_33376_33421[(1)] = (13));

} else {
var statearr_33377_33422 = state_33355__$1;
(statearr_33377_33422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (12))){
var inst_33291 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33378_33423 = state_33355__$1;
(statearr_33378_33423[(2)] = inst_33291);

(statearr_33378_33423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (2))){
var inst_33278 = (state_33355[(7)]);
var inst_33278__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33355__$1 = (function (){var statearr_33379 = state_33355;
(statearr_33379[(7)] = inst_33278__$1);

return statearr_33379;
})();
if(cljs.core.truth_(inst_33278__$1)){
var statearr_33380_33424 = state_33355__$1;
(statearr_33380_33424[(1)] = (5));

} else {
var statearr_33381_33425 = state_33355__$1;
(statearr_33381_33425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (23))){
var inst_33317 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33317)){
var statearr_33382_33426 = state_33355__$1;
(statearr_33382_33426[(1)] = (25));

} else {
var statearr_33383_33427 = state_33355__$1;
(statearr_33383_33427[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (35))){
var state_33355__$1 = state_33355;
var statearr_33384_33428 = state_33355__$1;
(statearr_33384_33428[(2)] = null);

(statearr_33384_33428[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (19))){
var inst_33312 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33312)){
var statearr_33385_33429 = state_33355__$1;
(statearr_33385_33429[(1)] = (22));

} else {
var statearr_33386_33430 = state_33355__$1;
(statearr_33386_33430[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (11))){
var inst_33287 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33387_33431 = state_33355__$1;
(statearr_33387_33431[(2)] = inst_33287);

(statearr_33387_33431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (9))){
var inst_33289 = figwheel.client.heads_up.clear.call(null);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(12),inst_33289);
} else {
if((state_val_33356 === (5))){
var inst_33280 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33355__$1 = state_33355;
var statearr_33388_33432 = state_33355__$1;
(statearr_33388_33432[(2)] = inst_33280);

(statearr_33388_33432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (14))){
var inst_33305 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33305)){
var statearr_33389_33433 = state_33355__$1;
(statearr_33389_33433[(1)] = (18));

} else {
var statearr_33390_33434 = state_33355__$1;
(statearr_33390_33434[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (26))){
var inst_33327 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33355__$1 = state_33355;
if(cljs.core.truth_(inst_33327)){
var statearr_33391_33435 = state_33355__$1;
(statearr_33391_33435[(1)] = (30));

} else {
var statearr_33392_33436 = state_33355__$1;
(statearr_33392_33436[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (16))){
var inst_33299 = (state_33355[(2)]);
var inst_33300 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33301 = figwheel.client.heads_up.display_exception.call(null,inst_33300);
var state_33355__$1 = (function (){var statearr_33393 = state_33355;
(statearr_33393[(9)] = inst_33299);

return statearr_33393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(17),inst_33301);
} else {
if((state_val_33356 === (30))){
var inst_33329 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33330 = figwheel.client.heads_up.display_warning.call(null,inst_33329);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(33),inst_33330);
} else {
if((state_val_33356 === (10))){
var inst_33293 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33394_33437 = state_33355__$1;
(statearr_33394_33437[(2)] = inst_33293);

(statearr_33394_33437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (18))){
var inst_33307 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33308 = figwheel.client.heads_up.display_exception.call(null,inst_33307);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(21),inst_33308);
} else {
if((state_val_33356 === (37))){
var inst_33338 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
var statearr_33395_33438 = state_33355__$1;
(statearr_33395_33438[(2)] = inst_33338);

(statearr_33395_33438[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33356 === (8))){
var inst_33285 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33355__$1,(11),inst_33285);
} else {
return null;
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
}
});})(c__28454__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28342__auto__,c__28454__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto____0 = (function (){
var statearr_33399 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33399[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto__);

(statearr_33399[(1)] = (1));

return statearr_33399;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto____1 = (function (state_33355){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_33355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e33400){if((e33400 instanceof Object)){
var ex__28346__auto__ = e33400;
var statearr_33401_33439 = state_33355;
(statearr_33401_33439[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33440 = state_33355;
state_33355 = G__33440;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto__ = function(state_33355){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto____1.call(this,state_33355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__,msg_hist,msg_names,msg))
})();
var state__28456__auto__ = (function (){var statearr_33402 = f__28455__auto__.call(null);
(statearr_33402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_33402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__,msg_hist,msg_names,msg))
);

return c__28454__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28454__auto___33503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto___33503,ch){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto___33503,ch){
return (function (state_33486){
var state_val_33487 = (state_33486[(1)]);
if((state_val_33487 === (1))){
var state_33486__$1 = state_33486;
var statearr_33488_33504 = state_33486__$1;
(statearr_33488_33504[(2)] = null);

(statearr_33488_33504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (2))){
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33486__$1,(4),ch);
} else {
if((state_val_33487 === (3))){
var inst_33484 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33486__$1,inst_33484);
} else {
if((state_val_33487 === (4))){
var inst_33474 = (state_33486[(7)]);
var inst_33474__$1 = (state_33486[(2)]);
var state_33486__$1 = (function (){var statearr_33489 = state_33486;
(statearr_33489[(7)] = inst_33474__$1);

return statearr_33489;
})();
if(cljs.core.truth_(inst_33474__$1)){
var statearr_33490_33505 = state_33486__$1;
(statearr_33490_33505[(1)] = (5));

} else {
var statearr_33491_33506 = state_33486__$1;
(statearr_33491_33506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (5))){
var inst_33474 = (state_33486[(7)]);
var inst_33476 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33474);
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33486__$1,(8),inst_33476);
} else {
if((state_val_33487 === (6))){
var state_33486__$1 = state_33486;
var statearr_33492_33507 = state_33486__$1;
(statearr_33492_33507[(2)] = null);

(statearr_33492_33507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (7))){
var inst_33482 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33493_33508 = state_33486__$1;
(statearr_33493_33508[(2)] = inst_33482);

(statearr_33493_33508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (8))){
var inst_33478 = (state_33486[(2)]);
var state_33486__$1 = (function (){var statearr_33494 = state_33486;
(statearr_33494[(8)] = inst_33478);

return statearr_33494;
})();
var statearr_33495_33509 = state_33486__$1;
(statearr_33495_33509[(2)] = null);

(statearr_33495_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28454__auto___33503,ch))
;
return ((function (switch__28342__auto__,c__28454__auto___33503,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28343__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28343__auto____0 = (function (){
var statearr_33499 = [null,null,null,null,null,null,null,null,null];
(statearr_33499[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28343__auto__);

(statearr_33499[(1)] = (1));

return statearr_33499;
});
var figwheel$client$heads_up_plugin_$_state_machine__28343__auto____1 = (function (state_33486){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_33486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e33500){if((e33500 instanceof Object)){
var ex__28346__auto__ = e33500;
var statearr_33501_33510 = state_33486;
(statearr_33501_33510[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33511 = state_33486;
state_33486 = G__33511;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28343__auto__ = function(state_33486){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28343__auto____1.call(this,state_33486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28343__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28343__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto___33503,ch))
})();
var state__28456__auto__ = (function (){var statearr_33502 = f__28455__auto__.call(null);
(statearr_33502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto___33503);

return statearr_33502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto___33503,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28454__auto__){
return (function (){
var f__28455__auto__ = (function (){var switch__28342__auto__ = ((function (c__28454__auto__){
return (function (state_33532){
var state_val_33533 = (state_33532[(1)]);
if((state_val_33533 === (1))){
var inst_33527 = cljs.core.async.timeout.call(null,(3000));
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33532__$1,(2),inst_33527);
} else {
if((state_val_33533 === (2))){
var inst_33529 = (state_33532[(2)]);
var inst_33530 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33532__$1 = (function (){var statearr_33534 = state_33532;
(statearr_33534[(7)] = inst_33529);

return statearr_33534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33532__$1,inst_33530);
} else {
return null;
}
}
});})(c__28454__auto__))
;
return ((function (switch__28342__auto__,c__28454__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28343__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28343__auto____0 = (function (){
var statearr_33538 = [null,null,null,null,null,null,null,null];
(statearr_33538[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28343__auto__);

(statearr_33538[(1)] = (1));

return statearr_33538;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28343__auto____1 = (function (state_33532){
while(true){
var ret_value__28344__auto__ = (function (){try{while(true){
var result__28345__auto__ = switch__28342__auto__.call(null,state_33532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28345__auto__;
}
break;
}
}catch (e33539){if((e33539 instanceof Object)){
var ex__28346__auto__ = e33539;
var statearr_33540_33542 = state_33532;
(statearr_33540_33542[(5)] = ex__28346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33543 = state_33532;
state_33532 = G__33543;
continue;
} else {
return ret_value__28344__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28343__auto__ = function(state_33532){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28343__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28343__auto____1.call(this,state_33532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28343__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28343__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28343__auto__;
})()
;})(switch__28342__auto__,c__28454__auto__))
})();
var state__28456__auto__ = (function (){var statearr_33541 = f__28455__auto__.call(null);
(statearr_33541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28454__auto__);

return statearr_33541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28456__auto__);
});})(c__28454__auto__))
);

return c__28454__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33544){
var map__33551 = p__33544;
var map__33551__$1 = ((((!((map__33551 == null)))?((((map__33551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33551):map__33551);
var ed = map__33551__$1;
var formatted_exception = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33553_33557 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33554_33558 = null;
var count__33555_33559 = (0);
var i__33556_33560 = (0);
while(true){
if((i__33556_33560 < count__33555_33559)){
var msg_33561 = cljs.core._nth.call(null,chunk__33554_33558,i__33556_33560);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33561);

var G__33562 = seq__33553_33557;
var G__33563 = chunk__33554_33558;
var G__33564 = count__33555_33559;
var G__33565 = (i__33556_33560 + (1));
seq__33553_33557 = G__33562;
chunk__33554_33558 = G__33563;
count__33555_33559 = G__33564;
i__33556_33560 = G__33565;
continue;
} else {
var temp__4657__auto___33566 = cljs.core.seq.call(null,seq__33553_33557);
if(temp__4657__auto___33566){
var seq__33553_33567__$1 = temp__4657__auto___33566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33553_33567__$1)){
var c__24858__auto___33568 = cljs.core.chunk_first.call(null,seq__33553_33567__$1);
var G__33569 = cljs.core.chunk_rest.call(null,seq__33553_33567__$1);
var G__33570 = c__24858__auto___33568;
var G__33571 = cljs.core.count.call(null,c__24858__auto___33568);
var G__33572 = (0);
seq__33553_33557 = G__33569;
chunk__33554_33558 = G__33570;
count__33555_33559 = G__33571;
i__33556_33560 = G__33572;
continue;
} else {
var msg_33573 = cljs.core.first.call(null,seq__33553_33567__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33573);

var G__33574 = cljs.core.next.call(null,seq__33553_33567__$1);
var G__33575 = null;
var G__33576 = (0);
var G__33577 = (0);
seq__33553_33557 = G__33574;
chunk__33554_33558 = G__33575;
count__33555_33559 = G__33576;
i__33556_33560 = G__33577;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33578){
var map__33581 = p__33578;
var map__33581__$1 = ((((!((map__33581 == null)))?((((map__33581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33581):map__33581);
var w = map__33581__$1;
var message = cljs.core.get.call(null,map__33581__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24035__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24035__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24035__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33589 = cljs.core.seq.call(null,plugins);
var chunk__33590 = null;
var count__33591 = (0);
var i__33592 = (0);
while(true){
if((i__33592 < count__33591)){
var vec__33593 = cljs.core._nth.call(null,chunk__33590,i__33592);
var k = cljs.core.nth.call(null,vec__33593,(0),null);
var plugin = cljs.core.nth.call(null,vec__33593,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33595 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33589,chunk__33590,count__33591,i__33592,pl_33595,vec__33593,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33595.call(null,msg_hist);
});})(seq__33589,chunk__33590,count__33591,i__33592,pl_33595,vec__33593,k,plugin))
);
} else {
}

var G__33596 = seq__33589;
var G__33597 = chunk__33590;
var G__33598 = count__33591;
var G__33599 = (i__33592 + (1));
seq__33589 = G__33596;
chunk__33590 = G__33597;
count__33591 = G__33598;
i__33592 = G__33599;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33589);
if(temp__4657__auto__){
var seq__33589__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33589__$1)){
var c__24858__auto__ = cljs.core.chunk_first.call(null,seq__33589__$1);
var G__33600 = cljs.core.chunk_rest.call(null,seq__33589__$1);
var G__33601 = c__24858__auto__;
var G__33602 = cljs.core.count.call(null,c__24858__auto__);
var G__33603 = (0);
seq__33589 = G__33600;
chunk__33590 = G__33601;
count__33591 = G__33602;
i__33592 = G__33603;
continue;
} else {
var vec__33594 = cljs.core.first.call(null,seq__33589__$1);
var k = cljs.core.nth.call(null,vec__33594,(0),null);
var plugin = cljs.core.nth.call(null,vec__33594,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33604 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33589,chunk__33590,count__33591,i__33592,pl_33604,vec__33594,k,plugin,seq__33589__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33604.call(null,msg_hist);
});})(seq__33589,chunk__33590,count__33591,i__33592,pl_33604,vec__33594,k,plugin,seq__33589__$1,temp__4657__auto__))
);
} else {
}

var G__33605 = cljs.core.next.call(null,seq__33589__$1);
var G__33606 = null;
var G__33607 = (0);
var G__33608 = (0);
seq__33589 = G__33605;
chunk__33590 = G__33606;
count__33591 = G__33607;
i__33592 = G__33608;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args33609 = [];
var len__25117__auto___33612 = arguments.length;
var i__25118__auto___33613 = (0);
while(true){
if((i__25118__auto___33613 < len__25117__auto___33612)){
args33609.push((arguments[i__25118__auto___33613]));

var G__33614 = (i__25118__auto___33613 + (1));
i__25118__auto___33613 = G__33614;
continue;
} else {
}
break;
}

var G__33611 = args33609.length;
switch (G__33611) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33609.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25124__auto__ = [];
var len__25117__auto___33620 = arguments.length;
var i__25118__auto___33621 = (0);
while(true){
if((i__25118__auto___33621 < len__25117__auto___33620)){
args__25124__auto__.push((arguments[i__25118__auto___33621]));

var G__33622 = (i__25118__auto___33621 + (1));
i__25118__auto___33621 = G__33622;
continue;
} else {
}
break;
}

var argseq__25125__auto__ = ((((0) < args__25124__auto__.length))?(new cljs.core.IndexedSeq(args__25124__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25125__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33617){
var map__33618 = p__33617;
var map__33618__$1 = ((((!((map__33618 == null)))?((((map__33618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33618):map__33618);
var opts = map__33618__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33616){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33616));
});

//# sourceMappingURL=client.js.map