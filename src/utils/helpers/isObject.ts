/**
 * Checks if a `value` is an `Object`.
 * @param value The value to check.
 * @returns Returns `true` if `value` is an object, else `false`.
 */
export function isObject<T>(value: T): value is T extends Record<string, unknown> ? T : never {
    const type = typeof value;
    return (value !== null && type === "object" && !(value instanceof Array)) &&
        (!(value instanceof Set)
        && !(value instanceof Map));
}