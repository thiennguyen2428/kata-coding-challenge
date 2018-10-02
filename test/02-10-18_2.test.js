const assert = require('assert');
const { describe, it } = require('mocha');

const { nbYearSol1, nbYearSol2 } = require('../source/02-10-18_2');

const data = [
  {
    p0: 1500, percent: 5, aug: 100, p: 5000
  },
  {
    p0: 1500000, percent: 2.5, aug: 10000, p: 2000000
  },
  {
    p0: 1500000, percent: 0.25, aug: 1000, p: 2000000
  }
];

const expected = [
  15,
  10,
  94
];

describe('Test suite 02-10-18_2', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      const {
        p0, percent, aug, p
      } = val;

      it(`should return ${expected[index]}`, () => {
        assert.equal(nbYearSol1(p0, percent, aug, p), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      const {
        p0, percent, aug, p
      } = val;

      it(`should return ${expected[index]}`, () => {
        assert.equal(nbYearSol2(p0, percent, aug, p), expected[index]);
      });
    });
  });
});
