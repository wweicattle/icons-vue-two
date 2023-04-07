/*! Icons Vue v2.0.18 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as y,createElementBlock as g}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var h=_("path",{fill:"currentColor",d:"M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"},null,-1),w=[h],s=u({__name:"video-camera",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:c,spin:d,width:a,fill:p}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:c,fill:p};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),g("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","video-camera.vue"]]);export{M as default};
