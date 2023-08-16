import { Buffer as i } from "node:buffer";
import c from "./Decrypt.js";
import t from "./Uint8ArrayFromObject.js";
var f=async(a,e,o,m)=>{try{const{IV:r,Data:p}=await o.get(e,{type:"json"});return JSON.parse(i.from(await c(await t(p),a??"",await t(r))).toString())[m]}catch{}};export { f as default };

