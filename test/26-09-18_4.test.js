const assert = require('assert');
const { describe, it } = require('mocha');

const { findMissingLetterSol1, findMissingLetterSol2 } = require('../source/26-09-18_4');

const data = [
  ['a', 'b', 'c', 'd', 'f'],
  ['O', 'Q', 'R', 'S']
];

const expected = [
  'e',
  'P'
];

describe('Test suite 26-09-18_4', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(findMissingLetterSol1(val), expected[index]);
      });
    });
  });

  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(findMissingLetterSol2(val), expected[index]);
      });
    });
  });
});
