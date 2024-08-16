/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;

  return nums.map((element, index) => {
    sum += element;
    return (nums[index] = sum);
  });
};
