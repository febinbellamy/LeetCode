/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let arrOfChars = s.split("");

  let lastElemIndex = s.length - 1;

  for (let i = 0; i <= Math.floor(arrOfChars.length / 2); i++) {
    let currentChar = arrOfChars[i];
    let lastElem = arrOfChars[lastElemIndex];

    if (lowerCaseAlphabet.includes(currentChar.toLowerCase())) {
      let temp = lastElem;
      arrOfChars[lastElemIndex] = currentChar;
      arrOfChars[i] = temp;
    }
    lastElemIndex--;
  }
  return arrOfChars.join("");
};
