const assert = require('assert');
const { describe, it } = require('mocha');

const {
  listNameSol1,
  listNameSol2,
  listNameSol3,
  listNameSol4
} = require('../source/02-10-18_3');

const data = [
  [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }],
  [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }],
  [{ name: 'Bart' }, { name: 'Lisa' }],
  [{ name: 'Bart' }],
  []
];

const expected = [
  'Bart, Lisa, Maggie, Homer & Marge',
  'Bart, Lisa & Maggie',
  'Bart & Lisa',
  'Bart',
  ''
];

describe('Test suite 02-10-18_3', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(listNameSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(listNameSol2(val), expected[index]);
      });
    });
  });
  describe('Solution 3', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(listNameSol3(val), expected[index]);
      });
    });
  });
  describe('Solution 4', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(listNameSol4(val), expected[index]);
      });
    });
  });
});
