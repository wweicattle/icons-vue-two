/*! Icons Vue v2.0.18 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as g,createElementBlock as y}from"vue";import{ref as i,onMounted as w,watch as x}from"vue";var h=_("path",{fill:"currentColor",d:"m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"},null,-1),z=[h],s=m({__name:"pouring",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let a=e,t=i(null),o=i({fill:"red",width:"100px"});return x(a,n=>{let{size:r,color:p,spin:c,width:l,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:l||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),w(()=>{}),(n,r)=>(g(),y("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,a)=>{let t=e.__vccOpts||e;for(let[o,n]of a)t[o]=n;return t};var N=f(s,[["__file","pouring.vue"]]);export{N as default};
