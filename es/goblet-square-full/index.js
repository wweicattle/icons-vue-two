/*! Icons Vue v2.0.18 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as g,openBlock as y,createElementBlock as h}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var v=_("path",{fill:"currentColor",d:"M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"},null,-1),w=[v],s=m({__name:"goblet-square-full",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=i(null),o=i({fill:"red",width:"100px"});return z(n,l=>{let{size:r,color:f,spin:u,width:a,fill:p}=l,d={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:f,fill:p};o.value=Object.assign({...d})},{deep:!0,immediate:!0}),x(()=>{}),(l,r)=>(y(),h("svg",{ref_key:"svg",ref:t,style:g(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var c=(e,n)=>{let t=e.__vccOpts||e;for(let[o,l]of n)t[o]=l;return t};var M=c(s,[["__file","goblet-square-full.vue"]]);export{M as default};
