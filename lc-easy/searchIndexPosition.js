/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let indexOfTarget = nums.indexOf(target);

  if (indexOfTarget > -1) {
    return indexOfTarget;
  }

  let numsLessThanTarget = nums.filter((num) => num < target);

  return numsLessThanTarget.length;
};
