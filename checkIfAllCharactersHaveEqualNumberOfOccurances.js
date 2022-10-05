/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let frequencyObj = {};

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (!frequencyObj[currentChar]) {
      frequencyObj[currentChar] = 1;
    } else {
      frequencyObj[currentChar] += 1;
    }
  }

  let sortedValues = Object.values(frequencyObj).sort((a, b) => a - b);
  return sortedValues[0] === sortedValues[sortedValues.length - 1]
    ? true
    : false;
};

