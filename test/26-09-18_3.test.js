const assert = require('assert');
const { describe, it } = require('mocha');
const { findOutlierSol1, findOutlierSol2 } = require('../source/26-09-18_3');

const data = [
  [0, 1, 2],
  [1, 2, 3],
  [2, 6, 8, 10, 3],
  [0, 0, 3, 0, 0],
  [1, 1, 0, 1, 1],
  [2, 4, 0, 100, 4, 11, 2602, 36],
  [160, 3, 1719, 19, 11, 13, -21]
];

const expected = [
  1,
  2,
  3,
  3,
  0,
  11,
  160
];

describe('Test suite 26-09-18_3', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(findOutlierSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(findOutlierSol2(val), expected[index]);
      });
    });
  });
});
