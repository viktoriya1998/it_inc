// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

// !   1
const lettersForChange = ['a', 'e', 'i', 'o', 'u'];

function encode(string) {
  const regex = new RegExp(lettersForChange.join('|'), 'g');
  return string.replace(regex, (match) => {
    return lettersForChange.indexOf(match) + 1;
  });
}

function decode(string) {
  const regex = new RegExp(
    Array.from({ length: lettersForChange.length }, (_, i) => i).join('|'),
    'g',
  );

  return string.replace(regex, (match) => {
    return lettersForChange[match - 1];
  });
}

console.log(encode('hello')); //  'h2ll4');
// assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
// assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4')); // , 'hello');

// !   2

// const lettersForChange = {
//   a: 1,
//   e: 2,
//   i: 3,
//   o: 4,
//   u: 5,
// };

// function encode(string, encodeObj = lettersForChange) {
//   return string.replace(/./g, (match, i, str) =>
//     encodeObj[match] ? encodeObj[match] : str[i]
//   );
// }

// function decode(string, encodeObj = lettersForChange) {
//   const reversedEncodeObj = Object.entries(encodeObj).reduce(
//     (acc, [key, value]) => {
//       acc[value] = key;
//       return acc;
//     },
//     {}
//   );

//   return encode(string, reversedEncodeObj);
// }
