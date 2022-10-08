/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let counter = 0;
  let prefLength = pref.length;

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let prefixOfCurrentWord = currentWord.slice(0, prefLength);
    if (prefixOfCurrentWord === pref) {
      counter++;
    }
  }
  return counter;
};
