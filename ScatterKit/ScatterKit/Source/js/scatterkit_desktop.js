!function(){let e=0;const t=function(){let t=(new Date).getTime();'undefined'!=typeof performance&&'function'==typeof performance.now&&(t+=performance.now());let s='';for(let e=0;e<3;++e)s+=parseInt(1e11*Math.random());return parseInt(e+=1)+t+s},s=function(e,s,n){const o={id:s.data.id||t(),result:n};window[e]('message','42/scatter,'+JSON.stringify(['api',o]))};let n=WebSocket;WebSocket=function(e,o){switch(e){case'ws://127.0.0.1:50005/socket.io/?EIO=3&transport=websocket':case'wss://127.0.0.1:50005/socket.io/?EIO=3&transport=websocket':case'ws://local.get-scatter.com:50006/socket.io/?EIO=3&transport=websocket':case'ws://local.get-scatter.com:50006/socket.io/?EIO=3&transport=websocket':break;default:return new n(e,o)}let a={};a.readyState=n.OPENING;const c='scatterKit'+t();return window[c]=function(e,t){const s=new MessageEvent('message',{data:t});switch(e){case'message':'function'==typeof a.onmessage&&a.onmessage(s);break;case'error':'function'==typeof a.onerror&&a.onerror(s)}},a.send=function(e){setTimeout(function(){if('function'==typeof window[c])if(-1!==e.indexOf('40/scatter'))window[c]('message','42/scatter,["connected"]');else if(-1!==e.indexOf('42/scatter')){const[t,n]=JSON.parse(e.replace('42/scatter,',''));switch(t){case'api':switch(n.data.type){case'requestArbitrarySignature':case'requestTransfer':case'requestSignature':case'getPublicKey':case'identityFromPermissions':case'getOrRequestIdentity':case'authenticate':!function(e,t,s,n){try{const o={header:t,type:s,request:n,callback:e};window.webkit.messageHandlers.scatterKit.postMessage(JSON.stringify(o))}catch(e){return}}(c,'42/scatter',t,n);break;case'getVersion':s(c,n,'10.1.0');break;case'forgetIdentity':case'requestAddNetwork':case'linkAccount':s(c,n,!0)}case'rekeyed':case'pair':window[c]('message','42/scatter,["paired",true]')}}},1)},a.close=function(){a.readyState=n.CLOSING,setTimeout(function(){a.readyState=n.CLOSED,'function'==typeof a.onclose&&a.onclose()},200)},setTimeout(function(){a.readyState=n.OPEN,'function'==typeof a.onopen&&a.onopen()},200),a}}();