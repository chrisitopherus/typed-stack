import { describe, expect, it, jest } from "@jest/globals";
import { Stack } from "../../stack/stack";


describe("Stack", () => {
    describe("constructor", () => {
        it("should initialize an empty Stack if no argument is passed", () => {
            const stack = new Stack();
            expect(stack.count).toBe(0);
        });

        it("should initialize a Stack with the elements of an array in reverse order", () => {
            const stack = new Stack([1, 2, 3]);
            expect(stack.count).toBe(3);
            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(1);
        });
    });

    describe("count", () => {
        it("should return the number of elements in the stack", () => {
            const stack = new Stack([1, 2, 3]);
            expect(stack.count).toBe(3);
            stack.push(4, 5);
            expect(stack.count).toBe(5);
            stack.pop();
            expect(stack.count).toBe(4);
        });
    });

    describe("clone", () => {
        it("should return a copy of the stack", () => {
            const stack = new Stack([1, 2, 3]);
            const clone = stack.clone();
            expect(clone.toArray()).toEqual([1, 2, 3]);
        });
    });

    describe("contains", () => {
        it("should return true if the element is in the stack", () => {
            const stack = new Stack([1, 2, 3]);
            expect(stack.contains(2)).toBe(true);
        });

        it("should return false if the element is not in the stack", () => {
            const stack = new Stack([1, 2, 3]);
            expect(stack.contains(4)).toBe(false);
        });
    });

    describe("peek", () => {
        it("should return the element at the top of the stack without removing it", () => {
            const stack = new Stack([1, 2, 3]);
            expect(stack.peek()).toBe(3);
            expect(stack.count).toBe(3);
        });

        it("should return undefined if the stack is empty", () => {
            const stack = new Stack();
            expect(stack.peek()).toBe(undefined);
        });
    });

    describe("pop", () => {
        it("should remove and return the element at the top of the stack", () => {
            const stack = new Stack([1, 2, 3]);
            expect(stack.pop()).toBe(3);
            expect(stack.count).toBe(2);
            expect(stack.pop()).toBe(2);
            expect(stack.count).toBe(1);
        });

        it("should remove multiple elements from the top of the stack", () => {
            const stack = new Stack([1, 2, 3, 4]);
            expect(stack.pop(2)).toEqual([3, 4]);
            expect(stack.peek()).toBe(2);
            expect(stack.pop(3)).toEqual([1, 2]);
            expect(stack.count).toBe(0);
        });

        it("should return undefined if the stack is empty", () => {
            const stack = new Stack();
            expect(stack.pop()).toBe(undefined);
        });
    });

    describe("push", () => {
        it("should add elements to the top of the stack", () => {
            const stack = new Stack([1, 2, 3]);
            stack.push(4, 5);
            expect(stack.count).toBe(5);
            expect(stack.pop()).toBe(5);
            expect(stack.pop()).toBe(4);
            expect(stack.pop()).toBe(3);
        });
    });

    describe("clear", () => {
        it("should remove all elements from the stack", () => {
            const stack = new Stack([1, 2, 3]);
            stack.clear();
            expect(stack.count).toBe(0);
            expect(stack.pop()).toBe(undefined);
        });
    });

    describe("search", () => {
        it("returns empty array if no element matches the search function", () => {
            const stack = new Stack<number>([1, 2, 3]);
            const result = stack.search((element) => element === 4);
            expect(result).toEqual([]);
        });

        it("returns all elements that match the search function", () => {
            const stack = new Stack<number>([1, 2, 3]);
            let result = stack.search((element) => element % 2 === 0);
            expect(result).toEqual([2]);
            result = stack.search((element) => element > 1);
            expect(result).toEqual([3, 2]);
        });

        it("returns all elements that match the search function for an array of objects", () => {
            const stack = new Stack<{ name: string; age: number }>([
                { name: "Alice", age: 25 },
                { name: "Bob", age: 30 },
                { name: "Charlie", age: 35 },
            ]);
            const result = stack.search((element) => element.age > 25);
            expect(result).toEqual([{ name: "Charlie", age: 35 }, { name: "Bob", age: 30 }]);
        });
    });

    describe("isEmpty", () => {
        it("should return true when stack is empty", () => {
            const stack = new Stack<number>();
            expect(stack.isEmpty()).toBe(true);
        });

        it("should return false when stack is not empty", () => {
            const stack = new Stack<number>();
            stack.push(1);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    describe("moveDown", () => {
        it("should move the last element to the top", () => {
            const stack = new Stack([1, 2, 3, 4]);
            stack.moveDown();
            expect(stack.pop()).toEqual(1);
        });

        it("should move all other elements 1 position down", () => {
            const stack = new Stack([1, 2, 3, 4]);
            stack.moveDown();
            expect(stack.pop()).toEqual(1);
            expect(stack.pop()).toEqual(4);
            expect(stack.pop()).toEqual(3);
            expect(stack.pop()).toEqual(2);
            expect(stack.isEmpty()).toBe(true);
        });

        it("should do nothing if the stack is empty", () => {
            const emptyStack = new Stack<number>();
            emptyStack.moveDown();
            expect(emptyStack.isEmpty()).toBe(true);
        });
    });

    describe("moveUp", () => {
        it("should move the first element to the bottom and all other 1 position up", () => {
            const stack = new Stack([1, 2, 3, 4]);
            stack.moveUp();
            expect(stack.pop()).toEqual(3);
            expect(stack.pop()).toEqual(2);
            expect(stack.pop()).toEqual(1);
            expect(stack.pop()).toEqual(4);
        });

        it("should do nothing if the stack is empty", () => {
            const emptyStack = new Stack<number>();
            emptyStack.moveUp();
            expect(emptyStack.isEmpty()).toBe(true);
        });

        it("should also work after calling it multiple times", () => {
            const stack = new Stack([1, 2, 3, 4]);
            stack.moveUp();
            stack.moveUp();
            expect(stack.pop()).toEqual(2);
            expect(stack.pop()).toEqual(1);
            expect(stack.pop()).toEqual(4);
            expect(stack.pop()).toEqual(3);
        });
    });

    describe("rotate", () => {
        it("should rotate the stack with 2 elements", () => {
            const stack = new Stack<number>([1, 2]);
            stack.rotate();
            expect(stack.pop()).toBe(1);
            expect(stack.pop()).toBe(2);
        });

        it("should rotate the stack with 4 elements", () => {
            const stack = new Stack<number>([1, 2, 3, 4]);
            stack.rotate();
            expect(stack.pop()).toBe(1);
            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(4);
        });

        it("should not rotate an empty stack", () => {
            const stack = new Stack<number>();
            stack.rotate();
            expect(stack.isEmpty()).toBe(true);
        });

        it("should not change the stack with only one element", () => {
            const stack = new Stack<number>([1]);
            stack.rotate();
            expect(stack.peek()).toBe(1);
        });
    });

    describe("swap", () => {
        it("should do nothing if stack contains less than 2 elements", () => {
            const stack = new Stack<number>([1]);
            stack.swap();
            expect(stack.pop()).toEqual(1);
            expect(stack.isEmpty()).toBe(true);
        });

        it("should swap the top two elements of the stack", () => {
            const stack = new Stack<number>([1, 2, 3, 4]);
            stack.swap();
            expect(stack.pop()).toEqual(3);
            expect(stack.pop()).toEqual(4);
            expect(stack.pop()).toEqual(2);
            expect(stack.pop()).toEqual(1);
            expect(stack.isEmpty()).toBe(true);
        });

        it("should swap the top two elements without changing the reference", () => {
            const arr1 = [1];
            const arr2 = [2];
            const stack = new Stack([arr1, arr2]);
            stack.swap();
            expect(stack.pop()).toBe(arr1);
            expect(stack.pop()).toBe(arr2);
        });
    });

    describe("all", () => {
        it("should return true for stack containing only truthy elements", () => {
            const stack = new Stack([1, "hello", true]);
            expect(stack.all()).toBe(true);
        });

        it("should return false for stack containing at least one falsy element", () => {
            const stack = new Stack([1, "", true]);
            expect(stack.all()).toBe(false);
        });

        it("should return false for empty stack", () => {
            const stack = new Stack();
            expect(stack.all()).toBe(false);
        });
    });

    describe("any", () => {
        it("returns false when the stack is empty", () => {
            const stack = new Stack<number>();
            const result = stack.any();
            expect(result).toBe(false);
        });

        it("returns true when at least one element is truthy", () => {
            const stack = new Stack<number>([0, 0, 0, 0, 1]);
            const result = stack.any();
            expect(result).toBe(true);
        });

        it("returns false when all elements are falsy", () => {
            const stack = new Stack([0, null, false, undefined]);
            const result = stack.any();
            expect(result).toBe(false);
        });
    });

    describe("extend", () => {
        it("should add items from iterable to the top of the Stack", () => {
            const stack = new Stack<number>();
            const iterable = [1, 2, 3];

            stack.extend(iterable);

            expect(stack.count).toEqual(iterable.length);

            let i = iterable.length - 1;
            while (i >= 0) {
                expect(stack.pop()).toEqual(iterable[i]);
                i--;
            }
        });

        it("should not add any items to an empty Stack", () => {
            const stack = new Stack<number>();
            const iterable: number[] = [];

            stack.extend(iterable);

            expect(stack.count).toEqual(0);
            expect(stack.pop()).toBeUndefined();
        });
    });

    describe("find", () => {
        it("should return the first element in the Stack where the predicate is true", () => {
            const stack = new Stack<number>([1, 2, 3, 4, 5]);
            const predicateFn = (element: number) => element > 3;
            const result = stack.find(predicateFn);
            expect(result).toBe(5);
        });

        it("should return undefined if no elements match the predicate", () => {
            const stack = new Stack<number>([1, 2, 3, 4, 5]);
            const predicateFn = (element: number) => element > 5;
            const result = stack.find(predicateFn);
            expect(result).toBeUndefined();
        });
    });

    describe("findLast", () => {
        it("should return the last element in the Stack where the predicate is true", () => {
            const stack = new Stack<number>([1, 2, 3, 4, 5]);
            const predicateFn = (element: number) => element > 3;
            const result = stack.findLast(predicateFn);
            expect(result).toBe(4);
        });

        it("should return undefined if no elements match the predicate", () => {
            const stack = new Stack<number>([1, 2, 3, 4, 5]);
            const predicateFn = (element: number) => element > 5;
            const result = stack.findLast(predicateFn);
            expect(result).toBeUndefined();
        });
    });

    describe("forEach", () => {
        it("should call the specified function for each element in the stack", () => {
            const stack = new Stack<number>([1, 2, 3]);
            const callback = jest.fn();
            stack.forEach(callback);

            expect(callback).toHaveBeenCalledTimes(3);
        });

        it("should pass the correct index to the callback", () => {
            const stack = new Stack<number>([1, 2, 3]);
            const callback = jest.fn();
            stack.forEach(callback);

            expect(callback).toHaveBeenCalledTimes(3);
            expect(callback).toHaveBeenNthCalledWith(1, 3, 0);
            expect(callback).toHaveBeenNthCalledWith(2, 2, 1);
            expect(callback).toHaveBeenNthCalledWith(3, 1, 2);
        });

        it("should not call the specified function if the stack is empty", () => {
            const stack = new Stack<number>();
            const callback = jest.fn();
            stack.forEach(callback);

            expect(callback).not.toHaveBeenCalled();
        });
    });

    describe("shuffle", () => {
        it("should shuffle the elements in the stack", () => {
            const stack = new Stack<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const originalElements = stack.clone().toArray();
            stack.shuffle();
            const shuffledElements = stack.clone().toArray();
            expect(originalElements).not.toEqual(shuffledElements);
        });

        it("should not change the length of the stack", () => {
            const stack = new Stack<number>([1, 2, 3, 4, 5]);
            const originalLength = stack.count;
            stack.shuffle();
            const shuffledLength = stack.count;
            expect(originalLength).toEqual(shuffledLength);
        });

        it("should shuffle the elements in a different order each time it is called", () => {
            const stack = new Stack<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const clone = stack.clone();
            stack.shuffle();
            const shuffledElements1 = stack.clone().toArray();
            stack.shuffle();
            const shuffledElements2 = stack.clone().toArray();
            expect(shuffledElements1).not.toEqual(shuffledElements2);
            expect(shuffledElements1.sort()).toEqual(clone.toArray().sort());
            expect(shuffledElements2.sort()).toEqual(clone.toArray().sort());
        });
    });

    describe("toArray", () => {
        it("should return an empty array if the stack is empty", () => {
            const stack = new Stack<number>();
            const result = stack.toArray();

            expect(result).toEqual([]);
        });

        it("should return an array containing all the elements of the stack", () => {
            const stack = new Stack<number>();
            stack.push(1, 2, 3, 4, 5);
            const result = stack.toArray();

            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

        it("should return a new array that does not share the same reference as the internal array", () => {
            const stack = new Stack<number>();
            stack.push(1, 2, 3, 4, 5);
            const result = stack.toArray();

            expect(result).toEqual([1, 2, 3, 4, 5]);
            expect(result).not.toBe(stack["_elements"]);
        });

        it("should return a clone of the internal array", () => {
            const stack = new Stack<object>();
            const obj1 = { id: 1, name: "John" };
            const obj2 = { id: 2, name: "Jane" };
            stack.push(obj1, obj2);
            const result = stack.toArray();

            expect(result).toEqual([{ id: 1, name: "John" }, { id: 2, name: "Jane" }]);
            expect(result[0]).not.toBe(obj2);
            expect(result[1]).not.toBe(obj1);
        });
    });
});