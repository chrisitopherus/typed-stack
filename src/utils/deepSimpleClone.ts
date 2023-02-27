import { cloneArray } from "./helpers/cloneArray";
import { cloneObject } from "./helpers/cloneObject";
import { isArray } from "./helpers/isArray";
import { isObject } from "./helpers/isObject";
import { isPrimitive } from "./helpers/isPrimitive";

/**
 * Recursively clones `value`.
 * 
 * Supported types:
 * - All primitives
 * - object literals - no maps/sets/functions
 * - arrays (not typed arrays)
 * 
 * @param value The value to clone.
 * @returns The cloned value.
 * 
 * @throws TypeError
 * Is thrown if an unsupported type is passed.
 */
export function deepSimpleClone<T>(value: T): T {
    if (isArray(value)) {
        return cloneArray(value) as T;
    } else if (isObject(value)) {
        return cloneObject(value);
    } else if (isPrimitive(value)) {
        return value;
    }

    throw new TypeError("Unsupported type encountered!");
}