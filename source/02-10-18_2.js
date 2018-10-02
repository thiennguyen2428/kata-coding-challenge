/**
 * @description In a small town the population is p0 = 1000 at the beginning of a year. 
 * The population regularly increases by 2 percent per year and moreover 50 new inhabitants 
 * per year come to live in the town. How many years does the town need to see its population 
 * greater or equal to p = 1200 inhabitants?
 * More generally given parameters:
 * p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
 * the function nb_year should return n number of entire years 
 * needed to get a population greater or equal to p.
 * aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
 */

// Solution 1: Using recursive function to find k
const nbYearSol1 = (p0, percent, aug, p) => {
  if (p0 >= p) {
    return 0;
  }

  const newP0 = p0 + p0 * percent / 100 + aug;

  return 1 + nbYearSol1(newP0, percent, aug, p);
};

// // Solution 2: Using for loop
const nbYearSol2 = (p0, percent, aug, p) => {
  let temp = p0;
  let i = 1;

  for (i = 0; temp < p; ++i) {
    temp = temp + temp * percent / 100 + aug;
  }

  return i;
};

module.exports = { nbYearSol1, nbYearSol2 };
