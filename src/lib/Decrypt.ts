export default async (Data: Uint8Array, Key: string, IV: Uint8Array) =>
	new Uint8Array(
		await crypto.subtle.decrypt(
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
			Data
		)
	);
