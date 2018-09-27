const assert = require('assert');
const { describe, it } = require('mocha');

const { orderSol1, orderSol2 } = require('../source/27-09-18_2');

const data = [
  'is2 Thi1s T4est 3a',
  '4of Fo1r pe6ople g3ood th5e the2',
  ''
];

const expected = [
  'Thi1s is2 3a T4est',
  'Fo1r the2 g3ood 4of th5e pe6ople',
  ''
];

describe('Test suite 27-09-18_2', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(orderSol1(val), expected[index]);
      });
    });
  });

  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(orderSol2(val), expected[index]);
      });
    });
  });
});
