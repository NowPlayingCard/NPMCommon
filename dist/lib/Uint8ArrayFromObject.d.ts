export interface Uint8ArrayObject {
    [key: number]: number;
}
export interface DataObject {
    iv: Uint8ArrayObject;
    data: Uint8ArrayObject;
}
declare const _default: (obj: Uint8ArrayObject) => Promise<Uint8Array>;
export default _default;
