import { describe, expect, it } from "@jest/globals";
import { isArray } from "../../../utils/helpers/isArray";


describe("isArray", () => {
	it("should return true if value is an array", () => {
		expect(isArray([])).toBe(true);
		expect(isArray([1, 2, 3])).toBe(true);
		// eslint-disable-next-line @typescript-eslint/no-array-constructor
		expect(isArray(new Array(2, 3, 4))).toBe(true);
	});

	it("should return false if value is not an array", () => {
		expect(isArray(null)).toBe(false);
		expect(isArray(undefined)).toBe(false);
		expect(isArray(42)).toBe(false);
		expect(isArray("hello")).toBe(false);
		expect(isArray({ a: 1, b: 2 })).toBe(false);
	});

	it("should return false for array-like objects", () => {
		const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
		expect(isArray(arrayLike)).toBe(false);
	});
});