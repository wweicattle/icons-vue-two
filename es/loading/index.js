/*! Icons Vue v2.0.2 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as g,openBlock as y,createElementBlock as v}from"vue";import{ref as i,onMounted as w,watch as x}from"vue";var z=_("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),h=[z],s=u({__name:"loading",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=i(null),a=i({fill:"red",width:"100px"});return x(n,o=>{let{size:l,color:d,spin:p,width:r,fill:c}=o,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:r||void 0,color:d,fill:c};a.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(o,l)=>(y(),v("svg",{ref_key:"svg",ref:t,style:g(a.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},h,4))}});var f=(e,n)=>{let t=e.__vccOpts||e;for(let[a,o]of n)t[a]=o;return t};var V=f(s,[["__file","loading.vue"]]);export{V as default};
