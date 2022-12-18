(globalThis["webpackChunkplanning_poker"]=globalThis["webpackChunkplanning_poker"]||[]).push([[910],{9662:(t,e,r)=>{var n=r(7854),o=r(614),i=r(6330),s=n.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},6077:(t,e,r)=>{var n=r(7854),o=r(614),i=n.String,s=n.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:(t,e,r)=>{var n=r(7854),o=r(7976),i=n.TypeError;t.exports=function(t,e){if(o(e,t))return t;throw i("Incorrect invocation")}},9670:(t,e,r)=>{var n=r(7854),o=r(111),i=n.String,s=n.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),s=function(t){return function(e,r,s){var a,c=n(e),u=i(c),h=o(s,u);if(t&&r!=r){while(u>h)if(a=c[h++],a!=a)return!0}else for(;u>h;h++)if((t||h in c)&&c[h]===r)return t||h||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},206:(t,e,r)=>{var n=r(1702);t.exports=n([].slice)},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(7854),o=r(1694),i=r(614),s=r(4326),a=r(5112),c=a("toStringTag"),u=n.Object,h="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(r){}};t.exports=o?s:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=l(e=u(t),c))?r:h?s(e):"Object"==(n=s(e))&&i(e.callee)?"Arguments":n}},7741:(t,e,r)=>{var n=r(1702),o=Error,i=n("".replace),s=function(t){return String(o(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=i(t,a,"");return t}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),s=r(3070);t.exports=function(t,e,r){for(var a=o(e),c=s.f,u=i.f,h=0;h<a.length;h++){var l=a[h];n(t,l)||r&&n(r,l)||c(t,l,u(e,l))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},3678:t=>{t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:(t,e,r)=>{var n=r(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},5268:(t,e,r)=>{var n=r(4326),o=r(7854);t.exports="process"==n(o.process)},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),s=r(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,h=u&&u.v8;h&&(n=h.split("."),o=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&s&&(n=s.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/),n&&(o=+n[1]))),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:(t,e,r)=>{var n=r(7293),o=r(9114);t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),s=r(1320),a=r(3505),c=r(9920),u=r(4705);t.exports=function(t,e){var r,h,l,f,p,d,g=t.target,b=t.global,v=t.stat;if(h=b?n:v?n[g]||a(g,{}):(n[g]||{}).prototype,h)for(l in e){if(p=e[l],t.noTargetGet?(d=o(h,l),f=d&&d.value):f=h[l],r=u(b?l:g+(v?".":"#")+l,t.forced),!r&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),s(h,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.apply,s=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?s.bind(i):function(){return s.apply(i,arguments)})},9974:(t,e,r)=>{var n=r(1702),o=r(9662),i=r(4374),s=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?s(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!n||n&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.bind,s=o.call,a=n&&i.bind(s,s);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),i=r(7293),s=r(4326),a=n.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},9587:(t,e,r)=>{var n=r(614),o=r(111),i=r(7674);t.exports=function(t,e,r){var s,a;return i&&n(s=e.constructor)&&s!==r&&o(a=s.prototype)&&a!==r.prototype&&i(t,a),t}},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),s=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},8340:(t,e,r)=>{var n=r(111),o=r(8880);t.exports=function(t,e){n(e)&&"cause"in e&&o(t,"cause",e.cause)}},9909:(t,e,r)=>{var n,o,i,s=r(8536),a=r(7854),c=r(1702),u=r(111),h=r(8880),l=r(2597),f=r(5465),p=r(6200),d=r(3501),g="Object already initialized",b=a.TypeError,v=a.WeakMap,m=function(t){return i(t)?o(t):n(t,{})},y=function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw b("Incompatible receiver, "+t+" required");return r}};if(s||f.state){var E=f.state||(f.state=new v),_=c(E.get),w=c(E.has),O=c(E.set);n=function(t,e){if(w(E,t))throw new b(g);return e.facade=t,O(E,t,e),e},o=function(t){return _(E,t)||{}},i=function(t){return w(E,t)}}else{var S=p("state");d[S]=!0,n=function(t,e){if(l(t,S))throw new b(g);return e.facade=t,h(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:n,get:o,has:i,enforce:m,getterFor:y}},614:t=>{t.exports=function(t){return"function"==typeof t}},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,s=function(t,e){var r=c[a(t)];return r==h||r!=u&&(o(e)?n(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",h=s.POLYFILL="P";t.exports=s},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(7854),o=r(5005),i=r(614),s=r(7976),a=r(3307),c=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&s(e.prototype,c(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2788),s=n.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},6277:(t,e,r)=>{var n=r(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},3070:(t,e,r)=>{var n=r(7854),o=r(9781),i=r(4664),s=r(3353),a=r(9670),c=r(4948),u=n.TypeError,h=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",d="writable";e.f=o?s?function(t,e,r){if(a(t),e=c(e),a(r),"function"===typeof t&&"prototype"===e&&"value"in r&&d in r&&!r[d]){var n=l(t,e);n&&n[d]&&(t[e]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:f in r?r[f]:n[f],writable:!1})}return h(t,e,r)}:h:function(t,e,r){if(a(t),e=c(e),a(r),i)try{return h(t,e,r)}catch(n){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),s=r(9114),a=r(5656),c=r(4948),u=r(2597),h=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=c(e),h)try{return l(t,e)}catch(r){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),s=r(1318).indexOf,a=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),u=0,h=[];for(r in n)!o(a,r)&&o(n,r)&&c(h,r);while(e.length>u)o(n,r=e[u++])&&(~s(h,r)||c(h,r));return h}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:(t,e,r)=>{var n=r(1702),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(r,[]),e=r instanceof Array}catch(s){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},2140:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(614),s=r(111),a=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!s(n=o(r,t)))return n;if(i(r=t.valueOf)&&!s(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!s(n=o(r,t)))return n;throw a("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),s=r(5181),a=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=s.f;return r?c(e,r(t)):e}},2626:(t,e,r)=>{var n=r(3070).f;t.exports=function(t,e,r){r in t||n(t,r,{configurable:!0,get:function(){return e[r]},set:function(t){e[r]=t}})}},1320:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2597),s=r(8880),a=r(3505),c=r(2788),u=r(9909),h=r(6530).CONFIGURABLE,l=u.get,f=u.enforce,p=String(String).split("String");(t.exports=function(t,e,r,c){var u,l=!!c&&!!c.unsafe,d=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,b=c&&void 0!==c.name?c.name:e;o(r)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||h&&r.name!==b)&&s(r,"name",b),u=f(r),u.source||(u.source=p.join("string"==typeof b?b:""))),t!==n?(l?!g&&t[e]&&(d=!0):delete t[e],d?t[e]=r:s(t,e,r)):d?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||c(this)}))},4488:(t,e,r)=>{var n=r(7854),o=n.TypeError;t.exports=function(t){if(void 0==t)throw o("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",s=n[i]||o(i,{});t.exports=s},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.2",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})},261:(t,e,r)=>{var n,o,i,s,a=r(7854),c=r(2104),u=r(9974),h=r(614),l=r(2597),f=r(7293),p=r(490),d=r(206),g=r(317),b=r(8053),v=r(6833),m=r(5268),y=a.setImmediate,E=a.clearImmediate,_=a.process,w=a.Dispatch,O=a.Function,S=a.MessageChannel,I=a.String,C=0,A={},D="onreadystatechange";try{n=a.location}catch(j){}var x=function(t){if(l(A,t)){var e=A[t];delete A[t],e()}},R=function(t){return function(){x(t)}},N=function(t){x(t.data)},T=function(t){a.postMessage(I(t),n.protocol+"//"+n.host)};y&&E||(y=function(t){b(arguments.length,1);var e=h(t)?t:O(t),r=d(arguments,1);return A[++C]=function(){c(e,void 0,r)},o(C),C},E=function(t){delete A[t]},m?o=function(t){_.nextTick(R(t))}:w&&w.now?o=function(t){w.now(R(t))}:S&&!v?(i=new S,s=i.port2,i.port1.onmessage=N,o=u(s.postMessage,s)):a.addEventListener&&h(a.postMessage)&&!a.importScripts&&n&&"file:"!==n.protocol&&!f(T)?(o=T,a.addEventListener("message",N,!1)):o=D in g("script")?function(t){p.appendChild(g("script"))[D]=function(){p.removeChild(this),x(t)}}:function(t){setTimeout(R(t),0)}),t.exports={set:y,clear:E}},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!==n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(111),s=r(2190),a=r(8173),c=r(2140),u=r(5112),h=n.TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var r,n=a(t,l);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||s(r))return r;throw h("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n=r(5112),o=n("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},1340:(t,e,r)=>{var n=r(7854),o=r(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:(t,e,r)=>{var n=r(7854),o=n.String;t.exports=function(t){try{return o(t)}catch(e){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),s=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:(t,e,r)=>{var n=r(7854),o=n.TypeError;t.exports=function(t,e){if(t<e)throw o("Not enough arguments");return t}},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),s=r(9711),a=r(133),c=r(3307),u=o("wks"),h=n.Symbol,l=h&&h["for"],f=c?h:h&&h.withoutSetter||s;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(h,t)?u[t]=h[t]:u[t]=c&&l?l(e):f(e)}return u[t]}},9191:(t,e,r)=>{"use strict";var n=r(5005),o=r(2597),i=r(8880),s=r(7976),a=r(7674),c=r(9920),u=r(2626),h=r(9587),l=r(6277),f=r(8340),p=r(7741),d=r(2914),g=r(9781),b=r(1913);t.exports=function(t,e,r,v){var m="stackTraceLimit",y=v?2:1,E=t.split("."),_=E[E.length-1],w=n.apply(null,E);if(w){var O=w.prototype;if(!b&&o(O,"cause")&&delete O.cause,!r)return w;var S=n("Error"),I=e((function(t,e){var r=l(v?e:t,void 0),n=v?new w(t):new w;return void 0!==r&&i(n,"message",r),d&&i(n,"stack",p(n.stack,2)),this&&s(O,this)&&h(n,this,I),arguments.length>y&&f(n,arguments[y]),n}));if(I.prototype=O,"Error"!==_?a?a(I,S):c(I,S,{name:!0}):g&&m in w&&(u(I,w,m),u(I,w,"prepareStackTrace")),c(I,w),!b)try{O.name!==_&&i(O,"name",_),O.constructor=I}catch(C){}return I}}},1703:(t,e,r)=>{var n=r(2109),o=r(7854),i=r(2104),s=r(9191),a="WebAssembly",c=o[a],u=7!==Error("e",{cause:7}).cause,h=function(t,e){var r={};r[t]=s(t,e,u),n({global:!0,forced:u},r)},l=function(t,e){if(c&&c[t]){var r={};r[t]=s(a+"."+t,e,u),n({target:a,stat:!0,forced:u},r)}};h("Error",(function(t){return function(e){return i(t,this,arguments)}})),h("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),h("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),h("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),h("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),h("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),h("URIError",(function(t){return function(e){return i(t,this,arguments)}})),l("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),l("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),l("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},1091:(t,e,r)=>{var n=r(2109),o=r(7854),i=r(261).clear;n({global:!0,bind:!0,enumerable:!0,forced:o.clearImmediate!==i},{clearImmediate:i})},2801:(t,e,r)=>{"use strict";var n=r(2109),o=r(5005),i=r(9114),s=r(3070).f,a=r(2597),c=r(5787),u=r(9587),h=r(6277),l=r(3678),f=r(7741),p=r(1913),d="DOMException",g=o("Error"),b=o(d),v=function(){c(this,m);var t=arguments.length,e=h(t<1?void 0:arguments[0]),r=h(t<2?void 0:arguments[1],"Error"),n=new b(e,r),o=g(e);return o.name=d,s(n,"stack",i(1,f(o.stack,1))),u(n,this,v),n},m=v.prototype=b.prototype,y="stack"in g(d),E="stack"in new b(1,2),_=y&&!E;n({global:!0,forced:p||_},{DOMException:_?v:b});var w=o(d),O=w.prototype;if(O.constructor!==w)for(var S in p||s(O,"constructor",i(1,w)),l)if(a(l,S)){var I=l[S],C=I.s;a(w,C)||s(w,C,i(6,I.c))}},4633:(t,e,r)=>{r(1091),r(2986)},2986:(t,e,r)=>{var n=r(2109),o=r(7854),i=r(261).set;n({global:!0,bind:!0,enumerable:!0,forced:o.setImmediate!==i},{setImmediate:i})},1618:(t,e,r)=>{"use strict";r.d(e,{BH:()=>g,DV:()=>L,GJ:()=>j,L:()=>h,LL:()=>C,Pz:()=>R,UI:()=>M,US:()=>c,X3:()=>nt,Yr:()=>_,ZR:()=>I,b$:()=>y,cI:()=>x,dS:()=>Z,eu:()=>O,g5:()=>i,gK:()=>Y,gQ:()=>U,h$:()=>u,hl:()=>w,hu:()=>o,m9:()=>K,ne:()=>V,p$:()=>f,pd:()=>F,r3:()=>k,ru:()=>m,tV:()=>l,uI:()=>v,ug:()=>J,vZ:()=>B,w1:()=>E,w9:()=>T,xO:()=>H,xb:()=>P,z$:()=>b,zd:()=>z});r(1703),r(2801);
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
const n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(t,e){if(!t)throw i(e)},i=function(t){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},s=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=63&o|128):55296===(64512&o)&&n+1<t.length&&56320===(64512&t.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++n)),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=63&o|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=63&o|128)}return e},a=function(t){const e=[];let r=0,n=0;while(r<t.length){const o=t[r++];if(o<128)e[n++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[r++];e[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=t[r++],s=t[r++],a=t[r++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(1023&c))}else{const i=t[r++],s=t[r++];e[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<t.length;o+=3){const e=t[o],i=o+1<t.length,s=i?t[o+1]:0,a=o+2<t.length,c=a?t[o+2]:0,u=e>>2,h=(3&e)<<4|s>>4;let l=(15&s)<<2|c>>6,f=63&c;a||(f=64,i||(l=64)),n.push(r[u],r[h],r[l],r[f])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<t.length;){const e=r[t.charAt(o++)],i=o<t.length,s=i?r[t.charAt(o)]:0;++o;const a=o<t.length,c=a?r[t.charAt(o)]:64;++o;const u=o<t.length,h=u?r[t.charAt(o)]:64;if(++o,null==e||null==s||null==c||null==h)throw Error();const l=e<<2|s>>4;if(n.push(l),64!==c){const t=s<<4&240|c>>2;if(n.push(t),64!==h){const t=c<<6&192|h;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){const e=s(t);return c.encodeByteArray(e,!0)},h=function(t){return u(t).replace(/\./g,"")},l=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function f(t){return p(void 0,t)}function p(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const r=e;return new Date(r.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const r in e)e.hasOwnProperty(r)&&d(r)&&(t[r]=p(t[r],e[r]));return t}function d(t){return"__proto__"!==t}
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
 */class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,r))}}}
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
function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function m(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function E(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN}function w(){return"object"===typeof indexedDB}function O(){return new Promise(((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var t;e((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(r){e(r)}}))}
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
const S="FirebaseError";class I extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=S,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},n=`${this.service}/${t}`,o=this.errors[t],i=o?A(o,r):"Error",s=`${this.serviceName}: ${i} (${n}).`,a=new I(n,s,r);return a}}function A(t,e){return t.replace(D,((t,r)=>{const n=e[r];return null!=n?String(n):`<${r}?>`}))}const D=/\{\$([^}]+)}/g;
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
 */function x(t){return JSON.parse(t)}function R(t){return JSON.stringify(t)}
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
 */const N=function(t){let e={},r={},n={},o="";try{const i=t.split(".");e=x(l(i[0])||""),r=x(l(i[1])||""),o=i[2],n=r["d"]||{},delete r["d"]}catch(i){}return{header:e,claims:r,data:n,signature:o}},T=function(t){const e=N(t),r=e.claims;return!!r&&"object"===typeof r&&r.hasOwnProperty("iat")},j=function(t){const e=N(t).claims;return"object"===typeof e&&!0===e["admin"]};
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
function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function L(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e,r){const n={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=e.call(r,t[o],o,t));return n}function B(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const o of r){if(!n.includes(o))return!1;const r=t[o],i=e[o];if($(r)&&$(i)){if(!B(r,i))return!1}else if(r!==i)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function $(t){return null!==t&&"object"===typeof t}
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
 */function H(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach((t=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function z(t){const e={},r=t.replace(/^\?/,"").split("&");return r.forEach((t=>{if(t){const[r,n]=t.split("=");e[decodeURIComponent(r)]=decodeURIComponent(n)}})),e}function F(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}
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
 */class U{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const r=this.W_;if("string"===typeof t)for(let h=0;h<16;h++)r[h]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)r[h]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let h=16;h<80;h++){const t=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=4294967295&(t<<1|t>>>31)}let n,o,i=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(n=c^s&(a^c),o=1518500249):(n=s^a^c,o=1859775393):h<60?(n=s&a|c&(s|a),o=2400959708):(n=s^a^c,o=3395469782);const t=(i<<5|i>>>27)+n+u+o+r[h]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const r=e-this.blockSize;let n=0;const o=this.buf_;let i=this.inbuf_;while(n<e){if(0===i)while(n<=r)this.compress_(t,n),n+=this.blockSize;if("string"===typeof t){while(n<e)if(o[i]=t.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}else while(n<e)if(o[i]=t[n],++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);let r=0;for(let n=0;n<5;n++)for(let e=24;e>=0;e-=8)t[r]=this.chain_[n]>>e&255,++r;return t}}function V(t,e){const r=new W(t,e);return r.subscribe.bind(r)}class W{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,r){let n;if(void 0===t&&void 0===e&&void 0===r)throw new Error("Missing Observer.");n=G(t,["next","error","complete"])?t:{next:t,error:e,complete:r},void 0===n.next&&(n.next=X),void 0===n.error&&(n.error=X),void 0===n.complete&&(n.complete=X);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}})),this.observers.push(n),o}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(t,e){if("object"!==typeof t||null===t)return!1;for(const r of e)if(r in t&&"function"===typeof t[r])return!0;return!1}function X(){}
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
 */function Y(t,e){return`${t} failed: ${e} argument `}
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
const Z=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i>=55296&&i<=56319){const e=i-55296;n++,o(n<t.length,"Surrogate pair missing trail surrogate.");const r=t.charCodeAt(n)-56320;i=65536+(e<<10)+r}i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=63&i|128):i<65536?(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=63&i|128):(e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=63&i|128)}return e},J=function(t){let e=0;for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,r++):e+=3}return e};
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
function K(t){return t&&t._delegate?t._delegate:t}
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
 */function q(t,e){return new Promise(((r,n)=>{t.onsuccess=t=>{r(t.target.result)},t.onerror=t=>{var r;n(`${e}: ${null===(r=t.target.error)||void 0===r?void 0:r.message}`)}}))}class Q{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e="readonly"){return new tt(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new et(this._db.createObjectStore(t,e))}close(){this._db.close()}}class tt{constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}}))}objectStore(t){return new et(this._transaction.objectStore(t))}}class et{constructor(t){this._store=t}index(t){return new rt(this._store.index(t))}createIndex(t,e,r){return new rt(this._store.createIndex(t,e,r))}get(t){const e=this._store.get(t);return q(e,"Error reading from IndexedDB")}put(t,e){const r=this._store.put(t,e);return q(r,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return q(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return q(t,"Error clearing IndexedDB object store")}}class rt{constructor(t){this._index=t}get(t){const e=this._index.get(t);return q(e,"Error reading from IndexedDB")}}function nt(t,e,r){return new Promise(((n,o)=>{try{const i=indexedDB.open(t,e);i.onsuccess=t=>{n(new Q(t.target.result))},i.onerror=t=>{var e;o(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)},i.onupgradeneeded=t=>{r(new Q(i.result),t.oldVersion,t.newVersion,new tt(i.transaction))}}catch(i){o(`Error opening indexedDB: ${i.message}`)}}))}},9017:(t,e,r)=>{"use strict";r.d(e,{ZF:()=>n.ZF});var n=r(5659),o="firebase",i="9.6.11";
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
(0,n.KN)(o,i,"app")},5843:(t,e,r)=>{"use strict";r.d(e,{v0:()=>n.n,XB:()=>n.W});var n=r(809);r(1618),r(5659),r(7366),r(7805)},9037:(t,e,r)=>{"use strict";r.d(e,{N8:()=>n.N8,iH:()=>n.iH,jM:()=>n.jM});var n=r(4461)},563:(t,e,r)=>{"use strict";r.d(e,{z:()=>i});r(1703);var n,o=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function i(t,e){void 0===e&&(e={});var r=e.registrationOptions;void 0===r&&(r={}),delete e.registrationOptions;var i=function(t){var r=[],n=arguments.length-1;while(n-- >0)r[n]=arguments[n+1];e&&e[t]&&e[t].apply(e,r)};"serviceWorker"in navigator&&n.then((function(){o()?(c(t,i,r),navigator.serviceWorker.ready.then((function(t){i("ready",t)})).catch((function(t){return s(i,t)}))):(a(t,i,r),navigator.serviceWorker.ready.then((function(t){i("ready",t)})).catch((function(t){return s(i,t)})))}))}function s(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,r){navigator.serviceWorker.register(t,r).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var r=t.installing;r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return s(e,t)}))}function c(t,e,r){fetch(t).then((function(n){404===n.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===n.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+n.headers.get("content-type"))),u()):a(t,e,r)})).catch((function(t){return s(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return s(emit,t)}))}"undefined"!==typeof window&&(n="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},4270:(t,e,r)=>{"use strict";r.d(e,{_T:()=>n});r(1703);function n(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}Object.create;Object.create},5659:(t,e,r)=>{"use strict";r.d(e,{Jn:()=>G,KN:()=>Z,Mq:()=>Y,Xd:()=>z,ZF:()=>X,qX:()=>F});var n=r(7805),o=r(7366),i=r(1618);
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
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.21",h=new o.Yd("@firebase/app"),l="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",d="@firebase/app-check-compat",g="@firebase/app-check",b="@firebase/auth",v="@firebase/auth-compat",m="@firebase/database",y="@firebase/database-compat",E="@firebase/functions",_="@firebase/functions-compat",w="@firebase/installations",O="@firebase/installations-compat",S="@firebase/messaging",I="@firebase/messaging-compat",C="@firebase/performance",A="@firebase/performance-compat",D="@firebase/remote-config",x="@firebase/remote-config-compat",R="@firebase/storage",N="@firebase/storage-compat",T="@firebase/firestore",j="@firebase/firestore-compat",k="firebase",L="9.6.11",P="[DEFAULT]",M={[c]:"fire-core",[l]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[d]:"fire-app-check-compat",[b]:"fire-auth",[v]:"fire-auth-compat",[m]:"fire-rtdb",[y]:"fire-rtdb-compat",[E]:"fire-fn",[_]:"fire-fn-compat",[w]:"fire-iid",[O]:"fire-iid-compat",[S]:"fire-fcm",[I]:"fire-fcm-compat",[C]:"fire-perf",[A]:"fire-perf-compat",[D]:"fire-rc",[x]:"fire-rc-compat",[R]:"fire-gcs",[N]:"fire-gcs-compat",[T]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[k]:"fire-js-all"},B=new Map,$=new Map;function H(t,e){try{t.container.addComponent(e)}catch(r){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function z(t){const e=t.name;if($.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;$.set(e,t);for(const r of B.values())H(r,t);return!0}function F(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}
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
const U={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},V=new i.LL("app","Firebase",U);
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
class W{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}
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
 */const G=L;function X(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:P,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw V.create("bad-app-name",{appName:String(o)});const s=B.get(o);if(s){if((0,i.vZ)(t,s.options)&&(0,i.vZ)(r,s.config))return s;throw V.create("duplicate-app",{appName:o})}const a=new n.H0(o);for(const n of $.values())a.addComponent(n);const c=new W(t,r,a);return B.set(o,c),c}function Y(t=P){const e=B.get(t);if(!e)throw V.create("no-app",{appName:t});return e}function Z(t,e,r){var o;let i=null!==(o=M[t])&&void 0!==o?o:t;r&&(i+=`-${r}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}z(new n.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
const J="firebase-heartbeat-database",K=1,q="firebase-heartbeat-store";let Q=null;function tt(){return Q||(Q=(0,i.X3)(J,K,((t,e)=>{switch(e){case 0:t.createObjectStore(q)}})).catch((t=>{throw V.create("storage-open",{originalErrorMessage:t.message})}))),Q}async function et(t){try{const e=await tt();return e.transaction(q).objectStore(q).get(nt(t))}catch(e){throw V.create("storage-get",{originalErrorMessage:e.message})}}async function rt(t,e){try{const r=await tt(),n=r.transaction(q,"readwrite"),o=n.objectStore(q);return await o.put(e,nt(t)),n.complete}catch(r){throw V.create("storage-set",{originalErrorMessage:r.message})}}function nt(t){return`${t.name}!${t.options.appId}`}
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
 */const ot=1024,it=2592e6;class st{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ut(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),r=at();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),r=Date.now();return r-e<=it})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=at(),{heartbeatsToSend:e,unsentEntries:r}=ct(this._heartbeatsCache.heartbeats),n=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function at(){const t=new Date;return t.toISOString().substring(0,10)}function ct(t,e=ot){const r=[];let n=t.slice();for(const o of t){const t=r.find((t=>t.agent===o.agent));if(t){if(t.dates.push(o.date),ht(r)>e){t.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),ht(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await et(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}}}function ht(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function lt(t){z(new n.wA("platform-logger",(t=>new s(t)),"PRIVATE")),z(new n.wA("heartbeat",(t=>new st(t)),"PRIVATE")),Z(c,u,t),Z(c,u,"esm2017"),Z("fire-js","")}lt("")},7805:(t,e,r)=>{"use strict";r.d(e,{H0:()=>u,wA:()=>o});r(1703);var n=r(1618);class o{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new n.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&t.resolve(r)}catch(r){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),n=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(n)return null;throw o}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});r.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(o);r===t&&i.resolve(n)}return n}onInit(t,e){var r;const n=this.normalizeInstanceIdentifier(e),o=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;o.add(t),this.onInitCallbacks.set(n,o);const i=this.instances.get(n);return i&&t(i,n),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const o of r)try{o(t,e)}catch(n){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(n){}return r||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},7366:(t,e,r)=>{"use strict";r.d(e,{Yd:()=>u,in:()=>o});r(1703);
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
 */const n=[];var o;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(t,e,...r)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),o=a[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${n}]  ${t.name}:`,...r)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in o))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...t),this._logHandler(this,o.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...t),this._logHandler(this,o.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,o.INFO,...t),this._logHandler(this,o.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,o.WARN,...t),this._logHandler(this,o.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...t),this._logHandler(this,o.ERROR,...t)}}}}]);