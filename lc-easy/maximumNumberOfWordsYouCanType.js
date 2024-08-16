/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let newArray = [];
  let newWord = "";
  let actualWord = "";
  let brokenLettersArray = brokenLetters.split("");

  for (let i = 0; i <= text.length; i++) {
    let currentLetter = text[i];

    if (currentLetter === " " || i === text.length) {
      if (newWord === actualWord) {
        newArray.push(newWord);
      }
      newWord = "";
      actualWord = "";
    } else {
      let filteredArr = brokenLettersArray.filter(
        (letter) => letter === currentLetter
      );
      if (filteredArr.length === 0) {
        newWord += currentLetter;
        actualWord += currentLetter;
      } else {
        actualWord += currentLetter;
      }
    }
  }
  return newArray.length;
};
