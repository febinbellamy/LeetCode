/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let strNum = String(n);
  let sum = 0;
  let product = 1;

  for (let i = 0; i < strNum.length; i++) {
    sum += Number(strNum[i]);
    product *= Number(strNum[i]);
  }
  return product - sum;
};
