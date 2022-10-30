/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  const smallerNum = Math.min(a, b);
  const largerNum = Math.max(a, b);
  let counter = 0;

  for (let i = 0; i <= smallerNum; i++) {
    if (smallerNum % i === 0 && largerNum % i === 0) {
      counter++;
    }
  }
  return counter;
};
