/*! Icons Vue v1.1.41 */

"use strict";var a=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)a(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!v.call(t,o)&&o!==n&&a(t,o,{get:()=>e[o],enumerable:!(r=h(e,o))||r.enumerable});return t};var E=t=>x(a({},"__esModule",{value:!0}),t);var C={};w(C,{default:()=>B});module.exports=E(C);var f=require("vue"),l=require("vue"),i=require("vue"),S=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"},null,-1),z=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"},null,-1),k=[S,z],d=(0,f.defineComponent)({__name:"switch-button",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:s,color:u,spin:m,width:c,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:s||void 0,width:c||void 0,color:u,fill:_};r.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,s)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var B=p(d,[["__file","switch-button.vue"]]);
