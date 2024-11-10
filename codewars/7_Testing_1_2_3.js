// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

// eslint-disable-next-line no-unused-vars
function number(array) {
  return array.map((str, i) => `${i + 1}: ${str}`);
}

// console.log(number([]));
// console.log(number(['a', 'b', 'c']));
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
