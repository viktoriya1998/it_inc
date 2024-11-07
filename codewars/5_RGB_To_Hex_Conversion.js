// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// eslint-disable-next-line no-unused-vars
function rgb(r, g, b) {
  return [r, g, b].reduce((acc, elem) => {
    // if (elem < 0) elem = 0;
    // if (elem > 255) elem = 255;

    elem = Math.max(0, Math.min(255, elem));

    const convert = elem.toString(16).toUpperCase();
    return (acc += convert.padStart(2, '0'));
  }, '');
}

// console.log(rgb(114, 206, 8)); // '72CE08'
// console.log(rgb(0, 0, 0)); // '000000'
// console.log(rgb(0, 0, -20)); // '000000'
// console.log(rgb(300, 255, 255)); // 'FFFFFF'
