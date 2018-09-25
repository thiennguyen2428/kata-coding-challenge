const assert = require('assert');
const { describe, it } = require('mocha');
const { iqTestSol1, iqTestSol2, iqTestSol3 } = require('../source/25-09-18_2');

const data = [
  [2, 4, 7, 8, 10],
  '2 4 7 8 10',
  '1 2 2',
  '1 3 5 7 9 11 12',
  '1 2 1 1',
  '9 8 7'
];

const expected = [
  3,
  3,
  1,
  7,
  2,
  2
];

describe('Test Suite 25-09-18_2', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(iqTestSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(iqTestSol2(val), expected[index]);
      });
    });
  });
  describe('Solution 3', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(iqTestSol3(val), expected[index]);
      });
    });
  });
});
