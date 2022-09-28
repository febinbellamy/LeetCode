/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let counter = 0;
  let copiedArr = heights.slice(0);
  let expected = heights.sort((a, b) => a - b);

  for (let i = 0; i < copiedArr.length; i++) {
    if (copiedArr[i] !== expected[i]) {
      counter++;
    }
  }

  return counter;
};
