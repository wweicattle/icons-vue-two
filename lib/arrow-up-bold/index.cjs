/*! Icons Vue v2.0.18 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var h=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of w(e))!v.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=g(e,o))||l.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};h(B,{default:()=>z});module.exports=E(B);var p=require("vue"),r=require("vue"),a=require("vue"),S=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"},null,-1),k=[S],d=(0,p.defineComponent)({__name:"arrow-up-bold",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),l=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:u,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var c=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var z=c(d,[["__file","arrow-up-bold.vue"]]);
