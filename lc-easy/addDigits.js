/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const arrOfDigitStrings = String(num).split("");

  let sum = arrOfDigitStrings.reduce((a, c) => +a + +c);

  let firstDigit = String(sum)[0];
  let secondDigit = String(sum)[1];

  if (String(sum).length === 1) {
    return sum;
  }

  let secondSum = +firstDigit + +secondDigit;

  if (String(secondSum).length === 2) {
    let firstDigit = String(secondSum)[0];
    let secondDigit = String(secondSum)[1];
    return +firstDigit + +secondDigit;
  }
  return secondSum;
};
