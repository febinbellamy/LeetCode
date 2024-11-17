/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const numsAndOccurences = {};
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (numsAndOccurences.hasOwnProperty(currentNum)) {
      numsAndOccurences[currentNum]++;
    } else {
      numsAndOccurences[currentNum] = 1;
    }
  }
  const values = Object.values(numsAndOccurences);
  const freqObj = {};
  for (let j = 0; j < values.length; j++) {
    let currentNum = values[j];
    if (freqObj.hasOwnProperty(currentNum)) {
      return false;
    } else {
      freqObj[currentNum] = 1;
    }
  }

  return true;
};
