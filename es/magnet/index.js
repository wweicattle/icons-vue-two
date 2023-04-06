/*! Icons Vue v2.0.2 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as g,createElementBlock as y}from"vue";import{ref as i,onMounted as x,watch as E}from"vue";var h=_("path",{fill:"currentColor",d:"M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"},null,-1),w=[h],s=m({__name:"magnet",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return E(r,n=>{let{size:l,color:p,spin:c,width:a,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(g(),y("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","magnet.vue"]]);export{M as default};
