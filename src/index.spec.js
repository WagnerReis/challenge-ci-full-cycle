const { calculateAverage } = require('./index');

describe('calculateAverage', () => {
  test('should calculate average of positive numbers', () => {
      expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should calculate average of negative numbers', () => {
      expect(calculateAverage([-1, -2, -3])).toBe(-2);
  });

  test('should handle empty array', () => {
      expect(calculateAverage([])).toBe(0);
  });

  test('should handle non-array input', () => {
      expect(calculateAverage('not an array')).toBe(null);
      expect(calculateAverage(123)).toBe(null);
  });

  test('should handle array with mixed types', () => {
      expect(calculateAverage([1, 'two', 3, 'four', 5])).toBe(3);
  });
});