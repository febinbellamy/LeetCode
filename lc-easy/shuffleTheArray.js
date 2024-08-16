/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let slicedArrayOdds = nums.slice(n);
  let slicedArrayEvens = nums.slice(0, n);

  let evenIndx = 0;
  let oddIndx = 0;
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      newArr.push(slicedArrayEvens[evenIndx]);
      evenIndx++;
    } else {
      newArr.push(slicedArrayOdds[oddIndx]);
      oddIndx++;
    }
  }
  return newArr;
};


