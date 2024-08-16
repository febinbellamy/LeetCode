/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let counter = 0;
  let newNum = num;

  while (newNum > 0) {
    // if its even
    if (newNum % 2 === 0) {
      newNum = newNum / 2;
      counter++;
    }

    // if its odd
    if (newNum % 2 !== 0) {
      newNum -= 1;
      counter++;
    }
  }

  return counter;
};
