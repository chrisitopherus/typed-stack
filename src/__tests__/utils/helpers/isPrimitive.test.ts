import { describe, expect, it } from "@jest/globals";
import { isPrimitive } from "../../../utils/helpers/isPrimitive";

describe("isPrimitive", () => {
    it("should return true if value is a number", () => {
        expect(isPrimitive(42)).toBe(true);
        expect(isPrimitive(0)).toBe(true);
        expect(isPrimitive(-42)).toBe(true);
    });

    it("should return true if value is a bigint", () => {
        expect(isPrimitive(BigInt(42))).toBe(true);
    });

    it("should return true if value is a boolean", () => {
        expect(isPrimitive(true)).toBe(true);
        expect(isPrimitive(false)).toBe(true);
    });

    it("should return true if value is a symbol", () => {
        const sym = Symbol();
        expect(isPrimitive(sym)).toBe(true);
    });

    it("should return true if value is a string", () => {
        expect(isPrimitive("hello")).toBe(true);
        expect(isPrimitive("")).toBe(true);
    });

    it("should return true if value is undefined or null", () => {
        expect(isPrimitive(undefined)).toBe(true);
        expect(isPrimitive(null)).toBe(true);
    });

    it("should return false if value is an object", () => {
        expect(isPrimitive({})).toBe(false);
        expect(isPrimitive([])).toBe(false);
    });

    it("should return false if value is a function", () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        expect(isPrimitive(() => { })).toBe(false);
    });
});