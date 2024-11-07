/* eslint-disable no-console */
function normName(str, que = 7) {
  return `${que}_${str.replaceAll(' ', '_')}.js`;
}

console.log(normName(''));
