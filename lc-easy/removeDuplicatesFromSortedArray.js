/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let lastElem;
  for (let i = 0; i < nums.length; i++) {
    let currentElem = nums[i];
    if (lastElem === currentElem) {
      nums.splice(i, 1);
      i--;
    } else {
      lastElem = currentElem;
    }
  }
  return nums.length;
};
