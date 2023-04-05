/*! Icons Vue v1.1.41 */

"use strict";var s=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},x=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(r=v(e,o))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var M={};w(M,{default:()=>B});module.exports=z(M);var d=require("vue"),n=require("vue"),a=require("vue"),C=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),S=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"},null,-1),k=[C,E,S],f=(0,d.defineComponent)({__name:"add-location",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,a.ref)(null),r=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:u,spin:_,width:c,fill:m}=o,h={animation:_?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:u,fill:m};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var p=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var B=p(f,[["__file","add-location.vue"]]);
