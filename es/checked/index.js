/*! Icons Vue v2.0.2 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as a,onMounted as x,watch as k}from"vue";var g=_("path",{fill:"currentColor",d:"M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"},null,-1),w=[g],s=m({__name:"checked",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return k(l,n=>{let{size:r,color:f,spin:d,width:i,fill:p}=n,u={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:f,fill:p};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var H=c(s,[["__file","checked.vue"]]);export{H as default};
