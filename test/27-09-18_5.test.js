const assert = require('assert');
const { describe, it } = require('mocha');

const { nextBiggerSol1 } = require('../source/27-09-18_5');

const data = [
  12,
  513,
  2017,
  414,
  144,
  9447806370373
];

const expected = [
  21,
  531,
  2071,
  441,
  414,
  9447806370733
];

describe('Test suite 27-09-18_5', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(nextBiggerSol1(val), expected[index]);
      });
    });
  });
});
