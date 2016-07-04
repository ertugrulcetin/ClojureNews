// Compiled by ClojureScript 1.8.51 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25056 = arguments.length;
var i__24792__auto___25057 = (0);
while(true){
if((i__24792__auto___25057 < len__24791__auto___25056)){
args__24798__auto__.push((arguments[i__24792__auto___25057]));

var G__25058 = (i__24792__auto___25057 + (1));
i__24792__auto___25057 = G__25058;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((4) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__24799__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){

return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq25051){
var G__25052 = cljs.core.first.call(null,seq25051);
var seq25051__$1 = cljs.core.next.call(null,seq25051);
var G__25053 = cljs.core.first.call(null,seq25051__$1);
var seq25051__$2 = cljs.core.next.call(null,seq25051__$1);
var G__25054 = cljs.core.first.call(null,seq25051__$2);
var seq25051__$3 = cljs.core.next.call(null,seq25051__$2);
var G__25055 = cljs.core.first.call(null,seq25051__$3);
var seq25051__$4 = cljs.core.next.call(null,seq25051__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__25052,G__25053,G__25054,G__25055,seq25051__$4);
});
camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25067 = arguments.length;
var i__24792__auto___25068 = (0);
while(true){
if((i__24792__auto___25068 < len__24791__auto___25067)){
args__24798__auto__.push((arguments[i__24792__auto___25068]));

var G__25069 = (i__24792__auto___25068 + (1));
i__24792__auto___25068 = G__25069;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__25018__auto__,rest__25019__auto__){
var convert_case__25020__auto__ = (function (p1__25017__25021__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__25017__25021__auto__,rest__25019__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25018__auto__,convert_case__25020__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq25059){
var G__25060 = cljs.core.first.call(null,seq25059);
var seq25059__$1 = cljs.core.next.call(null,seq25059);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__25060,seq25059__$1);
});

camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25070 = arguments.length;
var i__24792__auto___25071 = (0);
while(true){
if((i__24792__auto___25071 < len__24791__auto___25070)){
args__24798__auto__.push((arguments[i__24792__auto___25071]));

var G__25072 = (i__24792__auto___25071 + (1));
i__24792__auto___25071 = G__25072;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq25061){
var G__25062 = cljs.core.first.call(null,seq25061);
var seq25061__$1 = cljs.core.next.call(null,seq25061);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__25062,seq25061__$1);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25073 = arguments.length;
var i__24792__auto___25074 = (0);
while(true){
if((i__24792__auto___25074 < len__24791__auto___25073)){
args__24798__auto__.push((arguments[i__24792__auto___25074]));

var G__25075 = (i__24792__auto___25074 + (1));
i__24792__auto___25074 = G__25075;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq25063){
var G__25064 = cljs.core.first.call(null,seq25063);
var seq25063__$1 = cljs.core.next.call(null,seq25063);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__25064,seq25063__$1);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25076 = arguments.length;
var i__24792__auto___25077 = (0);
while(true){
if((i__24792__auto___25077 < len__24791__auto___25076)){
args__24798__auto__.push((arguments[i__24792__auto___25077]));

var G__25078 = (i__24792__auto___25077 + (1));
i__24792__auto___25077 = G__25078;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq25065){
var G__25066 = cljs.core.first.call(null,seq25065);
var seq25065__$1 = cljs.core.next.call(null,seq25065);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__25066,seq25065__$1);
});
camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25087 = arguments.length;
var i__24792__auto___25088 = (0);
while(true){
if((i__24792__auto___25088 < len__24791__auto___25087)){
args__24798__auto__.push((arguments[i__24792__auto___25088]));

var G__25089 = (i__24792__auto___25088 + (1));
i__24792__auto___25088 = G__25089;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__25018__auto__,rest__25019__auto__){
var convert_case__25020__auto__ = (function (p1__25017__25021__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__25017__25021__auto__,rest__25019__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25018__auto__,convert_case__25020__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq25079){
var G__25080 = cljs.core.first.call(null,seq25079);
var seq25079__$1 = cljs.core.next.call(null,seq25079);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__25080,seq25079__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25090 = arguments.length;
var i__24792__auto___25091 = (0);
while(true){
if((i__24792__auto___25091 < len__24791__auto___25090)){
args__24798__auto__.push((arguments[i__24792__auto___25091]));

var G__25092 = (i__24792__auto___25091 + (1));
i__24792__auto___25091 = G__25092;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq25081){
var G__25082 = cljs.core.first.call(null,seq25081);
var seq25081__$1 = cljs.core.next.call(null,seq25081);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__25082,seq25081__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25093 = arguments.length;
var i__24792__auto___25094 = (0);
while(true){
if((i__24792__auto___25094 < len__24791__auto___25093)){
args__24798__auto__.push((arguments[i__24792__auto___25094]));

var G__25095 = (i__24792__auto___25094 + (1));
i__24792__auto___25094 = G__25095;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq25083){
var G__25084 = cljs.core.first.call(null,seq25083);
var seq25083__$1 = cljs.core.next.call(null,seq25083);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__25084,seq25083__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25096 = arguments.length;
var i__24792__auto___25097 = (0);
while(true){
if((i__24792__auto___25097 < len__24791__auto___25096)){
args__24798__auto__.push((arguments[i__24792__auto___25097]));

var G__25098 = (i__24792__auto___25097 + (1));
i__24792__auto___25097 = G__25098;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq25085){
var G__25086 = cljs.core.first.call(null,seq25085);
var seq25085__$1 = cljs.core.next.call(null,seq25085);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__25086,seq25085__$1);
});
camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25107 = arguments.length;
var i__24792__auto___25108 = (0);
while(true){
if((i__24792__auto___25108 < len__24791__auto___25107)){
args__24798__auto__.push((arguments[i__24792__auto___25108]));

var G__25109 = (i__24792__auto___25108 + (1));
i__24792__auto___25108 = G__25109;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__25018__auto__,rest__25019__auto__){
var convert_case__25020__auto__ = (function (p1__25017__25021__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__25017__25021__auto__,rest__25019__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25018__auto__,convert_case__25020__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq25099){
var G__25100 = cljs.core.first.call(null,seq25099);
var seq25099__$1 = cljs.core.next.call(null,seq25099);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__25100,seq25099__$1);
});

camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25110 = arguments.length;
var i__24792__auto___25111 = (0);
while(true){
if((i__24792__auto___25111 < len__24791__auto___25110)){
args__24798__auto__.push((arguments[i__24792__auto___25111]));

var G__25112 = (i__24792__auto___25111 + (1));
i__24792__auto___25111 = G__25112;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq25101){
var G__25102 = cljs.core.first.call(null,seq25101);
var seq25101__$1 = cljs.core.next.call(null,seq25101);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__25102,seq25101__$1);
});

camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25113 = arguments.length;
var i__24792__auto___25114 = (0);
while(true){
if((i__24792__auto___25114 < len__24791__auto___25113)){
args__24798__auto__.push((arguments[i__24792__auto___25114]));

var G__25115 = (i__24792__auto___25114 + (1));
i__24792__auto___25114 = G__25115;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq25103){
var G__25104 = cljs.core.first.call(null,seq25103);
var seq25103__$1 = cljs.core.next.call(null,seq25103);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__25104,seq25103__$1);
});

camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25116 = arguments.length;
var i__24792__auto___25117 = (0);
while(true){
if((i__24792__auto___25117 < len__24791__auto___25116)){
args__24798__auto__.push((arguments[i__24792__auto___25117]));

var G__25118 = (i__24792__auto___25117 + (1));
i__24792__auto___25117 = G__25118;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq25105){
var G__25106 = cljs.core.first.call(null,seq25105);
var seq25105__$1 = cljs.core.next.call(null,seq25105);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__25106,seq25105__$1);
});
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25127 = arguments.length;
var i__24792__auto___25128 = (0);
while(true){
if((i__24792__auto___25128 < len__24791__auto___25127)){
args__24798__auto__.push((arguments[i__24792__auto___25128]));

var G__25129 = (i__24792__auto___25128 + (1));
i__24792__auto___25128 = G__25129;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__25018__auto__,rest__25019__auto__){
var convert_case__25020__auto__ = (function (p1__25017__25021__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__25017__25021__auto__,rest__25019__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25018__auto__,convert_case__25020__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq25119){
var G__25120 = cljs.core.first.call(null,seq25119);
var seq25119__$1 = cljs.core.next.call(null,seq25119);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__25120,seq25119__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25130 = arguments.length;
var i__24792__auto___25131 = (0);
while(true){
if((i__24792__auto___25131 < len__24791__auto___25130)){
args__24798__auto__.push((arguments[i__24792__auto___25131]));

var G__25132 = (i__24792__auto___25131 + (1));
i__24792__auto___25131 = G__25132;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq25121){
var G__25122 = cljs.core.first.call(null,seq25121);
var seq25121__$1 = cljs.core.next.call(null,seq25121);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__25122,seq25121__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25133 = arguments.length;
var i__24792__auto___25134 = (0);
while(true){
if((i__24792__auto___25134 < len__24791__auto___25133)){
args__24798__auto__.push((arguments[i__24792__auto___25134]));

var G__25135 = (i__24792__auto___25134 + (1));
i__24792__auto___25134 = G__25135;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq25123){
var G__25124 = cljs.core.first.call(null,seq25123);
var seq25123__$1 = cljs.core.next.call(null,seq25123);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__25124,seq25123__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25136 = arguments.length;
var i__24792__auto___25137 = (0);
while(true){
if((i__24792__auto___25137 < len__24791__auto___25136)){
args__24798__auto__.push((arguments[i__24792__auto___25137]));

var G__25138 = (i__24792__auto___25137 + (1));
i__24792__auto___25137 = G__25138;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq25125){
var G__25126 = cljs.core.first.call(null,seq25125);
var seq25125__$1 = cljs.core.next.call(null,seq25125);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__25126,seq25125__$1);
});
camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25147 = arguments.length;
var i__24792__auto___25148 = (0);
while(true){
if((i__24792__auto___25148 < len__24791__auto___25147)){
args__24798__auto__.push((arguments[i__24792__auto___25148]));

var G__25149 = (i__24792__auto___25148 + (1));
i__24792__auto___25148 = G__25149;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__25018__auto__,rest__25019__auto__){
var convert_case__25020__auto__ = (function (p1__25017__25021__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__25017__25021__auto__,rest__25019__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25018__auto__,convert_case__25020__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq25139){
var G__25140 = cljs.core.first.call(null,seq25139);
var seq25139__$1 = cljs.core.next.call(null,seq25139);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__25140,seq25139__$1);
});

camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25150 = arguments.length;
var i__24792__auto___25151 = (0);
while(true){
if((i__24792__auto___25151 < len__24791__auto___25150)){
args__24798__auto__.push((arguments[i__24792__auto___25151]));

var G__25152 = (i__24792__auto___25151 + (1));
i__24792__auto___25151 = G__25152;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq25141){
var G__25142 = cljs.core.first.call(null,seq25141);
var seq25141__$1 = cljs.core.next.call(null,seq25141);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__25142,seq25141__$1);
});

camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25153 = arguments.length;
var i__24792__auto___25154 = (0);
while(true){
if((i__24792__auto___25154 < len__24791__auto___25153)){
args__24798__auto__.push((arguments[i__24792__auto___25154]));

var G__25155 = (i__24792__auto___25154 + (1));
i__24792__auto___25154 = G__25155;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq25143){
var G__25144 = cljs.core.first.call(null,seq25143);
var seq25143__$1 = cljs.core.next.call(null,seq25143);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__25144,seq25143__$1);
});

camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25156 = arguments.length;
var i__24792__auto___25157 = (0);
while(true){
if((i__24792__auto___25157 < len__24791__auto___25156)){
args__24798__auto__.push((arguments[i__24792__auto___25157]));

var G__25158 = (i__24792__auto___25157 + (1));
i__24792__auto___25157 = G__25158;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq25145){
var G__25146 = cljs.core.first.call(null,seq25145);
var seq25145__$1 = cljs.core.next.call(null,seq25145);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__25146,seq25145__$1);
});
camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25167 = arguments.length;
var i__24792__auto___25168 = (0);
while(true){
if((i__24792__auto___25168 < len__24791__auto___25167)){
args__24798__auto__.push((arguments[i__24792__auto___25168]));

var G__25169 = (i__24792__auto___25168 + (1));
i__24792__auto___25168 = G__25169;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__25018__auto__,rest__25019__auto__){
var convert_case__25020__auto__ = (function (p1__25017__25021__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__25017__25021__auto__,rest__25019__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25018__auto__,convert_case__25020__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq25159){
var G__25160 = cljs.core.first.call(null,seq25159);
var seq25159__$1 = cljs.core.next.call(null,seq25159);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__25160,seq25159__$1);
});

camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25170 = arguments.length;
var i__24792__auto___25171 = (0);
while(true){
if((i__24792__auto___25171 < len__24791__auto___25170)){
args__24798__auto__.push((arguments[i__24792__auto___25171]));

var G__25172 = (i__24792__auto___25171 + (1));
i__24792__auto___25171 = G__25172;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq25161){
var G__25162 = cljs.core.first.call(null,seq25161);
var seq25161__$1 = cljs.core.next.call(null,seq25161);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__25162,seq25161__$1);
});

camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25173 = arguments.length;
var i__24792__auto___25174 = (0);
while(true){
if((i__24792__auto___25174 < len__24791__auto___25173)){
args__24798__auto__.push((arguments[i__24792__auto___25174]));

var G__25175 = (i__24792__auto___25174 + (1));
i__24792__auto___25174 = G__25175;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq25163){
var G__25164 = cljs.core.first.call(null,seq25163);
var seq25163__$1 = cljs.core.next.call(null,seq25163);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__25164,seq25163__$1);
});

camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25176 = arguments.length;
var i__24792__auto___25177 = (0);
while(true){
if((i__24792__auto___25177 < len__24791__auto___25176)){
args__24798__auto__.push((arguments[i__24792__auto___25177]));

var G__25178 = (i__24792__auto___25177 + (1));
i__24792__auto___25177 = G__25178;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq25165){
var G__25166 = cljs.core.first.call(null,seq25165);
var seq25165__$1 = cljs.core.next.call(null,seq25165);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__25166,seq25165__$1);
});
camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25187 = arguments.length;
var i__24792__auto___25188 = (0);
while(true){
if((i__24792__auto___25188 < len__24791__auto___25187)){
args__24798__auto__.push((arguments[i__24792__auto___25188]));

var G__25189 = (i__24792__auto___25188 + (1));
i__24792__auto___25188 = G__25189;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__25018__auto__,rest__25019__auto__){
var convert_case__25020__auto__ = (function (p1__25017__25021__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__25017__25021__auto__,rest__25019__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25018__auto__,convert_case__25020__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq25179){
var G__25180 = cljs.core.first.call(null,seq25179);
var seq25179__$1 = cljs.core.next.call(null,seq25179);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__25180,seq25179__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25190 = arguments.length;
var i__24792__auto___25191 = (0);
while(true){
if((i__24792__auto___25191 < len__24791__auto___25190)){
args__24798__auto__.push((arguments[i__24792__auto___25191]));

var G__25192 = (i__24792__auto___25191 + (1));
i__24792__auto___25191 = G__25192;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq25181){
var G__25182 = cljs.core.first.call(null,seq25181);
var seq25181__$1 = cljs.core.next.call(null,seq25181);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__25182,seq25181__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25193 = arguments.length;
var i__24792__auto___25194 = (0);
while(true){
if((i__24792__auto___25194 < len__24791__auto___25193)){
args__24798__auto__.push((arguments[i__24792__auto___25194]));

var G__25195 = (i__24792__auto___25194 + (1));
i__24792__auto___25194 = G__25195;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq25183){
var G__25184 = cljs.core.first.call(null,seq25183);
var seq25183__$1 = cljs.core.next.call(null,seq25183);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__25184,seq25183__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__24798__auto__ = [];
var len__24791__auto___25196 = arguments.length;
var i__24792__auto___25197 = (0);
while(true){
if((i__24792__auto___25197 < len__24791__auto___25196)){
args__24798__auto__.push((arguments[i__24792__auto___25197]));

var G__25198 = (i__24792__auto___25197 + (1));
i__24792__auto___25197 = G__25198;
continue;
} else {
}
break;
}

var argseq__24799__auto__ = ((((1) < args__24798__auto__.length))?(new cljs.core.IndexedSeq(args__24798__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24799__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25023__auto__,rest__25024__auto__){
if(!((s__25023__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25023__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__25023__auto__),rest__25024__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq25185){
var G__25186 = cljs.core.first.call(null,seq25185);
var seq25185__$1 = cljs.core.next.call(null,seq25185);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__25186,seq25185__$1);
});

//# sourceMappingURL=core.js.map