const a=(...[e])=>{if(e instanceof Map){const t={};for(const[n,r]of e.entries())r instanceof Map?t[n]=a(r):t[n]=r;return t}return e};var f=a;export{a as _Function,f as default};
