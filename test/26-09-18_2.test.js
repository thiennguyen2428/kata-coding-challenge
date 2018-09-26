const assert = require('assert');
const { describe, it } = require('mocha');

const { deleteNthSol1, deleteNthSol2 } = require('../source/26-09-18_2');

const data1 = [
  [20, 37, 20, 21],
  [1, 1, 3, 3, 7, 2, 2, 2, 2],
  [32, 23, 30, 23, 29, 29, 30, 30, 29, 30, 23, 30, 23, 29, 30, 23, 30, 23]
];

const data2 = [
  1,
  3,
  4
];

const expected = [
  [20, 37, 21],
  [1, 1, 3, 3, 7, 2, 2, 2],
  [32, 23, 30, 23, 29, 29, 30, 30, 29, 30, 23, 23, 29]
];

describe('Test suite 26-09-18_2', () => {
  describe('Solution 1', () => {
    data1.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(deleteNthSol1(val, data2[index]), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data1.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(deleteNthSol2(val, data2[index]), expected[index]);
      });
    });
  });
});
