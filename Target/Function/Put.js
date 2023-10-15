const s=(...[e])=>{if(e instanceof Map){const t={};for(const[o,r]of e.entries())r instanceof Map?t[o]=s(r):t[o]=r;return t}return e};var a=s;export{s as _Function,a as default};
