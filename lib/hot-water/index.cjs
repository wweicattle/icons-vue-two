/*! Icons Vue v1.1.40 */

"use strict";var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},z=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=h(e,o))||r.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=x(B);var p=require("vue"),a=require("vue"),l=require("vue"),E=(0,a.createElementVNode)("path",{fill:"currentColor",d:"M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"},null,-1),S=[E],c=(0,p.defineComponent)({__name:"hot-water",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,l.ref)(null),r=(0,l.ref)({fill:"red",width:"100px"});return(0,l.watch)(e,o=>{let{size:i,color:m,spin:u,width:f,fill:_}=o,v={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:m,fill:_};r.value=Object.assign({...v})},{deep:!0,immediate:!0}),(0,l.onMounted)(()=>{}),(o,i)=>((0,a.openBlock)(),(0,a.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,a.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var k=d(c,[["__file","hot-water.vue"]]);
