/// <reference types="@cloudflare/workers-types" />
declare const _default: (Key: JsonWebKey["k"], UUID: ReturnType<Crypto["randomUUID"]>, From: KVNamespace, View?: "access_token") => Promise<any>;
export default _default;
