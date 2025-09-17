import{c as L,j as r,i as _,r as d,S as z}from"./index-C2Us-NH3.js";import{T as I,P as T}from"./ProductItem-CU7DUwEu.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],U=L("headset",q);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],V=L("package-check",Z);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],G=L("refresh-ccw",W),Y=()=>r.jsxs("div",{className:"flex flex-col  sm:flex-row  ",children:[r.jsxs("div",{className:"w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 relative",children:[r.jsx("div",{className:"absolute inset-0 bg-cover bg-center ",style:{backgroundImage:`url(${_.w1})`,opacity:.1,zIndex:0}}),r.jsxs("div",{className:"relative z-10 md-w-md text-gray-700 p-6 sm:p-8  rounded-2xl",children:[r.jsxs("div",{className:"flex items-center justify-center sm:justify-start gap-2 mb-2",children:[r.jsx("p",{className:"w-10 md:w-15 h-[1px] bg-gray-500"}),r.jsx("p",{className:"font-light text-xs sm:text-xs md:text-sm uppercase text-gray-700",children:"OUR BEST SELLERS"})]}),r.jsx("h1",{className:" sm:py-3 md:py-6 text-4xl sm:text-4xl md:text-6xl  lg:text-8xl leading-snug ballet-font capitalize",children:"Latest Arrivals"}),r.jsxs("div",{className:"flex items-center justify-center sm:justify-end gap-2 mt-3",children:[r.jsx("p",{className:"font-light text-xs sm:text-xs md:text-sm text-gray-700 uppercase",children:"SHOP NOW"}),r.jsx("p",{className:"w-10 md:w-15 h-[1px] bg-gray-500"})]})]})]}),r.jsx("div",{className:"w-full sm:w-1/2 flex justify-center items-center",children:r.jsx("img",{src:_.s1,alt:"Latest Arrivals",className:"w-full h-auto object-cover"})})]}),J=()=>{const{products:e}=d.useContext(z),[t,a]=d.useState([]),[i,n]=d.useState(!0);return d.useEffect(()=>{n(!0),setTimeout(()=>{a(e.slice(0,10)),n(!1)},500)},[e]),i?r.jsx("div",{className:"text-center py-10 text-2xl",children:"Loading..."}):r.jsxs("div",{className:"my-10",children:[r.jsxs("div",{className:"text-center py-10 text-3xl",children:[r.jsx(I,{text1:"Latest",text2:"Collection"}),r.jsx("p",{className:"w-3/4 m-auto text-xs sm:text-xs md:text-base text-gray-600",children:"Discover our latest collection of stylish accessories, crafted to add a touch of charm to every look. From scrunchies to statement jewelry, find your perfect match today."})]}),r.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-10",children:t.map(s=>r.jsx(T,{id:s._id,image:s.image,name:s.name,price:s.price},s._id))})]})},K=()=>{const{products:e}=d.useContext(z),[t,a]=d.useState([]),[i,n]=d.useState(!0);return d.useEffect(()=>{if(e.length>0){const s=e.filter(o=>o.bestseller);a(s.slice(0,5)),n(!1)}},[e]),i?r.jsx("div",{className:"text-center py-10",children:"Loading best sellers..."}):r.jsxs("div",{className:"my-10",children:[r.jsxs("div",{className:"text-center text-3xl py-8",children:[r.jsx(I,{text1:"Best",text2:"Sellers"}),r.jsx("p",{className:"w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700",children:"Discover our top-selling accessories loved by customers worldwide. Shop now and elevate your style with our best sellers!"})]}),r.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6",children:t.length>0?t.map((s,o)=>r.jsx(T,{id:s._id,image:s.image,name:s.name,price:s.price},o)):r.jsx("div",{className:"col-span-5 text-center text-gray-500",children:"No best sellers found."})})]})},X=()=>r.jsxs("div",{className:"flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700",children:[r.jsxs("div",{children:[r.jsx("div",{className:"flex flex-col items-center",children:r.jsx(V,{className:"w-8 h-8 text-amber-500 mb-2"})}),r.jsx("p",{className:"font-semibold",children:"Easy Exchange Policy"}),r.jsx("p",{className:"text-gray-500",children:"We Offer hasle free exchange policy"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"flex flex-col items-center",children:r.jsx(G,{className:"w-8 h-8 text-amber-500 mb-2"})}),r.jsx("p",{className:"font-semibold",children:"7 Day Return Policy"}),r.jsx("p",{className:"text-gray-500",children:"Return any product within 7 days for a full refund or exchange."})]}),r.jsxs("div",{children:[r.jsx("div",{className:"flex flex-col items-center",children:r.jsx(U,{className:"w-8 h-8 text-amber-500 mb-2"})}),r.jsx("p",{className:"font-semibold",children:"Best Customer Support team"}),r.jsx("p",{className:"text-gray-500",children:"Our friendly support team is here to help you anytime."})]})]});let Q={data:""},ee=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Q,te=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,se=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,b=(e,t)=>{let a="",i="",n="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?a=s+" "+o+";":i+=s[1]=="f"?b(o,s):s+"{"+b(o,s[1]=="k"?"":t)+"}":typeof o=="object"?i+=b(o,t?t.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(s,o):s+":"+o+";")}return a+(t&&n?t+"{"+n+"}":n)+i},g={},H=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+H(e[a]);return t}return e},ae=(e,t,a,i,n)=>{let s=H(e),o=g[s]||(g[s]=(c=>{let m=0,u=11;for(;m<c.length;)u=101*u+c.charCodeAt(m++)>>>0;return"go"+u})(s));if(!g[o]){let c=s!==e?e:(m=>{let u,f,x=[{}];for(;u=te.exec(m.replace(se,""));)u[4]?x.shift():u[3]?(f=u[3].replace(A," ").trim(),x.unshift(x[0][f]=x[0][f]||{})):x[0][u[1]]=u[2].replace(A," ").trim();return x[0]})(e);g[o]=b(n?{["@keyframes "+o]:c}:c,a?"":"."+o)}let l=a&&g.g?g.g:null;return a&&(g.g=g[o]),((c,m,u,f)=>{f?m.data=m.data.replace(f,c):m.data.indexOf(c)===-1&&(m.data=u?c+m.data:m.data+c)})(g[o],t,i,l),o},re=(e,t,a)=>e.reduce((i,n,s)=>{let o=t[s];if(o&&o.call){let l=o(a),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":b(l,""):l===!1?"":l}return i+n+(o??"")},"");function O(e){let t=this||{},a=e.call?e(t.p):e;return ae(a.unshift?a.raw?re(a,[].slice.call(arguments,1),t.p):a.reduce((i,n)=>Object.assign(i,n&&n.call?n(t.p):n),{}):a,ee(t.target),t.g,t.o,t.k)}let R,D,P;O.bind({g:1});let y=O.bind({k:1});function ie(e,t,a,i){b.p=t,R=e,D=a,P=i}function v(e,t){let a=this||{};return function(){let i=arguments;function n(s,o){let l=Object.assign({},s),c=l.className||n.className;a.p=Object.assign({theme:D&&D()},l),a.o=/ *go\d+/.test(c),l.className=O.apply(a,i)+(c?" "+c:"");let m=e;return e[0]&&(m=l.as||e,delete l.as),P&&m[0]&&P(l),R(m,l)}return t?t(n):n}}var oe=e=>typeof e=="function",$=(e,t)=>oe(e)?e(t):e,le=(()=>{let e=0;return()=>(++e).toString()})(),B=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ne=20,F=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ne)};case 1:return{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:a}=t;return F(e,{type:e.toasts.find(s=>s.id===a.id)?1:0,toast:a});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(s=>s.id===i||i===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+n}))}}},S=[],j={toasts:[],pausedAt:void 0},w=e=>{j=F(j,e),S.forEach(t=>{t(j)})},ce={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},de=(e={})=>{let[t,a]=d.useState(j),i=d.useRef(j);d.useEffect(()=>(i.current!==j&&a(j),S.push(a),()=>{let s=S.indexOf(a);s>-1&&S.splice(s,1)}),[]);let n=t.toasts.map(s=>{var o,l,c;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((o=e[s.type])==null?void 0:o.removeDelay)||e?.removeDelay,duration:s.duration||((l=e[s.type])==null?void 0:l.duration)||e?.duration||ce[s.type],style:{...e.style,...(c=e[s.type])==null?void 0:c.style,...s.style}}});return{...t,toasts:n}},me=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||le()}),E=e=>(t,a)=>{let i=me(t,e,a);return w({type:2,toast:i}),i.id},p=(e,t)=>E("blank")(e,t);p.error=E("error");p.success=E("success");p.loading=E("loading");p.custom=E("custom");p.dismiss=e=>{w({type:3,toastId:e})};p.remove=e=>w({type:4,toastId:e});p.promise=(e,t,a)=>{let i=p.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let s=t.success?$(t.success,n):void 0;return s?p.success(s,{id:i,...a,...a?.success}):p.dismiss(i),n}).catch(n=>{let s=t.error?$(t.error,n):void 0;s?p.error(s,{id:i,...a,...a?.error}):p.dismiss(i)}),e};var ue=(e,t)=>{w({type:1,toast:{id:e,height:t}})},pe=()=>{w({type:5,time:Date.now()})},N=new Map,xe=1e3,fe=(e,t=xe)=>{if(N.has(e))return;let a=setTimeout(()=>{N.delete(e),w({type:4,toastId:e})},t);N.set(e,a)},he=e=>{let{toasts:t,pausedAt:a}=de(e);d.useEffect(()=>{if(a)return;let s=Date.now(),o=t.map(l=>{if(l.duration===1/0)return;let c=(l.duration||0)+l.pauseDuration-(s-l.createdAt);if(c<0){l.visible&&p.dismiss(l.id);return}return setTimeout(()=>p.dismiss(l.id),c)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[t,a]);let i=d.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),n=d.useCallback((s,o)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:m}=o||{},u=t.filter(h=>(h.position||m)===(s.position||m)&&h.height),f=u.findIndex(h=>h.id===s.id),x=u.filter((h,C)=>C<f&&h.visible).length;return u.filter(h=>h.visible).slice(...l?[x+1]:[0,x]).reduce((h,C)=>h+(C.height||0)+c,0)},[t]);return d.useEffect(()=>{t.forEach(s=>{if(s.dismissed)fe(s.id,s.removeDelay);else{let o=N.get(s.id);o&&(clearTimeout(o),N.delete(s.id))}})},[t]),{toasts:t,handlers:{updateHeight:ue,startPause:pe,endPause:i,calculateOffset:n}}},ge=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ye=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ve=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ye} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${be} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,je=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,we=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${je} 1s linear infinite;
`,Ne=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ee=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ke=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ee} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Se=v("div")`
  position: absolute;
`,$e=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Oe=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ce=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Oe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,De=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?d.createElement(Ce,null,t):t:a==="blank"?null:d.createElement($e,null,d.createElement(we,{...i}),a!=="loading"&&d.createElement(Se,null,a==="error"?d.createElement(ve,{...i}):d.createElement(ke,{...i})))},Pe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Le=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,_e="0%{opacity:0;} 100%{opacity:1;}",Ae="0%{opacity:1;} 100%{opacity:0;}",Me=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ze=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ie=(e,t)=>{let a=e.includes("top")?1:-1,[i,n]=B()?[_e,Ae]:[Pe(a),Le(a)];return{animation:t?`${y(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Te=d.memo(({toast:e,position:t,style:a,children:i})=>{let n=e.height?Ie(e.position||t||"top-center",e.visible):{opacity:0},s=d.createElement(De,{toast:e}),o=d.createElement(ze,{...e.ariaProps},$(e.message,e));return d.createElement(Me,{className:e.className,style:{...n,...a,...e.style}},typeof i=="function"?i({icon:s,message:o}):d.createElement(d.Fragment,null,s,o))});ie(d.createElement);var He=({id:e,className:t,style:a,onHeightUpdate:i,children:n})=>{let s=d.useCallback(o=>{if(o){let l=()=>{let c=o.getBoundingClientRect().height;i(e,c)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return d.createElement("div",{ref:s,className:t,style:a},n)},Re=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:B()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...n}},Be=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,Fe=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:n,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:c}=he(a);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...s},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(m=>{let u=m.position||t,f=c.calculateOffset(m,{reverseOrder:e,gutter:i,defaultPosition:t}),x=Re(u,f);return d.createElement(He,{id:m.id,key:m.id,onHeightUpdate:c.updateHeight,className:m.visible?Be:"",style:x},m.type==="custom"?$(m.message,m):n?n(m):d.createElement(Te,{toast:m,position:u}))}))},M=p;const qe=()=>{const[e,t]=d.useState(""),a=i=>{if(i.preventDefault(),!e){M.error("Please enter a valid email address.");return}console.log("Subscribed Email:",e),M.success("🎉 Thank you for subscribing!"),t("")};return r.jsxs("div",{className:"text-center py-6",children:[r.jsx(Fe,{position:"top-center",reverseOrder:!1}),r.jsx("p",{className:"text-md sm:text-2xl text-gray-700",children:"Subscribe Now & Get 20% Off"}),r.jsx("p",{className:"text-gray-500 text-xs sm:text-md",children:"Get exclusive deals and updates straight to your inbox."}),r.jsxs("form",{className:"w-full sm:w-1/2  pl-3 mx-auto flex items-center gap-3 border border-gray-400 rounded-lg overflow-hidden my-6",onSubmit:a,children:[r.jsx("input",{type:"email",className:"w-full sm:flex-1 outline-none px-2 py-2 text-gray-700 placeholder-gray-400",placeholder:"Enter Email",value:e,onChange:i=>t(i.target.value),required:!0}),r.jsx("button",{type:"submit",className:"bg-amber-600 text-white p-2 text-md cursor-pointer px-2 sm:px-6 hover:bg-amber-700 transition-colors",children:"Subscribe"})]})]})},Ve=()=>r.jsxs("div",{children:[r.jsx(Y,{}),r.jsx(J,{}),r.jsx(K,{}),r.jsx(X,{}),r.jsx(qe,{})]});export{Ve as default};
