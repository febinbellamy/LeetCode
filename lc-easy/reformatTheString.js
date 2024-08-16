/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  if (s.length === 1) return s[0];

  const filteredNums = s.split("").filter((char) => numbers.includes(char));
  const filteredLetters = s.split("").filter((char) => alphabet.includes(char));

  //edge cases
  if (filteredNums.length === 0 || filteredLetters.length === 0) return "";
  if (
    filteredNums.length - filteredLetters.length > 1 ||
    filteredLetters.length - filteredNums.length > 1
  )
    return "";

  let longestArr;
  let shortestArr;

  if (filteredNums.length > filteredLetters.length) {
    longestArr = filteredNums;
    shortestArr = filteredLetters;
  } else {
    longestArr = filteredLetters;
    shortestArr = filteredNums;
  }

  let output = "";

  for (let i = 0; i < longestArr.length; i++) {
    let currentCharOfLongestArr = longestArr[i];
    let currentCharOfShortestArr = shortestArr[i];
    output += currentCharOfLongestArr;
    if (currentCharOfShortestArr === undefined) {
      continue;
    }
    output += currentCharOfShortestArr;
  }
  return output;
  // 1 2 3
  // a b c
  // 1 a 2 b 3 c 4
};
