import { Buffer } from "node:buffer";

export default async (Data: unknown, Key: string) => {
	const IV = crypto.getRandomValues(new Uint8Array(12));

	return {
		IV,
		Data: new Uint8Array(
			await crypto.subtle.encrypt(
				{
					name: "AES-GCM",
					iv: IV,
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
