import assert from "assert";
import { sum } from "./index.js";

describe("Sum", function () {
  describe("with 2 parameters", function () {
    it("should return the sum of the 2 numbers", function () {
      assert.equal(sum(1, 2), 3);
    });
  });
  describe("with 3 parameters", function () {
    it("should return the sum of the 3 numbers", function () {
      assert.equal(sum(1, 2, 3), 6);
    });
  });
});
