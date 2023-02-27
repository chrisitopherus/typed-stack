import { IStack } from "../types/interfaces";
import { SearchFn } from "../types/types";
import { deepSimpleClone } from "../utils/deepSimpleClone";

/**
 * Represents a Stack.
 * 
 * The `clone()` method internally calls the {@link deepSimpleClone} function, which can clone object literals, primitives and arrays.
 * If you wish to use another clone function checkout {@link InjectableStack}.
 * @public
 * 
 * @description
 * A stack is a linear data structure that follows the "last in, first out" (LIFO) principle.
 * 
 * This means that the last item that was added to the stack is the first one to be removed.
 * 
 * A good analogy for a stack is a stack of plates, where you can only add or remove the top plate.
 * 
 * 
 * @example
 * ```
 * const stack = new Stack<number>();
 * stack.push(1,2,3,4,5);
 * stack.clone(); // [5,4,3,2,1]
 * stack.pop(); // 5
 * stack.contains(5); // false
 * stack.count // 4
 * stack.peek() // 4
 * stack.clear()
 * stack.count // 0
 * ```
 */
export class Stack<T> implements IStack<T> {
    /**
     * Represents the elements on the Stack.
     * @protected
     */
    protected _elements: T[] = [];

    /**
     * Initializes a new instance of the {@link Stack} class that contains elements copied from the optional specified list.
     * @public
     * @param array List of elements to be pushed on the stack.
     * 
     * @example
     * ```
     * const stack = new Stack<number>();
     * ```
     */
    constructor(array?: T[]) {
        if (array) this._elements = array.map(data => data);
    }

    /**
     * Gets the number of elements contained in the Stack.
     * @public
     */
    public get count() {
        return this._elements.length;
    }

    /**
     * Determines if all the elements in the Stack are truthy values.
     * @public
     * @returns `true`, if all elements in the Stack are truthy; otherwise, `false`.
     */
    public all() {
        if (this.count === 0) return false;
        for (let i = 0; i < this._elements.length; i++) {
            if (!this._elements[i]) return false;
        }

        return true;
    }

    /**
     * Determines if at least 1 of the elements in the Stack is a truthy value.
     * @public
     * @returns `true`, if at least 1 elements is truthy; otherwise, `false`.
     */
    public any() {
        if (this.count === 0) return false;
        for (let i = 0; i < this._elements.length; i++) {
            if (this._elements[i]) return true;
        }

        return false;
    }

    /**
     * Removes all elements from the Stack.
     * @public
     */
    public clear() {
        this._elements = [];
    }

    /**
     * Creates a clone of the Stack.
     * @public
     * @returns A new Stack with the cloned elements.
     */
    public clone() {
        return new Stack(deepSimpleClone(this._elements));
    }

    /**
     * Determines whether an element is in the Stack.
     * @public
     * @param element The element to locate in the Stack.
     * @returns `true`, if element is found in the Stack; otherwise, `false`.
     */
    public contains(element: T) {
        return this._elements.includes(element);
    }

    /**
     * Adds items from an iterable to the top of the Stack.
     * @public
     * @param iterable An iterable from which the items should be pushed on top of the Stack.
     */
    public extend(iterable: Iterable<T>): void {
        this.push(...iterable);
    }

    /**
     * Returns the first element in the Stack where the predicate is `true`, and `undefined` otherwise.
     * @public
     * @param predicateFn `find` calls the `predicateFn` once for each element of the Stack until it finds one where the `predicateFn` returns true. Otherwise, find returns undefined.
     * @returns The found element of the Stack or `undefined`.
     */
    public find(predicateFn: (element: T, index: number) => boolean) {
        const start = this.count - 1;
        for (let i = start; i >= 0; i--) {
            const element = this._elements[i];
            if (predicateFn(element, start - i)) return element;
        }

        return undefined;
    }

