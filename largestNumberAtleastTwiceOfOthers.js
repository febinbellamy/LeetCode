/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxNum = Math.max(...nums);
  let indexOfMaxNum = nums.indexOf(maxNum);

  nums.splice(indexOfMaxNum, 1);

  let newMaxNum = Math.max(...nums);

  if (maxNum >= newMaxNum * 2) {
    return indexOfMaxNum;
  }
  return -1;
};
