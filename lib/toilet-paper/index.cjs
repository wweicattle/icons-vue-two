/*! Icons Vue v2.0.13 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=y(e,o))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var C={};w(C,{default:()=>B});module.exports=z(C);var p=require("vue"),l=require("vue"),i=require("vue"),S=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"},null,-1),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"},null,-1),k=[S,E],f=(0,p.defineComponent)({__name:"toilet-paper",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:c,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:c||void 0,color:u,fill:_};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var B=d(f,[["__file","toilet-paper.vue"]]);
