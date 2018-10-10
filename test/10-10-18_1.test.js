const assert = require('assert');
const { describe, it } = require('mocha');

const {
  calculateYearSol1,
  calculateYearSol2
} = require('../source/10-10-18_1.js');

const data = [
  [1000, 0.05, 0.18, 1100],
  [1000, 0.01625, 0.18, 1200],
  [1000, 0.05, 0.18, 1000]
];

const expected = [
  3,
  14,
  0
];

describe('Test suite 10-10-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(calculateYearSol1(...val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(calculateYearSol2(...val), expected[index]);
      });
    });
  });
});
