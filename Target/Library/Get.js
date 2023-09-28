"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = void 0;
/**
 * The Get function recursively converts an object into a Map data structure.
 * @param Instance - The `Instance` parameter is an object that contains key-value pairs. The keys can
 * be any string, and the values can be of any type.
 * @returns a Map object containing the key-value pairs from the input object.
 */
var Get = function (Instance) {
    if (typeof Instance === "string") {
        return Instance;
    }
    var _Map = new Map();
    if (typeof Instance === "object") {
        for (var Key in Instance) {
            if (Object.prototype.hasOwnProperty.call(Instance, Key)) {
                if (typeof Instance[Key] === "object" &&
                    !Array.isArray(Instance[Key])) {
                    _Map.set(Key, (0, exports.Get)(Instance[Key]));
                }
                else {
                    _Map.set(Key, Instance[Key]);
                }
            }
        }
    }
    return _Map;
};
exports.Get = Get;
exports.default = exports.Get;
