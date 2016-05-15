// Compiled by ClojureScript 1.8.40 {}
goog.provide('multi_ex');
goog.require('cljs.core');
if(typeof multi_ex.say_hello !== 'undefined'){
} else {
multi_ex.say_hello = (function (){var method_table__19238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19241__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19242__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"multi-ex","say-hello"),((function (method_table__19238__auto__,prefer_table__19239__auto__,method_cache__19240__auto__,cached_hierarchy__19241__auto__,hierarchy__19242__auto__){
return (function (person){
return new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(person);
});})(method_table__19238__auto__,prefer_table__19239__auto__,method_cache__19240__auto__,cached_hierarchy__19241__auto__,hierarchy__19242__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19242__auto__,method_table__19238__auto__,prefer_table__19239__auto__,method_cache__19240__auto__,cached_hierarchy__19241__auto__));
})();
}
multi_ex.person_en = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"ertu",new cljs.core.Keyword(null,"surname","surname",1407918027),"\u00E7etin",new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null);
multi_ex.person_esp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gomez",new cljs.core.Keyword(null,"surname","surname",1407918027),"peo",new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"esp","esp",2025700358)], null);
cljs.core._add_method.call(null,multi_ex.say_english,new cljs.core.Keyword(null,"en","en",88457073),(function (person){
var map__20589 = person;
var map__20589__$1 = ((((!((map__20589 == null)))?((((map__20589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20589):map__20589);
var name = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
var lang = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
cljs.core.println.call(null,"Name is: ",name);

cljs.core.println.call(null,"Surname is: ",surname);

return cljs.core.println.call(null,"Lang is: ",lang);
}));
cljs.core._add_method.call(null,multi_ex.say_esp,new cljs.core.Keyword(null,"esp","esp",2025700358),(function (person){
return cljs.core.println.call(null,"Espp!!!!");
}));

//# sourceMappingURL=multi_ex.js.map