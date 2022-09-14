/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let counterObj = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (counterObj[currentNum]) {
      counterObj[currentNum] += 1;
    } else {
      counterObj[currentNum] = 1;
    }
  }
  return Object.keys(counterObj).find((e) => counterObj[e] === 1);
};
