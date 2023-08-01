import type { KVNamespace } from "@cloudflare/workers-types/experimental";
import { Buffer } from "node:buffer";
import decrypt from "./Decrypt.js";
import type { DataObject } from "./Uint8ArrayFromObject.js";
import Uint8ArrayFromObject from "./Uint8ArrayFromObject.js";

export default async (
	Key: JsonWebKey["k"],
	UUID: ReturnType<Crypto["randomUUID"]>,
	KV: KVNamespace,
	View: string
) => {
	try {
		const { iv, data } = (await KV.get(UUID, {
			type: "json",
		})) as DataObject;

		return JSON.parse(
			Buffer.from(
				await decrypt(
					await Uint8ArrayFromObject(data),
					Key ?? "",
					await Uint8ArrayFromObject(iv)
				)
			).toString()
		)[View];
	} catch (error) {}
};
