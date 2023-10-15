/**
 * @module Encrypt
 *
 */
export default interface Type {
	/**
	 * The Encrypt function encrypts data using the AES-GCM algorithm with a given key.
	 *
	 * @param {unknown} Data - The `Data` parameter is the data that you want to encrypt. It
	 * can be of any type, but it will be converted to a JSON string before encryption.
	 *
	 * @param {string} Key - The `Key` parameter is a string that represents the encryption
	 * key used to encrypt the data. It is used to derive a symmetric encryption key that is
	 * compatible with the AES-GCM algorithm.
	 *
	 * @returns The `Encrypt` function returns an object with two properties: `Vector` and
	 * `Data`. `Vector` is a randomly generated 12-byte array used as the initialization vector
	 * for the encryption. `Data` is the encrypted version of the input `Data` using the
	 * AES-GCM encryption algorithm.
	 *
	 */
	(Data: unknown, Key: string): Promise<Data>;
}

import type Data from "../Interface/Data.js";
