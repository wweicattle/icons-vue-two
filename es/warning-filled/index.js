/*! Icons Vue v2.0.2 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as g,openBlock as y,createElementBlock as w}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var v=_("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1),h=[v],s=m({__name:"warning-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),n=a({fill:"red",width:"100px"});return z(l,o=>{let{size:r,color:d,spin:p,width:i,fill:c}=o,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:c};n.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(o,r)=>(y(),w("svg",{ref_key:"svg",ref:t,style:g(n.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},h,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[n,o]of l)t[n]=o;return t};var O=f(s,[["__file","warning-filled.vue"]]);export{O as default};
