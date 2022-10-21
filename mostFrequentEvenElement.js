/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const frequencyObj = {};
  const evenNums = nums.filter((num) => num % 2 === 0);

  if (evenNums.length === 0) return -1;
  if (evenNums.length === 1) return evenNums[0];

  for (let i = 0; i < evenNums.length; i++) {
    let evenNum = evenNums[i];

    if (!frequencyObj[evenNum]) {
      frequencyObj[evenNum] = 1;
    } else {
      frequencyObj[evenNum] += 1;
    }
  }

  const mostFrequent = Math.max(...Object.values(frequencyObj));
  const filteredKeys = Object.keys(frequencyObj).filter(
    (key) => frequencyObj[key] === mostFrequent
  );

  return Math.min(...filteredKeys);
};
