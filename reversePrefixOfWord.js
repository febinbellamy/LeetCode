/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let strArr = word.split("");
  let firstIndexOfCh = strArr.indexOf(ch);

  //edge case
  if (!firstIndexOfCh) return word;

  let elementsReversed = strArr.slice(0, firstIndexOfCh + 1).reverse();
  let restOfArray = strArr.slice(firstIndexOfCh + 1);
  return [...elementsReversed, ...restOfArray].join("");
};
