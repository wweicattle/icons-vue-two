/*! Icons Vue v2.0.18 */

"use strict";var s=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var y=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of z(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=v(e,o))||l.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var B={};y(B,{default:()=>k});module.exports=x(B);var d=require("vue"),r=require("vue"),i=require("vue"),E=(0,r.createElementVNode)("path",{fill:"currentColor",d:"m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"},null,-1),S=[E],c=(0,d.defineComponent)({__name:"drizzling",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),l=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:m,spin:u,width:f,fill:h}=o,_={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:m,fill:h};l.value=Object.assign({..._})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var k=p(c,[["__file","drizzling.vue"]]);
