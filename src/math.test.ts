import { it } from "vitest";
import * as assert from "node:assert";
import { sum } from "./math";

Array(5)
  .fill(0)
  .forEach((_, index) => {
    it(`adds ${index} + 2 to equal ${index + 2}`, () => {
      assert.strictEqual(sum(index, 2), index + 2);
    });
  });

it("adds 2 + 5 to equal 7", () => {
  assert.strictEqual(sum(2, 5), 7);
});

it("adds 2 + 6 to equal 8", () => {
  assert.strictEqual(sum(2, 6), 8);
});
