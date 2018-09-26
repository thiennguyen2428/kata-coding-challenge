/**
 * @description You are given an array (which will have a length of at least 3, 
 * but could be very large) containing integers. The array is either entirely 
 * comprised of odd integers or entirely comprised of even integers except for a single integer N. 
 * Write a method that takes the array as an argument and returns this "outlier" N.
 * Example:
 * [2, 4, 0, 100, 4, 11, 2602, 36] -> 11
 * [160, 3, 1719, 19, 11, 13, -21] -> 160
 * Disclaimer This exercise is similar to iqTest from 25-09-18_2.js
 */

// Solution 1: Using the difference between 1 and 0
const findOutlierSol1 = (integers) => {
  const numbers = integers.map(val => Math.abs(val) % 2);
  const sum = numbers.reduce((accumulator, current) => accumulator + current);
  const target = sum > 1 ? 0 : 1;

  return integers[numbers.indexOf(target)];
};

// Solution 2: Using 2 odd and even array to find out which one is approciate
const findOutlierSol2 = (integers) => {
  const odds = integers.filter(val => val % 2 === 0);
  const even = integers.filter(val => val % 2 !== 0);

  return odds.length === 1 ? odds[0] : even[0];
};


module.exports = { findOutlierSol1, findOutlierSol2 };
