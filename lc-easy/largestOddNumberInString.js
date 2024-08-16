/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  const splitStr = num.split("");
  const filteredArr = splitStr.filter((num) => +num % 2 !== 0);
  if (filteredArr.length === 0) return "";
  const lastOddNumInArray = filteredArr[filteredArr.length - 1];
  const indexOfLastOddNum = splitStr.lastIndexOf(lastOddNumInArray);
  return splitStr.slice(0, indexOfLastOddNum + 1).join("");
};
