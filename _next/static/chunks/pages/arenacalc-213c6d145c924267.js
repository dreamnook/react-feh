(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{3721:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/arenacalc",function(){return t(2034)}])},3616:function(e,s,t){"use strict";var n=t(5893),l=t(7294),i=t(3851),a=t(4530),r=t(4437),c=t.n(r);s.Z=function(e){let{blessing:s}=e,{src:t,name:r}=(0,l.useMemo)(()=>(0,i.QJ)(s),[s]);return(0,n.jsxs)("div",{className:c().blessing,children:[t&&(0,n.jsx)(a.Z,{src:t,loading:"lazy",width:"50px",height:"50px"}),(0,n.jsx)("div",{className:c()["blessing-name"],children:r})]})}},4733:function(e,s,t){"use strict";var n=t(5893),l=t(7294),i=t(3851),a=t(3616),r=t(3685),c=t.n(r);s.Z=e=>{let{blessing:s,selectBlessing:t}=e,r=(0,l.useCallback)(e=>{e.stopPropagation(),t(e.currentTarget.value)},[t]);return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsx)("button",{className:c()["neutral-button"],"data-active":!s,value:"",onClick:r,children:"-"}),i.YM.map(e=>(0,n.jsx)("button",{className:c()["blessing-button"],"data-active":s===e.value,value:e.value,onClick:r,children:(0,n.jsx)(a.Z,{blessing:e.value})},e.value))]})}},1809:function(e,s,t){"use strict";var n=t(5893),l=t(7294),i=t(5089),a=t(6056),r=t.n(a);s.Z=e=>{let{iv:s,selectIV:t}=e,a=(0,l.useCallback)(e=>{e.stopPropagation(),t(e.currentTarget.value)},[t]);return(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsx)("button",{className:r()["neutral-button"],"data-active":!s,value:"",onClick:a,children:"-"}),i.YM.map(e=>(0,n.jsx)("button",{className:r()["iv-button"],"data-active":s===e.value,value:e.value,onClick:a,children:e.name},e.value))]})}},3022:function(e,s,t){"use strict";t.d(s,{BQ:function(){return b},DK:function(){return x},Dx:function(){return r},Ei:function(){return p},M9:function(){return d},P9:function(){return u},VY:function(){return o},W2:function(){return a},dH:function(){return c},qn:function(){return h}});var n=t(5893),l=t(9454),i=t.n(l);function a(e){let{hidden:s,style:t,children:l}=e;return(0,n.jsx)("div",{hidden:s,className:i().container,style:t,children:l})}function r(e){let{children:s,style:t}=e;return(0,n.jsx)("div",{className:i().title,style:t,children:s})}function c(e){let{children:s}=e;return(0,n.jsx)("div",{className:i()["title-textgroup"],children:s})}function o(e){let{children:s}=e;return(0,n.jsx)("div",{className:i().content,children:s})}function u(e){let{children:s}=e;return(0,n.jsx)("div",{className:i()["section-group"],children:s})}function d(e){let{children:s,disabled:t,onClick:l}=e;return(0,n.jsx)("button",{className:"".concat(i().button," ").concat(i().section),disabled:t,onClick:l,children:s})}function b(e){let{children:s,style:t}=e;return(0,n.jsx)("div",{className:i()["button-content"],style:t,children:s})}function h(e){let{children:s}=e;return(0,n.jsx)("div",{className:i().optionsContainer,children:s})}function p(e){let{children:s}=e;return(0,n.jsx)("div",{className:i().options,children:s})}function x(e){let{children:s}=e;return(0,n.jsx)("div",{className:i().subTitle,children:s})}},7509:function(e,s){"use strict";let t={1:{base:47,float:69},2:{base:49,float:74},3:{base:51,float:81},4:{base:53,float:86},5:{base:55,float:93}};s.Z=function(e){let{rarity:s=5,merge:n,bst:l,spt:i,blesser:a=0}=e,r=t[s],c=150+r.base+r.float+2*n+Math.floor(l/5)+Math.floor(i/100)+4*a;return 2*c}},2034:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return H}});var n=t(5893),l=t(9008),i=t.n(l),a=t(2204),r=t(163),c=t(5406),o=t(7294),u=e=>(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",style:{transform:"rotate(180deg)"},...e,children:[(0,n.jsx)("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"})]}),d=t(6308),b=t(5869),h=t(7355),p=t(7509),x=t(5089),_=t(3851),j=t(3321),k=t(4530),g=t(1430),m=t.n(g),v=function(e){let{openHeroPicker:s,openIVPicker:t,openMergePicker:l,openSkillPicker:i,openBlessingPicker:a,onClickMax:r,heroInfo:c,iv:o,merge:u,bless:d,arenaSkillStateMap:b,totalSp:h,unitArenaScore:p}=e,g="Feh"===c.id;return(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{className:m().heroButton,onClick:s,children:(0,n.jsx)(j.Z,{...c})}),(0,n.jsxs)("button",{className:m().sectionButton,value:"weapon",onClick:i,disabled:g,children:[(0,n.jsx)(k.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/weapon.png"}),(0,n.jsx)("span",{children:"武器"}),(0,n.jsx)("span",{children:b.weapon.label})]}),(0,n.jsxs)("button",{className:m().sectionButton,value:"assist",onClick:i,disabled:g,children:[(0,n.jsx)(k.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/assist.png"}),(0,n.jsx)("span",{children:"輔助"}),(0,n.jsx)("span",{children:b.assist.label})]}),(0,n.jsxs)("button",{className:m().sectionButton,value:"special",onClick:i,disabled:g,children:[(0,n.jsx)(k.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/skills/special.png"}),(0,n.jsx)("span",{children:"奧義"}),(0,n.jsx)("span",{children:b.special.label})]}),(0,n.jsxs)("button",{className:m().sectionButton,value:"skillA",onClick:i,disabled:g,children:[(0,n.jsx)(k.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-a.png"}),(0,n.jsx)("span",{children:"A技能"}),(0,n.jsx)("span",{children:b.skillA.label})]}),(0,n.jsxs)("button",{className:m().sectionButton,value:"skillB",onClick:i,disabled:g,children:[(0,n.jsx)(k.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-b.png"}),(0,n.jsx)("span",{children:"B技能"}),(0,n.jsx)("span",{children:b.skillB.label})]}),(0,n.jsxs)("button",{className:m().sectionButton,value:"skillC",onClick:i,disabled:g,children:[(0,n.jsx)(k.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-c.png"}),(0,n.jsx)("span",{children:"C技能"}),(0,n.jsx)("span",{children:b.skillC.label})]}),(0,n.jsxs)("button",{className:m().sectionButton,value:"seal",onClick:i,disabled:g,children:[(0,n.jsx)(k.Z,{width:"24px",height:"24px",style:{verticalAlign:"middle"},src:"/assets/skill-s.png"}),(0,n.jsx)("span",{children:"聖印"}),(0,n.jsx)("span",{children:b.seal.label})]}),(0,n.jsxs)("button",{className:m().sectionButton,value:"bless",onClick:a,disabled:g||!!c.blesser,children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{children:"祝福"}),(0,n.jsx)("span",{children:(0,_.S5)(c.blessing||d)})]}),(0,n.jsxs)("div",{className:m().ivAndMerge,children:[(0,n.jsxs)("button",{value:"iv",onClick:t,disabled:g,children:[(0,n.jsx)("span",{children:"IV"}),(0,n.jsx)("span",{children:(0,x.Zx)(o)})]}),(0,n.jsxs)("button",{value:"merge",onClick:l,disabled:g,children:[(0,n.jsx)("span",{children:"突破"}),(0,n.jsx)("span",{children:u||null})]})]}),(0,n.jsxs)("div",{className:m().summarySection,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"SP"}),(0,n.jsx)("span",{children:h})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"鬥技分"}),(0,n.jsx)("span",{children:p})]})]}),(0,n.jsx)("div",{className:m().maxScore,children:(0,n.jsx)("button",{onClick:r,disabled:g,children:"MAX"})})]})},f=t(2778),C=t(6095),A=t(3022),N=function(e){let{heroId:s,onChangeHeroId:t,onClickBack:l}=e;return(0,n.jsxs)("div",{className:m().unitPicker,children:[(0,n.jsxs)(A.Dx,{children:[(0,n.jsx)(C.Z,{onClick:l}),"英雄"]}),(0,n.jsx)(f.Z,{heroId:s,onSelect:t,noDropdown:!0,menuClassName:m().menu})]})},S=t(9950),B=t(8263),w=t(4570),y=t(1342);function I(e){let{fehDB:s,heroId:t}=e,n={},{heroDB:l,weaponDB:i}=s,a=(0,w.CB)({heroDB:l,weaponDB:i,heroId:t});return a.forEach(e=>{e.last&&(n[e.sp]={id:"".concat(e.sp),label:"".concat(e.sp,"SP"),sp:e.sp},e.refine&&!e.exclusive&&(n[350]={id:"350",label:"350SP",sp:350}))}),n}function M(e){let{heroId:s,fehDB:t}=e,n={},{rules2DB:l,heroDB:i,weaponDB:a,assistDB:r,defaultSkillDB:c}=t,o=(0,S.Gt)({rules2DB:l,heroDB:i,weaponDB:a,assistDB:r,defaultSkillDB:c,heroId:s,weaponId:"",skillXId:""});return o.forEach(e=>{e.last&&(n[e.sp]={id:"".concat(e.sp),label:"".concat(e.sp,"SP"),sp:e.sp})}),n}function Z(e){let{fehDB:s,heroId:t}=e,n={},{rules2DB:l,heroDB:i,weaponDB:a,specialDB:r,defaultSkillDB:c}=s,o=(0,B.TZ)({rules2DB:l,heroDB:i,weaponDB:a,defaultSkillDB:c,specialDB:r,heroId:t,weaponId:"",skillXId:""});return o.forEach(e=>{e.last&&(n[e.sp]={id:"".concat(e.sp),label:"".concat(e.sp,"SP"),sp:e.sp})}),n}function P(e){let{fehDB:s,skillType:t,heroId:n}=e,l={},{rules2DB:i,heroDB:a,weaponDB:r,defaultSkillDB:c}=s,o=s["".concat(t,"DB")],u=(0,y.AY)({rules2DB:i,heroDB:a,weaponDB:r,defaultSkillDB:c,skillDB:o,heroId:n,weaponId:"",skillXId:""});return u.forEach(e=>{e.last&&(l[e.sp]={id:"".concat(e.sp),label:"".concat(e.sp,"SP"),sp:e.sp},e.bst&&(l["".concat(e.sp,"-duel")]={id:"".concat(e.sp,"-duel"),label:"".concat(e.name," (").concat(e.sp,"SP)"),sp:e.sp,bst:e.bst,bbst:e.bbst}))}),l}function T(e){let{fehDB:s,heroId:t}=e,n={},{rules2DB:l,heroDB:i,weaponDB:a,defaultSkillDB:r,sealDB:c}=s,o=(0,y.AY)({rules2DB:l,heroDB:i,weaponDB:a,defaultSkillDB:r,skillDB:c.skillB,heroId:t,weaponId:"",skillXId:""}),u=(0,y.AY)({rules2DB:l,heroDB:i,weaponDB:a,defaultSkillDB:r,skillDB:c.skillB,heroId:t,weaponId:"",skillXId:""}),d=(0,y.AY)({rules2DB:l,heroDB:i,weaponDB:a,defaultSkillDB:r,skillDB:c.skillC,heroId:t,weaponId:"",skillXId:""}),b=(0,y.AY)({rules2DB:l,heroDB:i,weaponDB:a,defaultSkillDB:r,skillDB:c.seal,heroId:t,weaponId:"",skillXId:""}),h=[...o,...u,...d,...b];return h.forEach(e=>{e.last&&(n[e.sp]={id:"".concat(e.sp),label:"".concat(e.sp,"SP"),sp:e.sp})}),n}function E(e){if(!e)return[];let s=Object.values(e).filter(e=>!!e);return s.push({id:"",label:"-",sp:0}),s.sort((e,s)=>s.bst>0||e.bst>0?(s.bst||0)-(e.bst||0):s.bbst>0||e.bbst>0?(s.bbst||0)-(e.bbst||0):s.sp-e.sp)}function F(e){let{skillType:s}=e;switch(s){default:return null;case"weapon":return(0,n.jsx)(n.Fragment,{children:"武器"});case"assist":return(0,n.jsx)(n.Fragment,{children:"輔助"});case"special":return(0,n.jsx)(n.Fragment,{children:"奧義"});case"skillA":return(0,n.jsx)(n.Fragment,{children:"A技能"});case"skillB":return(0,n.jsx)(n.Fragment,{children:"B技能"});case"skillC":return(0,n.jsx)(n.Fragment,{children:"C技能"});case"seal":return(0,n.jsx)(n.Fragment,{children:"聖印"})}}var D=function(e){let{heroId:s,skillType:t,arenaSkillState:l,onClickBack:i,onChangeSkill:a}=e,{spList:r,onClickSkillButton:c}=function(e){let{heroId:s,skillType:t,onChangeSkill:n}=e,l=(0,d.K)(),i=(0,o.useMemo)(()=>{let e;return"weapon"===t&&(e=I({fehDB:l,heroId:s})),"assist"===t&&(e=M({fehDB:l,heroId:s})),"special"===t&&(e=Z({fehDB:l,heroId:s})),("skillA"===t||"skillB"===t||"skillC"===t)&&(e=P({fehDB:l,skillType:t,heroId:s})),"seal"===t&&(e=T({fehDB:l,heroId:s})),E(e)},[l,s,t]),a=(0,o.useCallback)(e=>{let s=e.currentTarget.dataset.id,t=e.currentTarget.dataset.label,l=+e.currentTarget.dataset.sp,i=e.currentTarget.dataset.bst,a=e.currentTarget.dataset.bbst;n({id:s,label:t,sp:l,bst:+i||void 0,bbst:+a||void 0})},[n]);return{spList:i,onClickSkillButton:a}}({heroId:s,skillType:t,onChangeSkill:a});return(0,n.jsxs)("div",{children:[(0,n.jsxs)(A.Dx,{children:[(0,n.jsx)(C.Z,{onClick:i}),(0,n.jsx)(F,{skillType:t})]}),(0,n.jsx)("div",{className:m().spList,children:r.map(e=>(0,n.jsx)("button",{type:"button",value:e.id,disabled:e.id===(null==l?void 0:l.id),"data-active":e.id===(null==l?void 0:l.id),"data-id":e.id,"data-label":e.label,"data-sp":e.sp,"data-bst":e.bst,"data-bbst":e.bbst,onClick:c,children:e.label},e.id))})]})},X=t(1809),U=function(e){let{iv:s,onChangeIV:t,onClickBack:l}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(A.Dx,{children:[(0,n.jsx)(C.Z,{onClick:l}),"IV"]}),(0,n.jsx)("div",{style:{margin:"0 0.25em"},children:(0,n.jsx)(X.Z,{iv:s,selectIV:t})})]})},L=t(182),V=function(e){let{merge:s,onChangeMerge:t,onClickBack:l}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(A.Dx,{children:[(0,n.jsx)(C.Z,{onClick:l}),"突破"]}),(0,n.jsx)(L.Z,{merge:s,onSelect:t})]})},Y=t(4733),O=function(e){let{blessing:s,onChangeBlessing:t,onClickBack:l}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(A.Dx,{children:[(0,n.jsx)(C.Z,{onClick:l}),"祝福"]}),(0,n.jsx)(Y.Z,{blessing:s,selectBlessing:t})]})},W=function(e){let{unitId:s,onChangeScore:t,blesserMap:l}=e,{view:i,heroId:a,heroInfo:r,iv:c,merge:u,bless:x,arenaSkillStateMap:_,totalSp:j,unitArenaScore:k,openHeroPicker:g,openIVPicker:m,openMergePicker:f,openSkillPicker:C,openBlessingPicker:A,onChangeHeroId:S,onChangeIV:B,onChangeMerge:w,onChangeSkill:y,onChangeBlessing:F,onClickMax:X,onClickBack:L}=function(e){let{unitId:s,onChangeScore:t,blesserMap:n}=e,{heroDB:l,dragonflowersDB:i,assistDB:a,resplendentDB:r}=(0,d.K)(),c=(0,d.K)(),[u,x]=(0,o.useState)(""),[_,j]=(0,o.useState)("Feh"),[k,g]=(0,o.useState)(""),[m,v]=(0,o.useState)(0),[f,C]=(0,o.useState)(""),[A,N]=(0,o.useState)({weapon:{id:"",label:"",sp:0},assist:{id:"",label:"",sp:0},special:{id:"",label:"",sp:0},skillA:{id:"",label:"",sp:0},skillB:{id:"",label:"",sp:0},skillC:{id:"",label:"",sp:0},seal:{id:"",label:"",sp:0}}),S=(0,o.useMemo)(()=>(0,b.gO)({heroDB:l,dragonflowersDB:i,assistDB:a,resplendentDB:r,heroId:_}),[a,i,l,_,r]),B=(0,o.useMemo)(()=>{let e=(0,b.cK)(l,_),s=(0,h.f)({stats:e.stats,rarity:5,iv:k,merge:m});return{...S,...s.stats}},[l,_,k,m,S]),w=(0,o.useMemo)(()=>(function(e){let{heroId:s,fehDB:t}=e,n=E(I({heroId:s,fehDB:t})),l=E(M({heroId:s,fehDB:t})),i=E(Z({heroId:s,fehDB:t})),a=E(P({heroId:s,skillType:"skillA",fehDB:t})),r=E(P({heroId:s,skillType:"skillB",fehDB:t})),c=E(P({heroId:s,skillType:"skillC",fehDB:t})),o=E(T({fehDB:t,heroId:s}));return{weapon:n[0],assist:l[0],special:i[0],skillA:a[0],skillB:r[0],skillC:c[0],seal:o[0]}})({heroId:_,fehDB:c}),[_,c]),y=(0,o.useCallback)(()=>{x("hero")},[]),F=(0,o.useCallback)(()=>{x("iv")},[]),D=(0,o.useCallback)(()=>{x("merge")},[]),X=(0,o.useCallback)(e=>{x(e.currentTarget.value)},[]),U=(0,o.useCallback)(()=>{x("blessing")},[]),L=(0,o.useCallback)(()=>{x("")},[]),V=(0,o.useCallback)(e=>{j(e),C(""),x(""),N({weapon:{id:"",label:"",sp:0},assist:{id:"",label:"",sp:0},special:{id:"",label:"",sp:0},skillA:{id:"",label:"",sp:0},skillB:{id:"",label:"",sp:0},skillC:{id:"",label:"",sp:0},seal:{id:"",label:"",sp:0}})},[]),Y=(0,o.useCallback)(e=>{g(e),x("")},[]),O=(0,o.useCallback)(e=>{v(e),x("")},[]),W=(0,o.useCallback)(e=>{N(s=>({...s,[u]:{...e}})),x("")},[u]),K=(0,o.useCallback)(e=>{C(e),x("")},[]),q=(0,o.useCallback)(()=>{N(w)},[w]),z=(0,o.useMemo)(()=>Object.values(A).reduce((e,s)=>e+s.sp,0),[A]),Q=(0,o.useMemo)(()=>{if("Feh"===B.id)return 0;let e=B.bst||0;return Object.values(A).forEach(s=>{e=Math.max(e,(B.blesser?s.bbst:s.bst)||0)}),e=e||0,(0,p.Z)({merge:m,bst:e,spt:z})},[m,A,B.blesser,B.bst,B.id,z]);(0,o.useEffect)(()=>{B.blesser&&C(B.blessing)},[B.blesser,B.blessing]),(0,o.useEffect)(()=>{s&&t({unitId:s,score:Q,blessing:B.blessing||f,blesser:B.blesser})},[f,B.blesser,B.blessing,t,Q,s]);let G=(0,o.useMemo)(()=>!B.blesser&&f&&n[f]?Q+8*n[f]:Q,[B.blesser,n,f,Q]);return{view:u,heroId:_,heroInfo:B,iv:k,merge:m,bless:f,arenaSkillStateMap:A,totalSp:z,unitArenaScore:G,openHeroPicker:y,openIVPicker:F,openMergePicker:D,openSkillPicker:X,openBlessingPicker:U,onChangeHeroId:V,onChangeIV:Y,onChangeMerge:O,onChangeSkill:W,onChangeBlessing:K,onClickBack:L,onClickMax:q}}({unitId:s,onChangeScore:t,blesserMap:l}),Y=["weapon","assist","special","skillA","skillB","skillC","seal"].includes(i);return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{hidden:""!==i,children:(0,n.jsx)(v,{heroInfo:r,iv:c,merge:u,bless:x,arenaSkillStateMap:_,totalSp:j,unitArenaScore:k,openHeroPicker:g,openIVPicker:m,openMergePicker:f,openSkillPicker:C,openBlessingPicker:A,onClickMax:X})}),(0,n.jsx)("div",{hidden:"hero"!==i,children:(0,n.jsx)(N,{heroId:a,onClickBack:L,onChangeHeroId:S})}),(0,n.jsx)("div",{hidden:"iv"!==i,children:(0,n.jsx)(U,{iv:c,onChangeIV:B,onClickBack:L})}),(0,n.jsx)("div",{hidden:"merge"!==i,children:(0,n.jsx)(V,{merge:u,onChangeMerge:w,onClickBack:L})}),(0,n.jsx)("div",{hidden:"blessing"!==i,children:(0,n.jsx)(O,{blessing:r.blessing||x,onChangeBlessing:F,onClickBack:L})}),(0,n.jsx)("div",{hidden:!Y,children:(0,n.jsx)(D,{skillType:i,heroId:a,onClickBack:L,onChangeSkill:y,arenaSkillState:_[i]})})]})},K=t(4368),q=t.n(K),z=function(){let[e,s]=(0,o.useState)({1:{score:0,blessing:"",blesser:""},2:{score:0,blessing:"",blesser:""},3:{score:0,blessing:"",blesser:""},4:{score:0,blessing:"",blesser:""}}),t=(0,o.useCallback)(e=>{let{unitId:t,score:n,blessing:l,blesser:i}=e;s(e=>({...e,[t]:{score:n,blessing:l,blesser:i}}))},[]),{teamScore:n,blesserMap:l}=(0,o.useMemo)(()=>{let s=0,t=0,n=0,l={},i={};if(Object.values(e).forEach(e=>{if(s+=e.score,t+=e.score||300,"legendary"===e.blesser){let s=(0,_.aG)(e.blessing);l[s]||(l[s]=0),l[s]+=1}else e.blessing&&(i[e.blessing]||(i[e.blessing]=0),i[e.blessing]+=1)}),!s)return{teamScore:"",blesserMap:l};t=2*~~(t/8),Object.keys(l).forEach(e=>{i[e]&&(n+=2*(l[e]*i[e]))});let a=t+n;return a?{teamScore:"".concat(a," (").concat(a-2," - ").concat(a+12,")"),blesserMap:l}:{teamScore:"",blesserMap:l}},[e]),i=(0,o.useRef)(null),[a,r]=(0,o.useState)(!0),[c,u]=(0,o.useState)(!0),d=(0,o.useCallback)(()=>{let e=0===i.current.scrollLeft,s=i.current.scrollWidth-i.current.scrollLeft-i.current.offsetWidth;r(e),u(s<3)},[]),b=(0,o.useCallback)(()=>{let e=-i.current.offsetWidth;i.current.scrollLeft+=e,d()},[d]),h=(0,o.useCallback)(()=>{let e=+i.current.offsetWidth;i.current.scrollLeft+=e,d()},[d]);return(0,o.useEffect)(()=>{d()},[]),{onChangeScore:t,teamScore:n,blesserMap:l,containerRef:i,handleScroll:d,prevDisabled:a,onClickPrev:b,nextDisabled:c,onClickNext:h}};let Q=()=>{let e=(0,a.Z)("/assets/summon-stone.jpg"),{teamScore:s,onChangeScore:t,blesserMap:l,containerRef:r,handleScroll:o,prevDisabled:d,onClickPrev:b,nextDisabled:h,onClickNext:p}=z();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"豆祭計算機"})}),(0,n.jsx)("div",{className:q().container,style:{background:"url('".concat(e,"') center / cover no-repeat fixed")},children:(0,n.jsxs)("div",{className:q()["bg-layer"],children:[(0,n.jsxs)("div",{className:q().units,ref:r,onScroll:o,children:[(0,n.jsx)(W,{unitId:1,onChangeScore:t,blesserMap:l}),(0,n.jsx)(W,{unitId:2,onChangeScore:t,blesserMap:l}),(0,n.jsx)(W,{unitId:3,onChangeScore:t,blesserMap:l}),(0,n.jsx)(W,{unitId:4,onChangeScore:t,blesserMap:l})]}),(0,n.jsxs)("div",{className:q().scores,children:[(0,n.jsxs)("div",{hidden:!s,children:["總分: ",s]}),(0,n.jsxs)("div",{className:q().unitSwapButtons,children:[(0,n.jsx)("button",{className:q().unitPrev,onClick:b,disabled:d,children:(0,n.jsx)(c.Z,{fill:"white"})}),(0,n.jsx)("button",{className:q().unitNext,onClick:p,disabled:h,children:(0,n.jsx)(u,{fill:"white"})})]})]})]})})]})};var G=function(){return(0,n.jsx)(r.Z,{children:(0,n.jsx)(Q,{})})},H=function(){return(0,n.jsx)(G,{})}},4437:function(e){e.exports={blessing:"blessing_blessing__blnCv","blessing-name":"blessing_blessing-name__ziDWm"}},3685:function(e){e.exports={container:"styles_container__xVglQ","neutral-button":"styles_neutral-button__3Jy3p","blessing-button":"styles_blessing-button__uTuYg"}},6056:function(e){e.exports={container:"styles_container__tZQ1M","neutral-button":"styles_neutral-button__g5gLf","iv-button":"styles_iv-button__E4oc0"}},9454:function(e){e.exports={button:"editor_button__1Aj_h",title:"editor_title__G7mXS","title-textgroup":"editor_title-textgroup__j5Pdh",content:"editor_content__N3y0j",section:"editor_section__Gd9W0","section-group":"editor_section-group___l6ak","hero-header":"editor_hero-header__8nv2V","button-content":"editor_button-content__KL_Lj","editor-img":"editor_editor-img__JmqNm","close-button":"editor_close-button__bPesF",container:"editor_container__jmHAB",input:"editor_input__V7XSN",options:"editor_options__IAlm_",optionsContainer:"editor_optionsContainer__xApnj",skillTitle:"editor_skillTitle__76dd8",skillName:"editor_skillName__RBSFh",skillSp:"editor_skillSp__4PqOu",might:"editor_might__0oY2D",extractStats:"editor_extractStats__e5tKT",extractStat:"editor_extractStat__luCo4",subTitle:"editor_subTitle__tfF5U",spButtons:"editor_spButtons__1ZKIN",listItems:"editor_listItems__kTlQH"}},1430:function(e){e.exports={unit:"ArenaUnit_unit__4Cqi7",heroButton:"ArenaUnit_heroButton__Q6mha",sectionButton:"ArenaUnit_sectionButton__wEfM6",ivAndMerge:"ArenaUnit_ivAndMerge__UpGcZ",summarySection:"ArenaUnit_summarySection__o7_ya",section:"ArenaUnit_section__wYv8z",enhancedText:"ArenaUnit_enhancedText___QnPw",unitPicker:"ArenaUnit_unitPicker__X1qW9",menu:"ArenaUnit_menu___OuNF",spList:"ArenaUnit_spList__m0XkF",maxScore:"ArenaUnit_maxScore__G83pt"}},4368:function(e){e.exports={container:"ArenaCalc_container__gc15q","bg-layer":"ArenaCalc_bg-layer__qMAig",units:"ArenaCalc_units__Vbsdw",scores:"ArenaCalc_scores__A_hER",unitSwapButtons:"ArenaCalc_unitSwapButtons__zvTAf",unitPrev:"ArenaCalc_unitPrev__zVAlg",unitNext:"ArenaCalc_unitNext__jxbWE"}}},function(e){e.O(0,[270,259,570,612,774,888,179],function(){return e(e.s=3721)}),_N_E=e.O()}]);