/*! Icons Vue v1.1.41 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!h.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=g(e,o))||r.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var B={};z(B,{default:()=>k});module.exports=x(B);var p=require("vue"),a=require("vue"),l=require("vue"),E=(0,a.createElementVNode)("path",{fill:"currentColor",d:"m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"},null,-1),S=[E],c=(0,p.defineComponent)({__name:"pouring",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,l.ref)(null),r=(0,l.ref)({fill:"red",width:"100px"});return(0,l.watch)(e,o=>{let{size:i,color:u,spin:m,width:f,fill:_}=o,v={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,l.onMounted)(()=>{}),(o,i)=>((0,a.openBlock)(),(0,a.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,a.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var k=d(c,[["__file","pouring.vue"]]);
