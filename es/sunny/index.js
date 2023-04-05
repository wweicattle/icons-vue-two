/*! Icons Vue v1.1.41 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as z,createElementBlock as v}from"vue";import{ref as i,onMounted as w,watch as x}from"vue";var g=_("path",{fill:"currentColor",d:"M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"},null,-1),h=[g],s=u({__name:"sunny",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let o=e,t=i(null),a=i({fill:"red",width:"100px"});return x(o,n=>{let{size:l,color:m,spin:p,width:r,fill:c}=n,d={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:r||void 0,color:m,fill:c};a.value=Object.assign({...d})},{deep:!0,immediate:!0}),w(()=>{}),(n,l)=>(z(),v("svg",{ref_key:"svg",ref:t,style:y(a.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},h,4))}});var f=(e,o)=>{let t=e.__vccOpts||e;for(let[a,n]of o)t[a]=n;return t};var L=f(s,[["__file","sunny.vue"]]);export{L as default};
