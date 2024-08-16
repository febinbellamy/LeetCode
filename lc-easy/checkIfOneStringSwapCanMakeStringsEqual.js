/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;

  let str1Arr = s1.split("");
  let str2Arr = s2.split("");

  let firstIndexS1;
  let tempValueS1;

  let firstIndexS2;
  let tempValueS2;

  for (let i = 0; i < str1Arr.length; i++) {
    let currentStr1Char = str1Arr[i];
    let currentStr2Char = str2Arr[i];

    if (
      currentStr1Char !== currentStr2Char &&
      typeof firstIndexS1 === "undefined"
    ) {
      firstIndexS1 = i;
      tempValueS1 = currentStr1Char;
    } else if (
      currentStr1Char !== currentStr2Char &&
      typeof firstIndexS1 === "number"
    ) {
      str1Arr[firstIndexS1] = currentStr1Char;
      str1Arr[i] = tempValueS1;
      if (str1Arr.join("") === s2) {
        return true;
      } else {
        break;
      }
    }
  }

  for (let j = 0; j < str2Arr.length; j++) {
    let currentStr1Char = str1Arr[j];
    let currentStr2Char = str2Arr[j];

    if (
      currentStr2Char !== currentStr1Char &&
      typeof firstIndexS2 === "undefined"
    ) {
      firstIndexS2 = j;
      tempValueS2 = currentStr2Char;
    } else if (
      currentStr1Char !== currentStr2Char &&
      typeof firstIndexS2 === "number"
    ) {
      str2Arr[firstIndexS2] = currentStr2Char;
      str2Arr[j] = tempValueS2;
      if (str2Arr.join("") === s1) {
        return true;
      } else {
        return false;
      }
    }
  }

  if (str2Arr.join("") !== str1Arr.join("")) return false;
};
