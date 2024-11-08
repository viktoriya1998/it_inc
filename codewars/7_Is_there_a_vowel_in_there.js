// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

// eslint-disable-next-line no-unused-vars
function isVow(arr) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return arr.map((num) => {
    const char = String.fromCharCode(num);
    return vowels.includes(char) ? char : num;
  });
}

// console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
