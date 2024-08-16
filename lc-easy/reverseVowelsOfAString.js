/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arrOfStrings = s.split("");
  let arrOfVowels = [];
  let vowels = "aeiouAEIOU";

  for (let i = arrOfStrings.length - 1; i >= 0; i--) {
    if (vowels.includes(arrOfStrings[i])) {
      arrOfVowels.push(arrOfStrings[i]);
      arrOfStrings[i] = "";
    }
  }

  for (let j = 0; j < arrOfVowels.length; j++) {
    let indexOfNextEmptyStr = arrOfStrings.indexOf("");
    arrOfStrings[indexOfNextEmptyStr] = arrOfVowels[j];
  }
  return arrOfStrings.join("");
};
