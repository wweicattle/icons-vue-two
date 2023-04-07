/*! Icons Vue v2.0.18 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as y,openBlock as g,createElementBlock as h}from"vue";import{ref as i,onMounted as x,watch as k}from"vue";var v=s("path",{fill:"currentColor",d:"M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"},null,-1),z=s("path",{fill:"currentColor",d:"m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"},null,-1),w=[v,z],c=_({__name:"alarm-clock",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=i(null),o=i({fill:"red",width:"100px"});return k(n,l=>{let{size:r,color:d,spin:p,width:a,fill:m}=l,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:d,fill:m};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(l,r)=>(g(),h("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,n)=>{let t=e.__vccOpts||e;for(let[o,l]of n)t[o]=l;return t};var N=f(c,[["__file","alarm-clock.vue"]]);export{N as default};
