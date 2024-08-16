/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  const sArray = s.split("");
  let counter = 0;

  while (counter < sArray.length) {
    sArray.push(sArray.shift());
    if (sArray.join("") === goal) return true;
    counter++;
  }
  return false;
};
