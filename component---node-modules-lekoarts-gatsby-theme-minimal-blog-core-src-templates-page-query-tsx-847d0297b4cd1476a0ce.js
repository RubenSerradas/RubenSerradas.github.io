(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},X8hv:function(t,e,r){function n(t,e,r){return(n=c()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var c=new(Function.bind.apply(t,n));return r&&o(c,r.prototype),c}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("xtjI"),r("Dq+y"),r("Ggvi"),r("rzGZ"),r("m210"),r("4DPX"),r("YbXK"),r("cFtU"),r("pJf4"),r("q8oJ"),r("8npG"),r("nWfQ"),r("nWfQ"),r("pJf4"),r("q8oJ"),r("YbXK"),r("cFtU"),r("m210"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var l=r("q1tI"),s=r("7ljp"),y=s.useMDXComponents,b=s.mdx,O=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,c=t.children,o=function(t,e){if(null==t)return{};var r,n,c={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,["scope","components","children"]),i=y(r),a=O(e),p=l.useMemo((function(){if(!c)return null;var t=f({React:l,mdx:b},a),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(u(e),[""+c])).apply(void 0,[{}].concat(u(r)))}),[c,e]);return l.createElement(p,f({components:i},o))}},kT7v:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return b}));r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("q1tI"),c=r.n(n),o=r("2A+t"),u=r("izhR"),i=r("A2+M"),a=r("Q3iF"),f=r("GIzu"),p=function(t){var e=t.data.page;return Object(o.c)(a.a,null,Object(o.c)(f.a,{title:e.title,description:e.excerpt}),Object(o.c)(u.d,{variant:"styles.h2"},e.title),Object(o.c)("section",{sx:{my:5}},Object(o.c)(i.MDXRenderer,null,e.body)))};function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.default=function(t){var e=t.data,r=e.page;return c.a.createElement(p,{data:s(s({},e),{},{page:r})})};var b="1594686464"},nWfQ:function(t,e,r){var n=r("P8UN"),c=r("nsRs"),o=r("nONw"),u=r("1a8y"),i=r("BjK0"),a=r("96qb"),f=r("16Xr"),p=(r("emib").Reflect||{}).construct,l=a((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),s=!a((function(){p((function(){}))}));n(n.S+n.F*(l||s),"Reflect",{construct:function(t,e){o(t),u(e);var r=arguments.length<3?t:o(arguments[2]);if(s&&!l)return p(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(f.apply(t,n))}var a=r.prototype,y=c(i(a)?a:Object.prototype),b=Function.apply.call(t,y,e);return i(b)?b:y}})}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-page-query-tsx-847d0297b4cd1476a0ce.js.map