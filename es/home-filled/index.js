/*! Icons Vue v2.0.18 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as h,createElementBlock as g}from"vue";import{ref as a,onMounted as x,watch as E}from"vue";var v=_("path",{fill:"currentColor",d:"M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"},null,-1),w=[v],s=m({__name:"home-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:d,spin:p,width:i,fill:c}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:c};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(h(),g("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=f(s,[["__file","home-filled.vue"]]);export{N as default};
