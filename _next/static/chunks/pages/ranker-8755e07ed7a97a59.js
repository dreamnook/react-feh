(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{3574:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ranker",function(){return r(9589)}])},9589:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var o=r(5893),n=r(9008),i=r(9760),s=r(449),l=r(7294),a=r(6738),g=r(1728),c=r(8219);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){u(e,t,r[t])}))}return e}function d(e){var t=e.index,r=e.style,n=e.data.heroes[t];return(0,o.jsx)("div",{style:r,children:(0,o.jsx)(c.Z,y({id:n.id},n))},n.id)}function f(e){var t=e.heroes,r=(0,l.useMemo)((function(){return{heroes:t}}),[t]),n=(0,l.useCallback)((function(e){return t[e].id}),[t]);return(0,o.jsx)(g.Z,{children:function(e){var i=e.width,s=e.height;return(0,o.jsx)(a.t7,{width:i,height:s,itemCount:t.length,itemSize:160,itemData:r,itemKey:n,children:d})}})}var p=(0,l.memo)(f),B=r(3354),h=r(6730),b=r(2722),S=r(5452);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(){var e=(0,S.K)(),t=e.heroDB,r=e.dragonflowersDB,o=e.assistDB,n=e.resplendentDB,i=(0,l.useMemo)((function(){return(0,h.$f)({heroDB:t,dragonflowersDB:r,assistDB:o,resplendentDB:n})}),[t,r,o,n]),s=(0,b.Z)(),a=s.allChecked,g=s.allIndeterminated,c=s.toggleAll,u=s.moveTypeFilter,y=s.toggleMoveType,d=s.weaponTypeFilter,f=s.toggleWeaponType,p=s.isRarity5,D=s.toggleRarity5,v=s.isRarity4,k=s.toggleRarity4,R=s.isGrail,j=s.toggleGrail,x=s.isLegendary,A=s.toggleLegendary,_=s.isMythic,w=s.toggleMythic,C=s.isAscended,H=s.toggleAscended,O=s.isRearmed,T=s.toggleRearmed,M=s.isDuo,P=s.toggleDuo,F=s.isHar,N=s.toggleHar,E=s.isDancer,G=s.toggleDancer,L=function(){var e=(0,l.useState)(!1),t=e[0],r=e[1],o=(0,l.useCallback)((function(){r((function(e){return e||A(!1),!e}))}),[]),n=(0,l.useState)(!1),i=n[0],s=n[1],a=(0,l.useCallback)((function(){s((function(e){return e||A(!1),!e}))}),[]),g=(0,l.useState)(!1),c=g[0],u=g[1],y=(0,l.useCallback)((function(){u((function(e){return e||A(!1),!e}))}),[]),d=(0,l.useState)(!1),f=d[0],p=d[1],B=(0,l.useCallback)((function(){p((function(e){return e||A(!1),!e}))}),[]),h=(0,l.useState)(!1),b=h[0],S=h[1],m=(0,l.useCallback)((function(){S((function(e){return e||A(!1),!e}))}),[]),D=(0,l.useState)(!1),v=D[0],k=D[1],R=(0,l.useCallback)((function(){k((function(e){return e||A(!1),!e}))}),[]),j=(0,l.useState)(!1),x=j[0],A=j[1],_=(0,l.useCallback)((function(){A((function(e){return e||(r(!1),s(!1),u(!1),p(!1),S(!1),k(!1)),!e}))}),[]);return{sortBy:(0,l.useMemo)((function(){var e=[];return t&&e.push("hp"),i&&e.push("atk"),c&&e.push("spd"),f&&e.push("def"),b&&e.push("res"),e}),[t,i,c,f,b]),sortByHP:t,toggleSortByHp:o,sortByAtk:i,toggleSortByAtk:a,sortBySpd:c,toggleSortBySpd:y,sortByDef:f,toggleSortByDef:B,sortByRes:b,toggleSortByRes:m,sortByDf:v,toggleSortByDf:R,sortByArena:x,toggleSortByArena:_}}(),Z=L.sortBy,I=L.sortByHP,W=L.toggleSortByHp,X=L.sortByAtk,K=L.toggleSortByAtk,z=L.sortBySpd,V=L.toggleSortBySpd,$=L.sortByDef,q=L.toggleSortByDef,J=L.sortByRes,Q=L.toggleSortByRes,U=L.sortByDf,Y=L.toggleSortByDf,ee=L.sortByArena,te=L.toggleSortByArena,re=(0,l.useMemo)((function(){return i.sort((function(e,t){if(ee)return e.bst>t.bst?-1:e.bst<t.bst?1:e.index-t.index;var r=Z.reduce((function(t,r){return t+e[r]}),0),o=Z.reduce((function(e,r){return e+t[r]}),0);return U&&(r+=e.dfDelta*Z.length,o+=t.dfDelta*Z.length),r>o?-1:o>r?1:e.index-t.index})).reduce((function(e,t,r){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){m(e,t,r[t])}))}return e}({},e,m({},t.id,r))}),{})}),[i,Z,U,ee]),oe=(0,l.useMemo)((function(){return i.filter((function(e){return!(0,h._u)(e,{moveTypeFilter:u,weaponTypeFilter:d,isRarity5:p,isRarity4:v,isGrail:R,isLegendary:x,isMythic:_,isAscended:C,isRearmed:O,isDuo:M,isHar:F,isDancer:E})})).sort((function(e,t){return re[e.id]-re[t.id]}))}),[i,re,u,d,p,v,R,x,_,C,O,M,F,E]);return{bg:(0,B.Z)("/assets/summon-stone.jpg"),allChecked:a,allIndeterminated:g,toggleAll:c,moveTypeFilter:u,toggleMoveType:y,weaponTypeFilter:d,toggleWeaponType:f,isRarity5:p,toggleRarity5:D,isRarity4:v,toggleRarity4:k,isGrail:R,toggleGrail:j,isLegendary:x,toggleLegendary:A,isMythic:_,toggleMythic:w,isAscended:C,toggleAscended:H,isRearmed:O,toggleRearmed:T,isDuo:M,toggleDuo:P,isHar:F,toggleHar:N,isDancer:E,toggleDancer:G,sortByHP:I,toggleSortByHp:W,sortByAtk:X,toggleSortByAtk:K,sortBySpd:z,toggleSortBySpd:V,sortByDef:$,toggleSortByDef:q,sortByRes:J,toggleSortByRes:Q,sortByDf:U,toggleSortByDf:Y,sortByArena:ee,toggleSortByArena:te,computedHeroes:oe,heroesOrder:re}}var v=r(3341),k=r.n(v),R=function(){var e=D(),t=e.bg,r=e.allChecked,s=e.allIndeterminated,l=e.toggleAll,a=e.moveTypeFilter,g=e.toggleMoveType,c=e.weaponTypeFilter,u=e.toggleWeaponType,y=e.isRarity5,d=e.toggleRarity5,f=e.isRarity4,B=e.toggleRarity4,h=e.isGrail,b=e.toggleGrail,S=e.isLegendary,m=e.toggleLegendary,v=e.isMythic,R=e.toggleMythic,j=e.isAscended,x=e.toggleAscended,A=e.isRearmed,_=e.toggleRearmed,w=e.isDuo,C=e.toggleDuo,H=e.isHar,O=e.toggleHar,T=e.isDancer,M=e.toggleDancer,P=e.sortByHP,F=e.toggleSortByHp,N=e.sortByAtk,E=e.toggleSortByAtk,G=e.sortBySpd,L=e.toggleSortBySpd,Z=e.sortByDef,I=e.toggleSortByDef,W=e.sortByRes,X=e.toggleSortByRes,K=e.sortByDf,z=e.toggleSortByDf,V=e.sortByArena,$=e.toggleSortByArena,q=e.computedHeroes;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.default,{children:(0,o.jsx)("title",{children:"\u9ad4\u8cea\u6392\u6392\u770b"})}),(0,o.jsx)("div",{className:k().container,style:{background:"url('".concat(t,"') center / cover no-repeat fixed")},children:(0,o.jsxs)("div",{className:k()["bg-layer"],children:[(0,o.jsx)(i.Z,{allChecked:r,allIndeterminated:s,toggleAll:l,moveTypeFilter:a,toggleMoveType:g,weaponTypeFilter:c,toggleWeaponType:u,isRarity5:y,toggleRarity5:d,isRarity4:f,toggleRarity4:B,isGrail:h,toggleGrail:b,isLegendary:S,toggleLegendary:m,isMythic:v,toggleMythic:R,isAscended:j,toggleAscended:x,isRearmed:A,toggleRearmed:_,isDuo:w,toggleDuo:C,isHar:H,toggleHar:O,isDancer:T,toggleDancer:M}),(0,o.jsxs)("div",{className:k()["stats-buttons"],children:[(0,o.jsx)("div",{className:k().title,children:"\u6392\u5e8f\u4f9d\u64da"}),(0,o.jsx)("button",{"data-active":P,onClick:F,children:"HP"}),(0,o.jsx)("button",{"data-active":N,onClick:E,children:"\u653b\u64ca"}),(0,o.jsx)("button",{"data-active":G,onClick:L,children:"\u901f\u5ea6"}),(0,o.jsx)("button",{"data-active":Z,onClick:I,children:"\u9632\u5b88"}),(0,o.jsx)("button",{"data-active":W,onClick:X,children:"\u9b54\u9632"}),(0,o.jsx)("button",{"data-active":K,onClick:z,children:"\u9f8d\u82b1"}),(0,o.jsx)("button",{"data-active":V,onClick:$,children:"\u9b25\u6280"})]}),(0,o.jsx)("div",{className:k().list,children:(0,o.jsx)(p,{heroes:q})})]})})]})};var j=function(){return(0,o.jsx)(s.Z,{children:(0,o.jsx)(R,{})})};var x=function(){return(0,o.jsx)(j,{})}},3341:function(e){e.exports={container:"Ranker_container__w1762","bg-layer":"Ranker_bg-layer__7wOre",list:"Ranker_list__lstuk","stats-buttons":"Ranker_stats-buttons__EgVs6",title:"Ranker_title__FEtXA"}}},function(e){e.O(0,[406,988,220,774,888,179],(function(){return t=3574,e(e.s=t);var t}));var t=e.O();_N_E=t}]);