/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let sortedArr = nums.sort((a, b) => b - a);
  return (
    sortedArr[0] * sortedArr[1] -
    sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2]
  );
};
