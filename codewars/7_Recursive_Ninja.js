// https://www.codewars.com/kata/583ed487ee36e2a8d20000e8/train/javascript

// function chirp(n, res = '') {
//   if (n < 1) {
//     return res.slice(0, -1);
//   }

//   res += 'chirp-';
//   return chirp(n - 1, res);
// }

// eslint-disable-next-line no-unused-vars
function chirp(n) {
  if (n < 2) {
    return 'chirp';
  }
  return chirp(n - 1) + '-chirp';
}

// console.log(chirp(4));
