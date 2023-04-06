/*! Icons Vue v2.0.2 */

"use strict";var s=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(a=v(e,o))||a.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=z(B);var f=require("vue"),r=require("vue"),l=require("vue"),E=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"},null,-1),S=[E],p=(0,f.defineComponent)({__name:"ice-cream-square",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,l.ref)(null),a=(0,l.ref)({fill:"red",width:"100px"});return(0,l.watch)(e,o=>{let{size:i,color:u,spin:m,width:c,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:u,fill:_};a.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,l.onMounted)(()=>{}),(o,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(a.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[a,o]of e)n[a]=o;return n};var k=d(p,[["__file","ice-cream-square.vue"]]);
