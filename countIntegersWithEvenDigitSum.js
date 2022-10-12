/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  // num is an integer
  let counter = 0;

  for (let i = 1; i <= num; i++) {
    // if the num is even and less than 10,
    if (i < 10 && i % 2 === 0) {
      counter++;
    } else if (i >= 10) {
      // if the num is greater than or equal to 10, add up the digits.
      let sumOfDigits = String(i)
        .split("")
        .reduce((a, c) => +a + +c);

      // If the sum is even, add 1 to counter.
      if (sumOfDigits % 2 === 0) {
        counter++;
      }
    }
  }

  return counter;
};
