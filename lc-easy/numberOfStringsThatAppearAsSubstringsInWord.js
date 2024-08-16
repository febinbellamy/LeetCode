/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let filteredArr = patterns.filter((string) => {
    return word.includes(string);
  });
  return filteredArr.length;
};
