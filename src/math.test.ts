import { expect, it } from "vitest";
import { sum } from "./math";

const cases: Array<[number, number, number]> = [
  [0, 2, 2],
  [1, 2, 3],
  [2, 2, 4],
  [3, 2, 5],
  [4, 2, 6],
  [2, 5, 7],
  [2, 6, 8],
];

cases.forEach(([a, b, expected]) => {
  it(`adds ${a} + ${b} to equal ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});
