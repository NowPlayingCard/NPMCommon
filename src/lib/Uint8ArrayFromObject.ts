export interface Uint8ArrayObject {
	[key: number]: number;
}

export interface DataObject {
	IV: Uint8ArrayObject;
	Data: Uint8ArrayObject;
}

export default async (obj: Uint8ArrayObject) => {
	const Keys = Object.keys(obj)
		.map(Number)
		.sort((a, b) => a - b);

	const _Array = new Uint8Array(Keys.length);

	Keys.forEach((key, index) => {
		_Array[index] = obj[key] ?? 0;
	});

	return _Array;
};
