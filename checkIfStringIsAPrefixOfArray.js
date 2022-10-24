/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let str = "";
  let i = 0;
  while (str.length < s.length) {
    str += words[i];
    i++;
  }

  return s === str;
};
