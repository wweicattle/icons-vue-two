/*! Icons Vue v1.1.40 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as g,createElementBlock as y}from"vue";import{ref as i,onMounted as w,watch as x}from"vue";var h=_("path",{fill:"currentColor",d:"M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"},null,-1),z=[h],s=u({__name:"scale-to-original",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=i(null),o=i({fill:"red",width:"100px"});return x(n,a=>{let{size:l,color:c,spin:p,width:r,fill:d}=a,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:r||void 0,color:c,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(a,l)=>(g(),y("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,n)=>{let t=e.__vccOpts||e;for(let[o,a]of n)t[o]=a;return t};var A=f(s,[["__file","scale-to-original.vue"]]);export{A as default};
