/*! Icons Vue v1.1.40 */

"use strict";var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=h(e,o))||r.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var B={};z(B,{default:()=>k});module.exports=x(B);var c=require("vue"),l=require("vue"),a=require("vue"),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"},null,-1),S=[E],p=(0,c.defineComponent)({__name:"van",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),r=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:m,spin:u,width:f,fill:_}=o,v={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:m,fill:_};r.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var k=d(p,[["__file","van.vue"]]);
