/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  const numsAndAbsoluteValues = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    if (!numsAndAbsoluteValues[currentNum]) {
      numsAndAbsoluteValues[currentNum] = Math.abs(currentNum);
    }
  }

  const objectValues = Object.values(numsAndAbsoluteValues);
  const smallestAbsValue = Math.min(...objectValues);
  const objectKeys = Object.keys(numsAndAbsoluteValues);

  return objectKeys.find(
    (key) => numsAndAbsoluteValues[key] === smallestAbsValue
  );
};
