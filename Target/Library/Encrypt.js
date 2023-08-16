import { Buffer as n } from "node:buffer";
var o=async(r,e)=>{const t=crypto.getRandomValues(new Uint8Array(12));return{IV:t,Data:new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:t,tagLength:128},await crypto.subtle.importKey("jwk",{kty:"oct",k:e,alg:"A256GCM",ext:!0},{name:"AES-GCM"},!1,["encrypt","decrypt"]),n.from(JSON.stringify(r)).buffer))}};export { o as default };

