const assert = require('assert');
const { describe, it } = require('mocha');

const {
  uniqueInOrderSol1
} = require('../source/09-10-18_1.js');

const data = [
  'AAAABBBCCDAABBB',
  'ABBCcAD',
  [1, 2, 2, 3, 3]
];

const expected = [
  ['A', 'B', 'C', 'D', 'A', 'B'],
  ['A', 'B', 'C', 'c', 'A', 'D'],
  [1, 2, 3]
];

describe('Test suite 09-10-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(uniqueInOrderSol1(val), expected[index]);
      });
    });
  });
});
