const assert = require('assert');
const { describe, it } = require('mocha');

const { diophantineEquaSol1, diophantineEquaSol2 } = require('../source/01-10-18_1');

const data = [
  5,
  12,
  13,
  16,
  9000000041
];

const expected = [
  [[3, 1]],
  [[4, 1]],
  [[7, 3]],
  [[4, 0]],
  [[4500000021, 2250000010], [155172429, 77586200]]
];

describe('Test suite 01-10-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(diophantineEquaSol1(val), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(diophantineEquaSol2(val), expected[index]);
      });
    });
  });
});
