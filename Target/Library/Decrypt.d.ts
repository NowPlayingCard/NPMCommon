/**
 * The function `Decrypt` is a TypeScript function that uses the Web Crypto API to
 * decrypt data using the AES-GCM algorithm.
 * @param {Uint8Array} Data - Data is the encrypted data that needs to be decrypted. It
 * is of type Uint8Array, which is an array-like object representing an array of 8-bit
 * unsigned integers.
 * @param {string} Key - The `Key` parameter is a string that represents the encryption
 * key used for decrypting the data. It should be a valid key value for the specified
 * encryption algorithm (AES-GCM).
 * @param {Uint8Array} IV - The IV (Initialization Vector) is a random value used in the
 * encryption process to ensure that the same plaintext does not produce the same
 * ciphertext. It is a fixed-size random or pseudo-random value that is typically
 * required for symmetric encryption algorithms like AES-GCM (Advanced Encryption
 * Standard - Galois/Counter Mode
 */
declare const _default: (Data: Uint8Array, Key: string, IV: Uint8Array) => Promise<Uint8Array>;
export default _default;
