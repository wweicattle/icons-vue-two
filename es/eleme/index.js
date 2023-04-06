/*! Icons Vue v2.0.2 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as g,createElementBlock as v}from"vue";import{ref as i,onMounted as x,watch as E}from"vue";var h=_("path",{fill:"currentColor",d:"M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"},null,-1),w=[h],s=u({__name:"eleme",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=i(null),o=i({fill:"red",width:"100px"});return E(n,l=>{let{size:r,color:f,spin:p,width:a,fill:d}=l,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:f,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(l,r)=>(g(),v("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var c=(e,n)=>{let t=e.__vccOpts||e;for(let[o,l]of n)t[o]=l;return t};var O=c(s,[["__file","eleme.vue"]]);export{O as default};
