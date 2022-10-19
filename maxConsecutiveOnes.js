/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let temp = "";
  const consecutiveOnes = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];

    if (currentNumber === 1) {
      temp += currentNumber;
      if (i === nums.length - 1) {
        consecutiveOnes.push(temp.length);
      }
    } else {
      if (temp) {
        consecutiveOnes.push(temp.length);
        temp = "";
      }
    }
  }

  if (consecutiveOnes.length === 0) return 0;
  return Math.max(...consecutiveOnes);
};
