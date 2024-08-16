/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const finalArray = [];
  const s1Array = s1.split(" ");
  const s2Array = s2.split(" ");

  for (let i = 0; i < s1Array.length; i++) {
    let currentWord = s1Array[i];

    if (
      s1Array.indexOf(currentWord) === s1Array.lastIndexOf(currentWord) &&
      s2Array.indexOf(currentWord) < 0
    ) {
      finalArray.push(currentWord);
    }
  }

  for (let j = 0; j < s2Array.length; j++) {
    let currentWord = s2Array[j];
    if (
      s2Array.indexOf(currentWord) === s2Array.lastIndexOf(currentWord) &&
      s1Array.indexOf(currentWord) < 0
    ) {
      finalArray.push(currentWord);
    }
  }

  return finalArray;
};
