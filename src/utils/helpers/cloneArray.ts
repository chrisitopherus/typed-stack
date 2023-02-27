import { cloneObject } from "./cloneObject";
import { isArray } from "./isArray";
import { isObject } from "./isObject";
import { isPrimitive } from "./isPrimitive";

/**
 * Clones an array recursively.
 * @param array The array to clone.
 * @returns The cloned array.
 */
export function cloneArray<T>(array: T[]): T[] {
    const clonedArray = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (isArray(item)) {
            clonedArray[i] = cloneArray(item);
        } else if (isObject(item)) {
            clonedArray[i] = cloneObject(item);
        } else if (isPrimitive(item)) {
            clonedArray[i] = item;
        } else { // not implemented type encountered...
            clonedArray[i] = item;
        }
    }

    return clonedArray;
}