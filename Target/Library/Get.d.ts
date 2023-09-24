/**
 * The Get function recursively converts an object into a Map data structure.
 * @param Instance - The `Instance` parameter is an object that contains key-value pairs. The keys can
 * be any string, and the values can be of any type.
 * @returns a Map object containing the key-value pairs from the input object.
 */
export declare const Get: (Instance: {
    [key: string]: any;
}) => Map<any, any>;
export default Get;
