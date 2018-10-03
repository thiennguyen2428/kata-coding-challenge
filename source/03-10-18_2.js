/**
 * @description Write a function called sumIntervals  that accepts an array of intervals, 
 * and returns the sum of all the interval lengths.
 * Intervals are represented by a pair of integers in the form of an array. 
 * The first value of the interval will always be less than the second value. 
 * Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
 * Overlapping Intervals. List containing overlapping intervals:
 * [[1,4], [7, 10], [3, 5]] -> [[1, 5], [7, 10]]
 */

// Solution 1 
/* eslint-disable no-param-reassign */
const sumIntervalSol1 = (intervals) => {
  const result = intervals
    .sort((a, b) => a[0] - b[0])
    .reduce((prev, curr) => {
      const pos = prev.findIndex(element => element[1] >= curr[0]);
    
      if (pos !== -1) {
        prev[pos][0] = Math.min(...curr, ...prev[pos]);
        prev[pos][1] = Math.max(...curr, ...prev[pos]);

        return prev;
      }
      return [...prev, curr];
    }, []);

  return result.reduce((sum, curr) => sum + (curr[1] - curr[0]), 0);
};

// Solution 2 
const sumIntervalSol2 = (intervals) => {
  const numbers = [];

  intervals.forEach((element) => {
    for (let j = element[0]; j < element[1]; ++j) {
      if (numbers.indexOf(j) === -1) numbers.push(j);
    }
  });

  return numbers.length;
};

module.exports = { sumIntervalSol1, sumIntervalSol2 };
