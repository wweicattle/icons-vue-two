/*! Icons Vue v1.1.40 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var v=_("path",{fill:"currentColor",d:"M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"},null,-1),w=[v],s=m({__name:"document-checked",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return z(l,n=>{let{size:r,color:d,spin:f,width:i,fill:p}=n,u={animation:f?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:p};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var H=c(s,[["__file","document-checked.vue"]]);export{H as default};
