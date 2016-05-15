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
var pred__27891 = cljs.core._EQ_;
var expr__27892 = (function (){var or__21250__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e27895){if((e27895 instanceof Error)){
var e = e27895;
return false;
} else {
throw e27895;

}
}})();
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27891.call(null,"true",expr__27892))){
return true;
} else {
if(cljs.core.truth_(pred__27891.call(null,"false",expr__27892))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27892)].join('')));
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
}catch (e27897){if((e27897 instanceof Error)){
var e = e27897;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e27897;

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
var args__22327__auto__ = [];
var len__22320__auto___27899 = arguments.length;
var i__22321__auto___27900 = (0);
while(true){
if((i__22321__auto___27900 < len__22320__auto___27899)){
args__22327__auto__.push((arguments[i__22321__auto___27900]));

var G__27901 = (i__22321__auto___27900 + (1));
i__22321__auto___27900 = G__27901;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27898){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27898));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27902){
var map__27905 = p__27902;
var map__27905__$1 = ((((!((map__27905 == null)))?((((map__27905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27905):map__27905);
var message = cljs.core.get.call(null,map__27905__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27905__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21250__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21238__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21238__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21238__auto__;
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
var c__23510__auto___28067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___28067,ch){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___28067,ch){
return (function (state_28036){
var state_val_28037 = (state_28036[(1)]);
if((state_val_28037 === (7))){
var inst_28032 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28038_28068 = state_28036__$1;
(statearr_28038_28068[(2)] = inst_28032);

(statearr_28038_28068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (1))){
var state_28036__$1 = state_28036;
var statearr_28039_28069 = state_28036__$1;
(statearr_28039_28069[(2)] = null);

(statearr_28039_28069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (4))){
var inst_27989 = (state_28036[(7)]);
var inst_27989__$1 = (state_28036[(2)]);
var state_28036__$1 = (function (){var statearr_28040 = state_28036;
(statearr_28040[(7)] = inst_27989__$1);

return statearr_28040;
})();
if(cljs.core.truth_(inst_27989__$1)){
var statearr_28041_28070 = state_28036__$1;
(statearr_28041_28070[(1)] = (5));

} else {
var statearr_28042_28071 = state_28036__$1;
(statearr_28042_28071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (15))){
var inst_27996 = (state_28036[(8)]);
var inst_28011 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27996);
var inst_28012 = cljs.core.first.call(null,inst_28011);
var inst_28013 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28012);
var inst_28014 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28013)].join('');
var inst_28015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28014);
var state_28036__$1 = state_28036;
var statearr_28043_28072 = state_28036__$1;
(statearr_28043_28072[(2)] = inst_28015);

(statearr_28043_28072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (13))){
var inst_28020 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28044_28073 = state_28036__$1;
(statearr_28044_28073[(2)] = inst_28020);

(statearr_28044_28073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (6))){
var state_28036__$1 = state_28036;
var statearr_28045_28074 = state_28036__$1;
(statearr_28045_28074[(2)] = null);

(statearr_28045_28074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (17))){
var inst_28018 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28046_28075 = state_28036__$1;
(statearr_28046_28075[(2)] = inst_28018);

(statearr_28046_28075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (3))){
var inst_28034 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28036__$1,inst_28034);
} else {
if((state_val_28037 === (12))){
var inst_27995 = (state_28036[(9)]);
var inst_28009 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27995,opts);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_28009)){
var statearr_28047_28076 = state_28036__$1;
(statearr_28047_28076[(1)] = (15));

} else {
var statearr_28048_28077 = state_28036__$1;
(statearr_28048_28077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (2))){
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(4),ch);
} else {
if((state_val_28037 === (11))){
var inst_27996 = (state_28036[(8)]);
var inst_28001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28002 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27996);
var inst_28003 = cljs.core.async.timeout.call(null,(1000));
var inst_28004 = [inst_28002,inst_28003];
var inst_28005 = (new cljs.core.PersistentVector(null,2,(5),inst_28001,inst_28004,null));
var state_28036__$1 = state_28036;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28036__$1,(14),inst_28005);
} else {
if((state_val_28037 === (9))){
var inst_27996 = (state_28036[(8)]);
var inst_28022 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28023 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27996);
var inst_28024 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28023);
var inst_28025 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28024)].join('');
var inst_28026 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28025);
var state_28036__$1 = (function (){var statearr_28049 = state_28036;
(statearr_28049[(10)] = inst_28022);

return statearr_28049;
})();
var statearr_28050_28078 = state_28036__$1;
(statearr_28050_28078[(2)] = inst_28026);

