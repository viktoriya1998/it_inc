// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript

// eslint-disable-next-line no-unused-vars
function validateUsr(username) {
  return /^[a-z\d_]{4,16}$/.test(username);
}
