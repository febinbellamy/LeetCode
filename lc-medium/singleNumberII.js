/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (nums.lastIndexOf(currentNum) === nums.indexOf(currentNum)) {
      return currentNum;
    }
  }
};
