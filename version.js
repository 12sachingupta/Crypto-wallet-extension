(()=>{"use strict";const e=chrome??browser,t=e.runtime.id,a=((e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),""))();window.addEventListener("message",(t=>{if(t.source===window&&t.origin===location.origin&&t.data?.salt===a)switch(t.data.type){case"wigwam.reply":e.runtime.sendMessage({type:"__APPLY_WEBSITE_DATA",data:t.data.data});break;case"wigwam.openapp":e.runtime.sendMessage({type:"__OPEN_OR_FOCUS_TAB"})}}),!1),window.addEventListener("load",(()=>{window.postMessage({type:"wigwam.version",extId:t,version:"2.2.3",salt:a},location.origin)}))})();