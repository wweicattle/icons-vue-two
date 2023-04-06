/*! Icons Vue v2.0.2 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as g,openBlock as y,createElementBlock as h}from"vue";import{ref as i,onMounted as z,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"},null,-1),w=s("path",{fill:"currentColor",d:"M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),x=[v,w],c=_({__name:"price-tag",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:p,spin:d,width:a,fill:u}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:p,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(n,r)=>(y(),h("svg",{ref_key:"svg",ref:t,style:g(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=f(c,[["__file","price-tag.vue"]]);export{N as default};
