/*! Icons Vue v1.1.40 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var v=_("path",{fill:"currentColor",d:"M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"},null,-1),w=[v],s=m({__name:"finished",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return z(l,n=>{let{size:r,color:d,spin:p,width:i,fill:c}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:c};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=f(s,[["__file","finished.vue"]]);export{N as default};
