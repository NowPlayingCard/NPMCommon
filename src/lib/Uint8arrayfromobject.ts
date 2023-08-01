export interface Uint8ArrayObject {
	[key: number]: number;
}

export interface DataObject {
	iv: Uint8ArrayObject;
	data: Uint8ArrayObject;
}

export default async (obj: Uint8ArrayObject) => {
	const keys = Object.keys(obj)
		.map(Number)
		.sort((a, b) => a - b);

	const array = new Uint8Array(keys.length);

	keys.forEach((key, index) => {
		array[index] = obj[key] ?? 0;
	});

	return array;
};
