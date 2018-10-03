/**
 * @description Take 2 strings s1 and s2 including only letters from a to z. 
 * Return a new sorted string, the longest possible, containing distinct letters,
 * each taken only once - coming from s1 or s2. 
 * #Examples: a = "xyaabbbccccdefww", b = "xxxxyyyyabklmopq" 
 * longest(a, b) -> "abcdefklmopqwxy"
 */

// Solution 1: Using split, sort, filter, join method 
const mergeLongestSol1 = (s1, s2) => {
  const mergeStr = s1 + s2;
  const result = mergeStr
    .split('')
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .filter((val, index, arr) => index === arr.indexOf(val))
    .join('');

  return result;
};
// Solution 2: Using new Set() method from ES6
const mergeLongestSol2 = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

module.exports = { mergeLongestSol1, mergeLongestSol2 };
