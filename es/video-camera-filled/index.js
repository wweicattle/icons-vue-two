/*! Icons Vue v2.0.13 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as y,createElementBlock as g}from"vue";import{ref as i,onMounted as w,watch as x}from"vue";var h=_("path",{fill:"currentColor",d:"m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"},null,-1),z=[h],s=u({__name:"video-camera-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return x(l,n=>{let{size:r,color:d,spin:c,width:a,fill:m}=n,p={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:d,fill:m};o.value=Object.assign({...p})},{deep:!0,immediate:!0}),w(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var H=f(s,[["__file","video-camera-filled.vue"]]);export{H as default};
