function sleep(e){return new Promise((t=>setTimeout(t,e)))}(async()=>{chrome.runtime.onInstalled.addListener(((e,t,s)=>{chrome.alarms.create("trackAccountsAlarm",{delayInMinutes:1,periodInMinutes:60})})),chrome.alarms.onAlarm.addListener((async e=>{if("trackAccountsAlarm"===e.name){const{trackedAccounts:e}=await chrome.storage.local.get("trackedAccounts");if(e?.length>0)for(const t of e)try{await sleep(5200);const s=await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${t.address}&startblock=0&endblock=99999999&page=1&offset=3&sort=desc`);if(!s.ok){console.error(`Fetch error, ${t.address} fetchLatestAddressTxs txs info: ${s.status} ${s.statusText}`);continue}const a=await s.json();if(a.result.length>0){const s=a.result[0].nonce;if(t.nonce!==s){const n=parseInt(s)-parseInt(t.nonce),o=1===n?`${t.name} has ${n} new transaction`:`${t.name} has ${n} new transactions`,r=a.result[0].value||"0",c=BigInt(r)/BigInt(10**18),i=c>0?`Just sent ${c} ETH`:"";chrome.notifications.create({type:"basic",iconUrl:"/images/CryptoExplorer_logo_128.png",title:"Crypto Tracker",message:`${o}\n                  ${i}`}),chrome.storage.local.set({trackedAccounts:e.map((e=>e.address===t.address?{...e,nonce:s,lastUpdated:Date.now()}:e))})}}}catch(e){console.error("Error fetching address tx info:",e)}}}))})();