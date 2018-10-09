/**
 * @description Implement the function unique_in_order which takes as argument a sequence 
 * and returns a list of items without any elements with the same value next to each other 
 * and preserving the original order of elements.
 */

// Solution 1: Using indexOf() and map() function
const uniqueInOrderSol1 = (iter) => {
  const arr = [...iter];

  return arr.filter((val, index) => val !== arr[index - 1]);
};

module.exports = { uniqueInOrderSol1 };
