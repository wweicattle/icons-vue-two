/*! Icons Vue v2.0.18 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as y,openBlock as g,createElementBlock as h}from"vue";import{ref as a,onMounted as z,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"},null,-1),w=s("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),x=[v,w],c=_({__name:"circle-close",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=a(null),o=a({fill:"red",width:"100px"});return E(n,l=>{let{size:r,color:d,spin:p,width:i,fill:u}=l,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(l,r)=>(g(),h("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var f=(e,n)=>{let t=e.__vccOpts||e;for(let[o,l]of n)t[o]=l;return t};var O=f(c,[["__file","circle-close.vue"]]);export{O as default};
