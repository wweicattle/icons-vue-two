/*! Icons Vue v1.1.40 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as h,createElementBlock as g}from"vue";import{ref as a,onMounted as V,watch as w}from"vue";var y=_("path",{fill:"currentColor",d:"M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"},null,-1),z=[y],s=u({__name:"grid",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return w(r,n=>{let{size:l,color:d,spin:m,width:i,fill:p}=n,c={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:d,fill:p};o.value=Object.assign({...c})},{deep:!0,immediate:!0}),V(()=>{}),(n,l)=>(h(),g("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","grid.vue"]]);export{M as default};
