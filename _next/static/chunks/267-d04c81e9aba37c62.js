(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{5948:function(e,t,n){"use strict";var r=n(5893),l=n(1198);t.Z=function(e){let{onClick:t}=e;return(0,r.jsx)("button",{onClick:t,style:{backgroundColor:"transparent",display:"block"},"aria-label":"返回",children:(0,r.jsx)(l.Z,{fill:"white"})})}},2451:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(5893),l=n(7294),a=n(1246),c=n(6738),s=n(9142),i=n(4945),o=n(6676),u=n.n(o);function d(e){let{index:t,style:n,data:l}=e,{heroId:a,heroes:c,onClick:s}=l,o=c[t];return(0,r.jsx)("button",{className:u()["hero-option"],disabled:a===o.id,"data-active":a===o.id,value:o.id,hidden:o.hidden,onClick:s,style:n,children:(0,r.jsx)(i.Z,{id:o.id,...o})},o.id)}var h=(0,l.memo)(function(e){let{heroId:t,heroes:n,onSelect:a}=e,i=(0,l.useCallback)(e=>{e.stopPropagation(),a(e.currentTarget.value)},[a]),o=(0,l.useMemo)(()=>({heroId:t,heroes:n,onClick:i}),[t,n,i]),u=(0,l.useCallback)(e=>n[e].id,[n]);return(0,r.jsx)(s.ZP,{children:e=>{let{width:t,height:l}=e;return(0,r.jsx)(c.t7,{width:t,height:l,itemCount:n.length,itemSize:160,itemData:o,itemKey:u,children:d})}})}),p=n(9390),k=n(7966),f=n(6981);function x(e){let{noDropdown:t,inputRef:n,disabled:l,placeholder:a,open:c,toggleOpen:s,onInputClick:i,onChangeFilter:o}=e;return t?(0,r.jsx)("input",{className:u()["toggle-input"],ref:n,placeholder:"輸入名字/稱號",onChange:o,disabled:l}):(0,r.jsxs)("button",{className:u().toggle,onClick:s,role:"button",disabled:l,"data-open":c,children:[(0,r.jsx)("input",{className:u()["toggle-input"],ref:n,defaultValue:a,placeholder:a,onClick:i,onChange:o,disabled:l}),(0,r.jsx)("span",{className:u().arrow,children:"▼"})]})}var b=function(e){let{heroId:t,onSelect:n,noDropdown:c=!1,noStat:s=!1,resplendent:i,menuClassName:o=""}=e,{inputRef:d,open:b,toggleOpen:m,placeholder:g,disabled:v,onInputClick:j,handleOnSelect:C,onChangeFilter:_,allChecked:Z,allIndeterminated:y,toggleAll:N,moveTypeFilter:w,toggleMoveType:S,weaponTypeFilter:T,toggleWeaponType:H,isRarity5:M,toggleRarity5:P,isRarity4:L,toggleRarity4:A,isGrail:R,toggleGrail:D,isLegendary:I,toggleLegendary:F,isMythic:O,toggleMythic:z,isAscended:E,toggleAscended:G,isRearmed:K,toggleRearmed:U,isDuo:V,toggleDuo:q,isHar:X,toggleHar:B,isAttuned:W,toggleAttuned:Y,isEmblem:$,toggleEmblem:Q,isAided:J,toggleAided:ee,isDancer:et,toggleDancer:en,sortByHP:er,toggleSortByHp:el,sortByAtk:ea,toggleSortByAtk:ec,sortBySpd:es,toggleSortBySpd:ei,sortByDef:eo,toggleSortByDef:eu,sortByRes:ed,toggleSortByRes:eh,sortByDf:ep,toggleSortByDf:ek,sortByArena:ef,toggleSortByArena:ex,computedHeroes:eb}=function(e){let{heroId:t,noDropdown:n=!1,noStat:r=!1,onSelect:a,resplendent:c}=e,{heroDB:s,dragonflowersDB:i,assistDB:o,resplendentDB:u}=(0,f.K)(),d=(0,l.useMemo)(()=>(0,p.$f)({heroDB:s,dragonflowersDB:i,assistDB:o,resplendentDB:u,noStat:r}),[s,i,o,u,r]),h=(0,l.useMemo)(()=>{let e=s[t];return"".concat(e.name," - ").concat(e.title)},[t,s]),x=(0,l.useRef)(),[b,m]=(0,l.useState)(n||!1),g=(0,l.useCallback)(()=>{m(e=>(e?x.current.value=h:(x.current.focus(),x.current.value="",x.current.placeholder=h),!e))},[h]),v=(0,l.useCallback)(e=>{e.stopPropagation(),b||(m(!0),x.current.focus(),x.current.value="",x.current.placeholder=h)},[b,h]),[j,C]=(0,l.useState)(""),_=(0,l.useCallback)(e=>{C(e.currentTarget.value)},[]),{allChecked:Z,allIndeterminated:y,toggleAll:N,moveTypeFilter:w,toggleMoveType:S,weaponTypeFilter:T,toggleWeaponType:H,isRarity5:M,toggleRarity5:P,isRarity4:L,toggleRarity4:A,isGrail:R,toggleGrail:D,isLegendary:I,toggleLegendary:F,isMythic:O,toggleMythic:z,isAscended:E,toggleAscended:G,isRearmed:K,toggleRearmed:U,isDuo:V,toggleDuo:q,isHar:X,toggleHar:B,isAttuned:W,toggleAttuned:Y,isEmblem:$,toggleEmblem:Q,isAided:J,toggleAided:ee,isDancer:et,toggleDancer:en}=(0,k.Z)(),{sortBy:er,sortByHP:el,toggleSortByHp:ea,sortByAtk:ec,toggleSortByAtk:es,sortBySpd:ei,toggleSortBySpd:eo,sortByDef:eu,toggleSortByDef:ed,sortByRes:eh,toggleSortByRes:ep,sortByDf:ek,toggleSortByDf:ef,sortByArena:ex,toggleSortByArena:eb}=function(){let[e,t]=(0,l.useState)(!1),n=(0,l.useCallback)(()=>{t(e=>(e||v(!1),!e))},[]),[r,a]=(0,l.useState)(!1),c=(0,l.useCallback)(()=>{a(e=>(e||v(!1),!e))},[]),[s,i]=(0,l.useState)(!1),o=(0,l.useCallback)(()=>{i(e=>(e||v(!1),!e))},[]),[u,d]=(0,l.useState)(!1),h=(0,l.useCallback)(()=>{d(e=>(e||v(!1),!e))},[]),[p,k]=(0,l.useState)(!1),f=(0,l.useCallback)(()=>{k(e=>(e||v(!1),!e))},[]),[x,b]=(0,l.useState)(!1),m=(0,l.useCallback)(()=>{b(e=>(e||v(!1),!e))},[]),[g,v]=(0,l.useState)(!1),j=(0,l.useCallback)(()=>{v(e=>(e||(t(!1),a(!1),i(!1),d(!1),k(!1),b(!1)),!e))},[]);return{sortBy:(0,l.useMemo)(()=>{let t=[];return e&&t.push("hp"),r&&t.push("atk"),s&&t.push("spd"),u&&t.push("def"),p&&t.push("res"),t},[e,r,s,u,p]),sortByHP:e,toggleSortByHp:n,sortByAtk:r,toggleSortByAtk:c,sortBySpd:s,toggleSortBySpd:o,sortByDef:u,toggleSortByDef:h,sortByRes:p,toggleSortByRes:f,sortByDf:x,toggleSortByDf:m,sortByArena:g,toggleSortByArena:j}}(),em=(0,l.useMemo)(()=>d.sort((e,t)=>{if(ex)return e.bst>t.bst?-1:e.bst<t.bst?1:e.index-t.index;let n=er.reduce((t,n)=>t+e[n],0),r=er.reduce((e,n)=>e+t[n],0);return(ek&&(n+=e.dfDelta*er.length,r+=t.dfDelta*er.length),n>r)?-1:r>n?1:e.index-t.index}).reduce((e,t,n)=>({...e,[t.id]:n}),{}),[d,er,ek,ex]),eg=(0,l.useMemo)(()=>d.filter(e=>!(0,p._u)(e,{filter:j,moveTypeFilter:w,weaponTypeFilter:T,isRarity5:M,isRarity4:L,isGrail:R,isLegendary:I,isMythic:O,isAscended:E,isRearmed:K,isDuo:V,isHar:X,isAttuned:W,isEmblem:$,isAided:J,isDancer:et})).map(e=>({...e,faceSrc:c?e.faceSrcR:e.faceSrc})).sort((e,t)=>em[e.id]-em[t.id]),[d,j,w,T,M,L,R,I,O,E,K,V,X,W,$,J,et,c,em]),ev=(0,l.useCallback)(e=>{if(a(e),m(n||!1),!n){let t=s[e],n="".concat(t.name," - ").concat(t.title);x.current.value=n}},[a,m,n,s]);return{inputRef:x,open:b,setOpen:m,toggleOpen:n?void 0:g,placeholder:h,disabled:d.length<2,onInputClick:n?void 0:v,handleOnSelect:ev,filter:j,onChangeFilter:_,allChecked:Z,allIndeterminated:y,toggleAll:N,moveTypeFilter:w,toggleMoveType:S,weaponTypeFilter:T,toggleWeaponType:H,isRarity5:M,toggleRarity5:P,isRarity4:L,toggleRarity4:A,isGrail:R,toggleGrail:D,isLegendary:I,toggleLegendary:F,isMythic:O,toggleMythic:z,isAscended:E,toggleAscended:G,isRearmed:K,toggleRearmed:U,isDuo:V,toggleDuo:q,isHar:X,toggleHar:B,isAttuned:W,toggleAttuned:Y,isEmblem:$,toggleEmblem:Q,isAided:J,toggleAided:ee,isDancer:et,toggleDancer:en,sortByHP:el,toggleSortByHp:ea,sortByAtk:ec,toggleSortByAtk:es,sortBySpd:ei,toggleSortBySpd:eo,sortByDef:eu,toggleSortByDef:ed,sortByRes:eh,toggleSortByRes:ep,sortByDf:ek,toggleSortByDf:ef,sortByArena:ex,toggleSortByArena:eb,computedHeroes:eg,heroesOrder:em}}({heroId:t,noDropdown:c,noStat:s,onSelect:n,resplendent:i});return(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsx)(x,{noDropdown:c,inputRef:d,disabled:v,placeholder:g,open:b,toggleOpen:m,onInputClick:j,onChangeFilter:_}),(0,r.jsx)("div",{className:u().anchor,"data-open":b,children:(0,r.jsxs)("div",{className:"".concat(u().menu," ").concat(o),"data-nobgcolor":c,children:[(0,r.jsx)(a.Z,{allChecked:Z,allIndeterminated:y,toggleAll:N,moveTypeFilter:w,toggleMoveType:S,weaponTypeFilter:T,toggleWeaponType:H,isRarity5:M,toggleRarity5:P,isRarity4:L,toggleRarity4:A,isGrail:R,toggleGrail:D,isLegendary:I,toggleLegendary:F,isMythic:O,toggleMythic:z,isAscended:E,toggleAscended:G,isRearmed:K,toggleRearmed:U,isDuo:V,toggleDuo:q,isHar:X,toggleHar:B,isAttuned:W,toggleAttuned:Y,isEmblem:$,toggleEmblem:Q,isAided:J,toggleAided:ee,isDancer:et,toggleDancer:en}),(0,r.jsxs)("div",{className:u()["stats-buttons"],children:[(0,r.jsx)("div",{className:u().title,children:"排序依據"}),(0,r.jsxs)("div",{className:u().buttons,children:[(0,r.jsx)("button",{type:"button","data-active":er,onClick:el,children:"HP"}),(0,r.jsx)("button",{type:"button","data-active":ea,onClick:ec,children:"攻擊"}),(0,r.jsx)("button",{type:"button","data-active":es,onClick:ei,children:"速度"}),(0,r.jsx)("button",{type:"button","data-active":eo,onClick:eu,children:"防守"}),(0,r.jsx)("button",{type:"button","data-active":ed,onClick:eh,children:"魔防"}),(0,r.jsx)("button",{type:"button","data-active":ep,onClick:ek,children:"龍花"}),(0,r.jsx)("button",{type:"button","data-active":ef,onClick:ex,children:"鬥技"})]})]}),(0,r.jsx)("div",{className:u().list,children:(0,r.jsx)(h,{heroId:t,heroes:eb,onSelect:C})})]})})]})}},1198:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",...e,children:[(0,r.jsx)("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"})]})},6042:function(e,t,n){"use strict";var r=n(5893);n(7294);var l=n(3115);let a=[0,1,2,3,4,5,6,7,8,9,10];t.Z=function(e){let{merge:t,onSelect:n,oneLine:c}=e;return(0,r.jsx)(l.Z,{value:t,onSelect:n,options:a,oneLine:c})}},3115:function(e,t,n){"use strict";var r=n(5893),l=n(7294),a=n(4099),c=n.n(a);t.Z=l.memo(function(e){let{value:t,max:n,options:a,onSelect:s,oneLine:i}=e,o=(0,l.useCallback)(e=>{s&&s(Number(e.currentTarget.value))},[s]),u=(0,l.useMemo)(()=>i?a:a.slice(1),[i,a]);return(0,r.jsxs)("div",{className:c().wrapper,children:[!i&&(0,r.jsx)("div",{className:c().button0,children:(0,r.jsx)("button",{value:a[0],"data-active":a[0]===t,onClick:o,children:a[0]})}),(0,r.jsx)("div",{className:c().container,"data-oneline":i,children:u.map(e=>(0,r.jsx)("button",{value:e,"data-active":e===t,onClick:o,"data-exceed":n>0&&e>n,children:e},e))})]})})},1246:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var r=n(5893),l=n(7294),a=n(9329),c=n(857),s=n(6013),i=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"5星",children:(0,r.jsx)(s.Z,{})})},o=n(1450),u=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"4星",children:(0,r.jsx)(o.Z,{})})},d=n(5403),h=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"聖杯",children:(0,r.jsx)(d.Z,{})})},p=n(3274),k=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"連翼",children:(0,r.jsx)(p.Z,{})})},f=n(5302),x=n(1535),b=n.n(x),m=function(){let e=(0,f.Z)("/assets/dancer.png");return(0,r.jsx)("div",{className:b().icon,style:{backgroundImage:"url('".concat(e,"')")}})},g=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"再動",children:(0,r.jsx)(m,{})})},v=n(2697),j=n(9568),C=n(1413),_=n.n(C),Z=n(7545),y=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"雙界",children:(0,r.jsx)(Z.Z,{})})},N=n(1404),w=n.n(N),S=function(e){let{style:t}=e,n=(0,f.Z)("/assets/blessing-fire-atk.png");return(0,r.jsx)("div",{className:w().icon,style:{backgroundImage:"url('".concat(n,"')"),...t}})},T=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"傳承",children:(0,r.jsx)(S,{})})},H=n(4233),M=n.n(H),P=function(e){let{style:t={}}=e,n=(0,f.Z)("/assets/blessing-light-res.png");return(0,r.jsx)("div",{className:M().icon,style:{backgroundImage:"url('".concat(n,"')"),...t}})},L=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"神階",children:(0,r.jsx)(P,{})})},A=n(4668),R=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"開花",children:(0,r.jsx)(A.Z,{ascended:!0})})},D=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"魔器",children:(0,r.jsx)(A.Z,{rearmed:!0})})},I=n(3686),F=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"響心",children:(0,r.jsx)(I.Z,{})})},O=n(6491),z=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"紋章士",children:(0,r.jsx)(O.Z,{})})},E=n(7930),G=function(e){let{checked:t,onClick:n}=e;return(0,r.jsx)(c.Z,{checked:t,onClick:n,"aria-label":"攜伴",children:(0,r.jsx)(E.Z,{})})},K=(0,l.memo)(function(e){let{allChecked:t,allIndeterminated:n,toggleAll:c,moveTypeFilter:s,toggleMoveType:o,weaponTypeFilter:d,toggleWeaponType:p,isRarity5:f,toggleRarity5:x,isRarity4:b,toggleRarity4:m,isGrail:C,toggleGrail:Z,isLegendary:N,toggleLegendary:w,isMythic:S,toggleMythic:H,isDuo:M,toggleDuo:P,isHar:A,toggleHar:I,isAscended:O,toggleAscended:E,isRearmed:K,toggleRearmed:U,isAttuned:V,toggleAttuned:q,isEmblem:X,toggleEmblem:B,isAided:W,toggleAided:Y,isDancer:$,toggleDancer:Q}=e,[J,ee]=(0,l.useState)(!1),et=(0,l.useCallback)(()=>{ee(e=>!e)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:_().content,children:(0,r.jsxs)("div",{className:_().checkboxs,hidden:!J,children:[(0,r.jsx)(a.Z,{onClick:c,checked:t,indeterminated:n}),(0,r.jsx)(v.Z,{moveTypeFilter:s,onToggle:o}),(0,r.jsx)(j.Z,{weaponTypeFilter:d,onToggle:p}),(0,r.jsx)(i,{checked:f,onClick:x}),(0,r.jsx)(u,{checked:b,onClick:m}),(0,r.jsx)(T,{checked:N,onClick:w}),(0,r.jsx)(L,{checked:S,onClick:H}),(0,r.jsx)(k,{checked:M,onClick:P}),(0,r.jsx)(y,{checked:A,onClick:I}),(0,r.jsx)(R,{checked:O,onClick:E}),(0,r.jsx)(D,{checked:K,onClick:U}),(0,r.jsx)(F,{checked:V,onClick:q}),(0,r.jsx)(z,{checked:X,onClick:B}),(0,r.jsx)(G,{checked:W,onClick:Y}),(0,r.jsx)(h,{checked:C,onClick:Z}),(0,r.jsx)(g,{checked:$,onClick:Q})]})}),(0,r.jsx)("div",{className:_()["expand-button"],onClick:et,children:J?"▲":"▼"})]})})},2492:function(e,t,n){"use strict";n.d(t,{A:function(){return l},L:function(){return r}});let r=(e,t)=>{let n={hp:0,atk:0,spd:0,def:0,res:0};for(let r=0;r<t;r+=1){let t=r%5;n[e[t]]+=1}return n},l=e=>{let{dfKey:t,dragonflowersDB:n}=e;return(null==n?void 0:n[t])||0}},8266:function(e,t,n){"use strict";n.d(t,{$r:function(){return r},Ty:function(){return l},Ud:function(){return a},YM:function(){return c},Zx:function(){return s}});let r=e=>{if(!e||"-"===e)return{boon:"",bane:""};let t=e.substring(1).split("-");return{boon:t[0],bane:t[1]}},l=e=>{let{stats:t={hp:0,atk:0,spd:0,def:0,res:0},iv:n,merge:l,bloom:a}=e,c=Array.isArray(t.hp),{boon:s,bane:i}=r(n),o={hp:1,atk:1,spd:1,def:1,res:1};o[s]+=1,o[i]-=1;let u=Object.entries(t).reduce((e,t)=>{let[n,r]=t,l=c?r[o[n]]:r;return{...e,[n]:l,bst:e.bst+l}},{bst:0});if(l>0){if(c){var d,h,p;u[i]=null===(d=t[i])||void 0===d?void 0:d[1],u.bst+=s===i?3:(null===(h=t[i])||void 0===h?void 0:h[1])-(null===(p=t[i])||void 0===p?void 0:p[0])}else u[i]=t[i],u.bst+=3}if(a&&a!==s){let e=2;l<=0&&i===a&&(e=1),c?u[a]=t[a][e]:u[a]=t[a]}return u},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments.length>1?arguments[1]:void 0,{boon:n,bane:l}=r(t),a={hp:0,atk:0,spd:0,def:0,res:0};return a[n]+=1,a[l]-=1,Object.entries(e).reduce((e,t)=>{let[n,r]=t;return{...e,[n]:r+a[n]}},{hp:0,atk:0,spd:0,def:0,res:0})},c=[{name:"+HP -攻擊",value:"+hp-atk"},{name:"+HP -速度",value:"+hp-spd"},{name:"+HP -防守",value:"+hp-def"},{name:"+HP -魔防",value:"+hp-res"},{name:"+攻擊 -HP",value:"+atk-hp"},{name:"+攻擊 -速度",value:"+atk-spd"},{name:"+攻擊 -防守",value:"+atk-def"},{name:"+攻擊 -魔防",value:"+atk-res"},{name:"+速度 -HP",value:"+spd-hp"},{name:"+速度 -攻擊",value:"+spd-atk"},{name:"+速度 -防守",value:"+spd-def"},{name:"+速度 -魔防",value:"+spd-res"},{name:"+防守 -HP",value:"+def-hp"},{name:"+防守 -攻擊",value:"+def-atk"},{name:"+防守 -速度",value:"+def-spd"},{name:"+防守 -魔防",value:"+def-res"},{name:"+魔防 -HP",value:"+res-hp"},{name:"+魔防 -攻擊",value:"+res-atk"},{name:"+魔防 -速度",value:"+res-spd"},{name:"+魔防 -防守",value:"+res-def"}];function s(e){let t=c.find(t=>e===t.value);return(null==t?void 0:t.name)||"-"}},3370:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});let r=e=>{let{increaseIndexes:t,merge:n,initIV:r=!0,bloom:l}=e,a={hp:0,atk:0,spd:0,def:0,res:0};if(r&&n>0){let e=3,n=-1;for(;e>0;)t[n+=1]!==l&&(e-=1,a[t[n]]=1)}for(let e=0;e<2*n;e+=1){let n=e%5;a[t[n]]+=1}return a}},5737:function(e,t,n){"use strict";n.d(t,{f:function(){return s},h:function(){return c}});var r=n(8266),l=n(3370),a=n(2492);function c(e){let t=Object.entries(e).map((e,t)=>{let[n,r]=e;return{key:n,stat:r,index:t}});return t.sort((e,t)=>e.stat>t.stat?-1:e.stat<t.stat?1:e.index<t.index?-1:e.index>t.index?1:0),t.map(e=>{let{key:t}=e;return t})}let s=e=>{let{rarity:t,stats:n,iv:s,merge:i,support:o=!1,skillStats:u={hp:0,atk:0,spd:0,def:0,res:0},lv1:d=!1,arena:h=!1,dragonflower:p=0,resplendent:k=!1,mythicBonus1:f="",mythicBonus2:x="",mythicBonus3:b="",mythicBonus4:m="",bloom:g,emblemMerge:v,aided:j}=e,{bst:C,..._}=(0,r.Ty)({stats:n["".concat(t)],iv:s,merge:i,bloom:g}),Z=(0,r.Ud)(n["".concat(t,"-1")],s),y=c((0,r.Ud)(n["5-1"],s)),N=(0,l.s)({increaseIndexes:y,merge:i,initIV:!s||"-"===s,bloom:g}),w=(0,a.L)(y,p),S=o?{hp:5,atk:2,spd:2,def:2,res:2}:{hp:0,atk:0,spd:0,def:0,res:0},T=h?{hp:10,atk:4,spd:4,def:4,res:4}:{hp:0,atk:0,spd:0,def:0,res:0},H=k?2:0,M=(0,a.L)(["hp","atk","spd","def","res"],v),P=j?{hp:1,atk:1,spd:1,def:1,res:1}:{hp:0,atk:0,spd:0,def:0,res:0},L=[f,x,b,m].reduce((e,t)=>{switch(t){default:return e;case"atk":return e.hp+=5,e.atk+=3,e;case"spd":return e.hp+=5,e.spd+=4,e;case"def":return e.hp+=5,e.def+=5,e;case"res":return e.hp+=5,e.res+=5,e}},{hp:0,atk:0,spd:0,def:0,res:0});return{stats:Object.entries(d?Z:_).reduce((e,t)=>{let[n,r]=t,l=r+u[n]+N[n]+w[n]+S[n]+T[n]+L[n]+M[n]+P[n]+H;return{...e,[n]:l>-1?l:0}},{}),bst:C}}},1535:function(e){e.exports={icon:"icon_icon__XNGsC"}},1404:function(e){e.exports={icon:"icon_icon__9c1lK"}},4233:function(e){e.exports={icon:"icon_icon__qIw7r"}},6676:function(e){e.exports={container:"heroselect_container__gkNmD",toggle:"heroselect_toggle__c_xNc","toggle-input":"heroselect_toggle-input__LvQYT",arrow:"heroselect_arrow__qovxm",anchor:"heroselect_anchor__3wcvV",menu:"heroselect_menu__y_e6h",list:"heroselect_list__63TcK","stats-buttons":"heroselect_stats-buttons__xZG5V",title:"heroselect_title__XfXwy",buttons:"heroselect_buttons__t2emz","hero-option":"heroselect_hero-option__bRUdk"}},4099:function(e){e.exports={container:"numberpicker_container__NrWPL",wrapper:"numberpicker_wrapper__pu0FL",button0:"numberpicker_button0__bHqfm"}}}]);