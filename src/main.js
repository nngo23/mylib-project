"use strict";

import * as mylib from "./mylib.js";

const x = 20;
const y = 5;

console.log(`Add result: ${mylib.add(x, y)}`);
console.log(`Subtract result: ${mylib.subtract(x, y)}`);
console.log(`Multiply result: ${mylib.multiply(x, y)}`);
console.log(`Divide result: ${mylib.divide(x, y)}`);

try {
  mylib.divide(x, 0);
} catch (error) {
  console.log(`Caught error: ${error.message}`);
}
