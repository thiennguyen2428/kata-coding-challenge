const assert = require('assert');
const { describe, it } = require('mocha');

const {
  simplifyRegexSol1
} = require('../source/09-10-18_2.js');

const data = [
  '/aaaaaaaaaa/',
  '/ababababab/',
  '/abcdabcdabcdabcd/',
  '/aa/',
  '/ZzZzZzZzZzZz/'
];

const expected = [
  '/a{10}/',
  '/(ab){5}/',
  '/(abcd){4}/',
  '/aa/',
  '/(Zz){6}/'
];

describe('Test suite 09-10-18_2', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(simplifyRegexSol1(val), expected[index]);
      });
    });
  });
});
