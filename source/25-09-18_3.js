/**
 * @description You are given an array strarr of strings and an integer k.
 * Your task is to return the first longest string consisting of k consecutive strings.
 * #Example: 
 * longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
 *  --> "abigailtheta"
 * n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 */

// Solution 1: Using 2 for-Loop
const longestConsecSol1 = (strarr, k) => {
  const n = strarr.length;
  const tmpArr = [];
  let result = '';
 
  if (n === 0 || k > n || k <= 0) {
    return result;
  }
  for (let i = 0; i < n - k + 1; ++i) {
    let element = strarr[i];

    for (let j = i + 1; j < i + k; ++j) { element += strarr[j]; }
    tmpArr.push(element);
  }
  result = tmpArr.reduce((max, current) => {
    if (max.length < current.length) {
      return current;
    }
    return max;
  });
 
  return result;
};

// Solution 2 Using Slice and join method from Javascript
const longestConsecSol2 = (strarr, k) => {
  let longest = '';
  for (let i = 0; k > 0 && i < strarr.length - k + 1; ++i) {
    const tmpArr = strarr.slice(i, i + k);
    const tmpStr = tmpArr.join('');
    
    if (longest.length < tmpStr.length) {
      longest = tmpStr;
    }
  }

  return longest;
};

// Solution 3 Using Slice, join and map method from Javascript
const longestConsecSol3 = (strarr, k) => {
  if (strarr.length < 0 || strarr.length < k || k <= 0) return '';
  const lens = strarr.map((val, i, arr) => arr.slice(i, i + k).join('').length);
  const pos = lens.indexOf(Math.max(...lens));

  return strarr.slice(pos, pos + k).join('');
};

module.exports = { longestConsecSol1, longestConsecSol2, longestConsecSol3 };
