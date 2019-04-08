const arrayFunctions = require('./arrays');

const { map, filter,flatten } = arrayFunctions;

describe('arrays helpers', () => {
  describe('map fn', () => {
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    it('return an array with 1 added to each number', () => {
      expect(map([1, 2, 3, 4], num => num + 1)).toEqual([2, 3, 4, 5]);
    });
  });

  describe('filter fn', () => {
    it('return a selected number from a list', () => {
      expect(
        filter([1, 2, 3, 4], item => {
          if (item === 1) {
            return item;
          }
        }),
      ).toEqual([1]);
    });
  });

  describe('flatten fn', () => {
    it('flatten a nested array', () => {
      expect(flatten([1,2,3,[4,5,6]])).toEqual([1,2,3,4,5,6]);
    });
    it('flatten a nested-nested array', () => {
        expect(flatten([1,2,3,[4,[5,6]]])).toEqual([1,2,3,4,5,6]);
      });
  });
});
