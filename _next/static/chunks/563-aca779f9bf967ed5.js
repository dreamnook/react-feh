(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{8417:function(e,n,r){"use strict";var t=r(5893);r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}n.Z=function(e){return(0,t.jsxs)("svg",function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},e,{children:[(0,t.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),(0,t.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]}))}},8180:function(e,n,r){"use strict";r.d(n,{pp:function(){return u},bP:function(){return a},n0:function(){return c},JO:function(){return s},XR:function(){return d},lJ:function(){return p},i5:function(){return f},eM:function(){return v},Z4:function(){return h},lG:function(){return w}});var t=r(5893),o=r(2718),l=r(1354),i=r.n(l);function u(e){var n=e.children;return(0,t.jsx)("div",{className:i().skillTitle,children:n})}function a(e){var n=e.children,r=e.style;return(0,t.jsx)("div",{className:i().skillName,style:r,children:n})}function c(e){var n=e.children;return(0,t.jsx)("div",{className:i().skillSp,children:n})}function s(e){var n=e.src;return(0,t.jsx)(o.Z,{src:n,width:"32px",height:"32px",style:{width:"32px",height:"32px",marginRight:"0.25em"},loading:"lazy"})}function d(e){var n=e.children;return(0,t.jsx)("div",{className:i().might,children:n})}function p(e){var n=e.children;return(0,t.jsx)("div",{className:i().extractStats,children:n})}function f(e){var n=e.children;return(0,t.jsx)("div",{className:i().extractStat,children:n})}function v(e){var n=e.cd,r=e.children;return n?(0,t.jsx)("div",{style:{color:n<0?"lightskyblue":"palevioletred"},children:r}):null}function h(e){var n=e.children;return(0,t.jsx)("div",{style:{color:"salmon"},children:n})}var w=function(e){return e>0?"+".concat(e):"".concat(e)}},959:function(e,n,r){"use strict";var t=r(5893),o=r(7294),l=r(7308),i=r.n(l);function u(e){var n=e.children;return(0,t.jsx)("div",{className:i().weaponTitle,children:n})}function a(e){var n=e.children;return(0,t.jsx)("div",{className:i().weaponName,children:n})}function c(e){var n=e.children;return(0,t.jsx)("div",{className:i().weaponSp,children:n})}function s(e){var n=e.children;return(0,t.jsx)("div",{className:i().might,children:n})}function d(e){var n=e.children;return(0,t.jsx)("div",{className:i().extractStats,children:n})}function p(e){var n=e.children;return(0,t.jsx)("div",{className:i().extractStat,children:n})}function f(e){var n=e.cd,r=e.children;return n?(0,t.jsx)("div",{style:{color:n<0?"lightskyblue":"palevioletred"},children:r}):null}function v(e){var n=e.children;return(0,t.jsx)("div",{style:{color:"salmon"},children:n})}var h=function(e){return e>0?"+".concat(e):"".concat(e)};function w(e){var n=e.weapon;return n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(a,{children:n.name}),(0,t.jsxs)(c,{children:[n.sp,"SP"]})]}),(0,t.jsxs)(s,{children:["\u5a01\u529b ",n.mt]}),n.cd&&(0,t.jsxs)(f,{cd:n.cd,children:["\u5967\u7fa9 cd",h(n.cd)]}),(0,t.jsxs)(d,{children:[n.hp&&(0,t.jsxs)(p,{children:["HP ",h(n.hp)]}),n.atk&&(0,t.jsxs)(p,{children:["\u653b\u64ca ",h(n.atk)]}),n.spd&&(0,t.jsxs)(p,{children:["\u901f\u5ea6 ",h(n.spd)]}),n.def&&(0,t.jsxs)(p,{children:["\u9632\u5b88 ",h(n.def)]}),n.res&&(0,t.jsxs)(p,{children:["\u9b54\u9632 ",h(n.res)]})]}),n.exclusive&&(0,t.jsx)(v,{children:"\u9650\u5b9a\u672c\u4eba\u88dd\u5099"})]}):null}n.Z=(0,o.memo)(w)},3846:function(e,n,r){"use strict";r.d(n,{Gt:function(){return a},ab:function(){return c},NV:function(){return s},sq:function(){return d}});var t=r(4411),o=r(6730),l=r(2734),i=r(2683);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e){var n,r,a=e.rules2DB,c=e.heroDB,s=e.weaponDB,d=e.assistDB,p=e.defaultSkillDB,f=e.heroId,v=e.weaponId,h=e.skillXId;if(!a||!c||!d||!f)return[];var w=(0,o.cK)(c,f);if(!w)return[];var y=(0,t.g)({defaultSkillDB:p,heroId:f}),I=(0,i.i7)({heroDB:c,weaponDB:s,heroId:f,weaponId:v}),m=(null===I||void 0===I?void 0:I.rearmed)&&!(null===y||void 0===y||null===(n=y.weapon)||void 0===n?void 0:n[v]),B=h&&!(null===y||void 0===y||null===(r=y.skillX)||void 0===r?void 0:r[h]);return Object.values(d).filter((function(e){return e.exclusive?!!e.exclusive.includes(f)&&(!m&&!B||e.sp<400):(0,l.O3)({rules2DB:a,ruleId:e.rules,moveType:w.moveType,colorType:w.colorType,weaponType:w.weaponType})})).map((function(e){var n="".concat(e.id.toLowerCase(),"|").concat(e.name);return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}({},e,{query:n})}))}function c(e){var n,r,u=e.rules2DB,a=e.heroDB,c=e.weaponDB,s=e.assistDB,d=e.defaultSkillDB,p=e.heroId,f=e.weaponId,v=e.assistId,h=e.skillXId;if(!u||!a||!s||!p||!v)return!1;var w=(0,o.cK)(a,p);if(!w)return!1;var y=(0,t.g)({defaultSkillDB:d,heroId:p}),I=(0,i.i7)({heroDB:a,weaponDB:c,heroId:p,weaponId:f}),m=(null===I||void 0===I?void 0:I.rearmed)&&!(null===y||void 0===y||null===(n=y.weapon)||void 0===n?void 0:n[f]),B=h&&!(null===y||void 0===y||null===(r=y.skillX)||void 0===r?void 0:r[h]),D=s[v];return!!D&&(D.exclusive?!!D.exclusive.includes(p)&&(!m&&!B||D.sp<400):(0,l.O3)({rules2DB:u,ruleId:D.rules,moveType:w.moveType,colorType:w.colorType,weaponType:w.weaponType}))}function s(e){var n=e.assistDB,r=e.assistId;return n&&r?n[r]:null}function d(e){var n=s({assistDB:e.assistDB,assistId:e.assistId});return(null===n||void 0===n?void 0:n.name)||""}},4411:function(e,n,r){"use strict";r.d(n,{g:function(){return o},N:function(){return l}});var t={weaponId:"",assistId:"",specialId:"",skillAId:"",skillBId:"",skillCId:"",skillXId:""};function o(e){var n=e.defaultSkillDB,r=e.heroId;return n&&r&&n[r]?n[r]:null}function l(e){var n=e.defaultSkillDB,r=e.heroId;if(!n||!r||!n[r])return t;var o=n[r],l="",i="",u="",a="",c="",s="",d="";return o.weapon&&(l=Object.keys(o.weapon).pop()),o.assist&&(i=Object.keys(o.assist).pop()),o.special&&(u=Object.keys(o.special).pop()),o.skillA&&(a=Object.keys(o.skillA).pop()),o.skillB&&(c=Object.keys(o.skillB).pop()),o.skillC&&(s=Object.keys(o.skillC).pop()),o.skillX&&(d=Object.keys(o.skillX).pop()),{weaponId:l,assistId:i,specialId:u,skillAId:a,skillBId:c,skillCId:s,skillXId:d}}},2734:function(e,n,r){"use strict";function t(e){var n=e.rules2DB,r=e.ruleId;return n&&r?n[r]:null}function o(e,n){return!(!e||!n)&&0===(e&n)}function l(e){var n=e.rule2A,r=e.rule2B;return!n||!o(n.moveType,null===r||void 0===r?void 0:r.moveType)&&(!o(n.colorType,null===r||void 0===r?void 0:r.colorType)&&!o(n.weaponType,null===r||void 0===r?void 0:r.weaponType))}function i(e){var n=e.rules2DB,r=e.ruleId,l=e.moveType,i=e.colorType,u=e.weaponType;if("allDisabled"===r)return!1;var a=t({rules2DB:n,ruleId:l}),c=t({rules2DB:n,ruleId:i}),s=t({rules2DB:n,ruleId:u}),d=t({rules2DB:n,ruleId:r});return!d||!o(d.moveType,null===a||void 0===a?void 0:a.moveType)&&(!o(d.colorType,null===c||void 0===c?void 0:c.colorType)&&!o(d.weaponType,null===s||void 0===s?void 0:s.weaponType))}r.d(n,{o7:function(){return t},ob:function(){return l},O3:function(){return i}})},1160:function(e,n,r){"use strict";r.d(n,{AY:function(){return a},hJ:function(){return c},PU:function(){return s},cp:function(){return d}});var t=r(4411),o=r(6730),l=r(2734),i=r(2683);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e){var n,r,a=e.rules2DB,c=e.heroDB,s=e.weaponDB,d=e.skillDB,p=e.defaultSkillDB,f=e.heroId,v=e.weaponId,h=e.skillXId;if(!a||!c||!s||!d||!p||!f)return[];var w=(0,o.cK)(c,f);if(!w)return[];var y=(0,t.g)({defaultSkillDB:p,heroId:f}),I=(0,i.i7)({heroDB:c,weaponDB:s,heroId:f,weaponId:v}),m=(null===I||void 0===I?void 0:I.rearmed)&&!(null===y||void 0===y||null===(n=y.weapon)||void 0===n?void 0:n[v]),B=h&&!(null===y||void 0===y||null===(r=y.skillX)||void 0===r?void 0:r[h]);return Object.values(d).filter((function(e){return e.exclusive?!m&&!B&&e.exclusive.includes(f):(0,l.O3)({rules2DB:a,ruleId:e.rules,moveType:w.moveType,colorType:w.colorType,weaponType:w.weaponType})})).map((function(e){var n="".concat(e.id.toLowerCase(),"|").concat(e.name);return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}({},e,{query:n})}))}function c(e){var n,r,u=e.rules2DB,a=e.heroDB,c=e.weaponDB,s=e.skillDB,d=e.defaultSkillDB,p=e.heroId,f=e.weaponId,v=e.skillId,h=e.skillXId;if(!u||!a||!c||!s||!d||!p||!v)return!1;var w=(0,o.cK)(a,p);if(!w)return!1;var y=(0,t.g)({defaultSkillDB:d,heroId:p}),I=(0,i.i7)({heroDB:a,weaponDB:c,heroId:p,weaponId:f}),m=(null===I||void 0===I?void 0:I.rearmed)&&!(null===y||void 0===y||null===(n=y.weapon)||void 0===n?void 0:n[f]),B=h&&!(null===y||void 0===y||null===(r=y.skillX)||void 0===r?void 0:r[h]),D=s[v];return!!D&&(D.exclusive?!m&&!B&&D.exclusive.includes(p):(0,l.O3)({rules2DB:u,ruleId:D.rules,moveType:w.moveType,colorType:w.colorType,weaponType:w.weaponType}))}function s(e){var n=e.skillDB,r=e.skillId;return n&&r?n[r]:null}function d(e){var n=s({skillDB:e.skillDB,skillId:e.skillId});return n?{icon:n.icon,name:n.name}:{icon:"",name:""}}},1541:function(e,n,r){"use strict";r.d(n,{TZ:function(){return a},Hh:function(){return c},cf:function(){return s},R_:function(){return d}});var t=r(4411),o=r(6730),l=r(2734),i=r(2683);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e){var n,r,a=e.rules2DB,c=e.heroDB,s=e.weaponDB,d=e.specialDB,p=e.defaultSkillDB,f=e.heroId,v=e.weaponId,h=e.skillXId;if(!a||!c||!s||!d||!f)return[];var w=(0,o.cK)(c,f);if(!w)return[];var y=(0,t.g)({defaultSkillDB:p,heroId:f}),I=(0,i.i7)({heroDB:c,weaponDB:s,heroId:f,weaponId:v}),m=(null===I||void 0===I?void 0:I.rearmed)&&!(null===y||void 0===y||null===(n=y.weapon)||void 0===n?void 0:n[v]),B=h&&!(null===y||void 0===y||null===(r=y.skillX)||void 0===r?void 0:r[h]);return Object.values(d).filter((function(e){return e.exclusive?!m&&!B&&e.exclusive.includes(f):(0,l.O3)({rules2DB:a,ruleId:e.rules,moveType:w.moveType,colorType:w.colorType,weaponType:w.weaponType})})).map((function(e){var n="".concat(e.id.toLowerCase(),"|").concat(e.name);return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}({},e,{query:n})}))}function c(e){var n,r,u=e.rules2DB,a=e.heroDB,c=e.weaponDB,s=e.specialDB,d=e.defaultSkillDB,p=e.heroId,f=e.weaponId,v=e.specialId,h=e.skillXId;if(!u||!a||!c||!s||!p||!v)return!1;var w=(0,o.cK)(a,p);if(!w)return!1;var y=(0,t.g)({defaultSkillDB:d,heroId:p}),I=(0,i.i7)({heroDB:a,weaponDB:c,heroId:p,weaponId:f}),m=(null===I||void 0===I?void 0:I.rearmed)&&!(null===y||void 0===y||null===(n=y.weapon)||void 0===n?void 0:n[f]),B=h&&!(null===y||void 0===y||null===(r=y.skillX)||void 0===r?void 0:r[h]),D=s[v];return!!D&&(D.exclusive?!m&&!B&&D.exclusive.includes(p):(0,l.O3)({rules2DB:u,ruleId:D.rules,moveType:w.moveType,colorType:w.colorType,weaponType:w.weaponType}))}function s(e){var n=e.specialDB,r=e.specialId;return n&&r?n[r]:null}function d(e){var n=s({specialDB:e.specialDB,specialId:e.specialId});return(null===n||void 0===n?void 0:n.name)||""}},2683:function(e,n,r){"use strict";r.d(n,{CB:function(){return c},Mw:function(){return s},i7:function(){return d},fu:function(){return p},Mf:function(){return v},J7:function(){return h},Wu:function(){return y}});var t=r(6730);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){l(e,n,r[n])}))}return e}function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,l=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(l.push(t.value),!n||l.length!==n);i=!0);}catch(a){u=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){switch(e){case"red-bow":case"blue-bow":case"green-bow":case"white-bow":return"bow";case"red-dagger":case"blue-dagger":case"green-dagger":case"white-dagger":return"dagger";case"red-dragon":case"blue-dragon":case"green-dragon":case"white-dragon":return"dragon";case"red-beast":case"blue-beast":case"green-beast":case"white-beast":return"beast"}return e}function c(e){var n=e.heroDB,r=e.weaponDB,o=e.heroId;if(!r||!n||!o)return[];var l=(0,t.cK)(n,o);if(!l)return[];var u=a(l.weaponType),c=r[u];return u?Object.values(c).filter((function(e){return!e.exclusive||e.exclusive.includes(o)})).map((function(e){var n="".concat(e.id.toLowerCase(),"|").concat(e.name);return i({},e,{query:n})})):[]}function s(e){var n=e.heroDB,r=e.weaponDB,o=e.heroId,l=e.weaponId;if(!r||!n||!o||!l)return!1;var i=(0,t.cK)(n,o);if(!i)return!1;var u=a(i.weaponType),c=r[u];if(!u)return!1;var s=c[l];return!!s&&(!s.exclusive||s.exclusive.includes(o))}function d(e){var n=e.heroDB,r=e.weaponDB,o=e.heroId,l=e.weaponId;if(!r||!n||!l||!o)return null;var i=(0,t.cK)(n,o);return i?r[a(i.weaponType)][l]:null}function p(e){var n=d({heroDB:e.heroDB,weaponDB:e.weaponDB,heroId:e.heroId,weaponId:e.weaponId});return(null===n||void 0===n?void 0:n.name)||""}var f={atk:"\u653b\u64ca",spd:"\u901f\u5ea6",def:"\u9632\u5b88",res:"\u9b54\u9632"};function v(e){var n=e.heroDB,r=e.weaponDB,t=e.heroId,o=e.weaponId,l=d({heroDB:n,weaponDB:r,heroId:t,weaponId:o});return l&&l.refine?Object.entries(l.refine).filter((function(e){var n=u(e,2)[1];return!n.exclusive||n.exclusive.includes(t)})).map((function(e){var n=u(e,2),r=n[0],t=i({value:r},n[1]);return t.name||(t.name=f[r]||r),t.icon&&(t.icon="/skills/weapon/".concat(t.icon,".png")),!t.icon&&f[r]&&(t.icon="/skills/weapon/".concat(r,".png")),t})):[]}function h(e){var n=e.heroDB,r=e.weaponDB,t=e.heroId,o=e.weaponId,l=e.refineId;if(!s({heroDB:n,weaponDB:r,heroId:t,weaponId:o}))return!1;var i=d({heroDB:n,weaponDB:r,heroId:t,weaponId:o});return!!(i&&i.refine&&i.refine[l])&&(!i.refine[l].exclusive||i.refine[l].exclusive.includes(t))}function w(e){var n,r=e.heroDB,t=e.weaponDB,o=e.heroId,l=e.weaponId,i=e.refine,u=d({heroDB:r,weaponDB:t,heroId:o,weaponId:l});return null===u||void 0===u||null===(n=u.refine)||void 0===n?void 0:n[i]}function y(e){var n=e.heroDB,r=e.weaponDB,t=e.heroId,o=e.weaponId,l=e.refine,i=w({heroDB:n,weaponDB:r,heroId:t,weaponId:o,refine:l});return i?f[l]?{icon:l,name:f[l]}:{icon:i.icon,name:i.name}:{icon:"",name:""}}},1354:function(e){e.exports={skillTitle:"skillInfo_skillTitle__Z21ze",skillName:"skillInfo_skillName__4zW1T",skillSp:"skillInfo_skillSp__ksEK_",might:"skillInfo_might__RFRz7",extractStats:"skillInfo_extractStats__8XEae",extractStat:"skillInfo_extractStat__ucBek"}},7308:function(e){e.exports={weaponTitle:"weaponInfo_weaponTitle__lqbtZ",weaponName:"weaponInfo_weaponName__Gc8es",weaponSp:"weaponInfo_weaponSp__qBxGW",might:"weaponInfo_might__Tqclh",extractStats:"weaponInfo_extractStats__wyFzR",extractStat:"weaponInfo_extractStat__IZX2S"}}}]);