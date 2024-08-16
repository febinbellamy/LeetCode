/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let indexPointerOne = 0;
  let indexPointerTwo = k - 1;
  let sumsArr = [];
  let beginningNum = nums[indexPointerOne];
  let endNum = nums[indexPointerTwo];
  let sum;

  if (nums.length === 1) return nums[0];

  while (indexPointerTwo !== nums.length) {
    beginningNum = nums[indexPointerOne];
    endNum = nums[indexPointerTwo];

    sum = nums
      .slice(indexPointerOne, indexPointerTwo + 1)
      .reduce((a, c) => a + c, 0);

    sumsArr.push(sum);

    indexPointerOne++;
    indexPointerTwo++;
  }

  return Math.max(...sumsArr) / k;
};
