/*! Icons Vue v1.1.40 */

import{defineComponent as _}from"vue";import{createElementVNode as i,normalizeStyle as y,openBlock as h,createElementBlock as v}from"vue";import{ref as s,onMounted as C,watch as E}from"vue";var g=i("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"},null,-1),w=i("path",{fill:"currentColor",d:"M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"},null,-1),x=i("path",{fill:"currentColor",d:"M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"},null,-1),z=[g,w,x],c=_({__name:"place",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:p,spin:d,width:a,fill:u}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:p,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),C(()=>{}),(n,r)=>(h(),v("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var b=f(c,[["__file","place.vue"]]);export{b as default};
