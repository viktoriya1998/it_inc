// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

// eslint-disable-next-line no-unused-vars
function diamond(n) {
  if (n % 2 === 0 || n < 0) return null;
  const halfSize = Math.floor(n / 2);
  const upperHalfArr = Array.from({ length: halfSize }, (_, i) => {
    return `${' '.repeat(halfSize - i)}${'*'.repeat(i * 2 + 1)}\n`;
  });

  const middle = `${'*'.repeat(n)}\n`;

  return `${upperHalfArr.join('')}${middle}${upperHalfArr.reverse().join('')}`;
}

// console.log(diamond(5)); // "  *\n ***\n*****\n ***\n  *\n"
// console.log('  *\n ***\n*****\n ***\n  *\n');
