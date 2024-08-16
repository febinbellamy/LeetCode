/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let temp = "";
  const longestSubStrings = [];

  for (let i = 0; i < num.length; i++) {
    let currentchar = num[i];

    if (i === 0) {
      temp += currentchar;
    } else if (temp.includes(currentchar)) {
      temp += currentchar;
      if (temp.length === 3) {
        longestSubStrings.push(temp);
        temp = "";
      }
    } else {
      temp = currentchar;
    }
  }
  if (longestSubStrings.length === 0) return "";
  let finalNums = longestSubStrings.sort((a, b) => +b - +a);
  return finalNums[0];
};
