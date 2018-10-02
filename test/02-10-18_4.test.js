const assert = require('assert');
const { describe, it } = require('mocha');

const { rgbSol1 } = require('../source/02-10-18_4');

const data = [
  [255, 255, 255],
  [255, 255, 300],
  [0, 0, 0],
  [148, 0, 211]
];

const expected = [
  'FFFFFF',
  'FFFFFF',
  '000000',
  '9400D3'
];

// Apply ES6 spread operator with Array 
describe('Test suite 02-10-18_4', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(rgbSol1(...val), expected[index]);
      });
    });
  });
});
