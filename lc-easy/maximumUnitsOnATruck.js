/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let capacity = 0;
  let sortedTwoDArray = boxTypes.sort((a, b) => b[1] - a[1]);
  let totalNumOfUnits = 0;

  for (let i = 0; i < sortedTwoDArray.length; i++) {
    let numOfBoxes = sortedTwoDArray[i][0];
    let numOfUnits = sortedTwoDArray[i][1];

    if (i === 0) {
      capacity += numOfBoxes;

      if (capacity <= truckSize) {
        totalNumOfUnits += numOfBoxes * numOfUnits;
      } else {
        let remainingSpace = truckSize - capacity;
        totalNumOfUnits += remainingSpace * numOfUnits;
        capacity += remainingSpace;
      }
    } else {
      if (capacity + numOfBoxes < truckSize) {
        totalNumOfUnits += numOfBoxes * numOfUnits;
        capacity += numOfBoxes;
      } else {
        let remainingSpace = truckSize - capacity;
        totalNumOfUnits += remainingSpace * numOfUnits;
        capacity += remainingSpace;
      }
    }
  }

  return totalNumOfUnits;
};
