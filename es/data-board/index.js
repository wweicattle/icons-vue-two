/*! Icons Vue v2.0.18 */

import{defineComponent as _}from"vue";import{createElementVNode as a,normalizeStyle as h,openBlock as y,createElementBlock as v}from"vue";import{ref as s,onMounted as E,watch as S}from"vue";var g=a("path",{fill:"currentColor",d:"M32 128h960v64H32z"},null,-1),w=a("path",{fill:"currentColor",d:"M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"},null,-1),z=a("path",{fill:"currentColor",d:"M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"},null,-1),x=[g,w,z],d=_({__name:"data-board",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return S(l,n=>{let{size:r,color:c,spin:p,width:i,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:c,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(n,r)=>(y(),v("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var L=f(d,[["__file","data-board.vue"]]);export{L as default};
