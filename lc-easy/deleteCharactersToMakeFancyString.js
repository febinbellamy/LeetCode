/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    let nextChar = s[i + 1];
    let prevChar = s[i - 1];

    if (!(currentChar === nextChar && currentChar === prevChar)) {
      newStr += currentChar;
    }
  }
  return newStr;
};
