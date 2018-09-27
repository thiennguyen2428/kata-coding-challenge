const assert = require('assert');
const { describe, it } = require('mocha');

const { pigItSol1, pigItSol2, pigItSol3 } = require('../source/27-09-18_1');

const data = [
  'Pig latin is cool',
  'Hello world !',
  'This is my string',
  'Acta est fabula',
  'Barba non facit philosophum',
  'Errare humanum est',
  'Sic transit gloria mundi',
  'Nunc est bibendum',
  'Morituri nolumus mori',
  'Gutta cavat lapidem',
  'Ultima necat',
  'Panem et circenses',
  'Dura lex sed lex',
  'O tempora o mores !'
];

const expected = [
  'igPay atinlay siay oolcay',
  'elloHay orldway !',
  'hisTay siay ymay tringsay',
  'ctaAay steay abulafay',
  'arbaBay onnay acitfay hilosophumpay',
  'rrareEay umanumhay steay',
  'icSay ransittay loriagay undimay',
  'uncNay steay ibendumbay',
  'orituriMay olumusnay orimay',
  'uttaGay avatcay apidemlay',
  'ltimaUay ecatnay',
  'anemPay teay ircensescay',
  'uraDay exlay edsay exlay',
  'Oay emporatay oay oresmay !'
];

describe('Test suite 27-09-18_1', () => {
  describe('Solution 1', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(pigItSol1(val), expected[index]);
      });
    });
  });
  describe('Solution 2', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(pigItSol2(val), expected[index]);
      });
    });
  });
  describe('Solution 3', () => {
    data.forEach((val, index) => {
      it(`should return ${expected[index]}`, () => {
        assert.equal(pigItSol3(val), expected[index]);
      });
    });
  });
});
