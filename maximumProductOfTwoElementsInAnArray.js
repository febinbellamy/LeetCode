/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // nums is an array of unsorted integers
  let sortedArray = nums.sort((a, b) => b - a);
  return (sortedArray[0] - 1) * (sortedArray[1] - 1);
};
