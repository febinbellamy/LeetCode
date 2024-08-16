/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    let currentChar = alphabet[i];

    if (!sentence.includes(currentChar)) {
      return false;
    }
  }
  return true;
};
