"use strict";(globalThis.webpackChunk_wigwam_app=globalThis.webpackChunk_wigwam_app||[]).push([[343],{29174:(e,t,s)=>{s.d(t,{ConfigCtrl:()=>O,zv:()=>b,uA:()=>v,ExplorerCtrl:()=>V,jb:()=>H,OptionsCtrl:()=>I,AV:()=>f,ThemeCtrl:()=>Q,ToastCtrl:()=>Y});Symbol();const o=Symbol();const a=Object.getPrototypeOf,n=new WeakMap,r=e=>e&&(n.has(e)?n.get(e):a(e)===Object.prototype||a(e)===Array.prototype),i=(e,t=!0)=>{n.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,p=(e=Object.is,t=((e,t)=>new Proxy(e,t)),s=(e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),a=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),n=new WeakMap,p=((e,t,s=a)=>{const o=n.get(e);if((null==o?void 0:o[0])===t)return o[1];const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(r,!0),n.set(e,[t,r]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(r,t))return;const o=Reflect.get(e,t),a={value:o,enumerable:!0,configurable:!0};if(d.has(o))i(o,!1);else if(o instanceof Promise)delete a.value,a.get=()=>s(o);else if(c.has(o)){const[e,t]=c.get(o);a.value=p(e,t(),s)}Object.defineProperty(r,t,a)})),Object.preventExtensions(r)}),u=new WeakMap,h=[1,1],g=(a=>{if(!l(a))throw new Error("object required");const n=u.get(a);if(n)return n;let i=h[0];const m=new Set,f=(e,t=++h[0])=>{i!==t&&(i=t,m.forEach((s=>s(e,t))))};let b=h[1];const y=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],f(o,s)},v=new Map,w=e=>{var t;const s=v.get(e);s&&(v.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),C={deleteProperty(e,t){const s=Reflect.get(e,t);w(t);const o=Reflect.deleteProperty(e,t);return o&&f(["delete",[t],s]),o},set(t,a,n,i){const p=Reflect.has(t,a),h=Reflect.get(t,a,i);if(p&&(e(h,n)||u.has(n)&&e(h,u.get(n))))return!0;w(a),l(n)&&(n=(e=>r(e)&&e[o]||null)(n)||n);let b=n;if(n instanceof Promise)n.then((e=>{n.status="fulfilled",n.value=e,f(["resolve",[a],e])})).catch((e=>{n.status="rejected",n.reason=e,f(["reject",[a],e])}));else{!c.has(n)&&s(n)&&(b=g(n));const e=!d.has(b)&&c.get(b);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(m.size){const s=t[3](y(e));v.set(e,[t,s])}else v.set(e,[t])})(a,e)}return Reflect.set(t,a,b,i),f(["set",[a],n,h]),!0}},O=t(I,C);u.set(a,O);const E=[I,(e=++h[1])=>(b===e||m.size||(b=e,v.forEach((([t])=>{const s=t[1](e);s>i&&(i=s)}))),i),p,e=>{m.add(e),1===m.size&&v.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const o=e[3](y(s));v.set(s,[e,o])}));return()=>{m.delete(e),0===m.size&&v.forEach((([e,t],s)=>{t&&(t(),v.set(s,[e]))}))}}];return c.set(O,E),Reflect.ownKeys(a).forEach((e=>{const t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(O[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),O}))=>[g,c,d,e,t,s,a,n,p,u,h],[u]=p();function h(e={}){return u(e)}function g(e,t,s){const o=c.get(e);let a;const n=[],r=o[3];let i=!1;const l=r((e=>{n.push(e),s?t(n.splice(0)):a||(a=Promise.resolve().then((()=>{a=void 0,i&&t(n.splice(0))})))}));return i=!0,()=>{i=!1,l()}}const m=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),f={state:m,subscribe:e=>g(m,(()=>e(m))),push(e,t){e!==m.view&&(m.view=e,t&&(m.data=t),m.history.push(e))},reset(e){m.view=e,m.history=[e]},replace(e){m.history.length>1&&(m.history[m.history.length-1]=e,m.view=e)},goBack(){if(m.history.length>1){m.history.pop();const[e]=m.history.slice(-1);m.view=e}},setData(e){m.data=e}},b={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>b.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return b.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(b.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!b.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{}},removeWalletConnectDeepLink(){try{localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)}catch{}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(b.WCM_VERSION,"2.6.2")}catch{}},getWalletRouterData(){var e;const t=null==(e=f.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},y=h({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),v={state:y,subscribe:e=>g(y.events,(()=>e(function(e,t){const s=c.get(e),[o,a,n]=s;return n(o,a(),t)}(y.events[y.events.length-1])))),initialize(){y.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(y.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){y.connectedWalletId=e},click(e){if(y.enabled){const t={type:"CLICK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},track(e){if(y.enabled){const t={type:"TRACK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},view(e){if(y.enabled){const t={type:"VIEW",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}}},w=h({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:w,subscribe:e=>g(w,(()=>e(w))),setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},C=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),O={state:C,subscribe:e=>g(C,(()=>e(C))),setConfig(e){var t,s;v.initialize(),I.setChains(e.chains),I.setIsAuth(Boolean(e.enableAuthMode)),I.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),I.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),b.setModalVersionInStorage(),Object.assign(C,e)}};var E=Object.defineProperty,W=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const M="https://explorer-api.walletconnect.com",k="wcm",D="js-2.6.2";async function U(e,t){const s=((e,t)=>{for(var s in t||(t={}))L.call(t,s)&&A(e,s,t[s]);if(W)for(var s of W(t))j.call(t,s)&&A(e,s,t[s]);return e})({sdkType:k,sdkVersion:D},t),o=new URL(e,M);return o.searchParams.append("projectId",O.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&o.searchParams.append(e,String(t))})),(await fetch(o)).json()}const P={getDesktopListings:async e=>U("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>U("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>U("/w3m/v1/getInjectedListings",e),getAllListings:async e=>U("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${M}/w3m/v1/getWalletImage/${e}?projectId=${O.state.projectId}&sdkType=${k}&sdkVersion=${D}`,getAssetImageUrl:e=>`${M}/w3m/v1/getAssetImage/${e}?projectId=${O.state.projectId}&sdkType=${k}&sdkVersion=${D}`};var S=Object.defineProperty,T=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,R=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const _=b.isMobile(),$=h({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),V={state:$,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=O.state;if("NONE"===e||"ALL"===t&&!e)return $.recomendedWallets;if(b.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await P.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),$.recomendedWallets=o}else{const{chains:e,isAuth:s}=I.state,o=e?.join(","),a=b.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:b.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:a?t.join(","):void 0},{listings:r}=_?await P.getMobileListings(n):await P.getDesktopListings(n);$.recomendedWallets=Object.values(r)}return $.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))N.call(t,s)&&R(e,s,t[s]);if(T)for(var s of T(t))x.call(t,s)&&R(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=O.state,{recomendedWallets:a}=$;if("ALL"===o)return $.wallets;a.length?t.excludedIds=a.map((e=>e.id)).join(","):b.isArray(s)&&(t.excludedIds=s.join(",")),b.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:n,search:r}=e,{listings:i,total:l}=_?await P.getMobileListings(t):await P.getDesktopListings(t),c=Object.values(i),d=r?"search":"wallets";return $[d]={listings:[...$[d].listings,...c],total:l,page:n??1},{listings:c,total:l}},getWalletImageUrl:e=>P.getWalletImageUrl(e),getAssetImageUrl:e=>P.getAssetImageUrl(e),resetSearch(){$.search={listings:[],total:0,page:1}}},B=h({open:!1}),H={state:B,subscribe:e=>g(B,(()=>e(B))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=I.state;if(b.removeWalletConnectDeepLink(),I.setWalletConnectUri(e?.uri),I.setChains(e?.chains),f.reset("ConnectWallet"),s&&o)B.open=!0,t();else{const e=setInterval((()=>{const s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),B.open=!0,t())}),200)}})),close(){B.open=!1}};var K=Object.defineProperty,z=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,F=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const G=h({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Q={state:G,subscribe:e=>g(G,(()=>e(G))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(G.themeMode=t),s&&(G.themeVariables=((e,t)=>{for(var s in t||(t={}))J.call(t,s)&&F(e,s,t[s]);if(z)for(var s of z(t))q.call(t,s)&&F(e,s,t[s]);return e})({},s))}},X=h({open:!1,message:"",variant:"success"}),Y={state:X,subscribe:e=>g(X,(()=>e(X))),openToast(e,t){X.open=!0,X.message=e,X.variant=t},closeToast(){X.open=!1}}},59343:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>a});var o=s(29174);class a{constructor(e){this.openModal=o.jb.open,this.closeModal=o.jb.close,this.subscribeModal=o.jb.subscribe,this.setTheme=o.ThemeCtrl.setThemeConfig,o.ThemeCtrl.setThemeConfig(e),o.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(663).then(s.bind(s,30663));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);