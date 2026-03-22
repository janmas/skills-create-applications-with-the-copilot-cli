/**
 * Calculator library with basic operations.
 * Provides pure functions so logic can be unit tested.
 * Supported operations:
 *   add         - addition (a + b)
 *   sub         - subtraction (a - b)
 *   mul         - multiplication (a * b)
 *   div         - division (a / b) - throws on divide by zero
 *   modulo      - remainder (a % b) - throws on divide by zero
 *   power       - exponentiation (base ** exponent)
 *   squareRoot  - square root (Math.sqrt), throws on negative input
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

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot };
