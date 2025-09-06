import { expect, it, describe } from "vitest";
import { sum } from "./math";

describe("sum function", () => {
  it("adds 0 + 2 to equal 2", () => {
    expect(sum(0, 2)).toBe(2);
  });

  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("adds 3 + 2 to equal 5", () => {
    expect(sum(3, 2)).toBe(5);
  });

  it("adds 4 + 2 to equal 6", () => {
    expect(sum(4, 2)).toBe(6);
  });

  it("adds 2 + 5 to equal 7", () => {
    expect(sum(2, 5)).toBe(7);
  });

  it("adds 2 + 6 to equal 8", () => {
    expect(sum(2, 6)).toBe(8);
  });
});
