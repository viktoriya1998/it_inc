// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
// !   1
// const binaryArrayToNumber = (arr) => {
//   return parseInt(arr.join(''), 2);
// };
// !!!!!!!!!!     2
// eslint-disable-next-line no-unused-vars
function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => (a << 1) | b, 0);
}

// console.log(binaryArrayToNumber(1, 1, 1, 1)); // 15
