(()=>{"use strict";var e={},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,t.amdD=function(){throw new Error("define cannot be used indirect")},t.amdO={},(()=>{var e=[];t.O=(r,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);t.r(a);var i={};e=e||[null,r({}),r([]),r(r)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,t.d(a,i),a}})(),t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[])),t.u=e=>826===e?"scripts/826.js":134===e?"scripts/134.js":"scripts/"+e+".chunk.js",t.miniCssF=e=>"styles/"+e+".chunk.css",t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="@wigwam/app:";t.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==r+a){l=c;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=n),e[n]=[o];var f=(r,t)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((r,n)=>{var o=t.miniCssF(e),a=t.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(o,a))return r();((e,r,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=t=>{if(a.onerror=a.onload=null,"load"===t.type)n();else{var i=t&&t.type,l=t&&t.target&&t.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+l+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode&&a.parentNode.removeChild(a),o(s)}},a.href=r,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a)})(e,a,null,r,n)})),r={666:0};t.f.miniCss=(t,n)=>{r[t]?n.push(r[t]):0!==r[t]&&{418:1}[t]&&n.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}}})(),(()=>{var e={666:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else if(666!=r){var a=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=a);var i=t.p+t.u(r),l=new Error;t.l(i,(n=>{if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}}),"chunk-"+r,r)}else e[r]=0},t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[i,l,s]=n,u=0;if(i.some((r=>0!==e[r]))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(s)var d=s(t)}for(r&&r(n);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},n=globalThis.webpackChunk_wigwam_app=globalThis.webpackChunk_wigwam_app||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t.nc=void 0})();