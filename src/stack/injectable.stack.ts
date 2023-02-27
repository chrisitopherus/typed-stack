import { CloneFn } from "../types/types";
import { deepSimpleClone } from "../utils/deepSimpleClone";
import { Stack } from "./stack";

/**
 * Represents a Stack.
 * - This Stack implementation provides the posibility to pass a dependency to deepclone structures.
 * By default it is using {@link deepSimpleClone} but if there are any issues or someone
 * wishes to use something else, this class is the way to go. It must fulfill the type: {@link CloneFn}
 * @public
 * 
 * @description
 * A stack is a linear data structure that follows the "last in, first out" (LIFO) principle.
 * 
 * This means that the last item that was added to the stack is the first one to be removed.
 * 
 * A good analogy for a stack is a stack of plates, where you can only add or remove the top plate.
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
export class InjectableStack<T> extends Stack<T> {
    /**
     * Used for cloning the elements on the Stack.
     * @private
     */
    private _cloneFn: CloneFn<T>;

    /**
     * Initializes a new instance of the {@link Stack} class that contains elements copied from the optional specified list.
     * @public
     * @param array List of elements to be pushed on the stack.
     * @param cloneDependency Optional dependency injection. Is used to clone structures.
     * 
     * @example
     * ```
     * let stack = new InjectableStack<number>(); // using deepSimpleClone by default
     * stack = new InjectableStack<{names: string[]}>([], deepSimpleClone) // dependency injection
     * ```
     */
    constructor(array?: T[], cloneDependency: CloneFn<T> = deepSimpleClone) {
        super(array);
        this._cloneFn = cloneDependency;
    }

    /**
     * Creates a clone of the Stack.
     * @public
     * @returns The stack elements as an array.
     */
    public clone() {
        return new Stack(this._cloneFn(this._elements));
    }

    public toArray() {
        return this._cloneFn(this._elements);
    }
}