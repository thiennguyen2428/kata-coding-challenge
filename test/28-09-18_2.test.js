const assert = require('assert');
const { describe, it } = require('mocha');
const { recoverSecretSol1 } = require('../source/28-09-18_2');

const data = [
  [['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']]
];

const expected = [
  'whatisup'
];

describe('Test suite 28-09-18_2', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(recoverSecretSol1(val), expected[index]);
      });
    });
  });
});
