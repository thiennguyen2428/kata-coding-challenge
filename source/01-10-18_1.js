/**
 * @description In mathematics, a Diophantine equation is a polynomial equation, 
 * usually with two or more unknowns, such that only the integer solutions are sought or studied.
 * In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of 
 * a diophantine equation of the form: x^2 - 4 * y^2 = n, (where the unknowns are x and y, 
 * and n is a given positive number) in decreasing order of the positive x[i].
 */

// Solution 1 : Using Math.sqrt and 1 for loop -> unefficent algorithm with big number
const diophantineEquaSol1 = (n) => {
  const result = [];
  const flag = {};

  for (let x = n; x >= 0; --x) {
    const y = Math.sqrt((x * x - n) / 4);

    if (!flag[x] && Number.isInteger(y)) {
      result.push([x, y]);
      flag[x] = true;
    }
  }

  return result;
};

// Solution 2 : Using the power of math
// x^2 - 4y^2 = n ~ (x - 2y)(x + 2y) = n;
// Got d1 * d2 = n => d2 = n / d1; max(d1) = sqrt(n)
// x - 2y = d1
// x + 2y = d2
// => x = (d2 + d1) / 2 = (n / d1 + d1 ) / 2
// => = (d2 - d1) / 4 = (n / d1 - d1) / 4
const diophantineEquaSol2 = (n) => {
  const result = [];

  for (let x, y, i = 1, rootN = Math.sqrt(n); i <= rootN; ++i) {
    const d = n / i;
    if (Number.isInteger(d)) {
      x = (d + i) / 2;
      if (Number.isInteger(x)) {
        y = (d - i) / 4;
        if (Number.isInteger(y)) result.push([x, y]);
      }
    }
  }

  return result;
};


module.exports = { diophantineEquaSol1, diophantineEquaSol2 };
