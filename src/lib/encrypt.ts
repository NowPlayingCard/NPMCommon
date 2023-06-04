export default async (data: unknown, key: string) => {
	const iv = crypto.getRandomValues(new Uint8Array(12));

	return {
		iv,
		data: new Uint8Array(
			await crypto.subtle.encrypt(
				{
					name: "AES-GCM",
					iv,
					tagLength: 128,
				},
				await crypto.subtle.importKey(
					"jwk",
					{
						kty: "oct",
						k: key,
						alg: "A256GCM",
						ext: true,
					},
					{
						name: "AES-GCM",
					},
					false,
					["encrypt", "decrypt"]
				),
				Buffer.from(JSON.stringify(data)).buffer
			)
		),
	};
};
