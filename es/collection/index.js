/*! Icons Vue v2.0.13 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as a,onMounted as x,watch as E}from"vue";var g=s("path",{fill:"currentColor",d:"M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"},null,-1),z=s("path",{fill:"currentColor",d:"M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"},null,-1),w=[g,z],c=_({__name:"collection",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:d,spin:p,width:i,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var A=f(c,[["__file","collection.vue"]]);export{A as default};
