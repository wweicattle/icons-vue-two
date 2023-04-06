/*! Icons Vue v2.0.2 */

import{defineComponent as _}from"vue";import{createElementVNode as a,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as s,onMounted as E,watch as S}from"vue";var v=a("path",{d:"M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z",fill:"currentColor"},null,-1),w=a("path",{d:"M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z",fill:"currentColor"},null,-1),x=a("path",{d:"M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z",fill:"currentColor"},null,-1),z=[v,w,x],c=_({__name:"chrome-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=s(null),o=s({fill:"red",width:"100px"});return S(n,l=>{let{size:r,color:f,spin:p,width:i,fill:u}=l,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:f,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(l,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h([o.value,{"enable-background":"new 0 0 1024 1024"}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","xml:space":"preserve"},z,4))}});var d=(e,n)=>{let t=e.__vccOpts||e;for(let[o,l]of n)t[o]=l;return t};var N=d(c,[["__file","chrome-filled.vue"]]);export{N as default};
