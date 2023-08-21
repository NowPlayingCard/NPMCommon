export interface Uint8ArrayObject {
	[key: number]: number;
}

/* The `export interface DataObject` is defining an interface in TypeScript. This interface has two
properties: `IV` and `Data`. Both properties are of type `Uint8ArrayObject`, which is another
interface defined in the code. This interface is used to represent an object with keys as numbers
and values as numbers. */
export interface DataObject {
	IV: Uint8ArrayObject;
	Data: Uint8ArrayObject;
}

/**
 * The function `Uint8ArrayFromObject` converts an object with keys as numbers and
 * values as Uint8Array elements into a sorted Uint8Array.
 * @param {Uint8ArrayObject} obj - The `obj` parameter is an object that contains
 * key-value pairs, where the keys are numbers and the values are Uint8Array values.
 * @returns The function `Uint8ArrayFromObject` returns a `Uint8Array` object.
 */
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
