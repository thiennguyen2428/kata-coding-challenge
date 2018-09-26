const assert = require('assert');
const { describe, it } = require('mocha');

const { digPowSol1, digPowSol2 } = require('../source/26-09-18_5');

const data1 = [
  89,
  92,
  695,
  46288
];

const data2 = [
  1,
  1,
  2,
  3
];

const expected = [
  1,
  -1,
  2,
  51
];

describe('Test suite 26-09-18_5', () => {
  describe('Solution 1', () => {
    data1.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(digPowSol1(val, data2[index]), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data1.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(digPowSol2(val, data2[index]), expected[index]);
      });
    });
  });
});
