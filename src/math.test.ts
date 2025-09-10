import { expect, it } from "vitest";
import { sum } from "./math";

it("adds 0 + 2 to equal 2", () => {
  expect(sum(0, 2)).toBe(2);
});

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

it("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("adds 2 + 5 to equal 7", () => {
  expect(sum(2, 5)).toBe(7);
});

it("adds 2 + 6 to equal 8", () => {
  expect(sum(2, 6)).toBe(8);
});
