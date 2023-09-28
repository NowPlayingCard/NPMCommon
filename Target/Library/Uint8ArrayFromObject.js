var c=async r=>{const a=Object.keys(r).map(Number).sort((t,e)=>t-e),n=new Uint8Array(a.length);return a.forEach((t,e)=>{n[e]=r[t]??0}),n};export{c as default};
