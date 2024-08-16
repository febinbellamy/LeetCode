/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (!(s.length <= 100000 || s.length >= 1)) return false;

  let strArray = s.split("");

  for (let i = 0; i < strArray.length; i++) {
    strArray.splice(i, 1);

    if (strArray.join("") === strArray.reverse().join("")) {
      return true;
    }
    strArray = s.split("");
  }

  return false;
};
