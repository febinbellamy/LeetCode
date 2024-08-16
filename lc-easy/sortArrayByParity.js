/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let evenIntegers = nums.filter((num) => num % 2 === 0);
  let oddIntegers = nums.filter((num) => num % 2 !== 0);

  return [...evenIntegers, ...oddIntegers];
};
