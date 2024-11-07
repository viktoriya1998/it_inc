// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// eslint-disable-next-line no-unused-vars
function validatePIN(pin) {
  // return /^\d{4}$|^\d{6}$/.test(pin);
  // return /^(\d{4}|\d{6})$/.test(pin);
  return /^\d{4}(\d{2})?$/.test(pin);
}

// console.log(validatePIN(1234));
// console.log(validatePIN(12345));
// console.log(validatePIN(123456));
