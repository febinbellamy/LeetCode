/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let strNum = String(x);
  return strNum === strNum.split("").reverse().join("") ? true : false;
};
