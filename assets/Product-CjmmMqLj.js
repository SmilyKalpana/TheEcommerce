import{c as n,j as e,u as j,r,S as y,i as g}from"./index-C2Us-NH3.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],N=n("package",k);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],v=n("shield-check",w);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]],S=n("star-half",b);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],x=n("star",_);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],M=n("truck",C),z=({rating:c})=>{const l=[],i=Math.floor(c),s=c%1>=.5,d=5-i-(s?1:0);for(let t=0;t<i;t++)l.push(e.jsx(x,{fill:"red",strokeWidth:0},`full-${t}`));s&&l.push(e.jsx(S,{fill:"red",strokeWidth:0},"half"));for(let t=0;t<d;t++)l.push(e.jsx(x,{stroke:"red"},`empty-${t}`));return e.jsxs("div",{className:"flex",children:[l," ",e.jsxs("span",{className:"px-2",children:[" for ",c]})]})},L=()=>{const{productId:c}=j(),{products:l,currency:i}=r.useContext(y),[s,d]=r.useState(null),[t,h]=r.useState(""),[p,o]=r.useState(1);r.useEffect(()=>{const a=l.find(f=>f._id===c);a&&(d(a),h(a.image[0]))},[c,l]);const m=()=>o(a=>a+1),u=()=>o(a=>a>1?a-1:1);return s?e.jsx("div",{className:"flex justify-center pt-10 px-4 sm:px-8 lg:px-20",children:e.jsxs("div",{className:"w-full max-w-6xl flex flex-col lg:flex-row gap-8",children:[e.jsx("div",{className:"flex justify-center lg:w-1/2",children:e.jsx("img",{src:g[t],alt:"product",className:"w-full max-w-md object-cover rounded-lg shadow-md"})}),e.jsxs("div",{className:"flex flex-col justify-center gap-4 md:gap-2 lg:w-1/2 ",children:[e.jsx("h2",{className:"text-xl md:text-3xl font-semibold capitalize text-pink-600",children:s.name}),e.jsxs("div",{className:"flex flex-row gap-1 bg-pink-200 w-fit px-2 rounded-lg ",children:[e.jsx(z,{rating:s.rating}),e.jsxs("p",{children:["(",s.reviews,")"]})]}),e.jsx("h6",{className:"text-xl  font-medium",children:e.jsxs("span",{className:"text-pink-600",children:[s.price," ",i]})}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600   mt-4 capitalize",children:s.description}),e.jsxs("h6",{className:"text-lg mt-2 ",children:["Size: ",e.jsx("span",{className:"text-gray-700",children:s.sizes})]}),e.jsxs("div",{className:" flex items-center gap-4",children:[e.jsx("button",{className:"w-10 h-10 border rounded text-xl hover:bg-gray-100",onClick:u,children:"-"}),e.jsx("span",{className:"text-lg",children:p}),e.jsx("button",{className:"w-10 h-10 border rounded text-xl hover:bg-gray-100",onClick:m,children:"+"})]}),e.jsx("button",{className:"mt-6 w-1/4 bg-pink-600 hover:bg-pink-700 cursor-pointer text-white px-6 py-3 rounded transition",onClick:()=>alert("Added to cart!"),children:"Add to Cart"}),e.jsx("hr",{className:" mt-4 sm:w-4/5 text-gray-200"}),e.jsxs("div",{className:" text-gray-600 flex flex-row mt-4 pt-4 gap-2 text-sm sm:text-base ",children:[e.jsxs("p",{children:[e.jsx(v,{})," 100% Quality Assurance"]}),e.jsxs("p",{children:[e.jsx(M,{})," Cash on Delivery Available"]}),e.jsxs("p",{children:[" ",e.jsx(N,{}),"Easy return and Exchange policy with 7 days"]})]})]})]})}):e.jsx("div",{className:"opacity-0",children:"Loading..."})};export{L as default};
