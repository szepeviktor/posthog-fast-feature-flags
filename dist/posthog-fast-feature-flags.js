(()=>{var p=(e,a)=>{let n=A(a.variants),s=w(a.key,e,"variant");for(let i of n)if(s>=i.value_min&&s<i.value_max)return i.key;return null},A=e=>{let a=[],n=0;for(let[s,i]of Object.entries(e)){let u=n+i;a.push({value_min:n,value_max:u,key:s}),n=u}return a},w=(e,a,n="")=>{let s=`${e}.${a}${n}`,i=C(s),u=BigInt(`0x${i}`),l=BigInt("0xFFFFFFFFFFFFFFF");return Number(u)/Number(l)},C=e=>{function a(o,c){return(o<<c|o>>>32-c)>>>0}let n=1732584193,s=4023233417,i=2562383102,u=271733878,l=3285377520,r=[];for(let o=0;o<e.length;o++){let c=e.charCodeAt(o);r.push(c&255)}for(r.push(128);r.length*8%512!==448;)r.push(0);let m=e.length*8;r.push(0,0,0,0),r.push(m>>>24&255),r.push(m>>>16&255),r.push(m>>>8&255),r.push(m&255);for(let o=0;o<r.length;o+=64){let c=new Array(80);for(let t=0;t<16;t++)c[t]=r[o+t*4]<<24|r[o+t*4+1]<<16|r[o+t*4+2]<<8|r[o+t*4+3];for(let t=16;t<80;t++)c[t]=a(c[t-3]^c[t-8]^c[t-14]^c[t-16],1);let[h,f,g,F,d]=[n,s,i,u,l];for(let t=0;t<80;t++){let v=t<20?f&g|~f&F:t<40?f^g^F:t<60?f&g|f&F|g&F:f^g^F,k=t<20?1518500249:t<40?1859775393:t<60?2400959708:3395469782,y=a(h,5)+v+d+k+c[t]>>>0;d=F,F=g,g=a(f,30),f=h,h=y}n=n+h>>>0,s=s+f>>>0,i=i+g>>>0,u=u+F>>>0,l=l+d>>>0}return[n,s,i,u,l].map(o=>o.toString(16).padStart(8,"0")).join("").slice(0,15)};var x=()=>{let e;if(e)return e;let n=document.cookie.split(";").find(s=>s.trim().startsWith("pfff="));return n?(e=n.split("=")[1].trim(),e):(e=Math.random().toString(36).substring(2)+Date.now().toString(36),document.cookie=`pfff=${e};path=/;max-age=31536000`,e)};function _(){let e=x(),a=s=>{let i={};return s.forEach(u=>{let l=Object.values(u.variants).reduce((r,m)=>r+m,0);if(Math.abs(l-1)>1e-4)throw new Error(`Variants for flag ${u.key} must sum to 1, got ${l}`);i[u.key]=p(e,u)}),i},n=function(s){return a(s)};return n.evaluate=a,n.identity=x,n}var b=_();typeof window<"u"&&(window.PFFF=b);var j=b;})();
