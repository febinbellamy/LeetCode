/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 0;
  let r = n - 1;

  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    let res = guess(middle);
    if (res === 0) return middle;
    else if (res === 1) {
      l = middle + 1;
    } else {
      r = middle - 1;
    }
  }
  return l;
};