(statearr_28050_28078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (5))){
var inst_27989 = (state_28036[(7)]);
var inst_27991 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27992 = (new cljs.core.PersistentArrayMap(null,2,inst_27991,null));
var inst_27993 = (new cljs.core.PersistentHashSet(null,inst_27992,null));
var inst_27994 = figwheel.client.focus_msgs.call(null,inst_27993,inst_27989);
var inst_27995 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27994);
var inst_27996 = cljs.core.first.call(null,inst_27994);
var inst_27997 = figwheel.client.autoload_QMARK_.call(null);
var state_28036__$1 = (function (){var statearr_28051 = state_28036;
(statearr_28051[(8)] = inst_27996);

(statearr_28051[(9)] = inst_27995);

return statearr_28051;
})();
if(cljs.core.truth_(inst_27997)){
var statearr_28052_28079 = state_28036__$1;
(statearr_28052_28079[(1)] = (8));

} else {
var statearr_28053_28080 = state_28036__$1;
(statearr_28053_28080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (14))){
var inst_28007 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28054_28081 = state_28036__$1;
(statearr_28054_28081[(2)] = inst_28007);

(statearr_28054_28081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (16))){
var state_28036__$1 = state_28036;
var statearr_28055_28082 = state_28036__$1;
(statearr_28055_28082[(2)] = null);

(statearr_28055_28082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (10))){
var inst_28028 = (state_28036[(2)]);
var state_28036__$1 = (function (){var statearr_28056 = state_28036;
(statearr_28056[(11)] = inst_28028);

return statearr_28056;
})();
var statearr_28057_28083 = state_28036__$1;
(statearr_28057_28083[(2)] = null);

(statearr_28057_28083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (8))){
var inst_27995 = (state_28036[(9)]);
var inst_27999 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27995,opts);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27999)){
var statearr_28058_28084 = state_28036__$1;
(statearr_28058_28084[(1)] = (11));

} else {
var statearr_28059_28085 = state_28036__$1;
(statearr_28059_28085[(1)] = (12));

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
});})(c__23510__auto___28067,ch))
;
return ((function (switch__23398__auto__,c__23510__auto___28067,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23399__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23399__auto____0 = (function (){
var statearr_28063 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28063[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23399__auto__);

(statearr_28063[(1)] = (1));

return statearr_28063;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23399__auto____1 = (function (state_28036){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_28036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e28064){if((e28064 instanceof Object)){
var ex__23402__auto__ = e28064;
var statearr_28065_28086 = state_28036;
(statearr_28065_28086[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28087 = state_28036;
state_28036 = G__28087;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23399__auto__ = function(state_28036){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23399__auto____1.call(this,state_28036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23399__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23399__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___28067,ch))
})();
var state__23512__auto__ = (function (){var statearr_28066 = f__23511__auto__.call(null);
(statearr_28066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___28067);

return statearr_28066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___28067,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28088_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28088_SHARP_));
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
var base_path_28095 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28095){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28093 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28094 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28094;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28093;
}}catch (e28092){if((e28092 instanceof Error)){
var e = e28092;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28095], null));
} else {
var e = e28092;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28095))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28096){
var map__28103 = p__28096;
var map__28103__$1 = ((((!((map__28103 == null)))?((((map__28103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28103):map__28103);
var opts = map__28103__$1;
var build_id = cljs.core.get.call(null,map__28103__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28103,map__28103__$1,opts,build_id){
return (function (p__28105){
var vec__28106 = p__28105;
var map__28107 = cljs.core.nth.call(null,vec__28106,(0),null);
var map__28107__$1 = ((((!((map__28107 == null)))?((((map__28107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28107):map__28107);
var msg = map__28107__$1;
var msg_name = cljs.core.get.call(null,map__28107__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28106,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28106,map__28107,map__28107__$1,msg,msg_name,_,map__28103,map__28103__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28106,map__28107,map__28107__$1,msg,msg_name,_,map__28103,map__28103__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28103,map__28103__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28113){
var vec__28114 = p__28113;
var map__28115 = cljs.core.nth.call(null,vec__28114,(0),null);
var map__28115__$1 = ((((!((map__28115 == null)))?((((map__28115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28115):map__28115);
var msg = map__28115__$1;
var msg_name = cljs.core.get.call(null,map__28115__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28114,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28117){
var map__28127 = p__28117;
var map__28127__$1 = ((((!((map__28127 == null)))?((((map__28127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28127):map__28127);
var on_compile_warning = cljs.core.get.call(null,map__28127__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28127__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28127,map__28127__$1,on_compile_warning,on_compile_fail){
return (function (p__28129){
var vec__28130 = p__28129;
var map__28131 = cljs.core.nth.call(null,vec__28130,(0),null);
var map__28131__$1 = ((((!((map__28131 == null)))?((((map__28131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28131):map__28131);
var msg = map__28131__$1;
var msg_name = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28130,(1));
var pred__28133 = cljs.core._EQ_;
var expr__28134 = msg_name;
if(cljs.core.truth_(pred__28133.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28134))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28133.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28134))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28127,map__28127__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__,msg_hist,msg_names,msg){
return (function (state_28342){
var state_val_28343 = (state_28342[(1)]);
if((state_val_28343 === (7))){
var inst_28270 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28270)){
var statearr_28344_28390 = state_28342__$1;
(statearr_28344_28390[(1)] = (8));

} else {
var statearr_28345_28391 = state_28342__$1;
(statearr_28345_28391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (20))){
var inst_28336 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28346_28392 = state_28342__$1;
(statearr_28346_28392[(2)] = inst_28336);

(statearr_28346_28392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (27))){
var inst_28332 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28347_28393 = state_28342__$1;
(statearr_28347_28393[(2)] = inst_28332);

(statearr_28347_28393[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (1))){
var inst_28263 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28263)){
var statearr_28348_28394 = state_28342__$1;
(statearr_28348_28394[(1)] = (2));

} else {
var statearr_28349_28395 = state_28342__$1;
(statearr_28349_28395[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (24))){
var inst_28334 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28350_28396 = state_28342__$1;
(statearr_28350_28396[(2)] = inst_28334);

(statearr_28350_28396[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (4))){
var inst_28340 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28342__$1,inst_28340);
} else {
if((state_val_28343 === (15))){
var inst_28338 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28351_28397 = state_28342__$1;
(statearr_28351_28397[(2)] = inst_28338);

(statearr_28351_28397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (21))){
var inst_28297 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28352_28398 = state_28342__$1;
(statearr_28352_28398[(2)] = inst_28297);

(statearr_28352_28398[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (31))){
var inst_28321 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28321)){
var statearr_28353_28399 = state_28342__$1;
(statearr_28353_28399[(1)] = (34));

} else {
var statearr_28354_28400 = state_28342__$1;
(statearr_28354_28400[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (32))){
var inst_28330 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28355_28401 = state_28342__$1;
(statearr_28355_28401[(2)] = inst_28330);

(statearr_28355_28401[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (33))){
var inst_28319 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28356_28402 = state_28342__$1;
(statearr_28356_28402[(2)] = inst_28319);

(statearr_28356_28402[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (13))){
var inst_28284 = figwheel.client.heads_up.clear.call(null);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(16),inst_28284);
} else {
if((state_val_28343 === (22))){
var inst_28301 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28302 = figwheel.client.heads_up.append_message.call(null,inst_28301);
var state_28342__$1 = state_28342;
var statearr_28357_28403 = state_28342__$1;
(statearr_28357_28403[(2)] = inst_28302);

(statearr_28357_28403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (36))){
var inst_28328 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28358_28404 = state_28342__$1;
(statearr_28358_28404[(2)] = inst_28328);

(statearr_28358_28404[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (29))){
var inst_28312 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28359_28405 = state_28342__$1;
(statearr_28359_28405[(2)] = inst_28312);

(statearr_28359_28405[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (6))){
var inst_28265 = (state_28342[(7)]);
var state_28342__$1 = state_28342;
var statearr_28360_28406 = state_28342__$1;
(statearr_28360_28406[(2)] = inst_28265);

(statearr_28360_28406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (28))){
var inst_28308 = (state_28342[(2)]);
var inst_28309 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28310 = figwheel.client.heads_up.display_warning.call(null,inst_28309);
var state_28342__$1 = (function (){var statearr_28361 = state_28342;
(statearr_28361[(8)] = inst_28308);

return statearr_28361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(29),inst_28310);
} else {
if((state_val_28343 === (25))){
var inst_28306 = figwheel.client.heads_up.clear.call(null);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(28),inst_28306);
} else {
if((state_val_28343 === (34))){
var inst_28323 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(37),inst_28323);
} else {
if((state_val_28343 === (17))){
var inst_28290 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28362_28407 = state_28342__$1;
(statearr_28362_28407[(2)] = inst_28290);

(statearr_28362_28407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (3))){
var inst_28282 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28282)){
var statearr_28363_28408 = state_28342__$1;
(statearr_28363_28408[(1)] = (13));

} else {
var statearr_28364_28409 = state_28342__$1;
(statearr_28364_28409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (12))){
var inst_28278 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28365_28410 = state_28342__$1;
(statearr_28365_28410[(2)] = inst_28278);

(statearr_28365_28410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (2))){
var inst_28265 = (state_28342[(7)]);
var inst_28265__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28342__$1 = (function (){var statearr_28366 = state_28342;
(statearr_28366[(7)] = inst_28265__$1);

return statearr_28366;
})();
if(cljs.core.truth_(inst_28265__$1)){
var statearr_28367_28411 = state_28342__$1;
(statearr_28367_28411[(1)] = (5));

} else {
var statearr_28368_28412 = state_28342__$1;
(statearr_28368_28412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (23))){
var inst_28304 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28304)){
var statearr_28369_28413 = state_28342__$1;
(statearr_28369_28413[(1)] = (25));

} else {
var statearr_28370_28414 = state_28342__$1;
(statearr_28370_28414[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (35))){
var state_28342__$1 = state_28342;
var statearr_28371_28415 = state_28342__$1;
(statearr_28371_28415[(2)] = null);

(statearr_28371_28415[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (19))){
var inst_28299 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28299)){
var statearr_28372_28416 = state_28342__$1;
(statearr_28372_28416[(1)] = (22));

} else {
var statearr_28373_28417 = state_28342__$1;
(statearr_28373_28417[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (11))){
var inst_28274 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28374_28418 = state_28342__$1;
(statearr_28374_28418[(2)] = inst_28274);

(statearr_28374_28418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (9))){
var inst_28276 = figwheel.client.heads_up.clear.call(null);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(12),inst_28276);
} else {
if((state_val_28343 === (5))){
var inst_28267 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28342__$1 = state_28342;
var statearr_28375_28419 = state_28342__$1;
(statearr_28375_28419[(2)] = inst_28267);

(statearr_28375_28419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (14))){
var inst_28292 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28292)){
var statearr_28376_28420 = state_28342__$1;
(statearr_28376_28420[(1)] = (18));

} else {
var statearr_28377_28421 = state_28342__$1;
(statearr_28377_28421[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (26))){
var inst_28314 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28314)){
var statearr_28378_28422 = state_28342__$1;
(statearr_28378_28422[(1)] = (30));

} else {
var statearr_28379_28423 = state_28342__$1;
(statearr_28379_28423[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (16))){
var inst_28286 = (state_28342[(2)]);
var inst_28287 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28288 = figwheel.client.heads_up.display_exception.call(null,inst_28287);
var state_28342__$1 = (function (){var statearr_28380 = state_28342;
(statearr_28380[(9)] = inst_28286);

return statearr_28380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(17),inst_28288);
} else {
if((state_val_28343 === (30))){
var inst_28316 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28317 = figwheel.client.heads_up.display_warning.call(null,inst_28316);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(33),inst_28317);
} else {
if((state_val_28343 === (10))){
var inst_28280 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28381_28424 = state_28342__$1;
(statearr_28381_28424[(2)] = inst_28280);

(statearr_28381_28424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (18))){
var inst_28294 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28295 = figwheel.client.heads_up.display_exception.call(null,inst_28294);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(21),inst_28295);
} else {
if((state_val_28343 === (37))){
var inst_28325 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28382_28425 = state_28342__$1;
(statearr_28382_28425[(2)] = inst_28325);

(statearr_28382_28425[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (8))){
var inst_28272 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(11),inst_28272);
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
});})(c__23510__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23398__auto__,c__23510__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto____0 = (function (){
var statearr_28386 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28386[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto__);

(statearr_28386[(1)] = (1));

return statearr_28386;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto____1 = (function (state_28342){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_28342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e28387){if((e28387 instanceof Object)){
var ex__23402__auto__ = e28387;
var statearr_28388_28426 = state_28342;
(statearr_28388_28426[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28427 = state_28342;
state_28342 = G__28427;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto__ = function(state_28342){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto____1.call(this,state_28342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__,msg_hist,msg_names,msg))
})();
var state__23512__auto__ = (function (){var statearr_28389 = f__23511__auto__.call(null);
(statearr_28389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_28389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__,msg_hist,msg_names,msg))
);

return c__23510__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23510__auto___28490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto___28490,ch){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto___28490,ch){
return (function (state_28473){
var state_val_28474 = (state_28473[(1)]);
if((state_val_28474 === (1))){
var state_28473__$1 = state_28473;
var statearr_28475_28491 = state_28473__$1;
(statearr_28475_28491[(2)] = null);

(statearr_28475_28491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (2))){
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28473__$1,(4),ch);
} else {
if((state_val_28474 === (3))){
var inst_28471 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28473__$1,inst_28471);
} else {
if((state_val_28474 === (4))){
var inst_28461 = (state_28473[(7)]);
var inst_28461__$1 = (state_28473[(2)]);
var state_28473__$1 = (function (){var statearr_28476 = state_28473;
(statearr_28476[(7)] = inst_28461__$1);

return statearr_28476;
})();
if(cljs.core.truth_(inst_28461__$1)){
var statearr_28477_28492 = state_28473__$1;
(statearr_28477_28492[(1)] = (5));

} else {
var statearr_28478_28493 = state_28473__$1;
(statearr_28478_28493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (5))){
var inst_28461 = (state_28473[(7)]);
var inst_28463 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28461);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28473__$1,(8),inst_28463);
} else {
if((state_val_28474 === (6))){
var state_28473__$1 = state_28473;
var statearr_28479_28494 = state_28473__$1;
(statearr_28479_28494[(2)] = null);

(statearr_28479_28494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (7))){
var inst_28469 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28480_28495 = state_28473__$1;
(statearr_28480_28495[(2)] = inst_28469);

(statearr_28480_28495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (8))){
var inst_28465 = (state_28473[(2)]);
var state_28473__$1 = (function (){var statearr_28481 = state_28473;
(statearr_28481[(8)] = inst_28465);

return statearr_28481;
})();
var statearr_28482_28496 = state_28473__$1;
(statearr_28482_28496[(2)] = null);

(statearr_28482_28496[(1)] = (2));


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
});})(c__23510__auto___28490,ch))
;
return ((function (switch__23398__auto__,c__23510__auto___28490,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23399__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23399__auto____0 = (function (){
var statearr_28486 = [null,null,null,null,null,null,null,null,null];
(statearr_28486[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23399__auto__);

(statearr_28486[(1)] = (1));

return statearr_28486;
});
var figwheel$client$heads_up_plugin_$_state_machine__23399__auto____1 = (function (state_28473){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_28473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e28487){if((e28487 instanceof Object)){
var ex__23402__auto__ = e28487;
var statearr_28488_28497 = state_28473;
(statearr_28488_28497[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28498 = state_28473;
state_28473 = G__28498;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23399__auto__ = function(state_28473){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23399__auto____1.call(this,state_28473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23399__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23399__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto___28490,ch))
})();
var state__23512__auto__ = (function (){var statearr_28489 = f__23511__auto__.call(null);
(statearr_28489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto___28490);

return statearr_28489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto___28490,ch))
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
var c__23510__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23510__auto__){
return (function (){
var f__23511__auto__ = (function (){var switch__23398__auto__ = ((function (c__23510__auto__){
return (function (state_28519){
var state_val_28520 = (state_28519[(1)]);
if((state_val_28520 === (1))){
var inst_28514 = cljs.core.async.timeout.call(null,(3000));
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28519__$1,(2),inst_28514);
} else {
if((state_val_28520 === (2))){
var inst_28516 = (state_28519[(2)]);
var inst_28517 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28519__$1 = (function (){var statearr_28521 = state_28519;
(statearr_28521[(7)] = inst_28516);

return statearr_28521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28519__$1,inst_28517);
} else {
return null;
}
}
});})(c__23510__auto__))
;
return ((function (switch__23398__auto__,c__23510__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23399__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23399__auto____0 = (function (){
var statearr_28525 = [null,null,null,null,null,null,null,null];
(statearr_28525[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23399__auto__);

(statearr_28525[(1)] = (1));

return statearr_28525;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23399__auto____1 = (function (state_28519){
while(true){
var ret_value__23400__auto__ = (function (){try{while(true){
var result__23401__auto__ = switch__23398__auto__.call(null,state_28519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23401__auto__;
}
break;
}
}catch (e28526){if((e28526 instanceof Object)){
var ex__23402__auto__ = e28526;
var statearr_28527_28529 = state_28519;
(statearr_28527_28529[(5)] = ex__23402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28530 = state_28519;
state_28519 = G__28530;
continue;
} else {
return ret_value__23400__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23399__auto__ = function(state_28519){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23399__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23399__auto____1.call(this,state_28519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23399__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23399__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23399__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23399__auto__;
})()
;})(switch__23398__auto__,c__23510__auto__))
})();
var state__23512__auto__ = (function (){var statearr_28528 = f__23511__auto__.call(null);
(statearr_28528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23510__auto__);

return statearr_28528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23512__auto__);
});})(c__23510__auto__))
);

return c__23510__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28531){
var map__28538 = p__28531;
var map__28538__$1 = ((((!((map__28538 == null)))?((((map__28538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28538):map__28538);
var ed = map__28538__$1;
var formatted_exception = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28540_28544 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28541_28545 = null;
var count__28542_28546 = (0);
var i__28543_28547 = (0);
while(true){
if((i__28543_28547 < count__28542_28546)){
var msg_28548 = cljs.core._nth.call(null,chunk__28541_28545,i__28543_28547);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28548);

var G__28549 = seq__28540_28544;
var G__28550 = chunk__28541_28545;
var G__28551 = count__28542_28546;
var G__28552 = (i__28543_28547 + (1));
seq__28540_28544 = G__28549;
chunk__28541_28545 = G__28550;
count__28542_28546 = G__28551;
i__28543_28547 = G__28552;
continue;
} else {
var temp__4657__auto___28553 = cljs.core.seq.call(null,seq__28540_28544);
if(temp__4657__auto___28553){
var seq__28540_28554__$1 = temp__4657__auto___28553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28540_28554__$1)){
var c__22061__auto___28555 = cljs.core.chunk_first.call(null,seq__28540_28554__$1);
var G__28556 = cljs.core.chunk_rest.call(null,seq__28540_28554__$1);
var G__28557 = c__22061__auto___28555;
var G__28558 = cljs.core.count.call(null,c__22061__auto___28555);
var G__28559 = (0);
seq__28540_28544 = G__28556;
chunk__28541_28545 = G__28557;
count__28542_28546 = G__28558;
i__28543_28547 = G__28559;
continue;
} else {
var msg_28560 = cljs.core.first.call(null,seq__28540_28554__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28560);

var G__28561 = cljs.core.next.call(null,seq__28540_28554__$1);
var G__28562 = null;
var G__28563 = (0);
var G__28564 = (0);
seq__28540_28544 = G__28561;
chunk__28541_28545 = G__28562;
count__28542_28546 = G__28563;
i__28543_28547 = G__28564;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28565){
var map__28568 = p__28565;
var map__28568__$1 = ((((!((map__28568 == null)))?((((map__28568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28568):map__28568);
var w = map__28568__$1;
var message = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__21238__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21238__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21238__auto__;
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
var seq__28576 = cljs.core.seq.call(null,plugins);
var chunk__28577 = null;
var count__28578 = (0);
var i__28579 = (0);
while(true){
if((i__28579 < count__28578)){
var vec__28580 = cljs.core._nth.call(null,chunk__28577,i__28579);
var k = cljs.core.nth.call(null,vec__28580,(0),null);
var plugin = cljs.core.nth.call(null,vec__28580,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28582 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28576,chunk__28577,count__28578,i__28579,pl_28582,vec__28580,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28582.call(null,msg_hist);
});})(seq__28576,chunk__28577,count__28578,i__28579,pl_28582,vec__28580,k,plugin))
);
} else {
}

var G__28583 = seq__28576;
var G__28584 = chunk__28577;
var G__28585 = count__28578;
var G__28586 = (i__28579 + (1));
seq__28576 = G__28583;
chunk__28577 = G__28584;
count__28578 = G__28585;
i__28579 = G__28586;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28576);
if(temp__4657__auto__){
var seq__28576__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28576__$1)){
var c__22061__auto__ = cljs.core.chunk_first.call(null,seq__28576__$1);
var G__28587 = cljs.core.chunk_rest.call(null,seq__28576__$1);
var G__28588 = c__22061__auto__;
var G__28589 = cljs.core.count.call(null,c__22061__auto__);
var G__28590 = (0);
seq__28576 = G__28587;
chunk__28577 = G__28588;
count__28578 = G__28589;
i__28579 = G__28590;
continue;
} else {
var vec__28581 = cljs.core.first.call(null,seq__28576__$1);
var k = cljs.core.nth.call(null,vec__28581,(0),null);
var plugin = cljs.core.nth.call(null,vec__28581,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28591 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28576,chunk__28577,count__28578,i__28579,pl_28591,vec__28581,k,plugin,seq__28576__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28591.call(null,msg_hist);
});})(seq__28576,chunk__28577,count__28578,i__28579,pl_28591,vec__28581,k,plugin,seq__28576__$1,temp__4657__auto__))
);
} else {
}

var G__28592 = cljs.core.next.call(null,seq__28576__$1);
var G__28593 = null;
var G__28594 = (0);
var G__28595 = (0);
seq__28576 = G__28592;
chunk__28577 = G__28593;
count__28578 = G__28594;
i__28579 = G__28595;
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
var args28596 = [];
var len__22320__auto___28599 = arguments.length;
var i__22321__auto___28600 = (0);
while(true){
if((i__22321__auto___28600 < len__22320__auto___28599)){
args28596.push((arguments[i__22321__auto___28600]));

var G__28601 = (i__22321__auto___28600 + (1));
i__22321__auto___28600 = G__28601;
continue;
} else {
}
break;
}

var G__28598 = args28596.length;
switch (G__28598) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28596.length)].join('')));

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
var args__22327__auto__ = [];
var len__22320__auto___28607 = arguments.length;
var i__22321__auto___28608 = (0);
while(true){
if((i__22321__auto___28608 < len__22320__auto___28607)){
args__22327__auto__.push((arguments[i__22321__auto___28608]));

var G__28609 = (i__22321__auto___28608 + (1));
i__22321__auto___28608 = G__28609;
continue;
} else {
}
break;
}

var argseq__22328__auto__ = ((((0) < args__22327__auto__.length))?(new cljs.core.IndexedSeq(args__22327__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22328__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28604){
var map__28605 = p__28604;
var map__28605__$1 = ((((!((map__28605 == null)))?((((map__28605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28605):map__28605);
var opts = map__28605__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28603){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28603));
});

//# sourceMappingURL=client.js.map