/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  const frequencyCounterWord1 = {};
  const frequencyCounterWord2 = {};

  for (let i = 0; i < word1.length; i++) {
    let currentChar = word1[i];
    if (!frequencyCounterWord1[currentChar]) {
      frequencyCounterWord1[currentChar] = 1;
    } else {
      frequencyCounterWord1[currentChar]++;
    }
  }

  for (let j = 0; j < word2.length; j++) {
    let currentChar = word2[j];
    if (!frequencyCounterWord2[currentChar]) {
      frequencyCounterWord2[currentChar] = 1;
    } else {
      frequencyCounterWord2[currentChar]++;
    }
  }

  for (let key in frequencyCounterWord1) {
    let difference;
    if (frequencyCounterWord2[key]) {
      difference = Math.abs(
        frequencyCounterWord1[key] - frequencyCounterWord2[key]
      );
    } else {
      difference = frequencyCounterWord1[key];
    }
    if (difference > 3) {
      return false;
    }
  }

  for (let key in frequencyCounterWord2) {
    let difference;
    if (frequencyCounterWord1[key]) {
      difference = Math.abs(
        frequencyCounterWord2[key] - frequencyCounterWord1[key]
      );
    } else {
      difference = frequencyCounterWord2[key];
    }
    if (difference > 3) {
      return false;
    }
  }
  return true;
};
