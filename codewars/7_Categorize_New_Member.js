// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

// eslint-disable-next-line no-unused-vars
function openOrSenior(data) {
  // return data.reduce((acc, [age, handicap]) => {
  //   acc.push(age >= 55 && handicap > 7 ? 'Senior' : 'Open');
  //   return acc;
  // }, []);

  return data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'));
}

// console.log(
//   openOrSenior([
//     [59, 12],
//     [55, -1],
//     [12, -2],
//     [12, 12],
//   ]),
// );
