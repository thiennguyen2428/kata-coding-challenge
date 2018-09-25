const assert = require('assert');
const { describe, it } = require('mocha');
const { likesSol1, likesSol2 } = require('../source/25-09-18_1');

const data = [
  [],
  ['Alex'],
  ['Alex', 'Jacob'],
  ['Alex', 'Jacob', 'Mark'],
  ['Alex', 'Jacob', 'Mark', 'Max'],
  ['Alex', 'Jacob', 'Mark', 'Max', 'June'],
  ['Alex', 'Jacob', 'Mark', 'Max', 'June', 'September', 'December']
];

const expected = [
  'no one likes this',
  'Alex likes this',
  'Alex and Jacob like this',
  'Alex, Jacob and Mark like this',
  'Alex, Jacob and 2 others like this',
  'Alex, Jacob and 3 others like this',
  'Alex, Jacob and 5 others like this'
];

describe('Test Suite 25-09-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(likesSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(likesSol2(val), expected[index]);
      });
    });
  });
});
