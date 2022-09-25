/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  // if the largest element in the array --> Math.max(..nums) is atleast 2x larger than every other num in array
  // return the index of the largest element. else, return -1;

  // find the OG max value
  let maxNum = Math.max(...nums);
  let indexOfMaxNum = nums.indexOf(maxNum);

  nums.splice(indexOfMaxNum, 1);

  // find new max value, see if its 2x less than the OG max. If so, return true. Else, false;
  let newMaxNum = Math.max(...nums);

  if (maxNum >= newMaxNum * 2) {
    return indexOfMaxNum;
  }
  return -1;
};
