/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 1) return 1;

  let counterArr = [];

  let counter = 1;

  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];
    let prevNum = nums[i - 1];

    if (currentNum > prevNum) {
      counter++;
    } else {
      counterArr.push(counter);
      counter = 1;
    }
  }
  counterArr.push(counter);
  return Math.max(...counterArr);
};
