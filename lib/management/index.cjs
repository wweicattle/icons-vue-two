/*! Icons Vue v2.0.2 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var o in e)s(t,o,{get:e[o],enumerable:!0})},x=(t,e,o,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of v(e))!h.call(t,n)&&n!==o&&s(t,n,{get:()=>e[n],enumerable:!(l=y(e,n))||l.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=E(B);var p=require("vue"),r=require("vue"),i=require("vue"),S=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"},null,-1),z=[S],c=(0,p.defineComponent)({__name:"management",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,o=(0,i.ref)(null),l=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,n=>{let{size:a,color:m,spin:u,width:f,fill:_}=n,g={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:m,fill:_};l.value=Object.assign({...g})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(n,a)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:o,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var d=(t,e)=>{let o=t.__vccOpts||t;for(let[l,n]of e)o[l]=n;return o};var k=d(c,[["__file","management.vue"]]);
