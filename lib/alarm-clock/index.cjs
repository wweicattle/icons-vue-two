/*! Icons Vue v2.0.18 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},w=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!v.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(r=g(e,o))||r.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var C={};z(C,{default:()=>B});module.exports=x(C);var f=require("vue"),n=require("vue"),a=require("vue"),k=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"},null,-1),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"},null,-1),S=[k,E],d=(0,f.defineComponent)({__name:"alarm-clock",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,a.ref)(null),r=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:m,spin:u,width:c,fill:_}=o,y={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:m,fill:_};r.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var p=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var B=p(d,[["__file","alarm-clock.vue"]]);
