/*! Icons Vue v1.1.40 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as h,createElementBlock as y}from"vue";import{ref as i,onMounted as z,watch as x}from"vue";var g=_("path",{fill:"currentColor",d:"M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"},null,-1),w=[g],s=u({__name:"delete-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return x(l,n=>{let{size:a,color:d,spin:p,width:r,fill:c}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:r||void 0,color:d,fill:c};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(n,a)=>(h(),y("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var M=f(s,[["__file","delete-filled.vue"]]);export{M as default};
