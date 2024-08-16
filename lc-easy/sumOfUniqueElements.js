/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  // filter the unique elements

  let filteredArray = nums.filter(
    (num) => nums.indexOf(num) === nums.lastIndexOf(num)
  );

  if (filteredArray.length === 0) return 0;

  let sum = filteredArray.reduce((a, b) => a + b);

  return sum;
};
