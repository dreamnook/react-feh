"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[381],{9142:function(e,t,r){let i;r.d(t,{ZP:function(){return f}});var n=r(7294);"undefined"!=typeof window?i=window:"undefined"!=typeof self?i=self:i=r.g;let o=null,s=null,a=i.clearTimeout,l=i.setTimeout,c=i.cancelAnimationFrame||i.mozCancelAnimationFrame||i.webkitCancelAnimationFrame,u=i.requestAnimationFrame||i.mozRequestAnimationFrame||i.webkitRequestAnimationFrame;null==c||null==u?(o=a,s=function(e){return l(e,20)}):(o=function([e,t]){c(e),a(t)},s=function(e){let t=u(function(){a(r),e()}),r=l(function(){c(t),e()},20);return[t,r]});class f extends n.Component{constructor(...e){super(...e),this.state={height:this.props.defaultHeight||0,scaledHeight:this.props.defaultHeight||0,scaledWidth:this.props.defaultWidth||0,width:this.props.defaultWidth||0},this._autoSizer=null,this._detectElementResize=null,this._parentNode=null,this._resizeObserver=null,this._timeoutId=null,this._onResize=()=>{this._timeoutId=null;let{disableHeight:e,disableWidth:t,onResize:r}=this.props;if(this._parentNode){let i=window.getComputedStyle(this._parentNode)||{},n=parseFloat(i.paddingLeft||"0"),o=parseFloat(i.paddingRight||"0"),s=parseFloat(i.paddingTop||"0"),a=parseFloat(i.paddingBottom||"0"),l=this._parentNode.getBoundingClientRect(),c=l.height-s-a,u=l.width-n-o,f=this._parentNode.offsetHeight-s-a,d=this._parentNode.offsetWidth-n-o;(e||this.state.height===f&&this.state.scaledHeight===c)&&(t||this.state.width===d&&this.state.scaledWidth===u)||(this.setState({height:f,width:d,scaledHeight:c,scaledWidth:u}),"function"==typeof r&&r({height:f,scaledHeight:c,scaledWidth:u,width:d}))}},this._setRef=e=>{this._autoSizer=e}}componentDidMount(){let{nonce:e}=this.props,t=this._autoSizer?this._autoSizer.parentNode:null;if(null!=t&&t.ownerDocument&&t.ownerDocument.defaultView&&t instanceof t.ownerDocument.defaultView.HTMLElement){this._parentNode=t;let r=t.ownerDocument.defaultView.ResizeObserver;null!=r?(this._resizeObserver=new r(()=>{this._timeoutId=setTimeout(this._onResize,0)}),this._resizeObserver.observe(t)):(this._detectElementResize=function(e){let t,r,n,a,l,c,u;let f="undefined"!=typeof document&&document.attachEvent;if(!f){c=function(e){let t=e.__resizeTriggers__,r=t.firstElementChild,i=t.lastElementChild,n=r.firstElementChild;i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight,n.style.width=r.offsetWidth+1+"px",n.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},l=function(e){return e.offsetWidth!==e.__resizeLast__.width||e.offsetHeight!==e.__resizeLast__.height},u=function(e){if(e.target.className&&"function"==typeof e.target.className.indexOf&&0>e.target.className.indexOf("contract-trigger")&&0>e.target.className.indexOf("expand-trigger"))return;let t=this;c(this),this.__resizeRAF__&&o(this.__resizeRAF__),this.__resizeRAF__=s(function(){l(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(r){r.call(t,e)}))})};let e=!1,i="";n="animationstart";let f="Webkit Moz O ms".split(" "),d="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");{let t=document.createElement("fakeelement");if(void 0!==t.style.animationName&&(e=!0),!1===e){for(let r=0;r<f.length;r++)if(void 0!==t.style[f[r]+"AnimationName"]){i="-"+(0,f[r]).toLowerCase()+"-",n=d[r],e=!0;break}}}t="@"+i+"keyframes "+(r="resizeanim")+" { from { opacity: 0; } to { opacity: 0; } } ",a=i+"animation: 1ms "+r+"; "}let d=function(r){if(!r.getElementById("detectElementResize")){let i=(t||"")+".resize-triggers { "+(a||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',n=r.head||r.getElementsByTagName("head")[0],o=r.createElement("style");o.id="detectElementResize",o.type="text/css",null!=e&&o.setAttribute("nonce",e),o.styleSheet?o.styleSheet.cssText=i:o.appendChild(r.createTextNode(i)),n.appendChild(o)}};return{addResizeListener:function(e,t){if(f)e.attachEvent("onresize",t);else{if(!e.__resizeTriggers__){let t=e.ownerDocument,o=i.getComputedStyle(e);o&&"static"===o.position&&(e.style.position="relative"),d(t),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=t.createElement("div")).className="resize-triggers";let s=t.createElement("div");s.className="expand-trigger",s.appendChild(t.createElement("div"));let a=t.createElement("div");a.className="contract-trigger",e.__resizeTriggers__.appendChild(s),e.__resizeTriggers__.appendChild(a),e.appendChild(e.__resizeTriggers__),c(e),e.addEventListener("scroll",u,!0),n&&(e.__resizeTriggers__.__animationListener__=function(t){t.animationName===r&&c(e)},e.__resizeTriggers__.addEventListener(n,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(t)}},removeResizeListener:function(e,t){if(f)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",u,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(n,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}(e),this._detectElementResize.addResizeListener(t,this._onResize)),this._onResize()}}componentWillUnmount(){this._parentNode&&(this._detectElementResize&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize),null!==this._timeoutId&&clearTimeout(this._timeoutId),this._resizeObserver&&this._resizeObserver.disconnect())}render(){let{children:e,defaultHeight:t,defaultWidth:r,disableHeight:i=!1,disableWidth:o=!1,doNotBailOutOnEmptyChildren:s=!1,nonce:a,onResize:l,style:c={},tagName:u="div",...f}=this.props,{height:d,scaledHeight:h,scaledWidth:_,width:p}=this.state,m={overflow:"visible"},g={},v=!1;return i||(0===d&&(v=!0),m.height=0,g.height=d,g.scaledHeight=h),o||(0===p&&(v=!0),m.width=0,g.width=p,g.scaledWidth=_),s&&(v=!1),(0,n.createElement)(u,{ref:this._setRef,style:{...m,...c},...f},!v&&e(g))}}},6738:function(e,t,r){function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(null,arguments)}function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{t7:function(){return M},S_:function(){return O}});var s=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var r,i,n=0;n<e.length;n++)if(!((r=e[n])===(i=t[n])||s(r)&&s(i)))return!1;return!0}var l=function(e,t){void 0===t&&(t=a);var r,i,n=[],o=!1;return function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return o&&r===this&&t(s,n)||(i=e.apply(this,s),o=!0,r=this,n=s),i}},c=r(7294),u="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function f(e){cancelAnimationFrame(e.id)}var d=-1;function h(e){if(void 0===e&&(e=!1),-1===d||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(t),d=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return d}var _=null;function p(e){if(void 0===e&&(e=!1),null===_||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var i=document.createElement("div"),n=i.style;n.width="100px",n.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?_="positive-descending":(t.scrollLeft=1,_=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t)}return _}var m=function(e,t,r,i){var n,o,s;if("column"===e?(n=i.columnMetadataMap,o=t.columnWidth,s=i.lastMeasuredColumnIndex):(n=i.rowMetadataMap,o=t.rowHeight,s=i.lastMeasuredRowIndex),r>s){var a=0;if(s>=0){var l=n[s];a=l.offset+l.size}for(var c=s+1;c<=r;c++){var u=o(c);n[c]={offset:a,size:u},a+=u}"column"===e?i.lastMeasuredColumnIndex=r:i.lastMeasuredRowIndex=r}return n[r]},g=function(e,t){return e};function v(e){var t,r=e.getItemOffset,s=e.getEstimatedTotalSize,a=e.getItemSize,d=e.getOffsetForIndexAndAlignment,_=e.getStartIndexForOffset,m=e.getStopIndexForStartIndex,v=e.initInstanceProps,z=e.shouldResetStyleCacheOnItemSizeChange,S=e.validateProps;return(t=function(e){function t(t){var i;return(i=e.call(this,t)||this)._instanceProps=v(i.props,n(i)),i._outerRef=void 0,i._resetIsScrollingTimeoutId=null,i.state={instance:n(i),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof i.props.initialScrollOffset?i.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},i._callOnItemsRendered=void 0,i._callOnItemsRendered=l(function(e,t,r,n){return i.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:r,visibleStopIndex:n})}),i._callOnScroll=void 0,i._callOnScroll=l(function(e,t,r){return i.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:r})}),i._getItemStyle=void 0,i._getItemStyle=function(e){var t,n=i.props,o=n.direction,s=n.itemSize,l=n.layout,c=i._getItemStyleCache(z&&s,z&&l,z&&o);if(c.hasOwnProperty(e))t=c[e];else{var u=r(i.props,e,i._instanceProps),f=a(i.props,e,i._instanceProps),d="horizontal"===o||"horizontal"===l,h="rtl"===o,_=d?u:0;c[e]=t={position:"absolute",left:h?void 0:_,right:h?_:void 0,top:d?0:u,height:d?"100%":f,width:d?f:"100%"}}return t},i._getItemStyleCache=void 0,i._getItemStyleCache=l(function(e,t,r){return{}}),i._onScrollHorizontal=function(e){var t=e.currentTarget,r=t.clientWidth,n=t.scrollLeft,o=t.scrollWidth;i.setState(function(e){if(e.scrollOffset===n)return null;var t=i.props.direction,s=n;if("rtl"===t)switch(p()){case"negative":s=-n;break;case"positive-descending":s=o-r-n}return s=Math.max(0,Math.min(s,o-r)),{isScrolling:!0,scrollDirection:e.scrollOffset<s?"forward":"backward",scrollOffset:s,scrollUpdateWasRequested:!1}},i._resetIsScrollingDebounced)},i._onScrollVertical=function(e){var t=e.currentTarget,r=t.clientHeight,n=t.scrollHeight,o=t.scrollTop;i.setState(function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,n-r));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}},i._resetIsScrollingDebounced)},i._outerRefSetter=function(e){var t=i.props.outerRef;i._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},i._resetIsScrollingDebounced=function(){var e,t,r;null!==i._resetIsScrollingTimeoutId&&f(i._resetIsScrollingTimeoutId),i._resetIsScrollingTimeoutId=(e=i._resetIsScrolling,t=u(),r={id:requestAnimationFrame(function i(){u()-t>=150?e.call(null):r.id=requestAnimationFrame(i)})})},i._resetIsScrolling=function(){i._resetIsScrollingTimeoutId=null,i.setState({isScrolling:!1},function(){i._getItemStyleCache(-1,null)})},i}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e),t.getDerivedStateFromProps=function(e,t){return y(e,t),S(e),null};var b=t.prototype;return b.scrollTo=function(e){e=Math.max(0,e),this.setState(function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},b.scrollToItem=function(e,t){void 0===t&&(t="auto");var r=this.props,i=r.itemCount,n=r.layout,o=this.state.scrollOffset;e=Math.max(0,Math.min(e,i-1));var s=0;if(this._outerRef){var a=this._outerRef;s="vertical"===n?a.scrollWidth>a.clientWidth?h():0:a.scrollHeight>a.clientHeight?h():0}this.scrollTo(d(this.props,e,t,o,this._instanceProps,s))},b.componentDidMount=function(){var e=this.props,t=e.direction,r=e.initialScrollOffset,i=e.layout;if("number"==typeof r&&null!=this._outerRef){var n=this._outerRef;"horizontal"===t||"horizontal"===i?n.scrollLeft=r:n.scrollTop=r}this._callPropsCallbacks()},b.componentDidUpdate=function(){var e=this.props,t=e.direction,r=e.layout,i=this.state,n=i.scrollOffset;if(i.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===r){if("rtl"===t)switch(p()){case"negative":o.scrollLeft=-n;break;case"positive-ascending":o.scrollLeft=n;break;default:var s=o.clientWidth,a=o.scrollWidth;o.scrollLeft=a-s-n}else o.scrollLeft=n}else o.scrollTop=n}this._callPropsCallbacks()},b.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&f(this._resetIsScrollingTimeoutId)},b.render=function(){var e=this.props,t=e.children,r=e.className,n=e.direction,o=e.height,a=e.innerRef,l=e.innerElementType,u=e.innerTagName,f=e.itemCount,d=e.itemData,h=e.itemKey,_=void 0===h?g:h,p=e.layout,m=e.outerElementType,v=e.outerTagName,y=e.style,z=e.useIsScrolling,S=e.width,b=this.state.isScrolling,w="horizontal"===n||"horizontal"===p,I=w?this._onScrollHorizontal:this._onScrollVertical,O=this._getRangeToRender(),M=O[0],R=O[1],x=[];if(f>0)for(var C=M;C<=R;C++)x.push((0,c.createElement)(t,{data:d,key:_(C,d),index:C,isScrolling:z?b:void 0,style:this._getItemStyle(C)}));var P=s(this.props,this._instanceProps);return(0,c.createElement)(m||v||"div",{className:r,onScroll:I,ref:this._outerRefSetter,style:i({position:"relative",height:o,width:S,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:n},y)},(0,c.createElement)(l||u||"div",{children:x,ref:a,style:{height:w?"100%":P,pointerEvents:b?"none":void 0,width:w?P:"100%"}}))},b._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],r=e[1],i=e[2],n=e[3];this._callOnItemsRendered(t,r,i,n)}if("function"==typeof this.props.onScroll){var o=this.state,s=o.scrollDirection,a=o.scrollOffset,l=o.scrollUpdateWasRequested;this._callOnScroll(s,a,l)}},b._getRangeToRender=function(){var e=this.props,t=e.itemCount,r=e.overscanCount,i=this.state,n=i.isScrolling,o=i.scrollDirection,s=i.scrollOffset;if(0===t)return[0,0,0,0];var a=_(this.props,s,this._instanceProps),l=m(this.props,a,s,this._instanceProps);return[Math.max(0,a-(n&&"backward"!==o?1:Math.max(1,r))),Math.max(0,Math.min(t-1,l+(n&&"forward"!==o?1:Math.max(1,r)))),a,l]},t}(c.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var y=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},z=function(e,t,r){var i=e.itemSize,n=r.itemMetadataMap,o=r.lastMeasuredIndex;if(t>o){var s=0;if(o>=0){var a=n[o];s=a.offset+a.size}for(var l=o+1;l<=t;l++){var c=i(l);n[l]={offset:s,size:c},s+=c}r.lastMeasuredIndex=t}return n[t]},S=function(e,t,r){var i=t.itemMetadataMap,n=t.lastMeasuredIndex;return(n>0?i[n].offset:0)>=r?b(e,t,n,0,r):w(e,t,Math.max(0,n),r)},b=function(e,t,r,i,n){for(;i<=r;){var o=i+Math.floor((r-i)/2),s=z(e,o,t).offset;if(s===n)return o;s<n?i=o+1:s>n&&(r=o-1)}return i>0?i-1:0},w=function(e,t,r,i){for(var n=e.itemCount,o=1;r<n&&z(e,r,t).offset<i;)r+=o,o*=2;return b(e,t,Math.min(r,n-1),Math.floor(r/2),i)},I=function(e,t){var r=e.itemCount,i=t.itemMetadataMap,n=t.estimatedItemSize,o=t.lastMeasuredIndex,s=0;if(o>=r&&(o=r-1),o>=0){var a=i[o];s=a.offset+a.size}return s+(r-o-1)*n},O=v({getItemOffset:function(e,t,r){return z(e,t,r).offset},getItemSize:function(e,t,r){return r.itemMetadataMap[t].size},getEstimatedTotalSize:I,getOffsetForIndexAndAlignment:function(e,t,r,i,n,o){var s=e.direction,a=e.height,l=e.layout,c=e.width,u="horizontal"===s||"horizontal"===l?c:a,f=z(e,t,n),d=Math.max(0,Math.min(I(e,n)-u,f.offset)),h=Math.max(0,f.offset-u+f.size+o);switch("smart"===r&&(r=i>=h-u&&i<=d+u?"auto":"center"),r){case"start":return d;case"end":return h;case"center":return Math.round(h+(d-h)/2);default:if(i>=h&&i<=d)return i;if(i<h)return h;return d}},getStartIndexForOffset:function(e,t,r){return S(e,r,t)},getStopIndexForStartIndex:function(e,t,r,i){for(var n=e.direction,o=e.height,s=e.itemCount,a=e.layout,l=e.width,c=z(e,t,i),u=r+("horizontal"===n||"horizontal"===a?l:o),f=c.offset+c.size,d=t;d<s-1&&f<u;)f+=z(e,++d,i).size;return d},initInstanceProps:function(e,t){var r={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,i){void 0===i&&(i=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),i&&t.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}}),M=v({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,r,i,n,o){var s=e.direction,a=e.height,l=e.itemCount,c=e.itemSize,u=e.layout,f=e.width,d="horizontal"===s||"horizontal"===u?f:a,h=Math.max(0,l*c-d),_=Math.min(h,t*c),p=Math.max(0,t*c-d+c+o);switch("smart"===r&&(r=i>=p-d&&i<=_+d?"auto":"center"),r){case"start":return _;case"end":return p;case"center":var m=Math.round(p+(_-p)/2);if(m<Math.ceil(d/2))return 0;if(m>h+Math.floor(d/2))return h;return m;default:if(i>=p&&i<=_)return i;if(i<p)return p;return _}},getStartIndexForOffset:function(e,t){return Math.max(0,Math.min(e.itemCount-1,Math.floor(t/e.itemSize)))},getStopIndexForStartIndex:function(e,t,r){var i=e.direction,n=e.height,o=e.itemCount,s=e.itemSize,a=e.layout,l=e.width;return Math.max(0,Math.min(o-1,t+Math.ceil((("horizontal"===i||"horizontal"===a?l:n)+r-t*s)/s)-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}})},3513:function(e,t,r){r.d(t,{Uy:function(){return q}});var i,n=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),s=Symbol.for("immer-state");function a(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var l=Object.getPrototypeOf;function c(e){return!!e&&!!e[s]}function u(e){return!!e&&(d(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||g(e)||v(e))}var f=Object.prototype.constructor.toString();function d(e){if(!e||"object"!=typeof e)return!1;let t=l(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===f}function h(e,t){0===_(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,i)=>t(i,r,e))}function _(e){let t=e[s];return t?t.type_:Array.isArray(e)?1:g(e)?2:v(e)?3:0}function p(e,t){return 2===_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function m(e,t,r){let i=_(e);2===i?e.set(t,r):3===i?e.add(r):e[t]=r}function g(e){return e instanceof Map}function v(e){return e instanceof Set}function y(e){return e.copy_||e.base_}function z(e,t){if(g(e))return new Map(e);if(v(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=d(e);if(!0!==t&&("class_only"!==t||r)){let t=l(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[s];let r=Reflect.ownKeys(t);for(let i=0;i<r.length;i++){let n=r[i],o=t[n];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[n]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[n]})}return Object.create(l(e),t)}}function S(e,t=!1){return w(e)||c(e)||!u(e)||(_(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>S(t,!0))),e}function b(){a(2)}function w(e){return Object.isFrozen(e)}var I={};function O(e){let t=I[e];return t||a(0,e),t}function M(e,t){t&&(O("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function R(e){x(e),e.drafts_.forEach(P),e.drafts_=null}function x(e){e===i&&(i=e.parent_)}function C(e){return i={drafts_:[],parent_:i,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function P(e){let t=e[s];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function T(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[s].modified_&&(R(t),a(4)),u(e)&&(e=E(t,e),t.parent_||L(t,e)),t.patches_&&O("Patches").generateReplacementPatches_(r[s].base_,e,t.patches_,t.inversePatches_)):e=E(t,r,[]),R(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==n?e:void 0}function E(e,t,r){if(w(t))return t;let i=t[s];if(!i)return h(t,(n,o)=>F(e,i,t,n,o,r)),t;if(i.scope_!==e)return t;if(!i.modified_)return L(e,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;let t=i.copy_,n=t,o=!1;3===i.type_&&(n=new Set(t),t.clear(),o=!0),h(n,(n,s)=>F(e,i,t,n,s,r,o)),L(e,t,!1),r&&e.patches_&&O("Patches").generatePatches_(i,r,e.patches_,e.inversePatches_)}return i.copy_}function F(e,t,r,i,n,o,s){if(c(n)){let s=E(e,n,o&&t&&3!==t.type_&&!p(t.assigned_,i)?o.concat(i):void 0);if(m(r,i,s),!c(s))return;e.canAutoFreeze_=!1}else s&&r.add(n);if(u(n)&&!w(n)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;E(e,n),(!t||!t.scope_.parent_)&&"symbol"!=typeof i&&Object.prototype.propertyIsEnumerable.call(r,i)&&L(e,n)}}function L(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&S(t,r)}var A={get(e,t){if(t===s)return e;let r=y(e);if(!p(r,t))return function(e,t,r){let i=W(t,r);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}(e,r,t);let i=r[t];return e.finalized_||!u(i)?i:i===D(e.base_,t)?(j(e),e.copy_[t]=H(i,e)):i},has:(e,t)=>t in y(e),ownKeys:e=>Reflect.ownKeys(y(e)),set(e,t,r){let i=W(y(e),t);if(i?.set)return i.set.call(e.draft_,r),!0;if(!e.modified_){let i=D(y(e),t),n=i?.[s];if(n&&n.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===i?0!==r||1/r==1/i:r!=r&&i!=i)&&(void 0!==r||p(e.base_,t)))return!0;j(e),k(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==D(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,j(e),k(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=y(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:i.enumerable,value:r[t]}:i},defineProperty(){a(11)},getPrototypeOf:e=>l(e.base_),setPrototypeOf(){a(12)}},N={};function D(e,t){let r=e[s];return(r?y(r):e)[t]}function W(e,t){if(!(t in e))return;let r=l(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=l(r)}}function k(e){!e.modified_&&(e.modified_=!0,e.parent_&&k(e.parent_))}function j(e){e.copy_||(e.copy_=z(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function H(e,t){let r=g(e)?O("MapSet").proxyMap_(e,t):v(e)?O("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:i,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=n,s=A;r&&(o=[n],s=N);let{revoke:a,proxy:l}=Proxy.revocable(o,s);return n.draft_=l,n.revoke_=a,l}(e,t);return(t?t.scope_:i).drafts_.push(r),r}h(A,(e,t)=>{N[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),N.deleteProperty=function(e,t){return N.set.call(this,e,t,void 0)},N.set=function(e,t,r){return A.set.call(this,e[0],t,r,e[0])};var U=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let i;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let i=this;return function(e=r,...n){return i.produce(e,e=>t.call(this,e,...n))}}if("function"!=typeof t&&a(6),void 0!==r&&"function"!=typeof r&&a(7),u(e)){let n=C(this),o=H(e,void 0),s=!0;try{i=t(o),s=!1}finally{s?R(n):x(n)}return M(n,r),T(i,n)}if(e&&"object"==typeof e)a(1,e);else{if(void 0===(i=t(e))&&(i=e),i===n&&(i=void 0),this.autoFreeze_&&S(i,!0),r){let t=[],n=[];O("Patches").generateReplacementPatches_(e,i,t,n),r(t,n)}return i}},this.produceWithPatches=(e,t)=>{let r,i;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,i=t}),r,i]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;u(e)||a(8),c(e)&&(c(t=e)||a(10,t),e=function e(t){let r;if(!u(t)||w(t))return t;let i=t[s];if(i){if(!i.modified_)return i.base_;i.finalized_=!0,r=z(t,i.scope_.immer_.useStrictShallowCopy_)}else r=z(t,!0);return h(r,(t,i)=>{m(r,t,e(i))}),i&&(i.finalized_=!1),r}(t));let r=C(this),i=H(e,void 0);return i[s].isManual_=!0,x(r),i}finishDraft(e,t){let r=e&&e[s];r&&r.isManual_||a(9);let{scope_:i}=r;return M(i,t),T(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let i=t[r];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}r>-1&&(t=t.slice(r+1));let i=O("Patches").applyPatches_;return c(e)?i(e,t):this.produce(e,e=>i(e,t))}},q=U.produce;U.produceWithPatches.bind(U),U.setAutoFreeze.bind(U),U.setUseStrictShallowCopy.bind(U),U.applyPatches.bind(U),U.createDraft.bind(U),U.finishDraft.bind(U)}}]);