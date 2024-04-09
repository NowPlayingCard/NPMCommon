const n=(...[e])=>{if(e instanceof Map){const t={};for(const[a,r]of e.entries())r instanceof Map?t[a]=n(r):t[a]=r;return t}return e};var f=n;export{n as _Function,f as default};
