var E=Object.defineProperty;var u=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&d(e,o,t[o]);if(u)for(var o of u(t))f.call(t,o)&&d(e,o,t[o]);return e};import{E as I,t as T,s as l,u as _,_ as h,a as m,f as R,j as N,c as y,A as D,I as O,b as V,g,d as S,R as v,e as P}from"./vendor.bbdbec75.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};A();const U=e=>t=>{if(I.isLeft(t))throw e(t.left);return t.right},b=T({VITE_SERVER_ENDPOINT:l,VITE_SUBSCRIPTION_SERVER_ENDPOINT:l,VITE_DEBUG:_([l,m])}),B=h.pipe(b.decode({VITE_SERVER_ENDPOINT:"http://localhost:4000/api",VITE_SUBSCRIPTION_SERVER_ENDPOINT:"ws://localhost:4000/api",VITE_DEBUG:"true",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}),U(e=>{throw new Error(`Failed to start application, missing env vars: ${R(e).join(`
`)}`)}),e=>({serverEndpoint:e.VITE_SERVER_ENDPOINT,subscriptionServerEndpoint:e.VITE_SUBSCRIPTION_SERVER_ENDPOINT,isDebug:e.VITE_DEBUG&&e.VITE_DEBUG==="true"})),s=N.exports.jsx,L=({children:e})=>{const t=y({uri:B.serverEndpoint}),o=new D({link:t,cache:new O,connectToDevTools:!0});return s(V,{client:o,children:e})},w={},C=g`
    query AllUsers {
  users {
    id
  }
}
    `;function j(e){const t=c(c({},w),e);return S(C,t)}const M=()=>{var t;const e=(t=j().data)==null?void 0:t.users;return console.log(e),s("div",{children:e==null?void 0:e.map(o=>o==null?void 0:o.id)})};v.render(s(P.StrictMode,{children:s(L,{children:s(M,{})})}),document.getElementById("root"));