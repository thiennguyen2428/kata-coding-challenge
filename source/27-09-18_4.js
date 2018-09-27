/**
 * @description given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * a being 1, b being 2, etc.
 * Example "The sunset sets at twelve o' clock."
 * => 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
 */

// Solution 1: Using replace() method from String  and regular Expression
const alphabetPositionSol1 = (text) => {
  const result = text.replace(/[^a-z]/gi, '')
    .replace(/[a-z]/gi, (val) => {
      if (val.charCodeAt() > 96) {
        return `${val.charCodeAt() - 96} `;
      }

      return `${val.charCodeAt() + 32 - 96} `;
    });

  return result.trim();
};

// Solution2: Using match(), toUpperCase() and regular Expression
const alphabetPositionSol2 = (text) => {
  const letterRegex = /[a-z]/gi;

  return text
    .toUpperCase()
    .match(letterRegex)
    .map(c => c.charCodeAt() - 64)
    .join(' ');
};

module.exports = { alphabetPositionSol1, alphabetPositionSol2 };
