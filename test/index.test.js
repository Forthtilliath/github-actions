import assert from "assert";
import { sum } from "../index.js";

describe("Sum", () => {
  describe("with 2 parameters", () => {
    it("should return the sum of the 2 numbers", () => {
      assert.equal(sum(1, 2), 3);
    });
  });
  describe("with 3 parameters", () => {
    it("should return the sum of the 3 numbers", () => {
      assert.equal(sum(1, 2, 3), 6);
    });
  });
});
