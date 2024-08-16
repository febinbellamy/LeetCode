/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  // nums is an array of integers
  // for each elem, find out how many other elems are smaller than it.
  // return new array of the number of elements smaller than each element in original array

  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    let smallestNums = nums.filter((num) => num < currentNum);
    newArr.push(smallestNums.length);
  }

  return newArr;
};
