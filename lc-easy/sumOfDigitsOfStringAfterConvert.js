/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const transform1 = s.split("").map((char) => alphabet.indexOf(char) + 1);
  let sum = transform1
    .join("")
    .split("")
    .reduce((a, c) => +a + +c);
  let newSum = sum;
  let counter = 1;

  while (counter < k) {
    let temp = newSum;
    if (String(temp).length === 1) {
      return temp;
    }
    newSum = String(temp)
      .split("")
      .reduce((a, c) => +a + +c);
    counter++;
  }
  return newSum;
};
