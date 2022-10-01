/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lettersWIthAnUpperNLower = "";

  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];

    // if currentletter IS lowercase, and there IS an uppercased version of it in the string,
    if (
      alphabet.includes(currentLetter) &&
      s.includes(currentLetter.toUpperCase()) &&
      lettersWIthAnUpperNLower.indexOf(currentLetter) < 0
    ) {
      lettersWIthAnUpperNLower += currentLetter;
    }
  }

  // if the string is empty, return it.
  if (lettersWIthAnUpperNLower === "") return "";

  // find the letter with the highest index in alphabet and return it .toUpperCase()
  let splitLetterArr = lettersWIthAnUpperNLower.split("");
  splitLetterArr.forEach(
    (char, i) => (splitLetterArr[i] = alphabet.indexOf(char))
  );
  return alphabet[Math.max(...splitLetterArr)].toUpperCase();
};
