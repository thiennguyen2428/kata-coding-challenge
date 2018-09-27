
// 2017 -> 7 1 02 -> 1 7 02 -> 2071
// 20321 -> 12302 -> 123 0 2 -> 023 1 2 -> 320 1 2 -> 21023

/**
 * @description You have to create a function that takes 
 * a positive integer number and returns 
 * the next bigger number formed by the same digits:
 * 12 ==> 21
 * 513 ==> 531
 * 2017 ==> 2071
 */

// Solution 1: Follow these algorithms
// 2017 -> 7 1 02 -> 1 7 02 -> 2071
// 2022 -> 22 0 2 ->  
// 20321 -> 12302 -> 123 0 2 -> 023 1 2 -> 320 1 2 -> 21023 
const nextBiggerSol1 = (n) => {
  const revArr = Number(n).toString().split('').reverse();
  const pivot = revArr.findIndex((val, index, arr) => val > arr[index + 1]) + 1;

  if (pivot === 0) return -1;

  const leftArr = revArr.slice(0, pivot);
  const minBigger = leftArr.reduce((min, current) => {
    if (current > revArr[pivot]) {
      if (min === 0 || current < min) {
        return current;
      }
    }
    return min;
  }, 0);

  leftArr[leftArr.indexOf(minBigger)] = revArr[pivot];
  revArr[pivot] = minBigger;
  
  const leftArrSort = leftArr.sort((a, b) => b - a);
  const result = [...leftArrSort, ...revArr.slice(pivot)];

  return Number(result.reverse().join(''));
};

module.exports = { nextBiggerSol1 };
