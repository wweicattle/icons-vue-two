/*! Icons Vue v1.1.41 */

import{defineComponent as h}from"vue";import{createElementVNode as s,normalizeStyle as v,openBlock as _,createElementBlock as z}from"vue";import{ref as i,onMounted as V,watch as x}from"vue";var y=s("path",{fill:"currentColor",d:"M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"},null,-1),g=s("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"},null,-1),w=[y,g],m=h({__name:"cpu",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=i(null),a=i({fill:"red",width:"100px"});return x(n,o=>{let{size:l,color:f,spin:p,width:r,fill:d}=o,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:r||void 0,color:f,fill:d};a.value=Object.assign({...u})},{deep:!0,immediate:!0}),V(()=>{}),(o,l)=>(_(),z("svg",{ref_key:"svg",ref:t,style:v(a.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var c=(e,n)=>{let t=e.__vccOpts||e;for(let[a,o]of n)t[a]=o;return t};var N=c(m,[["__file","cpu.vue"]]);export{N as default};
