// Compiled by ClojureScript 1.8.51 {}
goog.provide('view.page_top');
goog.require('cljs.core');
goog.require('controller.login');
view.page_top.comp_log_in = (function view$page_top$comp_log_in(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pagetopwhite","a.pagetopwhite",-1031271588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"loginId",new cljs.core.Keyword(null,"href","href",-793805698),"/#/login"], null),"login"], null);
});
view.page_top.comp_username_log_out = (function view$page_top$comp_username_log_out(username,karma){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pagetopwhite","a.pagetopwhite",-1031271588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/user/"),cljs.core.str(username)].join('')], null),username], null),[cljs.core.str(" ("),cljs.core.str(karma),cljs.core.str(") | ")].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return controller.login.log_out.call(null);
})], null),"logout"], null)], null);
});

//# sourceMappingURL=page_top.js.map