(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{8172:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[X]}function i(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===$}(e)||Array.isArray(e)||!!e[Z]||!!e.constructor[Z]||y(e)||p(e))}function u(e,t,r){void 0===r&&(r=!1),0===c(e)?(r?Object.keys:U)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function c(e){var t=e[X];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:y(e)?2:p(e)?3:0}function a(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){return 2===c(e)?e.get(t):e[t]}function s(e,t,r){var n=c(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function y(e){return G&&e instanceof Map}function p(e){return W&&e instanceof Set}function g(e){return e.o||e.t}function d(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=J(e);delete t[X];for(var r=U(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function v(e,t){return void 0===t&&(t=!1),h(e)||o(e)||!i(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&u(e,(function(e,t){return v(t,!0)}),!0)),e}function b(){n(2)}function h(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function m(e){var t=Q[e];return t||n(18,e),t}function P(){return H}function O(e,t){t&&(m("Patches"),e.u=[],e.s=[],e.v=t)}function S(e){j(e),e.p.forEach(B),e.p=null}function j(e){e===H&&(H=e.l)}function D(e){return H={p:[],l:H,h:e,m:!0,_:0}}function B(e){var t=e[X];0===t.i||1===t.i?t.j():t.O=!0}function w(e,t){t._=t.p.length;var r=t.p[0],o=void 0!==e&&e!==r;return t.h.g||m("ES5").S(t,e,o),o?(r[X].P&&(S(t),n(4)),i(e)&&(e=k(t,e),t.l||R(t,e)),t.u&&m("Patches").M(r[X],e,t.u,t.s)):e=k(t,r,[]),S(t),t.u&&t.v(t.u,t.s),e!==K?e:void 0}function k(e,t,r){if(h(t))return t;var n=t[X];if(!n)return u(t,(function(o,i){return _(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return R(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=d(n.k):n.o;u(3===n.i?new Set(o):o,(function(t,i){return _(e,n,o,t,i,r)})),R(e,o,!1),r&&e.u&&m("Patches").R(n,r,e.u,e.s)}return n.o}function _(e,t,r,n,u,c){if(o(u)){var l=k(e,u,c&&t&&3!==t.i&&!a(t.D,n)?c.concat(n):void 0);if(s(r,n,l),!o(l))return;e.m=!1}if(i(u)&&!h(u)){if(!e.h.F&&e._<1)return;k(e,u),t&&t.A.l||R(e,u)}}function R(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&v(t,r)}function A(e,t){var r=e[X];return(r?g(r):e)[t]}function x(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function F(e){e.P||(e.P=!0,e.l&&F(e.l))}function T(e){e.o||(e.o=d(e.t))}function C(e,t,r){var n=y(t)?m("MapSet").N(t,r):p(t)?m("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:P(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,i=V;r&&(o=[n],i=q);var u=Proxy.revocable(o,i),c=u.revoke,a=u.proxy;return n.k=a,n.j=c,a}(t,r):m("ES5").J(t,r);return(r?r.A:P()).p.push(n),n}function E(e){return o(e)||n(22,e),function e(t){if(!i(t))return t;var r,n=t[X],o=c(t);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=M(t,o),n.I=!1}else r=M(t,o);return u(r,(function(t,o){n&&l(n.t,t)===o||s(r,t,e(o))})),3===o?new Set(r):r}(e)}function M(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return d(e)}var N,H,I="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),G="undefined"!=typeof Map,W="undefined"!=typeof Set,z="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,K=I?Symbol.for("immer-nothing"):((N={})["immer-nothing"]=!0,N),Z=I?Symbol.for("immer-draftable"):"__$immer_draftable",X=I?Symbol.for("immer-state"):"__$immer_state",$=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),U="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,J=Object.getOwnPropertyDescriptors||function(e){var t={};return U(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},Q={},V={get:function(e,t){if(t===X)return e;var r=g(e);if(!a(r,t))return function(e,t,r){var n,o=x(t,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.I||!i(n)?n:n===A(e.t,t)?(T(e),e.o[t]=C(e.A.h,n,e)):n},has:function(e,t){return t in g(e)},ownKeys:function(e){return Reflect.ownKeys(g(e))},set:function(e,t,r){var n=x(g(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=A(g(e),t),i=null==o?void 0:o[X];if(i&&i.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(f(r,o)&&(void 0!==r||a(e.t,t)))return!0;T(e),F(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==A(e.t,t)||t in e.t?(e.D[t]=!1,T(e),F(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=g(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},q={};u(V,(function(e,t){q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),q.deleteProperty=function(e,t){return V.deleteProperty.call(this,e[0],t)},q.set=function(e,t,r){return V.set.call(this,e[0],t,r,e[0])};var L=new(function(){function e(e){var t=this;this.g=z,this.F=!0,this.produce=function(e,r,o){if("function"==typeof e&&"function"!=typeof r){var u=r;r=e;var c=t;return function(e){var t=this;void 0===e&&(e=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return c.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(o))}))}}var a;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(e)){var l=D(t),s=C(t,e,void 0),f=!0;try{a=r(s),f=!1}finally{f?S(l):j(l)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return O(l,o),w(e,l)}),(function(e){throw S(l),e})):(O(l,o),w(a,l))}if(!e||"object"!=typeof e){if((a=r(e))===K)return;return void 0===a&&(a=e),t.F&&v(a,!0),a}n(21,e)},this.produceWithPatches=function(e,r){return"function"==typeof e?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))}:[t.produce(e,r,(function(e,t){n=e,o=t})),n,o];var n,o},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){i(e)||n(8),o(e)&&(e=E(e));var t=D(this),r=C(this,e,void 0);return r[X].C=!0,j(t),r},t.finishDraft=function(e,t){var r=(e&&e[X]).A;return O(r,t),w(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!z&&n(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var i=m("Patches").$;return o(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(r+1))}))},e}()),Y=L.produce;L.produceWithPatches.bind(L),L.setAutoFreeze.bind(L),L.setUseProxies.bind(L),L.applyPatches.bind(L),L.createDraft.bind(L),L.finishDraft.bind(L);t.ZP=Y},3574:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ranker",function(){return r(9589)}])},9589:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return S},default:function(){return j}});var n=r(5893),o=r(5452),i=r(7294),u=r(9008),c=r(9102),a=r(8219);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){var t=e.heroes,r=e.heroesOrder;return(0,n.jsx)(n.Fragment,{children:t.map((function(e){return(0,n.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({id:e.id,order:r[e.id]},e),e.id)}))})}var f=(0,i.memo)(s),y=r(3354),p=r(6730),g=r(2722);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function b(){var e=(0,o.K)(),t=e.heroDB,r=e.assistDB,n=e.resplendentDB,u=(0,i.useMemo)((function(){return(0,p.$f)({heroDB:t,assistDB:r,resplendentDB:n})}),[t,r,n]),c=(0,g.Z)(),a=c.allChecked,l=c.allIndeterminated,s=c.toggleAll,f=c.moveTypeFilter,b=c.toggleMoveType,h=c.weaponTypeFilter,m=c.toggleWeaponType,P=c.isRarity5,O=c.toggleRarity5,S=c.isRarity4,j=c.toggleRarity4,D=c.isGrail,B=c.toggleGrail,w=c.isDuo,k=c.toggleDuo,_=c.isDancer,R=c.toggleDancer,A=function(){var e=(0,i.useState)(!1),t=e[0],r=e[1],n=(0,i.useCallback)((function(){r((function(e){return!e}))}),[]),o=(0,i.useState)(!1),u=o[0],c=o[1],a=(0,i.useCallback)((function(){c((function(e){return!e}))}),[]),l=(0,i.useState)(!1),s=l[0],f=l[1],y=(0,i.useCallback)((function(){f((function(e){return!e}))}),[]),p=(0,i.useState)(!1),g=p[0],d=p[1],v=(0,i.useCallback)((function(){d((function(e){return!e}))}),[]),b=(0,i.useState)(!1),h=b[0],m=b[1],P=(0,i.useCallback)((function(){m((function(e){return!e}))}),[]);return{sortBy:(0,i.useMemo)((function(){var e=[];return t&&e.push("hp"),u&&e.push("atk"),s&&e.push("spd"),g&&e.push("def"),h&&e.push("res"),e}),[t,u,s,g,h]),sortByHP:t,toggleSortByHp:n,sortByAtk:u,toggleSortByAtk:a,sortBySpd:s,toggleSortBySpd:y,sortByDef:g,toggleSortByDef:v,sortByRes:h,toggleSortByRes:P}}(),x=A.sortBy,F=A.sortByHP,T=A.toggleSortByHp,C=A.sortByAtk,E=A.toggleSortByAtk,M=A.sortBySpd,N=A.toggleSortBySpd,H=A.sortByDef,I=A.toggleSortByDef,G=A.sortByRes,W=A.toggleSortByRes,z=(0,i.useMemo)((function(){return u.sort((function(e,t){var r=x.reduce((function(t,r){return t+e[r]}),0),n=x.reduce((function(e,r){return e+t[r]}),0);return r>n?-1:n>r?1:e.index-t.index})).reduce((function(e,t,r){return v({},e,d({},t.id,r))}),{})}),[u,x]),K=(0,i.useMemo)((function(){return u.map((function(e){return v({hidden:(0,p._u)(e,{moveTypeFilter:f,weaponTypeFilter:h,isRarity5:P,isRarity4:S,isGrail:D,isDuo:w,isDancer:_})},e)}))}),[u,f,h,P,S,D,w,_]);return{bg:(0,y.Z)("/assets/summon-stone.jpg"),allChecked:a,allIndeterminated:l,toggleAll:s,moveTypeFilter:f,toggleMoveType:b,weaponTypeFilter:h,toggleWeaponType:m,isRarity5:P,toggleRarity5:O,isRarity4:S,toggleRarity4:j,isGrail:D,toggleGrail:B,isDuo:w,toggleDuo:k,isDancer:_,toggleDancer:R,sortByHP:F,toggleSortByHp:T,sortByAtk:C,toggleSortByAtk:E,sortBySpd:M,toggleSortBySpd:N,sortByDef:H,toggleSortByDef:I,sortByRes:G,toggleSortByRes:W,computedHeroes:K,heroesOrder:z}}var h=r(3863),m=r.n(h),P=function(){var e=b(),t=e.bg,r=e.allChecked,o=e.allIndeterminated,i=e.toggleAll,a=e.moveTypeFilter,l=e.toggleMoveType,s=e.weaponTypeFilter,y=e.toggleWeaponType,p=e.isRarity5,g=e.toggleRarity5,d=e.isRarity4,v=e.toggleRarity4,h=e.isGrail,P=e.toggleGrail,O=e.isDuo,S=e.toggleDuo,j=e.isDancer,D=e.toggleDancer,B=e.sortByHP,w=e.toggleSortByHp,k=e.sortByAtk,_=e.toggleSortByAtk,R=e.sortBySpd,A=e.toggleSortBySpd,x=e.sortByDef,F=e.toggleSortByDef,T=e.sortByRes,C=e.toggleSortByRes,E=e.computedHeroes,M=e.heroesOrder;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.default,{children:(0,n.jsx)("title",{children:"\u9ad4\u8cea\u6392\u6392\u770b"})}),(0,n.jsx)("div",{className:m().container,style:{background:"url('".concat(t,"') center / cover no-repeat fixed")},children:(0,n.jsxs)("div",{className:m()["bg-layer"],children:[(0,n.jsx)(c.Z,{allChecked:r,allIndeterminated:o,toggleAll:i,moveTypeFilter:a,toggleMoveType:l,weaponTypeFilter:s,toggleWeaponType:y,isRarity5:p,toggleRarity5:g,isRarity4:d,toggleRarity4:v,isGrail:h,toggleGrail:P,isDuo:O,toggleDuo:S,isDancer:j,toggleDancer:D}),(0,n.jsxs)("div",{className:m()["stats-buttons"],children:[(0,n.jsx)("div",{className:m().title,children:"\u6392\u5e8f\u4f9d\u64da"}),(0,n.jsx)("button",{"data-active":B,onClick:w,children:"HP"}),(0,n.jsx)("button",{"data-active":k,onClick:_,children:"\u653b\u64ca"}),(0,n.jsx)("button",{"data-active":R,onClick:A,children:"\u901f\u5ea6"}),(0,n.jsx)("button",{"data-active":x,onClick:F,children:"\u9632\u5b88"}),(0,n.jsx)("button",{"data-active":T,onClick:C,children:"\u9b54\u9632"})]}),(0,n.jsx)("div",{className:m().list,children:(0,n.jsx)(f,{heroes:E,heroesOrder:M})})]})})]})},O=(0,i.memo)(P);var S=!0,j=function(e){var t=e.db;return(0,n.jsx)(o.Q.Provider,{value:t,children:(0,n.jsx)(O,{})})}},3863:function(e){e.exports={container:"Ranker_container__w1762","bg-layer":"Ranker_bg-layer__7wOre",list:"Ranker_list__lstuk","stats-buttons":"Ranker_stats-buttons__EgVs6",title:"Ranker_title__FEtXA"}}},function(e){e.O(0,[634,774,888,179],(function(){return t=3574,e(e.s=t);var t}));var t=e.O();_N_E=t}]);