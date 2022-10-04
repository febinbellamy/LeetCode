/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  // num is a positive integer consisting only of digits 6 and 9
  // i.e.  9969 // 9996

  let numArr = String(num).split(""); // ['9', '9', '6', '9'];
  let newNums = [num];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === "9") {
      numArr[i] = "6";
      newNums.push(Number(numArr.join("")));
      numArr[i] = "9";
    } else if (numArr[i] === "6") {
      numArr[i] = "9";
      newNums.push(Number(numArr.join("")));
      numArr[i] = "6";
    }
  }
  return Math.max(...newNums);
};
