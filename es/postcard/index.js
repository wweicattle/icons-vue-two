/*! Icons Vue v1.1.41 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as i,onMounted as x,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"},null,-1),w=s("path",{fill:"currentColor",d:"M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),z=[v,w],c=_({__name:"postcard",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return E(r,n=>{let{size:l,color:f,spin:p,width:a,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:f,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var d=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var V=d(c,[["__file","postcard.vue"]]);export{V as default};
