const funcs = require('./project-2');

const {
  getBiggest,
  getArrayLength,
  contains,
  averageTestScore,
  largestNumber,
} = funcs;

describe('project-2 helpers', () => {
  describe('getBiggest fn', () => {
    it('return biggest of two numbers', () => {
      expect(getBiggest(1, 3)).toBe(3);
    });
    it('return a number if both numbers supplied are the same', () => {
      expect(getBiggest(2, 2)).toBe(2);
    });
    it('return most positive number of two negatives', () => {
      expect(getBiggest(-8, -2)).toBe(-2);
    });
  });

  describe('getArrayLength fn', () => {
    it('return correct array length of flat array', () => {
      expect(getArrayLength([1, 2, 3, 4])).toBe(4);
    });
    it('return zero for an empty array', () => {
      expect(getArrayLength([])).toBe(0);
    });
    it('return correct array length for nested array', () => {
      expect(getArrayLength([[1, 2, 3], 3, 4, [5, 6, 7]])).toBe(4);
    });
  });

  describe('contains fn', () => {
    it('return true for a match', () => {
      expect(contains(['penguin', 'duck'], 'duck')).toBe(true);
    });
    it('return false for a non-match', () => {
      expect(contains([], 'duck')).toBe(false);
    });
  });

  describe('averageTestScore fn', () => {
    it('return correct average for a list of 3 scores', () => {
      expect(averageTestScore([5,10,15])).toBe(10);
    });
    it('return zero for a list of zero scores', () => {
      expect(averageTestScore([0,0,0])).toBe(0);
    });
  });

  describe('largestNumber fn', () => {
    it('return largest number for integers', () => {
      expect(largestNumber([2,46,88])).toBe(88);
    });
    it('return largest number for integers where largest is not last', () => {
      expect(largestNumber([88,46,22])).toBe(88);
    });
    it('return largest number for decimals', () => {
        expect(largestNumber([8.8,4.6,2.2])).toBe(8.8);
      });
      it('return largest number for negative integers', () => {
        expect(largestNumber([-88, -46, -22])).toBe(-22);
      });
  });

});
