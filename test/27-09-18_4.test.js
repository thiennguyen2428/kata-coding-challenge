const assert = require('assert');
const { describe, it } = require('mocha');

const { alphabetPositionSol1, alphabetPositionSol2 } = require('../source/27-09-18_4');

const data = [
  'The sunset sets at twelve o\' clock.',
  'The narwhal bacons at midnight.'
];

const expected = [
  '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11',
  '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
];

describe('Test suite 27-09-18_4', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(alphabetPositionSol1(val), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(alphabetPositionSol2(val), expected[index]);
      });
    });
  });
});
