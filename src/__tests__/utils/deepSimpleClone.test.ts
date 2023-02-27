import { describe, expect, it } from "@jest/globals";
import { deepSimpleClone } from "../../utils/deepSimpleClone";

describe("deepSimpleClone", () => {
    it("should clone an empty array", () => {
        const arr: unknown[] = [];
        const clonedArr = deepSimpleClone(arr);
        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr);
    });

    it("should clone a one-dimensional array", () => {
        const arr = [1, 2, 3];
        const clonedArr = deepSimpleClone(arr);
        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr);
    });

    it("should clone a multi-dimensional array", () => {
        const arr = [[1, 2], [3, 4]];
        const clonedArr = deepSimpleClone(arr);
        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr);
    });

    it("should clone an empty object", () => {
        const obj = {};
        const clonedObj = deepSimpleClone(obj);
        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
    });

    it("should clone a simple object", () => {
        const obj = { foo: "bar", baz: 123 };
        const clonedObj = deepSimpleClone(obj);
        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
    });

    it("should clone an object with nested objects and arrays", () => {
        const obj = {
            foo: { bar: [1, 2, 3] },
            baz: [{ qux: "quux" }]
        };
        const clonedObj = deepSimpleClone(obj);
        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
        expect(clonedObj.foo).not.toBe(obj.foo);
        expect(clonedObj.foo.bar).not.toBe(obj.foo.bar);
        expect(clonedObj.baz).not.toBe(obj.baz);
        expect(clonedObj.baz[0]).not.toBe(obj.baz[0]);
    });

    it("should clone a string", () => {
        const str = "hello, world!";
        const clonedStr = deepSimpleClone(str);
        expect(clonedStr).toBe(str);
    });

    it("should clone a number", () => {
        const num = 123;
        const clonedNum = deepSimpleClone(num);
        expect(clonedNum).toBe(num);
    });

    it("should clone a boolean", () => {
        const bool = true;
        const clonedBool = deepSimpleClone(bool);
        expect(clonedBool).toBe(bool);
    });

    it("should throw a TypeError for unsupported types", () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        expect(() => deepSimpleClone(() => { })).toThrow(TypeError);
        expect(() => deepSimpleClone(new Map())).toThrow(TypeError);
        expect(() => deepSimpleClone(new Set())).toThrow(TypeError);
    });
});