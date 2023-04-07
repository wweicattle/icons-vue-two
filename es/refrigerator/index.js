/*! Icons Vue v2.0.13 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as h,createElementBlock as g}from"vue";import{ref as i,onMounted as z,watch as x}from"vue";var y=_("path",{fill:"currentColor",d:"M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"},null,-1),w=[y],s=u({__name:"refrigerator",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=i(null),o=i({fill:"red",width:"100px"});return x(n,r=>{let{size:a,color:p,spin:c,width:l,fill:d}=r,m={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:l||void 0,color:p,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(r,a)=>(h(),g("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,n)=>{let t=e.__vccOpts||e;for(let[o,r]of n)t[o]=r;return t};var M=f(s,[["__file","refrigerator.vue"]]);export{M as default};
