import { SearchFn } from "./types";

export interface ISearchable<T> {
    /**
     * Calls a specified function with every item of the structure.
     * - To match an item - return `true`
     * - To not match an item - return `false`
     * @public
     * @param searchFn Search function that is called with every item in the structure. 
     * @returns All matched items of the structure.
     */
    search(searchFn: SearchFn<T>): T[]
}

export interface IStack<T> extends ISearchable<T> {
    /**
     * Gets the number of elements contained in the Stack.
     */
    get count(): number;

    /**
     * Determines if all the elements in the Stack are truthy values.
     */
    all(): boolean;

    /**
     * Determines if at least 1 of the elements in the Stack is a truthy value.
     */
    any(): boolean;

    /**
     * Removes all elements from the Stack.
     */
    clear(): void;

    /**
     * Creates a clone of the Stack.
     */
    clone(): IStack<T>;

    /**
     * Determines whether an element is in the Stack.
     * @param element The element to locate in the Stack.
     */
    contains(element: T): boolean;

    /**
     * Adds items from an iterable to the top of the Stack.
     */
    extend(iterable: Iterable<T>): void;

    /**
     * Returns the first element in the Stack where the predicate is `true`, and `undefined` otherwise.
     */
    find(predicateFn: (element: T) => boolean): T | undefined;

    /**
     * Returns the last element in the Stack that satisfies the specified condition.
     */
    findLast(predicateFn: (element: T) => boolean): T | undefined;

    /**
     * Calls the specified callback function on each element in the Stack.
     * @param callbackFn A function that accepts up to two arguments.
     * `forEach` calls the callbackfn function one time for each element in the Stack.
     */
    forEach(callbackFn: (element: T, index: number) => void): void;

    /**
     * Determines whether the Stack is empty.
     */
    isEmpty(): boolean;

    /**
     * Moves the elements 1 position down.
     * 
     * @description
     * Lets say our stack looks like this:
     * [1]
     * [2]
     * [3]
     * [4]
     * ------
     * After moving down it looks like this:
     * [4]
     * [1]
     * [2]
     * [3]
     */
    moveDown(): void;

    /**
     * Moves the elements 1 position up.
     * 
     * @description
     * Lets say our stack looks like this:
     * [1]
     * [2]
     * [3]
     * [4]
     * ------
     * After moving up it looks like this:
     * [2]
     * [3]
     * [4]
     * [1]
     */
    moveUp(): void;

    /**
     * Returns the element at the top of the Stack without removing it.
     */
    peek(): T | undefined;

    /**
     * Removes and returns the element at the top of the Stack.
     */
    pop(amount?: number): T | T[] | undefined;

    /**
     * Pushes one or more elements at the top of the Stack.
     * @param elements The elements to push onto the Stack.
     */
    push(...elements: T[]): void;

    /**
     * Rotates the stack.
     * 
     * @description
     * Lets say our stack looks like this:
     * [1]
     * [2]
     * [3]
     * [4]
     * ------
     * After rotating it will look like this:
     * [4]
     * [3]
     * [2]
     * [1]
     */
    rotate(): void;

    /**
     * Shuffles the items in the stack randomly
     */
    shuffle(): void;

    /**
     * Swaps the two elements on top of the stack.
     * 
     * @description
     * Lets say our stack looks like this:
     * [1]
     * [2]
     * [3]
     * [4]
     * ------
     * After swapping it will look like this:
     * [2]
     * [1]
     * [3]
     * [4]
     */
    swap(): void;

    /**
     * Returns a new array containing the elements of the Stack.
     */
    toArray(): T[];
}