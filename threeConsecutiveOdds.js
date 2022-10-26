/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let countOdds = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum % 2 !== 0) {
      countOdds++;
    } else {
      countOdds = 0;
    }
    if (countOdds === 3) {
      return true;
    }
  }

  return false;
};
