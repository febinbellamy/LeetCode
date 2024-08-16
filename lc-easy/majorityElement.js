/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const frequencyObj = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    if (frequencyObj[currentNum]) {
      frequencyObj[currentNum]++;
    } else {
      frequencyObj[currentNum] = 1;
    }
  }

  const targetNum = nums.length / 2;

  // check if any of the values are greater than targetNum. If so, return its key.
  const objectKeys = Object.keys(frequencyObj);
  const objectValues = Object.values(frequencyObj);
  const newValArray = objectValues.filter((num) => num > targetNum);

  return objectKeys.find((key) => frequencyObj[key] === newValArray[0]);
};
