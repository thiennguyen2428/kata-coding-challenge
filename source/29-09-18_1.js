/**
 * @description A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
 * Within that sequence, he chooses two numbers, a and b.
 * He says that the product of a and b should be equal to the sum of all numbers in the sequence, 
 * excluding a and b. Given a number n, 
 * could you tell me the numbers he excluded from the sequence? The function takes the parameter: n 
 * (n is always strictly greater than 0) and returns an array or a string 
 * (depending on the language) of the form: [[a, b], ...] with all (a, b) 
 * which are the possible removed numbers in the sequence 1 to n.
 * [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a". 
 * It happens that there are several possible (a, b). 
 * The function returns an empty array (or an empty string) if no possible numbers 
 * are found which will prove that my friend has not told the truth! 
 */

// Solution 1: Using 2 for loop -> inefficient algorithms with big numbers 
const removeNbSol1 = (n) => {
  const result = [];
  const sum = (n * (n + 1)) / 2;

  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < n; ++j) {
      if (i * j === sum - (i + j)) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

// Solution2: Using 1 for loop find(j) = (sum - i) / (i + 1 ); j is integer and < n  
const removeNbSol2 = (n) => {
  const result = [];
  const sum = (n * (n + 1)) / 2;

  for (let i = 1; i < n; ++i) {
    const j = (sum - i) / (i + 1);

    if (j <= n && Number.isInteger(j)) {
      result.push([i, j]);
    }
  }

  return result;
};

module.exports = { removeNbSol1, removeNbSol2 };
