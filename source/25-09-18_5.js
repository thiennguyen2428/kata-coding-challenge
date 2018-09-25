/**
 * @description If we list all the natural numbers below 10 that are multiples of 3 or 5, 
 * we get 3, 5, 6 and 9. The sum of these multiples is 23. 
 * Finish the solution so that it returns the sum of all the multiples of 
 * 3 or 5 below the number passed in.
 * Note: If the number is a multiple of both 3 and 5, only count it once.
 */

// Solution 1 Using for loop to search number that can divide for 3 or 5 
const sumMultiples3A5Sol1 = (number) => {
  let result = 0;

  for (let i = 0; i < number; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
};

// Solution 2 : Same idea which Solution 1 but we use array reduce method
/* eslint-disable arrow-body-style */
const sumMultiples3A5Sol2 = (number) => {
  const temp = [...Array(number).keys()];
  const result = temp.reduce((accumulator, current) => {
    return (current % 3 === 0 || current % 5 === 0) ? accumulator + current : accumulator;
  });

  return result;
};

// Solution 3: Using the magical power of math
// x number are multiple of 3 below n = floor(--n/3)
// y number are multiple of 5 below n = floor(--n/5)
// z number are multiple of both 3 and 5 below n = floor(--n/15)
// => formula
const sumMultiples3A5Sol3 = (number) => {
  const temp = number - 1;
  const x = Math.floor(temp / 3);
  const y = Math.floor(temp / 5);
  const z = Math.floor(temp / 15);
  const result = (3 * x * (x + 1) + 5 * y * (y + 1) - 15 * z * (z + 1)) / 2;

  return result;
};


module.exports = { sumMultiples3A5Sol1, sumMultiples3A5Sol2, sumMultiples3A5Sol3 };
