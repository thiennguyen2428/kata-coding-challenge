const assert = require('assert');
const { describe, it } = require('mocha');

const { removeNbSol1, removeNbSol2 } = require('../source/29-09-18_1');

const data = [
  26,
  100
];

const expected = [
  [[15, 21], [21, 15]],
  []
];

describe('Test suite 29-09-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(removeNbSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(removeNbSol2(val), expected[index]);
      });
    });
  });
});
