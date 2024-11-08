// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

// eslint-disable-next-line no-unused-vars
function stray(numbers) {
  return numbers.reduce((acc, num) => acc ^ num, 0);
}

// console.log(stray([1, 1, 2])); // 2
// console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
