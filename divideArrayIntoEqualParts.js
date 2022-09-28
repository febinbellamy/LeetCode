/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  // nums is an integer array with 2 * N integers

  // TO DO
  // divide nums into N pairs so that each elem belongs to exactly 1 pair
  // the elements present in a pair are equal.

  let temp = [];
  let pairs = [];
  let finalArr = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];

    // if temp array doesn't include the currentNum, push it in.
    if (!temp.includes(currentNumber)) {
      temp.push(currentNumber);

      // if it DOES include the current num, take it & the current num and add them to a seperate array, then push that array into final arr.
    } else {
      let indexOfNum = temp.indexOf(currentNumber);
      pairs.push(currentNumber, temp[indexOfNum]);
      finalArr.push(pairs);
      temp.splice(indexOfNum, 1);
      pairs = [];
    }
  }

  // return true if nums can be divided into N pairs,
  // if not return false

  if (finalArr.length === nums.length / 2) {
    return true;
  } else {
    return false;
  }
};
