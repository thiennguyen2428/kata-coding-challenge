/**
 * @description Some numbers have funny properties. For example:
 * 89 --> 8¹ + 9² = 89 * 1
 * 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
 * 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 * Given a positive integer n written as abcd... (a, b, c, d... being digits) and 
 * a positive integer p, we want to find a positive integer k, if it exists, 
 * such as the sum of the digits of n taken to the successive powers of p is equal to k * n. 
 * In other words: Is there an integer k such as : 
 * (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
 * If it is the case we will return k, if not return -1.
 * Note: n, p will always be given as strictly positive integers.
 */

// Solution 1: Using toSTring, Array.from, reduce to find k
const digPowSol1 = (n, p) => {
  let temp = 10 * n;
  const digits = Number(n).toString(10).length;

  const numbers = Array.from(Array(digits), () => {
    temp = Math.floor(temp / 10);

    return temp % 10;
  }).reverse();

  const sum = numbers.reduce((accumulator, current, index) => accumulator
    + (current ** (p + index)), 0);

  return Number.isInteger(sum / n) ? sum / n : -1;
};

// Solution 2 : convert number to String to handle
const digPowSol2 = (n, p) => {
  const sum = String(n).split('').reduce((a, c, i) => a + (c ** (p + i)), 0);

  return sum % n ? -1 : sum / n;
};

module.exports = { digPowSol1, digPowSol2 };
