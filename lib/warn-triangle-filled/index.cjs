/*! Icons Vue v1.1.41 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var o in e)s(t,o,{get:e[o],enumerable:!0})},x=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of h(e))!v.call(t,n)&&n!==o&&s(t,n,{get:()=>e[n],enumerable:!(r=y(e,n))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=z(B);var f=require("vue"),l=require("vue"),i=require("vue"),E=(0,l.createElementVNode)("path",{d:"M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z",fill:"currentColor"},null,-1),S=[E],d=(0,f.defineComponent)({__name:"warn-triangle-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,o=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,n=>{let{size:a,color:u,spin:m,width:c,fill:_}=n,g={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:c||void 0,color:u,fill:_};r.value=Object.assign({...g})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(n,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:o,style:(0,l.normalizeStyle)([r.value,{"enable-background":"new 0 0 1024 1024"}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","xml:space":"preserve"},S,4))}});var p=(t,e)=>{let o=t.__vccOpts||t;for(let[r,n]of e)o[r]=n;return o};var k=p(d,[["__file","warn-triangle-filled.vue"]]);
