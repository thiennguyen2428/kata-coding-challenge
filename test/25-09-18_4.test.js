const assert = require('assert');
const { describe, it } = require('mocha');

const {
  sumTwoSmallestNumbersSol1,
  sumTwoSmallestNumbersSol2
} = require('../source/25-09-18_4');

const data = [
  [19, 5, 42, 2, 77],
  [10, 343445353, 3453445, 3453545353453],
  [5, 8, 12, 19, 22],
  [15, 28, 4, 2, 43],
  [3, 87, 45, 12, 7],
  [23, 71, 33, 82, 1],
  [52, 76, 14, 12, 4]
];

const expected = [
  7,
  3453455,
  13,
  6,
  10,
  24,
  16
];

describe('Test Suite 25-09-18_4', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(sumTwoSmallestNumbersSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(sumTwoSmallestNumbersSol2(val), expected[index]);
      });
    });
  });
  // describe('Solution 3', () => {
  //   data.forEach((val, index) => {
  //     it(`should return ${expected[index]}`, () => {
  //       assert.equal(sumTwoSmallestNumbersSol1(val), expected[index]);
  //     });
  //   });
  // });
});
