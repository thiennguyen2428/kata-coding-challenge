/**
 * @description Given an array of positive or negative integers
 * I= [i1,..,in], you have to produce a sorted array P of the form
 * [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]
 * P will be sorted by increasing order of the prime numbers. 
 * Example:
 * I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
 * [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.
 * Notes: It can happen that a sum is 0 if some numbers are negative!
 * Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, 
 * the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the 
 * result amongst others.
 */

/**
 * Solution 1: Following these steps
 * Find max of I [12, 15] -> max = 15
 * Find prime number <= max which also are the factor of I(j) -> [2, 3, 5]
 * Using map(), reduce() method to produce the output -> [[2, 12], [3, 27], [5, 15]]
 */
const sumOfDividedSol1 = (numbers) => {
  const primes = [];
  const max = numbers.reduce((find, val) => {
    if (find === 0 || find < Math.abs(val)) {
      return Math.abs(val);
    }

    return find;
  }, 0);
  
  for (let i = 2; i <= max; ++i) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); ++j) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && numbers.some(val => Math.abs(val) % i === 0)) {
      primes.push(i);
    }
  }

  const result = primes.map((val) => {
    const sum = numbers.reduce((accumulator, current) => {
      if (current % val === 0) {
        return accumulator + current;
      }
      return accumulator;
    }, 0);

    return [val, sum];
  });
  return result;
};

module.exports = { sumOfDividedSol1 };
