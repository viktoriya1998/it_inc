// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// eslint-disable-next-line no-unused-vars
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#');
  // return cc.replace(/.(?=....)/g, '#');
  // return cc.replace(/.(?=.{4})/g, "#");
  // return cc.replace(/(?=.{5})./g, '#')
}

// console.log(maskify('64607935616'));
// console.log(maskify('1'));
