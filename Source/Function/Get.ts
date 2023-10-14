/**
 * The Get function recursively converts an object into a Map data structure.
 * @param Instance - The `Instance` parameter is an object that contains key-value pairs. The keys can
 * be any string, and the values can be of any type.
 * @returns a Map object containing the key-value pairs from the input object.
 */
export const _Function = (Instance: {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}) => {
	if (typeof Instance === "string") {
		return Instance;
	}

	const _Map = new Map();

	if (typeof Instance === "object") {
		for (const Key in Instance) {
			if (Object.prototype.hasOwnProperty.call(Instance, Key)) {
				if (
					typeof Instance[Key] === "object" &&
					!Array.isArray(Instance[Key])
				) {
					_Map.set(Key, _Function(Instance[Key]));
				} else {
					_Map.set(Key, Instance[Key]);
				}
			}
		}
	}

	return _Map;
};

export default _Function;
