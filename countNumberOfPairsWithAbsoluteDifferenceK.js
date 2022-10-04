/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  // nums is an array of integers // --->  [1,2,2,1]
  // k is an integer, it's the target difference

  // find 2 elements, i and j, where Math.abs(i - j) === k
  // 2 - 4 === 2
  // return the number of pairs that meet this condition ^

  let numOfPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    let filteredJs = nums.filter(
      (j) => j > currentNum && Math.abs(currentNum - j) === k
    );
    numOfPairs += filteredJs.length;
  }
  return numOfPairs;
};
