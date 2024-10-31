/*! For license information please see blocks-commons.js.LICENSE.txt */
"use strict";(self.webpackChunkwcPPCP=self.webpackChunkwcPPCP||[]).push([[107],{270:(e,t,n)=>{n.r(t);var r=n(554);const a=JSON.parse('{"apiVersion":2,"name":"wc-ppcp/checkout-block","version":"2.0.0","title":"PayPal checkout block","category":"woocommerce","description":"Adds an invisible block to the checkout page.","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-fields-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"textdomain":"pymntpl-paypal-woocommerce"}');var o=n(307),i=n(818),c=n(801),l=n(617);(0,r.registerCheckoutBlock)({metadata:a,component:function(e){e.checkoutExtensionData,e.extensions;var t=(0,i.dispatch)("core/notices").createErrorNotice,n=(0,i.dispatch)(c.PAYMENT_STORE_KEY).__internalSetActivePaymentMethod,r=(0,l.getSetting)("ppcp_data");return(0,o.useEffect)((function(){n&&r.errorMessage&&(t(r.errorMessage,{context:"wc/checkout"}),n("ppcp"))}),[]),null}})},59:(e,t,n)=>{n.d(t,{I:()=>r});var r=function(e){var t,n,r,a=e.label,o=e.icon,i=e.description,c=e.onCancel;return React.createElement("div",{className:"wc-ppcp-components-payment-card__container"},React.createElement("div",{className:"wc-ppcp-components-payment-card__card"},React.createElement("img",{className:"wc-ppcp-components-payment-card__icon",alt:o.alt,src:o.src}),React.createElement("div",{className:"wc-ppcp-components-payment-card__description"},React.createElement("span",null,i))),React.createElement("div",{className:"wc-ppcp-components-payment-card-cancel__container"},React.createElement("span",(r=c,(n="onClick")in(t={className:"wc-ppcp-components-payment-card-cancel__label",onClick:c})?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t),a)))}},295:(e,t,n)=>{n.d(t,{nz:()=>s,VD:()=>i,sC:()=>c});var r=n(307),a=n(907);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(e){var t,n,i=(t=(0,r.useState)(null),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],l=i[1];return(0,r.useEffect)((function(){c||(0,a.loadPayPalSdk)(e).then((function(e){return l(e)}))}),[c]),c};n(622);var c=function(e){var t=e.event,n=e.responseTypes,a=e.messageContext,o=void 0===a?null:a,i=e.setPaymentData;(0,r.useEffect)((function(){var e=t((function(e){var t,r;if(null!=e&&null!==(t=e.processingResponse)&&void 0!==t&&null!==(r=t.paymentDetails)&&void 0!==r&&r.ppcpErrorMessage){i(null);var a=e.processingResponse.paymentDetails.ppcpErrorMessage;return{type:n.ERROR,retry:!0,message:a,messageContext:o}}return null}));return function(){e()}}),[t])};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){var t=e.width,n=e.node,a=e.className,o=void 0===a?"wc-ppcp-sm__container":a,i=l((0,r.useState)(window.innerWidth),2),c=i[0],u=i[1],s=l((0,r.useState)(n),2),p=s[0],f=s[1];(0,r.useEffect)((function(){f(n)}),[n]),(0,r.useEffect)((function(){var e=function(){return u(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,r.useEffect)((function(){p&&(p.clientWidth<=t?p.classList.add(o):p.classList.remove(o))}),[c,t,p])}},719:(e,t,n)=>{n.r(t);var r=n(307),a=n(554),o=n(817),i=n(617),c=n(295);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=(0,i.getSetting)("paylaterParams"),p=function(e){var t=e.cart,n=(e.extensions,e.context,s.enabled),o=(0,r.useRef)(null),p=t.cartTotals,f=p.currency_code,d=p.total_price,y=(0,c.VD)((0,i.getSetting)("paypalQueryParams")),m=(0,r.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({amount:d/Math.pow(10,p.currency_minor_unit),currency:f,placement:"payment"},s.options)}));return(0,r.useEffect)((function(){y&&y.Messages(m).render(o.current)}),[y,m]),n?React.createElement(a.TotalsWrapper,null,React.createElement("div",{className:"wc-block-components-totals-item"},React.createElement("div",{ref:o,className:"wc-ppcp-paylater-msg__container"}))):null};(0,o.registerPlugin)("wc-ppcp",{render:function(){return React.createElement(a.ExperimentalOrderMeta,null,React.createElement(p,null))},scope:"woocommerce-checkout"})},489:(e,t,n)=>{n.r(t);var r=n(307),a=n(613),o=n(617),i=n(818),c=n(59),l=n(622),u=n(295),s=["data","eventRegistration","activePaymentMethod","emitResponse"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t,n,a=e.data,o=e.eventRegistration,i=e.activePaymentMethod,y=e.emitResponse,m=(function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}}(e,s),o.onPaymentSetup),h=o.onCheckoutFail,v=y.responseTypes,b=y.noticeContexts,g=(t=(0,r.useState)(a("paymentData")),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),_=g[0],w=g[1],O=(0,r.useCallback)((function(){w(null)}),[]);return(0,u.sC)({event:h,responseTypes:v,messageContext:b.CHECKOUT,setPaymentData:w}),(0,r.useEffect)((function(){if("ppcp"===i&&_){var e=m((function(){var e=_.orderId,t=void 0===e?"":e,n=_.billingToken,r={meta:{paymentMethodData:{ppcp_paypal_order_id:t,ppcp_billing_token:void 0===n?"":n}}};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:v.SUCCESS},r)}));return e}}),[_,v,m,i]),_&&null!=_&&_.order?_.billingTokenData?React.createElement(c.I,{description:_.billingTokenData.payer_info.email,icon:a("icons").find((function(e){return"paypal_simple"===e.id})),label:l.ag.cancel,onCancel:O}):React.createElement(c.I,{description:_.order.payer.email_address,icon:a("icons").find((function(e){return"paypal_simple"===e.id})),label:l.ag.cancel,onCancel:O}):React.createElement("div",{className:"wc-ppcp-popup__container"},React.createElement("img",{src:a("redirectIcon")}),React.createElement("p",{dangerouslySetInnerHTML:{__html:a("i18n").redirectText}}))};const m=function(e){return React.createElement(y,e)};var h=n(989),v=n.n(h),b=n(907);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(){w=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new S(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s={};function p(){}function f(){}function d(){}var y={};c(y,a,(function(){return this}));var m=Object.getPrototypeOf,h=m&&m(m(k([])));h&&h!==t&&n.call(h,a)&&(y=h);var v=d.prototype=p.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==g(p)&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function O(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=d,c(v,"constructor",d),c(d,"constructor",f),f.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(_.prototype),c(_.prototype,o,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new _(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),c(v,i,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function O(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){O(o,r,a,i,c,"next",e)}function c(e){O(o,r,a,i,c,"throw",e)}i(void 0)}))}}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=n(819);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=["context"],N=["isExpress","context","billing","shippingData","eventRegistration","emitResponse","onError","onClick","onClose","onSubmit","activePaymentMethod","paymentMethodId"];function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var U=function(e){var t=(0,o.getSetting)(e);return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.hasOwnProperty(e)||(t[e]=n),t[e]}},F=U("ppcp_data"),Y=(U("ppcpGeneralData"),function(e){var t=e.context,n=void 0===t?"express_checkout":t,r=G(e,T);return React.createElement($,L({context:n,isExpress:!0,paymentMethodId:"paymentplugins_ppcp_express"},r))}),$=function(e){var t,n,a=e.isExpress,s=void 0!==a&&a,p=e.context,f=e.billing,d=e.shippingData,y=e.eventRegistration,m=e.emitResponse,h=e.onError,g=e.onClick,O=e.onClose,P=e.onSubmit,k=e.activePaymentMethod,C=e.paymentMethodId,D=(G(e,N),(0,o.getSetting)("paypalQueryParams")),I="true"===D.vault,T=f.billingAddress,U=y.onPaymentSetup,Y=y.onCheckoutFail,$=y.onCheckoutValidation,V=m.responseTypes,B=m.noticeContexts,W=(t=(0,r.useState)(),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),Z=W[0],q=W[1],z=(0,i.dispatch)("core/notices").createErrorNotice;(0,u.nz)({width:375,node:Z}),s||(h=(0,r.useCallback)((function(e){z(null!=e&&e.message?e.message:e,{context:B.PAYMENTS})}),[]));var K=(0,r.useCallback)((function(e){var t;q(null==e||null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)}),[]),H=function(e){var t=e.isExpress,n=e.onSubmit,a=e.billingAddress,o=e.shippingData,i=e.onPaymentSetup,c=e.responseTypes,u=e.activePaymentMethod,s=e.paymentMethodId,p=R((0,r.useState)(null),2),f=p[0],d=p[1],y=(0,r.useRef)(null),m=(0,r.useRef)(null),h=(0,r.useRef)(null),v=(0,r.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];d(null===e||""===e?null:A(A({},e),{},{submit:t}))}),[]),g=(0,r.useCallback)((function(){d(null)}),[]);(0,r.useEffect)((function(){y.current=f,m.current=a,h.current=o})),(0,r.useEffect)((function(){!(0,x.isEmpty)(f)&&f.submit&&n()}),[f,n]);var _=(0,r.useCallback)((function(e){var n,r,a,o,i,c,l,u,s,p=h.current.needsShipping,f={};if((0,x.isEmpty)(null==e||null===(n=e.payer)||void 0===n||null===(r=n.address)||void 0===r?void 0:r.address_line_1)){if(p&&!(0,x.isEmpty)(null==e||null===(a=e.purchase_units)||void 0===a||null===(o=a[0])||void 0===o?void 0:o.shipping)){var d=e.purchase_units[0].shipping;f=(0,b.convertPayPalAddressToCart)(d.address)}}else f=(0,b.convertPayPalAddressToCart)(e.payer.address);return null!=e&&null!==(i=e.payer)&&void 0!==i&&i.name&&(f=A(A({},f),O(e.payer.name))),null!=e&&null!==(c=e.payer)&&void 0!==c&&c.email_address&&t&&(f=A(A({},f),{},{email:e.payer.email_address})),null!=e&&null!==(l=e.payer)&&void 0!==l&&null!==(u=l.phone)&&void 0!==u&&null!==(s=u.phone_number)&&void 0!==s&&s.national_number&&(f=A(A({},f),{},{phone:e.payer.phone.phone_number.national_number})),f}),[]),w=(0,r.useCallback)((function(e){var n,r,a,o,i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"billing",l={},u=h.current.needsShipping;return"billing"===c?null!=e&&null!==(i=e.payer_info)&&void 0!==i&&i.billing_address&&(l=(0,b.convertPayPalAddressToCart)(e.payer_info.billing_address)):u&&e.shipping_address&&(l=(0,b.convertPayPalAddressToCart)(e.shipping_address)),null!=e&&null!==(n=e.payer_info)&&void 0!==n&&n.first_name&&(l=A(A({},l),{},{first_name:e.payer_info.first_name})),null!=e&&null!==(r=e.payer_info)&&void 0!==r&&r.last_name&&(l=A(A({},l),{},{last_name:e.payer_info.last_name})),null!=e&&null!==(a=e.payer_info)&&void 0!==a&&a.email&&t&&(l=A(A({},l),{},{email:e.payer_info.email})),null!=e&&null!==(o=e.payer_info)&&void 0!==o&&o.phone&&(l=A(A({},l),{},{phone:e.payer_info.phone})),l}),[]),O=(0,r.useCallback)((function(e){var t,n;if(Array.isArray(e)){var r=R(e,2);t=r[0],n=r[1]}else t=e.given_name,n=e.surname;return{first_name:t,last_name:n}}),[]),E=(0,r.useCallback)((function(e){var t,n,r={};if(null!=e&&null!==(t=e.purchase_units)&&void 0!==t&&null!==(n=t[0])&&void 0!==n&&n.shipping){var a,o=e.purchase_units[0].shipping;if(r=(0,b.convertPayPalAddressToCart)(o.address),null!=o&&null!==(a=o.name)&&void 0!==a&&a.full_name){var i=(0,b.extractFullName)(o.name.full_name);r=A(A({},r),O(i))}}return r}),[]);return(0,r.useEffect)((function(){if(u===s){var e=i((function(){var e=m.current,n=h.current,r=n.shippingAddress,a=n.needsShipping,o=y.current,i=o.orderId,u=o.billingToken,s=o.billingTokenData,p=void 0===s?null:s,f=o.order,d=void 0===f?{}:f,v={meta:A({paymentMethodData:{ppcp_paypal_order_id:i,ppcp_billing_token:u}},t&&{billingAddress:A(A(A(A({},l.cZ),e),_(d)),p&&w(p))})};return a&&t&&(v.meta.shippingAddress=A(A(A(A({},l.e0),r),E(d)),p&&w(p,"shipping"))),A({type:c.SUCCESS},v)}));return function(){return e()}}}),[t,i,u]),{paymentData:f,setPaymentData:v,clearPaymentData:g}}({isExpress:s,onSubmit:P,billingAddress:T,shippingData:d,onPaymentSetup:U,responseTypes:V,activePaymentMethod:k,paymentMethodId:C}),Q=H.paymentData,J=H.setPaymentData,X=H.clearPaymentData;(0,u.sC)({event:Y,responseTypes:V,messageContext:B.PAYMENTS,setPaymentData:J}),function(e){var t=e.isExpress,n=e.paymentData,a=e.onCheckoutValidation;(0,r.useEffect)((function(){if(!t)return a((function(){return!(null==n||!n.orderId)||{errorMessage:l.ag.order_button_click}}))}),[t,n])}({isExpress:s,onCheckoutValidation:$,paymentData:Q});var ee=(0,u.VD)(D),te=function(e){var t=e.isExpress,n=e.paypal,a=e.vault,o=e.buttonStyles,i=e.shippingData,c=e.billing,u=e.setError,s=e.setPaymentData,p=e.onClick,f=e.onClose,d=(0,r.useRef)(i),y=(0,r.useRef)(c),m=(0,r.useRef)({onClick:p,onClose:f,buttonState:!0,actions:{},error:null});(0,r.useEffect)((function(){d.current=i,y.current=c,m.current=S(S({},m.current),{},{onClick:p,onClose:f})})),(0,r.useCallback)((function(){Object.keys(m.current.actions).forEach((function(e){m.current.actions[e].disable(),m.current.buttonState=!1}))}),[]);var h=(0,r.useCallback)((function(e){var n=d.current,r=n.needsShipping,a=(n.shippingAddress,c.billingData,{fundingSource:e,style:g(e),onApprove:k,onError:x});return t?(a.onClick=function(){return m.current.onClick()},a.onCancel=function(){return m.current.onClose()}):a.onClick=function(){t||m.current.buttonState||u(r?l.ag.order_missing_address:l.ag.order_missing_billing_address)},a.onInit=function(n,r){t||(m.current.actions[e]=r)},O()?(a.createOrder=C,t&&r&&"venmo"!==e&&(a.onShippingChange=j)):a.createBillingAgreement=A,a}),[n,t,k,x,C,A,j,u]),g=(0,r.useCallback)((function(e){var t={};switch(e){case n.FUNDING.PAYPAL:t=o.paypal;break;case n.FUNDING.PAYLATER:t=o.paylater;break;case n.FUNDING.CREDIT:var r=["black","white"].includes(o.paylater.color)?o.paylater.color:"darkblue";t=S(S({},o.paylater),{},{color:r});break;case n.FUNDING.CARD:t=o.card;break;case n.FUNDING.VENMO:t=o.venmo}return t}),[n,o]),O=(0,r.useCallback)((function(){return!a}),[a]),P=(0,r.useCallback)(function(){var e=E(w().mark((function e(t){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",v()({method:"GET",path:"/wc-ppcp/v1/billing-agreement/token/".concat(t)}));case 4:throw e.prev=4,e.t0=e.catch(0),e.t0;case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),[]),k=(0,r.useCallback)(function(){var e=E(w().mark((function e(t,n){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={order:{},orderId:t.orderID,billingToken:t.billingToken||"",billingTokenData:null},!t.billingToken){e.next=14;break}return e.prev=2,e.next=5,P(t.billingToken);case 5:r.billingTokenData=e.sent,s(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),u(e.t0);case 12:e.next=15;break;case 14:n.order.get().then((function(e){s(S(S({},r),{},{order:e}))})).catch((function(e){u(e)}));case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),[u,P]),j=(0,r.useCallback)((function(e,t){var n,r=d.current.setSelectedRates,a=(0,b.convertPayPalAddressToCart)((null==e?void 0:e.shipping_address)||{},!0),o=(null==e||null===(n=e.selected_shipping_option)||void 0===n?void 0:n.id)||"";return v()({method:"POST",url:(0,l.q$)("wc-ppcp/v1/cart/shipping"),data:{order_id:e.orderID,address:a,shipping_method:(0,b.extractShippingMethod)(o),payment_method:"ppcp"}}).then((function(e){return e.code?t.reject():t.resolve()})).catch((function(e){return t.reject()})).finally((function(){o&&r.apply(void 0,function(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,l.K6)(o)))}))}),[]),x=(0,r.useCallback)((function(e){var t;if(!((null==e||null===(t=e.message)||void 0===t?void 0:t.indexOf("Window is closed"))>-1)){var n;if(m.current.error)return"validation_errors"===(null===(n=m.current.error)||void 0===n?void 0:n.code)?u(m.current.error.data.errors[0]):u(m.current.error.message);"validation_errors"===(null==e?void 0:e.code)?u(e.data.errors[0]):u(e)}}),[u]),C=(0,r.useCallback)(function(){var e=E(w().mark((function e(n,r){var a,o,i,c,u,s;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.current,o=a.needsShipping,i=a.shippingAddress,c=y.current,u=c.billingAddress,c.email,e.prev=2,e.next=5,v()({method:"POST",url:(0,l.q$)("wc-ppcp/v1/cart/order"),data:S(S({payment_method:"ppcp",address_provided:!t&&o,checkout_blocks:!0,context:t?null:"checkout"},o?{shipping_first_name:i.first_name,shipping_last_name:i.last_name,shipping_address_1:i.address_1,shipping_address_2:i.address_2,shipping_postcode:i.postcode,shipping_city:i.city,shipping_state:i.state,shipping_country:i.country}:null),{billing_first_name:u.first_name,billing_last_name:u.last_name,billing_address_1:u.address_1,billing_address_2:u.address_2,billing_postcode:u.postcode,billing_city:u.city,billing_state:u.state,billing_country:u.country,billing_email:u.email,billing_phone:u.phone,billing_company:u.company})});case 5:return s=e.sent,e.abrupt("return",s);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),[]),A=(0,r.useCallback)((function(e,n){var r=d.current,a=r.needsShipping,o=r.shippingAddress,i=y.current,c=i.billingAddress;return i.email,v()({method:"POST",url:(0,l.q$)("/wc-ppcp/v1/billing-agreement/token"),data:S(S({context:t?null:"checkout",payment_method:"ppcp"},a?{shipping_first_name:o.first_name,shipping_last_name:o.last_name,shipping_address_1:o.address_1,shipping_address_2:o.address_2,shipping_postcode:o.postcode,shipping_city:o.city,shipping_state:o.state,shipping_country:o.country}:null),{billing_first_name:c.first_name,billing_last_name:c.last_name,billing_address_1:c.address_1,billing_address_2:c.address_2,billing_postcode:c.postcode,billing_city:c.city,billing_state:c.state,billing_country:c.country,billing_email:c.email,billing_phone:c.phone,billing_company:c.company})}).then((function(e){return e})).catch((function(e){m.current.error=e}))}),[t,u]);return{getOptions:h}}({isExpress:s,paypal:ee,vault:I,intent:D.intent,buttonStyles:F("buttons"),billing:f,shippingData:d,eventRegistration:y,setError:h,setPaymentData:J,onClick:g,onClose:O}),ne=te.getOptions,re=function(e){var t=e.data,n=e.paypal,a=e.context,o=e.vault,i=void 0!==o&&o,c=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.useState)(!1),2),l=c[0],u=c[1];return(0,r.useEffect)((function(){if(n){var e=[],r=t("buttonOrder",[]);"express_checkout"===a?t("paypalSections",[]).includes(a)&&e.push(n.FUNDING.PAYPAL):e.push(n.FUNDING.PAYPAL),t("payLaterEnabled")&&t("payLaterSections",[]).includes(a)&&(i?e.push(n.FUNDING.CREDIT):e.push(n.FUNDING.PAYLATER)),t("cardEnabled")&&t("creditCardSections",[]).includes(a)&&e.push(n.FUNDING.CARD),t("venmoEnabled")&&t("venmoSections",[]).includes(a)&&e.push(n.FUNDING.VENMO),e.sort((function(e,t){return r.indexOf(e)<r.indexOf(t)?-1:1})),u([].concat(e))}}),[n]),l}({data:F,paypal:ee,context:p,vault:I});if((0,r.useEffect)((function(){var e=F("paymentData");e&&e.order&&J(e,!1)}),[]),!s&&Q)return Q.billingTokenData?React.createElement(c.I,{description:Q.billingTokenData.payer_info.email,icon:F("icons").find((function(e){return"paypal_simple"===e.id})),label:l.ag.cancel,onCancel:X}):React.createElement(c.I,{description:Q.order.payer.email_address,icon:F("icons").find((function(e){return"paypal_simple"===e.id})),label:l.ag.cancel,onCancel:X});if(ee&&re){var ae=ee.Buttons.driver("react",{React,ReactDOM}),oe=re.map((function(e){var t=ne(e);return ee.Buttons(t).isEligible()?React.createElement(ae,L({key:e},t)):null}));return React.createElement("div",{className:"wc-ppcp-paypal__buttons",ref:K},oe)}return null},V=function(e){var t=e.components,n=e.title,r=e.icons,a=e.id;Array.isArray(r)||(r=[r]);var o=t.PaymentMethodLabel,i=t.PaymentMethodIcons;return React.createElement("div",{className:"wc-ppcp-blocks-payment-method__label ".concat(a)},React.createElement(o,{text:n}),React.createElement(i,{icons:r}))};if((0,l.Zs)()&&F("paypalSections").includes("cart")||(0,l.jv)()&&function(){for(var e=0,t=["paypalSections","payLaterSections","creditCardSections","venmoSections"];e<t.length;e++)if(F(t[e],[]).includes("express_checkout"))return!0;return!1}()){var B="express_checkout";(0,l.Zs)()&&(B="cart"),(0,a.registerExpressPaymentMethod)({name:"paymentplugins_ppcp_express",canMakePayment:function(){return!0},content:React.createElement(Y,{context:B}),edit:React.createElement(Y,{context:B}),supports:{features:F("features")}})}(0,l.jv)()&&(F("placeOrderButtonEnabled")?(0,a.registerPaymentMethod)({name:"ppcp",label:React.createElement(V,{id:"ppcp",title:F("title"),icons:F("icons").find((function(e){return"paypal"===e.id}))}),ariaLabel:"PayPal",canMakePayment:function(){return!0},content:React.createElement(m,{data:F}),edit:React.createElement(m,{data:F}),placeOrderButtonLabel:F("i18n").buttonLabel,supports:{showSavedCards:!1,showSaveOption:!1,features:F("features")}}):(0,a.registerPaymentMethod)({name:"ppcp",label:React.createElement(V,{id:"ppcp",title:F("title"),icons:F("icons").find((function(e){return"paypal"===e.id}))}),ariaLabel:"PayPal",canMakePayment:function(){return!0},content:React.createElement($,{context:"checkout",paymentMethodId:"ppcp"}),edit:React.createElement($,{context:"checkout",paymentMethodId:"ppcp"}),supports:{showSavedCards:!1,showSaveOption:!1,features:F("features")}}))},622:(e,t,n)=>{n.d(t,{K6:()=>l,Zs:()=>s,ag:()=>y,cZ:()=>d,e0:()=>f,jv:()=>p,q$:()=>u});var r=n(907),a=n(617);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=e.match(r.SHIPPING_OPTION_REGEX);if(t){var n=t[1];return[t[2],n]}return[]},u=function(e){var t,n;return e=e.replace(/^\//,""),null===(t=(0,a.getSetting)("ppcpGeneralData"))||void 0===t||null===(n=t.ajaxRestPath)||void 0===n?void 0:n.replace("%s",e)},s=function(){return"cart"===(0,a.getSetting)("ppcpGeneralData").context},p=function(){return"checkout"===(0,a.getSetting)("ppcpGeneralData").context},f={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},d=i(i({},f),{},{email:""}),y=(0,a.getSetting)("ppcpGeneralData").i18n}}]);
//# sourceMappingURL=blocks-commons.js.map