/*! Icons Vue v2.0.18 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!h.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=g(e,o))||r.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>z});module.exports=E(B);var p=require("vue"),l=require("vue"),i=require("vue"),S=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"},null,-1),k=[S],c=(0,p.defineComponent)({__name:"bottom",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var z=d(c,[["__file","bottom.vue"]]);
