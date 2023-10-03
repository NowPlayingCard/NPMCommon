import { Buffer } from "node:buffer";

/**
 * The Encrypt function encrypts data using the AES-GCM algorithm with a given key.
 * @param {unknown} Data - The `Data` parameter is the data that you want to encrypt. It
 * can be of any type, but it will be converted to a JSON string before encryption.
 * @param {string} Key - The `Key` parameter is a string that represents the encryption
 * key used to encrypt the data. It is used to derive a symmetric encryption key that is
 * compatible with the AES-GCM algorithm.
 * @returns The `Encrypt` function returns an object with two properties: `Vector` and
 * `Data`. `Vector` is a randomly generated 12-byte array used as the initialization vector
 * for the encryption. `Data` is the encrypted version of the input `Data` using the
 * AES-GCM encryption algorithm.
 */
export default async (Data: unknown, Key: string) => {
	const Vector = crypto.getRandomValues(new Uint8Array(12));

	return {
		Vector,
		Data: new Uint8Array(
			await crypto.subtle.encrypt(
				{
					name: "AES-GCM",
					iv: Vector,
					tagLength: 128,
				},
				await crypto.subtle.importKey(
					"jwk",
					{
						kty: "oct",
						k: Key,
						alg: "A256GCM",
						ext: true,
					},
					{
						name: "AES-GCM",
					},
					false,
					["encrypt", "decrypt"]
				),
				Buffer.from(JSON.stringify(Data)).buffer
			)
		),
	};
};
