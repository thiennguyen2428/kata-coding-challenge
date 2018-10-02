/**
 * @description The rgb() method is incomplete. 
 * Complete the method so that passing in RGB decimal values will result in a hexadecimal
 * representation being returned. The valid decimal values for RGB are 0 - 255.
 * Any (r,g,b) argument values that fall out of that range 
 * should be rounded to the closest valid value.
 */

// Solution 1
const rgbSol1 = (r, g, b) => {
  const red = Math.min(Math.max(r, 0), 255);
  const green = Math.min(Math.max(g, 0), 255);
  const blue = Math.min(Math.max(b, 0), 255);

  return [red, green, blue].map(val => `0${val.toString(16)}`.slice(-2)).join('').toUpperCase();
};

module.exports = { rgbSol1 };
