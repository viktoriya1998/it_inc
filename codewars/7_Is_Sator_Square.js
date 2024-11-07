// https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/javascript

// !    1
// eslint-disable-next-line no-unused-vars
function isSatorSquare(tablet) {
  const size = tablet.length;

  return tablet.every(
    (row, i) =>
      row.length === size &&
      row.every(
        (_, j) =>
          tablet[i][j] === tablet[j][i] &&
          tablet[i][j] === tablet[row.length - j - 1][tablet.length - i - 1],
      ),
  );
}

// !    2
// function isSatorSquare(tablet) {
//   const size = tablet.length;

//   // Проверка на квадратность
//   for (let i = 0; i < size; i += 1) {
//     if (tablet[i].length !== size) {
//       return false;
//     }
//   }

//   // Проверка на палиндромность и симметричность
//   for (let i = 0; i < size; i += 1) {
//     for (let j = 0; j < size; j += 1) {
//       if (tablet[i][j] !== tablet[j][i] || tablet[i][j] !== tablet[size - 1 - i][size - 1 - j]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// // Пример использования
// const matrix1 = [
//   ['B', 'A', 'T', 'S'],
//   ['A', 'B', 'U', 'T'],
//   ['T', 'U', 'B', 'A'],
//   ['S', 'T', 'A', 'B'],
// ];

// const matrix2 = [
//   ['A', 'B'],
//   ['B', 'A'],
// ];

// console.log(isSatorSquare(matrix1)); // true
// console.log(isSatorSquare(matrix2)); // true
