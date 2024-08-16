/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  const digits = "0123456789";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const specialCharacters = "!@#$%^&*()-+";

  let digitCounter = 0;
  let lowercaseLetterCounter = 0;
  let uppercaseLetterCounter = 0;
  let specialCharacterCounter = 0;

  if (password.length < 8) return false;

  for (let i = 0; i < password.length; i++) {
    let currentCharacter = password[i];
    let previousCharacter = password[i - 1];

    if (digits.includes(currentCharacter)) {
      digitCounter++;
    } else if (lowercaseLetters.includes(currentCharacter)) {
      lowercaseLetterCounter++;
    } else if (uppercaseLetters.includes(currentCharacter)) {
      uppercaseLetterCounter++;
    } else if (specialCharacters.includes(currentCharacter)) {
      specialCharacterCounter++;
    }

    if (currentCharacter === previousCharacter) return false;
  }

  if (
    digitCounter === 0 ||
    lowercaseLetterCounter === 0 ||
    uppercaseLetterCounter === 0 ||
    specialCharacterCounter === 0
  ) {
    return false;
  }
  return true;
};
