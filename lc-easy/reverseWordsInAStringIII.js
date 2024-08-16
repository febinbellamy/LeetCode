/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let anArr = [];
  let newStr = "";

  // s = "Let's take LeetCode contest"

  if (!(1 <= s.length || s.length <= 50000)) return false;

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    let nextChar = s[i + 1];

    if (nextChar === " " || nextChar === undefined) {
      newStr += currentChar;

      let reversedWord = newStr.split("").reverse().join("");

      anArr.push(reversedWord);

      newStr = "";
    } else if (currentChar === " ") {
      continue;
    } else {
      newStr += currentChar;
    }
  }
  return anArr.join(" ");
};
