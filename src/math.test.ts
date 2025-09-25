import { expect, it } from "vitest";
import { sum } from "./math";

const cases = [
  { a: 0, b: 2, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 2, expected: 4 },
  { a: 3, b: 2, expected: 5 },
  { a: 4, b: 2, expected: 6 },
  { a: 2, b: 5, expected: 7 },
  { a: 2, b: 6, expected: 8 },
];

cases.forEach(({ a, b, expected }) => {
  it(`sum(${a}, ${b}) === ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});
