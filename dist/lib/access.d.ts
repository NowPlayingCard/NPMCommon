import type { KVNamespace } from "@cloudflare/workers-types/experimental";
declare const _default: (Key: JsonWebKey["k"], UUID: ReturnType<Crypto["randomUUID"]>, KV: KVNamespace, View: string) => Promise<any>;
export default _default;
