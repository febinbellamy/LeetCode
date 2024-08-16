/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let wordsArray = s.trim().split(" ");
  const finalArr = [];
  for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];
    if (currentWord !== "") {
      finalArr.unshift(currentWord);
    }
  }
  let reversedWords = finalArr.join(" ");
  return reversedWords;
};
