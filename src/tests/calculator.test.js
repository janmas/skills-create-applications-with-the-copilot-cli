const calc = require('../lib/calculator');

describe('Calculator basic operations', () => {
  test('add: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('sub: 10 - 4 = 6', () => {
    expect(calc.sub(10, 4)).toBe(6);
  });

  test('mul: 45 * 2 = 90', () => {
    expect(calc.mul(45, 2)).toBe(90);
  });

  test('div: 20 / 5 = 4', () => {
    expect(calc.div(20, 5)).toBe(4);
  });

  test('div by zero throws', () => {
    expect(() => calc.div(1, 0)).toThrow('Division by zero');
  });

  // Additional edge cases
  test('operations with negative numbers', () => {
    expect(calc.add(-2, -3)).toBe(-5);
    expect(calc.sub(-2, 3)).toBe(-5);
    expect(calc.mul(-4, 2)).toBe(-8);
    expect(calc.div(-8, 2)).toBe(-4);
  });

  test('operations with decimals', () => {
    expect(calc.add(1.5, 2.25)).toBeCloseTo(3.75);
    expect(calc.div(7.5, 2.5)).toBeCloseTo(3);
  });

  // New tests for extended operations: modulo, power, square root
  describe('Extended operations', () => {
    test('modulo: 5 % 2 = 1', () => {
      expect(calc.modulo(5, 2)).toBe(1);
    });

    test('modulo with negative dividend: -5 % 2', () => {
      expect(calc.modulo(-5, 2)).toBe(-1);
    });

    test('modulo by zero throws', () => {
      expect(() => calc.modulo(1, 0)).toThrow('Division by zero');
    });

    test('power: 2 ^ 3 = 8', () => {
      expect(calc.power(2, 3)).toBe(8);
    });

    test('power with fractional exponent: 4 ^ 0.5 = 2', () => {
      expect(calc.power(4, 0.5)).toBeCloseTo(2);
    });

    test('power with negative exponent: 2 ^ -2 = 0.25', () => {
      expect(calc.power(2, -2)).toBeCloseTo(0.25);
    });

    test('squareRoot: sqrt(16) = 4', () => {
      expect(calc.squareRoot(16)).toBe(4);
    });

    test('squareRoot of zero is zero', () => {
      expect(calc.squareRoot(0)).toBe(0);
    });

    test('squareRoot of negative number throws', () => {
      expect(() => calc.squareRoot(-9)).toThrow('Square root of negative number');
    });
  });
});
