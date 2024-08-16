/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let temp = strs[0];
  let commonPrefixesArr = [];

  if (strs.length === 1) return strs[0];

  for (let i = 1; i < strs.length; i++) {
    let currentWord = strs[i]; // "flow"

    let filteredArray = currentWord.split("").map((char, index) => {
      return temp[index] === char ? char : null;
    });

    if (filteredArray.includes(null)) {
      filteredArray.splice(filteredArray.indexOf(null));
    }

    if (filteredArray.length === 0) {
      return "";
    }

    commonPrefixesArr.push(filteredArray.join(""));
  }

  return commonPrefixesArr.sort((a, b) => a.length - b.length)[0]; // least to greatest;
};
