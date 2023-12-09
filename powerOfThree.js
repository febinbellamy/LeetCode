/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n, currentPower = 0) {
  currentProduct = 3 ** currentPower;
  if (currentProduct > n) return false;
  if (currentProduct === n) return true;
  return isPowerOfThree(n, currentPower + 1);
};
