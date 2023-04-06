/*! Icons Vue v2.0.2 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as h,createElementBlock as y}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var g=_("path",{fill:"currentColor",d:"M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"},null,-1),w=[g],s=u({__name:"microphone",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return z(r,n=>{let{size:a,color:p,spin:c,width:l,fill:d}=n,m={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:l||void 0,color:p,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,a)=>(h(),y("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var N=f(s,[["__file","microphone.vue"]]);export{N as default};
