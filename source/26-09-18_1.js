/**
 * @description Write a function that takes in a string of one or more words,
 *  and returns the same string, but with all five or more letter words reversed 
 * (Just like the name of this Kata).Strings passed in will consist of only letters and spaces. 
 * Spaces will be included only when more than one word is present.
 * Example: 
 * Hey fellow warriors -> Hey wollef sroirraw
 * Stop gninnipS My sdroW! -> Stop Spinning My Words
 */

// Solution 1 Using Javascript method: split, join for string; map, reverse for array
const spinWordsSol1 = (str) => {
  const arrStr = str.split(' ');
  const arrTmp = arrStr.map((val) => {
    if (val.length > 4) {
      return val.split('').reverse().join('');
    }

    return val;
  });

  return arrTmp.join(' ');
};

// Solution 2: Using for Loop to reverse every single element that can be reversed
const spinWordsSol2 = (str) => {
  const arrStr = str.split(' ');

  for (let i = 0; i < arrStr.length; ++i) {
    if (arrStr[i].length > 4) {
      arrStr[i] = arrStr[i].split('').reverse().join('');
    }
  }

  return arrStr.join(' ');
};

// Soution 3: Using replace method for strinng + Regular Expression
/* eslint-disable arrow-body-style */
const spinWordsSol3 = (str) => {
  return str.replace(/\w{5,}/g, val => val.split('').reverse().join(''));
};

module.exports = { spinWordsSol1, spinWordsSol2, spinWordsSol3 };
