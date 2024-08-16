/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    let greaterElems = nums.filter((num) => num > currentNum);

    if (greaterElems.length > 0) {
      let smallerElems = nums.filter((num) => num < currentNum);

      if (smallerElems.length > 0) {
        count++;
      }
    }
  }

  return count;
};
