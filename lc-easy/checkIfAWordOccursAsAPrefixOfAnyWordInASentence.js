/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let sentenceArr = sentence.split(" ");
  let searchWordArr = searchWord.split("");

  for (let i = 0; i < sentenceArr.length; i++) {
    let currentWord = sentenceArr[i];

    let newArr = currentWord
      .split("")
      .map((char, index) => (char === searchWordArr[index] ? char : "-"));

    if (newArr.join("").includes(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};
