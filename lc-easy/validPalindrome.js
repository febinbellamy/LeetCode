/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let alphabetAndNums = "abcdefghiklmnopqrstuvwxyz0123456789";

  if (!(1 < s.length || s.length <= 200000)) return false;

  let stringArray = s.split("");

  let filteredArrayOfLetters = stringArray
    .map((char) => char.toLowerCase())
    .filter((character) => {
      return alphabetAndNums.indexOf(character) > -1;
    });

  let str = filteredArrayOfLetters.join("");

  let reversedStr = filteredArrayOfLetters.reverse().join("");

  return str == reversedStr ? true : false;
};
