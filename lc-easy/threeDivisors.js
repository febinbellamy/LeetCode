/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let divisorCounter = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      divisorCounter++;
    }
  }
  return divisorCounter === 3 ? true : false;
};
