/**
 * @description Given an array, find the int that appears an odd number of times. 
 * There will always be only one integer that appears an odd number of times.
 */

// Solution 1: Using 2 for Loop to search the integer appearing odd times
const findOddSol1 = (arr) => {
  let pos = 0;

  for (let i = 0; i < arr.length; ++i) {
    let appear = 0;

    for (let j = 0; j < arr.length; ++j) {
      if (arr[i] === arr[j]) appear += 1;
    }
    if (appear % 2 !== 0) {
      pos = i;
      break;
    }
  }

  return arr[pos];
};

// Solution 2: Using XOR operator to find the integer appearing odd times
//
// Explaination: XOR is a special bit-wise operator. When using in math it works like magical 
// because it will destruct the same bits and keep the different bits (0 & 1).
//
// Example: Using truth-table will help you understand clearly
// 15 = 8 + 7 = 8 + 4 + 2 + 1
// 10 = 8 + 2
// 5 = 4 + 1
// => 15 ^ 10 = 4 + 1 = 5
// => 5 ^ 10 = 4 + 1 + 8 + 2 = 15 (odd times 10, even times 5....)
const findOddSol2 = arr => arr.reduce((accumulator, current) => accumulator ^ current, 0);

module.exports = { findOddSol1, findOddSol2 };
