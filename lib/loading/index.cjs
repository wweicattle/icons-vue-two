/*! Icons Vue v2.0.13 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var z=Object.prototype.hasOwnProperty;var h=(t,e)=>{for(var o in e)s(t,o,{get:e[o],enumerable:!0})},w=(t,e,o,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of v(e))!z.call(t,a)&&a!==o&&s(t,a,{get:()=>e[a],enumerable:!(l=y(e,a))||l.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var B={};h(B,{default:()=>k});module.exports=x(B);var d=require("vue"),n=require("vue"),r=require("vue"),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),S=[E],p=(0,d.defineComponent)({__name:"loading",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,o=(0,r.ref)(null),l=(0,r.ref)({fill:"red",width:"100px"});return(0,r.watch)(e,a=>{let{size:i,color:m,spin:u,width:f,fill:_}=a,g={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:m,fill:_};l.value=Object.assign({...g})},{deep:!0,immediate:!0}),(0,r.onMounted)(()=>{}),(a,i)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:o,style:(0,n.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var c=(t,e)=>{let o=t.__vccOpts||t;for(let[l,a]of e)o[l]=a;return o};var k=c(p,[["__file","loading.vue"]]);
