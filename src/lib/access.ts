import { Buffer } from "node:buffer";
import type { DataObject } from "./Uint8ArrayFromObject";
import Uint8ArrayFromObject from "./Uint8ArrayFromObject.js";
import decrypt from "./decrypt.js";

export default async (
	Key: JsonWebKey["k"],
	UUID: ReturnType<Crypto["randomUUID"]>,
	From: KVNamespace,
	View: "access_token" = "access_token"
) => {
	try {
		const { iv, data } = (await From.get(UUID, {
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
	} catch (error) {
		return {};
	}
};
