/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  let distinctStringNum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentStringElem = arr[i];
    if (arr.indexOf(currentStringElem) === arr.lastIndexOf(currentStringElem)) {
      distinctStringNum++;
    }
    if (distinctStringNum === k) {
      return currentStringElem;
    }
  }
  return "";
};
