/**
 * @description Create a function that returns the sum of the two 
 * lowest positive numbers given an array of minimum 4 integers. 
 * No floats or empty arrays will be passed.
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7
 */

// Solution 1: Sort this array ascendingly and then sum the two-first elements
const sumTwoSmallestNumbersSol1 = (numbers) => {
  const temp = numbers.sort((a, b) => a - b);
      
  return temp[0] + temp[1];
};
  
// Solution 2: Find smallest and 2nd-smallest with Math.min method from Javascript
// Disclaimer: This solution still got some fail test-case from Codewar Kata framework
const sumTwoSmallestNumbersSol2 = (numbers) => {
  const lowest = Math.min(...numbers);
  const lowest2 = Math.min.apply(null, numbers.filter(val => val !== lowest));

  return lowest + lowest2;
};

// Solution 3: 
  
module.exports = { sumTwoSmallestNumbersSol1, sumTwoSmallestNumbersSol2 };
