/*! Icons Vue v2.0.18 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var v=_("path",{fill:"currentColor",d:"m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"},null,-1),w=[v],s=u({__name:"dish-dot",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:f,spin:c,width:i,fill:p}=n,m={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:f,fill:p};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var d=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var H=d(s,[["__file","dish-dot.vue"]]);export{H as default};
