#!/usr/bin/env node

/**
 * Simple Node.js CLI calculator
 * Supported operations:
 *   add   - addition (a + b)
 *   sub   - subtraction (a - b)
 *   mul   - multiplication (a * b)
 *   div   - division (a / b)
 *   mod   - modulo / remainder (a % b)
 *   pow   - exponentiation (base ** exponent)
 *   sqrt  - square root (single operand)
 *
 * Usage:
 *   node src/calculator.js add 2 3
 *   node src/calculator.js sub 5 2
 *   node src/calculator.js mul 4 3
 *   node src/calculator.js div 8 2
 *   node src/calculator.js mod 7 3
 *   node src/calculator.js pow 2 8
 *   node src/calculator.js sqrt 9
 */

const calc = require('./lib/calculator');

function printHelp() {
  console.log('\nUsage: node src/calculator.js <command> <num1> <num2>\n');
  console.log('Commands: add, sub, mul, div, mod, pow, sqrt');
  console.log('\nExamples:');
  console.log('  node src/calculator.js add 2 3    # 5');
  console.log('  node src/calculator.js sub 5 2    # 3');
  console.log('  node src/calculator.js mul 4 3    # 12');
  console.log('  node src/calculator.js div 8 2    # 4');
  console.log('  node src/calculator.js mod 7 3    # 1');
  console.log('  node src/calculator.js pow 2 8    # 256');
  console.log('  node src/calculator.js sqrt 9     # 3\n');
}

if (require.main === module) {
  const [, , cmd, aRaw, bRaw] = process.argv;

  if (!cmd) {
    console.error('Error: Missing command.');
    printHelp();
    process.exit(1);
  }

  const a = aRaw !== undefined ? Number(aRaw) : undefined;
  const b = bRaw !== undefined ? Number(bRaw) : undefined;

  function badOperands() {
    console.error('Error: Operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (cmd) {
      case 'add':
        if (a === undefined || b === undefined) { badOperands(); }
        if (!Number.isFinite(a) || !Number.isFinite(b)) { badOperands(); }
        result = calc.add(a, b);
        break;
      case 'sub':
        if (a === undefined || b === undefined) { badOperands(); }
        if (!Number.isFinite(a) || !Number.isFinite(b)) { badOperands(); }
        result = calc.sub(a, b);
        break;
      case 'mul':
        if (a === undefined || b === undefined) { badOperands(); }
        if (!Number.isFinite(a) || !Number.isFinite(b)) { badOperands(); }
        result = calc.mul(a, b);
        break;
      case 'div':
        if (a === undefined || b === undefined) { badOperands(); }
        if (!Number.isFinite(a) || !Number.isFinite(b)) { badOperands(); }
        result = calc.div(a, b);
        break;
      case 'mod':
      case 'modulo':
        if (a === undefined || b === undefined) { badOperands(); }
        if (!Number.isFinite(a) || !Number.isFinite(b)) { badOperands(); }
        result = calc.modulo(a, b);
        break;
      case 'pow':
      case 'power':
        if (a === undefined || b === undefined) { badOperands(); }
        if (!Number.isFinite(a) || !Number.isFinite(b)) { badOperands(); }
        result = calc.power(a, b);
        break;
      case 'sqrt':
      case 'squareRoot':
        if (a === undefined) { badOperands(); }
        if (!Number.isFinite(a)) { badOperands(); }
        result = calc.squareRoot(a);
        break;
      case 'help':
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
      default:
        console.error(`Error: Unknown command '${cmd}'.`);
        printHelp();
        process.exit(1);
    }
  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }

  console.log(result);
  process.exit(0);
}
