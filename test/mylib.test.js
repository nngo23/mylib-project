"use strict";

import { expect } from "chai";
import * as mylib from "../src/mylib.js";

describe("mylib", function () {
  before(function () {
    console.log("    [before] Starting mylib tests");
  });

  after(function () {
    console.log("    [after] Finished mylib tests");
  });

  describe("add()", function () {
    it("adds positive numbers", function () {
      expect(mylib.add(1, 6)).to.equal(7);
    });

    it("adds negative numbers", function () {
      expect(mylib.add(-4, -6)).to.equal(-10);
    });

    it("handles decimal numbers", function () {
      expect(mylib.add(0.1, 0.2)).to.be.closeTo(0.3, 1e-9);
    });
  });

  describe("subtract()", function () {
    it("subtracts two numbers", function () {
      expect(mylib.subtract(9, 7)).to.equal(2);
    });

    it("returns a negative result when needed", function () {
      expect(mylib.subtract(5, 12)).to.equal(-7);
    });
  });

  describe("multiply()", function () {
    it("multiplies two numbers", function () {
      expect(mylib.multiply(10, 8)).to.equal(80);
    });

    it("returns zero when one value is zero", function () {
      expect(mylib.multiply(3, 0)).to.equal(0);
    });
  });

  describe("divide()", function () {
    it("divides two numbers", function () {
      expect(mylib.divide(28, 2)).to.equal(14);
    });

    it("handles decimal results", function () {
      expect(mylib.divide(1, 5)).to.equal(0.2);
    });

    it("rejects division by zero", function () {
      expect(() => mylib.divide(5, 0)).to.throw(Error, "ZeroDivision");
    });
  });

  describe("input validation", function () {
    it("rejects non-numeric inputs", function () {
      expect(() => mylib.add("1", 8)).to.throw(TypeError);
      expect(() => mylib.subtract(7, null)).to.throw(TypeError);
      expect(() => mylib.multiply(undefined, 3)).to.throw(TypeError);
      expect(() => mylib.divide(NaN, 4)).to.throw(TypeError);
    });
  });
});
