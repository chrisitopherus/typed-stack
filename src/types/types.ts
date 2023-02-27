/**
 * Represents a generic function to be used for searching.
 */
export type SearchFn<T> = (item: T) => boolean;

/**
 * Represents a structure than can be searched.
 */

/**
 * Defines the structure of a clone function.
 */
export type CloneFn<T> = (value: T[]) => T[];