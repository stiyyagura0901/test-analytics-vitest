import { expect, it } from "vitest";
import { sum } from "./math";

it.each([
  [0, 2, 2],
  [1, 2, 3],
  [2, 2, 4],
  [3, 2, 5],
  [4, 2, 6],
])("adds %d + %d = %d", (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});

it("adds 2 + 5 to equal 7", () => {
  expect(sum(2, 5)).toBe(7);
});

it("adds 2 + 6 to equal 8", () => {
  expect(sum(2, 6)).toBe(8);
});
