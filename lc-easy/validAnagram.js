/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //edge case
  if (s.length !== t.length) {
    return false;
  }

  let sortedSArray = s.toLowerCase().split("").sort();
  let sortedTArray = t.toLowerCase().split("").sort();

  for (let i = 0; i < sortedTArray.length; i++) {
    if (sortedSArray[i] !== sortedTArray[i]) {
      return false;
    }
  }
  return true;
};
