/**
 * Calculator library with basic operations.
 * Provides pure functions so logic can be unit tested.
 * Supported operations:
 *   add  - addition (a + b)
 *   sub  - subtraction (a - b)
 *   mul  - multiplication (a * b)
 *   div  - division (a / b) - throws on divide by zero
 */

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { add, sub, mul, div };
