/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {

  const arrayOfSubStrings = [];

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    let filteredArr = words.filter(
      (word) => word !== currentWord && word.includes(currentWord)
    );

    if (filteredArr.length !== 0) {
      arrayOfSubStrings.push(currentWord);
    }
  }

  return arrayOfSubStrings;
};
