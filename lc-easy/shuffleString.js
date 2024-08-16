/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  // s is a string of length x
  // indices is an array of integers of length x, same length as the string
  let newArr = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    let indexNum = indices[i];
    newArr[indexNum] = currentChar;
  }

  return newArr.join("");
};
