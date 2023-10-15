/**
 * @module Put
 *
 */
export default interface Type {
    /**
     * The function converts a nested Map object into a nested plain JavaScript object.
     *
     * @param Instance - The `Instance` parameter is of type `unknown`, which means it can be any
     * type. It is used to represent an instance of a class or an object.
     *
     * @returns an object representation of the input `Instance`. If `Instance` is an instance of `Map`,
     * the function recursively converts it into an object by iterating over its entries. If an entry value
     * is also an instance of `Map`, it is converted recursively as well. The resulting object is then
     * returned. If `Instance` is not an instance of `Map`, it is returned as is
     *
     */
    (Instance: unknown): unknown;
}
