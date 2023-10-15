var y=async r=>{const s=Object.keys(r).map(Number).sort((e,t)=>e-t),a=new Uint8Array(s.length);return s.forEach((e,t)=>{a[t]=r[e]??0}),a};export{y as default};
