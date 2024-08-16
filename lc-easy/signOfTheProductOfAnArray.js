/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let product = nums.reduce((a, c) => a * c);

  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
};
