/*! Icons Vue v2.0.13 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as c,onMounted as S,watch as C}from"vue";var g=s("path",{d:"M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z",fill:"currentColor"},null,-1),w=s("path",{d:"M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z",fill:"currentColor"},null,-1),z=s("path",{d:"M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zm0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z",fill:"currentColor"},null,-1),x=[g,w,z],a=_({__name:"memo",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=c(null),o=c({fill:"red",width:"100px"});return C(l,n=>{let{size:r,color:f,spin:p,width:i,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:f,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),S(()=>{}),(n,r)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h([o.value,{"enable-background":"new 0 0 1024 1024"}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","xml:space":"preserve"},x,4))}});var d=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=d(a,[["__file","memo.vue"]]);export{N as default};
