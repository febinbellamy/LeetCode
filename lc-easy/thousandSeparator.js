/**
 * @param {number} n
 * @return {string}
 */

var thousandSeparator = function (n) {
  let stringN = String(n).split("");
  if (stringN.length < 4) return String(n);
  let newArr = [];
  let moves = 0;

  for (let i = stringN.length - 1; i >= 0; i--) {
    let currentDigit = stringN[i];
    if (moves === 3 || moves === 6 || moves === 9) {
      newArr.unshift(".");
    }
    newArr.unshift(currentDigit);
    moves++;
  }
  return newArr.join("");
};
