import { describe, expect, it } from "@jest/globals";
import { cloneArray } from "../../../utils/helpers/cloneArray";

describe("cloneArray", () => {
    it("should return a new array with the same values", () => {
        const arr = [1, "hello", true, { foo: "bar" }];
        const clonedArr = cloneArray(arr);

        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr); // check for reference equality
    });

    it("should clone nested arrays", () => {
        const arr = [1, [2, [3]]];
        const clonedArr = cloneArray(arr);

        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr); // check for reference equality
        expect(clonedArr[1]).not.toBe(arr[1]); // check for reference equality of nested arrays
        expect((clonedArr[1] as number[])[1]).not.toBe((arr[1] as number[])[1]); // check for reference equality of deeply nested arrays
    });

    it("should clone objects in the array", () => {
        const arr = [{ foo: "bar" }, { baz: 42 }];
        const clonedArr = cloneArray(arr);

        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr); // check for reference equality
        expect(clonedArr[0]).not.toBe(arr[0]); // check for reference equality of objects
        expect(clonedArr[1]).not.toBe(arr[1]); // check for reference equality of objects
    });

    it("should clone primitive values in the array", () => {
        const arr = [1, "hello", true, null];
        const clonedArr = cloneArray(arr);

        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr); // check for reference equality
    });

    it("should not clone maps or sets in the array", () => {
        const set = new Set([1, 2, 2, 3, 4, 5, 5]);
        const map = new Map([[1, "one"],[2, "two"],[3, "three"]]);
        const arrSet = [set];
        const arrMap = [map];
        const clonedSetArray = cloneArray(arrSet);
        const clonedMapArray = cloneArray(arrMap);

        expect(clonedSetArray[0]).toEqual(arrSet[0]);
        expect(clonedSetArray[0]).toBe(arrSet[0]);
        expect(clonedMapArray[0]).toEqual(arrMap[0]);
        expect(clonedMapArray[0]).toBe(arrMap[0]);
    });
});