/**
 * @description ome people write the regular expression too long, let us compress it.
 * Input: regex, a regular expression string
 * Output: a compressed regular expression string. Note, if the string can not be compressed 
 * to a shorter string, returns the the original string.
 */

// Solution 1 
const simplifyRegexSol1 = (regex) => {
  const matchStr = regex.match(/^\/(.+?)(\1+)\/$/);

  if (!matchStr) return regex;

  const pattern = matchStr[1].length === 1 ? matchStr[1] : `(${matchStr[1]})`;
  const reg = `/${pattern}{${matchStr[2].length / matchStr[1].length + 1}}/`;

  return (reg.length < regex.length ? reg : regex);
};

module.exports = { simplifyRegexSol1 };
