"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Decrypt_js_1 = require("./Decrypt.js");
var node_buffer_1 = require("node:buffer");
/**
 * The function `Access` is a TypeScript function that decrypts and retrieves a specific
 * view from a stored data object using a provided key and unique identifier.
 * @param Key - The `Key` parameter is of type `JsonWebKey["k"]`, which means it expects
 * a value that is a string representing a JSON Web Key. This key will be used for
 * decryption.
 * @param Identifier - The Identifier parameter is a unique identifier generated using the
 * `randomUUID` function from the `Crypto` object. It is used to retrieve data from the
 * KV namespace.
 * @param {KVNamespace} KV - KV is an instance of the KVNamespace class, which is used
 * to interact with the Workers KV storage. It provides methods for reading, writing,
 * and deleting data from the KV storage.
 * @param {string} View - The `View` parameter is a string that represents the specific
 * view or property of the decrypted data that you want to access. It is used to
 * retrieve a specific value from the decrypted data object.
 * @returns the value of the property specified by the `View` parameter from the
 * decrypted data object.
 */
exports.default = (function (Key, Identifier, KV, View) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Vector, Data, _b, _c, _d, _e, _f, _g, _Error_1;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _h.trys.push([0, 5, , 6]);
                return [4 /*yield*/, KV.get(Identifier, {
                        type: "json",
                    })];
            case 1:
                _a = (_h.sent()), Vector = _a.Vector, Data = _a.Data;
                _c = (_b = JSON).parse;
                _e = (_d = node_buffer_1.Buffer).from;
                _f = Decrypt_js_1.default;
                return [4 /*yield*/, (0, Uint8ArrayFromObject_js_1.default)(Data)];
            case 2:
                _g = [_h.sent(), Key !== null && Key !== void 0 ? Key : ""];
                return [4 /*yield*/, (0, Uint8ArrayFromObject_js_1.default)(Vector)];
            case 3: return [4 /*yield*/, _f.apply(void 0, _g.concat([_h.sent()]))];
            case 4: return [2 /*return*/, _c.apply(_b, [_e.apply(_d, [_h.sent()]).toString()])[View]];
            case 5:
                _Error_1 = _h.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
