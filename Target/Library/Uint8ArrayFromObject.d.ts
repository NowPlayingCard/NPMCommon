export interface Uint8ArrayObject {
    [key: number]: number;
}
export interface DataObject {
    Vector: Uint8ArrayObject;
    Data: Uint8ArrayObject;
}
/**
 * The function `Uint8ArrayFromObject` converts an object with keys as numbers and
 * values as Uint8Array elements into a sorted Uint8Array.
 * @param {Uint8ArrayObject} Obj - The `Obj` parameter is an object that contains
 * key-value pairs, where the keys are numbers and the values are Uint8Array values.
 * @returns The function `Uint8ArrayFromObject` returns a `Uint8Array` object.
 */
declare const _default: (Obj: Uint8ArrayObject) => Promise<Uint8Array>;
export default _default;
