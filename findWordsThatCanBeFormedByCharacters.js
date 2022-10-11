/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let strOfWords = words.join(" "); // "cat bt hat tree"
  let arrayOfRequiredChars = chars.split(""); // [ 'a', 't', 'a', 'c', 'h' ]

  let goodStrings = "";
  let temp = "";
  let indxOfCurrentWord = 0;

  for (let i = 0; i < strOfWords.length; i++) {
    let currentChar = strOfWords[i];

    if (arrayOfRequiredChars.includes(currentChar)) {
      temp += currentChar;
      arrayOfRequiredChars.splice(arrayOfRequiredChars.indexOf(currentChar), 1);
    }

    if (currentChar === " " || i === strOfWords.length - 1) {
      if (temp === words[indxOfCurrentWord]) {
        goodStrings += temp;
      }
      temp = "";
      indxOfCurrentWord++;
      arrayOfRequiredChars = chars.split("");
    }
  }
  return goodStrings.length;
};
