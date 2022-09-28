/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  // s is a string
  // letter is a character

  // return the % of chars in s that are === letter
  // round down!

  let filteredArr = s.split("").filter((char) => char === letter);

  let percentage = Math.floor((filteredArr.length / s.length) * 100);

  return percentage;
};
