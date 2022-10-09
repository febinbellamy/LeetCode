/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let smallestNum = Math.min(...nums);
  let largestNum = Math.max(...nums);

  let greatestDivisors = [];

  for (let i = 0; i <= smallestNum; i++) {
    if (smallestNum % i === 0 && largestNum % i === 0) {
      greatestDivisors.push(i);
    }
  }

  return Math.max(...greatestDivisors);
};
