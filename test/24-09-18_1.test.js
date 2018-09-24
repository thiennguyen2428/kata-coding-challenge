const assert = require('assert');
const {
  describe,
  it
} = require('mocha');

const {
  findOddSol1,
  findOddSol2
} = require('../source/24-09-18_1');

const data = [
  [1, 1, 2, 2, 3],
  [1],
  [5, 6, 7, 8, 9, 10, 10, 8, 9, 6, 5],
  [2, 8, 1, 8, 8, 8, 1],
  [4, 4, 4, 4, 4, 5, 7, 7, 5],
  [1, 2, 2, 1, 3, 7, 3, 9, 8, 7, 8, 8, 8, 8, 8],
  [2, 2, 1],
  [7]
];

const expected = [3, 1, 7, 2, 4, 9, 1, 7];

describe('Test Suite 24-01-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(findOddSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(findOddSol2(val), expected[index]);
      });
    });
  });
});
