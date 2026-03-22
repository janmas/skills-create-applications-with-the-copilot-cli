#!/usr/bin/env node

/**
 * Simple Node.js CLI calculator
 * Supported operations:
 *   add  - addition (a + b)
 *   sub  - subtraction (a - b)
 *   mul  - multiplication (a * b)
 *   div  - division (a / b)
 *
 * Usage:
 *   node src/calculator.js add 2 3
 *   node src/calculator.js sub 5 2
 *   node src/calculator.js mul 4 3
 *   node src/calculator.js div 8 2
 */

const calc = require('./lib/calculator');

function printHelp() {
  console.log('\nUsage: node src/calculator.js <command> <num1> <num2>\n');
  console.log('Commands: add, sub, mul, div');
  console.log('\nExamples:');
  console.log('  node src/calculator.js add 2 3    # 5');
  console.log('  node src/calculator.js sub 5 2    # 3');
  console.log('  node src/calculator.js mul 4 3    # 12');
  console.log('  node src/calculator.js div 8 2    # 4\n');
}

if (require.main === module) {
  const [, , cmd, aRaw, bRaw] = process.argv;

  if (!cmd || !aRaw || !bRaw) {
    console.error('Error: Missing command or operands.');
    printHelp();
    process.exit(1);
  }

  const a = Number(aRaw);
  const b = Number(bRaw);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.error('Error: Operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  switch (cmd) {
    case 'add':
      result = calc.add(a, b);
      break;
    case 'sub':
      result = calc.sub(a, b);
      break;
    case 'mul':
      result = calc.mul(a, b);
      break;
    case 'div':
      try {
        result = calc.div(a, b);
      } catch (e) {
        console.error('Error: Division by zero.');
        process.exit(1);
      }
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

  console.log(result);
  process.exit(0);
}
