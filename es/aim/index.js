/*! Icons Vue v1.1.41 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as y,openBlock as h,createElementBlock as g}from"vue";import{ref as i,onMounted as x,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),z=s("path",{fill:"currentColor",d:"M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"},null,-1),w=[v,z],f=_({__name:"aim",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let a=e,t=i(null),o=i({fill:"red",width:"100px"});return E(a,n=>{let{size:l,color:d,spin:p,width:r,fill:m}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:r||void 0,color:d,fill:m};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(h(),g("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var c=(e,a)=>{let t=e.__vccOpts||e;for(let[o,n]of a)t[o]=n;return t};var N=c(f,[["__file","aim.vue"]]);export{N as default};
