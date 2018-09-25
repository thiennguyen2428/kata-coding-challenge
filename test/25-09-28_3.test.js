const assert = require('assert');
const { describe, it } = require('mocha');
const { longestConsecSol1, longestConsecSol2, longestConsecSol3 } = require('../source/25-09-18_3');

const data1 = [
  ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'],
  ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
  [],
  ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
  ['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'],
  ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'],
  ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'],
  ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'],
  ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz']
];

const data2 = [
  2,
  1,
  3,
  2,
  2,
  -2,
  3,
  15,
  0
];

const expected = [
  'abigailtheta',
  'oocccffuucccjjjkkkjyyyeehh',
  '',
  'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck',
  'wlwsasphmxxowiaxujylentrklctozmymu',
  '',
  'ixoyx3452zzzzzzzzzzzz',
  '',
  ''
];

describe('Test Suite 25-09-18_3', () => {
  describe('Solution 1', () => {
    data1.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(longestConsecSol1(val, data2[index]), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data1.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(longestConsecSol2(val, data2[index]), expected[index]);
      });
    });
  });
  describe('Solution 3', () => {
    data1.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(longestConsecSol3(val, data2[index]), expected[index]);
      });
    });
  });
});
