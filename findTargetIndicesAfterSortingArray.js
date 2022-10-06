/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let sortedArr = nums.sort((a, b) => a - b);
  let finalArr = [];

  sortedArr.map((num, index) => (num === target ? finalArr.push(index) : null));

  return finalArr;

  //     for (let i = 0; i < sortedArr.length; i++) {
  //         let num = sortedArr[i];
  //         if (num === target) {
  //             finalArr.push(i)
  //         }
  //     }
  //     return finalArr;
};
