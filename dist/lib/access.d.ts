/// <reference types="@cloudflare/workers-types" />
/// <reference types="@cloudflare/workers-types/experimental" />
declare const _default: (Key: JsonWebKey["k"], UUID: ReturnType<Crypto["randomUUID"]>, Get: KVNamespace["get"], View: string) => Promise<any>;
export default _default;
