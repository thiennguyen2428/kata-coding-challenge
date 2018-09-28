const assert = require('assert');
const { describe, it } = require('mocha');
const { sumOfDividedSol1 } = require('../source/28-09-18_1');

const data = [
  [12, 15],
  [15, 21, 24, 30, 45],
  [107, 158, 204, 100, 118, 123, 126, 110, 116, 100],
  [-29804, -4209, -28265, -72769, -31744],
  [173471]
];

const expected = [
  [[2, 12], [3, 27], [5, 15]],
  [[2, 54], [3, 135], [5, 90], [7, 21]],
  [[2, 1032], [3, 453], [5, 310], [7, 126],
    [11, 110], [17, 204], [29, 116], [41, 123],
    [59, 118], [79, 158], [107, 107]],
  [[2, -61548], [3, -4209], [5, -28265],
    [23, -4209], [31, -31744], [53, -72769],
    [61, -4209], [1373, -72769], [5653, -28265], [7451, -29804]],
  [[41, 173471], [4231, 173471]]
];

describe('Test suite 28-09-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(sumOfDividedSol1(val), expected[index]);
      });
    });
  });
});
