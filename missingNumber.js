/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let index = 0;

  while (index < nums.length) {
    if (!nums.includes(index)) {
      return index;
    }
    index++;
  }
  if (!nums.includes(nums.length)) {
    return nums.length;
  }
};
