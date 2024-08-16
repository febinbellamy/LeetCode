/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const duplicates = s
    .split("")
    .filter((char) => s.lastIndexOf(char) !== s.indexOf(char));
  if (duplicates.length === 0) return -1;

  const splitStr = s.split("");
  const longestSubStringLengths = [];

  for (let i = 0; i < splitStr.length; i++) {
    let currentChar = s[i];
    let lastIndexOfLetter = splitStr.lastIndexOf(currentChar);

    if (lastIndexOfLetter !== i) {
      let slicedStr = s.slice(i + 1, lastIndexOfLetter);
      longestSubStringLengths.push(slicedStr.length);
    }
  }
  return Math.max(...longestSubStringLengths);
};
