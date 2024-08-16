/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = alphabet.toUpperCase();

  const lowerCaseLetters = word
    .split("")
    .filter((letter) => alphabet.includes(letter));
  const upperCaseLetters = word
    .split("")
    .filter((letter) => alphabetUpperCase.includes(letter));

  // if all the letters are lowercase or uppercase, return true.
  if (
    lowerCaseLetters.length === word.length ||
    upperCaseLetters.length === word.length
  ) {
    return true;
  }

  // if the first letter of the word is capitalized and the rest of the letters are lowercase, return true
  if (
    word[0] === upperCaseLetters[0] &&
    word.slice(1) === lowerCaseLetters.join("")
  ) {
    return true;
  }

  return false;
};
