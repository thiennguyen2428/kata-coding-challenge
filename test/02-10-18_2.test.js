const assert = require('assert');
const { describe, it } = require('mocha');

const { nbYearSol1, nbYearSol2 } = require('../source/02-10-18_2');

const data = [
  [1500, 5, 100, 5000],
  [1500000, 2.5, 10000, 2000000],
  [1500000, 0.25, 1000, 2000000]
];

const expected = [
  15,
  10,
  94
];

// Apply ES6 spread operator with Array 
describe('Test suite 02-10-18_2', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(nbYearSol1(...val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(nbYearSol2(...val), expected[index]);
      });
    });
  });
});
