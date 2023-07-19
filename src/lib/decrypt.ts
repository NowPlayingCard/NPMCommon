export default async (data: Uint8Array, Key: string, iv: Uint8Array) =>
	new Uint8Array(
		await crypto.subtle.decrypt(
			{
				name: "AES-GCM",
				iv,
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
			data
		)
	);
