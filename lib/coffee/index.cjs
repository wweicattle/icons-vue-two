/*! Icons Vue v2.0.2 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!v.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=y(e,o))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var k={};w(k,{default:()=>H});module.exports=z(k);var c=require("vue"),l=require("vue"),i=require("vue"),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"},null,-1),S=[E],p=(0,c.defineComponent)({__name:"coffee",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:m,spin:u,width:f,fill:_}=o,h={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:m,fill:_};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var H=d(p,[["__file","coffee.vue"]]);
