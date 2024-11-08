// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// eslint-disable-next-line no-unused-vars
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}

// console.log(getCount('abracadabrau')); // 6
// console.log(getCount('qqqqqqq')); // 0
