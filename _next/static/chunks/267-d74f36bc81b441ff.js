(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{5948:function(e,t,n){"use strict";var l=n(5893),r=n(1198);t.Z=function(e){let{onClick:t}=e;return(0,l.jsx)("button",{onClick:t,style:{backgroundColor:"transparent",display:"block"},"aria-label":"返回",children:(0,l.jsx)(r.Z,{fill:"white"})})}},2451:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var l=n(5893),r=n(7294),c=n(1246),a=n(6738),s=n(9142),i=n(4945),o=n(6676),u=n.n(o);function d(e){let{index:t,style:n,data:r}=e,{heroId:c,heroes:a,onClick:s}=r,o=a[t];return(0,l.jsx)("button",{className:u()["hero-option"],disabled:c===o.id,"data-active":c===o.id,value:o.id,hidden:o.hidden,onClick:s,style:n,children:(0,l.jsx)(i.Z,{id:o.id,...o})},o.id)}var h=(0,r.memo)(function(e){let{heroId:t,heroes:n,onSelect:c}=e,i=(0,r.useCallback)(e=>{e.stopPropagation(),c(e.currentTarget.value)},[c]),o=(0,r.useMemo)(()=>({heroId:t,heroes:n,onClick:i}),[t,n,i]),u=(0,r.useCallback)(e=>n[e].id,[n]);return(0,l.jsx)(s.ZP,{children:e=>{let{width:t,height:r}=e;return(0,l.jsx)(a.t7,{width:t,height:r,itemCount:n.length,itemSize:160,itemData:o,itemKey:u,children:d})}})}),p=n(9390),k=n(7966),f=n(6981);function x(e){let{noDropdown:t,inputRef:n,disabled:r,placeholder:c,open:a,toggleOpen:s,onInputClick:i,onChangeFilter:o}=e;return t?(0,l.jsx)("input",{className:u()["toggle-input"],ref:n,placeholder:"輸入名字/稱號",onChange:o,disabled:r}):(0,l.jsxs)("button",{className:u().toggle,onClick:s,role:"button",disabled:r,"data-open":a,children:[(0,l.jsx)("input",{className:u()["toggle-input"],ref:n,defaultValue:c,placeholder:c,onClick:i,onChange:o,disabled:r}),(0,l.jsx)("span",{className:u().arrow,children:"▼"})]})}var b=function(e){let{heroId:t,onSelect:n,noDropdown:a=!1,noStat:s=!1,resplendent:i,menuClassName:o=""}=e,{inputRef:d,open:b,toggleOpen:m,placeholder:g,disabled:v,onInputClick:j,handleOnSelect:C,onChangeFilter:_,allChecked:Z,allIndeterminated:y,toggleAll:N,moveTypeFilter:w,toggleMoveType:S,weaponTypeFilter:T,toggleWeaponType:H,isRarity5:M,toggleRarity5:P,isRarity4:A,toggleRarity4:L,isGrail:R,toggleGrail:D,isLegendary:I,toggleLegendary:F,isMythic:O,toggleMythic:z,isAscended:E,toggleAscended:G,isRearmed:K,toggleRearmed:U,isDuo:V,toggleDuo:q,isHar:X,toggleHar:B,isAttuned:W,toggleAttuned:Y,isEmblem:$,toggleEmblem:Q,isAided:J,toggleAided:ee,isDancer:et,toggleDancer:en,sortByHP:el,toggleSortByHp:er,sortByAtk:ec,toggleSortByAtk:ea,sortBySpd:es,toggleSortBySpd:ei,sortByDef:eo,toggleSortByDef:eu,sortByRes:ed,toggleSortByRes:eh,sortByDf:ep,toggleSortByDf:ek,sortByArena:ef,toggleSortByArena:ex,computedHeroes:eb}=function(e){let{heroId:t,noDropdown:n=!1,noStat:l=!1,onSelect:c,resplendent:a}=e,{heroDB:s,dragonflowersDB:i,assistDB:o,resplendentDB:u}=(0,f.K)(),d=(0,r.useMemo)(()=>(0,p.$f)({heroDB:s,dragonflowersDB:i,assistDB:o,resplendentDB:u,noStat:l}),[s,i,o,u,l]),h=(0,r.useMemo)(()=>{let e=s[t];return"".concat(e.name," - ").concat(e.title)},[t,s]),x=(0,r.useRef)(),[b,m]=(0,r.useState)(n||!1),g=(0,r.useCallback)(()=>{m(e=>(e?x.current.value=h:(x.current.focus(),x.current.value="",x.current.placeholder=h),!e))},[h]),v=(0,r.useCallback)(e=>{e.stopPropagation(),b||(m(!0),x.current.focus(),x.current.value="",x.current.placeholder=h)},[b,h]),[j,C]=(0,r.useState)(""),_=(0,r.useCallback)(e=>{C(e.currentTarget.value)},[]),{allChecked:Z,allIndeterminated:y,toggleAll:N,moveTypeFilter:w,toggleMoveType:S,weaponTypeFilter:T,toggleWeaponType:H,isRarity5:M,toggleRarity5:P,isRarity4:A,toggleRarity4:L,isGrail:R,toggleGrail:D,isLegendary:I,toggleLegendary:F,isMythic:O,toggleMythic:z,isAscended:E,toggleAscended:G,isRearmed:K,toggleRearmed:U,isDuo:V,toggleDuo:q,isHar:X,toggleHar:B,isAttuned:W,toggleAttuned:Y,isEmblem:$,toggleEmblem:Q,isAided:J,toggleAided:ee,isDancer:et,toggleDancer:en}=(0,k.Z)(),{sortBy:el,sortByHP:er,toggleSortByHp:ec,sortByAtk:ea,toggleSortByAtk:es,sortBySpd:ei,toggleSortBySpd:eo,sortByDef:eu,toggleSortByDef:ed,sortByRes:eh,toggleSortByRes:ep,sortByDf:ek,toggleSortByDf:ef,sortByArena:ex,toggleSortByArena:eb}=function(){let[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)(()=>{t(e=>(e||v(!1),!e))},[]),[l,c]=(0,r.useState)(!1),a=(0,r.useCallback)(()=>{c(e=>(e||v(!1),!e))},[]),[s,i]=(0,r.useState)(!1),o=(0,r.useCallback)(()=>{i(e=>(e||v(!1),!e))},[]),[u,d]=(0,r.useState)(!1),h=(0,r.useCallback)(()=>{d(e=>(e||v(!1),!e))},[]),[p,k]=(0,r.useState)(!1),f=(0,r.useCallback)(()=>{k(e=>(e||v(!1),!e))},[]),[x,b]=(0,r.useState)(!1),m=(0,r.useCallback)(()=>{b(e=>(e||v(!1),!e))},[]),[g,v]=(0,r.useState)(!1),j=(0,r.useCallback)(()=>{v(e=>(e||(t(!1),c(!1),i(!1),d(!1),k(!1),b(!1)),!e))},[]);return{sortBy:(0,r.useMemo)(()=>{let t=[];return e&&t.push("hp"),l&&t.push("atk"),s&&t.push("spd"),u&&t.push("def"),p&&t.push("res"),t},[e,l,s,u,p]),sortByHP:e,toggleSortByHp:n,sortByAtk:l,toggleSortByAtk:a,sortBySpd:s,toggleSortBySpd:o,sortByDef:u,toggleSortByDef:h,sortByRes:p,toggleSortByRes:f,sortByDf:x,toggleSortByDf:m,sortByArena:g,toggleSortByArena:j}}(),em=(0,r.useMemo)(()=>d.sort((e,t)=>{if(ex)return e.bst>t.bst?-1:e.bst<t.bst?1:e.index-t.index;let n=el.reduce((t,n)=>t+e[n],0),l=el.reduce((e,n)=>e+t[n],0);return(ek&&(n+=e.dfDelta*el.length,l+=t.dfDelta*el.length),n>l)?-1:l>n?1:e.index-t.index}).reduce((e,t,n)=>({...e,[t.id]:n}),{}),[d,el,ek,ex]),eg=(0,r.useMemo)(()=>d.filter(e=>!(0,p._u)(e,{filter:j,moveTypeFilter:w,weaponTypeFilter:T,isRarity5:M,isRarity4:A,isGrail:R,isLegendary:I,isMythic:O,isAscended:E,isRearmed:K,isDuo:V,isHar:X,isAttuned:W,isEmblem:$,isAided:J,isDancer:et})).map(e=>({...e,faceSrc:a?e.faceSrcR:e.faceSrc})).sort((e,t)=>em[e.id]-em[t.id]),[d,j,w,T,M,A,R,I,O,E,K,V,X,W,$,J,et,a,em]),ev=(0,r.useCallback)(e=>{if(c(e),m(n||!1),!n){let t=s[e],n="".concat(t.name," - ").concat(t.title);x.current.value=n}},[c,m,n,s]);return{inputRef:x,open:b,setOpen:m,toggleOpen:n?void 0:g,placeholder:h,disabled:d.length<2,onInputClick:n?void 0:v,handleOnSelect:ev,filter:j,onChangeFilter:_,allChecked:Z,allIndeterminated:y,toggleAll:N,moveTypeFilter:w,toggleMoveType:S,weaponTypeFilter:T,toggleWeaponType:H,isRarity5:M,toggleRarity5:P,isRarity4:A,toggleRarity4:L,isGrail:R,toggleGrail:D,isLegendary:I,toggleLegendary:F,isMythic:O,toggleMythic:z,isAscended:E,toggleAscended:G,isRearmed:K,toggleRearmed:U,isDuo:V,toggleDuo:q,isHar:X,toggleHar:B,isAttuned:W,toggleAttuned:Y,isEmblem:$,toggleEmblem:Q,isAided:J,toggleAided:ee,isDancer:et,toggleDancer:en,sortByHP:er,toggleSortByHp:ec,sortByAtk:ea,toggleSortByAtk:es,sortBySpd:ei,toggleSortBySpd:eo,sortByDef:eu,toggleSortByDef:ed,sortByRes:eh,toggleSortByRes:ep,sortByDf:ek,toggleSortByDf:ef,sortByArena:ex,toggleSortByArena:eb,computedHeroes:eg,heroesOrder:em}}({heroId:t,noDropdown:a,noStat:s,onSelect:n,resplendent:i});return(0,l.jsxs)("div",{className:u().container,children:[(0,l.jsx)(x,{noDropdown:a,inputRef:d,disabled:v,placeholder:g,open:b,toggleOpen:m,onInputClick:j,onChangeFilter:_}),(0,l.jsx)("div",{className:u().anchor,"data-open":b,children:(0,l.jsxs)("div",{className:"".concat(u().menu," ").concat(o),"data-nobgcolor":a,children:[(0,l.jsx)(c.Z,{allChecked:Z,allIndeterminated:y,toggleAll:N,moveTypeFilter:w,toggleMoveType:S,weaponTypeFilter:T,toggleWeaponType:H,isRarity5:M,toggleRarity5:P,isRarity4:A,toggleRarity4:L,isGrail:R,toggleGrail:D,isLegendary:I,toggleLegendary:F,isMythic:O,toggleMythic:z,isAscended:E,toggleAscended:G,isRearmed:K,toggleRearmed:U,isDuo:V,toggleDuo:q,isHar:X,toggleHar:B,isAttuned:W,toggleAttuned:Y,isEmblem:$,toggleEmblem:Q,isAided:J,toggleAided:ee,isDancer:et,toggleDancer:en}),(0,l.jsxs)("div",{className:u()["stats-buttons"],children:[(0,l.jsx)("div",{className:u().title,children:"排序依據"}),(0,l.jsxs)("div",{className:u().buttons,children:[(0,l.jsx)("button",{type:"button","data-active":el,onClick:er,children:"HP"}),(0,l.jsx)("button",{type:"button","data-active":ec,onClick:ea,children:"攻擊"}),(0,l.jsx)("button",{type:"button","data-active":es,onClick:ei,children:"速度"}),(0,l.jsx)("button",{type:"button","data-active":eo,onClick:eu,children:"防守"}),(0,l.jsx)("button",{type:"button","data-active":ed,onClick:eh,children:"魔防"}),(0,l.jsx)("button",{type:"button","data-active":ep,onClick:ek,children:"龍花"}),(0,l.jsx)("button",{type:"button","data-active":ef,onClick:ex,children:"鬥技"})]})]}),(0,l.jsx)("div",{className:u().list,children:(0,l.jsx)(h,{heroId:t,heroes:eb,onSelect:C})})]})})]})}},1198:function(e,t,n){"use strict";var l=n(5893);n(7294),t.Z=e=>(0,l.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",...e,children:[(0,l.jsx)("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),(0,l.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"})]})},6042:function(e,t,n){"use strict";var l=n(5893);n(7294);var r=n(3115);let c=[0,1,2,3,4,5,6,7,8,9,10];t.Z=function(e){let{merge:t,onSelect:n,oneLine:a}=e;return(0,l.jsx)(r.Z,{value:t,onSelect:n,options:c,oneLine:a})}},3115:function(e,t,n){"use strict";var l=n(5893),r=n(7294),c=n(4099),a=n.n(c);t.Z=r.memo(function(e){let{value:t,max:n,options:c,onSelect:s,oneLine:i}=e,o=(0,r.useCallback)(e=>{s&&s(Number(e.currentTarget.value))},[s]),u=(0,r.useMemo)(()=>i?c:c.slice(1),[i,c]);return(0,l.jsxs)("div",{className:a().wrapper,children:[!i&&(0,l.jsx)("div",{className:a().button0,children:(0,l.jsx)("button",{value:c[0],"data-active":c[0]===t,onClick:o,children:c[0]})}),(0,l.jsx)("div",{className:a().container,"data-oneline":i,children:u.map(e=>(0,l.jsx)("button",{value:e,"data-active":e===t,onClick:o,"data-exceed":n>0&&e>n,children:e},e))})]})})},1246:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var l=n(5893),r=n(7294),c=n(9329),a=n(857),s=n(6013),i=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"5星",children:(0,l.jsx)(s.Z,{})})},o=n(1450),u=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"4星",children:(0,l.jsx)(o.Z,{})})},d=n(5403),h=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"聖杯",children:(0,l.jsx)(d.Z,{})})},p=n(3274),k=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"連翼",children:(0,l.jsx)(p.Z,{})})},f=n(5302),x=n(1535),b=n.n(x),m=function(){let e=(0,f.Z)("/assets/dancer.png");return(0,l.jsx)("div",{className:b().icon,style:{backgroundImage:"url('".concat(e,"')")}})},g=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"再動",children:(0,l.jsx)(m,{})})},v=n(2697),j=n(9568),C=n(1413),_=n.n(C),Z=n(7545),y=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"雙界",children:(0,l.jsx)(Z.Z,{})})},N=n(1404),w=n.n(N),S=function(e){let{style:t}=e,n=(0,f.Z)("/assets/blessing-fire-atk.png");return(0,l.jsx)("div",{className:w().icon,style:{backgroundImage:"url('".concat(n,"')"),...t}})},T=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"傳承",children:(0,l.jsx)(S,{})})},H=n(4233),M=n.n(H),P=function(e){let{style:t={}}=e,n=(0,f.Z)("/assets/blessing-light-res.png");return(0,l.jsx)("div",{className:M().icon,style:{backgroundImage:"url('".concat(n,"')"),...t}})},A=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"神階",children:(0,l.jsx)(P,{})})},L=n(4668),R=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"開花",children:(0,l.jsx)(L.Z,{ascended:!0})})},D=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"魔器",children:(0,l.jsx)(L.Z,{rearmed:!0})})},I=n(3686),F=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"響心",children:(0,l.jsx)(I.Z,{})})},O=n(6491),z=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"紋章士",children:(0,l.jsx)(O.Z,{})})},E=n(7930),G=function(e){let{checked:t,onClick:n}=e;return(0,l.jsx)(a.Z,{checked:t,onClick:n,"aria-label":"攜伴",children:(0,l.jsx)(E.Z,{})})},K=(0,r.memo)(function(e){let{allChecked:t,allIndeterminated:n,toggleAll:a,moveTypeFilter:s,toggleMoveType:o,weaponTypeFilter:d,toggleWeaponType:p,isRarity5:f,toggleRarity5:x,isRarity4:b,toggleRarity4:m,isGrail:C,toggleGrail:Z,isLegendary:N,toggleLegendary:w,isMythic:S,toggleMythic:H,isDuo:M,toggleDuo:P,isHar:L,toggleHar:I,isAscended:O,toggleAscended:E,isRearmed:K,toggleRearmed:U,isAttuned:V,toggleAttuned:q,isEmblem:X,toggleEmblem:B,isAided:W,toggleAided:Y,isDancer:$,toggleDancer:Q}=e,[J,ee]=(0,r.useState)(!1),et=(0,r.useCallback)(()=>{ee(e=>!e)},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:_().content,children:(0,l.jsxs)("div",{className:_().checkboxs,hidden:!J,children:[(0,l.jsx)(c.Z,{onClick:a,checked:t,indeterminated:n}),(0,l.jsx)(v.Z,{moveTypeFilter:s,onToggle:o}),(0,l.jsx)(j.Z,{weaponTypeFilter:d,onToggle:p}),(0,l.jsx)(i,{checked:f,onClick:x}),(0,l.jsx)(u,{checked:b,onClick:m}),(0,l.jsx)(T,{checked:N,onClick:w}),(0,l.jsx)(A,{checked:S,onClick:H}),(0,l.jsx)(k,{checked:M,onClick:P}),(0,l.jsx)(y,{checked:L,onClick:I}),(0,l.jsx)(R,{checked:O,onClick:E}),(0,l.jsx)(D,{checked:K,onClick:U}),(0,l.jsx)(F,{checked:V,onClick:q}),(0,l.jsx)(z,{checked:X,onClick:B}),(0,l.jsx)(G,{checked:W,onClick:Y}),(0,l.jsx)(h,{checked:C,onClick:Z}),(0,l.jsx)(g,{checked:$,onClick:Q})]})}),(0,l.jsx)("div",{className:_()["expand-button"],onClick:et,children:J?"▲":"▼"})]})})},2492:function(e,t,n){"use strict";n.d(t,{A:function(){return r},L:function(){return l}});let l=(e,t)=>{let n={hp:0,atk:0,spd:0,def:0,res:0};for(let l=0;l<t;l+=1){let t=l%5;n[e[t]]+=1}return n},r=e=>{let{dfKey:t,dragonflowersDB:n}=e;return(null==n?void 0:n[t])||0}},8266:function(e,t,n){"use strict";n.d(t,{$r:function(){return l},Ty:function(){return r},Ud:function(){return c},YM:function(){return a},Zx:function(){return s}});let l=e=>{if(!e||"-"===e)return{boon:"",bane:""};let t=e.substring(1).split("-");return{boon:t[0],bane:t[1]}},r=e=>{let{stats:t={hp:0,atk:0,spd:0,def:0,res:0},iv:n,merge:r,bloom:c}=e,a=Array.isArray(t.hp),{boon:s,bane:i}=l(n),o={hp:1,atk:1,spd:1,def:1,res:1};o[s]+=1,o[i]-=1;let u=Object.entries(t).reduce((e,t)=>{let[n,l]=t,r=a?l[o[n]]:l;return{...e,[n]:r,bst:e.bst+r}},{bst:0});if(r>0){if(a){var d,h,p;u[i]=null===(d=t[i])||void 0===d?void 0:d[1],u.bst+=s===i?3:(null===(h=t[i])||void 0===h?void 0:h[1])-(null===(p=t[i])||void 0===p?void 0:p[0])}else u[i]=t[i],u.bst+=3}if(c&&c!==s){let e=2;r<=0&&i===c&&(e=1),a?u[c]=t[c][e]:u[c]=t[c]}return u},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments.length>1?arguments[1]:void 0,{boon:n,bane:r}=l(t),c={hp:0,atk:0,spd:0,def:0,res:0};return c[n]+=1,c[r]-=1,Object.entries(e).reduce((e,t)=>{let[n,l]=t;return{...e,[n]:l+c[n]}},{hp:0,atk:0,spd:0,def:0,res:0})},a=[{name:"+HP -攻擊",value:"+hp-atk"},{name:"+HP -速度",value:"+hp-spd"},{name:"+HP -防守",value:"+hp-def"},{name:"+HP -魔防",value:"+hp-res"},{name:"+攻擊 -HP",value:"+atk-hp"},{name:"+攻擊 -速度",value:"+atk-spd"},{name:"+攻擊 -防守",value:"+atk-def"},{name:"+攻擊 -魔防",value:"+atk-res"},{name:"+速度 -HP",value:"+spd-hp"},{name:"+速度 -攻擊",value:"+spd-atk"},{name:"+速度 -防守",value:"+spd-def"},{name:"+速度 -魔防",value:"+spd-res"},{name:"+防守 -HP",value:"+def-hp"},{name:"+防守 -攻擊",value:"+def-atk"},{name:"+防守 -速度",value:"+def-spd"},{name:"+防守 -魔防",value:"+def-res"},{name:"+魔防 -HP",value:"+res-hp"},{name:"+魔防 -攻擊",value:"+res-atk"},{name:"+魔防 -速度",value:"+res-spd"},{name:"+魔防 -防守",value:"+res-def"}];function s(e){let t=a.find(t=>e===t.value);return(null==t?void 0:t.name)||"-"}},3370:function(e,t,n){"use strict";n.d(t,{s:function(){return l}});let l=e=>{let{increaseIndexes:t,merge:n,initIV:l=!0,bloom:r}=e,c={hp:0,atk:0,spd:0,def:0,res:0};if(l&&n>0){let e=3,n=-1;for(;e>0;)t[n+=1]!==r&&(e-=1,c[t[n]]=1)}for(let e=0;e<2*n;e+=1){let n=e%5;c[t[n]]+=1}return c}},5737:function(e,t,n){"use strict";n.d(t,{f:function(){return s},h:function(){return a}});var l=n(8266),r=n(3370),c=n(2492);function a(e){let t=Object.entries(e).map((e,t)=>{let[n,l]=e;return{key:n,stat:l,index:t}});return t.sort((e,t)=>e.stat>t.stat?-1:e.stat<t.stat?1:e.index<t.index?-1:e.index>t.index?1:0),t.map(e=>{let{key:t}=e;return t})}let s=e=>{let{rarity:t,stats:n,iv:s,merge:i,support:o=!1,skillStats:u={hp:0,atk:0,spd:0,def:0,res:0},lv1:d=!1,arena:h=!1,dragonflower:p=0,resplendent:k=!1,mythicBonus1:f="",mythicBonus2:x="",mythicBonus3:b="",mythicBonus4:m="",bloom:g}=e,{bst:v,...j}=(0,l.Ty)({stats:n["".concat(t)],iv:s,merge:i,bloom:g}),C=(0,l.Ud)(n["".concat(t,"-1")],s),_=a((0,l.Ud)(n["5-1"],s)),Z=(0,r.s)({increaseIndexes:_,merge:i,initIV:!s||"-"===s,bloom:g}),y=(0,c.L)(_,p),N=o?{hp:5,atk:2,spd:2,def:2,res:2}:{hp:0,atk:0,spd:0,def:0,res:0},w=h?{hp:10,atk:4,spd:4,def:4,res:4}:{hp:0,atk:0,spd:0,def:0,res:0},S=k?2:0,T=[f,x,b,m].reduce((e,t)=>{switch(t){default:return e;case"atk":return e.hp+=5,e.atk+=3,e;case"spd":return e.hp+=5,e.spd+=4,e;case"def":return e.hp+=5,e.def+=5,e;case"res":return e.hp+=5,e.res+=5,e}},{hp:0,atk:0,spd:0,def:0,res:0});return{stats:Object.entries(d?C:j).reduce((e,t)=>{let[n,l]=t,r=l+u[n]+Z[n]+y[n]+N[n]+w[n]+T[n]+S;return{...e,[n]:r>-1?r:0}},{}),bst:v}}},1535:function(e){e.exports={icon:"icon_icon__XNGsC"}},1404:function(e){e.exports={icon:"icon_icon__9c1lK"}},4233:function(e){e.exports={icon:"icon_icon__qIw7r"}},6676:function(e){e.exports={container:"heroselect_container__gkNmD",toggle:"heroselect_toggle__c_xNc","toggle-input":"heroselect_toggle-input__LvQYT",arrow:"heroselect_arrow__qovxm",anchor:"heroselect_anchor__3wcvV",menu:"heroselect_menu__y_e6h",list:"heroselect_list__63TcK","stats-buttons":"heroselect_stats-buttons__xZG5V",title:"heroselect_title__XfXwy",buttons:"heroselect_buttons__t2emz","hero-option":"heroselect_hero-option__bRUdk"}},4099:function(e){e.exports={container:"numberpicker_container__NrWPL",wrapper:"numberpicker_wrapper__pu0FL",button0:"numberpicker_button0__bHqfm"}}}]);