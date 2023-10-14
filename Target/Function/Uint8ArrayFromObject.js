var c = async (e) => {
	const a = Object.keys(e)
			.map(Number)
			.sort((r, t) => r - t),
		n = new Uint8Array(a.length);
	return (
		a.forEach((r, t) => {
			n[t] = e[r] ?? 0;
		}),
		n
	);
};
export { c as default };
