(globalThis["webpackChunkplanning_poker"]=globalThis["webpackChunkplanning_poker"]||[]).push([[910],{9662:(t,e,r)=>{var n=r(614),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},6077:(t,e,r)=>{var n=r(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1223:(t,e,r)=>{var n=r(5112),o=r(30),i=r(3070).f,a=n("unscopables"),s=Array.prototype;void 0==s[a]&&i(s,a,{configurable:!0,value:o(null)}),t.exports=function(t){s[a][t]=!0}},5787:(t,e,r)=>{var n=r(7976),o=TypeError;t.exports=function(t,e){if(n(e,t))return t;throw o("Incorrect invocation")}},9670:(t,e,r)=>{var n=r(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},3013:t=>{t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:(t,e,r)=>{"use strict";var n,o,i,a=r(3013),s=r(9781),c=r(7854),u=r(614),h=r(111),f=r(2597),l=r(648),p=r(6330),d=r(8880),g=r(8052),v=r(7045),b=r(7976),m=r(9518),y=r(7674),E=r(5112),_=r(9711),w=r(9909),S=w.enforce,I=w.get,A=c.Int8Array,O=A&&A.prototype,D=c.Uint8ClampedArray,C=D&&D.prototype,R=A&&m(A),T=O&&m(O),x=Object.prototype,N=c.TypeError,P=E("toStringTag"),j=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",k=a&&!!y&&"Opera"!==l(c.opera),B=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},F=function(t){if(!h(t))return!1;var e=l(t);return"DataView"===e||f(M,e)||f(U,e)},H=function(t){var e=m(t);if(h(e)){var r=I(e);return r&&f(r,L)?r[L]:H(e)}},V=function(t){if(!h(t))return!1;var e=l(t);return f(M,e)||f(U,e)},$=function(t){if(V(t))return t;throw N("Target is not a typed array")},z=function(t){if(u(t)&&(!y||b(R,t)))return t;throw N(p(t)+" is not a typed array constructor")},W=function(t,e,r,n){if(s){if(r)for(var o in M){var i=c[o];if(i&&f(i.prototype,t))try{delete i.prototype[t]}catch(a){try{i.prototype[t]=e}catch(u){}}}T[t]&&!r||g(T,t,r?e:k&&O[t]||e,n)}},G=function(t,e,r){var n,o;if(s){if(y){if(r)for(n in M)if(o=c[n],o&&f(o,t))try{delete o[t]}catch(i){}if(R[t]&&!r)return;try{return g(R,t,r?e:k&&R[t]||e)}catch(i){}}for(n in M)o=c[n],!o||o[t]&&!r||g(o,t,e)}};for(n in M)o=c[n],i=o&&o.prototype,i?S(i)[L]=o:k=!1;for(n in U)o=c[n],i=o&&o.prototype,i&&(S(i)[L]=o);if((!k||!u(R)||R===Function.prototype)&&(R=function(){throw N("Incorrect invocation")},k))for(n in M)c[n]&&y(c[n],R);if((!k||!T||T===x)&&(T=R.prototype,k))for(n in M)c[n]&&y(c[n].prototype,T);if(k&&m(C)!==T&&y(C,T),s&&!f(T,P))for(n in B=!0,v(T,P,{configurable:!0,get:function(){return h(this)?this[j]:void 0}}),M)c[n]&&d(c[n],j,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:k,TYPED_ARRAY_TAG:B&&j,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:H,isView:F,isTypedArray:V,TypedArray:R,TypedArrayPrototype:T}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),a=function(t){return function(e,r,a){var s,c=n(e),u=i(c),h=o(a,u);if(t&&r!=r){while(u>h)if(s=c[h++],s!=s)return!0}else for(;u>h;h++)if((t||h in c)&&c[h]===r)return t||h||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(1694),o=r(614),i=r(4326),a=r(5112),s=a("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(r){}};t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=h(e=c(t),s))?r:u?i(e):"Object"==(n=i(e))&&o(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e,r){for(var s=o(e),c=a.f,u=i.f,h=0;h<s.length;h++){var f=s[h];n(t,f)||r&&n(r,f)||c(t,f,u(e,f))}}},8544:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7045:(t,e,r)=>{var n=r(6339),o=r(3070);t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),o.f(t,e,r)}},8052:(t,e,r)=>{var n=r(614),o=r(3070),i=r(6339),a=r(3072);t.exports=function(t,e,r,s){s||(s={});var c=s.enumerable,u=void 0!==s.name?s.name:e;if(n(r)&&i(r,u,s),s.global)c?t[e]=r:a(e,r);else{try{s.unsafe?t[e]&&(c=!0):delete t[e]}catch(h){}c?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return t}},3072:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:t=>{var e="object"==typeof document&&document.all,r="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:r}},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},3678:t=>{t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),s=i.process,c=i.Deno,u=s&&s.versions||c&&c.version,h=u&&u.v8;h&&(n=h.split("."),o=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(n=a.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/),n&&(o=+n[1]))),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:(t,e,r)=>{var n=r(1702),o=Error,i=n("".replace),a=function(t){return String(o(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,c=s.test(a);t.exports=function(t,e){if(c&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=i(t,s,"");return t}},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(8052),s=r(3072),c=r(9920),u=r(4705);t.exports=function(t,e){var r,h,f,l,p,d,g=t.target,v=t.global,b=t.stat;if(h=v?n:b?n[g]||s(g,{}):(n[g]||{}).prototype,h)for(f in e){if(p=e[f],t.dontCallGetSet?(d=o(h,f),l=d&&d.value):l=h[f],r=u(v?f:g+(b?".":"#")+f,t.forced),!r&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(h,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,s=o(i,"name"),c=s&&"something"===function(){}.name,u=s&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:s,PROPER:c,CONFIGURABLE:u}},5668:(t,e,r)=>{var n=r(1702),o=r(9662);t.exports=function(t,e,r){try{return n(o(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(i){}}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.call,a=n&&o.bind.bind(i,i);t.exports=n?a:function(t){return function(){return i.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662),o=r(8554);t.exports=function(t,e){var r=t[e];return o(r)?void 0:n(r)}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||this||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(4326),a=Object,s=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?s(t,""):a(t)}:a},9587:(t,e,r)=>{var n=r(614),o=r(111),i=r(7674);t.exports=function(t,e,r){var a,s;return i&&n(a=e.constructor)&&a!==r&&o(s=a.prototype)&&s!==r.prototype&&i(t,s),t}},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(4811),s=r(7854),c=r(111),u=r(8880),h=r(2597),f=r(5465),l=r(6200),p=r(3501),d="Object already initialized",g=s.TypeError,v=s.WeakMap,b=function(t){return i(t)?o(t):n(t,{})},m=function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}};if(a||f.state){var y=f.state||(f.state=new v);y.get=y.get,y.has=y.has,y.set=y.set,n=function(t,e){if(y.has(t))throw g(d);return e.facade=t,y.set(t,e),e},o=function(t){return y.get(t)||{}},i=function(t){return y.has(t)}}else{var E=l("state");p[E]=!0,n=function(t,e){if(h(t,E))throw g(d);return e.facade=t,u(t,E,e),e},o=function(t){return h(t,E)?t[E]:{}},i=function(t){return h(t,E)}}t.exports={set:n,get:o,has:i,enforce:b,getterFor:m}},614:(t,e,r)=>{var n=r(4154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,a=function(t,e){var r=c[s(t)];return r==h||r!=u&&(o(e)?n(e):!!e)},s=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",h=a.POLYFILL="P";t.exports=a},8554:t=>{t.exports=function(t){return null===t||void 0===t}},111:(t,e,r)=>{var n=r(614),o=r(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===i}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(5005),o=r(614),i=r(7976),a=r(3307),s=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&i(e.prototype,s(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},6339:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),a=r(2597),s=r(9781),c=r(6530).CONFIGURABLE,u=r(2788),h=r(9909),f=h.enforce,l=h.get,p=String,d=Object.defineProperty,g=n("".slice),v=n("".replace),b=n([].join),m=s&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),y=String(String).split("String"),E=t.exports=function(t,e,r){"Symbol("===g(p(e),0,7)&&(e="["+v(p(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!a(t,"name")||c&&t.name!==e)&&(s?d(t,"name",{value:e,configurable:!0}):t.name=e),m&&r&&a(r,"arity")&&t.length!==r.arity&&d(t,"length",{value:r.arity});try{r&&a(r,"constructor")&&r.constructor?s&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var n=f(t);return a(n,"source")||(n.source=b(y,"string"==typeof e?e:"")),t};Function.prototype.toString=E((function(){return i(this)&&l(this).source||u(this)}),"toString")},4758:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},6277:(t,e,r)=>{var n=r(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},30:(t,e,r)=>{var n,o=r(9670),i=r(6048),a=r(748),s=r(3501),c=r(490),u=r(317),h=r(6200),f=">",l="<",p="prototype",d="script",g=h("IE_PROTO"),v=function(){},b=function(t){return l+d+f+t+l+"/"+d+f},m=function(t){t.write(b("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=u("iframe"),r="java"+d+":";return e.style.display="none",c.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(b("document.F=Object")),t.close(),t.F},E=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}E="undefined"!=typeof document?document.domain&&n?m(n):y():m(n);var t=a.length;while(t--)delete E[p][a[t]];return E()};s[g]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(v[p]=o(t),r=new v,v[p]=null,r[g]=t):r=E(),void 0===e?r:i.f(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3353),i=r(3070),a=r(9670),s=r(5656),c=r(1956);e.f=n&&!o?Object.defineProperties:function(t,e){a(t);var r,n=s(e),o=c(e),u=o.length,h=0;while(u>h)i.f(t,r=o[h++],n[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(3353),a=r(9670),s=r(4948),c=TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f="enumerable",l="configurable",p="writable";e.f=n?i?function(t,e,r){if(a(t),e=s(e),a(r),"function"===typeof t&&"prototype"===e&&"value"in r&&p in r&&!r[p]){var n=h(t,e);n&&n[p]&&(t[e]=r.value,r={configurable:l in r?r[l]:n[l],enumerable:f in r?r[f]:n[f],writable:!1})}return u(t,e,r)}:u:function(t,e,r){if(a(t),e=s(e),a(r),o)try{return u(t,e,r)}catch(n){}if("get"in r||"set"in r)throw c("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),a=r(9114),s=r(5656),c=r(4948),u=r(2597),h=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=s(t),e=c(e),h)try{return f(t,e)}catch(r){}if(u(t,e))return a(!o(i.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},9518:(t,e,r)=>{var n=r(2597),o=r(614),i=r(7908),a=r(6200),s=r(8544),c=a("IE_PROTO"),u=Object,h=u.prototype;t.exports=s?u.getPrototypeOf:function(t){var e=i(t);if(n(e,c))return e[c];var r=e.constructor;return o(r)&&e instanceof r?r.prototype:e instanceof u?h:null}},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),a=r(1318).indexOf,s=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),u=0,h=[];for(r in n)!o(s,r)&&o(n,r)&&c(h,r);while(e.length>u)o(n,r=e[u++])&&(~a(h,r)||c(h,r));return h}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:(t,e,r)=>{var n=r(5668),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=n(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch(a){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},2140:(t,e,r)=>{var n=r(6916),o=r(614),i=r(111),a=TypeError;t.exports=function(t,e){var r,s;if("string"===e&&o(r=t.toString)&&!i(s=n(r,t)))return s;if(o(r=t.valueOf)&&!i(s=n(r,t)))return s;if("string"!==e&&o(r=t.toString)&&!i(s=n(r,t)))return s;throw a("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),a=r(5181),s=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(s(t)),r=a.f;return r?c(e,r(t)):e}},4488:(t,e,r)=>{var n=r(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.31.1",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:(t,e,r)=>{var n=r(7392),o=r(7293),i=r(7854),a=i.String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!a(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:(t,e,r)=>{var n=r(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,e,r)=>{var n=r(6916),o=r(111),i=r(2190),a=r(8173),s=r(2140),c=r(5112),u=TypeError,h=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var r,c=a(t,h);if(c){if(void 0===e&&(e="default"),r=n(c,t,e),!o(r)||i(r))return r;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n=r(5112),o=n("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},1340:(t,e,r)=>{var n=r(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:t=>{var e=String;t.exports=function(t){try{return e(t)}catch(r){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,e,r)=>{var n=r(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:(t,e,r)=>{var n=r(7854),o=r(614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),a=r(9711),s=r(6293),c=r(3307),u=n.Symbol,h=o("wks"),f=c?u["for"]||u:u&&u.withoutSetter||a;t.exports=function(t){return i(h,t)||(h[t]=s&&i(u,t)?u[t]:f("Symbol."+t)),h[t]}},2262:(t,e,r)=>{"use strict";var n=r(2109),o=r(7908),i=r(6244),a=r(9303),s=r(1223);n({target:"Array",proto:!0},{at:function(t){var e=o(this),r=i(e),n=a(t),s=n>=0?n:r+n;return s<0||s>=r?void 0:e[s]}}),s("at")},4506:(t,e,r)=>{"use strict";var n=r(2109),o=r(1702),i=r(4488),a=r(9303),s=r(1340),c=r(7293),u=o("".charAt),h=c((function(){return"\ud842"!=="𠮷".at(-2)}));n({target:"String",proto:!0,forced:h},{at:function(t){var e=s(i(this)),r=e.length,n=a(t),o=n>=0?n:r+n;return o<0||o>=r?void 0:u(e,o)}})},8675:(t,e,r)=>{"use strict";var n=r(260),o=r(6244),i=r(9303),a=n.aTypedArray,s=n.exportTypedArrayMethod;s("at",(function(t){var e=a(this),r=o(e),n=i(t),s=n>=0?n:r+n;return s<0||s>=r?void 0:e[s]}))},2801:(t,e,r)=>{"use strict";var n=r(2109),o=r(7854),i=r(5005),a=r(9114),s=r(3070).f,c=r(2597),u=r(5787),h=r(9587),f=r(6277),l=r(3678),p=r(1060),d=r(9781),g=r(1913),v="DOMException",b=i("Error"),m=i(v),y=function(){u(this,E);var t=arguments.length,e=f(t<1?void 0:arguments[0]),r=f(t<2?void 0:arguments[1],"Error"),n=new m(e,r),o=b(e);return o.name=v,s(n,"stack",a(1,p(o.stack,1))),h(n,this,y),n},E=y.prototype=m.prototype,_="stack"in b(v),w="stack"in new m(1,2),S=m&&d&&Object.getOwnPropertyDescriptor(o,v),I=!!S&&!(S.writable&&S.configurable),A=_&&!I&&!w;n({global:!0,constructor:!0,forced:g||A},{DOMException:A?y:m});var O=i(v),D=O.prototype;if(D.constructor!==O)for(var C in g||s(D,"constructor",a(1,O)),l)if(c(l,C)){var R=l[C],T=R.s;c(O,T)||s(O,T,a(6,R.c))}},223:(t,e,r)=>{"use strict";r.d(e,{BH:()=>A,DV:()=>G,GJ:()=>z,L:()=>f,LL:()=>B,P0:()=>w,Pz:()=>I,Sg:()=>O,UI:()=>J,US:()=>c,Wl:()=>H,Yr:()=>N,ZR:()=>k,aH:()=>S,b$:()=>T,cI:()=>F,dS:()=>at,eu:()=>j,g5:()=>i,gK:()=>it,gQ:()=>tt,h$:()=>h,hl:()=>P,hu:()=>o,m9:()=>ct,ne:()=>et,p$:()=>p,pd:()=>Q,q4:()=>_,r3:()=>W,ru:()=>R,tV:()=>l,uI:()=>C,ug:()=>st,vZ:()=>K,w1:()=>x,w9:()=>$,xO:()=>X,xb:()=>Y,z$:()=>D,zd:()=>q});r(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(t,e){if(!t)throw i(e)},i=function(t){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},a=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=63&o|128):55296===(64512&o)&&n+1<t.length&&56320===(64512&t.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++n)),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=63&o|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=63&o|128)}return e},s=function(t){const e=[];let r=0,n=0;while(r<t.length){const o=t[r++];if(o<128)e[n++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[r++];e[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=t[r++],a=t[r++],s=t[r++],c=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(1023&c))}else{const i=t[r++],a=t[r++];e[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<t.length;o+=3){const e=t[o],i=o+1<t.length,a=i?t[o+1]:0,s=o+2<t.length,c=s?t[o+2]:0,u=e>>2,h=(3&e)<<4|a>>4;let f=(15&a)<<2|c>>6,l=63&c;s||(l=64,i||(f=64)),n.push(r[u],r[h],r[f],r[l])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<t.length;){const e=r[t.charAt(o++)],i=o<t.length,a=i?r[t.charAt(o)]:0;++o;const s=o<t.length,c=s?r[t.charAt(o)]:64;++o;const h=o<t.length,f=h?r[t.charAt(o)]:64;if(++o,null==e||null==a||null==c||null==f)throw new u;const l=e<<2|a>>4;if(n.push(l),64!==c){const t=a<<4&240|c>>2;if(n.push(t),64!==f){const t=c<<6&192|f;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h=function(t){const e=a(t);return c.encodeByteArray(e,!0)},f=function(t){return h(t).replace(/\./g,"")},l=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(t){return d(void 0,t)}function d(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const r=e;return new Date(r.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const r in e)e.hasOwnProperty(r)&&g(r)&&(t[r]=d(t[r],e[r]));return t}function g(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof r.g)return r.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=()=>v().__FIREBASE_DEFAULTS__,m=()=>{if("undefined"===typeof process)return;const t={VUE_APP_FIREBASE_PROJECT_ID:"poker-cae60",VUE_APP_FIREBASE_APP_ID:"1:616528146779:web:eea5c91b98723c4db32a7e",VUE_APP_API_HOST:"https://us-central1-poker-cae60.cloudfunctions.net",VUE_APP_FIREBASE_API_KEY:"AIzaSyA7QBjytBGmfm6Y01LntNw8tAWTcm1JoF8",VUE_APP_FIREBASE_DATABASE_URL:"https://poker-cae60-default-rtdb.firebaseio.com",VUE_APP_FIREBASE_MESSAGING_ID:"616528146779",VUE_APP_FIREBASE_BUCKET:"poker-cae60.appspot.com",VUE_APP_FIREBASE_MEASUREMENT_ID:"G-L41JVFD4P7",VUE_APP_FIREBASE_AUTH_DOMAIN:"poker-cae60.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/poker/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},y=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(r){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},E=()=>{try{return b()||m()||y()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},_=t=>{var e,r;return null===(r=null===(e=E())||void 0===e?void 0:e.emulatorHosts)||void 0===r?void 0:r[t]},w=t=>{const e=_(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return"["===e[0]?[e.substring(1,r-1),n]:[e.substring(0,r),n]},S=()=>{var t;return null===(t=E())||void 0===t?void 0:t.config},I=t=>{var e;return null===(e=E())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,r))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",o=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),s="";return[f(JSON.stringify(r)),f(JSON.stringify(a)),s].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function C(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())}function R(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function x(){const t=D();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN}function P(){try{return"object"===typeof indexedDB}catch(t){return!1}}function j(){return new Promise(((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var t;e((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(r){e(r)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L="FirebaseError";class k extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=L,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,B.prototype.create)}}class B{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},n=`${this.service}/${t}`,o=this.errors[t],i=o?M(o,r):"Error",a=`${this.serviceName}: ${i} (${n}).`,s=new k(n,a,r);return s}}function M(t,e){return t.replace(U,((t,r)=>{const n=e[r];return null!=n?String(n):`<${r}?>`}))}const U=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return JSON.parse(t)}function H(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t){let e={},r={},n={},o="";try{const i=t.split(".");e=F(l(i[0])||""),r=F(l(i[1])||""),o=i[2],n=r["d"]||{},delete r["d"]}catch(i){}return{header:e,claims:r,data:n,signature:o}},$=function(t){const e=V(t),r=e.claims;return!!r&&"object"===typeof r&&r.hasOwnProperty("iat")},z=function(t){const e=V(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function G(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function Y(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function J(t,e,r){const n={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=e.call(r,t[o],o,t));return n}function K(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const o of r){if(!n.includes(o))return!1;const r=t[o],i=e[o];if(Z(r)&&Z(i)){if(!K(r,i))return!1}else if(r!==i)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function Z(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach((t=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function q(t){const e={},r=t.replace(/^\?/,"").split("&");return r.forEach((t=>{if(t){const[r,n]=t.split("=");e[decodeURIComponent(r)]=decodeURIComponent(n)}})),e}function Q(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const r=this.W_;if("string"===typeof t)for(let h=0;h<16;h++)r[h]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)r[h]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let h=16;h<80;h++){const t=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=4294967295&(t<<1|t>>>31)}let n,o,i=this.chain_[0],a=this.chain_[1],s=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(n=c^a&(s^c),o=1518500249):(n=a^s^c,o=1859775393):h<60?(n=a&s|c&(a|s),o=2400959708):(n=a^s^c,o=3395469782);const t=(i<<5|i>>>27)+n+u+o+r[h]&4294967295;u=c,c=s,s=4294967295&(a<<30|a>>>2),a=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const r=e-this.blockSize;let n=0;const o=this.buf_;let i=this.inbuf_;while(n<e){if(0===i)while(n<=r)this.compress_(t,n),n+=this.blockSize;if("string"===typeof t){while(n<e)if(o[i]=t.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}else while(n<e)if(o[i]=t[n],++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);let r=0;for(let n=0;n<5;n++)for(let e=24;e>=0;e-=8)t[r]=this.chain_[n]>>e&255,++r;return t}}function et(t,e){const r=new rt(t,e);return r.subscribe.bind(r)}class rt{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,r){let n;if(void 0===t&&void 0===e&&void 0===r)throw new Error("Missing Observer.");n=nt(t,["next","error","complete"])?t:{next:t,error:e,complete:r},void 0===n.next&&(n.next=ot),void 0===n.error&&(n.error=ot),void 0===n.complete&&(n.complete=ot);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}})),this.observers.push(n),o}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function nt(t,e){if("object"!==typeof t||null===t)return!1;for(const r of e)if(r in t&&"function"===typeof t[r])return!0;return!1}function ot(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i>=55296&&i<=56319){const e=i-55296;n++,o(n<t.length,"Surrogate pair missing trail surrogate.");const r=t.charCodeAt(n)-56320;i=65536+(e<<10)+r}i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=63&i|128):i<65536?(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=63&i|128):(e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=63&i|128)}return e},st=function(t){let e=0;for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,r++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(t){return t&&t._delegate?t._delegate:t}},5431:(t,e,r)=>{"use strict";r.d(e,{z:()=>i});var n,o=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function i(t,e){void 0===e&&(e={});var r=e.registrationOptions;void 0===r&&(r={}),delete e.registrationOptions;var i=function(t){var r=[],n=arguments.length-1;while(n-- >0)r[n]=arguments[n+1];e&&e[t]&&e[t].apply(e,r)};"serviceWorker"in navigator&&n.then((function(){o()?(c(t,i,r),navigator.serviceWorker.ready.then((function(t){i("ready",t)})).catch((function(t){return a(i,t)}))):(s(t,i,r),navigator.serviceWorker.ready.then((function(t){i("ready",t)})).catch((function(t){return a(i,t)})))}))}function a(t,e){navigator.onLine||t("offline"),t("error",e)}function s(t,e,r){navigator.serviceWorker.register(t,r).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var r=t.installing;r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return a(e,t)}))}function c(t,e,r){fetch(t).then((function(n){404===n.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===n.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+n.headers.get("content-type"))),u()):s(t,e,r)})).catch((function(t){return a(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return a(emit,t)}))}"undefined"!==typeof window&&(n="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},1804:(t,e,r)=>{"use strict";r.d(e,{Jn:()=>gt,qX:()=>ft,Xd:()=>ht,Mq:()=>bt,ZF:()=>vt,KN:()=>mt});var n=r(7142),o=r(5168),i=r(223);r(2801);const a=(t,e)=>e.some((e=>t instanceof e));let s,c;function u(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,l=new WeakMap,p=new WeakMap,d=new WeakMap,g=new WeakMap;function v(t){const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(w(t.result)),n()},i=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&f.set(e,t)})).catch((()=>{})),g.set(e,t),e}function b(t){if(l.has(t))return;const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),n()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));l.set(t,e)}let m={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return l.get(t);if("objectStoreNames"===e)return t.objectStoreNames||p.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return w(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function y(t){m=t(m)}function E(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(S(this),e),w(f.get(this))}:function(...e){return w(t.apply(S(this),e))}:function(e,...r){const n=t.call(S(this),e,...r);return p.set(n,e.sort?e.sort():[e]),w(n)}}function _(t){return"function"===typeof t?E(t):(t instanceof IDBTransaction&&b(t),a(t,u())?new Proxy(t,m):t)}function w(t){if(t instanceof IDBRequest)return v(t);if(d.has(t))return d.get(t);const e=_(t);return e!==t&&(d.set(t,e),g.set(e,t)),e}const S=t=>g.get(t);function I(t,e,{blocked:r,upgrade:n,blocking:o,terminated:i}={}){const a=indexedDB.open(t,e),s=w(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(w(a.result),t.oldVersion,t.newVersion,w(a.transaction),t)})),r&&a.addEventListener("blocked",(t=>r(t.oldVersion,t.newVersion,t))),s.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(t=>o(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),s}const A=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],D=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(D.get(e))return D.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=O.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!A.includes(r))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[r](...e),o&&i.done]))[0]};return D.set(e,i),i}y((t=>({...t,get:(e,r,n)=>C(e,r)||t.get(e,r,n),has:(e,r)=>!!C(e,r)||t.has(e,r)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(T(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function T(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",N="0.9.14",P=new o.Yd("@firebase/app"),j="@firebase/app-compat",L="@firebase/analytics-compat",k="@firebase/analytics",B="@firebase/app-check-compat",M="@firebase/app-check",U="@firebase/auth",F="@firebase/auth-compat",H="@firebase/database",V="@firebase/database-compat",$="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",G="@firebase/installations-compat",Y="@firebase/messaging",J="@firebase/messaging-compat",K="@firebase/performance",Z="@firebase/performance-compat",X="@firebase/remote-config",q="@firebase/remote-config-compat",Q="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",rt="@firebase/firestore-compat",nt="firebase",ot="10.0.0",it="[DEFAULT]",at={[x]:"fire-core",[j]:"fire-core-compat",[k]:"fire-analytics",[L]:"fire-analytics-compat",[M]:"fire-app-check",[B]:"fire-app-check-compat",[U]:"fire-auth",[F]:"fire-auth-compat",[H]:"fire-rtdb",[V]:"fire-rtdb-compat",[$]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[G]:"fire-iid-compat",[Y]:"fire-fcm",[J]:"fire-fcm-compat",[K]:"fire-perf",[Z]:"fire-perf-compat",[X]:"fire-rc",[q]:"fire-rc-compat",[Q]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[rt]:"fire-fst-compat","fire-js":"fire-js",[nt]:"fire-js-all"},st=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(r){P.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function ht(t){const e=t.name;if(ct.has(e))return P.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const r of st.values())ut(r,t);return!0}function ft(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new i.LL("app","Firebase",lt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=ot;function vt(t,e={}){let r=t;if("object"!==typeof e){const t=e;e={name:t}}const o=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),a=o.name;if("string"!==typeof a||!a)throw pt.create("bad-app-name",{appName:String(a)});if(r||(r=(0,i.aH)()),!r)throw pt.create("no-options");const s=st.get(a);if(s){if((0,i.vZ)(r,s.options)&&(0,i.vZ)(o,s.config))return s;throw pt.create("duplicate-app",{appName:a})}const c=new n.H0(a);for(const n of ct.values())c.addComponent(n);const u=new dt(r,o,c);return st.set(a,u),u}function bt(t=it){const e=st.get(t);if(!e&&t===it&&(0,i.aH)())return vt();if(!e)throw pt.create("no-app",{appName:t});return e}function mt(t,e,r){var o;let i=null!==(o=at[t])&&void 0!==o?o:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const t=[`Unable to register library "${i}" with version "${e}":`];return a&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void P.warn(t.join(" "))}ht(new n.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="firebase-heartbeat-database",Et=1,_t="firebase-heartbeat-store";let wt=null;function St(){return wt||(wt=I(yt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})}))),wt}async function It(t){try{const e=await St(),r=await e.transaction(_t).objectStore(_t).get(Ot(t));return r}catch(e){if(e instanceof i.ZR)P.warn(e.message);else{const t=pt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});P.warn(t.message)}}}async function At(t,e){try{const r=await St(),n=r.transaction(_t,"readwrite"),o=n.objectStore(_t);await o.put(e,Ot(t)),await n.done}catch(r){if(r instanceof i.ZR)P.warn(r.message);else{const t=pt.create("idb-set",{originalErrorMessage:null===r||void 0===r?void 0:r.message});P.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=1024,Ct=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),r=Tt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),r=Date.now();return r-e<=Ct})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Tt(),{heartbeatsToSend:e,unsentEntries:r}=xt(this._heartbeatsCache.heartbeats),n=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Tt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=Dt){const r=[];let n=t.slice();for(const o of t){const t=r.find((t=>t.agent===o.agent));if(t){if(t.dates.push(o.date),Pt(r)>e){t.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),Pt(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}}}function Pt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){ht(new n.wA("platform-logger",(t=>new R(t)),"PRIVATE")),ht(new n.wA("heartbeat",(t=>new Rt(t)),"PRIVATE")),mt(x,N,t),mt(x,N,"esm2017"),mt("fire-js","")}jt("")},7142:(t,e,r)=>{"use strict";r.d(e,{H0:()=>u,wA:()=>o});var n=r(223);class o{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new n.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&t.resolve(r)}catch(r){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),n=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(n)return null;throw o}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});r.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(o);r===t&&i.resolve(n)}return n}onInit(t,e){var r;const n=this.normalizeInstanceIdentifier(e),o=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;o.add(t),this.onInitCallbacks.set(n,o);const i=this.instances.get(n);return i&&t(i,n),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const o of r)try{o(t,e)}catch(n){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(n){}return r||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:(t,e,r)=>{"use strict";r.d(e,{Yd:()=>u,in:()=>o});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=[];var o;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,s={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(t,e,...r)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),o=s[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${n}]  ${t.name}:`,...r)};class u{constructor(t){this.name=t,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in o))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...t),this._logHandler(this,o.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...t),this._logHandler(this,o.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,o.INFO,...t),this._logHandler(this,o.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,o.WARN,...t),this._logHandler(this,o.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...t),this._logHandler(this,o.ERROR,...t)}}},7795:(t,e,r)=>{"use strict";r.d(e,{ZF:()=>n.ZF});var n=r(1804),o="firebase",i="10.0.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.KN)(o,i,"app")},1609:(t,e,r)=>{"use strict";r.d(e,{v0:()=>n.o,XB:()=>n._});var n=r(9404);r(223),r(1804),r(5168),r(7142)},2114:(t,e,r)=>{"use strict";r.d(e,{N8:()=>n.N8,iH:()=>n.iH,jM:()=>n.jM});var n=r(7509)}}]);