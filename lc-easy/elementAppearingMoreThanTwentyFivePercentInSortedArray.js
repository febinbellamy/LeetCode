/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const frequencyCounter = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (!frequencyCounter[currentNum]) {
      frequencyCounter[currentNum] = 1;
    } else {
      frequencyCounter[currentNum]++;
    }
  }

  for (let key in frequencyCounter) {
    let value = frequencyCounter[key];
    if (value > Math.floor(arr.length * 0.25)) {
      return key;
    }
  }
};
