/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 0 || x > 2147483647) return 0;

  for (let i = 0; i <= x; i++) {
    let currentNum = i;
    let nextNum = i + 1;
    if (currentNum * currentNum === x) {
      return currentNum;
    } else if (currentNum * currentNum < x && nextNum * nextNum > x) {
      return currentNum;
    }
  }
};
