const helpers = require('./project-1');

const {
  multiplyByTen,
  lessThanNinety,
  getRemainder,
  isEven,
  square,
  roundUp,
  combineNames,
} = helpers;

describe('project-1 helpers', () => {
  describe('multiplyByTen fn', () => {
    it('returns a number 10x the inputted number', () => {
      expect(multiplyByTen(10)).toBe(100);
    });
    it('returns a number 10x a negative inputted number', () => {
      expect(multiplyByTen(-10)).toBe(-100);
    });
  });

  describe('lessThanNinety fn', () => {
    it('returns true for a number less than 90', () => {
      expect(lessThanNinety(80)).toBe(true);
    });
    it('returns false for a number greater than 90', () => {
      expect(lessThanNinety(99)).toBe(false);
    });
  });

  describe('getRemainder fn', () => {
    it('returns 0 for a number with no remainder', () => {
      expect(getRemainder(4,2)).toBe(0);
    });
    it('returns correct remainder for a number remainder', () => {
        expect(getRemainder(10,3)).toBe(1);
      });
  });

  describe('isEven fn', () => {
    it('returns true for an even number', () => {
      expect(isEven(2)).toBe(true);
    });
    it('returns false for an even number', () => {
        expect(isEven(3)).toBe(false);
      });
  });

  describe('square fn', () => {
    it('returns correct square for positive number', () => {
      expect(square(4)).toBe(16);
    });
    it('returns correct square for negative number', () => {
        expect(square(-3)).toBe(9);
      });
  });

  describe('roundUp fn', () => {
    it('rounds decimal correctly', () => {
        expect(roundUp(0.2)).toBe(1);
      });
      it('rounds negative decimal correctly', () => {
        expect(roundUp(-0.5)).toBe(-0);
      });
  });

  describe('combineNames fn', () => {
    it('correctly combines names with space between', () => {
        expect(combineNames('lambda', 'school')).toBe('lambda school');
      });
      it('throws an error if only one argument is provided', () => {
        expect(() => combineNames('lambda')).toThrow();
      });
      it('throws an error if any argumentis a number', () => {
        expect(() => combineNames('lambda', 1)).toThrow();
      });
  });
});
