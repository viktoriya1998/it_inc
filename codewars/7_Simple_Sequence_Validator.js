// https://www.codewars.com/kata/553f01db29490a69ff000049/train/javascript

// eslint-disable-next-line no-unused-vars
function validateSequence(arr) {
  const pattern = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i += 1) {
    if (arr[i] - arr[i - 1] !== pattern) {
      return false;
    }
  }

  return true;
}
