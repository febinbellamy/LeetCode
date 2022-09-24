/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let firstIndexOfChar = s.indexOf(s[i]);
    let lastIndexOfChar = s.lastIndexOf(s[i]);
    if (firstIndexOfChar === lastIndexOfChar) {
      return i;
    }
  }
  return -1;
};
