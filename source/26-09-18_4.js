/**
 * @description Find the missing letter. Write a method that takes 
 * an array of consecutive (increasing) letters as input and 
 * returns the missing letter in the array.
 * You will always get an valid array. And it will be always exactly one letter be missing. 
 * The length of the array will always be at least 2. The array will always 
 * contain letters in only one case.
 * Example:
 * ['a','b','c','d','f'] -> 'e'
 * ['O','Q','R','S'] -> 'P'
 */

// Solution 1: covert letter to ascii number 
const findMissingLetterSol1 = (letters) => {
  const numbers = letters.map(val => val.charCodeAt());
  const pos = numbers.findIndex((val, index, arr) => val + 1 !== arr[index + 1]);

  return String.fromCharCode(numbers[pos] + 1);
};

// Solution 2: using direct charcode from input
const findMissingLetterSol2 = (letters) => {
  const pos = letters.findIndex((val, index, arr) => val.charCodeAt() + 1
    !== arr[index + 1].charCodeAt());

  return String.fromCharCode(letters[pos].charCodeAt() + 1);
};

module.exports = {
  findMissingLetterSol1,
  findMissingLetterSol2
};
