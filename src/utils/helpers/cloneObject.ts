import { isObject } from "./isObject";
import { isArray } from "./isArray";
import { cloneArray } from "./cloneArray";
import { isPrimitive } from "./isPrimitive";

/**
 * Clones an object literal recursively.
 * 
 * When passed a non object literal type, the same value as passed is returned.
 * @param object Object to clone.
 * @returns The cloned object.
 */
export function cloneObject<T>(object: T): T {
    if (!isObject(object)) {
        return object;
    }

    const clonedObject = { ...object } as Record<string, unknown>;
    for (const tuple of Object.entries(object)) {
        const value = tuple[1];
        if (isArray(value)) {
            clonedObject[tuple[0]] = cloneArray(value);
        } else if (isObject(value)) {
            clonedObject[tuple[0]] = cloneObject(value);
        } else if (isPrimitive(value)) {
            clonedObject[tuple[0]] = value;
        } else { // not implemented type encountered...
            clonedObject[tuple[0]] = value;
        }
    }

    return clonedObject as T;
} 