    /**
     * Returns the last element in the Stack where the predicate is `true`, and `undefined` otherwise.
     * @public
     * @param predicateFn `find` calls the `predicateFn` once for each element of the Stack.
     * @returns The found element of the Stack or `undefined`.
     */
    public findLast(predicateFn: (element: T, index: number) => boolean) {
        let foundElement;
        const start = this.count - 1;
        for (let i = start; i >= 0; i--) {
            const element = this._elements[i];
            if (predicateFn(element, start - i)) foundElement = element;
        }

        return foundElement;
    }

    /**
     * Calls the specified calbback for each element in the Stack.
     * @public
     * @param callbackFn A function that accepts up to two arguments. `forEach` calls the `callbackFn` one time for each element in the Stack.
     */
    public forEach(callbackFn: (element: T, index: number) => void) {
        const start = this.count - 1;
        for (let i = start; i >= 0; i--) callbackFn(this._elements[i], start - i);
    }

    /**
     * Determines whether the Stack is empty.
     * @public
     * @returns `true`, if the Stack is empty; otherwise, `false`. 
     */
    public isEmpty() {
        return this.count === 0;
    }

    /**
     * Moves the elements 1 position down.
     * @public
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
    public moveDown() {
        const lastElement = this._elements.shift();
        if (lastElement) this._elements.push(lastElement);
    }

    /**
     * Moves the elements 1 position up.
     * @public
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
    public moveUp() {
        const firstElement = this._elements.pop();
        if (firstElement) this._elements.unshift(firstElement);
    }

    /**
     * Returns the element at the top of the Stack without removing it.
     * @public
     * @returns The element at the top of the Stack.
     */
    public peek() {
        return this._elements[this.count - 1];
    }

    /**
     * Removes and returns the element at the top of the Stack.
     * @public
     * @returns The element removed from the top of the Stack.
     */
    public pop(): T | undefined
    /**
     * Removes and returns the element at the top of the Stack.
     * @public
     * @param amount The amount of elements to pop from the top of the Stack.
     * @returns The element removed from the top of the Stack.
     */
    public pop(amount: number): T[]
    public pop(amount?: number) {
        if (!amount) return this._elements.pop();
        if (amount > this.count) amount = this.count;
        return this._elements.splice(this.count - amount);
    }

    /**
     * Pushes one or more elements at the top of the Stack.
     * @public
     * @param elements The elements to push onto the Stack.
     */
    public push(...elements: T[]) {
        elements.forEach(element => this._elements.push(element));
    }

    /**
     * Rotates the stack.
     * @public
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
    public rotate(): void {
        this._elements = this._elements.map((_, i, elements) => elements[elements.length - 1 - i]);
    }

    /**
     * Calls a specified function with every element in the Stack.
     * - To match an element - return `true`
     * - To not match an element - return `false`
     * @public
     * @param searchFn Search function that is called with every element in the Stack. 
     * @returns All matched elements of the Stack.
     */
    public search(searchFn: SearchFn<T>): T[] {
        const found: T[] = [];
        const start = this.count - 1;
        for (let i = start; i >= 0; i--) {
            const element = this._elements[i];
            if (searchFn(element)) {
                found.push(element);
            }
        }

        return found;
    }

    /**
     * Shuffles the items in the stack randomly.
     * @public
     * @description
     * Uses the `Fisher–Yates shuffle` internally.
     */
    public shuffle() {
        for (let i = this._elements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._elements[i], this._elements[j]] = [this._elements[j], this._elements[i]];
        }
    }

    /**
     * Swaps the two elements on top of the stack.
     * @public
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
    public swap(): void {
        if (this.count < 2) return;
        [this._elements[this.count - 1], this._elements[this.count - 2]] =
            [this._elements[this.count - 2], this._elements[this.count - 1]];
    }

    /**
     * Returns a new array containing the elements of the Stack.
     * @public
     * @returns An array with the cloned elements from the Stack.
     */
    public toArray() {
        return deepSimpleClone(this._elements);
    }
}