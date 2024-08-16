/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let row1 = "qwertyuiop";
  let row2 = "asdfghjkl";
  let row3 = "zxcvbnm";

  let finalWords = [];

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    let testForRow1 = currentWord
      .split("")
      .every((char) => row1.includes(char.toLowerCase()));
    let testForRow2 = currentWord
      .split("")
      .every((char) => row2.includes(char.toLowerCase()));
    let testForRow3 = currentWord
      .split("")
      .every((char) => row3.includes(char.toLowerCase()));

    if (testForRow1 || testForRow2 || testForRow3) {
      finalWords.push(currentWord);
    }
  }
  return finalWords;
};
