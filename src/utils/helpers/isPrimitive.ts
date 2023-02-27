/**
 * Checks if a `value` is a `primitive`.
 * @param value The value to check.
 * @returns Returns `true` if `value` is a primitive, else `false`.
 */
export function isPrimitive(value: unknown): boolean {
    const type = typeof value;
    return type === "number"
        || type === "bigint"
        || type === "boolean"
        || type === "symbol"
        || type === "string"
        || type === "undefined"
        || value === null;
}