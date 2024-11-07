// https://www.codewars.com/kata/5497a3c181dd7291ce000700/train/javascript

// eslint-disable-next-line no-unused-vars
function diagonalSum(matrix) {
  return matrix.reduce((sum, row, i) => sum + row[i], 0);
}

// console.log(
//   diagonalSum([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ]),
// ); // 34
