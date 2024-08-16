/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arrOfLongSubStrings = [];
  let temp = "";

  if (!(0 <= s.length || s.length <= 50000)) return false;

  if (s.length <= 2) return s.length;

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (!temp.includes(currentChar)) {
      temp += currentChar;
    } else {
      arrOfLongSubStrings.push(temp);
      temp = currentChar;
    }
  }
  return Math.max(...arrOfLongSubStrings.map((el) => el.length));
};
