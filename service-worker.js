if(!self.define){let e,i={};const r=(r,l)=>(r=new URL(r+".js",l).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const u=e=>r(e,o),a={module:{uri:o},exports:s,require:u};i[o]=Promise.all(l.map((e=>a[e]||u(e)))).then((e=>(n(...e),s)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"revitalizar-area-verde"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.d358b936.css",revision:null},{url:"/css/chunk-vendors.86ac7b72.css",revision:null},{url:"/favicon.png",revision:"cbc42c159b0ee05553b8cd3e47a80c4a"},{url:"/fonts/bootstrap-icons.70a9dee9.woff",revision:null},{url:"/fonts/bootstrap-icons.bfa90bda.woff2",revision:null},{url:"/img/Gantt.2b6fefb1.png",revision:null},{url:"/img/diagrama.301ca990.png",revision:null},{url:"/img/fundadora.8212f2f5.jpeg",revision:null},{url:"/img/hero-carousel-2.d2a962ee.jpg",revision:null},{url:"/img/hero-carousel-3.930e92e3.jpg",revision:null},{url:"/img/jornada.55b020c1.jpg",revision:null},{url:"/img/parque-arreglado.2b41dd3a.jpeg",revision:null},{url:"/img/people1.aee412d3.jpeg",revision:null},{url:"/img/people2.8571294d.jpg",revision:null},{url:"/img/people3.b5f3f36a.jpeg",revision:null},{url:"/img/people4.c6fd79f3.jpg",revision:null},{url:"/img/people5.53a56239.jpg",revision:null},{url:"/img/reynosaCity.489027f6.jpg",revision:null},{url:"/index.html",revision:"251e2e8f9aefe8021a2f4c09c1882918"},{url:"/js/app.a3e2555e.js",revision:null},{url:"/js/chunk-vendors.d60362fe.js",revision:null},{url:"/manifest.json",revision:"9474b317acc4e7d75ff61dd9f9b0b79a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
