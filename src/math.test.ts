import { expect, it } from "vitest";
import { sum } from "./math";

Array(5)
  .fill(0)
  .forEach((_, index) => {
    it(`adds ${index} + 2 to equal ${index + 2}`, () => {
      expect(sum(index, 2)).toBe(index + 2);
    });
  });

it("adds 2 + 5 to equal 7", () => {
  const isFlaky = Math.random() > 0.5;
  expect(sum(2, 5)).toBe(isFlaky ? 100 : 7);
});

it("adds 2 + 6 to equal 8", () => {
  const isFlaky = Math.random() > 0.5;
  expect(sum(2, 6)).toBe(isFlaky ? 100 : 8);
});
