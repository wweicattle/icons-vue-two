/*! Icons Vue v1.1.40 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as g,createElementBlock as h}from"vue";import{ref as a,onMounted as x,watch as E}from"vue";var v=_("path",{fill:"currentColor",d:"M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"},null,-1),w=[v],s=m({__name:"phone-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:p,spin:d,width:i,fill:c}=n,u={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:p,fill:c};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(g(),h("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=f(s,[["__file","phone-filled.vue"]]);export{N as default};
