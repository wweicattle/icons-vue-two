/*! Icons Vue v1.1.41 */

"use strict";var s=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var h=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!v.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=w(e,o))||l.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};h(B,{default:()=>z});module.exports=E(B);var d=require("vue"),r=require("vue"),i=require("vue"),S=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"},null,-1),k=[S],p=(0,d.defineComponent)({__name:"arrow-down",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),l=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var c=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var z=c(p,[["__file","arrow-down.vue"]]);
