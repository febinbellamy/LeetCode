/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  const sortedEvenIndexNums = nums
    .filter((num, index) => index % 2 === 0)
    .sort((a, b) => a - b);
  const sortedOddIndexNums = nums
    .filter((num, index) => index % 2 !== 0)
    .sort((a, b) => b - a);

  const finalArr = [];
  let indxOfOddArr = 0;
  let indxOfEvenArr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      finalArr.push(sortedEvenIndexNums[indxOfEvenArr]);
      indxOfEvenArr++;
    } else {
      finalArr.push(sortedOddIndexNums[indxOfOddArr]);
      indxOfOddArr++;
    }
  }

  return finalArr;
};
