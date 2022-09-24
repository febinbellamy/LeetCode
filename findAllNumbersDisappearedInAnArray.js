/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let arrOfMissingNums = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      arrOfMissingNums.push(i);
    }
  }
  return arrOfMissingNums;
};
