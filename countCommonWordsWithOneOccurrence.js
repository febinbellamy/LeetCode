/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  let counter = 0;

  for (let i = 0; i < words1.length; i++) {
    let currentWord = words1[i];

    // if the word appears exactly ONCE in each of the two arrays, add 1 to counter
    if (
      words1.indexOf(currentWord) === words1.lastIndexOf(currentWord) &&
      words2.indexOf(currentWord) === words2.lastIndexOf(currentWord) &&
      words2.indexOf(currentWord) !== -1
    ) {
      counter++;
    }
  }
  return counter;
};
