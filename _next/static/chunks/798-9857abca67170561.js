(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{2877:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(5893);n(7294);var r=e=>(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),(0,a.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"})]}),s=function(e){let{onClick:t}=e;return(0,a.jsx)("button",{onClick:t,style:{backgroundColor:"transparent",display:"block"},children:(0,a.jsx)(r,{fill:"white"})})}},2778:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(5893),r=n(7294),s=n(8187),l=n(6738),u=n(1728),i=n(3321),o=n(856),c=n.n(o);function d(e){let{index:t,style:n,data:r}=e,{heroId:s,heroes:l,onClick:u}=r,o=l[t];return(0,a.jsx)("button",{className:c()["hero-option"],disabled:s===o.id,"data-active":s===o.id,value:o.id,hidden:o.hidden,onClick:u,style:n,children:(0,a.jsx)(i.Z,{id:o.id,...o})},o.id)}var p=(0,r.memo)(function(e){let{heroId:t,heroes:n,onSelect:s}=e,i=(0,r.useCallback)(e=>{e.stopPropagation(),s(e.currentTarget.value)},[s]),o=(0,r.useMemo)(()=>({heroId:t,heroes:n,onClick:i}),[t,n,i]),c=(0,r.useCallback)(e=>n[e].id,[n]);return(0,a.jsx)(u.Z,{children:e=>{let{width:t,height:r}=e;return(0,a.jsx)(l.t7,{width:t,height:r,itemCount:n.length,itemSize:160,itemData:o,itemKey:c,children:d})}})}),h=n(5869),f=n(2602),v=n(6308);function b(e){let{noDropdown:t,inputRef:n,disabled:r,placeholder:s,open:l,toggleOpen:u,onInputClick:i,onChangeFilter:o}=e;return t?(0,a.jsx)("input",{className:c()["toggle-input"],ref:n,placeholder:"輸入名字/稱號",onChange:o,disabled:r}):(0,a.jsxs)("button",{className:c().toggle,onClick:u,role:"button",disabled:r,"data-open":l,children:[(0,a.jsx)("input",{className:c()["toggle-input"],ref:n,defaultValue:s,placeholder:s,onClick:i,onChange:o,disabled:r}),(0,a.jsx)("span",{className:c().arrow,children:"▼"})]})}var m=function(e){let{heroId:t,onSelect:n,noDropdown:l=!1,noStat:u=!1,resplendent:i,menuClassName:o=""}=e,{inputRef:d,open:m,toggleOpen:g,placeholder:k,disabled:x,onInputClick:_,handleOnSelect:j,onChangeFilter:C,allChecked:y,allIndeterminated:N,toggleAll:w,moveTypeFilter:S,toggleMoveType:H,weaponTypeFilter:M,toggleWeaponType:P,isRarity5:T,toggleRarity5:Z,isRarity4:R,toggleRarity4:D,isGrail:L,toggleGrail:A,isLegendary:O,toggleLegendary:I,isMythic:z,toggleMythic:F,isAscended:U,toggleAscended:V,isRearmed:G,toggleRearmed:K,isDuo:q,toggleDuo:E,isHar:W,toggleHar:X,isAttuned:Y,toggleAttuned:$,isDancer:B,toggleDancer:Q,sortByHP:J,toggleSortByHp:ee,sortByAtk:et,toggleSortByAtk:en,sortBySpd:ea,toggleSortBySpd:er,sortByDef:es,toggleSortByDef:el,sortByRes:eu,toggleSortByRes:ei,sortByDf:eo,toggleSortByDf:ec,sortByArena:ed,toggleSortByArena:ep,computedHeroes:eh}=function(e){let{heroId:t,noDropdown:n=!1,noStat:a=!1,onSelect:s,resplendent:l}=e,{heroDB:u,dragonflowersDB:i,assistDB:o,resplendentDB:c}=(0,v.K)(),d=(0,r.useMemo)(()=>(0,h.$f)({heroDB:u,dragonflowersDB:i,assistDB:o,resplendentDB:c,noStat:a}),[u,i,o,c,a]),p=(0,r.useMemo)(()=>{let e=u[t];return"".concat(e.name," - ").concat(e.title)},[t,u]),b=(0,r.useRef)(),[m,g]=(0,r.useState)(n||!1),k=(0,r.useCallback)(()=>{g(e=>(e?b.current.value=p:(b.current.focus(),b.current.value="",b.current.placeholder=p),!e))},[p]),x=(0,r.useCallback)(e=>{e.stopPropagation(),m||(g(!0),b.current.focus(),b.current.value="",b.current.placeholder=p)},[m,p]),[_,j]=(0,r.useState)(""),C=(0,r.useCallback)(e=>{j(e.currentTarget.value)},[]),{allChecked:y,allIndeterminated:N,toggleAll:w,moveTypeFilter:S,toggleMoveType:H,weaponTypeFilter:M,toggleWeaponType:P,isRarity5:T,toggleRarity5:Z,isRarity4:R,toggleRarity4:D,isGrail:L,toggleGrail:A,isLegendary:O,toggleLegendary:I,isMythic:z,toggleMythic:F,isAscended:U,toggleAscended:V,isRearmed:G,toggleRearmed:K,isDuo:q,toggleDuo:E,isHar:W,toggleHar:X,isAttuned:Y,toggleAttuned:$,isDancer:B,toggleDancer:Q}=(0,f.Z)(),{sortBy:J,sortByHP:ee,toggleSortByHp:et,sortByAtk:en,toggleSortByAtk:ea,sortBySpd:er,toggleSortBySpd:es,sortByDef:el,toggleSortByDef:eu,sortByRes:ei,toggleSortByRes:eo,sortByDf:ec,toggleSortByDf:ed,sortByArena:ep,toggleSortByArena:eh}=function(){let[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)(()=>{t(e=>(e||x(!1),!e))},[]),[a,s]=(0,r.useState)(!1),l=(0,r.useCallback)(()=>{s(e=>(e||x(!1),!e))},[]),[u,i]=(0,r.useState)(!1),o=(0,r.useCallback)(()=>{i(e=>(e||x(!1),!e))},[]),[c,d]=(0,r.useState)(!1),p=(0,r.useCallback)(()=>{d(e=>(e||x(!1),!e))},[]),[h,f]=(0,r.useState)(!1),v=(0,r.useCallback)(()=>{f(e=>(e||x(!1),!e))},[]),[b,m]=(0,r.useState)(!1),g=(0,r.useCallback)(()=>{m(e=>(e||x(!1),!e))},[]),[k,x]=(0,r.useState)(!1),_=(0,r.useCallback)(()=>{x(e=>(e||(t(!1),s(!1),i(!1),d(!1),f(!1),m(!1)),!e))},[]),j=(0,r.useMemo)(()=>{let t=[];return e&&t.push("hp"),a&&t.push("atk"),u&&t.push("spd"),c&&t.push("def"),h&&t.push("res"),t},[e,a,u,c,h]);return{sortBy:j,sortByHP:e,toggleSortByHp:n,sortByAtk:a,toggleSortByAtk:l,sortBySpd:u,toggleSortBySpd:o,sortByDef:c,toggleSortByDef:p,sortByRes:h,toggleSortByRes:v,sortByDf:b,toggleSortByDf:g,sortByArena:k,toggleSortByArena:_}}(),ef=(0,r.useMemo)(()=>d.sort((e,t)=>{if(ep)return e.bst>t.bst?-1:e.bst<t.bst?1:e.index-t.index;let n=J.reduce((t,n)=>t+e[n],0),a=J.reduce((e,n)=>e+t[n],0);return(ec&&(n+=e.dfDelta*J.length,a+=t.dfDelta*J.length),n>a)?-1:a>n?1:e.index-t.index}).reduce((e,t,n)=>({...e,[t.id]:n}),{}),[d,J,ec,ep]),ev=(0,r.useMemo)(()=>d.filter(e=>{let t=(0,h._u)(e,{filter:_,moveTypeFilter:S,weaponTypeFilter:M,isRarity5:T,isRarity4:R,isGrail:L,isLegendary:O,isMythic:z,isAscended:U,isRearmed:G,isDuo:q,isHar:W,isAttuned:Y,isDancer:B});return!t}).map(e=>({...e,faceSrc:l?e.faceSrcR:e.faceSrc})).sort((e,t)=>ef[e.id]-ef[t.id]),[d,ef,_,S,M,T,R,L,O,z,U,G,q,W,Y,B,l]),eb=(0,r.useCallback)(e=>{if(s(e),g(n||!1),!n){let t=u[e],n="".concat(t.name," - ").concat(t.title);b.current.value=n}},[s,g,n,u]);return{inputRef:b,open:m,setOpen:g,toggleOpen:n?void 0:k,placeholder:p,disabled:d.length<2,onInputClick:n?void 0:x,handleOnSelect:eb,filter:_,onChangeFilter:C,allChecked:y,allIndeterminated:N,toggleAll:w,moveTypeFilter:S,toggleMoveType:H,weaponTypeFilter:M,toggleWeaponType:P,isRarity5:T,toggleRarity5:Z,isRarity4:R,toggleRarity4:D,isGrail:L,toggleGrail:A,isLegendary:O,toggleLegendary:I,isMythic:z,toggleMythic:F,isAscended:U,toggleAscended:V,isRearmed:G,toggleRearmed:K,isDuo:q,toggleDuo:E,isHar:W,toggleHar:X,isAttuned:Y,toggleAttuned:$,isDancer:B,toggleDancer:Q,sortByHP:ee,toggleSortByHp:et,sortByAtk:en,toggleSortByAtk:ea,sortBySpd:er,toggleSortBySpd:es,sortByDef:el,toggleSortByDef:eu,sortByRes:ei,toggleSortByRes:eo,sortByDf:ec,toggleSortByDf:ed,sortByArena:ep,toggleSortByArena:eh,computedHeroes:ev,heroesOrder:ef}}({heroId:t,noDropdown:l,noStat:u,onSelect:n,resplendent:i});return(0,a.jsxs)("div",{className:c().container,children:[(0,a.jsx)(b,{noDropdown:l,inputRef:d,disabled:x,placeholder:k,open:m,toggleOpen:g,onInputClick:_,onChangeFilter:C}),(0,a.jsx)("div",{className:c().anchor,"data-open":m,children:(0,a.jsxs)("div",{className:"".concat(c().menu," ").concat(o),"data-nobgcolor":l,children:[(0,a.jsx)(s.Z,{allChecked:y,allIndeterminated:N,toggleAll:w,moveTypeFilter:S,toggleMoveType:H,weaponTypeFilter:M,toggleWeaponType:P,isRarity5:T,toggleRarity5:Z,isRarity4:R,toggleRarity4:D,isGrail:L,toggleGrail:A,isLegendary:O,toggleLegendary:I,isMythic:z,toggleMythic:F,isAscended:U,toggleAscended:V,isRearmed:G,toggleRearmed:K,isDuo:q,toggleDuo:E,isHar:W,toggleHar:X,isAttuned:Y,toggleAttuned:$,isDancer:B,toggleDancer:Q}),(0,a.jsxs)("div",{className:c()["stats-buttons"],children:[(0,a.jsx)("div",{className:c().title,children:"排序依據"}),(0,a.jsxs)("div",{className:c().buttons,children:[(0,a.jsx)("button",{type:"button","data-active":J,onClick:ee,children:"HP"}),(0,a.jsx)("button",{type:"button","data-active":et,onClick:en,children:"攻擊"}),(0,a.jsx)("button",{type:"button","data-active":ea,onClick:er,children:"速度"}),(0,a.jsx)("button",{type:"button","data-active":es,onClick:el,children:"防守"}),(0,a.jsx)("button",{type:"button","data-active":eu,onClick:ei,children:"魔防"}),(0,a.jsx)("button",{type:"button","data-active":eo,onClick:ec,children:"龍花"}),(0,a.jsx)("button",{type:"button","data-active":ed,onClick:ep,children:"鬥技"})]})]}),(0,a.jsx)("div",{className:c().list,children:(0,a.jsx)(p,{heroId:t,heroes:eh,onSelect:j})})]})})]})}},182:function(e,t,n){"use strict";var a=n(5893);n(7294);var r=n(2636);let s=[0,1,2,3,4,5,6,7,8,9,10];t.Z=function(e){let{merge:t,onSelect:n,oneLine:l}=e;return(0,a.jsx)(r.Z,{value:t,onSelect:n,options:s,oneLine:l})}},2636:function(e,t,n){"use strict";var a=n(5893),r=n(7294),s=n(6168),l=n.n(s);t.Z=r.memo(function(e){let{value:t,options:n,onSelect:s,oneLine:u}=e,i=(0,r.useCallback)(e=>{s&&s(Number(e.currentTarget.value))},[s]),o=(0,r.useMemo)(()=>u?n:n.slice(1),[u,n]);return(0,a.jsxs)("div",{className:l().wrapper,children:[!u&&(0,a.jsx)("div",{className:l().button0,children:(0,a.jsx)("button",{value:n[0],"data-active":n[0]===t,onClick:i,children:n[0]})}),(0,a.jsx)("div",{className:l().container,"data-oneline":u,children:o.map(e=>(0,a.jsx)("button",{value:e,"data-active":e===t,onClick:i,children:e},e))})]})})},5089:function(e,t,n){"use strict";n.d(t,{$r:function(){return a},Ty:function(){return r},Ud:function(){return s},YM:function(){return l},Zx:function(){return u}});let a=e=>{if(!e||"-"===e)return{boon:"",bane:""};let t=e.substring(1).split("-");return{boon:t[0],bane:t[1]}},r=e=>{let{stats:t={hp:0,atk:0,spd:0,def:0,res:0},iv:n,merge:r,bloom:s}=e,l=Array.isArray(t.hp),{boon:u,bane:i}=a(n),o={hp:1,atk:1,spd:1,def:1,res:1};o[u]+=1,o[i]-=1;let c=Object.entries(t).reduce((e,t)=>{let[n,a]=t,r=l?a[o[n]]:a;return{...e,[n]:r,bst:e.bst+r}},{bst:0});if(r>0){if(l){var d,p,h;c[i]=null===(d=t[i])||void 0===d?void 0:d[1],c.bst+=u===i?3:(null===(p=t[i])||void 0===p?void 0:p[1])-(null===(h=t[i])||void 0===h?void 0:h[0])}else c[i]=t[i],c.bst+=3}if(s&&s!==u){let e=2;r<=0&&i===s&&(e=1),l?c[s]=t[s][e]:c[s]=t[s]}return c},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments.length>1?arguments[1]:void 0,{boon:n,bane:r}=a(t),s={hp:0,atk:0,spd:0,def:0,res:0};return s[n]+=1,s[r]-=1,Object.entries(e).reduce((e,t)=>{let[n,a]=t;return{...e,[n]:a+s[n]}},{hp:0,atk:0,spd:0,def:0,res:0})},l=[{name:"+HP -攻擊",value:"+hp-atk"},{name:"+HP -速度",value:"+hp-spd"},{name:"+HP -防守",value:"+hp-def"},{name:"+HP -魔防",value:"+hp-res"},{name:"+攻擊 -HP",value:"+atk-hp"},{name:"+攻擊 -速度",value:"+atk-spd"},{name:"+攻擊 -防守",value:"+atk-def"},{name:"+攻擊 -魔防",value:"+atk-res"},{name:"+速度 -HP",value:"+spd-hp"},{name:"+速度 -攻擊",value:"+spd-atk"},{name:"+速度 -防守",value:"+spd-def"},{name:"+速度 -魔防",value:"+spd-res"},{name:"+防守 -HP",value:"+def-hp"},{name:"+防守 -攻擊",value:"+def-atk"},{name:"+防守 -速度",value:"+def-spd"},{name:"+防守 -魔防",value:"+def-res"},{name:"+魔防 -HP",value:"+res-hp"},{name:"+魔防 -攻擊",value:"+res-atk"},{name:"+魔防 -速度",value:"+res-spd"},{name:"+魔防 -防守",value:"+res-def"}];function u(e){let t=l.find(t=>e===t.value);return(null==t?void 0:t.name)||"-"}},2871:function(e,t,n){"use strict";n.d(t,{s:function(){return a}});let a=e=>{let{increaseIndexes:t,merge:n,initIV:a=!0,bloom:r}=e,s={hp:0,atk:0,spd:0,def:0,res:0};if(a&&n>0){let e=3,n=-1;for(;e>0;)t[n+=1]!==r&&(e-=1,s[t[n]]=1)}for(let e=0;e<2*n;e+=1){let n=e%5;s[t[n]]+=1}return s}},7355:function(e,t,n){"use strict";n.d(t,{h:function(){return l},f:function(){return u}});var a=n(5089),r=n(2871);let s=(e,t)=>{let n={hp:0,atk:0,spd:0,def:0,res:0};for(let a=0;a<t;a+=1){let t=a%5;n[e[t]]+=1}return n};function l(e){let t=Object.entries(e).map((e,t)=>{let[n,a]=e;return{key:n,stat:a,index:t}});t.sort((e,t)=>e.stat>t.stat?-1:e.stat<t.stat?1:e.index<t.index?-1:e.index>t.index?1:0);let n=t.map(e=>{let{key:t}=e;return t});return n}let u=e=>{let{rarity:t,stats:n,iv:u,merge:i,support:o=!1,skillStats:c={hp:0,atk:0,spd:0,def:0,res:0},lv1:d=!1,arena:p=!1,dragonflower:h=0,resplendent:f=!1,mythicBonus1:v="",mythicBonus2:b="",mythicBonus3:m="",mythicBonus4:g="",bloom:k}=e,{bst:x,..._}=(0,a.Ty)({stats:n["".concat(t)],iv:u,merge:i,bloom:k}),j=(0,a.Ud)(n["".concat(t,"-1")],u),C=(0,a.Ud)(n["5-1"],u),y=l(C),N=(0,r.s)({increaseIndexes:y,merge:i,initIV:!u||"-"===u,bloom:k}),w=s(y,h),S=o?{hp:5,atk:2,spd:2,def:2,res:2}:{hp:0,atk:0,spd:0,def:0,res:0},H=p?{hp:10,atk:4,spd:4,def:4,res:4}:{hp:0,atk:0,spd:0,def:0,res:0},M=f?2:0,P=[v,b,m,g].reduce((e,t)=>{switch(t){default:return e;case"atk":return e.hp+=5,e.atk+=3,e;case"spd":return e.hp+=5,e.spd+=4,e;case"def":return e.hp+=5,e.def+=5,e;case"res":return e.hp+=5,e.res+=5,e}},{hp:0,atk:0,spd:0,def:0,res:0}),T=Object.entries(d?j:_).reduce((e,t)=>{let[n,a]=t,r=a+c[n]+N[n]+w[n]+S[n]+H[n]+P[n]+M;return{...e,[n]:r>-1?r:0}},{});return{stats:T,bst:x}}},856:function(e){e.exports={container:"heroselect_container__gkNmD",toggle:"heroselect_toggle__c_xNc","toggle-input":"heroselect_toggle-input__LvQYT",arrow:"heroselect_arrow__qovxm",anchor:"heroselect_anchor__3wcvV",menu:"heroselect_menu__y_e6h",list:"heroselect_list__63TcK","stats-buttons":"heroselect_stats-buttons__xZG5V",title:"heroselect_title__XfXwy",buttons:"heroselect_buttons__t2emz","hero-option":"heroselect_hero-option__bRUdk"}},6168:function(e){e.exports={container:"numberpicker_container__NrWPL",wrapper:"numberpicker_wrapper__pu0FL",button0:"numberpicker_button0__bHqfm"}}}]);