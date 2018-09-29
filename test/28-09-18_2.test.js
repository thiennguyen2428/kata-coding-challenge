const assert = require('assert');
const { describe, it } = require('mocha');
const { recoverSecretSol1, recoverSecretSol2 } = require('../source/28-09-18_2');

const data = [
  [['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']],
  [['t', 's', 'f'],
    ['a', 's', 'u'],
    ['m', 'a', 'f'],
    ['a', 'i', 'n'],
    ['s', 'u', 'n'],
    ['m', 'f', 'u'],
    ['a', 't', 'h'],
    ['t', 'h', 'i'],
    ['h', 'i', 'f'],
    ['m', 'h', 'f'],
    ['a', 'u', 'n'],
    ['m', 'a', 't'],
    ['f', 'u', 'n'],
    ['h', 's', 'n'],
    ['a', 'i', 's'],
    ['m', 's', 'n'],
    ['m', 's', 'u']],
  [['g', 'a', 's'],
    ['o', 'g', 's'],
    ['c', 'n', 't'],
    ['c', 'o', 'n'],
    ['a', 't', 's'],
    ['g', 'r', 't'],
    ['r', 't', 's'],
    ['c', 'r', 'a'],
    ['g', 'a', 't'],
    ['n', 'g', 's'],
    ['o', 'a', 's']],
  [['l', 'e', 'd'],
    ['o', 'e', 'd'],
    ['o', 'l', 'e'],
    ['o', 'v', 'e'],
    ['s', 'o', 'l'],
    ['s', 'e', 'd'],
    ['s', 'l', 'e'],
    ['v', 'e', 'd'],
    ['o', 'l', 'v'],
    ['l', 'v', 'd']]
];

const expected = [
  'whatisup',
  'mathisfun',
  'congrats',
  'solved'
];


// Additional: Remember that all JS variable are pass-by-referece into function
// That means when you wanna change something called 'object' inside the array, think carefully
// Especially when working with multiple-dimensional array or Array<Object>
// If you wanna pass-by-value array. We can use Array.prototype.slice() method
describe('Test suite 28-09-18_2', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(recoverSecretSol1(val), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.deepEqual(recoverSecretSol2(val), expected[index]);
      });
    });
  });
});
