/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let strNum = String(x);

  let reversedStrArray = strNum.split("").reverse();

  if (reversedStrArray[0] === "0") {
    reversedStrArray.shift();
  }
  if (reversedStrArray[reversedStrArray.length - 1] === "-") {
    let poppedVal = reversedStrArray.pop();
    reversedStrArray.unshift(poppedVal);
  }

  let finalNum = Number(reversedStrArray.join(""));

  if (finalNum > 2147483647) {
    return 0;
  } else if (finalNum < -2147483648) {
    return 0;
  } else {
    return finalNum;
  }
};
