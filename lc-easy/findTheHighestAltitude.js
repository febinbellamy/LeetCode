/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const altitudeArray = [0];

  for (let i = 0; i < gain.length; i++) {
    let currentNum = gain[i];
    let sum = altitudeArray[i] + currentNum;

    altitudeArray.push(sum);
  }
  return Math.max(...altitudeArray);
};
