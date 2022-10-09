/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (temp.includes(currentChar)) {
      return currentChar;
    }

    temp += currentChar;
  }
};
