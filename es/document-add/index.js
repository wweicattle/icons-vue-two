/*! Icons Vue v1.1.41 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var g=_("path",{fill:"currentColor",d:"M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"},null,-1),w=[g],s=m({__name:"document-add",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:f,spin:c,width:i,fill:p}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:f,fill:p};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var d=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=d(s,[["__file","document-add.vue"]]);export{M as default};
