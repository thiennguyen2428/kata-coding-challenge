/**
 * @description Your task is to sort a given string. 
 * Each word in the String will contain a single number. 
 * This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input String is empty, return an empty String. 
 * The words in the input String will only contain valid consecutive numbers.
 * For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
 */

// Solution 1 : Using Array method sort(), join() ; String method split(), search();
const orderSol1 = (words) => {
  const digitRegex = /[0-9]/g;
  const result = words.split(' ')
    .sort((first, second) => first[first.search(digitRegex)] - second[second.search(digitRegex)]);

  return result.join(' ');
};

// Solution 2: Using match instead of seach
const orderSol2 = (words) => {
  const digitRegex = /\d/g;
  const result = words.split(' ')
    .sort((first, second) => first.match(digitRegex) - second.match(digitRegex));

  return result.join(' ');
};

module.exports = { orderSol1, orderSol2 };
