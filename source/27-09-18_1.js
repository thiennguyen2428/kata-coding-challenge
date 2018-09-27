/**
 * @description Move the first letter of each word to the end of it, 
 * then add "ay" to the end of the word. Leave punctuation marks untouched.
 * Example: Pig latin is cool -> igPay atinlay siay oolcay
 * Hello world ! -> elloHay orldway !
 */

// Solution 1: Using map, join for array and slice for String
const pigItSol1 = (str) => {
  const template = 'ay';
  const arrStr = str.split(' ');
  const arrRes = arrStr.map((val) => {
    if (val.charAt(0).match(/[a-z]/i)) {
      return val.slice(1) + val.charAt(0) + template;
    }
    
    return val;
  });

  return arrRes.join(' ');
};

// Solution 2: Using replace and Regular Expression
/* eslint-disable arrow-body-style */
const pigItSol2 = (str) => {
  return str.replace(/\w+/g, (val) => {
    return `${val.slice(1)}${val[0]}ay`;
  });
};

// Solution 3: Similar to solution 2 but with other regular expression
// We can search string and divide it into multiple part using /()()()....()/g -> \$1 \$2 \$3 ....
/* eslint-disable no-useless-escape */
const pigItSol3 = (str) => {
  return str.replace(/(\w)(\w*)(\s|$)/g, '\$2\$1ay\$3');
};

module.exports = { pigItSol1, pigItSol2, pigItSol3 };
