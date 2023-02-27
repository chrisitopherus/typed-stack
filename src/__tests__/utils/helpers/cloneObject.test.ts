import { describe, expect, it } from "@jest/globals";
import { cloneObject } from "../../../utils/helpers/cloneObject";

describe("cloneObject", () => {

    it("should return a the value if its no object", () => {
        const arr = [1, 2];
        const num = 1;
        const str = "";
        const bint = BigInt(1);
        const symbol = Symbol(1);
        const undef = undefined;
        const nul = null;
        const bool = true;

        expect(cloneObject(arr)).toEqual(arr);
        expect(cloneObject(arr)).toBe(arr);
        expect(cloneObject(num)).toEqual(num);
        expect(cloneObject(str)).toEqual(str);
        expect(cloneObject(bint)).toEqual(bint);
        expect(cloneObject(symbol)).toEqual(symbol);
        expect(cloneObject(undef)).toEqual(undef);
        expect(cloneObject(nul)).toEqual(nul);
        expect(cloneObject(bool)).toEqual(bool);
    });

    it("should return a new object with the same properties and values", () => {
        const obj = { foo: "bar", baz: 42 };
        const clonedObj = cloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj); // check for reference equality
    });

    it("should clone nested objects", () => {
        const obj = { foo: { bar: { baz: "qux" } } };
        const clonedObj = cloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj); // check for reference equality
        expect(clonedObj.foo).not.toBe(obj.foo); // check for reference equality of nested objects
        expect(clonedObj.foo.bar).not.toBe(obj.foo.bar); // check for reference equality of deeply nested objects
    });

    it("should clone arrays in the object", () => {
        const obj = { arr: [1, "hello", true, { foo: "bar" }] };
        const clonedObj = cloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj); // check for reference equality
        expect(clonedObj.arr).not.toBe(obj.arr); // check for reference equality of arrays
        expect(clonedObj.arr[3]).not.toBe(obj.arr[3]); // check for reference equality of objects inside arrays
    });

    it("should clone primitive values in the object", () => {
        const obj = { foo: "bar", baz: 42 };
        const clonedObj = cloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj); // check for reference equality
    });

    it("should not clone maps or sets in the object", () => {
        const set = new Set([1, 2, 2, 3, 4, 5, 5]);
        const map = new Map([[1, "one"],[2, "two"],[3, "three"]]);
        const objSet = { foo: set };
        const objMap = { foo: map };
        const clonedSetObj = cloneObject(objSet);
        const clonedMapObj = cloneObject(objMap);

        expect(clonedSetObj.foo).toEqual(objSet.foo);
        expect(clonedSetObj.foo).toBe(objSet.foo);
        expect(clonedMapObj.foo).toEqual(objMap.foo);
        expect(clonedMapObj.foo).toBe(objMap.foo);
    });
});