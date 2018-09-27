/**
 * @description A Narcissistic Number is a number 
 * which is the sum of its own digits, each raised to the power of the number of digits.
 * For example, take 153 (3 digits):
 * 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * and 1634 (4 digits)
 * 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
 */

// Solution 1 : covert number -> string and check
const narcissisticSol1 = (value) => {
  const str = Number(value).toString();
  const sum = str.split('').reduce((accumulator, current) => accumulator
      + (current ** str.length), 0);

  return sum === value;
};
  
module.exports = { narcissisticSol1 };
