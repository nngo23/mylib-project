/**
 * @file mylib.js
 * @description A basic math utility containing addition, subtraction,
 * multiplication, and division functions with input validation.
 */

"use strict";

/**
 * Confirms that the provided values are finite numbers.
 * @param {*} x - First value.
 * @param {*} y - Second value.
 * @throws {TypeError} If either value is invalid.
 * @private
 */
function checkInputs(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new TypeError("Please provide two finite numbers");
  }
}

/**
 * Adds two numbers.
 * @param {number} x - First value.
 * @param {number} y - Second value.
 * @returns {number} The calculated sum.
 */
function add(x, y) {
  checkInputs(x, y);
  return x + y;
}

/**
 * Subtracts one number from another.
 * @param {number} x - Number to start with.
 * @param {number} y - Number to subtract.
 * @returns {number} The calculated difference.
 */
function subtract(x, y) {
  checkInputs(x, y);
  return x - y;
}

/**
 * Multiplies two numbers.
 * @param {number} x - First value.
 * @param {number} y - Second value.
 * @returns {number} The calculated product.
 */
function multiply(x, y) {
  checkInputs(x, y);
  return x * y;
}

/**
 * Divides one number by another.
 * @param {number} x - Number being divided.
 * @param {number} y - Divisor.
 * @returns {number} The calculated quotient.
 * @throws {Error} If the divisor is zero.
 */
function divide(x, y) {
  checkInputs(x, y);

  if (y === 0) {
    throw new Error("ZeroDivision: cannot divide by zero");
  }

  return x / y;
}

export { add, subtract, multiply, divide };
