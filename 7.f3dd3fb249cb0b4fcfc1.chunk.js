(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2bc822e570489344a484":function(e,t,n){"use strict";n.r(t);var a=n("8af190b70a6bc55c6f1b"),r=n.n(a),o=n("8a2d1b95e05b6a321e74"),s=n.n(o),i=n("deb1edf8e03fc2092ec7"),l=n("ef55fb2ebc45364e784e"),c=n("c1d0df1466113eca96ac"),u=n("c9dd7b4f2540bc3f4075"),f=n("9cbbf93b4b14a35c4c9d"),p=n("820838b578959fb7cbd0"),d=n("a17698738bfaaefd79fe"),v=n("02529214ba6eaf3d0120"),g=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b={atk:!0,spd:!0,def:!0,res:!0},y=function(e){return{weapon:l.a.getSkill(e.weapon),assist:c.a.getSkill(e.assist),special:u.a.getSkill(e.special),skillA:f.a.getSkill(e.skillA),skillB:p.a.getSkill(e.skillB),skillC:d.a.getSkill(e.skillC),seal:v.a.getSkill(e.seal)}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=y(e),a={};if(Object.entries(n).forEach(function(e){var t=g(e,2),n=t[0],r=t[1].get("icon",null);a[n]=r&&"skills/"+r}),"-"!==t){var r=n.weapon.getIn(["refine",t,"icon"],null);a.weapon=b[t]?"skills/weapon/"+t+".png":r&&"skills/weapon/"+r+".png"}return a},m=function(e,t){var n=y(e),a={},r=0,o=n.special.get("cd",0);r+=n.weapon.get("cd",0),r+=n.assist.get("cd",0);var s={hp:0,atk:0,spd:0,def:0,res:0};Object.entries(n).forEach(function(e){var t=g(e,2),n=t[0],r=t[1];a[n]=r.get("name"),s.hp+=r.get("hp",0),s.atk+=r.get("mt",0)+r.get("atk",0),s.spd+=r.get("spd",0),s.def+=r.get("def",0),s.res+=r.get("res",0)});var i=n.weapon.getIn(["refine",t]);return i&&(s.hp+=i.get("hp",0),s.atk+=i.get("mt",0)+i.get("atk",0),s.spd+=i.get("spd",0),s.def+=i.get("def",0),s.res+=i.get("res",0),r+=i.get("cd",0)),{names:a,stats:s,accelerate:r,specialCD:o}},w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={hp:0,atk:1,spd:2,def:3,res:4},I=function(e){if("-"===e)return{boon:"hp",bane:"hp"};var t=e.substring(1).split("-");return{boon:t[0],bane:t[1]}},O=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var j,T=function(e,t,n,a,r,o,s,i){var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments[1],n=I(t),a=n.boon,r=n.bane,o={hp:1,atk:1,spd:1,def:1,res:1};return o[a]+=1,o[r]-=1,Object.entries(e).reduce(function(e,t){var n=k(t,2),a=n[0],r=n[1];return w({},e,x({},a,Array.isArray(r)?r[o[a]]:r))},{})}(t[""+e],n),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments[1],n=I(t),a=n.boon,r=n.bane,o={hp:0,atk:0,spd:0,def:0,res:0};return o[a]+=1,o[r]-=1,Object.entries(e).reduce(function(e,t){var n=k(t,2),a=n[0],r=n[1];return w({},e,x({},a,r+o[a]))},{})}(t[e+"-1"],n),u=function(e,t){var n=Object.entries(e).map(function(e){var t=O(e,2);return{key:t[0],stat:t[1]}});n.sort(function(e,t){return e.stat>t.stat?-1:e.stat<t.stat?1:e.index<t.index?-1:e.index>t.index?1:0});for(var a=n.map(function(e){return e.key}),r={hp:0,atk:0,spd:0,def:0,res:0},o=0;o<2*t;o+=1)r[a[o%5]]+=1;return r}(c,a),f=r?{hp:5,atk:2,spd:2,def:2,res:2}:{hp:0,atk:0,spd:0,def:0,res:0},p=i?{hp:10,atk:4,spd:4,def:4,res:4}:{hp:0,atk:0,spd:0,def:0,res:0};return{statsSum:Object.entries(s?c:l).reduce(function(e,t){var n=S(t,2),a=n[0],r=n[1]+o.stats[a]+u[a]+f[a]+p[a];return C({},e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},a,r>-1?r:0))},{})}},B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E=(j="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,a){var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===o)t.children=a;else if(o>1){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+3];t.children=i}return{$$typeof:j,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),P=function(e){return r.a.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},e),E("path",{d:"M38 18h-8v-12h-12v12h-8l14 14 14-14zm-28 18v4h28v-4h-28z"}),E("path",{d:"M0 0h48v48h-48z",fill:"none"}))},H=function(e){var t=e.context,n=e.background;e.support?t.drawImage(n,540,0,540,960,0,0,540,960):t.drawImage(n,0,0,540,960,0,0,540,960)},R=function(e){var t=e.context,n=e.portrait;t.drawImage(n,0,0,540,960,0,0,540,960)},_=function(e){var t=e.context,n=e.foreground;t.drawImage(n,0,0,540,960,0,0,540,960)},M=function(e){var t=e.context,n=e.rarityAtlas;switch(e.rarity){case 5:t.drawImage(n,0,0,153,40,32,380,153,40);break;case 4:t.drawImage(n,0,41,153,40,32,380,153,40)}},N=44,D=554,J=["red sword","blue lance","green axe","red Bow","blue Bow","green Bow","netural Bow","netural Dagger","red tome","blue tome","green tome","netural Staff","red breath","blue breath","green breath","netural breath"],q=function(e){var t=e.context,n=e.weaponTypeAtlas,a=e.weaponType,r=J.indexOf(a);r>-1&&t.drawImage(n,56*r,0,56,52,N,D,28,26)},U=206,z=555,F=["infantry","armored","cavalry","flying"],W=function(e){var t=e.context,n=e.moveTypeAtlas,a=e.moveType,r=F.indexOf(a);r>-1&&t.drawImage(n,56*r,0,52,52,U,z,26,26)},Y=432,$=425,V=function(e){var t=e.context,n=e.supportAtlas,a=e.support,r=e.hasBlessing?108:0;a&&t.drawImage(n,Y-r,$,108,115)},L=432,G=425,K=function(e){var t=e.context,n=e.blessingAtlas;t.drawImage(n,L,G,108,115)},Q=275,X=594,Z=function(e,t,n){var a=37*n+1+X;e.drawImage(t,Q,a,35,35)},ee=function(e){var t=e.context,n=e.weaponIcon,a=e.assistIcon,r=e.specialIcon,o=e.textA,s=e.textB,i=e.textC,l=e.textS,c=e.skillAIcon,u=e.skillBIcon,f=e.skillCIcon,p=e.sealIcon,d=e.loadeds;d.weaponIcon&&Z(t,n,0),d.assistIcon&&Z(t,a,1),d.specialIcon&&Z(t,r,2),d.skillAIcon&&Z(t,c,3),t.drawImage(o,Q+20,X+112+18,18,18),d.skillBIcon&&Z(t,u,4),t.drawImage(s,Q+20,X+149+18,18,18),d.skillCIcon&&Z(t,f,5),t.drawImage(i,Q+20,X+186+18,18,18),d.sealIcon&&Z(t,p,6),t.drawImage(l,Q+20,X+223+18,18,18)},te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};var ne=1,ae=43,re=85,oe=127,se=169,ie=[0,1,2,3,4,5,6,7,8,9,"x","+","-"].reduce(function(e,t,n){return te({},e,(o=34*n+1,(r=t)in(a={})?Object.defineProperty(a,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[r]=o,a));var a,r,o},{}),le=function(e,t,n,a,r,o){ie[a]&&e.drawImage(t,ie[a],n,32,40,r,o,16,20)},ce=60,ue=594,fe=function(e){var t=e.context,n=e.numberAtlas,a=e.iv;if("-"!==a){var r=function(e){if("-"===e)return{boon:0,bane:0};var t=e.substring(1).split("-");return{boon:A[t[0]],bane:A[t[1]]}}(a),o=r.boon,s=r.bane;le(t,n,re,"+",ce,ue+8+37*o),le(t,n,oe,"-",ce,ue+8+37*s)}},pe=114,de=558,ve=[14,28,42],ge=function(e){var t=e.context,n=e.numberAtlas,a=e.lv1?1:40,r=0;a>9&&le(t,n,ae,4,pe+ve[r],de),le(t,n,ae,a%10,pe+ve[r+=1],de)},be=144,ye=558,he=[14,28,42],me=function(e){var t=e.context,n=e.numberAtlas,a=e.merge;if(!(a<=0)){var r=0,o=a>9?se:ae;le(t,n,o,"+",be+he[0],ye),r+=1,a>9&&(le(t,n,o,1,be+he[r],ye),r+=1),le(t,n,o,a%10,be+he[r],ye)}},we=130,ke=594,xe=[14,28,42,56],Ae=[1e3,100,10],Ie=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:ne,o=8+ke+37*a;Ae.forEach(function(a,s){if(n>=a){var i=Math.floor(n/a%10);le(e,t,r,i,we+xe[s],o)}}),le(e,t,r,n%10,we+xe[3],o)},Oe=function(e){var t=e.context,n=e.numberAtlas,a=e.stats;Object.values(a).forEach(function(e,a){Ie(t,n,e,a,ne)}),Ie(t,n,9999,5,se),Ie(t,n,5e3,6,se)},Ce=465,Se=594,je=function(e){var t=e.context,n=e.numberAtlas,a=e.accelerate,r=e.specialCD;if(r){var o=ae;a<0&&(o=re),a>0&&(o=oe),function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:ae;le(e,t,a,n,Ce,8+Se+74)}(t,n,a+r,o)}},Te=206,Be=1298,Ee=["攻擊","速度","防守","魔防","","英雄值"],Pe=function(e){var t=e.canvas.getContext("2d");t.font="500 36px FEH, 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif",t.fillStyle="white",t.strokeStyle="#101010",t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineWidth=8,Ee.forEach(function(e,n){var a=Be+74*n+4;t.strokeText(e,Te,a),t.fillText(e,Te,a)})};var He=634,Re=1224,_e={weapon:0,assist:1,special:2,skillA:3,skillB:4,skillC:5,seal:6},Me=function(e){var t=e.canvas,n=e.refine,a=e.weapon,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["canvas","refine","weapon"]),o=t.getContext("2d");o.font="500 36px FEH, 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif",o.textAlign="left",o.textBaseline="middle",o.lineJoin="round",o.lineWidth=8,o.strokeStyle="#101010",o.fillStyle="-"!==n?"lime":"white";var s=He+("-"===a?4:0),i=Re+4;o.strokeText(a,s,i),o.fillText(a,s,i),o.fillStyle="white",Object.keys(r).forEach(function(e){var t=r[e],n=Re+74*_e[e]+4,a="-"===t?4:0;o.strokeText(t,He+a,n),o.fillText(t,He+a,n)})},Ne=296,De=876,Je=336,qe=992,Ue=function(e){var t=e.canvas,n=e.title,a=e.name,r=t.getContext("2d");r.font="500 48px FEH, 'Microsoft YaHei', 'Helvetica Neue', Helvetica, 'Microsoft JhengHei', Arial, sans-serif",r.fillStyle="white",r.strokeStyle="#220d00",r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",r.lineWidth=8,r.strokeText(n,Ne,De),r.fillText(n,Ne,De),r.font="500 52px FEH, 'Microsoft YaHei', 'Helvetica Neue', Helvetica, 'Microsoft JhengHei', Arial, sans-serif",r.strokeText(a,Je,qe),r.fillText(a,Je,qe)},ze=function(e){var t=e.context,n=e.arenaIcon;t.beginPath(),t.moveTo(28+24*Math.cos(0),28+24*Math.sin(0));for(var a=0;a<7;a+=1)t.lineTo(28+24*Math.cos(2*a*(Math.PI/6)),28+24*Math.sin(2*a*(Math.PI/6)));t.fillStyle="rgba(0, 0, 0, 0.63)",t.fill(),t.strokeStyle="rgba(255,255,255, 0.63)",t.lineWidth="2",t.stroke(),t.drawImage(n,12,12,32,32),t.closePath()},Fe=n("8c4452cdaa895301c113"),We=n.n(Fe),Ye=(s.a.string.isRequired,s.a.string.isRequired,s.a.string.isRequired,s.a.arrayOf(s.a.number).isRequired,s.a.oneOf(Object.keys(We.a.allDisabled.moveType)),s.a.oneOf(Object.keys(We.a.allDisabled.weaponType)),s.a.oneOf(Object.keys(We.a.allDisabled.colorType)),s.a.string,s.a.object.isRequired,function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,r){var o=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&o)for(var i in o)void 0===n[i]&&(n[i]=o[i]);else n||(n=o||{});if(1===s)n.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}()),$e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ve=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var Le=i.b.canvas.withConfig({displayName:"UnitViewer__Canvas"})(["height:100%;position:relative;"]),Ge=i.b.div.withConfig({displayName:"UnitViewer__Container"})(["width:100%;height:100%;position:relative;"]),Ke=Object(i.b)(P).withConfig({displayName:"UnitViewer__Button"})(["background-color:white;position:absolute;border-radius:1.25em;top:4px;right:4px;padding:0.5em;font-size:16px;width:2.5em;height:2.5em;cursor:pointer;"]),Qe=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.setAssets=function(){var e=n.props,t=e.hero,a=e.rarity,r=e.iv,o=e.merge,s=e.blessing,i=e.support,l=e.weapon,c=e.refine,u=e.assist,f=e.special,p=e.skillA,d=e.skillB,v=e.skillC,g=e.seal,b=e.lv1,y=e.arena,w=t.portrait,k=t.stats,x={weapon:l,assist:u,special:f,skillA:p,skillB:d,skillC:v,seal:g};n.loaders.portrait("portraits/"+w);var A=h(x,c);[{skillName:"weapon",empty:"skills/weapon.png"},{skillName:"skillA",empty:"skills/empty.png"},{skillName:"skillB",empty:"skills/empty.png"},{skillName:"skillC",empty:"skills/empty.png"},{skillName:"seal",empty:"skills/seal-empty.png"}].forEach(function(e){var t=e.skillName,a=e.empty;n.loaders[t+"Icon"](A[t]||a)});var I=s&&"-"!==s;n.loaders.blessingAtlas(I?"assets/blessing-"+s+".png":"");var O=m(x,c),C=T(a,k,r,o,i,O,b,y).statsSum;n.skillInfos=O,n.statsSum=C},n.setRef=function(e){n.canvasRef=e},n.draw=function(){var e=n.props,t=e.hero,a=e.rarity,r=e.iv,o=e.merge,s=e.blessing,i=e.support,l=e.refine,c=e.lv1,u=e.arena,f=n.images,p=f.background,d=f.foreground,v=f.portrait,g=f.rarityAtlas,b=f.weaponTypeAtlas,y=f.moveTypeAtlas,h=f.supportAtlas,m=f.blessingAtlas,w=f.numberAtlas,k=f.weaponIcon,x=f.assistIcon,A=f.specialIcon,I=f.textA,O=f.textB,C=f.textC,S=f.textS,j=f.arenaIcon,T=f.skillAIcon,B=f.skillBIcon,E=f.skillCIcon,P=f.sealIcon,N=t.title,D=t.name,J=t.weaponType,U=t.moveType,z=s&&"-"!==s;if(n.canvasRef){var F=n.canvasRef.getContext("2d");F.clearRect(0,0,540,960),n.loadeds.background&&H({context:F,background:p,support:i}),n.loadeds.portrait&&R({context:F,portrait:v}),n.loadeds.foreground&&_({context:F,foreground:d}),n.loadeds.rarityAtlas&&M({context:F,rarityAtlas:g,rarity:a}),n.loadeds.weaponTypeAtlas&&q({context:F,weaponTypeAtlas:b,weaponType:J}),n.loadeds.moveTypeAtlas&&W({context:F,moveTypeAtlas:y,moveType:U}),n.loadeds.supportAtlas&&V({context:F,supportAtlas:h,support:i,hasBlessing:z}),n.loadeds.blessingAtlas&&K({context:F,blessingAtlas:m,blessing:s}),n.loadeds.numberAtlas&&(ge({context:F,numberAtlas:w,lv1:c}),me({context:F,numberAtlas:w,merge:o}),fe({context:F,numberAtlas:w,iv:r}),Oe({context:F,numberAtlas:w,stats:n.statsSum}),je({context:F,numberAtlas:w,accelerate:n.skillInfos.accelerate,specialCD:n.skillInfos.specialCD})),ee({context:F,weaponIcon:k,assistIcon:x,specialIcon:A,textA:I,textB:O,textC:C,textS:S,skillAIcon:T,skillBIcon:B,skillCIcon:E,sealIcon:P,loadeds:n.loadeds}),n.textCanvas.getContext("2d").clearRect(0,0,1080,1920),Pe({canvas:n.textCanvas}),Me($e({canvas:n.textCanvas,refine:l},n.skillInfos.names)),Ue({canvas:n.textCanvas,title:N,name:D}),u&&j&&ze({context:F,arenaIcon:j}),F.drawImage(n.textCanvas,0,0,540,960)}},n.download=function(e){e.stopPropagation();var t=n.props.hero.name,a=n.canvasRef.toDataURL("image/png"),r=document.createElement("a");r.href=a,r.download=t+".png",document.body.appendChild(r),r.click(),document.body.removeChild(r)},n.canvasRef=null,n.textCanvas=document.createElement("canvas"),n.textCanvas.width=1080,n.textCanvas.height=1920;return n.images={},n.loadeds={},n.loaders={},["background","foreground","portrait","rarityAtlas","weaponTypeAtlas","moveTypeAtlas","supportAtlas","blessingAtlas","numberAtlas","weaponIcon","assistIcon","specialIcon","textA","textB","textC","textS","arenaIcon","skillAIcon","skillBIcon","skillCIcon","sealIcon"].forEach(function(e){n.images[e]=new Image,n.loadeds[e]=!1,n.images[e].onload=function(){n.loadeds[e]=!0,n.draw()},n.images[e].onerror=function(){n.loadeds[e]=!1,n.draw()},n.loaders[e]=function(t){n.loadeds[e]=!1,n.images[e].src=t}}),n.loaders.background("assets/background.jpg"),n.loaders.foreground("assets/foreground.png"),n.loaders.rarityAtlas("assets/rarity.png"),n.loaders.moveTypeAtlas("assets/move-type.png"),n.loaders.supportAtlas("assets/support.png"),n.loaders.numberAtlas("assets/number.png"),n.loaders.weaponIcon("skills/weapon.png"),n.loaders.assistIcon("skills/assist.png"),n.loaders.specialIcon("skills/special.png"),n.loaders.textA("assets/skill-a.png"),n.loaders.textB("assets/skill-b.png"),n.loaders.textC("assets/skill-c.png"),n.loaders.textS("assets/skill-s.png"),n.loaders.arenaIcon("assets/Dueling_Crest.png"),n.setAssets(e),n.draw(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),Ve(t,[{key:"componentDidUpdate",value:function(){this.setAssets()}},{key:"render",value:function(){return Ye(Ge,{},void 0,Ye(Le,{width:"540",height:"960",innerRef:this.setRef}),Ye(Ke,{onClick:this.download}))}}]),t}();n.d(t,"default",function(){return Qe})}}]);