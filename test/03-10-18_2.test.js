const assert = require('assert');
const { describe, it } = require('mocha');

const { sumIntervalSol1, sumIntervalSol2 } = require('../source/03-10-18_2');

const data = [
  [[1, 5]],
  [[6, 10], [1, 5]],
  [[1, 4], [7, 10], [3, 5]],
  [[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]
];

const expected = [
  4,
  8,
  7,
  19
];

describe('Test suite 03-10-18_2', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(sumIntervalSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(sumIntervalSol2(val), expected[index]);
      });
    });
  });
});
