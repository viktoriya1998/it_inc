// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// eslint-disable-next-line no-unused-vars
function findShort(s) {
  return Math.min(...s.split(' ').map((word) => word.length));
}
