// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22385,handler){
var map__22386 = p__22385;
var map__22386__$1 = ((((!((map__22386 == null)))?((((map__22386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22386):map__22386);
var uri = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22386,map__22386__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22384_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22384_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22386,map__22386__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___22394 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___22394)){
var response_type_22395 = temp__4657__auto___22394;
this$__$1.responseType = cljs.core.name.call(null,response_type_22395);
} else {
}

var seq__22388_22396 = cljs.core.seq.call(null,headers);
var chunk__22389_22397 = null;
var count__22390_22398 = (0);
var i__22391_22399 = (0);
while(true){
if((i__22391_22399 < count__22390_22398)){
var vec__22392_22400 = cljs.core._nth.call(null,chunk__22389_22397,i__22391_22399);
var k_22401 = cljs.core.nth.call(null,vec__22392_22400,(0),null);
var v_22402 = cljs.core.nth.call(null,vec__22392_22400,(1),null);
this$__$1.setRequestHeader(k_22401,v_22402);

var G__22403 = seq__22388_22396;
var G__22404 = chunk__22389_22397;
var G__22405 = count__22390_22398;
var G__22406 = (i__22391_22399 + (1));
seq__22388_22396 = G__22403;
chunk__22389_22397 = G__22404;
count__22390_22398 = G__22405;
i__22391_22399 = G__22406;
continue;
} else {
var temp__4657__auto___22407 = cljs.core.seq.call(null,seq__22388_22396);
if(temp__4657__auto___22407){
var seq__22388_22408__$1 = temp__4657__auto___22407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22388_22408__$1)){
var c__22061__auto___22409 = cljs.core.chunk_first.call(null,seq__22388_22408__$1);
var G__22410 = cljs.core.chunk_rest.call(null,seq__22388_22408__$1);
var G__22411 = c__22061__auto___22409;
var G__22412 = cljs.core.count.call(null,c__22061__auto___22409);
var G__22413 = (0);
seq__22388_22396 = G__22410;
chunk__22389_22397 = G__22411;
count__22390_22398 = G__22412;
i__22391_22399 = G__22413;
continue;
} else {
var vec__22393_22414 = cljs.core.first.call(null,seq__22388_22408__$1);
var k_22415 = cljs.core.nth.call(null,vec__22393_22414,(0),null);
var v_22416 = cljs.core.nth.call(null,vec__22393_22414,(1),null);
this$__$1.setRequestHeader(k_22415,v_22416);

var G__22417 = cljs.core.next.call(null,seq__22388_22408__$1);
var G__22418 = null;
var G__22419 = (0);
var G__22420 = (0);
seq__22388_22396 = G__22417;
chunk__22389_22397 = G__22418;
count__22390_22398 = G__22419;
i__22391_22399 = G__22420;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__21250__auto__ = body;
if(cljs.core.truth_(or__21250__auto__)){
return or__21250__auto__;
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