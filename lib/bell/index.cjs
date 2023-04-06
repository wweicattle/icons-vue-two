/*! Icons Vue v2.0.2 */

"use strict";var s=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},z=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of y(e))!g.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(r=v(e,o))||r.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var M={};w(M,{default:()=>B});module.exports=x(M);var c=require("vue"),n=require("vue"),i=require("vue"),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"},null,-1),S=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"},null,-1),C=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"},null,-1),k=[E,S,C],d=(0,c.defineComponent)({__name:"bell",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,h={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var p=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var B=p(d,[["__file","bell.vue"]]);
