/*! Icons Vue v1.1.41 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as h,createElementBlock as v}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var g=_("path",{fill:"currentColor",d:"M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"},null,-1),w=[g],s=m({__name:"takeaway-box",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let a=e,t=i(null),o=i({fill:"red",width:"100px"});return z(a,n=>{let{size:r,color:p,spin:c,width:l,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:l||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(h(),v("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,a)=>{let t=e.__vccOpts||e;for(let[o,n]of a)t[o]=n;return t};var M=f(s,[["__file","takeaway-box.vue"]]);export{M as default};
