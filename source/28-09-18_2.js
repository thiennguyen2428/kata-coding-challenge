/**
 * @description There is a secret string which is unknown to you. 
 * Given a collection of random triplets from the string, recover the original string.
 * A triplet here is defined as a sequence of three letters such 
 * that each letter occurs somewhere before the next in the given string. 
 * "whi" is a triplet for the string "whatisup".
 * As a simplification, you may assume that no letter occurs more than once in the secret string.
 * You can assume nothing about the triplets given to you other than 
 * that they are valid triplets and that they contain sufficient information 
 * to deduce the original string. In particular, this means that the secret string 
 * will never contain letters that do not occur in one of the triplets given to you.
 */

// Solution 1: Algorithm - Following these step
// 1. First remaining letters are the character that only appears in row[0]
// 2. Removing all first letters when we found them (arr.shift())
// 3. Loop it again until all the child arrays are empty
// -> Using while loop every() method and shift method to implement solution


const recoverSecretSol1 = (triplets) => {
  let result = '';
  const temp = triplets.map(arr => arr.map(val => val));
  
  while (temp.some(arr => arr.length)) {
    for (let i = 0; i < temp.length; ++i) {
      const letter = temp[i][0];
      let check = false;

      if (letter) {
        check = temp.every(arr => arr.indexOf(letter) <= 0);
      }
      if (check) {
        result += letter;
        for (let j = 0; j < temp.length; ++j) {
          if (temp[j].indexOf(letter) === 0) temp[j].shift();
        }
      }
    }
  }
  
  return result;
};

// Solution 2: Similar idea to Solution 2 but we use recursive function
const recoverSecretSol2 = (triplets) => {
  for (let i = 0; i < triplets.length; ++i) {
    const letter = triplets[i][0];
    
    if (triplets.every(arr => arr.indexOf(letter) <= 0)) {
      const temp = triplets.map(arr => arr.filter(val => val !== letter));
      
      return letter + recoverSecretSol2(temp.filter(arr => arr.length));
    }
  }
  
  return '';
};

module.exports = { recoverSecretSol1, recoverSecretSol2 };
