/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  // words is an array of strings

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let reversedWord = currentWord.split("").reverse().join("");

    if (currentWord === reversedWord) {
      // return the FIRST palindromic string in the array
      return currentWord;
    }
  }

  // if the palindromic string doesn't exist, return an empty string.
  return "";
};
