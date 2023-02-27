import { describe, expect, it } from "@jest/globals";
import { isObject } from "../../../utils/helpers/isObject";

describe("isObject", () => {
    it("should return true if value is a plain object", () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ a: 1 })).toBe(true);
    });

    it("should return true if value is an instance of a custom class", () => {
        class MyClass {
            a: number;
            constructor(a: number) {
                this.a = a;
            }
        }
        expect(isObject(new MyClass(42))).toBe(true);
    });

    it("should return false if value is null or undefined", () => {
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
    });

    it("should return false if value is a primitive type", () => {
        expect(isObject("hello")).toBe(false);
        expect(isObject(42)).toBe(false);
        expect(isObject(true)).toBe(false);
    });

    it("should return false if value is an instance of Set or Map", () => {
        const set = new Set([1, 2, 3]);
        const map = new Map([["a", 1], ["b", 2]]);
        expect(isObject(set)).toBe(false);
        expect(isObject(map)).toBe(false);
    });
});