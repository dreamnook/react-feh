(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{4606:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skilltable",function(){return t(2622)}])},2622:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var i=t(5893),r=t(9008),s=t(449),l=t(7294),a=t(2718),o=t(7623),c=t.n(o),u=t(6738),d=t(1728),h=t(5452);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){f(e,n,t[n])}))}return e}function m(e){var n=e.inheritablesDB,t=e.weaponGroup;if(!n||!n.weapon||!t)return[];var i=n.weapon[t];return i?Object.values(i).map((function(e){return p({query:"".concat(e.id.toLowerCase(),"|").concat(e.name)},e)})):[]}var v=t(6730);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function b(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=["#","grail","legendary","mythic","special","duo","harmonized"];function g(e){var n=e.skill,t=(0,h.K)().heroDB;return(0,l.useMemo)((function(){var e=n.pool||{},i=[];return j.forEach((function(n){var t=e[n];t&&Object.keys(t).forEach((function(e){i=i.concat(t[e])}))})),(0,v.oc)({heroDB:t,heroIds:i})}),[t,n])}function y(e){var n=e.filter,t=(0,h.K)().inheritablesDB,i=(0,l.useMemo)((function(){return function(e){var n=e.inheritablesDB;return n&&n.assist?Object.values(n.assist).map((function(e){return p({query:"".concat(e.id.toLowerCase(),"|").concat(e.name)},e)})):[]}({inheritablesDB:t})}),[t]);return{options:(0,l.useMemo)((function(){return i.filter((function(e){return!!e.id.startsWith("_")||(!n||e.query.includes(n.toLowerCase()))}))}),[n,i])}}function k(e){var n=e.filter,t=(0,h.K)().inheritablesDB,i=(0,l.useMemo)((function(){return function(e){var n=e.inheritablesDB;return n&&n.special?Object.values(n.special).map((function(e){return p({query:"".concat(e.id.toLowerCase(),"|").concat(e.name)},e)})):[]}({inheritablesDB:t})}),[t]);return{options:(0,l.useMemo)((function(){return i.filter((function(e){return!!e.id.startsWith("_")||(!n||e.query.includes(n.toLowerCase()))}))}),[n,i])}}function w(e){var n=e.filter,t=(0,h.K)().inheritablesDB,i=(0,l.useMemo)((function(){return function(e){var n=e.inheritablesDB;return n&&n.skillA?Object.values(n.skillA).map((function(e){return p({query:"".concat(e.id.toLowerCase(),"|").concat(e.name)},e)})):[]}({inheritablesDB:t})}),[t]);return{options:(0,l.useMemo)((function(){return i.filter((function(e){return!!e.id.startsWith("_")||(!n||e.query.includes(n.toLowerCase()))}))}),[n,i])}}function _(e){var n=e.filter,t=(0,h.K)().inheritablesDB,i=(0,l.useMemo)((function(){return function(e){var n=e.inheritablesDB;return n&&n.skillB?Object.values(n.skillB).map((function(e){return p({query:"".concat(e.id.toLowerCase(),"|").concat(e.name)},e)})):[]}({inheritablesDB:t})}),[t]);return{options:(0,l.useMemo)((function(){return i.filter((function(e){return!!e.id.startsWith("_")||(!n||e.query.includes(n.toLowerCase()))}))}),[n,i])}}function C(e){var n=e.filter,t=(0,h.K)().inheritablesDB,i=(0,l.useMemo)((function(){return function(e){var n=e.inheritablesDB;return n&&n.skillC?Object.values(n.skillC).map((function(e){return p({query:"".concat(e.id.toLowerCase(),"|").concat(e.name)},e)})):[]}({inheritablesDB:t})}),[t]);return{options:(0,l.useMemo)((function(){return i.filter((function(e){return!!e.id.startsWith("_")||(!n||e.query.includes(n.toLowerCase()))}))}),[n,i])}}var B=t(9619),D=t.n(B);function S(e){var n=e.skill,t=g({skill:n});return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:D().name,children:[n.name,(0,i.jsxs)("span",{className:D().sp,children:[n.sp," SP"]})]}),(0,i.jsx)("div",{className:D().heroIcons,children:t.map((function(e){return(0,i.jsx)(a.Z,{src:"/faces/".concat(e.id,".png"),loading:"lazy",width:79,height:79,title:e.name},e.id)}))})]})}function N(e){var n=e.index,t=e.style,r=e.data.skills[n];return(0,i.jsx)("div",{style:t,children:(0,i.jsx)(S,{skill:r},r.id)})}var Z=function(e){var n=y({filter:e.filter}).options,t=(0,l.useMemo)((function(){return{skills:n}}),[n]),r=(0,l.useCallback)((function(e){return n[e].id.startsWith("_")?48:143}),[n]),s=(0,l.useCallback)((function(e){return n[e].id}),[n]);return(0,i.jsx)(d.Z,{children:function(e){var l=e.width,a=e.height;return(0,i.jsx)(u.S_,{width:l,height:a,itemCount:n.length,itemSize:r,itemData:t,itemKey:s,children:N},n.length)}})};function q(e){var n=e.skill,t=g({skill:n});return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:D().name,children:[n.icon&&(0,i.jsx)(a.Z,{src:"/skills/".concat(n.icon),width:26,height:26}),n.name,(0,i.jsxs)("span",{className:D().sp,children:[n.sp," SP"]})]}),(0,i.jsx)("div",{className:D().heroIcons,children:t.map((function(e){return(0,i.jsx)(a.Z,{src:"/faces/".concat(e.id,".png"),loading:"lazy",width:79,height:79,title:e.name},e.id)}))})]})}function O(e){var n=e.index,t=e.style,r=e.data.skills[n];return(0,i.jsx)("div",{style:t,children:(0,i.jsx)(q,{skill:r},r.id)})}var M=function(e){var n=w({filter:e.filter}).options,t=(0,l.useMemo)((function(){return{skills:n}}),[n]),r=(0,l.useCallback)((function(e){return n[e].id.startsWith("_")?48:143}),[n]),s=(0,l.useCallback)((function(e){return n[e].id}),[n]);return(0,i.jsx)(d.Z,{children:function(e){var l=e.width,a=e.height;return(0,i.jsx)(u.S_,{width:l,height:a,itemCount:n.length,itemSize:r,itemData:t,itemKey:s,children:O},n.length)}})};function A(e){var n=e.skill,t=g({skill:n});return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:D().name,children:[n.icon&&(0,i.jsx)(a.Z,{src:"/skills/".concat(n.icon),width:26,height:26}),n.name,(0,i.jsxs)("span",{className:D().sp,children:[n.sp," SP"]})]}),(0,i.jsx)("div",{className:D().heroIcons,children:t.map((function(e){return(0,i.jsx)(a.Z,{src:"/faces/".concat(e.id,".png"),loading:"lazy",width:79,height:79,title:e.name},e.id)}))})]})}function z(e){var n=e.index,t=e.style,r=e.data.skills[n];return(0,i.jsx)("div",{style:t,children:(0,i.jsx)(A,{skill:r},r.id)})}var G=function(e){var n=_({filter:e.filter}).options,t=(0,l.useMemo)((function(){return{skills:n}}),[n]),r=(0,l.useCallback)((function(e){return n[e].id.startsWith("_")?48:143}),[n]),s=(0,l.useCallback)((function(e){return n[e].id}),[n]);return(0,i.jsx)(d.Z,{children:function(e){var l=e.width,a=e.height;return(0,i.jsx)(u.S_,{width:l,height:a,itemCount:n.length,itemSize:r,itemData:t,itemKey:s,children:z},n.length)}})};function W(e){var n=e.skill,t=g({skill:n});return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:D().name,children:[n.icon&&(0,i.jsx)(a.Z,{src:"/skills/".concat(n.icon),width:26,height:26}),n.name,(0,i.jsxs)("span",{className:D().sp,children:[n.sp," SP"]})]}),(0,i.jsx)("div",{className:D().heroIcons,children:t.map((function(e){return(0,i.jsx)(a.Z,{src:"/faces/".concat(e.id,".png"),loading:"lazy",width:79,height:79,title:e.name},e.id)}))})]})}function I(e){var n=e.index,t=e.style,r=e.data.skills[n];return(0,i.jsx)("div",{style:t,children:(0,i.jsx)(W,{skill:r},r.id)})}var P=function(e){var n=C({filter:e.filter}).options,t=(0,l.useMemo)((function(){return{skills:n}}),[n]),r=(0,l.useCallback)((function(e){return n[e].id.startsWith("_")?48:143}),[n]),s=(0,l.useCallback)((function(e){return n[e].id}),[n]);return(0,i.jsx)(d.Z,{children:function(e){var l=e.width,a=e.height;return(0,i.jsx)(u.S_,{width:l,height:a,itemCount:n.length,itemSize:r,itemData:t,itemKey:s,children:I},n.length)}})};function K(e){var n=e.skill,t=g({skill:n});return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:D().name,children:[n.name,(0,i.jsxs)("span",{className:D().sp,children:[n.sp," SP"]})]}),(0,i.jsx)("div",{className:D().heroIcons,children:t.map((function(e){return(0,i.jsx)(a.Z,{src:"/faces/".concat(e.id,".png"),loading:"lazy",width:79,height:79,title:e.name},e.id)}))})]})}function L(e){var n=e.index,t=e.style,r=e.data.skills[n];return(0,i.jsx)("div",{style:t,children:(0,i.jsx)(K,{skill:r},r.id)})}var T=function(e){var n=k({filter:e.filter}).options,t=(0,l.useMemo)((function(){return{skills:n}}),[n]),r=(0,l.useCallback)((function(e){return n[e].id.startsWith("_")?48:143}),[n]),s=(0,l.useCallback)((function(e){return n[e].id}),[n]);return(0,i.jsx)(d.Z,{children:function(e){var l=e.width,a=e.height;return(0,i.jsx)(u.S_,{width:l,height:a,itemCount:n.length,itemSize:r,itemData:t,itemKey:s,children:L},n.length)}})},E=t(7358);function R(e){var n=e.skill,t=g({skill:n});return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:D().name,children:[n.name,(0,i.jsxs)("span",{className:D().sp,children:[n.sp," SP"]})]}),(0,i.jsx)("div",{className:D().heroIcons,children:t.map((function(e){return(0,i.jsx)(a.Z,{src:"/faces/".concat(e.id,".png"),loading:"lazy",width:79,height:79,title:e.name},e.id)}))})]})}function J(e){var n=e.index,t=e.style,r=e.data.skills[n];if(r.id.startsWith("_")){var s=r.id.substring(1);"dragon"===s||"beast"===s?s="red-".concat(s):"bow"!==s&&"dagger"!==s||(s="white-".concat(s));var l=s;return(0,i.jsx)("div",{style:t,children:(0,i.jsxs)("div",{className:D().weaponGroup,children:[(0,i.jsx)("div",{className:D().icon,children:(0,i.jsx)(E.Z,{weaponType:l})}),r.name]})})}return(0,i.jsx)("div",{style:t,children:(0,i.jsx)(R,{skill:r},r.id)})}var U=function(e){var n=function(e){var n=e.filter,t=(0,h.K)().inheritablesDB,i=(0,l.useMemo)((function(){var e=m({inheritablesDB:t,weaponGroup:"red-sword"}),n=m({inheritablesDB:t,weaponGroup:"blue-lance"}),i=m({inheritablesDB:t,weaponGroup:"green-axe"}),r=m({inheritablesDB:t,weaponGroup:"white-staff"}),s=m({inheritablesDB:t,weaponGroup:"dragon"}),l=m({inheritablesDB:t,weaponGroup:"red-tome"}),a=m({inheritablesDB:t,weaponGroup:"blue-tome"}),o=m({inheritablesDB:t,weaponGroup:"green-tome"}),c=m({inheritablesDB:t,weaponGroup:"white-tome"}),u=m({inheritablesDB:t,weaponGroup:"bow"}),d=m({inheritablesDB:t,weaponGroup:"dagger"});return[{id:"_red-sword",name:"",query:""}].concat(b(e),[{id:"_blue-lance",name:"",query:""}],b(n),[{id:"_green-axe",name:"",query:""}],b(i),[{id:"_white-staff",name:"",query:""}],b(r),[{id:"_dragon",name:"",query:""}],b(s),[{id:"_red-tome",name:"",query:""}],b(l),[{id:"_blue-tome",name:"",query:""}],b(a),[{id:"_green-tome",name:"",query:""}],b(o),[{id:"_white-tome",name:"",query:""}],b(c),[{id:"_bow",name:"",query:""}],b(u),[{id:"_dagger",name:"",query:""}],b(d))}),[t]);return{options:(0,l.useMemo)((function(){return i.filter((function(e){return!!e.id.startsWith("_")||!n||e.query.includes(n.toLowerCase())}))}),[n,i])}}({filter:e.filter}),t=n.options,r=(0,l.useMemo)((function(){return{skills:t}}),[t]),s=(0,l.useCallback)((function(e){return t[e].id.startsWith("_")?48:143}),[t]),a=(0,l.useCallback)((function(e){return t[e].id}),[t]);return(0,i.jsx)(d.Z,{children:function(e){var n=e.width,l=e.height;return(0,i.jsx)(u.S_,{width:n,height:l,itemCount:t.length,itemSize:s,itemData:r,itemKey:a,children:J},t.length)}})};var V=function(e){var n=e.skillType,t=e.filter;return"weapon"===n?(0,i.jsx)(U,{filter:t}):"assist"===n?(0,i.jsx)(Z,{filter:t}):"special"===n?(0,i.jsx)(T,{filter:t}):"skillA"===n?(0,i.jsx)(M,{filter:t}):"skillB"===n?(0,i.jsx)(G,{filter:t}):"skillC"===n?(0,i.jsx)(P,{filter:t}):null};var X=function(){var e=(0,l.useState)("weapon"),n=e[0],t=e[1],r=function(e){e.stopPropagation(),t(e.currentTarget.value)},s=(0,l.useState)(""),o=s[0],u=s[1],d=(0,l.useCallback)((function(e){u(e.currentTarget.value)}),[]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:c().buttons,children:[(0,i.jsxs)("button",{type:"button",value:"weapon",disabled:"weapon"===n,onClick:r,children:[(0,i.jsx)(a.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/weapon.png"}),"\u6b66\u5668"]}),(0,i.jsxs)("button",{type:"button",value:"assist",disabled:"assist"===n,onClick:r,children:[(0,i.jsx)(a.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/assist.png"}),"\u8f14\u52a9"]}),(0,i.jsxs)("button",{type:"button",value:"special",disabled:"special"===n,onClick:r,children:[(0,i.jsx)(a.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/special.png"}),"\u5967\u7fa9"]}),(0,i.jsxs)("button",{type:"button",value:"skillA",disabled:"skillA"===n,onClick:r,children:[(0,i.jsx)(a.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-a.png"}),"A\u6280\u80fd"]}),(0,i.jsxs)("button",{type:"button",value:"skillB",disabled:"skillB"===n,onClick:r,children:[(0,i.jsx)(a.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-b.png"}),"B\u6280\u80fd"]}),(0,i.jsxs)("button",{type:"button",value:"skillC",disabled:"skillC"===n,onClick:r,children:[(0,i.jsx)(a.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-c.png"}),"C\u6280\u80fd"]})]}),(0,i.jsx)("div",{children:(0,i.jsx)("input",{className:c().input,placeholder:"\u6280\u80fd\u540d\u7a31",onChange:d})}),(0,i.jsx)("div",{className:c().list,children:(0,i.jsx)(V,{skillType:n,filter:o})})]})},F=t(3354);var H=t(2712),Q=t.n(H);function $(){var e=(0,F.Z)("/assets/summon-stone.jpg");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.default,{children:(0,i.jsx)("title",{children:"\u6280\u80fd\u627e\u4e00\u627e"})}),(0,i.jsx)("div",{className:Q().container,style:{background:"url('".concat(e,"') center / cover no-repeat fixed")},children:(0,i.jsx)("div",{className:Q()["bg-layer"],children:(0,i.jsx)(X,{})})})]})}var Y=function(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)($,{})})};var ee=function(){return(0,i.jsx)(Y,{})}},9619:function(e){e.exports={weaponGroup:"skillRow_weaponGroup__JmJzW",icon:"skillRow_icon__PZIzU",name:"skillRow_name__4vg8D",sp:"skillRow_sp__5i_ym",heroIcons:"skillRow_heroIcons___2W7w"}},7623:function(e){e.exports={buttons:"styles_buttons__HyxV2",input:"styles_input__tVlUs",spButtons:"styles_spButtons__hIRFq",list:"styles_list__BV_eH"}},2712:function(e){e.exports={container:"SkillTable_container__34BOf","bg-layer":"SkillTable_bg-layer__8oXQJ",title:"SkillTable_title__2sOuf","header-container":"SkillTable_header-container__lJDmJ"}}},function(e){e.O(0,[406,791,774,888,179],(function(){return n=4606,e(e.s=n);var n}));var n=e.O();_N_E=n}]);