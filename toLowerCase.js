/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let finalArr = s.split("").map((character) => {
    return upperCaseAlphabet.includes(character)
      ? character.toLowerCase()
      : character;
  });

  return finalArr.join("");
};
