/**
 * Checks if a `value` is an `Array`.
 * @param value The value to check.
 * @returns Returns `true` if `value` is an array, else `false`.
 */
export function isArray<T>(value: T | T[]): value is T[]  {
    return value instanceof Array;
}