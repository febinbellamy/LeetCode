/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolsAndValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const symbolsSubtract = ["IV", "IX", "XL", "XC", "CD", "CM"];
  let total = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let currentLetter = s[i];
    let nextLetter = s[i - 1];
    total += symbolsAndValues[currentLetter];
    if (symbolsSubtract.includes(nextLetter + currentLetter)) {
      total -= symbolsAndValues[nextLetter];
      i--;
    }
  }
  return total;
};
