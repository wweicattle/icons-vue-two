/*! Icons Vue v2.0.18 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as v,createElementBlock as g}from"vue";import{ref as i,onMounted as x,watch as V}from"vue";var h=_("path",{fill:"currentColor",d:"M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"},null,-1),w=[h],s=m({__name:"fork-spoon",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return V(r,n=>{let{size:l,color:c,spin:p,width:a,fill:d}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:c,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(v(),g("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var N=f(s,[["__file","fork-spoon.vue"]]);export{N as default};
