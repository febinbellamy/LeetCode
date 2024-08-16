/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let countEvenNums = 0;

  //     for (let i = 0; i < nums.length; i++) {
  //         let currentNum = nums[i];

  //         if (String(currentNum).length % 2 === 0) {
  //             countEvenNums++;
  //         }
  //     }

  nums.forEach((num) =>
    String(num).length % 2 === 0 ? countEvenNums++ : null
  );

  return countEvenNums;
};
