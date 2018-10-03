const assert = require('assert');
const { describe, it } = require('mocha');

const { mergeLongestSol1, mergeLongestSol2 } = require('../source/03-10-18_1');

const data = [
  ['aretheyhere', 'yestheyarehere'],
  ['loopingisfunbutdangerous', 'lessdangerousthancoding'],
  ['inmanylanguages', 'theresapairoffunctions']
];

const expected = [
  'aehrsty',
  'abcdefghilnoprstu',
  'acefghilmnoprstuy'
];

describe('Test suite 03-10-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(mergeLongestSol1(...val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(mergeLongestSol2(...val), expected[index]);
      });
    });
  });
});
