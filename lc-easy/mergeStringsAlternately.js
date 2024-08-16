/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let mergedStr = "";

  let shortestLength = Math.min(word1.length, word2.length);
  let longestLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < shortestLength; i++) {
    mergedStr += word1[i];
    mergedStr += word2[i];
  }

  // if word1.length === word2.length, return mergedStr.
  if (word1.length === word2.length) return mergedStr;

  // ELSE...
  //figure out which string has the longest length,

  let longestStr;
  if (word1.length > word2.length) {
    longestStr = word1;
  } else {
    longestStr = word2;
  }

  // then slice the additional characters and add them to mergedStr.
  let startingIdxOfAdditionalChars = longestLength - shortestLength;
  let slicedChars = longestStr.slice(-startingIdxOfAdditionalChars);
  mergedStr += slicedChars;
  return mergedStr;
};
