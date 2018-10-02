const assert = require('assert');
const { describe, it } = require('mocha');

const {
  binaryArrayToNumberSol1,
  binaryArrayToNumberSol2,
  binaryArrayToNumberSol3
} = require('../source/02-10-18_1');

const data = [
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 0, 1, 1]
];

const expected = [
  1,
  2,
  5,
  9,
  2,
  6,
  15,
  11
];

describe('Test suite 02-10-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(binaryArrayToNumberSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(binaryArrayToNumberSol2(val), expected[index]);
      });
    });
  });
  describe('Solution 3', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(binaryArrayToNumberSol3(val), expected[index]);
      });
    });
  });
});
