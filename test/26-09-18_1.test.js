const assert = require('assert');
const { describe, it } = require('mocha');

const { spinWordsSol1, spinWordsSol2, spinWordsSol3 } = require('../source/26-09-18_1');

const data = [
  'Stop gninnipS My sdroW',
  'This is a test',
  'This is another test',
  'Hey fellow warriors'
];

const expected = [
  'Stop Spinning My Words',
  'This is a test',
  'This is rehtona test',
  'Hey wollef sroirraw'
];

describe('Test suite 26-09-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(spinWordsSol1(val), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(spinWordsSol2(val), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(spinWordsSol3(val), expected[index]);
      });
    });
  });
});
