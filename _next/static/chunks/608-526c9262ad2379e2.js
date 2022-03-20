(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{4074:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(5893),o=r(7294),a=r(9102),i=r(6738),l=r(1728),u=r(8219),c=r(6003),s=r.n(c);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function p(e){var t=e.index,r=e.style,o=e.data,a=o.heroId,i=o.heroes,l=o.heroesOrder,c=o.onClick,d=i[t];return(0,n.jsx)("button",{className:s()["hero-option"],disabled:a===d.id,"data-active":a===d.id,value:d.id,hidden:d.hidden,onClick:c,style:f({},r,{order:l[d.id]}),children:(0,n.jsx)(u.Z,f({id:d.id},d))},d.id)}function g(e){var t=e.heroId,r=e.heroes,a=e.heroesOrder,u=e.onSelect,c=(0,o.useCallback)((function(e){e.stopPropagation(),u(e.currentTarget.value)}),[u]),s=(0,o.useMemo)((function(){return{heroId:t,heroes:r,heroesOrder:a,onClick:c}}),[t,r,a,c]),d=(0,o.useCallback)((function(e){return r[e].id}),[r]);return(0,n.jsx)(l.Z,{children:function(e){var t=e.width,o=e.height;return(0,n.jsx)(i.t7,{width:t,height:o,itemCount:r.length,itemSize:160,itemData:s,itemKey:d,children:p})}})}var y=(0,o.memo)(g),v=r(6730),h=r(2722),b=r(5452);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}function S(e){var t=e.heroId,r=e.noDropdown,n=void 0!==r&&r,a=e.noStat,i=void 0!==a&&a,l=e.onSelect,u=e.resplendent,c=(0,b.K)(),s=c.heroDB,d=c.assistDB,f=c.resplendentDB,p=(0,o.useMemo)((function(){return(0,v.$f)({heroDB:s,assistDB:d,resplendentDB:f,noStat:i})}),[s,d,f,i]),g=(0,o.useMemo)((function(){var e=s[t];return"".concat(e.name," - ").concat(e.title)}),[t,s]),y=(0,o.useRef)(),S=(0,o.useState)(n||!1),j=S[0],O=S[1],B=(0,o.useCallback)((function(){O((function(e){return e?y.current.value=g:(y.current.focus(),y.current.value="",y.current.placeholder=g),!e}))}),[g]),w=(0,o.useCallback)((function(e){e.stopPropagation(),j||(O(!0),y.current.focus(),y.current.value="",y.current.placeholder=g)}),[j,g]),x=(0,o.useState)(""),_=x[0],C=x[1],D=(0,o.useCallback)((function(e){C(e.currentTarget.value)}),[]),P=(0,h.Z)(),R=P.allChecked,T=P.allIndeterminated,A=P.toggleAll,I=P.moveTypeFilter,H=P.toggleMoveType,N=P.weaponTypeFilter,M=P.toggleWeaponType,F=P.isRarity5,E=P.toggleRarity5,Z=P.isRarity4,G=P.toggleRarity4,U=P.isGrail,W=P.toggleGrail,$=P.isDuo,V=P.toggleDuo,K=P.isDancer,Y=P.toggleDancer,q=function(){var e=(0,o.useState)(!1),t=e[0],r=e[1],n=(0,o.useCallback)((function(){r((function(e){return!e}))}),[]),a=(0,o.useState)(!1),i=a[0],l=a[1],u=(0,o.useCallback)((function(){l((function(e){return!e}))}),[]),c=(0,o.useState)(!1),s=c[0],d=c[1],f=(0,o.useCallback)((function(){d((function(e){return!e}))}),[]),p=(0,o.useState)(!1),g=p[0],y=p[1],v=(0,o.useCallback)((function(){y((function(e){return!e}))}),[]),h=(0,o.useState)(!1),b=h[0],m=h[1],k=(0,o.useCallback)((function(){m((function(e){return!e}))}),[]);return{sortBy:(0,o.useMemo)((function(){var e=[];return t&&e.push("hp"),i&&e.push("atk"),s&&e.push("spd"),g&&e.push("def"),b&&e.push("res"),e}),[t,i,s,g,b]),sortByHP:t,toggleSortByHp:n,sortByAtk:i,toggleSortByAtk:u,sortBySpd:s,toggleSortBySpd:f,sortByDef:g,toggleSortByDef:v,sortByRes:b,toggleSortByRes:k}}(),z=q.sortBy,X=q.sortByHP,J=q.toggleSortByHp,L=q.sortByAtk,Q=q.toggleSortByAtk,ee=q.sortBySpd,te=q.toggleSortBySpd,re=q.sortByDef,ne=q.toggleSortByDef,oe=q.sortByRes,ae=q.toggleSortByRes,ie=(0,o.useMemo)((function(){return p.sort((function(e,t){var r=z.reduce((function(t,r){return t+e[r]}),0),n=z.reduce((function(e,r){return e+t[r]}),0);return r>n?-1:n>r?1:e.index-t.index})).reduce((function(e,t,r){return k({},e,m({},t.id,r))}),{})}),[p,z]),le=(0,o.useMemo)((function(){return p.filter((function(e){return!(0,v._u)(e,{filter:_,moveTypeFilter:I,weaponTypeFilter:N,isRarity5:F,isRarity4:Z,isGrail:U,isDuo:$,isDancer:K})})).map((function(e){return k({},e,{faceSrc:u?e.faceSrcR:e.faceSrc})})).sort((function(e,t){return ie[e.id]-ie[t.id]}))}),[p,ie,_,I,N,F,Z,U,$,K,u]),ue=(0,o.useCallback)((function(e){if(l(e),O(n||!1),!n){var t=s[e],r="".concat(t.name," - ").concat(t.title);y.current.value=r}}),[l,O,n,s]);return{inputRef:y,open:j,setOpen:O,toggleOpen:n?void 0:B,placeholder:g,disabled:p.length<2,onInputClick:n?void 0:w,handleOnSelect:ue,filter:_,onChangeFilter:D,allChecked:R,allIndeterminated:T,toggleAll:A,moveTypeFilter:I,toggleMoveType:H,weaponTypeFilter:N,toggleWeaponType:M,isRarity5:F,toggleRarity5:E,isRarity4:Z,toggleRarity4:G,isGrail:U,toggleGrail:W,isDuo:$,toggleDuo:V,isDancer:K,toggleDancer:Y,sortByHP:X,toggleSortByHp:J,sortByAtk:L,toggleSortByAtk:Q,sortBySpd:ee,toggleSortBySpd:te,sortByDef:re,toggleSortByDef:ne,sortByRes:oe,toggleSortByRes:ae,computedHeroes:le,heroesOrder:ie}}function j(e){var t=e.noDropdown,r=e.inputRef,o=e.disabled,a=e.placeholder,i=e.open,l=e.toggleOpen,u=e.onInputClick,c=e.onChangeFilter;return t?(0,n.jsx)("input",{className:s()["toggle-input"],ref:r,placeholder:"\u8f38\u5165\u540d\u5b57/\u7a31\u865f",onChange:c,disabled:o}):(0,n.jsxs)("button",{className:s().toggle,onClick:l,role:"button",disabled:o,"data-open":i,children:[(0,n.jsx)("input",{className:s()["toggle-input"],ref:r,defaultValue:a,placeholder:a,onClick:u,onChange:c,disabled:o}),(0,n.jsx)("span",{className:s().arrow,children:"\u25bc"})]})}var O=function(e){var t=e.heroId,r=e.onSelect,o=e.noDropdown,i=void 0!==o&&o,l=e.noStat,u=S({heroId:t,noDropdown:i,noStat:void 0!==l&&l,onSelect:r,resplendent:e.resplendent}),c=u.inputRef,d=u.open,f=u.toggleOpen,p=u.placeholder,g=u.disabled,v=u.onInputClick,h=u.handleOnSelect,b=u.onChangeFilter,m=u.allChecked,k=u.allIndeterminated,O=u.toggleAll,B=u.moveTypeFilter,w=u.toggleMoveType,x=u.weaponTypeFilter,_=u.toggleWeaponType,C=u.isRarity5,D=u.toggleRarity5,P=u.isRarity4,R=u.toggleRarity4,T=u.isGrail,A=u.toggleGrail,I=u.isDuo,H=u.toggleDuo,N=u.isDancer,M=u.toggleDancer,F=u.sortByHP,E=u.toggleSortByHp,Z=u.sortByAtk,G=u.toggleSortByAtk,U=u.sortBySpd,W=u.toggleSortBySpd,$=u.sortByDef,V=u.toggleSortByDef,K=u.sortByRes,Y=u.toggleSortByRes,q=u.computedHeroes,z=u.heroesOrder;return(0,n.jsxs)("div",{className:s().container,children:[(0,n.jsx)(j,{noDropdown:i,inputRef:c,disabled:g,placeholder:p,open:d,toggleOpen:f,onInputClick:v,onChangeFilter:b}),(0,n.jsx)("div",{className:s().anchor,"data-open":d,children:(0,n.jsxs)("div",{className:s().menu,"data-nobgcolor":i,children:[(0,n.jsx)(a.Z,{allChecked:m,allIndeterminated:k,toggleAll:O,moveTypeFilter:B,toggleMoveType:w,weaponTypeFilter:x,toggleWeaponType:_,isRarity5:C,toggleRarity5:D,isRarity4:P,toggleRarity4:R,isGrail:T,toggleGrail:A,isDuo:I,toggleDuo:H,isDancer:N,toggleDancer:M}),(0,n.jsxs)("div",{className:s()["stats-buttons"],children:[(0,n.jsx)("div",{className:s().title,children:"\u6392\u5e8f\u4f9d\u64da"}),(0,n.jsx)("button",{"data-active":F,onClick:E,children:"HP"}),(0,n.jsx)("button",{"data-active":Z,onClick:G,children:"\u653b\u64ca"}),(0,n.jsx)("button",{"data-active":U,onClick:W,children:"\u901f\u5ea6"}),(0,n.jsx)("button",{"data-active":$,onClick:V,children:"\u9632\u5b88"}),(0,n.jsx)("button",{"data-active":K,onClick:Y,children:"\u9b54\u9632"})]}),(0,n.jsx)("div",{className:s().list,children:(0,n.jsx)(y,{heroId:t,heroes:q,onSelect:h,heroesOrder:z})})]})})]})}},9365:function(e,t,r){"use strict";var n=r(5893),o=(r(7294),r(5431)),a=[0,1,2,3,4,5,6,7,8,9,10];t.Z=function(e){var t=e.merge,r=e.onSelect;return(0,n.jsx)(o.Z,{value:t,onSelect:r,options:a})}},5431:function(e,t,r){"use strict";var n=r(5893),o=r(7294),a=r(2342),i=r.n(a);t.Z=function(e){var t=e.value,r=e.options,a=e.onSelect,l=(0,o.useCallback)((function(e){a&&a(Number(e.currentTarget.value))}),[a]);return(0,n.jsx)("div",{className:i().wrapper,children:(0,n.jsx)("div",{className:i().container,children:r.map((function(e){return(0,n.jsx)("button",{value:e,"data-active":e===t,onClick:l,children:e},e)}))})})}},1865:function(e,t,r){"use strict";var n=r(5893),o=r(7294),a=r(6820),i=r.n(a),l=[{name:"5\u2606",value:5},{name:"4\u2605",value:4}];t.Z=function(e){var t=e.rarity,r=void 0===t?5:t,a=e.minRarity,u=void 0===a?5:a,c=e.onSelect,s=(0,o.useCallback)((function(e){c&&c(Number(e.currentTarget.value))}),[c]),d=(0,o.useMemo)((function(){return u<5?l:l.slice(0,1)}),[u]);return(0,n.jsx)("div",{className:i().raritypicker,children:d.map((function(e){return(0,n.jsx)("button",{onClick:s,"data-active":e.value===r,value:e.value,children:e.name},e.value)}))})}},9298:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{$r:function(){return l},Ty:function(){return u},Ud:function(){return c},YM:function(){return s},Zx:function(){return d}});var l=function(e){if(!e||"-"===e)return{boon:"",bane:""};var t=e.substring(1).split("-");return{boon:t[0],bane:t[1]}},u=function(e){var t=e.stats,r=void 0===t?{hp:0,atk:0,spd:0,def:0,res:0}:t,n=e.iv,u=e.merge,c=e.bloom,s=Array.isArray(r.hp),d=l(n),f=d.boon,p=d.bane,g={hp:1,atk:1,spd:1,def:1,res:1};g[f]+=1,g[p]-=1;var y,v,h,b=Object.entries(r).reduce((function(e,t){var r,n=i(t,2),l=n[0],u=n[1],c=s?u[g[l]]:u;return a({},e,(o(r={},l,c),o(r,"bst",e.bst+c),r))}),{bst:0});u>0&&(s?(b[p]=null===(y=r[p])||void 0===y?void 0:y[1],b.bst+=f===p?3:(null===(v=r[p])||void 0===v?void 0:v[1])-(null===(h=r[p])||void 0===h?void 0:h[0])):(b[p]=r[p],b.bst+=3));if(c&&c!==f){var m=2;u<=0&&p===c&&(m=1),b[c]=s?r[c][m]:r[c]}return b},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments.length>1?arguments[1]:void 0,r=l(t),n=r.boon,u=r.bane,c={hp:0,atk:0,spd:0,def:0,res:0};return c[n]+=1,c[u]-=1,Object.entries(e).reduce((function(e,t){var r=i(t,2),n=r[0];return a({},e,o({},n,r[1]+c[n]))}),{hp:0,atk:0,spd:0,def:0,res:0})},s=[{name:"+HP -\u653b\u64ca",value:"+hp-atk"},{name:"+HP -\u901f\u5ea6",value:"+hp-spd"},{name:"+HP -\u9632\u5b88",value:"+hp-def"},{name:"+HP -\u9b54\u9632",value:"+hp-res"},{name:"+\u653b\u64ca -HP",value:"+atk-hp"},{name:"+\u653b\u64ca -\u901f\u5ea6",value:"+atk-spd"},{name:"+\u653b\u64ca -\u9632\u5b88",value:"+atk-def"},{name:"+\u653b\u64ca -\u9b54\u9632",value:"+atk-res"},{name:"+\u901f\u5ea6 -HP",value:"+spd-hp"},{name:"+\u901f\u5ea6 -\u653b\u64ca",value:"+spd-atk"},{name:"+\u901f\u5ea6 -\u9632\u5b88",value:"+spd-def"},{name:"+\u901f\u5ea6 -\u9b54\u9632",value:"+spd-res"},{name:"+\u9632\u5b88 -HP",value:"+def-hp"},{name:"+\u9632\u5b88 -\u653b\u64ca",value:"+def-atk"},{name:"+\u9632\u5b88 -\u901f\u5ea6",value:"+def-spd"},{name:"+\u9632\u5b88 -\u9b54\u9632",value:"+def-res"},{name:"+\u9b54\u9632 -HP",value:"+res-hp"},{name:"+\u9b54\u9632 -\u653b\u64ca",value:"+res-atk"},{name:"+\u9b54\u9632 -\u901f\u5ea6",value:"+res-spd"},{name:"+\u9b54\u9632 -\u9632\u5b88",value:"+res-def"}];function d(e){var t=s.find((function(t){return e===t.value}));return(null===t||void 0===t?void 0:t.name)||"-"}},2078:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var n=function(e){var t=e.increaseIndexes,r=e.merge,n=e.initIV,o=void 0===n||n,a=e.bloom,i={hp:0,atk:0,spd:0,def:0,res:0};if(o&&r>0)for(var l=3,u=-1;l>0;)t[u+=1]!==a&&(l-=1,i[t[u]]=1);for(var c=0;c<2*r;c+=1){i[t[c%5]]+=1}return i}},2278:function(e,t,r){"use strict";r.d(t,{h:function(){return c},f:function(){return s}});var n=r(9298),o=r(2078);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=Object.entries(e).map((function(e,t){var r=u(e,2);return{key:r[0],stat:r[1],index:t}}));return t.sort((function(e,t){return e.stat>t.stat?-1:e.stat<t.stat?1:e.index<t.index?-1:e.index>t.index?1:0})),t.map((function(e){return e.key}))}var s=function(e){var t=e.rarity,r=e.stats,a=e.iv,s=e.merge,d=e.support,f=e.skillStats,p=e.lv1,g=e.arena,y=e.dragonflower,v=e.resplendent,h=e.mythicBonus1,b=e.mythicBonus2,m=e.mythicBonus3,k=e.mythicBonus4,S=e.bloom,j=(0,n.Ty)({stats:r["".concat(t)],iv:a,merge:s,bloom:S}),O=j.bst,B=l(j,["bst"]),w=(0,n.Ud)(r["".concat(t,"-1")],a),x=c((0,n.Ud)(r["5-1"],a)),_=(0,o.s)({increaseIndexes:x,merge:s,initIV:!a||"-"===a,bloom:S}),C=function(e,t){for(var r={hp:0,atk:0,spd:0,def:0,res:0},n=0;n<t;n+=1)r[e[n%5]]+=1;return r}(x,y),D=d?{hp:5,atk:2,spd:2,def:2,res:2}:{hp:0,atk:0,spd:0,def:0,res:0},P=g?{hp:10,atk:4,spd:4,def:4,res:4}:{hp:0,atk:0,spd:0,def:0,res:0},R=v?2:0,T=[h,b,m,k].reduce((function(e,t){switch(t){default:return e;case"atk":return e.hp+=5,e.atk+=3,e;case"spd":return e.hp+=5,e.spd+=4,e;case"def":return e.hp+=5,e.def+=5,e;case"res":return e.hp+=5,e.res+=5,e}}),{hp:0,atk:0,spd:0,def:0,res:0}),A=Object.entries(p?w:B).reduce((function(e,t){var r=u(t,2),n=r[0],o=r[1]+f[n]+_[n]+C[n]+D[n]+P[n]+T[n]+R;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},e,i({},n,o>-1?o:0))}),{});return{stats:A,bst:O}}},6003:function(e){e.exports={container:"heroselect_container__b9bq1",toggle:"heroselect_toggle__hNN9g","toggle-input":"heroselect_toggle-input__p_Y4j",arrow:"heroselect_arrow__ksMT1",anchor:"heroselect_anchor__H7O8F",menu:"heroselect_menu___28e4",list:"heroselect_list___USfg","stats-buttons":"heroselect_stats-buttons__f2lDE",title:"heroselect_title__9X0M7","hero-option":"heroselect_hero-option__4yMyD"}},2342:function(e){e.exports={container:"numberpicker_container__FCrib",wrapper:"numberpicker_wrapper__nHx1o"}},6820:function(e){e.exports={raritypicker:"raritypicker_raritypicker__M40Tm"}}}]);