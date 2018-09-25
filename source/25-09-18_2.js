/**
 * @description Bob is preparing to pass IQ test. The most frequent task in this test 
 * is to find out which one of the given numbers differs from the others. 
 * Bob observed that one number usually differs from the others in evenness. 
 * Help Bob — to check his answers, he needs a program that among the given numbers finds one 
 * that is different in evenness, and return a position of this number.
 * ! Keep in mind that your task is to help Bob solve a real IQ test, 
 * which means indexes of the elements start from 1 (not 0)
 * Example:
 * iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
 * iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
 */

// Solution 1: 2 if we add 2 same-type numbers (odd or even), we will get the even number.
const iqTestSol1 = (numbers) => {
  const arr = numbers instanceof Array ? numbers : numbers.split(' ').map(val => parseInt(val, 10));
  let result = 0;

  for (let i = 0; i < arr.length; ++i) {
    const filterArr = arr.filter((val, index) => index !== i);
    const sumArr = filterArr.map(val => arr[i] + val);
    
    if (!sumArr.some(val => val % 2 === 0)) {
      result = i;
      break;
    }
  }

  return result + 1;
};

// Solution 2: We can seperate into odd-array and even-array and find out which is approxiate
const iqTestSol2 = (numbers) => {
  const arr = numbers instanceof Array ? numbers : numbers.split(' ').map(val => parseInt(val, 10));
  const even = arr.filter(val => val % 2 === 0);
  const odd = arr.filter(val => val % 2 !== 0);

  return even.length === 1 ? (arr.indexOf(even[0]) + 1) : (arr.indexOf(odd[0]) + 1);
};

// Solution 3: We can find out the difference between indexOf 0 and 1
const iqTestSol3 = (numbers) => {
  const arr = numbers instanceof Array ? numbers.map(val => val % 2) : numbers.split(' ').map(val => val % 2);
  const sum = arr.reduce((accumulator, current) => accumulator + current);
  const target = sum > 1 ? 0 : 1;

  return arr.indexOf(target) + 1;
};

module.exports = { iqTestSol1, iqTestSol2, iqTestSol3 };
