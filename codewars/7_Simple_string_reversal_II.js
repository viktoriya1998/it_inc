// https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript

// eslint-disable-next-line no-unused-vars
function solve(st, a, b) {
  const reverse = st
    .slice(a, b + 1)
    .split('')
    .reverse()
    .join('');

  return `${st.slice(0, a)}${reverse}${st.slice(b + 1)}`;
}

// console.log(solve('codewars', 1, 5)); // "cawedors"
