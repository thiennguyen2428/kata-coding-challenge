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

// Solution 1 :

const recoverSecretSol1 = (triplets) => {
  let result = '';

  while (triplets.some(arr => arr.length)) {
    for (let i = 0; i < triplets.length; ++i) {
      const letter = triplets[i][0];
      let check = false;

      if (letter) {
        check = triplets.every(arr => arr.indexOf(letter) !== 1 && arr.indexOf(letter) !== 2);
      }
      if (check) {
        result += letter;
        for (let j = 0; j < triplets.length; ++j) {
          if (triplets[j].indexOf(letter) === 0) triplets[j].shift();
        }
      }
    }
  }
  
  return result;
};

module.exports = { recoverSecretSol1 };
