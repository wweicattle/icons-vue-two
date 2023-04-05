/*! Icons Vue v1.1.40 */

import{defineComponent as u}from"vue";import{createElementVNode as v,normalizeStyle as _,openBlock as h,createElementBlock as y}from"vue";import{ref as i,onMounted as w,watch as x}from"vue";var g=v("path",{fill:"currentColor",d:"M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"},null,-1),z=[g],s=u({__name:"ice-tea",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return x(l,n=>{let{size:r,color:c,spin:p,width:a,fill:d}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:c,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(n,r)=>(h(),y("svg",{ref_key:"svg",ref:t,style:_(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var H=f(s,[["__file","ice-tea.vue"]]);export{H as default};
