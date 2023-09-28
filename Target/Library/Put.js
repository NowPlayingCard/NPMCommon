"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Put = void 0;
/**
 * The function converts a nested Map object into a nested plain JavaScript object.
 * @param {unknown} Instance - The `Instance` parameter is of type `unknown`, which means it can be any
 * type. It is used to represent an instance of a class or an object.
 * @returns an object representation of the input `Instance`. If `Instance` is an instance of `Map`,
 * the function recursively converts it into an object by iterating over its entries. If an entry value
 * is also an instance of `Map`, it is converted recursively as well. The resulting object is then
 * returned. If `Instance` is not an instance of `Map`, it is returned as is
 */
var Put = function (Instance) {
    if (Instance instanceof Map) {
        var _Value = {};
        for (var _i = 0, _a = Instance.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], Key = _b[0], Value = _b[1];
            if (Value instanceof Map) {
                _Value[Key] = (0, exports.Put)(Value);
            }
            else {
                _Value[Key] = Value;
            }
        }
        return _Value;
    }
    return Instance;
};
exports.Put = Put;
exports.default = exports.Put;
