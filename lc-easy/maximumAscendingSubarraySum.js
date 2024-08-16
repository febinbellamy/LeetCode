/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {

  const subArraySums = [];
  let sum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let prevNum = nums[i - 1];

    if (currentNum > prevNum) {
      sum += currentNum;
    } else if (currentNum <= prevNum) {
      subArraySums.push(sum);
      sum = currentNum;
    }
    if (i === nums.length - 1) {
      subArraySums.push(sum);
    }
  }
  return Math.max(...subArraySums);
};
