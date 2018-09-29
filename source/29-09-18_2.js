/**
 * @description Pyramids are amazing! Both in architectural and mathematical sense. 
 * If you have a computer, you can mess with pyramids even if you are not in Egypt 
 * at the time. For example, let's consider the following problem. 
 * Imagine that you have a plane pyramid built of numbers like this one here:
 *    /3/
 *   \7\ 4 
 *  2 \4\ 6 
 * 8 5 \9\ 3
 * Let's say that the 'slide down' is a sum of consecutive numbers from 
 * the top to the bottom of the pyramid. 
 * As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23
 * Your task is to write a function that takes a pyramid representation 
 * as argument and returns its' longest 'slide down'
 */

// Solution 1: Holy-s***. This kata reminds me "Programming Technique" course that has been
// taken while i was in first-year at US. So we will use something called Dynamic Programming 
// to approach the problem by starting from bottom to top of the pyramid.
// God bess my day. God bess Dr Dinh Ba Tien
const longestSlideDownSol1 = (pyramid) => {
  const temp = pyramid.map(arr => arr.map(val => val));
  const n = temp.length;
  
  if (n === 1) return temp[0][0];
  temp[n - 2] = temp[n - 2].map((val, index) => {
    if (temp[n - 1][index] > temp[n - 1][index + 1]) {
      return val + temp[n - 1][index];
    }

    return val + temp[n - 1][index + 1];
  });
  temp.pop();

  return longestSlideDownSol1(temp);
};

// Solution2: Using reduceRight and Math.max
/* eslint-disable arrow-body-style */
const longestSlideDownSol2 = (pyramid) => {
  return pyramid.reduceRight((prev, curr) => curr.map(
    (val, i) => val + Math.max(prev[i], prev[i + 1])
  ))[0];
};
  
module.exports = { longestSlideDownSol1, longestSlideDownSol2 };
