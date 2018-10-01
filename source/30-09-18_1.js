/**
 * @description Given a Sudoku data structure with size NxN, 
 * N > 0 and √N == integer, write a method to validate if it has been filled out correctly
 * Rule for validation:
 * Data structure dimension: NxN where N > 0 and √N == integer
 * Rows may only contain integers: 1..N (N included)
 * Columns may only contain integers: 1..N (N included)
 * 'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
 * Note: the matrix may include non-integer elements
 */

// Solution 1: hard to explain, it is so fucking complicated for me now
// I will comback and explain later
const validateSodokuSol1 = (board) => {
  const sqrt = Math.sqrt(board.length);
  const esum = board.length * (board.length + 1) / 2;

  function checkDigits(selection) {
    return selection.reduce((sum, digit) => {
      if (typeof digit === 'number') {
        return sum + digit;
      }

      return NaN;
    }, 0) === esum;
  }

  return board.every((row, i) => checkDigits(row) && checkDigits(board.map(col => col[i]))
      && checkDigits(board.map(
        (_, j) => board[Math.trunc(i / sqrt) * sqrt
          + (Math.trunc(j / sqrt))][(i % sqrt) * sqrt + (j % sqrt)]
      )));
};

module.exports = { validateSodokuSol1 };
