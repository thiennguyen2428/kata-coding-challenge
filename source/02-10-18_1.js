/**
 * @description Given an array of one's and zero's 
 * convert the equivalent binary value to an integer.
 * Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1
 */

// Solution 1: Using reduce() method
const binaryArrayToNumberSol1 = (arr) => {
  const n = arr.length || 0;

  return arr.reduce((prev, curr, index) => prev + (curr * (2 ** (n - index - 1))), 0);
};

// Solution 2: Using build-in covert method of JS
const binaryArrayToNumberSol2 = (arr) => {
  const str = arr.join('');

  return parseInt(str, 2);
};

// Solution 3: Using for loop to calculate the number
const binaryArrayToNumberSol3 = (arr) => {
  let decimal = 0;

  for (let i = 0; i < arr.length; ++i) {
    decimal += arr[i] * (2 ** (arr.length - i - 1));
  }

  return decimal;
};

module.exports = {
  binaryArrayToNumberSol1,
  binaryArrayToNumberSol2,
  binaryArrayToNumberSol3
};
