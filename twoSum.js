/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const visited = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    if (!(currentNum in visited)) {
      visited[currentNum] = i;
      let difference = target - currentNum;
      if (difference in visited && visited[difference] !== i) {
        return [i, visited[difference]];
      }
    } else if (target === currentNum * 2) {
      return [i, visited[currentNum]];
    }
  }
  return [];
};
