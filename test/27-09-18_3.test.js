const assert = require('assert');
const { describe, it } = require('mocha');

const { narcissisticSol1 } = require('../source/27-09-18_3');

const data = [
  7,
  12,
  13,
  153,
  371,
  1634
];

const expected = [
  true,
  false,
  false,
  true,
  true,
  true
];

describe('Test suite 27-09-18_3', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(narcissisticSol1(val), expected[index]);
      });
    });
  });
});
