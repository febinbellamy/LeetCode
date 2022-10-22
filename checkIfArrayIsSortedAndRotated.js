/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let newArr = [...nums];
  let sortedArr = nums.sort((a, b) => a - b);
  let rotations = 0;
  let slicedArr;
  let poppedVal;

  while (rotations < newArr.length) {
    slicedArr = newArr.slice(0, newArr.length - 1);
    poppedVal = newArr.pop();
    newArr = [poppedVal, ...slicedArr];
    if (newArr.join(" ") === sortedArr.join(" ")) return true;
    rotations++;
  }
  return false;
};
