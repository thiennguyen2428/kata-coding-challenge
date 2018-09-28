/**
 * @description You have to create a function that takes 
 * a positive integer number and returns 
 * the next bigger number formed by the same digits:
 * 12 ==> 21
 * 513 ==> 531
 * 2017 ==> 2071
 */

/**
 * Solution 1: Algorithm - follow these steps 
 * 1. Reverse String: 9447806370373  ---> 3730736087449
 * 2. Find the pivot 37 3 0736087449 : 3 is the pivod
 * 3. Swap pivot to the min number of the left part (bigger than pivot) 33 7 0736087449
 * 4. Sort descending left part 33 7  0736087449
 * 5. Reverse again: -> 9447806370733
 */
 
const nextBiggerSol1 = (n) => {
  let minLeft = 0;
  let leftNums = [];
  let result = [];
  const numbers = Number(n).toString().split('').reverse();
  const pivot = numbers.findIndex((val, index, arr) => val > arr[index + 1]) + 1;

  if (pivot === 0) {
    return -1;
  }
  leftNums = numbers.slice(0, pivot);
  minLeft = leftNums.reduce((min, val) => {
    if (val > numbers[pivot]) {
      if (min === 0 || val < min) {
        return val;
      }
    }
    return min;
  }, 0);
  leftNums[leftNums.indexOf(minLeft)] = numbers[pivot];
  numbers[pivot] = minLeft;
  result = [...leftNums.sort((a, b) => b - a), ...numbers.slice(pivot)];

  return Number(result.reverse().join(''));
};

module.exports = { nextBiggerSol1 };
