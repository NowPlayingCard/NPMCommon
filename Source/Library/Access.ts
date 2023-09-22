import type { DataObject } from "./Uint8ArrayFromObject.js";

import type { KVNamespace } from "@cloudflare/workers-types/experimental";

import decrypt from "./Decrypt.js";
import Uint8ArrayFromObject from "./Uint8ArrayFromObject.js";

import { Buffer } from "node:buffer";

/**
 * The function `Access` is a TypeScript function that decrypts and retrieves a specific
 * view from a stored data object using a provided key and unique identifier.
 * @param Key - The `Key` parameter is of type `JsonWebKey["k"]`, which means it expects
 * a value that is a string representing a JSON Web Key. This key will be used for
 * decryption.
 * @param Identifier - The Identifier parameter is a unique identifier generated using the
 * `randomUUID` function from the `Crypto` object. It is used to retrieve data from the
 * KV namespace.
 * @param {KVNamespace} KV - KV is an instance of the KVNamespace class, which is used
 * to interact with the Workers KV storage. It provides methods for reading, writing,
 * and deleting data from the KV storage.
 * @param {string} View - The `View` parameter is a string that represents the specific
 * view or property of the decrypted data that you want to access. It is used to
 * retrieve a specific value from the decrypted data object.
 * @returns the value of the property specified by the `View` parameter from the
 * decrypted data object.
 */
export default async (
	Key: JsonWebKey["k"],
	Identifier: ReturnType<Crypto["randomUUID"]>,
	KV: KVNamespace,
	View: string
) => {
	try {
		const { Vector, Data } = (await KV.get(Identifier, {
			type: "json",
		})) as DataObject;

		return JSON.parse(
			Buffer.from(
				await decrypt(
					await Uint8ArrayFromObject(Data),
					Key ?? "",
					await Uint8ArrayFromObject(Vector)
				)
			).toString()
		)[View];
	} catch (_Error) {}
};
