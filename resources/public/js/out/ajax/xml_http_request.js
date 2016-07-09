// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26281,handler){
var map__26282 = p__26281;
var map__26282__$1 = ((((!((map__26282 == null)))?((((map__26282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26282):map__26282);
var uri = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26282,map__26282__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26280_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__26280_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__26282,map__26282__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___26290 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___26290)){
var response_type_26291 = temp__4657__auto___26290;
this$__$1.responseType = cljs.core.name.call(null,response_type_26291);
} else {
}

var seq__26284_26292 = cljs.core.seq.call(null,headers);
var chunk__26285_26293 = null;
var count__26286_26294 = (0);
var i__26287_26295 = (0);
while(true){
if((i__26287_26295 < count__26286_26294)){
var vec__26288_26296 = cljs.core._nth.call(null,chunk__26285_26293,i__26287_26295);
var k_26297 = cljs.core.nth.call(null,vec__26288_26296,(0),null);
var v_26298 = cljs.core.nth.call(null,vec__26288_26296,(1),null);
this$__$1.setRequestHeader(k_26297,v_26298);

var G__26299 = seq__26284_26292;
var G__26300 = chunk__26285_26293;
var G__26301 = count__26286_26294;
var G__26302 = (i__26287_26295 + (1));
seq__26284_26292 = G__26299;
chunk__26285_26293 = G__26300;
count__26286_26294 = G__26301;
i__26287_26295 = G__26302;
continue;
} else {
var temp__4657__auto___26303 = cljs.core.seq.call(null,seq__26284_26292);
if(temp__4657__auto___26303){
var seq__26284_26304__$1 = temp__4657__auto___26303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26284_26304__$1)){
var c__24858__auto___26305 = cljs.core.chunk_first.call(null,seq__26284_26304__$1);
var G__26306 = cljs.core.chunk_rest.call(null,seq__26284_26304__$1);
var G__26307 = c__24858__auto___26305;
var G__26308 = cljs.core.count.call(null,c__24858__auto___26305);
var G__26309 = (0);
seq__26284_26292 = G__26306;
chunk__26285_26293 = G__26307;
count__26286_26294 = G__26308;
i__26287_26295 = G__26309;
continue;
} else {
var vec__26289_26310 = cljs.core.first.call(null,seq__26284_26304__$1);
var k_26311 = cljs.core.nth.call(null,vec__26289_26310,(0),null);
var v_26312 = cljs.core.nth.call(null,vec__26289_26310,(1),null);
this$__$1.setRequestHeader(k_26311,v_26312);

var G__26313 = cljs.core.next.call(null,seq__26284_26304__$1);
var G__26314 = null;
var G__26315 = (0);
var G__26316 = (0);
seq__26284_26292 = G__26313;
chunk__26285_26293 = G__26314;
count__26286_26294 = G__26315;
i__26287_26295 = G__26316;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__24047__auto__ = body;
if(cljs.core.truth_(or__24047__auto__)){
return or__24047__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map