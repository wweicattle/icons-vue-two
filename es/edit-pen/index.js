/*! Icons Vue v1.1.40 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as g,createElementBlock as h}from"vue";import{ref as a,onMounted as z,watch as x}from"vue";var v=_("path",{d:"m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",fill:"currentColor"},null,-1),w=[v],s=u({__name:"edit-pen",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return x(l,n=>{let{size:r,color:p,spin:d,width:i,fill:c}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:p,fill:c};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(n,r)=>(g(),h("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=f(s,[["__file","edit-pen.vue"]]);export{N as default};
