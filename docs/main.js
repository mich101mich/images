!function(e){function t(t){for(var r,o,i=t[0],a=t[1],s=0,u=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(t);u.length;)u.shift()()}var r={},n={0:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+({}[e]||e)+".js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}n[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=a;o(o.s=7)}([function(e,t,r){"use strict";var n,o=(n=r(3))&&"object"==typeof n&&"default"in n?n.default:n;
/**
 * @license
 * Copyright 2018 Google Inc.
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
o.registerVersion("firebase","7.11.0","app"),e.exports=o},function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return o})),r.d(t,"__assign",(function(){return i})),r.d(t,"__rest",(function(){return a})),r.d(t,"__decorate",(function(){return s})),r.d(t,"__param",(function(){return c})),r.d(t,"__metadata",(function(){return u})),r.d(t,"__awaiter",(function(){return f})),r.d(t,"__generator",(function(){return l})),r.d(t,"__exportStar",(function(){return p})),r.d(t,"__values",(function(){return h})),r.d(t,"__read",(function(){return d})),r.d(t,"__spread",(function(){return v})),r.d(t,"__spreadArrays",(function(){return y})),r.d(t,"__await",(function(){return b})),r.d(t,"__asyncGenerator",(function(){return m})),r.d(t,"__asyncDelegator",(function(){return g})),r.d(t,"__asyncValues",(function(){return _})),r.d(t,"__makeTemplateObject",(function(){return w})),r.d(t,"__importStar",(function(){return E})),r.d(t,"__importDefault",(function(){return O})),r.d(t,"__classPrivateFieldGet",(function(){return S})),r.d(t,"__classPrivateFieldSet",(function(){return A}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function s(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function p(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function y(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function m(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(c,u):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function g(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=h(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function O(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function A(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,f=i>>2,l=(3&i)<<4|s>>4,p=(15&s)<<2|u>>6,h=63&u;c||(h=64,a||(p=64)),n.push(r[f],r[l],r[p],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var a=((7&o)<<18|(63&(i=e[r++]))<<12|(63&(s=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{i=e[r++];var s=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length?r[e.charAt(o)]:0,s=++o<e.length?r[e.charAt(o)]:64,c=++o<e.length?r[e.charAt(o)]:64;if(++o,null==i||null==a||null==s||null==c)throw Error();var u=i<<2|a>>4;if(n.push(u),64!==s){var f=a<<4&240|s>>2;if(n.push(f),64!==c){var l=s<<6&192|c;n.push(l)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=f(e[r],t[r]));return e}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var l=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function p(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google Inc.
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
var h=function(e){function t(r,n){var o=e.call(this,n)||this;return o.code=r,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,d.prototype.create),o}return n.__extends(t,e),t}(Error),d=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?v(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",c=new h(o,s),u=0,f=Object.keys(n);u<f.length;u++){var l=f[u];"_"!==l.slice(-1)&&(l in c&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),c[l]=n[l])}return c},e}();function v(e,t){return e.replace(y,(function(e,r){var n=t[r];return null!=n?n.toString():"<"+r+"?>"}))}var y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function b(e){return JSON.parse(e)}
/**
 * @license
 * Copyright 2017 Google Inc.
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
var m=function(e){var t={},r={},n={},o="";try{var i=e.split(".");t=b(u(i[0])||""),r=b(u(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:o}};
/**
 * @license
 * Copyright 2017 Google Inc.
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
var g=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],l=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=f^c&(u^f),a=1518500249):(i=c^u^f,a=1859775393):n<60?(i=c&u|f&(c|u),a=2400959708):(i=c^u^f,a=3395469782);o=(s<<5|s>>>27)+i+l+a+r[n]&4294967295;l=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<t;){if(0===i)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[i]=e.charCodeAt(n),++n,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;n<t;)if(o[i]=e[n],++n,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},e}();var _=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=w),void 0===n.error&&(n.error=w),void 0===n.complete&&(n.complete=w);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function w(){}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function E(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}t.CONSTANTS=o,t.Deferred=l,t.ErrorFactory=d,t.FirebaseError=h,t.Sha1=g,t.assert=i,t.assertionError=a,t.async=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}},t.base64=c,t.base64Decode=u,t.base64Encode=function(e){var t=s(e);return c.encodeByteArray(t,!0)},t.contains=
/**
 * @license
 * Copyright 2017 Google Inc.
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
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var r=new _(e,t);return r.subscribe.bind(r)},t.decode=m,t.deepCopy=
/**
 * @license
 * Copyright 2017 Google Inc.
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
function(e){return f(void 0,e)},t.deepExtend=f,t.errorPrefix=E,t.getUA=p,t.isAdmin=function(e){var t=m(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isBrowserExtension=function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id},t.isElectron=function(){return p().indexOf("Electron/")>=0},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isIE=function(){var e=p();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())},t.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}},t.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isUWP=function(){return p().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){var t=m(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=m(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),o=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!o&&r>=n&&r<=o},t.issuedAtTime=function(e){var t=m(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=b,t.map=function(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */,t.querystring=function(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,o=Object.entries(e);n<o.length;n++){var i=o[n];r(i[0],i[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;n++,i(n<e.length,"Surrogate pair missing trail surrogate."),o=65536+(a<<10)+(e.charCodeAt(n)-56320)}o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):o<65536?(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},t.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(E(e,t,n)+"must be a valid function.")},t.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(E(e,t,n)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */,t.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(E(e,t,n)+"must be a valid firebase namespace.")}}).call(this,r(4))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,i=r(1),a=r(2),s=r(5),c=r(6),u=((n={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$appName}",n["duplicate-app"]="Firebase App named '{$appName}' already exists",n["app-deleted"]="Firebase App named '{$appName}' already deleted",n["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",n),f=new a.ErrorFactory("app","Firebase",u),l="@firebase/app",p=((o={})[l]="fire-core",o["@firebase/analytics"]="fire-analytics",o["@firebase/auth"]="fire-auth",o["@firebase/database"]="fire-rtdb",o["@firebase/functions"]="fire-fn",o["@firebase/installations"]="fire-iid",o["@firebase/messaging"]="fire-fcm",o["@firebase/performance"]="fire-perf",o["@firebase/remote-config"]="fire-rc",o["@firebase/storage"]="fire-gcs",o["@firebase/firestore"]="fire-fst",o["fire-js"]="fire-js",o["firebase-wrapper"]="fire-js-all",o),h=new c.Logger("@firebase/app"),d=function(){function e(e,t,r){var n,o,c=this;this.firebase_=r,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=a.deepCopy(e),this.container=new s.ComponentContainer(t.name),this._addComponent(new s.Component("app",(function(){return c}),"PUBLIC"));try{for(var u=i.__values(this.firebase_.INTERNAL.components.values()),f=u.next();!f.done;f=u.next()){var l=f.value;this._addComponent(l)}}catch(e){n={error:e}}finally{try{f&&!f.done&&(o=u.return)&&o.call(u)}finally{if(n)throw n.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t="[DEFAULT]"),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t="[DEFAULT]"),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){h.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw f.create("app-deleted",{appName:this.name_})},e}();d.prototype.name&&d.prototype.options||d.prototype.delete||console.log("dc");var v=
/**
 * @license
 * Copyright 2019 Google Inc.
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
function e(){var t=
/**
 * @license
 * Copyright 2019 Google Inc.
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
function(e){var t={},r=new Map,n={__esModule:!0,initializeApp:function(r,o){void 0===o&&(o={});if("object"!=typeof o||null===o){o={name:o}}var i=o;void 0===i.name&&(i.name="[DEFAULT]");var s=i.name;if("string"!=typeof s||!s)throw f.create("bad-app-name",{appName:String(s)});if(a.contains(t,s))throw f.create("duplicate-app",{appName:s});var c=new e(r,i,n);return t[s]=c,c},app:o,registerVersion:function(e,t,r){var n,o=null!==(n=p[e])&&void 0!==n?n:e;r&&(o+="-"+r);var i=o.match(/\s|\//),a=t.match(/\s|\//);if(i||a){var u=['Unable to register library "'+o+'" with version "'+t+'":'];return i&&u.push('library name "'+o+'" contains illegal characters (whitespace or "/")'),i&&a&&u.push("and"),a&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void h.warn(u.join(" "))}c(new s.Component(o+"-version",(function(){return{library:o,version:t}}),"VERSION"))},apps:null,SDK_VERSION:"7.11.0",INTERNAL:{registerComponent:c,removeApp:function(e){delete t[e]},components:r,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function o(e){if(e=e||"[DEFAULT]",!a.contains(t,e))throw f.create("no-app",{appName:e});return t[e]}function c(s){var c,u,l=s.name;if(r.has(l))return h.debug("There were multiple attempts to register component "+l+"."),"PUBLIC"===s.type?n[l]:null;if(r.set(l,s),"PUBLIC"===s.type){var p=function(e){if(void 0===e&&(e=o()),"function"!=typeof e[l])throw f.create("invalid-app-argument",{appName:l});return e[l]()};void 0!==s.serviceProps&&a.deepExtend(p,s.serviceProps),n[l]=p,e.prototype[l]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this._getService.bind(this,l);return r.apply(this,s.multipleInstances?e:[])}}try{for(var d=i.__values(Object.keys(t)),v=d.next();!v.done;v=d.next()){var y=v.value;t[y]._addComponent(s)}}catch(e){c={error:e}}finally{try{v&&!v.done&&(u=d.return)&&u.call(d)}finally{if(c)throw c.error}}return"PUBLIC"===s.type?n[l]:null}return(n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),o.App=e,n)}(d);return t.INTERNAL=i.__assign(i.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){a.deepExtend(t,e)},createSubscribe:a.createSubscribe,ErrorFactory:a.ErrorFactory,deepExtend:a.deepExtend}),t}(),y=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google Inc.
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
 */(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
 * @license
 * Copyright 2019 Google Inc.
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
 * Copyright 2017 Google Inc.
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
if(a.isBrowser()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var b=self.firebase.SDK_VERSION;b&&b.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var m=v.initializeApp;v.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.isNode()&&h.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),m.apply(void 0,e)};var g=v;!function(e,t){e.INTERNAL.registerComponent(new s.Component("platform-logger",(function(e){return new y(e)}),"PRIVATE")),e.registerVersion(l,"0.5.6",t),e.registerVersion("fire-js","")}(g),t.default=g,t.firebase=g},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(2),i=function(){function e(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]");var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new o.Deferred;this.instancesDeferred.set(t,r);try{var n=this.getOrInitializeService(t);n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=n.__assign({identifier:"[DEFAULT]",optional:!1},e),r=t.identifier,o=t.optional,i=this.normalizeInstanceIdentifier(r);try{var a=this.getOrInitializeService(i);if(!a){if(o)return null;throw Error("Service "+this.name+" is not available")}return a}catch(e){if(o)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google Inc.
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
 */(e))try{this.getOrInitializeService("[DEFAULT]")}catch(e){}try{for(var o=n.__values(this.instancesDeferred.entries()),i=o.next();!i.done;i=o.next()){var a=n.__read(i.value,2),s=a[0],c=a[1],u=this.normalizeInstanceIdentifier(s);try{var f=this.getOrInitializeService(u);c.resolve(f)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return n.__awaiter(this,void 0,void 0,(function(){var e;return n.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return"[DEFAULT]"===e?void 0:e}(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e}();var s=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();t.Component=i,t.ComponentContainer=s,t.Provider=a},function(e,t,r){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function n(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */r.r(t),r.d(t,"LogLevel",(function(){return o})),r.d(t,"Logger",(function(){return c})),r.d(t,"setLogLevel",(function(){return u}));var o,i=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));var a=o.INFO,s=function(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(!(t<e.logLevel)){var a=(new Date).toISOString();switch(t){case o.DEBUG:case o.VERBOSE:console.log.apply(console,n(["["+a+"]  "+e.name+":"],r));break;case o.INFO:console.info.apply(console,n(["["+a+"]  "+e.name+":"],r));break;case o.WARN:console.warn.apply(console,n(["["+a+"]  "+e.name+":"],r));break;case o.ERROR:console.error.apply(console,n(["["+a+"]  "+e.name+":"],r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}},c=function(){function e(e){this.name=e,this._logLevel=a,this._logHandler=s,i.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.ERROR],e))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
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
function u(e){i.forEach((function(t){t.logLevel=e}))}},function(e,t,r){"use strict";r.r(t);var n=r(0);const o=document.getElementById("search");if(!(o instanceof HTMLInputElement))throw new Error("search is not an HTMLInputElement");const i=document.getElementById("form");if(!(i instanceof HTMLFormElement))throw new Error("form is not an HTMLFormElement");const a=document.getElementById("container");if(!(a instanceof HTMLDivElement))throw new Error("container is not an HTMLDivElement");(async function(){await Promise.all([r.e(2).then(r.bind(null,8)),r.e(1).then(r.bind(null,9))]),n.initializeApp({apiKey:"AIzaSyA6NxdrkCKIxqu3XBkx5hIVteOQ0jv2zrA",authDomain:"forward-rain-251118.firebaseapp.com",databaseURL:"https://forward-rain-251118.firebaseio.com",projectId:"forward-rain-251118",storageBucket:"forward-rain-251118.appspot.com",messagingSenderId:"924050779321",appId:"1:924050779321:web:ab16910e8859ce8c71ff68",measurementId:"G-R9KW7GPT0L"});const e=new n.auth.GoogleAuthProvider;await n.auth().signInWithPopup(e);const t=n.firestore().collection("documents");let s,c={},u=[],f={};i.addEventListener("submit",e=>(async function(e){if(!s){s={},(await t.get()).forEach(e=>{f[e.id]=e,s[e.id]=" "+e.get("index")+" "})}for(const e in c)c[e].hidden=!0;u.forEach((e,t)=>e.hidden=!0);let r=0;const n=" "==e[0],o=" "==e[e.length-1],i=e.trim();for(const t in s)if(-1!=s[t].indexOf(e)){if(!(t in c)){const e=document.createElement("img");e.src="https://storage.cloud.google.com/forward-rain-251118.appspot.com/documents/"+encodeURIComponent(t),e.hidden=!0;const r=new Promise(t=>e.addEventListener("load",t));document.body.appendChild(e),await r,c[t]=e}if(r>=u.length){const e=document.createElement("canvas");e.width=a.clientWidth/2.01,e.height=1.5*e.width,a.appendChild(e),u.push(e)}const e=u[r];e.hidden=!1;const s=e.getContext("2d"),l=e.width/c[t].width;s.resetTransform(),s.scale(l,l),s.drawImage(c[t],0,0),s.lineWidth=1/l+1,s.strokeStyle="red",f[t].get("blocks").filter(e=>{const t=e.text;return n&&o?t==i:n?t.startsWith(i):o?t.endsWith(i):-1!=t.indexOf(i)}).forEach(e=>{s.strokeRect(e.x,e.y,e.width,e.height)}),r+=1}}(o.value).catch(console.error),e.preventDefault(),!1))})().catch(console.error)}]);