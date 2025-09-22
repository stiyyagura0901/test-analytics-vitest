import { expect, it, describe } from "vitest";
import { sum } from "./math";

describe("sum", () => {
  it.each([
    [0, 2, 2],
    [1, 2, 3],
    [2, 2, 4],
    [3, 2, 5],
    [4, 2, 6],
    [2, 5, 7],
    [2, 6, 8],
  ])("adds %d + %d = %d", (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
  });
});
