const assert = require('assert');
const { describe, it } = require('mocha');
const {
  sumMultiples3A5Sol1,
  sumMultiples3A5Sol2,
  sumMultiples3A5Sol3
} = require('../source/25-09-18_5');

const data = [
  10,
  16,
  20,
  25,
  30
];

const expected = [
  23, // 3 5 6 9
  60, // 3 5 6 9 10 12 15
  78, // 3 5 6 9 10 12 15 18
  143, // ................ 20 21 24
  195 // ....................... 24 25 27
];

describe('Test Suite 25-09-18_5', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(sumMultiples3A5Sol1(val), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(sumMultiples3A5Sol2(val), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(sumMultiples3A5Sol3(val), expected[index]);
      });
    });
  });
});
