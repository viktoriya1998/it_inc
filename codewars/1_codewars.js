function normName(str, que = 7) {
  return `${que}_${str.replaceAll(' ', '_')}.js`;
}

// eslint-disable-next-line no-console
console.log(normName(''));
